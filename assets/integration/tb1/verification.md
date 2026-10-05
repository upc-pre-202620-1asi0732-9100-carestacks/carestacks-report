# Integración del reporte TB1

Las ramas de los capítulos I a VII se integraron en `develop` mediante commits de merge, conservando sus autores y su historial. Los conflictos se resolvieron por contenido: se mantuvo el informe consolidado y se incorporaron los aportes pendientes de cada capítulo.

| Rama | Commit integrado | Resolución |
|---|---|---|
| `chapter-1` | `8a336ce` | Se conservó el capítulo consolidado y el apellido del integrante registrado en la carátula. |
| `chapter-2` | `b5d9d6f` | Se incorporó la actualización de precios del análisis competitivo; el costo comparativo simulado sigue identificado como tal. |
| `chapter-3` | `4d784d4` | Su contenido vigente ya coincidía con el capítulo III consolidado; se conservó sin restaurar la plantilla anterior. |
| `chapter-4` | `02132b7` | Se incorporaron el diagrama integrado y las seis vistas de base de datos por bounded context. Se conservaron los diseños y la documentación bilingüe de la landing. |
| `chapter-5` | `9c6d431` | Se incorporaron las capturas ES/EN; se conservaron el stack verificado, los repositorios de la organización, el acuerdo SaaS y el enlace About the Product. |
| `chapter-6` | `7706bb5` | Se incorporaron las pruebas, evidencias y conclusiones actualizadas, y el enlace de exposición TB1. |
| `chapter-7` | `758ce96` | Se conservó el contenido del equipo ya incorporado y actualizado con la evidencia de CI y los límites de despliegue. |

## Verificación antes de promover a main

- Las siete ramas forman parte del historial de la integración.
- Existe una sola sección por capítulo y una sola sección por apartado 7.1–7.3.
- Todos los archivos locales enlazados desde el README existen.
- Las 249 evidencias y archivos de `assets` de `chapter-6` conservan sus blobs Git; las diez imágenes nuevas coinciden con las ramas del equipo.
- Se comprobaron 53 hashes de evidencias de pruebas, navegador y despliegue. Los manifiestos históricos de logs Windows se contrastaron también con su representación CRLF previa a la normalización de Git.
- Los enlaces de About the Product y de exposición TB1 permanecen separados y se conservan sus destinos.
- Las 32 leyendas de figuras tienen numeración consecutiva.
- No quedan archivos sin resolver ni marcadores de conflicto.

El repositorio del reporte no tiene workflows CI configurados. La validación de esta integración comprueba documentación, enlaces, evidencias e historial; no representa una nueva ejecución ni un despliegue de las aplicaciones. Los resultados y límites funcionales siguen documentados en los capítulos VI y VII.
