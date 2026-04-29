import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-pirata-espacial", en: "space-pirate-name-generator" },
  category: "fun",
  emoji: "🏴‍☠️",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Pirata Espacial | Genfy",
    metaDesc: "Creá nombres de piratas espaciales, corsarios cósmicos y saqueadores interestelares con espíritu rebelde para tus historias y campañas de space opera.",
    h1: "Generador de Nombres de Pirata Espacial",
    intro: "Inventá capitanes corsarios, contrabandistas estelares y saqueadores de naves para tus campañas de space opera. Mezcla de pirata clásico y cyberpunk cósmico.",
    tag: "Ciencia ficción",
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
          "Capitana", "Capitán", "Comodoro", "Almirante Renegado", "Comandante",
          "Corsario", "Corsaria", "Saqueador", "Saqueadora", "Bucanero",
          "Bucanera", "Vieja", "Viejo", "Maestra", "Maestro",
          "Patrón", "Patrona", "Lobo", "Loba", "Reina",
          "Rey", "Príncipe Negro", "Princesa Negra", "Mano Roja", "Garra de Hierro",
          "Bruja", "Brujo", "Halcón", "Cuervo", "Sombra"
        ]
      },
      {
        id: "first",
        label: "Nombre",
        items: [
          "Vargas", "Kael", "Octavia", "Riggs", "Marlow",
          "Shen", "Ezra", "Tarra", "Kobiyashi", "Vance",
          "Ivanova", "Doc", "Hex", "Sable", "Soren",
          "Mira", "Bashir", "Yuri", "Saskia", "Cobb",
          "Reza", "Ada", "Drax", "Onega", "Kaito",
          "Nadya", "Ozar", "Corbin", "Lirael", "Jax"
        ]
      },
      {
        id: "epithet",
        label: "Epíteto",
        items: [
          "el Tuerto", "la Tuerta", "el Chacal", "la Chacal", "el Cuervo Rojo",
          "Ojo de Plata", "Mano de Hierro", "Sin Mandíbula", "el Sin Sombra", "Garra de Acero",
          "Diente de Plomo", "Pulmón Negro", "Sin Pulso", "el Quemado", "la Quemada",
          "Cicatriz", "Cara Rota", "el Cromado", "la Cromada", "el Dosveces Muerto",
          "el Sin Estrella", "Voz de Sal", "el Largo", "la Larga", "Cuello Frío",
          "Bala Lenta", "el Mudo", "la Muda", "Sangre Helada", "el Insomne"
        ]
      },
      {
        id: "ship",
        label: "Origen / Nave",
        items: [
          "del Aullido", "del Quemador", "de la Cuchilla Negra", "del Velo Roto", "de la Sirena Estática",
          "del Cisne Carmesí", "de la Garza", "del Orión Falso", "de la Coma 9", "del Lagarto",
          "de la Bala Perdida", "del Espolón", "de la Aguja", "del Diente Hueco", "del Mantra",
          "de la Brújula Muerta", "del Sextante Roto", "de la Mariposa Sucia", "del Cíclope", "del Tridente Inverso",
          "de la Última Estrella", "del Cabo Cero", "del Eclipse Permanente", "del Anillo Bastardo", "del Faro Apagado",
          "de la Comuna del Vacío", "del Asilo Estelar", "de la Torre Hueca", "del Pacto Bastardo", "del Final Doble"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Elementos de un nombre pirata espacial efectivo",
        body: "<p>Los grandes piratas de la space opera se construyen igual que sus equivalentes históricos: título, apodo y barco. <em>Han Solo del Halcón Milenario</em>, <em>Capitán Harlock</em>, <em>Malcolm Reynolds de la Serenity</em>. La fórmula funciona porque combina autoridad (capitán), rasgo memorable (Tuerto, Sin Sombra) y posesión emblemática (la nave). Si dejás afuera uno de los tres, el nombre pierde gancho.</p><p>El epíteto es donde se juega el carisma. Los apodos genéricos como <em>el Negro</em> o <em>la Roja</em> ya están ocupados. Apuntá a algo más concreto: <strong>Sin Mandíbula</strong> sugiere una pelea perdida con prótesis improvisada; <strong>Bala Lenta</strong> insinúa una historia donde el disparo llegó demasiado tarde. Cuanto más implica el apodo, más tracción narrativa tiene el personaje.</p><p>La nave puede ser un barco real o un concepto. <em>del Velo Roto</em> evoca tela espacial dañada; <em>del Cabo Cero</em> sugiere coordenada perdida. Mezclar registros náuticos clásicos (espolón, sextante, brújula) con conceptos espaciales modernos (eclipse, anillo, faro apagado) genera la fricción estética típica del subgénero. Es por eso que <em>Firefly</em> funciona: combina western, vela y cyberpunk sin pestañear.</p>"
      },
      {
        h2: "Aplicaciones en juegos, novelas y campañas de rol",
        body: "<p>En Stars Without Number, Traveller o Starfinder, los nombres piratas funcionan como ganchos de aventura. Si el GM presenta a <strong>la Capitana Vargas Mano de Hierro de la Sirena Estática</strong>, el grupo ya sabe que enfrenta a un personaje con peso. Para campañas largas, generá tres capitanes rivales con estilos distintos: uno honorable, uno sádico, uno enigmático. La trinidad cubre todos los tonos posibles del antagonismo.</p><p>En novelas estilo <em>The Expanse</em>, <em>Leviathan Wakes</em> o <em>Red Rising</em>, los piratas son economía, no excentricidad. Llenan vacíos donde el imperio no llega. Generá nombres anclados a regiones precisas del mundo: el cinturón, el borde colonial, los anillos exteriores. Sumá un detalle de origen: <em>nacida en una luna minera</em>, <em>desertor de la flota lunar</em>. Eso transforma al pirata genérico en personaje con biografía.</p><p>En videojuegos como <em>FTL</em>, <em>Starfield</em> o <em>Star Wars Outlaws</em>, los nombres deben ser memorables al primer encuentro. El epíteto y la nave pesan más que el nombre propio. Si el jugador solo recuerda <em>Bala Lenta del Quemador</em>, ya ganaste. Diseñá facciones piratas con nombres temáticos compartidos: la Coalición del Velo, los Hermanos del Cabo Cero, la Guardia Roja del Aullido.</p>"
      },
      {
        h2: "Errores comunes al crear piratas espaciales",
        body: "<p>Error 1: imitar demasiado a piratas de la Tierra. Si tu corsario solo dice <em>arr</em>, lleva loro mecánico y entierra cofres en lunas, estás haciendo cosplay barato. Los piratas espaciales modernos heredan códigos pero los actualizan: el cofre se reemplaza por datos cifrados, el loro por una IA insolente, la pata de palo por una prótesis hackeada.</p><p>Error 2: nombres impronunciables. <em>Xkthral del Quasar Doblado de la Subnebulosa Yltrak</em> queda lindo escrito pero nadie lo recuerda. Los grandes nombres espaciales son cortos: Vader, Solo, Han, Reynolds, Skywalker. Si tu nombre completo supera siete sílabas, tu pirata necesita apodo corto que sus enemigos griten en combate.</p><p>Error 3: piratas sin código moral propio. Los piratas memorables siempre tienen reglas internas: <em>no matamos niños</em>, <em>nunca traicionamos a la tripulación</em>, <em>cobramos rescate antes que asesinato</em>. Sin código, son solo bandidos. El código es lo que hace que los lectores los amen incluso cuando son antagonistas. <em>Black Sails</em> y <em>Cowboy Bebop</em> son obras maestras porque sus criminales tienen ética propia.</p>"
      },
      {
        h2: "Construyendo la flota: cómo escalar del nombre al universo",
        body: "<p>Una vez generado el capitán, definí su tripulación nuclear: piloto (con apodo), ingeniero (con vicio), médico (con pasado oscuro), artillero (con código moral) y misceláneo (mascota mecánica, hacker, ladrón infantil). Esta estructura coral copiada de <em>Firefly</em>, <em>Cowboy Bebop</em> o <em>Guardians of the Galaxy</em> funciona porque ya sabemos que cada miembro genera tramas paralelas.</p><p>Definí la nave con tres detalles concretos: defecto técnico permanente (motor que falla en saltos largos), particularidad estética (casco pintado con grafiti tribal), secreto en bodega (un objeto que la tripulación no sabe que está ahí). Estos tres elementos generan tres tramas potenciales sin esfuerzo adicional.</p><p>Sumá un enemigo de toda la vida y un puerto seguro. El enemigo es la sombra que el capitán evita: una corporación, un ex amante traidor, un cazarrecompensas obsesivo. El puerto seguro es donde recala cuando todo falla: una luna olvidada, un asteroide minero, una cantina específica. Con capitán + tripulación + nave + enemigo + puerto tenés una mini saga lista. El nombre solo abrió la puerta; el resto es construcción narrativa.</p>"
      }
    ],
    faq: [
      {
        q: "¿Estos nombres sirven para piratas en estilo Star Wars o más bien The Expanse?",
        a: "Sirven para ambos extremos. Si tu setting es Star Wars (space fantasy), conservá apodos coloridos y nombres dramáticos. Si es estilo The Expanse (sci-fi duro), filtrá los nombres más fantasiosos y quedate con los anclados a coordenadas o defectos físicos creíbles."
      },
      {
        q: "¿Puedo combinar dos nombres del generador para crear un alias completo?",
        a: "Sí. Generá tandas y mezclá manualmente. Por ejemplo, podés tomar el título de un resultado y la nave de otro: <em>Capitana Mira del Cabo Cero</em>. La combinación libre suele dar mejores resultados que la primera salida automática."
      },
      {
        q: "¿Cómo doy a mi pirata espacial profundidad más allá del nombre?",
        a: "Definí qué hacía antes de ser pirata: minería en una luna, oficial de flota desertor, médico militar deshonrado. La profesión previa explica habilidades técnicas y traumas. Un pirata con backstory es siempre más interesante que uno que 'siempre fue criminal'."
      },
      {
        q: "¿Funciona el generador para piratas heroicos o solo antagonistas?",
        a: "Funciona para ambos. Los nombres son neutros respecto al alineamiento moral. Un <em>Capitán Vargas Sin Mandíbula del Velo Roto</em> puede ser héroe que roba a corporaciones para alimentar refugiados, o villano sádico. La trayectoria moral la definís vos en el guion."
      }
    ]
  },
  en: {
    pageTitle: "Space Pirate Name Generator | Genfy",
    metaDesc: "Create space pirate, cosmic corsair and interstellar raider names with rebel spirit for your stories and space opera campaigns.",
    h1: "Space Pirate Name Generator",
    intro: "Invent corsair captains, stellar smugglers and ship raiders for your space opera campaigns. A blend of classic piracy and cosmic cyberpunk.",
    tag: "Science fiction",
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
          "Captain", "Commodore", "Renegade Admiral", "Commander", "Corsair",
          "Privateer", "Raider", "Buccaneer", "Old", "Master",
          "Boss", "Wolf", "Queen", "King", "Black Prince",
          "Black Princess", "Red Hand", "Iron Claw", "Witch", "Falcon",
          "Crow", "Shadow", "Reaver", "Marauder", "Plunderer",
          "Skipper", "Outlaw", "Renegade", "Blackheart", "Lord"
        ]
      },
      {
        id: "first",
        label: "Name",
        items: [
          "Vargas", "Kael", "Octavia", "Riggs", "Marlow",
          "Shen", "Ezra", "Tarra", "Kobiyashi", "Vance",
          "Ivanova", "Doc", "Hex", "Sable", "Soren",
          "Mira", "Bashir", "Yuri", "Saskia", "Cobb",
          "Reza", "Ada", "Drax", "Onega", "Kaito",
          "Nadya", "Ozar", "Corbin", "Lirael", "Jax"
        ]
      },
      {
        id: "epithet",
        label: "Epithet",
        items: [
          "the One-Eyed", "the Jackal", "the Red Crow", "Silver Eye", "Iron Hand",
          "Jawless", "the Shadowless", "Steel Claw", "Lead Tooth", "Black Lung",
          "Pulseless", "the Burned", "Scar", "Broken Face", "the Chromed",
          "the Twice-Dead", "the Starless", "Salt Voice", "the Long", "Cold Neck",
          "Slow Bullet", "the Mute", "Frozen Blood", "the Sleepless", "the Half",
          "Quick Hand", "Bone Whisper", "Glass Heart", "Iron Lung", "Hollow Smile"
        ]
      },
      {
        id: "ship",
        label: "Origin / Ship",
        items: [
          "of the Howl", "of the Burner", "of the Black Blade", "of the Broken Veil", "of the Static Siren",
          "of the Crimson Swan", "of the Heron", "of False Orion", "of Coma 9", "of the Lizard",
          "of the Stray Bullet", "of the Spur", "of the Needle", "of the Hollow Tooth", "of the Mantra",
          "of the Dead Compass", "of the Broken Sextant", "of the Dirty Butterfly", "of the Cyclops", "of the Inverse Trident",
          "of the Last Star", "of Cape Zero", "of Permanent Eclipse", "of the Bastard Ring", "of the Dark Beacon",
          "of the Void Commune", "of the Stellar Asylum", "of the Hollow Tower", "of the Bastard Pact", "of the Double Ending"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Elements of an effective space pirate name",
        body: "<p>Great space opera pirates are built like their historical counterparts: title, nickname and ship. <em>Han Solo of the Millennium Falcon</em>, <em>Captain Harlock</em>, <em>Malcolm Reynolds of the Serenity</em>. The formula works because it combines authority (captain), memorable trait (One-Eyed, Shadowless) and emblematic possession (the ship). Drop one of the three and the name loses bite.</p><p>The epithet is where charisma plays out. Generic nicknames like <em>the Black</em> or <em>the Red</em> are taken. Aim more concrete: <strong>Jawless</strong> suggests a lost fight with improvised prosthetic; <strong>Slow Bullet</strong> hints at a story where the shot arrived too late. The more the nickname implies, the more narrative traction the character has.</p><p>The ship can be a literal vessel or a concept. <em>of the Broken Veil</em> evokes damaged spatial fabric; <em>of Cape Zero</em> suggests lost coordinate. Mixing classic nautical registers (spur, sextant, compass) with modern space concepts (eclipse, ring, dark beacon) generates the genre's typical aesthetic friction. That's why <em>Firefly</em> works: it blends western, sail and cyberpunk without flinching.</p>"
      },
      {
        h2: "Applications in games, novels and roleplay campaigns",
        body: "<p>In Stars Without Number, Traveller or Starfinder, pirate names work as adventure hooks. If the GM introduces <strong>Captain Vargas Iron Hand of the Static Siren</strong>, the group already knows they face a weighty character. For long campaigns, generate three rival captains with distinct styles: one honorable, one sadistic, one enigmatic. The trinity covers all antagonism tones.</p><p>In <em>The Expanse</em>, <em>Leviathan Wakes</em> or <em>Red Rising</em> style novels, pirates are economy, not eccentricity. They fill voids where empire doesn't reach. Generate names anchored to precise world regions: the belt, colonial edge, outer rings. Add an origin detail: <em>born on a mining moon</em>, <em>lunar fleet deserter</em>. That turns the generic pirate into a biographied character.</p><p>In games like <em>FTL</em>, <em>Starfield</em> or <em>Star Wars Outlaws</em>, names must be memorable at first encounter. Epithet and ship weigh more than first name. If the player only recalls <em>Slow Bullet of the Burner</em>, you've won. Design pirate factions with shared thematic names: the Veil Coalition, the Cape Zero Brotherhood, the Howl Red Guard.</p>"
      },
      {
        h2: "Common mistakes when creating space pirates",
        body: "<p>Mistake 1: copying Earth pirates too literally. If your corsair only says <em>arr</em>, carries a mechanical parrot and buries chests on moons, you're doing cheap cosplay. Modern space pirates inherit codes but update them: the chest becomes encrypted data, the parrot an insolent AI, the wooden leg a hacked prosthetic.</p><p>Mistake 2: unpronounceable names. <em>Xkthral of the Bent Quasar of the Yltrak Subnebula</em> looks pretty written but no one remembers it. Great space names are short: Vader, Solo, Han, Reynolds, Skywalker. If your full name exceeds seven syllables, your pirate needs a short nickname enemies shout in combat.</p><p>Mistake 3: pirates without their own moral code. Memorable pirates always have internal rules: <em>we don't kill kids</em>, <em>we never betray the crew</em>, <em>ransom over murder</em>. Without code, they're just bandits. Code is what makes readers love them even as antagonists. <em>Black Sails</em> and <em>Cowboy Bebop</em> are masterworks because their criminals have their own ethics.</p>"
      },
      {
        h2: "Building the fleet: scaling from name to universe",
        body: "<p>Once you've generated the captain, define their core crew: pilot (with nickname), engineer (with vice), medic (with dark past), gunner (with moral code) and miscellaneous (mechanical pet, hacker, child thief). This choral structure copied from <em>Firefly</em>, <em>Cowboy Bebop</em> or <em>Guardians of the Galaxy</em> works because every member spawns parallel plotlines.</p><p>Define the ship with three concrete details: permanent technical flaw (engine fails on long jumps), aesthetic quirk (hull painted with tribal graffiti), cargo bay secret (an object the crew doesn't know is there). These three elements generate three potential plots without extra effort.</p><p>Add a lifelong enemy and a safe port. The enemy is the shadow the captain avoids: a corporation, a treacherous ex-lover, an obsessive bounty hunter. The safe port is where they dock when everything fails: a forgotten moon, a mining asteroid, a specific cantina. With captain + crew + ship + enemy + port you have a mini saga ready. The name only opened the door; the rest is narrative construction.</p>"
      }
    ],
    faq: [
      {
        q: "Do these names work for Star Wars style or more The Expanse style pirates?",
        a: "Both extremes. If your setting is Star Wars (space fantasy), keep colorful nicknames and dramatic names. If it's The Expanse style (hard sci-fi), filter the more fantastic names and stick to those anchored to coordinates or believable physical defects."
      },
      {
        q: "Can I combine two generated names to create a complete alias?",
        a: "Yes. Generate batches and mix manually. For example, take the title from one result and the ship from another: <em>Captain Mira of Cape Zero</em>. Free combination usually gives better results than the first automatic output."
      },
      {
        q: "How do I give my space pirate depth beyond the name?",
        a: "Define what they did before piracy: moon mining, deserter fleet officer, dishonored military medic. Previous profession explains technical skills and traumas. A pirate with backstory is always more interesting than one who 'was always criminal'."
      },
      {
        q: "Does the generator work for heroic pirates or only antagonists?",
        a: "Both. Names are neutral regarding moral alignment. A <em>Captain Vargas Jawless of the Broken Veil</em> can be a hero stealing from corporations to feed refugees, or a sadistic villain. You define the moral arc in the script."
      }
    ]
  }
};
