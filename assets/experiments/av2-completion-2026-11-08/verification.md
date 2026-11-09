# Cierre documental y revisión local — AV2

Estado actualizado: 09/11/2026. Las pruebas y correcciones técnicas corresponden al 08/11/2026. Este registro actualiza los faltantes encontrados durante la [integración en develop](../../integration/av2-2026-11-08/verification.md).

## Completado

| Artefacto o corrección | Resultado comprobable |
|---|---|
| [Sprint Backlogs To-Be](../../../README.md#8331-to-be-sprint-backlogs) | Dos sprints propuestos, nueve historias, 37 tareas de 4–8 h y 214 h totales: 140 h en S1 y 74 h en S2. Cada tarea tiene rol funcional, dependencia y aceptación. |
| Factibilidad de planificación | Capacidad **supuesta** de cinco roles × 40 h por sprint; ninguna carga de rol supera 40 h. No acredita disponibilidad de personas, asignaciones personales ni trabajo ejecutado. |
| [Comparación de herramientas](../../../README.md#7451-selección-de-herramientas-para-el-pipeline) | Cuatro matrices para CI/build/testing, deployment del API, deployment de landing y operation. Diez alternativas, criterios C1–C5, fuentes primarias y decisión justificada. Se identifica como evaluación documental posterior, sin inventar pruebas comparativas de proveedores. |
| [Backend](../../testing/av2-local-2026-11-08/verification.md#backend) | CORS restringido, autenticación por defecto, consola H2 apagada por defecto y métricas no anónimas. 26 pruebas aprobadas y CI acreditado en `develop`. |
| [Kotlin](../../testing/av2-local-2026-11-08/verification.md#kotlin) | 55 errores de compatibilidad Android corregidos, lint sin errores, APK generado y workflow añadido en `develop`. Las 46 advertencias permanecen visibles. |
| [Auditoría recibida](../../../README.md#642-auditoría-recibida) | Incorporada el 09/11: documento de NeuroDraw, cronograma y ocho hallazgos. Se conserva la [fuente y la trazabilidad](../../audits/received-neurodraw-2026-11-09/verification.md). Las capturas y el cierre de hallazgos siguen sin acreditarse. |
| Informe | Registro hasta 2.3.3, evidencias, bibliografía técnica y referencias de §6.2 actualizadas. D y el diseño previo conservados; no se añadieron resultados ficticios. |

El [manifiesto de tareas](planning-tasks.json) permite recalcular los totales y las dependencias. El [verificador](verify.mjs) y su [resultado](document-checks.json) comprueban esos datos, la conservación del contenido previo y los enlaces locales.

## Faltantes que permanecen

1. **Seguimiento de la auditoría recibida (§6.4.2):** el documento ya está incorporado. Faltan sus capturas y la evidencia de corrección/revalidación de los ocho hallazgos.
2. **Video de exposición AV2:** incorporar el enlace y las evidencias exigidas en el anexo.
3. **Archivos AV2:** exportar el reporte PDF, crear la presentación PPTX/PDF y el informe de participación DOCX/PDF, y consolidar el ZIP. Existen fuentes y archivos previos, no esas exportaciones AV2.
4. **Alcance experimental:** la estructura de la guía AV2 llega a §8.3.2 y su rúbrica pide también Sprint Backlog. La introducción menciona ejecución/análisis/aprendizaje, pero no corresponde tratar §8.4–8.5 como un bloqueo confirmado para el MR. El [contraste de alcance y archivos](../../integration/av2-chapter8-2026-11-09/verification.md) registra esta distinción.
5. **Validación UX actual (§6.3):** documentar versión y resultados observados de las tareas, verificar HU-01–HU-07 y resolver la severidad de HU-07. Los registros históricos de entrevistas no demuestran por sí solos esas comprobaciones actuales.
6. **Recorrido completo ST-03:** conciliar la URL/API del cliente de paciente, instalar/probar en los entornos objetivo y comprobar sesiones, permisos y flujos integrados. El test aritmético Kotlin y el APK no cierran este punto.
7. **Landing:** sustituir el video About the Team de otro proyecto y confirmar un canal de contacto privado controlado por el equipo. Es distinto del video de exposición AV2.
8. **Comprobación tras la publicación final:** integrar a `main` cuando corresponda, desplegar las versiones compatibles y verificar configuración real de CORS/H2/autenticación. Esta revisión conserva `main` y no publica esos productos a producción.

Las **46 advertencias Android** se mantienen como observaciones técnicas abiertas, no como errores ocultos. También siguen documentadas las limitaciones de sesiones por instancia y de permisos no cubiertos por una auditoría completa. Su existencia no invalida las comprobaciones concretas aprobadas.

## Verificación reproducible

Con Node, `marked` y Python 3:

```text
node assets/experiments/av2-completion-2026-11-08/verify.mjs --marked <ruta-a-marked.esm.js> --python <ruta-a-python>
```

El alcance es documental y técnico local/CI. El contenido de §8.1–8.2 y §8.3.1–8.3.2 se preserva, así como las mediciones de rendimiento del 05/11/2026. Las ampliaciones de §7.4.5 y §8.3.3.1 son las declaradas en esta revisión. Las fuentes y la rúbrica son documentos de referencia; no sustituyen los datos de ejecución ni una calificación del docente.

**Integración posterior del 09/11.** Los cuatro commits de actualización de `chapter-8` se incorporaron conservando el Sprint Backlog y la auditoría recibida. La [verificación de integración](../../integration/av2-chapter8-2026-11-09/verification.md) actualiza el contenido revisado y el inventario de entregables.
