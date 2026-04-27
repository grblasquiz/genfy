import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "json-schema",
    "en": "json-schema"
  },
  "emoji": "📐",
  "category": "tech",
  "es": {
    "pageTitle": "JSON Schema — Glosario | Genfy",
    "metaDesc": "JSON Schema es una especificación que describe la estructura, tipos y restricciones de datos JSON. Aprende cómo validar APIs REST y documentar contratos.",
    "h1": "JSON Schema",
    "short": "JSON Schema es una especificación formal que describe la estructura esperada de un objeto JSON: qué propiedades existen, qué tipos de dato contienen, cuáles son obligatorias y qué restricciones deben cumplir. Se usa masivamente para validar peticiones y respuestas en APIs REST, generar documentación automática y asegurar contratos entre frontend y backend.",
    "body": [
      {
        "title": "¿Qué es JSON Schema?",
        "content": "<p>JSON Schema es un vocabulario estandarizado (draft-07, draft 2020-12) que permite definir <strong>la forma y contenido esperado de un JSON</strong>. Es, en esencia, un contrato legible por máquinas que describe qué propiedades tiene un objeto, si son obligatorias (<code>required</code>), qué tipo de dato contienen (<code>string</code>, <code>number</code>, <code>boolean</code>, <code>array</code>, <code>object</code>), y restricciones adicionales como longitud mínima, expresiones regulares, valores permitidos (<code>enum</code>), o rangos numéricos.</p><p>Su popularidad creció con el auge de las <strong>APIs REST</strong> y la especificación <strong>OpenAPI</strong> (Swagger), que usa JSON Schema para documentar modelos de datos. Frameworks como <code>express-validator</code>, <code>ajv</code> (el validador más rápido de Node.js) y herramientas de generación de código dependen de schemas para verificar entradas sin escribir validaciones a mano.</p><p>JSON Schema no solo valida: también sirve para <strong>generar formularios automáticos</strong> (react-jsonschema-form), mockear datos realistas, y producir tests de integración. Es el estándar de facto para describir estructuras JSON en ecosistemas modernos.</p>"
      },
      {
        "title": "¿Cómo funciona JSON Schema?",
        "content": "<p>Un JSON Schema es, irónicamente, <strong>otro JSON</strong> que describe las reglas. Empieza con <code>$schema</code> para declarar la versión del estándar, seguido de <code>type</code> (el tipo raíz, generalmente <code>object</code>), <code>properties</code> (las claves esperadas), y <code>required</code> (array de nombres obligatorios).</p><p>Cada propiedad puede tener su propio <code>type</code>, <code>format</code> (como <code>email</code>, <code>uuid</code>, <code>date-time</code>), restricciones numéricas (<code>minimum</code>, <code>maximum</code>), de longitud (<code>minLength</code>, <code>maxLength</code>), patrones regex (<code>pattern</code>), o valores fijos (<code>const</code>, <code>enum</code>). Los arrays se describen con <code>items</code> (schema de cada elemento) y pueden tener <code>minItems</code>, <code>maxItems</code>, <code>uniqueItems</code>.</p><p>Para objetos anidados, repetís la estructura. JSON Schema soporta <strong>composición</strong>: <code>allOf</code> (todas las condiciones), <code>anyOf</code> (al menos una), <code>oneOf</code> (exactamente una), y <code>not</code> (niega un schema). También permite <code>$ref</code> para reutilizar definiciones y evitar duplicación.</p><p>La validación sucede en runtime: pasás el JSON entrante y el schema a una librería como <code>ajv</code> o <code>joi</code>, que devuelve <code>true/false</code> más un array de errores detallados. Estos errores incluyen <code>dataPath</code> (dónde falló) y <code>message</code> (qué restricción se violó).</p>"
      },
      {
        "title": "¿Cuándo usar JSON Schema?",
        "content": "<p>Usá JSON Schema siempre que necesites <strong>validar datos externos</strong> en una API REST o GraphQL: peticiones de clientes, webhooks, configuraciones JSON. Es crítico en microservicios donde distintos equipos consumen el mismo contrato; el schema actúa como documentación viva y prueba de compatibilidad.</p><p>Es indispensable en <strong>OpenAPI</strong>: cada endpoint declara sus <code>requestBody</code> y <code>responses</code> con schemas, permitiendo herramientas como Postman, Insomnia o Swagger UI generar ejemplos automáticos, validadores cliente, y SDKs. También es útil en <strong>pipelines CI/CD</strong>: validás archivos de configuración (Kubernetes manifests, Terraform) contra schemas antes de deployar.</p><p>En frontend, librerías como <code>react-jsonschema-form</code> generan formularios completos a partir de un schema, con validación incluida. En testing, herramientas como <code>json-schema-faker</code> producen datos mock válidos, acelerando la escritura de tests de integración.</p><p>Evitá JSON Schema para lógica de negocio compleja (validaciones que dependen de múltiples recursos, reglas condicionales con side-effects). Para eso, escribí validadores custom. Tampoco lo uses para datos binarios o streams; JSON Schema se limita a estructuras JSON puras.</p>"
      },
      {
        "title": "Errores frecuentes y buenas prácticas",
        "content": "<p>El error más común es <strong>schemas demasiado permisivos</strong>: olvidar <code>required</code>, no definir <code>additionalProperties: false</code> (permite claves extra por defecto), o usar <code>type</code> sin restricciones de formato. Esto deja pasar datos inválidos que rompen lógica downstream.</p><p>Otro problema: <strong>no versionar schemas</strong>. Cuando cambiás un schema en producción (agregás un campo obligatorio, cambiás un tipo), clientes viejos fallan. Usá versionado semántico en <code>$id</code>, y mantené compatibilidad hacia atrás: hacé campos nuevos opcionales, o usá <code>oneOf</code> para soportar dos formatos durante la transición.</p><p><strong>Buena práctica</strong>: definí schemas reutilizables con <code>$defs</code> (draft 2020-12) o <code>definitions</code> (draft-07) y referenciá con <code>$ref</code>. Esto evita duplicación y facilita cambios. Validá en el <strong>edge</strong> (API gateway, middleware de entrada), no en capas internas; fallá rápido con errores 400 claros.</p><p>Usá <code>format</code> para tipos comunes (<code>email</code>, <code>uri</code>, <code>uuid</code>) pero verificá que tu validador lo soporte (algunos ignoran formatos custom). Y documentá tus schemas: <code>title</code>, <code>description</code> y <code>examples</code> hacen que herramientas de UI los muestren correctamente.</p>"
      }
    ],
    "examples": [
      "{ \"$schema\": \"http://json-schema.org/draft-07/schema#\", \"type\": \"object\", \"required\": [\"email\"], \"properties\": { \"email\": { \"type\": \"string\", \"format\": \"email\" } } }",
      "{ \"type\": \"array\", \"items\": { \"type\": \"number\" }, \"minItems\": 1, \"uniqueItems\": true }",
      "{ \"type\": \"string\", \"pattern\": \"^[A-Z]{3}-\\\\d{4}$\", \"description\": \"Código de producto\" }",
      "{ \"oneOf\": [{ \"type\": \"string\" }, { \"type\": \"number\" }] }",
      "{ \"type\": \"object\", \"additionalProperties\": false, \"properties\": { \"name\": { \"type\": \"string\", \"minLength\": 1 } } }"
    ],
    "related": [
      "generador-json-schema",
      "formateador-json"
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre draft-07 y draft 2020-12?",
        "a": "Draft 2020-12 reemplaza 'definitions' por '$defs', introduce '$dynamicRef' para recursión dinámica, y mejora el vocabulario de anotaciones ('deprecated', 'readOnly'). La mayoría de librerías aún usan draft-07; migrá solo si necesitás features nuevas y tu validador lo soporta."
      },
      {
        "q": "¿JSON Schema valida datos o solo estructura?",
        "a": "Valida ambos: estructura (tipos, propiedades requeridas) y datos (rangos, patrones, enums). Pero no lógica de negocio compleja (ej: 'este email debe existir en la DB'). Para eso usás validadores custom después de pasar el schema."
      },
      {
        "q": "¿Cómo manejo schemas grandes sin duplicación?",
        "a": "Usá '$ref' para referenciar definiciones comunes dentro del mismo schema ('$defs') o en archivos externos. Herramientas como '$RefParser' resuelven referencias y producen un schema completo. También podés usar 'allOf' para componer schemas pequeños en uno grande."
      }
    ]
  },
  "en": {
    "pageTitle": "JSON Schema — Glossary | Genfy",
    "metaDesc": "JSON Schema is a specification describing JSON structure, types, and constraints. Learn how to validate REST APIs and document data contracts effectively.",
    "h1": "JSON Schema",
    "short": "JSON Schema is a formal specification that describes the expected structure of a JSON object: which properties exist, what data types they contain, which are required, and what constraints they must meet. It's widely used to validate requests and responses in REST APIs, generate automatic documentation, and ensure contracts between frontend and backend.",
    "body": [
      {
        "title": "What is JSON Schema?",
        "content": "<p>JSON Schema is a standardized vocabulary (draft-07, draft 2020-12) that allows defining <strong>the expected shape and content of JSON</strong>. It's essentially a machine-readable contract describing which properties an object has, whether they're required (<code>required</code>), what data type they contain (<code>string</code>, <code>number</code>, <code>boolean</code>, <code>array</code>, <code>object</code>), and additional constraints like minimum length, regular expressions, allowed values (<code>enum</code>), or numeric ranges.</p><p>Its popularity grew with the rise of <strong>REST APIs</strong> and the <strong>OpenAPI</strong> specification (Swagger), which uses JSON Schema to document data models. Frameworks like <code>express-validator</code>, <code>ajv</code> (the fastest Node.js validator), and code generation tools depend on schemas to verify inputs without writing validations by hand.</p><p>JSON Schema doesn't just validate: it also serves to <strong>generate automatic forms</strong> (react-jsonschema-form), mock realistic data, and produce integration tests. It's the de facto standard for describing JSON structures in modern ecosystems.</p>"
      },
      {
        "title": "How does JSON Schema work?",
        "content": "<p>A JSON Schema is, ironically, <strong>another JSON</strong> that describes the rules. It starts with <code>$schema</code> to declare the standard version, followed by <code>type</code> (root type, usually <code>object</code>), <code>properties</code> (expected keys), and <code>required</code> (array of mandatory names).</p><p>Each property can have its own <code>type</code>, <code>format</code> (like <code>email</code>, <code>uuid</code>, <code>date-time</code>), numeric constraints (<code>minimum</code>, <code>maximum</code>), length constraints (<code>minLength</code>, <code>maxLength</code>), regex patterns (<code>pattern</code>), or fixed values (<code>const</code>, <code>enum</code>). Arrays are described with <code>items</code> (schema for each element) and can have <code>minItems</code>, <code>maxItems</code>, <code>uniqueItems</code>.</p><p>For nested objects, you repeat the structure. JSON Schema supports <strong>composition</strong>: <code>allOf</code> (all conditions), <code>anyOf</code> (at least one), <code>oneOf</code> (exactly one), and <code>not</code> (negates a schema). It also allows <code>$ref</code> to reuse definitions and avoid duplication.</p><p>Validation happens at runtime: you pass the incoming JSON and the schema to a library like <code>ajv</code> or <code>joi</code>, which returns <code>true/false</code> plus an array of detailed errors. These errors include <code>dataPath</code> (where it failed) and <code>message</code> (which constraint was violated).</p>"
      },
      {
        "title": "When to use JSON Schema?",
        "content": "<p>Use JSON Schema whenever you need to <strong>validate external data</strong> in a REST or GraphQL API: client requests, webhooks, JSON configurations. It's critical in microservices where different teams consume the same contract; the schema acts as living documentation and compatibility proof.</p><p>It's indispensable in <strong>OpenAPI</strong>: each endpoint declares its <code>requestBody</code> and <code>responses</code> with schemas, allowing tools like Postman, Insomnia, or Swagger UI to generate automatic examples, client validators, and SDKs. It's also useful in <strong>CI/CD pipelines</strong>: you validate configuration files (Kubernetes manifests, Terraform) against schemas before deploying.</p><p>In frontend, libraries like <code>react-jsonschema-form</code> generate complete forms from a schema, with validation included. In testing, tools like <code>json-schema-faker</code> produce valid mock data, accelerating integration test writing.</p><p>Avoid JSON Schema for complex business logic (validations depending on multiple resources, conditional rules with side-effects). For that, write custom validators. Don't use it for binary data or streams either; JSON Schema is limited to pure JSON structures.</p>"
      },
      {
        "title": "Common mistakes and best practices",
        "content": "<p>The most common mistake is <strong>overly permissive schemas</strong>: forgetting <code>required</code>, not defining <code>additionalProperties: false</code> (allows extra keys by default), or using <code>type</code> without format constraints. This lets invalid data through that breaks downstream logic.</p><p>Another problem: <strong>not versioning schemas</strong>. When you change a schema in production (add a required field, change a type), old clients fail. Use semantic versioning in <code>$id</code>, and maintain backward compatibility: make new fields optional, or use <code>oneOf</code> to support two formats during transition.</p><p><strong>Best practice</strong>: define reusable schemas with <code>$defs</code> (draft 2020-12) or <code>definitions</code> (draft-07) and reference with <code>$ref</code>. This avoids duplication and facilitates changes. Validate at the <strong>edge</strong> (API gateway, entry middleware), not in internal layers; fail fast with clear 400 errors.</p><p>Use <code>format</code> for common types (<code>email</code>, <code>uri</code>, <code>uuid</code>) but verify your validator supports it (some ignore custom formats). And document your schemas: <code>title</code>, <code>description</code>, and <code>examples</code> make UI tools display them correctly.</p>"
      }
    ],
    "examples": [
      "{ \"$schema\": \"http://json-schema.org/draft-07/schema#\", \"type\": \"object\", \"required\": [\"email\"], \"properties\": { \"email\": { \"type\": \"string\", \"format\": \"email\" } } }",
      "{ \"type\": \"array\", \"items\": { \"type\": \"number\" }, \"minItems\": 1, \"uniqueItems\": true }",
      "{ \"type\": \"string\", \"pattern\": \"^[A-Z]{3}-\\\\d{4}$\", \"description\": \"Product code\" }",
      "{ \"oneOf\": [{ \"type\": \"string\" }, { \"type\": \"number\" }] }",
      "{ \"type\": \"object\", \"additionalProperties\": false, \"properties\": { \"name\": { \"type\": \"string\", \"minLength\": 1 } } }"
    ],
    "related": [
      "json-schema-sample",
      "json-formatter"
    ],
    "faq": [
      {
        "q": "What's the difference between draft-07 and draft 2020-12?",
        "a": "Draft 2020-12 replaces 'definitions' with '$defs', introduces '$dynamicRef' for dynamic recursion, and improves annotation vocabulary ('deprecated', 'readOnly'). Most libraries still use draft-07; only migrate if you need new features and your validator supports it."
      },
      {
        "q": "Does JSON Schema validate data or just structure?",
        "a": "It validates both: structure (types, required properties) and data (ranges, patterns, enums). But not complex business logic (e.g., 'this email must exist in the DB'). For that, use custom validators after passing the schema."
      },
      {
        "q": "How do I handle large schemas without duplication?",
        "a": "Use '$ref' to reference common definitions within the same schema ('$defs') or in external files. Tools like '$RefParser' resolve references and produce a complete schema. You can also use 'allOf' to compose small schemas into a large one."
      }
    ]
  }
};
