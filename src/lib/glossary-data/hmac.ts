import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "hmac",
    "en": "hmac"
  },
  "emoji": "✍️",
  "category": "crypto",
  "es": {
    "pageTitle": "HMAC — Glosario | Genfy",
    "metaDesc": "HMAC combina una función hash con una clave secreta para verificar autenticidad e integridad de mensajes. Esencial en APIs, JWT y seguridad web.",
    "h1": "HMAC",
    "short": "HMAC (Hash-based Message Authentication Code) es un mecanismo criptográfico que combina una función hash (como SHA-256) con una clave secreta compartida para generar un código de autenticación. Garantiza que un mensaje no fue alterado y que proviene de quien dice ser.",
    "body": [
      {
        "title": "¿Qué es HMAC y por qué importa?",
        "content": "<p>HMAC es un algoritmo estándar (RFC 2104) que genera un <em>código de autenticación de mensaje</em> usando dos ingredientes: una <strong>función hash criptográfica</strong> (MD5, SHA-1, SHA-256, SHA-512) y una <strong>clave secreta</strong> compartida solo entre emisor y receptor.</p><p>La diferencia clave con un hash simple: si hasheo <code>SHA256('mensaje')</code>, cualquiera puede reproducir ese hash y modificar el mensaje. Con HMAC, necesitás la clave secreta: <code>HMAC-SHA256('mensaje', clave_secreta)</code>. Sin la clave, es computacionalmente imposible generar un HMAC válido.</p><p>Su importancia en seguridad moderna es crítica: protege APIs REST, firma tokens JWT, autentica webhooks, verifica cookies firmadas y asegura comunicaciones en protocolos como TLS. Sin HMAC, un atacante podría interceptar mensajes, modificarlos y reenviarlos sin que nadie lo detecte. HMAC es tu prueba de que <strong>nadie tocó el mensaje en el camino</strong>.</p>"
      },
      {
        "title": "¿Cómo funciona el algoritmo HMAC?",
        "content": "<p>El algoritmo HMAC aplica la función hash dos veces con transformaciones específicas de la clave:</p><ul><li>Si la clave es más larga que el bloque del hash, se hashea primero; si es más corta, se rellena con ceros</li><li>Se crean dos constantes: <code>opad</code> (0x5c repetido) e <code>ipad</code> (0x36 repetido)</li><li>Primera ronda: <code>hash((clave XOR ipad) || mensaje)</code></li><li>Segunda ronda: <code>hash((clave XOR opad) || resultado_anterior)</code></li></ul><p>Este doble hashing con XOR previene ataques de extensión de longitud que afectan a hashes simples. Por ejemplo, con SHA-256 puro, un atacante podría agregar datos al final sin conocer el contenido original. HMAC elimina esa vulnerabilidad.</p><p>La salida es un string hexadecimal o binario del tamaño del hash elegido: HMAC-SHA256 genera 256 bits (64 chars hex), HMAC-SHA512 genera 512 bits (128 chars hex). Cuanto más fuerte el hash base, más seguro el HMAC.</p>"
      },
      {
        "title": "¿Cuándo usar HMAC?",
        "content": "<p>HMAC es la solución estándar para estos casos de uso:</p><ul><li><strong>Autenticación de APIs:</strong> firmar requests HTTP con una API key secreta (Amazon AWS usa HMAC-SHA256 en todas sus APIs)</li><li><strong>JSON Web Tokens (JWT):</strong> el algoritmo HS256 es HMAC-SHA256; el servidor firma el token y verifica cada request sin estado</li><li><strong>Webhooks:</strong> servicios como Stripe, GitHub o Shopify firman payloads con HMAC para que verifiques que el evento es legítimo</li><li><strong>Cookies firmadas:</strong> frameworks como Express.js usan HMAC para detectar si el cliente manipuló una session cookie</li><li><strong>Integridad de archivos:</strong> almacenar HMAC de backups para verificar que no fueron corrompidos o manipulados</li></ul><p>Usá HMAC cuando necesitás <strong>verificación rápida sin encriptación completa</strong>. HMAC no oculta el contenido (eso es trabajo de AES/RSA), solo prueba su integridad y autenticidad.</p>"
      },
      {
        "title": "Errores comunes y mejores prácticas",
        "content": "<p>Trampas frecuentes al implementar HMAC:</p><ul><li><strong>Comparación insegura:</strong> nunca uses <code>==</code> para comparar HMACs. Usá comparación de tiempo constante (<code>crypto.timingSafeEqual</code> en Node.js) para prevenir timing attacks</li><li><strong>Claves débiles:</strong> una clave de 8 caracteres ASCII es débil. Generá claves aleatorias de al menos 256 bits (32 bytes) con un CSPRNG</li><li><strong>Hash obsoleto:</strong> evitá HMAC-MD5 o HMAC-SHA1 en nuevos proyectos. Usá HMAC-SHA256 como mínimo, HMAC-SHA512 si podés</li><li><strong>Exponer la clave:</strong> nunca incluyas la clave secreta en código frontend, repos públicos o logs. Almacenala en variables de entorno o vaults (AWS Secrets Manager, HashiCorp Vault)</li></ul><p><strong>Patrón recomendado:</strong> incluir timestamp en el mensaje y verificar que no tenga más de 5 minutos de antigüedad. Esto previene replay attacks donde un atacante reenvía un mensaje válido capturado anteriormente.</p>"
      }
    ],
    "examples": [
      "HMAC-SHA256('mensaje', 'clave123') → a3f5e8d9c1b2...",
      "JWT firmado: eyJhbGci... (header + payload + HMAC-SHA256)",
      "Webhook Stripe: X-Stripe-Signature: t=timestamp,v1=hmac",
      "AWS API request: Authorization: AWS4-HMAC-SHA256 Credential=...",
      "Cookie Express firmada: session=s%3A...; Signature=hmac_value"
    ],
    "related": [
      "generador-hmac",
      "generador-de-hash-md5-sha"
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre HMAC y un hash simple?",
        "a": "Un hash simple (SHA-256, MD5) es público: cualquiera puede calcularlo. HMAC requiere una clave secreta, entonces solo quien tiene la clave puede generar o verificar el código. Esto previene falsificaciones."
      },
      {
        "q": "¿HMAC encripta los datos?",
        "a": "No. HMAC solo verifica integridad y autenticidad. El mensaje viaja en claro. Si necesitás confidencialidad, combiná HMAC con encriptación (por ejemplo: encrypt-then-MAC con AES + HMAC)."
      },
      {
        "q": "¿Puedo truncar un HMAC para ahorrar espacio?",
        "a": "Sí, pero con cuidado. HMAC-SHA256 puede truncarse a 128 bits sin perder demasiada seguridad (NIST recomienda mínimo 80 bits). Nunca bajes de 64 bits o te exponés a ataques de fuerza bruta."
      }
    ]
  },
  "en": {
    "pageTitle": "HMAC — Glossary | Genfy",
    "metaDesc": "HMAC combines a hash function with a secret key to verify message authenticity and integrity. Essential for APIs, JWT, and web security.",
    "h1": "HMAC",
    "short": "HMAC (Hash-based Message Authentication Code) is a cryptographic mechanism that combines a hash function (like SHA-256) with a shared secret key to generate an authentication code. It guarantees that a message wasn't altered and comes from who it claims to be.",
    "body": [
      {
        "title": "What is HMAC and why does it matter?",
        "content": "<p>HMAC is a standard algorithm (RFC 2104) that generates a <em>message authentication code</em> using two ingredients: a <strong>cryptographic hash function</strong> (MD5, SHA-1, SHA-256, SHA-512) and a <strong>secret key</strong> shared only between sender and receiver.</p><p>The key difference from a simple hash: if I hash <code>SHA256('message')</code>, anyone can reproduce that hash and modify the message. With HMAC, you need the secret key: <code>HMAC-SHA256('message', secret_key)</code>. Without the key, it's computationally impossible to generate a valid HMAC.</p><p>Its importance in modern security is critical: it protects REST APIs, signs JWT tokens, authenticates webhooks, verifies signed cookies, and secures communications in protocols like TLS. Without HMAC, an attacker could intercept messages, modify them, and resend them without anyone detecting it. HMAC is your proof that <strong>nobody touched the message in transit</strong>.</p>"
      },
      {
        "title": "How does the HMAC algorithm work?",
        "content": "<p>The HMAC algorithm applies the hash function twice with specific key transformations:</p><ul><li>If the key is longer than the hash block size, it's hashed first; if shorter, it's padded with zeros</li><li>Two constants are created: <code>opad</code> (repeated 0x5c) and <code>ipad</code> (repeated 0x36)</li><li>First round: <code>hash((key XOR ipad) || message)</code></li><li>Second round: <code>hash((key XOR opad) || previous_result)</code></li></ul><p>This double hashing with XOR prevents length extension attacks that affect simple hashes. For example, with pure SHA-256, an attacker could append data to the end without knowing the original content. HMAC eliminates that vulnerability.</p><p>The output is a hexadecimal or binary string the size of the chosen hash: HMAC-SHA256 generates 256 bits (64 hex chars), HMAC-SHA512 generates 512 bits (128 hex chars). The stronger the base hash, the more secure the HMAC.</p>"
      },
      {
        "title": "When to use HMAC?",
        "content": "<p>HMAC is the standard solution for these use cases:</p><ul><li><strong>API authentication:</strong> sign HTTP requests with a secret API key (Amazon AWS uses HMAC-SHA256 in all its APIs)</li><li><strong>JSON Web Tokens (JWT):</strong> the HS256 algorithm is HMAC-SHA256; the server signs the token and verifies each request statelessly</li><li><strong>Webhooks:</strong> services like Stripe, GitHub, or Shopify sign payloads with HMAC so you can verify the event is legitimate</li><li><strong>Signed cookies:</strong> frameworks like Express.js use HMAC to detect if the client manipulated a session cookie</li><li><strong>File integrity:</strong> store HMAC of backups to verify they weren't corrupted or tampered with</li></ul><p>Use HMAC when you need <strong>fast verification without full encryption</strong>. HMAC doesn't hide content (that's AES/RSA's job), it only proves its integrity and authenticity.</p>"
      },
      {
        "title": "Common mistakes and best practices",
        "content": "<p>Frequent pitfalls when implementing HMAC:</p><ul><li><strong>Insecure comparison:</strong> never use <code>==</code> to compare HMACs. Use constant-time comparison (<code>crypto.timingSafeEqual</code> in Node.js) to prevent timing attacks</li><li><strong>Weak keys:</strong> an 8-character ASCII key is weak. Generate random keys of at least 256 bits (32 bytes) with a CSPRNG</li><li><strong>Obsolete hash:</strong> avoid HMAC-MD5 or HMAC-SHA1 in new projects. Use HMAC-SHA256 minimum, HMAC-SHA512 if you can</li><li><strong>Exposing the key:</strong> never include the secret key in frontend code, public repos, or logs. Store it in environment variables or vaults (AWS Secrets Manager, HashiCorp Vault)</li></ul><p><strong>Recommended pattern:</strong> include timestamp in the message and verify it's not older than 5 minutes. This prevents replay attacks where an attacker resends a previously captured valid message.</p>"
      }
    ],
    "examples": [
      "HMAC-SHA256('message', 'key123') → a3f5e8d9c1b2...",
      "Signed JWT: eyJhbGci... (header + payload + HMAC-SHA256)",
      "Stripe Webhook: X-Stripe-Signature: t=timestamp,v1=hmac",
      "AWS API request: Authorization: AWS4-HMAC-SHA256 Credential=...",
      "Express signed cookie: session=s%3A...; Signature=hmac_value"
    ],
    "related": [
      "hmac-generator",
      "md5-sha-hash-generator"
    ],
    "faq": [
      {
        "q": "What's the difference between HMAC and a simple hash?",
        "a": "A simple hash (SHA-256, MD5) is public: anyone can calculate it. HMAC requires a secret key, so only those with the key can generate or verify the code. This prevents forgeries."
      },
      {
        "q": "Does HMAC encrypt data?",
        "a": "No. HMAC only verifies integrity and authenticity. The message travels in clear text. If you need confidentiality, combine HMAC with encryption (e.g., encrypt-then-MAC with AES + HMAC)."
      },
      {
        "q": "Can I truncate an HMAC to save space?",
        "a": "Yes, but carefully. HMAC-SHA256 can be truncated to 128 bits without losing too much security (NIST recommends minimum 80 bits). Never go below 64 bits or you expose yourself to brute-force attacks."
      }
    ]
  }
};
