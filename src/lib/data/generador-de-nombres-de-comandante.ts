import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-comandante", en: "commander-name-generator" },
  category: "fun",
  emoji: "⭐",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Comandante | Genfy",
    metaDesc: "Creá nombres de comandantes militares, generales y líderes tácticos con autoridad estratégica para tus campañas, novelas y wargames de mesa.",
    h1: "Generador de Nombres de Comandante",
    intro: "Inventá generales y líderes tácticos con peso institucional para tus narrativas militares, fantasía épica o space opera. Autoridad y estrategia.",
    tag: "Estrategia militar",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "rank",
        label: "Rango",
        items: [
          "General", "Generala", "Brigadier", "Mariscal", "Almirante",
          "Almiranta", "Comandante", "Comandanta", "Estratega", "Estratega Mayor",
          "Coronel", "Coronela", "Vicealmirante", "Vicealmiranta", "Gran Mariscal",
          "Maestre de Campo", "Maestra de Campo", "Capitana General", "Capitán General", "Praetor",
          "Tribuno", "Tribuna", "Lord Comandante", "Lady Comandante", "Hetman",
          "Voivoda", "Khagan", "Strategos", "Domestic", "Polemarch"
        ]
      },
      {
        id: "first",
        label: "Nombre",
        items: [
          "Cassius", "Aurelia", "Voren", "Mira", "Tiberius",
          "Octavia", "Decimus", "Lyra", "Marcus", "Selene",
          "Khalid", "Yara", "Soren", "Ana", "Brennan",
          "Aspasia", "Hadrian", "Ingrid", "Talin", "Reza",
          "Anara", "Volkov", "Nero", "Kira", "Amalia",
          "Targus", "Idris", "Vasilis", "Ezra", "Magda"
        ]
      },
      {
        id: "epithet",
        label: "Epíteto",
        items: [
          "el Rompescudos", "la Rompescudos", "el Inflexible", "la Inflexible", "Mano de Hierro",
          "Voz de Trueno", "el Estratega", "la Estratega", "el Sin Derrotas", "la Sin Derrotas",
          "Cabeza Fría", "Sangre Lenta", "el Frío", "la Fría", "el Astuto",
          "la Astuta", "Doblepulso", "el Estoico", "la Estoica", "Ojo de Halcón",
          "Mano Larga", "el Veterano", "la Veterana", "Cumbres del Norte", "el Cuervo",
          "el Lobo", "la Loba", "Ala Negra", "el Sin Sueño", "la Sin Sueño"
        ]
      },
      {
        id: "command",
        label: "Comando",
        items: [
          "del Sexto Frente", "de la Legión XIII", "del Wing Norte", "de la Cuarta Flota", "del Cuerpo de Asalto",
          "del Tercio Bastardo", "del Estado Mayor Nocturno", "de la División Acero", "de la Guardia Roja", "de la Vanguardia",
          "del Frente Sur", "del Cuartel del Cabo Cero", "de la Brigada Sombra", "del Frente Polar", "del Comando Conjunto 4",
          "de la Flota Estelar 9", "del Ala Tridente", "de la Falange Cuarta", "del Frente del Río Muerto", "del Cuerpo de Choque",
          "del Cordón Bastardo", "del Sector 7", "del Anillo Externo", "de la Coalición del Velo", "del Pacto del Sur",
          "de la Cohorte del Cuervo", "del Frente del Lago Frío", "de la Octava Cohorte", "del Estado Mayor Acero", "del Frente Eterno"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomía de un nombre de comandante con peso narrativo",
        body: "<p>Los grandes comandantes de la ficción comparten algo: el nombre se asocia a un campo de batalla. <em>Aníbal de Cartago</em>, <em>Patton el de Bastogne</em>, <em>Lord Comandante Mormont</em>. La fórmula es rango + nombre + epíteto + frente. Cuando los cuatro elementos se alinean, el nombre suena a leyenda funcional. <strong>Mariscal Aurelia Mano de Hierro del Sexto Frente</strong> ya implica victorias específicas y técnica reconocible.</p><p>El epíteto debe describir capacidad estratégica, no agresión genérica. <em>Mano de Hierro</em> sugiere disciplina inflexible; <em>Cabeza Fría</em> implica que decide bien bajo presión; <em>el Sin Derrotas</em> es claro pero arriesgado (ese comandante lleva una espada de Damocles). Evitá apodos de héroe juvenil tipo <em>el Devastador</em>: los comandantes serios cargan reputaciones, no eslóganes.</p><p>El comando debe ser identificable. <em>de la Legión XIII</em> evoca tradición romana; <em>del Wing Norte</em> apunta a aviación moderna; <em>de la Cuarta Flota</em> a marina. Mezclar registros (<em>Tribuno del Wing Norte</em>) puede funcionar en mundos eclécticos como Warhammer 40K, donde la coexistencia de imaginarios crea identidad. Pero para narrativa más realista, mantené coherencia institucional dentro del nombre.</p>"
      },
      {
        h2: "Aplicaciones por género y sistema",
        body: "<p>En wargames de mesa (Warhammer, Bolt Action, Star Wars: Legion), generá tres comandantes para crear facciones rivales con personalidad distinta. Asignále a cada uno un estilo táctico: el agresivo de flanqueo, el defensivo de fortaleza, el oportunista de espera. Los jugadores eligen comandante según preferencia y eso modifica las partidas. Tu campaña gana profundidad sin cambiar reglas mecánicas.</p><p>En novelas militares (Steven Pressfield, Bernard Cornwell, Joe Abercrombie), los comandantes son punto de vista privilegiado. Generá uno por bando para que el lector entienda la lógica interna de cada lado. <em>Gates of Fire</em> trabaja sobre Leónidas; <em>The First Law</em> contrapone Bayaz con sus enemigos. Tu lector necesita acceder a la sala de mando, no solo al frente.</p><p>En space opera y fantasía (<em>Foundation</em>, <em>The Expanse</em>, <em>The Stormlight Archive</em>), el comandante carga con la geopolítica del mundo. Su nombre debe insinuar la facción y la ideología. Filtrá los rangos según contexto: <em>Praetor</em> para tono romano alternativo; <em>Khagan</em> para estepario; <em>Strategos</em> para bizantino-spacefarer. La elección de rango ya construye worldbuilding.</p>"
      },
      {
        h2: "Errores típicos al diseñar comandantes ficticios",
        body: "<p>Error 1: comandante invencible. Si tu general nunca pierde batallas, no hay tensión narrativa. Diseñá una derrota pasada que lo persigue: en qué frente perdió, cuántos soldados murieron, qué decisión propia falló. Esa cicatriz da profundidad. <em>Patton</em> en ficción funciona mejor cuando muestra dudas; el comandante perfecto aburre al lector.</p><p>Error 2: comandante sin disidencia interna. En toda jerarquía militar hay subordinados que dudan, oponen, conspiran. Si tu general manda y todos obedecen sin grietas, falta realismo. Diseñá al menos un coronel que prepara golpe interno o un capitán que filtra órdenes a la prensa enemiga. Esa fricción genera escenas de mando memorables.</p><p>Error 3: ignorar la logística. Los comandantes ganan o pierden por suministros, comunicaciones, moral, no solo por valentía. Cuando tu general toma decisiones, mostrá las restricciones reales: combustible, raciones, líneas de comunicación cortadas. <em>Band of Brothers</em> y <em>Generation Kill</em> son maestros en mostrar estas restricciones. Sin logística, tu comandante es solo un héroe operístico, no un líder funcional.</p>"
      },
      {
        h2: "Construyendo el círculo de mando completo",
        body: "<p>Una vez generado tu comandante, definí su estado mayor: jefe de operaciones, jefe de inteligencia, jefe de logística, oficial político (si el setting lo justifica), edecán personal. Cinco figuras alrededor del comandante crean coro funcional. Cada uno aporta perspectiva distinta y permite escenas en sala de mando con tensión real.</p><p>Diseñá tres relaciones verticales clave: con el superior político (presidente, emperador, consejo), con el rival operativo del mismo rango (otro general que compite por presupuesto), con la tropa de base (sargento o cabo que representa al soldado común). Esa triada vertical define la posición política del comandante en su mundo. Sin esa red, el general flota en vacío.</p><p>Reservá un dilema moral inminente. Toda saga militar memorable confronta al comandante con una decisión imposible: bombardear una ciudad civil para acabar la guerra, ejecutar a un subordinado por traición, ceder territorio para ganar tiempo. Ese dilema es el clímax. Diseñalo desde el inicio aunque no se revele hasta el final. El generador te da el nombre; vos diseñás la decisión que lo definirá ante la historia.</p>"
      }
    ],
    faq: [
      {
        q: "¿Estos nombres sirven para fantasía épica tipo Tolkien o más para sci-fi?",
        a: "Sirven para ambos extremos. Filtrá los rangos según el setting: para fantasía épica usá <em>Lord Comandante</em>, <em>Mariscal</em>, <em>Capitán General</em>. Para sci-fi usá <em>Almirante</em>, <em>Estratega</em>, <em>Praetor</em>. Los epítetos suelen funcionar en ambos contextos."
      },
      {
        q: "¿Cómo evito que mi comandante sea un cliché militar plano?",
        a: "Asignale una contradicción central. El general pacifista que comanda contra su voluntad, la almiranta que era civil hasta hace un año, el coronel que perdió un hijo en la misma guerra que dirige. La contradicción interna es lo que distingue a comandantes memorables como Yang Wen-li (<em>LOGH</em>) o Roboute Guilliman."
      },
      {
        q: "¿Puedo usar más de un comandante generado para una sola facción?",
        a: "Sí, y se recomienda. Generá tres por facción: el comandante supremo, el subordinado leal y el rival interno que conspira. Esa triangulación te da política interna automática. Cuando el comandante supremo decide algo, los otros dos reaccionan distinto y eso genera trama sin esfuerzo."
      },
      {
        q: "¿Qué hago si el nombre completo me suena demasiado largo?",
        a: "Usá la versión completa solo en presentaciones formales o textos descriptivos. En diálogo cotidiano, usá apellido o epíteto solo: <em>Mano de Hierro ordenó retirada</em> o <em>Aurelia llegó al puente</em>. Los lectores aceptan abreviaciones contextuales sin problema."
      }
    ]
  },
  en: {
    pageTitle: "Commander Name Generator | Genfy",
    metaDesc: "Create military commander, general and tactical leader names with strategic authority for your campaigns, novels and tabletop wargames.",
    h1: "Commander Name Generator",
    intro: "Invent generals and tactical leaders with institutional weight for your military narratives, epic fantasy or space opera. Authority and strategy.",
    tag: "Military strategy",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "rank",
        label: "Rank",
        items: [
          "General", "Brigadier", "Marshal", "Admiral", "Commander",
          "Strategist", "High Strategist", "Colonel", "Vice Admiral", "Grand Marshal",
          "Field Master", "Captain General", "Praetor", "Tribune", "Lord Commander",
          "Lady Commander", "Hetman", "Voivode", "Khagan", "Strategos",
          "Domestic", "Polemarch", "Warlord", "Battle Master", "High Captain",
          "Field Commander", "Sector Commander", "War Council Chair", "Supreme Commander", "Operational Lead"
        ]
      },
      {
        id: "first",
        label: "Name",
        items: [
          "Cassius", "Aurelia", "Voren", "Mira", "Tiberius",
          "Octavia", "Decimus", "Lyra", "Marcus", "Selene",
          "Khalid", "Yara", "Soren", "Ana", "Brennan",
          "Aspasia", "Hadrian", "Ingrid", "Talin", "Reza",
          "Anara", "Volkov", "Nero", "Kira", "Amalia",
          "Targus", "Idris", "Vasilis", "Ezra", "Magda"
        ]
      },
      {
        id: "epithet",
        label: "Epithet",
        items: [
          "the Shieldbreaker", "the Inflexible", "Iron Hand", "Thunder Voice", "the Strategist",
          "the Undefeated", "Cold Head", "Slow Blood", "the Cold", "the Cunning",
          "Doublepulse", "the Stoic", "Hawk Eye", "Long Hand", "the Veteran",
          "Northern Peaks", "the Crow", "the Wolf", "Black Wing", "the Sleepless",
          "Steel Mind", "Frost Heart", "the Patient", "Storm Bringer", "Iron Will",
          "Stone Voice", "Quiet Step", "the Watchful", "Twin Blades", "the Final Word"
        ]
      },
      {
        id: "command",
        label: "Command",
        items: [
          "of the Sixth Front", "of Legion XIII", "of the North Wing", "of the Fourth Fleet", "of the Assault Corps",
          "of the Bastard Tercio", "of the Night General Staff", "of the Steel Division", "of the Red Guard", "of the Vanguard",
          "of the South Front", "of Cape Zero Headquarters", "of the Shadow Brigade", "of the Polar Front", "of Joint Command 4",
          "of Stellar Fleet 9", "of the Trident Wing", "of the Fourth Phalanx", "of the Dead River Front", "of the Shock Corps",
          "of the Bastard Cordon", "of Sector 7", "of the Outer Ring", "of the Veil Coalition", "of the South Pact",
          "of the Crow Cohort", "of the Cold Lake Front", "of the Eighth Cohort", "of the Steel General Staff", "of the Eternal Front"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomy of a commander name with narrative weight",
        body: "<p>Great fiction commanders share something: the name links to a battlefield. <em>Hannibal of Carthage</em>, <em>Patton of Bastogne</em>, <em>Lord Commander Mormont</em>. The formula is rank + name + epithet + front. When the four elements align, the name sounds like functional legend. <strong>Marshal Aurelia Iron Hand of the Sixth Front</strong> already implies specific victories and recognizable technique.</p><p>The epithet must describe strategic capacity, not generic aggression. <em>Iron Hand</em> suggests inflexible discipline; <em>Cold Head</em> implies sound decisions under pressure; <em>the Undefeated</em> is clear but risky (that commander carries a Damocles sword). Avoid juvenile-hero nicknames like <em>the Devastator</em>: serious commanders bear reputations, not slogans.</p><p>The command must be identifiable. <em>of Legion XIII</em> evokes Roman tradition; <em>of the North Wing</em> points to modern aviation; <em>of the Fourth Fleet</em> to navy. Mixing registers (<em>Tribune of the North Wing</em>) can work in eclectic worlds like Warhammer 40K, where coexistence of imaginaries creates identity. But for more realistic narrative, keep institutional coherence within the name.</p>"
      },
      {
        h2: "Applications by genre and system",
        body: "<p>In tabletop wargames (Warhammer, Bolt Action, Star Wars: Legion), generate three commanders to create rival factions with distinct personality. Assign each a tactical style: aggressive flanker, defensive fortress, opportunistic waiter. Players choose commanders by preference and that modifies games. Your campaign gains depth without changing mechanical rules.</p><p>In military novels (Steven Pressfield, Bernard Cornwell, Joe Abercrombie), commanders are privileged viewpoints. Generate one per side so the reader understands the internal logic of each. <em>Gates of Fire</em> works on Leonidas; <em>The First Law</em> juxtaposes Bayaz with his enemies. Your reader needs access to the war room, not just the front.</p><p>In space opera and fantasy (<em>Foundation</em>, <em>The Expanse</em>, <em>The Stormlight Archive</em>), the commander carries the world's geopolitics. Their name must hint at faction and ideology. Filter ranks by context: <em>Praetor</em> for alternative Roman tone; <em>Khagan</em> for steppe; <em>Strategos</em> for Byzantine-spacefarer. Rank choice already builds worldbuilding.</p>"
      },
      {
        h2: "Typical mistakes when designing fictional commanders",
        body: "<p>Mistake 1: invincible commander. If your general never loses battles, no narrative tension. Design a past defeat that haunts them: which front they lost, how many soldiers died, what own decision failed. That scar gives depth. <em>Patton</em> in fiction works better when showing doubt; the perfect commander bores.</p><p>Mistake 2: commander without internal dissent. In every military hierarchy there are subordinates who doubt, oppose, conspire. If your general commands and everyone obeys without cracks, realism is missing. Design at least one colonel preparing internal coup or a captain leaking orders to enemy press. That friction generates memorable command scenes.</p><p>Mistake 3: ignoring logistics. Commanders win or lose by supplies, communications, morale, not just bravery. When your general makes decisions, show real constraints: fuel, rations, cut communication lines. <em>Band of Brothers</em> and <em>Generation Kill</em> are masters at showing these constraints. Without logistics, your commander is just operatic hero, not functional leader.</p>"
      },
      {
        h2: "Building the full command circle",
        body: "<p>Once you've generated your commander, define their staff: operations chief, intelligence chief, logistics chief, political officer (if setting justifies), personal aide. Five figures around the commander create functional chorus. Each contributes distinct perspective and enables war room scenes with real tension.</p><p>Design three key vertical relationships: with political superior (president, emperor, council), with operational rival of same rank (another general competing for budget), with base troops (sergeant or corporal representing common soldier). That vertical triad defines the commander's political position in their world. Without that network, the general floats in vacuum.</p><p>Reserve an imminent moral dilemma. Every memorable military saga confronts the commander with an impossible decision: bomb a civilian city to end the war, execute a subordinate for treason, cede territory to gain time. That dilemma is the climax. Design it from the start even if not revealed until the end. The generator gives you the name; you design the decision that will define them before history.</p>"
      }
    ],
    faq: [
      {
        q: "Do these names work for Tolkien-style epic fantasy or more for sci-fi?",
        a: "Both extremes. Filter ranks by setting: for epic fantasy use <em>Lord Commander</em>, <em>Marshal</em>, <em>Captain General</em>. For sci-fi use <em>Admiral</em>, <em>Strategist</em>, <em>Praetor</em>. Epithets usually work in both contexts."
      },
      {
        q: "How do I avoid my commander being a flat military cliché?",
        a: "Assign a central contradiction. The pacifist general commanding against their will, the admiral who was civilian until a year ago, the colonel who lost a child in the same war they direct. Internal contradiction is what distinguishes memorable commanders like Yang Wen-li (<em>LOGH</em>) or Roboute Guilliman."
      },
      {
        q: "Can I use more than one generated commander for a single faction?",
        a: "Yes, and recommended. Generate three per faction: supreme commander, loyal subordinate and conspiring internal rival. That triangulation gives you automatic internal politics. When the supreme commander decides something, the other two react differently and that generates plot effortlessly."
      },
      {
        q: "What if the full name sounds too long?",
        a: "Use the full version only in formal introductions or descriptive texts. In daily dialogue, use surname or epithet only: <em>Iron Hand ordered retreat</em> or <em>Aurelia reached the bridge</em>. Readers accept contextual abbreviations without problem."
      }
    ]
  }
};
