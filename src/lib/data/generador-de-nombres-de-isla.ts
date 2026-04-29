import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-isla', en: 'island-name-generator' },
  category: 'fun',
  emoji: '🏝️',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Isla | Genfy',
    metaDesc: 'Generá nombres de islas tropicales, archipiélagos y atolones para juegos, novelas de aventura y mapas de fantasía. Worldbuilding marítimo en segundos.',
    h1: 'Generador de Nombres de Isla',
    intro: 'Diseñá islas, archipiélagos y atolones con nombres evocadores para mapas piratas, sagas marítimas y mundos insulares de aventura.',
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
          'Isla', 'Islote', 'Atolón', 'Cayo', 'Roca', 'Peñón', 'Arrecife', 'Banco',
          'Islas', 'Archipiélago', 'Cayos', 'Tres Hermanas', 'Cuatro Vientos', 'Bajo',
          'Isla Mayor', 'Isla Menor', 'Gran Isla', 'Pequeña Isla', 'Isla Negra', 'Isla Blanca',
          'Isla Roja', 'Isla Azul', 'Isla Verde', 'Isla Dorada', 'Isla Solitaria', 'Isla Doble',
          'Mar Interior', 'Bahía de', 'Estrecho de', 'Costa de', 'Punta', 'Cabo',
          'Promontorio', 'Bajío', 'Marisma', 'Laguna', 'Pasaje', 'Boca de'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'del Naufragio', 'del Tesoro', 'del Almirante', 'del Capitán', 'del Pirata', 'del Mercader',
          'del Olvido', 'de la Tormenta', 'del Viento', 'de las Sirenas', 'del Coral', 'de los Tiburones',
          'de la Brisa', 'del Eco', 'del Reflejo', 'de la Niebla', 'del Coco', 'de la Palmera',
          'del Lagarto', 'del Cangrejo', 'de la Tortuga', 'de las Aves', 'del Faro', 'del Velero',
          'del Capitán Muerto', 'de los Huesos', 'del Diablo', 'de los Ángeles', 'del Santo', 'del Profeta',
          'de las Lágrimas', 'de los Suspiros', 'del Hambre', 'del Banquete', 'del Rey', 'de la Reina',
          'del Príncipe', 'del Forastero', 'del Errante', 'del Vigilante'
        ]
      },
      {
        id: 'modifier',
        label: 'Modificador',
        items: [
          'Perdida', 'Encontrada', 'Olvidada', 'Recordada', 'Negra', 'Blanca', 'Roja', 'Verde',
          'Azul', 'Dorada', 'Plateada', 'Salada', 'Dulce', 'Amarga', 'Roma', 'Aguda',
          'Alta', 'Baja', 'Hueca', 'Maciza', 'Antigua', 'Joven', 'Sagrada', 'Maldita',
          'Bendita', 'Hechizada', 'Encantada', 'Velada', 'Quieta', 'Inquieta', 'Solitaria', 'Compañera',
          'Errante', 'Anclada', 'Hundida', 'Emergida', 'Visible', 'Oculta', 'Nombrada', 'Innombrable'
        ]
      },
      {
        id: 'suffix',
        label: 'Sufijo poético',
        items: [
          'al amanecer', 'al ocaso', 'bajo la luna', 'bajo el sol', 'tras la niebla', 'antes de la tormenta',
          'después del huracán', 'en la calma', 'sin agua', 'con agua dulce', 'sin sombra', 'con palmeras',
          'sin habitantes', 'con un solo habitante', 'donde nadie regresa', 'donde todos vuelven', 'que canta', 'que llora',
          'que duerme', 'que despierta', 'que se mueve', 'que no aparece', 'al final del mar', 'al inicio del mundo',
          'donde mueren las olas', 'donde nacen los vientos', 'que el mapa olvidó', 'que el cielo cubre',
          'al norte del horizonte', 'al sur del rumbo', 'fuera de las cartas', 'antes del horizonte',
          'donde el sol se ahoga', 'donde la luna toca el agua', 'sin pájaros', 'con un único árbol',
          'al borde del abismo', 'sobre la corriente', 'contra el viento', 'bajo la aurora'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo nombrar islas con identidad memorable',
        body: '<p>Las islas reales suelen tener nombres que cuentan historia: Madagascar viene de un error de Marco Polo; las Galápagos deben su nombre a las tortugas gigantes; Islandia describe su clima literalmente. Cuando inventes islas para tu mundo de ficción, seguí ese patrón: cada nombre debe sembrar una pregunta o anticipar un descubrimiento.</p><p>Mezclá tipo geográfico (isla, atolón, cayo) con descriptor cultural (del Almirante Yermo) y modificador atmosférico (perdida, sumergida, olvidada). <em>Atolón del Almirante Yermo</em> ya tiene historia: alguien fue almirante allí, y ahora el lugar está abandonado. Esa carga narrativa es invaluable cuando tu protagonista llegue al puerto y pregunte por el rumbo.</p><p>Para sagas con muchas islas, definí familias toponímicas. Las islas del archipiélago norte tienen nombres en idioma uno, las del sur en otro. <em>Tortuga</em>, <em>Antillas</em> y <em>Bermudas</em> nos dicen sin diccionario que distintas potencias colonizaron el Caribe. Replicá esa estratificación en tu worldbuilding y tendrás política implícita en cada mapa.</p>'
      },
      {
        h2: 'Aplicaciones para fantasía, piratería y supervivencia',
        body: '<p>En sagas piratas tipo <em>Sea of Thieves</em> o <em>Black Sails</em>, los nombres de islas son anclas narrativas. Cada destino tiene reputación: <em>Cayo del Capitán Muerto</em> es donde se entierra a los traidores; <em>Atolón de las Sirenas</em> es donde los marineros desertan. Los jugadores recuerdan islas por sus nombres antes que por sus coordenadas, así que invertí en bautizos memorables.</p><p>Para módulos de aventura tipo <em>Tomb of Annihilation</em> o campañas de exploración marítima, generá 30-40 islas y agrupalas por climas y peligros. Tres islas con nombres temáticos cercanos (Isla Negra, Isla del Olvido, Isla Velada) sugieren un archipiélago maldito sin que tengas que explicarlo.</p><p>En narrativas de supervivencia tipo <em>Robinson Crusoe</em> o <em>Lost</em>, una sola isla bien nombrada carga toda la historia. <em>Isla Hueca</em> promete cuevas y misterio; <em>Atolón sin Sombra</em> sugiere ausencia perturbadora. El nombre debe contradecir o reforzar la experiencia del náufrago: una <em>Isla del Banquete</em> donde no hay comida es ironía narrativa potente.</p>'
      },
      {
        h2: 'Errores comunes al inventar nombres insulares',
        body: '<p>Primer error: redundancia geográfica. <em>Isla Insular del Mar Marítimo</em> apila sinónimos sin decir nada. Elegí UNA categoría dominante y enriquecela con descriptor narrativo. Las islas reales rara vez explican que son islas en su nombre; <em>Cuba</em>, <em>Hawaii</em>, <em>Jamaica</em> simplemente nombran.</p><p>Segundo error: nombres demasiado largos. <em>Atolón de los Antiguos Reyes Caídos del Sur Profundo</em> agota lectura. Los marineros abrevian: lo llamarían <em>El Atolón de los Reyes</em>. Si tu nombre completo no se puede gritar desde un palo mayor en plena tormenta, tu narrativa lo va a abreviar igual.</p><p>Tercer error: nombres genéricos sin gancho. <em>Isla Bonita</em>, <em>Isla Verde</em>, <em>Isla Grande</em> son etiquetas, no nombres. Cada isla merece un detalle específico que la haga única. Comparalo: <em>Isla Verde</em> vs <em>Isla del Único Árbol</em>. La segunda promete trama, la primera es relleno de mapa. Apuntá siempre a nombres que un viajero querría visitar o evitar por razón clara.</p>'
      },
      {
        h2: 'Construir geografía cultural alrededor de tus islas',
        body: '<p>Una isla no es solo geografía: es una micro-civilización. Para cada isla relevante en tu historia, definí cinco datos: quién la nombró, quién vive allí ahora, qué se exporta, qué peligros tiene y qué leyenda local circula. <em>Cayo del Almirante</em> puede ser ahora un puerto de contrabandistas; los locales evitan la cala norte porque dicen que el almirante aún patrulla.</p><p>Las islas vecinas crean economías y conflictos. Si <em>Atolón del Coco</em> exporta aceite y <em>Isla Negra</em> importa todo, hay ruta comercial. Si <em>Isla del Capitán Muerto</em> está entre ambas, el peaje pirata define la política regional. Pensá en triángulos comerciales y rivalidades antes de poblar mapas.</p><p>Para profundidad, asigná dialecto y costumbre única a cada cultura insular. Los habitantes de <em>Tres Hermanas</em> hablan rápido y comen pescado crudo; los de <em>Isla Velada</em> susurran y entierran a sus muertos en el mar. Esos detalles transforman puntos en mapa en lugares vivos donde tus personajes negocian, se enamoran y traicionan.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántas islas debería generar para una campaña marítima?',
        a: 'Para una novela enfocada, 8-15 con identidad fuerte. Para una campaña de rol exploratoria tipo <em>Saltmarsh</em>, generá 30-50 y desarrollá las que los jugadores visiten. Mantené una lista maestra con coordenadas y un párrafo por isla.'
      },
      {
        q: '¿Conviene mezclar idiomas en los nombres del mismo archipiélago?',
        a: 'Sí, refleja colonización histórica. El Caribe real mezcla nombres taínos, españoles, ingleses, franceses y holandeses. Tu archipiélago ficticio gana profundidad si tres potencias compitieron por sus islas y dejaron capas lingüísticas distintas.'
      },
      {
        q: '¿Cómo evito que mis islas suenen genéricas tipo "tropical paradise"?',
        a: 'Sumá detalles geográficos específicos: <em>Isla del Pozo Único</em>, <em>Atolón sin Aves</em>, <em>Cayo de los Acantilados Negros</em>. Una sola peculiaridad memorable diferencia tu isla de cualquier postal de Caribe genérica.'
      },
      {
        q: '¿Funcionan estos nombres para juegos como Sea of Thieves o Skull and Bones?',
        a: 'Perfectamente. Los juegos de piratas viven de nombres evocadores que prometen aventura. Una isla llamada <em>Cayo del Almirante Muerto bajo la Luna</em> se autopromueve como destino narrativo y los jugadores la priorizan sobre coordenadas neutras.'
      }
    ]
  },
  en: {
    pageTitle: 'Island Name Generator | Genfy',
    metaDesc: 'Generate tropical island, archipelago and atoll names for games, adventure novels and fantasy maps. Maritime worldbuilding in seconds.',
    h1: 'Island Name Generator',
    intro: 'Design islands, archipelagos and atolls with evocative names for pirate maps, maritime sagas and adventurous insular worlds.',
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
          'Isle', 'Islet', 'Atoll', 'Key', 'Rock', 'Crag', 'Reef', 'Bank',
          'Isles', 'Archipelago', 'Keys', 'Three Sisters', 'Four Winds', 'Shoal',
          'Greater Isle', 'Lesser Isle', 'Grand Isle', 'Little Isle', 'Black Isle', 'White Isle',
          'Red Isle', 'Blue Isle', 'Green Isle', 'Golden Isle', 'Lonely Isle', 'Twin Isle',
          'Inner Sea', 'Bay of', 'Strait of', 'Coast of', 'Point', 'Cape',
          'Promontory', 'Shallows', 'Marsh', 'Lagoon', 'Passage', 'Mouth of'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'of the Wreck', 'of the Treasure', 'of the Admiral', 'of the Captain', 'of the Pirate', 'of the Merchant',
          'of Oblivion', 'of the Storm', 'of the Wind', 'of the Sirens', 'of the Coral', 'of the Sharks',
          'of the Breeze', 'of the Echo', 'of the Reflection', 'of the Mist', 'of the Coconut', 'of the Palm',
          'of the Lizard', 'of the Crab', 'of the Turtle', 'of the Birds', 'of the Lighthouse', 'of the Sail',
          'of the Dead Captain', 'of Bones', 'of the Devil', 'of the Angels', 'of the Saint', 'of the Prophet',
          'of Tears', 'of Sighs', 'of Hunger', 'of the Feast', 'of the King', 'of the Queen',
          'of the Prince', 'of the Stranger', 'of the Wanderer', 'of the Watcher'
        ]
      },
      {
        id: 'modifier',
        label: 'Modifier',
        items: [
          'Lost', 'Found', 'Forgotten', 'Remembered', 'Black', 'White', 'Red', 'Green',
          'Blue', 'Golden', 'Silver', 'Salt', 'Sweet', 'Bitter', 'Blunt', 'Sharp',
          'High', 'Low', 'Hollow', 'Solid', 'Ancient', 'Young', 'Sacred', 'Cursed',
          'Blessed', 'Bewitched', 'Enchanted', 'Veiled', 'Still', 'Restless', 'Lonely', 'Companion',
          'Wandering', 'Anchored', 'Sunken', 'Risen', 'Visible', 'Hidden', 'Named', 'Unnamable'
        ]
      },
      {
        id: 'suffix',
        label: 'Poetic suffix',
        items: [
          'at dawn', 'at dusk', 'beneath the moon', 'beneath the sun', 'past the mist', 'before the storm',
          'after the hurricane', 'in the calm', 'without water', 'with fresh water', 'without shadow', 'with palms',
          'without inhabitants', 'with one inhabitant', 'where none return', 'where all return', 'that sings', 'that weeps',
          'that sleeps', 'that wakes', 'that moves', 'that does not appear', 'at the end of the sea', 'at the start of the world',
          'where waves die', 'where winds are born', 'forgotten by maps', 'covered by sky',
          'north of the horizon', 'south of the heading', 'beyond the charts', 'before the horizon',
          'where the sun drowns', 'where the moon touches water', 'without birds', 'with one tree',
          'at the edge of the abyss', 'over the current', 'against the wind', 'beneath the dawn'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to name islands with memorable identity',
        body: '<p>Real islands often have names that tell stories: Madagascar comes from a Marco Polo error; the Galapagos owe their name to giant tortoises; Iceland describes its climate literally. When inventing islands for your fictional world, follow that pattern: each name should plant a question or hint at a discovery.</p><p>Mix geographic type (isle, atoll, key) with cultural descriptor (of the Wasted Admiral) and atmospheric modifier (lost, sunken, forgotten). <em>Atoll of the Wasted Admiral</em> already has story: someone was admiral there, and now the place is abandoned. That narrative weight is invaluable when your protagonist arrives at port and asks for heading.</p><p>For sagas with many islands, define toponymic families. Islands of the northern archipelago have names in language A, southern in language B. <em>Tortuga</em>, <em>Antilles</em> and <em>Bermuda</em> tell us without dictionary that different powers colonized the Caribbean. Replicate that stratification in your worldbuilding for implicit politics in every map.</p>'
      },
      {
        h2: 'Applications for fantasy, piracy and survival',
        body: '<p>In pirate sagas like <em>Sea of Thieves</em> or <em>Black Sails</em>, island names are narrative anchors. Each destination has reputation: <em>Key of the Dead Captain</em> is where traitors are buried; <em>Atoll of the Sirens</em> is where sailors desert. Players remember islands by names before coordinates, so invest in memorable christenings.</p><p>For adventure modules like <em>Tomb of Annihilation</em> or maritime exploration campaigns, generate 30-40 islands and group by climates and dangers. Three islands with thematically close names (Black Isle, Isle of Oblivion, Veiled Isle) suggest a cursed archipelago without explanation.</p><p>In survival narratives like <em>Robinson Crusoe</em> or <em>Lost</em>, a single well-named island carries the entire story. <em>Hollow Isle</em> promises caves and mystery; <em>Shadowless Atoll</em> suggests disturbing absence. The name should contradict or reinforce the castaway\'s experience: an <em>Isle of the Feast</em> with no food is potent narrative irony.</p>'
      },
      {
        h2: 'Common mistakes when inventing island names',
        body: '<p>First mistake: geographic redundancy. <em>Insular Isle of the Maritime Sea</em> piles synonyms saying nothing. Pick ONE dominant category and enrich with narrative descriptor. Real islands rarely explain they\'re islands in their name; <em>Cuba</em>, <em>Hawaii</em>, <em>Jamaica</em> simply name.</p><p>Second mistake: overly long names. <em>Atoll of the Ancient Fallen Kings of the Deep South</em> exhausts reading. Sailors abbreviate: they\'d call it <em>The Kings\' Atoll</em>. If your full name can\'t be shouted from a mast in a storm, your narrative will abbreviate it anyway.</p><p>Third mistake: generic names without hook. <em>Pretty Isle</em>, <em>Green Isle</em>, <em>Big Isle</em> are labels, not names. Each island deserves a specific detail making it unique. Compare: <em>Green Isle</em> vs <em>Isle of the Single Tree</em>. The second promises plot, the first is map filler. Always aim for names a traveler would want to visit or avoid for clear reason.</p>'
      },
      {
        h2: 'Building cultural geography around your islands',
        body: '<p>An island is not just geography: it\'s a micro-civilization. For each relevant island in your story, define five facts: who named it, who lives there now, what\'s exported, what dangers exist, and what local legend circulates. <em>Admiral\'s Key</em> may now be a smuggler\'s port; locals avoid the north cove because they say the admiral still patrols.</p><p>Neighboring islands create economies and conflicts. If <em>Coconut Atoll</em> exports oil and <em>Black Isle</em> imports everything, there\'s a trade route. If <em>Isle of the Dead Captain</em> sits between them, pirate tolls define regional politics. Think in trade triangles and rivalries before populating maps.</p><p>For depth, assign dialect and unique custom to each insular culture. Inhabitants of <em>Three Sisters</em> speak fast and eat raw fish; those of <em>Veiled Isle</em> whisper and bury their dead at sea. Those details transform map points into living places where your characters negotiate, fall in love and betray.</p>'
      }
    ],
    faq: [
      {
        q: 'How many islands should I generate for a maritime campaign?',
        a: 'For a focused novel, 8-15 with strong identity. For an exploratory RPG campaign like <em>Saltmarsh</em>, generate 30-50 and develop those players visit. Keep a master list with coordinates and one paragraph per island.'
      },
      {
        q: 'Should I mix languages in names within the same archipelago?',
        a: 'Yes, it reflects historical colonization. The real Caribbean mixes Taino, Spanish, English, French and Dutch names. Your fictional archipelago gains depth if three powers competed for its islands and left distinct linguistic layers.'
      },
      {
        q: 'How do I avoid my islands sounding like generic "tropical paradise"?',
        a: 'Add specific geographic details: <em>Isle of the Single Well</em>, <em>Birdless Atoll</em>, <em>Key of the Black Cliffs</em>. A single memorable peculiarity differentiates your island from any generic Caribbean postcard.'
      },
      {
        q: 'Do these names work for games like Sea of Thieves or Skull and Bones?',
        a: 'Perfectly. Pirate games thrive on evocative names promising adventure. An island called <em>Key of the Dead Admiral Beneath the Moon</em> self-promotes as narrative destination and players prioritize it over neutral coordinates.'
      }
    ]
  }
};
