import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-mazmorra', en: 'dungeon-name-generator' },
  category: 'fun',
  emoji: '🗝️',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Mazmorra | Genfy',
    metaDesc: 'Creá nombres oscuros de mazmorras, catacumbas y calabozos para juegos de rol, aventuras y dungeon crawlers. Atmósfera siniestra desde el primer nombre.',
    h1: 'Generador de Nombres de Mazmorra',
    intro: 'Bautizá tus dungeons con nombres que prometan peligro: catacumbas para D&D, mazmorras de roguelike, prisiones malditas y templos profanados.',
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
          'Mazmorra', 'Catacumbas', 'Calabozo', 'Cripta', 'Tumba', 'Mausoleo',
          'Templo', 'Santuario', 'Ruinas', 'Foso', 'Cárcel', 'Bóveda',
          'Laberinto', 'Cueva', 'Caverna', 'Madriguera', 'Guarida', 'Foso del Dragón',
          'Pozo', 'Abismo', 'Sima', 'Sumidero', 'Pasaje', 'Corredor',
          'Salas', 'Cámaras', 'Galerías', 'Túneles', 'Profundidades', 'Sótano',
          'Subterráneo', 'Bunker', 'Refugio', 'Fortaleza', 'Castillo', 'Torre',
          'Ciudadela', 'Bastión', 'Atalaya', 'Monasterio'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'del Hambre', 'de los Huesos', 'de las Lágrimas', 'de los Suspiros', 'del Olvido', 'de la Sed',
          'del Rey Caído', 'de la Reina Muerta', 'del Profeta Loco', 'del Sumo Sacerdote', 'del Verdugo', 'del Carcelero',
          'del Lich', 'del Necromante', 'del Demonio', 'del Vampiro', 'del Hombre Lobo', 'del Espectro',
          'del Velo', 'del Susurro', 'del Eco Final', 'del Último Suspiro', 'del Lamento', 'del Aullido',
          'de las Mil Puertas', 'de las Cien Trampas', 'del Único Pasaje', 'del Sin Salida',
          'del Hechizo Roto', 'del Pacto Sangriento', 'del Juramento Quebrado', 'de la Promesa Vacía',
          'de los Niños Perdidos', 'de los Soldados sin Tumba', 'de los Mártires Olvidados',
          'del Tesoro Maldito', 'del Cofre Vacío', 'del Trono Vacío', 'de la Corona Hundida',
          'sin Nombre', 'sin Mapa'
        ]
      },
      {
        id: 'modifier',
        label: 'Modificador',
        items: [
          'Negra', 'Blanca', 'Roja', 'Húmeda', 'Seca', 'Helada',
          'Ardiente', 'Profunda', 'Superficial', 'Antigua', 'Reciente', 'Sagrada',
          'Maldita', 'Bendita', 'Olvidada', 'Recordada', 'Perdida', 'Encontrada',
          'Sellada', 'Abierta', 'Inundada', 'Desecada', 'Quemada', 'Congelada',
          'Maldita por Tres Reyes', 'Construida en una Sola Noche', 'Tallada por Esclavos',
          'Excavada por Demonios', 'Bendecida por un Dios Olvidado', 'Custodiada por Almas',
          'Purificada y Profanada', 'Habitada por Sombras', 'Vigilada por Estatuas Vivientes',
          'Sin Sombra Visible', 'Donde el Tiempo se Detiene', 'Donde Resuenan Pasos sin Cuerpo',
          'Construida sobre un Crimen', 'Erigida sobre un Pacto', 'Reclamada por la Tierra',
          'Devuelta al Polvo'
        ]
      },
      {
        id: 'feature',
        label: 'Característica',
        items: [
          'donde nadie vuelve', 'donde el aire envenena', 'donde no entra la luz', 'donde el silencio mata',
          'que crece cada noche', 'que se reorganiza', 'que cambia de forma', 'que respira',
          'al pie de la montaña', 'bajo la ciudad', 'tras el muro caído', 'dentro del bosque viejo',
          'sin salida visible', 'con tres entradas falsas', 'con un solo guardián vivo', 'con cien puertas selladas',
          'cuyas paredes susurran', 'cuyo eco precede a las palabras', 'cuyo polvo recuerda nombres',
          'donde duermen los herejes', 'donde se ocultan los exiliados', 'donde resucitan los muertos',
          'donde se firmó el pacto', 'donde cayó el último rey', 'donde comenzó la peste',
          'que la guerra olvidó', 'que el mapa nunca registró', 'que solo se abre en luna nueva',
          'que requiere sangre para entrar', 'que cobra una vida por noche', 'que devora memoria',
          'sin guardianes visibles', 'sin trampas activas', 'con tesoro real',
          'sin tesoro alguno', 'con un solo prisionero vivo', 'con un solo cadáver intacto',
          'patrullada por niños fantasma', 'habitada por monjes que ya no rezan',
          'donde resuenan campanas sin badajo', 'donde arden velas sin mecha'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo nombrar mazmorras con atmósfera inmediata',
        body: '<p>El nombre de una mazmorra es la primera trampa: si suena demasiado neutro, los jugadores no sienten urgencia. <em>Cripta del Sumo Sacerdote</em> es decente; <em>Cripta del Sumo Sacerdote donde el silencio mata</em> es invitación a tomar nota. La fórmula que funciona suma <strong>tipo arquitectónico</strong> (Cripta, Mazmorra, Bóveda), <strong>descriptor narrativo</strong> (del Rey Caído, del Pacto Sangriento) y <strong>característica perturbadora</strong> (donde el aire envenena, que respira).</p><p>Los grandes módulos de D&D demuestran esto. <em>The Tomb of Horrors</em>, <em>Castle Ravenloft</em>, <em>The Forge of Fury</em>: nombres que prometen amenaza específica antes de cualquier descripción. Cuando bautices tu dungeon, preguntate qué emoción debe disparar: miedo, codicia, curiosidad, repulsión. El nombre debe alinearse con esa emoción y reforzarla.</p><p>Para campañas largas, evitá repetir estructuras. Si todas tus mazmorras se llaman <em>Mazmorra del [Algo] Maldito</em>, los jugadores se hastían. Mezclá: <em>Catacumbas de los Niños Perdidos</em>, <em>Bóveda Sellada del Profeta Mudo</em>, <em>Pozo donde el Tiempo se Detiene</em>. Cada una promete experiencia distinta y los jugadores anticipan variedad de mecánicas.</p>'
      },
      {
        h2: 'Aplicaciones para D&D, roguelikes y videojuegos',
        body: '<p>En D&D y Pathfinder, el nombre de la mazmorra debe encajar con el tono de campaña. Si tu campaña es <em>Tomb of Annihilation</em>, los nombres son densos y mortales (<em>Atropos\' Forge</em>, <em>Fane of the Night Serpent</em>). Si es <em>Strixhaven</em>, los nombres son académicos y burocráticos (<em>The Restricted Section</em>). Adaptá léxico al género: gótico, postapocalíptico, de fantasía clásica, de horror cósmico.</p><p>En roguelikes tipo <em>Hades</em>, <em>Dead Cells</em> o <em>Slay the Spire</em>, los nombres tienen que comunicar progresión. <em>Tartarus</em>, <em>Asphodel</em>, <em>Elysium</em>, <em>Styx</em>: cuatro niveles con nombres que ascienden mitológicamente. Cuando diseñes tu propio dungeon crawler, definí 4-7 zonas con nombres que comuniquen profundidad creciente: <em>Las Catacumbas Externas</em>, <em>El Foso del Verdugo</em>, <em>Las Cámaras Selladas</em>, <em>El Trono Vacío</em>.</p><p>En videojuegos open-world tipo <em>Skyrim</em> o <em>Elden Ring</em>, las mazmorras se autopromueven con sus nombres en el mapa. Los jugadores priorizan visitar <em>Tumba de Caelid</em> antes que <em>Cueva 7B</em>. Si tu juego tiene 50+ dungeons, invertí en variedad de nombres: el jugador casual elige basándose en qué nombre suena más interesante esa noche.</p>'
      },
      {
        h2: 'Errores comunes al inventar mazmorras',
        body: '<p>Primer error: nombres genéricos hostiles. <em>Cueva del Demonio</em>, <em>Mazmorra del Mal</em>, <em>Templo Maldito</em> son comodín. No comunican qué tipo de demonio, qué clase de mal, qué especificidad de maldición. Los jugadores no recuerdan cinco mazmorras así porque son intercambiables.</p><p>Segundo error: nombres demasiado largos para usar en mesa. <em>La Mazmorra del Sumo Sacerdote del Templo Caído del Antiguo Imperio del Norte Profundo</em> es imposible de pronunciar fluido. Los jugadores la abreviarán a <em>la Mazmorra del Sumo Sacerdote</em> y los detalles extra se pierden. Diseñá nombres con versión corta natural ya integrada.</p><p>Tercer error: nombres que mienten sobre el contenido. Si tu <em>Tumba de los Niños Perdidos</em> termina siendo arena de combate sin connotación emocional, traicionás expectativas. El nombre debe ser promesa cumplible. Si los niños no aparecen, replanteá nombre o contenido. Las mejores mazmorras son aquellas donde el descubrimiento del por qué del nombre es parte del clímax narrativo: <em>"finalmente entendemos por qué se llama así"</em> es momento dorado.</p>'
      },
      {
        h2: 'Construir historia detrás de cada mazmorra',
        body: '<p>Una mazmorra sin historia es solo arquitectura. Para cada dungeon, escribí 3-5 líneas que contesten: ¿quién la construyó? ¿quién la usa ahora? ¿qué evento la convirtió en peligrosa? <em>Cripta del Rey Caído</em> puede haber sido tumba real hasta que el rey, hace 200 años, fue traicionado y enterrado vivo; ahora su fantasma corrompe a quien entra. Esa narrativa transforma encuentros aleatorios en momentos significativos.</p><p>Las pistas físicas refuerzan el lore. Si la mazmorra se llama <em>Templo del Pacto Sangriento</em>, los jugadores deberían encontrar tablas con runas de sangre antiguas, altares con manchas oxidadas, esqueletos con la postura de quienes murieron en ritual. El nombre y los detalles ambientales se refuerzan mutuamente, construyendo coherencia que los jugadores absorben sin que el DM tenga que explicar.</p><p>Conectá tus mazmorras entre sí. Si <em>Cripta del Profeta Mudo</em> y <em>Bóveda del Sumo Sacerdote</em> aparecen en la misma campaña, los jugadores investigan si están relacionadas: ¿el sacerdote silenció al profeta? ¿el profeta predijo la corrupción del sacerdote? Esa interconexión transforma encuentros separados en saga unificada y los jugadores construyen teorías que enriquecen la mesa entera.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántas mazmorras debe tener una campaña típica?',
        a: 'Una campaña de D&D estándar (1-15 niveles) suele incluir 8-15 mazmorras significativas. Para sandbox tipo <em>Out of the Abyss</em>, generá 25-40. Para módulos cortos, 3-5 alcanzan. Documentá cada una con nombre, lore en una página y mapa básico antes de empezar.'
      },
      {
        q: '¿Conviene usar nombres en otros idiomas para las mazmorras?',
        a: 'Para sabor exótico sí, pero con traducción accesible. <em>Karak-Vârn</em> con subtítulo <em>(la Tumba del Cuervo)</em> da identidad propia sin perder al jugador. Si toda tu mazmorra usa idioma inventado, los jugadores la abreviarán incoherentemente. Equilibrá foreign con accesible.'
      },
      {
        q: '¿Cómo varío atmósfera entre mazmorras del mismo nivel?',
        a: 'Cambiando el sentido predominante: una mazmorra de tacto (humedad, viento frío), otra de oído (ecos, silencios anormales), otra de vista (oscuridad total, luces fantasmagóricas), otra de olfato (podredumbre, incienso). Los jugadores recuerdan mazmorras por su sensación dominante mucho más que por sus enemigos.'
      },
      {
        q: '¿Sirven estos nombres para mazmorras humorísticas o solo para serias?',
        a: 'Para humorísticas adaptá tono: <em>La Mazmorra del Burro Encantado</em>, <em>Catacumbas del Que Olvidó las Llaves</em>. La estructura es igual (tipo + descriptor + característica) pero el contenido se vuelve absurdo. Pratchett y D&D 5e lo hacen bien: nombres que prometen comedia desde el primer momento.'
      }
    ]
  },
  en: {
    pageTitle: 'Dungeon Name Generator | Genfy',
    metaDesc: 'Create dark dungeon, catacomb and prison names for role-playing games, adventures and dungeon crawlers. Sinister atmosphere from the first name.',
    h1: 'Dungeon Name Generator',
    intro: 'Christen your dungeons with names that promise danger: catacombs for D&D, roguelike dungeons, cursed prisons and desecrated temples.',
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
          'Dungeon', 'Catacombs', 'Prison', 'Crypt', 'Tomb', 'Mausoleum',
          'Temple', 'Sanctuary', 'Ruins', 'Pit', 'Jail', 'Vault',
          'Labyrinth', 'Cave', 'Cavern', 'Burrow', 'Lair', 'Dragon\'s Den',
          'Well', 'Abyss', 'Chasm', 'Sinkhole', 'Passage', 'Corridor',
          'Halls', 'Chambers', 'Galleries', 'Tunnels', 'Depths', 'Cellar',
          'Underground', 'Bunker', 'Refuge', 'Fortress', 'Castle', 'Tower',
          'Citadel', 'Bastion', 'Watchtower', 'Monastery'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'of Hunger', 'of Bones', 'of Tears', 'of Sighs', 'of Oblivion', 'of Thirst',
          'of the Fallen King', 'of the Dead Queen', 'of the Mad Prophet', 'of the High Priest', 'of the Executioner', 'of the Jailer',
          'of the Lich', 'of the Necromancer', 'of the Demon', 'of the Vampire', 'of the Werewolf', 'of the Specter',
          'of the Veil', 'of the Whisper', 'of the Final Echo', 'of the Last Breath', 'of Lament', 'of the Howl',
          'of the Thousand Doors', 'of the Hundred Traps', 'of the Single Passage', 'of No Exit',
          'of the Broken Spell', 'of the Blood Pact', 'of the Broken Oath', 'of the Empty Promise',
          'of the Lost Children', 'of the Soldiers Without Graves', 'of the Forgotten Martyrs',
          'of the Cursed Treasure', 'of the Empty Chest', 'of the Empty Throne', 'of the Sunken Crown',
          'Without Name', 'Without Map'
        ]
      },
      {
        id: 'modifier',
        label: 'Modifier',
        items: [
          'Black', 'White', 'Red', 'Wet', 'Dry', 'Frozen',
          'Burning', 'Deep', 'Shallow', 'Ancient', 'Recent', 'Sacred',
          'Cursed', 'Blessed', 'Forgotten', 'Remembered', 'Lost', 'Found',
          'Sealed', 'Open', 'Flooded', 'Desiccated', 'Burned', 'Frozen Solid',
          'Cursed by Three Kings', 'Built in One Night', 'Carved by Slaves',
          'Excavated by Demons', 'Blessed by a Forgotten God', 'Guarded by Souls',
          'Purified and Profaned', 'Inhabited by Shadows', 'Watched by Living Statues',
          'Without Visible Shadow', 'Where Time Stops', 'Where Bodiless Footsteps Echo',
          'Built Upon a Crime', 'Erected Upon a Pact', 'Reclaimed by the Earth',
          'Returned to Dust'
        ]
      },
      {
        id: 'feature',
        label: 'Feature',
        items: [
          'where none return', 'where air poisons', 'where light cannot enter', 'where silence kills',
          'that grows each night', 'that reorganizes', 'that changes shape', 'that breathes',
          'at the foot of the mountain', 'beneath the city', 'past the fallen wall', 'inside the old forest',
          'with no visible exit', 'with three false entrances', 'with one living guardian', 'with a hundred sealed doors',
          'whose walls whisper', 'whose echo precedes words', 'whose dust remembers names',
          'where heretics sleep', 'where exiles hide', 'where the dead resurrect',
          'where the pact was signed', 'where the last king fell', 'where the plague began',
          'forgotten by war', 'never recorded by maps', 'opening only on new moon',
          'requiring blood to enter', 'claiming one life per night', 'devouring memory',
          'without visible guardians', 'without active traps', 'with real treasure',
          'with no treasure', 'with one living prisoner', 'with one intact corpse',
          'patrolled by ghost children', 'inhabited by monks who no longer pray',
          'where bells ring without clappers', 'where candles burn without wicks'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to name dungeons with immediate atmosphere',
        body: '<p>A dungeon\'s name is the first trap: if it sounds too neutral, players feel no urgency. <em>Crypt of the High Priest</em> is decent; <em>Crypt of the High Priest where silence kills</em> is an invitation to take notes. The working formula combines <strong>architectural type</strong> (Crypt, Dungeon, Vault), <strong>narrative descriptor</strong> (of the Fallen King, of the Blood Pact) and <strong>disturbing feature</strong> (where air poisons, that breathes).</p><p>Great D&D modules prove this. <em>The Tomb of Horrors</em>, <em>Castle Ravenloft</em>, <em>The Forge of Fury</em>: names promising specific threat before any description. When you christen your dungeon, ask what emotion it should trigger: fear, greed, curiosity, revulsion. The name should align with that emotion and reinforce it.</p><p>For long campaigns, avoid repeating structures. If all your dungeons are called <em>Dungeon of the Cursed [Something]</em>, players grow weary. Mix: <em>Catacombs of the Lost Children</em>, <em>Sealed Vault of the Mute Prophet</em>, <em>Pit Where Time Stops</em>. Each promises distinct experience and players anticipate mechanical variety.</p>'
      },
      {
        h2: 'Applications for D&D, roguelikes and video games',
        body: '<p>In D&D and Pathfinder, the dungeon name should fit campaign tone. If your campaign is <em>Tomb of Annihilation</em>, names are dense and deadly (<em>Atropos\' Forge</em>, <em>Fane of the Night Serpent</em>). If it\'s <em>Strixhaven</em>, names are academic and bureaucratic (<em>The Restricted Section</em>). Adapt vocabulary to genre: gothic, post-apocalyptic, classic fantasy, cosmic horror.</p><p>In roguelikes like <em>Hades</em>, <em>Dead Cells</em> or <em>Slay the Spire</em>, names must communicate progression. <em>Tartarus</em>, <em>Asphodel</em>, <em>Elysium</em>, <em>Styx</em>: four levels with mythologically ascending names. When designing your own dungeon crawler, define 4-7 zones with names communicating increasing depth: <em>The Outer Catacombs</em>, <em>The Executioner\'s Pit</em>, <em>The Sealed Chambers</em>, <em>The Empty Throne</em>.</p><p>In open-world games like <em>Skyrim</em> or <em>Elden Ring</em>, dungeons self-promote with their names on the map. Players prioritize visiting <em>Tomb of Caelid</em> before <em>Cave 7B</em>. If your game has 50+ dungeons, invest in name variety: casual players choose based on which name sounds more interesting that night.</p>'
      },
      {
        h2: 'Common mistakes when inventing dungeons',
        body: '<p>First mistake: generic hostile names. <em>Demon\'s Cave</em>, <em>Evil Dungeon</em>, <em>Cursed Temple</em> are wildcards. They don\'t communicate what kind of demon, what class of evil, what specificity of curse. Players don\'t remember five such dungeons because they\'re interchangeable.</p><p>Second mistake: names too long for table use. <em>The Dungeon of the High Priest of the Fallen Temple of the Ancient Empire of the Deep North</em> is impossible to say fluidly. Players will abbreviate to <em>the High Priest\'s Dungeon</em> and extra details get lost. Design names with natural short version already integrated.</p><p>Third mistake: names that lie about content. If your <em>Tomb of the Lost Children</em> ends up being a combat arena without emotional connotation, you betray expectations. The name must be a fulfillable promise. If children don\'t appear, rethink name or content. The best dungeons are those where discovering the name\'s meaning is part of the narrative climax: <em>"we finally understand why it\'s called that"</em> is a golden moment.</p>'
      },
      {
        h2: 'Building history behind each dungeon',
        body: '<p>A dungeon without history is just architecture. For each dungeon, write 3-5 lines answering: who built it? who uses it now? what event made it dangerous? <em>Crypt of the Fallen King</em> may have been royal tomb until the king, 200 years ago, was betrayed and buried alive; now his ghost corrupts whoever enters. That narrative transforms random encounters into significant moments.</p><p>Physical clues reinforce lore. If the dungeon is called <em>Temple of the Blood Pact</em>, players should find tablets with ancient blood runes, altars with rusty stains, skeletons posed as those who died in ritual. Name and environmental details reinforce each other, building coherence players absorb without DM having to explain.</p><p>Connect your dungeons to each other. If <em>Crypt of the Mute Prophet</em> and <em>Vault of the High Priest</em> appear in the same campaign, players investigate if they\'re related: did the priest silence the prophet? did the prophet predict the priest\'s corruption? That interconnection transforms separate encounters into unified saga and players build theories enriching the entire table.</p>'
      }
    ],
    faq: [
      {
        q: 'How many dungeons should a typical campaign have?',
        a: 'A standard D&D campaign (levels 1-15) usually includes 8-15 significant dungeons. For sandbox like <em>Out of the Abyss</em>, generate 25-40. For short modules, 3-5 is enough. Document each with name, one-page lore and basic map before starting.'
      },
      {
        q: 'Should I use foreign-language names for dungeons?',
        a: 'For exotic flavor yes, but with accessible translation. <em>Karak-Vârn</em> with subtitle <em>(the Raven\'s Tomb)</em> gives identity without losing players. If your entire dungeon uses invented language, players will abbreviate inconsistently. Balance foreign with accessible.'
      },
      {
        q: 'How do I vary atmosphere between same-level dungeons?',
        a: 'Change the predominant sense: one dungeon of touch (dampness, cold wind), another of hearing (echoes, abnormal silences), another of sight (total darkness, ghostly lights), another of smell (rot, incense). Players remember dungeons by their dominant sensation much more than by their enemies.'
      },
      {
        q: 'Do these names work for humorous dungeons or only serious ones?',
        a: 'For humorous adapt tone: <em>The Enchanted Donkey\'s Dungeon</em>, <em>Catacombs of the One Who Forgot the Keys</em>. The structure is the same (type + descriptor + feature) but content turns absurd. Pratchett and D&D 5e do this well: names promising comedy from the first moment.'
      }
    ]
  }
};
