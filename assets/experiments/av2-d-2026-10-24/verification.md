# Revisión documental del bloque D — AV2

Fecha: 24/10/2026. Responsable del bloque: Matias Salcedo. Alcance: Experiment Planning, Hypotheses, Measures y Conditions. El registro documenta revisión de fuentes y consistencia; no acredita ejecución de experimentos.

Registro histórico de la revisión inicial. La [consolidación del 07/11/2026](../av2-consolidation-2026-11-07/verification.md) incorpora los aportes posteriores del equipo y actualiza escala, métodos y trazabilidad del diseño.

## Fuentes revisadas antes de editar

| Fuente | Apartados consultados | Consecuencia para el bloque D |
|---|---|---|
| `upc-pre-202610-1asi0732-activity-s12-assignment-av2_v1.pdf` | Páginas 1–3: alcance y estructura; página 5: rúbrica de Planning y Design. | Usar la numeración de AV2: 8.2.1 Hypotheses, 8.2.2 Measures, 8.2.3 Conditions. La rúbrica exige relación con el As-Is, Question Backlog, Experiment Cards y selección justificada de medidas/condiciones. |
| `upc-pre-202620-1ASI0732-final_project-statement-abet_v1.pdf` | Páginas impresas 22–24: definición de los artefactos; 42–43: alcance AV2. | Incluir preguntas belief-led/exploratorias, motivación, backlog broad/deep, cuatro criterios de priorización y desempate por riesgo. Las tarjetas requieren frente/reverso y escala. Todas sus métricas deben tener fórmula, recolección y meta en un catálogo. |
| [Informe: Lean UX](../../../README.md#122-lean-ux-process) y [entrevistas](../../../README.md#223-análisis-de-entrevistas) | Supuestos, hipótesis y muestra cualitativa de tres cuidadores. | Formular preguntas con trazabilidad sin convertir entrevistas en una línea base experimental ni extrapolar la muestra a toda la población. |
| [Verificación de Agenda TB1](../../testing/agenda-auth-2026-10-04/verification.md) | Versiones verificadas, pruebas y límites de sesión/consentimiento. | Usar la base realmente probada; exigir compatibilidad y permisos antes de ejecutar. |
| [Entrega y despliegue TB1](../../deployment/tb1-2026-10-04/verification.md) | Diferencia entre versiones de revisión, builds y despliegue. | Evitar afirmar publicación completa, PostgreSQL configurado o entrega nativa acreditada a partir de un build. |

Los dos documentos del curso se consultaron desde las copias locales de la carpeta Downloads; no se incorporan copias de esos archivos al repositorio público. Las referencias de página identifican el requisito revisado, no sustituyen la rúbrica ni constituyen una calificación.

## Evidencia técnica del As-Is

Las referencias siguientes fijan las versiones revisadas y evitan que una actualización futura cambie el fundamento del análisis:

| Fuente de código | Hallazgo |
|---|---|
| [API: pom.xml, `734f869`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/blob/734f8694a13f3ead85fade5b6eed3a2c938516b5/pom.xml) | Java 25 y Spring Boot; no corresponde describir el As-Is como ASP.NET/C#. |
| [Agenda móvil, `2409893`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-mobile-app/blob/24098938f797175cfe37fb1ff50a74fc129a3ffd/lib/features/caregiver/presentation/caregiver_agenda_page.dart) | Existe el botón «Confirmar evento». |
| [Dashboard móvil, `2409893`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-mobile-app/blob/24098938f797175cfe37fb1ff50a74fc129a3ffd/lib/features/caregiver/presentation/caregiver_main_page.dart) | Confirmar invoca el repositorio y recarga el dashboard del emisor. |
| [Agenda web, `42d50ac`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-web/blob/42d50ac265ebc24ed4b14a5b97144f81ecd702ca/lib/features/caregiver/presentation/caregiver_agenda_page.dart) y [pubspec.yaml](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-web/blob/42d50ac265ebc24ed4b14a5b97144f81ecd702ca/pubspec.yaml) | Flutter Web y botón de confirmación existente. |
| [HealthEventDto, `734f869`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/blob/734f8694a13f3ead85fade5b6eed3a2c938516b5/src/main/java/com/carestacks/careconnect/agenda/application/agenda/dtos/HealthEventDto.java) y [HealthEvent](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/blob/734f8694a13f3ead85fade5b6eed3a2c938516b5/src/main/java/com/carestacks/careconnect/agenda/domain/agenda/entities/HealthEvent.java) | `updatedAt` es mutable; hace falta historial de confirmaciones/reversiones para medir. |
| [NotificationServiceImpl, `734f869`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/blob/734f8694a13f3ead85fade5b6eed3a2c938516b5/src/main/java/com/carestacks/careconnect/notifications/infrastructure/NotificationServiceImpl.java) | Programar/persistir una notificación no acredita entrega push ni protocolo 0/+15/+30. |
| [Landing: package.json, `746ea48`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/blob/746ea487f0ecd4e56e94c43a4a129d42c0110182/package.json) | React, TypeScript y Vite. |

## Cobertura del bloque y decisiones

| Requisito | Ubicación | Comprobación documental |
|---|---|---|
| As-Is sustentado y problemas que generan preguntas | 8.1.1 | Stack real, versiones y límites; confirmación existente; sin cifras históricas inventadas. |
| Assumptions, Knowledge Gaps, Ideas y Claims | 8.1.2 | IDs y procedencia; afirmaciones del equipo identificadas como tales. |
| Preguntas experimentables, exploratorias y 5W+1H | 8.1.3 | Cinco ERQ con origen, motivación y delimitación. |
| Backlog broad/deep, Confianza/Riesgo/Impacto/Interés | 8.1.4 | Cinco puntuaciones recalculadas; desempate por riesgo; ERQ-01/02 se desarrollan en profundidad. |
| Dos tarjetas con frente, reverso y escala | 8.1.5 | Pregunta, por qué, hipótesis, incremento mínimo, medidas, condiciones, unidad/ventana y reglas de decisión. El cálculo de muestra corresponde a 8.2.4. |
| Hipótesis nula/alternativa y magnitud práctica | 8.2.1 | H0 representa ausencia de mejora; expectativas separadas: TCOM +15 puntos y ≥80 %; LRMR −40 %. |
| Catálogo completo de métricas y selección de medidas | 8.2.2.1–8.2.2.2 | TCOM, LRMR, TNR, UR, TSC y NOR con fórmula, unidad, técnica y meta; todas las referencias de las tarjetas pertenecen al catálogo. |
| Instrumentación y economía de recolección | 8.2.2.3 | Pendiente de implementar; timestamps de servidor, deduplicación, pérdidas y reversiones; datos mínimos. |
| Condiciones, asignación y no contaminación | 8.2.3 | Controles y variantes distintos por experimento; asignación/análisis por círculo; un cuidador no recibe variantes contrapuestas; escenarios sintéticos. |
| Colaboración y evolución del informe | Registro de versiones y Student Outcome de Matias | Registro 2.1.1 y reflexión AV2 coherente con planificación efectivamente realizada. |

### Comprobaciones de coherencia

- Scores del backlog: 62.5, 50.0, 32.0, 18.0 y 12.0; orden descendente y fórmula `(R×I×In)/C`.
- TCOM: una sola meta absoluta (80 %) y una sola magnitud práctica (15 puntos porcentuales), coherentes en tarjeta, hipótesis y catálogo.
- LRMR: origen único en t0+30, aporte cero para resolución anterior y máximo 60 al cierre t0+90; todos los eventos preasignados permanecen en el denominador. Meta de reducción relativa 40 %, sin línea base fabricada.
- Las métricas sin denominador o seguimiento recuperable son no calculables/inconclusas; no se sustituyen por cero.
- Hipótesis, interpretación y contraste respetan agrupación por círculo. El método y la muestra quedan para los apartados de escala/métodos.
- Se revisan los enlaces nuevos y los anchors del índice; los capítulos I–VII y las secciones posteriores a 8.2 se conservan salvo la reflexión individual y la renumeración de los encabezados vacíos de diseño para AV2.

### Resultado de la verificación documental

La comprobación local del 24/10/2026 aprobó: 13 enlaces locales entre el bloque y este registro; todos los anchors de diseño del índice; 11 tablas reconocidas por el parser Markdown; las cinco puntuaciones del backlog; la correspondencia de las seis métricas de las tarjetas con el catálogo; y los ejemplos de LRMR en los límites de su ventana. `git diff --check` terminó con código 0.

La comparación con la revisión previa `9909451` confirmó la conservación del contenido de capítulos I–VII salvo los cambios declarados de versión, índice y reflexión individual AV2. El contenido desde 8.3 en adelante permanece idéntico. Son comprobaciones de documentación, no pruebas de implementación ni datos de participantes.

## Límites y entrega a los siguientes apartados

Este bloque deja definida la planificación y el diseño inicial; todavía se necesitan implementación de variantes/auditoría, piloto, cálculo de escala y potencia, método de análisis, tracking, backlogs To-Be y ejecución. El número de círculos, la duración definitiva y la incertidumbre esperada requieren los datos del piloto; los 14 días de las tarjetas son una ventana inicial de planificación, no una garantía de potencia.

La muestra inicial de entrevistas no representa a cuidadores de todas las edades. Los datos sintéticos permiten evaluar tareas del software; no justifican conclusiones clínicas. La cobertura del bloque D no acredita que las otras partes del informe ni los entregables grupales AV2 estén terminados.
