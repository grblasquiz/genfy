import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "jwt",
    "en": "jwt"
  },
  "emoji": "🎟️",
  "category": "security",
  "es": {
    "pageTitle": "JWT — Glosario | Genfy",
    "metaDesc": "JWT (JSON Web Token) es un formato compacto firmado para transmitir claims entre partes. Usado masivamente en autenticación de APIs y sistemas distribuidos.",
    "h1": "JWT",
    "short": "JWT (JSON Web Token) es un estándar abierto (RFC 7519) para transmitir información entre dos partes de forma segura como un objeto JSON firmado digitalmente. Es el formato más usado para autenticación en APIs modernas, single sign-on (SSO) y autorización en sistemas distribuidos.",
    "body": [
      {
        "title": "¿Qué es JWT?",
        "content": "<p>Un JWT es un string codificado en Base64URL compuesto por tres partes separadas por puntos: <code>header.payload.signature</code>. A diferencia de las sesiones tradicionales que requieren almacenamiento en servidor, un JWT es <strong>stateless</strong>: toda la información necesaria para validarlo está contenida en el token mismo.</p><p>El <strong>header</strong> especifica el algoritmo de firma (HS256, RS256, ES256). El <strong>payload</strong> contiene los <em>claims</em> (afirmaciones): datos como user ID, roles, expiración. La <strong>signature</strong> garantiza que el token no fue alterado: se genera hasheando header + payload con una clave secreta o privada.</p><p>Ejemplo de JWT decodificado:</p><code>{ \"sub\": \"1234567890\", \"name\": \"Juan Pérez\", \"admin\": true, \"iat\": 1516239022, \"exp\": 1516242622 }</code><p>El servidor puede verificar la firma sin consultar una base de datos, lo que hace JWT ideal para <strong>microservicios</strong> y <strong>APIs escalables</strong>. El problema: una vez emitido, no podés invalidar un JWT antes de su expiración natural.</p>"
      },
      {
        "title": "Cómo funciona JWT",
        "content": "<p>El flujo típico de autenticación con JWT:</p><ol><li><strong>Login</strong>: el usuario envía credenciales (email + password). El servidor verifica y genera un JWT firmado con una clave secreta.</li><li><strong>Almacenamiento</strong>: el cliente guarda el JWT (típicamente en localStorage, sessionStorage o una cookie HttpOnly).</li><li><strong>Requests subsiguientes</strong>: el cliente incluye el JWT en el header <code>Authorization: Bearer {token}</code>.</li><li><strong>Validación</strong>: el servidor verifica la firma del JWT. Si es válida, extrae los claims (user ID, roles) sin consultar la DB.</li></ol><p>La firma se genera con HMAC (algoritmos HS256/384/512 con clave simétrica) o RSA/ECDSA (algoritmos RS256/ES256 con clave asimétrica). HMAC es más simple pero requiere que todos los servicios compartan la misma secret key. RSA permite que cualquier servicio verifique con la clave pública, pero solo el auth service firma con la privada.</p><p>Campos estándar en el payload: <code>iss</code> (issuer), <code>sub</code> (subject/user ID), <code>aud</code> (audience), <code>exp</code> (expiration timestamp), <code>iat</code> (issued at), <code>nbf</code> (not before).</p>"
      },
      {
        "title": "Cuándo usar JWT",
        "content": "<p>JWT es ideal para:</p><ul><li><strong>APIs stateless</strong>: autenticación sin sesiones en servidor, facilitando escalamiento horizontal.</li><li><strong>Single Sign-On (SSO)</strong>: un token emitido por un servicio de autenticación central es válido en múltiples aplicaciones.</li><li><strong>Microservicios</strong>: cada servicio puede verificar independientemente sin consultar un auth service centralizado.</li><li><strong>Mobile apps</strong>: evita gestionar cookies, el token se almacena en secure storage del dispositivo.</li><li><strong>Cross-domain auth</strong>: a diferencia de cookies (sujetas a SameSite), un JWT puede enviarse en headers a cualquier dominio.</li></ul><p>Casos donde JWT NO es ideal: aplicaciones donde necesitás invalidar tokens inmediatamente (logout instantáneo, ban de usuario). En esos casos necesitás un <strong>token blacklist</strong> en servidor, perdiendo el beneficio stateless.</p>"
      },
      {
        "title": "Seguridad y mejores prácticas con JWT",
        "content": "<p>Errores comunes y cómo evitarlos:</p><ul><li><strong>Algoritmo \"none\"</strong>: nunca aceptes JWTs con <code>\"alg\": \"none\"</code>. Esto permite tokens sin firma.</li><li><strong>Expiración corta</strong>: usá tiempos de expiración razonables (15min-1hora). Para sesiones largas, implementá <strong>refresh tokens</strong>.</li><li><strong>No guardes secretos en el payload</strong>: el payload es visible (solo Base64, no encriptado). Nunca incluyas passwords, API keys o datos sensibles.</li><li><strong>HttpOnly cookies</strong>: si usás cookies para almacenar JWT, marcalas HttpOnly + Secure + SameSite para proteger contra XSS y CSRF.</li><li><strong>Validación estricta</strong>: siempre verificá la firma, el issuer (<code>iss</code>), la audiencia (<code>aud</code>) y la expiración (<code>exp</code>).</li></ul><p>Para logout instantáneo: implementá un <strong>token versioning system</strong> (incluí un <code>jti</code> claim único) o una whitelist/blacklist en Redis con TTL igual a la expiración del token.</p><p>Alternativa moderna: <strong>PASETO</strong> (Platform-Agnostic Security Tokens), diseñado para evitar errores criptográficos comunes de JWT.</p>"
      }
    ],
    "examples": [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1YW4gUMOpcmV6IiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      "Authorization: Bearer {jwt_token}",
      "Refresh token flow: access token (15min) + refresh token (7 días)"
    ],
    "related": [
      "decodificador-jwt",
      "generador-de-api-key"
    ],
    "faq": [
      {
        "q": "¿JWT es encriptado o solo firmado?",
        "a": "Por default es solo firmado (JWS). El payload es visible en Base64. Si necesitás encriptación, usá JWE (JSON Web Encryption), pero es menos común y más complejo."
      },
      {
        "q": "¿Cómo invalido un JWT antes de que expire?",
        "a": "JWT es stateless, no podés invalidarlo directamente. Soluciones: (1) expiración corta + refresh tokens, (2) blacklist en Redis, (3) token versioning con claim jti. Todas agregan estado en servidor."
      },
      {
        "q": "¿Es seguro almacenar JWT en localStorage?",
        "a": "Vulnerable a XSS. Si un script malicioso se ejecuta, puede leer localStorage. Alternativa más segura: HttpOnly cookies (protegen contra XSS pero necesitás CSRF tokens). Ideal: cookies HttpOnly + SameSite=Strict."
      }
    ]
  },
  "en": {
    "pageTitle": "JWT — Glossary | Genfy",
    "metaDesc": "JWT (JSON Web Token) is a compact signed format for transmitting claims between parties. Massively used in API authentication and distributed systems.",
    "h1": "JWT",
    "short": "JWT (JSON Web Token) is an open standard (RFC 7519) for securely transmitting information between two parties as a digitally signed JSON object. It's the most used format for authentication in modern APIs, single sign-on (SSO), and authorization in distributed systems.",
    "body": [
      {
        "title": "What is JWT?",
        "content": "<p>A JWT is a Base64URL-encoded string composed of three parts separated by dots: <code>header.payload.signature</code>. Unlike traditional sessions that require server-side storage, a JWT is <strong>stateless</strong>: all information needed to validate it is contained in the token itself.</p><p>The <strong>header</strong> specifies the signing algorithm (HS256, RS256, ES256). The <strong>payload</strong> contains the <em>claims</em>: data like user ID, roles, expiration. The <strong>signature</strong> guarantees the token wasn't tampered with: it's generated by hashing header + payload with a secret or private key.</p><p>Example of decoded JWT:</p><code>{ \"sub\": \"1234567890\", \"name\": \"John Doe\", \"admin\": true, \"iat\": 1516239022, \"exp\": 1516242622 }</code><p>The server can verify the signature without querying a database, making JWT ideal for <strong>microservices</strong> and <strong>scalable APIs</strong>. The problem: once issued, you can't invalidate a JWT before its natural expiration.</p>"
      },
      {
        "title": "How JWT works",
        "content": "<p>Typical JWT authentication flow:</p><ol><li><strong>Login</strong>: user sends credentials (email + password). Server verifies and generates a JWT signed with a secret key.</li><li><strong>Storage</strong>: client stores the JWT (typically in localStorage, sessionStorage, or an HttpOnly cookie).</li><li><strong>Subsequent requests</strong>: client includes the JWT in the <code>Authorization: Bearer {token}</code> header.</li><li><strong>Validation</strong>: server verifies the JWT signature. If valid, extracts claims (user ID, roles) without querying the DB.</li></ol><p>The signature is generated with HMAC (HS256/384/512 algorithms with symmetric key) or RSA/ECDSA (RS256/ES256 algorithms with asymmetric key). HMAC is simpler but requires all services to share the same secret key. RSA allows any service to verify with the public key, but only the auth service signs with the private key.</p><p>Standard payload fields: <code>iss</code> (issuer), <code>sub</code> (subject/user ID), <code>aud</code> (audience), <code>exp</code> (expiration timestamp), <code>iat</code> (issued at), <code>nbf</code> (not before).</p>"
      },
      {
        "title": "When to use JWT",
        "content": "<p>JWT is ideal for:</p><ul><li><strong>Stateless APIs</strong>: authentication without server-side sessions, facilitating horizontal scaling.</li><li><strong>Single Sign-On (SSO)</strong>: a token issued by a central authentication service is valid across multiple applications.</li><li><strong>Microservices</strong>: each service can verify independently without consulting a centralized auth service.</li><li><strong>Mobile apps</strong>: avoids managing cookies, the token is stored in the device's secure storage.</li><li><strong>Cross-domain auth</strong>: unlike cookies (subject to SameSite), a JWT can be sent in headers to any domain.</li></ul><p>Cases where JWT is NOT ideal: applications where you need to invalidate tokens immediately (instant logout, user ban). In those cases you need a <strong>token blacklist</strong> on the server, losing the stateless benefit.</p>"
      },
      {
        "title": "Security and best practices with JWT",
        "content": "<p>Common mistakes and how to avoid them:</p><ul><li><strong>\"none\" algorithm</strong>: never accept JWTs with <code>\"alg\": \"none\"</code>. This allows unsigned tokens.</li><li><strong>Short expiration</strong>: use reasonable expiration times (15min-1hour). For long sessions, implement <strong>refresh tokens</strong>.</li><li><strong>Don't store secrets in payload</strong>: the payload is visible (only Base64, not encrypted). Never include passwords, API keys, or sensitive data.</li><li><strong>HttpOnly cookies</strong>: if using cookies to store JWT, mark them HttpOnly + Secure + SameSite to protect against XSS and CSRF.</li><li><strong>Strict validation</strong>: always verify signature, issuer (<code>iss</code>), audience (<code>aud</code>), and expiration (<code>exp</code>).</li></ul><p>For instant logout: implement a <strong>token versioning system</strong> (include a unique <code>jti</code> claim) or a whitelist/blacklist in Redis with TTL equal to token expiration.</p><p>Modern alternative: <strong>PASETO</strong> (Platform-Agnostic Security Tokens), designed to avoid common JWT cryptographic errors.</p>"
      }
    ],
    "examples": [
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
      "Authorization: Bearer {jwt_token}",
      "Refresh token flow: access token (15min) + refresh token (7 days)"
    ],
    "related": [
      "jwt-decoder",
      "api-key-generator"
    ],
    "faq": [
      {
        "q": "Is JWT encrypted or just signed?",
        "a": "By default it's only signed (JWS). The payload is visible in Base64. If you need encryption, use JWE (JSON Web Encryption), but it's less common and more complex."
      },
      {
        "q": "How do I invalidate a JWT before it expires?",
        "a": "JWT is stateless, you can't invalidate it directly. Solutions: (1) short expiration + refresh tokens, (2) blacklist in Redis, (3) token versioning with jti claim. All add server-side state."
      },
      {
        "q": "Is it safe to store JWT in localStorage?",
        "a": "Vulnerable to XSS. If a malicious script executes, it can read localStorage. Safer alternative: HttpOnly cookies (protect against XSS but need CSRF tokens). Ideal: HttpOnly cookies + SameSite=Strict."
      }
    ]
  }
};
