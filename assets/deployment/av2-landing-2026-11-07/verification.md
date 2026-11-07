# Publicación de la landing corregida — 07/11/2026

El usuario solicitó disponer del enlace público funcionando, conservando el merge a `main` para el final. La corrección de la landing se publicó directamente desde `chapter-8` mediante el proyecto Vercel existente.

| Dato | Valor comprobado |
|---|---|
| Código publicado | `62772caff439f871aedb3bd12617b10f6e2d8dba`, rama `chapter-8` de `carestacks-landing-page`. |
| URL pública | [carestacks-landing-page.vercel.app](https://carestacks-landing-page.vercel.app/) |
| Identificador de despliegue | `dpl_AqvZjhqU3jn5KeoB4aLGcknqdgTF` |
| URL inmutable de despliegue | [carestacks-landing-page-btybf9pmo-matias-projects-969e997e.vercel.app](https://carestacks-landing-page-btybf9pmo-matias-projects-969e997e.vercel.app) |
| Resultado de Vercel | `READY`, target `production`; alias público asignado. |
| CI previo del código | [GitHub Actions aprobado](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/actions/runs/42403412775), `headSha=62772ca…`. |

Se ejecutó `vercel deploy --prod --yes` con metadatos del commit y la rama de origen. Vercel instaló las dependencias y ejecutó `tsc -b && vite build`, terminando con código 0 y promoviendo el alias habitual. No se modificó la rama `main` ni se cambió la visibilidad de repositorios.

## Comprobación pública posterior

El [registro de navegador](browser-checks.json) acredita cuatro accesos de contacto por idioma hacia el canal público del informe, sin anclas faltantes. Se hizo clic en el CTA de contacto desde la landing publicada y el destino mostró la página de issues del informe, sin 404. Las imágenes observadas cargaron correctamente. La [captura de producción](landing-production.jpg) muestra el bloque de contacto ya publicado.

Esta evidencia cubre la publicación de los enlaces corregidos. La publicación de la landing no acredita ejecución de los experimentos descritos en el capítulo VIII.
