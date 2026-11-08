# Verificación técnica local AV2 — 08/11/2026

Se revisaron copias aisladas de los repositorios para conservar los directorios de trabajo previos. Las correcciones se subieron únicamente a `develop`. El informe distingue la verificación local/CI de la publicación a producción y de las pruebas con usuarios.

## Versiones y alcance

| Producto | Base revisada | Corrección |
|---|---|---|
| Backend | `5e78755` | [`4aa830b`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/commit/4aa830b47128ffa179c65792df5b9f98a891daf2) |
| Kotlin del paciente | `922361d` | [`64308ce`](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-frontend/commit/64308ced98cb66cac56c895a177f787a48c2eb8f), incluido el arreglo funcional `fc1117a` |

El [resultado estructurado](results.json) conserva conteos, clases de prueba, categorías de advertencia y checksum del APK. Los parches [backend](backend-fix.patch) y [Kotlin](kotlin-fix.patch) permiten revisar las modificaciones completas.

## Backend

Se ejecutó `mvn -B clean verify` con JDK 25, Maven 3.9.11 y H2 desechable. La base tenía 17 pruebas aprobadas. Las nueve pruebas añadidas reprodujeron seis fallos antes de corregir el código; el [registro de regresión](backend-security-before.xml) conserva los casos sin propiedades del entorno ni logs de aplicación.

| Control | Resultado del arreglo |
|---|---|
| CORS | Lista de orígenes exactos configurable con `APP_CORS_ALLOWED_ORIGINS`; se rechazan comodines. El frontend conocido recibe el preflight y un origen arbitrario obtiene 403. |
| Sesión por defecto | Filtro con validación IAM de sesión opaca vigente; ausencia, fabricación y revocación reciben 401 en rutas privadas. |
| Accesos públicos | POST de login/registro, Swagger/OpenAPI y health explícitos. |
| Actuator | `info` y `metrics` requieren sesión; health permanece público sin detalles internos. |
| Consola H2 | `APP_H2_CONSOLE_ENABLED=false` por defecto. |
| Perfil de pruebas | Se carga la configuración general y se sustituye la base por H2 `create-drop`, con esquema `PUBLIC`. |
| Gate final | **26 pruebas, 0 fallos, 0 errores; JAR generado.** |

La prueba de H2 ya aprobaba en la configuración antigua de tests, que ocultaba parte de la configuración general; el valor `enabled: true` se encontró inspeccionando el archivo principal. El perfil separado evita usar ese resultado como prueba de una configuración de producción que no se había cargado.

Los controles de propietario y consentimiento de los controllers se conservan. Los casos de Agenda prueban aislamiento/revocación; la autenticación común no equivale a una auditoría completa de autorización de todos los recursos.

## Kotlin

Se ejecutó `gradlew.bat --no-daemon lintDebug testDebugUnitTest assembleDebug` con JDK 21, Gradle 9.4.1 y SDK 36.1.

| Comprobación | Antes | Después |
|---|---|---|
| Android Lint | 55 errores `NewApi` y 46 advertencias | **0 errores y 46 advertencias** |
| Causa | `java.time` con mínimo API 24 sin core library desugaring | Compatibilidad habilitada y `desugar_jdk_libs:2.1.5` en el catálogo |
| Prueba unitaria existente | No se usa como evidencia de flujo | 1 prueba aritmética aprobada, 0 fallos/errores |
| Artefacto | No acreditado por esta revisión inicial | APK debug generado; checksum en `results.json` |

Se conservan los informes de lint [antes](kotlin-lint-before.xml) y [después](kotlin-lint-after.xml). No se añadió una baseline ni se deshabilitó una regla para ocultar los errores. Las 46 advertencias siguen abiertas: incluyen dependencias, recursos/iconos, localización y una advertencia de referencia estática de contexto. No se presentan todas como asuntos cosméticos.

El workflow `Android verification` repite lint, prueba unitaria y compilación, y guarda informes/APK. Se corrigió su instalación del SDK para solicitar `platform-tools` sin el paquete obsoleto `tools`. La configuración final se verifica en la ejecución enlazada.

## CI y límites

El [estado de CI por commit](ci-status.json) conserva las tres ejecuciones aprobadas. Backend: [Backend CI](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/actions/runs/42519128328) y [CI con build Docker](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/actions/runs/42519128519). Android: [Android verification](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-frontend/actions/runs/42519491295).

Esta evidencia no acredita instalación en un dispositivo API 24, validación de las tareas del paciente, configuración efectiva de Render, ni el recorrido ST-03. `ApiConfig.kt` del cliente Kotlin todavía contiene la URL heredada `careconnect-backend-hvyq.onrender.com`; su destino y compatibilidad deben conciliarse con el API documentado `carestacks-backend-api.onrender.com` antes de ese recorrido. No se afirma que el destino heredado esté caído sin una comprobación.

Referencias técnicas consultadas: [Android Developers](https://developer.android.com/studio/write/java8-support#library-desugaring), [changelog de Google](https://github.com/google/desugar_jdk_libs/blob/master/CHANGELOG.md), [arquitectura de autenticación Spring Security](https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html) y [CORS en Spring MVC](https://docs.spring.io/spring-framework/reference/web/webmvc-cors.html).
