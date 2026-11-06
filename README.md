<!--
=====================================================================
 PLANTILLA — Informe de Trabajo Final · 1ASI0732 Diseño de Experimentos
 Un solo archivo README.md (archivo principal del repositorio del informe).
 Estructura completa según el statement: 3 Partes, 8 Capítulos + anexos.
 Reemplazar cada <placeholder> y cada bloque > _Guía:_ con el contenido real.
 Recordar: actualizar y VERIFICAR la Tabla de Contenidos antes de cada entrega.
=====================================================================
-->

<!-- CARÁTULA -->
<div align="center">

<img src="assets/UPC_logo_transparente.png" alt="Logo UPC" width="180"/>

# Universidad Peruana de Ciencias Aplicadas

---

## Carrera de Ingeniería de Software

---

1ASI0732

Diseño de Experimentos de Ingeniería de Software

**NRC**

9100

**Informe de Trabajo Final**

**Docente**

Sanchez Ponce, Alex Humberto

**Startup**

CareStacks

**Producto**

CareConnect

**Integrantes**

<center>

| Código | Apellidos y Nombres |
|---|---|
| U202319881 | Baldeon Armas, Santiago Armando |
| U202415495 | Espinoza Cruz, Angela Milagros |
| U202319563 | Muñiz Huayanca, Percy Alonso |
| U20221G099 | Nikaido Vargas, Javier Masaru |
| U202319698 | Salcedo Champi, Matias Rodolfo |

</center>

**Período 2026-20**

Septiembre, 2026

</div>

---
# REGISTRO DE VERSIONES DEL INFORME

| **Versión** | **Fecha** | **Autor** | **Descripción de modificación** |
|:---:|:---:|---|---|
| 0.1.0 | 31/08/2026 | Matias Salcedo | Creó la plantilla base del informe final (`main`) |
| 0.2.0 | 01/09/2026 – 08/09/2026 | Matias Salcedo | Redactó el Capítulo III, desarrollando las user stories, el product backlog, el impact mapping, el to-be scenario mapping y el llenado de la carátula (`chapter-3`) |
| 0.3.0 | 04/09/2026 – 05/09/2026 | Angela Espinoza | Desarrolló el Capítulo II a partir de las personas, los empathy maps, los journey maps y el análisis de needfinding (`chapter-2`) |
| 0.4.0 | 07/09/2026 | Javier Nikaido | Elaboró los diagramas de arquitectura, de clases y de base de datos del Capítulo IV (`chapter-4`) |
| 0.5.0 | 07/09/2026 | Angela Espinoza | Amplió el Capítulo II incorporando el enfoque Lean UX (problem statement, hipótesis y canvas), los segmentos objetivo y el análisis competitivo (`chapter-2`) |
| 0.6.0 | 08/09/2026 | Matias Salcedo | Completó la especificación de requerimientos del Capítulo III y afinó el backlog junto con el impact map (`chapter-3`) |
| 0.7.0 | 09/09/2026 | Angela Espinoza / Santiago Baldeon | Redactaron el Capítulo I describiendo el perfil de la startup y los perfiles de los integrantes del equipo (`chapter-1`, `chapter-2`) |
| 0.8.0 | 09/09/2026 – 10/09/2026 | Javier Nikaido | Implementó y documentó la Landing Page junto con su configuración de despliegue para el Capítulo V (`chapter-5`) |
| 0.9.0 | 10/09/2026 | Percy Muñiz | Incorporó la evidencia de la aplicación móvil en iOS, el prototipado y los sprint backlogs del Capítulo V (`chapter-5`) |
| 0.10.0 | 10/09/2026 | Javier Nikaido | Revisó los perfiles de los integrantes y ajustó la guía de requisitos del Capítulo IV (`chapter-1`, `chapter-4`) |
| 0.11.0 | 11/09/2026 | Matias Salcedo | Completó la sección de diseño UX web del Capítulo II (`chapter-2`) |
| 0.12.0 | 14/09/2026 | Angela Espinoza | Añadió el As-Is Scenario Mapping, el glosario de ubiquitous language, las referencias en formato APA 7 y reescribió el proceso Lean UX (`chapter-1`, `chapter-2`) |
| 0.13.0 | 14/09/2026 | Javier Nikaido / Percy Muñiz | Revisaron el class dictionary y el stack tecnológico, migraron el frontend a Flutter y ajustaron la configuración de despliegue (`chapter-4`, `chapter-5`) |
| 0.14.0 | 15/09/2026 | Santiago Baldeon | Elaboró los wireframes y mockups de la aplicación móvil del Capítulo IV (`chapter-4`) |
| 1.0.0 | 16/09/2026 | Matias Salcedo | AV1 Report |

# Project Report Collaboration Insights

Enlace de la organización para el reporte del proyecto: https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-report

AV1:
<img src="assets/insights_report_commits.png">
<img src="assets/insights_report_branchs.png">

## Tabla de Contenidos

<!-- 4 niveles. Verificar los anclajes (#) antes de cada entrega: GitHub genera el ancla a partir del texto del título. -->

- [Student Outcome](#student-outcome)
- [Part I: As-Is Software Project](#part-i-as-is-software-project)
  - [Capítulo I: Introducción](#capítulo-i-introducción)
    - [1.1. Startup Profile](#11-startup-profile)
      - [1.1.1. Descripción de la Startup](#111-descripción-de-la-startup)
      - [1.1.2. Perfiles de integrantes del equipo](#112-perfiles-de-integrantes-del-equipo)
    - [1.2. Solution Profile](#12-solution-profile)
      - [1.2.1. Antecedentes y problemática](#121-antecedentes-y-problemática)
      - [1.2.2. Lean UX Process](#122-lean-ux-process)
        - [1.2.2.1. Lean UX Problem Statements](#1221-lean-ux-problem-statements)
        - [1.2.2.2. Lean UX Assumptions](#1222-lean-ux-assumptions)
        - [1.2.2.3. Lean UX Hypothesis Statements](#1223-lean-ux-hypothesis-statements)
        - [1.2.2.4. Lean UX Canvas](#1224-lean-ux-canvas)
    - [1.3. Segmentos objetivo](#13-segmentos-objetivo)
    - [Segmento Objetivo 1: Cuidadores de pacientes geriátricos](#segmento-objetivo-1-cuidadores-de-pacientes-geriátricos)
    - [Segmento Objetivo 2: Pacientes geriátricos](#segmento-objetivo-2-pacientes-geriátricos)
  - [Capítulo II: Requirements Elicitation & Analysis](#capítulo-ii-requirements-elicitation--analysis)
    - [2.1. Competidores](#21-competidores)
      - [2.1.1. Análisis competitivo](#211-análisis-competitivo)
      - [2.1.2. Estrategias y tácticas frente a competidores](#212-estrategias-y-tácticas-frente-a-competidores)
    - [2.2. Entrevistas](#22-entrevistas)
      - [2.2.1. Diseño de entrevistas](#221-diseño-de-entrevistas)
      - [Segmento 1: Cuidadores de pacientes geriátricos](#segmento-1-cuidadores-de-pacientes-geriátricos)
      - [Segmento 2: Pacientes geriátricos](#segmento-2-pacientes-geriátricos)
      - [2.2.2. Registro de entrevistas](#222-registro-de-entrevistas)
      - [Segmento 1: Cuidadores de pacientes geriátricos](#segmento-1-cuidadores-de-pacientes-geriátricos-1)
      - [Segmento 2: Pacientes geriátricos](#segmento-2-pacientes-geriátricos-1)
      - [2.2.3. Análisis de entrevistas](#223-análisis-de-entrevistas)
      - [Segmento 1: Cuidadores de pacientes geriátricos](#segmento-1-cuidadores-de-pacientes-geriátricos-2)
      - [Segmento 2: Pacientes geriátricos](#segmento-2-pacientes-geriátricos-2)
      - [Conclusión general del análisis](#conclusión-general-del-análisis)
    - [2.3. Needfinding](#23-needfinding)
      - [2.3.1. User Personas](#231-user-personas)
      - [2.3.2. User Task Matrix](#232-user-task-matrix)
      - [2.3.3. User Journey Mapping](#233-user-journey-mapping)
      - [2.3.4. Empathy Mapping](#234-empathy-mapping)
      - [2.3.5. As-is Scenario Mapping](#235-as-is-scenario-mapping)
        - [User Persona 1 — Valeria Huamán](#user-persona-1--valeria-huamán)
        - [User Persona 2 — Rafael Medina](#user-persona-2--rafael-medina)
        - [Hallazgos transversales](#hallazgos-transversales)
    - [2.4. Ubiquitous Language](#24-ubiquitous-language)
        - [Actores del cuidado](#actores-del-cuidado)
        - [Agenda y eventos de salud](#agenda-y-eventos-de-salud)
        - [Medicación y adherencia](#medicación-y-adherencia)
        - [Continuidad del cuidado](#continuidad-del-cuidado)
        - [Documentación y evolución](#documentación-y-evolución)
  - [Capítulo III: Requirements Specification](#capítulo-iii-requirements-specification)
    - [3.1. To-Be Scenario Mapping](#31-to-be-scenario-mapping)
        - [Comparación con el As-Is Scenario Mapping (sección 2.3.5)](#comparación-con-el-as-is-scenario-mapping-sección-235)
    - [3.2. User Stories](#32-user-stories)
    - [3.3. Product Backlog](#33-product-backlog)
    - [3.4. Impact Mapping](#34-impact-mapping)
  - [Capítulo IV: Product Design](#capítulo-iv-product-design)
    - [4.1. Style Guidelines](#41-style-guidelines)
      - [4.1.1. General Style Guidelines](#411-general-style-guidelines)
      - [4.1.2. Web Style Guidelines](#412-web-style-guidelines)
      - [4.1.3. Mobile Style Guidelines](#413-mobile-style-guidelines)
        - [4.1.3.1. iOS Mobile Style Guidelines](#4131-ios-mobile-style-guidelines)
        - [4.1.3.2. Android Mobile Style Guidelines](#4132-android-mobile-style-guidelines)
    - [4.2. Information Architecture](#42-information-architecture)
      - [4.2.1. Organization Systems](#421-organization-systems)
      - [4.2.2. Labeling Systems](#422-labeling-systems)
      - [4.2.3. SEO Tags and Meta Tags](#423-seo-tags-and-meta-tags)
      - [4.2.4. Searching Systems](#424-searching-systems)
      - [4.2.5. Navigation Systems](#425-navigation-systems)
    - [4.3. Landing Page UI Design](#43-landing-page-ui-design)
      - [4.3.1. Landing Page Wireframe](#431-landing-page-wireframe)
      - [4.3.2. Landing Page Mock-up](#432-landing-page-mock-up)
    - [4.4. Mobile Applications UX/UI Design](#44-mobile-applications-uxui-design)
      - [4.4.1. Mobile Applications Wireframes](#441-mobile-applications-wireframes)
      - [4.4.2. Mobile Applications Wireflow Diagrams](#442-mobile-applications-wireflow-diagrams)
        - [User Goal 1: Registro y selección de rol](#user-goal-1-registro-y-selección-de-rol)
        - [User Goal 2: Inicio de sesión](#user-goal-2-inicio-de-sesión)
        - [User Goal 3: Confirmar toma de medicación (Cuidador)](#user-goal-3-confirmar-toma-de-medicación-cuidador)
        - [User Goal 4: Compartir el perfil con un nuevo cuidador (Paciente)](#user-goal-4-compartir-el-perfil-con-un-nuevo-cuidador-paciente)
        - [User Goal 5: Revisar y resolver notificaciones (Cuidador)](#user-goal-5-revisar-y-resolver-notificaciones-cuidador)
        - [User Goal 6: Registrar un evento en Agenda](#user-goal-6-registrar-un-evento-en-agenda)
        - [User Goal 7: Subir un documento médico](#user-goal-7-subir-un-documento-médico)
      - [4.4.3. Mobile Applications Mock-ups](#443-mobile-applications-mock-ups)
      - [4.4.4. Mobile Applications User Flow Diagrams](#444-mobile-applications-user-flow-diagrams)
    - [4.5. Mobile Applications Prototyping](#45-mobile-applications-prototyping)
      - [4.5.1. Android Mobile Applications Prototyping](#451-android-mobile-applications-prototyping)
      - [4.5.2. iOS Mobile Applications Prototyping](#452-ios-mobile-applications-prototyping)
    - [4.6. Web Applications UX/UI Design](#46-web-applications-uxui-design)
      - [4.6.1. Web Applications Wireframes](#461-web-applications-wireframes)
      - [4.6.2. Web Applications Wireflow Diagrams](#462-web-applications-wireflow-diagrams)
      - [4.6.3. Web Applications Mock-ups](#463-web-applications-mock-ups)
      - [4.6.4. Web Applications User Flow Diagrams](#464-web-applications-user-flow-diagrams)
    - [4.7. Web Applications Prototyping](#47-web-applications-prototyping)
    - [4.8. Domain-Driven Software Architecture](#48-domain-driven-software-architecture)
      - [4.8.1. Software Architecture Context Diagram](#481-software-architecture-context-diagram)
        - [Elementos del Context Diagram](#elementos-del-context-diagram)
        - [Relaciones principales](#relaciones-principales)
      - [4.8.2. Software Architecture Container Diagrams](#482-software-architecture-container-diagrams)
        - [Containers de CareConnect](#containers-de-careconnect)
        - [Relaciones entre containers](#relaciones-entre-containers)
        - [Consideración tecnológica](#consideración-tecnológica)
      - [4.8.3. Software Architecture Components Diagrams](#483-software-architecture-components-diagrams)
        - [Componentes principales](#componentes-principales)
        - [Relaciones principales entre componentes](#relaciones-principales-entre-componentes)
    - [4.9. Software Object-Oriented Design](#49-software-object-oriented-design)
      - [4.9.1. Class Diagrams](#491-class-diagrams)
        - [Bounded Context: Agenda](#bounded-context-agenda)
        - [Bounded Context: Notificaciones](#bounded-context-notificaciones)
        - [Bounded Context: Diario de Seguimiento](#bounded-context-diario-de-seguimiento)
        - [Bounded Context: Gestión de Consentimiento](#bounded-context-gestión-de-consentimiento)
        - [Bounded Context: Documentos](#bounded-context-documentos)
        - [Bounded Context: Autenticación / IAM](#bounded-context-autenticación--iam)
      - [4.9.2. Class Dictionary](#492-class-dictionary)
        - [Bounded Context Agenda](#bounded-context-agenda-1)
        - [Bounded Context Notifications](#bounded-context-notifications)
        - [Bounded Context Diary Tracking](#bounded-context-diary-tracking)
        - [Bounded Context Consent Management](#bounded-context-consent-management)
        - [Bounded Context Documents](#bounded-context-documents)
        - [Bounded Context Authentication / IAM](#bounded-context-authentication--iam)
        - [Resumen del Diccionario de Clases](#resumen-del-diccionario-de-clases)
    - [4.10. Database Design](#410-database-design)
      - [4.10.1. Relational/Non-Relational Database Diagram](#4101-relationalnon-relational-database-diagram)
        - [Agrupación conceptual por bounded context](#agrupación-conceptual-por-bounded-context)
        - [Persistencia relacional](#persistencia-relacional)
        - [Persistencia de archivos](#persistencia-de-archivos)
  - [Capítulo V: Product Implementation](#capítulo-v-product-implementation)
    - [5.1. Software Configuration Management](#51-software-configuration-management)
      - [5.1.1. Software Development Environment Configuration](#511-software-development-environment-configuration)
        - [Herramientas por actividad](#herramientas-por-actividad)
        - [Configuración de la Native Mobile Application](#configuración-de-la-native-mobile-application)
        - [Configuración del Backend RESTful API](#configuración-del-backend-restful-api)
        - [Variables de entorno del Backend](#variables-de-entorno-del-backend)
        - [Configuración de la Landing Page](#configuración-de-la-landing-page)
        - [Configuración de la Frontend Web Application](#configuración-de-la-frontend-web-application)
        - [Consideración sobre el stack del curso](#consideración-sobre-el-stack-del-curso)
      - [5.1.2. Source Code Management](#512-source-code-management)
      - [Repositorio del informe](#repositorio-del-informe)
      - [Estrategia de ramas](#estrategia-de-ramas)
      - [Convenciones para nombres de ramas](#convenciones-para-nombres-de-ramas)
      - [Repositorios de producto](#repositorios-de-producto)
      - [Convenciones de GitFlow para los repositorios de producto](#convenciones-de-gitflow-para-los-repositorios-de-producto)
      - [Versionado Semántico (Semantic Versioning)](#versionado-semántico-semantic-versioning)
      - [Conventional Commits](#conventional-commits)
      - [5.1.3. Source Code Style Guide & Conventions](#513-source-code-style-guide--conventions)
        - [Convenciones generales](#convenciones-generales)
        - [Organización del Backend](#organización-del-backend)
        - [Convenciones Java / Spring Boot](#convenciones-java--spring-boot)
        - [Convenciones Kotlin / Android](#convenciones-kotlin--android)
        - [Convenciones TypeScript / Frontend](#convenciones-typescript--frontend)
        - [Convenciones REST](#convenciones-rest)
        - [Convenciones de Base de Datos](#convenciones-de-base-de-datos)
        - [Convenciones Gherkin](#convenciones-gherkin)
        - [Buenas prácticas](#buenas-prácticas)
      - [5.1.4. Software Deployment Configuration](#514-software-deployment-configuration)
        - [Landing Page](#landing-page)
        - [Frontend Web Application](#frontend-web-application)
        - [RESTful API](#restful-api)
        - [Configuración objetivo de la RESTful API](#configuración-objetivo-de-la-restful-api)
        - [PostgreSQL](#postgresql)
        - [Supabase Storage](#supabase-storage)
        - [Native Mobile Application](#native-mobile-application)
        - [Firebase Cloud Messaging](#firebase-cloud-messaging)
        - [SendGrid](#sendgrid)
        - [Gestión de variables de entorno](#gestión-de-variables-de-entorno)
        - [Entornos de despliegue](#entornos-de-despliegue)
        - [Estado actual del despliegue](#estado-actual-del-despliegue)
        - [Criterios de validación del despliegue](#criterios-de-validación-del-despliegue)
        - [Seguridad de la configuración](#seguridad-de-la-configuración)
    - [5.2. Product Implementation & Deployment](#52-product-implementation--deployment)
      - [5.2.1. Sprint Backlogs](#521-sprint-backlogs)
      - [Sprint 1](#sprint-1)
        - [Sprint Planning 1](#sprint-planning-1)
        - [Aspect Leaders and Collaborators](#aspect-leaders-and-collaborators)
        - [Sprint Backlog 1](#sprint-backlog-1)
      - [5.2.2. Implemented Landing Page Evidence](#522-implemented-landing-page-evidence)
        - [Deployment Evidence](#deployment-evidence)
        - [Home and Problem Section](#home-and-problem-section)
        - [Features Section](#features-section)
        - [Product, Benefits and How It Works](#product-benefits-and-how-it-works)
        - [Plans, Contact and Footer](#plans-contact-and-footer)
      - [5.2.3. Implemented Frontend-Web Application Evidence](#523-implemented-frontend-web-application-evidence)
      - [5.2.4. Acuerdo de Servicio - SaaS](#524-acuerdo-de-servicio---saas)
      - [5.2.5. Implemented Native-Mobile Application Evidence](#525-implemented-native-mobile-application-evidence)
      - [5.2.6. Implemented RESTful API and/or Serverless Backend Evidence](#526-implemented-restful-api-andor-serverless-backend-evidence)
      - [5.2.7. RESTful API documentation](#527-restful-api-documentation)
      - [5.2.8. Team Collaboration Insights](#528-team-collaboration-insights)
      - [Repositorio del Informe (`carestacks-report`)](#repositorio-del-informe-carestacks-report)
      - [Repositorio del Backend (`carestacks-backend-api`)](#repositorio-del-backend-carestacks-backend-api)
      - [Repositorio de la Aplicación Móvil (`carestacks-mobile-app`)](#repositorio-de-la-aplicación-móvil-carestacks-mobile-app)
      - [Repositorio de la Aplicación Web (`carestacks-web`)](#repositorio-de-la-aplicación-web-carestacks-web)
      - [Interpretación](#interpretación)
    - [5.3. Video About-the-Product](#53-video-about-the-product)
- [Part II: Verification, Validation & Pipeline](#part-ii-verification-validation--pipeline)
  - [Capítulo VI: Product Verification & Validation](#capítulo-vi-product-verification--validation)
    - [6.1. Testing Suites & Validation](#61-testing-suites--validation)
      - [6.1.1. Core Entities Unit Tests](#611-core-entities-unit-tests)
      - [6.1.2. Core Integration Tests](#612-core-integration-tests)
      - [6.1.3. Core Behavior-Driven Development](#613-core-behavior-driven-development)
      - [6.1.4. Core System Tests](#614-core-system-tests)
    - [6.2. Static testing & Verification](#62-static-testing--verification)
      - [6.2.1. Static Code Analysis](#621-static-code-analysis)
        - [6.2.1.1. Coding standard & Code conventions](#6211-coding-standard--code-conventions)
        - [6.2.1.2. Code Quality & Code Security](#6212-code-quality--code-security)
      - [6.2.2. Reviews](#622-reviews)
    - [6.3. Validation Interviews](#63-validation-interviews)
      - [6.3.1. Diseño de Entrevistas](#631-diseño-de-entrevistas)
      - [6.3.2. Registro de Entrevistas](#632-registro-de-entrevistas)
      - [6.3.3. Evaluaciones según heurísticas](#633-evaluaciones-según-heurísticas)
    - [6.4. Auditoría de Experiencias de Usuario](#64-auditoría-de-experiencias-de-usuario)
      - [6.4.1. Auditoría realizada](#641-auditoría-realizada)
        - [6.4.1.1. Información del grupo auditado](#6411-información-del-grupo-auditado)
        - [6.4.1.2. Cronograma de auditoría realizada](#6412-cronograma-de-auditoría-realizada)
        - [6.4.1.3. Contenido de auditoría realizada](#6413-contenido-de-auditoría-realizada)
      - [6.4.2. Auditoría recibida](#642-auditoría-recibida)
        - [6.4.2.1. Información del grupo auditor](#6421-información-del-grupo-auditor)
        - [6.4.2.2. Cronograma de auditoría recibida](#6422-cronograma-de-auditoría-recibida)
        - [6.4.2.3. Contenido de auditoría recibida](#6423-contenido-de-auditoría-recibida)
        - [6.4.2.4. Resumen de modificaciones para subsanar hallazgos](#6424-resumen-de-modificaciones-para-subsanar-hallazgos)
  - [Capítulo VII: DevOps Practices](#capítulo-vii-devops-practices)
    - [7.1. Continuous Integration](#71-continuous-integration)
      - [7.1.1. Tools and Practices](#711-tools-and-practices)
      - [7.1.2. Build & Test Suite Pipeline Components](#712-build--test-suite-pipeline-components)
    - [7.2. Continuous Delivery](#72-continuous-delivery)
      - [7.2.1. Tools and Practices](#721-tools-and-practices)
      - [7.2.2. Stages Deployment Pipeline Components](#722-stages-deployment-pipeline-components)
    - [7.3. Continuous deployment](#73-continuous-deployment)
      - [7.3.1. Tools and Practices](#731-tools-and-practices)
      - [7.3.2. Production Deployment Pipeline Components](#732-production-deployment-pipeline-components)
    - [7.4. Continuous Monitoring](#74-continuous-monitoring)
      - [7.4.1. Tools and Practices](#741-tools-and-practices)
      - [7.4.2. Monitoring Pipeline Components](#742-monitoring-pipeline-components)
      - [7.4.3. Alerting Pipeline Components](#743-alerting-pipeline-components)
      - [7.4.4. Notification Pipeline Components](#744-notification-pipeline-components)
- [Part III: Experiment-Driven Lifecycle](#part-iii-experiment-driven-lifecycle)
  - [Capítulo VIII: Experiment-Driven Development](#capítulo-viii-experiment-driven-development)
    - [8.1. Experiment Planning](#81-experiment-planning)
      - [8.1.1. As-Is Summary](#811-as-is-summary)
      - [8.1.2. Raw Material: Assumptions, Knowledge Gaps, Ideas, Claims](#812-raw-material-assumptions-knowledge-gaps-ideas-claims)
      - [8.1.3. Experiment-Ready Questions](#813-experiment-ready-questions)
      - [8.1.4. Question Backlog](#814-question-backlog)
      - [8.1.5. Experiment Cards](#815-experiment-cards)
    - [8.2. Experiment Design](#82-experiment-design)
      - [8.2.1. Hypotheses](#821-hypotheses)
      - [8.2.2. Domain Business Metrics](#822-domain-business-metrics)
      - [8.2.3. Measures](#823-measures)
      - [8.2.4. Conditions](#824-conditions)
      - [8.2.5. Scale Calculations and Decisions](#825-scale-calculations-and-decisions)
      - [8.2.6. Methods Selection](#826-methods-selection)
      - [8.2.7. Data Analytics: Goals, KPIs and Metrics Selection](#827-data-analytics-goals-kpis-and-metrics-selection)
      - [8.2.8. Web and Mobile Tracking Plan](#828-web-and-mobile-tracking-plan)
    - [8.3. Experimentation](#83-experimentation)
      - [8.3.1. To-Be User Stories](#831-to-be-user-stories)
      - [8.3.2. To-Be Product Backlog](#832-to-be-product-backlog)
      - [8.3.3. Pipeline-supported, Experiment-Driven To-Be Software Platform Lifecycle](#833-pipeline-supported-experiment-driven-to-be-software-platform-lifecycle)
        - [8.3.3.1. To-Be Sprint Backlogs](#8331-to-be-sprint-backlogs)
        - [8.3.3.2. Implemented To-Be Landing Page Evidence](#8332-implemented-to-be-landing-page-evidence)
        - [8.3.3.3. Implemented To-Be Frontend-Web Application Evidence](#8333-implemented-to-be-frontend-web-application-evidence)
        - [8.3.3.4. Implemented To-Be Native-Mobile Application Evidence](#8334-implemented-to-be-native-mobile-application-evidence)
        - [8.3.3.5. Implemented To-Be RESTful API and/or Serverless Backend Evidence](#8335-implemented-to-be-restful-api-andor-serverless-backend-evidence)
        - [8.3.3.6. Team Collaboration Insights](#8336-team-collaboration-insights)
      - [8.3.4. To-Be Validation Interviews](#834-to-be-validation-interviews)
        - [8.3.4.1. Diseño de Entrevistas](#8341-diseño-de-entrevistas)
        - [8.3.4.2. Registro de Entrevistas](#8342-registro-de-entrevistas)
    - [8.4. Experiment Aftermath & Analysis](#84-experiment-aftermath--analysis)
      - [8.4.1. Analysis and Interpretation of Results](#841-analysis-and-interpretation-of-results)
      - [8.4.2. Re-scored and Re-prioritized Question Backlog](#842-re-scored-and-re-prioritized-question-backlog)
    - [8.5. Continuous Learning](#85-continuous-learning)
      - [8.5.1. Shareback Session Artifacts: Learning Workflow](#851-shareback-session-artifacts-learning-workflow)
    - [8.6. To-Be Software Platform Pre-launch](#86-to-be-software-platform-pre-launch)
      - [8.6.1. About-the-Product Intro Video](#861-about-the-product-intro-video)
      - [8.6.2. Resumen usando Gees Framework](#862-resumen-usando-gees-framework)
  - [Conclusiones](#conclusiones)
    - [Conclusiones y recomendaciones](#conclusiones-y-recomendaciones)
  - [Bibliografía](#bibliografía)
  - [Anexos](#anexos)
    - [Anexo A: Archivo de Figma](#anexo-a-archivo-de-figma)
    - [Anexo B: Video de Entrevistas](#anexo-b-video-de-entrevistas)
    - [Anexo C: Repositorios de Producto](#anexo-c-repositorios-de-producto)
    - [Anexo: Videos](#anexo-videos)

# Student Outcome

Cada participante del equipo debe sustentar evidencia de cómo las actividades realizadas en el trabajo final han ayudado a desarrollar las dimensiones del student outcome. Por ello en esta sección debe haber una subsección por cada alumno donde éste describa por escrito la relación entre el outcome, sus dimensiones y el trabajo que ha realizado. Esto se complementa con lo reflejado en los testimonios expuestos que forman parte del video About The Team.

**ABET – EAC - Student Outcome 4**

| Criterio específico | Acciones realizadas | Conclusiones |
|----|----|----|
|4.c.1 Reconoce responsabilidad ética y profesional en situaciones de ingeniería de software|**Espinoza Cruz, Angela Milagros**<br>*AV1*<br>Redacté la descripción de la startup, los perfiles del equipo, el problema y la problemática, el proceso completo de Lean UX (Problem Statements, Assumptions, Hypothesis Statements y Canvas) y los segmentos objetivo en el Capítulo I. En el Capítulo II, desarrollé el análisis competitivo, el diseño y registro de entrevistas, los User Personas, User Task Matrix, Journey Maps, Empathy Maps, As-Is Scenario Mapping y el glosario de Ubiquitous Language.<br><br>**Salcedo Champi, Matias Rodolfo**<br>*AV1*<br>Configuré la plantilla inicial del informe y la carátula del equipo. En el Capítulo III, redacté el To-Be Scenario Mapping, las User Stories, el Product Backlog y el Impact Mapping. En el Capítulo IV, completé la sección de Web Applications UX/UI Design.<br><br>**Nikaido Vargas, Javier Masaru**<br>*AV1*<br>En el Capítulo IV, elaboré los diagramas de arquitectura (Context, Container y Components), los diagramas y diccionario de clases, y el diagrama de base de datos. En el Capítulo V, documenté la Software Configuration Management, la evidencia de despliegue del Landing Page y la configuración de despliegue de los productos de CareConnect.<br><br>**Baldeon Armas, Santiago Armando**<br>*AV1*<br>Colaboré en la documentación de los perfiles de integrantes del equipo en el Capítulo I y en contenido del Capítulo IV.<br><br>**Muñiz Huayanca, Percy Alonso**<br>*AV1*<br>En el Capítulo IV, documenté el prototipado de la aplicación móvil (iOS con Flutter) y adapté la base Flutter del segmento cuidador a un prototipo funcional de escritorio para el Capítulo IV.7. En el Capítulo V, documenté la evidencia de implementación del Frontend-Web, la evidencia Native-Mobile, la evidencia del backend RESTful y su documentación en Swagger, y actualicé los Sprint Backlogs con el detalle técnico de cada tarea.|**AV1**<br><br>La actualización constante de conceptos y conocimientos en ingeniería de software nos permitió abordar de manera efectiva los retos de los capítulos desarrollados hasta esta entrega, aplicando metodologías actuales —Lean UX, Domain-Driven Design, arquitectura C4 y mejores prácticas de implementación para el desarrollo del proyecto y nuestro crecimiento profesional.|
|4.c.2 Emite juicios informados considerando el impacto de las soluciones de ingeniería de software en contextos globales, económicos, ambientales y sociales|**Espinoza Cruz, Angela Milagros**<br>*AV1*<br>La elaboración del Lean UX Canvas y el análisis competitivo me exigió investigar metodologías de validación temprana de producto y herramientas de análisis de mercado que no había aplicado antes. El diseño y análisis de entrevistas reforzó la importancia de la empatía y el aprendizaje continuo sobre experiencia de usuario en un dominio sensible como el cuidado de adultos mayores.<br><br>**Salcedo Champi, Matias Rodolfo**<br>*AV1*<br>Redactar el Product Backlog y el Impact Mapping me llevó a profundizar en técnicas de priorización de historias de usuario. Completar el diseño UX/UI web me exigió aprender a adaptar un sistema de diseño pensado originalmente para móvil hacia un contexto de escritorio.<br><br>**Nikaido Vargas, Javier Masaru**<br>*AV1*<br>Elaborar los diagramas C4 y el diccionario de clases me llevó a profundizar en Domain-Driven Design y en la representación formal de bounded contexts. Documentar la configuración de despliegue me impulsó a investigar buenas prácticas de gestión de variables de entorno y separación de ambientes.<br><br>**Baldeon Armas, Santiago Armando**<br>*AV1*<br>Colaborar en la documentación del equipo y del Capítulo IV me motivó a revisar cómo estructurar información técnica de forma clara para distintos lectores del informe.<br><br>**Muñiz Huayanca, Percy Alonso**<br>*AV1*<br>Adaptar la aplicación móvil Flutter a un prototipo web funcional me exigió aprender sobre sistemas de layout responsive y jerarquía visual en Flutter Web, algo que no había trabajado antes. Levantar y documentar el backend con Swagger me llevó a profundizar en configuración de CORS, gestión de variables de entorno y buenas prácticas de control de versiones (Git) que no dominaba con este nivel de detalle.|**AV1**<br><br>El aprendizaje permanente ha sido fundamental para adaptarnos a los retos técnicos y metodológicos de los capítulos desarrollados hasta esta entrega, permitiéndonos incorporar nuevas metodologías, herramientas y enfoques en el desarrollo del proyecto, y preparándonos para un desempeño profesional competente y actualizado en ingeniería de software.|

# Part I: As-Is Software Project

## Capítulo I: Introducción

### 1.1. Startup Profile
#### 1.1.1. Descripción de la Startup
#### 1.1.2. Perfiles de integrantes del equipo

### 1.2. Solution Profile
#### 1.2.1. Antecedentes y problemática
#### 1.2.2. Lean UX Process
##### 1.2.2.1. Lean UX Problem Statements
##### 1.2.2.2. Lean UX Assumptions
##### 1.2.2.3. Lean UX Hypothesis Statements
##### 1.2.2.4. Lean UX Canvas

### 1.3. Segmentos objetivo

---

## Capítulo II: Requirements Elicitation & Analysis

### 2.1. Competidores
#### 2.1.1. Análisis competitivo
#### 2.1.2. Estrategias y tácticas frente a competidores

### 2.2. Entrevistas
#### 2.2.1. Diseño de entrevistas
#### 2.2.2. Registro de entrevistas
#### 2.2.3. Análisis de entrevistas

### 2.3. Needfinding
#### 2.3.1. User Personas
#### 2.3.2. User Task Matrix
#### 2.3.3. User Journey Mapping
#### 2.3.4. Empathy Mapping
#### 2.3.5. As-is Scenario Mapping

### 2.4. Ubiquitous Language

---

## Capítulo III: Requirements Specification

### 3.1. To-Be Scenario Mapping
### 3.2. User Stories
### 3.3. Product Backlog
### 3.4. Impact Mapping

---

## Capítulo IV: Product Design

### 4.1. Style Guidelines
#### 4.1.1. General Style Guidelines
#### 4.1.2. Web Style Guidelines
#### 4.1.3. Mobile Style Guidelines
##### 4.1.3.1. iOS Mobile Style Guidelines
##### 4.1.3.2. Android Mobile Style Guidelines

### 4.2. Information Architecture
#### 4.2.1. Organization Systems
#### 4.2.2. Labeling Systems
#### 4.2.3. SEO Tags and Meta Tags
#### 4.2.4. Searching Systems
#### 4.2.5. Navigation Systems

### 4.3. Landing Page UI Design
#### 4.3.1. Landing Page Wireframe
#### 4.3.2. Landing Page Mock-up

### 4.4. Mobile Applications UX/UI Design
#### 4.4.1. Mobile Applications Wireframes
#### 4.4.2. Mobile Applications Wireflow Diagrams
#### 4.4.3. Mobile Applications Mock-ups
#### 4.4.4. Mobile Applications User Flow Diagrams

### 4.5. Mobile Applications Prototyping
#### 4.5.1. Android Mobile Applications Prototyping
#### 4.5.2. iOS Mobile Applications Prototyping

### 4.6. Web Applications UX/UI Design
#### 4.6.1. Web Applications Wireframes
#### 4.6.2. Web Applications Wireflow Diagrams
#### 4.6.3. Web Applications Mock-ups
#### 4.6.4. Web Applications User Flow Diagrams

### 4.7. Web Applications Prototyping

### 4.8. Domain-Driven Software Architecture
#### 4.8.1. Software Architecture Context Diagram
#### 4.8.2. Software Architecture Container Diagrams
#### 4.8.3. Software Architecture Components Diagrams

### 4.9. Software Object-Oriented Design
#### 4.9.1. Class Diagrams
#### 4.9.2. Class Dictionary

### 4.10. Database Design
#### 4.10.1. Relational/Non-Relational Database Diagram

---

## Capítulo V: Product Implementation

### 5.1. Software Configuration Management
#### 5.1.1. Software Development Environment Configuration
#### 5.1.2. Source Code Management
#### 5.1.3. Source Code Style Guide & Conventions
#### 5.1.4. Software Deployment Configuration

### 5.2. Product Implementation & Deployment
#### 5.2.1. Sprint Backlogs
#### 5.2.2. Implemented Landing Page Evidence
#### 5.2.3. Implemented Frontend-Web Application Evidence
#### 5.2.4. Acuerdo de Servicio - SaaS
#### 5.2.5. Implemented Native-Mobile Application Evidence
#### 5.2.6. Implemented RESTful API and/or Serverless Backend Evidence
#### 5.2.7. RESTful API documentation
#### 5.2.8. Team Collaboration Insights

### 5.3. Video About-the-Product

---

# Part II: Verification, Validation & Pipeline

## Capítulo VI: Product Verification & Validation

### 6.1. Testing Suites & Validation
#### 6.1.1. Core Entities Unit Tests
#### 6.1.2. Core Integration Tests
#### 6.1.3. Core Behavior-Driven Development
#### 6.1.4. Core System Tests

### 6.2. Static testing & Verification
#### 6.2.1. Static Code Analysis
##### 6.2.1.1. Coding standard & Code conventions
##### 6.2.1.2. Code Quality & Code Security
#### 6.2.2. Reviews

### 6.3. Validation Interviews
#### 6.3.1. Diseño de Entrevistas
#### 6.3.2. Registro de Entrevistas
#### 6.3.3. Evaluaciones según heurísticas

### 6.4. Auditoría de Experiencias de Usuario
#### 6.4.1. Auditoría realizada
##### 6.4.1.1. Información del grupo auditado
##### 6.4.1.2. Cronograma de auditoría realizada
##### 6.4.1.3. Contenido de auditoría realizada
#### 6.4.2. Auditoría recibida
##### 6.4.2.1. Información del grupo auditor
##### 6.4.2.2. Cronograma de auditoría recibida
##### 6.4.2.3. Contenido de auditoría recibida
##### 6.4.2.4. Resumen de modificaciones para subsanar hallazgos

---

## Capítulo VII: DevOps Practices

Para el **Trabajo Parcial (TP)**, el alcance del Capítulo VII comprende **Continuous Integration, Continuous Delivery y Continuous Deployment**, correspondientes a las secciones **7.1, 7.2 y 7.3**. La sección **7.4 Continuous Monitoring** se mantiene únicamente como estructura del informe, ya que corresponde a una etapa posterior.

La estrategia DevOps de CareConnect busca que los cambios realizados en los productos principales de la solución puedan ser verificados, preparados para entrega y desplegados mediante procesos repetibles y trazables. Para ello se emplea GitHub como plataforma de control de versiones y colaboración, y GitHub Actions como herramienta de automatización de los pipelines.

Se integra aquí el contenido del equipo de `chapter-7` (`758ce96`) y se actualiza con los workflows y resultados de las ramas de revisión del 04/10/2026. Las capturas originales se conservan como evidencia histórica; los [registros CI actuales](assets/deployment/tb1-2026-10-04/verification.md) identifican las versiones aprobadas.

Los productos considerados en el pipeline del Trabajo Parcial son:

| Producto | Repositorio | Stack actual | Build tool |
|---|---|---|---|
| Landing Page | `carestacks-landing-page` | React + TypeScript + Vite | npm / Vite |
| Frontend Web Application | `carestacks-web` | Flutter Web | Flutter SDK |
| Native Mobile Application | `carestacks-mobile-app` | Flutter + Dart | Flutter SDK |
| RESTful API | `carestacks-backend-api` | Spring Boot 4 + Java 25 | Maven |

### 7.1. Continuous Integration

La **Integración Continua (Continuous Integration)** permite verificar automáticamente cada cambio antes de integrarlo a una rama estable. En CareConnect, el objetivo es detectar errores de compilación, fallas en pruebas y problemas de integración lo más temprano posible, evitando que cambios defectuosos lleguen a los ambientes de entrega o producción.

#### 7.1.1. Tools and Practices

La herramienta seleccionada para la automatización es **GitHub Actions**, debido a que los repositorios de CareConnect se administran en GitHub y el equipo ya utiliza GitFlow, Pull Requests y Conventional Commits como parte de su flujo de desarrollo.

Las prácticas definidas para Continuous Integration son:

| Práctica | Aplicación en CareConnect |
|---|---|
| Control de versiones | Git y GitHub para todos los repositorios del producto. |
| Estrategia de ramas | `main`, `develop`, `feature/*` y `test/*`. |
| Pull Requests | Todo cambio destinado a `develop` o `main` debe integrarse mediante Pull Request. |
| Validaciones automáticas | Cada Pull Request debe ejecutar el workflow de CI antes de ser fusionado. |
| Build reproducible | Cada producto utiliza su herramienta oficial de construcción: Maven, Flutter o Vite. |
| Pruebas automatizadas | Se ejecutan las suites disponibles y se incorporan progresivamente Unit, Integration, BDD y System Tests del Capítulo VI. |
| Gestión de secretos | Las credenciales no se incluyen en el repositorio y deben almacenarse en GitHub Secrets o GitHub Environments. |
| Trazabilidad | El resultado de cada ejecución queda asociado al commit y al Pull Request que la originó. |

Los triggers definidos para CI son:

```text
push -> develop
push -> main
pull_request -> develop
pull_request -> main
```

Cuando el equipo trabaje directamente sobre una rama `feature/*`, la validación principal se ejecutará al abrir o actualizar el Pull Request hacia `develop`. Esto permite evitar ejecuciones innecesarias sin perder el control de calidad previo a la integración.

#### 7.1.2. Build & Test Suite Pipeline Components

El pipeline general de integración continua sigue el siguiente flujo:

```text
Developer
    |
    v
Commit / Push
    |
    v
Pull Request
    |
    v
GitHub Actions
    |
    v
Checkout
    |
    v
Setup del entorno
    |
    v
Restauración de dependencias
    |
    v
Build
    |
    v
Automated Test Suite
    |
    v
Resultado del pipeline
    |
    +---- success ----> PR habilitado para revisión e integración
    |
    +---- failure ----> corrección requerida
```

Los componentes principales son:

| Componente | Responsabilidad |
|---|---|
| Trigger | Inicia el workflow ante `push` o `pull_request`. |
| Checkout | Obtiene exactamente el commit que será validado. |
| Environment Setup | Configura Java, Flutter o Node.js según el producto. |
| Dependency Restore | Descarga y, cuando sea posible, reutiliza caché de dependencias. |
| Build | Verifica que el producto pueda construirse correctamente. |
| Unit Tests | Valida reglas de negocio y comportamiento aislado. |
| Integration Tests | Verifica la interacción entre capas, persistencia y servicios. |
| BDD Tests | Ejecuta escenarios derivados de User Stories cuando los Steps estén implementados. |
| System Tests | Verifica flujos de extremo a extremo cuando la suite esté disponible. |
| Pipeline Result | Publica el resultado `success` o `failure` asociado al commit/PR. |

##### Pipeline del RESTful API

Para el backend de CareConnect se utiliza **Java 25, Spring Boot 4 y Maven**.

```text
Checkout
   |
   v
Setup Java 25
   |
   v
Maven dependency cache
   |
   v
mvn -B test
   |
   v
JUnit: Unit / Integration Tests
   |
   v
Build Result
```

Comando principal:

```bash
mvn -B test
```

![Backend CI Evidence](assets/backend-ci-success.png)

*Evidencia de ejecución exitosa del pipeline de Continuous Integration del RESTful API.*

##### Pipeline de la Frontend Web Application

Para la aplicación web, el pipeline considera restauración de dependencias, análisis estático, ejecución de pruebas y generación del build de producción.

```text
Checkout
   |
   v
Setup Flutter
   |
   v
flutter pub get
   |
   v
flutter analyze
   |
   v
flutter test
   |
   v
flutter build web --release
   |
   v
Build Result
```

Comandos principales:

```bash
flutter pub get
flutter analyze
flutter test
flutter build web --release
```

![Web CI Evidence](assets/web-ci-success.png)

*Evidencia de ejecución exitosa del pipeline de Continuous Integration de la Frontend Web Application.*

##### Pipeline de la Landing Page

La Landing Page utiliza **React, TypeScript y Vite**. Su pipeline instala las dependencias disponibles en el proyecto, ejecuta el análisis estático y construye el bundle de producción.

```text
Checkout
   |
   v
Setup Node.js
   |
   v
npm install
   |
   v
npm run lint
   |
   v
npm run build
   |
   v
Build Result
```

Comandos principales:

```bash
npm install
npm run lint
npm run build
```

La [ejecución CI de la landing actual](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-landing-page/actions/runs/37244598095) aprobó el commit `ab2d60e`; el [registro de verificación](assets/testing/landing-product-2026-10-04/verification.md) documenta su publicación.

##### Pipeline de la Native Mobile Application

La aplicación móvil de CareConnect está implementada con **Flutter y Dart**. El pipeline instala las dependencias, realiza análisis estático, ejecuta la suite de pruebas cuando se encuentra disponible y genera un APK Android de depuración como evidencia de que la aplicación puede compilarse correctamente.

```text
Checkout
   |
   v
Setup Java 17
   |
   v
Setup Flutter
   |
   v
flutter pub get
   |
   v
flutter analyze
   |
   v
Tests disponibles
   |
   v
flutter build apk --debug
   |
   v
Build Result
```

Comandos principales:

```bash
flutter pub get
flutter analyze
flutter build apk --debug
```

La rama de revisión actual incluye `test/`: sus nueve pruebas rápidas se ejecutan en CI. El workflow solo omite Flutter Test si el directorio no existe. Los nueve escenarios HTTP externos se ejecutan aparte, como se explica en el Capítulo VI.

![Mobile CI Evidence](assets/mobile-ci-success.png)

*Evidencia de ejecución exitosa del pipeline de Continuous Integration de la Native Mobile Application.*

##### Diagrama general del pipeline

![CareConnect CI Pipeline](assets/build-test-suite-pipeline.png)

*Build & Test Suite Pipeline Components de CareConnect, integrando RESTful API, Frontend Web, Native Mobile Application y Landing Page.*

---

### 7.2. Continuous Delivery

#### 7.2.1. Tools and Practices

CareConnect prepara cada producto mediante su pipeline de GitHub Actions y mantiene la entrega separada de su publicación. Un build aprobado demuestra que esa versión compila y supera las pruebas configuradas; la disponibilidad de una URL, una instalación nativa y un recorrido completo se comprueban por separado. Los workflows actuales muestran los archivos generados, pero no publican `build/web` ni el APK como artefactos descargables de Actions.

| Producto | Preparación comprobada | Entrega y límite actual |
|---|---|---|
| RESTful API | Java 25, `mvn -B clean verify`; suite adicional y construcción Docker | Render construye su propia imagen desde el repositorio; el CI no la sube a un registry |
| Frontend Web | `flutter pub get`, `flutter analyze`, `flutter test`, `flutter build web --release` | Se genera `build/web`; falta una URL publicada con la versión corregida y el backend configurado |
| App Flutter del cuidador | Java 17, Flutter, análisis, pruebas y `flutter build apk --debug` | El APK de depuración demuestra compilación Android; no acredita firma release, Play Store, iOS ni instalación en dispositivo |
| Landing Page | Node 24, instalación npm, lint y build Vite | Publicada en Vercel mediante CLI; verificación de ES/EN y enlaces en navegador |

La revisión de Agenda está publicada en [backend PR #3](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api/pull/3), [web PR #1](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-web/pull/1) y [móvil PR #1](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-mobile-app/pull/1). El [registro de entrega TB1](assets/deployment/tb1-2026-10-04/verification.md) vincula cada commit con su ejecución CI y evita confundir esas ramas con producción.

#### 7.2.2. Stages Deployment Pipeline Components

**Verificación.** El backend usa JUnit, Spring Boot Test y H2 en memoria. La versión corregida pasó 16 pruebas. Los clientes pasaron 36 pruebas rápidas web, 9 móviles y 9 escenarios de sistema por cliente contra una API H2 desechable. Las suites externas se ejecutan explícitamente y no forman parte del `flutter test` predeterminado del CI. SYS-06/SYS-07 comprueban el rechazo después de revocar y sin sesión.

**Empaquetado.** El Dockerfile realiza `mvn -B -DskipTests package` en Maven 3.9.11 con Temurin 25 y copia el JAR a una imagen JRE ejecutada como usuario `spring`. Las pruebas se ejecutan antes en CI; construir Docker por sí solo no las ejecuta. Flutter produce `build/web` y `build/app/outputs/flutter-apk/app-debug.apk`; la landing produce `dist`.

**Configuración web.** `ApiConfig` permite definir el backend en compilación. Para preparar un bundle conectado al servicio público:

```bash
flutter pub get
flutter analyze
flutter test
flutter build web --release --dart-define=API_BASE_URL=https://carestacks-backend-api.onrender.com
```

Sin ese `--dart-define`, el bundle usa `http://localhost:8080`; un build de CI con esa configuración no debe presentarse como una app de producción conectada. Publicar el contenido de `build/web` en el alojamiento elegido, comprobar que CORS permite su origen HTTPS y repetir login, Agenda y revocación. Este procedimiento está documentado; no se ha ejecutado una nueva publicación de la aplicación web.

**Configuración móvil.** Para reproducir la compilación Android del cuidador:

```bash
flutter pub get
flutter analyze
flutter test
flutter build apk --debug --dart-define=API_BASE_URL=https://carestacks-backend-api.onrender.com
```

Instalar y probar ese APK en un dispositivo o emulador antes de considerarlo una entrega funcional. La distribución release requiere la configuración de firma del equipo y una compilación release; no se incluyen claves en el repositorio. Una entrega iOS exige el entorno Apple y su firma. El cliente Android del paciente está en [carestacks-frontend](https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-frontend), rama `main` (`922361d`), dentro de la organización del curso. `develop` solo contiene el README. Su compatibilidad con la corrección de Agenda requiere verificación propia; el repositorio histórico `CareStacks/FrontEnd` no pertenece a esta sección.

**Backend y persistencia.** El servicio recibe `PORT` y las variables `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_DRIVER_CLASS_NAME`, `SPRING_DATASOURCE_USERNAME`, `SPRING_DATASOURCE_PASSWORD` y `SPRING_JPA_HIBERNATE_DDL_AUTO`. Para PostgreSQL usar su URL JDBC y `org.postgresql.Driver`. La evidencia visual del servicio no expone secretos ni permite certificar los valores de esas variables. El código tiene H2 como valor por defecto; por ello la persistencia PostgreSQL requiere comprobar la configuración del entorno y no se infiere solo por la existencia de una URL pública.

**Aceptación y recuperación.** Registrar commit, URL o archivo generado, CI, configuración no secreta y resultado del recorrido. Mantener disponibles el build y commit anteriores para volver a publicarlos si falla la nueva versión; conservar la base de datos y comprobar la compatibilidad de esquema antes de revertir. No existe en estos workflows un proceso automatizado de backup/restauración ni una publicación a tiendas. Las sesiones de IAM corregidas residen en una sola instancia y requieren login después de reiniciar.

### 7.3. Continuous deployment

#### 7.3.1. Tools and Practices

Los repositorios usan `main`, `develop`, ramas `feature/*` y `test/*`, con Pull Requests y checks de CI. Una rama de revisión aprobada no se fusiona ni despliega por el hecho de pasar las pruebas. El cambio de Agenda permanece en PRs; la captura de Render corresponde a `51decbd`, una versión anterior al arreglo.

El equipo aportó evidencia de un despliegue automático en Render: `Deploy succeeded | Live`, trigger `Auto-Deploy`, fuente `51decbd`, el 04/10/2026. Se conserva la [captura original](assets/render-after-ci-deploy.png), incorporada desde `chapter-7` (`758ce96`). La referencia anterior a `assets/render-auto-deploy-settings.png` se retiró porque el archivo no existe; no se sustituye por una imagen que simule el panel de configuración.

![Despliegue automático de backend en Render](assets/render-after-ci-deploy.png)

La [captura de checks de GitHub](assets/render-ci-checks-github.png) y la del deploy respaldan el historial aportado por el equipo. El modo `After CI Checks Pass` debe comprobarse en Settings del servicio para certificar que Render exige esos checks; la captura de un deploy exitoso no muestra esa configuración. La [documentación oficial de Render](https://render.com/docs/deploys) describe ese modo y el comportamiento del despliegue.

La landing se publica mediante Vercel CLI. El despliegue manual a producción y la integración automática con GitHub son mecanismos distintos; no se ha acreditado esta última para el proyecto actual. La [documentación oficial de Vercel CLI](https://vercel.com/docs/cli/deploy) explica `--prod`.

#### 7.3.2. Production Deployment Pipeline Components

| Producto | Destino y evidencia | Estado comprobado |
|---|---|---|
| Backend | [Swagger público](https://carestacks-backend-api.onrender.com/swagger-ui/index.html), captura Render `51decbd` y [registro de comprobación](assets/deployment/tb1-2026-10-04/verification.md) | Existe evidencia de publicación; el arreglo de Agenda aún no está en esa versión |
| Landing | [Vercel](https://carestacks-landing-page.vercel.app/), despliegue y navegador documentados en §6.1.4 | Publicada; About the Product corregido y About the Team pendiente |
| Web del cuidador | CI del commit `42d50ac`, bundle release comprobado | Preparada para publicar; no se encontró un registro de deployment en GitHub ni se acreditó una URL de esta versión |
| Móvil del cuidador | CI del commit `2409893`, etapa APK debug aprobada | Compilada; no se encontró una release del repositorio ni se acreditó distribución en dispositivo/tienda |

Para el backend, Render obtiene el código de la rama configurada, construye el Dockerfile, inicia el contenedor usando `PORT` y expone la URL HTTPS. Comprobar el commit del deploy y la documentación OpenAPI después del arranque. Un arranque en frío puede mostrar la página de activación de Render; la disponibilidad de Swagger se registra por separado del estado histórico `Live`.

Para cerrar la entrega conjunta se requiere integrar las versiones compatibles, comprobar el cliente de paciente, definir las URLs/archivos de distribución de los clientes, validar CORS y repetir ST-03 en esos entornos. Este informe registra los pasos y la evidencia disponible; no atribuye despliegues ni instalaciones que no se realizaron.

### 7.4. Continuous Monitoring
 
El **Continuous Monitoring** permite conocer el estado de los productos en producción sin depender de que un usuario reporte una falla. En CareConnect, su objetivo es detectar caídas del RESTful API, de la Frontend Web Application y de la Landing Page, generar una alerta cuando el servicio deja de responder correctamente y notificar al equipo para iniciar la recuperación.
 
La implementación combina dos componentes: **Spring Boot Actuator**, que expone el estado interno del backend, y **UptimeRobot**, que consulta periódicamente los productos publicados desde fuera de la infraestructura. Los cambios del backend se integraron siguiendo el mismo flujo GitFlow y los mismos pipelines de las secciones 7.1 a 7.3. Todas las evidencias se registraron el 05/11/2026.
 
#### 7.4.1. Tools and Practices
 
| Herramienta | Producto | Propósito en CareConnect |
|---|---|---|
| Spring Boot Actuator | RESTful API | Expone `/actuator/health`, `/actuator/info` y `/actuator/metrics` para conocer el estado del servicio y sus métricas de ejecución |
| UptimeRobot (plan gratuito) | RESTful API, Frontend Web, Landing Page | Consulta cada producto por HTTPS cada 5 minutos, registra disponibilidad, tiempo de respuesta e incidentes |
| Correo electrónico | Equipo | Canal de notificación de las alertas de UptimeRobot |
| GitHub Actions | RESTful API | Verifica en CI que el endpoint de salud responda `UP` antes de integrar el cambio |
| Render (logs y eventos de deploy) | RESTful API, Frontend Web | Registra el resultado de cada despliegue y los errores de arranque |
 
Las prácticas aplicadas son:
 
| Práctica | Aplicación en CareConnect |
|---|---|
| Health check como contrato | El backend expone un único endpoint de salud que resume el estado de la aplicación y de su conexión a la base de datos |
| Exposición mínima | Solo se exponen `health`, `info` y `metrics`; el detalle de los componentes de salud permanece oculto (`show-details: never`) para no revelar información de la infraestructura |
| Monitoreo externo (black-box) | La disponibilidad se mide desde fuera de Render y Vercel, tal como la percibe un usuario |
| Monitoreo verificado en CI | Una prueba de integración comprueba que `/actuator/health` responde `200` y `UP` |
| Cambios trazables | La incorporación de Actuator siguió `feature/continuous-monitoring` → `develop` → `main`, con CI aprobado en cada Pull Request |
| Gestión de secretos | Las credenciales de la base de datos solo se registran como variables de entorno en Render |
 
**Configuración del backend.** Se agregó la dependencia `spring-boot-starter-actuator` en `pom.xml` y la siguiente configuración en `src/main/resources/application.yml`:
 
```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: never
```
 
La prueba `ActuatorHealthIntegrationTests` levanta la aplicación en un puerto aleatorio y verifica la respuesta del endpoint de salud. Con ella, la suite del backend pasó de 16 a 17 pruebas, todas aprobadas.
 
![Endpoints de Actuator en local](assets/monitoring/actuator-endpoints-local.png)
 
*Endpoints expuestos por Actuator en ejecución local: `health`, `info` y `metrics`.*
 
![Health check en local](assets/monitoring/actuator-health-local.png)
 
*Respuesta `UP` del endpoint de salud en ejecución local.*
 
![Métricas disponibles](assets/monitoring/actuator-metrics-local.png)
 
*Métricas disponibles en `/actuator/metrics`, entre ellas `http.server.requests`, `jvm.memory.used` y `hikaricp.connections.active`.*
 
**Integración y despliegue del cambio.** El commit `3882ac6` (`feat(monitoring): add spring boot actuator health endpoint`) se integró a `develop` mediante el PR #5, con 3 checks aprobados. Luego se promovió a `main` mediante el PR #6, con 6 checks aprobados: los ejecutados por `pull_request` y por `push`. Render desplegó el commit `fae0f42` y el log de arranque confirmó `Exposing 3 endpoints beneath base path '/actuator'`.
 
![CI del PR #5](assets/monitoring/pr5-ci-checks-passed.png)
 
*PR #5 (`feature/continuous-monitoring` → `develop`) con los checks de CI aprobados.*
 
![CI del PR #6](assets/monitoring/pr-develop-main-ci-passed.png)
 
*PR #6 (`develop` → `main`) con 6 checks aprobados.*
 
![Ejecuciones de GitHub Actions](assets/monitoring/actions-monitoring-pipeline.png)
 
*Ejecuciones de GitHub Actions del cambio, desde la rama de feature hasta `main`.*
 
![Deploy de Render con Actuator](assets/monitoring/render-deploy-live-actuator.png)
 
*Deploy exitoso en Render con los endpoints de Actuator expuestos.*
 
![Health check en producción](assets/monitoring/actuator-health-production.png)
 
*Endpoint de salud en producción: `https://carestacks-backend-api.onrender.com/actuator/health`.*
 
#### 7.4.2. Monitoring Pipeline Components
 
El pipeline de monitoreo sigue el siguiente flujo:
 
```text
UptimeRobot (cada 5 minutos)
    |
    v
Petición HTTPS al producto
    |
    +---- RESTful API ----> /actuator/health ----> estado de la app + conexión a PostgreSQL
    +---- Frontend Web ---> página principal
    +---- Landing Page ---> página principal
    |
    v
Evaluación de la respuesta
    |
    +---- 2xx a tiempo -------------> Up: se registra el tiempo de respuesta
    |
    +---- error HTTP o timeout -----> Down: se abre un incidente (sección 7.4.3)
```
 
Los monitores configurados son:
 
| Monitor | URL monitoreada | Tipo | Intervalo |
|---|---|---|---|
| RESTful API | `https://carestacks-backend-api.onrender.com/actuator/health` | HTTP(s) | 5 minutos |
| Frontend Web Application | `https://carestacks-web.onrender.com/` | HTTP(s) | 5 minutos |
| Landing Page | `https://carestacks-landing-page.vercel.app` | HTTP(s) | 5 minutos |
 
| Componente | Responsabilidad |
|---|---|
| Fuente de datos (backend) | Actuator calcula el estado agregado de la aplicación, incluida la conexión a PostgreSQL. Si la base de datos no responde, el endpoint devuelve `DOWN` con HTTP `503` |
| Fuente de datos (frontends) | La respuesta HTTP de la página publicada en Render y Vercel |
| Recolector | UptimeRobot realiza la petición desde sus servidores en el intervalo configurado |
| Almacenamiento | UptimeRobot conserva el historial de disponibilidad, tiempos de respuesta e incidentes |
| Visualización | El dashboard de UptimeRobot muestra el estado actual, el porcentaje de disponibilidad y el gráfico de tiempo de respuesta de cada monitor |
 
El monitor del backend apunta a `/actuator/health` y no a la raíz del servicio. De esa forma, un `Up` confirma que el servidor responde **y** que la aplicación tiene acceso a su base de datos.
 
![Monitor del RESTful API](assets/monitoring/uptimerobot-monitor-api.png)
 
*Monitor del RESTful API en estado `Up`.*
 
![Monitor de la Frontend Web](assets/monitoring/uptimerobot-monitor-web.png)
 
*Monitor de la Frontend Web Application en estado `Up`.*
 
![Monitor de la Landing Page](assets/monitoring/uptimerobot-monitor-landing.png)
 
*Monitor de la Landing Page en estado `Up`.*
 
**Limitaciones.** En el plan gratuito, el intervalo mínimo es de 5 minutos, por lo que una caída puede tardar hasta 5 minutos en detectarse. Las métricas de `/actuator/metrics` están disponibles para consulta, pero no se recolectan de forma continua ni se grafican en una herramienta como Prometheus o Grafana.
 
#### 7.4.3. Alerting Pipeline Components
 
UptimeRobot evalúa cada respuesta y abre un incidente cuando un monitor deja de responder correctamente. Las reglas de alerta definidas son:
 
| Regla | Condición | Severidad | Acción |
|---|---|---|---|
| RESTful API caído | `/actuator/health` responde un código distinto de 2xx (incluye `503` por `DOWN`) o no responde | Alta | Incidente en UptimeRobot y correo de alerta |
| Frontend Web caída | La página principal responde error o no responde | Alta | Incidente en UptimeRobot y correo de alerta |
| Landing Page caída | La página principal responde error o no responde | Media | Incidente en UptimeRobot y correo de alerta |
| Recuperación | El monitor vuelve a responder 2xx | Informativa | Cierre del incidente, registro de su duración y correo de recuperación |
| Falla de CI | Un check de GitHub Actions falla en un Pull Request | Media | El PR queda bloqueado para revisión hasta corregir el cambio |
| Falla de despliegue | La aplicación no arranca en Render | Alta | Render conserva la versión anterior y registra el error en los logs del deploy |
 
**Incidente real: expiración de la base de datos.** Al desplegar el commit `fae0f42`, Render marcó el deploy como fallido. El log mostró `java.net.UnknownHostException: dpg-davf89mk1f9s73a3ncdg-a`: la base de datos PostgreSQL gratuita de Render había expirado y estaba suspendida, por lo que su host interno había dejado de existir. La aplicación no podía iniciar Hibernate sin una base de datos disponible. El incidente se resolvió migrando la persistencia a **Neon** (PostgreSQL serverless, región AWS us-west-2) y actualizando las variables `SPRING_DATASOURCE_*` en Render. Después de ese cambio, el deploy terminó en estado `Live`.
 
La nueva base se creó vacía, por lo que los datos de prueba anteriores se perdieron. Durante la corrección, una credencial quedó impresa en un log de error de Render; se rotó de inmediato en Neon y la evidencia de este informe no la incluye.
 
Este incidente ocurrió antes de que existiera el monitoreo y no se detectó hasta un nuevo despliegue, cuatro días después de la suspensión. Con el monitor actual, la misma situación habría respondido `DOWN` en `/actuator/health` y generado una alerta en el siguiente chequeo.
 
![Base de datos suspendida](assets/monitoring/render-db-suspended.png)
 
*Base de datos `careconnect-db` suspendida por Render al expirar el plan gratuito.*
 
![Deploy fallido](assets/monitoring/render-deploy-failed-db-expired.png)
 
*Deploy fallido por `UnknownHostException` al intentar conectarse a la base de datos suspendida.*
 
**Incidente simulado: verificación del ciclo de alerta.** Para comprobar el pipeline de alerta sin afectar a los usuarios, se cambió temporalmente la URL del monitor del backend a `/actuator/health-test`, una ruta inexistente que responde con error. UptimeRobot marcó el monitor como `Down` y abrió un incidente. Al restaurar la URL correcta, el monitor volvió a `Up` y el incidente se cerró con una duración registrada de **1 minuto y 8 segundos**. El porcentaje de disponibilidad del monitor incluye este incidente controlado.
 
![Monitor en Down](assets/monitoring/uptimerobot-api-down.png)
 
*Monitor del backend en estado `Down` durante la caída simulada.*
 
![Monitor recuperado](assets/monitoring/uptimerobot-api-recovered.png)
 
*Monitor del backend recuperado, con el incidente de 1 minuto y 8 segundos registrado.*
 
![Registro de incidentes](assets/monitoring/uptimerobot-incidents.png)
 
*Registro del incidente en UptimeRobot, con inicio, fin y duración.*
 
#### 7.4.4. Notification Pipeline Components
 
```text
Incidente abierto (Down)
    |
    v
UptimeRobot ----> correo "Monitor is DOWN" ----> responsable revisa logs de Render
                                                      |
                                                      v
                                            corrección / redeploy / rollback
                                                      |
                                                      v
Incidente cerrado (Up) ----> correo "Monitor is UP" con la duración de la caída
```
 
| Componente | Configuración actual |
|---|---|
| Canal | Correo electrónico configurado como alert contact en UptimeRobot |
| Destinatario | Responsable del monitoreo (Muñiz Huayanca, Percy Alonso) |
| Contenido | Monitor afectado, URL, motivo de la falla y, en la recuperación, duración del incidente |
| Escalamiento | El responsable comunica el incidente al equipo por el canal de coordinación del grupo |
| Respuesta | Revisar logs y eventos de Render; corregir y volver a desplegar, o redesplegar el commit anterior desde el historial de deploys |
 
Durante el incidente simulado se recibieron los dos correos del ciclo: el aviso de caída y el aviso de recuperación.
 
![Correo de caída](assets/monitoring/email-monitor-down.png)
 
*Notificación de UptimeRobot al detectar la caída del backend.*
 
![Correo de recuperación](assets/monitoring/email-monitor-up.png)
 
*Notificación de UptimeRobot al recuperarse el backend.*
 
**Mejora propuesta.** Las notificaciones llegan a un único destinatario. Se recomienda agregar los correos de los demás integrantes como alert contacts, o integrar un canal compartido del equipo, para que la respuesta no dependa de una sola persona.
 
#### 7.4.5. Benchmark
 
El benchmark mide el rendimiento de los productos en producción y lo compara con metas definidas por el equipo. Se realizaron tres pruebas el 05/11/2026 desde Lima, Perú. El backend está alojado en Render (Oregón, Estados Unidos), por lo que las latencias del API incluyen esa distancia de red.
 
**A. Prueba de carga del RESTful API.** Se utilizó **k6 v2.3.0** con el script `benchmark/k6-health.js`, versionado en el repositorio del backend: 10 usuarios virtuales concurrentes durante 30 segundos contra `/actuator/health`, con una pausa de 1 segundo entre iteraciones. La carga se limitó a propósito para no afectar una instancia gratuita.
 
| Métrica | Resultado | Meta | Estado |
|---|---|---|---|
| Peticiones totales | 249 | — | — |
| Throughput | 8 req/s | — | — |
| Latencia promedio | 225.41 ms | — | — |
| Mediana | 199.91 ms | — | — |
| p90 | 297.21 ms | — | — |
| p95 | 323.40 ms | < 800 ms | ✅ |
| Máximo | 956.15 ms | — | — |
| Tasa de errores | 0.00 % | < 1 % | ✅ |
| Checks (`200` y `UP`) | 498 de 498 | 100 % | ✅ |
 
![Resultado de k6](assets/monitoring/k6-health-results.png)
 
*Resumen de k6 con los thresholds de latencia y errores aprobados.*
 
**B. Arranque en frío del RESTful API.** El plan gratuito de Render suspende el servicio tras un periodo sin tráfico. Para medir su efecto, se pausó el monitor de UptimeRobot durante más de 20 minutos sin realizar peticiones. Luego se midió con `curl` la primera respuesta y las siguientes.
 
| Medición | Estado del servicio | HTTP | Tiempo total |
|---|---|---|---|
| 1 | Suspendido (arranque en frío) | 200 | 166.30 s |
| 2 | Activo | 200 | 0.24 s |
| 3 | Activo | 200 | 0.24 s |
| 4 | Activo | 200 | 0.25 s |
| 5 | Activo | 200 | 0.56 s |
 
La meta de responder en menos de 5 segundos no se cumple en frío: la primera petición tardó unas 690 veces más que una petición con el servicio activo. El valor coincide con el tiempo de arranque de Spring Boot registrado en Render (169.79 s). Mientras UptimeRobot consulta el backend cada 5 minutos, el servicio no llega a suspenderse; este efecto es secundario y no reemplaza a una instancia sin suspensión por inactividad.
 
![Monitor pausado](assets/monitoring/uptimerobot-api-paused.png)
 
*Monitor pausado durante la ventana sin tráfico de la prueba de arranque en frío.*
 
![Resultado de arranque en frío](assets/monitoring/cold-start-results.png)
 
*Tiempos de respuesta medidos con `curl`: primera petición en frío y peticiones posteriores.*
 
**C. Rendimiento y calidad de los frontends.** Se ejecutó **Lighthouse** desde Chrome DevTools en una ventana de incógnito, en modo Navigation, para dispositivos Desktop y Mobile.
 
| Producto | Dispositivo | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|---|
| Landing Page | Desktop | 99 | 100 | 100 | 100 |
| Landing Page | Mobile | 73 | 100 | 100 | 100 |
| Frontend Web | Desktop | 85 | 100 | 81 | 100 |
| Frontend Web | Mobile | 39 | 100 | 81 | 100 |
 
| Producto | Dispositivo | FCP | LCP | TBT | CLS |
|---|---|---|---|---|---|
| Landing Page | Desktop | 0.6 s | 0.8 s | 0 ms | 0.009 |
| Landing Page | Mobile | 2.9 s | 4.1 s | 0 ms | 0 |
| Frontend Web | Desktop | 0.5 s | 2.6 s | 50 ms | 0 |
| Frontend Web | Mobile | 5.9 s | 14.5 s | 980 ms | 0 |
 
![Lighthouse Landing Desktop](assets/monitoring/lighthouse-landing-desktop.png)
 
*Lighthouse de la Landing Page en Desktop.*
 
![Lighthouse Landing Mobile](assets/monitoring/lighthouse-landing-mobile.png)
 
*Lighthouse de la Landing Page en Mobile.*
 
![Lighthouse Web Desktop](assets/monitoring/lighthouse-web-desktop.png)
 
*Lighthouse de la Frontend Web Application en Desktop.*
 
![Lighthouse Web Mobile](assets/monitoring/lighthouse-web-mobile.png)
 
*Lighthouse de la Frontend Web Application en Mobile.*
 
**Resumen frente a las metas.**
 
| Prueba | Meta | Resultado | Estado |
|---|---|---|---|
| Carga del API | p95 < 800 ms y errores < 1 % | p95 = 323 ms, errores = 0 % | ✅ |
| Arranque en frío del API | < 5 s | 166.30 s | ❌ |
| Landing Page | Performance ≥ 90 en Desktop y ≥ 50 en Mobile | 99 y 73 | ✅ |
| Frontend Web | Performance ≥ 90 en Desktop y ≥ 50 en Mobile | 85 y 39 | ❌ |
| Accesibilidad de los frontends | ≥ 90 | 100 en los cuatro casos | ✅ |
| LCP | ≤ 2.5 s | Solo la Landing en Desktop lo cumple | ❌ |
 
**Interpretación y recomendaciones.**
 
- Con el servicio activo, el RESTful API responde con holgura frente a su meta y sin errores bajo carga concurrente.
- El principal riesgo para la experiencia del usuario es el arranque en frío del plan gratuito de Render. Para producción real se recomienda una instancia sin suspensión por inactividad; mientras tanto, el monitoreo cada 5 minutos atenúa el problema.
- La Landing Page cumple sus metas y obtiene la puntuación máxima en Accessibility y SEO, en línea con los requisitos de accesibilidad del proyecto.
- La Frontend Web en Mobile obtiene la puntuación más baja: Flutter Web descarga su motor de renderizado antes de mostrar contenido, lo que eleva el LCP a 14.5 s y el TBT a 980 ms. Se recomienda evaluar la carga diferida de módulos, la optimización de recursos y el uso de caché, y repetir la medición después de cada cambio.
- La puntuación de 81 en Best Practices de la Frontend Web debe revisarse con el detalle del reporte de Lighthouse para corregir los ítems observados.


# Part III: Experiment-Driven Lifecycle

## Capítulo VIII: Experiment-Driven Development

### 8.1. Experiment Planning
#### 8.1.1. As-Is Summary
#### 8.1.2. Raw Material: Assumptions, Knowledge Gaps, Ideas, Claims
#### 8.1.3. Experiment-Ready Questions
#### 8.1.4. Question Backlog
#### 8.1.5. Experiment Cards

### 8.2. Experiment Design
#### 8.2.1. Hypotheses
#### 8.2.2. Domain Business Metrics
#### 8.2.3. Measures
#### 8.2.4. Conditions
#### 8.2.5. Scale Calculations and Decisions
#### 8.2.6. Methods Selection
#### 8.2.7. Data Analytics: Goals, KPIs and Metrics Selection
#### 8.2.8. Web and Mobile Tracking Plan

### 8.3. Experimentation
#### 8.3.1. To-Be User Stories
#### 8.3.2. To-Be Product Backlog
#### 8.3.3. Pipeline-supported, Experiment-Driven To-Be Software Platform Lifecycle
##### 8.3.3.1. To-Be Sprint Backlogs
##### 8.3.3.2. Implemented To-Be Landing Page Evidence
##### 8.3.3.3. Implemented To-Be Frontend-Web Application Evidence
##### 8.3.3.4. Implemented To-Be Native-Mobile Application Evidence
##### 8.3.3.5. Implemented To-Be RESTful API and/or Serverless Backend Evidence
##### 8.3.3.6. Team Collaboration Insights
#### 8.3.4. To-Be Validation Interviews
##### 8.3.4.1. Diseño de Entrevistas
##### 8.3.4.2. Registro de Entrevistas

### 8.4. Experiment Aftermath & Analysis
#### 8.4.1. Analysis and Interpretation of Results
#### 8.4.2. Re-scored and Re-prioritized Question Backlog

### 8.5. Continuous Learning
#### 8.5.1. Shareback Session Artifacts: Learning Workflow

### 8.6. To-Be Software Platform Pre-launch
#### 8.6.1. About-the-Product Intro Video
#### 8.6.2. Resumen usando Gees Framework

---

## Conclusiones

### Conclusiones y recomendaciones

El Problem Statement planteado en la sección de Lean UX Problem Statements identificaba como brecha central la falta de coordinación entre cuidadores que atienden a un mismo paciente geriátrico, con tres consecuencias concretas: la imposibilidad de confirmar si otra persona ya administró una dosis, la omisión de dosis por parte del paciente ante la duda, y la reconstrucción manual del historial de evolución. Las entrevistas realizadas en el capítulo de Requirements Elicitation & Analysis confirman esta brecha con evidencia directa: la totalidad de los cuidadores entrevistados señaló la falta de coordinación en los cambios de turno como su principal problema, y la totalidad de los pacientes entrevistados reportó dudas sobre si ya había tomado una dosis. Esta evidencia valida el vacío declarado en el Problem Statement y respalda que la propuesta de valor de CareConnect apunta al problema correcto.

Respecto a las Lean UX Assumptions, la evidencia recogida valida de forma consistente las suposiciones referidas a los usuarios y a los beneficios que estos obtendrían del producto: los cuidadores entrevistados emplean el teléfono móvil como herramienta principal de su jornada, confirmando la suposición de negocio correspondiente, y combinan pastilleros o cuadernos con alarmas del celular sin que ninguna herramienta esté integrada, lo cual coincide con los puntos de dolor declarados. Sin embargo, dos supuestos permanecen sin evidencia propia en esta entrega: la suposición de negocio sobre el modelo freemium no fue explorada con los cuidadores ni con los pacientes entrevistados, y las entrevistas del primer segmento cubrieron únicamente a cuidadores informales, de modo que queda pendiente validar las suposiciones de negocio asociadas a los cuidadores formales, tales como enfermeros o técnicos de salud en atención domiciliaria.

En cuanto a los seis Hypothesis Statements formulados, ninguno ha sido sometido todavía a un experimento formal, dado que el capítulo de Experiment-Driven Development corresponde a una entrega posterior dentro del ciclo de vida del proyecto. No obstante, el análisis cualitativo de las entrevistas ofrece evidencia de plausibilidad para las primeras tres hipótesis: la totalidad de los cuidadores solicitó de manera espontánea contar con un registro compartido en tiempo real y con la confirmación de la medicación administrada, funcionalidades que corresponden directamente a las suposiciones de características sobre las cuales se construyen dichas hipótesis. Las tres hipótesis restantes cuentan con un respaldo menor en esta entrega, pues solo uno de los cuidadores entrevistados mencionó explícitamente la falta de apoyo profesional inmediato, y ninguno de los participantes se refirió de forma espontánea a la posibilidad de compartir el perfil del paciente con otros cuidadores; por ello, estas hipótesis requieren una validación específica antes de poder considerarse confirmadas.

Como recomendación para el roadmap del proyecto, se propone priorizar durante la fase de Experiment-Driven Development los experimentos asociados a las tres primeras hipótesis, dado que cuentan con la evidencia cualitativa más sólida obtenida en esta entrega, y diseñar un experimento adicional dirigido específicamente a cuidadores formales con el fin de cerrar la brecha de validación de las suposiciones de negocio correspondientes. Asimismo, se recomienda incorporar en una futura ronda de entrevistas una pregunta explícita sobre la disposición de los participantes a compartir el perfil del paciente y a pagar por funcionalidades avanzadas, de manera que la hipótesis relacionada con la compartición de perfil y la suposición de negocio sobre el modelo freemium cuenten con evidencia propia antes de invertir en su desarrollo.

---

## Bibliografía

Beard, J. R., Officer, A., de Carvalho, I. A., et al. (2016). The World report on ageing and health: A policy framework for healthy ageing. *The Lancet*, *387*(10033), 2145–2154. https://doi.org/10.1016/S0140-6736(15)00516-4

Instituto Nacional de Estadística e Informática. (2024). *Situación de la población adulta mayor: Informe técnico N.° 01*. https://www.inei.gob.pe/media/MenuRecursivo/boletines/informe-tecnico-poblacion-adulta-mayor.pdf

Microsoft. (s.f.). *REST API guidelines*. GitHub. https://github.com/microsoft/api-guidelines

Organización Mundial de la Salud. (2025). *Ageing and health*. https://www.who.int/news-room/fact-sheets/detail/ageing-and-health

The Cucumber Open Source Project. (s.f.). *Gherkin reference*. Cucumber. https://cucumber.io/docs/gherkin/reference/

---

## Anexos

### Anexo A: Archivo de Figma

[CareConnect — Web Applications UX/UI Design (4.6)](https://www.figma.com/design/1TzGaaQLzkBu26Ojno1AVU/CareConnect-%E2%80%94-Web-Applications-UX-UI-Design--4.6-?node-id=4-5&p=f), con las páginas de wireframes, mock-ups y wireflows de la aplicación web referenciadas en el Capítulo IV.

### Anexo B: Video de Entrevistas

[Video de entrevistas a cuidadores y pacientes geriátricos](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202319881_upc_edu_pe/IQAd7joONgjbTYJ4N_xUFvPXAcOMtAz8WbmokiYYCP5M3T0), publicado en Microsoft Stream, con las seis entrevistas registradas en 2.2.2.

### Anexo C: Repositorios de Producto

| Repositorio | URL |
|---|---|
| Informe del proyecto (`carestacks-report`) | https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-report |
| Backend / Web Services (`carestacks-backend-api`) | https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-backend-api |
| Frontend Web (`carestacks-web`) | https://github.com/upc-pre-202620-1asi0732-9100-carestacks/carestacks-web |
| Landing Page (`Landing-Page`) | https://github.com/CareStacks/Landing-Page |

### Anexo: Videos
| Entrega | Título | Enlace (Microsoft Stream) |
|---------|--------|---------------------------|
| AV1 | Video About-the-Product | https://upcedupe-my.sharepoint.com/:v:/g/personal/u202319881_upc_edu_pe/IQD9H0d9sU4tQJuKV5PStHyuAYjfXdpoDfRe-xCc_R1401s |
| AV1 | Video de exposición | \<url> |
