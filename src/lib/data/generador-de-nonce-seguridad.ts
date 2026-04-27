import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nonce-seguridad",
    "en": "security-nonce-generator"
  },
  "category": "security",
  "emoji": "🎲",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Nonce de Seguridad | Genfy",
    "metaDesc": "Genera nonces únicos para prevenir replay attacks. Incluye timestamps, UUIDs, HMAC y formatos para JWT, OAuth, CSP y webhooks.",
    "h1": "Generador de Nonce",
    "intro": "Genera nonces criptográficamente seguros para prevenir ataques de replay. Ideal para JWT, OAuth, CSP headers y validación de webhooks.",
    "tag": "Seguridad",
    "filterLabel": "Tipo de nonce",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "cryptographic",
        "label": "Nonces criptográficos",
        "items": [
          "crypto.randomBytes(16).toString('hex') - Node.js",
          "uuid.v4() - UUID completo",
          "nanoid(21) - URL-safe, 21 chars",
          "crypto.getRandomValues(new Uint8Array(16)) - Browser",
          "ulid() - Sortable lexicográficamente",
          "base64url.encode(crypto.randomBytes(32))",
          "cuid() - Collision-resistant IDs",
          "crypto.randomUUID() - Nativo Node 16+",
          "shortid.generate() - Corto y único",
          "xid.New() - Go sortable ID",
          "ksuid.New() - K-sortable unique ID",
          "timestamp + randomBytes(8) - Híbrido",
          "scryptSync(timestamp, salt, 32) - Computacionalmente costoso",
          "Date.now().toString(36) + Math.random().toString(36)",
          "BigInt timestamp + BigInt random",
          "SHA256(timestamp + secret + random)",
          "ObjectId.generate() - MongoDB style",
          "Snowflake ID - Distributed unique",
          "flake-idgen - Instagram style",
          "hashids.encode([timestamp, random])",
          "JWT jti claim - UUID",
          "base58.encode(randomBytes(16))",
          "prefixed: nonce_${randomHex(16)}",
          "HMAC(timestamp, secret).slice(0,16)",
          "Argon2id(timestamp + salt) - Resistant"
        ]
      },
      {
        "id": "formats",
        "label": "Formatos y encodings",
        "items": [
          "Base64 - Standard: YWJjZGVm...",
          "Base64URL - Sin +/=: YWJjZGVm_-",
          "Hex - 0-9a-f: 3a7bd4e2f1...",
          "Base58 - Bitcoin style: 3J98t1WpEZ",
          "Base32 - Crockford: JBSWY3DPEB",
          "Alphanumeric - A-Za-z0-9 only",
          "UUID canonical - 8-4-4-4-12 format",
          "Hyphenated: abc-def-ghi-jkl",
          "Prefixed: sk_live_abc123def",
          "Versioned: v1_nonce_abc...",
          "URL-safe slug: abc-123-def-456",
          "Human-readable: able-baker-123",
          "Mixed case: AbC123dEf456",
          "Lowercase only: abc123def456",
          "Uppercase only: ABC123DEF456",
          "With checksum: abc123-X5",
          "Padded: 000000abc123",
          "Chunked: abcd-1234-efgh",
          "Timestamped: 20240315_abc123",
          "Namespaced: auth:nonce:abc",
          "JSON encoded: {n:abc, t:123}",
          "Delimited: abc|123|def",
          "Compressed: gzip(uuid)",
          "URI component: %3A%2F%2Fabc",
          "ASCII safe 7-bit encoding"
        ]
      },
      {
        "id": "oauth",
        "label": "OAuth y autenticación",
        "items": [
          "OAuth 2.0 state parameter",
          "PKCE code_verifier - 43-128 chars",
          "PKCE code_challenge - SHA256(verifier)",
          "OAuth nonce claim - JWT",
          "OpenID Connect nonce",
          "SAML request ID",
          "Session token - httpOnly cookie",
          "CSRF token - SameSite cookie",
          "Anti-forgery token - form hidden",
          "Login challenge - email verification",
          "2FA backup code - 8 digits",
          "Recovery code - 16 chars",
          "Magic link token - 32 bytes",
          "Password reset token - expires 1h",
          "Email verification token",
          "API key prefix: sk_live_...",
          "Webhook signature token",
          "Device fingerprint token",
          "Refresh token rotation - 64 bytes",
          "Access token jti - prevents reuse",
          "Authorization code - 1-time use",
          "Client assertion - JWT",
          "Bearer token - opaque or JWT",
          "MAC token - HMAC verification",
          "Mutual TLS client cert serial"
        ]
      },
      {
        "id": "timing",
        "label": "Nonces con timestamp",
        "items": [
          "Unix timestamp + random - 13 digits + 8 hex",
          "ISO 8601 + uuid - 2024-03-15T...+uuid",
          "Epoch millis sortable - 1710518400000_abc",
          "TTL embedded - expires_at:timestamp",
          "Sliding window - valid 300s",
          "Leeway tolerant - ±60s clock skew",
          "Monotonic counter - incremental",
          "Sequence number - anti-replay",
          "Version + timestamp - v2_1710518400",
          "Expiry header - X-Nonce-Expires",
          "Issue time claim - iat JWT",
          "Not before claim - nbf JWT",
          "Expiration claim - exp JWT",
          "Issued at + jti - unique per time",
          "Clock sync check - NTP validation",
          "Replay window - 5min buffer",
          "One-time code - 6 digits, 30s",
          "TOTP token - RFC 6238",
          "HOTP counter - RFC 4226",
          "Time-based UUID v1 - sortable",
          "Lamport timestamp - distributed",
          "Vector clock - causality",
          "Hybrid logical clock - HLC",
          "Snowflake timestamp - 41 bits",
          "Rate limit bucket - per second"
        ]
      },
      {
        "id": "validation",
        "label": "Validación y verificación",
        "items": [
          "HMAC signature - verify integrity",
          "Digital signature - RSA/ECDSA",
          "Merkle tree root - batch verify",
          "Bloom filter - probabilistic check",
          "Hash chain - link previous nonce",
          "Commitment scheme - reveal later",
          "Zero-knowledge proof - privacy",
          "Checksum - Luhn algorithm",
          "CRC32 - error detection",
          "Parity bit - simple validation",
          "Double-spend check - DB unique",
          "Idempotency key - prevent duplicates",
          "Redis SET NX - atomic check",
          "TTL cache - auto-expire",
          "Write-once storage - immutable",
          "Append-only log - audit trail",
          "Blockchain nonce - mining",
          "Proof-of-work - CPU cost",
          "Rate limit token - bucket algorithm",
          "Sliding log - window check",
          "Fixed window counter - reset periodic",
          "Token bucket - burst allowed",
          "Leaky bucket - smooth rate",
          "Distributed consensus - Raft/Paxos",
          "Quorum read - consistency"
        ]
      },
      {
        "id": "headers",
        "label": "Headers y CSP",
        "items": [
          "CSP nonce - Content-Security-Policy",
          "CSP script-src 'nonce-abc123'",
          "CSP style-src 'nonce-def456'",
          "X-Request-ID - tracing header",
          "X-Correlation-ID - distributed trace",
          "X-Idempotency-Key - retry safe",
          "X-Nonce - custom header",
          "X-CSRF-Token - cross-site protect",
          "X-Webhook-Signature - HMAC verify",
          "Digest header - content hash",
          "Want-Digest - request integrity",
          "Signature header - HTTP signatures",
          "Authorization: MAC id=...,nonce=...",
          "WWW-Authenticate challenge nonce",
          "Proxy-Authorization nonce",
          "ETag - caching validation",
          "If-Match - conditional request",
          "If-None-Match - 304 response",
          "Cache-Control: no-cache, must-revalidate",
          "Strict-Transport-Security header",
          "X-Frame-Options - clickjack protect",
          "X-Content-Type-Options: nosniff",
          "Referrer-Policy: no-referrer",
          "Permissions-Policy - feature control",
          "Cross-Origin-Opener-Policy: same-origin"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Qué es un nonce y por qué importa",
        "body": "<p>Un <strong>nonce</strong> (number used once) es un valor único que se usa una sola vez para prevenir <strong>ataques de replay</strong>. Si un atacante captura una request válida y la reenvía, el nonce ya usado es rechazado.</p><p>Los nonces son críticos en: <strong>OAuth flows</strong> (previene CSRF), <strong>JWT tokens</strong> (claim 'jti' para one-time use), <strong>webhooks</strong> (valida que el payload no fue manipulado), <strong>CSP headers</strong> (permite scripts inline seguros), y <strong>transacciones financieras</strong> (evita double-spend).</p><p>Un nonce efectivo debe ser: <strong>impredecible</strong> (criptográficamente aleatorio), <strong>único</strong> (no repetible), <strong>de tiempo limitado</strong> (expira después de X segundos o tras primer uso). Usar timestamps solos NO es suficiente: son predecibles. Combina timestamp + randomBytes + HMAC para nonces robustos.</p>"
      },
      {
        "h2": "Implementando nonces en Node.js y navegadores",
        "body": "<p>En <strong>Node.js</strong>, usa <code>crypto.randomBytes(16)</code> del módulo nativo. Para URL-safe strings, convierte a base64url o hex. Ejemplo: <code>crypto.randomBytes(16).toString('base64url')</code> genera strings como 'a3f8B2kL9xR4'.</p><p>En <strong>navegadores modernos</strong>, usa <code>crypto.getRandomValues(new Uint8Array(16))</code> y convierte a hex con <code>Array.from(bytes).map(b => b.toString(16).padStart(2,'0')).join('')</code>. Evita <code>Math.random()</code>: no es criptográficamente seguro.</p><p>Para <strong>nonces con timestamp</strong>, concatena millis + random: <code>Date.now() + '_' + crypto.randomBytes(8).toString('hex')</code>. Esto permite ordenamiento temporal mientras mantiene unicidad. Almacena nonces usados en Redis con TTL de 5-10 minutos para prevenir reuso dentro de la ventana de replay.</p>"
      },
      {
        "h2": "Nonces en OAuth y PKCE",
        "body": "<p>En <strong>OAuth 2.0</strong>, el parámetro 'state' funciona como nonce para prevenir CSRF. Genera un valor aleatorio, guárdalo en sesión o cookie httpOnly, y valida que el callback lo devuelve idéntico.</p><p><strong>PKCE</strong> (Proof Key for Code Exchange) usa dos nonces: <code>code_verifier</code> (43-128 chars URL-safe random) y <code>code_challenge</code> (SHA256 del verifier en base64url). El authorization endpoint recibe el challenge, el token endpoint valida el verifier. Esto previene authorization code interception en apps públicas.</p><p>En <strong>OpenID Connect</strong>, el claim 'nonce' se incluye en el ID token. El cliente genera un nonce aleatorio, lo pasa en el request, y verifica que el token devuelto lo contiene. Esto ata el token al request específico, previniendo token substitution attacks.</p>"
      },
      {
        "h2": "Content Security Policy y nonces para scripts",
        "body": "<p><strong>CSP nonces</strong> permiten ejecutar scripts inline seguros sin <code>'unsafe-inline'</code>. Genera un nonce por request: <code>const nonce = crypto.randomBytes(16).toString('base64')</code>. Añadí el header: <code>Content-Security-Policy: script-src 'nonce-${nonce}'</code>.</p><p>En el HTML, cada script inline debe incluir el atributo: <code>&lt;script nonce='${nonce}'&gt;...&lt;/script&gt;</code>. El browser solo ejecuta scripts con nonce correcto. <strong>Importante</strong>: el nonce debe ser diferente por cada response (no reutilices entre requests).</p><p>Para <strong>frameworks SSR</strong> (Next.js, Nuxt), configura el nonce en el middleware y pásalo al render context. En <strong>Express</strong>: <code>res.locals.nonce = generateNonce()</code>, luego en templates: <code>&lt;script nonce='<%= nonce %>'&gt;</code>. Combina con <code>strict-dynamic</code> para permitir scripts cargados por scripts con nonce válido.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuánto debe durar la validez de un nonce?",
        "a": "Depende del contexto. Para requests API: 5-10 minutos. Para JWT: hasta expiración del token. Para CSP: solo la request actual. Usa el mínimo tiempo necesario."
      },
      {
        "q": "¿Debo almacenar nonces usados en base de datos?",
        "a": "Para alta escala, usa Redis con TTL automático. Para OAuth/CSRF, session storage es suficiente. Para replay protection crítico (pagos), persiste en DB con índice único."
      },
      {
        "q": "¿Math.random() es suficiente para generar nonces?",
        "a": "No. Math.random() es predecible y no criptográficamente seguro. Usa siempre crypto.randomBytes (Node) o crypto.getRandomValues (browser) para nonces de seguridad."
      },
      {
        "q": "¿Cómo valido nonces en arquitecturas distribuidas?",
        "a": "Usa cache distribuido (Redis Cluster) con SET NX para check-and-set atómico. O implementa Bloom filters para probabilistic check con menor overhead. Sincroniza timestamps con NTP."
      }
    ]
  },
  "en": {
    "pageTitle": "Security Nonce Generator | Genfy",
    "metaDesc": "Generate unique nonces to prevent replay attacks. Includes timestamps, UUIDs, HMAC and formats for JWT, OAuth, CSP and webhooks.",
    "h1": "Nonce Generator",
    "intro": "Generate cryptographically secure nonces to prevent replay attacks. Perfect for JWT, OAuth, CSP headers and webhook validation.",
    "tag": "Security",
    "filterLabel": "Nonce type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "cryptographic",
        "label": "Cryptographic nonces",
        "items": [
          "crypto.randomBytes(16).toString('hex') - Node.js",
          "uuid.v4() - Full UUID",
          "nanoid(21) - URL-safe, 21 chars",
          "crypto.getRandomValues(new Uint8Array(16)) - Browser",
          "ulid() - Lexicographically sortable",
          "base64url.encode(crypto.randomBytes(32))",
          "cuid() - Collision-resistant IDs",
          "crypto.randomUUID() - Native Node 16+",
          "shortid.generate() - Short and unique",
          "xid.New() - Go sortable ID",
          "ksuid.New() - K-sortable unique ID",
          "timestamp + randomBytes(8) - Hybrid",
          "scryptSync(timestamp, salt, 32) - Computationally expensive",
          "Date.now().toString(36) + Math.random().toString(36)",
          "BigInt timestamp + BigInt random",
          "SHA256(timestamp + secret + random)",
          "ObjectId.generate() - MongoDB style",
          "Snowflake ID - Distributed unique",
          "flake-idgen - Instagram style",
          "hashids.encode([timestamp, random])",
          "JWT jti claim - UUID",
          "base58.encode(randomBytes(16))",
          "prefixed: nonce_${randomHex(16)}",
          "HMAC(timestamp, secret).slice(0,16)",
          "Argon2id(timestamp + salt) - Resistant"
        ]
      },
      {
        "id": "formats",
        "label": "Formats and encodings",
        "items": [
          "Base64 - Standard: YWJjZGVm...",
          "Base64URL - No +/=: YWJjZGVm_-",
          "Hex - 0-9a-f: 3a7bd4e2f1...",
          "Base58 - Bitcoin style: 3J98t1WpEZ",
          "Base32 - Crockford: JBSWY3DPEB",
          "Alphanumeric - A-Za-z0-9 only",
          "UUID canonical - 8-4-4-4-12 format",
          "Hyphenated: abc-def-ghi-jkl",
          "Prefixed: sk_live_abc123def",
          "Versioned: v1_nonce_abc...",
          "URL-safe slug: abc-123-def-456",
          "Human-readable: able-baker-123",
          "Mixed case: AbC123dEf456",
          "Lowercase only: abc123def456",
          "Uppercase only: ABC123DEF456",
          "With checksum: abc123-X5",
          "Padded: 000000abc123",
          "Chunked: abcd-1234-efgh",
          "Timestamped: 20240315_abc123",
          "Namespaced: auth:nonce:abc",
          "JSON encoded: {n:abc, t:123}",
          "Delimited: abc|123|def",
          "Compressed: gzip(uuid)",
          "URI component: %3A%2F%2Fabc",
          "ASCII safe 7-bit encoding"
        ]
      },
      {
        "id": "oauth",
        "label": "OAuth and authentication",
        "items": [
          "OAuth 2.0 state parameter",
          "PKCE code_verifier - 43-128 chars",
          "PKCE code_challenge - SHA256(verifier)",
          "OAuth nonce claim - JWT",
          "OpenID Connect nonce",
          "SAML request ID",
          "Session token - httpOnly cookie",
          "CSRF token - SameSite cookie",
          "Anti-forgery token - form hidden",
          "Login challenge - email verification",
          "2FA backup code - 8 digits",
          "Recovery code - 16 chars",
          "Magic link token - 32 bytes",
          "Password reset token - expires 1h",
          "Email verification token",
          "API key prefix: sk_live_...",
          "Webhook signature token",
          "Device fingerprint token",
          "Refresh token rotation - 64 bytes",
          "Access token jti - prevents reuse",
          "Authorization code - 1-time use",
          "Client assertion - JWT",
          "Bearer token - opaque or JWT",
          "MAC token - HMAC verification",
          "Mutual TLS client cert serial"
        ]
      },
      {
        "id": "timing",
        "label": "Timestamped nonces",
        "items": [
          "Unix timestamp + random - 13 digits + 8 hex",
          "ISO 8601 + uuid - 2024-03-15T...+uuid",
          "Epoch millis sortable - 1710518400000_abc",
          "TTL embedded - expires_at:timestamp",
          "Sliding window - valid 300s",
          "Leeway tolerant - ±60s clock skew",
          "Monotonic counter - incremental",
          "Sequence number - anti-replay",
          "Version + timestamp - v2_1710518400",
          "Expiry header - X-Nonce-Expires",
          "Issue time claim - iat JWT",
          "Not before claim - nbf JWT",
          "Expiration claim - exp JWT",
          "Issued at + jti - unique per time",
          "Clock sync check - NTP validation",
          "Replay window - 5min buffer",
          "One-time code - 6 digits, 30s",
          "TOTP token - RFC 6238",
          "HOTP counter - RFC 4226",
          "Time-based UUID v1 - sortable",
          "Lamport timestamp - distributed",
          "Vector clock - causality",
          "Hybrid logical clock - HLC",
          "Snowflake timestamp - 41 bits",
          "Rate limit bucket - per second"
        ]
      },
      {
        "id": "validation",
        "label": "Validation and verification",
        "items": [
          "HMAC signature - verify integrity",
          "Digital signature - RSA/ECDSA",
          "Merkle tree root - batch verify",
          "Bloom filter - probabilistic check",
          "Hash chain - link previous nonce",
          "Commitment scheme - reveal later",
          "Zero-knowledge proof - privacy",
          "Checksum - Luhn algorithm",
          "CRC32 - error detection",
          "Parity bit - simple validation",
          "Double-spend check - DB unique",
          "Idempotency key - prevent duplicates",
          "Redis SET NX - atomic check",
          "TTL cache - auto-expire",
          "Write-once storage - immutable",
          "Append-only log - audit trail",
          "Blockchain nonce - mining",
          "Proof-of-work - CPU cost",
          "Rate limit token - bucket algorithm",
          "Sliding log - window check",
          "Fixed window counter - reset periodic",
          "Token bucket - burst allowed",
          "Leaky bucket - smooth rate",
          "Distributed consensus - Raft/Paxos",
          "Quorum read - consistency"
        ]
      },
      {
        "id": "headers",
        "label": "Headers and CSP",
        "items": [
          "CSP nonce - Content-Security-Policy",
          "CSP script-src 'nonce-abc123'",
          "CSP style-src 'nonce-def456'",
          "X-Request-ID - tracing header",
          "X-Correlation-ID - distributed trace",
          "X-Idempotency-Key - retry safe",
          "X-Nonce - custom header",
          "X-CSRF-Token - cross-site protect",
          "X-Webhook-Signature - HMAC verify",
          "Digest header - content hash",
          "Want-Digest - request integrity",
          "Signature header - HTTP signatures",
          "Authorization: MAC id=...,nonce=...",
          "WWW-Authenticate challenge nonce",
          "Proxy-Authorization nonce",
          "ETag - caching validation",
          "If-Match - conditional request",
          "If-None-Match - 304 response",
          "Cache-Control: no-cache, must-revalidate",
          "Strict-Transport-Security header",
          "X-Frame-Options - clickjack protect",
          "X-Content-Type-Options: nosniff",
          "Referrer-Policy: no-referrer",
          "Permissions-Policy - feature control",
          "Cross-Origin-Opener-Policy: same-origin"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "What is a nonce and why it matters",
        "body": "<p>A <strong>nonce</strong> (number used once) is a unique value used only once to prevent <strong>replay attacks</strong>. If an attacker captures a valid request and resends it, the already-used nonce is rejected.</p><p>Nonces are critical in: <strong>OAuth flows</strong> (prevents CSRF), <strong>JWT tokens</strong> ('jti' claim for one-time use), <strong>webhooks</strong> (validates payload wasn't manipulated), <strong>CSP headers</strong> (allows safe inline scripts), and <strong>financial transactions</strong> (prevents double-spend).</p><p>An effective nonce must be: <strong>unpredictable</strong> (cryptographically random), <strong>unique</strong> (non-repeatable), <strong>time-limited</strong> (expires after X seconds or first use). Using timestamps alone is NOT enough: they're predictable. Combine timestamp + randomBytes + HMAC for robust nonces.</p>"
      },
      {
        "h2": "Implementing nonces in Node.js and browsers",
        "body": "<p>In <strong>Node.js</strong>, use <code>crypto.randomBytes(16)</code> from the native module. For URL-safe strings, convert to base64url or hex. Example: <code>crypto.randomBytes(16).toString('base64url')</code> generates strings like 'a3f8B2kL9xR4'.</p><p>In <strong>modern browsers</strong>, use <code>crypto.getRandomValues(new Uint8Array(16))</code> and convert to hex with <code>Array.from(bytes).map(b => b.toString(16).padStart(2,'0')).join('')</code>. Avoid <code>Math.random()</code>: it's not cryptographically secure.</p><p>For <strong>timestamped nonces</strong>, concatenate millis + random: <code>Date.now() + '_' + crypto.randomBytes(8).toString('hex')</code>. This allows temporal ordering while maintaining uniqueness. Store used nonces in Redis with 5-10 minute TTL to prevent reuse within replay window.</p>"
      },
      {
        "h2": "Nonces in OAuth and PKCE",
        "body": "<p>In <strong>OAuth 2.0</strong>, the 'state' parameter functions as a nonce to prevent CSRF. Generate a random value, store it in session or httpOnly cookie, and validate the callback returns it identically.</p><p><strong>PKCE</strong> (Proof Key for Code Exchange) uses two nonces: <code>code_verifier</code> (43-128 chars URL-safe random) and <code>code_challenge</code> (SHA256 of verifier in base64url). The authorization endpoint receives the challenge, the token endpoint validates the verifier. This prevents authorization code interception in public apps.</p><p>In <strong>OpenID Connect</strong>, the 'nonce' claim is included in the ID token. The client generates a random nonce, passes it in the request, and verifies the returned token contains it. This binds the token to the specific request, preventing token substitution attacks.</p>"
      },
      {
        "h2": "Content Security Policy and script nonces",
        "body": "<p><strong>CSP nonces</strong> allow executing safe inline scripts without <code>'unsafe-inline'</code>. Generate a nonce per request: <code>const nonce = crypto.randomBytes(16).toString('base64')</code>. Add the header: <code>Content-Security-Policy: script-src 'nonce-${nonce}'</code>.</p><p>In HTML, each inline script must include the attribute: <code>&lt;script nonce='${nonce}'&gt;...&lt;/script&gt;</code>. The browser only executes scripts with correct nonce. <strong>Important</strong>: the nonce must be different per response (don't reuse between requests).</p><p>For <strong>SSR frameworks</strong> (Next.js, Nuxt), configure the nonce in middleware and pass it to render context. In <strong>Express</strong>: <code>res.locals.nonce = generateNonce()</code>, then in templates: <code>&lt;script nonce='<%= nonce %>'&gt;</code>. Combine with <code>strict-dynamic</code> to allow scripts loaded by scripts with valid nonce.</p>"
      }
    ],
    "faq": [
      {
        "q": "How long should a nonce remain valid?",
        "a": "Depends on context. For API requests: 5-10 minutes. For JWT: until token expiration. For CSP: only current request. Use minimum necessary time."
      },
      {
        "q": "Should I store used nonces in database?",
        "a": "For high scale, use Redis with automatic TTL. For OAuth/CSRF, session storage is sufficient. For critical replay protection (payments), persist in DB with unique index."
      },
      {
        "q": "Is Math.random() sufficient for generating nonces?",
        "a": "No. Math.random() is predictable and not cryptographically secure. Always use crypto.randomBytes (Node) or crypto.getRandomValues (browser) for security nonces."
      },
      {
        "q": "How do I validate nonces in distributed architectures?",
        "a": "Use distributed cache (Redis Cluster) with SET NX for atomic check-and-set. Or implement Bloom filters for probabilistic check with lower overhead. Sync timestamps with NTP."
      }
    ]
  }
};
