import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-json-web-token",
    "en": "jwt-generator"
  },
  "category": "security",
  "emoji": "🎫",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de JWT (JSON Web Token) | Genfy",
    "metaDesc": "Generá JWT de prueba con payload personalizable, algoritmo HS256 y claims estándar. Ideal para testing de APIs, debugging de auth y desarrollo local seguro.",
    "h1": "Generador de JSON Web Token (JWT)",
    "intro": "Creá JWT de prueba con payload, claims y firma HS256 para testear APIs, validar middleware de auth o aprender la estructura del estándar RFC 7519.",
    "tag": "Seguridad",
    "filterLabel": "Componente",
    "countLabel": "Cantidad",
    "generateLabel": "Generar JWT",
    "copyLabel": "Copiar",
    "separator": " ",
    "groups": [
      {
        "id": "subject",
        "label": "Subject (sub)",
        "items": [
          "user_42",
          "admin_main",
          "service_account_payments",
          "test_user_qa",
          "guest_session_ephemeral",
          "device_iot_sensor_01",
          "api_client_external",
          "machine_to_machine_billing",
          "support_agent_tier2",
          "automation_bot_scheduler",
          "auditor_compliance_readonly",
          "developer_local_dev",
          "integration_partner_acme",
          "webhook_receiver_stripe",
          "cron_job_nightly_cleanup",
          "frontend_app_dashboard",
          "mobile_client_ios",
          "internal_metrics_collector",
          "third_party_analytics",
          "test_admin_staging",
          "user_premium_subscriber",
          "user_trial_15days",
          "service_email_dispatcher",
          "anonymous_visitor_session",
          "owner_workspace_root",
          "viewer_readonly_reports",
          "editor_content_blog",
          "moderator_community_lvl1",
          "billing_admin_invoice"
        ]
      },
      {
        "id": "scope",
        "label": "Scopes y permisos",
        "items": [
          "read:users write:users",
          "read:posts write:posts delete:posts",
          "admin:full_access",
          "read:billing write:billing",
          "read:profile",
          "read:analytics",
          "openid profile email",
          "read:orders write:orders refund:orders",
          "read:inventory write:inventory",
          "api:read api:write api:delete",
          "manage:webhooks read:logs",
          "read:dashboard write:reports",
          "files:upload files:download files:delete",
          "users:invite users:remove users:list",
          "settings:read settings:write",
          "tenant:admin workspace:owner",
          "read:notifications write:notifications",
          "payments:process refunds:issue",
          "support:tickets read:knowledge_base",
          "audit:logs read:compliance",
          "auth:login auth:refresh auth:logout",
          "permissions:read permissions:write",
          "campaigns:create campaigns:edit",
          "metrics:read alerts:configure",
          "resources:read resources:write resources:archive",
          "developer:keys developer:sandbox",
          "team:read team:write team:invite",
          "vault:read vault:write vault:rotate",
          "deploy:staging deploy:production rollback:emergency"
        ]
      },
      {
        "id": "expiry",
        "label": "Expiración (exp)",
        "items": [
          "exp en 5 minutos (token corto, alta seguridad)",
          "exp en 15 minutos (típico access token OAuth)",
          "exp en 30 minutos (sesión web estándar)",
          "exp en 1 hora (apps internas con renovación)",
          "exp en 4 horas (sesión laboral típica)",
          "exp en 12 horas (turno de trabajo extendido)",
          "exp en 24 horas (token de día completo)",
          "exp en 7 días (refresh token corto)",
          "exp en 30 días (refresh token estándar)",
          "exp en 90 días (refresh token largo)",
          "exp en 1 año (API key de larga duración)",
          "exp inmediata para test de token expirado",
          "exp en 1 minuto (testing rápido de expiración)",
          "exp en 2 horas (sesión de pago segura)",
          "exp en 8 horas (jornada laboral completa)",
          "exp en 48 horas (token de fin de semana)",
          "exp en 14 días (recovery de password)",
          "exp en 6 meses (suscripción semianual)",
          "exp en 100 años (testing sin expiración práctica)",
          "exp en 10 segundos (test edge case crítico)",
          "exp en 3 minutos (OTP token de seguridad)",
          "exp en 20 minutos (token de transacción)",
          "exp en 45 minutos (asistente colaborativo)",
          "exp en 6 horas (sesión de gaming online)",
          "exp en 72 horas (link de invitación equipo)",
          "exp en 3 días (período de gracia trial)",
          "exp en 60 días (cookie de remember-me)",
          "exp en 180 días (sesión persistente segura)",
          "exp en 5 segundos (test de race condition)"
        ]
      },
      {
        "id": "claims",
        "label": "Claims personalizados",
        "items": [
          "role:admin tenant_id:org_42",
          "email:user@test.com verified:true",
          "plan:enterprise tier:premium",
          "country:AR locale:es-AR",
          "user_id:1234 organization:acme",
          "department:engineering team:backend",
          "permissions:[\"read\",\"write\",\"admin\"]",
          "feature_flags:[\"beta_dashboard\",\"new_pricing\"]",
          "device_id:abc123 platform:ios",
          "session_id:sess_xyz mfa_verified:true",
          "subscription_status:active billing_cycle:monthly",
          "iat_geo:Buenos_Aires ip:192.168.1.1",
          "trial_ends_at:2026-12-31 days_left:30",
          "groups:[\"developers\",\"reviewers\"]",
          "is_employee:true employee_id:E_4521",
          "auth_method:password mfa_type:totp",
          "client_id:web_app version:2.1.0",
          "preferred_language:en timezone:UTC-3",
          "signup_source:google_oauth referral:none",
          "kyc_verified:true risk_score:low",
          "wallet_balance:1500.50 currency:USD",
          "membership_level:gold points:24500",
          "two_factor_required:true backup_codes_remaining:5",
          "profile_complete:false missing_fields:[\"phone\",\"address\"]",
          "api_quota_remaining:9850 reset_at:midnight",
          "consent_marketing:true consent_analytics:false",
          "last_login_ip:200.45.67.89 login_count:127",
          "company_size:50-200 industry:fintech",
          "beta_program:true early_access_features:enabled"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de un JWT: header, payload y signature",
        "body": "<p>Un JWT consiste de tres partes separadas por puntos: <strong>header.payload.signature</strong>. El header (codificado base64url) declara el algoritmo de firma y tipo de token, típicamente <em>{`{\"alg\":\"HS256\",\"typ\":\"JWT\"}`}</em>. El payload contiene los claims: información sobre el usuario y metadata del token. La signature se genera firmando header+payload con un secreto (HS256) o clave privada (RS256, ES256), garantizando integridad pero no confidencialidad del contenido.</p><p>Los <strong>claims estándar registrados</strong> en RFC 7519 incluyen: <em>iss</em> (issuer), <em>sub</em> (subject - usualmente user ID), <em>aud</em> (audience - quién debe consumir el token), <em>exp</em> (expiration timestamp), <em>nbf</em> (not before), <em>iat</em> (issued at) y <em>jti</em> (JWT ID único para revocación). Estos claims tienen significado universal y deben usarse antes que claims custom para máxima compatibilidad entre librerías.</p><p>El payload <strong>no es secreto</strong>. Está codificado en base64, no encriptado. Cualquiera con acceso al token puede leer su contenido en jwt.io o decodificándolo manualmente. Nunca incluyas passwords, claves privadas, datos médicos o información sensible en el payload. Lo que sí garantiza la firma es que el contenido no fue alterado: si alguien modifica el payload, la signature ya no coincide y el token es rechazado por el validador.</p>"
      },
      {
        "h2": "HS256 vs RS256: cuándo usar cada algoritmo",
        "body": "<p><strong>HS256 (HMAC-SHA256)</strong> usa un secreto compartido. El mismo string firma y verifica el token. Es ideal cuando quien emite y quien valida es el mismo servicio: una API monolítica firmando sus propios tokens. La ventaja es simplicidad y velocidad. La desventaja: si tres servicios necesitan validar tokens, todos deben tener el secreto, multiplicando el riesgo de filtración. Cualquier servicio comprometido puede falsificar tokens.</p><p><strong>RS256 (RSA con SHA-256)</strong> usa par de claves: privada para firmar, pública para verificar. El emisor guarda la privada en máxima seguridad. Los validadores solo necesitan la pública (no es secreta). Esto es ideal para arquitecturas microservicios o sistemas federados como OAuth/OIDC: Google emite tokens, mil aplicaciones los validan sin compartir secretos. Las claves públicas se distribuyen via JWKS (JSON Web Key Set) endpoint estándar.</p><p><strong>ES256 (ECDSA)</strong> es similar a RS256 pero con curvas elípticas. Las firmas son mucho más cortas (64 bytes vs 256+ de RSA), reduciendo el tamaño del JWT. Performance comparable o mejor. La adopción crece pero RS256 sigue siendo más universal. Para producción nueva, ES256 es excelente opción. Para integraciones con sistemas legacy, RS256 garantiza máxima compatibilidad. Nunca uses 'none' como algoritmo: vulnerabilidad histórica explotada en 2015 que sigue apareciendo en CTFs.</p>"
      },
      {
        "h2": "Errores de seguridad comunes con JWT",
        "body": "<p>El error más caro es <strong>no validar la firma</strong>. Algunas librerías permiten decodificar sin validar (función decode vs verify). Si tu código solo decodifica pero no verifica, cualquiera puede inventar un payload, codificarlo en base64 y enviarlo. Tu API lo aceptaría como válido. Siempre usá funciones de verify que validen la signature contra tu secreto o clave pública antes de confiar en el contenido del payload recibido.</p><p>Otro error es <strong>aceptar el algoritmo del header sin validar</strong>. Vulnerabilidad CVE-2015-9235: atacante envía token con alg='none' y muchas librerías lo aceptaban. Variante peor: cambiar HS256 a RS256 usando la clave pública como secreto HMAC. Solución: hardcodeá el algoritmo esperado en tu código de validación. No confíes en el header del token incoming. Si esperás RS256, rechazá explícitamente cualquier otro algoritmo aunque venga firmado correctamente.</p><p>El tercer error es <strong>tokens de larga duración sin revocación</strong>. JWT son stateless: una vez emitidos, valen hasta exp. Si emitís token de 30 días y el usuario cambia password o reporta robo, el token sigue siendo válido. Solución: tokens cortos (15 min) con refresh token de duración larga, blacklist de jti revocados en Redis, o validación contra base de datos de versión de credenciales. Sin estrategia de revocación, JWT pierden ventajas frente a sesiones tradicionales con cookies firmadas.</p>"
      },
      {
        "h2": "Casos de uso reales: cuándo SÍ y cuándo NO usar JWT",
        "body": "<p>JWT brilla en <strong>autenticación entre servicios</strong>. Microservicios que se llaman entre sí pueden firmar requests sin gestionar sesiones compartidas. APIs públicas con OAuth 2.0 usan JWT como access tokens. Single Sign-On (SSO) con OIDC distribuye identity tokens firmados que cada aplicación valida independientemente. Para machine-to-machine, JWT es el estándar de facto en arquitecturas modernas serverless y multi-cloud.</p><p>JWT NO es ideal para <strong>sesiones de usuario tradicional en monolito</strong>. Una cookie de sesión con identificador opaco apuntando a Redis es más simple, permite revocación instantánea y no expone metadata. Si tu app es un Rails o Django monolítico con un servidor, no ganás nada con JWT versus sesión clásica. La complejidad de manejar refresh tokens, revocación y rotación de claves no compensa para casos simples sin dependencias federadas reales.</p><p>Otro caso problemático es <strong>JWT en cookies con datos sensibles</strong>. Si guardás roles y permisos en el token, cada cambio requiere re-emitir el token. Si el admin revoca permisos, el usuario sigue teniendo acceso hasta exp. Para apps con permisos volátiles, mejor consultá la fuente autoritativa (DB) en cada request. El token solo confirma identidad; los permisos se verifican en tiempo real. Esto pierde performance pero gana seguridad y consistencia operativa real.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Qué tan seguros son los JWT generados aquí?",
        "a": "Solo para testing. Usá secretos públicos predecibles, no aleatorios. NUNCA uses tokens generados aquí en producción. Para prod, usá librerías oficiales (jsonwebtoken en Node, PyJWT en Python) con secretos generados con crypto.randomBytes o equivalente seguro de mínimo 256 bits."
      },
      {
        "q": "¿Puedo usar JWT como cookie de sesión?",
        "a": "Sí, pero con cuidado. Configurá HttpOnly, Secure y SameSite=Strict. JWT en localStorage es vulnerable a XSS. JWT en cookies es vulnerable a CSRF si no usás SameSite. La opción más segura es access token corto en memoria + refresh token httponly cookie con rotación implementada correctamente."
      },
      {
        "q": "¿Cuál es el tamaño máximo recomendado de un JWT?",
        "a": "Debajo de 8KB para evitar problemas con headers HTTP. Idealmente bajo 1KB. Si tu payload crece mucho, estás guardando demasiado en el token. Mové datos volátiles a tu backend y consultalo por user_id. El token debe contener identidad y claims mínimos para tomar decisiones rápidas de routing."
      },
      {
        "q": "¿JWT reemplaza completamente a OAuth?",
        "a": "No. OAuth 2.0 es un framework de autorización completo (flows, endpoints, scopes). JWT es un formato de token que OAuth puede usar (junto con tokens opacos). OIDC extiende OAuth agregando identity tokens en formato JWT estándar. JWT es la pieza, OAuth/OIDC es el sistema completo de autenticación federada."
      }
    ]
  },
  "en": {
    "pageTitle": "JWT (JSON Web Token) Generator | Genfy",
    "metaDesc": "Generate test JWTs with customizable payload, HS256 algorithm, and standard claims. Ideal for API testing, auth debugging, and secure local development.",
    "h1": "JSON Web Token (JWT) Generator",
    "intro": "Create test JWTs with payload, claims, and HS256 signature to test APIs, validate auth middleware, or learn the structure of the RFC 7519 standard.",
    "tag": "Security",
    "filterLabel": "Component",
    "countLabel": "Amount",
    "generateLabel": "Generate JWT",
    "copyLabel": "Copy",
    "separator": " ",
    "groups": [
      {
        "id": "subject",
        "label": "Subject (sub)",
        "items": [
          "user_42",
          "admin_main",
          "service_account_payments",
          "test_user_qa",
          "guest_session_ephemeral",
          "device_iot_sensor_01",
          "api_client_external",
          "machine_to_machine_billing",
          "support_agent_tier2",
          "automation_bot_scheduler",
          "auditor_compliance_readonly",
          "developer_local_dev",
          "integration_partner_acme",
          "webhook_receiver_stripe",
          "cron_job_nightly_cleanup",
          "frontend_app_dashboard",
          "mobile_client_ios",
          "internal_metrics_collector",
          "third_party_analytics",
          "test_admin_staging",
          "user_premium_subscriber",
          "user_trial_15days",
          "service_email_dispatcher",
          "anonymous_visitor_session",
          "owner_workspace_root",
          "viewer_readonly_reports",
          "editor_content_blog",
          "moderator_community_lvl1",
          "billing_admin_invoice"
        ]
      },
      {
        "id": "scope",
        "label": "Scopes and permissions",
        "items": [
          "read:users write:users",
          "read:posts write:posts delete:posts",
          "admin:full_access",
          "read:billing write:billing",
          "read:profile",
          "read:analytics",
          "openid profile email",
          "read:orders write:orders refund:orders",
          "read:inventory write:inventory",
          "api:read api:write api:delete",
          "manage:webhooks read:logs",
          "read:dashboard write:reports",
          "files:upload files:download files:delete",
          "users:invite users:remove users:list",
          "settings:read settings:write",
          "tenant:admin workspace:owner",
          "read:notifications write:notifications",
          "payments:process refunds:issue",
          "support:tickets read:knowledge_base",
          "audit:logs read:compliance",
          "auth:login auth:refresh auth:logout",
          "permissions:read permissions:write",
          "campaigns:create campaigns:edit",
          "metrics:read alerts:configure",
          "resources:read resources:write resources:archive",
          "developer:keys developer:sandbox",
          "team:read team:write team:invite",
          "vault:read vault:write vault:rotate",
          "deploy:staging deploy:production rollback:emergency"
        ]
      },
      {
        "id": "expiry",
        "label": "Expiration (exp)",
        "items": [
          "exp in 5 minutes (short token, high security)",
          "exp in 15 minutes (typical OAuth access token)",
          "exp in 30 minutes (standard web session)",
          "exp in 1 hour (internal apps with renewal)",
          "exp in 4 hours (typical work session)",
          "exp in 12 hours (extended work shift)",
          "exp in 24 hours (full day token)",
          "exp in 7 days (short refresh token)",
          "exp in 30 days (standard refresh token)",
          "exp in 90 days (long refresh token)",
          "exp in 1 year (long-duration API key)",
          "exp immediate for expired token testing",
          "exp in 1 minute (rapid expiration testing)",
          "exp in 2 hours (secure payment session)",
          "exp in 8 hours (full work day)",
          "exp in 48 hours (weekend token)",
          "exp in 14 days (password recovery)",
          "exp in 6 months (semi-annual subscription)",
          "exp in 100 years (testing without practical expiration)",
          "exp in 10 seconds (critical edge case test)",
          "exp in 3 minutes (OTP security token)",
          "exp in 20 minutes (transaction token)",
          "exp in 45 minutes (collaborative assistant)",
          "exp in 6 hours (online gaming session)",
          "exp in 72 hours (team invite link)",
          "exp in 3 days (trial grace period)",
          "exp in 60 days (remember-me cookie)",
          "exp in 180 days (secure persistent session)",
          "exp in 5 seconds (race condition test)"
        ]
      },
      {
        "id": "claims",
        "label": "Custom claims",
        "items": [
          "role:admin tenant_id:org_42",
          "email:user@test.com verified:true",
          "plan:enterprise tier:premium",
          "country:US locale:en-US",
          "user_id:1234 organization:acme",
          "department:engineering team:backend",
          "permissions:[\"read\",\"write\",\"admin\"]",
          "feature_flags:[\"beta_dashboard\",\"new_pricing\"]",
          "device_id:abc123 platform:ios",
          "session_id:sess_xyz mfa_verified:true",
          "subscription_status:active billing_cycle:monthly",
          "iat_geo:New_York ip:192.168.1.1",
          "trial_ends_at:2026-12-31 days_left:30",
          "groups:[\"developers\",\"reviewers\"]",
          "is_employee:true employee_id:E_4521",
          "auth_method:password mfa_type:totp",
          "client_id:web_app version:2.1.0",
          "preferred_language:en timezone:UTC-5",
          "signup_source:google_oauth referral:none",
          "kyc_verified:true risk_score:low",
          "wallet_balance:1500.50 currency:USD",
          "membership_level:gold points:24500",
          "two_factor_required:true backup_codes_remaining:5",
          "profile_complete:false missing_fields:[\"phone\",\"address\"]",
          "api_quota_remaining:9850 reset_at:midnight",
          "consent_marketing:true consent_analytics:false",
          "last_login_ip:200.45.67.89 login_count:127",
          "company_size:50-200 industry:fintech",
          "beta_program:true early_access_features:enabled"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of a JWT: header, payload, and signature",
        "body": "<p>A JWT consists of three parts separated by dots: <strong>header.payload.signature</strong>. The header (base64url encoded) declares the signing algorithm and token type, typically <em>{`{\"alg\":\"HS256\",\"typ\":\"JWT\"}`}</em>. The payload contains the claims: information about the user and token metadata. The signature is generated by signing header+payload with a secret (HS256) or private key (RS256, ES256), guaranteeing integrity but not content confidentiality.</p><p>The <strong>standard registered claims</strong> in RFC 7519 include: <em>iss</em> (issuer), <em>sub</em> (subject - usually user ID), <em>aud</em> (audience - who should consume the token), <em>exp</em> (expiration timestamp), <em>nbf</em> (not before), <em>iat</em> (issued at), and <em>jti</em> (unique JWT ID for revocation). These claims have universal meaning and should be used before custom claims for maximum compatibility between libraries.</p><p>The payload <strong>is not secret</strong>. It's base64-encoded, not encrypted. Anyone with access to the token can read its content at jwt.io or by decoding manually. Never include passwords, private keys, medical data, or sensitive information in the payload. What the signature does guarantee is that content wasn't altered: if someone modifies the payload, the signature no longer matches and the token is rejected by the validator.</p>"
      },
      {
        "h2": "HS256 vs RS256: when to use each algorithm",
        "body": "<p><strong>HS256 (HMAC-SHA256)</strong> uses a shared secret. The same string signs and verifies the token. It's ideal when whoever issues and validates is the same service: a monolithic API signing its own tokens. The advantage is simplicity and speed. The disadvantage: if three services need to validate tokens, all must have the secret, multiplying leak risk. Any compromised service can forge tokens.</p><p><strong>RS256 (RSA with SHA-256)</strong> uses a key pair: private to sign, public to verify. The issuer keeps the private key in maximum security. Validators only need the public one (it's not secret). This is ideal for microservices architectures or federated systems like OAuth/OIDC: Google issues tokens, a thousand applications validate them without sharing secrets. Public keys are distributed via standard JWKS (JSON Web Key Set) endpoint.</p><p><strong>ES256 (ECDSA)</strong> is similar to RS256 but with elliptic curves. Signatures are much shorter (64 bytes vs 256+ for RSA), reducing JWT size. Comparable or better performance. Adoption is growing but RS256 remains more universal. For new production, ES256 is an excellent choice. For integration with legacy systems, RS256 guarantees maximum compatibility. Never use 'none' as algorithm: historic vulnerability exploited in 2015 that still appears in CTFs.</p>"
      },
      {
        "h2": "Common security errors with JWT",
        "body": "<p>The most expensive mistake is <strong>not validating the signature</strong>. Some libraries allow decoding without validating (decode vs verify function). If your code only decodes but doesn't verify, anyone can invent a payload, encode it in base64, and send it. Your API would accept it as valid. Always use verify functions that validate the signature against your secret or public key before trusting the received payload content.</p><p>Another error is <strong>accepting the header algorithm without validating</strong>. CVE-2015-9235 vulnerability: attacker sends token with alg='none' and many libraries accepted it. Worse variant: changing HS256 to RS256 using the public key as HMAC secret. Solution: hardcode the expected algorithm in your validation code. Don't trust the incoming token's header. If you expect RS256, explicitly reject any other algorithm even if signed correctly.</p><p>The third error is <strong>long-duration tokens without revocation</strong>. JWTs are stateless: once issued, valid until exp. If you issue a 30-day token and the user changes password or reports theft, the token remains valid. Solution: short tokens (15 min) with long-duration refresh token, blacklist of revoked jti in Redis, or validation against credentials version database. Without revocation strategy, JWTs lose advantages over traditional sessions with signed cookies.</p>"
      },
      {
        "h2": "Real use cases: when to USE and when NOT to use JWT",
        "body": "<p>JWT shines in <strong>authentication between services</strong>. Microservices that call each other can sign requests without managing shared sessions. Public APIs with OAuth 2.0 use JWT as access tokens. Single Sign-On (SSO) with OIDC distributes signed identity tokens that each application validates independently. For machine-to-machine, JWT is the de facto standard in modern serverless and multi-cloud architectures.</p><p>JWT is NOT ideal for <strong>traditional user sessions in monolith</strong>. A session cookie with opaque identifier pointing to Redis is simpler, allows instant revocation, and doesn't expose metadata. If your app is a Rails or Django monolith with one server, you gain nothing with JWT versus classic session. The complexity of handling refresh tokens, revocation, and key rotation doesn't compensate for simple cases without real federated dependencies.</p><p>Another problematic case is <strong>JWT in cookies with sensitive data</strong>. If you store roles and permissions in the token, each change requires re-issuing the token. If admin revokes permissions, the user keeps access until exp. For apps with volatile permissions, better consult the authoritative source (DB) on each request. The token only confirms identity; permissions are verified in real time. This loses performance but gains real operational security and consistency.</p>"
      }
    ],
    "faq": [
      {
        "q": "How secure are the JWTs generated here?",
        "a": "Only for testing. They use predictable public secrets, not random ones. NEVER use tokens generated here in production. For prod, use official libraries (jsonwebtoken in Node, PyJWT in Python) with secrets generated using crypto.randomBytes or secure equivalent of minimum 256 bits."
      },
      {
        "q": "Can I use JWT as session cookie?",
        "a": "Yes, but carefully. Configure HttpOnly, Secure, and SameSite=Strict. JWT in localStorage is vulnerable to XSS. JWT in cookies is vulnerable to CSRF if you don't use SameSite. The most secure option is short access token in memory + refresh token httponly cookie with rotation implemented correctly."
      },
      {
        "q": "What's the maximum recommended JWT size?",
        "a": "Below 8KB to avoid HTTP header issues. Ideally under 1KB. If your payload grows much, you're storing too much in the token. Move volatile data to your backend and query by user_id. The token should contain identity and minimal claims for fast routing decisions."
      },
      {
        "q": "Does JWT completely replace OAuth?",
        "a": "No. OAuth 2.0 is a complete authorization framework (flows, endpoints, scopes). JWT is a token format that OAuth can use (along with opaque tokens). OIDC extends OAuth by adding identity tokens in standard JWT format. JWT is the piece, OAuth/OIDC is the complete federated authentication system."
      }
    ]
  }
};
