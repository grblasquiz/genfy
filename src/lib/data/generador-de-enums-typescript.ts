import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-enums-typescript",
    "en": "typescript-enum-generator"
  },
  "category": "tools",
  "emoji": "🔢",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Enums TypeScript | Genfy",
    "metaDesc": "Generá nombres de enums TypeScript con valores descriptivos y semánticos. Estructura tus tipos constantes con convenciones profesionales.",
    "h1": "Generador de Enums TypeScript",
    "intro": "Creá enums TypeScript bien estructurados con nombres y valores que siguen las convenciones del ecosistema. Ideal para tipos constantes, estados, configuraciones y APIs type-safe.",
    "tag": "Herramientas",
    "filterLabel": "Tipo de Enum",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "status",
        "label": "Estados y Status",
        "items": [
          "UserStatus { ACTIVE = 'active', INACTIVE = 'inactive', PENDING = 'pending', SUSPENDED = 'suspended', DELETED = 'deleted' }",
          "OrderStatus { DRAFT = 'draft', PROCESSING = 'processing', SHIPPED = 'shipped', DELIVERED = 'delivered', CANCELLED = 'cancelled' }",
          "PaymentStatus { PENDING = 'pending', AUTHORIZED = 'authorized', CAPTURED = 'captured', FAILED = 'failed', REFUNDED = 'refunded' }",
          "TaskStatus { TODO = 'todo', IN_PROGRESS = 'in_progress', REVIEW = 'review', DONE = 'done', BLOCKED = 'blocked' }",
          "ConnectionStatus { IDLE = 'idle', CONNECTING = 'connecting', CONNECTED = 'connected', DISCONNECTING = 'disconnecting', ERROR = 'error' }",
          "SubscriptionStatus { TRIAL = 'trial', ACTIVE = 'active', PAST_DUE = 'past_due', CANCELED = 'canceled', EXPIRED = 'expired' }",
          "InvoiceStatus { DRAFT = 'draft', SENT = 'sent', VIEWED = 'viewed', PAID = 'paid', OVERDUE = 'overdue' }",
          "DocumentStatus { DRAFT = 'draft', PUBLISHED = 'published', ARCHIVED = 'archived', DELETED = 'deleted', SCHEDULED = 'scheduled' }",
          "JobStatus { QUEUED = 'queued', RUNNING = 'running', COMPLETED = 'completed', FAILED = 'failed', RETRYING = 'retrying' }",
          "ApprovalStatus { PENDING = 'pending', APPROVED = 'approved', REJECTED = 'rejected', REVISION_NEEDED = 'revision_needed' }",
          "TicketStatus { OPEN = 'open', ASSIGNED = 'assigned', IN_PROGRESS = 'in_progress', RESOLVED = 'resolved', CLOSED = 'closed' }",
          "DeliveryStatus { PREPARING = 'preparing', IN_TRANSIT = 'in_transit', OUT_FOR_DELIVERY = 'out_for_delivery', DELIVERED = 'delivered', RETURNED = 'returned' }",
          "MembershipStatus { GUEST = 'guest', MEMBER = 'member', PREMIUM = 'premium', VIP = 'vip', LIFETIME = 'lifetime' }",
          "CampaignStatus { DRAFT = 'draft', SCHEDULED = 'scheduled', RUNNING = 'running', PAUSED = 'paused', COMPLETED = 'completed' }",
          "ReviewStatus { PENDING = 'pending', UNDER_REVIEW = 'under_review', CHANGES_REQUESTED = 'changes_requested', APPROVED = 'approved', REJECTED = 'rejected' }",
          "BuildStatus { PENDING = 'pending', BUILDING = 'building', SUCCESS = 'success', FAILED = 'failed', CANCELLED = 'cancelled' }",
          "NotificationStatus { UNREAD = 'unread', READ = 'read', ARCHIVED = 'archived', DISMISSED = 'dismissed' }",
          "VerificationStatus { UNVERIFIED = 'unverified', PENDING = 'pending', VERIFIED = 'verified', REJECTED = 'rejected' }",
          "ReservationStatus { REQUESTED = 'requested', CONFIRMED = 'confirmed', CHECKED_IN = 'checked_in', CHECKED_OUT = 'checked_out', CANCELLED = 'cancelled' }",
          "BackupStatus { IDLE = 'idle', IN_PROGRESS = 'in_progress', COMPLETED = 'completed', FAILED = 'failed', PARTIAL = 'partial' }"
        ]
      },
      {
        "id": "roles",
        "label": "Roles y Permisos",
        "items": [
          "UserRole { GUEST = 'guest', USER = 'user', MODERATOR = 'moderator', ADMIN = 'admin', SUPER_ADMIN = 'super_admin' }",
          "Permission { READ = 'read', WRITE = 'write', DELETE = 'delete', EXECUTE = 'execute', MANAGE = 'manage' }",
          "AccessLevel { PUBLIC = 'public', INTERNAL = 'internal', RESTRICTED = 'restricted', CONFIDENTIAL = 'confidential', SECRET = 'secret' }",
          "TeamRole { MEMBER = 'member', CONTRIBUTOR = 'contributor', MAINTAINER = 'maintainer', OWNER = 'owner' }",
          "ProjectRole { VIEWER = 'viewer', EDITOR = 'editor', MANAGER = 'manager', ARCHITECT = 'architect', OWNER = 'owner' }",
          "OrganizationRole { MEMBER = 'member', BILLING_ADMIN = 'billing_admin', TEAM_ADMIN = 'team_admin', OWNER = 'owner' }",
          "ContentRole { READER = 'reader', COMMENTER = 'commenter', EDITOR = 'editor', PUBLISHER = 'publisher', ADMIN = 'admin' }",
          "RepositoryRole { READ = 'read', TRIAGE = 'triage', WRITE = 'write', MAINTAIN = 'maintain', ADMIN = 'admin' }",
          "WorkspaceRole { GUEST = 'guest', MEMBER = 'member', ADMIN = 'admin', OWNER = 'owner' }",
          "ForumRole { LURKER = 'lurker', MEMBER = 'member', CONTRIBUTOR = 'contributor', MODERATOR = 'moderator', ADMIN = 'admin' }",
          "SupportRole { USER = 'user', AGENT = 'agent', TEAM_LEAD = 'team_lead', MANAGER = 'manager', ADMIN = 'admin' }",
          "ChannelRole { SUBSCRIBER = 'subscriber', MODERATOR = 'moderator', EDITOR = 'editor', ADMIN = 'admin', OWNER = 'owner' }",
          "AccountType { FREE = 'free', BASIC = 'basic', PRO = 'pro', ENTERPRISE = 'enterprise', CUSTOM = 'custom' }",
          "SecurityRole { READ_ONLY = 'read_only', AUDITOR = 'auditor', ANALYST = 'analyst', ENGINEER = 'engineer', ADMIN = 'admin' }",
          "CollaboratorRole { VIEWER = 'viewer', COMMENTER = 'commenter', EDITOR = 'editor', REVIEWER = 'reviewer', OWNER = 'owner' }"
        ]
      },
      {
        "id": "types",
        "label": "Tipos y Categorías",
        "items": [
          "FileType { IMAGE = 'image', VIDEO = 'video', AUDIO = 'audio', DOCUMENT = 'document', ARCHIVE = 'archive' }",
          "EventType { CLICK = 'click', VIEW = 'view', SUBMIT = 'submit', CHANGE = 'change', ERROR = 'error' }",
          "NotificationType { INFO = 'info', SUCCESS = 'success', WARNING = 'warning', ERROR = 'error', CRITICAL = 'critical' }",
          "TransactionType { DEPOSIT = 'deposit', WITHDRAWAL = 'withdrawal', TRANSFER = 'transfer', REFUND = 'refund', FEE = 'fee' }",
          "ContentType { ARTICLE = 'article', VIDEO = 'video', PODCAST = 'podcast', COURSE = 'course', RESOURCE = 'resource' }",
          "MessageType { TEXT = 'text', IMAGE = 'image', VIDEO = 'video', FILE = 'file', SYSTEM = 'system' }",
          "LogLevel { TRACE = 'trace', DEBUG = 'debug', INFO = 'info', WARN = 'warn', ERROR = 'error', FATAL = 'fatal' }",
          "Environment { DEVELOPMENT = 'development', STAGING = 'staging', PRODUCTION = 'production', TEST = 'test' }",
          "PriorityLevel { LOW = 'low', MEDIUM = 'medium', HIGH = 'high', URGENT = 'urgent', CRITICAL = 'critical' }",
          "SeverityLevel { TRIVIAL = 'trivial', MINOR = 'minor', MAJOR = 'major', CRITICAL = 'critical', BLOCKER = 'blocker' }",
          "ActionType { CREATE = 'create', READ = 'read', UPDATE = 'update', DELETE = 'delete', RESTORE = 'restore' }",
          "TimeUnit { SECOND = 'second', MINUTE = 'minute', HOUR = 'hour', DAY = 'day', WEEK = 'week', MONTH = 'month', YEAR = 'year' }",
          "SortDirection { ASC = 'asc', DESC = 'desc' }",
          "HttpMethod { GET = 'GET', POST = 'POST', PUT = 'PUT', PATCH = 'PATCH', DELETE = 'DELETE', OPTIONS = 'OPTIONS' }",
          "CacheStrategy { NO_CACHE = 'no_cache', MEMORY = 'memory', DISK = 'disk', NETWORK = 'network', HYBRID = 'hybrid' }",
          "AuthProvider { EMAIL = 'email', GOOGLE = 'google', GITHUB = 'github', FACEBOOK = 'facebook', APPLE = 'apple' }",
          "DataFormat { JSON = 'json', XML = 'xml', CSV = 'csv', YAML = 'yaml', BINARY = 'binary' }",
          "DeploymentStrategy { ROLLING = 'rolling', BLUE_GREEN = 'blue_green', CANARY = 'canary', RECREATE = 'recreate' }",
          "ErrorCode { BAD_REQUEST = 400, UNAUTHORIZED = 401, FORBIDDEN = 403, NOT_FOUND = 404, SERVER_ERROR = 500 }",
          "WebSocketEvent { CONNECT = 'connect', DISCONNECT = 'disconnect', MESSAGE = 'message', ERROR = 'error', RECONNECT = 'reconnect' }"
        ]
      },
      {
        "id": "config",
        "label": "Configuración y Opciones",
        "items": [
          "Theme { LIGHT = 'light', DARK = 'dark', AUTO = 'auto', HIGH_CONTRAST = 'high_contrast' }",
          "Language { EN = 'en', ES = 'es', FR = 'fr', DE = 'de', PT = 'pt', IT = 'it', JA = 'ja', ZH = 'zh' }",
          "Currency { USD = 'USD', EUR = 'EUR', GBP = 'GBP', JPY = 'JPY', ARS = 'ARS', BRL = 'BRL' }",
          "DateFormat { ISO = 'YYYY-MM-DD', US = 'MM/DD/YYYY', EU = 'DD/MM/YYYY', TIMESTAMP = 'timestamp' }",
          "Timezone { UTC = 'UTC', EST = 'America/New_York', PST = 'America/Los_Angeles', GMT = 'Europe/London', ART = 'America/Argentina/Buenos_Aires' }",
          "VideoQuality { AUTO = 'auto', LOW = '360p', MEDIUM = '480p', HD = '720p', FULL_HD = '1080p', UHD = '4k' }",
          "AudioQuality { LOW = 'low', NORMAL = 'normal', HIGH = 'high', LOSSLESS = 'lossless' }",
          "PageSize { SMALL = 10, MEDIUM = 25, LARGE = 50, XLARGE = 100 }",
          "RetryStrategy { NONE = 'none', LINEAR = 'linear', EXPONENTIAL = 'exponential', FIBONACCI = 'fibonacci' }",
          "CompressionLevel { NONE = 0, FAST = 1, BALANCED = 6, BEST = 9 }",
          "ValidationMode { STRICT = 'strict', LENIENT = 'lenient', PERMISSIVE = 'permissive' }",
          "RateLimitWindow { SECOND = 'second', MINUTE = 'minute', HOUR = 'hour', DAY = 'day' }",
          "StorageType { LOCAL = 'local', SESSION = 'session', INDEXEDDB = 'indexeddb', COOKIE = 'cookie' }",
          "NetworkMode { ONLINE = 'online', OFFLINE = 'offline', SLOW = 'slow' }",
          "LayoutMode { GRID = 'grid', LIST = 'list', KANBAN = 'kanban', CALENDAR = 'calendar', TABLE = 'table' }"
        ]
      },
      {
        "id": "ui",
        "label": "UI y Estados Visuales",
        "items": [
          "ButtonVariant { PRIMARY = 'primary', SECONDARY = 'secondary', GHOST = 'ghost', DANGER = 'danger', SUCCESS = 'success' }",
          "Size { XS = 'xs', SM = 'sm', MD = 'md', LG = 'lg', XL = 'xl' }",
          "Position { TOP = 'top', RIGHT = 'right', BOTTOM = 'bottom', LEFT = 'left', CENTER = 'center' }",
          "Alignment { START = 'start', CENTER = 'center', END = 'end', STRETCH = 'stretch', BASELINE = 'baseline' }",
          "Display { BLOCK = 'block', INLINE = 'inline', FLEX = 'flex', GRID = 'grid', NONE = 'none' }",
          "ModalSize { SM = 'sm', MD = 'md', LG = 'lg', XL = 'xl', FULL = 'full' }",
          "ToastPosition { TOP_LEFT = 'top-left', TOP_CENTER = 'top-center', TOP_RIGHT = 'top-right', BOTTOM_LEFT = 'bottom-left', BOTTOM_RIGHT = 'bottom-right' }",
          "IconSize { SM = 16, MD = 24, LG = 32, XL = 48 }",
          "SpacingScale { NONE = 0, XS = 4, SM = 8, MD = 16, LG = 24, XL = 32, XXL = 48 }",
          "AnimationDuration { INSTANT = 0, FAST = 150, NORMAL = 300, SLOW = 500 }",
          "Breakpoint { XS = 320, SM = 640, MD = 768, LG = 1024, XL = 1280, XXL = 1536 }",
          "AspectRatio { SQUARE = '1:1', LANDSCAPE = '16:9', PORTRAIT = '9:16', WIDE = '21:9' }",
          "ZIndex { DROPDOWN = 1000, STICKY = 1020, FIXED = 1030, MODAL_BACKDROP = 1040, MODAL = 1050, POPOVER = 1060, TOOLTIP = 1070 }",
          "Elevation { FLAT = 0, RAISED = 1, FLOATING = 2, OVERLAY = 3, DIALOG = 4 }",
          "LoadingState { IDLE = 'idle', LOADING = 'loading', SUCCESS = 'success', ERROR = 'error' }"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "¿Por qué usar enums en TypeScript?",
        "body": "<p>Los enums te permiten definir conjuntos de constantes con nombre que TypeScript valida en tiempo de compilación. A diferencia de usar strings sueltos, los enums previenen typos, facilitan refactoring y autocompletan en el IDE. Son ideales para status, roles, tipos de contenido y cualquier valor que tenga opciones limitadas y predefinidas.</p><p>Un error común es usar enums numéricos por defecto (enum Direction { Up, Down }). Esto genera valores 0, 1, 2... que son poco legibles en logs y bases de datos. Preferí siempre <strong>string enums</strong> con valores explícitos: enum Direction { Up = 'up', Down = 'down' }. Esto hace tu código más debuggeable y compatible con APIs REST.</p><p>Otro beneficio: TypeScript permite usar enums como tipos. Si definís type Status = UserStatus.ACTIVE | UserStatus.PENDING, el compilador valida que solo uses esos dos valores específicos, dándote seguridad de tipos granular sin repetir strings.</p>"
      },
      {
        "h2": "Convenciones de nomenclatura para enums",
        "body": "<p>El nombre del enum debe ser singular y en PascalCase: UserRole, OrderStatus, PaymentMethod. Los valores dentro van en SCREAMING_SNAKE_CASE (convención mayoritaria) o camelCase según tu equipo, pero mantené consistencia. El string value debe ser lowercase con guiones bajos: PENDING = 'pending', IN_PROGRESS = 'in_progress'.</p><p>Evitá prefijos redundantes. Si tu enum se llama UserStatus, no hace falta que los valores sean USER_ACTIVE, USER_PENDING. Con Status.ACTIVE ya queda claro en el contexto. Esta convención mantiene el código limpio y reduce ruido visual.</p><p>Para APIs públicas o configuraciones persistidas, los string values son parte de tu contrato. Una vez que ACTIVE = 'active' está en producción, cambiar ese string rompe integraciones. Por eso elegí valores descriptivos y estables desde el principio, no códigos crípticos como A, P, C que vas a lamentar después.</p>"
      },
      {
        "h2": "Cuándo usar const enum vs enum regular",
        "body": "<p>Los <strong>const enums</strong> (const enum Color { Red = 'red' }) se eliminan completamente en la compilación: TypeScript reemplaza Color.Red por 'red' inline. Esto reduce el tamaño del bundle pero perdés la posibilidad de iterar sobre el enum en runtime o de hacer reverse mapping.</p><p>Usá const enum solo para valores internos de tu app donde sabés que no necesitás reflection ni iteración. Para exports de librerías, enums de configuración que necesitás validar dinámicamente o casos donde querés Object.values(Status), usá enums regulares.</p><p>Un caso práctico: si necesitás generar un select con todas las opciones de un enum, necesitás iterar: Object.values(PaymentMethod).map(method => option). Eso no funciona con const enum. En cambio, para performance crítica en código interno (ej: un game loop con miles de comparaciones por segundo), const enum puede ahorrar microsegundos.</p>"
      },
      {
        "h2": "Integrando enums con validadores y APIs",
        "body": "<p>Los enums TypeScript no existen en runtime JavaScript, así que necesitás validación explícita en boundaries (APIs, forms, DB). Con Zod podés hacer: z.nativeEnum(UserStatus) o z.enum(['active', 'pending', ...]). Esto valida que el string recibido sea un valor legal del enum.</p><p>Para bases de datos, almacená el string value, no el índice numérico. Si tu enum evoluciona (agregás un valor en el medio), los índices cambian y corrompen data existente. Con strings, podés agregar Status.ARCHIVED sin romper registros que tienen 'active' o 'pending'.</p><p>Al serializar a JSON, los enums string se serializan directamente como strings, lo cual es perfecto. Si necesitás documentar una API (OpenAPI/Swagger), los enums aparecen como campos con valores permitidos, generando validación automática y mejor documentación para consumidores de la API.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Enums string o numeric en TypeScript?",
        "a": "String enums siempre. Son legibles en logs, estables ante refactoring y compatibles con APIs REST. Los numeric enums solo tienen sentido en contextos muy específicos como flags binarios."
      },
      {
        "q": "¿Cómo valido un string contra un enum?",
        "a": "Usá Object.values(MiEnum).includes(valor) o librerías como Zod con z.nativeEnum(MiEnum). TypeScript no valida tipos en runtime, necesitás validación explícita en boundaries."
      },
      {
        "q": "¿Puedo usar un enum como key de objeto?",
        "a": "Sí, pero asegurate de usar string enums. TypeScript permite { [Status.ACTIVE]: data }, y el string value se usa como key real del objeto en runtime."
      },
      {
        "q": "¿Cómo exporto un enum para uso externo?",
        "a": "Export normal: export enum Status { ... }. Si es para una librería, evitá const enum porque los consumidores no podrán iterar sobre valores ni hacer reverse lookups."
      }
    ]
  },
  "en": {
    "pageTitle": "TypeScript Enum Generator | Genfy",
    "metaDesc": "Generate TypeScript enum names with descriptive, semantic values. Structure your constant types with professional conventions and best practices.",
    "h1": "TypeScript Enum Generator",
    "intro": "Create well-structured TypeScript enums with names and values following ecosystem conventions. Perfect for constant types, states, configurations, and type-safe APIs.",
    "tag": "Tools",
    "filterLabel": "Enum Type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "status",
        "label": "Status and States",
        "items": [
          "UserStatus { ACTIVE = 'active', INACTIVE = 'inactive', PENDING = 'pending', SUSPENDED = 'suspended', DELETED = 'deleted' }",
          "OrderStatus { DRAFT = 'draft', PROCESSING = 'processing', SHIPPED = 'shipped', DELIVERED = 'delivered', CANCELLED = 'cancelled' }",
          "PaymentStatus { PENDING = 'pending', AUTHORIZED = 'authorized', CAPTURED = 'captured', FAILED = 'failed', REFUNDED = 'refunded' }",
          "TaskStatus { TODO = 'todo', IN_PROGRESS = 'in_progress', REVIEW = 'review', DONE = 'done', BLOCKED = 'blocked' }",
          "ConnectionStatus { IDLE = 'idle', CONNECTING = 'connecting', CONNECTED = 'connected', DISCONNECTING = 'disconnecting', ERROR = 'error' }",
          "SubscriptionStatus { TRIAL = 'trial', ACTIVE = 'active', PAST_DUE = 'past_due', CANCELED = 'canceled', EXPIRED = 'expired' }",
          "InvoiceStatus { DRAFT = 'draft', SENT = 'sent', VIEWED = 'viewed', PAID = 'paid', OVERDUE = 'overdue' }",
          "DocumentStatus { DRAFT = 'draft', PUBLISHED = 'published', ARCHIVED = 'archived', DELETED = 'deleted', SCHEDULED = 'scheduled' }",
          "JobStatus { QUEUED = 'queued', RUNNING = 'running', COMPLETED = 'completed', FAILED = 'failed', RETRYING = 'retrying' }",
          "ApprovalStatus { PENDING = 'pending', APPROVED = 'approved', REJECTED = 'rejected', REVISION_NEEDED = 'revision_needed' }",
          "TicketStatus { OPEN = 'open', ASSIGNED = 'assigned', IN_PROGRESS = 'in_progress', RESOLVED = 'resolved', CLOSED = 'closed' }",
          "DeliveryStatus { PREPARING = 'preparing', IN_TRANSIT = 'in_transit', OUT_FOR_DELIVERY = 'out_for_delivery', DELIVERED = 'delivered', RETURNED = 'returned' }",
          "MembershipStatus { GUEST = 'guest', MEMBER = 'member', PREMIUM = 'premium', VIP = 'vip', LIFETIME = 'lifetime' }",
          "CampaignStatus { DRAFT = 'draft', SCHEDULED = 'scheduled', RUNNING = 'running', PAUSED = 'paused', COMPLETED = 'completed' }",
          "ReviewStatus { PENDING = 'pending', UNDER_REVIEW = 'under_review', CHANGES_REQUESTED = 'changes_requested', APPROVED = 'approved', REJECTED = 'rejected' }",
          "BuildStatus { PENDING = 'pending', BUILDING = 'building', SUCCESS = 'success', FAILED = 'failed', CANCELLED = 'cancelled' }",
          "NotificationStatus { UNREAD = 'unread', READ = 'read', ARCHIVED = 'archived', DISMISSED = 'dismissed' }",
          "VerificationStatus { UNVERIFIED = 'unverified', PENDING = 'pending', VERIFIED = 'verified', REJECTED = 'rejected' }",
          "ReservationStatus { REQUESTED = 'requested', CONFIRMED = 'confirmed', CHECKED_IN = 'checked_in', CHECKED_OUT = 'checked_out', CANCELLED = 'cancelled' }",
          "BackupStatus { IDLE = 'idle', IN_PROGRESS = 'in_progress', COMPLETED = 'completed', FAILED = 'failed', PARTIAL = 'partial' }"
        ]
      },
      {
        "id": "roles",
        "label": "Roles and Permissions",
        "items": [
          "UserRole { GUEST = 'guest', USER = 'user', MODERATOR = 'moderator', ADMIN = 'admin', SUPER_ADMIN = 'super_admin' }",
          "Permission { READ = 'read', WRITE = 'write', DELETE = 'delete', EXECUTE = 'execute', MANAGE = 'manage' }",
          "AccessLevel { PUBLIC = 'public', INTERNAL = 'internal', RESTRICTED = 'restricted', CONFIDENTIAL = 'confidential', SECRET = 'secret' }",
          "TeamRole { MEMBER = 'member', CONTRIBUTOR = 'contributor', MAINTAINER = 'maintainer', OWNER = 'owner' }",
          "ProjectRole { VIEWER = 'viewer', EDITOR = 'editor', MANAGER = 'manager', ARCHITECT = 'architect', OWNER = 'owner' }",
          "OrganizationRole { MEMBER = 'member', BILLING_ADMIN = 'billing_admin', TEAM_ADMIN = 'team_admin', OWNER = 'owner' }",
          "ContentRole { READER = 'reader', COMMENTER = 'commenter', EDITOR = 'editor', PUBLISHER = 'publisher', ADMIN = 'admin' }",
          "RepositoryRole { READ = 'read', TRIAGE = 'triage', WRITE = 'write', MAINTAIN = 'maintain', ADMIN = 'admin' }",
          "WorkspaceRole { GUEST = 'guest', MEMBER = 'member', ADMIN = 'admin', OWNER = 'owner' }",
          "ForumRole { LURKER = 'lurker', MEMBER = 'member', CONTRIBUTOR = 'contributor', MODERATOR = 'moderator', ADMIN = 'admin' }",
          "SupportRole { USER = 'user', AGENT = 'agent', TEAM_LEAD = 'team_lead', MANAGER = 'manager', ADMIN = 'admin' }",
          "ChannelRole { SUBSCRIBER = 'subscriber', MODERATOR = 'moderator', EDITOR = 'editor', ADMIN = 'admin', OWNER = 'owner' }",
          "AccountType { FREE = 'free', BASIC = 'basic', PRO = 'pro', ENTERPRISE = 'enterprise', CUSTOM = 'custom' }",
          "SecurityRole { READ_ONLY = 'read_only', AUDITOR = 'auditor', ANALYST = 'analyst', ENGINEER = 'engineer', ADMIN = 'admin' }",
          "CollaboratorRole { VIEWER = 'viewer', COMMENTER = 'commenter', EDITOR = 'editor', REVIEWER = 'reviewer', OWNER = 'owner' }"
        ]
      },
      {
        "id": "types",
        "label": "Types and Categories",
        "items": [
          "FileType { IMAGE = 'image', VIDEO = 'video', AUDIO = 'audio', DOCUMENT = 'document', ARCHIVE = 'archive' }",
          "EventType { CLICK = 'click', VIEW = 'view', SUBMIT = 'submit', CHANGE = 'change', ERROR = 'error' }",
          "NotificationType { INFO = 'info', SUCCESS = 'success', WARNING = 'warning', ERROR = 'error', CRITICAL = 'critical' }",
          "TransactionType { DEPOSIT = 'deposit', WITHDRAWAL = 'withdrawal', TRANSFER = 'transfer', REFUND = 'refund', FEE = 'fee' }",
          "ContentType { ARTICLE = 'article', VIDEO = 'video', PODCAST = 'podcast', COURSE = 'course', RESOURCE = 'resource' }",
          "MessageType { TEXT = 'text', IMAGE = 'image', VIDEO = 'video', FILE = 'file', SYSTEM = 'system' }",
          "LogLevel { TRACE = 'trace', DEBUG = 'debug', INFO = 'info', WARN = 'warn', ERROR = 'error', FATAL = 'fatal' }",
          "Environment { DEVELOPMENT = 'development', STAGING = 'staging', PRODUCTION = 'production', TEST = 'test' }",
          "PriorityLevel { LOW = 'low', MEDIUM = 'medium', HIGH = 'high', URGENT = 'urgent', CRITICAL = 'critical' }",
          "SeverityLevel { TRIVIAL = 'trivial', MINOR = 'minor', MAJOR = 'major', CRITICAL = 'critical', BLOCKER = 'blocker' }",
          "ActionType { CREATE = 'create', READ = 'read', UPDATE = 'update', DELETE = 'delete', RESTORE = 'restore' }",
          "TimeUnit { SECOND = 'second', MINUTE = 'minute', HOUR = 'hour', DAY = 'day', WEEK = 'week', MONTH = 'month', YEAR = 'year' }",
          "SortDirection { ASC = 'asc', DESC = 'desc' }",
          "HttpMethod { GET = 'GET', POST = 'POST', PUT = 'PUT', PATCH = 'PATCH', DELETE = 'DELETE', OPTIONS = 'OPTIONS' }",
          "CacheStrategy { NO_CACHE = 'no_cache', MEMORY = 'memory', DISK = 'disk', NETWORK = 'network', HYBRID = 'hybrid' }",
          "AuthProvider { EMAIL = 'email', GOOGLE = 'google', GITHUB = 'github', FACEBOOK = 'facebook', APPLE = 'apple' }",
          "DataFormat { JSON = 'json', XML = 'xml', CSV = 'csv', YAML = 'yaml', BINARY = 'binary' }",
          "DeploymentStrategy { ROLLING = 'rolling', BLUE_GREEN = 'blue_green', CANARY = 'canary', RECREATE = 'recreate' }",
          "ErrorCode { BAD_REQUEST = 400, UNAUTHORIZED = 401, FORBIDDEN = 403, NOT_FOUND = 404, SERVER_ERROR = 500 }",
          "WebSocketEvent { CONNECT = 'connect', DISCONNECT = 'disconnect', MESSAGE = 'message', ERROR = 'error', RECONNECT = 'reconnect' }"
        ]
      },
      {
        "id": "config",
        "label": "Configuration and Options",
        "items": [
          "Theme { LIGHT = 'light', DARK = 'dark', AUTO = 'auto', HIGH_CONTRAST = 'high_contrast' }",
          "Language { EN = 'en', ES = 'es', FR = 'fr', DE = 'de', PT = 'pt', IT = 'it', JA = 'ja', ZH = 'zh' }",
          "Currency { USD = 'USD', EUR = 'EUR', GBP = 'GBP', JPY = 'JPY', ARS = 'ARS', BRL = 'BRL' }",
          "DateFormat { ISO = 'YYYY-MM-DD', US = 'MM/DD/YYYY', EU = 'DD/MM/YYYY', TIMESTAMP = 'timestamp' }",
          "Timezone { UTC = 'UTC', EST = 'America/New_York', PST = 'America/Los_Angeles', GMT = 'Europe/London', ART = 'America/Argentina/Buenos_Aires' }",
          "VideoQuality { AUTO = 'auto', LOW = '360p', MEDIUM = '480p', HD = '720p', FULL_HD = '1080p', UHD = '4k' }",
          "AudioQuality { LOW = 'low', NORMAL = 'normal', HIGH = 'high', LOSSLESS = 'lossless' }",
          "PageSize { SMALL = 10, MEDIUM = 25, LARGE = 50, XLARGE = 100 }",
          "RetryStrategy { NONE = 'none', LINEAR = 'linear', EXPONENTIAL = 'exponential', FIBONACCI = 'fibonacci' }",
          "CompressionLevel { NONE = 0, FAST = 1, BALANCED = 6, BEST = 9 }",
          "ValidationMode { STRICT = 'strict', LENIENT = 'lenient', PERMISSIVE = 'permissive' }",
          "RateLimitWindow { SECOND = 'second', MINUTE = 'minute', HOUR = 'hour', DAY = 'day' }",
          "StorageType { LOCAL = 'local', SESSION = 'session', INDEXEDDB = 'indexeddb', COOKIE = 'cookie' }",
          "NetworkMode { ONLINE = 'online', OFFLINE = 'offline', SLOW = 'slow' }",
          "LayoutMode { GRID = 'grid', LIST = 'list', KANBAN = 'kanban', CALENDAR = 'calendar', TABLE = 'table' }"
        ]
      },
      {
        "id": "ui",
        "label": "UI and Visual States",
        "items": [
          "ButtonVariant { PRIMARY = 'primary', SECONDARY = 'secondary', GHOST = 'ghost', DANGER = 'danger', SUCCESS = 'success' }",
          "Size { XS = 'xs', SM = 'sm', MD = 'md', LG = 'lg', XL = 'xl' }",
          "Position { TOP = 'top', RIGHT = 'right', BOTTOM = 'bottom', LEFT = 'left', CENTER = 'center' }",
          "Alignment { START = 'start', CENTER = 'center', END = 'end', STRETCH = 'stretch', BASELINE = 'baseline' }",
          "Display { BLOCK = 'block', INLINE = 'inline', FLEX = 'flex', GRID = 'grid', NONE = 'none' }",
          "ModalSize { SM = 'sm', MD = 'md', LG = 'lg', XL = 'xl', FULL = 'full' }",
          "ToastPosition { TOP_LEFT = 'top-left', TOP_CENTER = 'top-center', TOP_RIGHT = 'top-right', BOTTOM_LEFT = 'bottom-left', BOTTOM_RIGHT = 'bottom-right' }",
          "IconSize { SM = 16, MD = 24, LG = 32, XL = 48 }",
          "SpacingScale { NONE = 0, XS = 4, SM = 8, MD = 16, LG = 24, XL = 32, XXL = 48 }",
          "AnimationDuration { INSTANT = 0, FAST = 150, NORMAL = 300, SLOW = 500 }",
          "Breakpoint { XS = 320, SM = 640, MD = 768, LG = 1024, XL = 1280, XXL = 1536 }",
          "AspectRatio { SQUARE = '1:1', LANDSCAPE = '16:9', PORTRAIT = '9:16', WIDE = '21:9' }",
          "ZIndex { DROPDOWN = 1000, STICKY = 1020, FIXED = 1030, MODAL_BACKDROP = 1040, MODAL = 1050, POPOVER = 1060, TOOLTIP = 1070 }",
          "Elevation { FLAT = 0, RAISED = 1, FLOATING = 2, OVERLAY = 3, DIALOG = 4 }",
          "LoadingState { IDLE = 'idle', LOADING = 'loading', SUCCESS = 'success', ERROR = 'error' }"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why use enums in TypeScript?",
        "body": "<p>Enums let you define named constant sets that TypeScript validates at compile time. Unlike loose strings, enums prevent typos, enable safe refactoring, and autocomplete in your IDE. They're ideal for statuses, roles, content types, and any value with limited, predefined options.</p><p>A common mistake is using numeric enums by default (enum Direction { Up, Down }). This generates values 0, 1, 2... which are unreadable in logs and databases. Always prefer <strong>string enums</strong> with explicit values: enum Direction { Up = 'up', Down = 'down' }. This makes your code more debuggable and compatible with REST APIs.</p><p>Another benefit: TypeScript allows using enums as types. If you define type Status = UserStatus.ACTIVE | UserStatus.PENDING, the compiler validates you only use those two specific values, giving you granular type safety without repeating strings.</p>"
      },
      {
        "h2": "Naming conventions for enums",
        "body": "<p>Enum names should be singular and PascalCase: UserRole, OrderStatus, PaymentMethod. Values inside go in SCREAMING_SNAKE_CASE (majority convention) or camelCase depending on your team, but stay consistent. String values should be lowercase with underscores: PENDING = 'pending', IN_PROGRESS = 'in_progress'.</p><p>Avoid redundant prefixes. If your enum is called UserStatus, there's no need for values like USER_ACTIVE, USER_PENDING. Status.ACTIVE is clear in context. This convention keeps code clean and reduces visual noise.</p><p>For public APIs or persisted configurations, string values are part of your contract. Once ACTIVE = 'active' is in production, changing that string breaks integrations. Choose descriptive, stable values from the start—not cryptic codes like A, P, C that you'll regret later.</p>"
      },
      {
        "h2": "When to use const enum vs regular enum",
        "body": "<p><strong>Const enums</strong> (const enum Color { Red = 'red' }) are completely erased during compilation: TypeScript replaces Color.Red with 'red' inline. This reduces bundle size but you lose the ability to iterate over the enum at runtime or do reverse mapping.</p><p>Use const enum only for internal app values where you know you won't need reflection or iteration. For library exports, config enums you need to validate dynamically, or cases where you want Object.values(Status), use regular enums.</p><p>A practical case: if you need to generate a select with all enum options, you need iteration: Object.values(PaymentMethod).map(method => option). That doesn't work with const enum. For performance-critical internal code (e.g., a game loop with thousands of comparisons per second), const enum can save microseconds.</p>"
      },
      {
        "h2": "Integrating enums with validators and APIs",
        "body": "<p>TypeScript enums don't exist in JavaScript runtime, so you need explicit validation at boundaries (APIs, forms, DB). With Zod you can do: z.nativeEnum(UserStatus) or z.enum(['active', 'pending', ...]). This validates the received string is a legal enum value.</p><p>For databases, store the string value, not the numeric index. If your enum evolves (you add a value in the middle), indexes shift and corrupt existing data. With strings, you can add Status.ARCHIVED without breaking records that have 'active' or 'pending'.</p><p>When serializing to JSON, string enums serialize directly as strings, which is perfect. If you need to document an API (OpenAPI/Swagger), enums appear as fields with allowed values, generating automatic validation and better documentation for API consumers.</p>"
      }
    ],
    "faq": [
      {
        "q": "String or numeric enums in TypeScript?",
        "a": "String enums always. They're readable in logs, stable during refactoring, and compatible with REST APIs. Numeric enums only make sense in very specific contexts like binary flags."
      },
      {
        "q": "How do I validate a string against an enum?",
        "a": "Use Object.values(MyEnum).includes(value) or libraries like Zod with z.nativeEnum(MyEnum). TypeScript doesn't validate types at runtime—you need explicit validation at boundaries."
      },
      {
        "q": "Can I use an enum as an object key?",
        "a": "Yes, but make sure to use string enums. TypeScript allows { [Status.ACTIVE]: data }, and the string value is used as the actual object key at runtime."
      },
      {
        "q": "How do I export an enum for external use?",
        "a": "Normal export: export enum Status { ... }. For libraries, avoid const enum because consumers won't be able to iterate over values or do reverse lookups."
      }
    ]
  }
};
