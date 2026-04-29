import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-criatura",
    "en": "creature-name-generator"
  },
  "category": "fun",
  "emoji": "🦎",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Criatura | Genfy",
    "metaDesc": "Creá nombres únicos de criaturas fantásticas y monstruos para bestiarios, juegos de rol, novelas y universos de fantasía con identidad propia.",
    "h1": "Generador de Nombres de Criatura",
    "intro": "Inventá criaturas memorables con nombres que sugieran su naturaleza, hábitat y peligro. Combinaciones para bestiarios, RPGs y mundos de fantasía.",
    "tag": "Worldbuilding",
    "filterLabel": "Componentes",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo / origen",
        "items": [
          "Sombra",
          "Espina",
          "Hueso",
          "Niebla",
          "Garra",
          "Colmillo",
          "Escama",
          "Trueno",
          "Cieno",
          "Ceniza",
          "Cristal",
          "Hierro",
          "Ámbar",
          "Sangre",
          "Hoja",
          "Musgo",
          "Veneno",
          "Brasa",
          "Hielo",
          "Sal",
          "Pluma",
          "Luna",
          "Cripta",
          "Sigilo",
          "Eco",
          "Espuma",
          "Polvo",
          "Bruma",
          "Fauce",
          "Arena"
        ]
      },
      {
        "id": "core",
        "label": "Núcleo / forma",
        "items": [
          "rastrero",
          "alado",
          "fangoso",
          "tejedor",
          "cantor",
          "errante",
          "cornudo",
          "trémulo",
          "voraz",
          "sigiloso",
          "espectral",
          "blindado",
          "pulpado",
          "rampante",
          "abismal",
          "vibrante",
          "marchito",
          "encadenado",
          "podrido",
          "rugiente",
          "burlón",
          "ardiente",
          "putrefacto",
          "engullidor",
          "trepador",
          "destripador",
          "enroscado",
          "petrificado",
          "espinoso",
          "profundo"
        ]
      },
      {
        "id": "suffix",
        "label": "Sufijo / linaje",
        "items": [
          "del Pantano",
          "de las Cuevas",
          "del Abismo",
          "del Bosque Negro",
          "de las Cumbres",
          "de los Páramos",
          "de Yermo",
          "del Velo",
          "de Sangre",
          "del Río Muerto",
          "Lunar",
          "Solar",
          "del Crepúsculo",
          "del Despertar",
          "del Ocaso",
          "Antiguo",
          "Primigenio",
          "del Trono Hueco",
          "del Llano Frío",
          "de la Costa Rota",
          "del Velo Quebrado",
          "Errante",
          "Cazador",
          "Heraldo",
          "Centinela",
          "Profanado",
          "Sin Nombre",
          "del Olvido",
          "del Susurro",
          "Devorador"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de un buen nombre de criatura",
        "body": "<p>Los mejores nombres de criatura siguen una lógica fonosemántica: las consonantes sugieren textura. Las oclusivas duras (k, t, p) comunican peligro y agresión: <em>Krakatok</em>, <em>Drakthul</em>. Las fricativas suaves (s, sh, f) sugieren sigilo o seducción: <em>Slythess</em>, <em>Shaewen</em>. Las nasales (m, n) connotan algo arcaico o místico: <em>Morgath</em>, <em>Nymeran</em>. Esta intuición funciona en todos los idiomas: por eso <em>Smaug</em> suena reptilesco y <em>Mothra</em> suena alada.</p><p>Combiná un descriptor visual con un origen geográfico para criaturas inmediatamente reconocibles. <em>Sombra Errante del Pantano</em> dice qué hace, cómo se comporta y dónde vive en cuatro palabras. Tolkien usaba esta fórmula constantemente: <em>Mirkwood Spider</em>, <em>Barrow-wight</em>, <em>Cave Troll</em>.</p><p>Para bestiarios profesionales, complementá el nombre común con un nombre 'taxonómico' falso. La criatura llamada <em>Croador del Crepúsculo</em> también puede figurar como <em>Bufo umbra-mortis</em>. Esta doble nomenclatura aporta gravitas científica útil para D&D, manuales de juego y novelas con apéndices estilo enciclopédico.</p>"
      },
      {
        "h2": "Tipos de criaturas y patrones de nombrado",
        "body": "<p>Los <strong>monstruos masivos</strong> tradicionales reciben nombres simples y resonantes. <em>Behemoth</em>, <em>Leviathan</em>, <em>Titan</em>: pocas sílabas, vocales abiertas, peso fonético. Si tu campaña tiene un dragón ancestral, no lo llames <em>Sssanthavorinn el Antiguo de Los Velos Profundos</em>; llamalo <em>Vrok</em> o <em>Mor</em>. La brevedad transmite poder.</p><p>Las <strong>criaturas-plaga</strong> (insectoides, parasitarias, multitudinarias) funcionan con nombres compuestos descriptivos: <em>Tejedor Espinoso</em>, <em>Devorador de Médula</em>, <em>Susurrador de Cripta</em>. El componente verbo+objeto comunica función: el jugador o lector entiende inmediatamente qué hace la criatura sin tener que consultar la ficha.</p><p>Los <strong>seres feéricos</strong> (hadas oscuras, espíritus del bosque) usan nombres con ritmo lírico y vocales suaves: <em>Aelaria</em>, <em>Liriath</em>, <em>Yvaine</em>. Evitá consonancias agresivas. Para inspiración, mirá nombrología celta y galesa: están plagadas de digrafías como <em>th</em>, <em>ll</em>, <em>w</em> que aportan exotismo creíble.</p><p>Las <strong>aberraciones cósmicas</strong> al estilo Lovecraft requieren impronunciables intencionales: <em>Ftaghn</em>, <em>Cthulhu</em>, <em>Yog-Sothoth</em>. La dificultad de pronunciación es parte del horror: lo que no podés nombrar tampoco podés controlar.</p>"
      },
      {
        "h2": "Errores que arruinan criaturas en RPG y novelas",
        "body": "<p>Nombres demasiado próximos a marcas registradas: si tu criatura se llama <em>Pikabolt</em>, los lectores piensan en Pokémon antes que en tu mundo. Investigá: googleá tu nombre + 'fantasy' antes de adoptarlo.</p><p>Inconsistencia de naming dentro del mismo mundo: si la mitad de tus criaturas tienen nombres de inspiración nórdica (<em>Fenrir</em>, <em>Jormun</em>) y la otra mitad usan latín macarrónico (<em>Bestiarius</em>, <em>Mortifex</em>), tu worldbuilding se siente colcha de retazos. Definí 2-3 raíces lingüísticas dominantes y respetalas.</p><p>Sobreabundancia de apóstrofes: <em>K'thar'ag'on</em> luce a fantasy de los 90 y agota visualmente. Un apóstrofe puntual aporta exotismo; cuatro distancian al lector. Tolkien casi no los usaba; aprendamos.</p><p>Nombres impronunciables sin necesidad: si tu criatura aparece en diálogo de personajes, tienen que poder decirlo en voz alta. <em>Xqthrlmnu</em> queda lindo en el manual pero ningún jugador de mesa lo va a recordar para usarlo en sesión.</p><p>Olvidar el nombre coloquial: las criaturas viven en mundos donde la gente común también las menciona. Tu <em>Spectrum Devorador del Velo Astral</em> probablemente sea conocido en tabernas como <em>el Comeluces</em>. Esa dualidad hace creíble el ecosistema narrativo.</p>"
      },
      {
        "h2": "Cómo construir un bestiario coherente",
        "body": "<p>Un bestiario no es una lista; es una taxonomía con lógica interna. Antes de nombrar criaturas individuales, definí 4-6 <strong>familias</strong> grandes: aberraciones, no-muertos, bestias, dragónidos, etéreos, fey. Cada familia tendrá patrón de naming consistente.</p><p>Para cada familia, decidí: ¿de qué cultura real toman inspiración? Aberraciones de Lovecraft = consonantes duras + impronunciables. Fey = celta-galés con sonidos líquidos. Dragónidos = nórdico con sufijos rugientes. La consistencia interna del bestiario aumenta inmersión.</p><p>Mantené una hoja de cálculo con cada criatura: nombre común, nombre 'académico', familia, hábitat, cita textual de descripción de 2-3 líneas. Cuando agregues criaturas nuevas, revisá que no haya repeticiones fonéticas con las existentes (<em>Krakthul</em> y <em>Krakthorn</em> en el mismo bestiario es problema).</p><p>Dale a cada criatura un detalle único memorable. <em>Susurrador de Cripta: solo aparece bajo lluvia, repite frases en idiomas muertos antes de atacar</em>. Ese gancho diferencial es lo que separa una criatura icónica de una entrada estándar de manual. Los jugadores recuerdan los detalles raros, no la estadísticas.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántas sílabas debe tener el nombre de una criatura?",
        "a": "Para impacto inmediato, 1-3 sílabas (<em>Vrok, Smaug, Krakatok</em>). Para criaturas elegantes o ancestrales, 4-5 sílabas (<em>Aelarian, Morgathien</em>). Más de 6 sílabas casi nunca funciona, salvo en aberraciones cósmicas intencionalmente impronunciables."
      },
      {
        "q": "¿Conviene mezclar idiomas reales en los nombres?",
        "a": "Sí, pero con criterio. Mezclar latín con japonés en la misma criatura suena confuso. Mezclar dos idiomas dentro de la misma familia (gaélico+nórdico para bestias del norte) puede enriquecer si lo justificás narrativamente."
      },
      {
        "q": "¿Cómo nombro criaturas para campañas en D&D sin copiar el manual?",
        "a": "Tomá una criatura del Monster Manual y reskineala: cambiá nombre, hábitat y dos detalles visuales. Mecánicamente igual, narrativamente única. Los jugadores percibirán originalidad sin que tengas que diseñar stat blocks nuevos."
      },
      {
        "q": "¿Puedo usar nombres de mitología real?",
        "a": "Sí, las mitologías son dominio público. Pero recordá que <em>Banshee</em>, <em>Fenrir</em> o <em>Quetzalcóatl</em> traen significados culturales arraigados. Si los reinterpretás muy diferente del original, justificalo en el lore o el lector se confundirá."
      }
    ]
  },
  "en": {
    "pageTitle": "Creature Name Generator | Genfy",
    "metaDesc": "Create unique fantasy creature and monster names for bestiaries, role-playing games, novels and fantasy universes with their own distinct identity.",
    "h1": "Creature Name Generator",
    "intro": "Invent memorable creatures with names that suggest their nature, habitat and danger. Combinations for bestiaries, RPGs and fantasy worlds.",
    "tag": "Worldbuilding",
    "filterLabel": "Components",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefix / origin",
        "items": [
          "Shadow",
          "Thorn",
          "Bone",
          "Mist",
          "Claw",
          "Fang",
          "Scale",
          "Thunder",
          "Mire",
          "Ash",
          "Crystal",
          "Iron",
          "Amber",
          "Blood",
          "Leaf",
          "Moss",
          "Venom",
          "Ember",
          "Frost",
          "Salt",
          "Feather",
          "Moon",
          "Crypt",
          "Sigil",
          "Echo",
          "Foam",
          "Dust",
          "Haze",
          "Maw",
          "Sand"
        ]
      },
      {
        "id": "core",
        "label": "Core / form",
        "items": [
          "creeper",
          "winged",
          "fenborn",
          "weaver",
          "singer",
          "wanderer",
          "horned",
          "tremor",
          "ravenous",
          "stalker",
          "spectral",
          "armored",
          "tentacled",
          "rampant",
          "abyssal",
          "thrumming",
          "withered",
          "chained",
          "rotted",
          "roaring",
          "trickster",
          "burning",
          "putrid",
          "engulfer",
          "climber",
          "ripper",
          "coiled",
          "petrified",
          "spined",
          "deepborn"
        ]
      },
      {
        "id": "suffix",
        "label": "Suffix / lineage",
        "items": [
          "of the Mire",
          "of the Caves",
          "of the Abyss",
          "of the Black Wood",
          "of the Peaks",
          "of the Moors",
          "of the Wastes",
          "of the Veil",
          "Bloodborn",
          "of the Dead River",
          "Lunar",
          "Solar",
          "of Twilight",
          "of the Waking",
          "of Dusk",
          "Ancient",
          "Primordial",
          "of the Hollow Throne",
          "of the Cold Plain",
          "of the Broken Coast",
          "of the Torn Veil",
          "Wandering",
          "Hunter",
          "Herald",
          "Sentinel",
          "Defiled",
          "Nameless",
          "of Oblivion",
          "of the Whisper",
          "Devourer"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of a good creature name",
        "body": "<p>The best creature names follow phonosemantic logic: consonants suggest texture. Hard stops (k, t, p) communicate danger and aggression: <em>Krakatok</em>, <em>Drakthul</em>. Soft fricatives (s, sh, f) suggest stealth or seduction: <em>Slythess</em>, <em>Shaewen</em>. Nasals (m, n) connote something archaic or mystical: <em>Morgath</em>, <em>Nymeran</em>. This intuition works across languages: that's why <em>Smaug</em> sounds reptilian and <em>Mothra</em> sounds winged.</p><p>Combine a visual descriptor with a geographic origin for instantly recognizable creatures. <em>Wandering Shadow of the Mire</em> says what it does, how it behaves and where it lives in five words. Tolkien used this formula constantly: <em>Mirkwood Spider</em>, <em>Barrow-wight</em>, <em>Cave Troll</em>.</p><p>For professional bestiaries, complement the common name with a fake 'taxonomic' name. The creature called <em>Twilight Croaker</em> can also appear as <em>Bufo umbra-mortis</em>. This double nomenclature lends scientific gravitas useful for D&D, game manuals and novels with encyclopedic-style appendices.</p>"
      },
      {
        "h2": "Creature types and naming patterns",
        "body": "<p>Traditional <strong>massive monsters</strong> get simple, resonant names. <em>Behemoth</em>, <em>Leviathan</em>, <em>Titan</em>: few syllables, open vowels, phonetic weight. If your campaign has an ancestral dragon, don't call it <em>Sssanthavorinn the Ancient of Deep Veils</em>; call it <em>Vrok</em> or <em>Mor</em>. Brevity conveys power.</p><p><strong>Plague creatures</strong> (insectoid, parasitic, swarming) work with descriptive compound names: <em>Spined Weaver</em>, <em>Marrow Devourer</em>, <em>Crypt Whisperer</em>. The verb+object component communicates function: the player or reader immediately understands what the creature does without consulting the stat sheet.</p><p><strong>Faerie beings</strong> (dark fey, forest spirits) use names with lyrical rhythm and soft vowels: <em>Aelaria</em>, <em>Liriath</em>, <em>Yvaine</em>. Avoid aggressive consonance. For inspiration, look at Celtic and Welsh nameology: they're full of digraphs like <em>th</em>, <em>ll</em>, <em>w</em> that lend believable exoticism.</p><p>Lovecraftian-style <strong>cosmic aberrations</strong> require intentional unpronounceables: <em>Ftaghn</em>, <em>Cthulhu</em>, <em>Yog-Sothoth</em>. Pronunciation difficulty is part of the horror: what you can't name, you can't control.</p>"
      },
      {
        "h2": "Mistakes that ruin creatures in RPGs and novels",
        "body": "<p>Names too close to trademarks: if your creature is called <em>Pikabolt</em>, readers think Pokémon before your world. Research: Google your name + 'fantasy' before adopting it.</p><p>Naming inconsistency within the same world: if half your creatures have Norse-inspired names (<em>Fenrir</em>, <em>Jormun</em>) and the other half use mock-Latin (<em>Bestiarius</em>, <em>Mortifex</em>), your worldbuilding feels patchwork. Define 2-3 dominant linguistic roots and respect them.</p><p>Apostrophe overload: <em>K'thar'ag'on</em> looks like 90s fantasy and tires the eye. A targeted apostrophe adds exoticism; four distance the reader. Tolkien barely used them; let's learn.</p><p>Unnecessarily unpronounceable names: if your creature appears in character dialogue, they have to be able to say it aloud. <em>Xqthrlmnu</em> looks great in the manual but no tabletop player will remember it to use in session.</p><p>Forgetting the colloquial name: creatures live in worlds where common folk also mention them. Your <em>Astral Veil Devouring Spectrum</em> is probably known in taverns as <em>the Lighteater</em>. That duality makes the narrative ecosystem believable.</p>"
      },
      {
        "h2": "How to build a coherent bestiary",
        "body": "<p>A bestiary isn't a list; it's a taxonomy with internal logic. Before naming individual creatures, define 4-6 large <strong>families</strong>: aberrations, undead, beasts, dragonkin, ethereals, fey. Each family will have a consistent naming pattern.</p><p>For each family, decide: what real culture inspires them? Lovecraftian aberrations = hard consonants + unpronounceable. Fey = Celtic-Welsh with liquid sounds. Dragonkin = Norse with roaring suffixes. Internal bestiary consistency boosts immersion.</p><p>Keep a spreadsheet for each creature: common name, 'academic' name, family, habitat, 2-3 line description quote. When adding new creatures, check there's no phonetic repetition with existing ones (<em>Krakthul</em> and <em>Krakthorn</em> in the same bestiary is a problem).</p><p>Give each creature a memorable unique detail. <em>Crypt Whisperer: only appears in rain, repeats phrases in dead languages before attacking</em>. That differential hook separates an iconic creature from a standard manual entry. Players remember weird details, not stats.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many syllables should a creature name have?",
        "a": "For immediate impact, 1-3 syllables (<em>Vrok, Smaug, Krakatok</em>). For elegant or ancestral creatures, 4-5 syllables (<em>Aelarian, Morgathien</em>). More than 6 syllables almost never works, except in intentionally unpronounceable cosmic aberrations."
      },
      {
        "q": "Should I mix real languages in names?",
        "a": "Yes, but with criteria. Mixing Latin with Japanese in the same creature sounds confusing. Mixing two languages within the same family (Gaelic+Norse for northern beasts) can enrich if you justify it narratively."
      },
      {
        "q": "How do I name creatures for D&D campaigns without copying the manual?",
        "a": "Take a Monster Manual creature and reskin it: change name, habitat and two visual details. Mechanically the same, narratively unique. Players will perceive originality without you designing new stat blocks."
      },
      {
        "q": "Can I use names from real mythology?",
        "a": "Yes, mythologies are public domain. But remember <em>Banshee</em>, <em>Fenrir</em> or <em>Quetzalcoatl</em> bring deep cultural meanings. If you reinterpret them very differently from the original, justify it in lore or the reader will get confused."
      }
    ]
  }
};
