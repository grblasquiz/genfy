import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-eventos-analytics",
    "en": "analytics-event-generator"
  },
  "category": "data",
  "emoji": "📈",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Eventos Analytics | Genfy",
    "metaDesc": "Generá nombres consistentes de eventos para Google Analytics, Mixpanel, Amplitude o Segment. Convenciones objeto-acción listas para implementar en tu tracking plan.",
    "h1": "Generador de Eventos Analytics",
    "intro": "Creá nombres de eventos estructurados y consistentes para tu sistema de analytics. Seguí convenciones objeto-acción que facilitan análisis y no requieren refactors futuros.",
    "tag": "Datos",
    "filterLabel": "Categoría",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "category",
        "label": "Categoría",
        "items": [
          "Autenticación - Signup, login, logout",
          "Onboarding - Pasos del tutorial inicial",
          "Navegación - Cambios de página o sección",
          "Ecommerce - Productos, carrito, checkout",
          "Contenido - Artículos, videos, recursos",
          "Social - Compartir, comentar, seguir",
          "Forms - Envíos, validación, errores",
          "Search - Búsquedas, filtros, resultados",
          "Engagement - Interacciones, clics importantes",
          "Conversion - Metas completadas",
          "Payments - Transacciones financieras",
          "Notifications - Push, email, in-app",
          "Settings - Cambios de configuración",
          "Profile - Edición de datos personales",
          "Upload - Carga de archivos/imágenes",
          "Download - Descarga de recursos",
          "Error - Fallos técnicos o de usuario",
          "Feedback - Ratings, reviews, NPS",
          "Subscription - Planes, upgrades, cancelaciones",
          "Referral - Invitaciones y programa referidos",
          "A/B Test - Exposición a variantes",
          "Feature Flag - Acceso a funcionalidades",
          "Support - Tickets, chat, ayuda",
          "API - Llamadas desde integraciones",
          "Admin - Acciones de administrador",
          "Export - Descarga de datos masivos",
          "Integration - Conexión con third-party",
          "Gamification - Badges, logros, puntos",
          "Booking - Reservas, citas, eventos",
          "Calendar - Creación/edición de calendario",
          "Video - Play, pause, watch percentage",
          "Audio - Podcast, música, controles",
          "Messaging - Chat directo, canales",
          "Email Campaign - Opens, clicks, conversions",
          "Landing Page - CTAs, formularios",
          "Mobile App - Eventos específicos de app",
          "Tablet - Interacciones en tablet",
          "Desktop - Eventos de versión web",
          "Offline - Acciones en modo sin conexión",
          "Sync - Sincronización de datos",
          "Performance - Tiempos de carga, errores",
          "Security - Login fallido, 2FA, sesiones",
          "Privacy - Consent, GDPR, preferencias",
          "Accessibility - Uso de features a11y",
          "Scroll - Profundidad de scroll en página",
          "Click - Clics en elementos específicos",
          "Hover - Interacciones hover significativas",
          "Modal - Abrir/cerrar modales",
          "Tooltip - Visualización de ayudas",
          "Menu - Interacción con navegación"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Convención objeto-acción para eventos",
        "body": "<p>La convención más escalable para nombres de eventos es <strong>Objeto + Acción</strong> en formato snake_case o camelCase. Por ejemplo: <code>product_viewed</code>, <code>cart_item_added</code>, <code>checkout_completed</code>. El objeto es la entidad sobre la que actúa el usuario (producto, carrito, perfil), la acción es el verbo en pasado (viewed, clicked, submitted).</p><p>¿Por qué pasado? Porque el evento ya ocurrió cuando lo trackeás. 'Checkout completed' es mejor que 'Complete checkout', que suena a CTA. La consistencia en tiempo verbal elimina confusión: si mezclás 'signup_started' con 'complete_purchase', tu equipo no sabe qué convención seguir.</p><p>Evitá nombres genéricos como 'button_clicked' o 'page_loaded'. Especificá: 'cta_signup_clicked', 'pricing_page_loaded'. Cada evento debe responder '¿qué objeto?' y '¿qué acción?'. Si necesitás contexto adicional, usá propiedades: el evento es 'product_viewed', la propiedad 'product_category' te dice si es ropa o electrónica.</p>"
      },
      {
        "h2": "Estructura de un tracking plan",
        "body": "<p>Un tracking plan documenta cada evento: nombre, descripción, cuándo dispara, qué propiedades incluye, tipos de datos. Sin esto, tu analytics se vuelve caos: eventos duplicados ('user_signup' vs 'signup_completed'), propiedades inconsistentes ('user_id' como string en un evento, número en otro), o eventos que nadie recuerda qué significan 6 meses después.</p><p>Para cada evento definí: <strong>trigger</strong> (cuándo se dispara exactamente), <strong>propiedades requeridas</strong> (user_id, timestamp), <strong>propiedades opcionales</strong> (utm_source, device_type), <strong>valores esperados</strong> (si 'plan_type' existe, debe ser 'free'|'pro'|'enterprise'). Esto es tu contrato entre producto, dev y data.</p><p>Herramientas como Avo, Segment Protocols o un simple Google Sheet sirven. Lo importante es que esté versionado y actualizado. Cada vez que agregues un evento nuevo, actualizá el tracking plan ANTES de implementar. Si implementás primero y documentás después, nunca documentás.</p>"
      },
      {
        "h2": "Propiedades vs eventos separados",
        "body": "<p>Decidir entre crear eventos separados o usar propiedades es crítico. Regla general: si la acción es fundamentalmente distinta, evento separado; si es la misma acción con contexto diferente, propiedad. Ejemplo: 'video_played' con propiedad 'video_type: tutorial|webinar' es mejor que 'tutorial_played' + 'webinar_played'.</p><p>Eventos separados son útiles cuando necesitás trackear el funnel exacto. En ecommerce: 'product_viewed' → 'cart_item_added' → 'checkout_started' → 'payment_info_entered' → 'order_completed'. Cada uno es un paso distinto en el funnel, no una variación del anterior. Usá propiedades para segmentar análisis dentro del mismo paso.</p><p>El costo de demasiados eventos: tu lista se vuelve inmanejable. El costo de muy pocos: tenés que hacer queries complejas filtrando por 50 combinaciones de propiedades. El balance: ~50-200 eventos core para un producto mediano. Si llegás a 500, probablemente estés creando eventos que deberían ser propiedades.</p>"
      },
      {
        "h2": "Errores comunes en naming de eventos",
        "body": "<p>Error #1: nombres desde la perspectiva del sistema, no del usuario. 'api_call_successful' no dice nada sobre qué hizo el usuario; 'search_results_loaded' es mejor. Pensá en el comportamiento observable, no en la implementación técnica. El evento es 'form_submitted', no 'post_request_sent'.</p><p>Error #2: inconsistencia en formato. Si usás snake_case, usalo siempre. No mezcles 'user_signup', 'product-viewed' y 'checkoutStarted' en el mismo proyecto. Elegí una convención (snake_case es el estándar en analytics) y forzá su uso con linters o validaciones en CI.</p><p>Error #3: eventos demasiado granulares. No necesitás 'filter_price_min_changed' y 'filter_price_max_changed'. Usá 'filters_applied' con propiedades 'filter_type: price_min' y 'value: 50'. Consolidá eventos que siempre vas a analizar juntos.</p><p>Error #4: no versionar cambios. Si cambiás el schema de un evento (agregás propiedad obligatoria, cambiás tipo de dato), eso rompe análisis históricos. O versioná el evento ('checkout_completed_v2'), o usá propiedades opcionales que sean backward-compatible.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre Google Analytics y Mixpanel?",
        "a": "GA se enfoca en tráfico web y reportes predefinidos; Mixpanel/Amplitude son product analytics, centrados en user behavior y análisis de cohortes. Ambos usan eventos, pero Mixpanel te da más control sobre análisis custom."
      },
      {
        "q": "¿Debo trackear todo o solo eventos clave?",
        "a": "Empezá con eventos clave (conversiones, pasos críticos del funnel). Agregar eventos es fácil; limpiar datos sucios después es casi imposible. Agregá eventos cuando tengás preguntas específicas, no 'por las dudas'."
      },
      {
        "q": "¿Cómo testeo que los eventos se disparen correctamente?",
        "a": "Usá extensiones de browser (Google Analytics Debugger, Segment Inspector) o consola del analytics. Verificá que evento + propiedades lleguen correctos ANTES de deployar a producción."
      },
      {
        "q": "¿Qué hago con eventos legacy mal nombrados?",
        "a": "Si tienen tráfico histórico importante, dejálos y creá versiones nuevas con naming correcto. Documentá la migración en tu tracking plan. Si son eventos muertos, deprecálos y eliminá el código."
      }
    ]
  },
  "en": {
    "pageTitle": "Analytics Event Generator | Genfy",
    "metaDesc": "Generate consistent event names for Google Analytics, Mixpanel, Amplitude, or Segment. Object-action conventions ready to implement in your tracking plan.",
    "h1": "Analytics Event Generator",
    "intro": "Create structured and consistent event names for your analytics system. Follow object-action conventions that facilitate analysis and don't require future refactors.",
    "tag": "Data",
    "filterLabel": "Category",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "category",
        "label": "Category",
        "items": [
          "Authentication - Signup, login, logout",
          "Onboarding - Initial tutorial steps",
          "Navigation - Page or section changes",
          "Ecommerce - Products, cart, checkout",
          "Content - Articles, videos, resources",
          "Social - Share, comment, follow",
          "Forms - Submissions, validation, errors",
          "Search - Searches, filters, results",
          "Engagement - Interactions, important clicks",
          "Conversion - Completed goals",
          "Payments - Financial transactions",
          "Notifications - Push, email, in-app",
          "Settings - Configuration changes",
          "Profile - Personal data editing",
          "Upload - File/image uploads",
          "Download - Resource downloads",
          "Error - Technical or user failures",
          "Feedback - Ratings, reviews, NPS",
          "Subscription - Plans, upgrades, cancellations",
          "Referral - Invitations and referral program",
          "A/B Test - Variant exposure",
          "Feature Flag - Feature access",
          "Support - Tickets, chat, help",
          "API - Calls from integrations",
          "Admin - Administrator actions",
          "Export - Bulk data download",
          "Integration - Third-party connection",
          "Gamification - Badges, achievements, points",
          "Booking - Reservations, appointments, events",
          "Calendar - Calendar creation/editing",
          "Video - Play, pause, watch percentage",
          "Audio - Podcast, music, controls",
          "Messaging - Direct chat, channels",
          "Email Campaign - Opens, clicks, conversions",
          "Landing Page - CTAs, forms",
          "Mobile App - App-specific events",
          "Tablet - Tablet interactions",
          "Desktop - Web version events",
          "Offline - Actions in offline mode",
          "Sync - Data synchronization",
          "Performance - Load times, errors",
          "Security - Failed login, 2FA, sessions",
          "Privacy - Consent, GDPR, preferences",
          "Accessibility - a11y feature usage",
          "Scroll - Page scroll depth",
          "Click - Clicks on specific elements",
          "Hover - Significant hover interactions",
          "Modal - Open/close modals",
          "Tooltip - Help visualization",
          "Menu - Navigation interaction"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Object-action convention for events",
        "body": "<p>The most scalable convention for event names is <strong>Object + Action</strong> in snake_case or camelCase format. For example: <code>product_viewed</code>, <code>cart_item_added</code>, <code>checkout_completed</code>. The object is the entity the user acts upon (product, cart, profile), the action is the past tense verb (viewed, clicked, submitted).</p><p>Why past tense? Because the event already happened when you track it. 'Checkout completed' is better than 'Complete checkout', which sounds like a CTA. Consistency in verb tense eliminates confusion: if you mix 'signup_started' with 'complete_purchase', your team doesn't know which convention to follow.</p><p>Avoid generic names like 'button_clicked' or 'page_loaded'. Be specific: 'cta_signup_clicked', 'pricing_page_loaded'. Each event should answer 'what object?' and 'what action?'. If you need additional context, use properties: the event is 'product_viewed', the property 'product_category' tells you if it's clothing or electronics.</p>"
      },
      {
        "h2": "Structure of a tracking plan",
        "body": "<p>A tracking plan documents each event: name, description, when it fires, what properties it includes, data types. Without this, your analytics becomes chaos: duplicate events ('user_signup' vs 'signup_completed'), inconsistent properties ('user_id' as string in one event, number in another), or events nobody remembers the meaning of 6 months later.</p><p>For each event define: <strong>trigger</strong> (exactly when it fires), <strong>required properties</strong> (user_id, timestamp), <strong>optional properties</strong> (utm_source, device_type), <strong>expected values</strong> (if 'plan_type' exists, must be 'free'|'pro'|'enterprise'). This is your contract between product, dev, and data.</p><p>Tools like Avo, Segment Protocols, or a simple Google Sheet work. What matters is that it's versioned and updated. Every time you add a new event, update the tracking plan BEFORE implementing. If you implement first and document later, you never document.</p>"
      },
      {
        "h2": "Properties vs separate events",
        "body": "<p>Deciding between creating separate events or using properties is critical. General rule: if the action is fundamentally different, separate event; if it's the same action with different context, property. Example: 'video_played' with property 'video_type: tutorial|webinar' is better than 'tutorial_played' + 'webinar_played'.</p><p>Separate events are useful when you need to track the exact funnel. In ecommerce: 'product_viewed' → 'cart_item_added' → 'checkout_started' → 'payment_info_entered' → 'order_completed'. Each is a distinct step in the funnel, not a variation of the previous one. Use properties to segment analysis within the same step.</p><p>The cost of too many events: your list becomes unmanageable. The cost of too few: you have to do complex queries filtering by 50 property combinations. The balance: ~50-200 core events for a medium product. If you reach 500, you're probably creating events that should be properties.</p>"
      },
      {
        "h2": "Common mistakes in event naming",
        "body": "<p>Mistake #1: names from system perspective, not user perspective. 'api_call_successful' says nothing about what the user did; 'search_results_loaded' is better. Think about observable behavior, not technical implementation. The event is 'form_submitted', not 'post_request_sent'.</p><p>Mistake #2: format inconsistency. If you use snake_case, use it always. Don't mix 'user_signup', 'product-viewed', and 'checkoutStarted' in the same project. Choose a convention (snake_case is standard in analytics) and enforce it with linters or CI validations.</p><p>Mistake #3: overly granular events. You don't need 'filter_price_min_changed' and 'filter_price_max_changed'. Use 'filters_applied' with properties 'filter_type: price_min' and 'value: 50'. Consolidate events you'll always analyze together.</p><p>Mistake #4: not versioning changes. If you change an event schema (add required property, change data type), that breaks historical analysis. Either version the event ('checkout_completed_v2'), or use optional properties that are backward-compatible.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between Google Analytics and Mixpanel?",
        "a": "GA focuses on web traffic and predefined reports; Mixpanel/Amplitude are product analytics, centered on user behavior and cohort analysis. Both use events, but Mixpanel gives you more control over custom analysis."
      },
      {
        "q": "Should I track everything or just key events?",
        "a": "Start with key events (conversions, critical funnel steps). Adding events is easy; cleaning dirty data later is nearly impossible. Add events when you have specific questions, not 'just in case'."
      },
      {
        "q": "How do I test that events fire correctly?",
        "a": "Use browser extensions (Google Analytics Debugger, Segment Inspector) or analytics console. Verify that event + properties arrive correctly BEFORE deploying to production."
      },
      {
        "q": "What do I do with poorly-named legacy events?",
        "a": "If they have important historical traffic, leave them and create new versions with correct naming. Document the migration in your tracking plan. If they're dead events, deprecate and remove the code."
      }
    ]
  }
};
