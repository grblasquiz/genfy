import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-user-stories",
    "en": "user-story-generator"
  },
  "category": "work",
  "emoji": "📝",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de User Stories | Genfy",
    "metaDesc": "Crea user stories ágiles con formato profesional: Como [rol] quiero [acción] para [beneficio]. Ideal para backlog grooming y planificación de sprints.",
    "h1": "Generador de User Stories",
    "intro": "Generá historias de usuario en formato ágil estándar para tu backlog. Incluye roles, acciones y beneficios claros siguiendo las mejores prácticas de Scrum y metodologías ágiles.",
    "tag": "Trabajo",
    "filterLabel": "Categoría",
    "countLabel": "Cantidad",
    "generateLabel": "Generar stories",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "items": [
          "Como comprador quiero filtrar productos por rango de precio para encontrar opciones dentro de mi presupuesto",
          "Como usuario registrado quiero guardar productos en mi lista de deseos para comprarlos más adelante",
          "Como cliente quiero recibir notificaciones de descuentos en productos que me interesan para aprovechar ofertas",
          "Como comprador quiero ver reseñas verificadas de otros usuarios para tomar decisiones informadas",
          "Como usuario quiero comparar hasta 4 productos lado a lado para evaluar especificaciones y precios",
          "Como cliente quiero recuperar mi carrito abandonado en cualquier dispositivo para continuar mi compra",
          "Como comprador quiero aplicar múltiples cupones de descuento para maximizar mi ahorro",
          "Como usuario quiero rastrear mi pedido en tiempo real para saber cuándo llegará",
          "Como cliente quiero guardar múltiples direcciones de envío para facilitar compras recurrentes",
          "Como comprador quiero pagar con billetera digital para agilizar el checkout",
          "Como usuario quiero recibir recomendaciones personalizadas basadas en mi historial para descubrir productos relevantes",
          "Como cliente quiero iniciar devoluciones desde mi cuenta para gestionar cambios fácilmente",
          "Como comprador quiero programar entregas para fechas específicas para recibir regalos a tiempo",
          "Como usuario quiero activar alertas de stock para productos agotados para comprar cuando estén disponibles",
          "Como cliente quiero acceder a mis facturas digitales para llevar registro de gastos"
        ]
      },
      {
        "id": "saas",
        "label": "SaaS / B2B",
        "items": [
          "Como administrador quiero gestionar permisos por rol para controlar el acceso a funcionalidades",
          "Como usuario quiero exportar reportes en múltiples formatos para integrar con otras herramientas",
          "Como gerente quiero ver dashboards en tiempo real para tomar decisiones basadas en datos actuales",
          "Como usuario quiero configurar integraciones vía API para automatizar flujos de trabajo",
          "Como administrador quiero auditar logs de actividad para garantizar compliance y seguridad",
          "Como usuario quiero colaborar en documentos en tiempo real para trabajar en equipo eficientemente",
          "Como gerente quiero establecer límites de uso por equipo para controlar costos de licencias",
          "Como usuario quiero personalizar notificaciones para recibir solo alertas relevantes",
          "Como administrador quiero provisionar usuarios masivamente vía CSV para onboarding ágil",
          "Como usuario quiero acceder a la plataforma vía SSO para simplificar autenticación",
          "Como gerente quiero programar reportes automáticos para recibir actualizaciones sin intervención manual",
          "Como usuario quiero crear templates reutilizables para estandarizar procesos",
          "Como administrador quiero configurar políticas de retención de datos para cumplir con GDPR",
          "Como usuario quiero recibir alertas cuando métricas superen umbrales para actuar proactivamente",
          "Como gerente quiero asignar tareas con dependencias para gestionar proyectos complejos",
          "Como usuario quiero comentar en contexto para mantener comunicación centralizada",
          "Como administrador quiero migrar datos desde plataformas legacy para consolidar sistemas",
          "Como usuario quiero guardar vistas personalizadas para acceder rápido a información frecuente",
          "Como gerente quiero establecer SLAs por cliente para garantizar niveles de servicio",
          "Como usuario quiero trabajar offline con sincronización automática para mantener productividad móvil"
        ]
      },
      {
        "id": "mobile",
        "label": "Apps móviles",
        "items": [
          "Como usuario quiero iniciar sesión con biometría para acceder rápido y seguro",
          "Como usuario quiero usar la app sin conexión para acceder a contenido descargado",
          "Como usuario quiero sincronizar datos entre dispositivos para continuar desde donde dejé",
          "Como usuario quiero recibir notificaciones push personalizadas para estar informado de eventos importantes",
          "Como usuario quiero ajustar configuraciones de privacidad para controlar qué datos comparto",
          "Como usuario quiero acceder a un modo oscuro para reducir fatiga visual nocturna",
          "Como usuario quiero compartir contenido directamente a redes sociales para difundir descubrimientos",
          "Como usuario quiero usar gestos táctiles intuitivos para navegar más rápido",
          "Como usuario quiero buscar por voz para evitar escribir en móvil",
          "Como usuario quiero acceder a mi ubicación solo cuando uso la app para proteger mi privacidad",
          "Como usuario quiero personalizar widgets de pantalla principal para acceso rápido a funciones clave",
          "Como usuario quiero reducir consumo de datos activando modo liviano para ahorrar en planes limitados",
          "Como usuario quiero reportar bugs con capturas automáticas para facilitar soporte",
          "Como usuario quiero configurar atajos Siri/Google Assistant para comandos de voz",
          "Como usuario quiero pausar descargas automáticas para administrar almacenamiento",
          "Como usuario quiero bloquear orientación de pantalla para usar cómodamente en cualquier posición",
          "Como usuario quiero escanear códigos QR desde la app para pagos y acceso rápido",
          "Como usuario quiero compartir mi progreso en redes para motivar a otros",
          "Como usuario quiero ocultar notificaciones sensibles en pantalla bloqueada para proteger privacidad",
          "Como usuario quiero usar la cámara para búsqueda visual de productos"
        ]
      },
      {
        "id": "fintech",
        "label": "Fintech / Banca",
        "items": [
          "Como cliente quiero ver mi score crediticio actualizado para evaluar mi salud financiera",
          "Como usuario quiero establecer límites de gasto por categoría para controlar mi presupuesto",
          "Como cliente quiero recibir alertas de transacciones sospechosas para prevenir fraude",
          "Como usuario quiero pagar facturas programadas automáticamente para evitar cargos por mora",
          "Como cliente quiero invertir en fondos indexados desde la app para diversificar mi portafolio",
          "Como usuario quiero transferir dinero instantáneamente vía alias para simplificar pagos P2P",
          "Como cliente quiero bloquear mi tarjeta temporalmente para protegerla si la pierdo",
          "Como usuario quiero categorizar gastos automáticamente para entender patrones de consumo",
          "Como cliente quiero acceder a préstamos pre-aprobados para obtener liquidez rápida",
          "Como usuario quiero exportar movimientos a software de contabilidad para gestión fiscal",
          "Como cliente quiero configurar ahorro automático por redondeo para acumular capital sin esfuerzo",
          "Como usuario quiero recibir consejos personalizados de ahorro para mejorar mis finanzas",
          "Como cliente quiero disputar cargos directamente desde la app para resolver problemas ágilmente",
          "Como usuario quiero consolidar cuentas de múltiples bancos para visión financiera unificada",
          "Como cliente quiero simular escenarios de inversión para planificar objetivos a largo plazo",
          "Como usuario quiero pagar con criptomonedas en comercios afiliados para usar activos digitales",
          "Como cliente quiero recibir estados de cuenta interactivos para análisis visual de finanzas",
          "Como usuario quiero congelar intereses en periodos específicos para reducir deuda estratégicamente",
          "Como cliente quiero validar identidad con verificación facial para onboarding sin sucursal",
          "Como usuario quiero recibir préstamos estudiantiles con tasas preferenciales para financiar educación"
        ]
      },
      {
        "id": "educacion",
        "label": "Educación / E-learning",
        "items": [
          "Como estudiante quiero marcar lecciones como completadas para seguir mi progreso",
          "Como instructor quiero crear evaluaciones con límite de tiempo para medir conocimiento bajo presión",
          "Como estudiante quiero acceder a transcripciones de videos para estudiar a mi ritmo",
          "Como instructor quiero asignar tareas diferenciadas por nivel para adaptar el aprendizaje",
          "Como estudiante quiero recibir recordatorios de deadlines para organizar mi tiempo",
          "Como instructor quiero ver analytics de engagement para identificar contenido que requiere mejora",
          "Como estudiante quiero participar en foros de discusión para aprender de mis pares",
          "Como instructor quiero calificar trabajos con rúbricas personalizadas para evaluación objetiva",
          "Como estudiante quiero descargar materiales para estudio offline para acceder sin internet",
          "Como instructor quiero detectar plagio automáticamente para mantener integridad académica",
          "Como estudiante quiero acceder a sesiones de tutoría virtual para resolver dudas específicas",
          "Como instructor quiero crear paths de aprendizaje adaptativos para personalizar la experiencia",
          "Como estudiante quiero obtener certificados verificables en blockchain para credenciales confiables",
          "Como instructor quiero integrar herramientas externas vía LTI para enriquecer contenido",
          "Como estudiante quiero practicar con ejercicios interactivos para reforzar conceptos",
          "Como instructor quiero programar anuncios para fechas específicas para comunicación oportuna",
          "Como estudiante quiero colaborar en proyectos grupales con herramientas integradas para trabajo en equipo",
          "Como instructor quiero analizar tasas de abandono por módulo para optimizar cursos",
          "Como estudiante quiero establecer metas de estudio semanales para mantener disciplina",
          "Como instructor quiero grabar clases en vivo automáticamente para que estudiantes ausentes las vean después"
        ]
      },
      {
        "id": "healthcare",
        "label": "Salud / Healthcare",
        "items": [
          "Como paciente quiero agendar citas online para evitar llamadas telefónicas",
          "Como médico quiero acceder al historial clínico completo para diagnósticos informados",
          "Como paciente quiero recibir recordatorios de medicación para adherir al tratamiento",
          "Como médico quiero prescribir recetas electrónicas para facilitar acceso a farmacias",
          "Como paciente quiero consultar con telemedicina para evitar traslados innecesarios",
          "Como médico quiero recibir alertas de interacciones medicamentosas para prescribir seguro",
          "Como paciente quiero compartir datos de wearables para monitoreo remoto de salud",
          "Como médico quiero acceder a guías clínicas actualizadas para seguir mejores prácticas",
          "Como paciente quiero solicitar análisis de laboratorio online para agilizar procesos",
          "Como médico quiero colaborar con especialistas vía interconsultas digitales para casos complejos",
          "Como paciente quiero acceder a mi información médica cifrada para proteger mi privacidad",
          "Como médico quiero usar plantillas de notas clínicas para documentar consultas eficientemente",
          "Como paciente quiero recibir planes de cuidado personalizados para seguir tratamientos correctamente",
          "Como médico quiero analizar tendencias poblacionales para identificar brotes epidemiológicos",
          "Como paciente quiero cancelar citas con 24hs de anticipación para liberar agenda",
          "Como médico quiero facturar automáticamente a obras sociales para optimizar cobranza",
          "Como paciente quiero chatear con enfermería para consultas menores sin agendar cita",
          "Como médico quiero verificar cobertura de seguros antes de procedimientos para evitar rechazos",
          "Como paciente quiero recibir resultados de estudios con explicaciones simplificadas para entender diagnósticos",
          "Como médico quiero usar reconocimiento de voz para dictar notas clínicas sin escribir"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de una user story efectiva",
        "body": "<p>El formato estándar 'Como [rol] quiero [acción] para [beneficio]' existe por razones específicas de comunicación y priorización. <strong>El rol</strong> identifica quién necesita la funcionalidad (usuario final, admin, cliente empresarial). Esto ayuda al equipo a ponerse en la perspectiva correcta y al PO a priorizar por segmento de usuarios.</p><p><strong>La acción</strong> describe QUÉ quiere hacer el usuario, no CÓMO se implementa técnicamente. 'Quiero filtrar productos por precio' es correcto; 'quiero un componente React con slider de rango' es implementación, no story. Mantener este nivel de abstracción permite al equipo técnico proponer la mejor solución.</p><p><strong>El beneficio</strong> es el componente más crítico y el más ignorado. 'Para encontrar opciones dentro de mi presupuesto' explica POR QUÉ importa. Sin beneficio claro, el equipo no puede priorizar, negociar alcance, ni validar si la solución cumple el objetivo. Un error común: beneficios vagos como 'para mejorar la experiencia'. Específico > genérico siempre.</p>"
      },
      {
        "h2": "Criterios de aceptación: el contrato implícito",
        "body": "<p>Una user story sin criterios de aceptación (AC) es una bomba de tiempo. Los ACs definen cuándo una story está 'done' y previenen malentendidos entre PO y devs. <strong>Formato Given-When-Then:</strong> 'Dado que soy un usuario logueado, cuando hago clic en agregar a wishlist, entonces el producto aparece en mi lista y recibo confirmación visual'.</p><p><strong>Características de buenos ACs:</strong> testeables (puedes verificar si pasan o no), específicos (sin ambigüedades), completos (cubren happy path y edge cases importantes). Ejemplo práctico:</p><ul><li>✅ 'El filtro de precio debe aceptar rangos entre $0 y $10,000'</li><li>✅ 'Si no hay productos en el rango, mostrar mensaje: No hay resultados'</li><li>❌ 'El filtro debe funcionar bien' (¿qué significa 'bien'?)</li></ul><p>Los ACs también son la base para QA automation. Si tu AC no es automatable, probablemente es demasiado vago. Cantidad ideal: 3-7 ACs por story. Menos puede ser incompleto; más indica que la story es demasiado grande y debe dividirse.</p>"
      },
      {
        "h2": "Story splitting: cómo partir historias grandes",
        "body": "<p>Las épicas (stories masivas) bloquean sprints y retrasan feedback. Regla práctica: si una story no cabe en un sprint, partila. <strong>Técnicas efectivas de splitting:</strong></p><p><strong>Por flujo de trabajo:</strong> 'Como comprador quiero checkout completo' se divide en: (1) completar datos de envío, (2) seleccionar método de pago, (3) revisar y confirmar orden. Cada una entrega valor incremental.</p><p><strong>Por reglas de negocio:</strong> 'Como usuario quiero aplicar descuentos' se parte en: (1) cupones de porcentaje, (2) cupones de monto fijo, (3) descuentos por volumen, (4) cupones acumulables. Priorizás por impacto de negocio.</p><p><strong>Por roles:</strong> en vez de 'Como usuario quiero gestionar permisos', creás stories separadas para admin vs usuario regular, ya que tienen necesidades distintas.</p><p><strong>Por tipos de datos:</strong> 'Exportar reportes' se divide en: CSV primero (más rápido de implementar), luego Excel, luego PDF. Cada formato es una story deployable.</p><p>El anti-pattern más común: dividir por capas técnicas (frontend, backend, DB). Esto no entrega valor hasta que todas las partes están completas. Siempre cortá vertical (feature completa end-to-end), no horizontal (capa por capa).</p>"
      },
      {
        "h2": "Priorización y estimation: el arte de lo posible",
        "body": "<p>No todas las user stories son iguales. <strong>Framework RICE para priorizar:</strong> Reach (cuántos usuarios impacta), Impact (cuánto mejora su experiencia, escala 0.25-3), Confidence (qué tan seguro estás de las estimaciones, 0-100%), Effort (tiempo de desarrollo en persona-semanas). Score = (R × I × C) / E. Una story que impacta 10,000 usuarios, con impacto alto (3), 80% confidence, y 2 semanas de esfuerzo: (10000 × 3 × 0.8) / 2 = 12,000 puntos.</p><p><strong>Story points vs horas:</strong> puntos capturan complejidad, incertidumbre y esfuerzo combinados. La secuencia Fibonacci (1, 2, 3, 5, 8, 13) es popular porque fuerza a reconocer que a mayor tamaño, menor precisión. Una story de 1 punto es trivial (cambiar un label); 13 puntos es épica que debe partirse.</p><p><strong>Planning poker:</strong> cada dev estima independiente, luego discuten discrepancias. Si alguien dice 3 y otro 13, hay entendimiento asimétrico que debe resolverse antes de empezar. No promedies estimates; discutí hasta consenso.</p><p>Velocity (puntos completados por sprint) es para planificación del equipo, NO para comparar equipos ni evaluar performance individual. Un equipo que hace 30 puntos/sprint no es 'mejor' que uno de 20; sus escalas son distintas.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos story points debería tener una buena user story?",
        "a": "Entre 1-8 puntos idealmente. Si supera 8, probablemente sea una épica que debe dividirse en stories más pequeñas que entreguen valor incremental en un solo sprint."
      },
      {
        "q": "¿Quién escribe las user stories: el PO o el equipo?",
        "a": "El Product Owner es responsable del contenido y priorización, pero el equipo colabora en refinamiento, splitting y criterios de aceptación. Es un esfuerzo conjunto, no individual."
      },
      {
        "q": "¿Todas las tareas deben ser user stories?",
        "a": "No. Tareas técnicas (refactoring, actualizar dependencias, configurar CI/CD) son válidas pero no son user stories porque no entregan valor directo al usuario. Van al backlog igual pero con otra nomenclatura."
      },
      {
        "q": "¿Cómo manejo dependencias entre user stories?",
        "a": "Idealmente, minimizá dependencias partiendo stories verticalmente. Si son inevitables, documentalas en el backlog, priorizá en orden correcto, y considerá merge de stories dependientes si tienen sentido como unidad funcional."
      }
    ]
  },
  "en": {
    "pageTitle": "User Story Generator | Genfy",
    "metaDesc": "Create agile user stories with professional format: As a [role] I want [action] so that [benefit]. Ideal for backlog grooming and sprint planning.",
    "h1": "User Story Generator",
    "intro": "Generate user stories in standard agile format for your backlog. Includes clear roles, actions, and benefits following Scrum and agile methodology best practices.",
    "tag": "Work",
    "filterLabel": "Category",
    "countLabel": "Amount",
    "generateLabel": "Generate stories",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "ecommerce",
        "label": "E-commerce",
        "items": [
          "As a shopper I want to filter products by price range so that I can find options within my budget",
          "As a registered user I want to save products to my wishlist so that I can purchase them later",
          "As a customer I want to receive notifications about discounts on products I'm interested in so that I can take advantage of deals",
          "As a shopper I want to see verified reviews from other users so that I can make informed decisions",
          "As a user I want to compare up to 4 products side by side so that I can evaluate specifications and prices",
          "As a customer I want to recover my abandoned cart on any device so that I can continue my purchase",
          "As a shopper I want to apply multiple discount coupons so that I can maximize my savings",
          "As a user I want to track my order in real-time so that I know when it will arrive",
          "As a customer I want to save multiple shipping addresses so that I can facilitate recurring purchases",
          "As a shopper I want to pay with digital wallet so that I can speed up checkout",
          "As a user I want to receive personalized recommendations based on my history so that I can discover relevant products",
          "As a customer I want to initiate returns from my account so that I can manage exchanges easily",
          "As a shopper I want to schedule deliveries for specific dates so that I can receive gifts on time",
          "As a user I want to activate stock alerts for sold-out products so that I can buy when available",
          "As a customer I want to access my digital invoices so that I can keep expense records"
        ]
      },
      {
        "id": "saas",
        "label": "SaaS / B2B",
        "items": [
          "As an admin I want to manage permissions by role so that I can control access to functionalities",
          "As a user I want to export reports in multiple formats so that I can integrate with other tools",
          "As a manager I want to see real-time dashboards so that I can make decisions based on current data",
          "As a user I want to configure API integrations so that I can automate workflows",
          "As an admin I want to audit activity logs so that I can ensure compliance and security",
          "As a user I want to collaborate on documents in real-time so that I can work efficiently as a team",
          "As a manager I want to set usage limits per team so that I can control license costs",
          "As a user I want to customize notifications so that I receive only relevant alerts",
          "As an admin I want to provision users in bulk via CSV so that I can onboard quickly",
          "As a user I want to access the platform via SSO so that I can simplify authentication",
          "As a manager I want to schedule automatic reports so that I receive updates without manual intervention",
          "As a user I want to create reusable templates so that I can standardize processes",
          "As an admin I want to configure data retention policies so that I can comply with GDPR",
          "As a user I want to receive alerts when metrics exceed thresholds so that I can act proactively",
          "As a manager I want to assign tasks with dependencies so that I can manage complex projects",
          "As a user I want to comment in context so that I can keep communication centralized",
          "As an admin I want to migrate data from legacy platforms so that I can consolidate systems",
          "As a user I want to save custom views so that I can quickly access frequent information",
          "As a manager I want to establish SLAs per client so that I can guarantee service levels",
          "As a user I want to work offline with automatic sync so that I can maintain mobile productivity"
        ]
      },
      {
        "id": "mobile",
        "label": "Mobile apps",
        "items": [
          "As a user I want to log in with biometrics so that I can access quickly and securely",
          "As a user I want to use the app without connection so that I can access downloaded content",
          "As a user I want to sync data between devices so that I can continue where I left off",
          "As a user I want to receive personalized push notifications so that I stay informed of important events",
          "As a user I want to adjust privacy settings so that I control what data I share",
          "As a user I want to access dark mode so that I can reduce visual fatigue at night",
          "As a user I want to share content directly to social media so that I can spread discoveries",
          "As a user I want to use intuitive touch gestures so that I can navigate faster",
          "As a user I want to search by voice so that I avoid typing on mobile",
          "As a user I want to access my location only when using the app so that I protect my privacy",
          "As a user I want to customize home screen widgets so that I get quick access to key functions",
          "As a user I want to reduce data consumption by activating lite mode so that I save on limited plans",
          "As a user I want to report bugs with automatic screenshots so that I facilitate support",
          "As a user I want to configure Siri/Google Assistant shortcuts so that I use voice commands",
          "As a user I want to pause automatic downloads so that I manage storage",
          "As a user I want to lock screen orientation so that I use comfortably in any position",
          "As a user I want to scan QR codes from the app so that I make payments and quick access",
          "As a user I want to share my progress on social media so that I motivate others",
          "As a user I want to hide sensitive notifications on lock screen so that I protect privacy",
          "As a user I want to use the camera for visual product search"
        ]
      },
      {
        "id": "fintech",
        "label": "Fintech / Banking",
        "items": [
          "As a customer I want to see my updated credit score so that I can evaluate my financial health",
          "As a user I want to set spending limits by category so that I control my budget",
          "As a customer I want to receive alerts for suspicious transactions so that I prevent fraud",
          "As a user I want to pay scheduled bills automatically so that I avoid late fees",
          "As a customer I want to invest in index funds from the app so that I diversify my portfolio",
          "As a user I want to transfer money instantly via alias so that I simplify P2P payments",
          "As a customer I want to temporarily block my card so that I protect it if I lose it",
          "As a user I want to categorize expenses automatically so that I understand consumption patterns",
          "As a customer I want to access pre-approved loans so that I obtain quick liquidity",
          "As a user I want to export transactions to accounting software so that I manage taxes",
          "As a customer I want to configure automatic savings by rounding so that I accumulate capital effortlessly",
          "As a user I want to receive personalized savings tips so that I improve my finances",
          "As a customer I want to dispute charges directly from the app so that I resolve issues quickly",
          "As a user I want to consolidate accounts from multiple banks so that I get unified financial view",
          "As a customer I want to simulate investment scenarios so that I plan long-term goals",
          "As a user I want to pay with cryptocurrencies at affiliated merchants so that I use digital assets",
          "As a customer I want to receive interactive statements so that I get visual finance analysis",
          "As a user I want to freeze interest during specific periods so that I reduce debt strategically",
          "As a customer I want to validate identity with facial verification so that I onboard without branch visit",
          "As a user I want to receive student loans with preferential rates so that I finance education"
        ]
      },
      {
        "id": "education",
        "label": "Education / E-learning",
        "items": [
          "As a student I want to mark lessons as completed so that I track my progress",
          "As an instructor I want to create timed assessments so that I measure knowledge under pressure",
          "As a student I want to access video transcripts so that I study at my own pace",
          "As an instructor I want to assign differentiated tasks by level so that I adapt learning",
          "As a student I want to receive deadline reminders so that I organize my time",
          "As an instructor I want to see engagement analytics so that I identify content requiring improvement",
          "As a student I want to participate in discussion forums so that I learn from my peers",
          "As an instructor I want to grade assignments with custom rubrics so that I ensure objective evaluation",
          "As a student I want to download materials for offline study so that I access without internet",
          "As an instructor I want to detect plagiarism automatically so that I maintain academic integrity",
          "As a student I want to access virtual tutoring sessions so that I resolve specific doubts",
          "As an instructor I want to create adaptive learning paths so that I personalize experience",
          "As a student I want to obtain blockchain-verifiable certificates so that I get trustworthy credentials",
          "As an instructor I want to integrate external tools via LTI so that I enrich content",
          "As a student I want to practice with interactive exercises so that I reinforce concepts",
          "As an instructor I want to schedule announcements for specific dates so that I communicate timely",
          "As a student I want to collaborate on group projects with integrated tools so that I work as a team",
          "As an instructor I want to analyze dropout rates by module so that I optimize courses",
          "As a student I want to set weekly study goals so that I maintain discipline",
          "As an instructor I want to record live classes automatically so that absent students watch later"
        ]
      },
      {
        "id": "healthcare",
        "label": "Health / Healthcare",
        "items": [
          "As a patient I want to schedule appointments online so that I avoid phone calls",
          "As a doctor I want to access complete medical history so that I make informed diagnoses",
          "As a patient I want to receive medication reminders so that I adhere to treatment",
          "As a doctor I want to prescribe electronic prescriptions so that I facilitate pharmacy access",
          "As a patient I want to consult via telemedicine so that I avoid unnecessary travel",
          "As a doctor I want to receive drug interaction alerts so that I prescribe safely",
          "As a patient I want to share wearable data so that I enable remote health monitoring",
          "As a doctor I want to access updated clinical guidelines so that I follow best practices",
          "As a patient I want to request lab tests online so that I speed up processes",
          "As a doctor I want to collaborate with specialists via digital consultations so that I handle complex cases",
          "As a patient I want to access my encrypted medical information so that I protect my privacy",
          "As a doctor I want to use clinical note templates so that I document consultations efficiently",
          "As a patient I want to receive personalized care plans so that I follow treatments correctly",
          "As a doctor I want to analyze population trends so that I identify epidemiological outbreaks",
          "As a patient I want to cancel appointments with 24-hour notice so that I free up schedule",
          "As a doctor I want to bill insurance companies automatically so that I optimize collection",
          "As a patient I want to chat with nursing for minor queries so that I avoid scheduling appointments",
          "As a doctor I want to verify insurance coverage before procedures so that I avoid rejections",
          "As a patient I want to receive study results with simplified explanations so that I understand diagnoses",
          "As a doctor I want to use voice recognition to dictate clinical notes so that I avoid typing"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of an effective user story",
        "body": "<p>The standard format 'As a [role] I want [action] so that [benefit]' exists for specific communication and prioritization reasons. <strong>The role</strong> identifies who needs the functionality (end user, admin, enterprise client). This helps the team get into the right perspective and the PO to prioritize by user segment.</p><p><strong>The action</strong> describes WHAT the user wants to do, not HOW it's implemented technically. 'I want to filter products by price' is correct; 'I want a React component with range slider' is implementation, not story. Maintaining this abstraction level allows the technical team to propose the best solution.</p><p><strong>The benefit</strong> is the most critical and most ignored component. 'So that I find options within my budget' explains WHY it matters. Without clear benefit, the team can't prioritize, negotiate scope, or validate if the solution meets the goal. A common mistake: vague benefits like 'to improve experience'. Specific > generic always.</p>"
      },
      {
        "h2": "Acceptance criteria: the implicit contract",
        "body": "<p>A user story without acceptance criteria (AC) is a time bomb. ACs define when a story is 'done' and prevent misunderstandings between PO and devs. <strong>Given-When-Then format:</strong> 'Given that I am a logged-in user, when I click add to wishlist, then the product appears on my list and I receive visual confirmation'.</p><p><strong>Characteristics of good ACs:</strong> testable (you can verify if they pass or not), specific (no ambiguities), complete (cover happy path and important edge cases). Practical example:</p><ul><li>✅ 'Price filter must accept ranges between $0 and $10,000'</li><li>✅ 'If no products in range, show message: No results found'</li><li>❌ 'Filter should work well' (what does 'well' mean?)</li></ul><p>ACs are also the basis for QA automation. If your AC isn't automatable, it's probably too vague. Ideal quantity: 3-7 ACs per story. Less may be incomplete; more indicates the story is too large and should be split.</p>"
      },
      {
        "h2": "Story splitting: how to break down large stories",
        "body": "<p>Epics (massive stories) block sprints and delay feedback. Rule of thumb: if a story doesn't fit in a sprint, split it. <strong>Effective splitting techniques:</strong></p><p><strong>By workflow:</strong> 'As a shopper I want complete checkout' splits into: (1) complete shipping details, (2) select payment method, (3) review and confirm order. Each delivers incremental value.</p><p><strong>By business rules:</strong> 'As a user I want to apply discounts' splits into: (1) percentage coupons, (2) fixed amount coupons, (3) volume discounts, (4) stackable coupons. You prioritize by business impact.</p><p><strong>By roles:</strong> instead of 'As a user I want to manage permissions', create separate stories for admin vs regular user, since they have different needs.</p><p><strong>By data types:</strong> 'Export reports' splits into: CSV first (faster to implement), then Excel, then PDF. Each format is a deployable story.</p><p>The most common anti-pattern: splitting by technical layers (frontend, backend, DB). This doesn't deliver value until all parts are complete. Always cut vertical (complete end-to-end feature), not horizontal (layer by layer).</p>"
      },
      {
        "h2": "Prioritization and estimation: the art of the possible",
        "body": "<p>Not all user stories are equal. <strong>RICE framework for prioritization:</strong> Reach (how many users it impacts), Impact (how much it improves their experience, scale 0.25-3), Confidence (how sure you are of estimates, 0-100%), Effort (development time in person-weeks). Score = (R × I × C) / E. A story impacting 10,000 users, with high impact (3), 80% confidence, and 2 weeks effort: (10000 × 3 × 0.8) / 2 = 12,000 points.</p><p><strong>Story points vs hours:</strong> points capture complexity, uncertainty and effort combined. Fibonacci sequence (1, 2, 3, 5, 8, 13) is popular because it forces recognition that with larger size comes less precision. A 1-point story is trivial (change a label); 13 points is epic that must be split.</p><p><strong>Planning poker:</strong> each dev estimates independently, then discusses discrepancies. If someone says 3 and another 13, there's asymmetric understanding that must be resolved before starting. Don't average estimates; discuss until consensus.</p><p>Velocity (points completed per sprint) is for team planning, NOT for comparing teams or evaluating individual performance. A team doing 30 points/sprint isn't 'better' than one doing 20; their scales are different.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many story points should a good user story have?",
        "a": "Between 1-8 points ideally. If it exceeds 8, it's probably an epic that should be split into smaller stories that deliver incremental value in a single sprint."
      },
      {
        "q": "Who writes user stories: the PO or the team?",
        "a": "The Product Owner is responsible for content and prioritization, but the team collaborates on refinement, splitting, and acceptance criteria. It's a joint effort, not individual."
      },
      {
        "q": "Should all tasks be user stories?",
        "a": "No. Technical tasks (refactoring, updating dependencies, configuring CI/CD) are valid but aren't user stories because they don't deliver direct user value. They go in the backlog anyway but with different nomenclature."
      },
      {
        "q": "How do I handle dependencies between user stories?",
        "a": "Ideally, minimize dependencies by splitting stories vertically. If unavoidable, document them in the backlog, prioritize in correct order, and consider merging dependent stories if they make sense as a functional unit."
      }
    ]
  }
};
