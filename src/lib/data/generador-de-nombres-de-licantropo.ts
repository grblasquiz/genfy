import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-licantropo', en: 'lycanthrope-name-generator' },
  category: 'fun',
  emoji: '🐺',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Licántropo | Genfy',
    metaDesc: 'Creá nombres de licántropos, hombres lobo y criaturas malditas por la luna. Ideal para novelas de horror, RPG, D&D y campañas de fantasía oscura.',
    h1: 'Generador de Nombres de Licántropo',
    intro: 'Forjá identidades feroces para hombres lobo y criaturas selenitas. Combiná raíz tribal, epíteto lunar y linaje para nombres con peso narrativo.',
    tag: 'Nombres fantásticos',
    filterLabel: 'Estructura del nombre',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Nombre tribal',
        items: [
          'Fenrir', 'Kaelden', 'Vorin', 'Ragnar', 'Skoll', 'Hati', 'Bjorn', 'Garmr', 'Lupos', 'Caedmon',
          'Drev', 'Theros', 'Vargen', 'Amarok', 'Kaelo', 'Brogan', 'Eirik', 'Sven', 'Ulric', 'Loras',
          'Vidar', 'Ranulf', 'Conall', 'Faelan', 'Lykos', 'Greyrock', 'Thorne', 'Hroth', 'Ozren', 'Drakon',
          'Cernos', 'Volk', 'Mordan', 'Kael', 'Rygar', 'Vexar', 'Mireth', 'Hadrik', 'Kaerog', 'Orneth'
        ]
      },
      {
        id: 'epithet',
        label: 'Epíteto lunar',
        items: [
          'Colmillo de Plata', 'Mordedor de Sombras', 'Cazador de Lunas', 'Aullido Sangriento', 'Fauces de Hielo',
          'Garra Negra', 'Devorador de Estrellas', 'Pelaje de Ceniza', 'Lengua de Hierro', 'Ojo de Eclipse',
          'Sangre de Luna', 'Furia Salvaje', 'Cresta de Niebla', 'Corredor de Tumbas', 'Mandíbula de Acero',
          'Pulmón de Tormenta', 'Pata de Hierro', 'Aliento de Cripta', 'Corazón de Roble', 'Pelambre de Carbón',
          'Hueso de Norte', 'Sombra Plateada', 'Cazador Maldito', 'Aullador de Páramos', 'Mancha de Sangre',
          'Cuello de Cicatriz', 'Pelaje Lunar', 'Dentadura Rota', 'Voz de Trueno', 'Garra de Sauce',
          'Pisada Silenciosa', 'Fauces Hambrientas', 'Espalda Quebrada', 'Aullido Triste', 'Vientre Nocturno',
          'Costilla de Hueso', 'Pelaje de Ortiga', 'Mirada de Brasa', 'Saliva de Veneno', 'Hocico de Sangre'
        ]
      },
      {
        id: 'lineage',
        label: 'Linaje o manada',
        items: [
          'de la Manada Negra', 'del Páramo Helado', 'del Bosque Oscuro', 'de la Cordillera Blanca',
          'del Valle de los Aullidos', 'de la Sangre Vieja', 'de los Hijos de Fenris', 'del Pacto Lunar',
          'de la Estirpe Cernuna', 'de la Hermandad del Colmillo', 'del Linaje Carmesí', 'de la Tribu Skarn',
          'del Refugio Ulfric', 'de los Mordidos en Otoño', 'del Aquelarre del Bosque', 'de la Casa Vargheim',
          'de los Errantes del Norte', 'de la Caverna Grimwald', 'del Río de Sangre', 'del Clan Nocturno',
          'de los Hijos del Eclipse', 'de la Marca Lunar', 'del Pacto del Halcón', 'de la Estepa Salvaje',
          'de los Sin Nombre', 'de la Cofradía del Aullido', 'del Bosque de Cuervos', 'de la Estirpe Maldita',
          'del Páramo Vacío', 'de los Sirvientes de Hécate', 'del Linaje Roto', 'de la Casa de Ceniza',
          'de la Manada de Invierno', 'del Pacto Carmesí', 'del Clan de la Hoz', 'de los Lobos Ancianos',
          'del Linaje Plateado', 'de la Hermandad de la Niebla', 'del Bosque Sin Sol', 'de la Tribu del Eco'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo elegir un nombre de licántropo que suene auténtico',
        body: '<p>Un buen nombre de hombre lobo necesita tres capas: nombre humano (que recuerda quién fue antes de la maldición), epíteto bestial (lo que es ahora) y linaje (de dónde viene la sangre). Esa estructura aparece en <em>The Witcher</em>, <em>Werewolf: The Apocalypse</em> y la mayoría de mitologías nórdicas. Si solo usás el nombre humano, el personaje suena a aldeano normal. Si solo usás el epíteto, suena a mascota.</p><p>Las raíces germánicas, eslavas y celtas funcionan mejor que las latinas para licántropos. <strong>Fenrir, Vargen, Ulric, Conall, Skoll</strong> evocan frío, bosque y violencia ancestral. Evitá nombres demasiado modernos como Brad o Kevin a menos que el tono sea cómico tipo <em>Teen Wolf</em>. Para hembras, raíces como <strong>Ylva, Vargara, Lupa, Lyssa</strong> mantienen la fuerza sin caer en feminización forzada.</p><p>Si tu campaña es más urbana, tipo <em>Underworld</em> o <em>Wolf</em> de Jack Nicholson, podés mezclar nombre civil con apellido bestial: "Marcus Greyrock", "Elena Vargheim". El apellido carga el linaje y el nombre conserva humanidad. Esa tensión entre nombre y epíteto es exactamente lo que define al personaje.</p>'
      },
      {
        h2: 'Nombres de licántropo según el sistema de juego',
        body: '<p>En <strong>D&D 5e</strong>, los licántropos son humanoides infectados que mantienen nombre original. Conviene elegir nombre humano contundente y agregar el epíteto solo después de la primera transformación. "Brogan, antes panadero del pueblo, ahora Brogan Colmillo Negro" funciona narrativamente porque marca el antes y después. En <strong>Pathfinder</strong>, las reglas permiten linajes hereditarios, así que el apellido familiar gana peso: los Vargheim son una familia entera de hombres lobo, no un infectado solitario.</p><p>Para <strong>Werewolf: The Apocalypse</strong>, cada Garou tiene tres nombres: el humano, el lupino y el de "deed" (gesta) que se gana con acciones. "Sarah Mitchell / Silberzahn / Mata-Espíritus" cubre las tres identidades. El nombre de gesta cambia con cada hazaña importante, así que un personaje veterano puede tener cinco o seis epítetos acumulados. Es una mecánica narrativa potente que recompensa el roleo.</p><p>En <strong>Vampire: The Masquerade</strong> y crossover con licántropos, los Lupinos suelen tener nombres tribales más cerrados. Get of Fenris usa raíces nórdicas, Black Furies prefiere griego antiguo, Wendigo usa raíces algonquinas. Respetar la tribu da coherencia cultural. Si tu mesa no juega tribus específicas, mezclá libremente pero mantené consistencia interna: una manada con nombres nórdicos no debería tener un Hiroshi Tanaka sin explicación.</p>'
      },
      {
        h2: 'Errores comunes al nombrar hombres lobo',
        body: '<p>El error número uno es <strong>sobreusar "Lobo"</strong>. Lobomorto, Lobosombra, Lobocolmillo... después de tres personajes así, todo suena igual. Mejor usá metáforas indirectas: cazador, corredor, aullador, mordedor. Eso preserva el ADN bestial sin caer en redundancia. <em>The Wolf Among Us</em> resuelve esto llamando al protagonista "Bigby Wolf" una sola vez, después es solo Bigby.</p><p>Otro error: nombres que se pronuncian distinto en inglés y español. "Greyclaw" suena bien en mesa angloparlante pero en mesa hispana se vuelve "grei-clav" y pierde fuerza. Si jugás en español, traducí o usá raíces neutrales. "Garra Gris" funciona en ambos idiomas. <strong>Skoll, Hati, Fenrir</strong> también porque vienen del nórdico antiguo y todos los pronuncian similar.</p><p>Tercer error: apilar epítetos hasta lo absurdo. "Ragnar Colmillo de Plata Devorador de Estrellas Sangre de Luna del Páramo Helado de los Hijos de Fenris" es ilegible. Elegí dos elementos máximo y guardá el resto para cuando el personaje gane gestas en la campaña. Un personaje que empieza con nombre simple y termina con tres epítetos ganados se siente vivido. Uno que empieza apilado se siente forzado.</p>'
      },
      {
        h2: 'Licántropos en la cultura pop: referencias para inspiración',
        body: '<p>Hay tradiciones distintas de hombres lobo según la obra. <em>An American Werewolf in London</em> (1981) muestra al licántropo como víctima trágica que conserva nombre humano (David Kessler) sin epítetos. Esa simpleza funciona en horror moderno donde el monstruo es accidente, no linaje. <em>The Howling</em> (1981) introduce manadas organizadas con apellidos compartidos.</p><p>En literatura, <em>The Last Werewolf</em> de Glen Duncan (Jacob Marlowe) usa nombre completamente humano y nunca epítetos. La bestia es interna, el personaje sigue siendo persona. En cambio, en <em>Bitten</em> de Kelley Armstrong, las manadas tienen jerarquía clara con Alfa, Beta y miembros menores, pero los nombres son todos humanos modernos. Funciona porque el horror viene del contraste entre vida cotidiana y bestia escondida.</p><p>Para campañas de fantasía clásica, mirá <em>The Witcher</em>: los licántropos son maldiciones de víctimas concretas con historia trágica antes de la transformación. El nombre humano es central para la trama porque la cura requiere reconectar al monstruo con su yo anterior. Si tu narrativa va por ese camino, el nombre humano es más importante que el epíteto bestial. Si va por <em>Underworld</em> o <em>Twilight</em>, donde los lobos son raza paralela, el epíteto y linaje pesan más.</p>'
      }
    ],
    faq: [
      {
        q: '¿Estos nombres sirven para personajes femeninos?',
        a: 'Sí, varios funcionan tal cual (Fenrir, Skoll, Hati son míticos sin género estricto). Para versiones explícitamente femeninas usá raíces como Ylva, Vargara, Lupa, Lyssa, Eira o Sigrun y combinalas con los mismos epítetos y linajes.'
      },
      {
        q: '¿Puedo usar estos nombres en novelas comerciales sin problema?',
        a: 'Sí. Los nombres generados son combinaciones genéricas inspiradas en raíces folclóricas (nórdicas, eslavas, celtas) que están en dominio público. Solo evitá nombres específicos de obras protegidas como "Bigby Wolf" o "Remus Lupin".'
      },
      {
        q: '¿Cómo elijo entre estilo nórdico, celta o moderno?',
        a: 'Definí primero el tono: si tu historia es fantasía épica, nórdico (Fenrir, Skoll). Si es folk horror, celta (Conall, Faelan). Si es urban fantasy moderna, mezclá nombre humano contemporáneo con apellido bestial. La consistencia importa más que la pureza cultural.'
      },
      {
        q: '¿Cuántos nombres genero para una campaña entera?',
        a: 'Para una manada protagonista alcanzan 6-8 nombres bien elaborados. Para PNJs secundarios y enemigos, 15-20 más. Si la campaña dura un año, generá 30 y descartá los que no calcen. Tener exceso es mejor que quedarte corto en sesión.'
      }
    ]
  },
  en: {
    pageTitle: 'Lycanthrope Name Generator | Genfy',
    metaDesc: 'Create lycanthrope, werewolf and moon-cursed creature names. Perfect for horror novels, RPG, D&D and dark fantasy campaigns with deep narrative weight.',
    h1: 'Lycanthrope Name Generator',
    intro: 'Forge fierce identities for werewolves and moon-touched creatures. Combine tribal root, lunar epithet and lineage for names with narrative weight.',
    tag: 'Fantasy names',
    filterLabel: 'Name structure',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Tribal name',
        items: [
          'Fenrir', 'Kaelden', 'Vorin', 'Ragnar', 'Skoll', 'Hati', 'Bjorn', 'Garmr', 'Lupos', 'Caedmon',
          'Drev', 'Theros', 'Vargen', 'Amarok', 'Kaelo', 'Brogan', 'Eirik', 'Sven', 'Ulric', 'Loras',
          'Vidar', 'Ranulf', 'Conall', 'Faelan', 'Lykos', 'Greyrock', 'Thorne', 'Hroth', 'Ozren', 'Drakon',
          'Cernos', 'Volk', 'Mordan', 'Kael', 'Rygar', 'Vexar', 'Mireth', 'Hadrik', 'Kaerog', 'Orneth'
        ]
      },
      {
        id: 'epithet',
        label: 'Lunar epithet',
        items: [
          'Silverfang', 'Shadowbiter', 'Moonhunter', 'Bloodhowl', 'Icejaws',
          'Blackclaw', 'Starswallower', 'Ashpelt', 'Irontongue', 'Eclipse-eye',
          'Moonblood', 'Wildfury', 'Mistcrest', 'Tombrunner', 'Steeljaw',
          'Stormlung', 'Ironpaw', 'Cryptbreath', 'Oakheart', 'Coalcoat',
          'Northbone', 'Silvershade', 'Cursedhunter', 'Moorhowler', 'Bloodstain',
          'Scarneck', 'Lunarcoat', 'Brokenfang', 'Thundervoice', 'Willowclaw',
          'Silentstep', 'Hungerjaws', 'Brokenback', 'Sadhowl', 'Nightbelly',
          'Bonerib', 'Nettlecoat', 'Embergaze', 'Venomdrool', 'Bloodsnout'
        ]
      },
      {
        id: 'lineage',
        label: 'Lineage or pack',
        items: [
          'of the Black Pack', 'of the Frozen Moor', 'of the Dark Forest', 'of the White Range',
          'of the Howling Valley', 'of the Old Blood', 'of the Sons of Fenris', 'of the Lunar Pact',
          'of the Cernuna Lineage', 'of the Fang Brotherhood', 'of the Crimson Bloodline', 'of the Skarn Tribe',
          'of the Ulfric Refuge', 'of the Autumn-Bitten', 'of the Forest Coven', 'of House Vargheim',
          'of the Northern Wanderers', 'of the Grimwald Cavern', 'of the Blood River', 'of the Night Clan',
          'of the Eclipse Sons', 'of the Lunar Mark', 'of the Hawk Pact', 'of the Wild Steppe',
          'of the Nameless Ones', 'of the Howl Confraternity', 'of the Raven Forest', 'of the Cursed Lineage',
          'of the Empty Moor', 'of the Hecate Servants', 'of the Broken Lineage', 'of the House of Ash',
          'of the Winter Pack', 'of the Crimson Pact', 'of the Sickle Clan', 'of the Ancient Wolves',
          'of the Silver Lineage', 'of the Mist Brotherhood', 'of the Sunless Forest', 'of the Echo Tribe'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to choose an authentic-sounding lycanthrope name',
        body: '<p>A good werewolf name needs three layers: human name (who they were before the curse), bestial epithet (what they are now), and lineage (where the blood comes from). That structure appears in <em>The Witcher</em>, <em>Werewolf: The Apocalypse</em> and most Norse mythologies. If you only use the human name, the character sounds like a regular villager. If you only use the epithet, it sounds like a pet.</p><p>Germanic, Slavic and Celtic roots work better than Latin ones for lycanthropes. <strong>Fenrir, Vargen, Ulric, Conall, Skoll</strong> evoke cold, forest and ancestral violence. Avoid overly modern names like Brad or Kevin unless the tone is comedic like <em>Teen Wolf</em>. For females, roots like <strong>Ylva, Vargara, Lupa, Lyssa</strong> maintain strength without forced feminization.</p><p>If your campaign is more urban, like <em>Underworld</em> or Jack Nicholson\'s <em>Wolf</em>, you can mix civil name with bestial surname: "Marcus Greyrock", "Elena Vargheim". The surname carries the lineage and the first name preserves humanity. That tension between name and epithet is exactly what defines the character.</p>'
      },
      {
        h2: 'Lycanthrope names by game system',
        body: '<p>In <strong>D&D 5e</strong>, lycanthropes are infected humanoids that keep their original name. Choose a strong human name and only add the epithet after the first transformation. "Brogan, formerly the village baker, now Brogan Blackfang" works narratively because it marks before and after. In <strong>Pathfinder</strong>, rules allow hereditary lineages, so the family surname carries weight: the Vargheims are an entire family of werewolves, not a lone infected.</p><p>For <strong>Werewolf: The Apocalypse</strong>, each Garou has three names: human, lupine, and deed name earned through actions. "Sarah Mitchell / Silberzahn / Spirit-Slayer" covers all three identities. The deed name changes with each major feat, so a veteran character can have five or six accumulated epithets. It\'s a powerful narrative mechanic that rewards roleplay.</p><p>In <strong>Vampire: The Masquerade</strong> with werewolf crossover, Lupines tend to have more closed tribal names. Get of Fenris uses Norse roots, Black Furies prefers ancient Greek, Wendigo uses Algonquian roots. Respecting the tribe gives cultural coherence. If your table doesn\'t play specific tribes, mix freely but maintain internal consistency: a pack with Norse names shouldn\'t have a Hiroshi Tanaka without explanation.</p>'
      },
      {
        h2: 'Common mistakes when naming werewolves',
        body: '<p>Mistake number one is <strong>overusing "Wolf"</strong>. Wolfdead, Wolfshade, Wolffang... after three characters like that, everything sounds the same. Better to use indirect metaphors: hunter, runner, howler, biter. That preserves the bestial DNA without redundancy. <em>The Wolf Among Us</em> solves this by calling the protagonist "Bigby Wolf" only once; afterward he\'s just Bigby.</p><p>Another mistake: names pronounced differently in English and Spanish. "Greyclaw" sounds good at an English-speaking table but at a Spanish table becomes "grei-clav" and loses force. If you play in Spanish, translate or use neutral roots. "Garra Gris" works in both languages. <strong>Skoll, Hati, Fenrir</strong> also work because they come from Old Norse and everyone pronounces them similarly.</p><p>Third mistake: stacking epithets to absurd levels. "Ragnar Silverfang Starswallower Moonblood of the Frozen Moor of the Sons of Fenris" is unreadable. Choose two elements maximum and save the rest for when the character earns deeds in the campaign. A character that starts with a simple name and ends with three earned epithets feels lived-in. One that starts stacked feels forced.</p>'
      },
      {
        h2: 'Lycanthropes in pop culture: references for inspiration',
        body: '<p>There are different werewolf traditions by work. <em>An American Werewolf in London</em> (1981) shows the lycanthrope as tragic victim who keeps human name (David Kessler) without epithets. That simplicity works in modern horror where the monster is accident, not lineage. <em>The Howling</em> (1981) introduces organized packs with shared surnames.</p><p>In literature, Glen Duncan\'s <em>The Last Werewolf</em> (Jacob Marlowe) uses completely human name and never epithets. The beast is internal, the character remains a person. Conversely, in Kelley Armstrong\'s <em>Bitten</em>, packs have clear hierarchy with Alpha, Beta and lesser members, but names are all modern human. It works because horror comes from contrast between everyday life and hidden beast.</p><p>For classic fantasy campaigns, look at <em>The Witcher</em>: lycanthropes are curses on specific victims with tragic history before transformation. The human name is central to plot because cure requires reconnecting the monster with their previous self. If your narrative goes that way, the human name matters more than the bestial epithet. If it goes <em>Underworld</em> or <em>Twilight</em>, where wolves are parallel race, epithet and lineage weigh more.</p>'
      }
    ],
    faq: [
      {
        q: 'Do these names work for female characters?',
        a: 'Yes, several work as-is (Fenrir, Skoll, Hati are mythic without strict gender). For explicitly female versions use roots like Ylva, Vargara, Lupa, Lyssa, Eira or Sigrun and combine them with the same epithets and lineages.'
      },
      {
        q: 'Can I use these names in commercial novels without problem?',
        a: 'Yes. Generated names are generic combinations inspired by public-domain folkloric roots (Norse, Slavic, Celtic). Just avoid specific names from protected works like "Bigby Wolf" or "Remus Lupin".'
      },
      {
        q: 'How do I choose between Norse, Celtic or modern style?',
        a: 'First define the tone: if your story is epic fantasy, Norse (Fenrir, Skoll). If folk horror, Celtic (Conall, Faelan). If modern urban fantasy, mix contemporary human first name with bestial surname. Consistency matters more than cultural purity.'
      },
      {
        q: 'How many names should I generate for an entire campaign?',
        a: 'For a protagonist pack, 6-8 well-crafted names suffice. For secondary NPCs and enemies, 15-20 more. If campaign lasts a year, generate 30 and discard ones that don\'t fit. Excess is better than running short mid-session.'
      }
    ]
  }
};
