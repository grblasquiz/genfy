import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-arma-legendaria",
    "en": "legendary-weapon-name-generator"
  },
  "category": "fun",
  "emoji": "⚡",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Arma Legendaria | Genfy",
    "metaDesc": "Crea nombres épicos para espadas, hachas y armas legendarias. Genera designaciones únicas con historia y poder para tus personajes de fantasía.",
    "h1": "Generador de Nombres de Arma Legendaria",
    "intro": "Forjá nombres épicos para las armas que marcan destinos. Cada combinación genera una identidad única que resuena con poder ancestral y leyenda.",
    "tag": "Diversión",
    "filterLabel": "Tipo de arma",
    "countLabel": "Cantidad",
    "generateLabel": "Forjar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo",
        "items": [
          "Lamento",
          "Furia",
          "Canto",
          "Resplandor",
          "Susurro",
          "Grito",
          "Sombra",
          "Luz",
          "Rugido",
          "Eclipse",
          "Amanecer",
          "Ocaso",
          "Destino",
          "Perdición",
          "Redención",
          "Venganza",
          "Justicia",
          "Tormenta",
          "Trueno",
          "Relámpago",
          "Hielo",
          "Fuego",
          "Viento",
          "Tierra",
          "Vacío",
          "Eternidad",
          "Muerte",
          "Vida",
          "Juramento",
          "Pacto",
          "Maldición",
          "Bendición",
          "Honor",
          "Sangre",
          "Acero",
          "Cristal",
          "Dragón",
          "Fénix",
          "Lobo",
          "Águila",
          "Serpiente",
          "León",
          "Corona",
          "Trono",
          "Reino",
          "Imperio",
          "Guardián",
          "Cazador",
          "Verdugo",
          "Salvador"
        ]
      },
      {
        "id": "core",
        "label": "Núcleo",
        "items": [
          "del Caído",
          "del Heroico",
          "del Olvidado",
          "del Antiguo",
          "del Primer Rey",
          "del Último Guardián",
          "de las Mil Batallas",
          "de los Dioses",
          "de los Titanes",
          "de la Aurora",
          "del Crepúsculo",
          "de las Estrellas",
          "de la Luna Negra",
          "del Sol Carmesí",
          "de la Tormenta Eterna",
          "del Abismo",
          "de los Cielos",
          "de la Montaña Sagrada",
          "del Mar Infinito",
          "del Bosque Ancestral",
          "de la Torre Blanca",
          "del Castillo Oscuro",
          "de las Ruinas",
          "del Templo Perdido",
          "del Oráculo",
          "del Profeta",
          "del Mártir",
          "del Traidor",
          "del Justo",
          "del Tirano",
          "del Conquistador",
          "del Liberador",
          "de los Hermanos",
          "de la Hermandad",
          "del Exilio",
          "del Retorno",
          "de la Profecía",
          "del Destino",
          "de la Esperanza",
          "de la Desesperación",
          "del Norte",
          "del Sur",
          "del Este",
          "del Oeste",
          "de las Cenizas",
          "de la Llama",
          "del Hielo Eterno",
          "de la Justicia Divina",
          "de la Venganza Silenciosa",
          "del Pacto Roto"
        ]
      },
      {
        "id": "suffix",
        "label": "Sufijo (opcional)",
        "items": [
          "",
          "",
          "",
          "",
          "",
          "Rompehuesos",
          "Cortaalmas",
          "Bebesangre",
          "Partereinos",
          "Cazadragones",
          "Matademonios",
          "Segadora",
          "Devoradora",
          "Destructora",
          "la Implacable",
          "la Eterna",
          "la Inquebrantable",
          "la Maldita",
          "la Bendita",
          "la Legendaria"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de un nombre de arma legendaria",
        "body": "<p>Los nombres memorables combinan tres elementos: un descriptor emocional (Lamento, Furia), un origen histórico (del Primer Rey, de las Mil Batallas), y opcionalmente un epíteto funcional (Rompehuesos, Cortaalmas). Este patrón funciona porque ancla el arma en una narrativa: <strong>Susurro del Último Guardián</strong> sugiere una historia de sacrificio silencioso, mientras que <strong>Rugido de los Titanes Partereinos</strong> evoca poder destructivo a escala mítica.</p><p>El error más común es apilar adjetivos genéricos: \"Espada Oscura Malvada de la Muerte\". En cambio, elegí un concepto fuerte y desarrollalo. <strong>Eclipse del Profeta</strong> ya contiene oscuridad (eclipse) y propósito (profeta), sin necesidad de aclarar que es \"oscura\" o \"maldita\". La especificidad genera misterio más efectivo que la acumulación.</p><p>Los nombres de armas funcionan mejor cuando implican historia. \"Pacto Roto\" es más potente que \"Espada Poderosa\" porque el jugador puede imaginar qué pacto, quién lo rompió, qué consecuencias tuvo. Esta narrativa implícita transforma un objeto equipado en un artefacto con biografía propia.</p>"
      },
      {
        "h2": "Tipología de armas por cultura narrativa",
        "body": "<p>Las armas occidentales tienden a nombres que enfatizan nobleza o propósito divino: espadas como <strong>Justicia del Reino</strong> o <strong>Bendición de la Aurora</strong>. Este patrón refleja tradiciones artúricas donde el arma valida al héroe. En contraste, tradiciones orientales priorizan la dualidad: <strong>Susurro de la Tormenta Eterna</strong> combina sutileza (susurro) con fuerza elemental (tormenta).</p><p>Para armas de villanos o antihéroes, invertí la valencia emocional de los componentes clásicos: <strong>Redención Maldita</strong> crea tensión entre concepto noble y corrupción. <strong>Guardián del Abismo</strong> subvierte el rol protector haciéndolo custodio de lo oscuro. Esta técnica genera complejidad moral inmediata.</p><p>Las armas artefactuales (que sobreviven a sus portadores) necesitan nombres que trasciendan individuos: <strong>Eternidad de las Cenizas</strong> sugiere ciclos de destrucción y renacimiento. <strong>Canto del Olvidado</strong> implica memoria preservada en el objeto. Evitá posesivos específicos (\"de Juan\"); preferí referencias a roles, lugares o conceptos abstractos que permitan múltiples interpretaciones según el contexto narrativo.</p>"
      },
      {
        "h2": "Construyendo mitología desde el nombre",
        "body": "<p>Un buen nombre de arma es un prompt narrativo. <strong>Lamento de la Luna Negra</strong> plantea preguntas: ¿qué evento trágico ocurrió durante esa luna? ¿El arma llora por las víctimas o por su portador? Este espacio negativo es donde el jugador o lector construye lore personalizado. Tu trabajo no es responder todo, sino generar el germen narrativo correcto.</p><p>Técnica práctica: combiná escalas temporales diferentes. <strong>Trueno del Primer Rey</strong> mezcla inmediatez (trueno) con profundidad histórica (primer rey). <strong>Susurro de la Eternidad</strong> contrasta lo íntimo con lo cósmico. Esta fricción entre elementos crea pregnancia: el nombre se queda en la mente porque los componentes no se resuelven fácilmente, invitan a exploración.</p><p>Para armas con arco evolutivo (que \"despiertan\" poderes), estructurá nombres en capas: <strong>Destino Dormido</strong> → <strong>Destino del Caído</strong> → <strong>Destino de los Dioses Despertados</strong>. Mantené el núcleo conceptual (Destino) y modificá el contexto. Esto crea continuidad narrativa y recompensa el progreso del jugador sin perder identidad del artefacto.</p>"
      },
      {
        "h2": "Errores que rompen la inmersión",
        "body": "<p>Evitá anacronismos tecnológicos en contextos de fantasía medieval: \"Espada del Reactor Nuclear\" destroza la suspensión de incredulidad. Si mezclás ciencia ficción y fantasía intencionalmente (magitech), asegurate de que el nombre refleje esa hibridación coherentemente: <strong>Cristal de la Forja Estelar</strong> funciona porque \"cristal\" codea fantasía y \"forja estelar\" codea sci-fi de modo complementario.</p><p>El segundo error es la redundancia de registro. <strong>Súper Mega Ultra Espada Definitiva</strong> apila intensificadores que se anulan mutuamente. Un solo concepto preciso siempre supera la acumulación: <strong>Vacío</strong> como nombre único es más intimidante que cualquier cadena de superlativos. La economía lingüística transmite poder; la verbosidad transmite inseguridad del nombrador.</p><p>Último antipatrón: nombres que explican mecánicas en vez de evocar ficción. \"Espada +15 de Daño Crítico\" pertenece a una interfaz de juego, no al mundo diegético. Si querés indicar función, hacelo metafóricamente: <strong>Verdugo de la Justicia Divina</strong> comunica letalidad sin romper el velo narrativo. Los mejores nombres funcionan simultáneamente como poesía y como diseño de juego.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos elementos debería tener un nombre de arma legendaria?",
        "a": "2-4 palabras es el rango óptimo. Dos palabras (<strong>Eclipse Carmesí</strong>) son memorables pero pueden ser genéricas; tres palabras (<strong>Lamento del Primer Rey</strong>) equilibran especificidad y fluidez; cuatro o más requieren ritmo cuidadoso para no volverse farragosas."
      },
      {
        "q": "¿Cómo evito que los nombres suenen todos iguales?",
        "a": "Variá la estructura sintáctica: alternás sustantivo-adjetivo (<strong>Tormenta Eterna</strong>) con genitivo (<strong>Furia de los Titanes</strong>) y construcciones verbales (<strong>Rompehuesos</strong>). También cambiá los campos semánticos: si usaste tres nombres con elementos naturales, probá uno con conceptos abstractos o arquitectónicos."
      },
      {
        "q": "¿Los nombres de armas deben reflejar su función mecánica?",
        "a": "No literalmente, pero sí tonalmente. Un hacha pesada encaja mejor con <strong>Rugido de la Montaña</strong> (fuerza, impacto) que con <strong>Susurro de la Aurora</strong> (elegancia, precisión). El nombre debe sentirse coherente con cómo se usa el arma, sin explicitar estadísticas numéricas."
      },
      {
        "q": "¿Puedo usar nombres de armas de ficción conocida como inspiración?",
        "a": "Analizá su estructura, no los copies. Estudia por qué <em>Anduril</em> funciona (brevedad, sonoridad), pero generá variaciones propias. La clave está en capturar patrones lingüísticos (cómo suena élfico, nórdico, asiático) sin plagiar nombres específicos que tu audiencia reconocerá al instante."
      }
    ]
  },
  "en": {
    "pageTitle": "Legendary Weapon Name Generator | Genfy",
    "metaDesc": "Create epic names for swords, axes, and legendary weapons. Generate unique designations with history and power for your fantasy characters.",
    "h1": "Legendary Weapon Name Generator",
    "intro": "Forge epic names for weapons that shape destinies. Each combination creates a unique identity resonating with ancestral power and legend.",
    "tag": "Fun",
    "filterLabel": "Weapon type",
    "countLabel": "Amount",
    "generateLabel": "Forge names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefix",
        "items": [
          "Wail",
          "Fury",
          "Song",
          "Radiance",
          "Whisper",
          "Cry",
          "Shadow",
          "Light",
          "Roar",
          "Eclipse",
          "Dawn",
          "Dusk",
          "Fate",
          "Doom",
          "Redemption",
          "Vengeance",
          "Justice",
          "Storm",
          "Thunder",
          "Lightning",
          "Ice",
          "Flame",
          "Wind",
          "Earth",
          "Void",
          "Eternity",
          "Death",
          "Life",
          "Oath",
          "Pact",
          "Curse",
          "Blessing",
          "Honor",
          "Blood",
          "Steel",
          "Crystal",
          "Dragon",
          "Phoenix",
          "Wolf",
          "Eagle",
          "Serpent",
          "Lion",
          "Crown",
          "Throne",
          "Kingdom",
          "Empire",
          "Guardian",
          "Hunter",
          "Executioner",
          "Savior"
        ]
      },
      {
        "id": "core",
        "label": "Core",
        "items": [
          "of the Fallen",
          "of the Heroic",
          "of the Forgotten",
          "of the Ancient",
          "of the First King",
          "of the Last Guardian",
          "of a Thousand Battles",
          "of the Gods",
          "of the Titans",
          "of the Dawn",
          "of Twilight",
          "of the Stars",
          "of the Black Moon",
          "of the Crimson Sun",
          "of the Eternal Storm",
          "of the Abyss",
          "of the Heavens",
          "of the Sacred Mountain",
          "of the Endless Sea",
          "of the Ancient Forest",
          "of the White Tower",
          "of the Dark Castle",
          "of the Ruins",
          "of the Lost Temple",
          "of the Oracle",
          "of the Prophet",
          "of the Martyr",
          "of the Traitor",
          "of the Just",
          "of the Tyrant",
          "of the Conqueror",
          "of the Liberator",
          "of Brothers",
          "of the Brotherhood",
          "of Exile",
          "of the Return",
          "of Prophecy",
          "of Destiny",
          "of Hope",
          "of Despair",
          "of the North",
          "of the South",
          "of the East",
          "of the West",
          "of Ashes",
          "of the Flame",
          "of Eternal Ice",
          "of Divine Justice",
          "of Silent Vengeance",
          "of the Broken Pact"
        ]
      },
      {
        "id": "suffix",
        "label": "Suffix (optional)",
        "items": [
          "",
          "",
          "",
          "",
          "",
          "Bonebreaker",
          "Soulcleaver",
          "Blooddrinker",
          "Kingdomrender",
          "Dragonslayer",
          "Demonbane",
          "the Reaper",
          "the Devourer",
          "the Destroyer",
          "the Relentless",
          "the Eternal",
          "the Unbreakable",
          "the Cursed",
          "the Blessed",
          "the Legendary"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of a legendary weapon name",
        "body": "<p>Memorable names combine three elements: an emotional descriptor (Wail, Fury), a historical origin (of the First King, of a Thousand Battles), and optionally a functional epithet (Bonebreaker, Soulcleaver). This pattern works because it anchors the weapon in narrative: <strong>Whisper of the Last Guardian</strong> suggests a story of silent sacrifice, while <strong>Roar of the Titans Kingdomrender</strong> evokes destructive power at mythic scale.</p><p>The most common mistake is stacking generic adjectives: \"Dark Evil Death Sword.\" Instead, choose one strong concept and develop it. <strong>Eclipse of the Prophet</strong> already contains darkness (eclipse) and purpose (prophet), without needing to clarify it's \"dark\" or \"cursed.\" Specificity generates mystery more effectively than accumulation.</p><p>Weapon names work best when they imply history. \"Broken Pact\" is more potent than \"Powerful Sword\" because the player can imagine what pact, who broke it, what consequences followed. This implicit narrative transforms an equipped object into an artifact with its own biography.</p>"
      },
      {
        "h2": "Weapon typology by narrative culture",
        "body": "<p>Western weapons tend toward names emphasizing nobility or divine purpose: swords like <strong>Justice of the Kingdom</strong> or <strong>Blessing of the Dawn</strong>. This pattern reflects Arthurian traditions where the weapon validates the hero. In contrast, Eastern traditions prioritize duality: <strong>Whisper of the Eternal Storm</strong> combines subtlety (whisper) with elemental force (storm).</p><p>For villain or antihero weapons, invert the emotional valence of classic components: <strong>Cursed Redemption</strong> creates tension between noble concept and corruption. <strong>Guardian of the Abyss</strong> subverts the protective role by making it custodian of darkness. This technique generates immediate moral complexity.</p><p>Artifactual weapons (surviving their wielders) need names transcending individuals: <strong>Eternity of Ashes</strong> suggests cycles of destruction and rebirth. <strong>Song of the Forgotten</strong> implies memory preserved in the object. Avoid specific possessives (\"of John\"); prefer references to roles, places, or abstract concepts allowing multiple interpretations depending on narrative context.</p>"
      },
      {
        "h2": "Building mythology from the name",
        "body": "<p>A good weapon name is a narrative prompt. <strong>Wail of the Black Moon</strong> raises questions: what tragic event occurred during that moon? Does the weapon mourn its victims or its bearer? This negative space is where the player or reader builds personalized lore. Your job isn't to answer everything, but to generate the right narrative seed.</p><p>Practical technique: combine different temporal scales. <strong>Thunder of the First King</strong> mixes immediacy (thunder) with historical depth (first king). <strong>Whisper of Eternity</strong> contrasts the intimate with the cosmic. This friction between elements creates stickiness: the name lodges in memory because components don't resolve easily, inviting exploration.</p><p>For weapons with evolutionary arcs (that \"awaken\" powers), structure names in layers: <strong>Dormant Fate</strong> → <strong>Fate of the Fallen</strong> → <strong>Fate of the Awakened Gods</strong>. Maintain the conceptual core (Fate) and modify context. This creates narrative continuity and rewards player progress without losing artifact identity.</p>"
      },
      {
        "h2": "Mistakes that break immersion",
        "body": "<p>Avoid technological anachronisms in medieval fantasy contexts: \"Sword of the Nuclear Reactor\" destroys suspension of disbelief. If you're intentionally mixing science fiction and fantasy (magitech), ensure the name reflects that hybridization coherently: <strong>Crystal of the Stellar Forge</strong> works because \"crystal\" codes fantasy and \"stellar forge\" codes sci-fi in complementary fashion.</p><p>The second error is register redundancy. <strong>Super Mega Ultra Definitive Sword</strong> stacks intensifiers that cancel each other out. A single precise concept always beats accumulation: <strong>Void</strong> as a standalone name is more intimidating than any chain of superlatives. Linguistic economy conveys power; verbosity conveys the namer's insecurity.</p><p>Final antipattern: names that explain mechanics instead of evoking fiction. \"Sword +15 of Critical Damage\" belongs to a game interface, not the diegetic world. If you want to indicate function, do it metaphorically: <strong>Executioner of Divine Justice</strong> communicates lethality without breaking the narrative veil. The best names function simultaneously as poetry and as game design.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many elements should a legendary weapon name have?",
        "a": "2-4 words is the optimal range. Two words (<strong>Crimson Eclipse</strong>) are memorable but can be generic; three words (<strong>Wail of the First King</strong>) balance specificity and flow; four or more require careful rhythm to avoid becoming unwieldy."
      },
      {
        "q": "How do I prevent all names from sounding the same?",
        "a": "Vary syntactic structure: alternate noun-adjective (<strong>Eternal Storm</strong>) with genitive (<strong>Fury of the Titans</strong>) and verbal constructions (<strong>Bonebreaker</strong>). Also change semantic fields: if you've used three names with natural elements, try one with abstract or architectural concepts."
      },
      {
        "q": "Should weapon names reflect their mechanical function?",
        "a": "Not literally, but tonally yes. A heavy axe fits better with <strong>Roar of the Mountain</strong> (force, impact) than with <strong>Whisper of Dawn</strong> (elegance, precision). The name should feel coherent with how the weapon is used, without making numerical statistics explicit."
      },
      {
        "q": "Can I use weapon names from known fiction as inspiration?",
        "a": "Analyze their structure, don't copy them. Study why <em>Anduril</em> works (brevity, sonority), but generate your own variations. The key is capturing linguistic patterns (how elvish, Norse, Asian sounds) without plagiarizing specific names your audience will instantly recognize."
      }
    ]
  }
};
