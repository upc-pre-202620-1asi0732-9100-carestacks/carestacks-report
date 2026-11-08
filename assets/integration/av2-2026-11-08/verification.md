# Integración AV2 en develop — 08/11/2026

**Seguimiento posterior.** Este registro conserva el estado encontrado durante el merge. La [revisión posterior con Sprint Backlog, benchmark y correcciones locales](../../experiments/av2-completion-2026-11-08/verification.md) actualiza qué hallazgos quedaron resueltos y cuáles continúan abiertos. Su verificador corresponde al estado histórico; para el contenido actual se utiliza el verificador enlazado en la revisión posterior.

Se integraron los aportes disponibles del informe en `develop`, por solicitud del equipo. Esta integración no modifica `main`, no despliega productos y no acredita por sí sola el cierre académico de AV2.

## Versiones integradas

| Rama remota consultada | Commit |
|---|---|
| develop, base de esta revisión | `e38959f20dd721d8e7f792311de99ec2c6c11eec` |
| chapter-1 | `8a336ce6f3af64a3e08d089e969bfacac62de264` |
| chapter-2 | `b5d9d6f3cc847ccf7720aa4e45793cc07beceed7` |
| chapter-3 | `4d784d4018a9554cd4be285b5516652280ddabbf` |
| chapter-4 | `1bad9405a82756f7239a4e4aabc5dc1041df0005` |
| chapter-5 | `9c6d4315108640f9c666e800bb43bcd180baebba` |
| chapter-6 | `1bae3678b232120b1355cce0c0147786a9ff3f94` |
| chapter-7 | `d567d3a6d20b6caede36b7eb4b8682dd25461a37` |
| chapter-8 | `9d5568ec2fcb297e1be64d451ee494a63a8e5615` |
| main, conservada | `8a4848f0a5eb99cda3b5bd263f08e82bea1d2898` |

Los capítulos I, II, III y V ya estaban incorporados. Los aportes nuevos de IV, VI, VII y VIII se integraron con commits de merge, conservando sus autores e historial. Se creó la referencia local `backup/develop-before-av2-2026-11-08` antes de actualizar la rama.

## Resolución de conflictos y correcciones

- Se conservaron la carátula, el Student Outcome y las conclusiones AV2 de `develop`; la conclusión antigua de TB1 que reaparecía desde `chapter-6` no sustituyó la actualización.
- En §7.4 se incorporó el contenido completo de `chapter-7` en lugar de los títulos vacíos anteriores.
- Se restituyeron los diagramas de **clases** de Documents e IAM. Los enlaces nuevos sin extensión no resolvían y apuntaban a nombres de diagramas de **base de datos**; estos últimos se conservaron en §4.10 con sus archivos PNG.
- Se retiró un comentario de plantilla ya resuelto y se actualizó el índice con el benchmark y las nuevas subsecciones de ética/accesibilidad.
- Se restituyó la estructura de auditoría recibida para reparar los enlaces del índice, indicando explícitamente que el informe externo no fue incorporado.
- Se corrigió el contacto de GitHub que apuntaba al repositorio privado de la landing. La dirección de correo aportada en el acuerdo se conserva, pero esta revisión no comprueba quién controla esa cuenta ni la publica como nuevo contacto de la landing.
- Se precisó que el selector ES/EN traduce la interfaz de la landing; el acuerdo enlazado está redactado en español.
- Se actualizó la referencia de lint/build de la landing con la evidencia ya registrada del 07/11/2026. Las evidencias de octubre conservan su fecha histórica.
- Se ajustó una afirmación grupal del Student Outcome sobre efectos en salud e inclusión para alinearla con las conclusiones: no se midieron esos efectos.
- El capítulo VIII se conservó íntegro respecto de `chapter-8`, incluidos los límites de planificación y las secciones todavía sin evidencia de ejecución.

## Vacíos de entrega encontrados

La revisión se contrastó con `upc-pre-202610-1asi0732-activity-s12-assignment-av2_v1.pdf` (páginas 1 y 4–5) y con el enunciado general (páginas impresas 42–43), desde las copias locales del curso. El resultado técnico del merge no constituye una calificación.

| Estado | Ubicación | Evidencia que falta o debe aclararse |
|---|---|---|
| No incorporada | [6.4.2](../../../README.md#642-auditoría-recibida) | Auditoría recibida: identificación del grupo, fechas, hallazgos y correcciones verificables. |
| No incorporado | [Anexo: Videos](../../../README.md#anexo-videos) | Enlace del video de exposición AV2. El anexo contiene AV1 y TB1. |
| Vacío | [8.3.3.1](../../../README.md#8331-to-be-sprint-backlogs) | Sprint Backlog To-Be: selección de historias, desglose en Engineering Tasks y estimación en horas. La rúbrica de la actividad lo exige expresamente; el Product Backlog de §8.3.2 no sustituye este artefacto. |
| Sin evidencia de ejecución | [8.3.3](../../../README.md#833-pipeline-supported-experiment-driven-to-be-software-platform-lifecycle), [8.4](../../../README.md#84-experiment-aftermath--analysis) y [8.5](../../../README.md#85-continuous-learning) | Implementación/ejecución de variantes, datos, análisis, repriorización y Shareback. Son objetivos de aprendizaje declarados en la página 1 de AV2; no pueden completarse inventando resultados a partir del diseño. |
| Revisión de cobertura | [6.3](../../../README.md#63-validation-interviews) | Las entrevistas se identifican como evidencia histórica reutilizada; faltan resultados individuales de tareas del As-Is y verificaciones actuales en varias filas. Debe aclararse qué versión se evaluó y completar la evidencia que sustente la validación del producto presentado. La fecha histórica por sí sola no invalida una entrevista. |
| Parcial frente a la rúbrica | [7.4.5](../../../README.md#745-benchmark) | Hay mediciones de carga, arranque y Lighthouse frente a metas. La rúbrica de DevOps pide además selección basada en un benchmark de **alternativas de herramientas** para los stages del pipeline; no se encontró esa comparación en el contenido integrado. |
| Confirmación del equipo | [5.2.8.16](../../../README.md#52816-contacto) | Confirmar el control de la cuenta de correo aportada. El canal GitHub funciona para consultas públicas técnicas; no acredita un canal privado de atención a usuarios. |
| Observación previa sin cierre registrado | [6.1.4](../../../README.md#614-core-system-tests) | About the Team de la landing todavía se describe como video de otro proyecto (ST-02). Es distinto del video de exposición AV2. ST-03 sigue sin evidencia del recorrido conjunto desplegado con el cliente de paciente. |
| Verificaciones técnicas sin acreditar | [6.2](../../../README.md#62-static-testing--verification) | Android Lint del cliente Kotlin no ejecutado; CORS y observaciones sobre autorización por defecto/consola H2 sin evidencia de cierre. Son estados declarados en el informe; esta integración no demuestra su configuración actual en producción. SonarCloud se propone como mejora, no se considera un artefacto obligatorio faltante. |

El bloque D (§8.1 y §8.2.1–8.2.3) está desarrollado con preguntas priorizadas, tarjetas, hipótesis, medidas y condiciones. Sus especificaciones no demuestran que los experimentos se hayan ejecutado. La escala, métodos, tracking e historias/backlog de los aportes posteriores también están incorporados.

Las secciones §8.3.4 y §8.6 permanecen en la estructura futura original; no se presentan como evidencia completada ni se usan como condición adicional de este merge.

## Verificación técnica

El [resultado automático](document-checks.json) y el [verificador reproducible](verify.mjs) cubren historial de ramas, conflictos, enlaces/anchors locales, conservación de archivos de evidencia, continuidad de las figuras, preservación del capítulo VIII y cálculos de muestra.

Para repetir las comprobaciones se requiere Node con acceso al paquete `marked` y Python 3. No se necesitan instalaciones ni servicios de producción:

```text
node assets/integration/av2-2026-11-08/verify.mjs --marked <ruta-a-marked.esm.js> --python <ruta-a-python>
```

Las comprobaciones locales no vuelven a ejecutar entrevistas, auditorías externas, experimentos ni pruebas de carga sobre producción. Este repositorio de informe no contiene un workflow de CI propio; la verificación ejecutada es documental.
