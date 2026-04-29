import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-goblin', en: 'goblin-name-generator' },
  category: 'fun',
  emoji: '👺',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Goblin | Genfy',
    metaDesc: 'Creá nombres traviesos de goblins, criaturas pequeñas y seres caóticos para D&D, Pathfinder y campañas de fantasía. Personajes inolvidables al instante.',
    h1: 'Generador de Nombres de Goblin',
    intro: 'Inventá identidades chillonas y caóticas para goblins, kobolds y trasgos. Combiná raíz gutural, mote ridículo y clan para personajes memorables.',
    tag: 'Nombres fantásticos',
    filterLabel: 'Estructura del nombre',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Nombre gutural',
        items: [
          'Grix', 'Snikt', 'Vorm', 'Krazz', 'Bogga', 'Skritt', 'Glob', 'Murk', 'Zog', 'Chuk',
          'Gnort', 'Skrub', 'Wretch', 'Pog', 'Frizz', 'Boggle', 'Mungo', 'Splat', 'Twitch', 'Krell',
          'Snorg', 'Drub', 'Klik', 'Vesh', 'Gob', 'Snar', 'Throk', 'Wug', 'Zib', 'Slik',
          'Frix', 'Borg', 'Yark', 'Plip', 'Drak', 'Smek', 'Worg', 'Nob', 'Glug', 'Chitt'
        ]
      },
      {
        id: 'nickname',
        label: 'Mote ridículo',
        items: [
          'el Apestoso', 'el Tres-Dedos', 'Come-Ratas', 'el Llorón', 'Pies-Sucios', 'el Tuerto', 'Mocoso',
          'el Roba-Botones', 'Cara-Patata', 'el Chiquito', 'Sin-Dientes', 'el Gritón', 'Babas', 'Patas-Torcidas',
          'el Quemado', 'Oreja-Mordida', 'el Pegajoso', 'Cabeza-Hueca', 'Dos-Narices', 'el Cobarde',
          'Lengua-Larga', 'el Apuñalador', 'Roba-Calcetines', 'el Maloliente', 'Saltarín', 'el Mentiroso',
          'Cara-Quemada', 'el Tirador', 'Tripudo', 'el Mordedor', 'Chilla-Mucho', 'el Escupidor',
          'Manos-Pegajosas', 'el Hipo', 'Pedete', 'el Mocoso', 'Vendedor de Ratas', 'el Rascador',
          'Trasero-Roto', 'el Borracho', 'Vómito-Verde', 'el Resbaloso', 'Mata-Gallinas', 'el Apuesto',
          'Roba-Pasteles', 'el Grasoso', 'Punzón', 'el Acosador', 'Hocico-Largo', 'el Sin-Vergüenza'
        ]
      },
      {
        id: 'clan',
        label: 'Clan o tribu',
        items: [
          'del Clan Dientes-Rotos', 'de la Tribu Ojo-Rojo', 'de la Caverna Apestosa', 'del Pantano Verde',
          'de los Roe-Huesos', 'del Bosque Podrido', 'de la Cofradía del Hongo', 'del Vertedero',
          'de los Hijos de Maglubiyet', 'de la Madriguera Profunda', 'del Pozo Negro', 'de los Saltacharcos',
          'del Clan Pies-Hediondos', 'de la Tribu Roba-Cosas', 'de los Chillones de Mocogris', 'del Túnel Roto',
          'de la Caverna del Trol Muerto', 'de los Mata-Gallinas', 'del Lodazal', 'de la Manada Sin-Pulgas',
          'del Clan Patas-Largas', 'de la Tribu Come-Basura', 'del Refugio del Hongo Loco', 'de los Sin-Dientes',
          'de la Cripta Olvidada', 'del Bosque del Cuervo Tuerto', 'de los Hediondos del Río', 'del Clan Manos-Sucias',
          'de la Cueva Goteante', 'de los Tres-Pulgares', 'del Vertedero del Dragón Muerto', 'del Clan Risueño',
          'de la Tribu Ojo-Vacío', 'de los Roba-Lunas', 'del Pozo de la Bruja', 'de la Manada Caótica',
          'del Bunker Olvidado', 'de los Acechadores de Sótano', 'del Clan Dedo-Roto', 'de la Tribu Babosa'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Por qué los goblins necesitan nombres absurdos',
        body: '<p>El humor goblin es la regla de oro. A diferencia de elfos o vampiros, los goblins son criaturas cómicas incluso en las campañas más oscuras. Sus nombres deben sonar guturales, cortos y casi siempre ridículos. <em>The Hobbit</em> establece esto con goblins como "Boggart" o "Skritter", nombres que ni siquiera los goblins pronuncian igual dos veces. <em>The Goblin Emperor</em> de Katherine Addison rompe la regla con goblins refinados, pero es excepción que confirma la regla.</p><p>Los <strong>motes</strong> son donde está toda la diversión. Un goblin no es solo "Snikt", es "Snikt el Tres-Dedos" o "Snikt Roba-Botones". Esos epítetos cuentan historia: ¿perdió dos dedos cómo? ¿quién le robó qué botones? Buen DM convierte cada mote en gancho narrativo de cinco minutos. <em>Critical Role</em> usa esto magistralmente con goblins como "Nott the Brave" donde el mote contradice la realidad cobarde.</p><p>Los <strong>clanes</strong> deberían sonar a tugurios horribles. "Pantano Verde", "Caverna Apestosa", "Vertedero". Los goblins viven en lugares que ningún elfo aceptaría, y eso forma parte del charme cómico. Si tu clan suena a "Salón de la Luna Plateada", no es un clan goblin, es un clan élfico mal disfrazado. La estética goblin abraza lo grotesco.</p>'
      },
      {
        h2: 'Nombres de goblin según sistema y tono de campaña',
        body: '<p>En <strong>D&D 5e</strong>, los goblins son criaturas humanoides menores con CR 1/4 generalmente. Para enfrentamientos de bajo nivel, basta con nombre simple sin clan: "Grix", "Murk", "Snikt". Cuando el goblin es PNJ recurrente o aliado (estilo Nott), agregás mote y eventualmente clan. Para jefes goblin (Hobgoblin Warlord, Bugbear Chief) los nombres pueden ser más imponentes pero conservar el toque ridículo: "Krazz Tres-Cabezas".</p><p>En <strong>Pathfinder</strong>, los goblins de Sandpoint tienen tradición específica: nombres con consonantes duras y referencias al fuego o caballos (sus dos obsesiones culturales). "Burnsmoke", "Horsechewer", "Grindylow" siguen el patrón. Si jugás Rise of the Runelords, respetá esa onomástica regional. Para goblins genéricos de otros entornos, tenés más libertad creativa.</p><p>En <em>Magic: The Gathering</em>, los goblins de Jund o Krenko\'s Mob tienen nombres explosivos y bélicos: "Krenko", "Slobad", "Tuktuk". El énfasis está en velocidad y violencia más que humor. Si tu campaña es war-themed, podés inclinar hacia ese estilo. <em>World of Warcraft</em> hace goblins capitalistas con nombres tipo "Gallywix" o "Feegle Maximus": el humor está en su codicia, no en su torpeza física.</p>'
      },
      {
        h2: 'Errores comunes al nombrar goblins',
        body: '<p>Primer error: <strong>nombres demasiado serios</strong>. Si tu goblin se llama "Aelendir Sombragris", no es goblin, es elfo oscuro mal vestido. Los goblins necesitan sílabas guturales (k, g, r, sh, kt) y al menos un toque cómico o asqueroso. "Aelendir" no tiene esa textura. Mejor "Glog Sombragris" si querés contraste cómico, o cambiá el mote a algo más torpe.</p><p>Segundo error: <strong>todos los goblins suenan iguales</strong>. Si tu sesión tiene seis goblins llamados Snikt, Snart, Snorg, Snub, Snaz y Snork, el grupo no los va a recordar. Variá las consonantes iniciales: combiná G-, K-, V-, P-, M-, Tr-, Br-, Skr-. Eso permite que cada goblin tenga personalidad sonora distinta. <em>Critical Role</em> mezcla "Nott", "Krenko", "Skrillz" para que cada uno suene único.</p><p>Tercer error: <strong>motes que no aportan nada</strong>. "Grix el Goblin" es redundante. "Grix el Sucio" es genérico. Mejor "Grix el Tres-Dedos" porque sugiere historia. Cada mote debería ser semilla de anécdota: ¿por qué tres dedos? ¿quién le robó el cuarto? Si el jugador pregunta "¿cómo perdió ese dedo?", ya ganaste cinco minutos de roleo. Si nadie pregunta porque el mote es aburrido, perdiste la oportunidad.</p>'
      },
      {
        h2: 'Goblins memorables en juegos y novelas',
        body: '<p>El goblin más famoso del rol moderno es probablemente "Nott the Brave" de Critical Role Campaign 2. Su mote ("the Brave") contradice su cobardía visible, generando humor constante. Esa técnica del mote irónico es oro: "el Valiente" para uno cobarde, "el Listo" para uno tonto, "el Apuesto" para uno feo. El contraste es donde nace la comedia.</p><p>En <em>The Goblin Emperor</em> de Katherine Addison, los goblins son cultos y refinados con nombres élficos elegantes. Es subversión exitosa porque el lector espera lo contrario. Si tu campaña quiere subvertir el tropo, podés tener goblins eruditos con nombres impronunciables tipo "Maia Drazhar". Pero eso funciona solo si es decisión consciente, no descuido.</p><p>El videojuego <em>Goblin Slayer</em> y la franquicia <em>Warhammer</em> tratan a los goblins como amenaza real, no humor. Sus nombres ahí son guturales pero sin mote cómico: "Skarsnik", "Grom the Paunch", "Snagrod". Si tu tono es horror oscuro y los goblins son enemigos genuinos, podés omitir el humor y quedarte con nombres puramente guturales y amenazantes. Pero pocos sistemas hacen eso, porque los goblins funcionan mejor como alivio cómico que como amenaza pura.</p>'
      }
    ],
    faq: [
      {
        q: '¿Estos nombres sirven para kobolds, trasgos y otras criaturas similares?',
        a: 'Sí, con ajustes. Los kobolds suelen tener nombres más reptilianos (Sssklax, Drikslitch). Los trasgos europeos prefieren nombres folklóricos (Puck, Robin). Los hobgoblins militaristas usan nombres más germánicos (Krell von Skarn). Adaptá la sonoridad al tipo de criatura.'
      },
      {
        q: '¿Cuántos goblins genero para una mazmorra típica?',
        a: 'Para un combate único, 4-6 nombres alcanzan. Para una mazmorra extensa con varios encuentros, 12-15. Si solo nombrás al líder y un par más, los demás pueden ser "el Goblin Pequeño" o "el Goblin Gordo": basta para distinguirlos en combate.'
      },
      {
        q: '¿Puedo usar estos nombres en obras comerciales?',
        a: 'Sí. Las combinaciones son genéricas. Solo evitá nombres registrados de obras específicas como "Krenko" (MTG) o "Nott" (Critical Role). Los nombres comunes de fantasía folklórica son dominio público.'
      },
      {
        q: '¿Cómo hago que cada goblin de mi sesión se sienta distinto?',
        a: 'Variá tres cosas: sonido inicial del nombre (G/K/V/P/Tr), tipo de mote (físico, cómico, irónico) y rol en el combate (líder gritón, francotirador callado, médico mentiroso). Tres goblins con esos contrastes generan más diversión que diez idénticos.'
      }
    ]
  },
  en: {
    pageTitle: 'Goblin Name Generator | Genfy',
    metaDesc: 'Create mischievous goblin, small creature and chaotic being names for D&D, Pathfinder and fantasy campaigns. Memorable characters in seconds.',
    h1: 'Goblin Name Generator',
    intro: 'Invent screechy chaotic identities for goblins, kobolds and imps. Combine guttural root, ridiculous nickname and clan for memorable characters.',
    tag: 'Fantasy names',
    filterLabel: 'Name structure',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'first',
        label: 'Guttural name',
        items: [
          'Grix', 'Snikt', 'Vorm', 'Krazz', 'Bogga', 'Skritt', 'Glob', 'Murk', 'Zog', 'Chuk',
          'Gnort', 'Skrub', 'Wretch', 'Pog', 'Frizz', 'Boggle', 'Mungo', 'Splat', 'Twitch', 'Krell',
          'Snorg', 'Drub', 'Klik', 'Vesh', 'Gob', 'Snar', 'Throk', 'Wug', 'Zib', 'Slik',
          'Frix', 'Borg', 'Yark', 'Plip', 'Drak', 'Smek', 'Worg', 'Nob', 'Glug', 'Chitt'
        ]
      },
      {
        id: 'nickname',
        label: 'Ridiculous nickname',
        items: [
          'the Stinky', 'the Three-Fingered', 'Rat-Eater', 'the Crybaby', 'Dirty-Feet', 'the One-Eyed', 'Snotty',
          'the Button-Stealer', 'Potato-Face', 'the Tiny', 'Toothless', 'the Screamer', 'Drooler', 'Crooked-Legs',
          'the Burnt', 'Bitten-Ear', 'the Sticky', 'Empty-Head', 'Two-Noses', 'the Coward',
          'Long-Tongue', 'the Stabber', 'Sock-Stealer', 'the Smelly', 'Hopper', 'the Liar',
          'Burnt-Face', 'the Thrower', 'Bigbelly', 'the Biter', 'Loud-Squealer', 'the Spitter',
          'Sticky-Hands', 'the Hiccup', 'Farter', 'the Snotty', 'Rat-Seller', 'the Scratcher',
          'Broken-Butt', 'the Drunk', 'Green-Vomit', 'the Slippery', 'Chicken-Killer', 'the Handsome',
          'Pie-Stealer', 'the Greasy', 'Pokey', 'the Stalker', 'Long-Snout', 'the Shameless'
        ]
      },
      {
        id: 'clan',
        label: 'Clan or tribe',
        items: [
          'of the Broken-Tooth Clan', 'of the Red-Eye Tribe', 'of the Stinky Cavern', 'of the Green Swamp',
          'of the Bone-Gnawers', 'of the Rotten Forest', 'of the Mushroom Confraternity', 'of the Dump',
          'of the Sons of Maglubiyet', 'of the Deep Burrow', 'of the Black Pit', 'of the Puddle-Jumpers',
          'of the Smelly-Foot Clan', 'of the Stuff-Stealer Tribe', 'of the Greysnot Squealers', 'of the Broken Tunnel',
          'of the Dead Troll Cavern', 'of the Chicken-Killers', 'of the Mudpit', 'of the Fleaful Pack',
          'of the Long-Legs Clan', 'of the Trash-Eater Tribe', 'of the Crazy Mushroom Refuge', 'of the Toothless',
          'of the Forgotten Crypt', 'of the One-Eyed Crow Forest', 'of the River Stinkers', 'of the Dirty-Hands Clan',
          'of the Dripping Cave', 'of the Three-Thumbs', 'of the Dead Dragon Dump', 'of the Giggling Clan',
          'of the Empty-Eye Tribe', 'of the Moon-Stealers', 'of the Witch\'s Pit', 'of the Chaotic Pack',
          'of the Forgotten Bunker', 'of the Basement Stalkers', 'of the Broken-Finger Clan', 'of the Slimy Tribe'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Why goblins need absurd names',
        body: '<p>Goblin humor is the golden rule. Unlike elves or vampires, goblins are comedic creatures even in the darkest campaigns. Their names should sound guttural, short and almost always ridiculous. <em>The Hobbit</em> establishes this with goblins like "Boggart" or "Skritter", names even goblins don\'t pronounce the same way twice. Katherine Addison\'s <em>The Goblin Emperor</em> breaks the rule with refined goblins, but it\'s the exception confirming the rule.</p><p><strong>Nicknames</strong> are where all the fun lives. A goblin isn\'t just "Snikt", it\'s "Snikt the Three-Fingered" or "Snikt Button-Stealer". Those epithets tell story: how did he lose two fingers? who stole what buttons? A good DM turns each nickname into a five-minute narrative hook. <em>Critical Role</em> uses this masterfully with goblins like "Nott the Brave" where the nickname contradicts cowardly reality.</p><p><strong>Clans</strong> should sound like horrible slums. "Green Swamp", "Stinky Cavern", "Dump". Goblins live in places no elf would accept, and that\'s part of the comedic charm. If your clan sounds like "Hall of the Silver Moon", it\'s not a goblin clan, it\'s a poorly disguised elven clan. Goblin aesthetics embrace the grotesque.</p>'
      },
      {
        h2: 'Goblin names by system and campaign tone',
        body: '<p>In <strong>D&D 5e</strong>, goblins are minor humanoid creatures generally CR 1/4. For low-level encounters, simple name without clan suffices: "Grix", "Murk", "Snikt". When goblin is recurring NPC or ally (Nott style), you add nickname and eventually clan. For goblin bosses (Hobgoblin Warlord, Bugbear Chief), names can be more imposing while keeping the ridiculous touch: "Krazz Three-Heads".</p><p>In <strong>Pathfinder</strong>, Sandpoint goblins have specific tradition: names with hard consonants and references to fire or horses (their two cultural obsessions). "Burnsmoke", "Horsechewer", "Grindylow" follow the pattern. If you play Rise of the Runelords, respect that regional onomastics. For generic goblins from other settings, you have more creative freedom.</p><p>In <em>Magic: The Gathering</em>, Jund or Krenko\'s Mob goblins have explosive bellicose names: "Krenko", "Slobad", "Tuktuk". Emphasis is on speed and violence rather than humor. If your campaign is war-themed, you can lean toward that style. <em>World of Warcraft</em> makes capitalist goblins with names like "Gallywix" or "Feegle Maximus": humor is in their greed, not physical clumsiness.</p>'
      },
      {
        h2: 'Common mistakes when naming goblins',
        body: '<p>First mistake: <strong>names too serious</strong>. If your goblin is called "Aelendir Greyshade", it\'s not a goblin, it\'s a poorly dressed dark elf. Goblins need guttural syllables (k, g, r, sh, kt) and at least one comedic or gross touch. "Aelendir" doesn\'t have that texture. Better "Glog Greyshade" if you want comedic contrast, or change the nickname to something clumsier.</p><p>Second mistake: <strong>all goblins sound alike</strong>. If your session has six goblins called Snikt, Snart, Snorg, Snub, Snaz and Snork, the group won\'t remember them. Vary initial consonants: combine G-, K-, V-, P-, M-, Tr-, Br-, Skr-. That lets each goblin have distinct sonic personality. <em>Critical Role</em> mixes "Nott", "Krenko", "Skrillz" so each sounds unique.</p><p>Third mistake: <strong>nicknames that add nothing</strong>. "Grix the Goblin" is redundant. "Grix the Dirty" is generic. Better "Grix the Three-Fingered" because it suggests story. Each nickname should seed an anecdote: why three fingers? Who stole the fourth? If the player asks "how did he lose that finger?", you already gained five minutes of roleplay. If nobody asks because nickname is boring, you lost the chance.</p>'
      },
      {
        h2: 'Memorable goblins in games and novels',
        body: '<p>The most famous goblin in modern roleplay is probably "Nott the Brave" from Critical Role Campaign 2. Her nickname ("the Brave") contradicts her visible cowardice, generating constant humor. That ironic nickname technique is gold: "the Brave" for a coward, "the Smart" for a fool, "the Handsome" for an ugly one. Contrast is where comedy is born.</p><p>In Katherine Addison\'s <em>The Goblin Emperor</em>, goblins are cultured and refined with elegant elven-style names. It\'s successful subversion because the reader expects opposite. If your campaign wants to subvert the trope, you can have erudite goblins with unpronounceable names like "Maia Drazhar". But that works only if it\'s conscious decision, not oversight.</p><p>The video game <em>Goblin Slayer</em> and the <em>Warhammer</em> franchise treat goblins as real threat, not humor. Their names there are guttural but without comedic nickname: "Skarsnik", "Grom the Paunch", "Snagrod". If your tone is dark horror and goblins are genuine enemies, you can omit humor and stay with purely guttural threatening names. But few systems do that, because goblins work better as comic relief than pure threat.</p>'
      }
    ],
    faq: [
      {
        q: 'Do these names work for kobolds, imps and similar creatures?',
        a: 'Yes, with adjustments. Kobolds tend to have more reptilian names (Sssklax, Drikslitch). European imps prefer folkloric names (Puck, Robin). Militaristic hobgoblins use more Germanic names (Krell von Skarn). Adapt the sound to creature type.'
      },
      {
        q: 'How many goblins should I generate for a typical dungeon?',
        a: 'For a single combat, 4-6 names suffice. For an extensive dungeon with multiple encounters, 12-15. If you only name the leader and a couple more, others can be "the Small Goblin" or "the Fat Goblin": enough to distinguish them in combat.'
      },
      {
        q: 'Can I use these names in commercial works?',
        a: 'Yes. Combinations are generic. Just avoid registered names from specific works like "Krenko" (MTG) or "Nott" (Critical Role). Common folkloric fantasy names are public domain.'
      },
      {
        q: 'How do I make each goblin in my session feel distinct?',
        a: 'Vary three things: initial sound of name (G/K/V/P/Tr), nickname type (physical, comedic, ironic) and combat role (loud leader, quiet sniper, lying medic). Three goblins with those contrasts generate more fun than ten identical ones.'
      }
    ]
  }
};
