# Corrección de autorización de Agenda — 04/10/2026

El defecto de Agenda registrado como DEF-API-01 queda corregido y verificado en las ramas de revisión. Una sesión ausente, inventada, expirada o cerrada recibe 401. Una sesión válida sin propiedad o sin consentimiento vigente para AGENDA recibe 403. La comprobación se realiza en las diez rutas, incluidas las modificaciones y el listado general, que ahora se limita al perfil autorizado. Retirar AGENDA o revocar el consentimiento bloquea la petición siguiente.

## Versiones y publicación

| Componente | Commit verificado/publicado | Revisión |
|---|---|---|
| Backend | `734f8694a13f3ead85fade5b6eed3a2c938516b5` | [PR #3](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/pull/3) |
| Flutter web | `42d50ac265ebc24ed4b14a5b97144f81ecd702ca` | [PR #1](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-web/pull/1) |
| Flutter móvil | `24098938f797175cfe37fb1ff50a74fc129a3ffd` | [PR #1](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-mobile-app/pull/1) |

El backend se probó después de la corrección `740ed3b`; el commit de publicación integra además dos cambios del README de main, sin modificar las fuentes ejecutadas. [results.json](results.json) registra los commits y hashes SHA-256 de los blobs Git de fuentes y pruebas, así como los hashes de los logs. Las contraseñas temporales generadas por Spring se sustituyeron por `[REDACTED]` en la evidencia; no se publican credenciales ni tokens.

CI aprobó los commits publicados: [backend](backend-ci.json) (tests y construcción Docker), [web](web-ci.json) y [móvil](mobile-ci.json). Los tres registros contienen `headSha`, conclusión y enlace a la ejecución de GitHub Actions; coinciden con las versiones de la tabla.

## Resultados

| Comprobación | Resultado | Evidencia |
|---|---|---|
| Reproducción antes del arreglo | La aserción esperaba 401 y obtuvo 200; salida 1 | [before.log](before.log) |
| Maven: integración existente, autorización y expiración | 16/16, sin fallos ni omisiones | [backend-final.log](backend-final.log) |
| Flutter web: pruebas rápidas | 36/36 | [web-tests.log](web-tests.log) |
| Flutter móvil: pruebas rápidas | 9/9 | [mobile-tests.log](mobile-tests.log) |
| Sistema web, HTTP real | 9/9; SYS-06 y SYS-07 aprobados | [web-system.log](web-system.log) |
| Sistema móvil, HTTP real, ancho 390 | 9/9; SYS-06 y SYS-07 aprobados | [mobile-system.log](mobile-system.log) |
| Análisis estático | Sin problemas en ambos clientes | [web-analyze.log](web-analyze.log), [mobile-analyze.log](mobile-analyze.log) |
| Compilación web release | Aprobada | [web-build.log](web-build.log) |

Los casos del backend verifican paciente ajeno, ausencia de sesión, token inventado con el formato antiguo, retirada de AGENDA, revocación, logout, sesiones independientes, expiración a los 30 minutos y las operaciones autorizadas de lectura y escritura. Los clientes verifican que lectura, creación, edición y confirmación envían el token. También verifican que 401/403 borran la lista rechazada de caché y propagan el error, mientras 503 conserva el respaldo temporal.

## Reproducción

Usar Java 25 y ejecutar `mvn test` en el backend. Iniciar una instancia desechable en el puerto 18080 con H2 y `ddl-auto=create-drop`, como se indica en `system_test/README.md` de los clientes. En cada cliente:

```text
flutter test --no-pub --reporter expanded
flutter test --no-pub system_test/care_flow_test.dart --reporter expanded --dart-define=API_BASE_URL=http://127.0.0.1:18080
flutter analyze --no-pub
```

Para móvil añadir `--dart-define=TB1_VIEWPORT_WIDTH=390` a la suite de sistema. La compilación verificada fue `flutter build web --no-pub --release --dart-define=API_BASE_URL=http://127.0.0.1:18080`. Las dependencias estaban resueltas previamente; en una instalación nueva ejecutar primero `flutter pub get`. Se usaron cuentas sintéticas locales y H2 temporal; no se alteraron datos de producción.

## Límites y cierre de ST-03

ST-03 sigue parcial por el recorrido de concesión/revocación desde la interfaz del paciente, los clientes desplegados y los dispositivos nativos. Las suites de sistema incluyen widgets reales con HTTP real, pero no acreditan una nueva ejecución en navegador ni instalación Android/iOS. Las capturas históricas de navegador se conservan en la verificación anterior y corresponden a versiones previas.

El código está publicado en PRs de revisión; no se fusionó ni desplegó. Antes de desplegar el backend, el cliente nativo de paciente debe enviar su token en Agenda y verificarse con esta versión: su fuente no estuvo disponible. Las sesiones opacas son de una sola instancia y se pierden al reiniciar; una arquitectura con varias instancias requiere un almacén compartido o proveedor de identidad. Esta corrección protege Agenda y no constituye una auditoría de autorización de todos los demás módulos.
