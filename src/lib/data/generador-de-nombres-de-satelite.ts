import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-satelite",
    "en": "satellite-name-generator"
  },
  "category": "fun",
  "emoji": "🛰️",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Satélite | Genfy",
    "metaDesc": "Creá nombres técnicos de satélites, sondas espaciales y tecnología orbital para narrativa aeroespacial, sci-fi hard y campañas de rol espaciales.",
    "h1": "Generador de Nombres de Satélite",
    "intro": "Bautizá satélites, sondas y plataformas orbitales con nomenclatura técnica creíble. Para sci-fi hard, thriller aeroespacial y rol espacial.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Familia / programa",
        "items": [
          "Hubble", "Voyager", "Pioneer", "Cassini", "Galileo", "Kepler", "Sentinel", "Orion",
          "Halcón", "Cóndor", "Pegaso", "Aurora", "Helios", "Solaris", "Cygnus", "Polaris",
          "Tycho", "Copérnico", "Aristarco", "Ptolomeo", "Hiparco", "Ulises", "Argo", "Hermes",
          "Atlas", "Nimbus", "Oryx", "Atlas-7", "Centauri", "Andrómeda", "Cassiopeia", "Boötes",
          "Sentry", "Watchtower", "Lighthouse", "Watchman", "Beacon", "Argus", "Vigilance", "Lookout"
        ]
      },
      {
        "id": "function",
        "label": "Función",
        "items": [
          "de Comunicaciones", "de Observación Terrestre", "Meteorológico", "de Navegación", "de Telemetría", "Reconocimiento Óptico", "de Vigilancia Radárica", "de Inteligencia de Señales",
          "Astronómico", "de Imágenes Hiperespectrales", "Geodésico", "de Detección Temprana", "de Defensa Estratégica", "de Investigación Climática", "Oceanográfico", "Geomagnético",
          "Espía", "Militar", "Antimisil", "de Localización GPS", "Cuántico", "Experimental", "Test-Bed", "Demostrador Tecnológico",
          "Communications", "Earth Observation", "Weather", "Navigation", "Telemetry", "Optical Recon", "Radar Surveillance", "Signals Intelligence",
          "de Cobertura Polar", "de Órbita Geoestacionaria", "de Órbita Lunar", "Heliosíncrono", "Cislunar", "Lagrangiano", "de Transferencia Hohmann", "de Asistencia Gravitacional"
        ]
      },
      {
        "id": "id",
        "label": "Designación / serie",
        "items": [
          "I", "II", "III", "IV", "V", "VI", "VII", "VIII",
          "1A", "2B", "3C", "5F", "7G", "11K", "23X", "47Z",
          "Mk-1", "Mk-3", "Mk-7", "Block II", "Block IIIA", "Constellation 4", "Constellation 9", "Constellation 12",
          "001", "007", "013", "047", "077", "117", "184", "256",
          "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta"
        ]
      }
    ],
    "separator": "-",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo nombrar satélites con realismo aeroespacial",
        "body": "<p>Los satélites reales siguen patrones detectables. Familia + número + función. NOAA-19 es el satélite 19 de la serie meteorológica de la NOAA. Sentinel-2A es el primero de la serie 2 del programa Sentinel europeo. GPS Block IIF-12 indica generación específica del sistema GPS. Para tu satélite ficticio, decidí familia y serie antes de bautizarlo.</p><p>Las familias suelen tener nombres mitológicos o astronómicos: Hubble (astrónomo), Voyager (concepto), Cassini (astrónomo), Sentinel (función). Para tu narrativa, mezclá: nombre poético + número árido. 'Aurora-7' o 'Argus-12' son creíbles. 'Aurora' a secas sería sonda solitaria; sumar el número implica programa.</p><p>Sumá organismo emisor. NASA, ESA, JAXA, ROSCOSMOS, SpaceX. Para mundos ficticios, inventá agencia: 'Lunar Aurora-7 (Authority Aeroespacial Sudamericana)' o 'PASE Sentinel-12'. La firma institucional es lo que hace que tu satélite parezca operacional, no decorativo.</p>"
      },
      {
        "h2": "Tipos de satélite por función narrativa",
        "body": "<p>Espía y vigilancia: serie KH (KeyHole) real, NRO satellites con nombres clasificados, Programa USA-XXX. En ficción podés llamar a tu satélite 'Argus-7' o 'Sentry-Block-III'. Estos satélites generan trama: el héroe sabe que un satélite enemigo lo observa y debe esquivarlo. <em>Eye in the Sky</em>, <em>Patriot Games</em> usan esto.</p><p>Comunicaciones: Iridium, Starlink, Inmarsat reales. Para tu obra: 'Constelación Cygnus-2' o 'Red Halcón-IV'. Cuando el villano destruye este satélite, el mundo pierde conectividad regional. Los thrillers cyberpunk usan caída de satélites como evento gatillo.</p><p>Investigación científica: Hubble, James Webb, Chandra, Kepler. Para sci-fi: 'Telescopio Espacial Aristarco-3' o 'Sonda Pegaso-9'. Ideal para historias de descubrimiento: el satélite captura algo que no debía existir y la trama se dispara.</p><p>Militar y armas orbitales: Strategic Defense Initiative, Star Wars. Para tu mundo: 'Plataforma de Defensa Orbital Atlas-12'. Los satélites artillados son villanos pasivos en thriller geopolítico: pueden disparar pero solo bajo orden específica que la trama bloquea o desbloquea.</p>"
      },
      {
        "h2": "Errores comunes al inventar satélites ficticios",
        "body": "<p>Error 1: ignorar la órbita. Un satélite GEO está a 36.000 km y se ve fijo desde la Tierra; uno LEO está a 600 km y orbita en 90 minutos. Si tu thriller necesita vigilancia continua sobre Beirut, debe ser GEO; si necesita pasada cada 90 min, es LEO. Errar la órbita y todo lector con conocimiento básico se desconecta.</p><p>Error 2: poderes mágicos. Los satélites reales no leen patentes desde el espacio (resolución óptica máxima civil ~30cm, militar ~10cm). Si tu satélite identifica el rostro de un sospechoso desde 600km, perdés realismo a menos que estés en sci-fi cercano con sensores cuánticos avanzados explicados.</p><p>Error 3: vulnerabilidad o invulnerabilidad sin matiz. Los satélites son frágiles (basura espacial, tormentas solares, pulsos electromagnéticos pueden dañarlos) pero también redundantes (constelaciones de 60+ satélites). Si tu trama requiere destruir uno crucial, justificá por qué no hay backup. <em>Ad Astra</em> y <em>Gravity</em> exploran este equilibrio.</p>"
      },
      {
        "h2": "Construir programa espacial completo, no satélite suelto",
        "body": "<p>Tu satélite no existe en el vacío. Tiene cohete que lo lanzó (Atlas V, Falcon 9, Long March), centro de control terrestre (Goddard, Houston, Toulouse), red de antenas para comunicación (Deep Space Network), y operadores entrenados. Mencionar dos o tres de estos elementos en escenas relacionadas al satélite construye textura.</p><p>Cronología creíble: misiones espaciales se planean décadas antes, se lanzan en ventanas específicas, operan años. Si tu satélite ficticio se lanzó en 2023 y muere en 2026, necesitás explicar fin de misión: combustible agotado, falla de batería, decisión deliberada de re-entrada controlada. Las misiones no terminan mágicamente.</p><p>Constelación o serie: en lugar de un satélite, inventá tres a seis. 'Constelación Halcón' tiene Halcón-1 (lanzamiento 2024), Halcón-2 (perdido en lanzamiento), Halcón-3 (operacional), Halcón-4 (en desarrollo). Esa biografía completa permite a tu protagonista referirse a 'el desastre del Halcón-2' sin explicar más, y el mundo se siente vivo.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo decido entre nombre poético tipo Voyager o nombre técnico tipo USA-247?",
        "a": "Depende de quién lo nombra. Programas civiles y científicos eligen nombres aspiracionales (Hubble, Kepler). Programas militares y espía usan códigos áridos (USA-XXX, KH-11). Si tu satélite es de la NASA ficticia, ponele nombre lindo; si es del Pentágono ficticio, ponele código numérico."
      },
      {
        "q": "¿Necesito calcular órbitas reales para mi sci-fi?",
        "a": "Para hard sci-fi sí, al menos las básicas (LEO, MEO, GEO, Lagrange). Para space opera no, la suspensión de incredulidad es más laxa. Pero conocer dos términos técnicos correctos vale más que veinte inventados que no encajan."
      },
      {
        "q": "¿Funcionan los satélites como villanos en thriller?",
        "a": "Sí, son MacGuffin natural. <em>GoldenEye</em> usa satélite como arma electromagnética. La amenaza existe en órbita, lejana e impersonal, y la trama avanza contra reloj antes de la activación. La inaccesibilidad física es lo que da tensión."
      },
      {
        "q": "¿Puedo mezclar satélites reales y ficticios en mi novela?",
        "a": "Totalmente. Mencionar Hubble o Starlink como contexto y agregar 'Pegaso-7' ficticio que la NSA opera en secreto es práctica común. Lo real ancla credibilidad, lo ficticio permite trama sin demandas."
      }
    ]
  },
  "en": {
    "pageTitle": "Satellite Name Generator | Genfy",
    "metaDesc": "Create technical satellite, space probe and orbital tech names for aerospace narrative, hard sci-fi and space roleplay campaigns.",
    "h1": "Satellite Name Generator",
    "intro": "Christen satellites, probes and orbital platforms with believable technical nomenclature. For hard sci-fi, aerospace thrillers and space roleplay.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Family / program",
        "items": [
          "Hubble", "Voyager", "Pioneer", "Cassini", "Galileo", "Kepler", "Sentinel", "Orion",
          "Falcon", "Condor", "Pegasus", "Aurora", "Helios", "Solaris", "Cygnus", "Polaris",
          "Tycho", "Copernicus", "Aristarchus", "Ptolemy", "Hipparchus", "Ulysses", "Argo", "Hermes",
          "Atlas", "Nimbus", "Oryx", "Atlas-7", "Centauri", "Andromeda", "Cassiopeia", "Boötes",
          "Sentry", "Watchtower", "Lighthouse", "Watchman", "Beacon", "Argus", "Vigilance", "Lookout"
        ]
      },
      {
        "id": "function",
        "label": "Function",
        "items": [
          "Communications", "Earth Observation", "Weather", "Navigation", "Telemetry", "Optical Recon", "Radar Surveillance", "Signals Intelligence",
          "Astronomy", "Hyperspectral Imaging", "Geodesy", "Early Warning", "Strategic Defense", "Climate Research", "Oceanographic", "Geomagnetic",
          "Spy", "Military", "Anti-Missile", "GPS Positioning", "Quantum", "Experimental", "Test-Bed", "Tech Demonstrator",
          "Comms", "Earth-Sensing", "Weather Monitoring", "Nav", "Beacon", "Optical", "SAR", "ELINT",
          "Polar Coverage", "Geostationary", "Lunar Orbit", "Heliosynchronous", "Cislunar", "Lagrangian", "Hohmann Transfer", "Gravity Assist"
        ]
      },
      {
        "id": "id",
        "label": "Designation / serial",
        "items": [
          "I", "II", "III", "IV", "V", "VI", "VII", "VIII",
          "1A", "2B", "3C", "5F", "7G", "11K", "23X", "47Z",
          "Mk-1", "Mk-3", "Mk-7", "Block II", "Block IIIA", "Constellation 4", "Constellation 9", "Constellation 12",
          "001", "007", "013", "047", "077", "117", "184", "256",
          "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta"
        ]
      }
    ],
    "separator": "-",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to name satellites with aerospace realism",
        "body": "<p>Real satellites follow detectable patterns. Family + number + function. NOAA-19 is satellite 19 of NOAA's weather series. Sentinel-2A is first of European Sentinel program's series 2. GPS Block IIF-12 indicates specific generation of GPS system. For your fictional satellite, decide family and series before naming.</p><p>Families usually have mythological or astronomical names: Hubble (astronomer), Voyager (concept), Cassini (astronomer), Sentinel (function). For your narrative, mix: poetic name + arid number. 'Aurora-7' or 'Argus-12' are credible. 'Aurora' alone would be lone probe; adding the number implies program.</p><p>Add issuing organization. NASA, ESA, JAXA, ROSCOSMOS, SpaceX. For fictional worlds, invent agency: 'Lunar Aurora-7 (South American Aerospace Authority)' or 'PASE Sentinel-12'. The institutional signature makes your satellite seem operational, not decorative.</p>"
      },
      {
        "h2": "Satellite types by narrative function",
        "body": "<p>Spy and surveillance: real KH series (KeyHole), NRO satellites with classified names, Program USA-XXX. In fiction you can call your satellite 'Argus-7' or 'Sentry-Block-III'. These satellites generate plot: the hero knows an enemy satellite watches him and must dodge it. <em>Eye in the Sky</em>, <em>Patriot Games</em> use this.</p><p>Communications: real Iridium, Starlink, Inmarsat. For your work: 'Cygnus-2 Constellation' or 'Falcon-IV Network'. When the villain destroys this satellite, the world loses regional connectivity. Cyberpunk thrillers use satellite fall as trigger event.</p><p>Scientific research: Hubble, James Webb, Chandra, Kepler. For sci-fi: 'Aristarchus-3 Space Telescope' or 'Pegasus-9 Probe'. Ideal for discovery stories: the satellite captures something that shouldn't exist and the plot launches.</p><p>Military and orbital weapons: Strategic Defense Initiative, Star Wars. For your world: 'Atlas-12 Orbital Defense Platform'. Weaponized satellites are passive villains in geopolitical thriller: they can fire but only under specific order the plot blocks or unblocks.</p>"
      },
      {
        "h2": "Common mistakes inventing fictional satellites",
        "body": "<p>Mistake 1: ignoring orbit. A GEO satellite is at 36,000 km and seems fixed from Earth; an LEO is at 600 km and orbits in 90 minutes. If your thriller needs continuous surveillance over Beirut, it must be GEO; if it needs pass every 90 min, it's LEO. Wrong orbit and any reader with basic knowledge disconnects.</p><p>Mistake 2: magic powers. Real satellites can't read license plates from space (max civilian optical resolution ~30cm, military ~10cm). If your satellite identifies a suspect's face from 600km, you lose realism unless you're in near-future sci-fi with explained advanced quantum sensors.</p><p>Mistake 3: vulnerability or invulnerability without nuance. Satellites are fragile (space debris, solar storms, EMPs can damage them) but also redundant (constellations of 60+ satellites). If your plot requires destroying a crucial one, justify why there's no backup. <em>Ad Astra</em> and <em>Gravity</em> explore this balance.</p>"
      },
      {
        "h2": "Build complete space program, not lone satellite",
        "body": "<p>Your satellite doesn't exist in vacuum. It has rocket that launched it (Atlas V, Falcon 9, Long March), ground control center (Goddard, Houston, Toulouse), antenna network for communication (Deep Space Network), and trained operators. Mentioning two or three of these elements in satellite-related scenes builds texture.</p><p>Believable chronology: space missions are planned decades ahead, launched in specific windows, operate years. If your fictional satellite launched in 2023 and dies in 2026, you need to explain mission end: depleted fuel, battery failure, deliberate controlled re-entry decision. Missions don't end magically.</p><p>Constellation or series: instead of one satellite, invent three to six. 'Falcon Constellation' has Falcon-1 (launch 2024), Falcon-2 (lost in launch), Falcon-3 (operational), Falcon-4 (in development). That complete biography lets your protagonist refer to 'the Falcon-2 disaster' without further explanation, and the world feels alive.</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I choose between poetic name like Voyager or technical like USA-247?",
        "a": "Depends who names it. Civilian and scientific programs choose aspirational names (Hubble, Kepler). Military and spy programs use arid codes (USA-XXX, KH-11). If your satellite is fictional NASA, give it a pretty name; if it's fictional Pentagon, give it numeric code."
      },
      {
        "q": "Do I need to calculate real orbits for my sci-fi?",
        "a": "For hard sci-fi yes, at least basics (LEO, MEO, GEO, Lagrange). For space opera no, suspension of disbelief is laxer. But knowing two correct technical terms is worth more than twenty invented ones that don't fit."
      },
      {
        "q": "Do satellites work as thriller villains?",
        "a": "Yes, they're natural MacGuffin. <em>GoldenEye</em> uses satellite as electromagnetic weapon. The threat exists in orbit, distant and impersonal, and the plot races against the clock before activation. Physical inaccessibility is what gives tension."
      },
      {
        "q": "Can I mix real and fictional satellites in my novel?",
        "a": "Totally. Mentioning Hubble or Starlink as context and adding fictional 'Pegasus-7' that NSA secretly operates is common practice. The real anchors credibility, the fictional allows plot without lawsuits."
      }
    ]
  }
};
