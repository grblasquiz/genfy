import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-sprint-goals",
    "en": "sprint-goal-generator"
  },
  "category": "work",
  "emoji": "🎯",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Sprint Goals | Genfy",
    "metaDesc": "Genera objetivos SMART para sprints de desarrollo ágil. Ideal para Scrum Masters, Product Owners y equipos que buscan metas claras y medibles.",
    "h1": "Generador de Sprint Goals",
    "intro": "Crea objetivos SMART para sprints de desarrollo ágil. Metas claras, medibles y alineadas con la visión de producto.",
    "tag": "Trabajo",
    "filterLabel": "Área del sprint",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "features",
        "label": "Funcionalidades",
        "items": [
          "Implementar autenticación OAuth con Google y GitHub",
          "Completar flujo de checkout con integración de Stripe",
          "Lanzar dashboard de analytics con métricas en tiempo real",
          "Crear sistema de notificaciones push multiplataforma",
          "Desarrollar editor WYSIWYG para creación de contenido",
          "Integrar búsqueda full-text con Elasticsearch",
          "Construir API GraphQL para consumo de mobile apps",
          "Implementar sistema de permisos granulares por rol",
          "Habilitar modo offline con sincronización automática",
          "Lanzar feature de colaboración en tiempo real (websockets)",
          "Completar migración de REST a GraphQL para endpoints críticos",
          "Implementar infinite scroll con virtualización para listas grandes",
          "Crear wizard de onboarding interactivo de 5 pasos",
          "Desarrollar sistema de templates personalizables",
          "Integrar calendar view con drag-and-drop de eventos",
          "Construir herramienta de exportación a PDF/Excel/CSV",
          "Implementar filtros avanzados con guardado de búsquedas",
          "Lanzar módulo de comentarios con threading y menciones",
          "Habilitar autosave con control de versiones",
          "Completar integración con Slack para notificaciones",
          "Desarrollar preview de cambios antes de publicar",
          "Crear sistema de tags y categorías anidadas",
          "Implementar bulk actions para operaciones masivas",
          "Lanzar modo dark theme con persistencia de preferencia",
          "Construir wizard de importación de datos desde CSV"
        ]
      },
      {
        "id": "performance",
        "label": "Performance y optimización",
        "items": [
          "Reducir tiempo de carga inicial de 3s a <1s",
          "Optimizar queries N+1 en endpoints de listados",
          "Implementar lazy loading de imágenes con placeholders",
          "Migrar assets estáticos a CDN con cache headers",
          "Reducir bundle size de JavaScript en 40%",
          "Optimizar rendering de listas con virtualización",
          "Implementar service worker para cache de assets",
          "Reducir TTFB a <200ms en 95% de requests",
          "Optimizar database indexes para queries frecuentes",
          "Implementar infinite scroll sin paginación completa",
          "Reducir memoria usada por frontend en 30%",
          "Optimizar imágenes con Next-gen formats (WebP, AVIF)",
          "Implementar code splitting por rutas principales",
          "Cachear responses de API con Redis por 5min",
          "Reducir CPU usage del backend en 25%",
          "Optimizar hot paths con profiling de producción",
          "Implementar preload de recursos críticos",
          "Reducir database connections pooling a límites óptimos",
          "Optimizar re-renders de React con React.memo",
          "Implementar prefetching de navegación predecible",
          "Reducir payload de API responses eliminando campos no usados",
          "Optimizar rendering server-side con ISR en Next.js",
          "Implementar batching de requests repetidas",
          "Reducir latencia de websockets con edge servers",
          "Optimizar startup time de Lambda functions con SnapStart"
        ]
      },
      {
        "id": "infrastructure",
        "label": "Infraestructura y DevOps",
        "items": [
          "Migrar deployment a Kubernetes con zero-downtime",
          "Implementar CI/CD pipeline con tests automáticos",
          "Configurar monitoring con Prometheus + Grafana",
          "Implementar blue-green deployments automatizados",
          "Migrar base de datos a réplicas read para escalado",
          "Configurar alertas automáticas para errores críticos",
          "Implementar infrastructure as code con Terraform",
          "Migrar secrets a HashiCorp Vault",
          "Configurar auto-scaling horizontal en production",
          "Implementar disaster recovery con backups automáticos",
          "Migrar logs a ELK stack con retention policies",
          "Configurar rate limiting global con API Gateway",
          "Implementar canary deployments para releases graduales",
          "Migrar a arquitectura serverless con Lambda",
          "Configurar WAF para protección contra ataques comunes",
          "Implementar distributed tracing con OpenTelemetry",
          "Migrar imágenes Docker a Alpine para reducir tamaño",
          "Configurar health checks y liveness probes",
          "Implementar circuit breakers para servicios externos",
          "Migrar a multi-region para high availability",
          "Configurar cost alerts para AWS spending",
          "Implementar feature flags con LaunchDarkly",
          "Migrar CI a GitHub Actions con caching optimizado",
          "Configurar CDN con edge computing en Cloudflare",
          "Implementar chaos engineering tests con Gremlin"
        ]
      },
      {
        "id": "quality",
        "label": "Calidad y testing",
        "items": [
          "Alcanzar 80% de cobertura en tests unitarios",
          "Implementar E2E tests con Playwright para flujos críticos",
          "Crear suite de tests de integración para API",
          "Implementar visual regression testing con Chromatic",
          "Configurar pre-commit hooks con linting y formatting",
          "Alcanzar 0 TypeScript errors en codebase",
          "Implementar property-based testing para lógica compleja",
          "Crear smoke tests para deployment verification",
          "Implementar mutation testing para validar calidad de tests",
          "Configurar static analysis con SonarQube",
          "Alcanzar Lighthouse score >90 en todas las páginas",
          "Implementar contract testing para microservicios",
          "Crear comprehensive test plan para sprint",
          "Implementar accessibility testing automatizado",
          "Configurar security scanning en CI pipeline",
          "Alcanzar 0 console errors en producción",
          "Implementar load testing con k6 para endpoints",
          "Crear golden tests para rendering crítico",
          "Implementar snapshot testing para UI components",
          "Configurar dependency vulnerability scanning",
          "Alcanzar 100% de documentación de API",
          "Implementar chaos testing en staging",
          "Crear performance budgets enforzados en CI",
          "Implementar fuzz testing para inputs de usuario",
          "Configurar continuous profiling en producción"
        ]
      },
      {
        "id": "ux",
        "label": "UX y diseño",
        "items": [
          "Rediseñar onboarding para mejorar activation rate en 25%",
          "Implementar skeleton screens para perceived performance",
          "Crear design system con componentes reutilizables",
          "Mejorar accesibilidad para cumplir WCAG 2.1 AA",
          "Rediseñar formularios complejos con validación inline",
          "Implementar empty states informativos en toda la app",
          "Crear micro-interactions para feedback de acciones",
          "Mejorar información de errores con mensajes accionables",
          "Implementar loading states consistentes",
          "Rediseñar navegación principal basado en user research",
          "Crear tooltips contextuales para features complejas",
          "Implementar keyboard shortcuts para power users",
          "Mejorar responsive design en tablets",
          "Crear states de confirmación antes de acciones destructivas",
          "Implementar progressive disclosure para settings complejas",
          "Rediseñar tablas con sorting, filtering y export",
          "Crear wizard de configuración guiado por pasos",
          "Implementar undo/redo para acciones críticas",
          "Mejorar contraste de colores para legibilidad",
          "Crear animaciones de transición fluidas",
          "Implementar contextual help system inline",
          "Rediseñar mobile navigation con bottom tabs",
          "Crear success states celebratorios",
          "Implementar search con autocomplete y highlights",
          "Mejorar touch targets para mobile (min 44px)"
        ]
      },
      {
        "id": "technical",
        "label": "Deuda técnica",
        "items": [
          "Refactorizar componentes legacy a TypeScript",
          "Eliminar dependencias deprecadas y actualizar a latest",
          "Migrar class components a functional con hooks",
          "Refactorizar god objects en clases más pequeñas",
          "Eliminar código muerto detectado por coverage",
          "Migrar callbacks a async/await en codebase",
          "Refactorizar CSS global a módulos CSS",
          "Eliminar console.logs y debuggers de producción",
          "Migrar var declarations a const/let",
          "Refactorizar prop drilling a Context API",
          "Eliminar duplicación de lógica de negocio",
          "Migrar moment.js a date-fns para reducir bundle",
          "Refactorizar switches largos a strategy pattern",
          "Eliminar magic numbers con constantes nombradas",
          "Migrar Redux a Zustand para reducir boilerplate",
          "Refactorizar componentes >500 líneas",
          "Eliminar comentarios obsoletos y TODOs viejos",
          "Migrar CSS-in-JS a Tailwind CSS",
          "Refactorizar callbacks anidados (callback hell)",
          "Eliminar feature flags ya consolidados",
          "Migrar queries SQL a ORM queries",
          "Refactorizar error handling inconsistente",
          "Eliminar polyfills ya innecesarios",
          "Migrar API calls directas a React Query",
          "Refactorizar naming inconsistente en codebase"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Características de un buen Sprint Goal",
        "body": "<p>Un Sprint Goal efectivo debe ser <strong>SMART</strong>: Específico (qué se va a construir), Medible (criterios de aceptación claros), Alcanzable (realista para el sprint), Relevante (aporta valor al usuario/negocio), y Temporal (se completa en el sprint).</p><p>Debe ser <strong>orientado al valor</strong>, no a tareas técnicas. En lugar de 'Escribir 20 tests unitarios', mejor 'Asegurar que el checkout funcione sin bugs en producción'. El objetivo debe resonar con stakeholders no técnicos.</p><p>Un buen Sprint Goal es <strong>unificador</strong>: todo el equipo trabaja hacia el mismo norte. Evita objetivos múltiples desconectados ('Hacer A, B, C y D'). Si hay múltiples features, busca el hilo conductor: 'Mejorar la experiencia de compra end-to-end'.</p>"
      },
      {
        "h2": "Errores comunes al definir objetivos de sprint",
        "body": "<p>El error más frecuente es confundir el Sprint Goal con el <strong>Sprint Backlog</strong>. El Goal es el 'por qué' (outcome deseado), el Backlog es el 'cómo' (tareas específicas). Ejemplo: Goal = 'Usuarios pueden pagar con múltiples métodos', Backlog = 'Integrar Stripe, crear UI selector de método, tests E2E'.</p><p>Otro error: objetivos <strong>demasiado vagos</strong> ('Mejorar la app'). Falta claridad para el equipo y stakeholders. Tampoco funcionan objetivos <strong>demasiado técnicos</strong> ('Refactorizar Redux store'). El PO y usuarios no entienden el valor.</p><p>Evita objetivos <strong>no medibles</strong>: '¿Cómo sabemos si lo logramos?' debe tener respuesta clara. Y nunca definas el objetivo a mitad del sprint: debe estar claro en Sprint Planning. El equipo necesita ese foco desde el día uno.</p>"
      },
      {
        "h2": "Cómo alinear Sprint Goals con OKRs y roadmap",
        "body": "<p>Los Sprint Goals deben <strong>cascadear desde OKRs trimestrales</strong>. Si tu OKR es 'Aumentar retención a 60%', tus sprints deben tener goals como 'Implementar notificaciones que traigan usuarios de vuelta' o 'Lanzar feature que mejore engagement diario'.</p><p>Usa el <strong>product roadmap</strong> para priorizar: los sprints ejecutan milestones del roadmap. Si el Q1 tiene objetivo 'Monetización', tus Sprint Goals deberían incluir payments, subscriptions, billing. Si es 'Growth', enfoca en onboarding, invites, virality.</p><p>Mantén <strong>transparencia</strong>: comparte Sprint Goals en Slack/Confluence al inicio de cada sprint. Los stakeholders saben qué esperar al final. Y revisa en Sprint Review: ¿logramos el Goal? Si no, ¿por qué? Esa retrospectiva mejora la planning del siguiente sprint.</p>"
      },
      {
        "h2": "Técnicas para generar Sprint Goals efectivos",
        "body": "<p>En <strong>Sprint Planning</strong>, arranca con la pregunta: '¿Qué valor queremos entregar a usuarios esta iteración?' No con 'Qué tickets tenemos pendientes'. Luego el equipo propone user stories que contribuyen a ese valor.</p><p>Usa la técnica <strong>MoSCoW</strong>: Must have (sin esto el Goal falla), Should have (importante pero no crítico), Could have (nice-to-have), Won't have (fuera de scope). Esto clarifica el MVP del sprint.</p><p>Otra técnica: <strong>Goal Storming</strong>. El equipo genera 5-10 posibles Sprint Goals en post-its, vota por los más valiosos, y converge en uno. Promueve ownership compartido. Y siempre haz el <strong>elevator pitch test</strong>: si no puedes explicar el Goal en 30 segundos a alguien fuera del equipo, necesita simplificarse.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos Sprint Goals debería tener por sprint?",
        "a": "Uno solo. Un objetivo claro y unificador. Si sientes que necesitas múltiples, probablemente estás confundiendo Goals con tareas. El Goal es el outcome, las tareas son el cómo."
      },
      {
        "q": "¿Qué hago si no alcanzamos el Sprint Goal?",
        "a": "Es válido no lograrlo si surgieron impedimentos. En Retro analiza: ¿fue muy ambicioso? ¿hubo bloqueos externos? ¿subestimamos complejidad? Aprende y ajusta planning futura."
      },
      {
        "q": "¿El Sprint Goal puede cambiar durante el sprint?",
        "a": "Idealmente no. Si cambia, debe ser por razones críticas (pivote de negocio, bug bloqueante). Consulta con PO y equipo, y documenta por qué cambió para aprender."
      },
      {
        "q": "¿Cómo involucro a stakeholders en la definición del Goal?",
        "a": "El PO representa stakeholders en Planning. Pero puedes hacer pre-planning con ellos para entender prioridades. O invita uno al Planning (observer, no decision maker)."
      }
    ]
  },
  "en": {
    "pageTitle": "Sprint Goal Generator | Genfy",
    "metaDesc": "Generate SMART goals for agile development sprints. Perfect for Scrum Masters, Product Owners and teams seeking clear, measurable objectives.",
    "h1": "Sprint Goal Generator",
    "intro": "Create SMART objectives for agile development sprints. Clear, measurable goals aligned with product vision.",
    "tag": "Work",
    "filterLabel": "Sprint area",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "features",
        "label": "Features",
        "items": [
          "Implement OAuth authentication with Google and GitHub",
          "Complete checkout flow with Stripe integration",
          "Launch analytics dashboard with real-time metrics",
          "Create cross-platform push notification system",
          "Develop WYSIWYG editor for content creation",
          "Integrate full-text search with Elasticsearch",
          "Build GraphQL API for mobile app consumption",
          "Implement granular role-based permissions",
          "Enable offline mode with automatic sync",
          "Launch real-time collaboration feature (websockets)",
          "Complete REST to GraphQL migration for critical endpoints",
          "Implement infinite scroll with virtualization for large lists",
          "Create interactive 5-step onboarding wizard",
          "Develop customizable template system",
          "Integrate calendar view with drag-and-drop events",
          "Build export tool for PDF/Excel/CSV",
          "Implement advanced filters with saved searches",
          "Launch comment module with threading and mentions",
          "Enable autosave with version control",
          "Complete Slack integration for notifications",
          "Develop preview of changes before publishing",
          "Create nested tags and categories system",
          "Implement bulk actions for mass operations",
          "Launch dark theme mode with preference persistence",
          "Build data import wizard from CSV"
        ]
      },
      {
        "id": "performance",
        "label": "Performance and optimization",
        "items": [
          "Reduce initial load time from 3s to <1s",
          "Optimize N+1 queries in listing endpoints",
          "Implement lazy loading of images with placeholders",
          "Migrate static assets to CDN with cache headers",
          "Reduce JavaScript bundle size by 40%",
          "Optimize list rendering with virtualization",
          "Implement service worker for asset caching",
          "Reduce TTFB to <200ms in 95% of requests",
          "Optimize database indexes for frequent queries",
          "Implement infinite scroll without full pagination",
          "Reduce frontend memory usage by 30%",
          "Optimize images with next-gen formats (WebP, AVIF)",
          "Implement code splitting for main routes",
          "Cache API responses with Redis for 5min",
          "Reduce backend CPU usage by 25%",
          "Optimize hot paths with production profiling",
          "Implement critical resource preloading",
          "Reduce database connection pooling to optimal limits",
          "Optimize React re-renders with React.memo",
          "Implement prefetching for predictable navigation",
          "Reduce API response payload by removing unused fields",
          "Optimize server-side rendering with ISR in Next.js",
          "Implement batching of repeated requests",
          "Reduce websocket latency with edge servers",
          "Optimize Lambda function startup time with SnapStart"
        ]
      },
      {
        "id": "infrastructure",
        "label": "Infrastructure and DevOps",
        "items": [
          "Migrate deployment to Kubernetes with zero-downtime",
          "Implement CI/CD pipeline with automated tests",
          "Configure monitoring with Prometheus + Grafana",
          "Implement automated blue-green deployments",
          "Migrate database to read replicas for scaling",
          "Configure automatic alerts for critical errors",
          "Implement infrastructure as code with Terraform",
          "Migrate secrets to HashiCorp Vault",
          "Configure horizontal auto-scaling in production",
          "Implement disaster recovery with automatic backups",
          "Migrate logs to ELK stack with retention policies",
          "Configure global rate limiting with API Gateway",
          "Implement canary deployments for gradual releases",
          "Migrate to serverless architecture with Lambda",
          "Configure WAF for protection against common attacks",
          "Implement distributed tracing with OpenTelemetry",
          "Migrate Docker images to Alpine to reduce size",
          "Configure health checks and liveness probes",
          "Implement circuit breakers for external services",
          "Migrate to multi-region for high availability",
          "Configure cost alerts for AWS spending",
          "Implement feature flags with LaunchDarkly",
          "Migrate CI to GitHub Actions with optimized caching",
          "Configure CDN with edge computing on Cloudflare",
          "Implement chaos engineering tests with Gremlin"
        ]
      },
      {
        "id": "quality",
        "label": "Quality and testing",
        "items": [
          "Reach 80% coverage in unit tests",
          "Implement E2E tests with Playwright for critical flows",
          "Create integration test suite for API",
          "Implement visual regression testing with Chromatic",
          "Configure pre-commit hooks with linting and formatting",
          "Reach 0 TypeScript errors in codebase",
          "Implement property-based testing for complex logic",
          "Create smoke tests for deployment verification",
          "Implement mutation testing to validate test quality",
          "Configure static analysis with SonarQube",
          "Reach Lighthouse score >90 on all pages",
          "Implement contract testing for microservices",
          "Create comprehensive test plan for sprint",
          "Implement automated accessibility testing",
          "Configure security scanning in CI pipeline",
          "Reach 0 console errors in production",
          "Implement load testing with k6 for endpoints",
          "Create golden tests for critical rendering",
          "Implement snapshot testing for UI components",
          "Configure dependency vulnerability scanning",
          "Reach 100% API documentation",
          "Implement chaos testing in staging",
          "Create performance budgets enforced in CI",
          "Implement fuzz testing for user inputs",
          "Configure continuous profiling in production"
        ]
      },
      {
        "id": "ux",
        "label": "UX and design",
        "items": [
          "Redesign onboarding to improve activation rate by 25%",
          "Implement skeleton screens for perceived performance",
          "Create design system with reusable components",
          "Improve accessibility to meet WCAG 2.1 AA",
          "Redesign complex forms with inline validation",
          "Implement informative empty states throughout app",
          "Create micro-interactions for action feedback",
          "Improve error information with actionable messages",
          "Implement consistent loading states",
          "Redesign main navigation based on user research",
          "Create contextual tooltips for complex features",
          "Implement keyboard shortcuts for power users",
          "Improve responsive design on tablets",
          "Create confirmation states before destructive actions",
          "Implement progressive disclosure for complex settings",
          "Redesign tables with sorting, filtering and export",
          "Create step-by-step guided configuration wizard",
          "Implement undo/redo for critical actions",
          "Improve color contrast for readability",
          "Create smooth transition animations",
          "Implement inline contextual help system",
          "Redesign mobile navigation with bottom tabs",
          "Create celebratory success states",
          "Implement search with autocomplete and highlights",
          "Improve touch targets for mobile (min 44px)"
        ]
      },
      {
        "id": "technical",
        "label": "Technical debt",
        "items": [
          "Refactor legacy components to TypeScript",
          "Remove deprecated dependencies and update to latest",
          "Migrate class components to functional with hooks",
          "Refactor god objects into smaller classes",
          "Remove dead code detected by coverage",
          "Migrate callbacks to async/await in codebase",
          "Refactor global CSS to CSS modules",
          "Remove console.logs and debuggers from production",
          "Migrate var declarations to const/let",
          "Refactor prop drilling to Context API",
          "Remove business logic duplication",
          "Migrate moment.js to date-fns to reduce bundle",
          "Refactor long switches to strategy pattern",
          "Remove magic numbers with named constants",
          "Migrate Redux to Zustand to reduce boilerplate",
          "Refactor components >500 lines",
          "Remove obsolete comments and old TODOs",
          "Migrate CSS-in-JS to Tailwind CSS",
          "Refactor nested callbacks (callback hell)",
          "Remove already consolidated feature flags",
          "Migrate SQL queries to ORM queries",
          "Refactor inconsistent error handling",
          "Remove now unnecessary polyfills",
          "Migrate direct API calls to React Query",
          "Refactor inconsistent naming in codebase"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Characteristics of a good Sprint Goal",
        "body": "<p>An effective Sprint Goal must be <strong>SMART</strong>: Specific (what will be built), Measurable (clear acceptance criteria), Achievable (realistic for the sprint), Relevant (delivers value to user/business), and Time-bound (completed within the sprint).</p><p>It should be <strong>value-oriented</strong>, not task-focused. Instead of 'Write 20 unit tests', better 'Ensure checkout works bug-free in production'. The goal should resonate with non-technical stakeholders.</p><p>A good Sprint Goal is <strong>unifying</strong>: the entire team works toward the same north. Avoid multiple disconnected objectives ('Do A, B, C and D'). If there are multiple features, find the common thread: 'Improve end-to-end purchase experience'.</p>"
      },
      {
        "h2": "Common mistakes when defining sprint objectives",
        "body": "<p>The most frequent mistake is confusing the Sprint Goal with the <strong>Sprint Backlog</strong>. The Goal is the 'why' (desired outcome), the Backlog is the 'how' (specific tasks). Example: Goal = 'Users can pay with multiple methods', Backlog = 'Integrate Stripe, create payment method selector UI, E2E tests'.</p><p>Another error: goals that are <strong>too vague</strong> ('Improve the app'). Lacks clarity for team and stakeholders. Goals that are <strong>too technical</strong> don't work either ('Refactor Redux store'). PO and users don't understand the value.</p><p>Avoid <strong>non-measurable</strong> goals: 'How do we know if we achieved it?' must have a clear answer. And never define the goal mid-sprint: it must be clear in Sprint Planning. The team needs that focus from day one.</p>"
      },
      {
        "h2": "How to align Sprint Goals with OKRs and roadmap",
        "body": "<p>Sprint Goals should <strong>cascade from quarterly OKRs</strong>. If your OKR is 'Increase retention to 60%', your sprints should have goals like 'Implement notifications that bring users back' or 'Launch feature that improves daily engagement'.</p><p>Use the <strong>product roadmap</strong> to prioritize: sprints execute roadmap milestones. If Q1 has objective 'Monetization', your Sprint Goals should include payments, subscriptions, billing. If it's 'Growth', focus on onboarding, invites, virality.</p><p>Maintain <strong>transparency</strong>: share Sprint Goals in Slack/Confluence at the start of each sprint. Stakeholders know what to expect at the end. And review in Sprint Review: did we achieve the Goal? If not, why? That retrospective improves next sprint's planning.</p>"
      },
      {
        "h2": "Techniques for generating effective Sprint Goals",
        "body": "<p>In <strong>Sprint Planning</strong>, start with the question: 'What value do we want to deliver to users this iteration?' Not with 'What tickets do we have pending'. Then the team proposes user stories that contribute to that value.</p><p>Use the <strong>MoSCoW</strong> technique: Must have (without this the Goal fails), Should have (important but not critical), Could have (nice-to-have), Won't have (out of scope). This clarifies the sprint's MVP.</p><p>Another technique: <strong>Goal Storming</strong>. The team generates 5-10 possible Sprint Goals on post-its, votes for the most valuable, and converges on one. Promotes shared ownership. And always do the <strong>elevator pitch test</strong>: if you can't explain the Goal in 30 seconds to someone outside the team, it needs simplification.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many Sprint Goals should I have per sprint?",
        "a": "Just one. A clear and unifying objective. If you feel you need multiple, you're probably confusing Goals with tasks. The Goal is the outcome, tasks are the how."
      },
      {
        "q": "What do I do if we don't achieve the Sprint Goal?",
        "a": "It's valid not to achieve it if impediments arose. In Retro analyze: was it too ambitious? were there external blockers? did we underestimate complexity? Learn and adjust future planning."
      },
      {
        "q": "Can the Sprint Goal change during the sprint?",
        "a": "Ideally not. If it changes, it should be for critical reasons (business pivot, blocking bug). Consult with PO and team, and document why it changed to learn."
      },
      {
        "q": "How do I involve stakeholders in Goal definition?",
        "a": "The PO represents stakeholders in Planning. But you can do pre-planning with them to understand priorities. Or invite one to Planning (observer, not decision maker)."
      }
    ]
  }
};
