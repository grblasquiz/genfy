import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-middleware-express",
    "en": "express-middleware-generator"
  },
  "category": "tools",
  "emoji": "🚂",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Middleware Express.js | Genfy",
    "metaDesc": "Genera nombres de middleware Express con funcionalidad clara. Ideal para auth, validación, logging, error handling y rutas API Node.js.",
    "h1": "Generador de Middleware Express",
    "intro": "Genera nombres descriptivos y convenciones de middleware para aplicaciones Express.js. Incluye auth, validación, logging, rate limiting y más.",
    "tag": "Herramientas",
    "filterLabel": "Tipo de middleware",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "auth",
        "label": "Autenticación",
        "items": [
          "requireAuth - Verifica JWT en headers",
          "optionalAuth - Auth opcional, setea req.user si existe token",
          "requireRole('admin') - Chequea rol específico",
          "verifyApiKey - Valida API key en query o header",
          "checkPermissions(['read','write']) - Permisos granulares",
          "requireEmailVerified - Usuario debe tener email confirmado",
          "requireMFA - Requiere segundo factor de autenticación",
          "sessionAuth - Auth basada en sesiones express-session",
          "oauthCallback - Procesa callback de OAuth providers",
          "refreshTokenCheck - Valida refresh token en /refresh",
          "csrfProtection - Protección contra CSRF attacks",
          "passportAuth(strategy) - Integración con Passport.js",
          "requireSameUser - Solo el dueño del recurso",
          "checkAccountStatus - Valida cuenta activa/suspendida",
          "apiRateLimitByUser - Rate limit por usuario autenticado",
          "requirePremium - Acceso solo para usuarios premium",
          "twoFactorVerify - Valida código 2FA",
          "ipWhitelist - Solo IPs permitidas",
          "deviceFingerprint - Tracking de dispositivo",
          "requireNotBanned - Usuario no baneado",
          "checkTokenExpiry - Verifica expiración manual",
          "requireOrgMembership - Usuario parte de org",
          "validateAuthHeader - Format correcto Authorization header",
          "requireActiveSubscription - Suscripción vigente",
          "checkLastActivity - Timeout por inactividad"
        ]
      },
      {
        "id": "validation",
        "label": "Validación",
        "items": [
          "validateBody(schema) - Valida req.body con Joi/Zod",
          "validateParams(schema) - Valida URL params",
          "validateQuery(schema) - Valida query strings",
          "sanitizeInput - Limpia XSS de inputs",
          "checkRequired(['field1','field2']) - Campos obligatorios",
          "validateEmail - Email format válido",
          "validateObjectId - MongoDB ObjectId válido",
          "validatePagination - Chequea page/limit/offset",
          "validateUUID - UUID format correcto",
          "validateFileUpload - Mime type y tamaño de archivo",
          "validateDateRange - Fechas from/to correctas",
          "checkMaxLength(field, max) - Límite de caracteres",
          "validateEnum(field, values) - Valor dentro de enum",
          "validatePhoneNumber - Formato de teléfono",
          "checkUniqueField('email') - Valida unicidad en DB",
          "validateCreditCard - Luhn algorithm check",
          "validateJSON - Body es JSON parseable",
          "validateSlug - Slug URL-safe",
          "checkPasswordStrength - Mínimo 8 chars, mayúscula, número",
          "validateCaptcha - Verifica reCAPTCHA token",
          "validateWebhookSignature - HMAC signature de webhook",
          "checkContentType(['application/json']) - Content-Type permitido",
          "validateImageDimensions - Ancho/alto de imagen",
          "checkReferrer - Valida Referer header",
          "validateSortBy - Campos de sort permitidos"
        ]
      },
      {
        "id": "logging",
        "label": "Logging y Monitoreo",
        "items": [
          "requestLogger - Logea método, URL, IP, user-agent",
          "responseTimeLogger - Calcula y logea duración request",
          "errorLogger - Captura y logea stack traces",
          "apiMetrics - Envía métricas a Prometheus/Datadog",
          "auditLog - Registra acciones de usuario en audit trail",
          "queryLogger - Logea SQL/MongoDB queries",
          "slowRequestAlert - Alerta si request > 3s",
          "logUserActions - Trackea acciones CRUD de usuario",
          "requestIdGenerator - Asigna unique request ID",
          "correlationIdHandler - Propaga correlation ID en headers",
          "httpContextLogger - Añade contexto a logs (userId, etc)",
          "performanceMonitor - Marca puntos de performance",
          "memoryLeakDetector - Alerta sobre uso anormal de RAM",
          "debugLogger - Verbose logging en NODE_ENV=dev",
          "structuredLogger - JSON logs para ELK stack",
          "securityEventLogger - Logea intentos de auth fallidos",
          "rateLimitLogger - Trackea requests bloqueados por rate limit",
          "apiVersionLogger - Registra versión de API usada",
          "webhookLogger - Logea payloads de webhooks recibidos",
          "cacheHitLogger - Estadísticas de cache hits/misses",
          "graphqlQueryLogger - Logea queries GraphQL",
          "socketConnectionLogger - Trackea WebSocket connections",
          "businessEventLogger - Eventos de negocio custom",
          "geoLocationLogger - IP geolocation en logs",
          "requestBodyLogger - Logea body (sin passwords)"
        ]
      },
      {
        "id": "security",
        "label": "Seguridad",
        "items": [
          "helmet - Security headers (CSP, HSTS, etc)",
          "rateLimiter - Limita requests por IP/user",
          "cors - Configura CORS headers",
          "xssProtection - Sanitiza contra XSS",
          "sqlInjectionProtection - Detecta patterns SQL injection",
          "csrfToken - Genera y valida CSRF tokens",
          "hpp - HTTP Parameter Pollution prevention",
          "hidePoweredBy - Oculta X-Powered-By header",
          "noSniff - X-Content-Type-Options: nosniff",
          "frameGuard - X-Frame-Options para clickjacking",
          "requestSizeLimit - Body parsing size limit",
          "blockUserAgents(['bot1']) - Bloquea user-agents",
          "geoBlock(['CN','RU']) - Bloquea países por GeoIP",
          "bruteForceProtection - Lockout tras N intentos fallidos",
          "sqlSanitizer - Escapa caracteres peligrosos",
          "commandInjectionCheck - Detecta command injection",
          "pathTraversalProtection - Valida que paths no usen ../",
          "jsonWebTokenSecurity - Valida algoritmos JWT permitidos",
          "secretsLeakScanner - Detecta API keys en responses",
          "subresourceIntegrity - SRI para assets",
          "contentSecurityPolicy - CSP policy custom",
          "requireHttps - Redirect HTTP a HTTPS",
          "secureSessionCookies - HttpOnly, Secure, SameSite",
          "rateLimitByEndpoint - Limits por ruta específica",
          "ipReputationCheck - Valida IP contra listas negras"
        ]
      },
      {
        "id": "errors",
        "label": "Error Handling",
        "items": [
          "notFoundHandler - 404 handler final",
          "globalErrorHandler - Catch-all error handler",
          "asyncErrorWrapper - Wrapper para async functions",
          "validationErrorFormatter - Formatea errores Joi/Zod",
          "databaseErrorHandler - Maneja errores Prisma/Mongoose",
          "unauthorizedHandler - 401 responses consistentes",
          "forbiddenHandler - 403 custom response",
          "conflictHandler - 409 para duplicados",
          "badRequestHandler - 400 con detalles",
          "internalServerErrorHandler - 500 sin exponer stack",
          "rateLimitErrorHandler - 429 con Retry-After header",
          "timeoutHandler - 504 Gateway Timeout",
          "serviceUnavailableHandler - 503 responses",
          "payloadTooLargeHandler - 413 custom message",
          "unprocessableEntityHandler - 422 con errores de validación",
          "methodNotAllowedHandler - 405 response",
          "customErrorClass - Clases de error custom con codes",
          "sentryErrorReporter - Envía errores a Sentry",
          "bugsnagIntegration - Reporta a Bugsnag",
          "errorSlackNotifier - Notifica errores críticos a Slack",
          "errorEmailAlert - Email ante errores 5xx",
          "gracefulShutdown - Cierra connections en SIGTERM",
          "domainErrorHandler - Maneja domain-specific errors",
          "errorResponseNormalizer - Formato consistente de errores",
          "stackTraceFilter - Filtra stack trace sensible"
        ]
      },
      {
        "id": "caching",
        "label": "Caching",
        "items": [
          "cacheResponse(ttl) - Cachea respuesta por X segundos",
          "cacheKeyGenerator - Genera key de cache custom",
          "redisCacheMiddleware - Integración con Redis",
          "inMemoryCache - Cache en memoria para dev",
          "cacheInvalidator - Invalida cache por pattern",
          "conditionalCache - Cache solo si query cumple condición",
          "etag - Genera ETag headers para cache browser",
          "lastModified - Last-Modified headers",
          "staleWhileRevalidate - Sirve cache stale mientras revalida",
          "cacheByUserRole - Cache separado por rol",
          "bypassCacheOnAuth - No cachea requests autenticados",
          "cachePrefetch - Warm-up de cache común",
          "cacheCompression - Comprime valores en cache",
          "cacheMonitor - Estadísticas de cache hit rate",
          "multiTierCache - L1 memory + L2 Redis",
          "cacheTagging - Invalida por tags custom",
          "privateCacheControl - Cache-Control: private",
          "publicCacheControl - Cache-Control: public",
          "noCacheHeader - Fuerza no-cache en browser",
          "surrogateCacheControl - Headers para CDN caching",
          "graphqlCacheDirective - Respeta @cache directive GraphQL",
          "apiGatewayCacheIntegration - Cachea en API Gateway",
          "varyByAcceptLanguage - Cache por idioma",
          "varyByAcceptEncoding - Cache por encoding",
          "cacheWarmingScheduler - Background job para warm cache"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Convenciones de naming para middleware Express",
        "body": "<p>Los middleware en Express deben tener nombres que expliquen <strong>qué hacen, no cómo lo hacen</strong>. Usa verbos activos: <code>requireAuth</code>, <code>validateBody</code>, <code>logRequest</code>. Evita nombres vagos como <code>checkStuff</code> o <code>middleware1</code>.</p><p>Para middleware reutilizable, usa <strong>funciones factory</strong> que devuelvan el middleware: <code>validateBody(schema)</code>, <code>rateLimit({ max: 100 })</code>. Esto permite configuración por ruta sin duplicar código.</p><p>Organiza middleware en carpetas por tipo: <code>/middleware/auth/</code>, <code>/middleware/validation/</code>. Los middleware globales (helmet, cors) van en el bootstrap de la app; los específicos de ruta se aplican en los routers. El orden importa: auth antes que validación, validación antes que handlers.</p>"
      },
      {
        "h2": "Patrones comunes de middleware Express",
        "body": "<p>El patrón más común es <strong>middleware de tres argumentos</strong> <code>(req, res, next)</code>. Para async/await, envuelve en <code>asyncHandler</code> o usa librerías como <code>express-async-errors</code> que automatizan el catch.</p><p>Middleware de <strong>error handling</strong> tiene cuatro argumentos: <code>(err, req, res, next)</code>. Debe ir al final de la cadena. Error tipado: crea clases custom que extiendan <code>Error</code> con propiedades <code>statusCode</code>, <code>code</code>, <code>isOperational</code>.</p><p>Para validación, integra <strong>Zod o Joi</strong>. Ejemplo: <code>validateBody(userSchema)</code> devuelve middleware que parsea <code>req.body</code> y llama <code>next(error)</code> si falla. Usa <code>transform</code> de Zod para sanitizar y castear tipos (dates, emails).</p>"
      },
      {
        "h2": "Rate limiting y seguridad en APIs",
        "body": "<p>Implementa <strong>rate limiting</strong> con <code>express-rate-limit</code>. Config básica: <code>max: 100</code> requests por IP cada <code>windowMs: 15 * 60 * 1000</code> (15min). Para APIs públicas, usa límites agresivos (10 req/min); para autenticadas, más permisivos (100 req/min).</p><p>Combina rate limit con <strong>slow-down</strong>: en lugar de bloquear, retrasa respuestas progresivamente (de 0ms a 1000ms). Útil para endpoints de login/signup vulnerables a brute force.</p><p>Otras capas de seguridad: <strong>helmet</strong> para headers (CSP, HSTS), <code>express-validator</code> para sanitizar inputs, <code>hpp</code> contra parameter pollution. En producción, usa <strong>API Gateway</strong> (AWS API Gateway, Kong) para WAF, geoblocking y DDoS protection antes que llegue a tu app.</p>"
      },
      {
        "h2": "Testing y debugging de middleware",
        "body": "<p>Para testear middleware, usa <strong>supertest</strong> con requests HTTP reales: <code>request(app).get('/api/users').expect(200)</code>. Mockea <code>req</code>, <code>res</code>, <code>next</code> con <strong>node-mocks-http</strong> para tests unitarios de middleware aislado.</p><p>Usa <code>DEBUG=express:*</code> para ver logs internos de Express. Para tracing distribuido, añade <strong>correlation IDs</strong> en un middleware temprano y propágalos en headers <code>X-Correlation-ID</code> a servicios downstream.</p><p>Errores comunes: olvidar llamar <code>next()</code> (request cuelga), llamar <code>next()</code> después de enviar respuesta (cannot set headers error), modificar <code>req</code>/<code>res</code> sin TypeScript types custom. Usa <code>@types/express</code> + module augmentation para tipado estricto de propiedades custom en <code>req.user</code>, etc.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es el orden correcto de middleware en Express?",
        "a": "1) Parsing (body-parser, cookie-parser), 2) Security (helmet, cors, rate limit), 3) Logging, 4) Auth, 5) Validation, 6) Route handlers, 7) 404 handler, 8) Error handler."
      },
      {
        "q": "¿Cómo manejo errores async en middleware?",
        "a": "Usa express-async-errors (automático) o envuelve handlers en asyncHandler que hace .catch(next). Desde Express 5, async/await funciona sin wrappers."
      },
      {
        "q": "¿Debería usar middleware global o por ruta?",
        "a": "Global para seguridad base (helmet, cors). Por ruta para auth/validación específica. Evita overhead aplicando solo donde se necesita."
      },
      {
        "q": "¿Cómo paso datos entre middleware?",
        "a": "Adjunta propiedades a req: req.user = decoded, req.context = {...}. Usa TypeScript module augmentation para types seguros."
      }
    ]
  },
  "en": {
    "pageTitle": "Express.js Middleware Generator | Genfy",
    "metaDesc": "Generate Express middleware names with clear functionality. Perfect for auth, validation, logging, error handling, and Node.js API routes.",
    "h1": "Express Middleware Generator",
    "intro": "Generate descriptive names and conventions for Express.js application middleware. Includes auth, validation, logging, rate limiting, and more.",
    "tag": "Tools",
    "filterLabel": "Middleware type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "auth",
        "label": "Authentication",
        "items": [
          "requireAuth - Verify JWT in headers",
          "optionalAuth - Optional auth, sets req.user if token exists",
          "requireRole('admin') - Check specific role",
          "verifyApiKey - Validate API key in query or header",
          "checkPermissions(['read','write']) - Granular permissions",
          "requireEmailVerified - User must have confirmed email",
          "requireMFA - Require second factor authentication",
          "sessionAuth - Session-based auth with express-session",
          "oauthCallback - Process OAuth provider callback",
          "refreshTokenCheck - Validate refresh token on /refresh",
          "csrfProtection - CSRF attack protection",
          "passportAuth(strategy) - Passport.js integration",
          "requireSameUser - Only resource owner",
          "checkAccountStatus - Validate active/suspended account",
          "apiRateLimitByUser - Rate limit per authenticated user",
          "requirePremium - Access only for premium users",
          "twoFactorVerify - Validate 2FA code",
          "ipWhitelist - Only allowed IPs",
          "deviceFingerprint - Device tracking",
          "requireNotBanned - User not banned",
          "checkTokenExpiry - Manual expiration verification",
          "requireOrgMembership - User part of org",
          "validateAuthHeader - Correct Authorization header format",
          "requireActiveSubscription - Active subscription",
          "checkLastActivity - Timeout due to inactivity"
        ]
      },
      {
        "id": "validation",
        "label": "Validation",
        "items": [
          "validateBody(schema) - Validate req.body with Joi/Zod",
          "validateParams(schema) - Validate URL params",
          "validateQuery(schema) - Validate query strings",
          "sanitizeInput - Clean XSS from inputs",
          "checkRequired(['field1','field2']) - Required fields",
          "validateEmail - Valid email format",
          "validateObjectId - Valid MongoDB ObjectId",
          "validatePagination - Check page/limit/offset",
          "validateUUID - Correct UUID format",
          "validateFileUpload - File mime type and size",
          "validateDateRange - Correct from/to dates",
          "checkMaxLength(field, max) - Character limit",
          "validateEnum(field, values) - Value within enum",
          "validatePhoneNumber - Phone format",
          "checkUniqueField('email') - Validate uniqueness in DB",
          "validateCreditCard - Luhn algorithm check",
          "validateJSON - Body is parseable JSON",
          "validateSlug - URL-safe slug",
          "checkPasswordStrength - Min 8 chars, uppercase, number",
          "validateCaptcha - Verify reCAPTCHA token",
          "validateWebhookSignature - Webhook HMAC signature",
          "checkContentType(['application/json']) - Allowed Content-Type",
          "validateImageDimensions - Image width/height",
          "checkReferrer - Validate Referer header",
          "validateSortBy - Allowed sort fields"
        ]
      },
      {
        "id": "logging",
        "label": "Logging and Monitoring",
        "items": [
          "requestLogger - Log method, URL, IP, user-agent",
          "responseTimeLogger - Calculate and log request duration",
          "errorLogger - Capture and log stack traces",
          "apiMetrics - Send metrics to Prometheus/Datadog",
          "auditLog - Record user actions in audit trail",
          "queryLogger - Log SQL/MongoDB queries",
          "slowRequestAlert - Alert if request > 3s",
          "logUserActions - Track user CRUD actions",
          "requestIdGenerator - Assign unique request ID",
          "correlationIdHandler - Propagate correlation ID in headers",
          "httpContextLogger - Add context to logs (userId, etc)",
          "performanceMonitor - Mark performance points",
          "memoryLeakDetector - Alert on abnormal RAM usage",
          "debugLogger - Verbose logging in NODE_ENV=dev",
          "structuredLogger - JSON logs for ELK stack",
          "securityEventLogger - Log failed auth attempts",
          "rateLimitLogger - Track requests blocked by rate limit",
          "apiVersionLogger - Record API version used",
          "webhookLogger - Log received webhook payloads",
          "cacheHitLogger - Cache hit/miss statistics",
          "graphqlQueryLogger - Log GraphQL queries",
          "socketConnectionLogger - Track WebSocket connections",
          "businessEventLogger - Custom business events",
          "geoLocationLogger - IP geolocation in logs",
          "requestBodyLogger - Log body (without passwords)"
        ]
      },
      {
        "id": "security",
        "label": "Security",
        "items": [
          "helmet - Security headers (CSP, HSTS, etc)",
          "rateLimiter - Limit requests per IP/user",
          "cors - Configure CORS headers",
          "xssProtection - Sanitize against XSS",
          "sqlInjectionProtection - Detect SQL injection patterns",
          "csrfToken - Generate and validate CSRF tokens",
          "hpp - HTTP Parameter Pollution prevention",
          "hidePoweredBy - Hide X-Powered-By header",
          "noSniff - X-Content-Type-Options: nosniff",
          "frameGuard - X-Frame-Options for clickjacking",
          "requestSizeLimit - Body parsing size limit",
          "blockUserAgents(['bot1']) - Block user-agents",
          "geoBlock(['CN','RU']) - Block countries by GeoIP",
          "bruteForceProtection - Lockout after N failed attempts",
          "sqlSanitizer - Escape dangerous characters",
          "commandInjectionCheck - Detect command injection",
          "pathTraversalProtection - Validate paths don't use ../",
          "jsonWebTokenSecurity - Validate allowed JWT algorithms",
          "secretsLeakScanner - Detect API keys in responses",
          "subresourceIntegrity - SRI for assets",
          "contentSecurityPolicy - Custom CSP policy",
          "requireHttps - Redirect HTTP to HTTPS",
          "secureSessionCookies - HttpOnly, Secure, SameSite",
          "rateLimitByEndpoint - Limits per specific route",
          "ipReputationCheck - Validate IP against blacklists"
        ]
      },
      {
        "id": "errors",
        "label": "Error Handling",
        "items": [
          "notFoundHandler - Final 404 handler",
          "globalErrorHandler - Catch-all error handler",
          "asyncErrorWrapper - Wrapper for async functions",
          "validationErrorFormatter - Format Joi/Zod errors",
          "databaseErrorHandler - Handle Prisma/Mongoose errors",
          "unauthorizedHandler - Consistent 401 responses",
          "forbiddenHandler - Custom 403 response",
          "conflictHandler - 409 for duplicates",
          "badRequestHandler - 400 with details",
          "internalServerErrorHandler - 500 without exposing stack",
          "rateLimitErrorHandler - 429 with Retry-After header",
          "timeoutHandler - 504 Gateway Timeout",
          "serviceUnavailableHandler - 503 responses",
          "payloadTooLargeHandler - Custom 413 message",
          "unprocessableEntityHandler - 422 with validation errors",
          "methodNotAllowedHandler - 405 response",
          "customErrorClass - Custom error classes with codes",
          "sentryErrorReporter - Send errors to Sentry",
          "bugsnagIntegration - Report to Bugsnag",
          "errorSlackNotifier - Notify critical errors to Slack",
          "errorEmailAlert - Email on 5xx errors",
          "gracefulShutdown - Close connections on SIGTERM",
          "domainErrorHandler - Handle domain-specific errors",
          "errorResponseNormalizer - Consistent error format",
          "stackTraceFilter - Filter sensitive stack trace"
        ]
      },
      {
        "id": "caching",
        "label": "Caching",
        "items": [
          "cacheResponse(ttl) - Cache response for X seconds",
          "cacheKeyGenerator - Generate custom cache key",
          "redisCacheMiddleware - Redis integration",
          "inMemoryCache - In-memory cache for dev",
          "cacheInvalidator - Invalidate cache by pattern",
          "conditionalCache - Cache only if query meets condition",
          "etag - Generate ETag headers for browser cache",
          "lastModified - Last-Modified headers",
          "staleWhileRevalidate - Serve stale cache while revalidating",
          "cacheByUserRole - Separate cache by role",
          "bypassCacheOnAuth - Don't cache authenticated requests",
          "cachePrefetch - Warm-up common cache",
          "cacheCompression - Compress cache values",
          "cacheMonitor - Cache hit rate statistics",
          "multiTierCache - L1 memory + L2 Redis",
          "cacheTagging - Invalidate by custom tags",
          "privateCacheControl - Cache-Control: private",
          "publicCacheControl - Cache-Control: public",
          "noCacheHeader - Force no-cache in browser",
          "surrogateCacheControl - Headers for CDN caching",
          "graphqlCacheDirective - Respect @cache directive GraphQL",
          "apiGatewayCacheIntegration - Cache at API Gateway",
          "varyByAcceptLanguage - Cache by language",
          "varyByAcceptEncoding - Cache by encoding",
          "cacheWarmingScheduler - Background job to warm cache"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Naming conventions for Express middleware",
        "body": "<p>Express middleware should have names that explain <strong>what they do, not how they do it</strong>. Use active verbs: <code>requireAuth</code>, <code>validateBody</code>, <code>logRequest</code>. Avoid vague names like <code>checkStuff</code> or <code>middleware1</code>.</p><p>For reusable middleware, use <strong>factory functions</strong> that return the middleware: <code>validateBody(schema)</code>, <code>rateLimit({ max: 100 })</code>. This allows per-route configuration without code duplication.</p><p>Organize middleware in folders by type: <code>/middleware/auth/</code>, <code>/middleware/validation/</code>. Global middleware (helmet, cors) goes in app bootstrap; route-specific ones apply in routers. Order matters: auth before validation, validation before handlers.</p>"
      },
      {
        "h2": "Common Express middleware patterns",
        "body": "<p>The most common pattern is <strong>three-argument middleware</strong> <code>(req, res, next)</code>. For async/await, wrap in <code>asyncHandler</code> or use libraries like <code>express-async-errors</code> that automate catching.</p><p><strong>Error handling</strong> middleware has four arguments: <code>(err, req, res, next)</code>. Must be at the end of the chain. Typed errors: create custom classes extending <code>Error</code> with <code>statusCode</code>, <code>code</code>, <code>isOperational</code> properties.</p><p>For validation, integrate <strong>Zod or Joi</strong>. Example: <code>validateBody(userSchema)</code> returns middleware that parses <code>req.body</code> and calls <code>next(error)</code> on failure. Use Zod's <code>transform</code> to sanitize and cast types (dates, emails).</p>"
      },
      {
        "h2": "Rate limiting and API security",
        "body": "<p>Implement <strong>rate limiting</strong> with <code>express-rate-limit</code>. Basic config: <code>max: 100</code> requests per IP every <code>windowMs: 15 * 60 * 1000</code> (15min). For public APIs, use aggressive limits (10 req/min); for authenticated, more permissive (100 req/min).</p><p>Combine rate limit with <strong>slow-down</strong>: instead of blocking, progressively delay responses (from 0ms to 1000ms). Useful for login/signup endpoints vulnerable to brute force.</p><p>Other security layers: <strong>helmet</strong> for headers (CSP, HSTS), <code>express-validator</code> to sanitize inputs, <code>hpp</code> against parameter pollution. In production, use <strong>API Gateway</strong> (AWS API Gateway, Kong) for WAF, geoblocking, and DDoS protection before reaching your app.</p>"
      },
      {
        "h2": "Testing and debugging middleware",
        "body": "<p>To test middleware, use <strong>supertest</strong> with real HTTP requests: <code>request(app).get('/api/users').expect(200)</code>. Mock <code>req</code>, <code>res</code>, <code>next</code> with <strong>node-mocks-http</strong> for isolated middleware unit tests.</p><p>Use <code>DEBUG=express:*</code> to see Express internal logs. For distributed tracing, add <strong>correlation IDs</strong> in early middleware and propagate them in <code>X-Correlation-ID</code> headers to downstream services.</p><p>Common mistakes: forgetting to call <code>next()</code> (request hangs), calling <code>next()</code> after sending response (cannot set headers error), modifying <code>req</code>/<code>res</code> without custom TypeScript types. Use <code>@types/express</code> + module augmentation for strict typing of custom properties like <code>req.user</code>.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the correct middleware order in Express?",
        "a": "1) Parsing (body-parser, cookie-parser), 2) Security (helmet, cors, rate limit), 3) Logging, 4) Auth, 5) Validation, 6) Route handlers, 7) 404 handler, 8) Error handler."
      },
      {
        "q": "How do I handle async errors in middleware?",
        "a": "Use express-async-errors (automatic) or wrap handlers in asyncHandler that does .catch(next). From Express 5, async/await works without wrappers."
      },
      {
        "q": "Should I use global or per-route middleware?",
        "a": "Global for base security (helmet, cors). Per-route for specific auth/validation. Avoid overhead by applying only where needed."
      },
      {
        "q": "How do I pass data between middleware?",
        "a": "Attach properties to req: req.user = decoded, req.context = {...}. Use TypeScript module augmentation for safe types."
      }
    ]
  }
};
