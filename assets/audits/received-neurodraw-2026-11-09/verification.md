# Incorporación de la auditoría recibida — 09/11/2026

Se incorporó en [6.4.2](../../../README.md#642-auditoría-recibida) el documento que NeuroDraw entregó sobre CareConnect. El [original recibido](auditoria-careconnect-neurodraw.txt) y su [procedencia](provenance.json) se conservan en esta carpeta. La inspección reportada es del 08/11/2026; la recepción e incorporación son del 09/11/2026.

## Adaptación al informe de CareStacks

El original usa «6.4.1. Auditoría realizada» desde la perspectiva de NeuroDraw. Se adaptó la numeración a «6.4.2. Auditoría recibida» y se identificaron correctamente el equipo auditor (NeuroDraw/NeuroZen) y el equipo evaluado (CareStacks/CareConnect). La auditoría saliente de CareStacks a NeuroZen en §6.4.1 permanece íntegra.

Se incorporaron cronograma, alcance, tareas, escala, tabla resumen, detalle de los ocho problemas, recomendaciones, observaciones, comparación de superficies y aspectos positivos. La información del auditor se registra con atribución; no se presenta como una nueva ejecución de CareStacks.

| Dato aportado | Registro |
|---|---|
| Problemas confirmados por el auditor | 8 |
| Distribución de severidad | 1 de nivel 3, 5 de nivel 2 y 2 de nivel 1 |
| Tareas reportadas | 10 de landing, 16 de web y 11 de móvil; varias quedaron parciales o no ejecutables |
| Móvil auditado | Flutter del cuidador, APK v1.0.0 de `carestacks-mobile-app` |
| Condición de las cuentas | Cuidador sin pacientes vinculados ni invitaciones |
| Trazabilidad de despliegues | Sin commit específico aportado para cada despliegue |
| Capturas adjuntas en el archivo | 0 |
| Correcciones/revalidaciones acreditadas por este archivo | 0 |

La fuente original se preserva sin normalización de finales de línea mediante un atributo limitado a ese archivo. Su SHA-256 es `090e8831eb164e9dafe6befe55008a0ad340eb57e6c356afbb7143f88d766ecb`.

## Seguimiento que queda abierto

La ausencia del documento recibido queda resuelta. En §6.4.2.4 se registró una matriz de acciones y verificación para UX-01–UX-07 y UX-MOB-01. Su cierre requiere corrección de producto, versión identificable, capturas y repetición de los casos aplicables. El documento recibido no permite marcar esos problemas como subsanados.

Las pruebas anteriores de seguridad del backend y compatibilidad Android del cliente Kotlin no cierran los problemas de interfaz del APK Flutter auditado. La auditoría externa tampoco sustituye las entrevistas con representantes de los segmentos objetivo ni prueba los flujos con paciente vinculado que quedaron fuera de sus condiciones.

El [estado general de faltantes](../../experiments/av2-completion-2026-11-08/verification.md#faltantes-que-permanecen) se actualizó para distinguir el documento ya incorporado de las evidencias y correcciones todavía necesarias.

## Comprobaciones

El [resultado documental](document-checks.json) registra integridad de la fuente, presencia de sus ocho problemas y cronograma, conservación de la auditoría realizada y de los apartados ajenos a esta incorporación, además de enlaces/anchors y las comprobaciones documentales previas.

Se partió de `e45f802` de `develop`, conservando la actualización de Student Outcome del equipo. Las pruebas de código del 08/11 se mantienen con su fecha; no se vuelven a atribuir al cambio documental del 09/11. Esta incorporación no fusiona `main` ni modifica o despliega productos.
