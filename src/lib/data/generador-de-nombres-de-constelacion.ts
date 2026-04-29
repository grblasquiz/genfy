import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-constelacion', en: 'constellation-name-generator' },
  category: 'fun',
  emoji: '⭐',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Constelación | Genfy',
    metaDesc: 'Creá nombres de constelaciones inventadas para universos sci-fi, astronomía ficticia y mapas estelares originales. Ideal para worldbuilding y juegos de rol espaciales.',
    h1: 'Generador de Nombres de Constelación',
    intro: 'Diseñá constelaciones inventadas con nombres evocadores para tus universos de ciencia ficción, mapas estelares y mitologías cósmicas originales.',
    tag: 'Worldbuilding',
    filterLabel: 'Estilo',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'prefix',
        label: 'Prefijo',
        items: [
          'La', 'El', 'Los', 'Las', 'Gran', 'Pequeña', 'Antigua', 'Nueva', 'Eterna', 'Sagrada',
          'Olvidada', 'Perdida', 'Brillante', 'Oscura', 'Velada', 'Errante', 'Silente', 'Última',
          'Primera', 'Distante', 'Cercana', 'Profunda', 'Alta', 'Baja', 'Helada', 'Ardiente',
          'Pálida', 'Carmesí', 'Azul', 'Dorada', 'Plateada', 'Negra', 'Blanca', 'Verdadera',
          'Falsa', 'Doble', 'Triple', 'Solitaria', 'Hermana', 'Madre'
        ]
      },
      {
        id: 'core',
        label: 'Figura central',
        items: [
          'Corona', 'Cruz', 'Espada', 'Lanza', 'Arco', 'Escudo', 'Cáliz', 'Llave', 'Anillo', 'Trono',
          'Lobo', 'Águila', 'Cuervo', 'Serpiente', 'Dragón', 'Tigre', 'Pez', 'Cisne', 'Caballo', 'Toro',
          'Cazadora', 'Reina', 'Rey', 'Doncella', 'Guerrera', 'Marinero', 'Peregrino', 'Vidente', 'Guardiana', 'Ermitaño',
          'Lira', 'Brújula', 'Reloj', 'Espejo', 'Vela', 'Faro', 'Telar', 'Yunque', 'Cuenco', 'Trompeta'
        ]
      },
      {
        id: 'connector',
        label: 'Conector',
        items: [
          'del', 'de la', 'sobre el', 'bajo la', 'tras el', 'junto a la', 'frente al', 'desde el',
          'al borde del', 'en el', 'que cruza el', 'que vela al', 'que sigue al', 'que persigue al',
          'opuesto al', 'al lado del', 'que mira al', 'naciente del', 'sumergido en el', 'colgante del',
          'ascendente al', 'descendente del', 'rodeado por el', 'separado del', 'enfrentado al',
          'bendecido por el', 'cazado por el', 'guiado por el', 'atado al', 'que despierta al',
          'que custodia el', 'al cuidado del', 'que precede al', 'que abandona el', 'que regresa del',
          'unido al', 'partido del', 'caído del', 'reflejado en el', 'eclipsado por el'
        ]
      },
      {
        id: 'context',
        label: 'Contexto cósmico',
        items: [
          'Abismo', 'Vacío', 'Velo', 'Río Estelar', 'Mar de Polvo', 'Anillo Roto', 'Pasaje Frío', 'Horno Antiguo',
          'Trono Celeste', 'Jardín de Hielo', 'Espejo Negro', 'Camino Plateado', 'Puente de Soles', 'Bosque de Luz',
          'Vientre del Cielo', 'Ojo Tormentoso', 'Corazón Vacío', 'Pulso Lejano', 'Aliento Helado', 'Sueño Profundo',
          'Lágrima Solar', 'Reino Sin Sombra', 'Templo Ardiente', 'Tumba Sin Nombre', 'Cuna Olvidada', 'Lecho de Estrellas',
          'Hueso del Mundo', 'Beso del Sol', 'Última Noche', 'Primera Aurora', 'Trono Caído', 'Rey Muerto',
          'Velo Roto', 'Senda Ciega', 'Costa Lunar', 'Dedos del Tiempo', 'Mirada del Eón', 'Aliento del Cosmos',
          'Susurro Galáctico', 'Marea Negra'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo funcionan los nombres de constelaciones reales (y por qué importa)',
        body: '<p>Las constelaciones que conocemos hoy mezclan tradiciones grecorromanas (Orion, Casiopea, Andrómeda) con incorporaciones modernas del hemisferio sur catalogadas en el siglo XVII (Tucán, Pavo, Camaleón). La Unión Astronómica Internacional reconoce 88 constelaciones oficiales, y el patrón es siempre el mismo: un sustantivo evocador, a veces con genitivo latino que describe la figura.</p><p>Para inventar nombres creíbles, mezclá tres ingredientes: una figura reconocible (animal, héroe, objeto), un calificador que la sitúe en el cielo (errante, eterna, caída) y un complemento mítico que sugiera una historia. <em>La Doncella del Velo Roto</em> funciona porque promete una leyenda; <em>Constelación 47B</em> no, porque suena a clasificación burocrática.</p><p>Si tu universo tiene varias culturas, cada una nombra el mismo grupo estelar distinto. Los humanos pueden llamarla <strong>El Cazador</strong>, los élficos <strong>Velo de Lágrimas</strong>, los enanos <strong>Yunque del Forjador</strong>. Esa multiplicidad enriquece el worldbuilding y permite escenas donde dos personajes miran el mismo cielo y discuten qué ven.</p>'
      },
      {
        h2: 'Aplicaciones para sci-fi, fantasía y juegos de rol',
        body: '<p>En space opera tipo <em>Mass Effect</em> o <em>The Expanse</em>, los nombres de constelaciones funcionan como referencias culturales: cuando un personaje dice "nací bajo la Lira de Halcyon", informás origen, espiritualidad y geografía estelar en una frase. Para campañas de Starfinder o Traveller, asigná una constelación distinta a cada facción mayor; los conflictos territoriales cobran sabor mítico.</p><p>En fantasía clásica con magia de estrellas (<em>Wheel of Time</em>, <em>Stormlight Archive</em>), las constelaciones marcan profecías y ciclos. Definí cuáles son visibles solo en ciertas estaciones: el regreso de <strong>la Serpiente del Abismo</strong> tras 200 años puede ser el detonante de tu trama. Los astrólogos del reino interpretan posiciones, y los reyes consultan antes de declarar guerras.</p><p>Para juegos de mesa narrativos como <em>The Quiet Year</em> o <em>Microscope</em>, generá 5-7 constelaciones al inicio y dejá que los jugadores asocien historias a cada una durante el juego. Esa siembra colectiva genera lore orgánico imposible de prefabricar. Anotá quién mencionó qué para mantener consistencia entre sesiones.</p>'
      },
      {
        h2: 'Errores comunes al inventar nombres celestes',
        body: '<p>El primer error es la sobrecarga consonántica. Nombres como <em>Xkthrn-Vorgssh</em> son ilegibles y nadie los recuerda. Las constelaciones reales usan sonidos pronunciables porque sobrevivieron milenios de tradición oral. Si nadie puede decir el nombre en voz alta, no funcionará en mesas de juego ni en audiolibros.</p><p>Segundo error: nombres demasiado modernos. <em>La Constelación del Wifi</em> rompe inmersión instantáneamente. Mantenete en campos semánticos antiguos: animales, oficios preindustriales, objetos rituales, fenómenos naturales. Si tu setting tiene tecnología avanzada, igual nombrás constelaciones con palabras viejas porque la astronomía es uno de los conocimientos más antiguos de cualquier civilización.</p><p>Tercer error: nombres sin contraste. Si todas tus constelaciones suenan a <em>El Algo del Algo</em>, se vuelven indistinguibles. Mezclá estructuras: nombres simples (<strong>Brama</strong>, <strong>Vela</strong>), compuestos (<strong>Cruz del Sur</strong>), y descriptivos largos (<strong>La Reina que Espera la Aurora</strong>). Esa variedad imita constelaciones reales y permite que tu lector recuerde cada una por su silueta sonora distinta.</p>'
      },
      {
        h2: 'Construir mitología alrededor de cada constelación',
        body: '<p>Un nombre solo no alcanza: las constelaciones cobran vida cuando tienen leyenda asociada. Para cada nombre que generes, escribí 2-3 frases que respondan: ¿qué representa? ¿qué historia explica su forma? ¿qué augura cuando aparece? Si <strong>La Lanza de Yelva</strong> brilla en otoño, los marineros saben que comienzan tormentas; si <strong>el Cuervo Ciego</strong> se eclipsa, los chamanes ayunan tres días.</p><p>Las mejores mitologías estelares enlazan constelaciones entre sí. <em>El Cazador persigue eternamente a la Cierva</em>; <em>las Tres Hermanas lloran sobre el Río de Plata</em>. Esta interconexión permite que tu astrología ficticia tenga lógica narrativa: cuando dos constelaciones se alinean, los astrólogos predicen eventos basados en sus historias compartidas.</p><p>Para mayor profundidad, asigná regiones políticas a constelaciones. El reino del norte se identifica con <strong>el Lobo del Velo</strong>; los piratas del sur navegan guiándose por <strong>la Cruz Sumergida</strong>. Los estandartes militares replican las figuras estelares, y las dinastías reales reclaman descendencia mítica de sus astros patronos. Así un sistema de naming se convierte en columna vertebral de toda tu cosmovisión.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántas constelaciones inventar para un setting completo?',
        a: 'Para una novela, 8-12 alcanzan: 3-4 mayores con mitología desarrollada, el resto mencionadas en pasada. Para campañas de rol largas, generá 20-30 y trabajá las que los jugadores señalen. La Vía Láctea ficticia no necesita catálogo completo, solo las que aparezcan en escena.'
      },
      {
        q: '¿Pueden las constelaciones cambiar a lo largo de mi historia?',
        a: 'Sí, y es un recurso narrativo potente. En miles de años los movimientos estelares alteran formas; en sci-fi con viajes interestelares, cada planeta ve cielos distintos. Una constelación que <em>desaparece</em> al cambiar de hemisferio puede simbolizar exilio o pérdida de identidad cultural.'
      },
      {
        q: '¿Cómo evito que mis nombres suenen a Tolkien o D&D genérico?',
        a: 'Evitá los sufijos -dor, -wen, -iel y los compuestos tipo <em>Espada-Luz</em>. Inspirate en astronomía polinesia, china o árabe en vez de la grecorromana saturada. Nombres como Aldebarán, Betelgeuse o Zubenelgenubi prueban que las raíces árabes generan sonoridad fresca para oídos occidentales.'
      },
      {
        q: '¿Funcionan estos nombres para hard sci-fi realista?',
        a: 'Para hard sci-fi tipo <em>The Expanse</em>, mezclá nombres mitológicos con designaciones técnicas: <strong>Lobo de Halcyon (HD-189733)</strong>. Los astrónomos siempre conservaron nombres tradicionales junto a catálogos, y tu universo del siglo XXIV haría lo mismo. Esa convivencia da textura cultural sin sacrificar verosimilitud científica.'
      }
    ]
  },
  en: {
    pageTitle: 'Constellation Name Generator | Genfy',
    metaDesc: 'Create invented constellation names for sci-fi universes, fictional astronomy and original star maps. Perfect for worldbuilding and space roleplaying games.',
    h1: 'Constellation Name Generator',
    intro: 'Design invented constellations with evocative names for your science fiction universes, star maps and original cosmic mythologies.',
    tag: 'Worldbuilding',
    filterLabel: 'Style',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'prefix',
        label: 'Prefix',
        items: [
          'The', 'Great', 'Lesser', 'Ancient', 'New', 'Eternal', 'Sacred', 'Forgotten', 'Lost', 'Bright',
          'Dark', 'Veiled', 'Wandering', 'Silent', 'Last', 'First', 'Distant', 'Near', 'Deep', 'High',
          'Low', 'Frozen', 'Burning', 'Pale', 'Crimson', 'Azure', 'Golden', 'Silver', 'Black', 'White',
          'True', 'False', 'Twin', 'Triple', 'Solitary', 'Sister', 'Mother', 'Hidden', 'Risen', 'Fallen'
        ]
      },
      {
        id: 'core',
        label: 'Central figure',
        items: [
          'Crown', 'Cross', 'Sword', 'Spear', 'Bow', 'Shield', 'Chalice', 'Key', 'Ring', 'Throne',
          'Wolf', 'Eagle', 'Raven', 'Serpent', 'Dragon', 'Tiger', 'Fish', 'Swan', 'Horse', 'Bull',
          'Huntress', 'Queen', 'King', 'Maiden', 'Warrior', 'Sailor', 'Pilgrim', 'Seer', 'Guardian', 'Hermit',
          'Lyre', 'Compass', 'Clock', 'Mirror', 'Candle', 'Lighthouse', 'Loom', 'Anvil', 'Bowl', 'Trumpet'
        ]
      },
      {
        id: 'connector',
        label: 'Connector',
        items: [
          'of the', 'over the', 'beneath the', 'beyond the', 'beside the', 'facing the', 'from the',
          'at the edge of the', 'within the', 'crossing the', 'watching the', 'following the', 'pursuing the',
          'opposite the', 'next to the', 'gazing at the', 'rising from the', 'sunken in the', 'hanging from the',
          'ascending to the', 'descending from the', 'surrounded by the', 'severed from the', 'confronting the',
          'blessed by the', 'hunted by the', 'guided by the', 'bound to the', 'awakening the',
          'guarding the', 'caring for the', 'preceding the', 'abandoning the', 'returning from the',
          'joined to the', 'parted from the', 'fallen from the', 'reflected in the', 'eclipsed by the'
        ]
      },
      {
        id: 'context',
        label: 'Cosmic context',
        items: [
          'Abyss', 'Void', 'Veil', 'Star River', 'Dust Sea', 'Broken Ring', 'Cold Passage', 'Ancient Forge',
          'Heavenly Throne', 'Ice Garden', 'Black Mirror', 'Silver Path', 'Bridge of Suns', 'Forest of Light',
          'Sky Womb', 'Storm Eye', 'Empty Heart', 'Distant Pulse', 'Frozen Breath', 'Deep Dream',
          'Solar Tear', 'Shadowless Realm', 'Burning Temple', 'Nameless Tomb', 'Forgotten Cradle', 'Star Bed',
          'World Bone', 'Sun Kiss', 'Last Night', 'First Dawn', 'Fallen Throne', 'Dead King',
          'Broken Veil', 'Blind Path', 'Lunar Coast', 'Fingers of Time', 'Aeon Gaze', 'Cosmic Breath',
          'Galactic Whisper', 'Black Tide'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How real constellation names work (and why it matters)',
        body: '<p>Today\'s constellations mix Greco-Roman traditions (Orion, Cassiopeia, Andromeda) with modern southern hemisphere additions cataloged in the 17th century (Toucan, Peacock, Chameleon). The International Astronomical Union recognizes 88 official constellations, and the pattern is always the same: an evocative noun, sometimes with a Latin genitive describing the figure.</p><p>To invent believable names, mix three ingredients: a recognizable figure (animal, hero, object), a qualifier that places it in the sky (wandering, eternal, fallen), and a mythical complement suggesting a story. <em>The Maiden of the Broken Veil</em> works because it promises legend; <em>Constellation 47B</em> doesn\'t, because it sounds bureaucratic.</p><p>If your universe has multiple cultures, each names the same star group differently. Humans might call it <strong>The Hunter</strong>, elves <strong>Veil of Tears</strong>, dwarves <strong>Forger\'s Anvil</strong>. That multiplicity enriches worldbuilding and enables scenes where two characters look at the same sky and argue about what they see.</p>'
      },
      {
        h2: 'Applications for sci-fi, fantasy and tabletop RPGs',
        body: '<p>In space opera like <em>Mass Effect</em> or <em>The Expanse</em>, constellation names work as cultural references: when a character says "I was born under Halcyon\'s Lyre," you communicate origin, spirituality and stellar geography in one phrase. For Starfinder or Traveller campaigns, assign a different constellation to each major faction; territorial conflicts gain mythical flavor.</p><p>In classical fantasy with star magic (<em>Wheel of Time</em>, <em>Stormlight Archive</em>), constellations mark prophecies and cycles. Define which are visible only in certain seasons: the return of <strong>the Serpent of the Abyss</strong> after 200 years can trigger your plot. Royal astrologers interpret positions, and kings consult before declaring war.</p><p>For narrative board games like <em>The Quiet Year</em> or <em>Microscope</em>, generate 5-7 constellations at start and let players associate stories with each during play. That collective seeding generates organic lore impossible to prefabricate. Note who mentioned what to keep consistency between sessions.</p>'
      },
      {
        h2: 'Common mistakes when inventing celestial names',
        body: '<p>First mistake: consonant overload. Names like <em>Xkthrn-Vorgssh</em> are unreadable and unmemorable. Real constellations use pronounceable sounds because they survived millennia of oral tradition. If nobody can say the name aloud, it won\'t work at game tables or in audiobooks.</p><p>Second mistake: overly modern names. <em>The Wifi Constellation</em> breaks immersion instantly. Stay in ancient semantic fields: animals, pre-industrial trades, ritual objects, natural phenomena. Even if your setting has advanced tech, you still name constellations with old words because astronomy is among the oldest knowledge of any civilization.</p><p>Third mistake: names without contrast. If all your constellations sound like <em>The Something of the Something</em>, they become indistinguishable. Mix structures: simple names (<strong>Roar</strong>, <strong>Sail</strong>), compounds (<strong>Southern Cross</strong>), and long descriptive (<strong>The Queen Who Awaits Dawn</strong>). That variety mimics real constellations and lets readers remember each by its distinct sonic silhouette.</p>'
      },
      {
        h2: 'Building mythology around each constellation',
        body: '<p>A name alone isn\'t enough: constellations come alive with associated legends. For each name you generate, write 2-3 sentences answering: what does it represent? what story explains its shape? what does it foretell when it appears? If <strong>Yelva\'s Spear</strong> shines in autumn, sailors know storms begin; if <strong>the Blind Raven</strong> eclipses, shamans fast for three days.</p><p>The best stellar mythologies link constellations to each other. <em>The Hunter eternally pursues the Doe</em>; <em>the Three Sisters weep over the Silver River</em>. This interconnection gives your fictional astrology narrative logic: when two constellations align, astrologers predict events based on their shared stories.</p><p>For deeper texture, assign political regions to constellations. The northern kingdom identifies with <strong>the Wolf of the Veil</strong>; southern pirates navigate by <strong>the Sunken Cross</strong>. Military banners replicate stellar figures, and royal dynasties claim mythical descent from patron stars. Thus a naming system becomes the backbone of your entire cosmology.</p>'
      }
    ],
    faq: [
      {
        q: 'How many constellations should I invent for a complete setting?',
        a: 'For a novel, 8-12 are enough: 3-4 major ones with developed mythology, the rest mentioned in passing. For long RPG campaigns, generate 20-30 and develop the ones players notice. A fictional Milky Way doesn\'t need a complete catalog, only the ones appearing on stage.'
      },
      {
        q: 'Can constellations change throughout my story?',
        a: 'Yes, and it\'s a powerful narrative resource. Over thousands of years stellar movements alter shapes; in sci-fi with interstellar travel, each planet sees different skies. A constellation that <em>disappears</em> upon changing hemispheres can symbolize exile or loss of cultural identity.'
      },
      {
        q: 'How do I avoid my names sounding like Tolkien or generic D&D?',
        a: 'Avoid suffixes -dor, -wen, -iel and compounds like <em>Sword-Light</em>. Draw inspiration from Polynesian, Chinese or Arabic astronomy instead of saturated Greco-Roman. Names like Aldebaran, Betelgeuse or Zubenelgenubi prove Arabic roots generate fresh sonority for Western ears.'
      },
      {
        q: 'Do these names work for realistic hard sci-fi?',
        a: 'For hard sci-fi like <em>The Expanse</em>, mix mythological names with technical designations: <strong>Wolf of Halcyon (HD-189733)</strong>. Astronomers always preserved traditional names alongside catalogs, and your 24th-century universe would do the same. That coexistence adds cultural texture without sacrificing scientific verisimilitude.'
      }
    ]
  }
};
