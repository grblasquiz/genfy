import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-schema-graphql",
    "en": "graphql-schema-generator"
  },
  "category": "tools",
  "emoji": "📊",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Schema GraphQL | Genfy",
    "metaDesc": "Generá schemas GraphQL con types, queries y mutations. Ejemplos de estructuras comunes para APIs modernas con tipado fuerte.",
    "h1": "Generador de Schema GraphQL",
    "intro": "Diseñar schemas GraphQL requiere pensar en relaciones, tipos y operaciones. Este generador sugiere estructuras comunes para acelerar tu implementación.",
    "tag": "Herramientas",
    "filterLabel": "Tipo de schema",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "user-types",
        "label": "Tipos de usuarios y perfiles",
        "items": [
          "type User { id: ID! username: String! email: String! createdAt: DateTime! }",
          "type Profile { id: ID! bio: String avatar: String user: User! }",
          "type Admin { id: ID! permissions: [Permission!]! role: AdminRole! }",
          "type Customer { id: ID! orders: [Order!]! addresses: [Address!]! }",
          "type Author { id: ID! posts: [Post!]! followers: [User!]! bio: String }",
          "type Member { id: ID! membership: MembershipType! joinedAt: DateTime! }",
          "type Collaborator { id: ID! projects: [Project!]! skills: [String!]! }",
          "type Subscriber { id: ID! subscription: Subscription! plan: PlanType! }",
          "type Viewer { id: ID! watchlist: [Content!]! preferences: ViewerPreferences }",
          "type Teacher { id: ID! courses: [Course!]! rating: Float students: Int! }",
          "type Student { id: ID! enrollments: [Enrollment!]! progress: StudentProgress }",
          "type Vendor { id: ID! products: [Product!]! rating: Float verified: Boolean! }",
          "type Agent { id: ID! clients: [Client!]! commissionRate: Float }",
          "type Moderator { id: ID! reports: [Report!]! actions: [ModAction!]! }",
          "type Guest { sessionId: String! tempCart: [CartItem!]! }"
        ]
      },
      {
        "id": "content-types",
        "label": "Tipos de contenido",
        "items": [
          "type Post { id: ID! title: String! content: String! author: User! comments: [Comment!]! }",
          "type Comment { id: ID! text: String! author: User! post: Post! createdAt: DateTime! }",
          "type Article { id: ID! headline: String! body: String! tags: [Tag!]! publishedAt: DateTime }",
          "type Video { id: ID! title: String! url: String! duration: Int! views: Int! }",
          "type Image { id: ID! url: String! width: Int! height: Int! alt: String }",
          "type Document { id: ID! filename: String! size: Int! mimeType: String! uploadedBy: User! }",
          "type Podcast { id: ID! title: String! description: String episodes: [Episode!]! }",
          "type Episode { id: ID! number: Int! audioUrl: String! duration: Int! podcast: Podcast! }",
          "type Thread { id: ID! title: String! messages: [Message!]! participants: [User!]! }",
          "type Message { id: ID! content: String! sender: User! sentAt: DateTime! }",
          "type Page { id: ID! slug: String! title: String! sections: [Section!]! }",
          "type Section { id: ID! type: SectionType! content: JSON! order: Int! }",
          "type Gallery { id: ID! name: String! images: [Image!]! coverImage: Image }",
          "type Album { id: ID! title: String! artist: Artist! tracks: [Track!]! }",
          "type Track { id: ID! title: String! duration: Int! streamUrl: String! }"
        ]
      },
      {
        "id": "ecommerce-types",
        "label": "E-commerce",
        "items": [
          "type Product { id: ID! name: String! price: Float! stock: Int! category: Category! }",
          "type Cart { id: ID! items: [CartItem!]! total: Float! user: User }",
          "type CartItem { id: ID! product: Product! quantity: Int! subtotal: Float! }",
          "type Order { id: ID! items: [OrderItem!]! status: OrderStatus! total: Float! customer: User! }",
          "type OrderItem { id: ID! product: Product! quantity: Int! price: Float! }",
          "type Category { id: ID! name: String! slug: String! products: [Product!]! parent: Category }",
          "type Review { id: ID! rating: Int! comment: String author: User! product: Product! }",
          "type Wishlist { id: ID! items: [Product!]! user: User! }",
          "type Payment { id: ID! amount: Float! method: PaymentMethod! status: PaymentStatus! order: Order! }",
          "type Shipping { id: ID! address: Address! trackingNumber: String status: ShippingStatus! }",
          "type Address { id: ID! street: String! city: String! country: String! postalCode: String! }",
          "type Coupon { id: ID! code: String! discount: Float! expiresAt: DateTime }",
          "type Inventory { id: ID! product: Product! quantity: Int! warehouse: Warehouse }",
          "type Warehouse { id: ID! name: String! location: String! capacity: Int! }",
          "type Refund { id: ID! amount: Float! reason: String status: RefundStatus! order: Order! }"
        ]
      },
      {
        "id": "social-types",
        "label": "Redes sociales",
        "items": [
          "type Follow { id: ID! follower: User! following: User! createdAt: DateTime! }",
          "type Like { id: ID! user: User! post: Post! createdAt: DateTime! }",
          "type Share { id: ID! user: User! post: Post! sharedAt: DateTime! }",
          "type Notification { id: ID! recipient: User! type: NotificationType! read: Boolean! content: String }",
          "type Feed { id: ID! user: User! posts: [Post!]! updatedAt: DateTime! }",
          "type Story { id: ID! user: User! mediaUrl: String! expiresAt: DateTime! views: Int! }",
          "type Mention { id: ID! user: User! post: Post! position: Int! }",
          "type Hashtag { id: ID! tag: String! posts: [Post!]! trendingScore: Float }",
          "type DirectMessage { id: ID! sender: User! recipient: User! text: String! sentAt: DateTime! }",
          "type Conversation { id: ID! participants: [User!]! messages: [DirectMessage!]! }",
          "type Reaction { id: ID! type: ReactionType! user: User! post: Post! }",
          "type FriendRequest { id: ID! from: User! to: User! status: RequestStatus! sentAt: DateTime! }",
          "type Block { id: ID! blocker: User! blocked: User! reason: String createdAt: DateTime! }",
          "type Report { id: ID! reporter: User! content: ReportableContent! reason: String! status: ReportStatus! }",
          "type Poll { id: ID! question: String! options: [PollOption!]! votes: Int! createdBy: User! }"
        ]
      },
      {
        "id": "education-types",
        "label": "Educación y cursos",
        "items": [
          "type Course { id: ID! title: String! description: String instructor: Teacher! modules: [Module!]! }",
          "type Module { id: ID! title: String! lessons: [Lesson!]! order: Int! course: Course! }",
          "type Lesson { id: ID! title: String! content: String videoUrl: String duration: Int! }",
          "type Quiz { id: ID! title: String! questions: [Question!]! passingScore: Int! }",
          "type Question { id: ID! text: String! options: [String!]! correctAnswer: Int! points: Int! }",
          "type Enrollment { id: ID! student: Student! course: Course! progress: Float! enrolledAt: DateTime! }",
          "type Assignment { id: ID! title: String! instructions: String! dueDate: DateTime! course: Course! }",
          "type Submission { id: ID! assignment: Assignment! student: Student! content: String! grade: Float }",
          "type Certificate { id: ID! student: Student! course: Course! issuedAt: DateTime! verificationCode: String! }",
          "type Discussion { id: ID! topic: String! posts: [DiscussionPost!]! course: Course! }",
          "type DiscussionPost { id: ID! content: String! author: User! replies: [DiscussionPost!]! }",
          "type Grade { id: ID! student: Student! assignment: Assignment! score: Float! feedback: String }",
          "type Attendance { id: ID! student: Student! lesson: Lesson! present: Boolean! date: DateTime! }",
          "type Resource { id: ID! title: String! type: ResourceType! url: String! lesson: Lesson! }",
          "type Progress { id: ID! student: Student! course: Course! completedLessons: [Lesson!]! percentage: Float! }"
        ]
      },
      {
        "id": "saas-types",
        "label": "SaaS y workspace",
        "items": [
          "type Workspace { id: ID! name: String! members: [Member!]! plan: Plan! owner: User! }",
          "type Team { id: ID! name: String! members: [User!]! projects: [Project!]! workspace: Workspace! }",
          "type Project { id: ID! name: String! description: String team: Team! tasks: [Task!]! }",
          "type Task { id: ID! title: String! description: String status: TaskStatus! assignee: User! }",
          "type Plan { id: ID! name: String! price: Float! features: [String!]! maxUsers: Int! }",
          "type Subscription { id: ID! plan: Plan! status: SubscriptionStatus! currentPeriodEnd: DateTime! }",
          "type Invoice { id: ID! amount: Float! status: InvoiceStatus! dueDate: DateTime! subscription: Subscription! }",
          "type Feature { id: ID! name: String! enabled: Boolean! plan: Plan! }",
          "type Usage { id: ID! workspace: Workspace! metric: String! value: Int! period: DateTime! }",
          "type ApiKey { id: ID! key: String! name: String! workspace: Workspace! createdAt: DateTime! }",
          "type Webhook { id: ID! url: String! events: [String!]! workspace: Workspace! active: Boolean! }",
          "type Integration { id: ID! service: String! credentials: JSON! workspace: Workspace! }",
          "type Audit { id: ID! action: String! user: User! workspace: Workspace! timestamp: DateTime! }",
          "type Role { id: ID! name: String! permissions: [Permission!]! workspace: Workspace! }",
          "type Permission { id: ID! resource: String! action: PermissionAction! scope: PermissionScope! }"
        ]
      },
      {
        "id": "queries",
        "label": "Queries comunes",
        "items": [
          "type Query { user(id: ID!): User users(limit: Int offset: Int): [User!]! }",
          "type Query { post(id: ID!): Post posts(filter: PostFilter): [Post!]! }",
          "type Query { me: User! profile: Profile }",
          "type Query { search(query: String!): SearchResults! }",
          "type Query { feed(first: Int after: String): FeedConnection! }",
          "type Query { product(id: ID!): Product products(category: String): [Product!]! }",
          "type Query { order(id: ID!): Order myOrders: [Order!]! }",
          "type Query { course(id: ID!): Course courses(filter: CourseFilter): [Course!]! }",
          "type Query { workspace(id: ID!): Workspace myWorkspaces: [Workspace!]! }",
          "type Query { notifications(read: Boolean): [Notification!]! }",
          "type Query { trending(limit: Int): [TrendingItem!]! }",
          "type Query { analytics(timeRange: TimeRange!): Analytics! }",
          "type Query { suggestions(type: SuggestionType!): [Suggestion!]! }",
          "type Query { health: HealthStatus! version: String! }",
          "type Query { comments(postId: ID! limit: Int): [Comment!]! }"
        ]
      },
      {
        "id": "mutations",
        "label": "Mutations comunes",
        "items": [
          "type Mutation { createUser(input: CreateUserInput!): User! updateUser(id: ID! input: UpdateUserInput!): User! }",
          "type Mutation { deleteUser(id: ID!): Boolean! }",
          "type Mutation { createPost(input: CreatePostInput!): Post! updatePost(id: ID! input: UpdatePostInput!): Post! }",
          "type Mutation { login(email: String! password: String!): AuthPayload! logout: Boolean! }",
          "type Mutation { followUser(userId: ID!): Follow! unfollowUser(userId: ID!): Boolean! }",
          "type Mutation { likePost(postId: ID!): Like! unlikePost(postId: ID!): Boolean! }",
          "type Mutation { createComment(postId: ID! text: String!): Comment! }",
          "type Mutation { addToCart(productId: ID! quantity: Int!): CartItem! }",
          "type Mutation { createOrder(input: CreateOrderInput!): Order! }",
          "type Mutation { processPayment(orderId: ID! paymentInfo: PaymentInput!): Payment! }",
          "type Mutation { enrollInCourse(courseId: ID!): Enrollment! }",
          "type Mutation { submitAssignment(assignmentId: ID! content: String!): Submission! }",
          "type Mutation { createWorkspace(input: CreateWorkspaceInput!): Workspace! }",
          "type Mutation { inviteMember(workspaceId: ID! email: String! role: String!): Invitation! }",
          "type Mutation { uploadFile(file: Upload!): File! }"
        ]
      },
      {
        "id": "subscriptions",
        "label": "Subscriptions",
        "items": [
          "type Subscription { messageAdded(conversationId: ID!): Message! }",
          "type Subscription { postCreated: Post! postUpdated(postId: ID!): Post! }",
          "type Subscription { notificationReceived: Notification! }",
          "type Subscription { orderStatusChanged(orderId: ID!): Order! }",
          "type Subscription { userOnline(userId: ID!): OnlineStatus! }",
          "type Subscription { commentAdded(postId: ID!): Comment! }",
          "type Subscription { taskUpdated(projectId: ID!): Task! }",
          "type Subscription { newFollower: User! }",
          "type Subscription { liveCount(eventId: ID!): Int! }",
          "type Subscription { typing(conversationId: ID!): TypingIndicator! }",
          "type Subscription { priceUpdated(productId: ID!): Product! }",
          "type Subscription { streamUpdate(streamId: ID!): StreamData! }",
          "type Subscription { workspaceUpdated(workspaceId: ID!): Workspace! }",
          "type Subscription { progressUpdate(courseId: ID!): Progress! }",
          "type Subscription { webhookTriggered(workspaceId: ID!): WebhookEvent! }"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Principios de diseño de schemas GraphQL",
        "body": "<p>Un schema GraphQL bien diseñado es el contrato entre tu API y los consumidores. A diferencia de REST, donde el backend controla la estructura de las respuestas, en GraphQL el cliente pide exactamente lo que necesita. Esto exige pensar la modelación de datos desde las necesidades del frontend.</p><p><strong>Empezá por los casos de uso:</strong> Antes de escribir types, listá las queries que los clientes necesitarán. 'Quiero mostrar un perfil con posts y seguidores' → necesitás type User con relaciones. Esto previene schemas con campos que nadie usa.</p><p><strong>Tipado fuerte es clave:</strong> Usá <code>ID!</code> para identificadores obligatorios, <code>String!</code> para campos requeridos, <code>[Type!]!</code> para listas no-null de items no-null. El ! indica obligatoriedad. Esto captura errores en desarrollo, no en producción.</p><p><strong>Relaciones bidireccionales:</strong> Si Post tiene <code>author: User!</code>, considerá si User necesita <code>posts: [Post!]!</code>. Pero ojo: relaciones bidireccionales pueden generar over-fetching si no usás DataLoader para batch queries y evitar N+1.</p>"
      },
      {
        "h2": "Evitar errores comunes de modelado",
        "body": "<p><strong>No calcar tu base de datos:</strong> Tu schema no es tu DB expuesta. Si tenés una tabla users_posts_likes con IDs foráneos, no crees un type UsersPostsLikes. Exponé Like con relaciones limpias. El schema debe modelar el dominio, no la implementación interna.</p><p><strong>Nombres vagos o técnicos:</strong> <code>type Data { info: String }</code> no dice nada. Sé específico: <code>type UserProfile { bio: String }</code>. Evitá abreviaturas crípticas. El schema es documentación viva.</p><p><strong>Queries con demasiados parámetros:</strong> <code>users(filterByName: String, filterByEmail: String, filterByAge: Int, sortBy: String, order: String, limit: Int, offset: Int)</code> es inmanejable. Usá input types: <code>users(filter: UserFilter, pagination: PaginationInput)</code>.</p><p><strong>Mutaciones sin input types:</strong> <code>createUser(name: String! email: String! age: Int bio: String avatar: String)</code> vs <code>createUser(input: CreateUserInput!)</code>. Input types escalan mejor y permiten validaciones complejas.</p>"
      },
      {
        "h2": "Paginación, filtros y ordenamiento",
        "body": "<p><strong>Cursor-based pagination:</strong> Para feeds infinitos, usá conexiones: <code>posts(first: Int after: String): PostConnection!</code> con <code>type PostConnection { edges: [PostEdge!]! pageInfo: PageInfo! }</code>. Esto escala mejor que offset-based para datasets grandes.</p><p><strong>Offset-based pagination:</strong> Para casos simples: <code>users(limit: Int offset: Int): [User!]!</code>. Funciona bien hasta ~10k records. Después, cursor-based es más eficiente.</p><p><strong>Filtros complejos:</strong> Usá input types anidados. <code>input ProductFilter { category: String priceRange: PriceRangeInput inStock: Boolean }</code> con <code>input PriceRangeInput { min: Float max: Float }</code>. Esto permite composición de filtros sin explotar la firma de la query.</p><p><strong>Ordenamiento:</strong> Enum para opciones: <code>enum PostSort { RECENT POPULAR TRENDING }</code>. Combinalo con <code>order: SortOrder</code> donde <code>enum SortOrder { ASC DESC }</code> si necesitás control de dirección.</p>"
      },
      {
        "h2": "Subscriptions y real-time",
        "body": "<p>Subscriptions permiten push de datos desde el servidor. Usá WebSockets o Server-Sent Events según tu infraestructura. Estructura típica: <code>type Subscription { messageAdded(conversationId: ID!): Message! }</code>.</p><p><strong>Cuándo usar subscriptions:</strong> Chat en tiempo real, notificaciones push, updates de estado (orden procesándose, stock cambiando), colaboración live (usuarios editando mismo doc). No para polling que puede ser query cada X segundos.</p><p><strong>Performance:</strong> Cada subscription abierta consume recursos del servidor. Implementá autenticación en subscriptions: <code>context</code> debe validar que el user puede subscribirse al recurso. Limitá subscriptions por conexión para evitar abuse.</p><p><strong>Alternativas:</strong> Si tu caso de uso tolera 5-10 segundos de latencia, polling con queries es más simple. Si necesitás live updates pero no sub-segundo, long-polling o webhooks pueden ser suficientes. Subscriptions agregan complejidad; validá que la justifican.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre Query y Mutation en GraphQL?",
        "a": "Queries leen datos sin efectos secundarios. Mutations modifican datos (create, update, delete). GraphQL ejecuta queries en paralelo pero mutations en serie para prevenir race conditions."
      },
      {
        "q": "¿Debo exponer todos los campos de mi base de datos en el schema?",
        "a": "No. Exponé solo lo que los clientes necesitan. Campos internos como password_hash, internal_notes, o claves de encriptación nunca deben estar en el schema público. Pensá en surface area de seguridad."
      },
      {
        "q": "¿Cómo manejo autenticación en GraphQL?",
        "a": "En el context del resolver, no en el schema. Validá JWT/token en el middleware antes de que llegue a resolvers. Retorná errores específicos: AuthenticationError, ForbiddenError. No uses query 'isAuthenticated'."
      },
      {
        "q": "¿Puedo tener múltiples schemas en un proyecto?",
        "a": "Sí, con schema stitching o federation (Apollo). Útil para microservicios donde cada servicio tiene su subgraph. El gateway compone los schemas en uno unificado para el cliente."
      }
    ]
  },
  "en": {
    "pageTitle": "GraphQL Schema Generator | Genfy",
    "metaDesc": "Generate GraphQL schemas with types, queries, and mutations. Examples of common structures for modern APIs with strong typing.",
    "h1": "GraphQL Schema Generator",
    "intro": "Designing GraphQL schemas requires thinking about relationships, types, and operations. This generator suggests common structures to accelerate your implementation.",
    "tag": "Tools",
    "filterLabel": "Schema type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "user-types",
        "label": "User and profile types",
        "items": [
          "type User { id: ID! username: String! email: String! createdAt: DateTime! }",
          "type Profile { id: ID! bio: String avatar: String user: User! }",
          "type Admin { id: ID! permissions: [Permission!]! role: AdminRole! }",
          "type Customer { id: ID! orders: [Order!]! addresses: [Address!]! }",
          "type Author { id: ID! posts: [Post!]! followers: [User!]! bio: String }",
          "type Member { id: ID! membership: MembershipType! joinedAt: DateTime! }",
          "type Collaborator { id: ID! projects: [Project!]! skills: [String!]! }",
          "type Subscriber { id: ID! subscription: Subscription! plan: PlanType! }",
          "type Viewer { id: ID! watchlist: [Content!]! preferences: ViewerPreferences }",
          "type Teacher { id: ID! courses: [Course!]! rating: Float students: Int! }",
          "type Student { id: ID! enrollments: [Enrollment!]! progress: StudentProgress }",
          "type Vendor { id: ID! products: [Product!]! rating: Float verified: Boolean! }",
          "type Agent { id: ID! clients: [Client!]! commissionRate: Float }",
          "type Moderator { id: ID! reports: [Report!]! actions: [ModAction!]! }",
          "type Guest { sessionId: String! tempCart: [CartItem!]! }"
        ]
      },
      {
        "id": "content-types",
        "label": "Content types",
        "items": [
          "type Post { id: ID! title: String! content: String! author: User! comments: [Comment!]! }",
          "type Comment { id: ID! text: String! author: User! post: Post! createdAt: DateTime! }",
          "type Article { id: ID! headline: String! body: String! tags: [Tag!]! publishedAt: DateTime }",
          "type Video { id: ID! title: String! url: String! duration: Int! views: Int! }",
          "type Image { id: ID! url: String! width: Int! height: Int! alt: String }",
          "type Document { id: ID! filename: String! size: Int! mimeType: String! uploadedBy: User! }",
          "type Podcast { id: ID! title: String! description: String episodes: [Episode!]! }",
          "type Episode { id: ID! number: Int! audioUrl: String! duration: Int! podcast: Podcast! }",
          "type Thread { id: ID! title: String! messages: [Message!]! participants: [User!]! }",
          "type Message { id: ID! content: String! sender: User! sentAt: DateTime! }",
          "type Page { id: ID! slug: String! title: String! sections: [Section!]! }",
          "type Section { id: ID! type: SectionType! content: JSON! order: Int! }",
          "type Gallery { id: ID! name: String! images: [Image!]! coverImage: Image }",
          "type Album { id: ID! title: String! artist: Artist! tracks: [Track!]! }",
          "type Track { id: ID! title: String! duration: Int! streamUrl: String! }"
        ]
      },
      {
        "id": "ecommerce-types",
        "label": "E-commerce",
        "items": [
          "type Product { id: ID! name: String! price: Float! stock: Int! category: Category! }",
          "type Cart { id: ID! items: [CartItem!]! total: Float! user: User }",
          "type CartItem { id: ID! product: Product! quantity: Int! subtotal: Float! }",
          "type Order { id: ID! items: [OrderItem!]! status: OrderStatus! total: Float! customer: User! }",
          "type OrderItem { id: ID! product: Product! quantity: Int! price: Float! }",
          "type Category { id: ID! name: String! slug: String! products: [Product!]! parent: Category }",
          "type Review { id: ID! rating: Int! comment: String author: User! product: Product! }",
          "type Wishlist { id: ID! items: [Product!]! user: User! }",
          "type Payment { id: ID! amount: Float! method: PaymentMethod! status: PaymentStatus! order: Order! }",
          "type Shipping { id: ID! address: Address! trackingNumber: String status: ShippingStatus! }",
          "type Address { id: ID! street: String! city: String! country: String! postalCode: String! }",
          "type Coupon { id: ID! code: String! discount: Float! expiresAt: DateTime }",
          "type Inventory { id: ID! product: Product! quantity: Int! warehouse: Warehouse }",
          "type Warehouse { id: ID! name: String! location: String! capacity: Int! }",
          "type Refund { id: ID! amount: Float! reason: String status: RefundStatus! order: Order! }"
        ]
      },
      {
        "id": "social-types",
        "label": "Social networks",
        "items": [
          "type Follow { id: ID! follower: User! following: User! createdAt: DateTime! }",
          "type Like { id: ID! user: User! post: Post! createdAt: DateTime! }",
          "type Share { id: ID! user: User! post: Post! sharedAt: DateTime! }",
          "type Notification { id: ID! recipient: User! type: NotificationType! read: Boolean! content: String }",
          "type Feed { id: ID! user: User! posts: [Post!]! updatedAt: DateTime! }",
          "type Story { id: ID! user: User! mediaUrl: String! expiresAt: DateTime! views: Int! }",
          "type Mention { id: ID! user: User! post: Post! position: Int! }",
          "type Hashtag { id: ID! tag: String! posts: [Post!]! trendingScore: Float }",
          "type DirectMessage { id: ID! sender: User! recipient: User! text: String! sentAt: DateTime! }",
          "type Conversation { id: ID! participants: [User!]! messages: [DirectMessage!]! }",
          "type Reaction { id: ID! type: ReactionType! user: User! post: Post! }",
          "type FriendRequest { id: ID! from: User! to: User! status: RequestStatus! sentAt: DateTime! }",
          "type Block { id: ID! blocker: User! blocked: User! reason: String createdAt: DateTime! }",
          "type Report { id: ID! reporter: User! content: ReportableContent! reason: String! status: ReportStatus! }",
          "type Poll { id: ID! question: String! options: [PollOption!]! votes: Int! createdBy: User! }"
        ]
      },
      {
        "id": "education-types",
        "label": "Education and courses",
        "items": [
          "type Course { id: ID! title: String! description: String instructor: Teacher! modules: [Module!]! }",
          "type Module { id: ID! title: String! lessons: [Lesson!]! order: Int! course: Course! }",
          "type Lesson { id: ID! title: String! content: String videoUrl: String duration: Int! }",
          "type Quiz { id: ID! title: String! questions: [Question!]! passingScore: Int! }",
          "type Question { id: ID! text: String! options: [String!]! correctAnswer: Int! points: Int! }",
          "type Enrollment { id: ID! student: Student! course: Course! progress: Float! enrolledAt: DateTime! }",
          "type Assignment { id: ID! title: String! instructions: String! dueDate: DateTime! course: Course! }",
          "type Submission { id: ID! assignment: Assignment! student: Student! content: String! grade: Float }",
          "type Certificate { id: ID! student: Student! course: Course! issuedAt: DateTime! verificationCode: String! }",
          "type Discussion { id: ID! topic: String! posts: [DiscussionPost!]! course: Course! }",
          "type DiscussionPost { id: ID! content: String! author: User! replies: [DiscussionPost!]! }",
          "type Grade { id: ID! student: Student! assignment: Assignment! score: Float! feedback: String }",
          "type Attendance { id: ID! student: Student! lesson: Lesson! present: Boolean! date: DateTime! }",
          "type Resource { id: ID! title: String! type: ResourceType! url: String! lesson: Lesson! }",
          "type Progress { id: ID! student: Student! course: Course! completedLessons: [Lesson!]! percentage: Float! }"
        ]
      },
      {
        "id": "saas-types",
        "label": "SaaS and workspace",
        "items": [
          "type Workspace { id: ID! name: String! members: [Member!]! plan: Plan! owner: User! }",
          "type Team { id: ID! name: String! members: [User!]! projects: [Project!]! workspace: Workspace! }",
          "type Project { id: ID! name: String! description: String team: Team! tasks: [Task!]! }",
          "type Task { id: ID! title: String! description: String status: TaskStatus! assignee: User! }",
          "type Plan { id: ID! name: String! price: Float! features: [String!]! maxUsers: Int! }",
          "type Subscription { id: ID! plan: Plan! status: SubscriptionStatus! currentPeriodEnd: DateTime! }",
          "type Invoice { id: ID! amount: Float! status: InvoiceStatus! dueDate: DateTime! subscription: Subscription! }",
          "type Feature { id: ID! name: String! enabled: Boolean! plan: Plan! }",
          "type Usage { id: ID! workspace: Workspace! metric: String! value: Int! period: DateTime! }",
          "type ApiKey { id: ID! key: String! name: String! workspace: Workspace! createdAt: DateTime! }",
          "type Webhook { id: ID! url: String! events: [String!]! workspace: Workspace! active: Boolean! }",
          "type Integration { id: ID! service: String! credentials: JSON! workspace: Workspace! }",
          "type Audit { id: ID! action: String! user: User! workspace: Workspace! timestamp: DateTime! }",
          "type Role { id: ID! name: String! permissions: [Permission!]! workspace: Workspace! }",
          "type Permission { id: ID! resource: String! action: PermissionAction! scope: PermissionScope! }"
        ]
      },
      {
        "id": "queries",
        "label": "Common queries",
        "items": [
          "type Query { user(id: ID!): User users(limit: Int offset: Int): [User!]! }",
          "type Query { post(id: ID!): Post posts(filter: PostFilter): [Post!]! }",
          "type Query { me: User! profile: Profile }",
          "type Query { search(query: String!): SearchResults! }",
          "type Query { feed(first: Int after: String): FeedConnection! }",
          "type Query { product(id: ID!): Product products(category: String): [Product!]! }",
          "type Query { order(id: ID!): Order myOrders: [Order!]! }",
          "type Query { course(id: ID!): Course courses(filter: CourseFilter): [Course!]! }",
          "type Query { workspace(id: ID!): Workspace myWorkspaces: [Workspace!]! }",
          "type Query { notifications(read: Boolean): [Notification!]! }",
          "type Query { trending(limit: Int): [TrendingItem!]! }",
          "type Query { analytics(timeRange: TimeRange!): Analytics! }",
          "type Query { suggestions(type: SuggestionType!): [Suggestion!]! }",
          "type Query { health: HealthStatus! version: String! }",
          "type Query { comments(postId: ID! limit: Int): [Comment!]! }"
        ]
      },
      {
        "id": "mutations",
        "label": "Common mutations",
        "items": [
          "type Mutation { createUser(input: CreateUserInput!): User! updateUser(id: ID! input: UpdateUserInput!): User! }",
          "type Mutation { deleteUser(id: ID!): Boolean! }",
          "type Mutation { createPost(input: CreatePostInput!): Post! updatePost(id: ID! input: UpdatePostInput!): Post! }",
          "type Mutation { login(email: String! password: String!): AuthPayload! logout: Boolean! }",
          "type Mutation { followUser(userId: ID!): Follow! unfollowUser(userId: ID!): Boolean! }",
          "type Mutation { likePost(postId: ID!): Like! unlikePost(postId: ID!): Boolean! }",
          "type Mutation { createComment(postId: ID! text: String!): Comment! }",
          "type Mutation { addToCart(productId: ID! quantity: Int!): CartItem! }",
          "type Mutation { createOrder(input: CreateOrderInput!): Order! }",
          "type Mutation { processPayment(orderId: ID! paymentInfo: PaymentInput!): Payment! }",
          "type Mutation { enrollInCourse(courseId: ID!): Enrollment! }",
          "type Mutation { submitAssignment(assignmentId: ID! content: String!): Submission! }",
          "type Mutation { createWorkspace(input: CreateWorkspaceInput!): Workspace! }",
          "type Mutation { inviteMember(workspaceId: ID! email: String! role: String!): Invitation! }",
          "type Mutation { uploadFile(file: Upload!): File! }"
        ]
      },
      {
        "id": "subscriptions",
        "label": "Subscriptions",
        "items": [
          "type Subscription { messageAdded(conversationId: ID!): Message! }",
          "type Subscription { postCreated: Post! postUpdated(postId: ID!): Post! }",
          "type Subscription { notificationReceived: Notification! }",
          "type Subscription { orderStatusChanged(orderId: ID!): Order! }",
          "type Subscription { userOnline(userId: ID!): OnlineStatus! }",
          "type Subscription { commentAdded(postId: ID!): Comment! }",
          "type Subscription { taskUpdated(projectId: ID!): Task! }",
          "type Subscription { newFollower: User! }",
          "type Subscription { liveCount(eventId: ID!): Int! }",
          "type Subscription { typing(conversationId: ID!): TypingIndicator! }",
          "type Subscription { priceUpdated(productId: ID!): Product! }",
          "type Subscription { streamUpdate(streamId: ID!): StreamData! }",
          "type Subscription { workspaceUpdated(workspaceId: ID!): Workspace! }",
          "type Subscription { progressUpdate(courseId: ID!): Progress! }",
          "type Subscription { webhookTriggered(workspaceId: ID!): WebhookEvent! }"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "GraphQL schema design principles",
        "body": "<p>A well-designed GraphQL schema is the contract between your API and consumers. Unlike REST, where the backend controls response structure, in GraphQL the client requests exactly what it needs. This requires modeling data from frontend needs.</p><p><strong>Start with use cases:</strong> Before writing types, list the queries clients will need. 'I want to show a profile with posts and followers' → you need type User with relationships. This prevents schemas with fields nobody uses.</p><p><strong>Strong typing is key:</strong> Use <code>ID!</code> for required identifiers, <code>String!</code> for required fields, <code>[Type!]!</code> for non-null lists of non-null items. The ! indicates obligation. This catches errors in development, not production.</p><p><strong>Bidirectional relationships:</strong> If Post has <code>author: User!</code>, consider if User needs <code>posts: [Post!]!</code>. But watch out: bidirectional relationships can generate over-fetching if you don't use DataLoader to batch queries and avoid N+1.</p>"
      },
      {
        "h2": "Avoiding common modeling errors",
        "body": "<p><strong>Don't mirror your database:</strong> Your schema isn't your exposed DB. If you have a users_posts_likes table with foreign IDs, don't create a UsersPostsLikes type. Expose Like with clean relationships. The schema should model the domain, not internal implementation.</p><p><strong>Vague or technical names:</strong> <code>type Data { info: String }</code> says nothing. Be specific: <code>type UserProfile { bio: String }</code>. Avoid cryptic abbreviations. The schema is living documentation.</p><p><strong>Queries with too many parameters:</strong> <code>users(filterByName: String, filterByEmail: String, filterByAge: Int, sortBy: String, order: String, limit: Int, offset: Int)</code> is unmanageable. Use input types: <code>users(filter: UserFilter, pagination: PaginationInput)</code>.</p><p><strong>Mutations without input types:</strong> <code>createUser(name: String! email: String! age: Int bio: String avatar: String)</code> vs <code>createUser(input: CreateUserInput!)</code>. Input types scale better and allow complex validations.</p>"
      },
      {
        "h2": "Pagination, filters, and sorting",
        "body": "<p><strong>Cursor-based pagination:</strong> For infinite feeds, use connections: <code>posts(first: Int after: String): PostConnection!</code> with <code>type PostConnection { edges: [PostEdge!]! pageInfo: PageInfo! }</code>. This scales better than offset-based for large datasets.</p><p><strong>Offset-based pagination:</strong> For simple cases: <code>users(limit: Int offset: Int): [User!]!</code>. Works well up to ~10k records. After that, cursor-based is more efficient.</p><p><strong>Complex filters:</strong> Use nested input types. <code>input ProductFilter { category: String priceRange: PriceRangeInput inStock: Boolean }</code> with <code>input PriceRangeInput { min: Float max: Float }</code>. This allows filter composition without exploding the query signature.</p><p><strong>Sorting:</strong> Enum for options: <code>enum PostSort { RECENT POPULAR TRENDING }</code>. Combine with <code>order: SortOrder</code> where <code>enum SortOrder { ASC DESC }</code> if you need direction control.</p>"
      },
      {
        "h2": "Subscriptions and real-time",
        "body": "<p>Subscriptions enable server-to-client push. Use WebSockets or Server-Sent Events depending on your infrastructure. Typical structure: <code>type Subscription { messageAdded(conversationId: ID!): Message! }</code>.</p><p><strong>When to use subscriptions:</strong> Real-time chat, push notifications, status updates (order processing, stock changing), live collaboration (users editing same doc). Not for polling that can be query every X seconds.</p><p><strong>Performance:</strong> Each open subscription consumes server resources. Implement authentication in subscriptions: <code>context</code> must validate user can subscribe to resource. Limit subscriptions per connection to prevent abuse.</p><p><strong>Alternatives:</strong> If your use case tolerates 5-10 seconds latency, polling with queries is simpler. If you need live updates but not sub-second, long-polling or webhooks may suffice. Subscriptions add complexity; validate they're justified.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between Query and Mutation in GraphQL?",
        "a": "Queries read data without side effects. Mutations modify data (create, update, delete). GraphQL executes queries in parallel but mutations serially to prevent race conditions."
      },
      {
        "q": "Should I expose all my database fields in the schema?",
        "a": "No. Expose only what clients need. Internal fields like password_hash, internal_notes, or encryption keys should never be in public schema. Think about security surface area."
      },
      {
        "q": "How do I handle authentication in GraphQL?",
        "a": "In resolver context, not in schema. Validate JWT/token in middleware before reaching resolvers. Return specific errors: AuthenticationError, ForbiddenError. Don't use 'isAuthenticated' query."
      },
      {
        "q": "Can I have multiple schemas in a project?",
        "a": "Yes, with schema stitching or federation (Apollo). Useful for microservices where each service has its subgraph. The gateway composes schemas into one unified for the client."
      }
    ]
  }
};
