# About the Product — corrección del enlace, 04/10/2026

La landing enlazaba un video de otro proyecto. Se sustituyó por el video de
CareConnect registrado en el capítulo 5.3, tanto en español como en inglés.

- [Landing pública](https://carestacks-landing-page.vercel.app/#about-product-video).
- [Video About the Product](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202319881_upc_edu_pe/IQD9H0d9sU4tQJuKV5PStHyuAYjfXdpoDfRe-xCc_R1401s).
- [Commit publicado ab2d60e](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/commit/ab2d60eb1302f8e1038f08760e63827f3fba5ebf).
- Despliegue Vercel `dpl_4CMyCEcycwvsUH3HDLieBbiTYrtL`, producción, estado READY.

El botón principal y el enlace secundario abren Microsoft Stream en otra pestaña.
Se retiraron el iframe y la miniatura del video incorrecto del producto. El
contenido de About the Team no se sustituyó porque falta el enlace correcto.

## Verificación

`npm run lint` y `npm run build` finalizaron con código 0. El build de Vercel
también terminó correctamente y actualizó el dominio público. La verificación
manual en el navegador integrado comprobó los dos enlaces de la sección en
ambos idiomas y abrió el archivo correcto desde el botón del sitio publicado.
[CI de la landing](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/actions/runs/37244598095)
terminó con resultado `success` sobre el mismo commit.
Se reprodujo el video `upc-pre-202620-1asi0732-9100-carestacks-about-the-product-sprint-1.mp4`,
de 2:20. No se descargó ni se volvió a publicar el archivo de video.

| Comprobación | Resultado | Evidencia |
|---|---|---|
| Textos y destino en español | Aprobado | [Captura ES](landing-es.jpg) |
| Textos y destino en inglés | Aprobado | [Captura EN](landing-en.jpg) |
| Botón abre el archivo correcto de Stream | Aprobado | [Resultados](browser-checks.json) |
| Reproducción de About the Product | Aprobado | [Reproductor](stream-product.jpg) |

**ST-02 permanece parcial:** queda sustituir y verificar About the Team.
Estas comprobaciones se realizaron en navegador de escritorio; no acreditan
una nueva prueba en navegador móvil ni modifican el estado de ST-03.
