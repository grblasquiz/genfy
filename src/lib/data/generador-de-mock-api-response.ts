import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-mock-api-response",
    "en": "api-mock-response-generator"
  },
  "category": "data",
  "emoji": "📡",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Respuestas Mock para APIs | Genfy",
    "metaDesc": "Genera respuestas mock JSON realistas para endpoints REST. Acelera desarrollo frontend sin esperar backend ni pagar servicios de datos sintéticos.",
    "h1": "Generador de Respuestas Mock para APIs",
    "intro": "Creá respuestas de API realistas al instante para desarrollar y testear tu frontend sin depender del backend.",
    "tag": "Datos",
    "filterLabel": "Tipo de endpoint",
    "countLabel": "Objetos",
    "generateLabel": "Generar mock",
    "copyLabel": "Copiar JSON",
    "groups": [
      {
        "id": "endpoint",
        "label": "Endpoint común",
        "items": [
          "GET /users - Lista de usuarios",
          "GET /users/:id - Usuario individual",
          "POST /users - Crear usuario",
          "PUT /users/:id - Actualizar usuario",
          "DELETE /users/:id - Eliminar usuario",
          "GET /products - Catálogo de productos",
          "GET /products/:id - Detalle de producto",
          "POST /orders - Crear orden",
          "GET /orders - Historial de órdenes",
          "GET /orders/:id - Detalle de orden",
          "POST /auth/login - Iniciar sesión",
          "POST /auth/register - Registrar usuario",
          "POST /auth/refresh - Refrescar token",
          "GET /posts - Lista de posts/artículos",
          "GET /posts/:id - Post individual",
          "POST /comments - Crear comentario",
          "GET /comments?postId=X - Comentarios de un post",
          "GET /notifications - Notificaciones del usuario",
          "PATCH /notifications/:id/read - Marcar como leída",
          "GET /search?q=term - Búsqueda global",
          "GET /categories - Categorías/taxonomías",
          "GET /stats/dashboard - Estadísticas del dashboard",
          "POST /upload - Subir archivo",
          "GET /messages - Mensajes/chat",
          "POST /messages - Enviar mensaje",
          "GET /analytics/events - Eventos de analytics",
          "GET /settings - Configuración del usuario",
          "PATCH /settings - Actualizar configuración",
          "GET /invoices - Facturas",
          "GET /subscriptions - Suscripciones activas",
          "POST /payments - Procesar pago",
          "GET /reviews - Reseñas de productos",
          "POST /reviews - Crear reseña",
          "GET /followers - Lista de seguidores",
          "POST /follow - Seguir usuario",
          "GET /feed - Feed de actividad",
          "GET /recommendations - Recomendaciones personalizadas",
          "GET /cart - Carrito de compras",
          "POST /cart/items - Agregar al carrito",
          "DELETE /cart/items/:id - Quitar del carrito",
          "GET /wishlist - Lista de deseados",
          "GET /profile - Perfil de usuario",
          "GET /activity - Actividad reciente",
          "GET /tags - Tags/etiquetas",
          "GET /bookmarks - Marcadores guardados",
          "GET /reports - Reportes generados",
          "POST /webhooks - Registrar webhook",
          "GET /logs - Logs de actividad",
          "GET /permissions - Permisos del usuario",
          "GET /teams - Equipos/organizaciones"
        ]
      },
      {
        "id": "httpStatus",
        "label": "Estado HTTP",
        "items": [
          "200 OK - Éxito",
          "201 Created - Recurso creado",
          "204 No Content - Sin contenido",
          "400 Bad Request - Solicitud inválida",
          "401 Unauthorized - No autenticado",
          "403 Forbidden - Sin permisos",
          "404 Not Found - No encontrado",
          "409 Conflict - Conflicto de datos",
          "422 Unprocessable Entity - Validación fallida",
          "429 Too Many Requests - Rate limit",
          "500 Internal Server Error - Error del servidor",
          "503 Service Unavailable - Servicio no disponible"
        ]
      },
      {
        "id": "structure",
        "label": "Estructura de respuesta",
        "items": [
          "Objeto simple",
          "Array de objetos",
          "Paginado (data + meta)",
          "Con errores de validación",
          "Con metadata expandida",
          "Nested/anidado profundo",
          "Con relaciones (includes)",
          "Con timestamps ISO 8601",
          "Con URLs de recursos",
          "Con campos opcionales null",
          "Con enums/estados",
          "Con contadores y totales"
        ]
      },
      {
        "id": "dataComplexity",
        "label": "Complejidad de datos",
        "items": [
          "Mínima (3-5 campos)",
          "Estándar (8-12 campos)",
          "Completa (15-25 campos)",
          "Enterprise (30+ campos)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué usar mocks en desarrollo frontend",
        "body": "<p>El desarrollo frontend bloqueado esperando backend es el anti-patrón más común en equipos ágiles. Tu sprint de 2 semanas pierde 5 días porque la API /users todavía no está lista. Los mocks desbloquean trabajo paralelo: frontend arma la UI contra datos falsos, backend implementa la lógica real, se integran al final.</p><p>Herramientas como <strong>MSW (Mock Service Worker)</strong> interceptan requests HTTP en desarrollo, devolviendo mocks sin tocar código productivo. JSON Server levanta una REST API completa desde un archivo db.json en 2 minutos. Faker.js genera datos aleatorios realistas (nombres, emails, direcciones) en lugar de 'Usuario 1', 'Usuario 2'.</p><p>Error crítico: mocks demasiado simplistas. Si tu mock de /users devuelve solo {id, name}, y el backend real incluye {role, permissions, lastLogin, avatar, settings}, tu frontend explota en producción. Los mocks deben replicar la estructura real o sos un kamikaze.</p>"
      },
      {
        "h2": "Estructura de respuestas REST estándar",
        "body": "<p>Las APIs bien diseñadas siguen patrones reconocibles. <strong>Lista paginada:</strong> devuelve {data: [], meta: {total, page, perPage, totalPages}}. Sin meta, el frontend no puede construir paginación correcta. <strong>Objeto individual:</strong> {data: {id, ...attrs}} o directamente el objeto; ambos son válidos, pero elegí uno y mantené consistencia.</p><p>Para errores, HTTP 400/422 debe incluir {errors: [{field: 'email', message: 'ya existe'}]}. Un error genérico tipo {error: 'bad request'} es inútil, el frontend no sabe qué campo marcar en rojo. Las APIs de Stripe y GitHub son referencias de oro: cada error tiene código específico, mensaje humano y link a docs.</p><p>Timestamps siempre en <strong>ISO 8601</strong> (2024-01-15T14:30:00Z), nunca Unix epoch o formatos locales. IDs como strings, no números (evita problemas de precisión en JavaScript con enteros >53 bits). Relaciones como /users/123/posts o incluir con ?include=posts en un sideload, nunca nested infinito que explota el payload.</p>"
      },
      {
        "h2": "Mocks para casos edge y errores",
        "body": "<p>Testear solo el happy path es testear 30% de tu app. Necesitás mocks para: <strong>rate limiting</strong> (429 Too Many Requests con header Retry-After), <strong>autenticación expirada</strong> (401 con {code: 'token_expired'}), <strong>conflictos</strong> (409 cuando creás algo duplicado), <strong>validación fallida</strong> (422 con array de errores por campo).</p><p>Casos realistas que olvidás: respuestas vacías (array sin items), objetos con campos null (avatar no seteado), respuestas grandes (lista de 1000 productos), respuestas lentas (simular 3s de latency). Si tu app no maneja loading states ni empty states, los usuarios ven pantallas rotas.</p><p>MSW permite condiciones: devolver 200 las primeras 2 requests, luego 429. O retornar error 50% del tiempo para forzar que tu código maneje inconsistencia de red. En Cypress podés hacer cy.intercept('/api/users').as('getUsers').wait('@getUsers') y controlar timing exacto de cada request.</p>"
      },
      {
        "h2": "Tools y workflows de mocking profesional",
        "body": "<p><strong>Development:</strong> MSW + Faker.js es el stack ganador. MSW intercepta fetch/axios en el browser sin servidor extra, Faker genera emails realistas en lugar de test@test.com. Setup: npm i -D msw @faker-js/faker, correr npx msw init public/, crear handlers en src/mocks/handlers.ts.</p><p><strong>Testing:</strong> Mock directo en tests unitarios (Jest/Vitest con jest.mock), pero en E2E (Cypress/Playwright) usá mocks de red reales. Playwright tiene route.fulfill() que intercepta cualquier request y devuelve JSON custom. Ventaja: testeas integración completa sin backend live.</p><p>Para equipos grandes: <strong>Postman Mock Servers</strong> o <strong>Stoplight Prism</strong> generan mocks desde OpenAPI spec. Diseñás tu API en Swagger, Prism levanta servidor HTTP con ejemplos automáticos. Backend y frontend comparten el mismo contrato, cero drift entre lo esperado y lo implementado. Cuesta setup inicial pero en equipos 10+ devs ahorra semanas de 'uy, la API cambió y no me avisaste'.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿MSW o JSON Server para mocks de desarrollo?",
        "a": "MSW si querés interceptar requests sin servidor (corre en el browser). JSON Server si necesitás una REST API completa compartida en red local."
      },
      {
        "q": "¿Los mocks deben estar en el repo de producción?",
        "a": "En devDependencies sí, pero nunca los importes en código productivo. Usá flags de entorno (if (process.env.NODE_ENV === 'development')) para activarlos."
      },
      {
        "q": "¿Cómo simular latencia de red en mocks?",
        "a": "MSW permite ctx.delay(1500) para agregar delay de 1.5s. JSON Server tiene --delay 2000. Fundamental para testear loading states reales."
      },
      {
        "q": "¿Qué hacer si el backend cambia la estructura de respuesta?",
        "a": "Usá TypeScript con tipos generados desde OpenAPI (openapi-typescript). Si el backend rompe el contrato, tu IDE explota en rojo antes de deployar."
      }
    ]
  },
  "en": {
    "pageTitle": "API Mock Response Generator | Genfy",
    "metaDesc": "Generate realistic JSON mock responses for REST endpoints. Speed up frontend development without waiting for backend or paying for synthetic data services.",
    "h1": "API Mock Response Generator",
    "intro": "Create realistic API responses instantly to develop and test your frontend without depending on the backend.",
    "tag": "Data",
    "filterLabel": "Endpoint type",
    "countLabel": "Objects",
    "generateLabel": "Generate mock",
    "copyLabel": "Copy JSON",
    "groups": [
      {
        "id": "endpoint",
        "label": "Common endpoint",
        "items": [
          "GET /users - User list",
          "GET /users/:id - Individual user",
          "POST /users - Create user",
          "PUT /users/:id - Update user",
          "DELETE /users/:id - Delete user",
          "GET /products - Product catalog",
          "GET /products/:id - Product detail",
          "POST /orders - Create order",
          "GET /orders - Order history",
          "GET /orders/:id - Order detail",
          "POST /auth/login - Login",
          "POST /auth/register - Register user",
          "POST /auth/refresh - Refresh token",
          "GET /posts - Post/article list",
          "GET /posts/:id - Individual post",
          "POST /comments - Create comment",
          "GET /comments?postId=X - Post comments",
          "GET /notifications - User notifications",
          "PATCH /notifications/:id/read - Mark as read",
          "GET /search?q=term - Global search",
          "GET /categories - Categories/taxonomies",
          "GET /stats/dashboard - Dashboard stats",
          "POST /upload - Upload file",
          "GET /messages - Messages/chat",
          "POST /messages - Send message",
          "GET /analytics/events - Analytics events",
          "GET /settings - User settings",
          "PATCH /settings - Update settings",
          "GET /invoices - Invoices",
          "GET /subscriptions - Active subscriptions",
          "POST /payments - Process payment",
          "GET /reviews - Product reviews",
          "POST /reviews - Create review",
          "GET /followers - Follower list",
          "POST /follow - Follow user",
          "GET /feed - Activity feed",
          "GET /recommendations - Personalized recommendations",
          "GET /cart - Shopping cart",
          "POST /cart/items - Add to cart",
          "DELETE /cart/items/:id - Remove from cart",
          "GET /wishlist - Wishlist",
          "GET /profile - User profile",
          "GET /activity - Recent activity",
          "GET /tags - Tags/labels",
          "GET /bookmarks - Saved bookmarks",
          "GET /reports - Generated reports",
          "POST /webhooks - Register webhook",
          "GET /logs - Activity logs",
          "GET /permissions - User permissions",
          "GET /teams - Teams/organizations"
        ]
      },
      {
        "id": "httpStatus",
        "label": "HTTP status",
        "items": [
          "200 OK - Success",
          "201 Created - Resource created",
          "204 No Content - No content",
          "400 Bad Request - Invalid request",
          "401 Unauthorized - Not authenticated",
          "403 Forbidden - No permissions",
          "404 Not Found - Not found",
          "409 Conflict - Data conflict",
          "422 Unprocessable Entity - Validation failed",
          "429 Too Many Requests - Rate limit",
          "500 Internal Server Error - Server error",
          "503 Service Unavailable - Service unavailable"
        ]
      },
      {
        "id": "structure",
        "label": "Response structure",
        "items": [
          "Simple object",
          "Array of objects",
          "Paginated (data + meta)",
          "With validation errors",
          "With expanded metadata",
          "Deep nested",
          "With relationships (includes)",
          "With ISO 8601 timestamps",
          "With resource URLs",
          "With optional null fields",
          "With enums/states",
          "With counters and totals"
        ]
      },
      {
        "id": "dataComplexity",
        "label": "Data complexity",
        "items": [
          "Minimal (3-5 fields)",
          "Standard (8-12 fields)",
          "Complete (15-25 fields)",
          "Enterprise (30+ fields)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why use mocks in frontend development",
        "body": "<p>Frontend development blocked waiting for backend is the most common anti-pattern in agile teams. Your 2-week sprint loses 5 days because the /users API isn't ready yet. Mocks unblock parallel work: frontend builds UI against fake data, backend implements real logic, they integrate at the end.</p><p>Tools like <strong>MSW (Mock Service Worker)</strong> intercept HTTP requests in development, returning mocks without touching production code. JSON Server spins up a complete REST API from a db.json file in 2 minutes. Faker.js generates realistic random data (names, emails, addresses) instead of 'User 1', 'User 2'.</p><p>Critical mistake: overly simplistic mocks. If your /users mock returns only {id, name}, and the real backend includes {role, permissions, lastLogin, avatar, settings}, your frontend explodes in production. Mocks must replicate real structure or you're a kamikaze.</p>"
      },
      {
        "h2": "Standard REST response structure",
        "body": "<p>Well-designed APIs follow recognizable patterns. <strong>Paginated list:</strong> returns {data: [], meta: {total, page, perPage, totalPages}}. Without meta, frontend can't build correct pagination. <strong>Individual object:</strong> {data: {id, ...attrs}} or directly the object; both are valid, but pick one and maintain consistency.</p><p>For errors, HTTP 400/422 should include {errors: [{field: 'email', message: 'already exists'}]}. A generic error like {error: 'bad request'} is useless, frontend doesn't know which field to mark red. Stripe and GitHub APIs are gold references: each error has specific code, human message and docs link.</p><p>Timestamps always in <strong>ISO 8601</strong> (2024-01-15T14:30:00Z), never Unix epoch or local formats. IDs as strings, not numbers (avoids precision issues in JavaScript with integers >53 bits). Relations as /users/123/posts or include with ?include=posts in sideload, never infinite nesting that blows up payload.</p>"
      },
      {
        "h2": "Mocks for edge cases and errors",
        "body": "<p>Testing only the happy path is testing 30% of your app. You need mocks for: <strong>rate limiting</strong> (429 Too Many Requests with Retry-After header), <strong>expired authentication</strong> (401 with {code: 'token_expired'}), <strong>conflicts</strong> (409 when creating duplicate), <strong>failed validation</strong> (422 with array of errors per field).</p><p>Realistic cases you forget: empty responses (array without items), objects with null fields (avatar not set), large responses (list of 1000 products), slow responses (simulate 3s latency). If your app doesn't handle loading states or empty states, users see broken screens.</p><p>MSW allows conditions: return 200 for first 2 requests, then 429. Or return error 50% of the time to force your code to handle network inconsistency. In Cypress you can cy.intercept('/api/users').as('getUsers').wait('@getUsers') and control exact timing of each request.</p>"
      },
      {
        "h2": "Professional mocking tools and workflows",
        "body": "<p><strong>Development:</strong> MSW + Faker.js is the winning stack. MSW intercepts fetch/axios in browser without extra server, Faker generates realistic emails instead of test@test.com. Setup: npm i -D msw @faker-js/faker, run npx msw init public/, create handlers in src/mocks/handlers.ts.</p><p><strong>Testing:</strong> Direct mock in unit tests (Jest/Vitest with jest.mock), but in E2E (Cypress/Playwright) use real network mocks. Playwright has route.fulfill() that intercepts any request and returns custom JSON. Advantage: test complete integration without live backend.</p><p>For large teams: <strong>Postman Mock Servers</strong> or <strong>Stoplight Prism</strong> generate mocks from OpenAPI spec. Design your API in Swagger, Prism spins up HTTP server with automatic examples. Backend and frontend share same contract, zero drift between expected and implemented. Costs initial setup but in 10+ dev teams saves weeks of 'oops, API changed and nobody told me'.</p>"
      }
    ],
    "faq": [
      {
        "q": "MSW or JSON Server for development mocks?",
        "a": "MSW if you want to intercept requests without a server (runs in browser). JSON Server if you need a complete REST API shared on local network."
      },
      {
        "q": "Should mocks be in the production repo?",
        "a": "In devDependencies yes, but never import them in production code. Use environment flags (if (process.env.NODE_ENV === 'development')) to activate them."
      },
      {
        "q": "How to simulate network latency in mocks?",
        "a": "MSW allows ctx.delay(1500) to add 1.5s delay. JSON Server has --delay 2000. Essential for testing real loading states."
      },
      {
        "q": "What to do if backend changes response structure?",
        "a": "Use TypeScript with types generated from OpenAPI (openapi-typescript). If backend breaks contract, your IDE explodes red before deploying."
      }
    ]
  }
};
