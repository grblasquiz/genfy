import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-changelog', en: 'changelog-generator' },
  category: 'work',
  emoji: '📋',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de Changelog | Genfy',
    metaDesc: 'Generá entradas de changelog estructuradas (Added, Fixed, Changed, Deprecated) para releases. Formato Keep a Changelog y Semantic Versioning.',
    h1: 'Generador de Changelog',
    intro: 'Documentá releases con entradas claras y categorizadas siguiendo el estándar Keep a Changelog. Para devs cansados de "varios bugfixes" como única descripción.',
    tag: 'Documentación',
    filterLabel: 'Categoría',
    countLabel: 'Cantidad',
    generateLabel: 'Generar entradas',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'added',
        label: 'Added (nuevas features)',
        items: [
          'Added: nuevo endpoint POST /api/v2/users/bulk-create para crear usuarios en lote',
          'Added: soporte para autenticación OAuth 2.0 con Google, GitHub y Microsoft',
          'Added: dashboard de métricas en tiempo real con WebSockets para latencia <100ms',
          'Added: exportación de reportes a PDF, CSV y Excel desde la vista de analytics',
          'Added: dark mode con detección automática de preferencia del sistema',
          'Added: integración con Slack para notificaciones de eventos críticos',
          'Added: feature flag system con toggle granular por usuario y grupo',
          'Added: comando CLI <code>app migrate --dry-run</code> para preview de migrations',
          'Added: soporte para multi-tenancy con aislamiento de datos por organización',
          'Added: rate limiting configurable por endpoint con backoff exponencial',
          'Added: webhook system con reintentos automáticos y firma HMAC SHA-256',
          'Added: búsqueda full-text con Elasticsearch sobre 5 millones de registros',
          'Added: soporte para idiomas adicionales (PT, FR, DE) en la interfaz',
          'Added: validación de schemas JSON con Ajv en todos los endpoints públicos',
          'Added: caché Redis con TTL configurable para queries de baja volatilidad',
          'Added: workflow visual con drag-and-drop para automatizaciones de usuario',
          'Added: API GraphQL como alternativa al REST existente',
          'Added: soporte SAML 2.0 para SSO empresarial con Okta y Azure AD',
          'Added: editor markdown con preview en tiempo real para descripciones',
          'Added: importación masiva de datos desde CSV con validación previa',
          'Added: nuevo modelo de permisos basado en roles (RBAC) con granularidad por recurso',
          'Added: integración con Stripe para pagos recurrentes y subscripciones',
          'Added: notificaciones push para apps móviles vía FCM y APNS',
          'Added: comando <code>--watch</code> para recompilación automática en desarrollo',
          'Added: dashboard administrativo con auditoría de actividad de usuarios',
          'Added: soporte para variables de entorno cifradas con SOPS',
          'Added: shortcuts de teclado configurables en la interfaz web',
          'Added: API de salud con métricas Prometheus en /metrics endpoint',
          'Added: tema personalizable con CSS custom properties exportables',
          'Added: módulo de reportes con scheduling para envíos periódicos por email'
        ]
      },
      {
        id: 'fixed',
        label: 'Fixed (bugs resueltos)',
        items: [
          'Fixed: pérdida de sesión al refrescar la página en Safari iOS 16+',
          'Fixed: cálculo incorrecto de impuestos para órdenes con descuentos múltiples',
          'Fixed: memory leak en el worker de procesamiento de imágenes después de 1000+ jobs',
          'Fixed: race condition en la creación simultánea de usuarios con mismo email',
          'Fixed: timeout de 30s en uploads de archivos mayores a 100MB',
          'Fixed: caracteres Unicode en nombres de archivos rompiendo el sistema de búsqueda',
          'Fixed: dashboard cargando datos del usuario incorrecto al cambiar de cuenta',
          'Fixed: notificaciones duplicadas al recibir webhooks con reintentos del proveedor',
          'Fixed: error 500 en endpoint /api/orders cuando el carrito tiene productos eliminados',
          'Fixed: paginación devolviendo registros duplicados en la página 2 con sorting custom',
          'Fixed: dropdown de selección de país no scrolleable en pantallas pequeñas',
          'Fixed: cookies de sesión no se eliminaban correctamente al hacer logout',
          'Fixed: validación de email aceptando direcciones con espacios en blanco',
          'Fixed: gráfico de líneas mostrando valores incorrectos para datasets con nulls',
          'Fixed: archivo CSV exportado con encoding incorrecto para caracteres especiales',
          'Fixed: contador de notificaciones desactualizado hasta refresh manual',
          'Fixed: enlaces de password reset expirando antes del tiempo configurado',
          'Fixed: formulario de checkout perdiendo datos al volver del paso de pago',
          'Fixed: imágenes en lazy-loading no cargando dentro de modales dinámicos',
          'Fixed: regex de validación de teléfonos rechazando formatos internacionales válidos',
          'Fixed: sincronización con Google Calendar fallando para eventos recurrentes',
          'Fixed: rendering de fechas en zona horaria del servidor en vez de la del cliente',
          'Fixed: búsqueda case-sensitive cuando el usuario espera case-insensitive',
          'Fixed: error de CORS al hacer requests desde subdominios autorizados',
          'Fixed: filtros aplicados no persistiendo al usar el botón de retroceso del navegador',
          'Fixed: conversión incorrecta de moneda usando tasa de cambio caché desactualizada',
          'Fixed: SSE connection no reconectando automáticamente tras desconexión de red',
          'Fixed: PDF generado con layout roto cuando el contenido excede una página',
          'Fixed: animaciones de transición causando layout shift en métricas de Web Vitals',
          'Fixed: límite de 50 caracteres en username bloqueando emails como username válidos'
        ]
      },
      {
        id: 'changed',
        label: 'Changed (cambios)',
        items: [
          'Changed: actualizado Node.js de 18 a 20 LTS para mejor performance y soporte',
          'Changed: API endpoint <code>/users</code> ahora devuelve 50 items por defecto en vez de 100',
          'Changed: rate limit aumentado de 60 a 120 requests por minuto para usuarios pagos',
          'Changed: librería de UI migrada de Material-UI a Radix UI con shadcn',
          'Changed: timeout de queries de DB reducido de 30s a 10s con retry automático',
          'Changed: formato de fechas en API estandarizado a ISO 8601 con zona horaria explícita',
          'Changed: algoritmo de búsqueda mejorado con fuzzy matching y typo tolerance',
          'Changed: estructura de carpetas reorganizada siguiendo arquitectura hexagonal',
          'Changed: variables de entorno renombradas con prefijo APP_ para namespacing',
          'Changed: política de contraseñas requiere mínimo 12 caracteres y un símbolo',
          'Changed: cantidad de reintentos en jobs de background reducida de 5 a 3',
          'Changed: sistema de logging migrado de Winston a Pino para mejor performance',
          'Changed: frontend bundler cambiado de Webpack a Vite reduciendo build time 70%',
          'Changed: estructura de respuestas de API uniformada con envelope <code>{data, meta, errors}</code>',
          'Changed: librería de testing actualizada de Jest 27 a Vitest 1.0',
          'Changed: sistema de cache invalidation movido de TTL fijo a invalidación por evento',
          'Changed: validación de inputs movida del backend al frontend para feedback inmediato',
          'Changed: upload de archivos ahora soporta multipart en chunks de 5MB',
          'Changed: estructura de URLs de API actualizada de <code>/v1/</code> a <code>/api/v2/</code>',
          'Changed: librería de gráficos cambiada de Chart.js a Recharts para mejor a11y',
          'Changed: servicio de email migrado de SendGrid a Postmark para mejor deliverability',
          'Changed: política de retención de logs ampliada de 30 a 90 días',
          'Changed: orden de columnas en exportación CSV alineado con orden de UI',
          'Changed: textos de errores reescritos en lenguaje claro orientado a usuario final',
          'Changed: flujo de onboarding reducido de 7 a 4 pasos basado en analytics',
          'Changed: paleta de colores actualizada con contraste WCAG AAA en todos los textos',
          'Changed: tamaño máximo de avatar aumentado de 5MB a 10MB con compresión automática',
          'Changed: timezone por defecto cambiado de UTC a la timezone del navegador del usuario',
          'Changed: comportamiento de filtros: ahora persisten en URL como query params',
          'Changed: comportamiento de notificaciones: agrupamiento de duplicadas en 5 minutos'
        ]
      },
      {
        id: 'deprecated',
        label: 'Deprecated / Removed / Security',
        items: [
          'Deprecated: endpoint <code>/api/v1/users</code> será removido en v3.0 (usar /api/v2/users)',
          'Deprecated: parámetro <code>legacy_format=true</code> en /export, será removido en 6 meses',
          'Deprecated: soporte para Internet Explorer 11 será discontinuado en próxima versión',
          'Deprecated: método <code>Client.fetchAll()</code> reemplazado por <code>Client.list()</code>',
          'Deprecated: campo <code>user_email</code> en respuestas de API, usar <code>email</code>',
          'Removed: librería jQuery eliminada del bundle, reduciendo tamaño en 80KB',
          'Removed: endpoint <code>/api/v1/legacy/orders</code> tras 12 meses de deprecation',
          'Removed: opción "Remember me 30 days" reemplazada por sesiones cortas + refresh tokens',
          'Removed: soporte para autenticación básica HTTP en endpoints sensibles',
          'Removed: dependencia <code>moment.js</code> reemplazada por <code>date-fns</code>',
          'Removed: feature de export a XML después de baja adopción (<1% de usuarios)',
          'Removed: páginas de documentación legacy en /docs/old, redirigidas a docs nuevas',
          'Removed: scripts de migración 0.x a 1.x que ya no son necesarios',
          'Security: actualizado <code>node-fetch</code> de 2.6.0 a 3.3.2 (CVE-2022-0235)',
          'Security: parche para vulnerabilidad XSS en campo de búsqueda con HTML',
          'Security: sanitización de inputs en endpoints públicos para prevenir SQL injection',
          'Security: implementado CSP estricto eliminando inline scripts y eval()',
          'Security: rotación automática de JWT secrets cada 30 días',
          'Security: hashing de contraseñas migrado de bcrypt rounds 10 a Argon2id',
          'Security: HSTS preload activado con max-age 1 año en todos los subdominios',
          'Security: tokens API ahora se muestran solo una vez al crearlos, no almacenados en plain text',
          'Security: bloqueo de cuenta tras 5 intentos fallidos con captcha de desbloqueo',
          'Security: validación de uploaded files con magic bytes, no solo extensión',
          'Security: deshabilitado TLS 1.0 y 1.1, solo TLS 1.2+ permitido',
          'Security: implementado SRI (Subresource Integrity) para todos los scripts externos',
          'Security: revisión de dependencias con Dependabot y Snyk integrados en CI',
          'Security: cookies sensibles ahora marcadas como Secure, HttpOnly y SameSite=Strict',
          'Security: rate limiting agresivo en endpoints de auth (5 intentos/minuto/IP)',
          'Security: auditoría completa de accesos a datos sensibles registrada en log inmutable',
          'Security: implementado 2FA obligatorio para roles administrativos'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Por qué un changelog bien escrito vale oro',
        body: '<p>El changelog es la primera cosa que mira un dev cuando algo se rompió tras un update. Si tu changelog dice "varios bugfixes y mejoras", el dev tiene que leer cada commit para entender qué cambió. Si dice "Fixed: race condition en creación de usuarios con mismo email", el dev sabe en 2 segundos si tu fix afecta su caso. Esa diferencia de tiempo, multiplicada por miles de usuarios, es valor real.</p><p>El estándar <strong>Keep a Changelog</strong> (keepachangelog.com) define seis categorías: <em>Added, Changed, Deprecated, Removed, Fixed, Security</em>. Mantener esa nomenclatura permite parsear changelogs automáticamente: GitHub Releases, Dependabot y herramientas de upgrade pueden extraer breaking changes y vulnerabilidades sin que el humano los marque manualmente.</p><p>Combiná Keep a Changelog con <strong>Semantic Versioning</strong>: versiones MAJOR.MINOR.PATCH cambian según el tipo de entrada. Si agregás un Removed o un Changed que rompe API, MAJOR sube. Si solo agregás Added retrocompatible, MINOR sube. Si solo hay Fixed, PATCH sube. Esa relación entre changelog y versión hace que automatizaciones tipo <em>semantic-release</em> calculen versiones desde commits sin intervención humana.</p>'
      },
      {
        h2: 'Cómo escribir entradas de changelog que sirvan',
        body: '<p>Regla #1: <strong>siempre desde la perspectiva del usuario, no del dev</strong>. "Refactor del módulo de auth" no le dice nada al usuario. "Login ahora soporta Google y Microsoft" sí. El usuario no necesita saber cómo lo hiciste, solo qué cambió en su experiencia. Si el cambio es solo interno y no tiene impacto observable, probablemente no merece entrada en changelog público.</p><p>Regla #2: <strong>incluir contexto suficiente para que un dev externo entienda el impacto</strong>. "Fixed: bug en checkout" es inútil. "Fixed: pérdida de carrito al cambiar de moneda durante checkout en Safari iOS" permite a un dev externo verificar si su sistema tenía ese bug específico. Mencioná navegador, OS, versión, condiciones específicas cuando son relevantes.</p><p>Regla #3: <strong>linkear a issues, PRs o commits cuando aporta valor</strong>. <em>Vue.js</em>, <em>React</em> y <em>VS Code</em> linkean cada entrada a su PR/issue. Eso permite ver el código exacto del cambio. Para changelog interno (empresa), podés linkear a Jira o Linear. Para open source público, GitHub references. La trazabilidad genera confianza en los releases.</p>'
      },
      {
        h2: 'Errores típicos en changelogs reales',
        body: '<p>Error #1: <strong>changelog generado solo por commits sin curación</strong>. Herramientas como <em>conventional-changelog</em> generan automáticamente desde commits, pero si tus commits son "fix typo", "wip", "ggg", el changelog resulta basura. La generación automática solo sirve si tu equipo ya escribe commits descriptivos siguiendo Conventional Commits.</p><p>Error #2: <strong>mezclar versiones en una sola entrada</strong>. "Versión 2.0-2.5: muchos cambios..." no sirve a nadie. Cada release debería tener su sección clara con fecha y versión. Si tu changelog tiene 6 meses sin update, perdiste el hábito y los cambios ya no son rastreables. Un changelog requiere disciplina por release, no batch al final.</p><p>Error #3: <strong>poner cambios internos como si fueran públicos</strong>. "Updated internal logger" no le importa al usuario externo a menos que cambie su comportamiento. Si tu librería tiene API pública y privada, separá changelog público (lo que afecta integradores) de changelog interno (refactors, deps internas). <em>Stripe</em>, <em>Twilio</em> y <em>Atlassian</em> tienen este split: público vs interno.</p>'
      },
      {
        h2: 'Automatización: changelog desde commits',
        body: '<p>Si tu equipo sigue <strong>Conventional Commits</strong> (feat:, fix:, docs:, etc.), podés automatizar el changelog con <em>semantic-release</em>, <em>release-please</em> (Google) o <em>changesets</em> (popular en monorepos). Estas herramientas leen commits desde el último tag, los categorizan, calculan la próxima versión y generan changelog formato Keep a Changelog automáticamente.</p><p>El flujo típico: dev hace PR con commit "feat(auth): add Google OAuth", merge a main dispara CI, semantic-release detecta el feat: y bumpea MINOR, genera entrada en CHANGELOG.md, crea tag git y release en GitHub. Todo sin intervención manual. <em>Next.js</em>, <em>Prisma</em> y <em>Vercel SDK</em> usan este flujo en producción.</p><p>Para proyectos donde la curación humana importa (productos consumer, no librerías), <em>changesets</em> permite que cada PR agregue manualmente entrada de changelog en archivo .md aparte. Cuando se hace release, las entradas se mergean. Esto da control sobre el lenguaje (perspectiva usuario, no commit técnico) y evita que cambios menores ensucien el changelog público. <em>shadcn/ui</em> y <em>tRPC</em> usan changesets exitosamente.</p>'
      }
    ],
    faq: [
      {
        q: '¿Qué diferencia hay entre Changed y Fixed?',
        a: 'Fixed es para bugs: comportamiento que estaba mal y ahora está bien según la spec. Changed es para cambios deliberados de comportamiento o API: "decidimos que este endpoint devuelva 50 items en vez de 100". Si era un bug, va en Fixed. Si era una decisión de producto/diseño, va en Changed.'
      },
      {
        q: '¿Cuándo uso Deprecated vs Removed?',
        a: 'Deprecated avisa que algo será removido en futura versión, pero todavía funciona. Da tiempo a usuarios para migrar (típicamente 1 versión MAJOR o 6-12 meses). Removed es cuando ese deprecated ya se eliminó. La transición típica: v1.5 deprecated -> v2.0 removed.'
      },
      {
        q: '¿Tengo que escribir changelog si el proyecto es interno?',
        a: 'Sí. Aún en proyectos internos, el changelog ayuda a debugging ("¿desde qué versión anda raro X?"), onboarding de nuevos devs, y rollbacks ("¿qué se desplegó ayer?"). El esfuerzo es bajo si lo hacés en cada PR. El costo es alto si tenés que reconstruirlo después.'
      },
      {
        q: '¿Cómo manejo changelog en monorepos con múltiples paquetes?',
        a: 'Usá <em>changesets</em> que está diseñado específicamente para esto. Cada paquete tiene su propio CHANGELOG.md y versión independiente. Cuando un PR afecta paquete A, agregás changeset solo para A. La herramienta calcula versiones y publica los paquetes afectados.'
      }
    ]
  },
  en: {
    pageTitle: 'Changelog Generator | Genfy',
    metaDesc: 'Generate structured changelog entries (Added, Fixed, Changed, Deprecated) for releases. Keep a Changelog format with Semantic Versioning support.',
    h1: 'Changelog Generator',
    intro: 'Document releases with clear, categorized entries following Keep a Changelog. For devs tired of "various bugfixes" as the only description.',
    tag: 'Documentation',
    filterLabel: 'Category',
    countLabel: 'Amount',
    generateLabel: 'Generate entries',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'added',
        label: 'Added (new features)',
        items: [
          'Added: new POST /api/v2/users/bulk-create endpoint for batch user creation',
          'Added: OAuth 2.0 support with Google, GitHub and Microsoft providers',
          'Added: real-time metrics dashboard via WebSockets with <100ms latency',
          'Added: report export to PDF, CSV and Excel from analytics view',
          'Added: dark mode with automatic system preference detection',
          'Added: Slack integration for critical event notifications',
          'Added: feature flag system with granular per-user and per-group toggles',
          'Added: CLI command <code>app migrate --dry-run</code> for migration preview',
          'Added: multi-tenancy support with per-organization data isolation',
          'Added: configurable rate limiting per endpoint with exponential backoff',
          'Added: webhook system with auto-retries and HMAC SHA-256 signatures',
          'Added: Elasticsearch full-text search across 5 million records',
          'Added: support for additional languages (PT, FR, DE) in the UI',
          'Added: Ajv JSON schema validation on all public endpoints',
          'Added: Redis cache with configurable TTL for low-volatility queries',
          'Added: visual workflow with drag-and-drop for user automations',
          'Added: GraphQL API as alternative to existing REST',
          'Added: SAML 2.0 support for enterprise SSO with Okta and Azure AD',
          'Added: markdown editor with real-time preview for descriptions',
          'Added: bulk data import from CSV with pre-validation',
          'Added: new role-based permissions model (RBAC) with per-resource granularity',
          'Added: Stripe integration for recurring payments and subscriptions',
          'Added: push notifications for mobile apps via FCM and APNS',
          'Added: <code>--watch</code> command for automatic recompilation in development',
          'Added: admin dashboard with user activity audit log',
          'Added: encrypted environment variables support with SOPS',
          'Added: configurable keyboard shortcuts in web UI',
          'Added: health API with Prometheus metrics at /metrics endpoint',
          'Added: customizable theme with exportable CSS custom properties',
          'Added: reports module with scheduling for periodic email delivery'
        ]
      },
      {
        id: 'fixed',
        label: 'Fixed (resolved bugs)',
        items: [
          'Fixed: session loss on page refresh in Safari iOS 16+',
          'Fixed: incorrect tax calculation for orders with multiple discounts',
          'Fixed: memory leak in image processing worker after 1000+ jobs',
          'Fixed: race condition in simultaneous user creation with same email',
          'Fixed: 30s timeout on file uploads larger than 100MB',
          'Fixed: Unicode characters in filenames breaking search system',
          'Fixed: dashboard loading wrong user data after account switch',
          'Fixed: duplicate notifications from provider webhook retries',
          'Fixed: 500 error on /api/orders endpoint when cart has deleted products',
          'Fixed: pagination returning duplicate records on page 2 with custom sorting',
          'Fixed: country selection dropdown not scrollable on small screens',
          'Fixed: session cookies not properly cleared on logout',
          'Fixed: email validation accepting addresses with whitespace',
          'Fixed: line chart showing incorrect values for datasets with nulls',
          'Fixed: exported CSV with wrong encoding for special characters',
          'Fixed: notification counter outdated until manual refresh',
          'Fixed: password reset links expiring before configured time',
          'Fixed: checkout form losing data when navigating back from payment step',
          'Fixed: lazy-loaded images not loading inside dynamic modals',
          'Fixed: phone validation regex rejecting valid international formats',
          'Fixed: Google Calendar sync failing for recurring events',
          'Fixed: dates rendering in server timezone instead of client\'s',
          'Fixed: case-sensitive search when user expects case-insensitive',
          'Fixed: CORS error on requests from authorized subdomains',
          'Fixed: applied filters not persisting when using browser back button',
          'Fixed: incorrect currency conversion using stale cached exchange rate',
          'Fixed: SSE connection not auto-reconnecting after network drop',
          'Fixed: PDF generated with broken layout when content exceeds one page',
          'Fixed: transition animations causing layout shift in Web Vitals metrics',
          'Fixed: 50-character username limit blocking valid email-as-username inputs'
        ]
      },
      {
        id: 'changed',
        label: 'Changed (modifications)',
        items: [
          'Changed: upgraded Node.js from 18 to 20 LTS for better performance and support',
          'Changed: <code>/users</code> API endpoint now returns 50 items default instead of 100',
          'Changed: rate limit increased from 60 to 120 requests/min for paid users',
          'Changed: UI library migrated from Material-UI to Radix UI with shadcn',
          'Changed: DB query timeout reduced from 30s to 10s with auto-retry',
          'Changed: API date format standardized to ISO 8601 with explicit timezone',
          'Changed: search algorithm improved with fuzzy matching and typo tolerance',
          'Changed: folder structure reorganized following hexagonal architecture',
          'Changed: env variables renamed with APP_ prefix for namespacing',
          'Changed: password policy now requires minimum 12 characters and a symbol',
          'Changed: background job retry count reduced from 5 to 3',
          'Changed: logging system migrated from Winston to Pino for better performance',
          'Changed: frontend bundler switched from Webpack to Vite reducing build 70%',
          'Changed: API response structure unified with envelope <code>{data, meta, errors}</code>',
          'Changed: testing library updated from Jest 27 to Vitest 1.0',
          'Changed: cache invalidation moved from fixed TTL to event-based invalidation',
          'Changed: input validation moved from backend to frontend for instant feedback',
          'Changed: file upload now supports multipart in 5MB chunks',
          'Changed: API URL structure updated from <code>/v1/</code> to <code>/api/v2/</code>',
          'Changed: chart library switched from Chart.js to Recharts for better a11y',
          'Changed: email service migrated from SendGrid to Postmark for better deliverability',
          'Changed: log retention policy extended from 30 to 90 days',
          'Changed: column order in CSV export aligned with UI order',
          'Changed: error texts rewritten in clear user-facing language',
          'Changed: onboarding flow reduced from 7 to 4 steps based on analytics',
          'Changed: color palette updated with WCAG AAA contrast on all texts',
          'Changed: max avatar size increased from 5MB to 10MB with auto-compression',
          'Changed: default timezone changed from UTC to user\'s browser timezone',
          'Changed: filter behavior: now persisted in URL as query params',
          'Changed: notification behavior: 5-minute grouping for duplicates'
        ]
      },
      {
        id: 'deprecated',
        label: 'Deprecated / Removed / Security',
        items: [
          'Deprecated: <code>/api/v1/users</code> endpoint will be removed in v3.0 (use /api/v2/users)',
          'Deprecated: <code>legacy_format=true</code> parameter on /export, removed in 6 months',
          'Deprecated: Internet Explorer 11 support will be discontinued next version',
          'Deprecated: <code>Client.fetchAll()</code> method replaced by <code>Client.list()</code>',
          'Deprecated: <code>user_email</code> field in API responses, use <code>email</code>',
          'Removed: jQuery library removed from bundle, reducing size by 80KB',
          'Removed: <code>/api/v1/legacy/orders</code> endpoint after 12 months of deprecation',
          'Removed: "Remember me 30 days" option replaced by short sessions + refresh tokens',
          'Removed: HTTP basic auth support on sensitive endpoints',
          'Removed: <code>moment.js</code> dependency replaced by <code>date-fns</code>',
          'Removed: XML export feature after low adoption (<1% of users)',
          'Removed: legacy documentation pages at /docs/old, redirected to new docs',
          'Removed: 0.x to 1.x migration scripts no longer needed',
          'Security: updated <code>node-fetch</code> from 2.6.0 to 3.3.2 (CVE-2022-0235)',
          'Security: patch for XSS vulnerability in search field with HTML',
          'Security: input sanitization on public endpoints to prevent SQL injection',
          'Security: implemented strict CSP eliminating inline scripts and eval()',
          'Security: automatic JWT secret rotation every 30 days',
          'Security: password hashing migrated from bcrypt rounds 10 to Argon2id',
          'Security: HSTS preload activated with 1-year max-age on all subdomains',
          'Security: API tokens now shown only once at creation, not stored in plain text',
          'Security: account lockout after 5 failed attempts with unlock captcha',
          'Security: uploaded file validation by magic bytes, not just extension',
          'Security: TLS 1.0 and 1.1 disabled, only TLS 1.2+ allowed',
          'Security: SRI (Subresource Integrity) implemented for all external scripts',
          'Security: dependency review with Dependabot and Snyk integrated in CI',
          'Security: sensitive cookies now marked Secure, HttpOnly and SameSite=Strict',
          'Security: aggressive rate limiting on auth endpoints (5 attempts/min/IP)',
          'Security: full audit of sensitive data access logged in immutable log',
          'Security: 2FA mandatory for administrative roles'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Why a well-written changelog is gold',
        body: '<p>The changelog is the first thing a dev looks at when something broke after an update. If your changelog says "various bugfixes and improvements", the dev has to read every commit to understand what changed. If it says "Fixed: race condition in user creation with same email", the dev knows in 2 seconds whether your fix affects their case. That time difference, multiplied by thousands of users, is real value.</p><p>The <strong>Keep a Changelog</strong> standard (keepachangelog.com) defines six categories: <em>Added, Changed, Deprecated, Removed, Fixed, Security</em>. Maintaining that nomenclature allows automatic parsing: GitHub Releases, Dependabot and upgrade tools can extract breaking changes and vulnerabilities without manual marking.</p><p>Combine Keep a Changelog with <strong>Semantic Versioning</strong>: MAJOR.MINOR.PATCH versions change based on entry type. If you add a Removed or Changed that breaks API, MAJOR bumps. If only Added backward-compatible, MINOR bumps. If only Fixed, PATCH bumps. That relationship between changelog and version makes automations like <em>semantic-release</em> calculate versions from commits without human intervention.</p>'
      },
      {
        h2: 'How to write changelog entries that matter',
        body: '<p>Rule #1: <strong>always from user perspective, not dev perspective</strong>. "Refactored auth module" tells the user nothing. "Login now supports Google and Microsoft" does. The user doesn\'t need to know how you did it, only what changed in their experience. If the change is purely internal with no observable impact, it probably doesn\'t deserve an entry in public changelog.</p><p>Rule #2: <strong>include enough context for an external dev to understand impact</strong>. "Fixed: bug in checkout" is useless. "Fixed: cart loss when changing currency during checkout in Safari iOS" lets an external dev verify if their system had that specific bug. Mention browser, OS, version, specific conditions when relevant.</p><p>Rule #3: <strong>link to issues, PRs or commits when it adds value</strong>. <em>Vue.js</em>, <em>React</em> and <em>VS Code</em> link each entry to its PR/issue. That allows seeing exact code of the change. For internal (company) changelog, you can link to Jira or Linear. For public open source, GitHub references. Traceability builds trust in releases.</p>'
      },
      {
        h2: 'Typical mistakes in real changelogs',
        body: '<p>Mistake #1: <strong>changelog auto-generated from commits without curation</strong>. Tools like <em>conventional-changelog</em> generate from commits, but if your commits are "fix typo", "wip", "ggg", the changelog ends up trash. Auto-generation only works if your team already writes descriptive commits following Conventional Commits.</p><p>Mistake #2: <strong>mixing versions in single entry</strong>. "Version 2.0-2.5: many changes..." helps no one. Each release should have its own clear section with date and version. If your changelog has 6 months without update, you lost the habit and changes are no longer traceable. A changelog requires per-release discipline, not batch at the end.</p><p>Mistake #3: <strong>treating internal changes as public</strong>. "Updated internal logger" doesn\'t matter to external user unless behavior changes. If your library has public and private API, separate public changelog (what affects integrators) from internal (refactors, internal deps). <em>Stripe</em>, <em>Twilio</em> and <em>Atlassian</em> have this split: public vs internal.</p>'
      },
      {
        h2: 'Automation: changelog from commits',
        body: '<p>If your team follows <strong>Conventional Commits</strong> (feat:, fix:, docs:, etc.), you can automate changelog with <em>semantic-release</em>, <em>release-please</em> (Google) or <em>changesets</em> (popular in monorepos). These tools read commits since last tag, categorize them, calculate next version and generate Keep a Changelog format automatically.</p><p>Typical flow: dev makes PR with commit "feat(auth): add Google OAuth", merge to main triggers CI, semantic-release detects feat: and bumps MINOR, generates entry in CHANGELOG.md, creates git tag and GitHub release. All without manual intervention. <em>Next.js</em>, <em>Prisma</em> and <em>Vercel SDK</em> use this flow in production.</p><p>For projects where human curation matters (consumer products, not libraries), <em>changesets</em> lets each PR manually add changelog entry in separate .md file. On release, entries merge. This gives control over language (user perspective, not technical commit) and prevents minor changes from cluttering public changelog. <em>shadcn/ui</em> and <em>tRPC</em> use changesets successfully.</p>'
      }
    ],
    faq: [
      {
        q: 'What\'s the difference between Changed and Fixed?',
        a: 'Fixed is for bugs: behavior that was wrong and is now correct per spec. Changed is for deliberate behavior or API changes: "we decided this endpoint should return 50 items instead of 100". If it was a bug, goes in Fixed. If it was a product/design decision, goes in Changed.'
      },
      {
        q: 'When do I use Deprecated vs Removed?',
        a: 'Deprecated warns something will be removed in future version, but still works. Gives users time to migrate (typically 1 MAJOR version or 6-12 months). Removed is when that deprecated thing is actually deleted. Typical transition: v1.5 deprecated -> v2.0 removed.'
      },
      {
        q: 'Do I need to write changelog if the project is internal?',
        a: 'Yes. Even in internal projects, changelog helps debugging ("since which version is X acting weird?"), onboarding new devs, and rollbacks ("what was deployed yesterday?"). Effort is low if done per PR. Cost is high if you have to reconstruct it later.'
      },
      {
        q: 'How do I handle changelog in monorepos with multiple packages?',
        a: 'Use <em>changesets</em> which is designed specifically for this. Each package has its own CHANGELOG.md and independent version. When a PR affects package A, you add changeset only for A. The tool calculates versions and publishes affected packages.'
      }
    ]
  }
};
