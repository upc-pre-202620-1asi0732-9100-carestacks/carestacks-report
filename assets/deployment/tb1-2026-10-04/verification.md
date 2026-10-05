# Evidencia de preparación y publicación TB1 — 04/10/2026

Este registro respalda los apartados 7.1–7.3 del reporte. Diferencia los checks que generan un build de la publicación de ese build y de la aceptación funcional de ST-03.

| Producto | Versión | Evidencia verificada | Límite |
|---|---|---|---|
| Backend corregido | `734f8694a13f3ead85fade5b6eed3a2c938516b5` | [CI JSON](backend-ci.json): tests y Docker `success`; [16 pruebas locales](../../testing/agenda-auth-2026-10-04/backend-final.log) | En PR #3, no desplegado |
| Flutter web | `42d50ac265ebc24ed4b14a5b97144f81ecd702ca` | [CI JSON](web-ci.json): análisis, pruebas y build web `success` | No se acreditó una URL de esta versión; su CI no sube el bundle a un alojamiento |
| Flutter móvil del cuidador | `24098938f797175cfe37fb1ff50a74fc129a3ffd` | [CI JSON](mobile-ci.json): análisis, pruebas y APK debug `success` | Sin release/tienda ni instalación nativa acreditada |
| Backend publicado en Render | `51decbd`, según captura del equipo | [Deploy original](../../render-after-ci-deploy.png): `Live`, `Auto-Deploy`, fuente `51decbd` | La versión es anterior al arreglo de Agenda; no se verificaron secretos ni configuración PostgreSQL |
| Swagger público | Servicio Render | [Captura actual](backend-swagger.jpg), [registro del navegador](backend-browser.json) | Swagger cargó después del arranque en frío; no se ejecutaron mutaciones ni pruebas funcionales contra producción |
| Landing | `ab2d60e`, despliegue `dpl_4CMyCEcycwvsUH3HDLieBbiTYrtL` | [Publicación y navegador](../../testing/landing-product-2026-10-04/verification.md) | El contacto/footer se actualiza en una verificación posterior; About the Team sigue pendiente |
| Android paciente, repositorio oficial | `carestacks-frontend/main`, `922361d1db33251415481ed592227006c453e316` | Revisión de árbol de archivos en GitHub: Kotlin, `AgendaRepository`, `ConsentRepository`, `ShareProfileScreen` | Se identificó la fuente de la organización; no se ejecutó su build ni el recorrido nativo |

Los registros CI contienen el commit fuente (`headSha`), los jobs, sus pasos, conclusión y URL de GitHub Actions. Web pasó `Build Flutter Web`; móvil pasó `Build Android APK`. Mostrar la ruta de un archivo en logs no lo publica como descarga: los workflows actuales no incluyen upload del bundle web o del APK. La consulta de deployments de `carestacks-web` y de releases de `carestacks-mobile-app` devolvió listas vacías el 04/10/2026. Eso indica ausencia de esos registros en GitHub, sin descartar una publicación manual en otra plataforma.

## Evidencia del equipo conservada

Se incorporaron las imágenes originales de `carestacks-report/chapter-7`, commit `758ce96`, sin recrearlas. La captura `render-after-ci-deploy.png` muestra el deploy `dep-db1egpvf3r2c73buu2hg`, el commit `51decbd` y el estado `Deploy succeeded | Live` del 04/10/2026. La imagen `render-deploy-success.png` corresponde a un despliegue anterior del mismo día con fuente `6e5db99`. Estos commits coinciden con el historial main del backend consultado en GitHub.

El archivo `render-auto-deploy-settings.png` referido por la redacción anterior no existe en la rama del equipo. Se eliminó ese enlace roto y se documentó el alcance de las imágenes reales. Las capturas de deploy y checks no certifican por sí solas el modo `After CI Checks Pass`; para ello falta una captura o lectura de Settings del servicio. El capítulo 7 enlaza la documentación oficial para el procedimiento, sin afirmar que el ajuste fue observado.

## Comprobación actual en navegador

Se abrió `https://carestacks-backend-api.onrender.com/swagger-ui/index.html` en el navegador integrado. Render mostró su página de arranque en frío y posteriormente cargó Swagger con el título `CareConnect Backend API 0.0.1`, `OAS 3.1`, servidor HTTPS y los módulos Consentimiento, Documents, Diary, Notifications, IAM y Agenda. Se guardó la captura; no se enviaron peticiones de registro, login ni cambios a datos de producción.

## Condiciones pendientes de publicación conjunta

El backend corregido y los clientes del cuidador deben integrarse como versiones compatibles. Web y APK requieren `API_BASE_URL` HTTPS en compilación; el valor predeterminado apunta a un backend local. Falta comprobar CORS con la URL del cliente, las peticiones autorizadas de la app oficial de paciente y el recorrido ST-03 en los entornos elegidos. Las sesiones de la corrección son de una sola instancia y se pierden al reiniciar. Las claves de firma, credenciales, base de datos y tokens no se incluyen en esta evidencia.
