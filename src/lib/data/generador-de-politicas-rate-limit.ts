import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-politicas-rate-limit",
    "en": "rate-limit-policy-generator"
  },
  "category": "security",
  "emoji": "⏱️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Políticas de Rate Limit | Genfy",
    "metaDesc": "Configurá políticas de rate limiting efectivas para APIs. Protegé tus endpoints contra abuso sin afectar usuarios legítimos con ejemplos prácticos.",
    "h1": "Generador de Políticas de Rate Limit",
    "intro": "Un rate limit mal configurado arruina la experiencia del usuario o deja tu API vulnerable. Este generador te da políticas balanceadas para diferentes tipos de endpoints, considerando uso real y vectores de ataque comunes.",
    "tag": "Seguridad",
    "filterLabel": "Tipo de endpoint",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "auth",
        "label": "Autenticación",
        "items": [
          "POST /auth/login: 5 requests / 15 min por IP (prevención de fuerza bruta)",
          "POST /auth/register: 3 requests / hora por IP (prevención de spam de cuentas)",
          "POST /auth/password-reset: 3 requests / hora por email (prevención de enumeración)",
          "POST /auth/verify-email: 5 requests / hora por cuenta (prevención de DoS de emails)",
          "POST /auth/refresh-token: 10 requests / 15 min por usuario (uso normal esperado)",
          "POST /auth/logout: 20 requests / min por usuario (sin límite estricto)",
          "GET /auth/me: 60 requests / min por usuario (consultas frecuentes permitidas)",
          "POST /auth/mfa/setup: 5 requests / día por usuario (acción infrecuente)",
          "POST /auth/mfa/verify: 10 requests / 5 min por usuario (incluye reintentos razonables)",
          "POST /auth/oauth/callback: 10 requests / min por IP (OAuth flows)"
        ]
      },
      {
        "id": "api-public",
        "label": "API Pública",
        "items": [
          "GET /api/v1/*: 100 requests / min por API key (tier gratuito estándar)",
          "POST /api/v1/*: 30 requests / min por API key (escrituras más costosas)",
          "GET /api/v1/search: 20 requests / min por API key (queries complejas)",
          "GET /api/v1/export: 5 requests / hora por API key (operaciones pesadas)",
          "POST /api/v1/batch: 10 requests / min por API key (procesamiento múltiple)",
          "WebSocket /api/v1/realtime: 100 mensajes / min por conexión",
          "GET /api/v1/docs: sin límite (documentación pública)",
          "GET /api/v1/health: sin límite (monitoring)",
          "POST /api/v1/webhooks: 50 requests / min por webhook (eventos externos)",
          "GET /api/v1/analytics: 30 requests / min por API key (datos agregados)"
        ]
      },
      {
        "id": "api-premium",
        "label": "API Premium",
        "items": [
          "GET /api/v1/*: 1000 requests / min por API key (tier pagado)",
          "POST /api/v1/*: 300 requests / min por API key (escrituras escaladas)",
          "GET /api/v1/search: 200 requests / min por API key (búsquedas intensivas)",
          "GET /api/v1/export: 30 requests / hora por API key (exports frecuentes)",
          "POST /api/v1/batch: 100 requests / min por API key (procesamiento masivo)",
          "WebSocket /api/v1/realtime: 1000 mensajes / min por conexión",
          "POST /api/v1/ml/inference: 100 requests / min por API key (modelos ML)",
          "GET /api/v1/analytics/raw: 100 requests / min por API key (datos sin procesar)",
          "POST /api/v1/import: 10 requests / hora por API key (imports grandes)",
          "GET /api/v1/reports: 50 requests / hora por API key (generación de reportes)"
        ]
      },
      {
        "id": "user-facing",
        "label": "Endpoints de Usuario",
        "items": [
          "GET /user/profile: 60 requests / min por usuario (navegación normal)",
          "PUT /user/profile: 10 requests / min por usuario (actualizaciones ocasionales)",
          "POST /user/avatar: 5 requests / hora por usuario (uploads infrecuentes)",
          "GET /user/settings: 30 requests / min por usuario (acceso moderado)",
          "PUT /user/settings: 20 requests / hora por usuario (cambios ocasionales)",
          "GET /user/notifications: 120 requests / min por usuario (polling frecuente)",
          "POST /user/notifications/read: 100 requests / min por usuario (marcado masivo)",
          "GET /user/activity: 30 requests / min por usuario (historial)",
          "DELETE /user/account: 1 request / día por usuario (acción crítica)",
          "POST /user/feedback: 5 requests / hora por usuario (prevención de spam)"
        ]
      },
      {
        "id": "content",
        "label": "Contenido y Media",
        "items": [
          "GET /content/*: 200 requests / min por usuario (lectura intensiva)",
          "POST /content: 20 requests / min por usuario (creación normal)",
          "PUT /content/:id: 30 requests / min por usuario (ediciones)",
          "DELETE /content/:id: 10 requests / min por usuario (eliminaciones)",
          "POST /content/upload: 10 requests / 10 min por usuario (uploads grandes)",
          "GET /content/search: 30 requests / min por usuario (búsquedas)",
          "POST /content/:id/like: 60 requests / min por usuario (interacciones rápidas)",
          "POST /content/:id/comment: 20 requests / min por usuario (comentarios)",
          "GET /content/feed: 60 requests / min por usuario (scroll infinito)",
          "POST /content/share: 30 requests / min por usuario (sharing)"
        ]
      },
      {
        "id": "admin",
        "label": "Administración",
        "items": [
          "GET /admin/*: 300 requests / min por admin (dashboards complejos)",
          "POST /admin/users: 50 requests / min por admin (gestión de usuarios)",
          "PUT /admin/settings: 20 requests / min por admin (configuración)",
          "POST /admin/bulk-actions: 10 requests / 5 min por admin (operaciones masivas)",
          "GET /admin/logs: 100 requests / min por admin (debugging)",
          "POST /admin/cache/clear: 5 requests / hora por admin (acción costosa)",
          "GET /admin/metrics: 60 requests / min por admin (monitoring)",
          "POST /admin/notifications/broadcast: 10 requests / hora por admin (mensajes masivos)",
          "DELETE /admin/data: 5 requests / hora por admin (eliminaciones críticas)",
          "POST /admin/export/database: 1 request / día por admin (backups manuales)"
        ]
      },
      {
        "id": "payment",
        "label": "Pagos y Facturación",
        "items": [
          "POST /payment/checkout: 10 requests / min por usuario (flujo de compra)",
          "POST /payment/process: 5 requests / min por usuario (prevención de duplicados)",
          "GET /payment/methods: 30 requests / min por usuario (consulta de métodos)",
          "POST /payment/methods: 10 requests / hora por usuario (agregar métodos)",
          "DELETE /payment/methods/:id: 5 requests / hora por usuario (eliminar métodos)",
          "GET /invoices: 30 requests / min por usuario (historial)",
          "POST /payment/refund: 5 requests / hora por admin (reembolsos)",
          "POST /payment/webhook: 100 requests / min por proveedor (eventos de pago)",
          "GET /payment/subscriptions: 30 requests / min por usuario (consulta de suscripciones)",
          "PUT /payment/subscriptions/:id: 5 requests / hora por usuario (cambios de plan)"
        ]
      },
      {
        "id": "integration",
        "label": "Integraciones",
        "items": [
          "POST /webhooks/receive: 200 requests / min por origen (eventos externos)",
          "POST /webhooks/send: 50 requests / min por servicio (notificaciones salientes)",
          "GET /integrations/oauth/authorize: 10 requests / min por IP (flows OAuth)",
          "POST /integrations/:provider/sync: 20 requests / hora por usuario (sincronización)",
          "GET /integrations/:provider/status: 60 requests / min por usuario (checks de estado)",
          "POST /integrations/:provider/disconnect: 5 requests / hora por usuario (desconexión)",
          "POST /api/graphql: 60 requests / min por API key (queries GraphQL)",
          "WebSocket /integrations/realtime: 500 mensajes / min por conexión",
          "POST /integrations/import: 5 requests / hora por usuario (imports de terceros)",
          "GET /integrations/logs: 60 requests / min por usuario (debugging de integraciones)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Estrategias de rate limiting efectivas",
        "body": "<p>El rate limiting por IP protege contra ataques distribuidos pero penaliza usuarios detrás de NATs corporativos donde cientos de empleados comparten una IP. Combiná límites por IP (generosos) con límites por usuario autenticado (estrictos). Por ejemplo: /login permite 5 intentos por IP cada 15 minutos, pero solo 3 por email en la misma ventana. Esto previene fuerza bruta sin bloquear oficinas enteras.</p><p>Ventanas deslizantes son superiores a ventanas fijas. Con ventanas fijas de 1 minuto, un atacante puede hacer 100 requests a las 10:00:59 y otros 100 a las 10:01:00, logrando 200 requests en 2 segundos. Ventanas deslizantes cuentan los últimos 60 segundos en cualquier momento, previniendo este burst. Implementalas con sorted sets en Redis: ZADD con timestamp, ZREMRANGEBYSCORE para limpiar entradas viejas.</p><p>Los límites deben reflejar patrones de uso reales. Analizá tus logs: ¿cuántos requests hace un usuario promedio? ¿Y el percentil 95? Tu límite debería estar entre el 95 y el 99. Un usuario legítimo nunca debería tocar el límite en uso normal. Si lo hacen regularmente, tu límite es demasiado bajo o tu frontend hace polling ineficiente.</p>"
      },
      {
        "h2": "Implementación de rate limiting",
        "body": "<p>Redis es el backend estándar para rate limiting distribuido. El algoritmo token bucket es simple: INCR una key con TTL. Si el valor supera el límite, rechazás. Para ventanas deslizantes, usá ZSET: ZADD key timestamp 1, ZCOUNT key (now-window) now para contar, EXPIRE key window. Esto escala a millones de requests sin problemas de consistencia.</p><p>En aplicaciones pequeñas, memory stores en el proceso funcionan. Node tiene rate-limiter-flexible, Python tiene slowapi. Estos usan diccionarios en memoria con timestamps. El problema: no comparten estado entre instancias. Si tenés 3 servidores, cada uno permite 100 req/min independientemente, dándote 300 totales. Funciona si tus límites son generosos; falla si necesitás precisión.</p><p>Los headers de respuesta son cruciales: X-RateLimit-Limit (límite total), X-RateLimit-Remaining (requests disponibles), X-RateLimit-Reset (timestamp de reset). Clientes bien diseñados leen estos headers y ajustan su comportamiento automáticamente. Incluí también Retry-After en la respuesta 429 para decirle al cliente cuándo reintentar.</p>"
      },
      {
        "h2": "Rate limiting por tipo de endpoint",
        "body": "<p>Endpoints de autenticación necesitan límites agresivos: 5 intentos de login por IP cada 15 minutos previene fuerza bruta sin frustrar usuarios que olvidaron su contraseña. Password reset debe ser aún más restrictivo (3/hora) porque cada request envía un email costoso y atacantes pueden usarlo para enumerar usuarios válidos.</p><p>APIs públicas necesitan tiers: gratuito (100 req/min), pro (1000 req/min), enterprise (sin límite). Implementá esto con diferentes API keys vinculadas a planes. El tier gratuito debe ser suficiente para desarrollo pero no para producción seria. Esto incentiva upgrades sin bloquear adopción inicial.</p><p>Operaciones costosas (exports, reports, ML inference) merecen límites de largo plazo: 10 requests/hora en lugar de 10/minuto. Un usuario que exporta 10 reports en 1 minuto probablemente es un script automatizado, no un humano. Límites de hora previenen abuso sin afectar uso legítimo espaciado en el tiempo.</p>"
      },
      {
        "h2": "Manejo de excepciones y edge cases",
        "body": "<p>Los webhooks de proveedores externos necesitan whitelisting. Si Stripe envía eventos de pago, no podés rate limitarlos estrictamente o perdés eventos. Configurá límites generosos (200 req/min) y validá la firma del webhook. Si la firma falla, aplicá rate limiting agresivo porque probablemente es un atacante.</p><p>Usuarios enterprise a menudo necesitan límites custom. En lugar de hardcodear excepciones, implementá un sistema de override: una tabla en tu DB con user_id y custom_limits. Tu middleware de rate limiting checkea esto primero. Esto te permite dar a un cliente 10,000 req/min sin deployar código nuevo.</p><p>Durante incidentes, necesitás un kill switch. Un feature flag que reduce todos los límites a 10% de lo normal puede salvarte de caídas. Cuando tu base de datos está muriendo, reducir límites a 10 req/min globalmente es mejor que caerse completamente. Implementá esto en tu config de rate limiter, no en código de aplicación.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Qué algoritmo de rate limiting es mejor?",
        "a": "Token bucket para simplicidad, ventana deslizante para precisión. Token bucket permite bursts cortos (útil para UX), ventanas deslizantes previenen gaming del sistema. Para la mayoría de APIs, token bucket con burst pequeño es el balance ideal."
      },
      {
        "q": "¿Debería rate limitar por IP o por usuario?",
        "a": "Ambos. Por IP para endpoints públicos (previene ataques antes de autenticación), por usuario para endpoints autenticados (más preciso). Combiná ambos: límite generoso por IP, límite estricto por usuario."
      },
      {
        "q": "¿Cómo manejo usuarios legítimos que exceden el límite?",
        "a": "Primero, verificá que tus límites sean razonables. Luego, implementá un sistema de apelación: usuarios pueden contactar soporte, vos revisás logs, y si es legítimo, aumentás su límite. También considerá degradar gracefully: en lugar de 429, retorná datos cacheados con un header indicando que está rate limited."
      },
      {
        "q": "¿Qué status code usar para rate limiting?",
        "a": "429 Too Many Requests. Incluí Retry-After header con segundos hasta que puedan reintentar. Algunos usan 503 Service Unavailable, pero 429 es más semánticamente correcto y clientes lo reconocen específicamente."
      }
    ]
  },
  "en": {
    "pageTitle": "Rate Limit Policy Generator | Genfy",
    "metaDesc": "Configure effective rate limiting policies for APIs. Protect your endpoints against abuse without affecting legitimate users with practical examples.",
    "h1": "Rate Limit Policy Generator",
    "intro": "A misconfigured rate limit ruins user experience or leaves your API vulnerable. This generator gives you balanced policies for different endpoint types, considering real usage and common attack vectors.",
    "tag": "Security",
    "filterLabel": "Endpoint type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "auth",
        "label": "Authentication",
        "items": [
          "POST /auth/login: 5 requests / 15 min per IP (brute force prevention)",
          "POST /auth/register: 3 requests / hour per IP (account spam prevention)",
          "POST /auth/password-reset: 3 requests / hour per email (enumeration prevention)",
          "POST /auth/verify-email: 5 requests / hour per account (email DoS prevention)",
          "POST /auth/refresh-token: 10 requests / 15 min per user (expected normal use)",
          "POST /auth/logout: 20 requests / min per user (no strict limit)",
          "GET /auth/me: 60 requests / min per user (frequent queries allowed)",
          "POST /auth/mfa/setup: 5 requests / day per user (infrequent action)",
          "POST /auth/mfa/verify: 10 requests / 5 min per user (includes reasonable retries)",
          "POST /auth/oauth/callback: 10 requests / min per IP (OAuth flows)"
        ]
      },
      {
        "id": "api-public",
        "label": "Public API",
        "items": [
          "GET /api/v1/*: 100 requests / min per API key (standard free tier)",
          "POST /api/v1/*: 30 requests / min per API key (writes more expensive)",
          "GET /api/v1/search: 20 requests / min per API key (complex queries)",
          "GET /api/v1/export: 5 requests / hour per API key (heavy operations)",
          "POST /api/v1/batch: 10 requests / min per API key (multiple processing)",
          "WebSocket /api/v1/realtime: 100 messages / min per connection",
          "GET /api/v1/docs: no limit (public documentation)",
          "GET /api/v1/health: no limit (monitoring)",
          "POST /api/v1/webhooks: 50 requests / min per webhook (external events)",
          "GET /api/v1/analytics: 30 requests / min per API key (aggregated data)"
        ]
      },
      {
        "id": "api-premium",
        "label": "Premium API",
        "items": [
          "GET /api/v1/*: 1000 requests / min per API key (paid tier)",
          "POST /api/v1/*: 300 requests / min per API key (scaled writes)",
          "GET /api/v1/search: 200 requests / min per API key (intensive searches)",
          "GET /api/v1/export: 30 requests / hour per API key (frequent exports)",
          "POST /api/v1/batch: 100 requests / min per API key (massive processing)",
          "WebSocket /api/v1/realtime: 1000 messages / min per connection",
          "POST /api/v1/ml/inference: 100 requests / min per API key (ML models)",
          "GET /api/v1/analytics/raw: 100 requests / min per API key (raw data)",
          "POST /api/v1/import: 10 requests / hour per API key (large imports)",
          "GET /api/v1/reports: 50 requests / hour per API key (report generation)"
        ]
      },
      {
        "id": "user-facing",
        "label": "User Endpoints",
        "items": [
          "GET /user/profile: 60 requests / min per user (normal navigation)",
          "PUT /user/profile: 10 requests / min per user (occasional updates)",
          "POST /user/avatar: 5 requests / hour per user (infrequent uploads)",
          "GET /user/settings: 30 requests / min per user (moderate access)",
          "PUT /user/settings: 20 requests / hour per user (occasional changes)",
          "GET /user/notifications: 120 requests / min per user (frequent polling)",
          "POST /user/notifications/read: 100 requests / min per user (bulk marking)",
          "GET /user/activity: 30 requests / min per user (history)",
          "DELETE /user/account: 1 request / day per user (critical action)",
          "POST /user/feedback: 5 requests / hour per user (spam prevention)"
        ]
      },
      {
        "id": "content",
        "label": "Content and Media",
        "items": [
          "GET /content/*: 200 requests / min per user (intensive reading)",
          "POST /content: 20 requests / min per user (normal creation)",
          "PUT /content/:id: 30 requests / min per user (editing)",
          "DELETE /content/:id: 10 requests / min per user (deletions)",
          "POST /content/upload: 10 requests / 10 min per user (large uploads)",
          "GET /content/search: 30 requests / min per user (searches)",
          "POST /content/:id/like: 60 requests / min per user (quick interactions)",
          "POST /content/:id/comment: 20 requests / min per user (comments)",
          "GET /content/feed: 60 requests / min per user (infinite scroll)",
          "POST /content/share: 30 requests / min per user (sharing)"
        ]
      },
      {
        "id": "admin",
        "label": "Administration",
        "items": [
          "GET /admin/*: 300 requests / min per admin (complex dashboards)",
          "POST /admin/users: 50 requests / min per admin (user management)",
          "PUT /admin/settings: 20 requests / min per admin (configuration)",
          "POST /admin/bulk-actions: 10 requests / 5 min per admin (bulk operations)",
          "GET /admin/logs: 100 requests / min per admin (debugging)",
          "POST /admin/cache/clear: 5 requests / hour per admin (expensive action)",
          "GET /admin/metrics: 60 requests / min per admin (monitoring)",
          "POST /admin/notifications/broadcast: 10 requests / hour per admin (mass messages)",
          "DELETE /admin/data: 5 requests / hour per admin (critical deletions)",
          "POST /admin/export/database: 1 request / day per admin (manual backups)"
        ]
      },
      {
        "id": "payment",
        "label": "Payment and Billing",
        "items": [
          "POST /payment/checkout: 10 requests / min per user (purchase flow)",
          "POST /payment/process: 5 requests / min per user (duplicate prevention)",
          "GET /payment/methods: 30 requests / min per user (method queries)",
          "POST /payment/methods: 10 requests / hour per user (add methods)",
          "DELETE /payment/methods/:id: 5 requests / hour per user (remove methods)",
          "GET /invoices: 30 requests / min per user (history)",
          "POST /payment/refund: 5 requests / hour per admin (refunds)",
          "POST /payment/webhook: 100 requests / min per provider (payment events)",
          "GET /payment/subscriptions: 30 requests / min per user (subscription queries)",
          "PUT /payment/subscriptions/:id: 5 requests / hour per user (plan changes)"
        ]
      },
      {
        "id": "integration",
        "label": "Integrations",
        "items": [
          "POST /webhooks/receive: 200 requests / min per source (external events)",
          "POST /webhooks/send: 50 requests / min per service (outgoing notifications)",
          "GET /integrations/oauth/authorize: 10 requests / min per IP (OAuth flows)",
          "POST /integrations/:provider/sync: 20 requests / hour per user (synchronization)",
          "GET /integrations/:provider/status: 60 requests / min per user (status checks)",
          "POST /integrations/:provider/disconnect: 5 requests / hour per user (disconnection)",
          "POST /api/graphql: 60 requests / min per API key (GraphQL queries)",
          "WebSocket /integrations/realtime: 500 messages / min per connection",
          "POST /integrations/import: 5 requests / hour per user (third-party imports)",
          "GET /integrations/logs: 60 requests / min per user (integration debugging)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Effective rate limiting strategies",
        "body": "<p>IP-based rate limiting protects against distributed attacks but penalizes users behind corporate NATs where hundreds of employees share one IP. Combine generous IP limits with strict authenticated user limits. Example: /login allows 5 attempts per IP every 15 minutes, but only 3 per email in the same window. This prevents brute force without blocking entire offices.</p><p>Sliding windows are superior to fixed windows. With 1-minute fixed windows, an attacker can make 100 requests at 10:00:59 and another 100 at 10:01:00, achieving 200 requests in 2 seconds. Sliding windows count the last 60 seconds at any moment, preventing this burst. Implement them with sorted sets in Redis: ZADD with timestamp, ZREMRANGEBYSCORE to clean old entries.</p><p>Limits should reflect real usage patterns. Analyze your logs: how many requests does an average user make? And the 95th percentile? Your limit should be between the 95th and 99th. A legitimate user should never hit the limit in normal use. If they do regularly, your limit is too low or your frontend polls inefficiently.</p>"
      },
      {
        "h2": "Implementing rate limiting",
        "body": "<p>Redis is the standard backend for distributed rate limiting. The token bucket algorithm is simple: INCR a key with TTL. If the value exceeds the limit, reject. For sliding windows, use ZSET: ZADD key timestamp 1, ZCOUNT key (now-window) now to count, EXPIRE key window. This scales to millions of requests without consistency issues.</p><p>In small applications, in-process memory stores work. Node has rate-limiter-flexible, Python has slowapi. These use in-memory dictionaries with timestamps. The problem: they don't share state between instances. If you have 3 servers, each allows 100 req/min independently, giving you 300 total. Works if your limits are generous; fails if you need precision.</p><p>Response headers are crucial: X-RateLimit-Limit (total limit), X-RateLimit-Remaining (available requests), X-RateLimit-Reset (reset timestamp). Well-designed clients read these headers and adjust their behavior automatically. Also include Retry-After in the 429 response to tell the client when to retry.</p>"
      },
      {
        "h2": "Rate limiting by endpoint type",
        "body": "<p>Authentication endpoints need aggressive limits: 5 login attempts per IP every 15 minutes prevents brute force without frustrating users who forgot their password. Password reset should be even more restrictive (3/hour) because each request sends an expensive email and attackers can use it to enumerate valid users.</p><p>Public APIs need tiers: free (100 req/min), pro (1000 req/min), enterprise (no limit). Implement this with different API keys linked to plans. The free tier should be enough for development but not for serious production. This incentivizes upgrades without blocking initial adoption.</p><p>Expensive operations (exports, reports, ML inference) deserve long-term limits: 10 requests/hour instead of 10/minute. A user exporting 10 reports in 1 minute is probably an automated script, not a human. Hour limits prevent abuse without affecting legitimate use spaced over time.</p>"
      },
      {
        "h2": "Handling exceptions and edge cases",
        "body": "<p>Webhooks from external providers need whitelisting. If Stripe sends payment events, you can't rate limit them strictly or you'll lose events. Configure generous limits (200 req/min) and validate the webhook signature. If signature fails, apply aggressive rate limiting because it's probably an attacker.</p><p>Enterprise users often need custom limits. Instead of hardcoding exceptions, implement an override system: a table in your DB with user_id and custom_limits. Your rate limiting middleware checks this first. This lets you give a client 10,000 req/min without deploying new code.</p><p>During incidents, you need a kill switch. A feature flag that reduces all limits to 10% of normal can save you from outages. When your database is dying, reducing limits to 10 req/min globally is better than going down completely. Implement this in your rate limiter config, not application code.</p>"
      }
    ],
    "faq": [
      {
        "q": "Which rate limiting algorithm is best?",
        "a": "Token bucket for simplicity, sliding window for precision. Token bucket allows short bursts (useful for UX), sliding windows prevent gaming the system. For most APIs, token bucket with small burst is the ideal balance."
      },
      {
        "q": "Should I rate limit by IP or by user?",
        "a": "Both. By IP for public endpoints (prevents attacks before authentication), by user for authenticated endpoints (more precise). Combine both: generous IP limit, strict user limit."
      },
      {
        "q": "How do I handle legitimate users who exceed the limit?",
        "a": "First, verify your limits are reasonable. Then, implement an appeal system: users can contact support, you review logs, and if legitimate, increase their limit. Also consider degrading gracefully: instead of 429, return cached data with a header indicating it's rate limited."
      },
      {
        "q": "What status code to use for rate limiting?",
        "a": "429 Too Many Requests. Include Retry-After header with seconds until they can retry. Some use 503 Service Unavailable, but 429 is more semantically correct and clients recognize it specifically."
      }
    ]
  }
};
