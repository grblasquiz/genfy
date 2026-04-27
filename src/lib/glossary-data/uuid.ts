import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "uuid",
    "en": "uuid"
  },
  "emoji": "🆔",
  "category": "tech",
  "es": {
    "pageTitle": "UUID — Glosario | Genfy",
    "metaDesc": "UUID es un identificador único universal de 128 bits con probabilidad despreciable de colisión. Conocé las versiones v4 (random) y v7 (time-sortable).",
    "h1": "UUID",
    "short": "UUID (Universally Unique Identifier) es un identificador de 128 bits diseñado para ser único sin necesidad de coordinación central. Con 5.3 × 10^36 combinaciones posibles, la probabilidad de colisión es tan baja que podés generar millones de UUIDs por segundo durante siglos sin duplicados.",
    "body": [
      {
        "title": "¿Qué es un UUID?",
        "content": "<p>Un UUID es un identificador de 128 bits (16 bytes) representado generalmente como 32 dígitos hexadecimales separados por guiones: <code>550e8400-e29b-41d4-a716-446655440000</code>. La idea es que cualquier sistema pueda generar identificadores únicos sin consultar una base de datos central o coordinar con otros sistemas.</p><p>Esto lo hace ideal para <strong>sistemas distribuidos</strong>, donde múltiples servidores, clientes o procesos necesitan crear IDs sin riesgo de colisión. A diferencia de un auto-increment de SQL, un UUID puede generarse en el cliente, en un worker, en un microservicio o en cualquier lugar, y seguirá siendo único.</p><p>Existen varias versiones de UUID (v1, v3, v4, v5, v6, v7), cada una con diferentes métodos de generación. Las más comunes hoy son <strong>UUID v4</strong> (completamente aleatorio) y <strong>UUID v7</strong> (ordenable por tiempo de creación, útil para bases de datos).</p>"
      },
      {
        "title": "Cómo funcionan los UUIDs",
        "content": "<p>La estructura de un UUID de 128 bits se divide en secciones que indican versión y variante:</p><ul><li><strong>Version (4 bits)</strong>: indica el método de generación (v4 = aleatorio, v7 = timestamp-based).</li><li><strong>Variant (2-3 bits)</strong>: identifica el estándar (RFC 4122).</li><li><strong>Resto</strong>: depende de la versión. En v4 son bits aleatorios; en v7 incluye timestamp Unix con precisión de milisegundos.</li></ul><p><strong>UUID v4</strong> usa un generador de números aleatorios criptográficamente seguro (CSPRNG). Con 122 bits de aleatoriedad, necesitarías generar 2.71 quintillones de UUIDs para tener un 50% de probabilidad de colisión (paradoja del cumpleaños).</p><p><strong>UUID v7</strong> ordena por tiempo de creación, resolviendo el problema de performance de v4 en índices de bases de datos. Los primeros 48 bits son el timestamp Unix en milisegundos, seguidos de bits aleatorios para garantizar unicidad si se generan múltiples UUIDs en el mismo milisegundo.</p>"
      },
      {
        "title": "Cuándo usar UUIDs",
        "content": "<p>Los UUIDs son ideales cuando:</p><ul><li><strong>Generación distribuida</strong>: múltiples clientes o servidores crean registros sin coordinación central.</li><li><strong>Privacidad</strong>: a diferencia de IDs secuenciales, un UUID no revela información sobre cantidad de registros o momento de creación (excepto v7).</li><li><strong>Merge de bases de datos</strong>: al combinar datos de diferentes sistemas, los UUIDs garantizan que no hay conflictos de IDs.</li><li><strong>APIs públicas</strong>: evitás que usuarios enumeren recursos (GET /users/1, /users/2...) probando IDs consecutivos.</li></ul><p>Consideraciones: los UUIDs ocupan más espacio (16 bytes vs 4-8 de un integer) y son más lentos de indexar si no son ordenables. <strong>UUID v7</strong> soluciona esto siendo compatible con índices B-tree eficientes.</p>"
      },
      {
        "title": "UUID v4 vs v7: ¿cuál usar?",
        "content": "<p>La elección entre v4 y v7 depende de tu caso de uso:</p><p><strong>UUID v4</strong> (aleatorio):</p><ul><li>✅ Máxima privacidad: no revela información temporal.</li><li>✅ Más simple de implementar.</li><li>❌ Pobre performance en índices de DB (fragmentación).</li><li>❌ No ordenable por tiempo de creación.</li></ul><p><strong>UUID v7</strong> (timestamp-sortable):</p><ul><li>✅ Excelente performance en índices B-tree de Postgres/MySQL.</li><li>✅ Ordenable cronológicamente sin columna created_at separada.</li><li>✅ Reduce fragmentación de páginas en disco.</li><li>❌ Revela timestamp de creación con precisión de milisegundos.</li></ul><p>Recomendación: usá <strong>v7 como default</strong> para IDs de base de datos primarios, y <strong>v4 para tokens públicos</strong> donde no querés revelar orden temporal.</p>"
      }
    ],
    "examples": [
      "UUID v4: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d (completamente aleatorio)",
      "UUID v7: 018e8c4e-1a2b-7c3d-8e4f-9a0b1c2d3e4f (ordenable por timestamp)",
      "Postgres: CREATE TABLE users (id UUID PRIMARY KEY DEFAULT gen_random_uuid());"
    ],
    "related": [
      "generador-de-uuid",
      "generador-de-strings-aleatorios"
    ],
    "faq": [
      {
        "q": "¿Puede haber colisión entre UUIDs?",
        "a": "Teóricamente sí, pero con probabilidad astronómicamente baja. En UUID v4 necesitarías generar 2.71 × 10^18 UUIDs para tener 50% de chance de una colisión. En la práctica es imposible."
      },
      {
        "q": "¿Los UUIDs son más lentos que integers en bases de datos?",
        "a": "UUID v4 sí, por fragmentación de índices. UUID v7 resuelve esto siendo ordenable, logrando performance similar a BIGSERIAL en Postgres con las ventajas de generación distribuida."
      },
      {
        "q": "¿Puedo usar UUIDs como tokens de autenticación?",
        "a": "Técnicamente sí, pero no es recomendado. Para tokens de sesión o API keys usá generadores específicos con más entropía (256+ bits) y considera agregar un prefijo para identificar tipo de token."
      }
    ]
  },
  "en": {
    "pageTitle": "UUID — Glossary | Genfy",
    "metaDesc": "UUID is a universally unique 128-bit identifier with negligible collision probability. Learn about v4 (random) and v7 (time-sortable) versions.",
    "h1": "UUID",
    "short": "UUID (Universally Unique Identifier) is a 128-bit identifier designed to be unique without central coordination. With 5.3 × 10^36 possible combinations, the collision probability is so low that you can generate millions of UUIDs per second for centuries without duplicates.",
    "body": [
      {
        "title": "What is a UUID?",
        "content": "<p>A UUID is a 128-bit (16-byte) identifier typically represented as 32 hexadecimal digits separated by hyphens: <code>550e8400-e29b-41d4-a716-446655440000</code>. The idea is that any system can generate unique identifiers without consulting a central database or coordinating with other systems.</p><p>This makes it ideal for <strong>distributed systems</strong>, where multiple servers, clients, or processes need to create IDs without collision risk. Unlike a SQL auto-increment, a UUID can be generated on the client, in a worker, in a microservice, or anywhere, and it will still be unique.</p><p>There are several UUID versions (v1, v3, v4, v5, v6, v7), each with different generation methods. The most common today are <strong>UUID v4</strong> (completely random) and <strong>UUID v7</strong> (time-sortable, useful for databases).</p>"
      },
      {
        "title": "How UUIDs work",
        "content": "<p>The structure of a 128-bit UUID is divided into sections indicating version and variant:</p><ul><li><strong>Version (4 bits)</strong>: indicates the generation method (v4 = random, v7 = timestamp-based).</li><li><strong>Variant (2-3 bits)</strong>: identifies the standard (RFC 4122).</li><li><strong>Rest</strong>: depends on version. In v4 they are random bits; in v7 includes Unix timestamp with millisecond precision.</li></ul><p><strong>UUID v4</strong> uses a cryptographically secure random number generator (CSPRNG). With 122 bits of randomness, you would need to generate 2.71 quintillion UUIDs to have a 50% collision probability (birthday paradox).</p><p><strong>UUID v7</strong> sorts by creation time, solving v4's performance problem in database indexes. The first 48 bits are the Unix timestamp in milliseconds, followed by random bits to guarantee uniqueness if multiple UUIDs are generated in the same millisecond.</p>"
      },
      {
        "title": "When to use UUIDs",
        "content": "<p>UUIDs are ideal when:</p><ul><li><strong>Distributed generation</strong>: multiple clients or servers create records without central coordination.</li><li><strong>Privacy</strong>: unlike sequential IDs, a UUID doesn't reveal information about record count or creation time (except v7).</li><li><strong>Database merging</strong>: when combining data from different systems, UUIDs guarantee no ID conflicts.</li><li><strong>Public APIs</strong>: prevents users from enumerating resources (GET /users/1, /users/2...) by trying consecutive IDs.</li></ul><p>Considerations: UUIDs take more space (16 bytes vs 4-8 for an integer) and are slower to index if not sortable. <strong>UUID v7</strong> solves this by being compatible with efficient B-tree indexes.</p>"
      },
      {
        "title": "UUID v4 vs v7: which to use?",
        "content": "<p>The choice between v4 and v7 depends on your use case:</p><p><strong>UUID v4</strong> (random):</p><ul><li>✅ Maximum privacy: doesn't reveal temporal information.</li><li>✅ Simpler to implement.</li><li>❌ Poor DB index performance (fragmentation).</li><li>❌ Not sortable by creation time.</li></ul><p><strong>UUID v7</strong> (timestamp-sortable):</p><ul><li>✅ Excellent performance in Postgres/MySQL B-tree indexes.</li><li>✅ Chronologically sortable without separate created_at column.</li><li>✅ Reduces disk page fragmentation.</li><li>❌ Reveals creation timestamp with millisecond precision.</li></ul><p>Recommendation: use <strong>v7 as default</strong> for primary database IDs, and <strong>v4 for public tokens</strong> where you don't want to reveal temporal order.</p>"
      }
    ],
    "examples": [
      "UUID v4: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d (completely random)",
      "UUID v7: 018e8c4e-1a2b-7c3d-8e4f-9a0b1c2d3e4f (timestamp-sortable)",
      "Postgres: CREATE TABLE users (id UUID PRIMARY KEY DEFAULT gen_random_uuid());"
    ],
    "related": [
      "uuid-generator",
      "random-string-generator"
    ],
    "faq": [
      {
        "q": "Can UUIDs collide?",
        "a": "Theoretically yes, but with astronomically low probability. In UUID v4 you would need to generate 2.71 × 10^18 UUIDs to have a 50% chance of collision. In practice it's impossible."
      },
      {
        "q": "Are UUIDs slower than integers in databases?",
        "a": "UUID v4 yes, due to index fragmentation. UUID v7 solves this by being sortable, achieving similar performance to BIGSERIAL in Postgres with the advantages of distributed generation."
      },
      {
        "q": "Can I use UUIDs as authentication tokens?",
        "a": "Technically yes, but not recommended. For session tokens or API keys use specific generators with more entropy (256+ bits) and consider adding a prefix to identify token type."
      }
    ]
  }
};
