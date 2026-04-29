import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-mutante",
    "en": "mutant-name-generator"
  },
  "category": "fun",
  "emoji": "☢️",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Mutante | Genfy",
    "metaDesc": "Inventá nombres de mutantes, seres irradiados y criaturas post-nucleares para escenarios apocalípticos. Para novelas, juegos de rol y videojuegos.",
    "h1": "Generador de Nombres de Mutante",
    "intro": "Diseñá criaturas alteradas por radiación, viviparturos del wasteland y bestias híbridas con identidad única. Inspirado en Fallout, Stalker y Metro 2033.",
    "tag": "Criaturas",
    "filterLabel": "Tipo de mutación",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo de origen",
        "items": [
          "Rad", "Glow", "Atom", "Iso", "Ferro", "Necro", "Pyro", "Cryo", "Toxi",
          "Pseudo", "Para", "Hyper", "Hypo", "Sub", "Pre", "Post", "Trans",
          "Crypt", "Geo", "Bio", "Carbon", "Plasma", "Ion", "Neutron", "Proto",
          "Eo", "Late", "Hemo", "Lipo", "Sebo", "Mucu", "Petro", "Volca",
          "Niva", "Acu"
        ]
      },
      {
        "id": "stem",
        "label": "Raíz biológica",
        "items": [
          "rata", "lobo", "tortuga", "víbora", "ciempiés", "escarabajo", "polilla",
          "carcoma", "hiena", "comadreja", "cuervo", "buitre", "iguana", "salamandra",
          "topo", "lince", "musaraña", "jabalí", "conejo", "chinche", "babosa",
          "cangrejo", "langosta", "anguila", "morena", "lamprea", "rana", "sapo",
          "axolotl", "carpa", "cucaracha", "alacrán", "garrapata", "mosquito", "araña"
        ]
      },
      {
        "id": "modifier",
        "label": "Modificador físico",
        "items": [
          "ciega", "luminosa", "espinosa", "blanca", "negra", "albina", "ósea",
          "membranosa", "espinada", "branquiada", "cuádruple", "bicéfala", "policéfala",
          "translúcida", "fluorescente", "calcárea", "córnea", "blindada", "alada",
          "agigantada", "miniaturizada", "petrificada", "barbada", "tentaculada",
          "esquelética", "musculosa", "obesa", "deforme", "simétrica", "asimétrica",
          "fungosa", "vascularizada", "carbonizada", "fosilizada", "regenerativa"
        ]
      },
      {
        "id": "habitat",
        "label": "Hábitat / origen ambiental",
        "items": [
          "del Reactor", "del Río Negro", "de la Cripta", "del Cráter", "del Subsuelo",
          "de las Cloacas", "del Mar Muerto", "del Cementerio Norte", "de la Mina",
          "del Túnel Cinco", "del Pantano Rojo", "del Bosque Calcinado", "de las Ruinas",
          "del Silo", "del Vertedero", "del Hospital Abandonado", "del Asilo",
          "del Frigorífico", "del Búnker", "del Subte Inundado", "del Lago Ácido",
          "del Hangar", "de la Nube Tóxica", "del Reactor Cuatro", "del Pasillo Diez",
          "del Sector Prohibido", "del Polo Industrial", "del Acueducto",
          "de la Antena Caída", "del Glaciar Negro", "del Embalse Vacío",
          "de la Catacumba", "del Vagón de Carga", "del Granero Quemado",
          "del Volcán Frío"
        ]
      },
      {
        "id": "frame",
        "label": "Estilo del nombre",
        "items": [
          "Compuesto técnico tipo Fallout (Radroach, Glowing One)",
          "Apodo cariñoso de los habitantes ('el Pelado')",
          "Categoría científica falsa (Homo radiophilus)",
          "Nombre indígena adaptado", "Diminutivo despectivo",
          "Aumentativo amenazante", "Onomatopeya del sonido que hace",
          "Nombre tipo Stalker con palabra rusa", "Nombre tipo Metro 2033 sombrío",
          "Nombre estilo cuento popular ('el Vecino Quemado')",
          "Nombre estilo bestiario medieval", "Nombre estilo informe militar",
          "Nombre estilo libro infantil retorcido", "Nombre estilo cómic underground",
          "Nombre estilo manga seinen", "Nombre estilo Junji Ito visual",
          "Nombre estilo Resident Evil clínico", "Nombre estilo X-Files clasificado",
          "Nombre estilo Cthulhu impronunciable", "Nombre estilo niños del barrio",
          "Nombre estilo radio CB con código", "Nombre estilo cazador con apodo",
          "Nombre estilo grafiti del wasteland", "Nombre estilo banda de rock pesado",
          "Nombre estilo telón de cabaret extraño", "Nombre estilo escuela primaria",
          "Nombre estilo profesor universitario", "Nombre estilo zoo abandonado",
          "Nombre estilo carnicería rural", "Nombre estilo religión de wasteland",
          "Nombre estilo periodista amarillista", "Nombre estilo policial barrial",
          "Nombre estilo programa de TV cancelado", "Nombre estilo manual de supervivencia",
          "Nombre estilo poema apocalíptico"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo nombrar mutantes que se sientan biológicamente plausibles",
        "body": "<p>El truco para nombrar mutantes es anclar la criatura a un animal real más una alteración. <em>Fallout</em> hace esto magistralmente: <em>Radroach</em> es cucaracha + radiación; <em>Mirelurk</em> es cangrejo + pantano; <em>Deathclaw</em> es saurio + horror. El lector entiende inmediatamente: 'es un X pero peor'. Si tu mutante es 'Glogworm', ya imagina gusano fluorescente.</p><p>Pensá la lógica narrativa de la mutación. ¿Cuál es el agente causal en tu mundo: radiación atómica, virus, magia residual, contaminación química, ingeniería genética escapada? Cada uno sugiere estética distinta. Radiación: animales gigantes, fluorescentes, multimembrados. Virus: deformaciones asimétricas, tumores, secreciones. Magia: simbología arcana, formas imposibles, glow. La elección debe ser consistente.</p><p>Considerá la mirada del nombrador. ¿Quién pone el nombre: científicos, militares, sobrevivientes barriales, niños? Un científico dice 'Rana iridiscens'; un militar dice 'Tango Verde'; un barrial dice 'el Pelado'; un niño dice 'el Babababaco'. Decidí qué cultura nombra y el registro emerge solo. <em>Stalker</em> usa apodos coloquiales rusos para sus mutantes ('Bloodsucker', 'Pseudogiant'); funciona porque hay tradición de stalkers profesionales que los etiquetan.</p>"
      },
      {
        "h2": "Tipologías de mutante en ficción post-apocalíptica",
        "body": "<p><strong>Mutación animal directa</strong>: una especie real alterada (rata gigante, perro irradiado, jabalí albino). Lo más usado y más fácil de comunicar. <em>Radroach</em>, <em>Brahmin</em>, <em>Yao Guai</em> de Fallout. <strong>Mutación humana</strong>: humanos alterados por exposición prolongada. <em>Ghouls</em> de Fallout, los <em>Pripyat</em> de Stalker, los <em>Crawlers</em> de The Descent. Conllevan dilemas morales: ¿siguen siendo personas?</p><p><strong>Vegetal o fúngica</strong>: poco explorada y muy fértil. Plantas que cazan, hongos que controlan animales, líquenes que cubren cuerpos. <em>The Last of Us</em> tiene a los infectados con cordyceps. <strong>Hibridación</strong>: mezclas imposibles entre especies. <em>Centaur</em> (caballo+humano+otros) en Fallout. Suelen tener nombres mitológicos reactualizados.</p><p><strong>Cybernética post-fall</strong>: criaturas medio biológicas medio máquina. Robots viejos colonizados por musgo y nervios; perros con implantes oxidados. Sus nombres mezclan terminología tecnológica con biológica: <em>Cyber-hound mark IV</em>, <em>Bioauto</em>. <strong>Energético/abstracto</strong>: mutaciones que dejan al ser parcialmente intangible o energético. <em>Chimera Anomalies</em> de Stalker. Sus nombres tienden a científicos pseudoplausibles o místicos.</p>"
      },
      {
        "h2": "Errores comunes al nombrar mutantes",
        "body": "<p>Primero: copiar Fallout literalmente. <em>Radroach</em>, <em>Mirelurk</em> y <em>Deathclaw</em> están registrados culturalmente; usarlos rompe inmersión. Inspirate en su lógica de composición pero buscá tus propios animales y modificadores. Si tu mundo está en Sudamérica, podés usar <em>Yacaré quemado</em>, <em>Carpinchocida</em>, <em>Pirañatlante</em>.</p><p>Segundo: nombre que no comunica nada. 'Krek' suena raro pero el lector no sabe si es del tamaño de un perro o un edificio, si vuela o repta, si caza o pasta. Mejor un nombre que dé pista visual o conductual: 'Roedor blindado del subsuelo' es largo pero claro. Para uso oral repetido, abrevialo: 'Blindado' o 'Sub'. Pero el primer encuentro debe orientar.</p><p>Tercero: ignorar el ecosistema. Si tu mundo tiene ratas gigantes, perros gigantes, abejas gigantes, todo gigante, perdés contraste. Mejor mezclar: tres mutaciones grandes, dos mutaciones pequeñas pero peligrosas, una mutación inteligente. <em>Resident Evil</em> alterna lickers, hunters, tyrants para mantener tensión. Cuarto: olvidar la mutación cultural. Los humanos sobrevivientes también muta su cultura: pueden venerar a ciertos mutantes, comerlos como tradición, evitarlos por superstición. Esa relación enriquece worldbuilding.</p>"
      },
      {
        "h2": "El mutante como espejo del wasteland",
        "body": "<p>Los mejores mutantes en ficción post-apocalíptica funcionan como espejos del mundo. <em>Stalker</em> usa anomalías que no son del todo criaturas, son distorsiones espaciales que matan; reflejan que la zona se volvió en sí misma adversaria. <em>The Last of Us</em> usa cordyceps como metáfora de la fragilidad del ecosistema. Pensá qué quiere decir tu mundo a través de sus mutantes.</p><p>Considerá la economía del mutante. ¿Se cazan por carne, por trofeo, por miedo? ¿Hay mercado de órganos mutantes (medicina, energía)? ¿Algunos sobrevivientes los crían como ganado? Los mutantes son recursos, no solo amenazas. <em>Fallout</em> tiene chefs que cocinan radroach; <em>Metro 2033</em> tiene crianza de hongos. Esa profundidad económica los vuelve parte del tejido del mundo.</p><p>Para uso en juegos de rol, generá tres niveles de mutante. Primero, mutantes ambientales (decoración, abundantes, fáciles). Segundo, mutantes peligrosos (encuentros tácticos, requieren preparación). Tercero, mutante mítico (uno por región, casi imposible, asociado a leyendas). Esta escalera narrativa permite que cada combate sea distinto. Los nombres deberían reflejar el tier: el mutante mítico merece nombre mucho más cargado que la rata gigante de turno. <em>Apocalypse World</em> y <em>Mutant: Year Zero</em> ofrecen estructura para esto.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo decido si mi mutante debe ser inteligente o bestial?",
        "a": "Depende del rol narrativo. Bestial: amenaza física pura, encuentros tácticos. Inteligente: dilema moral, posible aliado o enemigo más complejo. Mezclar ambos tipos en tu mundo enriquece. Los ghouls inteligentes de Fallout coexisten con feral ghouls bestiales."
      },
      {
        "q": "¿El nombre del mutante debe revelar su debilidad?",
        "a": "Solo si tu narrativa lo justifica. En videojuegos suele revelar tipo de daño efectivo (Radscorpion = veneno + insecto). En novela podés ocultarlo y dejar que personajes descubran. Para juegos de rol, ayuda al DM tener nombres semi-descriptivos."
      },
      {
        "q": "¿Sirven estos nombres para Mutant: Year Zero?",
        "a": "Sí, perfecto material. Mutant: Year Zero usa criaturas alteradas en la Zona; estos nombres encajan como amenazas para tus jugadores. También funcionan para Gamma World, Numenera, Apocalypse World y Stalker RPG."
      },
      {
        "q": "¿Cómo evito que mi mutante se sienta visto antes?",
        "a": "Combiná animal local con modificador inesperado. En lugar de 'rata gigante', probá 'comadreja luminosa del subsuelo'. La especificidad geográfica y la rareza del modificador frescan el cliché. Y dale conductas inesperadas, no solo apariencia rara."
      }
    ]
  },
  "en": {
    "pageTitle": "Mutant Name Generator | Genfy",
    "metaDesc": "Invent mutant, irradiated being and post-nuclear creature names for apocalyptic scenarios. Perfect for novels, RPGs and videogames.",
    "h1": "Mutant Name Generator",
    "intro": "Design radiation-altered creatures, wasteland viviparous beasts and hybrid abominations with unique identity. Inspired by Fallout, Stalker and Metro 2033.",
    "tag": "Creatures",
    "filterLabel": "Mutation type",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Origin prefix",
        "items": [
          "Rad", "Glow", "Atom", "Iso", "Ferro", "Necro", "Pyro", "Cryo", "Toxi",
          "Pseudo", "Para", "Hyper", "Hypo", "Sub", "Pre", "Post", "Trans",
          "Crypt", "Geo", "Bio", "Carbon", "Plasma", "Ion", "Neutron", "Proto",
          "Eo", "Late", "Hemo", "Lipo", "Sebo", "Mucu", "Petro", "Volca",
          "Niva", "Acu"
        ]
      },
      {
        "id": "stem",
        "label": "Biological root",
        "items": [
          "rat", "wolf", "turtle", "viper", "centipede", "beetle", "moth",
          "weevil", "hyena", "weasel", "crow", "vulture", "iguana", "salamander",
          "mole", "lynx", "shrew", "boar", "rabbit", "bug", "slug",
          "crab", "lobster", "eel", "moray", "lamprey", "frog", "toad",
          "axolotl", "carp", "roach", "scorpion", "tick", "mosquito", "spider"
        ]
      },
      {
        "id": "modifier",
        "label": "Physical modifier",
        "items": [
          "blind", "luminous", "thorny", "white", "black", "albino", "bony",
          "membranous", "spined", "gilled", "quadruple", "bicephalic", "polycephalic",
          "translucent", "fluorescent", "calcareous", "horny", "armored", "winged",
          "gigantic", "miniaturized", "petrified", "bearded", "tentacled",
          "skeletal", "muscular", "obese", "deformed", "symmetric", "asymmetric",
          "fungal", "vascularized", "charred", "fossilized", "regenerative"
        ]
      },
      {
        "id": "habitat",
        "label": "Habitat / environmental origin",
        "items": [
          "of the Reactor", "of the Black River", "of the Crypt", "of the Crater", "of the Underground",
          "of the Sewers", "of the Dead Sea", "of the North Cemetery", "of the Mine",
          "of Tunnel Five", "of the Red Swamp", "of the Charred Forest", "of the Ruins",
          "of the Silo", "of the Dump", "of the Abandoned Hospital", "of the Asylum",
          "of the Slaughterhouse", "of the Bunker", "of the Flooded Subway", "of the Acid Lake",
          "of the Hangar", "of the Toxic Cloud", "of Reactor Four", "of Hallway Ten",
          "of the Forbidden Sector", "of the Industrial Park", "of the Aqueduct",
          "of the Fallen Antenna", "of the Black Glacier", "of the Empty Reservoir",
          "of the Catacomb", "of the Cargo Wagon", "of the Burned Granary",
          "of the Cold Volcano"
        ]
      },
      {
        "id": "frame",
        "label": "Name style",
        "items": [
          "Fallout-style technical compound (Radroach, Glowing One)",
          "Affectionate inhabitant nickname ('the Bald One')",
          "False scientific category (Homo radiophilus)",
          "Adapted indigenous name", "Contemptuous diminutive",
          "Threatening augmentative", "Onomatopoeia of its sound",
          "Stalker-style with Russian word", "Metro 2033-style somber",
          "Folk-tale style ('the Burned Neighbor')",
          "Medieval bestiary style", "Military report style",
          "Twisted children's book style", "Underground comic style",
          "Seinen manga style", "Junji Ito visual style",
          "Resident Evil clinical style", "X-Files classified style",
          "Unpronounceable Cthulhu style", "Neighborhood kids style",
          "CB radio code style", "Hunter's nickname style",
          "Wasteland graffiti style", "Heavy rock band style",
          "Strange cabaret curtain style", "Elementary school style",
          "University professor style", "Abandoned zoo style",
          "Rural butcher shop style", "Wasteland religion style",
          "Tabloid journalist style", "Local cop style",
          "Cancelled TV show style", "Survival manual style",
          "Apocalyptic poem style"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to name mutants that feel biologically plausible",
        "body": "<p>The trick is to anchor the creature to a real animal plus an alteration. <em>Fallout</em> does this masterfully: <em>Radroach</em> is roach + radiation; <em>Mirelurk</em> is crab + swamp; <em>Deathclaw</em> is reptilian + horror. The reader immediately understands: 'it's an X but worse'. If your mutant is 'Glogworm', they imagine a fluorescent worm.</p><p>Think the narrative logic of the mutation. What's the causal agent in your world: atomic radiation, virus, residual magic, chemical pollution, escaped genetic engineering? Each suggests different aesthetics. Radiation: giant, fluorescent, multi-limbed animals. Virus: asymmetric deformations, tumors, secretions. Magic: arcane symbology, impossible shapes, glow. The choice must be consistent.</p><p>Consider the namer's gaze. Who names: scientists, military, neighborhood survivors, children? A scientist says 'Rana iridiscens'; a military says 'Tango Verde'; a local says 'the Bald'; a kid says 'the Babababaco'. Decide which culture names and the register emerges. <em>Stalker</em> uses Russian colloquial nicknames for its mutants ('Bloodsucker', 'Pseudogiant'); it works because there's a tradition of professional stalkers labeling them.</p>"
      },
      {
        "h2": "Mutant typologies in post-apocalyptic fiction",
        "body": "<p><strong>Direct animal mutation</strong>: a real species altered (giant rat, irradiated dog, albino boar). Most used and easiest to communicate. <em>Radroach</em>, <em>Brahmin</em>, <em>Yao Guai</em> in Fallout. <strong>Human mutation</strong>: humans altered by prolonged exposure. <em>Ghouls</em> in Fallout, <em>Pripyat</em> mutants in Stalker, <em>Crawlers</em> in The Descent. They carry moral dilemmas: are they still people?</p><p><strong>Vegetal or fungal</strong>: little explored and very fertile. Plants that hunt, fungi controlling animals, lichens covering bodies. <em>The Last of Us</em> has cordyceps-infected. <strong>Hybridization</strong>: impossible mixes between species. <em>Centaur</em> (horse+human+others) in Fallout. They tend to have updated mythological names.</p><p><strong>Post-fall cybernetic</strong>: half-biological half-machine creatures. Old robots colonized by moss and nerves; dogs with rusted implants. Their names mix tech with bio terminology: <em>Cyber-hound mark IV</em>, <em>Bioauto</em>. <strong>Energetic/abstract</strong>: mutations that leave the being partially intangible or energetic. <em>Chimera Anomalies</em> in Stalker. Their names tend to pseudo-plausible scientific or mystical.</p>"
      },
      {
        "h2": "Common mistakes when naming mutants",
        "body": "<p>First: copying Fallout literally. <em>Radroach</em>, <em>Mirelurk</em> and <em>Deathclaw</em> are culturally registered; using them breaks immersion. Be inspired by their composition logic but find your own animals and modifiers. If your world is in South America, you can use <em>Burned Caiman</em>, <em>Capyclaw</em>, <em>Pirahnatlas</em>.</p><p>Second: name that communicates nothing. 'Krek' sounds weird but the reader doesn't know if it's dog-sized or building-sized, flies or crawls, hunts or grazes. Better a name that gives visual or behavioral hint: 'Armored underground rodent' is long but clear. For repeated oral use, abbreviate: 'Armored' or 'Sub'. But the first encounter must orient.</p><p>Third: ignoring ecosystem. If your world has giant rats, giant dogs, giant bees, everything giant, you lose contrast. Better mix: three large mutations, two small but dangerous mutations, one intelligent mutation. <em>Resident Evil</em> alternates lickers, hunters, tyrants to maintain tension. Fourth: forgetting cultural mutation. Surviving humans also have mutated culture: they may venerate certain mutants, eat them as tradition, avoid them by superstition. That relationship enriches worldbuilding.</p>"
      },
      {
        "h2": "The mutant as mirror of the wasteland",
        "body": "<p>The best mutants in post-apocalyptic fiction work as mirrors of the world. <em>Stalker</em> uses anomalies that aren't fully creatures, they're spatial distortions that kill; they reflect that the zone itself became adversary. <em>The Last of Us</em> uses cordyceps as metaphor for ecosystem fragility. Think what your world means through its mutants.</p><p>Consider the mutant economy. Are they hunted for meat, trophy, fear? Is there a mutant organ market (medicine, energy)? Do some survivors raise them as livestock? Mutants are resources, not just threats. <em>Fallout</em> has chefs cooking radroach; <em>Metro 2033</em> has fungus farming. That economic depth makes them part of the world's fabric.</p><p>For tabletop use, generate three mutant tiers. First, environmental mutants (decoration, abundant, easy). Second, dangerous mutants (tactical encounters, require preparation). Third, mythic mutant (one per region, almost impossible, associated with legends). This narrative ladder lets each combat be different. Names should reflect tier: the mythic mutant deserves a much more loaded name than the giant rat of the day. <em>Apocalypse World</em> and <em>Mutant: Year Zero</em> offer structure for this.</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I decide if my mutant should be intelligent or bestial?",
        "a": "Depends on narrative role. Bestial: pure physical threat, tactical encounters. Intelligent: moral dilemma, possible ally or more complex enemy. Mixing both types in your world enriches it. Fallout's intelligent ghouls coexist with bestial feral ghouls."
      },
      {
        "q": "Should the mutant's name reveal its weakness?",
        "a": "Only if your narrative justifies it. In games it usually reveals effective damage type (Radscorpion = poison + insect). In novels you can hide and let characters discover. For RPGs, semi-descriptive names help the GM."
      },
      {
        "q": "Are these names useful for Mutant: Year Zero?",
        "a": "Yes, perfect material. Mutant: Year Zero uses altered creatures in the Zone; these names fit as threats for your players. They also work for Gamma World, Numenera, Apocalypse World and Stalker RPG."
      },
      {
        "q": "How do I avoid my mutant feeling seen-before?",
        "a": "Combine local animal with unexpected modifier. Instead of 'giant rat', try 'luminous underground weasel'. Geographic specificity and modifier rarity refresh the cliché. And give them unexpected behaviors, not just weird looks."
      }
    ]
  }
};
