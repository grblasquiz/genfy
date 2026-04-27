import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-factories-testing",
    "en": "test-factory-generator"
  },
  "category": "data",
  "emoji": "🏭",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Factories para Testing | Genfy",
    "metaDesc": "Creá factories de test rápidamente con patrones probados. Acelera tu suite de testing con objetos mock realistas y consistentes.",
    "h1": "Generador de Factories para Testing",
    "intro": "Armá factories de test robustas en segundos. Patrones probados para Jest, Mocha, PHPUnit y más frameworks, con datos consistentes que tus tests necesitan.",
    "tag": "Datos",
    "filterLabel": "Framework/Patrón",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "framework",
        "label": "Framework",
        "items": [
          "Jest Factory Bot",
          "Factory Boy (Python)",
          "FactoryGirl (Ruby)",
          "Faker.js Builder",
          "PHPUnit DataProvider",
          "NBuilder (.NET)",
          "AutoFixture",
          "Bogus (.NET)",
          "Trait-based Factory",
          "Fixture Monkey (Java)",
          "TestContainers Builder",
          "Object Mother Pattern",
          "Builder Pattern",
          "Rosie.js",
          "Fishery (TypeScript)",
          "Factory.ts",
          "Test Data Builder",
          "Fluent Builder",
          "Anonymous Builder",
          "Fixture Factory (Go)",
          "Datafaker (Java)",
          "Casual.js",
          "Chance.js Factory",
          "Fabricator (Scala)",
          "Mockaroo Builder"
        ]
      },
      {
        "id": "entity_type",
        "label": "Tipo de Entidad",
        "items": [
          "User con roles",
          "Order completa",
          "Product con variantes",
          "Payment con estado",
          "Customer con historial",
          "Invoice con líneas",
          "Subscription activa",
          "Address normalizada",
          "Company con empleados",
          "Project con tareas",
          "API Response mock",
          "Database Record",
          "GraphQL Node",
          "REST Resource",
          "Event payload",
          "Email con attachments",
          "Notification con destinatarios",
          "Cart con items",
          "Review con rating",
          "Comment thread",
          "File upload mock",
          "Session con tokens",
          "Webhook payload",
          "Analytics event",
          "Log entry estructurado",
          "Configuration object",
          "Permission set",
          "OAuth token response",
          "JWT payload",
          "Form submission data",
          "Search result set",
          "Pagination metadata",
          "Error response",
          "Audit trail entry",
          "Metric snapshot"
        ]
      },
      {
        "id": "state",
        "label": "Estado/Trait",
        "items": [
          "con datos mínimos",
          "completamente poblado",
          "con relaciones cargadas",
          "con timestamps realistas",
          "estado pending",
          "estado completed",
          "estado failed",
          "con errores de validación",
          "soft deleted",
          "archived",
          "con audit trail",
          "con versiones",
          "transient (no persistido)",
          "persisted en DB",
          "con ID autogenerado",
          "con UUID",
          "con fechas futuras",
          "con fechas pasadas",
          "con nested objects",
          "con arrays vacíos",
          "con nulls opcionales",
          "con valores default",
          "con override manual",
          "con secuencias numéricas",
          "con locale específico",
          "con timezone UTC",
          "con enum values",
          "con flags booleanos",
          "con metadata JSON",
          "con relaciones circulares evitadas"
        ]
      },
      {
        "id": "strategy",
        "label": "Estrategia de Datos",
        "items": [
          "faker determinista con seed",
          "valores hardcoded",
          "secuencia incremental",
          "random pero válido",
          "edge cases extremos",
          "datos de producción anonimizados",
          "fixtures precargados",
          "lazy attributes",
          "computed properties",
          "dependent attributes",
          "transient params",
          "callbacks after build",
          "hooks before create",
          "custom generators",
          "snapshot testing ready",
          "JSON schema compliant",
          "con invariantes garantizados",
          "idempotente entre runs",
          "con cleanup automático",
          "thread-safe",
          "con pool de instancias",
          "singleton cuando corresponde",
          "prototype cloning",
          "deep copy recursivo",
          "shallow merge"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué usar factories en lugar de fixtures estáticos",
        "body": "<p>Los fixtures hardcoded generan acoplamiento brutal: cambias un campo de User y rompes 47 tests. Las factories generan datos <strong>bajo demanda</strong> con valores razonables por default y override quirúrgico donde importa. Un test de login solo necesita email/password válidos; el resto (createdAt, address, preferencias) puede ser ruido faker. Tres ventajas clave: <strong>1)</strong> Tests aislados sin dependencias de orden, <strong>2)</strong> Setup explícito de lo relevante (user.withRole('admin')), <strong>3)</strong> Mantenimiento centralizado cuando el schema evoluciona.</p><p>Factory Boy de Python y FactoryBot de Ruby popularizaron el patrón. En JS, libraries como Fishery (TypeScript-first) o Rosie te dan DSLs fluidos. El secret está en los <strong>traits</strong>: en vez de copypastear userFactory() 20 veces con tweaks, definís .pending(), .verified(), .suspended() y componés. PHPUnit no tiene factory nativa, pero DataProviders + builders custom funcionan igual.</p><p>Errores comunes: llenar factories con lógica de negocio (eso va en la entidad), generar IDs que colisionan (usá sequences o UUIDs), y no limpiar side-effects (si la factory persiste, tu tearDown debe borrar).</p>"
      },
      {
        "h2": "Anatomía de una factory bien diseñada",
        "body": "<p>Estructura típica: <strong>defaults sensatos</strong> (faker para nombres, enums válidos, foreign keys null-safe), <strong>traits componibles</strong> (withOrders, expired, premium), <strong>lazy evaluation</strong> (createdAt se resuelve al momento de build, no al definir la factory), y <strong>hooks</strong> (afterBuild para cálculos derivados, afterCreate para llamadas a API externas si es integration test).</p><p>Ejemplo en TypeScript con Fishery:</p><pre>const userFactory = Factory.define&lt;User&gt;(({ sequence, afterBuild }) => ({\n  id: sequence,\n  email: faker.internet.email(),\n  role: 'user',\n  createdAt: new Date()\n})).trait('admin', { role: 'admin' });</pre><p>Ahora <code>userFactory.admin().build()</code> te da un admin, y <code>.build({ email: 'test@foo.com' })</code> hace override quirúrgico. El sequence garantiza IDs únicos por test run.</p><p>Para relaciones: <strong>lazy attributes</strong>. Si Order tiene customerId, la factory de Order puede recibir un customer opcional o generar uno default con customerFactory.build(). Así evitas explosion combinatoria de fixtures.</p>"
      },
      {
        "h2": "Factories para APIs y mocks de red",
        "body": "<p>Testing de frontends o integraciones con APIs implica mockear responses HTTP. Factories aca brillan: definís responseFactory con status 200, headers default, body según schema OpenAPI/GraphQL. Traits para errores: .notFound(), .serverError(), .rateLimited().</p><p>Libraries como MSW (Mock Service Workers) se integran perfecto: interceptas fetch(), devolvés <code>responseFactory.success({ data: userFactory.buildList(5) })</code>. Tus tests quedan semánticos: 'when API returns empty list' usa <code>.build({ data: [] })</code>; 'when user is banned' usa <code>userFactory.banned()</code>.</p><p>Caso real: GraphQL con nodos paginados. Tu factory genera edges con cursor, pageInfo con hasNextPage calculado, y nodes con el schema correcto. Snapshots de Jest validan la forma; factories te dan <strong>variedad</strong> (página vacía, un item, página llena, error parcial).</p><p>Truco pro: exporta factories desde <code>__tests__/factories</code> para reuso cross-suite. Un userFactory usado en 30 archivos es mejor que 30 copias levemente distintas.</p>"
      },
      {
        "h2": "Seeders deterministas y tests no-flaky",
        "body": "<p>Faker random causa flakiness: un test pasa con 'John Doe' pero falla con 'X Æ A-12' porque tu validador regex rompe. Solución: <strong>seed fijo</strong> por test. En beforeEach: <code>faker.seed(12345)</code>. Ahora cada run genera la misma secuencia pseudoaleatoria. CI y local dan idénticos resultados.</p><p>Alternativa: valores hardcoded para campos sensibles (email siempre 'test@example.com'), faker solo para relleno cosmético (bio, avatar URL). Algunos equipos usan <strong>snapshot factories</strong>: la primera corrida genera JSON fixtures, commits siguientes los reusan (package <code>jest-serializer-factory</code>).</p><p>Para tests de integración que tocan DB real, las factories deben hacer cleanup. En Jest: <code>afterEach(async () => { await cleanupUsers(createdIds); })</code>. Track IDs generados en un Set, borrá todo al final. TestContainers + factories = paraíso: cada test tiene su Postgres efímero, factories populan, test corre, container muere.</p><p>Edge cases: factories de dates. Si tu lógica depende de 'hace 3 días', usa <code>subDays(new Date(), 3)</code> en la factory, no un timestamp hardcoded que quedará obsoleto. Lo mismo timezone: factories deben generar UTC o el TZ de tu app, nunca mezclar.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Factories van en src/ o tests/?",
        "a": "En tests/ o __tests__/factories/. Son código de testing, no de producción. Algunos proyectos los exportan en un package @myapp/test-utils si hay múltiples repos."
      },
      {
        "q": "¿Puedo usar factories en integration tests con DB real?",
        "a": "Sí, pero asegurate de hacer cleanup (afterEach) y usar transactions o contenedores efímeros para evitar side-effects entre tests."
      },
      {
        "q": "¿Qué hago si mi entidad tiene 40 campos?",
        "a": "Define defaults razonables para todos, expone solo los relevantes con traits. La mayoría de tests no necesita override de 40 campos, solo 2-3 clave."
      },
      {
        "q": "¿Factories son solo para unit tests?",
        "a": "No, son geniales para integration, E2E (seedear DB de staging), y hasta demos/storybook. Cualquier lugar que necesite datos consistentes."
      }
    ]
  },
  "en": {
    "pageTitle": "Test Factory Generator | Genfy",
    "metaDesc": "Generate test factories fast with battle-tested patterns. Speed up your test suite with realistic, consistent mock objects.",
    "h1": "Test Factory Generator",
    "intro": "Build robust test factories in seconds. Proven patterns for Jest, Mocha, PHPUnit and more, with consistent data your tests actually need.",
    "tag": "Data",
    "filterLabel": "Framework/Pattern",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "framework",
        "label": "Framework",
        "items": [
          "Jest Factory Bot",
          "Factory Boy (Python)",
          "FactoryGirl (Ruby)",
          "Faker.js Builder",
          "PHPUnit DataProvider",
          "NBuilder (.NET)",
          "AutoFixture",
          "Bogus (.NET)",
          "Trait-based Factory",
          "Fixture Monkey (Java)",
          "TestContainers Builder",
          "Object Mother Pattern",
          "Builder Pattern",
          "Rosie.js",
          "Fishery (TypeScript)",
          "Factory.ts",
          "Test Data Builder",
          "Fluent Builder",
          "Anonymous Builder",
          "Fixture Factory (Go)",
          "Datafaker (Java)",
          "Casual.js",
          "Chance.js Factory",
          "Fabricator (Scala)",
          "Mockaroo Builder"
        ]
      },
      {
        "id": "entity_type",
        "label": "Entity Type",
        "items": [
          "User with roles",
          "Complete Order",
          "Product with variants",
          "Payment with state",
          "Customer with history",
          "Invoice with line items",
          "Active Subscription",
          "Normalized Address",
          "Company with employees",
          "Project with tasks",
          "API Response mock",
          "Database Record",
          "GraphQL Node",
          "REST Resource",
          "Event payload",
          "Email with attachments",
          "Notification with recipients",
          "Cart with items",
          "Review with rating",
          "Comment thread",
          "File upload mock",
          "Session with tokens",
          "Webhook payload",
          "Analytics event",
          "Structured log entry",
          "Configuration object",
          "Permission set",
          "OAuth token response",
          "JWT payload",
          "Form submission data",
          "Search result set",
          "Pagination metadata",
          "Error response",
          "Audit trail entry",
          "Metric snapshot"
        ]
      },
      {
        "id": "state",
        "label": "State/Trait",
        "items": [
          "with minimal data",
          "fully populated",
          "with loaded relations",
          "realistic timestamps",
          "pending state",
          "completed state",
          "failed state",
          "with validation errors",
          "soft deleted",
          "archived",
          "with audit trail",
          "with versions",
          "transient (not persisted)",
          "persisted in DB",
          "with auto-generated ID",
          "with UUID",
          "with future dates",
          "with past dates",
          "with nested objects",
          "with empty arrays",
          "with optional nulls",
          "with default values",
          "with manual override",
          "with numeric sequences",
          "with specific locale",
          "with UTC timezone",
          "with enum values",
          "with boolean flags",
          "with JSON metadata",
          "avoiding circular refs"
        ]
      },
      {
        "id": "strategy",
        "label": "Data Strategy",
        "items": [
          "deterministic faker with seed",
          "hardcoded values",
          "incremental sequence",
          "random but valid",
          "extreme edge cases",
          "anonymized production data",
          "preloaded fixtures",
          "lazy attributes",
          "computed properties",
          "dependent attributes",
          "transient params",
          "callbacks after build",
          "hooks before create",
          "custom generators",
          "snapshot testing ready",
          "JSON schema compliant",
          "guaranteed invariants",
          "idempotent across runs",
          "automatic cleanup",
          "thread-safe",
          "with instance pool",
          "singleton when appropriate",
          "prototype cloning",
          "recursive deep copy",
          "shallow merge"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why factories beat static fixtures",
        "body": "<p>Hardcoded fixtures create brutal coupling: change one User field and 47 tests break. Factories generate data <strong>on demand</strong> with sensible defaults and surgical overrides where it matters. A login test only needs valid email/password; the rest (createdAt, address, preferences) can be faker noise. Three key wins: <strong>1)</strong> Isolated tests without order dependencies, <strong>2)</strong> Explicit setup of what's relevant (user.withRole('admin')), <strong>3)</strong> Centralized maintenance when schema evolves.</p><p>Python's Factory Boy and Ruby's FactoryBot popularized the pattern. In JS, libraries like Fishery (TypeScript-first) or Rosie give you fluent DSLs. The secret is <strong>traits</strong>: instead of copy-pasting userFactory() 20 times with tweaks, define .pending(), .verified(), .suspended() and compose. PHPUnit has no native factory but DataProviders + custom builders work the same.</p><p>Common mistakes: stuffing business logic into factories (that belongs in the entity), generating colliding IDs (use sequences or UUIDs), and not cleaning up side-effects (if factory persists, your tearDown must delete).</p>"
      },
      {
        "h2": "Anatomy of a well-designed factory",
        "body": "<p>Typical structure: <strong>sensible defaults</strong> (faker for names, valid enums, null-safe foreign keys), <strong>composable traits</strong> (withOrders, expired, premium), <strong>lazy evaluation</strong> (createdAt resolves at build time, not at factory definition), and <strong>hooks</strong> (afterBuild for derived calculations, afterCreate for external API calls in integration tests).</p><p>TypeScript example with Fishery:</p><pre>const userFactory = Factory.define&lt;User&gt;(({ sequence, afterBuild }) => ({\n  id: sequence,\n  email: faker.internet.email(),\n  role: 'user',\n  createdAt: new Date()\n})).trait('admin', { role: 'admin' });</pre><p>Now <code>userFactory.admin().build()</code> gives you an admin, and <code>.build({ email: 'test@foo.com' })</code> does surgical override. The sequence guarantees unique IDs per test run.</p><p>For relationships: <strong>lazy attributes</strong>. If Order has customerId, the Order factory can receive optional customer or generate a default with customerFactory.build(). Avoids combinatorial explosion of fixtures.</p>"
      },
      {
        "h2": "Factories for APIs and network mocks",
        "body": "<p>Testing frontends or API integrations means mocking HTTP responses. Factories shine here: define responseFactory with status 200, default headers, body matching OpenAPI/GraphQL schema. Traits for errors: .notFound(), .serverError(), .rateLimited().</p><p>Libraries like MSW (Mock Service Workers) integrate perfectly: intercept fetch(), return <code>responseFactory.success({ data: userFactory.buildList(5) })</code>. Your tests stay semantic: 'when API returns empty list' uses <code>.build({ data: [] })</code>; 'when user is banned' uses <code>userFactory.banned()</code>.</p><p>Real case: GraphQL with paginated nodes. Your factory generates edges with cursor, pageInfo with calculated hasNextPage, and nodes matching schema. Jest snapshots validate shape; factories give you <strong>variety</strong> (empty page, one item, full page, partial error).</p><p>Pro trick: export factories from <code>__tests__/factories</code> for cross-suite reuse. One userFactory used in 30 files beats 30 slightly different copies.</p>"
      },
      {
        "h2": "Deterministic seeders and non-flaky tests",
        "body": "<p>Random faker causes flakiness: test passes with 'John Doe' but fails with 'X Æ A-12' because your regex validator breaks. Solution: <strong>fixed seed</strong> per test. In beforeEach: <code>faker.seed(12345)</code>. Now each run generates the same pseudorandom sequence. CI and local give identical results.</p><p>Alternative: hardcoded values for sensitive fields (email always 'test@example.com'), faker only for cosmetic filler (bio, avatar URL). Some teams use <strong>snapshot factories</strong>: first run generates JSON fixtures, following commits reuse them (package <code>jest-serializer-factory</code>).</p><p>For integration tests hitting real DB, factories must do cleanup. In Jest: <code>afterEach(async () => { await cleanupUsers(createdIds); })</code>. Track generated IDs in a Set, delete everything at the end. TestContainers + factories = paradise: each test gets ephemeral Postgres, factories populate, test runs, container dies.</p><p>Edge cases: date factories. If your logic depends on '3 days ago', use <code>subDays(new Date(), 3)</code> in factory, not a hardcoded timestamp that'll become stale. Same with timezone: factories should generate UTC or your app's TZ, never mix.</p>"
      }
    ],
    "faq": [
      {
        "q": "Do factories go in src/ or tests/?",
        "a": "In tests/ or __tests__/factories/. They're testing code, not production. Some projects export them in a @myapp/test-utils package if multiple repos exist."
      },
      {
        "q": "Can I use factories in integration tests with real DB?",
        "a": "Yes, but ensure cleanup (afterEach) and use transactions or ephemeral containers to avoid side-effects between tests."
      },
      {
        "q": "What if my entity has 40 fields?",
        "a": "Define sensible defaults for all, expose only relevant ones with traits. Most tests don't need to override 40 fields, just 2-3 key ones."
      },
      {
        "q": "Are factories only for unit tests?",
        "a": "No, they're great for integration, E2E (seeding staging DB), and even demos/storybook. Anywhere you need consistent data."
      }
    ]
  }
};
