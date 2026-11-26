# Verificación técnica Backend To-Be (TB2) — 25/11/2026

Registro verificable de la implementación del Bounded Context `experiments` y de las ampliaciones de `agenda` y `notifications` en `carestacks-backend-api` (rama `feature/tb2-experimentation`, basada en `develop` `4aa830b`).

## Cobertura de historias e invariantes To-Be (§8.3.1 – §8.3.3.1)

| Historia / Tarea | Implementación en `carestacks-backend-api` | Verificación automatizada |
|---|---|---|
| `TS-02` (`S1-01`–`S1-05`) | Asignación única e inmutable por círculo (`experiment_assignments`), bloqueo cruzado de participantes (`experiment_participant_locks`), agenda congelada (`experiment_scheduled_events`), seudonimización HMAC-SHA256 (`Pseudonymizer`), registro explícito de pérdidas (`NO_ELIGIBLE_EVENTS`, `TELEMETRY_INCOMPLETE`) y exportación JSON/CSV con prueba $t$ de Welch (`WelchStatistics`). | `ExperimentationLifecycleIntegrationTests.ts02EnforcesImmutableVariantParticipantIsolationExplicitLossesAndPiiFreeExport` y `WelchStatisticsAndPseudonymizerTest`. |
| `US-07` (`S1-06`–`S1-09`) | Cierre autenticado con motivo permitido (`POST /api/agenda/{id}/resolve-with-reason` y `/api/experiments/events/{eventId}/resolve-with-reason`), idempotente y mutuamente excluyente con `MED_CONFIRMED`; alimenta `LRMR` y `TNR` sin incrementar `TCOM`. | `ExperimentationLifecycleIntegrationTests.exp02CoversSteppedAlertsLiveConsentCheckReasonClosureDeliveryAckAndPreferenceTracking`. |
| `US-01` & `US-05` (`S1-10`–`S1-13`, `S1-21`–`S1-24`) | Resolución de variante desde servidor (`GET /api/experiments/circles/{patientId}/context`), exigencia de pulsación sostenida $\ge 1000\text{ ms}$ en `EXP-01/B`, `MED_CONFIRMED` idempotente y reversión `UNDO_TRIGGERED` en ventana estricta de $10\text{ s}$ que devuelve el evento a `PENDING` conservando el historial. | `ExperimentationLifecycleIntegrationTests.exp01CoversPressHoldIdempotencyUndoWindowSsePropagationConsentRevocationAndTsc` y `HealthEventRevertConfirmationTest`. |
| `TS-01` & `US-02` (`S1-14`–`S1-20`) | Hub de difusión Server-Sent Events (`ExperimentSyncHub`, `GET /api/experiments/circles/{patientId}/stream`) con revalidación en vivo de sesión IAM y consentimiento `AGENDA` antes de cada emisión, desduplicación en reconexión y verificador `SYNC_STATE_OBSERVED` (`TSC` $\le 5000\text{ ms}$). | `ExperimentationLifecycleIntegrationTests.exp01CoversPressHoldIdempotencyUndoWindowSsePropagationConsentRevocationAndTsc`. |
| `US-03`, `US-04`, `US-06` (`S2-01`–`S2-13`) | Planificador determinista con `Clock` inyectable (`POST /api/experiments/scheduler/evaluate`) para aviso común en `t0` (`A` y `B`), escalón `+15m` y escalamiento `+30m` a co-cuidadores con consentimiento vigente solo en `EXP-02/B`, acuse explícito `NOTIFICATION_DELIVERED` y registro `NOTIFICATION_PREFERENCE_CHANGED` (`ENABLED`, `DISABLED`, `UNKNOWN`). | `ExperimentationLifecycleIntegrationTests.exp02CoversSteppedAlertsLiveConsentCheckReasonClosureDeliveryAckAndPreferenceTracking`. |
| Autorización de Notificaciones (deuda AV2) | `NotificationAccess` restringe `/api/notifications/**` a sesiones emitidas vigentes, aislamiento por destinatario y validación de vista `NOTIFICATIONS`/`AGENDA`. | `NotificationAuthorizationIntegrationTests`. |

## Artefactos reproducibles generados en esta carpeta

- [`openapi-tb2.json`](openapi-tb2.json) y [`openapi-tobe-endpoints.png`](openapi-tobe-endpoints.png): especificación OpenAPI 3.0 exportada desde `/v3/api-docs` con las 18 operaciones To-Be y extendidas.
- [`surefire-results.json`](surefire-results.json) y [`surefire-tb2-gate.png`](surefire-tb2-gate.png): **33 pruebas ejecutadas, 0 fallos, 0 errores, 0 omitidas** (`mvn -B clean verify`, JDK 25.0.1, Spring Boot 4.0.6).
- [`exp01-synthetic-rehearsal.json`](exp01-synthetic-rehearsal.json) y [`exp01-synthetic-rehearsal.csv`](exp01-synthetic-rehearsal.csv): ensayo técnico sintético de `EXP-01` sin datos personales ni texto clínico.
- [`exp02-synthetic-rehearsal.json`](exp02-synthetic-rehearsal.json) y [`exp02-synthetic-rehearsal.csv`](exp02-synthetic-rehearsal.csv): ensayo técnico sintético de `EXP-02` reconciliando `LRMR`, `TNR`, `NOR` y permisos `UNKNOWN`.

## Límites declarados

Estos artefactos acreditan la implementación del backend To-Be, sus controles de seguridad/privacidad y el **gate de ensayo técnico** con reloj controlado y fixtures sintéticos definido en §8.3.3.1. No sustituyen la ejecución con cohortes de usuarios reales ni representan resultados clínicos; cualquier análisis de usuarios deberá sustentarse en las mediciones y entrevistas de §8.3.4 y §8.4.
