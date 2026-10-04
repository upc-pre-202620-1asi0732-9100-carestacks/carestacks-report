# TB1 — Verificación en navegador y publicación, 04/10/2026

## Resultado

Se comprobó el build real de Flutter Web desde el navegador integrado de Codex,
con HTTP real a una API Spring Boot y H2 desechable. Las cinco comprobaciones de
interfaz pasan. **ST-03 continúa parcial y no aprobado:** el acceso directo a la
agenda devuelve 200 después de revocar el consentimiento y sin sesión.

Esta evidencia complementa la [primera ejecución automatizada](../tb1-2026-10-04/verification.md).
Las comprobaciones de navegador se realizaron operando los formularios y botones;
no se presentan como un nuevo runner automatizado ni como una prueba en producción.

## Entorno y versiones

- Navegador: Codex In-app Browser, viewport de las capturas 1280 × 720.
- Aplicación: `http://127.0.0.1:18181`, build Flutter Web release con recursos
  CanvasKit locales. API: `http://127.0.0.1:18080`.
- Backend: `4528a60`, sin cambios, Java 25, H2 `tb1system`, `create-drop`.
- Flutter 3.44.1 / Dart 3.12.1. Los datos son sintéticos bajo `example.test`.
- Los casos de registro, agenda y revocación visible se ejecutaron con el build
  de web `483204d`. El error de credenciales y la sesión cerrada tras recargar
  se volvieron a comprobar con el build corregido `37ff8bc`.
- Móvil: `4f86fc4`, con pruebas y correcciones publicadas para revisión.
- Se usó el almacenamiento real del navegador. No se simuló SharedPreferences
  ni HTTP para estas cinco comprobaciones.

## Comprobaciones desde la interfaz

| ID | Pasos y resultado observado | Estado | Evidencia |
|---|---|---|---|
| BR-01 | Introducir un correo de prueba inexistente y contraseña, pulsar Ingresar; permanecer en login con “Correo o contraseña incorrectos” y acentos correctos | Aprobado | [Captura](invalid-login.jpg), [texto accesible](invalid-login-ui-state.txt) |
| BR-02 | Abrir Crear cuenta, completar los tres campos y enviar; mostrar el cuidador autenticado y “Aún no tienes pacientes activos” | Aprobado | [Formulario](registration.jpg), [cuenta creada](registered-no-patient.jpg) |
| BR-03 | Iniciar sesión con un cuidador vinculado, abrir Agenda y pulsar Confirmar; mostrar Completado y leer `CONFIRMED` desde la API | Aprobado | [Pendiente](agenda-pending.jpg), [confirmado](agenda-confirmed.jpg), [respuesta API](browser-api-results.json) |
| BR-04 | Revocar el consentimiento mediante la API de preparación y recargar el mismo navegador; conservar la sesión y eliminar el paciente del dashboard | Aprobado | [Captura](revoked-patient-removed.jpg), [texto accesible](revoked-ui-state.txt) |
| BR-05 | Pulsar Cerrar sesión y recargar; mantener el formulario de inicio de sesión y no recuperar el dashboard autenticado | Aprobado | [Captura](logged-out-after-reload.jpg) |

[browser-cases.json](browser-cases.json) registra el alcance y los resultados.
El paciente, el consentimiento y el evento de BR-03/BR-04 se prepararon mediante
la API. La revocación visible no demuestra que el endpoint de datos esté protegido.

## Regresión UTF-8 corregida

La respuesta de error del servidor usa `application/problem+json` sin charset.
El cliente obtenía `response.body`, cuya decodificación producía “contraseÃ±a”.
Ahora decodifica los bytes JSON explícitamente como UTF-8 en ambas aplicaciones.

BDD-05 utiliza bytes UTF-8 con el Content-Type real y comprueba el texto completo,
el estado 401 y la ausencia de sesión. La [prueba anterior a la corrección](utf8-before.log)
falla por el mensaje corrupto; las suites posteriores pasan. Las capturas
[antes](invalid-login-before-utf8.jpg) y [después](invalid-login.jpg) preservan el
resultado visible. Esta corrección no modifica la autorización del backend.

## Revalidación de las aplicaciones

| Suite después de UTF-8 | Resultado | Evidencia |
|---|---|---|
| Web rápida | 32/32 aprobadas | [Log](web-unit.log) |
| Móvil rápida | 5/5 aprobadas | [Log](mobile-unit.log) |
| Sistema web | 7/9 aprobadas; SYS-06/SYS-07 fallan | [Log](web-system.log) |
| Sistema móvil | 7/9 aprobadas; SYS-06/SYS-07 fallan | [Log](mobile-system.log) |
| Análisis web y móvil | Sin problemas | [Web](web-analyze.log), [móvil](mobile-analyze.log) |
| Build web release | Código de salida 0 | [Log](web-build.log) |

El backend no cambió; su resultado de 10 pruebas aprobadas se conserva del
registro previo. No se repitió para inflar el número de pruebas.
Las dos suites de sistema terminan con código 1, de forma intencional, mientras
el servidor siga incumpliendo las expectativas 401/403.

## Publicación para revisión

- [Web PR #1](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-web/pull/1):
  `test/tb1-verification`, commit `37ff8bc`, borrador hacia `main`.
- [Móvil PR #1](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-mobile-app/pull/1):
  `test/tb1-verification`, commit `4f86fc4`, borrador hacia `main`.
- Informe: la evidencia inicial `dfbcda1` se publicó en `chapter-6`; este registro
  agrega la prueba del navegador y el seguimiento de la publicación.

Los borradores permiten revisar e integrar los cambios. No se fusionaron a main
ni se desplegaron a producción. Los workflows rápidos no ejecutan la suite
externa `system_test/`, por lo que CI exitoso no cierra DEF-API-01.

Ambos workflows terminaron con resultado `success` sobre los commits publicados:
[CI web](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-web/actions/runs/37242472931)
y [CI móvil](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-mobile-app/actions/runs/37242557138).
Se conservan sus metadatos en [web-ci.json](web-ci.json) y [mobile-ci.json](mobile-ci.json).
El build de móvil acredita compilación; no ejecución en un dispositivo.

## Reproducción y límites

```powershell
flutter pub get
flutter test --reporter expanded
flutter test system_test/care_flow_test.dart --reporter expanded --dart-define=API_BASE_URL=http://127.0.0.1:18080
flutter analyze
flutter build web --release --no-web-resources-cdn --dart-define=API_BASE_URL=http://127.0.0.1:18080
python -m http.server 18181 --bind 127.0.0.1 --directory build/web
```

Iniciar la API local con el procedimiento del registro previo; operar los pasos
BR-01–BR-05 sobre cuentas sintéticas. Los tokens y contraseñas temporales de la
preparación no se publican en esta evidencia. Los hashes de los artefactos y builds
se incluyen en [results.json](results.json).

Queda por cerrar:

1. **Backend / Massi:** aplicar autenticación y consentimiento al endpoint de datos,
   y repetir SYS-06/SYS-07 junto con los escenarios positivos.
2. **Validación de Matías:** demostrar el otorgamiento/revocación desde la interfaz
   de paciente y el recorrido integrado en los clientes desplegados y dispositivos.
   Este equipo no tenía dispositivo Android conectado ni AVD configurado; no se
   acredita ejecución Android/iOS por las pruebas de widgets ni por compilar un APK.
3. **Videos de Matías:** sustituir About the Team/About the Product con los enlaces
   correctos de CareConnect. El usuario pidió dejar esta tarea para el final.

No se retocaron los videos actuales ni se declararon aprobados ST-02/ST-03.
