import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "rest-api",
    "en": "rest-api"
  },
  "emoji": "🔄",
  "category": "web",
  "es": {
    "pageTitle": "REST API — Glosario | Genfy",
    "metaDesc": "REST API es un estilo arquitectónico para diseñar APIs HTTP basado en recursos, métodos estándar y representaciones. Aprende cuándo usarlo vs GraphQL.",
    "h1": "REST API",
    "short": "REST (Representational State Transfer) es un estilo arquitectónico para diseñar APIs sobre HTTP, basado en recursos identificables por URLs, métodos estándar (GET, POST, PUT, DELETE) y representaciones (JSON, XML). Creado por Roy Fielding en 2000, es el estándar predominante para APIs web por su simplicidad, cache-ability y compatibilidad con la infraestructura HTTP existente.",
    "body": [
      {
        "title": "¿Qué es REST API?",
        "content": "<p>REST es un conjunto de <strong>restricciones arquitectónicas</strong>, no un protocolo ni estándar. Su tesis doctoral original (Fielding, 2000) define seis principios: arquitectura cliente-servidor, stateless (sin sesión en servidor), cacheable, interfaz uniforme, sistema en capas, y código bajo demanda (opcional). En la práctica, una API RESTful expone <strong>recursos</strong> (usuarios, productos, órdenes) como URLs únicas (<code>/users/42</code>) y usa métodos HTTP para operaciones: <code>GET</code> (leer), <code>POST</code> (crear), <code>PUT/PATCH</code> (actualizar), <code>DELETE</code> (eliminar).</p><p>Cada respuesta incluye <strong>representaciones</strong> del recurso (típicamente JSON), códigos de estado HTTP (<code>200 OK</code>, <code>201 Created</code>, <code>404 Not Found</code>, <code>500 Internal Server Error</code>), y headers de cache (<code>ETag</code>, <code>Cache-Control</code>). REST aprovecha la semántica HTTP: métodos idempotentes (<code>GET</code>, <code>PUT</code>, <code>DELETE</code>), métodos seguros (no modifican estado: <code>GET</code>, <code>HEAD</code>), y negociación de contenido (<code>Accept</code>, <code>Content-Type</code>).</p><p>Su popularidad viene de la <strong>simplicidad</strong>: cualquier cliente HTTP (curl, navegador, móvil) puede consumir una REST API sin librerías especiales. Las URLs son descriptivas, los métodos intuitivos, y herramientas de debugging (Postman, httpie) universales. Es la arquitectura por defecto en startups, APIs públicas (Stripe, GitHub, Twilio) y microservicios.</p>"
      },
      {
        "title": "¿Cómo funciona REST API?",
        "content": "<p>Una REST API organiza funcionalidad en <strong>recursos</strong>, sustantivos que representan entidades del dominio: <code>/users</code>, <code>/posts</code>, <code>/orders</code>. Cada recurso tiene una URL base; recursos individuales usan identificadores: <code>/users/123</code>. Las colecciones (<code>/users</code>) soportan <code>GET</code> (listar), <code>POST</code> (crear); los individuales (<code>/users/123</code>) soportan <code>GET</code> (detalle), <code>PUT/PATCH</code> (actualizar), <code>DELETE</code> (eliminar).</p><p>El servidor responde con <strong>representaciones</strong> en JSON (más común), XML o HTML. La request incluye headers: <code>Authorization</code> (JWT, OAuth), <code>Content-Type: application/json</code>, <code>Accept: application/json</code>. El servidor devuelve <strong>códigos de estado</strong>: 2xx (éxito), 3xx (redirección), 4xx (error cliente), 5xx (error servidor). Un <code>POST /users</code> con <code>201 Created</code> incluye el header <code>Location: /users/456</code> apuntando al recurso nuevo.</p><p>REST es <strong>stateless</strong>: cada request contiene toda la información necesaria (token, filtros, paginación). No hay sesiones en servidor. Esto permite <strong>escalado horizontal</strong>: cualquier instancia puede manejar cualquier request. Las respuestas deben indicar cache-ability: <code>Cache-Control: max-age=3600</code>, <code>ETag: \"abc123\"</code>, permitiendo a proxies y CDNs cachear.</p><p>Para relaciones anidadas, usás subrecursos: <code>/users/123/posts</code> (posts de un usuario). Para filtros y paginación, query params: <code>/users?role=admin&page=2&limit=50</code>. Versionado típico: <code>/v1/users</code> o header <code>Accept: application/vnd.api.v2+json</code>.</p>"
      },
      {
        "title": "¿Cuándo usar REST API?",
        "content": "<p>Usá REST cuando necesites una <strong>API pública o semi-pública</strong> consumida por clientes diversos (web, móvil, IoT, terceros). Su simplicidad y adopción universal minimizan fricción de integración. Es ideal para CRUD (Create, Read, Update, Delete) sobre entidades bien definidas: un e-commerce (productos, carritos, órdenes), un CMS (artículos, autores, categorías), o un SaaS (usuarios, proyectos, tareas).</p><p>REST brilla en <strong>microservicios</strong>: cada servicio expone su dominio como recursos RESTful, comunicándose entre sí con HTTP. Tools como API gateways (Kong, AWS API Gateway), service mesh (Istio), y observability (Prometheus, Datadog) tienen soporte de primera clase para HTTP. También es preferible cuando necesitás <strong>cache agresivo</strong>: CDNs, proxies y navegadores cachean GET naturalmente; GraphQL requiere configuración extra.</p><p>Evitá REST si tu cliente necesita <strong>queries flexibles</strong> con selección de campos y relaciones anidadas arbitrarias; ahí GraphQL es superior (menos requests, payload optimizado). Tampoco es ideal para operaciones complejas que no mapean a CRUD: transacciones multi-recurso, workflows, batch operations. En esos casos, considerá endpoints de acción (<code>POST /orders/123/cancel</code>) o RPC (gRPC, JSON-RPC).</p>"
      },
      {
        "title": "REST vs GraphQL y errores comunes",
        "content": "<p>REST y GraphQL resuelven problemas distintos. <strong>REST</strong> es simple, stateless, cacheable, soportado universalmente. Pero sufre de <em>over-fetching</em> (traés campos que no necesitás) y <em>under-fetching</em> (múltiples requests para relaciones). <strong>GraphQL</strong> elimina esto: una query trae exactamente lo necesario. Pero requiere librería cliente, complica cache, y expone toda la API en un solo endpoint (riesgo de queries costosas sin rate limiting cuidadoso).</p><p>Elegí REST para APIs públicas, CRUD simple, o cuando cache HTTP es crítico. Elegí GraphQL para clientes sofisticados (single-page apps, móviles) que necesitan flexibilidad, o cuando tenés muchas relaciones y queres minimizar requests. Muchas empresas usan <strong>ambos</strong>: REST para operaciones simples, GraphQL para dashboards complejos.</p><p><strong>Errores comunes</strong>: usar verbos en URLs (<code>/getUser</code>, <code>/createPost</code>) en vez de sustantivos + métodos HTTP. No respetar idempotencia: <code>PUT</code> y <code>DELETE</code> deben poder repetirse sin efectos adicionales. Devolver siempre <code>200 OK</code>; usá <code>201</code>, <code>204</code>, <code>400</code>, <code>404</code>, <code>409</code> según corresponda. No documentar: herramientas como OpenAPI (Swagger) generan docs interactivas automáticamente.</p><p>Otro error: no versionar. Cuando cambiás la estructura de una respuesta, clientes viejos fallan. Usá <code>/v1/</code> en URLs o headers <code>Accept</code>. Y no olvides <strong>HATEOAS</strong> (Hypermedia As The Engine Of Application State): respuestas deben incluir links a acciones posibles (<code>\"_links\": { \"self\": \"/users/123\", \"posts\": \"/users/123/posts\" }</code>), haciendo la API auto-descriptiva.</p>"
      }
    ],
    "examples": [
      "GET /api/v1/users/42 → { \"id\": 42, \"name\": \"Alice\", \"email\": \"alice@example.com\" }",
      "POST /api/v1/users { \"name\": \"Bob\", \"email\": \"bob@example.com\" } → 201 Created, Location: /api/v1/users/99",
      "PUT /api/v1/users/42 { \"name\": \"Alice Smith\" } → 200 OK",
      "DELETE /api/v1/users/42 → 204 No Content",
      "GET /api/v1/posts?author=42&status=published&page=2&limit=20"
    ],
    "related": [
      "generador-url-rest-api",
      "generador-json-schema"
    ],
    "faq": [
      {
        "q": "¿REST es stateless pero cómo manejo autenticación?",
        "a": "Cada request incluye un token (JWT, OAuth Bearer) en el header Authorization. El servidor valida el token sin mantener sesión; el token contiene claims (user ID, permisos). Esto permite statelessness: cualquier instancia puede verificar el token."
      },
      {
        "q": "¿Cuándo uso PUT vs PATCH?",
        "a": "PUT reemplaza el recurso completo; enviás todas las propiedades. PATCH actualiza parcialmente; enviás solo las propiedades que cambian. Ejemplo: PATCH /users/42 { \"email\": \"new@example.com\" } actualiza solo email, dejando el resto intacto."
      },
      {
        "q": "¿Cómo manejo relaciones en REST?",
        "a": "Tres enfoques: 1) Subrecursos: GET /users/42/posts. 2) Query params: GET /posts?user_id=42. 3) Incluir relaciones en la respuesta: GET /users/42?include=posts (devuelve user con posts embebidos). Elegí según profundidad y frecuencia de acceso."
      }
    ]
  },
  "en": {
    "pageTitle": "REST API — Glossary | Genfy",
    "metaDesc": "REST API is an architectural style for designing HTTP APIs based on resources, standard methods, and representations. Learn when to use it vs GraphQL.",
    "h1": "REST API",
    "short": "REST (Representational State Transfer) is an architectural style for designing APIs over HTTP, based on identifiable resources via URLs, standard methods (GET, POST, PUT, DELETE), and representations (JSON, XML). Created by Roy Fielding in 2000, it's the predominant standard for web APIs due to its simplicity, cacheability, and compatibility with existing HTTP infrastructure.",
    "body": [
      {
        "title": "What is REST API?",
        "content": "<p>REST is a set of <strong>architectural constraints</strong>, not a protocol or standard. Its original doctoral thesis (Fielding, 2000) defines six principles: client-server architecture, stateless (no server session), cacheable, uniform interface, layered system, and code-on-demand (optional). In practice, a RESTful API exposes <strong>resources</strong> (users, products, orders) as unique URLs (<code>/users/42</code>) and uses HTTP methods for operations: <code>GET</code> (read), <code>POST</code> (create), <code>PUT/PATCH</code> (update), <code>DELETE</code> (delete).</p><p>Each response includes <strong>representations</strong> of the resource (typically JSON), HTTP status codes (<code>200 OK</code>, <code>201 Created</code>, <code>404 Not Found</code>, <code>500 Internal Server Error</code>), and cache headers (<code>ETag</code>, <code>Cache-Control</code>). REST leverages HTTP semantics: idempotent methods (<code>GET</code>, <code>PUT</code>, <code>DELETE</code>), safe methods (don't modify state: <code>GET</code>, <code>HEAD</code>), and content negotiation (<code>Accept</code>, <code>Content-Type</code>).</p><p>Its popularity comes from <strong>simplicity</strong>: any HTTP client (curl, browser, mobile) can consume a REST API without special libraries. URLs are descriptive, methods intuitive, and debugging tools (Postman, httpie) universal. It's the default architecture in startups, public APIs (Stripe, GitHub, Twilio), and microservices.</p>"
      },
      {
        "title": "How does REST API work?",
        "content": "<p>A REST API organizes functionality into <strong>resources</strong>, nouns representing domain entities: <code>/users</code>, <code>/posts</code>, <code>/orders</code>. Each resource has a base URL; individual resources use identifiers: <code>/users/123</code>. Collections (<code>/users</code>) support <code>GET</code> (list), <code>POST</code> (create); individuals (<code>/users/123</code>) support <code>GET</code> (detail), <code>PUT/PATCH</code> (update), <code>DELETE</code> (delete).</p><p>The server responds with <strong>representations</strong> in JSON (most common), XML, or HTML. The request includes headers: <code>Authorization</code> (JWT, OAuth), <code>Content-Type: application/json</code>, <code>Accept: application/json</code>. The server returns <strong>status codes</strong>: 2xx (success), 3xx (redirection), 4xx (client error), 5xx (server error). A <code>POST /users</code> with <code>201 Created</code> includes the <code>Location: /users/456</code> header pointing to the new resource.</p><p>REST is <strong>stateless</strong>: each request contains all necessary information (token, filters, pagination). No server sessions. This enables <strong>horizontal scaling</strong>: any instance can handle any request. Responses must indicate cacheability: <code>Cache-Control: max-age=3600</code>, <code>ETag: \"abc123\"</code>, allowing proxies and CDNs to cache.</p><p>For nested relationships, use subresources: <code>/users/123/posts</code> (posts by a user). For filters and pagination, query params: <code>/users?role=admin&page=2&limit=50</code>. Typical versioning: <code>/v1/users</code> or header <code>Accept: application/vnd.api.v2+json</code>.</p>"
      },
      {
        "title": "When to use REST API?",
        "content": "<p>Use REST when you need a <strong>public or semi-public API</strong> consumed by diverse clients (web, mobile, IoT, third parties). Its simplicity and universal adoption minimize integration friction. It's ideal for CRUD (Create, Read, Update, Delete) over well-defined entities: an e-commerce (products, carts, orders), a CMS (articles, authors, categories), or a SaaS (users, projects, tasks).</p><p>REST shines in <strong>microservices</strong>: each service exposes its domain as RESTful resources, communicating via HTTP. Tools like API gateways (Kong, AWS API Gateway), service mesh (Istio), and observability (Prometheus, Datadog) have first-class HTTP support. It's also preferable when you need <strong>aggressive caching</strong>: CDNs, proxies, and browsers cache GET naturally; GraphQL requires extra configuration.</p><p>Avoid REST if your client needs <strong>flexible queries</strong> with field selection and arbitrary nested relations; GraphQL is superior there (fewer requests, optimized payload). It's also not ideal for complex operations that don't map to CRUD: multi-resource transactions, workflows, batch operations. In those cases, consider action endpoints (<code>POST /orders/123/cancel</code>) or RPC (gRPC, JSON-RPC).</p>"
      },
      {
        "title": "REST vs GraphQL and common mistakes",
        "content": "<p>REST and GraphQL solve different problems. <strong>REST</strong> is simple, stateless, cacheable, universally supported. But it suffers from <em>over-fetching</em> (you fetch fields you don't need) and <em>under-fetching</em> (multiple requests for relations). <strong>GraphQL</strong> eliminates this: one query fetches exactly what's needed. But it requires a client library, complicates caching, and exposes the entire API in a single endpoint (risk of expensive queries without careful rate limiting).</p><p>Choose REST for public APIs, simple CRUD, or when HTTP caching is critical. Choose GraphQL for sophisticated clients (single-page apps, mobile) needing flexibility, or when you have many relations and want to minimize requests. Many companies use <strong>both</strong>: REST for simple operations, GraphQL for complex dashboards.</p><p><strong>Common mistakes</strong>: using verbs in URLs (<code>/getUser</code>, <code>/createPost</code>) instead of nouns + HTTP methods. Not respecting idempotency: <code>PUT</code> and <code>DELETE</code> must be repeatable without additional effects. Always returning <code>200 OK</code>; use <code>201</code>, <code>204</code>, <code>400</code>, <code>404</code>, <code>409</code> as appropriate. Not documenting: tools like OpenAPI (Swagger) generate interactive docs automatically.</p><p>Another mistake: not versioning. When you change response structure, old clients fail. Use <code>/v1/</code> in URLs or <code>Accept</code> headers. And don't forget <strong>HATEOAS</strong> (Hypermedia As The Engine Of Application State): responses should include links to possible actions (<code>\"_links\": { \"self\": \"/users/123\", \"posts\": \"/users/123/posts\" }</code>), making the API self-descriptive.</p>"
      }
    ],
    "examples": [
      "GET /api/v1/users/42 → { \"id\": 42, \"name\": \"Alice\", \"email\": \"alice@example.com\" }",
      "POST /api/v1/users { \"name\": \"Bob\", \"email\": \"bob@example.com\" } → 201 Created, Location: /api/v1/users/99",
      "PUT /api/v1/users/42 { \"name\": \"Alice Smith\" } → 200 OK",
      "DELETE /api/v1/users/42 → 204 No Content",
      "GET /api/v1/posts?author=42&status=published&page=2&limit=20"
    ],
    "related": [
      "rest-api-endpoint-builder",
      "json-schema-sample"
    ],
    "faq": [
      {
        "q": "REST is stateless but how do I handle authentication?",
        "a": "Each request includes a token (JWT, OAuth Bearer) in the Authorization header. The server validates the token without maintaining a session; the token contains claims (user ID, permissions). This enables statelessness: any instance can verify the token."
      },
      {
        "q": "When do I use PUT vs PATCH?",
        "a": "PUT replaces the entire resource; you send all properties. PATCH updates partially; you send only the properties that change. Example: PATCH /users/42 { \"email\": \"new@example.com\" } updates only email, leaving the rest intact."
      },
      {
        "q": "How do I handle relationships in REST?",
        "a": "Three approaches: 1) Subresources: GET /users/42/posts. 2) Query params: GET /posts?user_id=42. 3) Include relations in response: GET /users/42?include=posts (returns user with embedded posts). Choose based on depth and access frequency."
      }
    ]
  }
};
