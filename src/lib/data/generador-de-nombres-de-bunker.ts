import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-bunker",
    "en": "bunker-name-generator"
  },
  "category": "fun",
  "emoji": "🏚️",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Búnker | Genfy",
    "metaDesc": "Creá nombres de búnkers subterráneos, refugios apocalípticos y shelters para escenarios post-apocalípticos, sci-fi de supervivencia y campañas de rol.",
    "h1": "Generador de Nombres de Búnker",
    "intro": "Bautizá refugios subterráneos, vaults y shelters apocalípticos con nombres que respiran último día. Para post-apocalipsis, sci-fi y rol de supervivencia.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de refugio",
        "items": [
          "Búnker", "Refugio", "Vault", "Bóveda", "Shelter", "Cripta", "Cámara", "Subterráneo",
          "Silo", "Cápsula", "Arcón", "Cofre", "Cripto-Vault", "Refugio Atómico", "Búnker Antiaéreo", "Refugio Nuclear",
          "Túnel", "Galería", "Subnivel", "Sub-Estructura", "Sub-Sector", "Compartimento Sellado", "Sala de Pánico", "Cuarto Frío",
          "Hábitat Sellado", "Estación Subterránea", "Centro de Continuidad", "Punto de Reunión", "Refugio Civil", "Refugio Militar", "Refugio Familiar", "Refugio Comunitario",
          "Vault-Tec", "Survival Compound", "Doomsday Bunker", "Continuity of Government Site", "Black Site Shelter", "Mountain Hollow", "Salt Mine Shelter", "Limestone Vault"
        ]
      },
      {
        "id": "designator",
        "label": "Designador",
        "items": [
          "Vault 13", "Vault 101", "Vault 76", "Vault 33", "Refugio Génesis", "Refugio Iris", "Refugio Áurea", "Refugio Caronte",
          "Cheyenne", "Mount Weather", "Greenbrier", "Raven Rock", "Site R", "Continuity Mountain", "Iron Mountain", "Doomsday Hill",
          "Alpha", "Beta", "Gamma", "Delta", "Omega", "Zulu", "Sierra", "Whiskey",
          "01", "07", "13", "47", "77", "117", "184", "256",
          "Atlas", "Phoenix", "Aurora", "Solis", "Kepler", "Hera", "Janus", "Cerbero"
        ]
      },
      {
        "id": "spec",
        "label": "Especificación / cobertura",
        "items": [
          "Antinuclear", "Antibiológico", "Anti-EMP", "Anti-Radiación", "Anti-Aéreo", "Anti-Meteorito", "Anti-Pandemia", "Anti-Solar",
          "Civil", "Militar", "Privado", "Corporativo", "Familiar", "Multi-Generacional", "Cápsula Individual", "Comunal",
          "Profundidad 50m", "Profundidad 200m", "Profundidad 500m", "Profundidad 1km", "Subterráneo", "Submarino", "Bajo Cordillera", "Bajo Glaciar",
          "Para 6 personas", "Para 50 personas", "Para 500 personas", "Para 5000 personas", "Capacidad indefinida", "Hibernación criogénica", "Stasis prolongada", "Vida sostenida",
          "Provisiones 30 días", "Provisiones 1 año", "Provisiones 10 años", "Provisiones 50 años", "Autosuficiente", "Reciclaje completo", "Hidropónico", "Reactor de fusión"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo nombrar búnkers con peso narrativo",
        "body": "<p>Los búnkers reales tienen tres capas: nombre administrativo (Mount Weather, Cheyenne Mountain Complex), código operativo (Site R, Continuity Mountain), y rumor popular (la 'subterránea de la Casa Blanca'). <em>Fallout</em> popularizó la nomenclatura Vault + número, simple y memorable. Replicalo para tu mundo: 'Refugio 47', 'Bóveda Aurora-13'.</p><p>El número en sí mismo es narrativo. Vault 13 (origen), Vault 101 (insular), Vault 76 (re-poblamiento). Cada número tenía propósito experimental distinto en lore. Tu refugio puede pertenecer a programa con sub-bóvedas para distintas funciones: refugio civil, banco genético, archivo cultural, depósito militar. La numeración hace sentir que existe ecosistema.</p><p>Sumá designación de cobertura. 'Refugio Atómico' es década 50; 'Refugio Anti-EMP' es siglo XXI. La especificidad temporal-tecnológica del nombre comunica era. Si tu mundo tiene amenazas variadas, los búnkers se especializan: anti-pandemia, anti-impacto, anti-IA hostil.</p>"
      },
      {
        "h2": "Tipos de búnker por género narrativo",
        "body": "<p>Post-apocalíptico clásico (Fallout, A Boy and His Dog): vaults experimentales construidas pre-guerra, abiertas siglos después. Tono nostálgico-decadente. Tu refugio puede tener carteles antiguos, mobiliario midcentury, propaganda corporativa. Vault-Tec es marca ficcional perfecta para reproducir.</p><p>Realista contemporáneo (cold war retro, prepper): refugios privados de millonarios o gobierno. Mount Weather, Greenbrier, búnkers de hipermillonarios en Nueva Zelanda. Estética sobria, equipamiento pulido, manuales operativos. <em>Greenland</em>, <em>Don't Look Up</em>, <em>Bunker</em> usan este registro.</p><p>Sci-fi futuro (Silo, Wool, Snowpiercer subterráneo): hábitats verticales o en bajada. Estética opresiva, jerarquía social rígida, secretos de niveles superiores. Tu Silo-7 o Refugio Vertical puede tener 144 niveles, cada uno con función social específica.</p><p>Conspiración militar (mountain bases, COG sites): búnkers para continuidad de gobierno, élites supervivientes. <em>Designated Survivor</em>, <em>13 Days</em> dramatizan estas instalaciones. Tono burocrático-paranoico. Tu refugio puede ser donde funcionarios cocinan políticas mientras afuera el mundo arde.</p>"
      },
      {
        "h2": "Errores comunes al inventar refugios subterráneos",
        "body": "<p>Error 1: ignorar logística. Un búnker para 1000 personas durante 30 años necesita oxígeno (recirculación + escrubbers de CO2), comida (8000 calorías/persona/día x 1000 x 365 x 30 = números absurdos), agua, gestión de residuos, energía. Si tu refugio aloja 5000 por un siglo sin explicación logística, perdés realismo. <em>The Hundred</em> y <em>Silo</em> dan respuestas plausibles; muchas obras flojas no.</p><p>Error 2: psicología de aislamiento sin abordar. Confinar humanos décadas genera depresión, claustrofobia, conflictos. <em>Wayward Pines</em>, <em>Snowpiercer</em>, <em>Silo</em> tematizan la presión psíquica. Si tu novela ignora esto, los habitantes parecen NPCs sin emoción. Mostrá el costo mental del refugio.</p><p>Error 3: salida fácil. Un búnker que se abre solo por curiosidad rompe estakes. Las salidas reales requieren autorización, descontaminación, evaluación atmosférica, equipamiento. Si tu protagonista 'sale a explorar' sin protocolo, perdés peso. Construí el portal de salida con ritual, riesgo, decisión irreversible.</p>"
      },
      {
        "h2": "Construir vida cotidiana memorable dentro del búnker",
        "body": "<p>El búnker es escenario, no solo locación. Definí su geografía interna: cuántos niveles, qué hay en cada uno, dónde duerme la gente, dónde come, dónde trabaja. <em>Silo</em> dedica las primeras temporadas a establecer geografía y población antes de los misterios. Tu refugio merece la misma atención.</p><p>Reglas internas: racionamiento, generaciones, prohibiciones. Vault 76 prohibía abrir antes de 25 años; Mount Weather tenía protocolos estrictos de comunicaciones. Tus reglas crean conflicto: el rebelde quiere romperlas, el conservador las defiende, el político las manipula. Tres a cinco reglas centrales bastan para generar trama.</p><p>Cultura emergente: tras dos generaciones, los habitantes tienen jerga propia, rituales, festividades inventadas. <em>Wool</em>'s Cleaning, <em>Hunger Games</em>'s Reaping aunque no sea búnker. Tu refugio puede tener celebración anual del 'Día del Cierre' o ritual de paso de adolescentes. Esa cultura específica diferencia tu mundo del genérico.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre búnker, vault y shelter?",
        "a": "Búnker es término militar genérico (cualquier estructura fortificada). Vault implica bóveda con propósito específico (Fallout lo popularizó). Shelter es genérico civil. Para realismo militar, búnker. Para sci-fi distópica, vault. Para drama familiar de prepper, shelter."
      },
      {
        "q": "¿Mi búnker debe tener historia previa antes de la trama?",
        "a": "Idealmente sí. ¿Cuándo se construyó? ¿Por qué crisis? ¿Quién lo financió? ¿Quién pobló inicialmente? Esas preguntas dan textura. La construcción puede ser respuesta a la Guerra Fría, a una pandemia, a una amenaza astronómica. La capa de historia profundiza la atmósfera."
      },
      {
        "q": "¿Puedo combinar búnker con elementos sobrenaturales?",
        "a": "Sí, es subgénero rico. <em>The Mist</em>, <em>10 Cloverfield Lane</em> mezclan refugio con horror externo o interno. Tu búnker puede ser realista en estructura pero contener algo paranormal en niveles inferiores. La fricción ciencia/superstición es motor narrativo."
      },
      {
        "q": "¿Funciona el búnker en horror puro?",
        "a": "Mucho. El espacio cerrado es marco clásico de horror desde <em>Alien</em>. Tu refugio limita opciones: no se puede huir, ayuda externa imposible, recursos finitos. Cada decisión tiene peso. El monstruo puede entrar o ser uno de los habitantes."
      }
    ]
  },
  "en": {
    "pageTitle": "Bunker Name Generator | Genfy",
    "metaDesc": "Create underground bunker, apocalyptic shelter and survival vault names for post-apocalyptic scenarios, survival sci-fi and roleplay campaigns.",
    "h1": "Bunker Name Generator",
    "intro": "Christen underground shelters, vaults and apocalyptic bunkers with names that breathe last days. For post-apocalypse, sci-fi and survival roleplay.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Shelter type",
        "items": [
          "Bunker", "Shelter", "Vault", "Cellar", "Crypt", "Chamber", "Underground", "Silo",
          "Capsule", "Ark", "Coffer", "Crypto-Vault", "Atomic Shelter", "Air Raid Shelter", "Nuclear Shelter", "Fallout Shelter",
          "Tunnel", "Gallery", "Sublevel", "Sub-Structure", "Sub-Sector", "Sealed Compartment", "Panic Room", "Cold Room",
          "Sealed Habitat", "Underground Station", "Continuity Center", "Rally Point", "Civil Shelter", "Military Shelter", "Family Shelter", "Community Shelter",
          "Vault-Tec", "Survival Compound", "Doomsday Bunker", "Continuity of Government Site", "Black Site Shelter", "Mountain Hollow", "Salt Mine Shelter", "Limestone Vault"
        ]
      },
      {
        "id": "designator",
        "label": "Designator",
        "items": [
          "Vault 13", "Vault 101", "Vault 76", "Vault 33", "Genesis Shelter", "Iris Shelter", "Aurea Shelter", "Charon Shelter",
          "Cheyenne", "Mount Weather", "Greenbrier", "Raven Rock", "Site R", "Continuity Mountain", "Iron Mountain", "Doomsday Hill",
          "Alpha", "Beta", "Gamma", "Delta", "Omega", "Zulu", "Sierra", "Whiskey",
          "01", "07", "13", "47", "77", "117", "184", "256",
          "Atlas", "Phoenix", "Aurora", "Solis", "Kepler", "Hera", "Janus", "Cerberus"
        ]
      },
      {
        "id": "spec",
        "label": "Specification / coverage",
        "items": [
          "Antinuclear", "Antibiological", "Anti-EMP", "Anti-Radiation", "Anti-Air", "Anti-Meteor", "Anti-Pandemic", "Anti-Solar",
          "Civilian", "Military", "Private", "Corporate", "Family", "Multi-Generational", "Single Capsule", "Communal",
          "50m Depth", "200m Depth", "500m Depth", "1km Depth", "Underground", "Submarine", "Under Mountain Range", "Under Glacier",
          "For 6 people", "For 50 people", "For 500 people", "For 5000 people", "Indefinite capacity", "Cryogenic hibernation", "Prolonged stasis", "Sustained life",
          "30-day supplies", "1-year supplies", "10-year supplies", "50-year supplies", "Self-sufficient", "Full recycling", "Hydroponic", "Fusion reactor"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to name bunkers with narrative weight",
        "body": "<p>Real bunkers have three layers: administrative name (Mount Weather, Cheyenne Mountain Complex), operational code (Site R, Continuity Mountain), and popular rumor (the 'White House underground'). <em>Fallout</em> popularized Vault + number, simple and memorable. Replicate for your world: 'Shelter 47', 'Aurora-13 Vault'.</p><p>The number itself is narrative. Vault 13 (origin), Vault 101 (insular), Vault 76 (repopulation). Each number had different experimental purpose in lore. Your shelter can belong to a program with sub-vaults for different functions: civil refuge, genetic bank, cultural archive, military depot. Numbering creates ecosystem feel.</p><p>Add coverage designation. 'Atomic Shelter' is 1950s; 'Anti-EMP Shelter' is 21st century. The temporal-technological specificity of the name communicates era. If your world has varied threats, shelters specialize: anti-pandemic, anti-impact, anti-hostile-AI.</p>"
      },
      {
        "h2": "Bunker types by narrative genre",
        "body": "<p>Classic post-apocalyptic (Fallout, A Boy and His Dog): pre-war experimental vaults opened centuries later. Nostalgic-decadent tone. Your shelter can have old posters, midcentury furniture, corporate propaganda. Vault-Tec is perfect fictional brand to reproduce.</p><p>Contemporary realistic (cold war retro, prepper): private millionaire or government shelters. Mount Weather, Greenbrier, hyper-millionaire bunkers in New Zealand. Sober aesthetic, polished equipment, operational manuals. <em>Greenland</em>, <em>Don't Look Up</em>, <em>Bunker</em> use this register.</p><p>Future sci-fi (Silo, Wool, underground Snowpiercer): vertical or descending habitats. Oppressive aesthetic, rigid social hierarchy, upper-level secrets. Your Silo-7 or Vertical Shelter can have 144 levels, each with specific social function.</p><p>Military conspiracy (mountain bases, COG sites): bunkers for continuity of government, surviving elites. <em>Designated Survivor</em>, <em>13 Days</em> dramatize these installations. Bureaucratic-paranoid tone. Your shelter can be where officials cook up policies while outside the world burns.</p>"
      },
      {
        "h2": "Common mistakes inventing underground shelters",
        "body": "<p>Mistake 1: ignoring logistics. A bunker for 1,000 people for 30 years needs oxygen (recirculation + CO2 scrubbers), food (8,000 cal/person/day x 1,000 x 365 x 30 = absurd numbers), water, waste management, energy. If your shelter houses 5,000 for a century without logistical explanation, you lose realism. <em>The 100</em> and <em>Silo</em> give plausible answers; many weak works don't.</p><p>Mistake 2: isolation psychology unaddressed. Confining humans for decades generates depression, claustrophobia, conflicts. <em>Wayward Pines</em>, <em>Snowpiercer</em>, <em>Silo</em> theme the psychic pressure. If your novel ignores this, inhabitants seem emotionless NPCs. Show the mental cost of the shelter.</p><p>Mistake 3: easy exit. A bunker opening just from curiosity breaks stakes. Real exits require authorization, decontamination, atmospheric evaluation, equipment. If your protagonist 'goes out to explore' without protocol, you lose weight. Build the exit portal with ritual, risk, irreversible decision.</p>"
      },
      {
        "h2": "Build memorable daily life inside the bunker",
        "body": "<p>The bunker is setting, not just location. Define its internal geography: how many levels, what's on each, where people sleep, eat, work. <em>Silo</em> dedicates first seasons to establishing geography and population before mysteries. Your shelter deserves the same attention.</p><p>Internal rules: rationing, generations, prohibitions. Vault 76 forbade opening before 25 years; Mount Weather had strict communications protocols. Your rules create conflict: the rebel wants to break them, the conservative defends them, the politician manipulates them. Three to five central rules suffice to generate plot.</p><p>Emergent culture: after two generations, inhabitants have own jargon, rituals, invented holidays. <em>Wool</em>'s Cleaning, <em>Hunger Games</em>'s Reaping though not bunker. Your shelter can have annual 'Closing Day' celebration or teen passage ritual. That specific culture differentiates your world from generic.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between bunker, vault and shelter?",
        "a": "Bunker is generic military term (any fortified structure). Vault implies vault with specific purpose (Fallout popularized it). Shelter is generic civilian. For military realism, bunker. For dystopian sci-fi, vault. For prepper family drama, shelter."
      },
      {
        "q": "Should my bunker have prior history before the plot?",
        "a": "Ideally yes. When was it built? For what crisis? Who funded it? Who initially populated? Those questions give texture. Construction can respond to Cold War, pandemic, astronomical threat. The history layer deepens atmosphere."
      },
      {
        "q": "Can I combine bunker with supernatural elements?",
        "a": "Yes, rich subgenre. <em>The Mist</em>, <em>10 Cloverfield Lane</em> mix shelter with external or internal horror. Your bunker can be realistic in structure but contain something paranormal on lower levels. The science/superstition friction is narrative engine."
      },
      {
        "q": "Does the bunker work in pure horror?",
        "a": "Very much. The closed space is classic horror frame since <em>Alien</em>. Your shelter limits options: no fleeing, no external help, finite resources. Each decision has weight. The monster can enter or be one of the inhabitants."
      }
    ]
  }
};
