import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-bosque', en: 'forest-name-generator' },
  category: 'fun',
  emoji: '🌲',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Bosque | Genfy',
    metaDesc: 'Generá nombres de bosques, selvas y arboledas para worldbuilding natural, cuentos de hadas y escenarios mágicos. Ambientación verde al instante.',
    h1: 'Generador de Nombres de Bosque',
    intro: 'Diseñá bosques milenarios, arboledas susurrantes y selvas profundas para tus mapas de fantasía, cuentos de hadas y escenarios de aventura.',
    tag: 'Worldbuilding',
    filterLabel: 'Estilo',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'type',
        label: 'Tipo',
        items: [
          'Bosque', 'Selva', 'Arboleda', 'Espesura', 'Fronda', 'Foresta',
          'Soto', 'Robledal', 'Pinar', 'Hayedo', 'Castañar', 'Encinar',
          'Floresta', 'Jungla', 'Manigua', 'Boscaje', 'Maleza', 'Espinar',
          'Bosque Mayor', 'Bosque Menor', 'Selva Profunda', 'Pequeña Arboleda',
          'Cinturón Verde', 'Mar de Hojas', 'Corazón Verde', 'Manto Boscoso',
          'Reino del Verde', 'Dominio de los Árboles', 'Sendero Cubierto', 'Túnel de Ramas',
          'Vega Boscosa', 'Cañada Verde', 'Vergel Antiguo', 'Foresta Eterna',
          'Olivar', 'Almendral', 'Naranjal', 'Sauceda', 'Alameda', 'Mimbreral'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'del Susurro', 'del Eco', 'del Silencio', 'del Aullido', 'del Canto', 'del Lamento',
          'del Olvido', 'del Recuerdo', 'del Sueño', 'de la Pesadilla', 'de la Niebla', 'de la Bruma',
          'del Lobo', 'del Cuervo', 'del Ciervo', 'del Oso', 'del Búho', 'del Zorro',
          'de las Hadas', 'de los Duendes', 'de los Espíritus', 'de los Antiguos', 'de los Druidas', 'de las Brujas',
          'del Rey Verde', 'de la Reina Salvaje', 'del Profeta Ermitaño', 'del Sabio Solitario',
          'del Pacto Roto', 'del Juramento Antiguo', 'de la Promesa Cumplida',
          'de los Nombres Olvidados', 'de las Sombras Largas', 'de las Raíces Profundas',
          'del Sol Fragmentado', 'de la Luna Verde', 'del Alba Eterna', 'del Ocaso Detenido',
          'sin Senderos', 'sin Pájaros'
        ]
      },
      {
        id: 'modifier',
        label: 'Modificador',
        items: [
          'Eterno', 'Antiguo', 'Joven', 'Caído', 'Renacido', 'Floreciente',
          'Marchito', 'Espeso', 'Ralo', 'Profundo', 'Superficial', 'Iluminado',
          'Oscuro', 'Velado', 'Revelado', 'Sagrado', 'Maldito', 'Bendito',
          'Olvidado', 'Recordado', 'Salvaje', 'Domesticado', 'Encantado', 'Real',
          'Encantado por Tres Hadas', 'Plantado por un Solo Druida', 'Crecido sobre un Cementerio',
          'Custodiado por Lobos Blancos', 'Habitado por Ciervos Albinos', 'Patrullado por Cuervos',
          'Sin Pájaros desde la Maldición', 'Donde el Tiempo se Hace Lento', 'Donde el Mapa se Borra',
          'Que Susurra al Viajero', 'Que Cierra Senderos', 'Que Cambia de Forma',
          'Donde Florece la Lluvia', 'Donde Cae Nieve en Verano', 'Donde el Sol no Llega'
        ]
      },
      {
        id: 'feature',
        label: 'Característica',
        items: [
          'al borde del río', 'al pie de la montaña', 'sobre el valle perdido', 'tras el muro caído',
          'que rodea la aldea', 'que separa los reinos', 'que esconde el templo', 'que custodia el lago',
          'donde nadie se pierde', 'donde nadie regresa', 'donde el tiempo se detiene', 'donde el mapa miente',
          'con tres senderos abiertos', 'con un solo sendero visible', 'sin senderos marcados',
          'cuyas hojas cantan', 'cuyas raíces hablan', 'cuyas sombras se mueven solas',
          'donde habitan ermitaños', 'donde duermen druidas', 'donde meditan monjes',
          'donde cazan elfos', 'donde recolectan brujas', 'donde se ocultan exiliados',
          'donde nace el río principal', 'donde mueren los caminos', 'donde converge la magia',
          'sembrado por gigantes antiguos', 'plantado por una reina caída', 'crecido sobre cenizas',
          'tras la frontera olvidada', 'al norte del mapa conocido', 'al sur del último imperio',
          'visible solo bajo la luna llena', 'invisible a quien no cree', 'que solo aparece en otoño',
          'donde florecen flores que no existen', 'donde caen frutos imposibles', 'donde llueve hacia arriba',
          'sin estaciones marcadas', 'donde el viento cuenta historias'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo nombrar bosques con peso narrativo',
        body: '<p>Los bosques en la imaginación humana son mucho más que árboles agrupados: son umbrales hacia lo desconocido. <em>Mirkwood</em> en Tolkien, <em>El Bosque Prohibido</em> en Harry Potter, <em>la Selva Negra</em> de los hermanos Grimm: cada nombre promete misterio. Cuando bautices tu bosque, asegurate de que el nombre sugiera qué tipo de experiencia espera al viajero que se atreve a entrar.</p><p>La fórmula que rinde combina <strong>tipo botánico</strong> (Bosque, Selva, Arboleda) con <strong>descriptor narrativo</strong> (del Lobo, de las Hadas, del Rey Verde) y <strong>modificador emocional</strong> (Eterno, Maldito, Sin Pájaros). <em>Bosque del Rey Verde Sin Pájaros</em> ya carga atmósfera: hay realeza ausente, ausencia animal sospechosa, magia en juego. Esa densidad simbólica es invaluable.</p><p>Los bosques reales también tienen nombres con historia. <em>Sherwood</em> es bosque de Robin Hood; <em>Black Forest</em> alude a la oscuridad de su densidad; <em>Selva del Daintree</em> en Australia conserva nombres aborígenes. Tu fantasía gana profundidad si los nombres de tus bosques reflejan capas históricas: el nombre antiguo (élfico, druídico) y el nombre moderno (humano simplificado) pueden coexistir en mapas y diálogos.</p>'
      },
      {
        h2: 'Aplicaciones para fantasía, cuentos y rol',
        body: '<p>En cuentos de hadas tradicionales, el bosque es escenario de transformación. Caperucita atraviesa <em>el Bosque del Lobo</em>; Hansel y Gretel se pierden en <em>la Foresta de la Bruja</em>. Cuando escribas cuento moderno, mantené esa lógica simbólica: el bosque es donde tu protagonista se enfrenta a sí mismo. <em>El Bosque del Susurro</em> es ideal para personajes que deben oír verdades incómodas; <em>la Selva del Olvido</em>, para quienes huyen del pasado.</p><p>En campañas de D&D y Pathfinder, los bosques son hubs de aventura. Los druidas viven en <em>la Arboleda del Pacto Antiguo</em>; los elfos custodian <em>el Bosque Eterno</em>; los hombres lobo cazan en <em>el Boscaje del Aullido</em>. Generá 4-6 bosques con nombres y temáticas distintas, y dispersalos en el mapa para que los jugadores vivan experiencias variadas según qué frontera atraviesen.</p><p>En fantasía épica tipo <em>Wheel of Time</em> o <em>Stormlight</em>, los bosques pueden ser personajes activos. <em>El Mar de Hojas que Cambia de Forma</em> no es escenario pasivo: reacciona al viajero, oculta caminos, revela atajos a quien lo respeta. Esa agencia narrativa transforma geografía en aliada o antagonista. <em>The Old Forest</em> de Tolkien anticipa esta tradición: los árboles odian a los humanos por talas pasadas.</p>'
      },
      {
        h2: 'Errores comunes al inventar nombres de bosques',
        body: '<p>Primer error: nombres demasiado obvios. <em>Bosque Verde</em>, <em>Selva Tropical</em>, <em>Arboleda Bonita</em> son etiquetas, no nombres. Los bosques memorables tienen carga simbólica que sus nombres promueven. <em>Bosque del Rey Verde</em> implica realeza ausente; <em>Selva sin Pájaros desde la Maldición</em> implica historia oscura. Cada nombre debe sembrar pregunta.</p><p>Segundo error: redundancia botánica. <em>Bosque Boscoso de los Árboles</em> es mal chiste involuntario. Elegí UN tipo (Bosque, Selva, Robledal) y enriquecé con descriptor narrativo. Los bosques reales no se llaman <em>Forest of Trees</em>; se llaman <em>Sherwood</em>, <em>Black Forest</em>, <em>Daintree</em>. Tu fantasía merece la misma economía.</p><p>Tercer error: nombres sin diferenciación entre bosques del mismo mapa. Si tu mundo tiene <em>Bosque Oscuro</em>, <em>Bosque Sombrío</em>, <em>Foresta Tenebrosa</em>, los lectores los confunden. Mezclá tonos: algunos bosques son siniestros, otros sagrados, otros mundanos pero peligrosos por bandidos, otros mágicos pero benignos. La variedad permite que cada bosque cumpla función distinta y sea memorable por su contraste con los demás.</p>'
      },
      {
        h2: 'Construir ecosistema y cultura alrededor del bosque',
        body: '<p>Un bosque no es solo árboles: es ecosistema con habitantes humanos y no-humanos. Para cada bosque relevante, definí: ¿qué especies dominan (robles antiguos, pinos espesos, sauces llorones)? ¿qué fauna es típica (ciervos albinos, lobos negros, búhos parlantes)? ¿qué pueblo humano vive cerca y qué relación tienen con el bosque? <em>Bosque del Rey Verde</em> tiene aldeas alrededor que evitan entrar después del atardecer; los chicos crecen escuchando que el rey aún camina entre los árboles.</p><p>Las leyendas locales construyen profundidad. Un bosque ficticio gana realismo si los habitantes humanos cercanos tienen folclore desarrollado: refranes, prohibiciones, festivales. <em>Nadie corta roble del Bosque del Rey Verde</em> porque la última vez que pasó, la aldea desapareció en una noche. Esos micro-relatos transforman geografía en territorio cultural vivo.</p><p>Los bosques también marcan transiciones políticas. Si tu reino del norte está separado del sur por <em>la Selva del Pacto Roto</em>, los habitantes de cada lado nunca se cruzan, los idiomas evolucionan separados, los gobiernos no firman tratados allí. La frontera arbórea es más impermeable que la montañosa porque promete pérdida segura. Tolkien usó esto con <em>Mirkwood</em> separando reinos élficos del norte: el bosque define identidad y aislamiento.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántos bosques debe tener un mapa de fantasía?',
        a: 'Para una novela enfocada, 2-4 bosques con identidad fuerte alcanzan. Para campañas largas o sagas, 6-10 con relaciones claras (qué bosque limita con qué reino, qué pueblo lo cruza). Más de 12 bosques se vuelven indistinguibles para lectores sin atlas dedicado.'
      },
      {
        q: '¿Conviene usar nombres en otros idiomas para bosques?',
        a: 'Sí, especialmente para sabor exótico o histórico. <em>Mirkwood</em> es palabra inglesa antigua para "bosque oscuro"; tu bosque puede llamarse en idioma élfico inventado con traducción dada al lector la primera vez. Esa práctica imita el realismo de Tolkien sin agotar al lector con vocabulario constante.'
      },
      {
        q: '¿Cómo hago que mis bosques se distingan entre sí narrativamente?',
        a: 'Asignales sentido dominante distinto: un bosque de oído (susurros, ecos, silencios), otro de vista (luz fragmentada, sombras móviles), otro de olfato (aromas dulces, podredumbre, incienso vegetal), otro de tacto (frío persistente, humedad, viento que corta). Los lectores recuerdan bosques por sensación dominante.'
      },
      {
        q: '¿Funcionan estos nombres para escenarios postapocalípticos?',
        a: 'Sí, especialmente para mostrar reclamo de la naturaleza. <em>El Bosque que Tragó la Ciudad</em>, <em>la Selva Sobre las Ruinas</em>, <em>la Arboleda donde Estuvo el Hospital</em> evocan poderosamente la victoria vegetal sobre civilización caída. Annihilation y The Last of Us usan esa imaginería con efectividad.'
      }
    ]
  },
  en: {
    pageTitle: 'Forest Name Generator | Genfy',
    metaDesc: 'Generate forest, jungle and grove names for natural worldbuilding, fairy tales and magical scenarios. Green ambiance instantly.',
    h1: 'Forest Name Generator',
    intro: 'Design ancient forests, whispering groves and deep jungles for your fantasy maps, fairy tales and adventure scenarios.',
    tag: 'Worldbuilding',
    filterLabel: 'Style',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'type',
        label: 'Type',
        items: [
          'Forest', 'Jungle', 'Grove', 'Thicket', 'Frondage', 'Wood',
          'Copse', 'Oakwood', 'Pinewood', 'Beechwood', 'Chestnut Wood', 'Holm Wood',
          'Forestry', 'Bushland', 'Woodland', 'Brake', 'Brush', 'Brambles',
          'Greater Forest', 'Lesser Forest', 'Deep Jungle', 'Little Grove',
          'Green Belt', 'Sea of Leaves', 'Green Heart', 'Forest Mantle',
          'Realm of Green', 'Domain of Trees', 'Covered Path', 'Tunnel of Branches',
          'Wooded Vale', 'Green Glen', 'Ancient Orchard', 'Eternal Forest',
          'Olive Grove', 'Almond Grove', 'Orange Grove', 'Willowery', 'Aspen Grove', 'Wickerwood'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'of the Whisper', 'of the Echo', 'of the Silence', 'of the Howl', 'of the Song', 'of the Lament',
          'of Oblivion', 'of Memory', 'of the Dream', 'of the Nightmare', 'of the Mist', 'of the Haze',
          'of the Wolf', 'of the Raven', 'of the Stag', 'of the Bear', 'of the Owl', 'of the Fox',
          'of the Fae', 'of the Goblins', 'of the Spirits', 'of the Ancients', 'of the Druids', 'of the Witches',
          'of the Green King', 'of the Wild Queen', 'of the Hermit Prophet', 'of the Lonely Sage',
          'of the Broken Pact', 'of the Ancient Oath', 'of the Kept Promise',
          'of Forgotten Names', 'of Long Shadows', 'of Deep Roots',
          'of the Fragmented Sun', 'of the Green Moon', 'of Eternal Dawn', 'of Stopped Dusk',
          'Pathless', 'Birdless'
        ]
      },
      {
        id: 'modifier',
        label: 'Modifier',
        items: [
          'Eternal', 'Ancient', 'Young', 'Fallen', 'Reborn', 'Blooming',
          'Withered', 'Dense', 'Sparse', 'Deep', 'Shallow', 'Sunlit',
          'Dark', 'Veiled', 'Revealed', 'Sacred', 'Cursed', 'Blessed',
          'Forgotten', 'Remembered', 'Wild', 'Tamed', 'Enchanted', 'Royal',
          'Enchanted by Three Fae', 'Planted by a Single Druid', 'Grown over a Cemetery',
          'Guarded by White Wolves', 'Inhabited by Albino Stags', 'Patrolled by Ravens',
          'Birdless Since the Curse', 'Where Time Slows', 'Where Maps Erase',
          'That Whispers to Travelers', 'That Closes Paths', 'That Changes Shape',
          'Where Rain Blooms', 'Where Snow Falls in Summer', 'Where Sun Never Reaches'
        ]
      },
      {
        id: 'feature',
        label: 'Feature',
        items: [
          'at the river\'s edge', 'at the foot of the mountain', 'over the lost valley', 'past the fallen wall',
          'surrounding the village', 'separating kingdoms', 'hiding the temple', 'guarding the lake',
          'where none get lost', 'where none return', 'where time stops', 'where maps lie',
          'with three open paths', 'with one visible path', 'with no marked paths',
          'whose leaves sing', 'whose roots speak', 'whose shadows move on their own',
          'where hermits dwell', 'where druids sleep', 'where monks meditate',
          'where elves hunt', 'where witches gather', 'where exiles hide',
          'where the main river is born', 'where roads die', 'where magic converges',
          'planted by ancient giants', 'sown by a fallen queen', 'grown over ashes',
          'past the forgotten border', 'north of the known map', 'south of the last empire',
          'visible only under full moon', 'invisible to non-believers', 'appearing only in autumn',
          'where impossible flowers bloom', 'where impossible fruits fall', 'where rain falls upward',
          'with no marked seasons', 'where wind tells stories'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to name forests with narrative weight',
        body: '<p>Forests in human imagination are far more than grouped trees: they\'re thresholds to the unknown. <em>Mirkwood</em> in Tolkien, <em>The Forbidden Forest</em> in Harry Potter, <em>the Black Forest</em> of the Brothers Grimm: each name promises mystery. When you christen your forest, ensure the name suggests what kind of experience awaits the traveler daring to enter.</p><p>The working formula combines <strong>botanical type</strong> (Forest, Jungle, Grove) with <strong>narrative descriptor</strong> (of the Wolf, of the Fae, of the Green King) and <strong>emotional modifier</strong> (Eternal, Cursed, Birdless). <em>Forest of the Green King Birdless</em> already carries atmosphere: there\'s absent royalty, suspicious animal absence, magic at play. That symbolic density is invaluable.</p><p>Real forests also have names with history. <em>Sherwood</em> is Robin Hood\'s forest; <em>Black Forest</em> alludes to the darkness of its density; <em>Daintree Rainforest</em> in Australia preserves Aboriginal names. Your fantasy gains depth if your forest names reflect historical layers: the ancient name (Elvish, Druidic) and the modern name (simplified human) can coexist in maps and dialogues.</p>'
      },
      {
        h2: 'Applications for fantasy, tales and roleplay',
        body: '<p>In traditional fairy tales, the forest is scene of transformation. Little Red Riding Hood crosses <em>the Wolf\'s Forest</em>; Hansel and Gretel get lost in <em>the Witch\'s Forestry</em>. When writing modern tales, maintain that symbolic logic: the forest is where your protagonist confronts themselves. <em>The Whispering Forest</em> is ideal for characters who must hear uncomfortable truths; <em>the Jungle of Oblivion</em>, for those fleeing the past.</p><p>In D&D and Pathfinder campaigns, forests are adventure hubs. Druids live in <em>the Grove of the Ancient Pact</em>; elves guard <em>the Eternal Forest</em>; werewolves hunt in <em>the Howling Wood</em>. Generate 4-6 forests with distinct names and themes, and disperse them on the map so players experience variety according to which border they cross.</p><p>In epic fantasy like <em>Wheel of Time</em> or <em>Stormlight</em>, forests can be active characters. <em>The Sea of Leaves That Changes Shape</em> isn\'t passive scene: it reacts to traveler, hides paths, reveals shortcuts to those who respect it. That narrative agency transforms geography into ally or antagonist. <em>The Old Forest</em> by Tolkien anticipates this tradition: trees hate humans for past loggings.</p>'
      },
      {
        h2: 'Common mistakes when inventing forest names',
        body: '<p>First mistake: overly obvious names. <em>Green Forest</em>, <em>Tropical Jungle</em>, <em>Pretty Grove</em> are labels, not names. Memorable forests carry symbolic weight their names promote. <em>Forest of the Green King</em> implies absent royalty; <em>Birdless Jungle Since the Curse</em> implies dark history. Each name should plant a question.</p><p>Second mistake: botanical redundancy. <em>Forest Forest of the Trees</em> is unintentional bad joke. Pick ONE type (Forest, Jungle, Oakwood) and enrich with narrative descriptor. Real forests aren\'t called <em>Forest of Trees</em>; they\'re <em>Sherwood</em>, <em>Black Forest</em>, <em>Daintree</em>. Your fantasy deserves the same economy.</p><p>Third mistake: names without differentiation between forests in the same map. If your world has <em>Dark Forest</em>, <em>Shadowy Forest</em>, <em>Tenebrous Forestry</em>, readers confuse them. Mix tones: some forests are sinister, others sacred, others mundane but dangerous due to bandits, others magical but benign. Variety lets each forest fulfill different function and be memorable for its contrast with others.</p>'
      },
      {
        h2: 'Building ecosystem and culture around the forest',
        body: '<p>A forest is not just trees: it\'s an ecosystem with human and non-human inhabitants. For each relevant forest, define: what species dominate (ancient oaks, dense pines, weeping willows)? what fauna is typical (albino stags, black wolves, talking owls)? what human village lives nearby and what relationship do they have with the forest? <em>Forest of the Green King</em> has surrounding villages that avoid entering after sunset; children grow up hearing that the king still walks among the trees.</p><p>Local legends build depth. A fictional forest gains realism if nearby human inhabitants have developed folklore: sayings, prohibitions, festivals. <em>No one cuts oak in the Forest of the Green King</em> because last time it happened, the village vanished overnight. Those micro-narratives transform geography into living cultural territory.</p><p>Forests also mark political transitions. If your northern kingdom is separated from south by <em>the Jungle of the Broken Pact</em>, inhabitants on each side never cross, languages evolve separately, governments don\'t sign treaties there. The arboreal border is more impermeable than mountainous because it promises certain loss. Tolkien used this with <em>Mirkwood</em> separating northern Elven realms: the forest defines identity and isolation.</p>'
      }
    ],
    faq: [
      {
        q: 'How many forests should a fantasy map have?',
        a: 'For a focused novel, 2-4 forests with strong identity is enough. For long campaigns or sagas, 6-10 with clear relationships (which forest borders which kingdom, which people cross it). More than 12 forests become indistinguishable for readers without dedicated atlas.'
      },
      {
        q: 'Should I use foreign-language names for forests?',
        a: 'Yes, especially for exotic or historical flavor. <em>Mirkwood</em> is Old English for "dark forest"; your forest can be named in invented Elvish with translation given to the reader the first time. That practice mimics Tolkien\'s realism without exhausting the reader with constant vocabulary.'
      },
      {
        q: 'How do I make my forests narratively distinct from each other?',
        a: 'Assign each a different dominant sense: a forest of hearing (whispers, echoes, silences), another of sight (fragmented light, moving shadows), another of smell (sweet aromas, rot, plant incense), another of touch (persistent cold, humidity, cutting wind). Readers remember forests by dominant sensation.'
      },
      {
        q: 'Do these names work for post-apocalyptic settings?',
        a: 'Yes, especially to show nature\'s reclamation. <em>The Forest That Swallowed the City</em>, <em>the Jungle Over the Ruins</em>, <em>the Grove Where the Hospital Was</em> powerfully evoke vegetable victory over fallen civilization. Annihilation and The Last of Us use that imagery effectively.'
      }
    ]
  }
};
