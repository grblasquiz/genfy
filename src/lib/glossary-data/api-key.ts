import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "api-key",
    "en": "api-key"
  },
  "emoji": "🔑",
  "category": "security",
  "es": {
    "pageTitle": "API Key — Glosario | Genfy",
    "metaDesc": "Token criptográfico que identifica y autentica clientes de APIs. Aprende diferencias con JWT, mejores prácticas de seguridad y cuándo usar cada método.",
    "h1": "API Key",
    "short": "Una API Key es un token único y criptográficamente fuerte que identifica a un cliente autorizado de una API. A diferencia de un JWT, no contiene información (claims) sobre el usuario: solo sirve para autenticar que el que llama tiene permiso para usar la API.",
    "body": [
      {
        "title": "¿Qué es una API Key?",
        "html": "<p>Una <strong>API Key</strong> es un string alfanumérico largo (típicamente 32-64 caracteres) que actúa como credencial de acceso a una API. Funciona como una contraseña: quien la posee puede hacer requests autenticados.</p><p>Apareció en los 2000s cuando las APIs web empezaron a popularizarse. Google, AWS y Stripe fueron pioneros en usarlas para controlar acceso y medir uso. Hoy son el método de autenticación más simple y común para <strong>machine-to-machine communication</strong>.</p><p>La diferencia clave con contraseñas de usuario: una API Key identifica una <strong>aplicación</strong> o <strong>servicio</strong>, no una persona. Un mismo sistema puede tener múltiples keys para diferentes entornos (desarrollo, staging, producción) o para diferentes clientes consumiendo tu API.</p><p>No confundir con <strong>JWT</strong>: un JWT es un token autofirmado que contiene datos (claims) y expira. Una API Key es opaca (no contiene información decodificable) y típicamente no expira, aunque las mejores prácticas recomiendan rotación periódica.</p>"
      },
      {
        "title": "Cómo Funcionan las API Keys",
        "html": "<p>El flujo estándar: cuando un cliente quiere usar tu API, vos le generás una key única. El cliente la incluye en cada request, típicamente de tres formas:</p><ul><li><strong>Header HTTP</strong>: <code>Authorization: Bearer tu_api_key_aqui</code> o <code>X-API-Key: tu_api_key_aqui</code> (más común y recomendado).</li><li><strong>Query string</strong>: <code>GET /api/data?api_key=tu_api_key</code> (inseguro porque las URLs se loguean en servidores y proxies).</li><li><strong>Body en POST</strong>: menos común, similar problema de logging que query string.</li></ul><p>Tu servidor recibe el request, extrae la key, la busca en la base de datos y verifica: ¿es válida? ¿está activa? ¿tiene permisos para este endpoint? Si todo está bien, procesás el request. Si no, devolvés <code>401 Unauthorized</code> o <code>403 Forbidden</code>.</p><p>Las keys se almacenan <strong>hasheadas</strong> en la base de datos (SHA-256 o bcrypt), igual que contraseñas. Solo mostrás la key en texto plano al generarla: después el usuario debe guardarla él. Si la pierde, generás una nueva.</p>"
      },
      {
        "title": "Cuándo Usar API Keys",
        "html": "<p>Son ideales para <strong>APIs públicas con rate limiting</strong>: servicios como Google Maps, OpenAI, SendGrid. Cada key está asociada a un proyecto o cuenta, lo que te permite trackear uso y cobrar según consumo.</p><p>Perfectas para <strong>integraciones backend-to-backend</strong>: tu servidor llamando a un servicio externo (Stripe, AWS S3, Twilio). No hay usuario final involucrado, solo dos sistemas hablando.</p><p>Útiles en <strong>webhooks</strong>: cuando configurás que un servicio externo llame a tu API al ocurrir un evento, le das una key para que se autentique. Verificás que el request viene de quien dice ser.</p><p><strong>No usar</strong> para aplicaciones frontend (SPAs, mobile apps): la key quedaría expuesta en el código del cliente. Cualquiera puede extraerla y abusar de tu API. Para esos casos, usá OAuth 2.0 o JWT con short-lived tokens.</p><p><strong>No usar</strong> cuando necesitás permisos granulares por usuario. Las API Keys identifican al cliente, no al usuario final. Si tu API necesita saber <em>quién</em> está haciendo la acción (no solo <em>qué app</em>), necesitás JWT o session tokens.</p>"
      },
      {
        "title": "Mejores Prácticas de Seguridad",
        "html": "<p><strong>Generación</strong>: usá un generador criptográficamente seguro (<code>crypto.randomBytes(32)</code> en Node, <code>secrets.token_urlsafe()</code> en Python). Nunca uses UUIDs estándar o timestamps: son predecibles.</p><p><strong>Transmisión</strong>: HTTPS siempre. Una API Key en HTTP plano es como gritar tu contraseña en la calle. Headers, no query strings: evitan que se logueen accidentalmente.</p><p><strong>Almacenamiento</strong>: hashea las keys en tu DB. Si te hackean la base, las keys no sirven sin el hash original. El cliente debe guardar la key en variables de entorno, nunca en código versionado.</p><p><strong>Rotación</strong>: permite a los usuarios regenerar keys. Implementá expiración automática (30-90 días) para forzar rotación. Soporte para múltiples keys activas simultáneamente facilita rotación sin downtime.</p><p><strong>Rate limiting</strong>: asociá límites de requests por minuto/hora a cada key. Previene abuso y ataques de fuerza bruta. <strong>Logging</strong>: registra cada uso de cada key (sin loguear la key completa, solo un identificador) para detectar uso anómalo.</p>"
      }
    ],
    "examples": [
      "X-API-Key: sk_live_51H8z2KL4m9n0pQ...",
      "Authorization: Bearer gfy_1a2b3c4d5e6f7g8h9i0j",
      "curl -H 'X-API-Key: tu_key' https://api.ejemplo.com/data",
      "API_KEY=gfy_... node app.js (variable de entorno)",
      "Hash SHA-256 almacenado: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
    ],
    "related": [
      "generador-de-api-key",
      "decodificador-jwt"
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre API Key y JWT?",
        "a": "API Key es opaca (no contiene datos), identifica una app/servicio, no expira típicamente. JWT contiene claims decodificables, identifica un usuario, expira en minutos/horas. JWT para frontend, API Key para backend."
      },
      {
        "q": "¿Es seguro poner la API Key en el query string?",
        "a": "No. Las URLs se loguean en servidores, proxies, historial del navegador. Usá headers HTTP (X-API-Key o Authorization) y siempre HTTPS."
      },
      {
        "q": "¿Cómo roto una API Key sin causar downtime?",
        "a": "Soporta múltiples keys activas por cliente. Genera la nueva, actualiza tus servicios para usar la nueva, y después desactiva la vieja. Ventana de 24-48hs para migrar."
      }
    ]
  },
  "en": {
    "pageTitle": "API Key — Glossary | Genfy",
    "metaDesc": "Cryptographic token that identifies and authenticates API clients. Learn differences with JWT, security best practices, and when to use each authentication method.",
    "h1": "API Key",
    "short": "An API Key is a unique, cryptographically strong token that identifies an authorized client of an API. Unlike a JWT, it doesn't contain information (claims) about the user: it only authenticates that the caller has permission to use the API.",
    "body": [
      {
        "title": "What is an API Key?",
        "html": "<p>An <strong>API Key</strong> is a long alphanumeric string (typically 32-64 characters) that acts as an access credential to an API. It works like a password: whoever has it can make authenticated requests.</p><p>It emerged in the 2000s when web APIs started gaining popularity. Google, AWS, and Stripe pioneered their use to control access and measure usage. Today they're the simplest and most common authentication method for <strong>machine-to-machine communication</strong>.</p><p>The key difference from user passwords: an API Key identifies an <strong>application</strong> or <strong>service</strong>, not a person. A single system can have multiple keys for different environments (development, staging, production) or for different clients consuming your API.</p><p>Don't confuse with <strong>JWT</strong>: a JWT is a self-signed token that contains data (claims) and expires. An API Key is opaque (contains no decodable information) and typically doesn't expire, although best practices recommend periodic rotation.</p>"
      },
      {
        "title": "How API Keys Work",
        "html": "<p>The standard flow: when a client wants to use your API, you generate a unique key for them. The client includes it in each request, typically in three ways:</p><ul><li><strong>HTTP Header</strong>: <code>Authorization: Bearer your_api_key_here</code> or <code>X-API-Key: your_api_key_here</code> (most common and recommended).</li><li><strong>Query string</strong>: <code>GET /api/data?api_key=your_api_key</code> (insecure because URLs get logged in servers and proxies).</li><li><strong>Body in POST</strong>: less common, similar logging problem as query string.</li></ul><p>Your server receives the request, extracts the key, looks it up in the database and verifies: is it valid? is it active? does it have permissions for this endpoint? If everything checks out, you process the request. If not, you return <code>401 Unauthorized</code> or <code>403 Forbidden</code>.</p><p>Keys are stored <strong>hashed</strong> in the database (SHA-256 or bcrypt), just like passwords. You only show the key in plain text when generating it: after that the user must store it themselves. If they lose it, you generate a new one.</p>"
      },
      {
        "title": "When to Use API Keys",
        "html": "<p>They're ideal for <strong>public APIs with rate limiting</strong>: services like Google Maps, OpenAI, SendGrid. Each key is associated with a project or account, allowing you to track usage and charge based on consumption.</p><p>Perfect for <strong>backend-to-backend integrations</strong>: your server calling an external service (Stripe, AWS S3, Twilio). No end user involved, just two systems talking.</p><p>Useful in <strong>webhooks</strong>: when you configure an external service to call your API when an event occurs, you give it a key to authenticate. You verify the request comes from who it claims to be.</p><p><strong>Don't use</strong> for frontend applications (SPAs, mobile apps): the key would be exposed in client code. Anyone can extract it and abuse your API. For those cases, use OAuth 2.0 or JWT with short-lived tokens.</p><p><strong>Don't use</strong> when you need granular per-user permissions. API Keys identify the client, not the end user. If your API needs to know <em>who</em> is performing the action (not just <em>what app</em>), you need JWT or session tokens.</p>"
      },
      {
        "title": "Security Best Practices",
        "html": "<p><strong>Generation</strong>: use a cryptographically secure generator (<code>crypto.randomBytes(32)</code> in Node, <code>secrets.token_urlsafe()</code> in Python). Never use standard UUIDs or timestamps: they're predictable.</p><p><strong>Transmission</strong>: HTTPS always. An API Key over plain HTTP is like shouting your password in the street. Headers, not query strings: prevents accidental logging.</p><p><strong>Storage</strong>: hash keys in your DB. If your database gets hacked, the keys are useless without the original hash. The client must store the key in environment variables, never in versioned code.</p><p><strong>Rotation</strong>: allow users to regenerate keys. Implement automatic expiration (30-90 days) to force rotation. Support for multiple active keys simultaneously facilitates rotation without downtime.</p><p><strong>Rate limiting</strong>: associate request limits per minute/hour to each key. Prevents abuse and brute force attacks. <strong>Logging</strong>: record each use of each key (without logging the complete key, just an identifier) to detect anomalous usage.</p>"
      }
    ],
    "examples": [
      "X-API-Key: sk_live_51H8z2KL4m9n0pQ...",
      "Authorization: Bearer gfy_1a2b3c4d5e6f7g8h9i0j",
      "curl -H 'X-API-Key: your_key' https://api.example.com/data",
      "API_KEY=gfy_... node app.js (environment variable)",
      "SHA-256 hash stored: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
    ],
    "related": [
      "api-key-generator",
      "jwt-decoder"
    ],
    "faq": [
      {
        "q": "What's the difference between API Key and JWT?",
        "a": "API Key is opaque (contains no data), identifies an app/service, typically doesn't expire. JWT contains decodable claims, identifies a user, expires in minutes/hours. JWT for frontend, API Key for backend."
      },
      {
        "q": "Is it safe to put the API Key in the query string?",
        "a": "No. URLs get logged in servers, proxies, browser history. Use HTTP headers (X-API-Key or Authorization) and always HTTPS."
      },
      {
        "q": "How do I rotate an API Key without causing downtime?",
        "a": "Support multiple active keys per client. Generate the new one, update your services to use the new one, then deactivate the old one. 24-48h window for migration."
      }
    ]
  }
};
