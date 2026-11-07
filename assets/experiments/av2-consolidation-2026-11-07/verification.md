# Consolidación AV2 — 07/11/2026

Esta revisión concilia el bloque D corregido localmente con los aportes remotos de `chapter-8`, sin fusionar ni modificar `main`.

## Fuentes y preservación

- Base local anterior: `9909451`, con correcciones del 24/10 guardadas en README y matriz de cobertura.
- Aportes remotos conservados en el historial: `644725b` (escala/métodos), `e13fbd9` (GSM/tracking), `5de55cc` (historias) y `6dfbb0e` (backlog), por Emy127.
- Antes de actualizar se guardaron copias del README y la matriz local, un parche y un stash recuperable. La rama se actualizó por fast-forward a `6dfbb0e`.
- La numeración se unifica con la actividad AV2: Hypotheses 8.2.1, Measures 8.2.2, Conditions 8.2.3 y escala 8.2.4. El catálogo Domain Business Metrics permanece dentro de 8.2.2.1.

## Correcciones de compatibilidad

| Diferencia encontrada | Decisión final |
|---|---|
| Los aportes nuevos reutilizaban 58 % como línea base observada. | Se elimina esa atribución sin medición. Los cálculos se identifican como escenarios de planificación con supuestos. |
| Reducciones de LRMR distintas entre hipótesis y cálculos. | Se unifica en 40 % de valor práctico y un contraste de mejora frente a cero. |
| Fórmula de proporciones de dosis aplicada como si cada círculo fuera un ensayo binario. | Se calcula y analiza una métrica agregada por círculo; los eventos/dispositivos no multiplican el tamaño de muestra independiente. |
| Se equiparaba una reducción relativa con Cohen d=0.5 sin desviación estándar. | Se explicitan media supuesta, diferencia absoluta y cota de variabilidad; no se presenta esa equivalencia. |
| El tracking y las historias mencionaban ASP.NET, Vue y SignalR como stack implementado. | Se alinean con Spring Boot y Flutter; el canal y la auditoría son capacidades por implementar conforme al diseño. |
| Renderizar una tarjeta servía de base al denominador y enviar un mensaje se confundía con entrega. | Agenda congelada define elegibilidad; la entrega y la visibilidad requieren eventos observables separados. |
| Backlog sin las capacidades de auditoría común y cierre con motivo necesarias para LRMR/TNR. | Se mantienen los IDs existentes y se añaden US-07 y TS-02 para completar la trazabilidad del diseño. |
| Tarjetas con tamaño muestral sin especificar. | Se incorporan objetivos calculados, ventana de 14 días y regla explícita de factibilidad/piloto. |

## Cálculos y método

[calculate_scale.py](calculate_scale.py) usa solo la biblioteca estándar de Python. Produce 138 círculos evaluables por grupo para EXP-01 y 112 para EXP-02; con reserva de pérdida del 15 %, los objetivos de reclutamiento son 163 y 132 por grupo. El total de 590 círculos distintos es un objetivo conservador de planificación, no una base existente o reclutada.

La aproximación normal se aplica a medias de círculos con desviaciones conservadoras de 0.5 en [0,1] y 30 en [0,60]. EXP-02 usa 25→15 minutos como escenario **supuesto** para expresar la reducción relativa del 40 % en una diferencia absoluta de diez minutos. La muestra calculada no garantiza potencia real si cambian los supuestos.

Referencias primarias consultadas el 07/11/2026: [NIST, Sample sizes required](https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm) y [NIST, Two-Sample t-Test for Equal Means](https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm). El análisis primario usa Welch sobre agregados independientes por círculo, unilateral y preespecificado; no selecciona pruebas después de observar significancia o normalidad.

## Evidencia y límites

Las comprobaciones de documentación y los cálculos se registran en esta carpeta. La [revisión de enlaces de la landing](../../testing/landing-links-2026-11-07/verification.md) documenta por separado la reproducción y corrección del 404.

La [comprobación documental](document-checks.json) aprobó índice y referencias locales, las 16 tablas de planificación/diseño, puntuaciones del backlog y coincidencia de las métricas de las tarjetas con el catálogo. También verificó que los capítulos I–VII se conservan salvo los cambios declarados y que el contenido desde 8.3.3 permanece intacto.

Este cambio cierra especificaciones documentales y referencias; no acredita auditoría desplegada, reclutamiento ni experimentos ejecutados. Si la muestra disponible es inferior al objetivo, la ejecución se informa como piloto descriptivo. Las secciones de implementación/resultados se completan con evidencia real cuando se ejecuten. La publicación de la landing y el merge a `main` se reservan para la integración final.
