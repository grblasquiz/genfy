import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-user-story', en: 'user-story-generator' },
  category: 'work',
  emoji: '👤',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de User Stories | Genfy',
    metaDesc: 'Generá user stories formato "Como [rol] quiero [acción] para [beneficio]" con criterios de aceptación INVEST. Para Scrum, Agile y product backlogs.',
    h1: 'Generador de User Stories',
    intro: 'Creá historias de usuario claras siguiendo el formato estándar Connextra y criterios INVEST. Para product owners, scrum masters y devs que quieren menos ambigüedad.',
    tag: 'Agile & Scrum',
    filterLabel: 'Categoría',
    countLabel: 'Cantidad',
    generateLabel: 'Generar historias',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'auth',
        label: 'Autenticación y cuenta',
        items: [
          'Como usuario nuevo quiero registrarme con email y password para crear mi cuenta personal en menos de 2 minutos',
          'Como usuario quiero loguearme con Google OAuth para evitar crear y recordar otra password',
          'Como usuario olvidadizo quiero recuperar mi password vía email para recuperar acceso sin contactar soporte',
          'Como usuario preocupado por seguridad quiero activar 2FA con app autenticadora para proteger mi cuenta',
          'Como administrador quiero ver intentos de login fallidos para detectar ataques de fuerza bruta',
          'Como usuario móvil quiero permanecer logueado 30 días para no reingresar credenciales cada día',
          'Como usuario quiero cerrar sesión en todos los dispositivos remotamente para protegerme tras pérdida de teléfono',
          'Como usuario quiero cambiar mi password sin email de confirmación si conozco la actual para mayor velocidad',
          'Como visitante quiero ver una landing page sin login para entender el producto antes de registrarme',
          'Como usuario quiero ver mi última fecha de login y dispositivo usado para detectar accesos no autorizados',
          'Como nuevo usuario quiero un tour guiado en mi primer login para aprender la interfaz sin documentación',
          'Como usuario quiero linkear cuentas Google y email/password al mismo perfil para login flexible',
          'Como administrador quiero deshabilitar cuentas sin eliminarlas para mantener histórico y permitir reactivación',
          'Como usuario quiero exportar todos mis datos en formato JSON para portabilidad GDPR',
          'Como usuario quiero eliminar mi cuenta completamente para cumplir mi derecho al olvido GDPR',
          'Como usuario empresa quiero invitar miembros con link único para evitar gestionar passwords ajenas',
          'Como administrador de equipo quiero asignar roles (admin, editor, viewer) para granularidad de permisos',
          'Como usuario quiero recibir email de notificación cuando alguien accede desde IP nueva para detectar accesos sospechosos',
          'Como usuario internacional quiero seleccionar mi idioma preferido en registro para usar la app en mi lengua',
          'Como administrador quiero forzar cambio de password cada 90 días para cumplir políticas de seguridad corporativas',
          'Como usuario quiero ver indicador de fortaleza de password durante registro para crear una segura',
          'Como usuario olvidadizo quiero usar passwordless login con magic link por email para evitar passwords completamente',
          'Como usuario móvil quiero login biométrico (huella, FaceID) para velocidad sin sacrificar seguridad',
          'Como usuario quiero personalizar mi avatar con upload o ícono predefinido para identidad visual',
          'Como nuevo usuario quiero confirmar mi email antes de acceso completo para verificar autenticidad',
          'Como administrador quiero forzar 2FA en todos los usuarios para política de seguridad corporativa',
          'Como usuario quiero historial de cambios en mi cuenta (password, email, 2FA) para auditoría personal',
          'Como usuario quiero notificación cuando mis credenciales aparecen en data breach público para cambiar inmediatamente',
          'Como usuario quiero passkey (WebAuthn) en vez de password para usar Touch ID o Windows Hello',
          'Como administrador quiero SSO empresarial con SAML/Okta para integrar con identity provider corporativo'
        ]
      },
      {
        id: 'feature',
        label: 'Features de producto',
        items: [
          'Como usuario quiero buscar contenido por palabra clave para encontrar items rápidamente sin scroll infinito',
          'Como usuario quiero filtrar por categoría, fecha y precio para reducir resultados a lo que me interesa',
          'Como usuario quiero guardar items en favoritos para volver a ellos más tarde sin recordar URL',
          'Como usuario quiero compartir un link público a mi favorito para mostrarle a un amigo sin que se loguee',
          'Como usuario quiero exportar mi lista de favoritos en CSV para uso en Excel o backup personal',
          'Como usuario móvil quiero modo offline para acceder a contenido descargado sin conexión',
          'Como usuario quiero modo oscuro automático según mi sistema para no lastimar mis ojos de noche',
          'Como usuario quiero personalizar el dashboard con widgets que elijo para ver lo que me importa primero',
          'Como usuario power quiero shortcuts de teclado configurables para velocidad sin mouse',
          'Como usuario quiero notificaciones push solo para eventos críticos para no saturar mi teléfono',
          'Como usuario quiero auto-guardado cada 30 segundos para no perder trabajo si la app crashea',
          'Como usuario quiero versionado de mis documentos con timeline para revertir cambios accidentales',
          'Como usuario quiero comentar elementos con menciones @usuario para colaborar sin chats externos',
          'Como usuario quiero recibir resumen semanal por email de actividad para no perderme cambios',
          'Como usuario quiero buscar dentro de mis comentarios y notas para encontrar discusiones pasadas',
          'Como usuario quiero invitar a colaborar con permisos de view/edit/admin para granularidad',
          'Como usuario quiero ver presencia en tiempo real de otros editando para evitar conflictos',
          'Como usuario quiero historial de actividad por proyecto para ver quién hizo qué y cuándo',
          'Como usuario quiero deshacer múltiples acciones (Ctrl+Z secuencial) para corregir cadenas de errores',
          'Como usuario quiero plantillas predefinidas para crear documentos sin empezar en blanco',
          'Como usuario quiero importar datos desde Excel/CSV con preview para validar antes de guardar',
          'Como usuario quiero exportar reportes en PDF con mi branding para presentar a clientes',
          'Como usuario quiero compartir vista filtrada vía URL para mostrar resultados específicos a colega',
          'Como usuario quiero scheduled exports automáticos cada lunes para reportes recurrentes sin manual',
          'Como usuario móvil quiero pull-to-refresh para sentir control sobre actualización de datos',
          'Como usuario quiero sticky filters que persistan entre sesiones para no reconfigurar cada vez',
          'Como usuario quiero bulk actions sobre items seleccionados para velocidad en operaciones repetitivas',
          'Como usuario quiero drag and drop para reordenar items sin abrir menús',
          'Como usuario quiero tooltips contextuales en features avanzadas para aprender sin leer docs',
          'Como usuario quiero changelog visible en la app para ver qué cambió en últimas releases'
        ]
      },
      {
        id: 'admin',
        label: 'Admin y gestión',
        items: [
          'Como administrador quiero dashboard de métricas en tiempo real para detectar problemas antes que escale',
          'Como admin quiero ver lista de usuarios activos con filtros para gestionar mi base de clientes',
          'Como admin quiero impersonar a un usuario para reproducir bugs reportados por soporte',
          'Como admin quiero auditoría completa de acciones admin para compliance SOC2',
          'Como admin quiero programar mantenimiento con notificación previa para minimizar impacto',
          'Como admin quiero feature flags para activar features gradualmente en porcentaje de usuarios',
          'Como admin quiero rollback inmediato de feature flag si métricas empeoran post-launch',
          'Como admin quiero exportar reportes financieros mensuales para contabilidad',
          'Como admin quiero ver MRR (Monthly Recurring Revenue) y churn rate para health del negocio',
          'Como admin quiero alertas Slack si error rate sube > 1% para reaccionar rápido',
          'Como admin de soporte quiero ver tickets agrupados por urgencia para priorizar respuesta',
          'Como admin quiero merge de cuentas duplicadas conservando historial para limpiar base de datos',
          'Como admin quiero envío de emails masivos con segmentación por plan/región para campañas',
          'Como admin quiero whitelisting de IPs para acceso a panel admin desde solo oficina',
          'Como admin quiero gestionar roles personalizados con permisos granulares para casos especiales',
          'Como admin quiero forzar logout de un usuario específico para revocar acceso comprometido',
          'Como admin quiero ver logs de auditoría con filtros y búsqueda para investigar incidentes',
          'Como admin quiero deshabilitar registro temporal para evitar ataque coordinado',
          'Como admin quiero configurar política de passwords (longitud, expiración) para política corporativa',
          'Como admin quiero ver qué API keys están activas y cuándo se usaron por última vez',
          'Como admin quiero rotar API keys masivamente con grace period para migración suave',
          'Como admin quiero quotas de uso por plan (100 calls/mes Free) para limitar abuso',
          'Como admin quiero dashboards customizables por equipo para que cada uno vea sus métricas',
          'Como admin quiero exportar configuración como código (Terraform-like) para infrastructure as code',
          'Como admin quiero alerta cuando un usuario excede 80% de su quota para upsell oportuno',
          'Como admin de soporte quiero notas internas en perfil de usuario para contexto entre tickets',
          'Como admin quiero exportar lista de usuarios churneados con razones para análisis post-mortem',
          'Como admin quiero blacklist de emails (dominios desechables) para evitar registros fraudulentos',
          'Como admin quiero monitor de salud de integraciones (Stripe, SendGrid) para detectar caídas de proveedores',
          'Como admin quiero changelog interno con quién aprobó cada feature flag para trazabilidad'
        ]
      },
      {
        id: 'integration',
        label: 'Integraciones y API',
        items: [
          'Como dev externo quiero acceder a API REST con auth Bearer token para integrar mi app',
          'Como dev externo quiero documentación OpenAPI/Swagger interactiva para probar endpoints sin postman',
          'Como dev externo quiero rate limit transparente con header X-RateLimit-Remaining para gestionar mi consumo',
          'Como dev externo quiero webhooks con firma HMAC para verificar autenticidad de eventos',
          'Como dev externo quiero retry policy automático en webhooks fallidos para no perder eventos',
          'Como dev externo quiero SDK oficial en JavaScript, Python y Ruby para integración rápida',
          'Como dev externo quiero changelog de API con migration guide para entender breaking changes',
          'Como dev externo quiero sandbox environment con datos test para desarrollar sin afectar producción',
          'Como dev externo quiero recibir notificación email cuando un endpoint que uso entra en deprecation',
          'Como usuario quiero conectar mi cuenta de Slack para recibir notificaciones en mi canal de equipo',
          'Como usuario quiero conectar Google Calendar para sincronizar eventos automáticamente',
          'Como usuario quiero conectar Stripe para cobrar a mis clientes desde la app',
          'Como usuario quiero conectar Zapier para automatizar workflows con 5000+ apps sin código',
          'Como usuario quiero exportar datos a Google Sheets en tiempo real con un click',
          'Como usuario quiero importar contactos desde HubSpot o Salesforce para no duplicar trabajo',
          'Como usuario quiero recibir webhooks de mi propio sistema en endpoints HTTPS configurables',
          'Como usuario quiero conectar GitHub para crear issues automáticamente desde tickets',
          'Como dev externo quiero GraphQL endpoint además de REST para queries específicas optimizadas',
          'Como dev externo quiero pagination cursor-based para datasets grandes sin offset penalty',
          'Como dev externo quiero filtros y proyecciones (?fields=id,name) para reducir payload',
          'Como usuario quiero configurar Slack notification con plantilla custom de mensaje',
          'Como usuario quiero conectar Notion para sincronizar bases de datos bidireccionalmente',
          'Como usuario quiero integración con Microsoft Teams para notificaciones en mi workspace',
          'Como dev externo quiero versionado de API (/v1, /v2) con sunset clear de versiones viejas',
          'Como dev externo quiero idempotency-key support para retries seguros en POST',
          'Como dev externo quiero batch endpoints para procesar múltiples items en una request',
          'Como dev externo quiero playground GraphQL embebido en docs para explorar el schema',
          'Como usuario quiero conectar QuickBooks para sincronizar facturación con contabilidad',
          'Como usuario quiero export programado a S3 para data warehouse interno',
          'Como dev externo quiero OAuth2 scope granular para que el usuario apruebe solo permisos necesarios'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo escribir user stories que el equipo realmente entienda',
        body: '<p>El formato <strong>Connextra</strong> ("Como [rol] quiero [acción] para [beneficio]") es el más usado en Scrum porque fuerza tres elementos críticos. El <em>rol</em> identifica quién pide la feature: usuario nuevo, admin, dev externo, mobile user. El <em>acción</em> describe qué quiere hacer concretamente. El <em>beneficio</em> justifica por qué importa: si no podés escribir el "para qué", probablemente esa feature no debería estar en el backlog.</p><p>El error más común es <strong>escribir features disfrazadas de stories</strong>. "Como usuario quiero un botón rojo en el header" no es story, es spec de UI. La pregunta correcta es: ¿qué problema del usuario resuelve ese botón? Si es "para acceder rápido al perfil", la story es "Como usuario quiero acceder a mi perfil con un click desde cualquier página para no navegar profundo cada vez". El botón rojo es solución, no story.</p><p>La regla <strong>INVEST</strong> de Bill Wake guía la calidad: Independent (no depende de otra story), Negotiable (no es contrato, es conversación), Valuable (entrega valor real al usuario), Estimable (el equipo puede estimarla), Small (cabe en un sprint), Testable (criterios de aceptación verificables). Si tu story falla en cualquiera de las seis, refinala antes de pasarla a sprint.</p>'
      },
      {
        h2: 'Criterios de aceptación: el detalle que evita malentendidos',
        body: '<p>Una story sin criterios de aceptación es promesa, no contrato. Los criterios definen <strong>qué condiciones tienen que cumplirse para que la story sea "Done"</strong>. Sin ellos, dev y product owner pueden tener concepciones distintas y la story se rechaza en review. Un buen criterio es testeable: "El email se envía dentro de 5 segundos del registro" se puede medir. "El email funciona bien" no.</p><p>El formato <strong>Given/When/Then (Gherkin)</strong> popularizado por BDD es ideal para criterios. "Given user is on signup page, When user submits valid form, Then confirmation email is sent within 5 seconds AND user is redirected to /onboarding". Cada criterio describe un escenario concreto. Para una story bien refinada, esperá entre 3 y 7 criterios. Menos de 3 sugiere que la story es muy abstracta. Más de 7 sugiere que debería partirse en stories más pequeñas.</p><p>Los criterios deben cubrir <strong>happy path, error cases y edge cases</strong>. Para "Como usuario quiero loguearme con Google", happy path es "login exitoso redirige a dashboard". Error case es "usuario cancela autorización Google → vuelve a /login con mensaje". Edge case es "primer login con cuenta Google que coincide con email ya registrado → solicita link de cuentas". Sin estos tres, la implementación tendrá huecos que llegan a producción como bugs.</p>'
      },
      {
        h2: 'Errores comunes en user stories y cómo evitarlos',
        body: '<p>Error #1: <strong>stories técnicas disfrazadas</strong>. "Como dev quiero refactorizar el módulo de auth" no es user story, es technical debt. Si la mejora interna no afecta usuario observable, no es story; es chore o spike. <em>Atlassian</em> recomienda separar product backlog (stories de usuario) de technical backlog (chores, refactors, infra) para no confundirlos.</p><p>Error #2: <strong>stories demasiado grandes (epics disfrazados)</strong>. "Como usuario quiero un sistema completo de notificaciones" no cabe en sprint. Eso es epic; partilo en stories: "ver notificaciones en bell icon", "marcar como leídas", "configurar canales (email, push, in-app)", "agrupar duplicadas en 5 minutos". Cada una es story sprint-able. <em>Mike Cohn</em> sugiere que 5-13 story points es el sweet spot.</p><p>Error #3: <strong>stories sin owner claro</strong>. "Como usuario..." es genérico. ¿Qué tipo de usuario? Free vs paid, mobile vs desktop, admin vs viewer. El rol específico cambia drásticamente la implementación. "Como usuario admin del plan enterprise..." da contexto que el dev necesita. Si tu producto tiene 5 personas, escribí 5 personas: "como Sarah la PM" suele dar mejor implementación que "como usuario".</p>'
      },
      {
        h2: 'User stories en frameworks ágiles modernos',
        body: '<p>En <strong>Scrum tradicional</strong>, las stories pasan por refinement (PO + dev refinan), planning (sprint commitment), daily, review (demo) y retrospective. <em>Spotify</em>, <em>Atlassian</em> y <em>GitHub</em> documentan modelos donde el PO escribe drafts y el equipo refina colaborativamente en grooming sessions. Si tu PO escribe stories solo y las "tira" al sprint, falta colaboración.</p><p>En <strong>Kanban</strong> y flujos continuos sin sprints, las stories siguen entrando individualmente. La diferencia es que pull-based: el dev toma la siguiente cuando termina la actual, sin batch de sprint. <em>Basecamp</em>, <em>Linear</em> y <em>Vercel</em> usan modelos kanban-light. La calidad de stories importa aún más porque no hay ceremonia de planning grupal donde aclarar dudas.</p><p>Para <strong>productos consumer y mobile</strong>, considerá agregar mockups o user flow diagrams a la story. Una story de UX-heavy ("como usuario quiero onboarding más simple") sin mockup deja todo a interpretación del dev. <em>Figma</em> embebido en Jira o Linear es común. Para productos B2B/API, en cambio, los criterios técnicos detallados sustituyen los mockups: una story de "como dev externo quiero rate limit con header" no necesita imagen, necesita especificación HTTP exacta.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuál es la diferencia entre user story y requirement?',
        a: 'Un requirement es spec rígida ("el sistema debe enviar email de confirmación"). Una user story es invitación a conversación ("como usuario quiero confirmación por email para saber que me registré bien"). Stories son negociables; requirements son contractuales. Las stories generan mejor producto porque permiten ajustar implementación a la realidad del usuario.'
      },
      {
        q: '¿Cuántos puntos debe tener una user story?',
        a: 'Idealmente 1, 2, 3, 5 o 8 (Fibonacci). Stories con 13 puntos suelen ser epics disfrazados; partilas. Stories con 1 punto pueden agruparse con otras pequeñas. El equipo calibra qué significa cada número durante 2-3 sprints; lo importante es relativo (5 = doble que 3) no absoluto en horas.'
      },
      {
        q: '¿Quién escribe las user stories?',
        a: 'Idealmente el Product Owner con input del equipo. PO entiende el contexto de negocio y prioridades, dev y QA aportan factibilidad y edge cases técnicos. La práctica de "three amigos" (PO + dev + QA refinan juntos) genera stories de mejor calidad que cuando solo PO escribe.'
      },
      {
        q: '¿Necesito user stories si soy solo founder o equipo de 2?',
        a: 'Sí, aunque más informalmente. Aún solo, escribir "como usuario quiero X para Y" antes de codear te fuerza a justificar la feature. Si no podés completar el "para Y" claramente, probablemente la feature no es prioritaria. La disciplina vale aunque el "backlog" sea un Notion compartido entre 2.'
      }
    ]
  },
  en: {
    pageTitle: 'User Story Generator | Genfy',
    metaDesc: 'Generate user stories in "As a [role] I want [action] so that [benefit]" format with INVEST acceptance criteria. For Scrum, Agile and product backlogs.',
    h1: 'User Story Generator',
    intro: 'Create clear user stories following Connextra format and INVEST criteria. For product owners, scrum masters and devs who want less ambiguity.',
    tag: 'Agile & Scrum',
    filterLabel: 'Category',
    countLabel: 'Amount',
    generateLabel: 'Generate stories',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'auth',
        label: 'Authentication and account',
        items: [
          'As a new user I want to register with email and password so I can create my personal account in less than 2 minutes',
          'As a user I want to log in with Google OAuth so I avoid creating and remembering another password',
          'As a forgetful user I want to recover my password via email so I regain access without contacting support',
          'As a security-conscious user I want to enable 2FA with an authenticator app so my account is protected',
          'As an administrator I want to see failed login attempts so I can detect brute force attacks',
          'As a mobile user I want to stay logged in 30 days so I don\'t re-enter credentials daily',
          'As a user I want to log out of all devices remotely so I\'m protected after losing my phone',
          'As a user I want to change my password without confirmation email if I know the current one for greater speed',
          'As a visitor I want to see a landing page without login so I understand the product before signing up',
          'As a user I want to see my last login date and device used so I detect unauthorized access',
          'As a new user I want a guided tour on my first login so I learn the interface without docs',
          'As a user I want to link Google and email/password accounts to the same profile for flexible login',
          'As an administrator I want to disable accounts without deleting them to maintain history and allow reactivation',
          'As a user I want to export all my data in JSON format for GDPR portability',
          'As a user I want to delete my account completely to comply with my GDPR right to be forgotten',
          'As a business user I want to invite members with unique link to avoid managing others\' passwords',
          'As a team admin I want to assign roles (admin, editor, viewer) for permission granularity',
          'As a user I want to receive notification email when someone accesses from new IP to detect suspicious access',
          'As an international user I want to select my preferred language at signup to use app in my language',
          'As an admin I want to force password change every 90 days to comply with corporate security policies',
          'As a user I want password strength indicator during signup to create a secure one',
          'As a forgetful user I want passwordless login with magic link via email to avoid passwords entirely',
          'As a mobile user I want biometric login (fingerprint, FaceID) for speed without sacrificing security',
          'As a user I want to customize my avatar with upload or predefined icon for visual identity',
          'As a new user I want to confirm my email before full access to verify authenticity',
          'As an admin I want to force 2FA on all users for corporate security policy',
          'As a user I want history of changes to my account (password, email, 2FA) for personal audit',
          'As a user I want notification when my credentials appear in public data breach to change immediately',
          'As a user I want passkey (WebAuthn) instead of password to use Touch ID or Windows Hello',
          'As an admin I want enterprise SSO with SAML/Okta to integrate with corporate identity provider'
        ]
      },
      {
        id: 'feature',
        label: 'Product features',
        items: [
          'As a user I want to search content by keyword so I find items quickly without infinite scroll',
          'As a user I want to filter by category, date and price to reduce results to what interests me',
          'As a user I want to save items to favorites to return to them later without remembering URL',
          'As a user I want to share a public link to my favorite to show a friend without them logging in',
          'As a user I want to export my favorites list in CSV for use in Excel or personal backup',
          'As a mobile user I want offline mode to access downloaded content without connection',
          'As a user I want automatic dark mode based on my system to not strain my eyes at night',
          'As a user I want to customize the dashboard with widgets I choose to see what matters first',
          'As a power user I want configurable keyboard shortcuts for speed without mouse',
          'As a user I want push notifications only for critical events to not saturate my phone',
          'As a user I want auto-save every 30 seconds so I don\'t lose work if app crashes',
          'As a user I want versioning of my documents with timeline to revert accidental changes',
          'As a user I want to comment on items with @user mentions to collaborate without external chats',
          'As a user I want to receive weekly email summary of activity to not miss changes',
          'As a user I want to search within my comments and notes to find past discussions',
          'As a user I want to invite collaborators with view/edit/admin permissions for granularity',
          'As a user I want to see real-time presence of others editing to avoid conflicts',
          'As a user I want activity history per project to see who did what and when',
          'As a user I want to undo multiple actions (sequential Ctrl+Z) to fix error chains',
          'As a user I want predefined templates to create documents without starting blank',
          'As a user I want to import data from Excel/CSV with preview to validate before saving',
          'As a user I want to export reports in PDF with my branding to present to clients',
          'As a user I want to share filtered view via URL to show specific results to colleague',
          'As a user I want automatic scheduled exports every Monday for recurring reports without manual',
          'As a mobile user I want pull-to-refresh to feel control over data update',
          'As a user I want sticky filters that persist between sessions to not reconfigure each time',
          'As a user I want bulk actions on selected items for speed in repetitive operations',
          'As a user I want drag and drop to reorder items without opening menus',
          'As a user I want contextual tooltips on advanced features to learn without reading docs',
          'As a user I want changelog visible in the app to see what changed in recent releases'
        ]
      },
      {
        id: 'admin',
        label: 'Admin and management',
        items: [
          'As an administrator I want real-time metrics dashboard to detect issues before they escalate',
          'As an admin I want to see active users list with filters to manage my customer base',
          'As an admin I want to impersonate a user to reproduce bugs reported by support',
          'As an admin I want full audit of admin actions for SOC2 compliance',
          'As an admin I want to schedule maintenance with prior notification to minimize impact',
          'As an admin I want feature flags to gradually activate features in percentage of users',
          'As an admin I want immediate rollback of feature flag if metrics worsen post-launch',
          'As an admin I want to export monthly financial reports for accounting',
          'As an admin I want to see MRR (Monthly Recurring Revenue) and churn rate for business health',
          'As an admin I want Slack alerts if error rate goes above 1% to react quickly',
          'As a support admin I want to see tickets grouped by urgency to prioritize response',
          'As an admin I want to merge duplicate accounts preserving history to clean database',
          'As an admin I want bulk email sending with segmentation by plan/region for campaigns',
          'As an admin I want IP whitelisting for admin panel access only from office',
          'As an admin I want to manage custom roles with granular permissions for special cases',
          'As an admin I want to force logout of a specific user to revoke compromised access',
          'As an admin I want to see audit logs with filters and search to investigate incidents',
          'As an admin I want to temporarily disable registration to avoid coordinated attack',
          'As an admin I want to configure password policy (length, expiration) for corporate policy',
          'As an admin I want to see which API keys are active and when last used',
          'As an admin I want to rotate API keys massively with grace period for smooth migration',
          'As an admin I want usage quotas per plan (100 calls/month Free) to limit abuse',
          'As an admin I want customizable dashboards per team so each sees their metrics',
          'As an admin I want to export configuration as code (Terraform-like) for infrastructure as code',
          'As an admin I want alert when a user exceeds 80% of their quota for timely upsell',
          'As a support admin I want internal notes on user profile for context between tickets',
          'As an admin I want to export list of churned users with reasons for post-mortem analysis',
          'As an admin I want email blacklist (disposable domains) to prevent fraudulent registrations',
          'As an admin I want health monitor of integrations (Stripe, SendGrid) to detect provider outages',
          'As an admin I want internal changelog with who approved each feature flag for traceability'
        ]
      },
      {
        id: 'integration',
        label: 'Integrations and API',
        items: [
          'As an external dev I want to access REST API with Bearer token auth to integrate my app',
          'As an external dev I want interactive OpenAPI/Swagger documentation to test endpoints without postman',
          'As an external dev I want transparent rate limit with X-RateLimit-Remaining header to manage my consumption',
          'As an external dev I want webhooks with HMAC signature to verify event authenticity',
          'As an external dev I want automatic retry policy on failed webhooks to not lose events',
          'As an external dev I want official SDK in JavaScript, Python and Ruby for quick integration',
          'As an external dev I want API changelog with migration guide to understand breaking changes',
          'As an external dev I want sandbox environment with test data to develop without affecting production',
          'As an external dev I want to receive email notification when an endpoint I use enters deprecation',
          'As a user I want to connect my Slack account to receive notifications in my team channel',
          'As a user I want to connect Google Calendar to sync events automatically',
          'As a user I want to connect Stripe to charge my customers from the app',
          'As a user I want to connect Zapier to automate workflows with 5000+ apps without code',
          'As a user I want to export data to Google Sheets in real time with one click',
          'As a user I want to import contacts from HubSpot or Salesforce to not duplicate work',
          'As a user I want to receive webhooks from my own system at configurable HTTPS endpoints',
          'As a user I want to connect GitHub to automatically create issues from tickets',
          'As an external dev I want GraphQL endpoint in addition to REST for optimized specific queries',
          'As an external dev I want cursor-based pagination for large datasets without offset penalty',
          'As an external dev I want filters and projections (?fields=id,name) to reduce payload',
          'As a user I want to configure Slack notification with custom message template',
          'As a user I want to connect Notion to sync databases bidirectionally',
          'As a user I want integration with Microsoft Teams for notifications in my workspace',
          'As an external dev I want API versioning (/v1, /v2) with clear sunset of old versions',
          'As an external dev I want idempotency-key support for safe retries on POST',
          'As an external dev I want batch endpoints to process multiple items in one request',
          'As an external dev I want GraphQL playground embedded in docs to explore the schema',
          'As a user I want to connect QuickBooks to sync billing with accounting',
          'As a user I want scheduled export to S3 for internal data warehouse',
          'As an external dev I want granular OAuth2 scope so user approves only necessary permissions'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to write user stories the team actually understands',
        body: '<p>The <strong>Connextra</strong> format ("As a [role] I want [action] so that [benefit]") is most used in Scrum because it forces three critical elements. The <em>role</em> identifies who requests the feature: new user, admin, external dev, mobile user. The <em>action</em> describes what they want to do concretely. The <em>benefit</em> justifies why it matters: if you can\'t write the "so that", probably that feature shouldn\'t be in the backlog.</p><p>The most common mistake is <strong>writing features disguised as stories</strong>. "As a user I want a red button in the header" isn\'t a story, it\'s UI spec. The right question is: what user problem does that button solve? If it\'s "to access profile quickly", the story is "As a user I want to access my profile with one click from any page so I don\'t navigate deep each time". The red button is solution, not story.</p><p>Bill Wake\'s <strong>INVEST</strong> rule guides quality: Independent (doesn\'t depend on another story), Negotiable (not contract, conversation), Valuable (delivers real value to user), Estimable (team can estimate), Small (fits in a sprint), Testable (verifiable acceptance criteria). If your story fails any of the six, refine before sprinting it.</p>'
      },
      {
        h2: 'Acceptance criteria: the detail that prevents misunderstandings',
        body: '<p>A story without acceptance criteria is promise, not contract. Criteria define <strong>what conditions must be met for the story to be "Done"</strong>. Without them, dev and product owner can have different conceptions and the story is rejected in review. A good criterion is testable: "Email is sent within 5 seconds of registration" can be measured. "Email works fine" cannot.</p><p>The <strong>Given/When/Then (Gherkin)</strong> format popularized by BDD is ideal for criteria. "Given user is on signup page, When user submits valid form, Then confirmation email is sent within 5 seconds AND user is redirected to /onboarding". Each criterion describes a concrete scenario. For a well-refined story, expect between 3 and 7 criteria. Less than 3 suggests the story is too abstract. More than 7 suggests it should be split into smaller stories.</p><p>Criteria must cover <strong>happy path, error cases and edge cases</strong>. For "As a user I want to log in with Google", happy path is "successful login redirects to dashboard". Error case is "user cancels Google authorization → returns to /login with message". Edge case is "first login with Google account matching already-registered email → requests account link". Without these three, implementation will have gaps reaching production as bugs.</p>'
      },
      {
        h2: 'Common mistakes in user stories and how to avoid them',
        body: '<p>Mistake #1: <strong>technical stories disguised</strong>. "As a dev I want to refactor auth module" isn\'t user story, it\'s technical debt. If internal improvement doesn\'t affect observable user, it\'s not story; it\'s chore or spike. <em>Atlassian</em> recommends separating product backlog (user stories) from technical backlog (chores, refactors, infra) to not confuse them.</p><p>Mistake #2: <strong>too-large stories (disguised epics)</strong>. "As a user I want a complete notification system" doesn\'t fit in sprint. That\'s epic; split into stories: "see notifications in bell icon", "mark as read", "configure channels (email, push, in-app)", "group duplicates in 5 minutes". Each is sprint-able story. <em>Mike Cohn</em> suggests 5-13 story points is sweet spot.</p><p>Mistake #3: <strong>stories without clear owner</strong>. "As a user..." is generic. What kind of user? Free vs paid, mobile vs desktop, admin vs viewer. Specific role drastically changes implementation. "As an admin user of enterprise plan..." gives context dev needs. If your product has 5 personas, write 5 personas: "as Sarah the PM" usually gives better implementation than "as user".</p>'
      },
      {
        h2: 'User stories in modern agile frameworks',
        body: '<p>In <strong>traditional Scrum</strong>, stories pass through refinement (PO + dev refine), planning (sprint commitment), daily, review (demo) and retrospective. <em>Spotify</em>, <em>Atlassian</em> and <em>GitHub</em> document models where PO writes drafts and team refines collaboratively in grooming sessions. If your PO writes stories alone and "throws" them at sprint, collaboration is missing.</p><p>In <strong>Kanban</strong> and continuous flows without sprints, stories keep coming individually. Difference is pull-based: dev takes next when finishing current, without sprint batch. <em>Basecamp</em>, <em>Linear</em> and <em>Vercel</em> use kanban-light models. Story quality matters even more because there\'s no group planning ceremony to clarify doubts.</p><p>For <strong>consumer and mobile products</strong>, consider adding mockups or user flow diagrams to story. A UX-heavy story ("as user I want simpler onboarding") without mockup leaves all to dev interpretation. <em>Figma</em> embedded in Jira or Linear is common. For B2B/API products, instead, detailed technical criteria substitute mockups: an "as external dev I want rate limit with header" story doesn\'t need image, needs exact HTTP specification.</p>'
      }
    ],
    faq: [
      {
        q: 'What\'s the difference between user story and requirement?',
        a: 'A requirement is rigid spec ("system must send confirmation email"). A user story is invitation to conversation ("as user I want email confirmation so I know I registered well"). Stories are negotiable; requirements are contractual. Stories generate better product because they allow adjusting implementation to user reality.'
      },
      {
        q: 'How many points should a user story have?',
        a: 'Ideally 1, 2, 3, 5 or 8 (Fibonacci). Stories with 13 points are usually disguised epics; split them. Stories with 1 point can be grouped with other small ones. Team calibrates what each number means over 2-3 sprints; what matters is relative (5 = double of 3) not absolute in hours.'
      },
      {
        q: 'Who writes user stories?',
        a: 'Ideally Product Owner with team input. PO understands business context and priorities, dev and QA contribute feasibility and technical edge cases. The "three amigos" practice (PO + dev + QA refine together) generates better quality stories than when only PO writes.'
      },
      {
        q: 'Do I need user stories if I\'m solo founder or 2-person team?',
        a: 'Yes, though more informally. Even alone, writing "as user I want X for Y" before coding forces you to justify the feature. If you can\'t complete the "for Y" clearly, probably the feature isn\'t priority. Discipline is worth it even if "backlog" is a Notion shared between 2.'
      }
    ]
  }
};
