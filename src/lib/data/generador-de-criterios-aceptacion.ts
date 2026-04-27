import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-criterios-aceptacion",
    "en": "acceptance-criteria-generator"
  },
  "category": "work",
  "emoji": "✅",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Criterios de Aceptación | Genfy",
    "metaDesc": "Creá criterios de aceptación en formato Given-When-Then para tus historias de usuario. Ejemplos concretos y listos para usar en Jira, Azure DevOps o cualquier tablero ágil.",
    "h1": "Generador de Criterios de Aceptación",
    "intro": "Generá criterios de aceptación claros en formato Given-When-Then para definir exactamente cuándo una historia está completa. Ideal para historias de usuario, casos de prueba y alineación con QA.",
    "tag": "Trabajo",
    "filterLabel": "Contexto",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "context",
        "label": "Contexto",
        "items": [
          "Autenticación de usuario",
          "Carrito de compras",
          "Sistema de pagos",
          "Dashboard de métricas",
          "Formulario de registro",
          "Búsqueda avanzada",
          "Notificaciones push",
          "Sistema de comentarios",
          "Carga de archivos",
          "Exportación de datos",
          "Gestión de permisos",
          "API REST pública",
          "Sistema de suscripciones",
          "Chat en tiempo real",
          "Onboarding de usuarios",
          "Panel de administración",
          "Sistema de valoraciones",
          "Calendario de eventos",
          "Gestión de inventario",
          "Reportes automáticos",
          "Sistema de tickets",
          "Landing page responsive",
          "Configuración de cuenta",
          "Integración con terceros",
          "Sistema de tags",
          "Historial de actividad",
          "Módulo de facturación",
          "Galería de imágenes",
          "Sistema de favoritos",
          "Modo oscuro",
          "Multi-idioma",
          "Wizard de configuración",
          "Buscador con filtros",
          "Sistema de recompensas",
          "Validación de formularios",
          "Paginación de resultados",
          "Sistema de roles",
          "Caché de datos",
          "Rate limiting",
          "Sincronización offline",
          "Sistema de backup",
          "Auditoría de cambios",
          "Whitelabel customizable",
          "A/B testing interno",
          "Analytics dashboard",
          "Sistema de webhooks"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Qué es el formato Given-When-Then",
        "body": "<p>El formato Given-When-Then es la estructura estándar para escribir criterios de aceptación en metodologías ágiles. <strong>Given</strong> describe el contexto inicial o precondición, <strong>When</strong> especifica la acción que ejecuta el usuario o el sistema, y <strong>Then</strong> define el resultado esperado observable.</p><p>Este formato elimina ambigüedades porque obliga a pensar en términos de comportamiento verificable. Por ejemplo: 'Given un usuario logueado con rol admin, When accede al panel de estadísticas, Then visualiza métricas de los últimos 30 días'. Cada criterio debe ser independiente, testeable y expresado desde la perspectiva del usuario final, no del código interno.</p><p>Errores comunes: mezclar múltiples acciones en un When, usar Then para describir implementación técnica ('el backend llama a la API X') en lugar de resultado observable, o escribir Given demasiado vagos ('el usuario está en la app'). Un buen criterio debe poder convertirse directamente en un caso de prueba automatizado.</p>"
      },
      {
        "h2": "Cómo estructurar criterios efectivos",
        "body": "<p>La calidad de un criterio depende de su <strong>especificidad medible</strong>. En lugar de 'Then el usuario ve un mensaje de éxito', escribí 'Then aparece un toast verde con el texto \"Cambios guardados\" durante 3 segundos en la esquina superior derecha'. Cuanto más concreto, menos espacio para interpretaciones divergentes entre desarrollo y QA.</p><p>Cada historia debería tener entre 3 y 7 criterios. Menos de 3 suele indicar que la historia es demasiado simple o está subdefinida; más de 7 sugiere que deberías splitear en historias más pequeñas. Incluí siempre al menos un criterio de caso límite (campo vacío, sin conexión, usuario sin permisos) y uno de camino feliz.</p><p>Usá datos reales en los ejemplos: en lugar de 'When ingresa un email inválido', especificá 'When ingresa \"usuario@dominio\" sin el .com'. Esto ayuda al equipo a visualizar exactamente qué validar. Evitá términos técnicos innecesarios: 'el modal se cierra' es mejor que 'el componente ModalWrapper ejecuta el método onClose()'.</p>"
      },
      {
        "h2": "Casos de uso en equipos ágiles",
        "body": "<p>Los criterios de aceptación son el contrato compartido entre Product Owner, desarrollo y QA. Durante el refinamiento, el PO escribe los criterios iniciales y el equipo los refina: desarrollo identifica edge cases técnicos, QA agrega escenarios de validación, UX clarifica comportamientos de interfaz.</p><p>En sprint planning, los criterios sirven para estimar: una historia con 4 criterios simples es probablemente más chica que una con 6 criterios que incluyen 'sincronización con API externa'. Durante el desarrollo, cada commit o PR debería referenciar qué criterio implementa. En code review, el checklist es literal: '¿se cumplen los 5 Then especificados?'.</p><p>Para QA, cada criterio es un caso de prueba mínimo. Si tenés 5 criterios, generás al menos 5 tests (idealmente más, agregando variaciones). En la demo de sprint, el PO verifica cada criterio en vivo antes de aceptar la historia. Los criterios bien escritos eliminan el clásico 'pero yo entendí otra cosa' en la review.</p>"
      },
      {
        "h2": "Errores frecuentes y cómo evitarlos",
        "body": "<p>El error #1 es escribir criterios desde la perspectiva del sistema en lugar del usuario. 'Given la base de datos tiene 50 registros' no es útil; mejor 'Given el usuario tiene 50 productos en su catálogo'. El criterio debe describir lo que el usuario percibe, no el estado interno del sistema.</p><p>Otro problema común: criterios no atómicos. 'When el usuario completa el formulario y hace click en Enviar' mezcla dos acciones. Separálas: un criterio para validación en tiempo real mientras completa, otro para el submit. Esto permite testear y desarrollar incrementalmente.</p><p>Evitá verbos ambiguos como 'gestionar', 'manejar', 'procesar'. '¿Qué significa exactamente que el usuario \"gestiona\" sus preferencias?' Especificá: 'When el usuario activa el toggle \"Notificaciones por email\", Then recibe un email de confirmación en menos de 5 minutos'. Medible, testeable, claro.</p><p>Finalmente, no uses criterios como lista de tareas técnicas ('integrar con Stripe API', 'crear tabla en DB'). Eso va en las subtasks. Los criterios describen comportamiento observable por el usuario final, punto.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos criterios debería tener una historia de usuario?",
        "a": "Entre 3 y 7 criterios es lo ideal. Menos de 3 indica que la historia está subdefinida o es demasiado simple; más de 7 sugiere que deberías dividirla en historias más pequeñas."
      },
      {
        "q": "¿Qué diferencia hay entre criterios de aceptación y definition of done?",
        "a": "Los criterios son específicos de cada historia (qué hace esta feature). La Definition of Done es transversal a todas las historias (code review hecho, tests pasando, documentación actualizada)."
      },
      {
        "q": "¿Puedo tener varios Then en un mismo criterio?",
        "a": "Técnicamente sí, pero preferible evitarlo. Si tenés múltiples Then, probablemente estés describiendo dos comportamientos separados que merecen criterios independientes."
      },
      {
        "q": "¿Quién escribe los criterios de aceptación?",
        "a": "El Product Owner los escribe inicialmente, pero todo el equipo (dev, QA, UX) los refina durante el refinement. Es un trabajo colaborativo, no un documento que baja del PO."
      }
    ]
  },
  "en": {
    "pageTitle": "Acceptance Criteria Generator | Genfy",
    "metaDesc": "Create acceptance criteria in Given-When-Then format for your user stories. Concrete examples ready to use in Jira, Azure DevOps, or any agile board.",
    "h1": "Acceptance Criteria Generator",
    "intro": "Generate clear acceptance criteria in Given-When-Then format to define exactly when a story is complete. Perfect for user stories, test cases, and alignment with QA.",
    "tag": "Work",
    "filterLabel": "Context",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "context",
        "label": "Context",
        "items": [
          "User authentication",
          "Shopping cart",
          "Payment system",
          "Metrics dashboard",
          "Registration form",
          "Advanced search",
          "Push notifications",
          "Comment system",
          "File upload",
          "Data export",
          "Permission management",
          "Public REST API",
          "Subscription system",
          "Real-time chat",
          "User onboarding",
          "Admin panel",
          "Rating system",
          "Event calendar",
          "Inventory management",
          "Automated reports",
          "Ticketing system",
          "Responsive landing page",
          "Account settings",
          "Third-party integration",
          "Tagging system",
          "Activity history",
          "Billing module",
          "Image gallery",
          "Favorites system",
          "Dark mode",
          "Multi-language",
          "Configuration wizard",
          "Search with filters",
          "Rewards system",
          "Form validation",
          "Results pagination",
          "Role system",
          "Data caching",
          "Rate limiting",
          "Offline sync",
          "Backup system",
          "Change audit",
          "Customizable whitelabel",
          "Internal A/B testing",
          "Analytics dashboard",
          "Webhook system"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "What is Given-When-Then format",
        "body": "<p>Given-When-Then is the standard structure for writing acceptance criteria in agile methodologies. <strong>Given</strong> describes the initial context or precondition, <strong>When</strong> specifies the action executed by the user or system, and <strong>Then</strong> defines the expected observable outcome.</p><p>This format eliminates ambiguity by forcing you to think in terms of verifiable behavior. For example: 'Given a logged-in user with admin role, When they access the statistics panel, Then they see metrics from the last 30 days'. Each criterion must be independent, testable, and expressed from the end user's perspective, not the internal code.</p><p>Common mistakes: mixing multiple actions in one When, using Then to describe technical implementation ('backend calls API X') instead of observable outcome, or writing overly vague Givens ('user is in the app'). A good criterion should convert directly into an automated test case.</p>"
      },
      {
        "h2": "How to structure effective criteria",
        "body": "<p>The quality of a criterion depends on its <strong>measurable specificity</strong>. Instead of 'Then user sees success message', write 'Then a green toast appears with text \"Changes saved\" for 3 seconds in the top-right corner'. The more concrete, the less room for divergent interpretations between dev and QA.</p><p>Each story should have between 3 and 7 criteria. Fewer than 3 usually indicates the story is too simple or underdefined; more than 7 suggests you should split it into smaller stories. Always include at least one edge case criterion (empty field, no connection, user without permissions) and one happy path.</p><p>Use real data in examples: instead of 'When entering invalid email', specify 'When entering \"user@domain\" without the .com'. This helps the team visualize exactly what to validate. Avoid unnecessary technical jargon: 'modal closes' is better than 'ModalWrapper component executes onClose() method'.</p>"
      },
      {
        "h2": "Use cases in agile teams",
        "body": "<p>Acceptance criteria are the shared contract between Product Owner, development, and QA. During refinement, the PO writes initial criteria and the team refines them: dev identifies technical edge cases, QA adds validation scenarios, UX clarifies interface behaviors.</p><p>In sprint planning, criteria help with estimation: a story with 4 simple criteria is probably smaller than one with 6 criteria including 'sync with external API'. During development, each commit or PR should reference which criterion it implements. In code review, the checklist is literal: 'are all 5 Then statements fulfilled?'.</p><p>For QA, each criterion is a minimum test case. If you have 5 criteria, you generate at least 5 tests (ideally more, adding variations). In the sprint demo, the PO verifies each criterion live before accepting the story. Well-written criteria eliminate the classic 'but I understood something different' in review.</p>"
      },
      {
        "h2": "Common mistakes and how to avoid them",
        "body": "<p>Mistake #1 is writing criteria from the system's perspective instead of the user's. 'Given database has 50 records' isn't useful; better 'Given user has 50 products in their catalog'. Criteria should describe what the user perceives, not the system's internal state.</p><p>Another common issue: non-atomic criteria. 'When user completes form and clicks Submit' mixes two actions. Separate them: one criterion for real-time validation while completing, another for submit. This allows incremental testing and development.</p><p>Avoid ambiguous verbs like 'manage', 'handle', 'process'. 'What exactly does it mean for user to \"manage\" their preferences?' Be specific: 'When user activates \"Email notifications\" toggle, Then they receive confirmation email within 5 minutes'. Measurable, testable, clear.</p><p>Finally, don't use criteria as a technical task list ('integrate Stripe API', 'create DB table'). That goes in subtasks. Criteria describe user-observable behavior, period.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many criteria should a user story have?",
        "a": "Between 3 and 7 criteria is ideal. Fewer than 3 indicates the story is underdefined or too simple; more than 7 suggests you should split it into smaller stories."
      },
      {
        "q": "What's the difference between acceptance criteria and definition of done?",
        "a": "Criteria are specific to each story (what this feature does). Definition of Done is cross-cutting for all stories (code reviewed, tests passing, documentation updated)."
      },
      {
        "q": "Can I have multiple Thens in one criterion?",
        "a": "Technically yes, but best avoided. If you have multiple Thens, you're probably describing two separate behaviors that deserve independent criteria."
      },
      {
        "q": "Who writes acceptance criteria?",
        "a": "The Product Owner writes them initially, but the entire team (dev, QA, UX) refines them during refinement. It's collaborative work, not a document handed down by the PO."
      }
    ]
  }
};
