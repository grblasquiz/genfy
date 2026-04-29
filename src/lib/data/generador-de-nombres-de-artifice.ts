import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-artifice", en: "artificer-name-generator" },
  category: "fun",
  emoji: "⚙️",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Artífice | Genfy",
    metaDesc: "Creá nombres técnicos de artífices, ingenieros mágicos y constructores de maravillas arcano-tecnológicas para D&D, Eberron y steampunk fantástico.",
    h1: "Generador de Nombres de Artífice",
    intro: "Inventá ingenieros mágicos, constructores de autómatas y maestros del cruce entre runa y engranaje. Para Eberron, D&D 5e y steampunk arcano.",
    tag: "Fantasía",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "title",
        label: "Título",
        items: [
          "Maestre", "Maestra", "Artífice", "Ingeniero Arcano", "Ingeniera Arcana",
          "Constructor", "Constructora", "Forjador Rúnico", "Forjadora Rúnica", "Maestre del Engranaje",
          "Maestra del Engranaje", "Tejedor de Hierro", "Tejedora de Hierro", "Sello Mecánico", "Albacea Arcano",
          "Albacea Arcana", "Lector de Planos", "Lectora de Planos", "Capataz Rúnico", "Capataza Rúnica",
          "Doctora Mecánica", "Doctor Mecánico", "Reparadora", "Reparador", "Maestre de la Manivela",
          "Maestra de la Manivela", "Inscriptor Arcano", "Inscriptora Arcana", "Cartógrafa de Engranajes", "Cartógrafo de Engranajes"
        ]
      },
      {
        id: "first",
        label: "Nombre",
        items: [
          "Vexel", "Tarsis", "Mira", "Ozim", "Korren",
          "Selka", "Brann", "Tindra", "Olek", "Verena",
          "Drosk", "Aspasia", "Nadwen", "Pell", "Vohl",
          "Karim", "Yusra", "Tobin", "Rilka", "Ezra",
          "Gareth", "Vasha", "Idris", "Cassian", "Mireille",
          "Toren", "Anika", "Bashir", "Onega", "Brixa"
        ]
      },
      {
        id: "trait",
        label: "Marca técnica",
        items: [
          "Manos de Cobre", "Ojo de Cristal", "Dedos Largos", "Pulso Lento", "Pulgar Mecánico",
          "Brazo Doble", "Soldador", "Soldadora", "Veintiún Engranajes", "Tres Lentes",
          "Tinta Magnética", "Voz Suave", "Manos Limpias", "Manos Quemadas", "Pulmón Filtrado",
          "Polvo Brillante", "Tres Marcas", "Sello Doble", "Plumín de Plata", "Anteojo Triple",
          "Ojos de Lupa", "Reloj Interno", "Cinco Manos", "Mano Izquierda Larga", "Costura Limpia",
          "Tinta Verde", "Polvo Rojo", "Lima Fina", "Llave Doble", "Pulso de Reloj"
        ]
      },
      {
        id: "guild",
        label: "Gremio / Taller",
        items: [
          "del Gremio del Engranaje", "del Taller de Manivela", "de la Cofradía Rúnica", "del Capítulo Cuarto", "del Sello del Anillo",
          "de la Casa Vexel", "de la Casa Brann", "del Gremio del Cobre", "del Taller del Vapor", "de la Logia Mecánica",
          "de la Universidad de Ciudad Hueca", "del Cónclave de Plomo", "de la Casa del Reloj", "del Taller de la Tercera Luna", "del Gremio de Hierro",
          "del Taller de la Boca de Cobre", "del Capítulo del Engranaje Inverso", "del Gremio de la Pluma", "del Taller del Sello Verde", "de la Casa Tindra",
          "del Cónclave de Plata", "del Gremio del Tornillo", "del Taller del Quintacero", "del Capítulo del Sello Frío", "del Gremio del Cuarzo",
          "del Taller del Vidrio Negro", "del Cónclave de la Doce Casa", "del Gremio del Vapor Bastardo", "del Capítulo del Sello Roto", "del Taller del Pulso"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomía de un buen nombre de artífice",
        body: "<p>El artífice es el puente entre mago y artesano. Su nombre debe transmitir esa dualidad: gravedad académica más oficio manual. <em>Maestre Vexel Manos de Cobre del Gremio del Engranaje</em> ya combina título académico, marca artesana y pertenencia institucional. La fórmula funciona porque los artífices reales en culturas históricas (relojeros suizos, herreros toledanos, artesanos venecianos) cargaban exactamente esa triple identidad.</p><p>El epíteto técnico debe ser específico al oficio. <em>Manos de Cobre</em> sugiere especialización en metales blandos; <em>Veintiún Engranajes</em> es marca de un trabajo emblemático; <em>Tres Lentes</em> indica precisión óptica. Evitá apodos demasiado mágicos como <em>el Iluminado</em>: el artífice trabaja con materia, no con visiones. Su poder viene del taller, no de la inspiración divina.</p><p>El gremio es lo que distingue a un artífice de un mago. Los magos suelen ser solitarios; los artífices pertenecen a corporaciones. Tu artífice tiene maestros que le enseñaron, aprendices que le ayudan, rivales que le compiten en el mercado. Esa estructura social es el corazón del arquetipo. Sin gremio o equivalente, el artífice es solo un mago decorado con engranajes.</p>"
      },
      {
        h2: "Aplicaciones en Eberron, D&D 5e y steampunk",
        body: "<p>En Eberron, los artífices son la clase emblemática. La cosmovisión del setting (magia industrializada, casas dragón como corporaciones, autómatas cotidianos) exige nombres que suenen institucionales. Generá tres artífices de la misma casa para construir una facción coherente: el maestro veterano, el especialista joven y el asistente con secreto. Esa triada cubre tramas posibles dentro del taller.</p><p>En D&D 5e estándar, el artífice se introdujo en Tasha's Cauldron y necesita anclarse a una organización. Si tu campaña no usa Eberron, inventá un gremio local que de credibilidad. <em>El Gremio del Reloj de Aguas-de-Plata</em> da contexto inmediato. Sin gremio, el artífice queda como mago especial sin diferenciador real.</p><p>En steampunk arcano (estilo <em>Arcanum</em>, <em>Iron Kingdoms</em>, <em>Foundryside</em>), los artífices son protagonistas. Generá nombres con sabor más victoriano-industrial: <em>Maestre Tarsis Pulso de Reloj del Cónclave de Plomo</em>. La estética del setting pesa: si hay máquinas a vapor, los nombres pueden incluir referencias térmicas; si hay magnetismo arcano, marcas eléctricas. Adaptá el generador filtrando coherentemente.</p>"
      },
      {
        h2: "Errores comunes al diseñar artífices",
        body: "<p>Error 1: artífice como mago disfrazado. Si tu artífice solo lanza hechizos con varita, perdés especificidad. El artífice manipula objetos físicos: bombas alquímicas, autómatas, armas runadas, herramientas mejoradas. Mostrá el taller, las herramientas, los manuales. <em>Foundryside</em> de Robert Jackson Bennett es maestro en mostrar la artesanía detrás de la magia. Sin esa dimensión, el personaje pierde lo que lo hace artífice.</p><p>Error 2: artífice solitario absoluto. Pocos oficios dependen tanto de la red como la artesanía. Tu artífice tiene proveedores de materiales raros, clientes recurrentes, deudas con casas comerciales. Diseñá tres contactos clave: el proveedor de cobre raro, el cliente noble que paga la mayoría de las creaciones, el rival del taller vecino. Esa red da textura económica al personaje.</p><p>Error 3: artífice sin obra emblemática. Todo gran artífice tiene una pieza por la que es conocido: el reloj imposible, la armadura adaptable, el autómata pacificado. Diseñá cuál es la obra magna del tuyo, cuándo la creó, dónde está ahora. Esa obra puede ser el MacGuffin de la trama: si está en manos enemigas, la búsqueda comienza. <em>Da Vinci</em> es famoso por obras concretas; tu artífice también debe serlo.</p>"
      },
      {
        h2: "Del nombre al taller completo",
        body: "<p>Una vez generado tu artífice, definí el taller con tres habitaciones: el espacio de diseño (escritorio con planos), el espacio de fabricación (forja, banco con herramientas), el almacén de prototipos (donde guarda fracasos y joyas). Cada habitación permite escenas distintas: planificación, trabajo activo, secretos guardados. <em>His Dark Materials</em> usa esta estructura tripartita en el laboratorio de Lord Asriel.</p><p>Diseñá tres aprendices con personalidades opuestas: el meticuloso lento, el impulsivo brillante, el copión ambicioso. Esa coral interna del taller permite tramas paralelas: el aprendiz traidor que vende secretos, el aprendiz que supera al maestro, el aprendiz que muere en un experimento fallido. Cada uno es trama lista.</p><p>Reservá un proyecto secreto que el artífice esconde de su gremio. Tal vez está construyendo un arma prohibida, un autómata con consciencia ilegal, una llave para abrir un pasaje vetado. Ese proyecto secreto es el motor narrativo personal del personaje. El gremio puede investigar, descubrir, expulsar. Sin proyecto secreto, el artífice cumple órdenes; con él, tiene agenda propia.</p>"
      }
    ],
    faq: [
      {
        q: "¿Sirve este generador para Pathfinder o solo para D&D 5e?",
        a: "Sirve para ambos sistemas. Pathfinder no tiene clase Artífice oficial, pero el arquetipo aparece en clases como Inventor (Pathfinder 2e). Los nombres y gremios funcionan con cualquier sistema que mezcle magia y tecnología."
      },
      {
        q: "¿Cómo distingo un artífice de un mago de transmutación?",
        a: "El mago transforma materia con voluntad y conjuros; el artífice trabaja con manos, herramientas y procesos repetibles. El primero crea por arte; el segundo, por oficio. Mecánicamente comparten algunos efectos, pero narrativamente el artífice tiene taller, gremio y catálogo de productos. El mago no necesita nada de eso."
      },
      {
        q: "¿Puedo usar estos nombres para inventores en setting steampunk no mágico?",
        a: "Sí. Filtrá los gremios con sabor arcano y quedate con los industriales (Cofradía Rúnica → Gremio del Engranaje, Cónclave Mecánico). Los epítetos técnicos como <em>Manos de Cobre</em> o <em>Veintiún Engranajes</em> funcionan perfecto en steampunk no mágico estilo <em>The Difference Engine</em>."
      },
      {
        q: "¿Cómo equilibro creatividad técnica con limitaciones para que el artífice sea desafiante?",
        a: "Definí tres restricciones físicas: cada invención requiere materia rara que tarda en conseguir, sus dispositivos fallan bajo agua, sus runas pierden potencia con la luna llena. Esas limitaciones generan dilemas creativos sin recortar el poder mecánico. <em>Foundryside</em> usa restricciones similares para mantener tensión sostenida."
      }
    ]
  },
  en: {
    pageTitle: "Artificer Name Generator | Genfy",
    metaDesc: "Create technical artificer, magical engineer and arcano-technological marvel builder names for D&D, Eberron and fantastic steampunk.",
    h1: "Artificer Name Generator",
    intro: "Invent magical engineers, automaton builders and masters of the rune-gear crossover. For Eberron, D&D 5e and arcane steampunk.",
    tag: "Fantasy",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "title",
        label: "Title",
        items: [
          "Master", "Mistress", "Artificer", "Arcane Engineer", "Builder",
          "Rune Forger", "Master of Gears", "Iron Weaver", "Mechanical Seal", "Arcane Executor",
          "Plan Reader", "Rune Foreman", "Mechanical Doctor", "Repairer", "Master of the Crank",
          "Arcane Inscriber", "Gear Cartographer", "Loom Master", "Wire Wright", "Cog Sage",
          "Workshop Lord", "Workshop Lady", "Forge Adept", "Brass Magister", "Tinker-General",
          "Vault Engineer", "Glass Sage", "Steam Architect", "Sigil Maker", "Spring Master"
        ]
      },
      {
        id: "first",
        label: "Name",
        items: [
          "Vexel", "Tarsis", "Mira", "Ozim", "Korren",
          "Selka", "Brann", "Tindra", "Olek", "Verena",
          "Drosk", "Aspasia", "Nadwen", "Pell", "Vohl",
          "Karim", "Yusra", "Tobin", "Rilka", "Ezra",
          "Gareth", "Vasha", "Idris", "Cassian", "Mireille",
          "Toren", "Anika", "Bashir", "Onega", "Brixa"
        ]
      },
      {
        id: "trait",
        label: "Technical mark",
        items: [
          "Copper Hands", "Crystal Eye", "Long Fingers", "Slow Pulse", "Mechanical Thumb",
          "Double Arm", "Solderer", "Twenty-One Gears", "Three Lenses", "Magnetic Ink",
          "Soft Voice", "Clean Hands", "Burnt Hands", "Filtered Lung", "Bright Dust",
          "Three Marks", "Double Seal", "Silver Nib", "Triple Lens", "Magnifier Eyes",
          "Internal Clock", "Five Hands", "Long Left Hand", "Clean Stitch", "Green Ink",
          "Red Powder", "Fine File", "Double Key", "Clockwork Pulse", "Tooth of Brass"
        ]
      },
      {
        id: "guild",
        label: "Guild / Workshop",
        items: [
          "of the Gear Guild", "of the Crank Workshop", "of the Rune Confraternity", "of the Fourth Chapter", "of the Ring Seal",
          "of House Vexel", "of House Brann", "of the Copper Guild", "of the Steam Workshop", "of the Mechanical Lodge",
          "of the University of Hollow City", "of the Lead Conclave", "of the Clock House", "of the Third Moon Workshop", "of the Iron Guild",
          "of the Copper Mouth Workshop", "of the Inverse Gear Chapter", "of the Quill Guild", "of the Green Seal Workshop", "of House Tindra",
          "of the Silver Conclave", "of the Screw Guild", "of the Fifth Steel Workshop", "of the Cold Seal Chapter", "of the Quartz Guild",
          "of the Black Glass Workshop", "of the Twelve House Conclave", "of the Bastard Steam Guild", "of the Broken Seal Chapter", "of the Pulse Workshop"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Anatomy of a good artificer name",
        body: "<p>The artificer is the bridge between mage and craftsman. Their name must convey that duality: academic gravity plus manual trade. <em>Master Vexel Copper Hands of the Gear Guild</em> already combines academic title, artisan mark and institutional belonging. The formula works because real-world artificers in historical cultures (Swiss watchmakers, Toledan smiths, Venetian artisans) carried exactly that triple identity.</p><p>The technical epithet must be specific to the craft. <em>Copper Hands</em> suggests soft metal specialization; <em>Twenty-One Gears</em> is the mark of an emblematic work; <em>Three Lenses</em> indicates optical precision. Avoid overly mystical nicknames like <em>the Enlightened</em>: the artificer works with matter, not visions. Their power comes from the workshop, not divine inspiration.</p><p>The guild is what distinguishes an artificer from a mage. Mages are often solitary; artificers belong to corporations. Your artificer has masters who taught them, apprentices who help, rivals who compete in the market. That social structure is the heart of the archetype. Without guild or equivalent, the artificer is just a mage decorated with gears.</p>"
      },
      {
        h2: "Applications in Eberron, D&D 5e and steampunk",
        body: "<p>In Eberron, artificers are the iconic class. The setting's worldview (industrialized magic, Dragonmarked Houses as corporations, everyday automatons) demands names that sound institutional. Generate three artificers from the same house to build a coherent faction: veteran master, young specialist and assistant with a secret. That triad covers possible plots inside the workshop.</p><p>In standard D&D 5e, the artificer was introduced in Tasha's Cauldron and needs anchoring to an organization. If your campaign doesn't use Eberron, invent a local guild for credibility. <em>The Clock Guild of Silverwater</em> gives immediate context. Without guild, the artificer remains a special mage with no real differentiator.</p><p>In arcane steampunk (style of <em>Arcanum</em>, <em>Iron Kingdoms</em>, <em>Foundryside</em>), artificers are protagonists. Generate names with more Victorian-industrial flavor: <em>Master Tarsis Clockwork Pulse of the Lead Conclave</em>. Setting aesthetics weigh: if there are steam machines, names can include thermal references; if arcane magnetism, electrical marks. Adapt the generator filtering coherently.</p>"
      },
      {
        h2: "Common mistakes when designing artificers",
        body: "<p>Mistake 1: artificer as disguised mage. If your artificer only casts spells with a wand, you lose specificity. The artificer manipulates physical objects: alchemical bombs, automatons, runed weapons, enhanced tools. Show the workshop, the tools, the manuals. <em>Foundryside</em> by Robert Jackson Bennett is a master at showing the craftsmanship behind magic. Without that dimension, the character loses what makes them an artificer.</p><p>Mistake 2: absolute solitary artificer. Few trades depend so much on networks as craftsmanship. Your artificer has rare material suppliers, recurring clients, debts with trading houses. Design three key contacts: rare copper supplier, noble client paying for most creations, rival from the neighboring workshop. That network gives economic texture to the character.</p><p>Mistake 3: artificer without iconic work. Every great artificer has a piece they're known for: the impossible clock, the adaptive armor, the pacified automaton. Design what your artificer's masterwork is, when it was created, where it is now. That work can be the plot's MacGuffin: if in enemy hands, the search begins. <em>Da Vinci</em> is famous for concrete works; your artificer should be too.</p>"
      },
      {
        h2: "From the name to the full workshop",
        body: "<p>Once you've generated your artificer, define the workshop with three rooms: design space (desk with plans), fabrication space (forge, bench with tools), prototype storage (where they keep failures and gems). Each room enables distinct scenes: planning, active work, kept secrets. <em>His Dark Materials</em> uses this tripartite structure in Lord Asriel's lab.</p><p>Design three apprentices with opposite personalities: meticulous slow one, impulsive brilliant one, ambitious copycat. That internal workshop chorus enables parallel plots: traitor apprentice selling secrets, apprentice surpassing the master, apprentice dying in a failed experiment. Each is ready-to-use plot.</p><p>Reserve a secret project the artificer hides from their guild. Maybe building a forbidden weapon, an automaton with illegal consciousness, a key to open a forbidden passage. That secret project is the character's personal narrative engine. The guild can investigate, discover, expel. Without secret project, the artificer follows orders; with it, they have their own agenda.</p>"
      }
    ],
    faq: [
      {
        q: "Does this generator work for Pathfinder or only D&D 5e?",
        a: "Both systems. Pathfinder has no official Artificer class, but the archetype appears in classes like Inventor (Pathfinder 2e). Names and guilds work with any system blending magic and technology."
      },
      {
        q: "How do I distinguish an artificer from a transmutation wizard?",
        a: "The wizard transforms matter with will and spells; the artificer works with hands, tools and repeatable processes. The first creates by art; the second, by trade. Mechanically they share some effects, but narratively the artificer has workshop, guild and product catalog. The wizard needs none of that."
      },
      {
        q: "Can I use these names for inventors in non-magical steampunk settings?",
        a: "Yes. Filter guilds with arcane flavor and stick to industrial ones (Rune Confraternity → Gear Guild, Mechanical Conclave). Technical epithets like <em>Copper Hands</em> or <em>Twenty-One Gears</em> work perfectly in non-magical steampunk style of <em>The Difference Engine</em>."
      },
      {
        q: "How do I balance technical creativity with limitations so the artificer stays challenging?",
        a: "Define three physical restrictions: each invention requires rare matter that takes time to acquire, devices fail underwater, runes lose power on full moon. Those limitations generate creative dilemmas without cutting mechanical power. <em>Foundryside</em> uses similar restrictions to maintain sustained tension."
      }
    ]
  }
};
