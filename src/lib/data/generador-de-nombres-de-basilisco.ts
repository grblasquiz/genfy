import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-basilisco', en: 'basilisk-name-generator' },
  category: 'fun',
  emoji: '🐍',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Basilisco | Genfy',
    metaDesc: 'Creá nombres venenosos de basiliscos, serpientes legendarias y criaturas de mirada petrificante. Para D&D, Pathfinder, novelas de fantasía oscura.',
    h1: 'Generador de Nombres de Basilisco',
    intro: 'Forjá identidades letales para reyes serpiente, criaturas con mirada que mata y bestias de pantanos malditos. Inspirados en mitología clásica.',
    tag: 'Nombres fantásticos',
    filterLabel: 'Estructura del nombre',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Nombre serpentino',
        items: [
          'Sssarra', 'Vyrexis', 'Naasura', 'Ophidian', 'Sarpheth', 'Vexthul', 'Drakhol', 'Nagaroth', 'Sazzira', 'Hyssith',
          'Vesanyr', 'Ysshak', 'Pythara', 'Sirexis', 'Velnoth', 'Asyrra', 'Krexalith', 'Xuvath', 'Nessavar', 'Drussk',
          'Vethrax', 'Ophyron', 'Saalvex', 'Ysmaris', 'Vorthak', 'Khaldris', 'Sephroth', 'Zalvyx', 'Nyxara', 'Verroth',
          'Skessa', 'Vorpex', 'Nethrak', 'Yssuara', 'Halxur', 'Drevoss', 'Sulvath', 'Vekrathys', 'Ophidra', 'Kszevoth'
        ]
      },
      {
        id: 'epithet',
        label: 'Epíteto venenoso',
        items: [
          'el Petrificador', 'la Mirada de Piedra', 'el Aliento de Veneno', 'la Reina del Pantano', 'el Devorador de Reinos',
          'la Sombra Reptante', 'el Mata-Caballeros', 'la Garganta Plateada', 'el Vigilante Eterno', 'la Fauces de Mercurio',
          'el Susurro Letal', 'la Lengua de Hierro', 'el Cazador Silente', 'la Maldición de Tirana', 'el Ojo del Eclipse',
          'la Bruma Asfixiante', 'el Devorador de Águilas', 'la Reina de Cobalto', 'el Ancestro Escamoso', 'la Espina del Bosque',
          'el Conjurador de Niebla', 'la Madre del Veneno', 'el Verdugo de Catedrales', 'la Sangrante Plateada', 'el Sin-Párpados',
          'la Voz de Dos Lenguas', 'el Pulmón de Azufre', 'la Espiral del Olvido', 'el Tragador de Soles', 'la Brisa Verde',
          'el Adormecedor de Bosques', 'la Reina sin Rostro', 'el Triple-Colmillo', 'la Cobra Coronada', 'el Rey del Pozo',
          'la Mirada que Mata', 'el Anillo de Esmeralda', 'la Ondulación Plateada', 'el Vigilante de Reliquias', 'la Sombra del Templo'
        ]
      },
      {
        id: 'lair',
        label: 'Guarida o reino',
        items: [
          'del Pantano de Vexalor', 'de la Caverna Esmeralda', 'del Templo en Ruinas', 'del Bosque Sin Sol',
          'de la Catedral Caída', 'del Pozo Negro de Dyrenia', 'de las Marismas Olvidadas', 'del Valle de Huesos',
          'de la Cripta del Rey Lagarto', 'del Lago Verde', 'de la Cordillera Velnoria', 'de la Caverna del Eco Verde',
          'del Páramo de Veneno', 'de la Tumba de Bronce', 'del Bosque Petrificado', 'de la Ciudad Sumergida',
          'del Acueducto de Hyrax', 'de la Selva del Susurro', 'del Foso del Olvido', 'de la Mina Abandonada',
          'del Templo de Sethalor', 'de la Costa Negra', 'del Río de Mercurio', 'del Desfiladero de Kraxis',
          'de la Cripta de la Reina Verde', 'del Pantano de los Tres Cráneos', 'de la Caverna de Cristal Roto', 'del Bosque de Ceniza',
          'de la Catacumba del Verdugo', 'del Refugio del Dragón Muerto', 'del Lago de Azufre', 'de la Tierra Olvidada',
          'del Templo Hundido', 'de la Caverna de la Espina', 'del Pozo de las Estrellas Caídas', 'del Bosque de las Sombras',
          'de la Mansión Velneth', 'del Páramo del Eclipse', 'de la Cripta del Tirano', 'del Acueducto Subterráneo'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo construir un nombre de basilisco que imponga',
        body: '<p>El basilisco mitológico no es solo "una serpiente grande": es el rey de las serpientes, capaz de matar con la mirada y envenenar el suelo donde camina. Su nombre debe transmitir esa autoridad antinatural. Los buenos nombres de basilisco usan abundancia de consonantes silbantes (s, ss, sh, x, z) y al menos una raíz que sugiera realeza o veneno. "Sssarra el Petrificador" funciona porque las tres ss imitan el siseo y "Petrificador" es función directa.</p><p>El <strong>epíteto</strong> es donde se construye el mito. No basta con "Sssarra": Sssarra puede ser una serpiente cualquiera. "Sssarra el Devorador de Reinos" sugiere ya leyenda y consecuencias. Los epítetos pueden referir a la víctima icónica ("Mata-Caballeros"), a la habilidad ("Mirada de Piedra"), al hábitat ("Reina del Pantano") o al efecto cultural ("Maldición de Tirana"). Cada uno cuenta una historia distinta.</p><p>La <strong>guarida</strong> ancla geográficamente al monstruo. "Sssarra el Petrificador del Pantano de Vexalor" da al jugador o lector información narrativa: existe un pantano específico, tiene nombre propio, allí vive este horror. Esa especificidad convierte al basilisco genérico en encuentro memorable. <em>The Witcher</em> usa esto bien con cada cocodrilo y zeugl localizado en una región concreta del mapa.</p>'
      },
      {
        h2: 'Basiliscos según mitología y sistema de juego',
        body: '<p>En la <strong>tradición grecorromana</strong>, el basilisco es una serpiente pequeña que mata con aliento y mirada. Plinio el Viejo lo describe del tamaño de un dedo. <em>Harry Potter</em> lo agranda a coloso, pero esa es licencia ficticia. Si tu campaña respeta mitología clásica, los nombres deberían ser cortos y antiguos: "Verroth", "Hyssith", "Pythara". Si seguís la versión Hogwarts, podés agrandar tanto el monstruo como el nombre con epítetos grandilocuentes.</p><p>En <strong>D&D 5e</strong>, el basilisco es bestia tipo monstruosidad CR 3 con habilidad de petrificación. No es jefe pero sí encuentro memorable. Para uno solitario en una mazmorra, basta con nombre + epíteto: "Naasura el Sin-Párpados". Para un nido de basiliscos con matriarca, podés expandir: "Sazzira la Madre del Veneno del Pantano de Vexalor", con sus crías sin nombre individual pero con identidad colectiva.</p><p>En <strong>Pathfinder</strong> y <em>The Witcher</em>, los basiliscos varían por región: cada uno tiene comportamiento y debilidad específica. Geralt enfrenta basiliscos distintos según el contrato. Para campañas largas con varios basiliscos, distinguilos por epíteto y guarida. "El de Velnoria" mata con mirada de día, "el del Pozo Negro" con aliento. Esa especialización mecánica + nombre único hace que los jugadores investiguen antes de cada combate.</p>'
      },
      {
        h2: 'Errores frecuentes al nombrar basiliscos',
        body: '<p>Primer error: <strong>nombres impronunciables</strong>. "Vsskrxlrz" tiene tantas consonantes que ni el DM lo dice igual dos veces. Los buenos nombres serpentinos tienen 2-3 sílabas con vocales que permiten pronunciación: "Sssarra", "Naasura", "Vexalor". Si tu jugador no puede repetir el nombre del monstruo, el monstruo nunca entra al léxico de la mesa.</p><p>Segundo error: <strong>confundir basilisco con dragón</strong>. Si tu basilisco se llama "Drakhonyr el Devorador de Cielos del Pico Volador", no es basilisco, es dragón. Los basiliscos viven en pantanos, cuevas y pozos. No vuelan, no escupen fuego (a menos que sea cockatrice, que es híbrido). Mantené coherencia con el bestiario: nombres de basilisco deberían sugerir cuevas, agua estancada, túneles, no cielos abiertos.</p><p>Tercer error: <strong>género ignorado</strong>. En tradiciones folk, el basilisco macho nace de huevo de gallo incubado por sapo, mientras que la hembra es naga matriarcal de los pantanos. Si tu campaña distingue géneros, los nombres pueden reflejarlo: "el Rey del Pozo" para macho, "la Reina del Pantano" para hembra. Esa diferenciación enriquece la mitología interna y permite encuentros con dinastías serpentinas completas.</p>'
      },
      {
        h2: 'Basiliscos memorables en literatura y juegos',
        body: '<p>El basilisco de <em>Harry Potter and the Chamber of Secrets</em> es probablemente el más conocido de la cultura pop moderna. No tiene nombre propio (solo "the basilisk of Slytherin"), lo que es decisión narrativa interesante: el monstruo es servidor anónimo, no protagonista con identidad. Esa elección funciona para horror gótico clásico. Para tu campaña, podés usar nombres genéricos si querés mantener al basilisco como amenaza impersonal.</p><p>En <em>The Witcher 3</em>, Geralt enfrenta un cocodrilo gigante (forma común que en folklore eslavo derivó del basilisco) llamado simplemente "Royal Wyvern". El videojuego prefiere nombres descriptivos a nombres propios. Es estilo válido si tu mundo trata a estos seres como animales peligrosos, no como personajes con biografía.</p><p>En literatura clásica, el basilisco de <em>The Faerie Queene</em> de Spenser tiene nombre alegórico ("Errour"). Si tu campaña carga simbolismo, podés usar nombres-concepto tipo "el Veneno", "la Mirada", "la Maldición" sin estructura nombre+epíteto. Funciona para horror filosófico tipo Lovecraft donde el monstruo es idea encarnada, no criatura individual. Cada estilo (mitológico, descriptivo, alegórico) sirve a tonos narrativos distintos.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuál es la diferencia entre basilisco y cockatrice?',
        a: 'El cockatrice es híbrido gallo-serpiente con alas, originado en bestiario medieval europeo. El basilisco clásico no tiene alas y es serpiente pura. En D&D 5e están separados: el basilisco petrifica, el cockatrice también pero es más pequeño y vuela. Para nombrarlos diferenciate respetando esa anatomía.'
      },
      {
        q: '¿Estos nombres sirven para nagas o serpientes humanoides?',
        a: 'Sí, especialmente los nombres de los grupos "primer nombre". Las nagas son serpientes humanoides inteligentes con cultura, así que pueden tener nombres serpentinos elegantes y guarida + epíteto formal. La diferencia es tono: los basiliscos son bestias, las nagas son sociedad. Ajustá el peso del nombre.'
      },
      {
        q: '¿Cómo evito que el nombre suene a parodia?',
        a: 'Limitá las eses repetidas a una sola en el nombre principal (Sssarra, no Sssssssarra). Evitá epítetos sobreactuados ("el Mega-Mata-Todo"). Mantené tono mitológico clásico, no caricaturesco. Los buenos nombres de basilisco se pueden pronunciar con cara seria.'
      },
      {
        q: '¿Puedo usar estos nombres en obras comerciales?',
        a: 'Sí, las combinaciones son genéricas inspiradas en raíces clásicas y dominio público. Solo evitá nombres específicos como "Errour" (Spenser) o referencias directas a obras protegidas. Las mecánicas del basilisco mismo son folklore antiguo sin restricciones.'
      }
    ]
  },
  en: {
    pageTitle: 'Basilisk Name Generator | Genfy',
    metaDesc: 'Create venomous basilisk, legendary serpent and petrifying gaze creature names. For D&D, Pathfinder, dark fantasy novels and roleplay campaigns.',
    h1: 'Basilisk Name Generator',
    intro: 'Forge lethal identities for serpent kings, gaze-killing creatures and beasts of cursed swamps. Inspired by classical mythology and dark fantasy.',
    tag: 'Fantasy names',
    filterLabel: 'Name structure',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Serpentine name',
        items: [
          'Sssarra', 'Vyrexis', 'Naasura', 'Ophidian', 'Sarpheth', 'Vexthul', 'Drakhol', 'Nagaroth', 'Sazzira', 'Hyssith',
          'Vesanyr', 'Ysshak', 'Pythara', 'Sirexis', 'Velnoth', 'Asyrra', 'Krexalith', 'Xuvath', 'Nessavar', 'Drussk',
          'Vethrax', 'Ophyron', 'Saalvex', 'Ysmaris', 'Vorthak', 'Khaldris', 'Sephroth', 'Zalvyx', 'Nyxara', 'Verroth',
          'Skessa', 'Vorpex', 'Nethrak', 'Yssuara', 'Halxur', 'Drevoss', 'Sulvath', 'Vekrathys', 'Ophidra', 'Kszevoth'
        ]
      },
      {
        id: 'epithet',
        label: 'Venomous epithet',
        items: [
          'the Petrifier', 'the Stone Gaze', 'the Venom Breath', 'the Swamp Queen', 'the Kingdom Devourer',
          'the Crawling Shadow', 'the Knight-Slayer', 'the Silver Throat', 'the Eternal Watcher', 'the Mercury Maw',
          'the Lethal Whisper', 'the Iron Tongue', 'the Silent Hunter', 'the Tyrant\'s Curse', 'the Eclipse Eye',
          'the Suffocating Mist', 'the Eagle Devourer', 'the Cobalt Queen', 'the Scaled Ancestor', 'the Forest Thorn',
          'the Mist Conjurer', 'the Mother of Venom', 'the Cathedral Executioner', 'the Silver Bleeder', 'the Lidless One',
          'the Two-Tongued Voice', 'the Sulfur Lung', 'the Spiral of Oblivion', 'the Sun Swallower', 'the Green Breeze',
          'the Forest Lulling One', 'the Faceless Queen', 'the Triple-Fang', 'the Crowned Cobra', 'the Pit King',
          'the Killing Gaze', 'the Emerald Ring', 'the Silver Ripple', 'the Relic Watcher', 'the Temple Shadow'
        ]
      },
      {
        id: 'lair',
        label: 'Lair or realm',
        items: [
          'of the Vexalor Swamp', 'of the Emerald Cavern', 'of the Ruined Temple', 'of the Sunless Forest',
          'of the Fallen Cathedral', 'of the Black Pit of Dyrenia', 'of the Forgotten Marshlands', 'of the Valley of Bones',
          'of the Lizard King\'s Crypt', 'of the Green Lake', 'of the Velnoria Range', 'of the Green Echo Cavern',
          'of the Venom Moor', 'of the Bronze Tomb', 'of the Petrified Forest', 'of the Sunken City',
          'of the Hyrax Aqueduct', 'of the Whisper Jungle', 'of the Pit of Oblivion', 'of the Abandoned Mine',
          'of the Sethalor Temple', 'of the Black Coast', 'of the Mercury River', 'of the Kraxis Gorge',
          'of the Green Queen\'s Crypt', 'of the Three-Skull Swamp', 'of the Broken Crystal Cavern', 'of the Ash Forest',
          'of the Executioner\'s Catacomb', 'of the Dead Dragon Refuge', 'of the Sulfur Lake', 'of the Forgotten Land',
          'of the Sunken Temple', 'of the Thorn Cavern', 'of the Pit of Fallen Stars', 'of the Shadow Forest',
          'of Velneth Manor', 'of the Eclipse Moor', 'of the Tyrant\'s Crypt', 'of the Underground Aqueduct'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to build an imposing basilisk name',
        body: '<p>The mythological basilisk isn\'t just "a big snake": it\'s the king of serpents, able to kill with gaze and poison the ground it walks on. Its name should convey that unnatural authority. Good basilisk names use abundance of sibilant consonants (s, ss, sh, x, z) and at least one root suggesting royalty or venom. "Sssarra the Petrifier" works because the three s\'s imitate hissing and "Petrifier" is direct function.</p><p>The <strong>epithet</strong> is where myth gets built. "Sssarra" alone could be any snake. "Sssarra the Kingdom Devourer" already suggests legend and consequences. Epithets can reference iconic victim ("Knight-Slayer"), ability ("Stone Gaze"), habitat ("Swamp Queen") or cultural effect ("Tyrant\'s Curse"). Each tells a different story.</p><p>The <strong>lair</strong> anchors the monster geographically. "Sssarra the Petrifier of the Vexalor Swamp" gives the player or reader narrative information: a specific swamp exists, has its own name, and this horror lives there. That specificity turns generic basilisk into memorable encounter. <em>The Witcher</em> uses this well with each cockatrice and zeugl localized in a concrete map region.</p>'
      },
      {
        h2: 'Basilisks by mythology and game system',
        body: '<p>In <strong>Greco-Roman tradition</strong>, the basilisk is a small serpent killing with breath and gaze. Pliny the Elder describes it finger-sized. <em>Harry Potter</em> enlarges it to colossus, but that\'s fictional license. If your campaign respects classical myth, names should be short and ancient: "Verroth", "Hyssith", "Pythara". If you follow the Hogwarts version, you can enlarge both monster and name with grandiose epithets.</p><p>In <strong>D&D 5e</strong>, the basilisk is monstrosity-type beast CR 3 with petrification ability. Not boss but memorable encounter. For a lone one in a dungeon, name + epithet suffices: "Naasura the Lidless One". For a basilisk nest with matriarch, you can expand: "Sazzira the Mother of Venom of the Vexalor Swamp", with offspring without individual name but collective identity.</p><p>In <strong>Pathfinder</strong> and <em>The Witcher</em>, basilisks vary by region: each has specific behavior and weakness. Geralt faces different basilisks per contract. For long campaigns with several basilisks, distinguish them by epithet and lair. "The one from Velnoria" kills with day-gaze, "the one from the Black Pit" with breath. That mechanical specialization + unique name makes players investigate before each combat.</p>'
      },
      {
        h2: 'Common mistakes when naming basilisks',
        body: '<p>First mistake: <strong>unpronounceable names</strong>. "Vsskrxlrz" has so many consonants even the DM doesn\'t say it the same way twice. Good serpentine names have 2-3 syllables with vowels allowing pronunciation: "Sssarra", "Naasura", "Vexalor". If your player can\'t repeat the monster\'s name, the monster never enters table lexicon.</p><p>Second mistake: <strong>confusing basilisk with dragon</strong>. If your basilisk is called "Drakhonyr the Sky Devourer of the Flying Peak", it\'s not basilisk, it\'s dragon. Basilisks live in swamps, caves and pits. They don\'t fly, don\'t breathe fire (unless cockatrice, which is hybrid). Maintain bestiary coherence: basilisk names should suggest caves, stagnant water, tunnels, not open skies.</p><p>Third mistake: <strong>ignored gender</strong>. In folk traditions, male basilisk hatches from rooster egg incubated by toad, while female is matriarchal naga of swamps. If your campaign distinguishes genders, names can reflect: "the Pit King" for male, "the Swamp Queen" for female. That differentiation enriches internal mythology and allows encounters with full serpentine dynasties.</p>'
      },
      {
        h2: 'Memorable basilisks in literature and games',
        body: '<p>The basilisk in <em>Harry Potter and the Chamber of Secrets</em> is probably the best-known modern pop culture one. It has no proper name (just "the basilisk of Slytherin"), which is interesting narrative decision: the monster is anonymous servant, not protagonist with identity. That choice works for classic gothic horror. For your campaign, you can use generic names if you want to keep the basilisk as impersonal threat.</p><p>In <em>The Witcher 3</em>, Geralt faces a giant cockatrice (common form that in Slavic folklore derived from basilisk) called simply "Royal Wyvern". The video game prefers descriptive names to proper names. Valid style if your world treats these beings as dangerous animals, not characters with biography.</p><p>In classical literature, Spenser\'s <em>The Faerie Queene</em> basilisk has allegorical name ("Errour"). If your campaign carries symbolism, you can use concept-names like "the Venom", "the Gaze", "the Curse" without name+epithet structure. Works for Lovecraft-style philosophical horror where monster is embodied idea, not individual creature. Each style (mythological, descriptive, allegorical) serves different narrative tones.</p>'
      }
    ],
    faq: [
      {
        q: 'What\'s the difference between basilisk and cockatrice?',
        a: 'The cockatrice is rooster-serpent hybrid with wings, originated in medieval European bestiary. The classic basilisk has no wings and is pure serpent. In D&D 5e they\'re separated: basilisk petrifies, cockatrice also but smaller and flies. To name them, differentiate respecting that anatomy.'
      },
      {
        q: 'Do these names work for nagas or humanoid serpents?',
        a: 'Yes, especially names from the "first name" group. Nagas are intelligent humanoid serpents with culture, so they can have elegant serpentine names and formal lair + epithet. Difference is tone: basilisks are beasts, nagas are society. Adjust name weight.'
      },
      {
        q: 'How do I avoid the name sounding like parody?',
        a: 'Limit repeated s\'s to one in the main name (Sssarra, not Sssssssarra). Avoid overacted epithets ("the Mega-Kill-All"). Keep classical mythological tone, not caricature. Good basilisk names can be pronounced with serious face.'
      },
      {
        q: 'Can I use these names in commercial works?',
        a: 'Yes, combinations are generic inspired by classical roots and public domain. Just avoid specific names like "Errour" (Spenser) or direct references to protected works. Basilisk mechanics themselves are ancient folklore without restrictions.'
      }
    ]
  }
};
