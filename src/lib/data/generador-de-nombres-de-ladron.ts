import type { GenData } from './types';

export const data: GenData = {
  "slug": { "es": "generador-de-nombres-de-ladron", "en": "rogue-name-generator" },
  "category": "fun",
  "emoji": "🗡️",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Ladrón | Genfy",
    "metaDesc": "Creá nombres furtivos de ladrones, pícaros y maestros del sigilo para D&D, novelas y videojuegos. Identidades con astucia callejera y reputación sombría.",
    "h1": "Generador de Nombres de Ladrón",
    "intro": "Diseñá pícaros, asaltantes, espías urbanos y maestros del sigilo. Combiná apodo callejero, nombre, gremio y epíteto para construir identidades dignas de leyenda.",
    "tag": "Fantasía",
    "filterLabel": "Componente",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "title",
        "label": "Título de gremio o calle",
        "items": ["Maestro Ladrón", "Capa Negra", "Manolarga", "Sombra", "Filo", "Susurro", "Cuchilla", "Dedo", "Cuervo", "Daga", "Murciélago", "Ratón", "Halcón Nocturno", "Topo", "Lince", "Gato", "Hurón", "Comadreja", "Rey de los Tejados", "Reina de las Sombras", "Pícaro Mayor", "Saqueador", "Asaltante", "Bribón", "Truhán", "Hermano del Velo", "Hermana del Velo", "Lobo Solitario", "Filo Silencioso", "Maestre del Gremio"]
      },
      {
        "id": "given",
        "label": "Nombre",
        "items": ["Vex", "Nyx", "Kael", "Ren", "Sly", "Drax", "Mira", "Faye", "Jade", "Lira", "Mox", "Pip", "Quill", "Rook", "Sable", "Thorne", "Vesp", "Wrenn", "Yara", "Zef", "Cael", "Dash", "Em", "Finn", "Gray", "Hux", "Inka", "Joss", "Kit", "Lex", "Marvin"]
      },
      {
        "id": "guild",
        "label": "Gremio o Origen",
        "items": ["de los Tejados", "del Callejón Torcido", "de la Mano Roja", "del Puerto", "del Bajo Manto", "de los Cuervos", "del Distrito Sur", "del Velo Negro", "del Cubo Roto", "del Mercado Sucio", "de la Daga Doble", "del Anillo de Plata", "de los Sin Sombra", "del Pasaje", "del Hampa Vieja", "del Río Negro", "de la Capucha Gris", "de los Cien Pisos", "del Subterráneo", "de la Última Carta", "del Octavo Distrito", "del Patio Helado", "de la Llave Maestra", "del Espejo Roto", "de la Cuneta", "del Reloj Parado", "del Tabernero Mudo", "de la Reina Caída", "del Príncipe Ladrón", "de la Niebla Permanente"]
      },
      {
        "id": "epithet",
        "label": "Epíteto",
        "items": ["el Sin Sombra", "Pies de Gato", "el Que Nunca Sangró", "Mano Vacía", "el Cien Cerraduras", "Sonrisa Falsa", "el Del Doble Filo", "Ojo Avizor", "el Que Roba Reyes", "Filo del Suspiro", "el Sin Cara", "Susurro de Tejado", "el Tres Bolsillos", "Pasos Ligeros", "el Que No Existe", "Cuchillo de la Madrugada", "el Coleccionista", "Pluma de Plata", "el Sin Espada", "Filo Tibio", "el Dueño de las Llaves", "Risa de Callejón", "el Que Se Va Antes", "Murciélago de la Plaza", "el Vendedor de Secretos", "Sombra del Mediodía", "el Hijo del Pasaje", "Cuervo de Plata", "el Insobornable", "Manopla Vacía"]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "El ladrón con motivaciones más allá del oro",
        "body": "<p>El ladrón cliché roba por avaricia. Aburrido. Tu pícaro gana profundidad cuando definís <strong>una motivación específica</strong>: vengarse del noble que mató a su familia, financiar la operación de su hermana enferma, recuperar un objeto familiar incautado por la corona, ascender en un gremio para cambiarlo desde adentro. La motivación sostiene decisiones difíciles: ¿roba o no roba a un viejo enfermo? Sin motivación clara, el personaje se vuelve aleatorio.</p><p>Variá el origen socioeconómico. La fantasía repite el huérfano callejero que aprendió a robar para sobrevivir. Pero ladrones interesantes vienen de orígenes diversos: nobles caídos en desgracia que no quieren admitir su nuevo oficio, antiguos sacerdotes expulsados que aprovechan su conocimiento de iglesias para robarlas, exsoldados que aplican infiltración militar a robos urbanos, mujeres burguesas aburridas que roban por adrenalina más que por dinero. <em>Lies of Locke Lamora</em> ejemplifica un mundo de pícaros con orígenes diversos.</p><p>El ladrón también puede tener <strong>códigos morales propios</strong>. Roba a ricos pero no a viajeros pobres. Mata solo en defensa propia. Nunca traiciona a quien le dio palabra. Estos códigos generan dilemas cuando entran en conflicto con la misión. Robin Hood, Arsène Lupin y Selina Kyle (Catwoman) muestran ladrones complejos con honor torcido pero presente.</p>"
      },
      {
        "h2": "Anatomía de un nombre callejero",
        "body": "<p>Los apodos callejeros buenos cumplen tres reglas: <strong>cortos, descriptivos, fáciles de gritar en una persecución</strong>. 'Ren', 'Vex', 'Nyx' funcionan porque se pronuncian en una sílaba. Si tu personaje se llama 'Aramendelantriel Estrelladorada', nadie lo va a usar; rápidamente se convertirá en 'Ari'. Mejor empezar con un nombre corto y agregar epítetos largos para presentaciones formales.</p><p>Los apellidos-gremio funcionan como <strong>credenciales</strong>. 'Vex de los Cuervos' indica afiliación inmediata: si los Cuervos son temibles, Vex hereda esa reputación. Si son chapuceros, Vex carga ese estigma. Los gremios también permiten dramatizar conflicto: tu personaje puede tener apellido 'del Velo Negro' aunque ya no pertenezca al gremio, lo cual lo convierte en blanco de viejos colegas.</p><p>Los epítetos cuentan <strong>una hazaña, fracaso o rasgo distintivo</strong>. 'el Cien Cerraduras' implica especialización en abrir cerrajerías; un noble lo contrata específicamente por eso. 'el Que Nunca Sangró' sugiere infiltrador puro: nunca tuvo que pelear porque siempre escapó. 'el Que Roba Reyes' implica historia: ¿cuándo robó a un rey? Esa anécdota puede ser semilla de campaña entera. Evitá epítetos genéricos como 'el Veloz' o 'el Astuto': comunican poco y se sienten plantilla.</p>"
      },
      {
        "h2": "Pícaros en distintos sistemas y géneros",
        "body": "<p>En <strong>D&D 5e</strong>, los arquetipos de Pícaro (Ladrón, Asesino, Trickster Arcano, Inquisidor, Mente Maestra, Explorador, Embaucador, Alma de Espadas) generan personalidades muy diferentes. El Asesino calza con apodos sombríos como 'Filo Tibio' o 'Cuchillo de la Madrugada'. El Trickster Arcano funciona con nombres más juguetones: 'Pip de los Cien Pisos' o 'Mox el Vendedor de Secretos'.</p><p>En <strong>Blades in the Dark</strong>, todo el sistema gira alrededor de pícaros formando una banda criminal en una ciudad industrial. Los nombres deben sonar duros y modernos: Wrenn, Sable, Thorne. Las complicaciones del juego (Heat, Entanglements) recompensan personajes con historia callejera profunda. En <strong>Shadowrun</strong>, los runners son pícaros tecnológicos; nombres tipo 'Glitch', 'Trace' o 'Decker' funcionan idiomáticamente.</p><p>Para <strong>novelas tipo Six of Crows o Mistborn</strong>, los pícaros pueden ser protagonistas grupales con nombres que suenen variados entre sí. Si todos terminan en '-ax' o '-yn', se confunden. Mezclá: Kael (corto, gutural), Mira (suave), Drax (dura, larga), Pip (juguetón). La diversidad fonética ayuda al lector a recordar quién es quién en escenas de acción rápida con varios protagonistas.</p>"
      },
      {
        "h2": "Errores frecuentes al diseñar pícaros",
        "body": "<p>Error 1: <strong>Pícaro como sociópata gracioso</strong>. Hollywood normaliza al ladrón como simpático sin remordimiento. Pero un personaje que roba sistemáticamente debería tener consecuencias internas: paranoia, insomnio, dificultad para confiar, soledad estructural. Estos rasgos no convierten al personaje en deprimente: lo vuelven humano.</p><p>Error 2: <strong>Sigilo invencible</strong>. Si tu pícaro nunca falla un sigilo, se vuelve aburrido para la mesa y el lector. La tensión narrativa nace del riesgo de fallar. Permití escenas donde tu personaje sea visto, capturado, casi muerto. <em>The Dark Knight</em> con Catwoman muestra fracasos que enriquecen el personaje. Error 3: <strong>Confundir pícaro con asesino profesional</strong>. El pícaro tiene amplitud: ladrón, espía, estafador, infiltrador, abridor de cerraduras, falsificador. Reducirlo a 'el que mata por la espalda' lo empobrece.</p><p>Error 4: <strong>Nombre que delata profesión</strong>. Un noble en una corte no puede llamarse 'Filo Silencioso' sin generar sospecha. Tu pícaro probablemente necesita un nombre civil normal y un apodo callejero usado solo en ambientes criminales. 'Marcus Aldred' frente a la nobleza, 'Filo' en el gremio. Diseñá ambas identidades. Error 5: olvidar la red social. Un pícaro solitario es menos interesante que uno con red de informantes, deudores, exparejas, niños del barrio que lo cubren. Cada PNJ menor expande el mundo y crea ganchos para futuras sesiones. Error 6: gremios genéricos. Si tu gremio se llama 'Los Asesinos' sin más detalle, falta especificidad. Mejor: 'Los Cuervos del Distrito Sur, especializados en robos a templos, fundados por una sacerdotisa expulsada hace 80 años'.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Pícaro y ladrón son lo mismo?",
        "a": "No exactamente. Ladrón es alguien que roba. Pícaro (rogue en inglés) es un arquetipo más amplio: incluye ladrones, pero también espías, asesinos, estafadores, exploradores furtivos. En D&D, todos los pícaros pueden robar, pero no todos lo hacen como oficio principal."
      },
      {
        "q": "¿Cómo invento un gremio criminal creíble?",
        "a": "Definí tres elementos: especialidad (¿roban templos, casas nobles, caravanas?), código interno (¿matan o no? ¿roban a pobres?), conflicto con otra facción (gremio rival, guardia urbana, culto religioso). Estos tres ejes generan trama automática."
      },
      {
        "q": "¿Mis pícaros pueden tener apellidos normales o todos son apodos?",
        "a": "Mezcla. Un pícaro hábil mantiene identidad civil (apellido normal) y callejera (apodo) por separado. Marcus Aldred es el viajero respetable; 'Filo' es el ladrón nocturno. Esta dualidad genera tensión: ¿qué pasa cuando alguien conecta ambas identidades?"
      },
      {
        "q": "¿Funciona este generador para personajes femeninos?",
        "a": "Sí. Mira, Faye, Lira, Yara son neutros o femeninos. Los epítetos son universales. Históricamente, mujeres pícaras existieron (Anne Bonny pirata, Moll Cutpurse criminal londinense). Tu pícara puede ser tan dura como cualquier hombre del oficio."
      }
    ]
  },
  "en": {
    "pageTitle": "Rogue Name Generator | Genfy",
    "metaDesc": "Generate stealthy thief, rogue and stealth master names for D&D, novels and video games. Identities with street cunning and shadowy reputation.",
    "h1": "Rogue Name Generator",
    "intro": "Design rogues, raiders, urban spies and stealth masters. Combine street nickname, name, guild and epithet to build identities worthy of legend.",
    "tag": "Fantasy",
    "filterLabel": "Component",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "title",
        "label": "Guild or street title",
        "items": ["Master Thief", "Black Cloak", "Longhand", "Shadow", "Edge", "Whisper", "Blade", "Finger", "Crow", "Dagger", "Bat", "Mouse", "Night Hawk", "Mole", "Lynx", "Cat", "Ferret", "Weasel", "King of the Rooftops", "Queen of Shadows", "Rogue Major", "Pillager", "Raider", "Knave", "Scoundrel", "Brother of the Veil", "Sister of the Veil", "Lone Wolf", "Silent Edge", "Guildmaster"]
      },
      {
        "id": "given",
        "label": "Given name",
        "items": ["Vex", "Nyx", "Kael", "Ren", "Sly", "Drax", "Mira", "Faye", "Jade", "Lira", "Mox", "Pip", "Quill", "Rook", "Sable", "Thorne", "Vesp", "Wrenn", "Yara", "Zef", "Cael", "Dash", "Em", "Finn", "Gray", "Hux", "Inka", "Joss", "Kit", "Lex", "Marvin"]
      },
      {
        "id": "guild",
        "label": "Guild or Origin",
        "items": ["of the Rooftops", "of the Crooked Alley", "of the Red Hand", "of the Harbor", "of the Low Mantle", "of the Crows", "of the South District", "of the Black Veil", "of the Broken Bucket", "of the Dirty Market", "of the Double Dagger", "of the Silver Ring", "of the Shadowless", "of the Passage", "of the Old Underworld", "of the Black River", "of the Gray Hood", "of the Hundred Floors", "of the Underground", "of the Last Card", "of the Eighth District", "of the Frozen Yard", "of the Master Key", "of the Broken Mirror", "of the Gutter", "of the Stopped Clock", "of the Mute Tavernkeeper", "of the Fallen Queen", "of the Thief Prince", "of the Permanent Fog"]
      },
      {
        "id": "epithet",
        "label": "Epithet",
        "items": ["the Shadowless", "Cat Feet", "the Never Bled", "Empty Hand", "the Hundred Locks", "False Smile", "the Double Edged", "Watching Eye", "the King Robber", "Sigh Edge", "the Faceless", "Rooftop Whisper", "the Three Pockets", "Light Steps", "the Nonexistent", "Dawn Knife", "the Collector", "Silver Quill", "the Swordless", "Warm Blade", "the Key Owner", "Alley Laugh", "the One Who Leaves Early", "Plaza Bat", "the Secret Seller", "Noon Shadow", "the Passage's Son", "Silver Crow", "the Unbribable", "Empty Gauntlet"]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "The thief with motivations beyond gold",
        "body": "<p>The cliché thief steals from greed. Boring. Your rogue gains depth when you define <strong>a specific motivation</strong>: revenge against the noble who killed his family, financing his sick sister's operation, recovering a family object seized by the crown, climbing a guild to change it from within. Motivation sustains hard decisions: does he steal from a sick old man or not? Without clear motivation, the character becomes random.</p><p>Vary socioeconomic origin. Fantasy repeats the street orphan who learned to steal to survive. But interesting thieves come from diverse origins: fallen nobles unwilling to admit their new trade, expelled former priests using church knowledge to rob them, ex-soldiers applying military infiltration to urban heists, bored bourgeois women stealing for adrenaline more than money. <em>Lies of Locke Lamora</em> exemplifies a world of rogues with diverse origins.</p><p>The thief can also have <strong>their own moral codes</strong>. Steals from rich but not poor travelers. Kills only in self-defense. Never betrays whoever gave him their word. These codes generate dilemmas when they conflict with the mission. Robin Hood, Arsène Lupin and Selina Kyle (Catwoman) show complex thieves with twisted but present honor.</p>"
      },
      {
        "h2": "Anatomy of a street name",
        "body": "<p>Good street nicknames follow three rules: <strong>short, descriptive, easy to shout in a chase</strong>. 'Ren', 'Vex', 'Nyx' work because they pronounce in one syllable. If your character is named 'Aramendelantriel Stargold', nobody will use it; he'll quickly become 'Ari'. Better to start with a short name and add long epithets for formal introductions.</p><p>Surname-guilds work as <strong>credentials</strong>. 'Vex of the Crows' indicates immediate affiliation: if the Crows are feared, Vex inherits that reputation. If they're amateurish, Vex carries that stigma. Guilds also allow dramatizing conflict: your character can have surname 'of the Black Veil' even if no longer in the guild, making him a target of old colleagues.</p><p>Epithets tell <strong>a feat, failure or distinctive trait</strong>. 'the Hundred Locks' implies specialization in opening locksmithies; a noble hires him specifically for that. 'the Never Bled' suggests pure infiltrator: never had to fight because always escaped. 'the King Robber' implies history: when did he rob a king? That anecdote can be seed of an entire campaign. Avoid generic epithets like 'the Swift' or 'the Cunning': they communicate little and feel template.</p>"
      },
      {
        "h2": "Rogues across systems and genres",
        "body": "<p>In <strong>D&D 5e</strong>, Rogue archetypes (Thief, Assassin, Arcane Trickster, Inquisitive, Mastermind, Scout, Swashbuckler, Soulknife) generate very different personalities. The Assassin fits with grim nicknames like 'Warm Blade' or 'Dawn Knife'. The Arcane Trickster works with more playful names: 'Pip of the Hundred Floors' or 'Mox the Secret Seller'.</p><p>In <strong>Blades in the Dark</strong>, the entire system revolves around rogues forming a criminal crew in an industrial city. Names should sound hard and modern: Wrenn, Sable, Thorne. Game complications (Heat, Entanglements) reward characters with deep street history. In <strong>Shadowrun</strong>, runners are tech rogues; names like 'Glitch', 'Trace' or 'Decker' work idiomatically.</p><p>For <strong>novels like Six of Crows or Mistborn</strong>, rogues can be group protagonists with names that sound varied among themselves. If all end in '-ax' or '-yn', they confuse. Mix: Kael (short, guttural), Mira (soft), Drax (hard, long), Pip (playful). Phonetic diversity helps the reader remember who is who in fast action scenes with multiple protagonists.</p>"
      },
      {
        "h2": "Frequent mistakes designing rogues",
        "body": "<p>Mistake 1: <strong>Rogue as funny sociopath</strong>. Hollywood normalizes the thief as charming without remorse. But a character who systematically steals should have internal consequences: paranoia, insomnia, difficulty trusting, structural loneliness. These traits don't make the character depressing: they humanize him.</p><p>Mistake 2: <strong>Invincible stealth</strong>. If your rogue never fails stealth, it gets boring for table and reader. Narrative tension is born from failure risk. Allow scenes where your character is seen, captured, almost dead. <em>The Dark Knight</em> with Catwoman shows failures that enrich the character. Mistake 3: <strong>Confusing rogue with professional assassin</strong>. The rogue has breadth: thief, spy, scammer, infiltrator, locksmith opener, forger. Reducing him to 'the one who kills from behind' impoverishes him.</p><p>Mistake 4: <strong>Name that betrays profession</strong>. A noble in a court can't be called 'Silent Edge' without raising suspicion. Your rogue probably needs a normal civil name and street nickname used only in criminal environments. 'Marcus Aldred' before nobility, 'Edge' in the guild. Design both identities. Mistake 5: forgetting social network. A solitary rogue is less interesting than one with a network of informants, debtors, ex-partners, neighborhood kids who cover him. Each minor NPC expands the world and creates hooks for future sessions. Mistake 6: generic guilds. If your guild is called 'The Assassins' without more detail, it lacks specificity. Better: 'The Crows of the South District, specializing in temple robberies, founded by an expelled priestess 80 years ago'.</p>"
      }
    ],
    "faq": [
      {
        "q": "Are rogue and thief the same?",
        "a": "Not exactly. Thief is someone who steals. Rogue is a broader archetype: includes thieves, but also spies, assassins, scammers, stealthy scouts. In D&D, all rogues can steal, but not all do it as primary trade."
      },
      {
        "q": "How do I invent a believable criminal guild?",
        "a": "Define three elements: specialty (do they rob temples, noble houses, caravans?), internal code (do they kill or not? rob the poor?), conflict with another faction (rival guild, urban guard, religious cult). These three axes generate automatic plot."
      },
      {
        "q": "Can my rogues have normal surnames or are all nicknames?",
        "a": "Mix. A skilled rogue maintains civil identity (normal surname) and street identity (nickname) separately. Marcus Aldred is the respectable traveler; 'Edge' is the night thief. This duality generates tension: what happens when someone connects both identities?"
      },
      {
        "q": "Does this generator work for female characters?",
        "a": "Yes. Mira, Faye, Lira, Yara are neutral or feminine. Epithets are universal. Historically, female rogues existed (Anne Bonny pirate, Moll Cutpurse London criminal). Your female rogue can be as hard as any man in the trade."
      }
    ]
  }
};
