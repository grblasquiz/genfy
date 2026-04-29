import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-alianza', en: 'alliance-name-generator' },
  category: 'fun',
  emoji: '🤝',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Alianza | Genfy',
    metaDesc: 'Creá nombres de alianzas, coaliciones y facciones para juegos de estrategia, guilds y organizaciones ficticias. Identidad épica para tu equipo o gremio.',
    h1: 'Generador de Nombres de Alianza',
    intro: 'Bautizá tu coalición con nombres que impongan respeto: alianzas para MMORPG, gremios competitivos, facciones de wargame y organizaciones de fantasía.',
    tag: 'Worldbuilding',
    filterLabel: 'Tono',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'opener',
        label: 'Apertura',
        items: [
          'Orden de', 'Hermandad de', 'Pacto de', 'Liga de', 'Coalición de', 'Alianza de',
          'Casa de', 'Sangre de', 'Corona de', 'Estandarte de', 'Sello de', 'Juramento de',
          'Vanguardia de', 'Retaguardia de', 'Garra de', 'Colmillo de', 'Ala de', 'Sombra de',
          'Espada de', 'Lanza de', 'Escudo de', 'Yelmo de', 'Hijos de', 'Hijas de',
          'Herederos de', 'Custodios de', 'Guardianes de', 'Cazadores de', 'Verdugos de', 'Lobos de',
          'Cuervos de', 'Leones de', 'Halcones de', 'Dragones de', 'Tigres de', 'Lobos Grises de',
          'Caballeros de', 'Sabios de', 'Magos de', 'Maestros de'
        ]
      },
      {
        id: 'core',
        label: 'Núcleo',
        items: [
          'la Llama Eterna', 'el Hierro', 'el Acero', 'la Tormenta', 'la Niebla', 'el Trueno',
          'la Aurora', 'el Crepúsculo', 'la Medianoche', 'el Alba', 'la Luna Negra', 'el Sol Roto',
          'el Velo', 'el Abismo', 'el Vacío', 'la Marea', 'el Viento Norte', 'el Frío Eterno',
          'la Ceniza', 'la Llama Azul', 'el Filo', 'la Garra Roja', 'el Pacto Antiguo', 'la Sangre Pura',
          'el Trono Vacío', 'la Corona Caída', 'el Heraldo', 'el Profeta Mudo', 'el Vigilante', 'el Errante',
          'el Camino Oculto', 'la Verdad', 'la Mentira', 'la Sombra Larga', 'el Eco', 'el Susurro',
          'la Daga Plateada', 'la Espada Justa', 'la Pluma Negra', 'la Llama Cazadora'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'Imperecedero', 'Inquebrantable', 'Errante', 'Silente', 'Sagrado', 'Maldito',
          'Olvidado', 'Eterno', 'Justo', 'Implacable', 'Perdido', 'Renacido',
          'Antiguo', 'Joven', 'Doble', 'Triple', 'Solitario', 'Hermano',
          'Roto', 'Forjado', 'Templado', 'Velado', 'Coronado', 'Caído',
          'Levantado', 'Marchito', 'Floreciente', 'Oscuro', 'Luminoso', 'Helado',
          'Ardiente', 'Tronante', 'Susurrante', 'Vigilante', 'Errante', 'Anclado',
          'Ascendente', 'Descendente', 'Verdadero', 'Negado'
        ]
      },
      {
        id: 'banner',
        label: 'Mote heráldico',
        items: [
          'del Norte', 'del Sur', 'del Este', 'del Oeste', 'del Valle', 'del Río',
          'de las Cumbres', 'del Pantano', 'del Desierto', 'del Bosque', 'de la Estepa', 'del Mar',
          'del Trono', 'de la Corona', 'del Hambre', 'de la Cosecha', 'del Invierno', 'del Verano',
          'del Eco Final', 'del Primer Día', 'del Último Suspiro', 'del Pacto Roto', 'del Juramento Cumplido',
          'de la Reina Muerta', 'del Rey Justo', 'del Profeta Falso', 'del Sabio Olvidado',
          'sin Patria', 'sin Bandera', 'sin Nombre', 'con Cien Voces', 'con Una Sola Mano',
          'que Vigila', 'que Cabalga', 'que No Olvida', 'que No Perdona', 'que Custodia',
          'del Camino Antiguo', 'de los Tres Reinos', 'de la Era Caída'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Anatomía de un buen nombre de alianza',
        body: '<p>Las alianzas memorables comparten tres elementos: una <strong>palabra organizadora</strong> (Orden, Hermandad, Pacto), un <strong>símbolo central</strong> (Llama, Hierro, Cuervo) y un <strong>diferenciador identitario</strong> (Eterno, del Norte, Roto). <em>Orden de la Llama Eterna</em> funciona porque comunica estructura jerárquica, símbolo poderoso y promesa de permanencia en seis palabras.</p><p>Los gremios de MMORPG exitosos siguen este patrón intuitivamente. <em>Method</em> en WoW, <em>Liquid</em> en LoL: nombres cortos pero con peso simbólico. Para guilds de raid, prioritizá nombres que se griten bien en VoIP y se vean nítidos en pancartas; <em>Cuervos del Velo</em> se lee fácil en chat, <em>La Esplendorosa Cofradía Resurgente del Tercer Templo</em> ahuyenta reclutas.</p><p>Si tu alianza es ficticia (rol de mesa, novela, videojuego), reservá nombres complejos para grupos antiguos con tradición. Una alianza fundada hace 800 años puede llamarse <em>Hijos del Pacto Roto del Primer Invierno</em>; un grupo formado el mes pasado merece algo más directo como <em>Lobos del Acero</em>. Esa proporción nombre-antigüedad refuerza credibilidad histórica.</p>'
      },
      {
        h2: 'Nombres por género: estrategia, fantasía, sci-fi',
        body: '<p>En juegos de estrategia tipo <em>Total War</em> o <em>Crusader Kings</em>, las alianzas se nombran según ideología y geografía. <em>Liga Hanseática</em>, <em>Triple Entente</em>, <em>Pacto de Varsovia</em>: nombres reales que mezclan tipo de alianza con marcador territorial. Replicá esa lógica con <em>Liga del Norte Frío</em> o <em>Pacto de los Tres Ríos</em>.</p><p>En fantasía épica, los nombres se vuelven más mitológicos. <em>Compañía del Anillo</em>, <em>Vigilantes de la Noche</em>: corto, evocador, con misión implícita en el nombre. Si tu alianza protege algo (frontera, secreto, reliquia), incluilo en el nombre. Los <em>Custodios del Velo</em> sabemos qué hacen sin contexto adicional.</p><p>En sci-fi, el patrón se invierte hacia tecnocrático. <em>Federación de Planetas Unidos</em>, <em>Coalición de Sistemas Independientes</em>: nombres administrativos largos pero precisos. Para corporaciones tipo cyberpunk, abreviaturas funcionan: <em>Arasaka</em>, <em>Weyland-Yutani</em>. La identidad corporativa imita lo real, así que apellidos compuestos o acrónimos memorables (NCR, GDI) aportan autenticidad.</p>'
      },
      {
        h2: 'Errores que arruinan nombres de alianza',
        body: '<p>Primer error: vocabulario edgelord saturado. <em>Sangre de los Demonios Oscuros del Infierno Eterno</em> apila intensidad sin coherencia. Los nombres potentes confían en una idea fuerte, no en cinco superpuestas. <em>Sangre del Velo</em> es más amenazante porque sugiere misterio en vez de gritarlo.</p><p>Segundo error: nombres impronunciables. Si tu guild se llama <em>Xyrgth\'naal Vex</em>, ningún streamer va a mencionarte y los reclutas escriben mal el nombre. Las alianzas reales famosas (OTAN, BRICS, Mercosur) son legibles a propósito. Si necesitás explicar la pronunciación, perdiste impacto.</p><p>Tercer error: copiar marcas registradas o memes. <em>Caballeros del Anillo</em>, <em>Compañía Stark</em>, <em>Guild of the Gigachads</em> envejecen mal y enfrentan claims legales. Inspirate en arquetipos universales (estaciones, fenómenos naturales, oficios) en vez de IPs vivas. <em>Cuervos del Invierno</em> bebe del mismo pozo arquetípico que <em>Game of Thrones</em> sin pisar la marca.</p>'
      },
      {
        h2: 'Construir identidad visual y narrativa',
        body: '<p>Un nombre no es suficiente: las alianzas memorables tienen escudo, lema y código de conducta. Cuando bautices una alianza, definí inmediatamente: ¿qué animal o símbolo va en el escudo? ¿Qué frase repiten antes de batalla? ¿Qué prohibiciones rigen entre miembros? <em>Orden del Hierro</em> sin escudo ni lema es solo etiqueta; con un puño cerrado sobre yunque y el lema <em>"Templados, no rotos"</em>, se convierte en cultura.</p><p>Las jerarquías internas refuerzan identidad. Los miembros nuevos son <em>aspirantes</em>; los veteranos, <em>portaestandartes</em>; los líderes, <em>capitanes</em>. Esa nomenclatura propia construye sentido de pertenencia y permite que los jugadores ascendan visiblemente. Eve Online y Star Wars Galaxies prosperaron por jerarquías profundas dentro de alianzas grandes.</p><p>Para narrativa, atá el nombre a un evento fundacional. <em>Hermandad del Velo</em> nació cuando siete sobrevivientes juraron sobre la tumba de su capitán. Esa historia origen, contada en una página, da peso emocional a cada decisión de la alianza. Los gremios competitivos prosperan más cuando tienen mito propio: lealtad nace de identidad compartida, no de slogans corporativos.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuál es el largo ideal para un nombre de alianza?',
        a: 'Entre 2 y 5 palabras. Nombres más cortos (Method, Liquid) son icónicos pero requieren branding consolidado. Para alianzas nuevas, 3 palabras tipo <em>Cuervos del Velo</em> dan equilibrio: memorable, descriptivo y pronunciable en cualquier voz chat.'
      },
      {
        q: '¿Conviene incluir el tipo de juego en el nombre?',
        a: 'No. Si tu alianza solo juega WoW y se llama <em>WoW Raiders Gold</em>, no podés migrar a otro juego sin rebautizar. Mantené el nombre temáticamente neutro para que sobreviva cambios de juego o expansión a otros títulos.'
      },
      {
        q: '¿Cómo verifico que mi nombre no esté tomado?',
        a: 'Buscá en Google con comillas, en el roster oficial del juego y en redes sociales (Twitter, YouTube). Para esports profesionales, registrá la marca antes de torneos pagos. En juegos casuales basta con que no exista nadie activo con ese nombre en tu servidor.'
      },
      {
        q: '¿Puedo cambiar el nombre de mi alianza después de fundarla?',
        a: 'Técnicamente sí, pero la mayoría de juegos lo dificultan o cobran. Identidad de marca también cuesta: rebautizar después de 6 meses de actividad confunde a aliados y enemigos. Mejor dedicar tiempo en encontrar el nombre correcto al inicio.'
      }
    ]
  },
  en: {
    pageTitle: 'Alliance Name Generator | Genfy',
    metaDesc: 'Create alliance, coalition and faction names for strategy games, guilds and fictional organizations. Epic identity for your team or guild.',
    h1: 'Alliance Name Generator',
    intro: 'Christen your coalition with names that command respect: alliances for MMORPGs, competitive guilds, wargame factions and fantasy organizations.',
    tag: 'Worldbuilding',
    filterLabel: 'Tone',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'opener',
        label: 'Opener',
        items: [
          'Order of', 'Brotherhood of', 'Pact of', 'League of', 'Coalition of', 'Alliance of',
          'House of', 'Blood of', 'Crown of', 'Banner of', 'Seal of', 'Oath of',
          'Vanguard of', 'Rearguard of', 'Claw of', 'Fang of', 'Wing of', 'Shadow of',
          'Sword of', 'Spear of', 'Shield of', 'Helm of', 'Sons of', 'Daughters of',
          'Heirs of', 'Keepers of', 'Guardians of', 'Hunters of', 'Executioners of', 'Wolves of',
          'Ravens of', 'Lions of', 'Hawks of', 'Dragons of', 'Tigers of', 'Grey Wolves of',
          'Knights of', 'Sages of', 'Mages of', 'Masters of'
        ]
      },
      {
        id: 'core',
        label: 'Core',
        items: [
          'the Eternal Flame', 'the Iron', 'the Steel', 'the Storm', 'the Mist', 'the Thunder',
          'the Aurora', 'the Twilight', 'the Midnight', 'the Dawn', 'the Black Moon', 'the Broken Sun',
          'the Veil', 'the Abyss', 'the Void', 'the Tide', 'the North Wind', 'the Eternal Cold',
          'the Ash', 'the Blue Flame', 'the Edge', 'the Red Claw', 'the Ancient Pact', 'the Pure Blood',
          'the Empty Throne', 'the Fallen Crown', 'the Herald', 'the Mute Prophet', 'the Watcher', 'the Wanderer',
          'the Hidden Path', 'the Truth', 'the Lie', 'the Long Shadow', 'the Echo', 'the Whisper',
          'the Silver Dagger', 'the Just Sword', 'the Black Quill', 'the Hunting Flame'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'Undying', 'Unbroken', 'Wandering', 'Silent', 'Sacred', 'Cursed',
          'Forgotten', 'Eternal', 'Just', 'Relentless', 'Lost', 'Reborn',
          'Ancient', 'Young', 'Twin', 'Triple', 'Solitary', 'Brother',
          'Broken', 'Forged', 'Tempered', 'Veiled', 'Crowned', 'Fallen',
          'Risen', 'Withered', 'Blooming', 'Dark', 'Luminous', 'Frozen',
          'Burning', 'Thundering', 'Whispering', 'Watchful', 'Wandering', 'Anchored',
          'Ascending', 'Descending', 'True', 'Denied'
        ]
      },
      {
        id: 'banner',
        label: 'Heraldic motto',
        items: [
          'of the North', 'of the South', 'of the East', 'of the West', 'of the Valley', 'of the River',
          'of the Peaks', 'of the Marsh', 'of the Desert', 'of the Forest', 'of the Steppe', 'of the Sea',
          'of the Throne', 'of the Crown', 'of Hunger', 'of the Harvest', 'of Winter', 'of Summer',
          'of the Final Echo', 'of the First Day', 'of the Last Breath', 'of the Broken Pact', 'of the Kept Oath',
          'of the Dead Queen', 'of the Just King', 'of the False Prophet', 'of the Forgotten Sage',
          'without Homeland', 'without Banner', 'without Name', 'with a Hundred Voices', 'with One Hand',
          'who Watch', 'who Ride', 'who Do Not Forget', 'who Do Not Forgive', 'who Guard',
          'of the Old Path', 'of the Three Kingdoms', 'of the Fallen Era'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Anatomy of a great alliance name',
        body: '<p>Memorable alliances share three elements: an <strong>organizing word</strong> (Order, Brotherhood, Pact), a <strong>central symbol</strong> (Flame, Iron, Raven) and an <strong>identity differentiator</strong> (Eternal, of the North, Broken). <em>Order of the Eternal Flame</em> works because it communicates hierarchical structure, powerful symbol and promise of permanence in six words.</p><p>Successful MMORPG guilds follow this pattern intuitively. <em>Method</em> in WoW, <em>Liquid</em> in LoL: short names with symbolic weight. For raid guilds, prioritize names that shout well over VoIP and look crisp on banners; <em>Ravens of the Veil</em> reads easily in chat, <em>The Splendorous Resurgent Brotherhood of the Third Temple</em> scares off recruits.</p><p>If your alliance is fictional (tabletop roleplay, novel, video game), reserve complex names for ancient groups with tradition. An alliance founded 800 years ago can be called <em>Sons of the Broken Pact of First Winter</em>; a group formed last month deserves something direct like <em>Wolves of Steel</em>. That name-age proportion reinforces historical credibility.</p>'
      },
      {
        h2: 'Names by genre: strategy, fantasy, sci-fi',
        body: '<p>In strategy games like <em>Total War</em> or <em>Crusader Kings</em>, alliances are named by ideology and geography. <em>Hanseatic League</em>, <em>Triple Entente</em>, <em>Warsaw Pact</em>: real names mixing alliance type with territorial marker. Replicate that logic with <em>League of the Cold North</em> or <em>Pact of the Three Rivers</em>.</p><p>In epic fantasy, names become more mythological. <em>Fellowship of the Ring</em>, <em>Night\'s Watch</em>: short, evocative, with implicit mission in name. If your alliance protects something (border, secret, relic), include it in the name. We know what <em>Keepers of the Veil</em> do without additional context.</p><p>In sci-fi, the pattern inverts toward technocratic. <em>United Federation of Planets</em>, <em>Coalition of Independent Systems</em>: long but precise administrative names. For cyberpunk corporations, abbreviations work: <em>Arasaka</em>, <em>Weyland-Yutani</em>. Corporate identity mimics reality, so compound surnames or memorable acronyms (NCR, GDI) bring authenticity.</p>'
      },
      {
        h2: 'Mistakes that ruin alliance names',
        body: '<p>First mistake: saturated edgelord vocabulary. <em>Blood of the Dark Demons of the Eternal Hell</em> piles intensity without coherence. Powerful names rely on one strong idea, not five overlapping. <em>Blood of the Veil</em> is more menacing because it suggests mystery rather than shouting it.</p><p>Second mistake: unpronounceable names. If your guild is called <em>Xyrgth\'naal Vex</em>, no streamer mentions you and recruits misspell the name. Famous real alliances (NATO, BRICS, ASEAN) are readable on purpose. If you need to explain pronunciation, you lost impact.</p><p>Third mistake: copying trademarks or memes. <em>Knights of the Ring</em>, <em>Stark Company</em>, <em>Guild of the Gigachads</em> age poorly and face legal claims. Draw inspiration from universal archetypes (seasons, natural phenomena, trades) instead of living IPs. <em>Winter\'s Ravens</em> drinks from the same archetypal well as <em>Game of Thrones</em> without stepping on the brand.</p>'
      },
      {
        h2: 'Building visual and narrative identity',
        body: '<p>A name isn\'t enough: memorable alliances have crest, motto and code of conduct. When you christen an alliance, immediately define: what animal or symbol goes on the crest? What phrase do they repeat before battle? What prohibitions govern members? <em>Order of Iron</em> without crest or motto is just label; with a closed fist over anvil and motto <em>"Tempered, not broken"</em>, it becomes culture.</p><p>Internal hierarchies reinforce identity. New members are <em>aspirants</em>; veterans, <em>standard-bearers</em>; leaders, <em>captains</em>. That proprietary nomenclature builds sense of belonging and lets players visibly ascend. Eve Online and Star Wars Galaxies thrived on deep hierarchies inside large alliances.</p><p>For narrative, tie the name to a founding event. <em>Brotherhood of the Veil</em> was born when seven survivors swore over their captain\'s grave. That origin story, told in one page, gives emotional weight to each alliance decision. Competitive guilds thrive more when they have their own myth: loyalty arises from shared identity, not corporate slogans.</p>'
      }
    ],
    faq: [
      {
        q: 'What\'s the ideal length for an alliance name?',
        a: 'Between 2 and 5 words. Shorter names (Method, Liquid) are iconic but require established branding. For new alliances, 3-word names like <em>Ravens of the Veil</em> balance memorable, descriptive and pronounceable in any voice chat.'
      },
      {
        q: 'Should I include the game in the name?',
        a: 'No. If your alliance only plays WoW and is called <em>WoW Raiders Gold</em>, you can\'t migrate to another game without rebranding. Keep the name thematically neutral so it survives game changes or expansion to other titles.'
      },
      {
        q: 'How do I verify my name isn\'t taken?',
        a: 'Search Google in quotes, the official game roster, and social media (Twitter, YouTube). For professional esports, register the trademark before paid tournaments. In casual games it\'s enough that no one active uses it on your server.'
      },
      {
        q: 'Can I change my alliance name after founding?',
        a: 'Technically yes, but most games make it difficult or charge fees. Brand identity also costs: rebranding after 6 months of activity confuses allies and enemies. Better to invest time finding the right name at the start.'
      }
    ]
  }
};
