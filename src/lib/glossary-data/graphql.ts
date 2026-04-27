import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "graphql",
    "en": "graphql"
  },
  "emoji": "🔮",
  "category": "web",
  "es": {
    "pageTitle": "GraphQL — Glosario | Genfy",
    "metaDesc": "GraphQL es un lenguaje de consulta para APIs creado por Facebook. El cliente especifica exactamente qué datos necesita; el servidor responde solo eso.",
    "h1": "GraphQL",
    "short": "GraphQL es un lenguaje de consulta y runtime para APIs desarrollado por Facebook en 2012 y open-sourced en 2015. A diferencia de REST, donde cada endpoint devuelve una estructura fija, GraphQL permite al cliente especificar exactamente qué campos necesita en una sola query, reduciendo over-fetching, under-fetching y múltiples requests.",
    "body": [
      {
        "title": "¿Qué es GraphQL?",
        "content": "<p>GraphQL nació en Facebook para solucionar problemas de <strong>mobile apps</strong> con conexiones lentas: necesitaban traer datos de múltiples recursos (posts, autores, comentarios, likes) en una request, sin traer campos innecesarios. La solución fue un <strong>lenguaje de queries tipado</strong>: el cliente escribe una query declarativa pidiendo exactamente lo que necesita, y el servidor devuelve solo eso en una respuesta JSON anidada.</p><p>El corazón de GraphQL es su <strong>schema</strong>: un contrato tipado definiendo tipos (<code>User</code>, <code>Post</code>), campos (<code>id: ID!</code>, <code>title: String</code>), relaciones (<code>author: User</code>), y operaciones disponibles (<code>query</code>, <code>mutation</code>, <code>subscription</code>). El schema se escribe en SDL (Schema Definition Language), similar a TypeScript interfaces pero más simple. Herramientas como Apollo Server, GraphQL Yoga o AWS AppSync generan un servidor que resuelve queries validando contra el schema.</p><p>GraphQL no es solo queries: soporta <strong>mutations</strong> (escribir datos, equivalente a POST/PUT/DELETE en REST) y <strong>subscriptions</strong> (real-time via WebSockets, para notificaciones o live updates). Pero su killer feature es la <strong>introspección</strong>: el schema es consultable en runtime, permitiendo herramientas como GraphiQL, GraphQL Playground o Apollo Studio generar documentación interactiva automáticamente.</p>"
      },
      {
        "title": "¿Cómo funciona GraphQL?",
        "content": "<p>Un cliente GraphQL envía una <strong>query</strong> vía HTTP POST a un único endpoint (típicamente <code>/graphql</code>). La query especifica la operación (<code>query</code> o <code>mutation</code>), los campos deseados, y opcionalmente variables, aliases, fragments. Ejemplo: <code>{ user(id: 42) { name email posts { title } } }</code> trae el user 42 con su nombre, email, y títulos de sus posts.</p><p>El servidor parsea la query, la valida contra el <strong>schema</strong> (verifica que los tipos y campos existan, que los argumentos sean correctos), y ejecuta <strong>resolvers</strong>: funciones que traen los datos. Cada campo tiene un resolver: <code>User.posts</code> podría consultar la DB, llamar otra API, o leer cache. Los resolvers se ejecutan en paralelo cuando es posible; el resultado se ensambla en un árbol JSON matching la query.</p><p>GraphQL maneja <strong>batching y caching</strong> automáticamente con DataLoader: si múltiples resolvers piden <code>User(id: 1)</code>, <code>User(id: 2)</code>, DataLoader agrupa en una query <code>SELECT * FROM users WHERE id IN (1,2)</code>, evitando N+1 queries. Para cache HTTP, GraphQL complica porque todas las requests son POST; soluciones incluyen <code>persisted queries</code> (queries pre-registradas con un hash, permitiendo GET) y cache a nivel resolver.</p><p><strong>Subscriptions</strong> usan WebSockets: el cliente suscribe a un evento (<code>subscription { postCreated { id title } }</code>), el servidor mantiene la conexión abierta y pushea datos cuando ocurre el evento. Útil para chats, notificaciones, dashboards real-time.</p>"
      },
      {
        "title": "¿Cuándo usar GraphQL?",
        "content": "<p>Usá GraphQL cuando tu cliente necesita <strong>flexibilidad de queries</strong>: apps móviles con pantallas variadas, dashboards que muestran distintas vistas según permisos, o SPAs con componentes reutilizables que piden subconjuntos de datos. GraphQL elimina la necesidad de crear endpoints custom para cada vista, reduciendo coordinación entre frontend y backend.</p><p>Es ideal para <strong>backends for frontend (BFF)</strong>: un layer intermedio que agrega múltiples microservicios REST en un schema GraphQL unificado. Tools como Apollo Federation permiten múltiples equipos definir schemas parciales que se componen automáticamente. Esto escala mejor que mantener decenas de endpoints REST custom.</p><p>GraphQL brilla en <strong>real-time apps</strong> gracias a subscriptions: live sports, trading platforms, collaborative editors. También en APIs con <strong>relaciones profundas</strong>: redes sociales (posts → comments → replies → users), e-commerce (products → variants → inventory → suppliers), CMS (articles → authors → categories → tags).</p><p>Evitá GraphQL si tu API es simple CRUD sin relaciones complejas; REST es más directo. Tampoco si necesitás <strong>cache HTTP agresivo</strong> (CDNs, proxies): GraphQL requiere configuración custom. Y cuidado con <strong>queries costosas</strong>: sin rate limiting o análisis de complejidad, un cliente puede escribir queries que traigan gigabytes de datos o ejecuten miles de DB queries (problema de N+1 en resolvers mal diseñados).</p>"
      },
      {
        "title": "GraphQL vs REST y buenas prácticas",
        "content": "<p><strong>GraphQL</strong> elimina over/under-fetching, reduce requests, y permite exploración interactiva (GraphiQL). <strong>REST</strong> es más simple, cacheable, y no requiere librería cliente. Muchas empresas usan <strong>ambos</strong>: REST para APIs públicas (más compatible, mejor cache), GraphQL para clientes internos (más eficiente, menos coordinación).</p><p><strong>Buenas prácticas</strong>: diseñá el schema pensando en el <strong>cliente</strong>, no en tu DB. Evitá exponer tablas directamente; creá tipos de alto nivel (<code>User</code>, <code>Order</code>) con campos computed (<code>fullName</code>, <code>totalPrice</code>). Usá <strong>DataLoader</strong> para evitar N+1: batcheá queries a la DB. Implementá <strong>pagination</strong>: connections con <code>edges</code>, <code>cursor</code>, <code>pageInfo</code> (estándar Relay).</p><p>Limitá <strong>complejidad de queries</strong>: analizá profundidad (max 5-7 niveles), cantidad de nodos, o asigná costos a campos y rechazá queries sobre un threshold. Usá <strong>persisted queries</strong> en producción: el cliente envía un hash, no la query completa, evitando injections y habilitando cache HTTP con GET.</p><p>Versionado: GraphQL prefiere <strong>evolución</strong> sobre versioning. Agregás campos nuevos sin romper; deprecás viejos con <code>@deprecated</code>, y los removés cuando nadie los usa (trackeable con Apollo Studio). Documentá con <code>description</code> en el schema; herramientas lo muestran automáticamente. Y monitoreá: Apollo, Hasura, GraphQL Yoga tienen métricas de queries lentas, errores, y uso de campos.</p>"
      }
    ],
    "examples": [
      "query { user(id: 42) { name email posts { title createdAt } } }",
      "mutation { createPost(title: \"Hello\", body: \"World\") { id createdAt } }",
      "subscription { postCreated { id title author { name } } }",
      "query GetUser($id: ID!) { user(id: $id) { name posts(first: 10) { edges { node { title } } } } }",
      "{ users { id name } posts: allPosts { title } }"
    ],
    "related": [
      "ejemplo-graphql-query",
      "generador-url-rest-api"
    ],
    "faq": [
      {
        "q": "¿GraphQL reemplaza a REST?",
        "a": "No necesariamente. GraphQL resuelve problemas específicos (over-fetching, múltiples requests, flexibilidad). REST sigue siendo mejor para APIs públicas simples, cache HTTP, y cuando no necesitás queries complejas. Muchas empresas usan ambos según el caso."
      },
      {
        "q": "¿Cómo manejo autenticación en GraphQL?",
        "a": "Igual que REST: enviás un token (JWT, OAuth) en el header Authorization. Los resolvers verifican permisos antes de devolver datos. Librerías como graphql-shield permiten definir reglas de autorización declarativas a nivel campo o tipo."
      },
      {
        "q": "¿Qué es el problema N+1 y cómo lo soluciono?",
        "a": "Si una query pide users y sus posts, sin batching harías 1 query para users + N queries (una por user) para posts. DataLoader agrupa las N queries en una sola: SELECT * FROM posts WHERE user_id IN (...). Es esencial en GraphQL; sin DataLoader, las queries anidadas son lentas."
      }
    ]
  },
  "en": {
    "pageTitle": "GraphQL — Glossary | Genfy",
    "metaDesc": "GraphQL is a query language for APIs created by Facebook. The client specifies exactly which data it needs; the server responds with only that.",
    "h1": "GraphQL",
    "short": "GraphQL is a query language and runtime for APIs developed by Facebook in 2012 and open-sourced in 2015. Unlike REST, where each endpoint returns a fixed structure, GraphQL allows the client to specify exactly which fields it needs in a single query, reducing over-fetching, under-fetching, and multiple requests.",
    "body": [
      {
        "title": "What is GraphQL?",
        "content": "<p>GraphQL was born at Facebook to solve <strong>mobile app</strong> problems with slow connections: they needed to fetch data from multiple resources (posts, authors, comments, likes) in one request, without fetching unnecessary fields. The solution was a <strong>typed query language</strong>: the client writes a declarative query asking for exactly what it needs, and the server returns only that in a nested JSON response.</p><p>The heart of GraphQL is its <strong>schema</strong>: a typed contract defining types (<code>User</code>, <code>Post</code>), fields (<code>id: ID!</code>, <code>title: String</code>), relationships (<code>author: User</code>), and available operations (<code>query</code>, <code>mutation</code>, <code>subscription</code>). The schema is written in SDL (Schema Definition Language), similar to TypeScript interfaces but simpler. Tools like Apollo Server, GraphQL Yoga, or AWS AppSync generate a server that resolves queries validating against the schema.</p><p>GraphQL isn't just queries: it supports <strong>mutations</strong> (writing data, equivalent to POST/PUT/DELETE in REST) and <strong>subscriptions</strong> (real-time via WebSockets, for notifications or live updates). But its killer feature is <strong>introspection</strong>: the schema is queryable at runtime, allowing tools like GraphiQL, GraphQL Playground, or Apollo Studio to generate interactive documentation automatically.</p>"
      },
      {
        "title": "How does GraphQL work?",
        "content": "<p>A GraphQL client sends a <strong>query</strong> via HTTP POST to a single endpoint (typically <code>/graphql</code>). The query specifies the operation (<code>query</code> or <code>mutation</code>), desired fields, and optionally variables, aliases, fragments. Example: <code>{ user(id: 42) { name email posts { title } } }</code> fetches user 42 with their name, email, and post titles.</p><p>The server parses the query, validates it against the <strong>schema</strong> (verifies types and fields exist, arguments are correct), and executes <strong>resolvers</strong>: functions that fetch data. Each field has a resolver: <code>User.posts</code> might query the DB, call another API, or read cache. Resolvers execute in parallel when possible; the result is assembled into a JSON tree matching the query.</p><p>GraphQL handles <strong>batching and caching</strong> automatically with DataLoader: if multiple resolvers request <code>User(id: 1)</code>, <code>User(id: 2)</code>, DataLoader groups them into one query <code>SELECT * FROM users WHERE id IN (1,2)</code>, avoiding N+1 queries. For HTTP cache, GraphQL complicates because all requests are POST; solutions include <code>persisted queries</code> (pre-registered queries with a hash, enabling GET) and resolver-level cache.</p><p><strong>Subscriptions</strong> use WebSockets: the client subscribes to an event (<code>subscription { postCreated { id title } }</code>), the server keeps the connection open and pushes data when the event occurs. Useful for chats, notifications, real-time dashboards.</p>"
      },
      {
        "title": "When to use GraphQL?",
        "content": "<p>Use GraphQL when your client needs <strong>query flexibility</strong>: mobile apps with varied screens, dashboards showing different views based on permissions, or SPAs with reusable components requesting data subsets. GraphQL eliminates the need to create custom endpoints for each view, reducing coordination between frontend and backend.</p><p>It's ideal for <strong>backend for frontend (BFF)</strong>: an intermediate layer aggregating multiple REST microservices into a unified GraphQL schema. Tools like Apollo Federation allow multiple teams to define partial schemas that compose automatically. This scales better than maintaining dozens of custom REST endpoints.</p><p>GraphQL shines in <strong>real-time apps</strong> thanks to subscriptions: live sports, trading platforms, collaborative editors. Also in APIs with <strong>deep relationships</strong>: social networks (posts → comments → replies → users), e-commerce (products → variants → inventory → suppliers), CMS (articles → authors → categories → tags).</p><p>Avoid GraphQL if your API is simple CRUD without complex relationships; REST is more straightforward. Also not if you need <strong>aggressive HTTP caching</strong> (CDNs, proxies): GraphQL requires custom configuration. And beware of <strong>expensive queries</strong>: without rate limiting or complexity analysis, a client can write queries fetching gigabytes of data or executing thousands of DB queries (N+1 problem in poorly designed resolvers).</p>"
      },
      {
        "title": "GraphQL vs REST and best practices",
        "content": "<p><strong>GraphQL</strong> eliminates over/under-fetching, reduces requests, and enables interactive exploration (GraphiQL). <strong>REST</strong> is simpler, cacheable, and doesn't require a client library. Many companies use <strong>both</strong>: REST for public APIs (more compatible, better cache), GraphQL for internal clients (more efficient, less coordination).</p><p><strong>Best practices</strong>: design the schema thinking about the <strong>client</strong>, not your DB. Avoid exposing tables directly; create high-level types (<code>User</code>, <code>Order</code>) with computed fields (<code>fullName</code>, <code>totalPrice</code>). Use <strong>DataLoader</strong> to avoid N+1: batch DB queries. Implement <strong>pagination</strong>: connections with <code>edges</code>, <code>cursor</code>, <code>pageInfo</code> (Relay standard).</p><p>Limit <strong>query complexity</strong>: analyze depth (max 5-7 levels), node count, or assign costs to fields and reject queries over a threshold. Use <strong>persisted queries</strong> in production: the client sends a hash, not the full query, avoiding injections and enabling HTTP cache with GET.</p><p>Versioning: GraphQL prefers <strong>evolution</strong> over versioning. You add new fields without breaking; deprecate old ones with <code>@deprecated</code>, and remove them when nobody uses them (trackable with Apollo Studio). Document with <code>description</code> in the schema; tools display it automatically. And monitor: Apollo, Hasura, GraphQL Yoga have metrics for slow queries, errors, and field usage.</p>"
      }
    ],
    "examples": [
      "query { user(id: 42) { name email posts { title createdAt } } }",
      "mutation { createPost(title: \"Hello\", body: \"World\") { id createdAt } }",
      "subscription { postCreated { id title author { name } } }",
      "query GetUser($id: ID!) { user(id: $id) { name posts(first: 10) { edges { node { title } } } } }",
      "{ users { id name } posts: allPosts { title } }"
    ],
    "related": [
      "graphql-query-sample",
      "rest-api-endpoint-builder"
    ],
    "faq": [
      {
        "q": "Does GraphQL replace REST?",
        "a": "Not necessarily. GraphQL solves specific problems (over-fetching, multiple requests, flexibility). REST is still better for simple public APIs, HTTP cache, and when you don't need complex queries. Many companies use both depending on the case."
      },
      {
        "q": "How do I handle authentication in GraphQL?",
        "a": "Same as REST: send a token (JWT, OAuth) in the Authorization header. Resolvers verify permissions before returning data. Libraries like graphql-shield allow defining declarative authorization rules at field or type level."
      },
      {
        "q": "What is the N+1 problem and how do I solve it?",
        "a": "If a query requests users and their posts, without batching you'd do 1 query for users + N queries (one per user) for posts. DataLoader groups the N queries into one: SELECT * FROM posts WHERE user_id IN (...). It's essential in GraphQL; without DataLoader, nested queries are slow."
      }
    ]
  }
};
