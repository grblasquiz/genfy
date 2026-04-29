import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-kraken', en: 'kraken-name-generator' },
  category: 'fun',
  emoji: '🦑',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Kraken | Genfy',
    metaDesc: 'Creá nombres abisales de krakens, leviatanes marinos y monstruos de las profundidades. Para D&D, novelas náuticas, campañas piratas y horror oceánico.',
    h1: 'Generador de Nombres de Kraken',
    intro: 'Forjá identidades titánicas para devoradores de barcos, gigantes abisales y leviatanes ancestrales. Inspirados en mitología nórdica y horror lovecraftiano.',
    tag: 'Nombres fantásticos',
    filterLabel: 'Estructura del nombre',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Nombre abisal',
        items: [
          'Hafgufa', 'Lyngbakr', 'Vaethor', 'Cthugha', 'Yog-Marath', 'Iormun', 'Drakhor', 'Nethulu', 'Aspidochelone', 'Vaedrokk',
          'Yssharath', 'Velnorath', 'Kragorr', 'Thalassor', 'Vorukon', 'Mareth', 'Ulthros', 'Bathysphor', 'Drogasin', 'Vexalor',
          'Mahragul', 'Saltherion', 'Pelagath', 'Voraxis', 'Brynhalor', 'Iskaroth', 'Velmoth', 'Sephralis', 'Tyrkonaal', 'Drogvath',
          'Korrathu', 'Vaelmaris', 'Nyxalor', 'Maelstrond', 'Cthulvain', 'Veshmaris', 'Ozagath', 'Vurnoth', 'Salaktris', 'Bathmoros'
        ]
      },
      {
        id: 'epithet',
        label: 'Epíteto abisal',
        items: [
          'el Devorador de Barcos', 'el Que Espera en lo Profundo', 'el Anciano del Abismo', 'la Tormenta Viviente',
          'el Tragador de Flotas', 'el Hambre del Mar Negro', 'el Soñador Sumergido', 'el Despertador de Tsunamis',
          'el Cien-Brazos', 'la Sombra Bajo la Quilla', 'el Trono del Lecho Marino', 'el Quebrador de Mástiles',
          'la Niebla Plateada', 'el Devorador de Faros', 'el Ojo del Maelstrom', 'el Ahogador Eterno',
          'el Padre de las Tormentas', 'el Saqueador del Polo', 'la Boca del Foso', 'el Cantor de Cantos Letales',
          'el Rey del Sargazo', 'el Engullidor del Sol', 'el Velo Negro', 'el Hijo de Tiamat',
          'la Tinta Sangrienta', 'el Bramador de Tundra', 'el Dragón Sin Alas', 'el Despertar Lento',
          'el Vigilante de Atlantis', 'el Ahogador de Reyes', 'la Cripta Viviente', 'el Trono de Coral',
          'el Devorador de Naciones', 'el Susurrador del Abismo', 'la Carcoma del Casco', 'el Espejo del Caos',
          'el Tentáculo del Tiempo', 'la Mano de R\'lyeh', 'el Jugador de Olas', 'el Vacío Salado'
        ]
      },
      {
        id: 'realm',
        label: 'Reino oceánico',
        items: [
          'de la Fosa de las Marianas', 'del Mar Negro Sin Fondo', 'de la Sima de R\'lyeh', 'del Estrecho Ahogado',
          'de las Aguas de Iormungandr', 'del Triángulo de las Bermudas', 'del Maelstrom del Norte', 'de la Costa de los Naufragios',
          'del Cementerio de Ballenas', 'de la Bahía de Niebla Eterna', 'del Arrecife de Coral Negro', 'del Lecho de Atlantis',
          'del Mar Sargazo Maldito', 'de la Cripta Submarina', 'del Pasaje del Diablo', 'de las Fauces de Caribdis',
          'de la Trinchera Olvidada', 'del Acantilado del Edén Hundido', 'del Glaciar Vortex', 'de la Costa Sin Sol',
          'del Templo Subacuático', 'del Volcán Bajo las Olas', 'del Estrecho de Cuchillos', 'de la Isla que Camina',
          'de la Niebla del Holandés Errante', 'del Cabo de las Sirenas', 'del Mar de los Perdidos', 'de la Cordillera Submarina',
          'de los Bajíos de Hueso', 'del Hielo Negro', 'del Foso de Yog-Sothoth', 'de la Caverna del Coral Sangriento',
          'del Polo Sur Olvidado', 'del Cinturón Térmico', 'de la Plataforma Continental Maldita', 'de la Sombra del Iceberg',
          'del Mar de Tinta', 'del Estrecho de Abadón', 'del Reino de Dagón', 'de la Bahía Donde el Sol No Llega'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo construir un nombre de kraken inolvidable',
        body: '<p>El kraken no es solo "un pulpo grande": es la encarnación del miedo humano al océano profundo, donde nada de lo que viste arriba sirve. Su nombre debe transmitir esa otredad. Los buenos nombres usan vocales largas (aa, oo, uu) y consonantes que evocan agua o crujido (kr, gr, ph, th). "Kragorr el Devorador de Barcos" funciona porque el sonido mismo sugiere algo enorme moviéndose bajo el agua.</p><p>El <strong>epíteto</strong> debe sugerir antigüedad y escala. No es "el Pulpo Gigante" (descriptivo), es "el Anciano del Abismo" (mitológico). Los krakens existen desde antes que los humanos, y los nombres deberían reflejar esa cronología cósmica. Lovecraft establece el patrón con Cthulhu como "the Sleeper of R\'lyeh": no describe lo que hace, sugiere lo que es. Tu epíteto debería evocar eras geológicas, no acciones puntuales.</p><p>El <strong>reino oceánico</strong> ancla al monstruo en geografía mítica. "del Mar Sargazo Maldito" es mejor que "del océano". Los lugares específicos generan misterio: existe un sargazo concreto, tiene maldición conocida, los marineros saben evitar esa ruta. <em>Pirates of the Caribbean</em> usa esto bien con "Davy Jones\' Locker", lugar específico con cultura propia entre marineros. Tu reino oceánico debería tener leyendas asociadas que el DM o narrador puede desplegar.</p>'
      },
      {
        h2: 'Krakens según mitología y sistema de juego',
        body: '<p>En <strong>mitología nórdica</strong>, el kraken (Hafgufa) es ballena gigante, no calamar. Aparece en sagas como criatura tan enorme que confunden con isla. Si tu campaña respeta tradición nórdica, los nombres deben sonar a Lyngbakr, Hafgufa, Iormungandr. Si seguís la versión moderna popularizada por Pontoppidan en 1750 (calamar gigante), tenés más libertad creativa con tentáculos y ojos abisales.</p><p>En <strong>D&D 5e</strong>, el kraken es CR 23 con habilidades de tormenta y telépatica. Es jefe final, no encuentro casual. Para uno solitario, el nombre debe ser leyenda viviente: "Vaethor el Soñador Sumergido del Mar Sargazo Maldito" da peso narrativo proporcional al CR. Los marineros deberían susurrar el nombre con miedo. Si tu kraken aparece en sesión 50 después de aparecer en rumores desde la sesión 5, el nombre tiene tiempo de cargar significado.</p><p>En el <strong>Mythos de Lovecraft</strong>, los grandes antiguos como Cthulhu, Dagon y Hydra son krakens cósmicos. Sus nombres son intencionalmente impronunciables (R\'lyeh, Cthulhu) porque sugieren lenguaje pre-humano. Si tu campaña es horror cósmico, podés usar nombres con apóstrofes y consonantes raras: "Y\'thaalon", "C\'tharix". <em>Sunless Sea</em> y <em>Bloodborne</em> usan ese estilo para krakens y leviatanes. Pero respetá el balance: nombre demasiado raro se vuelve broma involuntaria.</p>'
      },
      {
        h2: 'Errores frecuentes al nombrar krakens',
        body: '<p>Primer error: <strong>nombres demasiado descriptivos</strong>. "El Pulpo Tentacular del Mar" no es nombre de kraken, es descripción de zoología. Los krakens son entidades míticas, no especies de calamar. Sus nombres deberían tener peso de deidad menor o demonio antiguo, no de animal. <em>Moby Dick</em> resuelve esto con "Moby Dick" como nombre propio que el lector aprende sin descriptor: el monstruo se vuelve persona maldita, no especie.</p><p>Segundo error: <strong>kraken como amenaza repetible</strong>. Si en tu campaña aparecen tres krakens distintos con nombres parecidos, perdiste la singularidad. Los krakens deberían ser únicos como dragones ancianos: solo hay uno por mar conocido, y su nombre es leyenda regional. Mejor un kraken inolvidable que cinco genéricos. Si necesitás múltiples monstruos marinos, mezclá tipos: un kraken, un leviatán, una hidra, no tres krakens.</p><p>Tercer error: <strong>ignorar la cultura marinera</strong>. Los marineros tienen nomenclatura propia para monstruos: "the Old Man of the Sea", "Davy Jones", "the Flying Dutchman". Esos nombres tienen folclor de gremio. Si tu kraken vive entre piratas, debería tener apodo marinero ("el Viejo del Foso") además del nombre formal ("Vaethor"). Esa dualidad enriquece worldbuilding: los nobles dicen el nombre antiguo, los marineros dicen el apodo, y la confusión genera escenas memorables.</p>'
      },
      {
        h2: 'Krakens memorables en cultura pop',
        body: '<p>El kraken más conocido del cine moderno es probablemente el de <em>Pirates of the Caribbean: Dead Man\'s Chest</em>. No tiene nombre propio (solo "the Kraken") y eso funciona porque el monstruo es la mascota de Davy Jones, no protagonista. Si tu kraken es arma de un villano mayor, puede no necesitar nombre individual. Pero si es enemigo final por sí solo, necesita identidad propia.</p><p>En literatura, el "Kraken" de Tennyson (1830) es poema corto donde la criatura duerme en el abismo desde antes del tiempo y solo despertará para morir junto al mundo. Esa imagen del kraken-durmiente es la que Lovecraft retoma en Cthulhu. Si tu kraken sigue ese arquetipo, los nombres deben sugerir sueño antiguo: "el Soñador Sumergido", "el Que Espera en lo Profundo".</p><p>Los videojuegos modernos han diversificado el tropo. <em>Sea of Thieves</em> tiene kraken sin nombre como evento aleatorio. <em>God of War</em> tiene "Sea Snake" Jormungandr con nombre mitológico explícito. <em>Subnautica</em> tiene "Reaper Leviathan" con nombre descriptivo terrorífico. Cada estilo (anónimo, mitológico, descriptivo-aterrador) sirve a tonos distintos. Para tu campaña, decidí primero qué papel narrativo cumple el kraken antes de elegir el estilo del nombre.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuál es la diferencia entre kraken y leviatán?',
        a: 'El kraken es de origen escandinavo, asociado a calamar/pulpo gigante con tentáculos. El leviatán es bíblico (Job 41), descrito como serpiente marina o ballena monstruosa. En D&D están separados como criaturas distintas. Para nombrarlos, los krakens usan nombres más nórdicos/lovecraftianos, los leviatanes nombres bíblicos o sumerios.'
      },
      {
        q: '¿Estos nombres sirven para hidras y serpientes marinas?',
        a: 'Algunos sí, especialmente del grupo "primer nombre". Las hidras de varios cuellos suelen tener nombres griegos antiguos (Hydra, Lerna). Las serpientes marinas pueden compartir el grupo serpentino. Adaptá el epíteto al tipo de criatura: "el Cien-Brazos" para kraken pero "la Cien-Cabezas" para hidra.'
      },
      {
        q: '¿Cómo evito que el nombre suene a parodia lovecraftiana?',
        a: 'Limitá los apóstrofes y consonantes impronunciables. "Cthulhu" funciona porque Lovecraft lo escribió una vez y todos los demás lo copian. Tu kraken puede tener nombre exótico pero pronunciable. "Vaethor" o "Kragorr" suenan oscuros sin caer en cliché.'
      },
      {
        q: '¿Puedo usar estos nombres en obras comerciales?',
        a: 'Sí, las combinaciones son genéricas inspiradas en mitología nórdica y bestiario clásico. Solo evitá nombres registrados como "Cthulhu" (Lovecraft, ahora dominio público pero asociado fuertemente) o "Davy Jones" (folklore marítimo libre, pero con asociación fuerte a Disney).'
      }
    ]
  },
  en: {
    pageTitle: 'Kraken Name Generator | Genfy',
    metaDesc: 'Create abyssal kraken, sea leviathan and oceanic depth monster names. For D&D, nautical novels, pirate campaigns and oceanic horror stories.',
    h1: 'Kraken Name Generator',
    intro: 'Forge titanic identities for ship-devourers, abyssal giants and ancestral leviathans. Inspired by Norse mythology and Lovecraftian cosmic horror.',
    tag: 'Fantasy names',
    filterLabel: 'Name structure',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Abyssal name',
        items: [
          'Hafgufa', 'Lyngbakr', 'Vaethor', 'Cthugha', 'Yog-Marath', 'Iormun', 'Drakhor', 'Nethulu', 'Aspidochelone', 'Vaedrokk',
          'Yssharath', 'Velnorath', 'Kragorr', 'Thalassor', 'Vorukon', 'Mareth', 'Ulthros', 'Bathysphor', 'Drogasin', 'Vexalor',
          'Mahragul', 'Saltherion', 'Pelagath', 'Voraxis', 'Brynhalor', 'Iskaroth', 'Velmoth', 'Sephralis', 'Tyrkonaal', 'Drogvath',
          'Korrathu', 'Vaelmaris', 'Nyxalor', 'Maelstrond', 'Cthulvain', 'Veshmaris', 'Ozagath', 'Vurnoth', 'Salaktris', 'Bathmoros'
        ]
      },
      {
        id: 'epithet',
        label: 'Abyssal epithet',
        items: [
          'the Ship Devourer', 'the One Who Waits in the Deep', 'the Ancient of the Abyss', 'the Living Storm',
          'the Fleet Swallower', 'the Hunger of the Black Sea', 'the Submerged Dreamer', 'the Tsunami Awakener',
          'the Hundred-Armed', 'the Shadow Beneath the Keel', 'the Throne of the Sea Bed', 'the Mast Breaker',
          'the Silver Mist', 'the Lighthouse Devourer', 'the Eye of the Maelstrom', 'the Eternal Drowner',
          'the Father of Storms', 'the Pole Plunderer', 'the Mouth of the Pit', 'the Singer of Lethal Songs',
          'the King of Sargasso', 'the Sun Engulfer', 'the Black Veil', 'the Son of Tiamat',
          'the Bloody Ink', 'the Tundra Bellower', 'the Wingless Dragon', 'the Slow Awakening',
          'the Watcher of Atlantis', 'the King Drowner', 'the Living Crypt', 'the Coral Throne',
          'the Nation Devourer', 'the Whisperer of the Abyss', 'the Hull Borer', 'the Mirror of Chaos',
          'the Tentacle of Time', 'the Hand of R\'lyeh', 'the Wave Player', 'the Salt Void'
        ]
      },
      {
        id: 'realm',
        label: 'Oceanic realm',
        items: [
          'of the Mariana Trench', 'of the Bottomless Black Sea', 'of the R\'lyeh Chasm', 'of the Drowned Strait',
          'of the Waters of Jormungandr', 'of the Bermuda Triangle', 'of the Northern Maelstrom', 'of the Shipwreck Coast',
          'of the Whale Cemetery', 'of the Eternal Mist Bay', 'of the Black Coral Reef', 'of the Bed of Atlantis',
          'of the Cursed Sargasso Sea', 'of the Underwater Crypt', 'of the Devil\'s Passage', 'of the Jaws of Charybdis',
          'of the Forgotten Trench', 'of the Cliff of Sunken Eden', 'of the Vortex Glacier', 'of the Sunless Coast',
          'of the Subaquatic Temple', 'of the Volcano Beneath the Waves', 'of the Strait of Knives', 'of the Walking Island',
          'of the Flying Dutchman\'s Mist', 'of the Cape of Sirens', 'of the Sea of the Lost', 'of the Underwater Range',
          'of the Bone Shoals', 'of the Black Ice', 'of the Pit of Yog-Sothoth', 'of the Bloody Coral Cavern',
          'of the Forgotten South Pole', 'of the Thermal Belt', 'of the Cursed Continental Shelf', 'of the Iceberg Shadow',
          'of the Sea of Ink', 'of the Strait of Abaddon', 'of the Realm of Dagon', 'of the Bay Where the Sun Doesn\'t Reach'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to build an unforgettable kraken name',
        body: '<p>The kraken isn\'t just "a big octopus": it embodies human fear of deep ocean, where nothing you saw above works. Its name should convey that otherness. Good names use long vowels (aa, oo, uu) and consonants evoking water or creaking (kr, gr, ph, th). "Kragorr the Ship Devourer" works because the very sound suggests something enormous moving underwater.</p><p>The <strong>epithet</strong> should suggest antiquity and scale. It\'s not "the Giant Octopus" (descriptive), it\'s "the Ancient of the Abyss" (mythological). Krakens exist from before humans, and names should reflect that cosmic chronology. Lovecraft sets the pattern with Cthulhu as "the Sleeper of R\'lyeh": doesn\'t describe what it does, suggests what it is. Your epithet should evoke geological eras, not specific actions.</p><p>The <strong>oceanic realm</strong> anchors the monster in mythic geography. "of the Cursed Sargasso Sea" beats "of the ocean". Specific places generate mystery: a concrete sargasso exists, has known curse, sailors know to avoid that route. <em>Pirates of the Caribbean</em> uses this well with "Davy Jones\' Locker", specific place with own culture among sailors. Your oceanic realm should have associated legends DM or narrator can deploy.</p>'
      },
      {
        h2: 'Krakens by mythology and game system',
        body: '<p>In <strong>Norse mythology</strong>, the kraken (Hafgufa) is giant whale, not squid. Appears in sagas as creature so enormous sailors mistake it for island. If your campaign respects Norse tradition, names should sound like Lyngbakr, Hafgufa, Jormungandr. If you follow modern version popularized by Pontoppidan in 1750 (giant squid), you have more creative freedom with tentacles and abyssal eyes.</p><p>In <strong>D&D 5e</strong>, the kraken is CR 23 with storm and telepathic abilities. It\'s final boss, not casual encounter. For a lone one, the name must be living legend: "Vaethor the Submerged Dreamer of the Cursed Sargasso Sea" gives narrative weight proportional to CR. Sailors should whisper the name in fear. If your kraken appears in session 50 after appearing in rumors since session 5, the name has time to load meaning.</p><p>In <strong>Lovecraft\'s Mythos</strong>, great old ones like Cthulhu, Dagon and Hydra are cosmic krakens. Their names are intentionally unpronounceable (R\'lyeh, Cthulhu) because they suggest pre-human language. If your campaign is cosmic horror, you can use names with apostrophes and rare consonants: "Y\'thaalon", "C\'tharix". <em>Sunless Sea</em> and <em>Bloodborne</em> use that style for krakens and leviathans. But respect balance: too-rare name becomes involuntary joke.</p>'
      },
      {
        h2: 'Common mistakes when naming krakens',
        body: '<p>First mistake: <strong>names too descriptive</strong>. "The Tentacular Octopus of the Sea" isn\'t kraken name, it\'s zoology description. Krakens are mythic entities, not squid species. Their names should have weight of minor deity or ancient demon, not animal. <em>Moby Dick</em> solves this with "Moby Dick" as proper name the reader learns without descriptor: the monster becomes cursed person, not species.</p><p>Second mistake: <strong>kraken as repeatable threat</strong>. If three different krakens with similar names appear in your campaign, you lost singularity. Krakens should be unique like ancient dragons: only one per known sea, and its name is regional legend. Better one unforgettable kraken than five generic. If you need multiple sea monsters, mix types: a kraken, a leviathan, a hydra, not three krakens.</p><p>Third mistake: <strong>ignoring sailor culture</strong>. Sailors have own nomenclature for monsters: "the Old Man of the Sea", "Davy Jones", "the Flying Dutchman". Those names have guild folklore. If your kraken lives among pirates, it should have sailor nickname ("the Old Man of the Pit") besides formal name ("Vaethor"). That duality enriches worldbuilding: nobles say ancient name, sailors say nickname, and confusion generates memorable scenes.</p>'
      },
      {
        h2: 'Memorable krakens in pop culture',
        body: '<p>The most famous modern cinema kraken is probably from <em>Pirates of the Caribbean: Dead Man\'s Chest</em>. No proper name (just "the Kraken") and that works because the monster is Davy Jones\' pet, not protagonist. If your kraken is weapon of greater villain, may not need individual name. But if final enemy by itself, needs own identity.</p><p>In literature, Tennyson\'s "Kraken" (1830) is short poem where the creature sleeps in abyss from before time and will only awaken to die with the world. That image of sleeping kraken is what Lovecraft picks up in Cthulhu. If your kraken follows that archetype, names should suggest ancient sleep: "the Submerged Dreamer", "the One Who Waits in the Deep".</p><p>Modern video games have diversified the trope. <em>Sea of Thieves</em> has nameless kraken as random event. <em>God of War</em> has "Sea Snake" Jormungandr with explicit mythological name. <em>Subnautica</em> has "Reaper Leviathan" with descriptive terrifying name. Each style (anonymous, mythological, descriptive-terrifying) serves different tones. For your campaign, first decide what narrative role the kraken fulfills before choosing name style.</p>'
      }
    ],
    faq: [
      {
        q: 'What\'s the difference between kraken and leviathan?',
        a: 'The kraken is Scandinavian-origin, associated with giant squid/octopus with tentacles. The leviathan is biblical (Job 41), described as sea serpent or monstrous whale. In D&D they\'re separated as different creatures. To name them, krakens use more Norse/Lovecraftian names, leviathans biblical or Sumerian names.'
      },
      {
        q: 'Do these names work for hydras and sea serpents?',
        a: 'Some yes, especially from "first name" group. Multi-necked hydras tend to have ancient Greek names (Hydra, Lerna). Sea serpents can share serpentine group. Adapt the epithet to creature type: "the Hundred-Armed" for kraken but "the Hundred-Headed" for hydra.'
      },
      {
        q: 'How do I avoid sounding like Lovecraftian parody?',
        a: 'Limit apostrophes and unpronounceable consonants. "Cthulhu" works because Lovecraft wrote it once and everyone else copies. Your kraken can have exotic but pronounceable name. "Vaethor" or "Kragorr" sound dark without falling into cliché.'
      },
      {
        q: 'Can I use these names in commercial works?',
        a: 'Yes, combinations are generic inspired by Norse mythology and classical bestiary. Just avoid registered names like "Cthulhu" (Lovecraft, now public domain but strongly associated) or "Davy Jones" (free maritime folklore, but strong Disney association).'
      }
    ]
  }
};
