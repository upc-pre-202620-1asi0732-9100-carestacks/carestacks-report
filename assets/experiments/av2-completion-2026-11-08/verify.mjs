import assert from 'node:assert/strict';
import { readFile, writeFile, access } from 'node:fs/promises';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const folder = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(folder, '../../..');
const output = path.join(folder, 'document-checks.json');
const args = process.argv.slice(2);
assert(args.includes('--marked') && args.includes('--python'), 'Use --marked <marked.esm.js> --python <python>');
const option = name => args[args.indexOf(name) + 1];
const { marked } = await import(pathToFileURL(path.resolve(option('--marked'))).href);
const git = (...args) => execFileSync('git', args, { cwd: repo, encoding: 'utf8' }).trim();
const normalize = value => value.replaceAll('\r\n', '\n');
const sourceText = commit => normalize(execFileSync('git', ['show', commit + ':README.md'], { cwd: repo, encoding: 'utf8' }));
const readme = normalize(await readFile(path.join(repo, 'README.md'), 'utf8'));
const base = 'e38959f20dd721d8e7f792311de99ec2c6c11eec';
const mergeHead = '49b972a';
const main = '8a4848f0a5eb99cda3b5bd263f08e82bea1d2898';
const sources = {
  'chapter-1': '8a336ce6f3af64a3e08d089e969bfacac62de264',
  'chapter-2': 'b5d9d6f3cc847ccf7720aa4e45793cc07beceed7',
  'chapter-3': '4d784d4018a9554cd4be285b5516652280ddabbf',
  'chapter-4': '1bad9405a82756f7239a4e4aabc5dc1041df0005',
  'chapter-5': '9c6d4315108640f9c666e800bb43bcd180baebba',
  'chapter-6': '1bae3678b232120b1355cce0c0147786a9ff3f94',
  'chapter-7': 'd567d3a6d20b6caede36b7eb4b8682dd25461a37',
  'chapter-8': '9d5568ec2fcb297e1be64d451ee494a63a8e5615',
};
assert.equal(git('branch', '--show-current'), 'develop');
assert.equal(git('rev-parse', 'main'), main);
assert.equal(git('rev-parse', 'origin/main'), main);
assert.equal(git('ls-files', '--unmerged'), '');
assert.equal(spawnSync('git', ['rev-parse', '-q', '--verify', 'MERGE_HEAD'], { cwd: repo }).status, 1);
for (const commit of [base, ...Object.values(sources)]) git('merge-base', '--is-ancestor', commit, 'HEAD');
assert(!/^(?:<<<<<<< |=======$|>>>>>>> )/m.test(readme), 'Conflict marker');

const section = (text, start, end) => {
  const parts = text.split('\n' + start);
  assert.equal(parts.length, 2, 'Expected one section: ' + start);
  assert(parts[1].includes('\n' + end), 'Missing section boundary: ' + end);
  return parts[1].split('\n' + end)[0].trim();
};
const withoutSprint = text => text.replace(/^(##### 8\.3\.3\.1\. To-Be Sprint Backlogs)\n[\s\S]*?(?=^##### 8\.3\.3\.2\.)/m, '$1\n\n');
assert.equal(section(withoutSprint(readme), '## Capítulo VIII:', '## Conclusiones'), section(sourceText(sources['chapter-8']), '## Capítulo VIII:', '## Conclusiones'), 'Chapter VIII changed');
const withoutSelection = text => text.replace(/\n##### 7\.4\.5\.1\. Selección de herramientas para el pipeline\n[\s\S]*?^##### 7\.4\.5\.2\. Mediciones del software frente a metas\n/m, '');
assert.equal(section(withoutSelection(readme), '### 7.4. Continuous Monitoring', '# Part III:'), section(sourceText(sources['chapter-7']), '### 7.4. Continuous Monitoring', '# Part III:'), 'Monitoring changed');
assert.equal(section(readme, '## Conclusiones', '## Bibliografía'), section(sourceText(base), '## Conclusiones', '## Bibliografía'), 'Develop AV2 conclusions replaced');
assert.equal(section(readme, '## Capítulo I:', '## Capítulo IV:'), section(sourceText(base), '## Capítulo I:', '## Capítulo IV:'), 'Chapters I–III changed');
for (const n of ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']) assert.equal([...readme.matchAll(new RegExp('^## Capítulo ' + n + ':', 'gm'))].length, 1);
const numbered = [...readme.matchAll(/^#{3,6} (\d+(?:\.\d+)+)\. /gm)].map(m => m[1]);
assert.equal(numbered.length, new Set(numbered).size, 'Duplicate numbered section');

// Compare every evidence file brought by the merge with its original input blob.
const assetPaths = git('diff', '--name-only', base, mergeHead, '--', 'assets').split('\n').filter(Boolean);
const tree = commit => new Map(git('ls-tree', '-r', commit, '--', 'assets').split('\n').filter(Boolean).map(line => {
  const [metadata, file] = line.split('\t');
  return [file, metadata.split(' ')[2]];
}));
const mergeTree = tree(mergeHead);
const inputTrees = Object.entries(sources).map(([name, commit]) => [name, tree(commit)]);
const workingBlobs = git('hash-object', '--', ...assetPaths).split('\n');
const preserved = [];
for (const [index, file] of assetPaths.entries()) {
  const blob = mergeTree.get(file);
  assert.equal(workingBlobs[index], blob, 'Modified evidence: ' + file);
  const origin = inputTrees.find(([, files]) => files.get(file) === blob);
  assert(origin, 'Evidence not traceable to an input branch: ' + file);
  preserved.push({ file, blob, source: origin[0] });
}

const slug = value => value.toLowerCase().replace(/<[^>]*>/g, '').replace(/[^\p{L}\p{N}_\- ]/gu, '').replaceAll(' ', '-');
const anchorCache = new Map();
async function anchors(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const content = normalize(await readFile(file, 'utf8'));
  const ids = new Set();
  const counts = new Map();
  marked.walkTokens(marked.lexer(content), token => {
    if (token.type !== 'heading') return;
    const original = slug(marked.parseInline(token.text).replace(/<[^>]*>/g, '').replaceAll('&amp;', '&'));
    const n = counts.get(original) ?? 0;
    counts.set(original, n + 1);
    ids.add(original + (n ? '-' + n : ''));
  });
  for (const [, id] of content.matchAll(/\b(?:id|name)=["']([^"']+)["']/g)) ids.add(id);
  anchorCache.set(file, ids);
  return ids;
}
const files = [
  'README.md',
  'assets/experiments/av2-d-2026-10-24/verification.md',
  'assets/experiments/av2-consolidation-2026-11-07/verification.md',
  'assets/testing/landing-links-2026-11-07/verification.md',
  'assets/deployment/av2-landing-2026-11-07/verification.md',
  'assets/integration/av2-2026-11-08/verification.md',
  'assets/experiments/av2-completion-2026-11-08/verification.md',
  'assets/testing/av2-local-2026-11-08/verification.md',
];
let links = 0;
const missing = [];
for (const relative of files) {
  const source = path.join(repo, relative);
  const content = normalize(await readFile(source, 'utf8'));
  const targets = [];
  marked.walkTokens(marked.lexer(content), token => {
    if (token.type === 'link' || token.type === 'image') targets.push(token.href);
    if (token.type === 'html') for (const [, target] of token.text.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) targets.push(target);
  });
  for (const target of targets) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target)) continue;
    const hash = target.indexOf('#');
    const filePart = (hash < 0 ? target : target.slice(0, hash)).split('?')[0];
    const fragment = hash < 0 ? '' : decodeURIComponent(target.slice(hash + 1));
    const resolved = filePart ? path.resolve(path.dirname(source), decodeURIComponent(filePart)) : source;
    try {
      if (resolved !== output) await access(resolved);
      if (fragment && /\.md$/i.test(resolved)) assert((await anchors(resolved)).has(fragment), 'Missing anchor #' + fragment);
    } catch (error) { missing.push({ source: relative, target, error: error.message }); }
    links++;
  }
}
assert.deepEqual(missing, [], 'Broken local links');
const figures = [...readme.matchAll(/^\*Figura (\d+)\./gm)].map(m => Number(m[1]));
assert.deepEqual(figures, Array.from({ length: figures.length }, (_, i) => i + 1), 'Figure numbering');
const backlog = section(readme, '#### 8.1.4. Question Backlog', '#### 8.1.5. Experiment Cards');
const scores = [...backlog.matchAll(/^\| \*\*ERQ-\d+\*\* \|.+$/gm)].map(([row]) => {
  const [cost, risk, impact, interest, score] = row.split('|').map(v => v.trim()).slice(3, 8).map(Number);
  assert.equal(Number((risk * impact * interest / cost).toFixed(1)), score);
  return score;
});
assert.deepEqual(scores, [62.5, 50, 32, 18, 12]);
const calculations = JSON.parse(execFileSync(option('--python'), [path.join(repo, 'assets/experiments/av2-consolidation-2026-11-07/calculate_scale.py')], { encoding: 'utf8' }));
assert.equal(calculations['EXP-01'].evaluable_per_arm, 138);
assert.equal(calculations['EXP-01'].recruit_per_arm, 163);
assert.equal(calculations['EXP-02'].evaluable_per_arm, 112);
assert.equal(calculations['EXP-02'].recruit_per_arm, 132);
assert.equal(calculations.total_distinct_circles_recruitment_target, 590);

const planning = JSON.parse(await readFile(path.join(folder, 'planning-tasks.json'), 'utf8'));
const expectedStories = ['TS-02','US-07','US-01','TS-01','US-02','US-05','US-03','US-04','US-06'];
assert.equal(planning.status, 'proposed_planning_not_execution');
assert.equal(planning.tasks.length, 37);
assert.deepEqual([...new Set(planning.tasks.map(t => t.story))].sort(), [...expectedStories].sort());
const seen = new Set();
const planningText = section(readme, '##### 8.3.3.1. To-Be Sprint Backlogs', '##### 8.3.3.2.');
for (const task of planning.tasks) {
  assert(!seen.has(task.id), 'Duplicate task ' + task.id);
  assert(task.hours >= 4 && task.hours <= 8 && Number.isInteger(task.hours));
  assert(planning.roles[task.owner_role] && task.task && task.acceptance);
  for (const dependency of task.depends_on) assert(seen.has(dependency), 'Invalid/cyclic dependency ' + task.id);
  assert(planningText.includes('| ' + task.id + ' | ' + task.story + ' | ' + task.owner_role + ' | ' + task.hours + ' |'), 'Missing task in report');
  seen.add(task.id);
}
for (const sprint of planning.sprints) {
  const tasks = planning.tasks.filter(t => t.id.startsWith(sprint.id));
  assert.equal(sprint.task_count, tasks.length);
  assert.equal(sprint.hours, tasks.reduce((n,t) => n + t.hours, 0));
  for (const role of Object.keys(planning.roles)) {
    const load = tasks.filter(t => t.owner_role === role).reduce((n,t) => n + t.hours, 0);
    assert.equal(sprint.role_hours[role], load);
    assert(load <= 40);
  }
}
assert.equal(planning.total_hours, 214);
assert.equal(planning.tasks.reduce((n,t) => n + t.hours,0),214);
const benchmark = section(readme, '##### 7.4.5.1. Selección de herramientas para el pipeline', '##### 7.4.5.2.');
const benchmarkTables = marked.lexer(benchmark).filter(t => t.type === 'table');
assert.equal(benchmarkTables.length, 4);
assert.deepEqual(benchmarkTables.map(t => t.rows.length),[3,2,2,3]);
assert(!/\b(TODO|TBD|FIXME)\b/.test(planningText + benchmark));
const local = JSON.parse(await readFile(path.join(repo, 'assets/testing/av2-local-2026-11-08/results.json'), 'utf8'));
assert.equal(local.backend.after.tests,26);
assert.equal(local.backend.after.failures + local.backend.after.errors,0);
assert.equal(local.kotlin.after.errors,0);
assert.equal(local.kotlin.after.warnings,46);
assert.equal(local.kotlin.unit_tests.failures + local.kotlin.unit_tests.errors,0);
const ci = JSON.parse(await readFile(path.join(repo, 'assets/testing/av2-local-2026-11-08/ci-status.json'), 'utf8'));
assert(ci.all_success && ci.records.length === 2);
for (const record of ci.records) {
  const expected = record.repository.endsWith('carestacks-backend-api') ? local.backend.fixed_commit : local.kotlin.fixed_commit;
  assert.equal(record.head, expected);
  assert(record.runs.length && record.runs.every(run => run.head_sha === expected && run.status === 'completed' && run.conclusion === 'success'));
}

const results = {
  date: '2026-11-08', technical_status: 'passed',
  delivery_status: 'incomplete_evidence_see_verification_md',
  scope: 'report integration and documentary consistency; no experiment execution or production load test',
  base, tested_merge_head: git('rev-parse', mergeHead), main_unchanged: main, sources,
  integrated_input_branches: Object.keys(sources).length, conflicts: 0,
  local_links_checked: links, broken_local_links: missing.length,
  numbered_sections: numbered.length, numbered_figures: figures.length,
  preserved_evidence_files: preserved,
  chapter_viii_preserved_except_declared_sprint_backlog: true, monitoring_preserved_except_declared_tool_comparison: true,
  planning: {tasks:37,hours:214,sprints:planning.sprints}, tool_comparison_tables:4,
  local_verification:local,
  ci_verification:ci,
  develop_conclusions_preserved: true, chapters_i_iii_preserved: true,
  question_scores: scores, calculations,
  sha256_readme: createHash('sha256').update(readme).digest('hex'),
};
await writeFile(output, JSON.stringify(results, null, 2) + '\n');
await access(output);
console.log(JSON.stringify({
  technical_status: results.technical_status, delivery_status: results.delivery_status,
  branches: 8, links, broken_links: missing.length, evidence_files: preserved.length,
  figures: figures.length, planning_tasks:37, planning_hours:214, tool_comparison_tables:4, main_unchanged:main,
}, null, 2));
