import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-fixtures-cypress",
    "en": "cypress-fixture-generator"
  },
  "category": "data",
  "emoji": "🌲",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Fixtures para Cypress | Genfy",
    "metaDesc": "Genera fixtures JSON realistas para tus tests E2E en Cypress. Datos de usuarios, productos, APIs y más. Acelera tu suite de testing ahora.",
    "h1": "Generador de Fixtures para Cypress",
    "intro": "Creá fixtures JSON realistas en segundos para tus tests E2E. Usuarios, productos, respuestas de API y estructuras complejas listas para usar en tus specs de Cypress.",
    "tag": "Datos",
    "filterLabel": "Tipo de fixture",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "fixtureType",
        "label": "Tipo de fixture",
        "items": [
          "{\"id\":1,\"email\":\"usuario@ejemplo.com\",\"name\":\"Ana García\",\"role\":\"admin\",\"createdAt\":\"2024-01-15T10:30:00Z\"}",
          "{\"id\":2,\"username\":\"jperez\",\"firstName\":\"Juan\",\"lastName\":\"Pérez\",\"avatar\":\"https://i.pravatar.cc/150?img=12\",\"isActive\":true}",
          "{\"userId\":3,\"email\":\"maria.lopez@empresa.com\",\"profile\":{\"age\":28,\"country\":\"AR\",\"preferences\":{\"theme\":\"dark\",\"notifications\":true}}}",
          "{\"id\":101,\"name\":\"Notebook Lenovo\",\"price\":899.99,\"currency\":\"USD\",\"stock\":15,\"category\":\"electronics\"}",
          "{\"productId\":\"SKU-2024-A1\",\"title\":\"Zapatillas Running Nike\",\"description\":\"Calzado deportivo de alta performance\",\"images\":[\"img1.jpg\",\"img2.jpg\"],\"rating\":4.5,\"reviews\":128}",
          "{\"id\":205,\"brand\":\"Samsung\",\"model\":\"Galaxy S23\",\"specs\":{\"ram\":\"8GB\",\"storage\":\"256GB\",\"color\":\"black\"},\"inStock\":true,\"shipping\":{\"available\":true,\"cost\":0}}",
          "{\"orderId\":\"ORD-20240315-001\",\"customerId\":456,\"items\":[{\"productId\":101,\"quantity\":2,\"price\":50.00}],\"total\":100.00,\"status\":\"pending\"}",
          "{\"id\":789,\"date\":\"2024-03-15\",\"customer\":{\"name\":\"Carlos Ruiz\",\"email\":\"cruiz@mail.com\"},\"products\":2,\"subtotal\":180.50,\"tax\":32.49,\"total\":212.99,\"paymentMethod\":\"credit_card\"}",
          "{\"transactionId\":\"TXN-4567\",\"userId\":12,\"amount\":150.00,\"currency\":\"EUR\",\"timestamp\":\"2024-03-15T14:22:33Z\",\"status\":\"completed\",\"metadata\":{\"source\":\"web\"}}",
          "{\"postId\":1,\"title\":\"Introducción a Cypress\",\"body\":\"Cypress es un framework moderno para testing E2E...\",\"author\":\"Admin\",\"publishedAt\":\"2024-02-10\",\"tags\":[\"testing\",\"cypress\",\"qa\"]}",
          "{\"id\":42,\"headline\":\"Nueva versión lanzada\",\"content\":\"Estamos emocionados de anunciar...\",\"slug\":\"nueva-version-2024\",\"featured\":true,\"commentsCount\":8}",
          "{\"articleId\":\"ART-123\",\"category\":\"Technology\",\"excerpt\":\"Las últimas tendencias en desarrollo web\",\"readTime\":5,\"views\":1240,\"likes\":89}",
          "{\"commentId\":301,\"postId\":42,\"author\":\"Usuario123\",\"text\":\"Excelente artículo, muy útil!\",\"createdAt\":\"2024-03-14T09:15:00Z\",\"upvotes\":12}",
          "{\"id\":501,\"user\":\"jdoe\",\"content\":\"Gran producto, lo recomiendo\",\"rating\":5,\"verified\":true,\"helpful\":23,\"date\":\"2024-03-01\"}",
          "{\"reviewId\":\"REV-789\",\"productId\":101,\"title\":\"Muy satisfecho\",\"pros\":[\"calidad\",\"precio\"],\"cons\":[\"demora en envío\"],\"score\":4}",
          "{\"taskId\":\"TASK-001\",\"title\":\"Implementar login\",\"description\":\"Crear flujo de autenticación\",\"status\":\"in_progress\",\"assignee\":\"dev@team.com\",\"priority\":\"high\",\"dueDate\":\"2024-03-20\"}",
          "{\"id\":25,\"project\":\"Website Redesign\",\"name\":\"Diseñar homepage\",\"completed\":false,\"subtasks\":[{\"name\":\"Wireframe\",\"done\":true},{\"name\":\"Mockup\",\"done\":false}]}",
          "{\"issueId\":\"BUG-456\",\"type\":\"bug\",\"severity\":\"medium\",\"reporter\":\"qa@company.com\",\"description\":\"Error en validación de formulario\",\"attachments\":[\"screenshot.png\"]}",
          "{\"endpoint\":\"/api/users\",\"method\":\"GET\",\"statusCode\":200,\"data\":[{\"id\":1,\"name\":\"User 1\"},{\"id\":2,\"name\":\"User 2\"}],\"meta\":{\"total\":2,\"page\":1}}",
          "{\"url\":\"/api/products/search\",\"params\":{\"q\":\"laptop\",\"limit\":10},\"response\":{\"results\":[],\"count\":0},\"headers\":{\"content-type\":\"application/json\"}}",
          "{\"path\":\"/api/auth/login\",\"request\":{\"email\":\"test@test.com\",\"password\":\"secret123\"},\"response\":{\"token\":\"jwt.token.here\",\"user\":{\"id\":1,\"role\":\"user\"}},\"status\":201}",
          "{\"code\":\"ERR_AUTH_001\",\"message\":\"Invalid credentials\",\"statusCode\":401,\"timestamp\":\"2024-03-15T10:30:00Z\",\"path\":\"/api/login\"}",
          "{\"error\":\"ValidationError\",\"details\":[{\"field\":\"email\",\"message\":\"Invalid email format\"},{\"field\":\"password\",\"message\":\"Too short\"}],\"status\":400}",
          "{\"type\":\"ServerError\",\"message\":\"Database connection failed\",\"code\":500,\"stack\":\"Error at...\",\"requestId\":\"req-abc123\"}",
          "{\"sessionId\":\"sess_xyz789\",\"userId\":42,\"createdAt\":\"2024-03-15T08:00:00Z\",\"expiresAt\":\"2024-03-15T20:00:00Z\",\"isValid\":true}",
          "{\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\",\"refreshToken\":\"refresh_abc123\",\"expiresIn\":3600,\"tokenType\":\"Bearer\"}",
          "{\"authData\":{\"provider\":\"google\",\"accessToken\":\"ya29.token\",\"user\":{\"email\":\"user@gmail.com\",\"verified\":true}}}",
          "{\"formId\":\"contact-form\",\"fields\":{\"name\":\"Pedro Gómez\",\"email\":\"pedro@mail.com\",\"message\":\"Necesito información\",\"consent\":true},\"submittedAt\":\"2024-03-15T11:45:00Z\"}",
          "{\"surveyResponse\":{\"questionId\":1,\"answer\":\"Muy satisfecho\",\"userId\":88,\"timestamp\":\"2024-03-14T15:30:00Z\"}}",
          "{\"subscriptionId\":\"SUB-001\",\"email\":\"subscriber@email.com\",\"plan\":\"premium\",\"status\":\"active\",\"billingCycle\":\"monthly\",\"nextBilling\":\"2024-04-15\"}",
          "{\"notificationId\":\"NOTIF-789\",\"userId\":12,\"type\":\"email\",\"subject\":\"Bienvenido\",\"read\":false,\"createdAt\":\"2024-03-15T09:00:00Z\"}",
          "{\"alertId\":\"ALR-456\",\"severity\":\"warning\",\"message\":\"Disk space low\",\"acknowledged\":false,\"triggeredAt\":\"2024-03-15T12:00:00Z\"}",
          "{\"config\":{\"apiUrl\":\"https://api.example.com\",\"timeout\":5000,\"retries\":3,\"features\":{\"darkMode\":true,\"analytics\":false}}}",
          "{\"settings\":{\"language\":\"es\",\"timezone\":\"America/Argentina/Buenos_Aires\",\"notifications\":{\"email\":true,\"push\":false}}}",
          "{\"cartId\":\"CART-abc123\",\"userId\":55,\"items\":[{\"productId\":101,\"qty\":1,\"price\":50},{\"productId\":102,\"qty\":2,\"price\":30}],\"total\":110,\"updatedAt\":\"2024-03-15T10:00:00Z\"}",
          "{\"wishlistId\":\"WISH-789\",\"userId\":33,\"products\":[{\"id\":201,\"name\":\"Item deseado 1\"},{\"id\":202,\"name\":\"Item deseado 2\"}],\"public\":false}",
          "{\"categoryId\":10,\"name\":\"Electrónica\",\"slug\":\"electronica\",\"parent\":null,\"count\":156,\"image\":\"category-electronics.jpg\"}",
          "{\"tagId\":5,\"label\":\"JavaScript\",\"slug\":\"javascript\",\"color\":\"#f7df1e\",\"usageCount\":420}",
          "{\"mediaId\":\"IMG-2024-001\",\"type\":\"image\",\"url\":\"https://cdn.example.com/photo.jpg\",\"alt\":\"Descripción\",\"width\":1920,\"height\":1080,\"size\":245600}",
          "{\"videoId\":\"VID-456\",\"title\":\"Tutorial Cypress\",\"duration\":\"12:35\",\"thumbnail\":\"thumb.jpg\",\"views\":5420,\"uploadedAt\":\"2024-02-20\"}",
          "{\"eventId\":\"EVT-2024-001\",\"name\":\"Conferencia Tech\",\"date\":\"2024-05-10\",\"location\":\"Buenos Aires\",\"attendees\":150,\"online\":true}",
          "{\"bookingId\":\"BOOK-789\",\"userId\":45,\"serviceId\":12,\"date\":\"2024-04-05\",\"time\":\"14:00\",\"status\":\"confirmed\",\"notes\":\"Sin preferencias\"}",
          "{\"invoiceId\":\"INV-2024-123\",\"customerId\":67,\"items\":[{\"description\":\"Servicio mensual\",\"amount\":99.99}],\"subtotal\":99.99,\"tax\":18.00,\"total\":117.99,\"dueDate\":\"2024-04-01\"}",
          "{\"paymentId\":\"PAY-456\",\"orderId\":\"ORD-789\",\"method\":\"paypal\",\"amount\":250.00,\"currency\":\"USD\",\"status\":\"success\",\"processedAt\":\"2024-03-15T11:30:00Z\"}",
          "{\"reportId\":\"REP-001\",\"type\":\"sales\",\"period\":\"2024-03\",\"data\":{\"total\":15000,\"orders\":120,\"avgOrder\":125},\"generatedAt\":\"2024-03-15T23:59:00Z\"}",
          "{\"logEntry\":{\"level\":\"info\",\"message\":\"User logged in\",\"userId\":23,\"ip\":\"192.168.1.100\",\"timestamp\":\"2024-03-15T10:15:30Z\"}}",
          "{\"metricId\":\"MET-CPU-001\",\"name\":\"cpu_usage\",\"value\":45.2,\"unit\":\"%\",\"host\":\"server-01\",\"recordedAt\":\"2024-03-15T12:00:00Z\"}",
          "{\"webhookId\":\"HOOK-123\",\"event\":\"order.created\",\"payload\":{\"orderId\":456,\"total\":99.99},\"url\":\"https://webhook.site/abc\",\"status\":\"delivered\",\"attempts\":1}"
        ]
      }
    ],
    "separator": "",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué usar fixtures en Cypress",
        "body": "<p>Las fixtures son archivos de datos estáticos que simulan respuestas de APIs o estados de la aplicación. En lugar de depender de servicios externos durante los tests, cargás datos controlados desde archivos JSON. Esto hace que tus tests sean más rápidos (no hay llamadas HTTP reales), más estables (sin timeouts ni errores de red) y completamente reproducibles.</p><p>Cypress busca fixtures en <strong>cypress/fixtures/</strong> por defecto. Un error común es crear estructuras JSON incorrectas o demasiado simplificadas que no reflejan la complejidad de las respuestas reales. Otro problema típico: olvidar actualizar las fixtures cuando la API cambia, lo que genera falsos positivos en los tests.</p><p>Las fixtures brillan en <strong>cy.intercept()</strong> para mockear endpoints, en <strong>cy.fixture()</strong> para cargar datos en comandos custom, y en tests de componentes donde necesitás props realistas. Usarlas correctamente acelera tu suite de pruebas en un 60-80% comparado con tests que golpean APIs reales.</p>"
      },
      {
        "h2": "Estrategias para fixtures efectivas",
        "body": "<p>Organizá tus fixtures por <strong>dominio o entidad</strong>: users/, products/, orders/. Dentro de cada carpeta, creá variantes: user-admin.json, user-guest.json, user-suspended.json. Esto facilita encontrar el fixture correcto y mantener consistencia en los datos de test.</p><p>Incluí casos extremos en tus fixtures: usuarios sin avatar, productos sin stock, respuestas de error 400/401/500. Muchos equipos solo generan casos \"felices\" y después descubren bugs en manejo de errores en producción. Tené fixtures para <strong>estados vacíos</strong> (arrays [], objetos sin propiedades opcionales) y <strong>payloads grandes</strong> (listas de 100+ items para probar paginación y scroll).</p><p>Tip pro: usá TypeScript para tipar tus fixtures. Creá interfaces que coincidan con tus modelos de backend y validá los JSON con un script pre-commit. Esto previene fixtures rotos que causan tests flaky. También considerá generadores de datos como Faker.js para crear fixtures dinámicas cuando necesitás volumen (ej: 1000 usuarios únicos).</p>"
      },
      {
        "h2": "Patrones avanzados con cy.intercept",
        "body": "<p>El patrón más poderoso: <strong>cy.intercept() + cy.fixture()</strong>. Interceptás rutas específicas y devolvés fixtures customizadas por test. Ejemplo: <code>cy.intercept('GET', '/api/users/*', { fixture: 'users/admin.json' })</code>. Esto te permite probar flujos completos sin backend funcionando.</p><p>Para tests de loading states, usá <strong>delays artificiales</strong>: <code>cy.intercept('/api/products', { fixture: 'products.json', delay: 2000 })</code>. Verificás que spinners aparecen y mensajes de \"cargando\" se muestran correctamente. Para simular errores de red: <code>cy.intercept('/api/checkout', { forceNetworkError: true })</code> o respondé con statusCode 500 y una fixture de error.</p><p>Mantené fixtures <strong>versionadas con tu código</strong>. Si un endpoint cambia de v1 a v2, mantené ambos fixtures temporalmente para facilitar rollback. Y cuidado con datos hardcodeados tipo IDs o timestamps: usá valores placeholder que sean claramente fake (999, '2024-01-01') para que sea obvio que son datos de prueba.</p>"
      },
      {
        "h2": "Errores comunes y cómo evitarlos",
        "body": "<p>Error #1: <strong>Fixtures desactualizadas</strong>. El backend agrega un campo nuevo, los tests pasan porque la fixture vieja no lo incluye, pero la UI rompe en producción. Solución: script que compara fixtures contra schema OpenAPI o validaciones de Zod/Yup en el pipeline CI.</p><p>Error #2: <strong>Datos demasiado genéricos</strong>. Fixtures con \"Test User\", \"Example Product\" pierden valor: no prueban caracteres especiales, textos largos, o formatos edge case. Usá datos realistas: nombres con tildes, emails con +alias, precios con decimales raros (9.999), URLs largas.</p><p>Error #3: <strong>No testear fixtures vacías</strong>. Cuando un endpoint devuelve [], ¿tu UI muestra el empty state correcto? Muchos tests asumen que siempre hay datos. Creá fixtures tipo empty-users.json, no-results.json para verificar estos escenarios.</p><p>Por último: no abuses de fixtures para todo. Si necesitás probar lógica de ordenamiento o filtros complejos, a veces conviene generar datos en el test mismo con beforeEach() en lugar de mantener 50 fixtures casi idénticas.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Dónde guardo las fixtures en Cypress?",
        "a": "Por defecto en la carpeta cypress/fixtures/. Podés cambiar la ruta en cypress.config.js con la propiedad fixturesFolder."
      },
      {
        "q": "¿Cómo uso una fixture en un test?",
        "a": "Con cy.fixture('users.json') que devuelve una promesa, o directamente en cy.intercept('/api/users', { fixture: 'users.json' }) para mockear respuestas."
      },
      {
        "q": "¿Las fixtures se pueden generar dinámicamente?",
        "a": "Sí, podés usar librerías como Faker.js en un task de Cypress para generar JSON al vuelo, aunque lo más común es tener archivos estáticos."
      },
      {
        "q": "¿Cómo simulo un error de API con fixtures?",
        "a": "Usá cy.intercept con statusCode: cy.intercept('/api/login', { statusCode: 401, fixture: 'error-unauthorized.json' })."
      }
    ]
  },
  "en": {
    "pageTitle": "Cypress Fixture Generator | Genfy",
    "metaDesc": "Generate realistic JSON fixtures for Cypress E2E tests. User data, products, API responses and more. Speed up your testing suite now.",
    "h1": "Cypress Fixture Generator",
    "intro": "Create realistic JSON fixtures in seconds for your E2E tests. Users, products, API responses and complex structures ready to use in your Cypress specs.",
    "tag": "Data",
    "filterLabel": "Fixture type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "fixtureType",
        "label": "Fixture type",
        "items": [
          "{\"id\":1,\"email\":\"user@example.com\",\"name\":\"Jane Smith\",\"role\":\"admin\",\"createdAt\":\"2024-01-15T10:30:00Z\"}",
          "{\"id\":2,\"username\":\"jdoe\",\"firstName\":\"John\",\"lastName\":\"Doe\",\"avatar\":\"https://i.pravatar.cc/150?img=8\",\"isActive\":true}",
          "{\"userId\":3,\"email\":\"sarah.jones@company.com\",\"profile\":{\"age\":32,\"country\":\"US\",\"preferences\":{\"theme\":\"light\",\"notifications\":true}}}",
          "{\"id\":101,\"name\":\"MacBook Pro 16\",\"price\":2399.99,\"currency\":\"USD\",\"stock\":8,\"category\":\"computers\"}",
          "{\"productId\":\"SKU-2024-B5\",\"title\":\"Wireless Headphones Sony\",\"description\":\"Premium noise-cancelling headphones\",\"images\":[\"front.jpg\",\"side.jpg\"],\"rating\":4.7,\"reviews\":342}",
          "{\"id\":205,\"brand\":\"Apple\",\"model\":\"iPhone 15 Pro\",\"specs\":{\"ram\":\"8GB\",\"storage\":\"512GB\",\"color\":\"titanium\"},\"inStock\":true,\"shipping\":{\"available\":true,\"cost\":0}}",
          "{\"orderId\":\"ORD-20240315-042\",\"customerId\":789,\"items\":[{\"productId\":101,\"quantity\":1,\"price\":2399.99}],\"total\":2399.99,\"status\":\"shipped\"}",
          "{\"id\":456,\"date\":\"2024-03-15\",\"customer\":{\"name\":\"Michael Brown\",\"email\":\"mbrown@email.com\"},\"products\":3,\"subtotal\":450.00,\"tax\":67.50,\"total\":517.50,\"paymentMethod\":\"paypal\"}",
          "{\"transactionId\":\"TXN-8901\",\"userId\":25,\"amount\":299.99,\"currency\":\"EUR\",\"timestamp\":\"2024-03-15T16:45:22Z\",\"status\":\"pending\",\"metadata\":{\"source\":\"mobile\"}}",
          "{\"postId\":1,\"title\":\"Getting Started with Cypress\",\"body\":\"Cypress is a next-generation front-end testing tool...\",\"author\":\"Tech Team\",\"publishedAt\":\"2024-02-20\",\"tags\":[\"testing\",\"automation\",\"e2e\"]}",
          "{\"id\":88,\"headline\":\"Product Launch Announcement\",\"content\":\"We're thrilled to introduce our latest innovation...\",\"slug\":\"product-launch-2024\",\"featured\":true,\"commentsCount\":23}",
          "{\"articleId\":\"ART-567\",\"category\":\"Engineering\",\"excerpt\":\"Best practices for CI/CD pipelines\",\"readTime\":8,\"views\":3420,\"likes\":156}",
          "{\"commentId\":912,\"postId\":88,\"author\":\"DevUser42\",\"text\":\"Amazing work, can't wait to try it!\",\"createdAt\":\"2024-03-14T11:22:00Z\",\"upvotes\":45}",
          "{\"id\":203,\"user\":\"happycustomer\",\"content\":\"Exceeded my expectations, highly recommend\",\"rating\":5,\"verified\":true,\"helpful\":67,\"date\":\"2024-02-28\"}",
          "{\"reviewId\":\"REV-345\",\"productId\":205,\"title\":\"Great value\",\"pros\":[\"performance\",\"design\"],\"cons\":[\"price\"],\"score\":4}",
          "{\"taskId\":\"TASK-042\",\"title\":\"Refactor API layer\",\"description\":\"Improve error handling and add retries\",\"status\":\"done\",\"assignee\":\"backend@team.com\",\"priority\":\"medium\",\"dueDate\":\"2024-03-18\"}",
          "{\"id\":67,\"project\":\"Mobile App\",\"name\":\"Implement push notifications\",\"completed\":true,\"subtasks\":[{\"name\":\"Setup Firebase\",\"done\":true},{\"name\":\"Test on iOS\",\"done\":true}]}",
          "{\"issueId\":\"BUG-789\",\"type\":\"bug\",\"severity\":\"high\",\"reporter\":\"qa@startup.io\",\"description\":\"Payment flow crashes on checkout\",\"attachments\":[\"crash-log.txt\",\"video.mp4\"]}",
          "{\"endpoint\":\"/api/products\",\"method\":\"GET\",\"statusCode\":200,\"data\":[{\"id\":1,\"name\":\"Product A\"},{\"id\":2,\"name\":\"Product B\"}],\"meta\":{\"total\":2,\"page\":1,\"perPage\":10}}",
          "{\"url\":\"/api/search\",\"params\":{\"q\":\"typescript\",\"limit\":20},\"response\":{\"results\":[{\"id\":1,\"title\":\"Result 1\"}],\"count\":1},\"headers\":{\"content-type\":\"application/json\"}}",
          "{\"path\":\"/api/auth/register\",\"request\":{\"email\":\"newuser@test.com\",\"password\":\"SecurePass123!\"},\"response\":{\"token\":\"jwt.access.token\",\"user\":{\"id\":99,\"role\":\"member\"}},\"status\":201}",
          "{\"code\":\"ERR_INVALID_TOKEN\",\"message\":\"Token has expired\",\"statusCode\":401,\"timestamp\":\"2024-03-15T14:20:00Z\",\"path\":\"/api/profile\"}",
          "{\"error\":\"ValidationError\",\"details\":[{\"field\":\"username\",\"message\":\"Already taken\"},{\"field\":\"age\",\"message\":\"Must be at least 18\"}],\"status\":422}",
          "{\"type\":\"DatabaseError\",\"message\":\"Connection pool exhausted\",\"code\":503,\"stack\":\"Error: at Database.connect()...\",\"requestId\":\"req-xyz456\"}",
          "{\"sessionId\":\"sess_abc456\",\"userId\":128,\"createdAt\":\"2024-03-15T09:30:00Z\",\"expiresAt\":\"2024-03-16T09:30:00Z\",\"isValid\":true}",
          "{\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.payload.signature\",\"refreshToken\":\"refresh_xyz789\",\"expiresIn\":7200,\"tokenType\":\"Bearer\"}",
          "{\"authData\":{\"provider\":\"github\",\"accessToken\":\"gho_token123\",\"user\":{\"email\":\"dev@github.com\",\"verified\":true,\"username\":\"cooldev\"}}}",
          "{\"formId\":\"newsletter-signup\",\"fields\":{\"name\":\"Alex Taylor\",\"email\":\"alex@startup.com\",\"company\":\"TechCorp\",\"consent\":true},\"submittedAt\":\"2024-03-15T13:10:00Z\"}",
          "{\"surveyResponse\":{\"questionId\":5,\"answer\":\"Very likely\",\"userId\":234,\"timestamp\":\"2024-03-14T17:45:00Z\",\"metadata\":{\"source\":\"email\"}}}",
          "{\"subscriptionId\":\"SUB-PRO-456\",\"email\":\"premium@user.com\",\"plan\":\"enterprise\",\"status\":\"active\",\"billingCycle\":\"annual\",\"nextBilling\":\"2025-03-15\"}",
          "{\"notificationId\":\"NOTIF-234\",\"userId\":56,\"type\":\"push\",\"subject\":\"New message received\",\"read\":false,\"createdAt\":\"2024-03-15T10:30:00Z\"}",
          "{\"alertId\":\"ALR-911\",\"severity\":\"critical\",\"message\":\"Server CPU at 98%\",\"acknowledged\":true,\"triggeredAt\":\"2024-03-15T15:22:00Z\",\"acknowledgedBy\":\"ops@team.com\"}",
          "{\"config\":{\"apiUrl\":\"https://api.production.com\",\"timeout\":10000,\"retries\":5,\"features\":{\"betaFeatures\":false,\"analytics\":true,\"debugMode\":false}}}",
          "{\"settings\":{\"language\":\"en\",\"timezone\":\"America/New_York\",\"notifications\":{\"email\":true,\"push\":true,\"sms\":false}}}",
          "{\"cartId\":\"CART-xyz789\",\"userId\":91,\"items\":[{\"productId\":205,\"qty\":1,\"price\":999},{\"productId\":101,\"qty\":2,\"price\":299}],\"total\":1597,\"updatedAt\":\"2024-03-15T11:15:00Z\"}",
          "{\"wishlistId\":\"WISH-456\",\"userId\":77,\"products\":[{\"id\":301,\"name\":\"Desired Item A\"},{\"id\":302,\"name\":\"Desired Item B\"}],\"public\":true,\"shared\":false}",
          "{\"categoryId\":22,\"name\":\"Smart Home\",\"slug\":\"smart-home\",\"parent\":10,\"count\":89,\"image\":\"category-smarthome.jpg\"}",
          "{\"tagId\":12,\"label\":\"React\",\"slug\":\"react\",\"color\":\"#61dafb\",\"usageCount\":1250}",
          "{\"mediaId\":\"IMG-2024-567\",\"type\":\"image\",\"url\":\"https://cdn.example.com/hero-banner.jpg\",\"alt\":\"Hero banner\",\"width\":2560,\"height\":1440,\"size\":982400}",
          "{\"videoId\":\"VID-890\",\"title\":\"Cypress Best Practices\",\"duration\":\"18:42\",\"thumbnail\":\"thumb-cypress.jpg\",\"views\":12340,\"uploadedAt\":\"2024-03-01\"}",
          "{\"eventId\":\"EVT-2024-CONF\",\"name\":\"Web Summit 2024\",\"date\":\"2024-11-05\",\"location\":\"San Francisco\",\"attendees\":5000,\"online\":false}",
          "{\"bookingId\":\"BOOK-234\",\"userId\":123,\"serviceId\":45,\"date\":\"2024-04-10\",\"time\":\"10:00\",\"status\":\"pending\",\"notes\":\"First-time customer\"}",
          "{\"invoiceId\":\"INV-2024-789\",\"customerId\":345,\"items\":[{\"description\":\"Annual license\",\"amount\":999.00}],\"subtotal\":999.00,\"tax\":99.90,\"total\":1098.90,\"dueDate\":\"2024-04-15\"}",
          "{\"paymentId\":\"PAY-STRIPE-123\",\"orderId\":\"ORD-456\",\"method\":\"stripe\",\"amount\":1599.99,\"currency\":\"USD\",\"status\":\"succeeded\",\"processedAt\":\"2024-03-15T14:05:00Z\"}",
          "{\"reportId\":\"REP-SALES-Q1\",\"type\":\"quarterly\",\"period\":\"2024-Q1\",\"data\":{\"revenue\":450000,\"orders\":890,\"avgOrder\":505.62},\"generatedAt\":\"2024-03-31T23:59:59Z\"}",
          "{\"logEntry\":{\"level\":\"error\",\"message\":\"Failed to process webhook\",\"webhookId\":\"hook_123\",\"error\":\"Timeout after 30s\",\"timestamp\":\"2024-03-15T12:34:56Z\"}}",
          "{\"metricId\":\"MET-MEM-001\",\"name\":\"memory_usage\",\"value\":78.5,\"unit\":\"%\",\"host\":\"prod-server-03\",\"recordedAt\":\"2024-03-15T13:00:00Z\"}",
          "{\"webhookId\":\"HOOK-456\",\"event\":\"payment.succeeded\",\"payload\":{\"paymentId\":\"PAY-789\",\"amount\":250.00},\"url\":\"https://myapp.com/webhooks\",\"status\":\"pending\",\"attempts\":0}"
        ]
      }
    ],
    "separator": "",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why use fixtures in Cypress",
        "body": "<p>Fixtures are static data files that simulate API responses or application states. Instead of depending on external services during tests, you load controlled data from JSON files. This makes your tests faster (no real HTTP calls), more stable (no timeouts or network errors), and completely reproducible.</p><p>Cypress looks for fixtures in <strong>cypress/fixtures/</strong> by default. A common mistake is creating incorrect or oversimplified JSON structures that don't reflect the complexity of real responses. Another typical issue: forgetting to update fixtures when the API changes, which generates false positives in tests.</p><p>Fixtures shine in <strong>cy.intercept()</strong> for mocking endpoints, in <strong>cy.fixture()</strong> for loading data in custom commands, and in component tests where you need realistic props. Using them correctly speeds up your test suite by 60-80% compared to tests hitting real APIs.</p>"
      },
      {
        "h2": "Strategies for effective fixtures",
        "body": "<p>Organize your fixtures by <strong>domain or entity</strong>: users/, products/, orders/. Inside each folder, create variants: user-admin.json, user-guest.json, user-suspended.json. This makes it easier to find the right fixture and maintain consistency in test data.</p><p>Include edge cases in your fixtures: users without avatars, out-of-stock products, error responses 400/401/500. Many teams only generate \"happy path\" cases and then discover bugs in error handling in production. Have fixtures for <strong>empty states</strong> (arrays [], objects without optional properties) and <strong>large payloads</strong> (lists of 100+ items to test pagination and scrolling).</p><p>Pro tip: use TypeScript to type your fixtures. Create interfaces matching your backend models and validate JSON with a pre-commit script. This prevents broken fixtures causing flaky tests. Also consider data generators like Faker.js to create dynamic fixtures when you need volume (e.g., 1000 unique users).</p>"
      },
      {
        "h2": "Advanced patterns with cy.intercept",
        "body": "<p>The most powerful pattern: <strong>cy.intercept() + cy.fixture()</strong>. You intercept specific routes and return customized fixtures per test. Example: <code>cy.intercept('GET', '/api/users/*', { fixture: 'users/admin.json' })</code>. This lets you test complete flows without a working backend.</p><p>For loading state tests, use <strong>artificial delays</strong>: <code>cy.intercept('/api/products', { fixture: 'products.json', delay: 2000 })</code>. You verify that spinners appear and \"loading\" messages display correctly. To simulate network errors: <code>cy.intercept('/api/checkout', { forceNetworkError: true })</code> or respond with statusCode 500 and an error fixture.</p><p>Keep fixtures <strong>versioned with your code</strong>. If an endpoint changes from v1 to v2, maintain both fixtures temporarily to facilitate rollback. And be careful with hardcoded data like IDs or timestamps: use placeholder values that are clearly fake (999, '2024-01-01') so it's obvious they're test data.</p>"
      },
      {
        "h2": "Common mistakes and how to avoid them",
        "body": "<p>Mistake #1: <strong>Outdated fixtures</strong>. Backend adds a new field, tests pass because the old fixture doesn't include it, but UI breaks in production. Solution: script that compares fixtures against OpenAPI schema or Zod/Yup validations in CI pipeline.</p><p>Mistake #2: <strong>Too generic data</strong>. Fixtures with \"Test User\", \"Example Product\" lose value: they don't test special characters, long texts, or edge case formats. Use realistic data: names with accents, emails with +aliases, weird decimal prices (9.999), long URLs.</p><p>Mistake #3: <strong>Not testing empty fixtures</strong>. When an endpoint returns [], does your UI show the correct empty state? Many tests assume there's always data. Create fixtures like empty-users.json, no-results.json to verify these scenarios.</p><p>Finally: don't overuse fixtures for everything. If you need to test sorting logic or complex filters, sometimes it's better to generate data in the test itself with beforeEach() rather than maintaining 50 nearly identical fixtures.</p>"
      }
    ],
    "faq": [
      {
        "q": "Where do I store fixtures in Cypress?",
        "a": "By default in the cypress/fixtures/ folder. You can change the path in cypress.config.js with the fixturesFolder property."
      },
      {
        "q": "How do I use a fixture in a test?",
        "a": "With cy.fixture('users.json') which returns a promise, or directly in cy.intercept('/api/users', { fixture: 'users.json' }) to mock responses."
      },
      {
        "q": "Can fixtures be generated dynamically?",
        "a": "Yes, you can use libraries like Faker.js in a Cypress task to generate JSON on the fly, though static files are most common."
      },
      {
        "q": "How do I simulate an API error with fixtures?",
        "a": "Use cy.intercept with statusCode: cy.intercept('/api/login', { statusCode: 401, fixture: 'error-unauthorized.json' })."
      }
    ]
  }
};
