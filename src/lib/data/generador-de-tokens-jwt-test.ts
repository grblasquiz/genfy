import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-tokens-jwt-test",
    "en": "jwt-test-token-generator"
  },
  "category": "security",
  "emoji": "🎫",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de JWT de Prueba | Genfy",
    "metaDesc": "Crea tokens JWT válidos con claims personalizados para testing local. Headers, payloads y escenarios edge-case sin tocar producción ni exponer secrets.",
    "h1": "Generador de JWT de Prueba",
    "intro": "Generá JWTs de test con claims realistas para tus ambientes locales. Headers configurables, payloads edge-case y escenarios de expiración sin contaminar tus secrets de producción.",
    "tag": "Seguridad",
    "filterLabel": "Tipo de claim",
    "countLabel": "Cantidad",
    "generateLabel": "Generar tokens",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "standard",
        "label": "Standard claims (RFC 7519)",
        "items": [
          "{ \"iss\": \"https://api.example.com\", \"sub\": \"user123\", \"aud\": \"mobile-app\", \"exp\": 1735689600, \"iat\": 1704067200 }",
          "{ \"iss\": \"auth.service\", \"sub\": \"admin@example.com\", \"exp\": 1740960000, \"nbf\": 1735689600, \"jti\": \"a7f3d2c1\" }",
          "{ \"sub\": \"device:98765\", \"aud\": [\"api.svc\", \"dashboard\"], \"exp\": 1767225600, \"iat\": 1704067200 }",
          "{ \"iss\": \"https://auth0.tenant.com\", \"sub\": \"oauth2|g00gl3\", \"aud\": \"client_abc123\", \"exp\": 1735776000 }",
          "{ \"sub\": \"service-account-prod\", \"iss\": \"k8s.cluster.local\", \"aud\": \"https://vault.internal\", \"exp\": 1735862400, \"iat\": 1735689600 }",
          "{ \"iss\": \"idp.corporate.net\", \"sub\": \"employee:5421\", \"aud\": \"intranet\", \"exp\": 1735948800, \"nbf\": 1735689600 }",
          "{ \"sub\": \"temp-guest-user\", \"aud\": \"trial-api\", \"exp\": 1735776000, \"iat\": 1735689600, \"jti\": \"tmp-001\" }",
          "{ \"iss\": \"webhook.service\", \"sub\": \"integration:stripe\", \"aud\": \"payment-handler\", \"exp\": 1736035200 }",
          "{ \"sub\": \"bot:slack-notifier\", \"iss\": \"automation.internal\", \"aud\": \"https://slack-relay\", \"exp\": 1735862400 }",
          "{ \"iss\": \"sso.enterprise.io\", \"sub\": \"fed:user@domain.com\", \"aud\": [\"app1\", \"app2\"], \"exp\": 1767225600, \"iat\": 1704067200 }"
        ]
      },
      {
        "id": "custom",
        "label": "Custom application claims",
        "items": [
          "{ \"sub\": \"user:42\", \"roles\": [\"admin\", \"editor\"], \"tenant_id\": \"acme-corp\", \"exp\": 1735689600 }",
          "{ \"sub\": \"api-key:live_abc\", \"scopes\": [\"read:users\", \"write:orders\"], \"rate_limit\": 1000, \"exp\": 1767225600 }",
          "{ \"sub\": \"device:mobile-ios\", \"device_id\": \"iPhone14,3\", \"app_version\": \"2.5.1\", \"exp\": 1735776000 }",
          "{ \"sub\": \"session:xyz789\", \"user_id\": 1024, \"permissions\": [\"create\", \"delete\"], \"mfa_verified\": true, \"exp\": 1735689600 }",
          "{ \"sub\": \"org:startup-inc\", \"plan\": \"enterprise\", \"seats\": 50, \"features\": [\"sso\", \"audit-log\"], \"exp\": 1767225600 }",
          "{ \"sub\": \"contractor:ext-dev\", \"project_access\": [\"proj-alpha\"], \"clearance_level\": 2, \"exp\": 1735948800 }",
          "{ \"sub\": \"webhook:gh-action\", \"repo\": \"org/repo\", \"ref\": \"refs/heads/main\", \"sha\": \"abc123def\", \"exp\": 1735689600 }",
          "{ \"sub\": \"partner:reseller-42\", \"commission_rate\": 0.15, \"active_deals\": 3, \"exp\": 1767225600 }",
          "{ \"sub\": \"internal-tool\", \"environment\": \"staging\", \"build\": \"v1.2.3-rc1\", \"exp\": 1735776000 }",
          "{ \"sub\": \"guest:trial\", \"trial_ends\": 1736467200, \"limits\": {\"api_calls\": 100, \"storage_mb\": 50}, \"exp\": 1735689600 }"
        ]
      },
      {
        "id": "edge",
        "label": "Edge cases & testing scenarios",
        "items": [
          "{ \"sub\": \"expired-token\", \"exp\": 1609459200, \"iat\": 1609372800 }",
          "{ \"sub\": \"not-yet-valid\", \"nbf\": 1893456000, \"exp\": 1893542400, \"iat\": 1735689600 }",
          "{ \"sub\": \"no-expiry\", \"iat\": 1735689600 }",
          "{ \"sub\": \"malformed-aud\", \"aud\": 12345, \"exp\": 1735689600 }",
          "{ \"sub\": \"missing-sub\", \"iss\": \"test.issuer\", \"exp\": 1735689600 }",
          "{ \"sub\": \"\\u0000null-byte-attack\", \"exp\": 1735689600 }",
          "{ \"sub\": \"user:1'; DROP TABLE users;--\", \"exp\": 1735689600 }",
          "{ \"sub\": \"very-long-claim-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\", \"custom_field\": \"b\".repeat(1000), \"exp\": 1735689600 }",
          "{ \"sub\": \"duplicate-claims\", \"exp\": 1735689600, \"exp\": 1767225600 }",
          "{ \"sub\": \"empty-roles\", \"roles\": [], \"permissions\": {}, \"exp\": 1735689600 }",
          "{ \"sub\": \"special-chars-💀\", \"emoji\": \"🔐\", \"exp\": 1735689600 }",
          "{ \"sub\": \"numeric-sub\", \"sub\": 999999, \"exp\": 1735689600 }",
          "{ \"iss\": \"http://evil.com\", \"sub\": \"admin\", \"aud\": \"your-api\", \"exp\": 1735689600 }",
          "{ \"sub\": \"token-with-nested\", \"metadata\": {\"nested\": {\"deeply\": {\"claim\": \"value\"}}}, \"exp\": 1735689600 }",
          "{ \"sub\": \"boolean-claims\", \"is_admin\": \"true\", \"active\": 1, \"exp\": 1735689600 }"
        ]
      },
      {
        "id": "headers",
        "label": "Header configurations",
        "items": [
          "{ \"alg\": \"HS256\", \"typ\": \"JWT\" }",
          "{ \"alg\": \"RS256\", \"typ\": \"JWT\", \"kid\": \"key-2024-01\" }",
          "{ \"alg\": \"ES256\", \"typ\": \"JWT\" }",
          "{ \"alg\": \"PS256\", \"typ\": \"JWT\", \"kid\": \"prod-signing-key\" }",
          "{ \"alg\": \"none\", \"typ\": \"JWT\" }",
          "{ \"alg\": \"HS512\", \"typ\": \"JWT\", \"cty\": \"JWT\" }",
          "{ \"alg\": \"RS384\", \"typ\": \"JWT\", \"x5t\": \"thumbprint123\" }",
          "{ \"alg\": \"EdDSA\", \"typ\": \"JWT\", \"kid\": \"ed25519-key-1\" }",
          "{ \"alg\": \"HS256\", \"typ\": \"JWT\", \"kid\": \"rotated-key-2024-03\", \"crit\": [\"exp\"] }",
          "{ \"alg\": \"RS256\", \"typ\": \"at+jwt\", \"kid\": \"oauth-key\" }"
        ]
      },
      {
        "id": "oauth",
        "label": "OAuth 2.0 & OIDC claims",
        "items": [
          "{ \"sub\": \"user@example.com\", \"email\": \"user@example.com\", \"email_verified\": true, \"name\": \"Test User\", \"exp\": 1735689600 }",
          "{ \"sub\": \"oauth2|github|12345\", \"preferred_username\": \"dev-user\", \"given_name\": \"Dev\", \"family_name\": \"User\", \"exp\": 1735776000 }",
          "{ \"sub\": \"federated:google:xyz\", \"email\": \"test@gmail.com\", \"picture\": \"https://lh3.googleusercontent.com/a/default\", \"exp\": 1735689600 }",
          "{ \"sub\": \"client:service-app\", \"client_id\": \"app_abc123\", \"scope\": \"read write\", \"exp\": 1735776000 }",
          "{ \"sub\": \"user:1001\", \"groups\": [\"developers\", \"qa-team\"], \"org_id\": \"company-42\", \"exp\": 1735689600 }",
          "{ \"sub\": \"device-flow:tv-app\", \"device_code\": \"dev_ABC\", \"scope\": \"streaming\", \"exp\": 1735948800 }",
          "{ \"sub\": \"delegated:admin-on-behalf\", \"act\": {\"sub\": \"regular-user\"}, \"exp\": 1735689600 }",
          "{ \"sub\": \"refresh-context\", \"scope\": \"offline_access openid\", \"sid\": \"session-abc\", \"exp\": 1767225600 }",
          "{ \"sub\": \"pkce-flow:mobile\", \"c_hash\": \"code_challenge_hash\", \"at_hash\": \"access_token_hash\", \"exp\": 1735689600 }",
          "{ \"sub\": \"user:social-login\", \"identities\": [{\"provider\": \"twitter\", \"user_id\": \"98765\"}], \"exp\": 1735776000 }"
        ]
      },
      {
        "id": "microservices",
        "label": "Microservices & service mesh",
        "items": [
          "{ \"iss\": \"https://istio-pilot.istio-system\", \"sub\": \"spiffe://cluster.local/ns/default/sa/service-a\", \"aud\": \"service-b.default.svc.cluster.local\", \"exp\": 1735689600 }",
          "{ \"sub\": \"kubernetes-service-account:prod/payment-svc\", \"namespace\": \"prod\", \"pod\": \"payment-7f8d9c-xk2l\", \"exp\": 1735776000 }",
          "{ \"iss\": \"vault.hashicorp.com\", \"sub\": \"role:db-reader\", \"policies\": [\"read-only\", \"audit\"], \"exp\": 1735948800 }",
          "{ \"sub\": \"lambda:us-east-1:function-name\", \"aws_request_id\": \"abc-123\", \"function_version\": \"$LATEST\", \"exp\": 1735689600 }",
          "{ \"sub\": \"gcp:service-account@project.iam\", \"email\": \"svc@project.iam.gserviceaccount.com\", \"scopes\": [\"cloud-platform\"], \"exp\": 1735776000 }",
          "{ \"iss\": \"azure-ad\", \"sub\": \"managed-identity:vm-prod-01\", \"tid\": \"tenant-guid\", \"exp\": 1735689600 }",
          "{ \"sub\": \"consul-service:api-gateway\", \"service_id\": \"api-gw-instance-3\", \"datacenter\": \"dc1\", \"exp\": 1735776000 }",
          "{ \"sub\": \"linkerd-identity:web.prod\", \"l5d-identity\": \"web.prod.serviceaccount.identity.linkerd.cluster.local\", \"exp\": 1735689600 }",
          "{ \"iss\": \"spire-server\", \"sub\": \"spiffe://example.org/workload\", \"aud\": \"spiffe://example.org/backend\", \"exp\": 1735948800 }",
          "{ \"sub\": \"dapr-app:order-processor\", \"app_id\": \"order-processor\", \"namespace\": \"production\", \"exp\": 1735689600 }"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué nunca deberías usar JWTs reales en desarrollo local",
        "body": "<p>El error más común: copiar un JWT de producción, pegarlo en Postman y usarlo para testear localmente. Problema: <strong>ese token tiene claims reales, firma válida y expone tu secret de firma si alguien hookea tu tráfico local</strong>. Un dev de una fintech compartió sin querer un token real en un issue público de GitHub; en 40 minutos tenían requests fraudulentos golpeando el API porque el token incluía scopes de admin y el <code>iss</code> apuntaba a producción.</p><p>Los tokens de test deben tener <strong>issuers ficticios, subs no rastreables a usuarios reales y expirations cortas</strong>. Si tu JWT de dev dice <code>\"sub\": \"admin@company.com\"</code>, estás filtrando información de negocio. Mejor: <code>\"sub\": \"test-user-001\"</code>. Y el <code>iss</code> debe ser algo como <code>https://local.dev</code>, nunca tu dominio real. Esto previene que un token de test accidentalmente válido llegue a producción si hay bug de routing.</p><p>Otro antipatrón: <strong>JWTs de test sin expiración</strong>. Parece conveniente ('nunca tengo que regenerarlo'), pero rompe tu capacidad de testear flujos de refresh y te acostumbra a ignorar <code>exp</code>. Los mejores equipos generan tokens con <code>exp</code> relativo: 'ahora + 1 hora' en dev, 'ahora + 5 minutos' para testear edge cases de expiración. Automatizá la generación en tu seed script o docker-compose, nunca hardcodees tokens en el repo.</p>"
      },
      {
        "h2": "Claims personalizados que rompen en producción si no los testeas",
        "body": "<p>Los standard claims (<code>iss</code>, <code>sub</code>, <code>aud</code>, <code>exp</code>) son solo el principio. La mayoría de los bugs de JWT vienen de <strong>custom claims mal validados</strong>. Ejemplo clásico: tu API espera <code>\"roles\": [\"admin\", \"user\"]</code> (array), pero tu IdP externo manda <code>\"roles\": \"admin\"</code> (string) cuando hay un solo rol. Tu código hace <code>roles.includes('admin')</code> y explota en producción.</p><p>Generá tokens de test con <strong>todas las variantes de shape que podés recibir</strong>: roles como array vacío, roles como string, roles ausente, roles con valores inesperados. Lo mismo para <code>aud</code>: puede ser string único o array, y muchas libs JWT validan diferente según el tipo. Un equipo de auth perdió medio día debugueando por qué Auth0 mandaba <code>\"aud\": [\"api\", \"dashboard\"]</code> (array) pero su mock local tenía <code>\"aud\": \"api\"</code> (string) — el código de validación solo esperaba uno.</p><p>Testing crítico: <strong>nested claims y tipos no-string</strong>. Si tenés <code>\"metadata\": {\"plan\": \"pro\"}</code>, validá que tu parser maneja objetos nested sin romper. Y claims como <code>\"is_admin\": true</code> (boolean) vs <code>\"is_admin\": \"true\"</code> (string) — JavaScript hace type coercion silenciosa que puede pasar tests pero fallar en validaciones estrictas de otros lenguajes. Generá tokens con <code>\"active\": 1</code>, <code>\"active\": \"1\"</code>, <code>\"active\": true</code> y verificá que tu backend maneja los tres o rechaza los incorrectos explícitamente.</p>"
      },
      {
        "h2": "Escenarios edge-case que tu suite de tests está ignorando",
        "body": "<p>El 90% de los tests de JWT verifican el happy path: token válido, no expirado, firma correcta. Los bugs reales vienen del 10% restante. <strong>Tokens sin <code>exp</code></strong>: ¿tu API los rechaza o los acepta como eternos? Según RFC 7519 <code>exp</code> es opcional, pero muchos sistemas asumen que siempre está presente. <strong>Tokens con <code>nbf</code> (not before) en el futuro</strong>: ¿validás que el token todavía no es válido? Un sistema de CI generaba tokens con <code>nbf</code> 5 minutos en el futuro para clock skew, pero el API no verificaba <code>nbf</code> — aceptaba tokens que todavía no deberían funcionar.</p><p>Casos de seguridad críticos: <strong>header con <code>\"alg\": \"none\"</code></strong>. Muchas libs JWT viejas aceptaban tokens sin firma si el header decía 'none', permitiendo que cualquiera forge tokens. Tu código debe rechazar explícitamente <code>alg: none</code> o tener whitelist de algoritmos permitidos. Otro: <strong><code>aud</code> claim ausente o mismatch</strong>. Si tu API espera <code>\"aud\": \"my-api\"</code> pero recibe un token con <code>\"aud\": \"other-api\"</code>, ¿lo rechaza o lo acepta? Ese validation gap permite ataques de token substitution entre servicios.</p><p>Edge case de parsing: <strong>duplicate claims</strong>. JSON permite (técnicamente) <code>{\"exp\": 100, \"exp\": 200}</code>. Algunos parsers toman el primero, otros el último, otros explotan. Generá un token así y verificá que tu stack lo rechaza o maneja consistentemente. Y claims con <strong>valores extremos</strong>: <code>exp</code> con timestamp negativo, <code>iat</code> en el futuro lejano, strings gigantes (1MB en un claim para DoS), null bytes, SQL injection en <code>sub</code>. Si tu token de test solo tiene 'user123', nunca vas a cachear que alguien puede mandar 'user123\\'; DROP TABLE--'.</p>"
      },
      {
        "h2": "Headers JWT que cambian el comportamiento de validación",
        "body": "<p>La mayoría de los devs solo conoce <code>{\"alg\": \"HS256\", \"typ\": \"JWT\"}</code>, pero el header define cómo tu sistema debe validar el token. <strong><code>kid</code> (key ID)</strong>: identifica qué clave usar cuando rotás secrets. Si tu sistema soporta múltiples claves activas (para rotación sin downtime), debe extraer <code>kid</code> del header y buscar la clave correcta. Un token con <code>kid</code> inexistente debe ser rechazado, no validado contra la clave default. Ese fue el vector de un CVE en un OAuth provider popular.</p><p>Algoritmos críticos: <strong>RS256 vs HS256</strong>. RS256 usa asimetría (public/private key), HS256 usa clave simétrica. Si tu código está configurado para RS256 pero recibe un token HS256, algunos parsers toman la clave pública (que es... pública) como secret HMAC y validan incorrectamente. Esto permitía forging de tokens en varias implementaciones. Solución: <strong>whitelist explícita de algoritmos</strong> permitidos, nunca confíes en el <code>alg</code> del header sin verificar contra tu configuración.</p><p><code>cty</code> (content type): si es <code>\"JWT\"</code>, indica nested JWT (un JWT dentro de otro JWT). Tu parser debe deserializar recursivamente. Y <code>crit</code> (critical): lista claims que DEBEN ser entendidos para validar el token. Si tu sistema no implementa un claim listado en <code>crit</code>, debe rechazar el token. Esto previene downgrade attacks donde un atacante remueve validaciones esperando que sean silenciosamente ignoradas. Generá tokens de test con <code>\"crit\": [\"exp\"]</code> y verificá que tu sistema efectivamente valida <code>exp</code> o rechaza el token.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Puedo usar estos JWTs de test en ambientes compartidos de staging?",
        "a": "No sin coordinación. Si el staging usa el mismo issuer y secret que prod, un token de test podría validar contra recursos reales. Mejor: staging debe tener issuer único (ej 'https://staging.api.com') y secrets diferentes."
      },
      {
        "q": "¿Qué algoritmo de firma debería usar para tokens de test local?",
        "a": "HS256 es suficiente para local/dev porque no sale de tu máquina. Para staging compartido, usá RS256 (asimétrico) para simular el comportamiento de producción donde solo el auth server tiene la private key."
      },
      {
        "q": "¿Cómo genero el 'exp' timestamp correcto para que el token dure X horas?",
        "a": "exp es Unix timestamp (segundos desde 1970). En JS: Math.floor(Date.now()/1000) + (horas * 3600). En Python: int(time.time()) + (horas * 3600). Herramientas como jwt.io tienen helpers para esto."
      },
      {
        "q": "Mi API rechaza los tokens generados aquí, ¿qué puede estar mal?",
        "a": "Tres causas comunes: 1) secret de firma incorrecto (el token de test debe estar firmado con el mismo secret de tu ambiente), 2) validación de 'aud' o 'iss' muy estricta, 3) 'exp' ya pasado (regenerá con fecha futura)."
      }
    ]
  },
  "en": {
    "pageTitle": "JWT Test Token Generator | Genfy",
    "metaDesc": "Create valid JWT tokens with custom claims for local testing. Configurable headers, payloads and edge-case scenarios without touching production or exposing secrets.",
    "h1": "JWT Test Token Generator",
    "intro": "Generate test JWTs with realistic claims for your local environments. Configurable headers, edge-case payloads and expiration scenarios without contaminating your production secrets.",
    "tag": "Security",
    "filterLabel": "Claim type",
    "countLabel": "Amount",
    "generateLabel": "Generate tokens",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "standard",
        "label": "Standard claims (RFC 7519)",
        "items": [
          "{ \"iss\": \"https://api.example.com\", \"sub\": \"user123\", \"aud\": \"mobile-app\", \"exp\": 1735689600, \"iat\": 1704067200 }",
          "{ \"iss\": \"auth.service\", \"sub\": \"admin@example.com\", \"exp\": 1740960000, \"nbf\": 1735689600, \"jti\": \"a7f3d2c1\" }",
          "{ \"sub\": \"device:98765\", \"aud\": [\"api.svc\", \"dashboard\"], \"exp\": 1767225600, \"iat\": 1704067200 }",
          "{ \"iss\": \"https://auth0.tenant.com\", \"sub\": \"oauth2|g00gl3\", \"aud\": \"client_abc123\", \"exp\": 1735776000 }",
          "{ \"sub\": \"service-account-prod\", \"iss\": \"k8s.cluster.local\", \"aud\": \"https://vault.internal\", \"exp\": 1735862400, \"iat\": 1735689600 }",
          "{ \"iss\": \"idp.corporate.net\", \"sub\": \"employee:5421\", \"aud\": \"intranet\", \"exp\": 1735948800, \"nbf\": 1735689600 }",
          "{ \"sub\": \"temp-guest-user\", \"aud\": \"trial-api\", \"exp\": 1735776000, \"iat\": 1735689600, \"jti\": \"tmp-001\" }",
          "{ \"iss\": \"webhook.service\", \"sub\": \"integration:stripe\", \"aud\": \"payment-handler\", \"exp\": 1736035200 }",
          "{ \"sub\": \"bot:slack-notifier\", \"iss\": \"automation.internal\", \"aud\": \"https://slack-relay\", \"exp\": 1735862400 }",
          "{ \"iss\": \"sso.enterprise.io\", \"sub\": \"fed:user@domain.com\", \"aud\": [\"app1\", \"app2\"], \"exp\": 1767225600, \"iat\": 1704067200 }"
        ]
      },
      {
        "id": "custom",
        "label": "Custom application claims",
        "items": [
          "{ \"sub\": \"user:42\", \"roles\": [\"admin\", \"editor\"], \"tenant_id\": \"acme-corp\", \"exp\": 1735689600 }",
          "{ \"sub\": \"api-key:live_abc\", \"scopes\": [\"read:users\", \"write:orders\"], \"rate_limit\": 1000, \"exp\": 1767225600 }",
          "{ \"sub\": \"device:mobile-ios\", \"device_id\": \"iPhone14,3\", \"app_version\": \"2.5.1\", \"exp\": 1735776000 }",
          "{ \"sub\": \"session:xyz789\", \"user_id\": 1024, \"permissions\": [\"create\", \"delete\"], \"mfa_verified\": true, \"exp\": 1735689600 }",
          "{ \"sub\": \"org:startup-inc\", \"plan\": \"enterprise\", \"seats\": 50, \"features\": [\"sso\", \"audit-log\"], \"exp\": 1767225600 }",
          "{ \"sub\": \"contractor:ext-dev\", \"project_access\": [\"proj-alpha\"], \"clearance_level\": 2, \"exp\": 1735948800 }",
          "{ \"sub\": \"webhook:gh-action\", \"repo\": \"org/repo\", \"ref\": \"refs/heads/main\", \"sha\": \"abc123def\", \"exp\": 1735689600 }",
          "{ \"sub\": \"partner:reseller-42\", \"commission_rate\": 0.15, \"active_deals\": 3, \"exp\": 1767225600 }",
          "{ \"sub\": \"internal-tool\", \"environment\": \"staging\", \"build\": \"v1.2.3-rc1\", \"exp\": 1735776000 }",
          "{ \"sub\": \"guest:trial\", \"trial_ends\": 1736467200, \"limits\": {\"api_calls\": 100, \"storage_mb\": 50}, \"exp\": 1735689600 }"
        ]
      },
      {
        "id": "edge",
        "label": "Edge cases & testing scenarios",
        "items": [
          "{ \"sub\": \"expired-token\", \"exp\": 1609459200, \"iat\": 1609372800 }",
          "{ \"sub\": \"not-yet-valid\", \"nbf\": 1893456000, \"exp\": 1893542400, \"iat\": 1735689600 }",
          "{ \"sub\": \"no-expiry\", \"iat\": 1735689600 }",
          "{ \"sub\": \"malformed-aud\", \"aud\": 12345, \"exp\": 1735689600 }",
          "{ \"sub\": \"missing-sub\", \"iss\": \"test.issuer\", \"exp\": 1735689600 }",
          "{ \"sub\": \"\\u0000null-byte-attack\", \"exp\": 1735689600 }",
          "{ \"sub\": \"user:1'; DROP TABLE users;--\", \"exp\": 1735689600 }",
          "{ \"sub\": \"very-long-claim-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\", \"custom_field\": \"b\".repeat(1000), \"exp\": 1735689600 }",
          "{ \"sub\": \"duplicate-claims\", \"exp\": 1735689600, \"exp\": 1767225600 }",
          "{ \"sub\": \"empty-roles\", \"roles\": [], \"permissions\": {}, \"exp\": 1735689600 }",
          "{ \"sub\": \"special-chars-💀\", \"emoji\": \"🔐\", \"exp\": 1735689600 }",
          "{ \"sub\": \"numeric-sub\", \"sub\": 999999, \"exp\": 1735689600 }",
          "{ \"iss\": \"http://evil.com\", \"sub\": \"admin\", \"aud\": \"your-api\", \"exp\": 1735689600 }",
          "{ \"sub\": \"token-with-nested\", \"metadata\": {\"nested\": {\"deeply\": {\"claim\": \"value\"}}}, \"exp\": 1735689600 }",
          "{ \"sub\": \"boolean-claims\", \"is_admin\": \"true\", \"active\": 1, \"exp\": 1735689600 }"
        ]
      },
      {
        "id": "headers",
        "label": "Header configurations",
        "items": [
          "{ \"alg\": \"HS256\", \"typ\": \"JWT\" }",
          "{ \"alg\": \"RS256\", \"typ\": \"JWT\", \"kid\": \"key-2024-01\" }",
          "{ \"alg\": \"ES256\", \"typ\": \"JWT\" }",
          "{ \"alg\": \"PS256\", \"typ\": \"JWT\", \"kid\": \"prod-signing-key\" }",
          "{ \"alg\": \"none\", \"typ\": \"JWT\" }",
          "{ \"alg\": \"HS512\", \"typ\": \"JWT\", \"cty\": \"JWT\" }",
          "{ \"alg\": \"RS384\", \"typ\": \"JWT\", \"x5t\": \"thumbprint123\" }",
          "{ \"alg\": \"EdDSA\", \"typ\": \"JWT\", \"kid\": \"ed25519-key-1\" }",
          "{ \"alg\": \"HS256\", \"typ\": \"JWT\", \"kid\": \"rotated-key-2024-03\", \"crit\": [\"exp\"] }",
          "{ \"alg\": \"RS256\", \"typ\": \"at+jwt\", \"kid\": \"oauth-key\" }"
        ]
      },
      {
        "id": "oauth",
        "label": "OAuth 2.0 & OIDC claims",
        "items": [
          "{ \"sub\": \"user@example.com\", \"email\": \"user@example.com\", \"email_verified\": true, \"name\": \"Test User\", \"exp\": 1735689600 }",
          "{ \"sub\": \"oauth2|github|12345\", \"preferred_username\": \"dev-user\", \"given_name\": \"Dev\", \"family_name\": \"User\", \"exp\": 1735776000 }",
          "{ \"sub\": \"federated:google:xyz\", \"email\": \"test@gmail.com\", \"picture\": \"https://lh3.googleusercontent.com/a/default\", \"exp\": 1735689600 }",
          "{ \"sub\": \"client:service-app\", \"client_id\": \"app_abc123\", \"scope\": \"read write\", \"exp\": 1735776000 }",
          "{ \"sub\": \"user:1001\", \"groups\": [\"developers\", \"qa-team\"], \"org_id\": \"company-42\", \"exp\": 1735689600 }",
          "{ \"sub\": \"device-flow:tv-app\", \"device_code\": \"dev_ABC\", \"scope\": \"streaming\", \"exp\": 1735948800 }",
          "{ \"sub\": \"delegated:admin-on-behalf\", \"act\": {\"sub\": \"regular-user\"}, \"exp\": 1735689600 }",
          "{ \"sub\": \"refresh-context\", \"scope\": \"offline_access openid\", \"sid\": \"session-abc\", \"exp\": 1767225600 }",
          "{ \"sub\": \"pkce-flow:mobile\", \"c_hash\": \"code_challenge_hash\", \"at_hash\": \"access_token_hash\", \"exp\": 1735689600 }",
          "{ \"sub\": \"user:social-login\", \"identities\": [{\"provider\": \"twitter\", \"user_id\": \"98765\"}], \"exp\": 1735776000 }"
        ]
      },
      {
        "id": "microservices",
        "label": "Microservices & service mesh",
        "items": [
          "{ \"iss\": \"https://istio-pilot.istio-system\", \"sub\": \"spiffe://cluster.local/ns/default/sa/service-a\", \"aud\": \"service-b.default.svc.cluster.local\", \"exp\": 1735689600 }",
          "{ \"sub\": \"kubernetes-service-account:prod/payment-svc\", \"namespace\": \"prod\", \"pod\": \"payment-7f8d9c-xk2l\", \"exp\": 1735776000 }",
          "{ \"iss\": \"vault.hashicorp.com\", \"sub\": \"role:db-reader\", \"policies\": [\"read-only\", \"audit\"], \"exp\": 1735948800 }",
          "{ \"sub\": \"lambda:us-east-1:function-name\", \"aws_request_id\": \"abc-123\", \"function_version\": \"$LATEST\", \"exp\": 1735689600 }",
          "{ \"sub\": \"gcp:service-account@project.iam\", \"email\": \"svc@project.iam.gserviceaccount.com\", \"scopes\": [\"cloud-platform\"], \"exp\": 1735776000 }",
          "{ \"iss\": \"azure-ad\", \"sub\": \"managed-identity:vm-prod-01\", \"tid\": \"tenant-guid\", \"exp\": 1735689600 }",
          "{ \"sub\": \"consul-service:api-gateway\", \"service_id\": \"api-gw-instance-3\", \"datacenter\": \"dc1\", \"exp\": 1735776000 }",
          "{ \"sub\": \"linkerd-identity:web.prod\", \"l5d-identity\": \"web.prod.serviceaccount.identity.linkerd.cluster.local\", \"exp\": 1735689600 }",
          "{ \"iss\": \"spire-server\", \"sub\": \"spiffe://example.org/workload\", \"aud\": \"spiffe://example.org/backend\", \"exp\": 1735948800 }",
          "{ \"sub\": \"dapr-app:order-processor\", \"app_id\": \"order-processor\", \"namespace\": \"production\", \"exp\": 1735689600 }"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why you should never use real JWTs in local development",
        "body": "<p>The most common mistake: copying a production JWT, pasting it in Postman and using it to test locally. Problem: <strong>that token has real claims, valid signature and exposes your signing secret if someone hooks your local traffic</strong>. A fintech dev accidentally shared a real token in a public GitHub issue; within 40 minutes they had fraudulent requests hitting the API because the token included admin scopes and the <code>iss</code> pointed to production.</p><p>Test tokens must have <strong>fake issuers, subs not traceable to real users and short expirations</strong>. If your dev JWT says <code>\"sub\": \"admin@company.com\"</code>, you're leaking business information. Better: <code>\"sub\": \"test-user-001\"</code>. And the <code>iss</code> should be something like <code>https://local.dev</code>, never your real domain. This prevents an accidentally valid test token from reaching production if there's a routing bug.</p><p>Another antipattern: <strong>test JWTs without expiration</strong>. Seems convenient ('never have to regenerate it'), but breaks your ability to test refresh flows and trains you to ignore <code>exp</code>. Best teams generate tokens with relative <code>exp</code>: 'now + 1 hour' in dev, 'now + 5 minutes' to test expiration edge cases. Automate generation in your seed script or docker-compose, never hardcode tokens in the repo.</p>"
      },
      {
        "h2": "Custom claims that break in production if you don't test them",
        "body": "<p>Standard claims (<code>iss</code>, <code>sub</code>, <code>aud</code>, <code>exp</code>) are just the beginning. Most JWT bugs come from <strong>poorly validated custom claims</strong>. Classic example: your API expects <code>\"roles\": [\"admin\", \"user\"]</code> (array), but your external IdP sends <code>\"roles\": \"admin\"</code> (string) when there's a single role. Your code does <code>roles.includes('admin')</code> and explodes in production.</p><p>Generate test tokens with <strong>all shape variants you can receive</strong>: roles as empty array, roles as string, roles absent, roles with unexpected values. Same for <code>aud</code>: can be single string or array, and many JWT libs validate differently depending on type. An auth team lost half a day debugging why Auth0 sent <code>\"aud\": [\"api\", \"dashboard\"]</code> (array) but their local mock had <code>\"aud\": \"api\"</code> (string) — validation code only expected one.</p><p>Critical testing: <strong>nested claims and non-string types</strong>. If you have <code>\"metadata\": {\"plan\": \"pro\"}</code>, validate your parser handles nested objects without breaking. And claims like <code>\"is_admin\": true</code> (boolean) vs <code>\"is_admin\": \"true\"</code> (string) — JavaScript does silent type coercion that can pass tests but fail in strict validations of other languages. Generate tokens with <code>\"active\": 1</code>, <code>\"active\": \"1\"</code>, <code>\"active\": true</code> and verify your backend handles all three or explicitly rejects incorrect ones.</p>"
      },
      {
        "h2": "Edge-case scenarios your test suite is ignoring",
        "body": "<p>90% of JWT tests verify the happy path: valid token, not expired, correct signature. Real bugs come from the remaining 10%. <strong>Tokens without <code>exp</code></strong>: does your API reject them or accept as eternal? According to RFC 7519 <code>exp</code> is optional, but many systems assume it's always present. <strong>Tokens with future <code>nbf</code> (not before)</strong>: do you validate the token isn't valid yet? A CI system generated tokens with <code>nbf</code> 5 minutes in the future for clock skew, but the API didn't verify <code>nbf</code> — accepted tokens that shouldn't work yet.</p><p>Security-critical cases: <strong>header with <code>\"alg\": \"none\"</code></strong>. Many old JWT libs accepted unsigned tokens if header said 'none', allowing anyone to forge tokens. Your code must explicitly reject <code>alg: none</code> or have whitelist of allowed algorithms. Another: <strong>absent or mismatched <code>aud</code> claim</strong>. If your API expects <code>\"aud\": \"my-api\"</code> but receives token with <code>\"aud\": \"other-api\"</code>, does it reject or accept? That validation gap allows token substitution attacks between services.</p><p>Parsing edge case: <strong>duplicate claims</strong>. JSON (technically) allows <code>{\"exp\": 100, \"exp\": 200}</code>. Some parsers take first, others last, others explode. Generate such token and verify your stack rejects or handles consistently. And claims with <strong>extreme values</strong>: negative <code>exp</code> timestamp, <code>iat</code> in distant future, giant strings (1MB in a claim for DoS), null bytes, SQL injection in <code>sub</code>. If your test token only has 'user123', you'll never catch someone sending 'user123\\'; DROP TABLE--'.</p>"
      },
      {
        "h2": "JWT headers that change validation behavior",
        "body": "<p>Most devs only know <code>{\"alg\": \"HS256\", \"typ\": \"JWT\"}</code>, but the header defines how your system should validate the token. <strong><code>kid</code> (key ID)</strong>: identifies which key to use when rotating secrets. If your system supports multiple active keys (for rotation without downtime), it must extract <code>kid</code> from header and fetch correct key. Token with non-existent <code>kid</code> should be rejected, not validated against default key. That was the attack vector in a CVE in a popular OAuth provider.</p><p>Critical algorithms: <strong>RS256 vs HS256</strong>. RS256 uses asymmetry (public/private key), HS256 uses symmetric key. If your code is configured for RS256 but receives HS256 token, some parsers take the public key (which is... public) as HMAC secret and validate incorrectly. This allowed token forging in several implementations. Solution: <strong>explicit whitelist of allowed algorithms</strong>, never trust header <code>alg</code> without checking against your configuration.</p><p><code>cty</code> (content type): if <code>\"JWT\"</code>, indicates nested JWT (a JWT inside another JWT). Your parser must deserialize recursively. And <code>crit</code> (critical): lists claims that MUST be understood to validate token. If your system doesn't implement a claim listed in <code>crit</code>, must reject token. This prevents downgrade attacks where attacker removes validations hoping they're silently ignored. Generate test tokens with <code>\"crit\": [\"exp\"]</code> and verify your system actually validates <code>exp</code> or rejects token.</p>"
      }
    ],
    "faq": [
      {
        "q": "Can I use these test JWTs in shared staging environments?",
        "a": "Not without coordination. If staging uses same issuer and secret as prod, a test token could validate against real resources. Better: staging must have unique issuer (e.g. 'https://staging.api.com') and different secrets."
      },
      {
        "q": "What signing algorithm should I use for local test tokens?",
        "a": "HS256 is sufficient for local/dev because it doesn't leave your machine. For shared staging, use RS256 (asymmetric) to simulate production behavior where only auth server has the private key."
      },
      {
        "q": "How do I generate the correct 'exp' timestamp for token to last X hours?",
        "a": "exp is Unix timestamp (seconds since 1970). In JS: Math.floor(Date.now()/1000) + (hours * 3600). In Python: int(time.time()) + (hours * 3600). Tools like jwt.io have helpers for this."
      },
      {
        "q": "My API rejects tokens generated here, what could be wrong?",
        "a": "Three common causes: 1) incorrect signing secret (test token must be signed with same secret as your environment), 2) 'aud' or 'iss' validation too strict, 3) 'exp' already passed (regenerate with future date)."
      }
    ]
  }
};
