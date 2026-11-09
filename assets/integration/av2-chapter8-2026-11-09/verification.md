# Integración de los cuatro commits de chapter-8 — 09/11/2026

Se revisaron e integraron en `develop` los cuatro aportes de Emy127 posteriores a `9d5568e`. El merge `e3cfa54` conserva el historial de los cuatro commits y los aportes que ya estaban en el informe, incluida la auditoría recibida.

| Commit incorporado | Aporte |
|---|---|
| `1f62368` | Ejemplos ilustrativos de las condiciones de los experimentos. |
| `fbb369b` | Explicación de escala y MDE en lenguaje más accesible. |
| `2c85a5d` | Distinción entre objeto de investigación y método; explicación de siglas. |
| `c911799` | Historias en tabla con dos escenarios y formato del Product Backlog. |

## Resultado de la revisión

Se conservaron las tablas, escenarios y explicaciones nuevas. Se revisaron trece líneas para distinguir reclutamiento de muestra evaluable, evitar atribuir garantías al tamaño muestral, mantener la significancia unilateral y la potencia condicionada al MDE, y conservar el origen de LRMR en t0+30. También se mantuvieron el cierre con motivo como resolución y las métricas secundarias/salvaguardas como condiciones de decisión.

La tabla de historias tiene siete columnas y un separador válido; se verificó su renderizado como tabla Markdown. Conserva nueve historias, dos escenarios por historia y los mismos IDs que el Sprint Backlog. El Product Backlog mantiene nueve filas, el orden y 28 Story Points. El Sprint Backlog existente conserva sus 37 tareas y 214 h propuestas.

La [trazabilidad de revisión](review.json) identifica fuentes, commits y hashes de las líneas revisadas. El [resultado documental](document-checks.json) registra preservación, tablas, referencias y cálculos. No se modificó código de producto; la evidencia de sus pruebas y CI del 08/11 conserva su fecha.

Referencias primarias de estadística consultadas: [NIST: tamaño de muestra](https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm), [NIST: precisión e intervalos](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm), [NIST: comparación de medias](https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm).

## Alcance de la guía AV2

Se consultó `upc-pre-202610-1asi0732-activity-s12-assignment-av2_v1 (1).pdf`, de seis páginas. Es idéntico por hash a la copia previamente revisada. El hash y los formatos se registran en el [inventario](deliverables-inventory.json).

- La página 2 enumera el capítulo VIII hasta §8.3.2.
- La rúbrica de la página 5 evalúa Planning, Design y To-Be Product/Sprint Backlogs; este último se mantiene en §8.3.3.1.
- La introducción de la página 1 menciona ejecución, análisis y aprendizaje. Eso no permite presentar automáticamente las secciones §8.4–8.5, no enumeradas en la estructura ni como criterio autónomo de la rúbrica, como un bloqueo confirmado del MR.
- Los resultados reales de esas fases no están incorporados. Se mantiene su estado real y no se inventan para completar encabezados.

Esta distinción corrige la lista anterior de faltantes. No equivale a una calificación ni elimina los requisitos expresos de validación, auditoría y mejora de artefactos.

## Archivos disponibles y preparación del paquete

El inventario es local al workspace; los archivos previos no se convierten en AV2 cambiando su nombre.

| Entregable solicitado en la página 3 | Material disponible | Qué puede prepararse |
|---|---|---|
| Reporte AV2, PDF | README AV2 consolidado, imágenes y evidencias. PDF anterior de TB1. | Generar un PDF AV2 desde la versión consolidada y verificar su maquetación. |
| Keynote AV2, PPTX y PDF | Keynote TB1 editable y PDF; presentación general de CareConnect. | Crear la presentación AV2 de capítulos VI–VIII y exportarla a PDF. |
| Participación AV2, DOCX y PDF | Plantillas/reportes de AV1/TB1 y contribuciones registradas en Git. | Preparar el documento con evidencias; la valoración del Team Leader y datos no registrados deben confirmarse. |
| Exposición AV2, MP4 | Video identificado como TB1 y guiones anteriores. No se encontró una grabación AV2 local. | Preparar el guion y editar las grabaciones AV2 cuando estén disponibles. |
| Complementos, ZIP | Repositorios, evidencias y paquete anterior de TB1. | Empaquetar los archivos AV2 y complementos una vez preparados. |

No se crearon exportaciones PDF/PPTX/DOCX ni un video AV2 en esta tarea. La solicitud ejecutada fue revisar/integrar y determinar los archivos disponibles y preparables.

La guía usa el prefijo `202610`; el proyecto y sus entregas previas identifican el periodo `202620`, NRC 9100, startup CareStacks. El inventario distingue ambos y propone mantener el prefijo del proyecto `upc-pre-202620-1asi0732-9100-carestacks-…`.

Los pendientes de capturas y cierre de auditoría, validación UX y recorrido integrado continúan en el [estado actualizado](../../experiments/av2-completion-2026-11-08/verification.md#faltantes-que-permanecen). `main` permanece sin fusionar.
