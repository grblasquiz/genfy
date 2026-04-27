import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-logs-aplicacion",
    "en": "application-log-generator"
  },
  "category": "data",
  "emoji": "📋",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Logs de Aplicación | Genfy",
    "metaDesc": "Genera logs de aplicación realistas para testing y desarrollo. Mensajes de error, warnings, info y debug con formato profesional para tus pruebas.",
    "h1": "Generador de Logs de Aplicación",
    "intro": "Creá logs de aplicación realistas para testing, debugging y desarrollo. Formatos estándar con niveles de severidad, timestamps y mensajes contextuales.",
    "tag": "Datos",
    "filterLabel": "Nivel de log",
    "countLabel": "Cantidad",
    "generateLabel": "Generar logs",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "error",
        "label": "ERROR",
        "items": [
          "[ERROR] NullPointerException at UserService.validateCredentials() line 247",
          "[ERROR] Database connection pool exhausted. Max connections: 50",
          "[ERROR] Failed to authenticate user 'admin'. Invalid token signature",
          "[ERROR] OutOfMemoryError: Java heap space. Current allocation: 4096MB",
          "[ERROR] Unable to write to file /var/log/app.log. Permission denied",
          "[ERROR] HTTP 500: Internal server error in POST /api/payments",
          "[ERROR] Connection timeout to external API https://api.partner.com after 30s",
          "[ERROR] Redis connection refused on redis://localhost:6379",
          "[ERROR] SQL syntax error in query: SELECT * FROM users WHERE id = $1",
          "[ERROR] Failed to load configuration file config.yml. File not found",
          "[ERROR] Elasticsearch index 'products' does not exist",
          "[ERROR] Message broker connection lost. Unable to publish event",
          "[ERROR] Certificate validation failed for domain api.example.com",
          "[ERROR] Unhandled promise rejection in async function processOrder()",
          "[ERROR] MongoDB replica set not reachable. Primary node down",
          "[ERROR] Failed to decode JWT token. Malformed payload",
          "[ERROR] S3 bucket 'uploads' access denied. Check IAM permissions",
          "[ERROR] Rate limit exceeded: 1000 req/min on endpoint /search",
          "[ERROR] Circular dependency detected: ModuleA -> ModuleB -> ModuleA",
          "[ERROR] WebSocket connection dropped. Client disconnected unexpectedly",
          "[ERROR] Failed to parse JSON response from external service",
          "[ERROR] SMTP server unreachable. Unable to send notification email",
          "[ERROR] Docker container 'app-backend' health check failed",
          "[ERROR] Migration script 20240115_add_users failed at step 3",
          "[ERROR] Stripe payment processing error: card_declined"
        ]
      },
      {
        "id": "warn",
        "label": "WARN",
        "items": [
          "[WARN] Database query took 3.2s. Consider adding index on users.email",
          "[WARN] Cache miss rate at 78%. Current hit ratio below threshold",
          "[WARN] Deprecated API endpoint /v1/users still receiving traffic",
          "[WARN] Memory usage at 85%. Consider increasing heap size",
          "[WARN] SSL certificate expires in 7 days. Renewal required",
          "[WARN] Login attempt from suspicious IP: 203.0.113.42",
          "[WARN] API key 'sk_live_xyz' used 950 times today. Approaching limit",
          "[WARN] Background job 'data-sync' running for 45 minutes. Expected: 15min",
          "[WARN] Disk space on /var/lib/data at 92% capacity",
          "[WARN] Fallback to default configuration. Custom config not loaded",
          "[WARN] User session expired. Redirecting to login page",
          "[WARN] External service latency increased to 1200ms. Avg: 300ms",
          "[WARN] Unverified email used for registration: test@example.com",
          "[WARN] Rate limiting triggered for user_id: 8472. Throttling requests",
          "[WARN] Missing required header 'X-API-Version' in request",
          "[WARN] Queue length at 5000 messages. Consider scaling workers",
          "[WARN] Using default port 8080. Production should use 443",
          "[WARN] Multiple active sessions detected for user 'john.doe'",
          "[WARN] Feature flag 'new-checkout' enabled in production without testing",
          "[WARN] Backup job completed with 12 files skipped. Check permissions",
          "[WARN] CDN cache hit rate dropped to 45%. Expected: >80%",
          "[WARN] Database connection pool at 90% utilization",
          "[WARN] Slow query detected: 2.8s for SELECT with 15 JOINs",
          "[WARN] Third-party script blocked by CORS policy",
          "[WARN] Retry attempt 3/5 for failed webhook delivery"
        ]
      },
      {
        "id": "info",
        "label": "INFO",
        "items": [
          "[INFO] Application started successfully on port 8080",
          "[INFO] User 'jane.smith' logged in from IP 192.168.1.105",
          "[INFO] Database migration completed. 15 tables updated",
          "[INFO] Payment processed: transaction_id=txn_9f72b3, amount=$49.99",
          "[INFO] Cache warmed up with 2500 product entries",
          "[INFO] Scheduled job 'daily-report' started at 02:00 UTC",
          "[INFO] New user registered: user_id=10524, email=maria@company.com",
          "[INFO] Configuration loaded from environment variables",
          "[INFO] WebSocket connection established with client_id: ws_8421",
          "[INFO] Email sent successfully to recipient: support@example.com",
          "[INFO] File uploaded: document.pdf (2.4MB) to bucket 'user-uploads'",
          "[INFO] API request received: GET /api/products?page=2&limit=20",
          "[INFO] Session created for user 'admin'. session_id: sess_a7f29k",
          "[INFO] Feature flag 'dark-mode' enabled for 15% of users",
          "[INFO] Background worker processing 142 pending tasks",
          "[INFO] Health check passed. All services operational",
          "[INFO] Metrics exported to monitoring system at 10:15:00",
          "[INFO] Search index rebuilt. 45,000 documents indexed",
          "[INFO] User preferences updated: theme=dark, language=en",
          "[INFO] Order placed: order_id=ORD-9472, items=3, total=$127.45",
          "[INFO] Rate limit reset for API key: key_9f72b at 00:00 UTC",
          "[INFO] Backup completed successfully. Size: 1.2GB, Duration: 8min",
          "[INFO] WebSocket message broadcast to 523 connected clients",
          "[INFO] Password changed for user: user_id=7821",
          "[INFO] External API responded: status=200, latency=142ms",
          "[INFO] Cron job 'cleanup-temp-files' executed. 87 files removed",
          "[INFO] New version deployed: v2.4.1. Release notes available",
          "[INFO] OAuth token refreshed for service 'google-analytics'",
          "[INFO] User logout: user_id=4421, session_duration=42min",
          "[INFO] Database connection pool initialized with 20 connections"
        ]
      },
      {
        "id": "debug",
        "label": "DEBUG",
        "items": [
          "[DEBUG] Function calculateDiscount() called with params: price=100, code='SAVE20'",
          "[DEBUG] SQL query executed: SELECT id, name FROM products WHERE active=true LIMIT 50",
          "[DEBUG] HTTP request headers: {User-Agent: Chrome/120, Accept: application/json}",
          "[DEBUG] Cache lookup for key 'user:profile:1234' returned HIT",
          "[DEBUG] Validating input: {email: 'test@example.com', age: 25, country: 'US'}",
          "[DEBUG] Environment variable loaded: NODE_ENV=development",
          "[DEBUG] Middleware chain: [auth, logger, cors, bodyParser, router]",
          "[DEBUG] Parsing JWT payload: {user_id: 7821, role: 'admin', exp: 1705428000}",
          "[DEBUG] Database transaction started. Isolation level: READ_COMMITTED",
          "[DEBUG] Response body: {status: 'success', data: {...}, timestamp: 1705327845}",
          "[DEBUG] Route matched: POST /api/orders -> OrderController.create()",
          "[DEBUG] Redis GET command executed: key='session:sess_a7f29k', ttl=3600s",
          "[DEBUG] File read operation: /config/database.yml (256 bytes)",
          "[DEBUG] Regex pattern matched: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'",
          "[DEBUG] Event emitted: 'user.created' with payload: {id: 10524, email: ...}",
          "[DEBUG] Template rendered: views/dashboard.html in 12ms",
          "[DEBUG] Cookie set: session_id=xyz123, httpOnly=true, secure=true, maxAge=86400",
          "[DEBUG] API response parsed: 247 items received from /external/products",
          "[DEBUG] Scheduled task queued: job='send-email', delay=5s, attempts=0",
          "[DEBUG] Image resized: original=2048x1536, thumbnail=200x150, format=webp",
          "[DEBUG] Socket.io event received: 'message' from client ws_8421",
          "[DEBUG] Dependency injected: UserRepository into UserService",
          "[DEBUG] Form validation result: 2 errors found [email: required, password: too_short]",
          "[DEBUG] Browser fingerprint calculated: hash=a8f7b2c9d1e3f4",
          "[DEBUG] GraphQL query parsed: { user(id: '123') { name email posts { title } } }",
          "[DEBUG] Compression applied: original=145KB, gzipped=42KB, ratio=71%",
          "[DEBUG] State transition: OrderStatus.PENDING -> OrderStatus.PROCESSING",
          "[DEBUG] XML parsed: document root=<config>, 8 child nodes",
          "[DEBUG] Retry policy applied: exponential backoff, attempt=2, wait=4s",
          "[DEBUG] Memory allocation: Allocated 512KB for buffer in processImage()"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué necesitás logs realistas en testing",
        "body": "<p>Los logs sintéticos son esenciales para probar herramientas de monitoreo, parsers, alertas y dashboards sin depender de producción. <strong>Casos de uso críticos:</strong> validar que tu sistema de alertas detecta patrones de error, testear agregadores como ELK Stack o Splunk con volumen realista, entrenar modelos de ML para detección de anomalías, y simular escenarios de troubleshooting en ambientes de capacitación.</p><p>Un error común es generar logs demasiado simples ('Error occurred', 'Success') que no representan la complejidad real. Los logs de producción incluyen <strong>stack traces</strong>, IDs de transacción, métricas de latencia, códigos de estado HTTP, nombres de servicios, y contexto específico. Un log realista como '[ERROR] Database connection pool exhausted. Max connections: 50' te permite testear reglas de alerta más precisas que uno genérico.</p>"
      },
      {
        "h2": "Niveles de severidad y cuándo usarlos",
        "body": "<p>La jerarquía estándar de logs sigue un orden: <strong>DEBUG < INFO < WARN < ERROR < FATAL</strong>. En producción, DEBUG suele desactivarse por volumen, pero es vital en desarrollo para seguir el flujo de ejecución. INFO registra operaciones normales importantes (logins, transacciones completadas, deployments). WARN señala situaciones anómalas que no rompen la aplicación pero requieren atención (certificado próximo a vencer, cache miss rate alto, queries lentas).</p><p>ERROR indica fallos que impiden completar una operación específica pero no caen toda la aplicación (payment declined, database timeout, file not found). FATAL son errores irrecuperables que requieren restart. <strong>Un error clásico de logging:</strong> logear todo como ERROR. Si el 90% de tus logs son errores, perdés la capacidad de distinguir problemas reales. La regla práctica: si no requiere acción humana inmediata, probablemente sea WARN, no ERROR.</p><p>Para testing, generá distribuciones realistas: 70% INFO, 20% DEBUG, 8% WARN, 2% ERROR. En producción saludable, los errores son la excepción, no la norma.</p>"
      },
      {
        "h2": "Anatomía de un log estructurado",
        "body": "<p>Los logs modernos siguen formatos estructurados (JSON preferiblemente) para facilitar parsing y búsqueda. <strong>Componentes esenciales:</strong></p><ul><li><strong>Timestamp:</strong> ISO 8601 con timezone (2024-01-15T14:23:45.123Z)</li><li><strong>Level:</strong> severidad del mensaje (ERROR, WARN, INFO, DEBUG)</li><li><strong>Message:</strong> descripción human-readable del evento</li><li><strong>Context:</strong> datos estructurados (user_id, request_id, service_name)</li><li><strong>Source:</strong> módulo o función que generó el log (UserService.login)</li><li><strong>Metadata:</strong> stack traces, duración, códigos de error</li></ul><p>Ejemplo JSON: <code>{\"timestamp\":\"2024-01-15T14:23:45Z\",\"level\":\"ERROR\",\"message\":\"Payment failed\",\"context\":{\"user_id\":7821,\"transaction_id\":\"txn_9f72\",\"amount\":49.99,\"error_code\":\"card_declined\"}}</code></p><p>Los logs en texto plano dificultan el análisis automatizado. Si tu sistema todavía genera logs tipo '[Mon Jan 15 14:23:45] Error in line 247', considerá migrar a JSON estructurado.</p>"
      },
      {
        "h2": "Prácticas para logs útiles y mantenibles",
        "body": "<p><strong>Regla de oro: logeá el contexto suficiente para reproducir el problema.</strong> No sirve '[ERROR] Payment failed' sin saber qué pago, de qué usuario, con qué método. Incluí siempre identificadores únicos (request_id, user_id, transaction_id) que permitan correlacionar eventos entre servicios.</p><p><strong>Evitá logs sensibles:</strong> nunca logees contraseñas, tokens completos (truncá a primeros 8 chars), números de tarjeta, o PII sin enmascarar. En Europa, GDPR te puede multar fuertemente por logs no seguros. Usá '[REDACTED]' o hash cuando necesités referenciar datos sensibles.</p><p><strong>Performance:</strong> logging excesivo mata aplicaciones. DEBUG en loops que procesan 10,000 items genera gigas de logs y frena I/O. Usá log levels apropiados y desactivá DEBUG en producción. Considerá log sampling: para operaciones de alto volumen, logeá 1 cada 100.</p><p><strong>Rotación y retención:</strong> configurá rotación diaria o por tamaño (100MB). Retené logs críticos (ERROR/WARN) por 90 días, INFO por 30, DEBUG por 7. Archivá a S3/GCS para análisis histórico barato.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Qué formato de timestamp debo usar en logs?",
        "a": "ISO 8601 con timezone UTC es el estándar universal (2024-01-15T14:23:45.123Z). Evitá formatos locales que causan ambigüedad cuando tu app corre en múltiples regiones."
      },
      {
        "q": "¿Cuántos logs por segundo es normal en producción?",
        "a": "Depende del tráfico, pero apps medianas generan 100-1000 logs/seg. Si superás 10,000/seg, probablemente estás loggeando demasiado en hot paths. Usá sampling para operaciones de alto volumen."
      },
      {
        "q": "¿Debo loguear requests HTTP completos?",
        "a": "Loguea método, ruta, status code, latencia y request_id. El body completo solo en DEBUG y nunca en producción (problema de performance y privacidad). Headers selectivamente, excluyendo Authorization."
      },
      {
        "q": "¿Cómo decido entre WARN y ERROR?",
        "a": "WARN es recuperable y no rompe el flujo (cache miss, slow query). ERROR impide completar la operación (payment failed, DB timeout). Si el usuario ve un error, es ERROR; si el sistema compensa automáticamente, es WARN."
      }
    ]
  },
  "en": {
    "pageTitle": "Application Log Generator | Genfy",
    "metaDesc": "Generate realistic application logs for testing and development. Error messages, warnings, info and debug with professional format for your tests.",
    "h1": "Application Log Generator",
    "intro": "Create realistic application logs for testing, debugging, and development. Standard formats with severity levels, timestamps, and contextual messages.",
    "tag": "Data",
    "filterLabel": "Log level",
    "countLabel": "Amount",
    "generateLabel": "Generate logs",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "error",
        "label": "ERROR",
        "items": [
          "[ERROR] NullPointerException at UserService.validateCredentials() line 247",
          "[ERROR] Database connection pool exhausted. Max connections: 50",
          "[ERROR] Failed to authenticate user 'admin'. Invalid token signature",
          "[ERROR] OutOfMemoryError: Java heap space. Current allocation: 4096MB",
          "[ERROR] Unable to write to file /var/log/app.log. Permission denied",
          "[ERROR] HTTP 500: Internal server error in POST /api/payments",
          "[ERROR] Connection timeout to external API https://api.partner.com after 30s",
          "[ERROR] Redis connection refused on redis://localhost:6379",
          "[ERROR] SQL syntax error in query: SELECT * FROM users WHERE id = $1",
          "[ERROR] Failed to load configuration file config.yml. File not found",
          "[ERROR] Elasticsearch index 'products' does not exist",
          "[ERROR] Message broker connection lost. Unable to publish event",
          "[ERROR] Certificate validation failed for domain api.example.com",
          "[ERROR] Unhandled promise rejection in async function processOrder()",
          "[ERROR] MongoDB replica set not reachable. Primary node down",
          "[ERROR] Failed to decode JWT token. Malformed payload",
          "[ERROR] S3 bucket 'uploads' access denied. Check IAM permissions",
          "[ERROR] Rate limit exceeded: 1000 req/min on endpoint /search",
          "[ERROR] Circular dependency detected: ModuleA -> ModuleB -> ModuleA",
          "[ERROR] WebSocket connection dropped. Client disconnected unexpectedly",
          "[ERROR] Failed to parse JSON response from external service",
          "[ERROR] SMTP server unreachable. Unable to send notification email",
          "[ERROR] Docker container 'app-backend' health check failed",
          "[ERROR] Migration script 20240115_add_users failed at step 3",
          "[ERROR] Stripe payment processing error: card_declined"
        ]
      },
      {
        "id": "warn",
        "label": "WARN",
        "items": [
          "[WARN] Database query took 3.2s. Consider adding index on users.email",
          "[WARN] Cache miss rate at 78%. Current hit ratio below threshold",
          "[WARN] Deprecated API endpoint /v1/users still receiving traffic",
          "[WARN] Memory usage at 85%. Consider increasing heap size",
          "[WARN] SSL certificate expires in 7 days. Renewal required",
          "[WARN] Login attempt from suspicious IP: 203.0.113.42",
          "[WARN] API key 'sk_live_xyz' used 950 times today. Approaching limit",
          "[WARN] Background job 'data-sync' running for 45 minutes. Expected: 15min",
          "[WARN] Disk space on /var/lib/data at 92% capacity",
          "[WARN] Fallback to default configuration. Custom config not loaded",
          "[WARN] User session expired. Redirecting to login page",
          "[WARN] External service latency increased to 1200ms. Avg: 300ms",
          "[WARN] Unverified email used for registration: test@example.com",
          "[WARN] Rate limiting triggered for user_id: 8472. Throttling requests",
          "[WARN] Missing required header 'X-API-Version' in request",
          "[WARN] Queue length at 5000 messages. Consider scaling workers",
          "[WARN] Using default port 8080. Production should use 443",
          "[WARN] Multiple active sessions detected for user 'john.doe'",
          "[WARN] Feature flag 'new-checkout' enabled in production without testing",
          "[WARN] Backup job completed with 12 files skipped. Check permissions",
          "[WARN] CDN cache hit rate dropped to 45%. Expected: >80%",
          "[WARN] Database connection pool at 90% utilization",
          "[WARN] Slow query detected: 2.8s for SELECT with 15 JOINs",
          "[WARN] Third-party script blocked by CORS policy",
          "[WARN] Retry attempt 3/5 for failed webhook delivery"
        ]
      },
      {
        "id": "info",
        "label": "INFO",
        "items": [
          "[INFO] Application started successfully on port 8080",
          "[INFO] User 'jane.smith' logged in from IP 192.168.1.105",
          "[INFO] Database migration completed. 15 tables updated",
          "[INFO] Payment processed: transaction_id=txn_9f72b3, amount=$49.99",
          "[INFO] Cache warmed up with 2500 product entries",
          "[INFO] Scheduled job 'daily-report' started at 02:00 UTC",
          "[INFO] New user registered: user_id=10524, email=maria@company.com",
          "[INFO] Configuration loaded from environment variables",
          "[INFO] WebSocket connection established with client_id: ws_8421",
          "[INFO] Email sent successfully to recipient: support@example.com",
          "[INFO] File uploaded: document.pdf (2.4MB) to bucket 'user-uploads'",
          "[INFO] API request received: GET /api/products?page=2&limit=20",
          "[INFO] Session created for user 'admin'. session_id: sess_a7f29k",
          "[INFO] Feature flag 'dark-mode' enabled for 15% of users",
          "[INFO] Background worker processing 142 pending tasks",
          "[INFO] Health check passed. All services operational",
          "[INFO] Metrics exported to monitoring system at 10:15:00",
          "[INFO] Search index rebuilt. 45,000 documents indexed",
          "[INFO] User preferences updated: theme=dark, language=en",
          "[INFO] Order placed: order_id=ORD-9472, items=3, total=$127.45",
          "[INFO] Rate limit reset for API key: key_9f72b at 00:00 UTC",
          "[INFO] Backup completed successfully. Size: 1.2GB, Duration: 8min",
          "[INFO] WebSocket message broadcast to 523 connected clients",
          "[INFO] Password changed for user: user_id=7821",
          "[INFO] External API responded: status=200, latency=142ms",
          "[INFO] Cron job 'cleanup-temp-files' executed. 87 files removed",
          "[INFO] New version deployed: v2.4.1. Release notes available",
          "[INFO] OAuth token refreshed for service 'google-analytics'",
          "[INFO] User logout: user_id=4421, session_duration=42min",
          "[INFO] Database connection pool initialized with 20 connections"
        ]
      },
      {
        "id": "debug",
        "label": "DEBUG",
        "items": [
          "[DEBUG] Function calculateDiscount() called with params: price=100, code='SAVE20'",
          "[DEBUG] SQL query executed: SELECT id, name FROM products WHERE active=true LIMIT 50",
          "[DEBUG] HTTP request headers: {User-Agent: Chrome/120, Accept: application/json}",
          "[DEBUG] Cache lookup for key 'user:profile:1234' returned HIT",
          "[DEBUG] Validating input: {email: 'test@example.com', age: 25, country: 'US'}",
          "[DEBUG] Environment variable loaded: NODE_ENV=development",
          "[DEBUG] Middleware chain: [auth, logger, cors, bodyParser, router]",
          "[DEBUG] Parsing JWT payload: {user_id: 7821, role: 'admin', exp: 1705428000}",
          "[DEBUG] Database transaction started. Isolation level: READ_COMMITTED",
          "[DEBUG] Response body: {status: 'success', data: {...}, timestamp: 1705327845}",
          "[DEBUG] Route matched: POST /api/orders -> OrderController.create()",
          "[DEBUG] Redis GET command executed: key='session:sess_a7f29k', ttl=3600s",
          "[DEBUG] File read operation: /config/database.yml (256 bytes)",
          "[DEBUG] Regex pattern matched: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'",
          "[DEBUG] Event emitted: 'user.created' with payload: {id: 10524, email: ...}",
          "[DEBUG] Template rendered: views/dashboard.html in 12ms",
          "[DEBUG] Cookie set: session_id=xyz123, httpOnly=true, secure=true, maxAge=86400",
          "[DEBUG] API response parsed: 247 items received from /external/products",
          "[DEBUG] Scheduled task queued: job='send-email', delay=5s, attempts=0",
          "[DEBUG] Image resized: original=2048x1536, thumbnail=200x150, format=webp",
          "[DEBUG] Socket.io event received: 'message' from client ws_8421",
          "[DEBUG] Dependency injected: UserRepository into UserService",
          "[DEBUG] Form validation result: 2 errors found [email: required, password: too_short]",
          "[DEBUG] Browser fingerprint calculated: hash=a8f7b2c9d1e3f4",
          "[DEBUG] GraphQL query parsed: { user(id: '123') { name email posts { title } } }",
          "[DEBUG] Compression applied: original=145KB, gzipped=42KB, ratio=71%",
          "[DEBUG] State transition: OrderStatus.PENDING -> OrderStatus.PROCESSING",
          "[DEBUG] XML parsed: document root=<config>, 8 child nodes",
          "[DEBUG] Retry policy applied: exponential backoff, attempt=2, wait=4s",
          "[DEBUG] Memory allocation: Allocated 512KB for buffer in processImage()"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why you need realistic logs in testing",
        "body": "<p>Synthetic logs are essential for testing monitoring tools, parsers, alerts, and dashboards without depending on production. <strong>Critical use cases:</strong> validate that your alert system detects error patterns, test aggregators like ELK Stack or Splunk with realistic volume, train ML models for anomaly detection, and simulate troubleshooting scenarios in training environments.</p><p>A common mistake is generating overly simple logs ('Error occurred', 'Success') that don't represent real complexity. Production logs include <strong>stack traces</strong>, transaction IDs, latency metrics, HTTP status codes, service names, and specific context. A realistic log like '[ERROR] Database connection pool exhausted. Max connections: 50' lets you test more precise alert rules than a generic one.</p>"
      },
      {
        "h2": "Severity levels and when to use them",
        "body": "<p>The standard log hierarchy follows an order: <strong>DEBUG < INFO < WARN < ERROR < FATAL</strong>. In production, DEBUG is usually disabled due to volume, but it's vital in development to follow execution flow. INFO records important normal operations (logins, completed transactions, deployments). WARN signals anomalous situations that don't break the application but require attention (certificate about to expire, high cache miss rate, slow queries).</p><p>ERROR indicates failures that prevent completing a specific operation but don't crash the entire application (payment declined, database timeout, file not found). FATAL are unrecoverable errors requiring restart. <strong>A classic logging mistake:</strong> logging everything as ERROR. If 90% of your logs are errors, you lose the ability to distinguish real problems. The practical rule: if it doesn't require immediate human action, it's probably WARN, not ERROR.</p><p>For testing, generate realistic distributions: 70% INFO, 20% DEBUG, 8% WARN, 2% ERROR. In healthy production, errors are the exception, not the norm.</p>"
      },
      {
        "h2": "Anatomy of a structured log",
        "body": "<p>Modern logs follow structured formats (preferably JSON) to facilitate parsing and search. <strong>Essential components:</strong></p><ul><li><strong>Timestamp:</strong> ISO 8601 with timezone (2024-01-15T14:23:45.123Z)</li><li><strong>Level:</strong> message severity (ERROR, WARN, INFO, DEBUG)</li><li><strong>Message:</strong> human-readable event description</li><li><strong>Context:</strong> structured data (user_id, request_id, service_name)</li><li><strong>Source:</strong> module or function that generated the log (UserService.login)</li><li><strong>Metadata:</strong> stack traces, duration, error codes</li></ul><p>JSON example: <code>{\"timestamp\":\"2024-01-15T14:23:45Z\",\"level\":\"ERROR\",\"message\":\"Payment failed\",\"context\":{\"user_id\":7821,\"transaction_id\":\"txn_9f72\",\"amount\":49.99,\"error_code\":\"card_declined\"}}</code></p><p>Plain text logs hinder automated analysis. If your system still generates logs like '[Mon Jan 15 14:23:45] Error in line 247', consider migrating to structured JSON.</p>"
      },
      {
        "h2": "Practices for useful and maintainable logs",
        "body": "<p><strong>Golden rule: log enough context to reproduce the problem.</strong> '[ERROR] Payment failed' is useless without knowing which payment, from which user, with which method. Always include unique identifiers (request_id, user_id, transaction_id) that allow correlating events between services.</p><p><strong>Avoid sensitive logs:</strong> never log passwords, complete tokens (truncate to first 8 chars), card numbers, or unmasked PII. In Europe, GDPR can fine you heavily for insecure logs. Use '[REDACTED]' or hash when you need to reference sensitive data.</p><p><strong>Performance:</strong> excessive logging kills applications. DEBUG in loops processing 10,000 items generates gigabytes of logs and slows I/O. Use appropriate log levels and disable DEBUG in production. Consider log sampling: for high-volume operations, log 1 out of 100.</p><p><strong>Rotation and retention:</strong> configure daily or size-based rotation (100MB). Retain critical logs (ERROR/WARN) for 90 days, INFO for 30, DEBUG for 7. Archive to S3/GCS for cheap historical analysis.</p>"
      }
    ],
    "faq": [
      {
        "q": "What timestamp format should I use in logs?",
        "a": "ISO 8601 with UTC timezone is the universal standard (2024-01-15T14:23:45.123Z). Avoid local formats that cause ambiguity when your app runs in multiple regions."
      },
      {
        "q": "How many logs per second is normal in production?",
        "a": "Depends on traffic, but medium apps generate 100-1000 logs/sec. If you exceed 10,000/sec, you're probably logging too much in hot paths. Use sampling for high-volume operations."
      },
      {
        "q": "Should I log complete HTTP requests?",
        "a": "Log method, path, status code, latency, and request_id. Complete body only in DEBUG and never in production (performance and privacy issue). Headers selectively, excluding Authorization."
      },
      {
        "q": "How do I decide between WARN and ERROR?",
        "a": "WARN is recoverable and doesn't break flow (cache miss, slow query). ERROR prevents completing the operation (payment failed, DB timeout). If the user sees an error, it's ERROR; if the system compensates automatically, it's WARN."
      }
    ]
  }
};
