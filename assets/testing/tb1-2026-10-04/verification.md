# Verificación de TB1 — 04/10/2026

## Resultado y alcance

Se ejecutaron las pruebas existentes del backend y de diseño web, se añadieron
cinco casos de aceptación del cliente a cada aplicación Flutter y se probaron
nueve escenarios contra la API real en cada cliente. **El flujo completo no está
aprobado:** los controles SYS-06 y SYS-07 encuentran acceso a la agenda después
de revocar y sin sesión, respectivamente.

| Suite | Ejecutadas | Aprobadas | Fallidas | Evidencia |
|---|---:|---:|---:|---|
| Backend, entidades e integración HTTP + H2 | 10 | 10 | 0 | [Log](backend-unit-integration.log) |
| Web, widgets y aceptación del cliente | 32 | 32 | 0 | [Log](web-unit-bdd.log) |
| Móvil, aceptación del cliente | 5 | 5 | 0 | [Log](mobile-unit-bdd.log) |
| Sistema, cliente web + API local | 9 | 7 | 2 | [Log](web-system-final.log) |
| Sistema, cliente móvil + API local | 9 | 7 | 2 | [Log](mobile-system-final.log) |

Son 65 ejecuciones, 61 aprobadas y 4 fallidas. Los cuatro fallos corresponden a
dos escenarios del mismo backend, reproducidos por ambos clientes; no son cuatro
defectos diferentes. Las suites de sistema devuelven código 1 mientras persistan
estos fallos. Ningún caso fue desactivado para obtener una ejecución exitosa.

## Entorno y versiones

- Fecha: 04/10/2026, zona horaria America/Bogota.
- Backend: Java 25, Spring Boot 4.0.6, Maven 3.9.16, rama local
  `test/tb1-acceptance`, base `4528a60` de `origin/main`. No se modificó su código.
- Web: rama local `test/tb1-verification`, base `e27da77` de `origin/main`, más las
  correcciones y pruebas locales de esta revisión.
- Móvil: rama local `test/tb1-verification`, base `0f1286b` de `origin/main`, más
  las correcciones y pruebas locales de esta revisión.
- Flutter 3.44.1 (`924134a44c`), Dart 3.12.1, Windows.
- API: `http://127.0.0.1:18080`, H2 temporal `tb1system`, `create-drop`.
- Las preferencias del cliente están aisladas mediante
  `SharedPreferences.setMockInitialValues`; las solicitudes HTTP y la lógica de
  los clientes, controladores, servicios y persistencia son reales.
- No se usaron cuentas, datos clínicos ni bases de producción. Cada escenario
  crea correos únicos bajo `example.test`.
- La resolución local del SDK utiliza los locks de ejecución guardados como
  [web-runtime.lock](web-runtime.lock) y [mobile-runtime.lock](mobile-runtime.lock).
  El SDK ajustó `matcher`, `meta`, `test_api` y `vector_math`; los locks originales
  de las aplicaciones se conservaron al terminar. No se añadieron dependencias.

## Escenarios de sistema y trazabilidad

| ID | Historia / comportamiento | Verificación | Web | Móvil |
|---|---|---|---|---|
| SYS-01 | US01–US02, US12–US16 | Registro API, inicio de sesión, concesión, creación/confirmación, lectura persistida del evento y diario, revocación y consulta del consentimiento | Aprobado | Aprobado |
| SYS-02 | IAM / credenciales | Una contraseña incorrecta devuelve 401 | Aprobado | Aprobado |
| SYS-03 | Cuenta de cuidador nueva | Dashboard vacío, sin paciente vinculado | Aprobado | Aprobado |
| SYS-04 | US16 / revocación | La recarga elimina el paciente previamente guardado en caché | Aprobado | Aprobado |
| SYS-05 | US14–US15 / vistas concedidas | El diario no se descarga con consentimiento exclusivo de Agenda | Aprobado | Aprobado |
| SYS-06 | US16 / bloqueo del dato | La consulta directa de agenda tras revocar debe responder 401/403 | **Fallido: 200** | **Fallido: 200** |
| SYS-07 | IAM / protección del dato | La agenda sin token debe responder 401/403 | **Fallido: 200** | **Fallido: 200** |
| SYS-08 | Login y US02 desde interfaz | Introducir credenciales, navegar a Agenda, pulsar Confirmar y consultar en API el estado CONFIRMED | Aprobado | Aprobado |
| SYS-09 | Registro desde interfaz | Completar el formulario, crear la cuenta y mostrar el estado sin pacientes activos | Aprobado | Aprobado |

Los escenarios Gherkin viven en `system_test/care_flow.feature` de cada
aplicación y se corresponden por ID con los casos de `care_flow_test.dart`.
El runner es Flutter Test: no se instaló Cucumber y el `.feature` no se interpreta
automáticamente. Los tests BDD-01–BDD-05 en `test/caregiver_acceptance_test.dart`
verifican registro, rechazo de rol paciente, escrituras sin permisos y credenciales
inválidas con HTTP simulado; no se presentan como pruebas de servidor.

## Defectos reproducidos y corregidos en los clientes

1. **Cuidador sin perfil compartido:** el fallback de la API antigua respondía
   404 y el cliente propagaba un error en lugar de mostrar una lista vacía.
   Ahora se trata esa respuesta como ausencia de pacientes.
2. **Revocación y caché:** al recibir el mismo 404, la capa de caché reutilizaba
   el paciente antiguo. La respuesta vacía autoritativa reemplaza la lista y
   elimina el paciente activo al recargar.
3. **Vistas no concedidas:** el dashboard descargaba agenda, documentos y diario
   sin consultar `allowedViews`. Ahora solo solicita las vistas autorizadas.
4. **Diseño móvil:** el botón de nueva nota heredaba un ancho mínimo infinito
   dentro de una fila. Se fijó su tamaño mínimo local; el IndexedStack ya puede
   renderizarse y el flujo visual se ejecuta.

Los logs [web anterior](web-system-before-fixes.log) y
[móvil anterior](mobile-system-before-fixes.log) preservan la reproducción.
La primera ejecución web además tuvo un problema del harness con un temporizador
HTTP pendiente; se corrigió la limpieza del test y no se cuenta como defecto
del producto. El problema de desplazamiento del test móvil también se corrigió
en el harness antes de ejecutar el resultado final.

## Defecto pendiente del backend

**DEF-API-01 — La autorización no protege los endpoints de datos.**

`SecurityConfig` permite cualquier petición y `AgendaController` no valida la
sesión ni el consentimiento antes de leer por paciente. Los tests anteriores
comprobaban `/api/consents/.../access`, pero el acceso directo a
`GET /api/agenda/patient/{patientId}` devuelve 200 incluso con el consentimiento
revocado o sin token. Eliminar el paciente de la interfaz no resuelve este acceso.

Para cerrar el defecto se requiere aplicar autenticación y autorización en los
endpoints de datos, enviar la sesión desde los clientes y conservar el acceso
legítimo del paciente y del cuidador autorizado. Después deben repetirse las
pruebas positivas y negativas; no basta con cambiar la documentación.

## Evidencia visual

Las imágenes son renders de los widgets reales durante SYS-08 y SYS-09,
con API local y datos sintéticos. Ancho web: 1440 px; móvil: 390 px.
Se cargó Segoe UI en el harness (en web también bajo el nombre Inter) y Material
Icons para obtener texto e iconos legibles. No es una comprobación tipográfica
de producción.

| Estado | Web | Móvil |
|---|---|---|
| Login | [Captura](../tb1-web-2026-10-04/login.png) | [Captura](../tb1-mobile-2026-10-04/login.png) |
| Agenda pendiente | [Captura](../tb1-web-2026-10-04/agenda-pending.png) | [Captura](../tb1-mobile-2026-10-04/agenda-pending.png) |
| Agenda confirmada | [Captura](../tb1-web-2026-10-04/agenda-confirmed.png) | [Captura](../tb1-mobile-2026-10-04/agenda-confirmed.png) |
| Formulario de registro | [Captura](../tb1-web-2026-10-04/registration.png) | [Captura](../tb1-mobile-2026-10-04/registration.png) |
| Cuenta sin paciente | [Captura](../tb1-web-2026-10-04/home-no-patient.png) | [Captura](../tb1-mobile-2026-10-04/home-no-patient.png) |

## Reproducción

En el backend, con Java 25 y Maven:

```powershell
mvn -B test
mvn -B spring-boot:run "-Dspring-boot.run.arguments=--server.port=18080 --spring.datasource.url=jdbc:h2:mem:tb1system;MODE=PostgreSQL;DATABASE_TO_LOWER=TRUE;DB_CLOSE_DELAY=-1 --spring.datasource.driver-class-name=org.h2.Driver --spring.datasource.username=sa --spring.datasource.password= --spring.jpa.hibernate.ddl-auto=create-drop"
```

En cada cliente, con Flutter 3.44.1 o una versión compatible con el lock elegido:

```powershell
flutter pub get
flutter test --reporter expanded
flutter test system_test/care_flow_test.dart --reporter expanded --dart-define=API_BASE_URL=http://127.0.0.1:18080
flutter analyze
```

Para la ejecución móvil añadir `--dart-define=TB1_VIEWPORT_WIDTH=390`.
Para capturas añadir `--dart-define=TB1_EVIDENCE_DIR=<ruta-absoluta>`,
`--dart-define=TB1_TEST_FONT=<archivo-ttf>` y
`--dart-define=TB1_ICON_FONT=<MaterialIcons-Regular.otf>`.

En esta máquina Maven se ejecutó offline con
`-Dmaven.repo.local=../tmp/m2-verification`. El plugin de arranque no tenía todas
sus dependencias offline, por lo que se inició la misma aplicación Java usando
el classpath que registró Surefire y los argumentos H2 anteriores. Los argumentos
y el comando local exacto están guardados en `commands.json`; el comando Maven
de reproducción necesita las dependencias del plugin si no están en caché.

El análisis estático terminó sin problemas en ambos clientes; los logs están en
[web-analyze.log](web-analyze.log) y [mobile-analyze.log](mobile-analyze.log).
Los códigos de salida y hashes de las fuentes y evidencias figuran en
[results.json](results.json).

## Límites y criterio de cierre

- ST-03 permanece **parcial: pendiente por DEF-API-01**.
- SYS-08 prepara consentimiento y evento mediante la API; no prueba una interfaz
  de paciente concediendo y revocando el acceso. SYS-09 sí usa el registro visual.
- Los widgets se ejecutaron en Flutter Test, no en un navegador ni en un
  dispositivo Android/iOS. No se acreditan distribución nativa, CORS ni producción.
- No se repitieron ST-01/ST-02 de la landing ni se cambiaron sus videos.
- No se probaron PostgreSQL ni proveedores externos de documentos o alertas.
- Este registro corresponde a la primera ejecución local. La publicación de las
  ramas, la corrección UTF-8 y la comprobación posterior en navegador se documentan
  en la [actualización de evidencia](../tb1-browser-2026-10-04/verification.md).
  Publicar una rama no demuestra su integración ni un despliegue de producción.

ST-03 solo podrá aprobarse cuando SYS-06/SYS-07 bloqueen el dato y se demuestre
el recorrido de concesión/revocación en los clientes desplegados correspondientes.
