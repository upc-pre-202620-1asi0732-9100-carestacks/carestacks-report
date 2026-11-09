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
assert.equal(section(readme, '## Capítulo VIII:', '## Conclusiones'), section(sourceText(sources['chapter-8']), '## Capítulo VIII:', '## Conclusiones'), 'Chapter VIII changed');
assert.equal(section(readme, '### 7.4. Continuous Monitoring', '# Part III:'), section(sourceText(sources['chapter-7']), '### 7.4. Continuous Monitoring', '# Part III:'), 'Monitoring changed');
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
const results = {
  date: '2026-11-08', technical_status: 'passed',
  delivery_status: 'incomplete_evidence_see_verification_md',
  scope: 'report integration and documentary consistency; no experiment execution or production load test',
  base, tested_merge_head: git('rev-parse', mergeHead), main_unchanged: main, sources,
  integrated_input_branches: Object.keys(sources).length, conflicts: 0,
  local_links_checked: links, broken_local_links: missing.length,
  numbered_sections: numbered.length, numbered_figures: figures.length,
  preserved_evidence_files: preserved,
  chapter_viii_preserved: true, monitoring_preserved: true,
  develop_conclusions_preserved: true, chapters_i_iii_preserved: true,
  question_scores: scores, calculations,
  sha256_readme: createHash('sha256').update(readme).digest('hex'),
};
await writeFile(output, JSON.stringify(results, null, 2) + '\n');
await access(output);
console.log(JSON.stringify({
  technical_status: results.technical_status, delivery_status: results.delivery_status,
  branches: 8, links, broken_links: missing.length, evidence_files: preserved.length,
  figures: figures.length, chapter_viii_preserved: true, main_unchanged: main,
}, null, 2));
