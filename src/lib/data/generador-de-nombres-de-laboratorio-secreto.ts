import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-laboratorio-secreto",
    "en": "secret-lab-name-generator"
  },
  "category": "fun",
  "emoji": "🧪",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Laboratorio Secreto | Genfy",
    "metaDesc": "Creá nombres misteriosos de laboratorios secretos, facilities clasificados y centros de investigación ocultos para sci-fi, conspiración y horror.",
    "h1": "Generador de Nombres de Laboratorio Secreto",
    "intro": "Inventá facilities clandestinos donde la ciencia cruza la línea ética. Para sci-fi, horror corporal, conspiración y rol de exploración.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de instalación",
        "items": [
          "Laboratorio", "Facility", "Centro", "Instituto", "Complejo", "Estación", "Site", "Outpost",
          "Búnker", "Refugio", "Sitio", "Subnivel", "Anexo", "Pabellón", "Torre", "Subterráneo",
          "Centro de Investigación", "Instituto de Estudios", "Programa Experimental", "Iniciativa Científica", "Estación Biológica", "Reactor Experimental", "Hangar", "Depósito",
          "Black Site", "R&D Facility", "Containment Site", "Research Outpost", "Annex", "Compound", "Reservation", "Test Site",
          "Cuartel Científico", "Estación Polar", "Bóveda Genética", "Cámara de Aislamiento", "Núcleo Experimental", "Sub-Estructura", "Plataforma Sumergible", "Sitio Arqueológico Activo"
        ]
      },
      {
        "id": "designation",
        "label": "Designación clave",
        "items": [
          "Aurora", "Helios", "Cromo", "Mercurio", "Cobalto", "Iridio", "Plomo", "Argón",
          "Sigma-7", "Omega-3", "Theta-9", "Phi-2", "Tau-5", "Delta-11", "Lambda-4", "Kappa-13",
          "Site-19", "Site-77", "Site-13", "Sector 7-G", "Subnivel 8", "Bunker 23", "Outpost Cero", "Anexo 4",
          "Project Arclight", "Project Snowfall", "Project Hollow", "Project Cradle", "Project Nightingale", "Project Coldstream", "Project Quartz", "Project Veil",
          "Caja Negra", "Caja Pandora", "Cofre 47", "Bóveda Carmesí", "Reactor Phi", "Cámara Janus", "Sala Mu", "Sello Gamma"
        ]
      },
      {
        "id": "location",
        "label": "Ubicación / cobertura",
        "items": [
          "del Ártico", "del Pacífico", "del Atlántico Norte", "de Siberia", "del Desierto", "de los Andes", "del Yukon", "de Mongolia",
          "Subterráneo", "Submarino", "Orbital", "Lunar", "Marciano", "en Plataforma Petrolera", "en Isla Privada", "en Cordillera Remota",
          "bajo Empresa Forestal", "bajo Reserva Natural", "bajo Universidad", "bajo Hospital", "bajo Refinería", "bajo Estación Meteorológica", "bajo Granja Industrial", "bajo Mina Abandonada",
          "Antártico", "Patagónico", "del Tibet", "de Aleutianas", "de Groenlandia", "de Tasmania", "de Madagascar", "del Caspio",
          "del Estrecho de Bering", "de Cabo Verde", "del Mar Negro", "del Sahara", "del Amazonas", "de Tierra del Fuego", "de las Galápagos", "de Diego García"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía del laboratorio secreto en ficción",
        "body": "<p>Los facilities ficticios memorables tienen tres capas: nombre interno técnico (Site-19 de SCP, Black Mesa de <em>Half-Life</em>), cobertura civil (universidad, planta minera, base meteorológica) y rumor local (los lugareños llaman 'la cosa de la montaña'). Esta tripleta crea el aroma de secreto-pero-conocido que define el género.</p><p>Las inspiraciones reales aportan mucho. Area 51, Vault Tec, Porton Down, Chernobyl Reactor 4. Cada uno tiene mística distinta: Area 51 es militar-aérea, Porton Down es bio-química británica, Vault de Fallout es civil sub-suelo. Decidí qué inspiración predomina y mezclá detalles de las otras para originalidad.</p><p>El nombre debe ser simultáneamente técnico y evocador. 'Sigma-7' suena militar; 'Site-19' suena administrativo; 'Project Aurora' suena bonito y por eso siniestro. La tensión entre nombre limpio y propósito sucio es donde vive el género. Si tu lab se llama 'Casa del Horror', perdiste sutileza.</p>"
      },
      {
        "h2": "Categorías de investigación según género",
        "body": "<p>Bio-genética horrorífica: nombres con eco médico-científico. <em>Resident Evil</em>'s Spencer Mansion, Umbrella Hive. Tu lab puede investigar virus, mutaciones, hibridación. Sumá sufijos -bio, -gen, -virus en la designación interna. 'Programa Quimera-7' suma capa biológica al nombre.</p><p>Tecnología militar y armas exóticas: nombres con eco DARPA, Manhattan Project, Lockheed Skunk Works. Tu facility puede desarrollar armas láser, sigilo, drones autónomos. 'Skunk Site Tau' o 'Reactor Experimental Phi' encaja. <em>Annihilation</em> y <em>Stranger Things</em> juegan con esta línea.</p><p>Paranormal y dimensional: nombres tipo SCP Foundation, MK-Ultra, Stargate Project. Investigación de fenómenos imposibles, contención, viajes a otras dimensiones. 'Site-19', 'Project Stargate', 'Bóveda 13'. La estética combina ciencia rigurosa con lo inexplicable.</p><p>IA y consciencia: nombres futuristas con tono tech corporativo. <em>Ex Machina</em>'s Bluebook complex, Cyberdyne. Para mundos cyberpunk, tu lab puede tener nombre limpio comercial mientras hace gestación de AGI.</p>"
      },
      {
        "h2": "Errores comunes al diseñar laboratorios secretos",
        "body": "<p>Error 1: ubicación poco creíble. 'Laboratorio secreto en pleno Manhattan' rompe verosimilitud. Las instalaciones reales se esconden en lugares remotos justamente porque la cobertura es difícil en zonas pobladas. Mejor: bajo isla privada, en cordillera, dentro de plataforma petrolera, bajo cobertura de empresa forestal. <em>Lost</em> usó Dharma Initiative en isla Pacífico con resultado memorable.</p><p>Error 2: seguridad inverosímil. Si tu lab guarda armas biológicas, no entra cualquiera por una puerta lateral. Diseñá protocolos: badge electrónico, escáner retinal, ducha descontaminante, cuarentena de 48h, autorización por dos personas (two-man rule). Que tu protagonista entre debe costar trabajo narrativo, no ser un detalle de un párrafo.</p><p>Error 3: personal sin lore. Los científicos del lab no son extras. Cada uno tiene ética distinta, miedos, motivos. <em>Annihilation</em>, <em>Sphere</em> y <em>Event Horizon</em> usan equipos heterogéneos donde cada miembro representa enfoque distinto: bióloga, psicóloga, militar, antropóloga. Esa diversidad de profesiones permite escenas de discusión técnica creíble.</p>"
      },
      {
        "h2": "Construir misterio progresivo desde el nombre",
        "body": "<p>El nombre puede revelarse en capas. Primer acto: los personajes oyen 'la instalación' o 'el lugar'. Segundo acto: descubren designación oficial 'Site-19'. Tercer acto: descubren nombre interno verdadero 'Project Cradle' o el clasificado superior 'Programa Lazarus'. Cada revelación es beat narrativo.</p><p>Documentación interna fragmentaria es el truco. <em>Half-Life</em> y <em>BioShock</em> popularizaron usar audiolog y memos rotos para construir lore. Inventá tres a cinco documentos breves que tu protagonista encuentra: una requisición de equipo, un memo de seguridad censurado, una carta personal de científico angustiado. Esos fragmentos construyen profundidad sin exposición.</p><p>Para campañas de rol, definí qué se sabe y qué no antes de la sesión uno. Los jugadores pueden empezar conociendo cobertura ('una empresa minera'), descubrir el nombre del programa en la sesión tres, y solo en la final entender qué hacían realmente. Esa progresión de información mantiene tensión y permite giros sin trampa.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo elijo entre laboratorio bio, tech o paranormal?",
        "a": "Mirá tu trama. Si involucra contagio, mutación o pandemia: bio. Si involucra IA, robótica o energía exótica: tech. Si involucra fenómenos inexplicables, dimensiones o entidades: paranormal. Podés mezclar dos pero no tres sin que se diluya."
      },
      {
        "q": "¿Necesito explicar quién financia el laboratorio?",
        "a": "Sí, eso da peso. Gobierno (rama militar oculta), corporación privada (megacorp con intereses), fundación filantrópica como fachada, o consorcio internacional secreto. La fuente de fondos define qué controles tiene y quién puede ejercer presión política."
      },
      {
        "q": "¿Funciona el laboratorio secreto en horror clásico?",
        "a": "Sí, es subgénero propio. <em>Cabin in the Woods</em>, <em>The Mist</em>, <em>Stranger Things</em>. La ciencia traspasando límites éticos es motor de horror desde Frankenstein. Tu lab puede ser fuente del monstruo o intento fallido de contenerlo."
      },
      {
        "q": "¿Puedo nombrar al personal con códigos en vez de nombres reales?",
        "a": "Funciona en algunos contextos. SCP Foundation usa Dr. Bright, D-class personnel. <em>Severance</em> usa apellidos solos. Para lab clandestino, los empleados pueden tener iniciales o apodos: 'el Profesor', 'Sigma-3', 'la Ingeniera'. Sumá uno o dos nombres reales para humanizar."
      }
    ]
  },
  "en": {
    "pageTitle": "Secret Lab Name Generator | Genfy",
    "metaDesc": "Create mysterious secret laboratory, classified facility and hidden research center names for sci-fi, conspiracy and horror narratives.",
    "h1": "Secret Lab Name Generator",
    "intro": "Invent clandestine facilities where science crosses the ethical line. For sci-fi, body horror, conspiracy and exploration roleplay.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Facility type",
        "items": [
          "Laboratory", "Facility", "Center", "Institute", "Complex", "Station", "Site", "Outpost",
          "Bunker", "Shelter", "Compound", "Sublevel", "Annex", "Pavilion", "Tower", "Underground",
          "Research Center", "Studies Institute", "Experimental Program", "Scientific Initiative", "Biological Station", "Experimental Reactor", "Hangar", "Depot",
          "Black Site", "R&D Facility", "Containment Site", "Research Outpost", "Annex", "Compound", "Reservation", "Test Site",
          "Scientific Quarters", "Polar Station", "Genetic Vault", "Isolation Chamber", "Experimental Core", "Sub-Structure", "Submersible Platform", "Active Archaeological Site"
        ]
      },
      {
        "id": "designation",
        "label": "Code designation",
        "items": [
          "Aurora", "Helios", "Chrome", "Mercury", "Cobalt", "Iridium", "Lead", "Argon",
          "Sigma-7", "Omega-3", "Theta-9", "Phi-2", "Tau-5", "Delta-11", "Lambda-4", "Kappa-13",
          "Site-19", "Site-77", "Site-13", "Sector 7-G", "Sublevel 8", "Bunker 23", "Outpost Zero", "Annex 4",
          "Project Arclight", "Project Snowfall", "Project Hollow", "Project Cradle", "Project Nightingale", "Project Coldstream", "Project Quartz", "Project Veil",
          "Black Box", "Pandora's Box", "Vault 47", "Crimson Vault", "Reactor Phi", "Janus Chamber", "Mu Hall", "Gamma Seal"
        ]
      },
      {
        "id": "location",
        "label": "Location / cover",
        "items": [
          "Arctic", "Pacific", "North Atlantic", "Siberian", "Desert", "Andean", "Yukon", "Mongolian",
          "Underground", "Underwater", "Orbital", "Lunar", "Martian", "on Oil Platform", "on Private Island", "in Remote Range",
          "under Forestry Company", "under Nature Reserve", "under University", "under Hospital", "under Refinery", "under Weather Station", "under Industrial Farm", "under Abandoned Mine",
          "Antarctic", "Patagonian", "Tibetan", "Aleutian", "Greenlandic", "Tasmanian", "Madagascan", "Caspian",
          "Bering Strait", "Cape Verde", "Black Sea", "Saharan", "Amazon", "Tierra del Fuego", "Galápagos", "Diego Garcia"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of the secret lab in fiction",
        "body": "<p>Memorable fictional facilities have three layers: technical internal name (Site-19 of SCP, Black Mesa from <em>Half-Life</em>), civilian cover (university, mining plant, weather base) and local rumor (locals call it 'the thing on the mountain'). This triplet creates the secret-but-known aroma that defines the genre.</p><p>Real inspirations contribute much. Area 51, Vault Tec, Porton Down, Chernobyl Reactor 4. Each has distinct mystique: Area 51 is military-aerial, Porton Down is British bio-chemical, Fallout's Vault is civilian underground. Decide which inspiration predominates and mix details from others for originality.</p><p>The name must be simultaneously technical and evocative. 'Sigma-7' sounds military; 'Site-19' sounds administrative; 'Project Aurora' sounds beautiful and therefore sinister. The tension between clean name and dirty purpose is where the genre lives. If your lab is called 'House of Horror', you lost subtlety.</p>"
      },
      {
        "h2": "Research categories by genre",
        "body": "<p>Horrific bio-genetics: names with medical-scientific echo. <em>Resident Evil</em>'s Spencer Mansion, Umbrella Hive. Your lab can research viruses, mutations, hybridization. Add suffixes -bio, -gen, -virus in internal designation. 'Chimera-7 Program' adds biological layer to the name.</p><p>Military tech and exotic weapons: names echoing DARPA, Manhattan Project, Lockheed Skunk Works. Your facility can develop laser weapons, stealth, autonomous drones. 'Skunk Site Tau' or 'Experimental Reactor Phi' fits. <em>Annihilation</em> and <em>Stranger Things</em> play this line.</p><p>Paranormal and dimensional: names like SCP Foundation, MK-Ultra, Stargate Project. Research of impossible phenomena, containment, travel to other dimensions. 'Site-19', 'Project Stargate', 'Vault 13'. The aesthetic combines rigorous science with the inexplicable.</p><p>AI and consciousness: futuristic names with corporate tech tone. <em>Ex Machina</em>'s Bluebook complex, Cyberdyne. For cyberpunk worlds, your lab can have clean commercial name while gestating AGI.</p>"
      },
      {
        "h2": "Common mistakes designing secret labs",
        "body": "<p>Mistake 1: implausible location. 'Secret laboratory in midtown Manhattan' breaks verisimilitude. Real installations hide in remote places precisely because cover is hard in populated zones. Better: under private island, in mountain range, inside oil platform, under forestry company cover. <em>Lost</em> used Dharma Initiative on Pacific island with memorable result.</p><p>Mistake 2: implausible security. If your lab stores bioweapons, not just anyone enters through a side door. Design protocols: electronic badge, retinal scan, decontamination shower, 48h quarantine, two-person authorization (two-man rule). Your protagonist's entry should cost narrative work, not be a one-paragraph detail.</p><p>Mistake 3: lore-less personnel. Lab scientists are not extras. Each has different ethics, fears, motives. <em>Annihilation</em>, <em>Sphere</em> and <em>Event Horizon</em> use heterogeneous teams where each member represents different approach: biologist, psychologist, military, anthropologist. That professional diversity allows credible technical discussion scenes.</p>"
      },
      {
        "h2": "Build progressive mystery from the name",
        "body": "<p>The name can be revealed in layers. First act: characters hear 'the facility' or 'the place'. Second act: they discover official designation 'Site-19'. Third act: they discover true internal name 'Project Cradle' or the higher classified 'Lazarus Program'. Each revelation is a narrative beat.</p><p>Fragmentary internal documentation is the trick. <em>Half-Life</em> and <em>BioShock</em> popularized using audiolog and torn memos to build lore. Invent three to five brief documents your protagonist finds: an equipment requisition, a censored security memo, a personal letter from anguished scientist. Those fragments build depth without exposition.</p><p>For roleplay campaigns, define what's known and what isn't before session one. Players can start knowing the cover ('a mining company'), discover the program name in session three, and only in the final understand what they were really doing. That information progression maintains tension and allows twists without cheating.</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I choose between bio, tech or paranormal lab?",
        "a": "Look at your plot. If it involves contagion, mutation or pandemic: bio. If it involves AI, robotics or exotic energy: tech. If it involves inexplicable phenomena, dimensions or entities: paranormal. You can mix two but not three without diluting."
      },
      {
        "q": "Do I need to explain who funds the laboratory?",
        "a": "Yes, that gives weight. Government (hidden military branch), private corporation (megacorp with interests), philanthropic foundation as facade, or secret international consortium. The funding source defines what controls it has and who can exert political pressure."
      },
      {
        "q": "Does the secret lab work in classic horror?",
        "a": "Yes, it's its own subgenre. <em>Cabin in the Woods</em>, <em>The Mist</em>, <em>Stranger Things</em>. Science crossing ethical limits is horror engine since Frankenstein. Your lab can be source of the monster or failed attempt to contain it."
      },
      {
        "q": "Can I name personnel with codes instead of real names?",
        "a": "Works in some contexts. SCP Foundation uses Dr. Bright, D-class personnel. <em>Severance</em> uses surnames only. For clandestine lab, employees can have initials or nicknames: 'the Professor', 'Sigma-3', 'the Engineer'. Add one or two real names to humanize."
      }
    ]
  }
};
