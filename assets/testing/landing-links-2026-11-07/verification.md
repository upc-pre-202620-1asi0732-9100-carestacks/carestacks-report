# Corrección de enlaces de contacto — Landing AV2

Fecha: 07/11/2026. Fuente: `carestacks-landing-page`, rama de revisión `chapter-8`, basada en `746ea48`. Corrección publicada en la rama: [`62772ca`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/commit/62772caff439f871aedb3bd12617b10f6e2d8dba). El [parche de la corrección](landing-fix.patch) permite revisar el cambio desde este informe.

## Fallo reproducido en producción

La landing publicada en [Vercel](https://carestacks-landing-page.vercel.app/) mostraba cuatro accesos de contacto por idioma hacia `https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/issues`. Abrir esa dirección en una sesión pública de navegador muestra **Page not found · GitHub**.

| Ubicación | Español | Inglés |
|---|---|---|
| Bloque principal de contacto | Contactar al equipo | Contact the team |
| Columna de cuidadores del footer | Contactar al equipo | Contact the team |
| Columna de soporte del footer | Consultas del proyecto | Project inquiries |
| Contacto del footer | Consultas del proyecto en GitHub | Project inquiries on GitHub |

Las ocho apariciones comparten `CONTACT_URL` en `src/content.ts`. Se sustituye su destino por el [canal público de consultas del informe](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-report/issues), cuya lista de issues abre sin autenticación. No se cambian permisos, visibilidad de repositorios ni configuración de seguridad, y no se envía ninguna consulta.

## Comprobaciones

- Producción ES/EN: todas las anclas internas apuntan a IDs existentes; las imágenes observadas cargan correctamente.
- Términos: la URL existente del README en `chapter-6` carga y su ancla `528-acuerdo-de-servicio---saas-saas-agreement` existe. No se clasifica como 404 ni se cambia su contenido.
- About the Product: el enlace de Microsoft Stream abre el archivo `upc-pre-202620-1asi0732-9100-carestacks-about-the-product-sprint-1.mp4` y expone un reproductor. La existencia del enlace no certifica que el video haya sido actualizado para AV2.
- Vista previa del build corregido: cuatro enlaces por idioma al nuevo canal, sin anclas faltantes; el idioma inglés se conserva tras recargar.
- `npm run lint`: aprobado. `npm run build`: aprobado. El primer build en sandbox recibió EPERM al iniciar un subproceso; la repetición autorizada fuera del sandbox produjo el bundle con salida 0.
- El workflow de CI incluye los pushes a `chapter-8`, además de sus disparadores previos.
- La ejecución de CI asociada al commit de la corrección se consulta en [GitHub Actions](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/actions/runs/42403412775).

El [registro de navegador](browser-checks.json) contiene las ocho apariciones comprobadas y la persistencia del idioma. Las capturas muestran la [landing corregida en vista previa](landing-contact-fixed.jpg) y el [destino público de contacto](contact-destination-public.jpg).

La primera comprobación se realizó en una vista previa local. Posteriormente el usuario solicitó publicar para disponer de la URL funcionando: la [verificación de producción](../../deployment/av2-landing-2026-11-07/verification.md) acredita el despliegue del build corregido en Vercel. `main` se conserva para la integración final solicitada.
