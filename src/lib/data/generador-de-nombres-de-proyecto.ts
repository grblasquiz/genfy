import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-proyecto",
    "en": "project-name-generator"
  },
  "category": "work",
  "emoji": "📋",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Proyecto | Genfy",
    "metaDesc": "Creá nombres de código y títulos internos para proyectos de software, iniciativas empresariales y sprints ágiles que tu equipo va a recordar.",
    "h1": "Generador de Nombres de Proyecto",
    "intro": "Encontrá un nombre interno para tu proyecto que sea memorable, único y no genere conflicto en internet. Ideas para sprints, equipos y desarrollo.",
    "tag": "Trabajo",
    "filterLabel": "Estructura",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "category",
        "label": "Categoría",
        "items": [
          "Operación",
          "Proyecto",
          "Iniciativa",
          "Misión",
          "Programa",
          "Plan",
          "Código",
          "Sprint",
          "Fase",
          "Lanzamiento",
          "Rollout",
          "Squad",
          "Stream",
          "Initiative",
          "Tribu",
          "Capítulo",
          "Cohorte",
          "Wave",
          "Pod",
          "Brigada",
          "Comando",
          "Frente",
          "Crew",
          "Pilar",
          "Bloque",
          "Track",
          "Proyecto Beta",
          "Alpha",
          "Versión",
          "Edición"
        ]
      },
      {
        "id": "name",
        "label": "Nombre clave",
        "items": [
          "Atlas",
          "Polaris",
          "Orión",
          "Hydra",
          "Pegaso",
          "Quetzal",
          "Pampa",
          "Ñandú",
          "Tigre",
          "Cóndor",
          "Albatros",
          "Cardinal",
          "Mercurio",
          "Eclipse",
          "Aurora",
          "Cosmos",
          "Vega",
          "Sirius",
          "Andrómeda",
          "Caracol",
          "Mantis",
          "Cobra",
          "Halcón",
          "Lince",
          "Onza",
          "Yaguareté",
          "Hornero",
          "Quirquincho",
          "Capibara",
          "Coatí"
        ]
      },
      {
        "id": "version",
        "label": "Modificador",
        "items": [
          "v1",
          "v2",
          "Phase 1",
          "Phase 2",
          "Q1",
          "Q2",
          "Q3",
          "Q4",
          "Beta",
          "Alpha",
          "Mark I",
          "Mark II",
          "2.0",
          "3.0",
          "Gen Z",
          "Next",
          "Forward",
          "Reborn",
          "Reloaded",
          "Origins",
          "Foundation",
          "Genesis",
          "Apex",
          "Zenith",
          "Frontier",
          "Edge",
          "Core",
          "Prime",
          "Atlas",
          "Velocity"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué los nombres internos importan",
        "body": "<p>Un proyecto sin nombre interno es proyecto que el equipo no recuerda. <em>'La iniciativa de migración del backend de pagos a microservicios'</em> es descripción técnica, no nombre. Tu equipo lo dirá tres veces y luego dirá 'el proyecto ese'. <em>Proyecto Atlas</em> se mencionará en cien reuniones sin esfuerzo.</p><p>Los nombres internos cumplen tres funciones: <strong>identidad</strong> (el equipo se reconoce trabajando en algo con nombre propio), <strong>confidencialidad</strong> (los proyectos en development pueden mencionarse sin revelar funcionalidad antes del lanzamiento) y <strong>memorabilidad</strong> (en post-mortems, retros y aprendizajes futuros, recordás nombres mejor que descripciones).</p><p>Apple usa nombres de pingüinos para sistemas operativos en desarrollo (Cheetah, Tiger, Snow Leopard, Big Sur). Google usa postres en Android (KitKat, Oreo, Pie). Microsoft usa nombres de ciudades en Windows. Estas convenciones internas crean cultura y ayudan a documentar décadas de proyectos sin colisión de nombres.</p>"
      },
      {
        "h2": "Convenciones que funcionan en empresas de software",
        "body": "<p>La <strong>convención temática</strong> es la más adoptada: tu organización elige una familia (animales, ciudades, estrellas, mitología, comida) y bautiza cada proyecto con miembro distinto. Ventajas: un nuevo proyecto siempre tiene candidatos disponibles, los nombres comparten estética, y un newcomer entiende rápido el patrón.</p><p>La <strong>convención versionada</strong> agrega prefijo o sufijo de versión: <em>Atlas v1</em>, <em>Atlas v2</em>. Funciona si tu organización tiene proyectos que evolucionan en grandes saltos. Pero confunde si <em>Atlas v1</em> y <em>Atlas v2</em> son productos completamente distintos: mejor cambiá el nombre raíz cuando cambia la naturaleza.</p><p>La <strong>convención fonética</strong> usa nombres que codifican identidad de equipo. Si el equipo se llama 'Pampa' y todos sus proyectos llevan nombres de pájaros argentinos (<em>Hornero</em>, <em>Cardinal</em>, <em>Cóndor</em>), construye identidad de squad sin ser obvia desde afuera. Esto refuerza pertenencia.</p><p>Evitá la convención que codifica info sensible: <em>Project NPS-50</em> revela que estás detrás de mejorar NPS hasta 50. <em>Project Andromeda</em> no dice nada al espía industrial casual. La opacidad del nombre interno es feature, no bug.</p>"
      },
      {
        "h2": "Errores comunes al nombrar proyectos",
        "body": "<p>Nombres que ya son productos comerciales: <em>Project Slack</em>, <em>Project Notion</em>, <em>Project Stripe</em>. Aunque sea uso interno, generás confusión en docs, JIRA y conversaciones cross-team. Búsquedas de Google también se contaminan.</p><p>Nombres con significado político o cultural problemático: revisá tu propuesta antes de adoptarla. <em>Operation Spartan</em> está bien, <em>Operation Crusade</em> tiene carga histórica problemática. <em>Project Neptune</em> está bien, <em>Project Cortez</em> evoca colonialismo en LATAM. Tu nombre interno será mencionado en presentaciones, emails y eventualmente leaks: cuidá las connotaciones.</p><p>Nombres que requieren explicación pública si filtran: si tu proyecto se llama <em>Operación Caja Negra</em> y un periodista lo descubre, el nombre solo es titular. <em>Project Atlas</em> es opaco y aburrido para narrativas externas. Cuando elijas, imaginá tu nombre filtrado en TechCrunch: ¿genera escándalo o solo curiosidad?</p><p>Sobreabundancia de proyectos llamados <em>Phoenix</em>: probablemente sea el nombre de proyecto más usado del mundo del software. Si querés diferenciación, evitá los lugares comunes (Phoenix, Apollo, Atlas, Olympus). Optá por mitologías menos saqueadas: nórdica, eslava, africana, japonesa.</p>"
      },
      {
        "h2": "De nombre interno a marca pública",
        "body": "<p>A veces el nombre interno se convierte en marca pública. Esto pasa cuando el proyecto interno funciona tan bien que se vuelve producto. <em>Apollo</em> de Spotify, <em>Manhattan</em> del Proyecto Manhattan, <em>Olympus</em> de Tesla son ejemplos. Si planteás esa posibilidad desde el inicio, evitá nombres demasiado específicos al equipo o cargados de jerga interna.</p><p>Antes de promocionar un nombre interno a público, hacé due diligence completo: trademark check, búsqueda de dominio, redes sociales, conflictos con productos similares. Lo que era opaco para uso interno puede colisionar feo en mercado abierto. <em>Project Cortana</em> internamente está bien; lanzar <em>Cortana</em> al mundo requiere que ya tengas la marca registrada.</p><p>Para proyectos que sabés desde el inicio que serán productos, usá dos nombres: uno interno (operación) y uno para producto. Esta separación permite seguir trabajando en <em>Operación Atlas</em> mientras desarrollás la marca pública en paralelo. <em>Atlas</em> puede tomarse mientras estás en development; <em>Operación Atlas</em> sigue siendo tuya internamente.</p><p>Documentá tu sistema de naming en una página de wiki interna. Después de 50 proyectos, va a haber colisiones, dudas y olvidos. Una página simple con 'Convenciones de naming · Lista de nombres usados · Familias temáticas disponibles' ahorra reuniones futuras y mantiene coherencia organizacional.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Conviene nombre código o nombre descriptivo?",
        "a": "Para proyectos confidenciales o en development, código (Atlas, Polaris). Para proyectos internos visibles a toda la empresa, descriptivo a veces es mejor (<em>Migración Backend Pagos Q3</em>). Mezclá: nombre código corto + descripción al lado en docs."
      },
      {
        "q": "¿Quién decide el nombre del proyecto?",
        "a": "Idealmente el equipo que lo ejecuta, no management. Si management impone <em>Operación Velocidad</em> y el equipo lo siente cringe, no lo usarán. Dejá 24h al equipo para proponer 5 opciones y votar. La pertenencia al nombre se construye eligiéndolo."
      },
      {
        "q": "¿Puedo reutilizar nombres de proyectos viejos?",
        "a": "Idealmente no, especialmente si son recientes (últimos 2 años). Reutilización confunde search en JIRA, Confluence y Slack. Si el proyecto viejo está totalmente cerrado y archivado, reutilización tras 5+ años es aceptable."
      },
      {
        "q": "¿Cómo evito que el nombre se vuelva nombre del producto sin querer?",
        "a": "Comunicá explícitamente que es nombre código interno. Pedile a marketing que no use el nombre en materiales públicos. Cuando se acerca el lanzamiento, definí marca oficial 6+ meses antes para tener tiempo de migrar comunicación."
      }
    ]
  },
  "en": {
    "pageTitle": "Project Name Generator | Genfy",
    "metaDesc": "Create code names and internal titles for software projects, business initiatives and agile sprints that your team will actually remember and use.",
    "h1": "Project Name Generator",
    "intro": "Find an internal name for your project that's memorable, unique and won't create conflict online. Ideas for sprints, teams and product development.",
    "tag": "Work",
    "filterLabel": "Structure",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "category",
        "label": "Category",
        "items": [
          "Operation",
          "Project",
          "Initiative",
          "Mission",
          "Program",
          "Plan",
          "Code",
          "Sprint",
          "Phase",
          "Launch",
          "Rollout",
          "Squad",
          "Stream",
          "Workstream",
          "Tribe",
          "Chapter",
          "Cohort",
          "Wave",
          "Pod",
          "Brigade",
          "Command",
          "Front",
          "Crew",
          "Pillar",
          "Block",
          "Track",
          "Beta Project",
          "Alpha",
          "Version",
          "Edition"
        ]
      },
      {
        "id": "name",
        "label": "Code name",
        "items": [
          "Atlas",
          "Polaris",
          "Orion",
          "Hydra",
          "Pegasus",
          "Quetzal",
          "Pampa",
          "Falcon",
          "Tiger",
          "Condor",
          "Albatross",
          "Cardinal",
          "Mercury",
          "Eclipse",
          "Aurora",
          "Cosmos",
          "Vega",
          "Sirius",
          "Andromeda",
          "Mantis",
          "Cobra",
          "Hawk",
          "Lynx",
          "Jaguar",
          "Wolverine",
          "Otter",
          "Magpie",
          "Armadillo",
          "Capybara",
          "Coati"
        ]
      },
      {
        "id": "version",
        "label": "Modifier",
        "items": [
          "v1",
          "v2",
          "Phase 1",
          "Phase 2",
          "Q1",
          "Q2",
          "Q3",
          "Q4",
          "Beta",
          "Alpha",
          "Mark I",
          "Mark II",
          "2.0",
          "3.0",
          "Gen Z",
          "Next",
          "Forward",
          "Reborn",
          "Reloaded",
          "Origins",
          "Foundation",
          "Genesis",
          "Apex",
          "Zenith",
          "Frontier",
          "Edge",
          "Core",
          "Prime",
          "Vanguard",
          "Velocity"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why internal names matter",
        "body": "<p>A project without an internal name is a project the team doesn't remember. <em>'The initiative to migrate the payments backend to microservices'</em> is technical description, not a name. Your team will say it three times and then say 'that project'. <em>Project Atlas</em> will be mentioned in a hundred meetings effortlessly.</p><p>Internal names serve three functions: <strong>identity</strong> (the team recognizes itself working on something with its own name), <strong>confidentiality</strong> (in-development projects can be mentioned without revealing functionality before launch) and <strong>memorability</strong> (in post-mortems, retros and future learnings, you remember names better than descriptions).</p><p>Apple uses big cat names for OS in development (Cheetah, Tiger, Snow Leopard). Google uses desserts in Android (KitKat, Oreo, Pie). Microsoft uses city names in Windows. These internal conventions create culture and help document decades of projects without name collision.</p>"
      },
      {
        "h2": "Conventions that work in software companies",
        "body": "<p>The <strong>thematic convention</strong> is the most adopted: your organization picks a family (animals, cities, stars, mythology, food) and christens each project with a different member. Advantages: a new project always has available candidates, names share aesthetic, and a newcomer quickly understands the pattern.</p><p>The <strong>versioned convention</strong> adds version prefix or suffix: <em>Atlas v1</em>, <em>Atlas v2</em>. Works if your organization has projects evolving in big jumps. But confuses if <em>Atlas v1</em> and <em>Atlas v2</em> are entirely different products: better change the root name when nature changes.</p><p>The <strong>phonetic convention</strong> uses names encoding team identity. If the team is called 'Pampa' and all their projects bear Argentine bird names (<em>Hornero</em>, <em>Cardinal</em>, <em>Condor</em>), it builds squad identity without being obvious externally. This reinforces belonging.</p><p>Avoid conventions encoding sensitive info: <em>Project NPS-50</em> reveals you're behind improving NPS to 50. <em>Project Andromeda</em> says nothing to a casual industrial spy. Internal name opacity is a feature, not a bug.</p>"
      },
      {
        "h2": "Common mistakes when naming projects",
        "body": "<p>Names that are already commercial products: <em>Project Slack</em>, <em>Project Notion</em>, <em>Project Stripe</em>. Even for internal use, you generate confusion in docs, JIRA and cross-team conversations. Google searches also contaminate.</p><p>Names with politically or culturally problematic meaning: review your proposal before adopting. <em>Operation Spartan</em> is fine, <em>Operation Crusade</em> has problematic historical baggage. <em>Project Neptune</em> is fine, <em>Project Cortez</em> evokes colonialism in LATAM. Your internal name will be mentioned in presentations, emails and eventually leaks: care about connotations.</p><p>Names requiring public explanation if leaked: if your project is called <em>Operation Black Box</em> and a journalist discovers it, the name alone is headline. <em>Project Atlas</em> is opaque and boring for external narratives. When choosing, imagine your name leaked in TechCrunch: does it generate scandal or just curiosity?</p><p>Overabundance of <em>Phoenix</em>-named projects: probably the most used project name in software. If you want differentiation, avoid common ones (Phoenix, Apollo, Atlas, Olympus). Opt for less plundered mythologies: Norse, Slavic, African, Japanese.</p>"
      },
      {
        "h2": "From internal name to public brand",
        "body": "<p>Sometimes the internal name becomes public brand. This happens when the internal project works so well it becomes a product. Spotify's <em>Apollo</em>, the Manhattan Project's <em>Manhattan</em>, Tesla's <em>Olympus</em> are examples. If you raise that possibility from the start, avoid names too team-specific or loaded with internal jargon.</p><p>Before promoting an internal name to public, do complete due diligence: trademark check, domain search, social media, conflicts with similar products. What was opaque for internal use can collide ugly in open market. <em>Project Cortana</em> internally is fine; launching <em>Cortana</em> to the world requires you to have the trademark registered.</p><p>For projects you know from the start will be products, use two names: one internal (operation) and one for product. This separation lets you keep working on <em>Operation Atlas</em> while developing the public brand in parallel. <em>Atlas</em> can be taken while you're in development; <em>Operation Atlas</em> remains yours internally.</p><p>Document your naming system in an internal wiki page. After 50 projects, there will be collisions, doubts and forgetfulness. A simple page with 'Naming conventions · Used names list · Available thematic families' saves future meetings and maintains organizational coherence.</p>"
      }
    ],
    "faq": [
      {
        "q": "Code name or descriptive name?",
        "a": "For confidential or in-development projects, code (Atlas, Polaris). For internal projects visible to the whole company, descriptive sometimes works better (<em>Payments Backend Migration Q3</em>). Mix: short code name + description alongside in docs."
      },
      {
        "q": "Who decides the project name?",
        "a": "Ideally the team executing it, not management. If management imposes <em>Operation Velocity</em> and the team feels it's cringe, they won't use it. Give the team 24h to propose 5 options and vote. Ownership of the name is built by choosing it."
      },
      {
        "q": "Can I reuse old project names?",
        "a": "Ideally not, especially if recent (last 2 years). Reuse confuses search in JIRA, Confluence and Slack. If the old project is fully closed and archived, reuse after 5+ years is acceptable."
      },
      {
        "q": "How do I avoid the name accidentally becoming the product name?",
        "a": "Communicate explicitly it's internal code name. Ask marketing not to use the name in public materials. As launch approaches, define official brand 6+ months ahead to have time to migrate communication."
      }
    ]
  }
};
