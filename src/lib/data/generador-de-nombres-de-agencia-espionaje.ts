import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-agencia-espionaje",
    "en": "spy-agency-name-generator"
  },
  "category": "fun",
  "emoji": "🕵️",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Agencia de Espionaje | Genfy",
    "metaDesc": "Creá nombres encubiertos de agencias de espionaje, servicios de inteligencia y organizaciones clandestinas para thrillers, noir y rol de espías.",
    "h1": "Generador de Nombres de Agencia de Espionaje",
    "intro": "Inventá agencias de inteligencia ficticias con aroma a Guerra Fría o cyber-vigilancia contemporánea. Para thrillers, sci-fi y rol de espías.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de organización",
        "items": [
          "Agencia", "Servicio", "Departamento", "Bureau", "Oficina", "Dirección", "Comité", "Comisión",
          "Centro", "Instituto", "Sección", "División", "Directorio", "Consejo", "Despacho", "Negociado",
          "Federación", "Coordinación", "Mando", "Programa", "Iniciativa", "Equipo", "Grupo", "Unidad",
          "Servicio Federal", "Agencia Central", "Bureau Federal", "Oficina Internacional", "Servicio Exterior", "Dirección Especial", "Departamento Estratégico", "Comité Permanente",
          "Mesa", "Cámara", "Tribunal", "Ente", "Autoridad", "Mando Conjunto", "Servicio Conjunto", "Coordinación Interministerial"
        ]
      },
      {
        "id": "function",
        "label": "Función / dominio",
        "items": [
          "de Inteligencia", "de Contrainteligencia", "de Seguridad Nacional", "de Operaciones Especiales", "de Acción Exterior", "de Asuntos Sensibles", "de Información Estratégica", "de Análisis Geopolítico",
          "de Investigaciones Federales", "de Reconocimiento", "de Vigilancia", "Criptológico", "de Señales", "de Inteligencia Humana", "de Inteligencia Artificial", "Cibernético",
          "de Defensa Estratégica", "Antiterrorista", "Antiespionaje", "de Operaciones Encubiertas", "de Asuntos Internos", "de Coordinación Interagencial", "Fronterizo", "Diplomático",
          "of Foreign Intelligence", "of Domestic Security", "of Strategic Affairs", "of Counterterrorism", "of Signals Intelligence", "of Cyber Operations", "of Special Activities", "of Clandestine Services",
          "del Estado", "del Reino", "de la República", "Militar", "Naval", "Aérea", "Espacial", "Conjunta"
        ]
      },
      {
        "id": "code",
        "label": "Acrónimo / sigla",
        "items": [
          "MI-7", "MI-9", "MI-13", "DGSE", "BND", "CSIS", "ASIS", "AISE",
          "Sector 7", "Sección K", "División 12", "Programa Aurora", "Proyecto Mosaico", "Iniciativa Argus", "Mando Cero", "Grupo 5",
          "Operación Cromo", "Bureau Negro", "Despacho 13", "Comité Lima", "Sección Especial 9", "Grupo Athena", "Despacho Janus", "Mando Sigma",
          "Departamento X", "Sección Phi", "Subdivisión Tau", "Oficina 21", "Comité 8", "Bureau de Asuntos Z", "Equipo Omega", "Programa Centinela",
          "Echelon", "Prism", "Stargate", "Carnivore", "Helix", "Mongoose", "Argus", "Janus"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomía de una agencia de inteligencia creíble",
        "body": "<p>Las agencias reales tienen nomenclatura aburrida y siglas memorables. CIA es Central Intelligence Agency; MI6 es Secret Intelligence Service; FSB es Federalnaya Sluzhba Bezopasnosti. El nombre completo es burocrático; la sigla es lo que circula. Para tu agencia ficticia diseñá ambas: nombre técnico largo y abreviatura pegadiza.</p><p>Estructura típica: tipo + función + estado. 'Agencia Federal de Seguridad', 'Servicio de Inteligencia Exterior', 'Bureau de Investigaciones Especiales'. Sumá país y obtenés contexto inmediato. Para mundos ficticios, reemplazá 'Federal' por el nombre del estado: 'Agencia Imperial de Inteligencia', 'Bureau Republicano de Asuntos Sensibles'.</p><p>El secreto está en la división interna. La CIA tiene Directorate of Operations, Directorate of Intelligence, Directorate of Science and Technology. Si tu agencia es protagónica, definí dos o tres direcciones internas. <em>The Americans</em> usa Departamento S de la KGB para clandestinos durmientes; ese detalle específico es lo que da peso operativo.</p>"
      },
      {
        "h2": "Tonos según el género de tu thriller",
        "body": "<p>Espionaje clásico Guerra Fría (Le Carré, Deighton): nombres británicos formales, estructuras burocráticas, jerga de oficina. 'The Circus' como apodo del MI6 en Tinker Tailor Soldier Spy. Tu agencia ficticia puede tener sede en edificio gris, archivos olvidados, café malo. La burocracia es la atmósfera.</p><p>Thriller contemporáneo (Bourne, Mission Impossible): agencias ágiles, secretas dentro del gobierno, con códigos como 'Treadstone', 'Blackbriar', 'IMF'. La estética es proyecto especial dentro del proyecto especial. Tu agencia puede ser sub-departamento sin presupuesto oficial cuyo nombre cambia cada cinco años para evitar paper trail.</p><p>Cyber-espionaje moderno (Mr. Robot, Person of Interest): agencias con nombres tipo proyecto tech ('Echelon', 'Prism', 'The Machine'). El espionaje es vigilancia masiva más que operativos en terreno. Para sci-fi, sumá AI: 'Bureau de Análisis Predictivo Sentinel', 'Coordinación de Inteligencia Artificial Estratégica'.</p><p>Sátira (Get Smart, Archer): nombres de tres letras paródicos: CONTROL, ISIS (pre-controversia, renombrada), KAOS. La gracia viene del contraste entre nombres serios y operativos absurdos.</p>"
      },
      {
        "h2": "Errores comunes al inventar agencias secretas",
        "body": "<p>Error 1: omnipotencia narrativa. Las agencias ficticias suelen saberlo todo y poder todo, lo que aplana suspenso. Las reales tienen presupuesto limitado, rivalidades internas, fugas e incompetentes. <em>The Hour</em> y <em>Slow Horses</em> muestran agentes mediocres y descartados; ese realismo construye empatía y tensión.</p><p>Error 2: una sola agencia. Los gobiernos reales tienen ecosistema: CIA, FBI, NSA, DIA, ODNI solo en EE.UU. Cada una compite por presupuesto y jurisdicción. Si tu thriller solo tiene una agencia, perdés rica fricción interagencial. Sumá al menos dos rivales y mostrá conferencias donde discuten quién toma el caso.</p><p>Error 3: ignorar contraparte civil. Toda agencia opera bajo supervisión política. Comité parlamentario, fiscalía, prensa investigativa son contrapesos. El espía protagonista que filtra a una periodista crea conflicto moral genuino. <em>Spy Game</em> y <em>The Looming Tower</em> usan esa supervisión como motor dramático.</p>"
      },
      {
        "h2": "Construir lore profundo para tu agencia ficticia",
        "body": "<p>Definí historia: ¿cuándo se fundó? ¿En qué guerra o crisis? ¿Quién la creó y qué pasó con ese fundador? La CIA nace de la OSS de Segunda Guerra. El Mossad nace en 1949. Tu agencia ficticia debería tener fundación traumática: respuesta a un atentado, escándalo, escisión de otra agencia.</p><p>Cultura interna: cada agencia ficcional necesita ethos. CIA tiene cowboys de operaciones vs. analistas de Langley. Mossad tiene mística operativa. Tu agencia puede ser hiperburócrata o cowboy o tecnócrata. Esa cultura define cómo actúan tus personajes en las escenas.</p><p>Operaciones legendarias: tu agencia debe tener archivo de éxitos y fracasos. Operación X que salvó al país, Operación Y que avergonzó al gobierno, Operación Z que aún está clasificada. Mencionarlas en diálogos casuales construye historia profunda. Cuando dos veteranos toman café y mencionan 'lo que pasó en Beirut 89', el lector siente que ese pasado existe aunque no se cuente todavía.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre agencia, servicio y bureau?",
        "a": "Términos casi intercambiables, pero tradición varía. 'Agencia' es genérico americano. 'Servicio' es común europeo (MI6 es Secret Intelligence Service). 'Bureau' implica policial-investigativo (FBI). Elegí según la inspiración cultural de tu mundo."
      },
      {
        "q": "¿Puedo mezclar agencia real con ficticia en mi novela?",
        "a": "Sí, es práctica común. <em>Tom Clancy</em> mezcla CIA real con grupos ficticios. La regla: no atribuir crímenes específicos a agencias reales sin evidencia. Para acciones controvertidas, inventá la agencia desde cero con detalles plausibles."
      },
      {
        "q": "¿Cómo decido si mi agencia será nacional o supranacional?",
        "a": "Depende del scope. Espionaje clásico es nacional con operativos en exterior. Para sci-fi o conspiración global, sumá organización supranacional ficticia (tipo Spectre de Bond, o Hydra de Marvel). Lo segundo permite escala mayor pero requiere mayor suspensión de incredulidad."
      },
      {
        "q": "¿Funciona dar a la agencia un edificio o sede icónica?",
        "a": "Mucho. CIA en Langley, MI6 en Vauxhall Cross. Una sede específica con detalles físicos (el atrio con piso de mármol, el café del subsuelo) ancla la agencia en lo concreto. Tres a cinco descripciones recurrentes son suficientes."
      }
    ]
  },
  "en": {
    "pageTitle": "Spy Agency Name Generator | Genfy",
    "metaDesc": "Create covert spy agency, intelligence service and clandestine organization names for thrillers, noir and espionage roleplay.",
    "h1": "Spy Agency Name Generator",
    "intro": "Invent fictional intelligence agencies with Cold War aroma or contemporary cyber-surveillance feel. For thrillers, sci-fi and spy roleplay.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Organization type",
        "items": [
          "Agency", "Service", "Department", "Bureau", "Office", "Directorate", "Committee", "Commission",
          "Center", "Institute", "Section", "Division", "Board", "Council", "Desk", "Branch",
          "Federation", "Coordination", "Command", "Program", "Initiative", "Team", "Group", "Unit",
          "Federal Service", "Central Agency", "Federal Bureau", "International Office", "Foreign Service", "Special Directorate", "Strategic Department", "Standing Committee",
          "Round Table", "Chamber", "Tribunal", "Authority", "Joint Command", "Joint Service", "Inter-Ministerial Coordination", "National Center"
        ]
      },
      {
        "id": "function",
        "label": "Function / domain",
        "items": [
          "of Intelligence", "of Counter-Intelligence", "of National Security", "of Special Operations", "of Foreign Action", "of Sensitive Affairs", "of Strategic Information", "of Geopolitical Analysis",
          "of Federal Investigations", "of Reconnaissance", "of Surveillance", "Cryptological", "of Signals", "of Human Intelligence", "of Artificial Intelligence", "Cyber",
          "of Strategic Defense", "Counter-Terrorism", "Counter-Espionage", "of Covert Operations", "of Internal Affairs", "of Inter-Agency Coordination", "Border", "Diplomatic",
          "of Foreign Intelligence", "of Domestic Security", "of Strategic Affairs", "of Counterterrorism", "of Signals Intelligence", "of Cyber Operations", "of Special Activities", "of Clandestine Services",
          "of the State", "of the Realm", "of the Republic", "Military", "Naval", "Aerial", "Space", "Joint"
        ]
      },
      {
        "id": "code",
        "label": "Acronym / code",
        "items": [
          "MI-7", "MI-9", "MI-13", "DGSE", "BND", "CSIS", "ASIS", "AISE",
          "Sector 7", "Section K", "Division 12", "Program Aurora", "Project Mosaic", "Initiative Argus", "Command Zero", "Group 5",
          "Operation Chrome", "Black Bureau", "Desk 13", "Committee Lima", "Special Section 9", "Group Athena", "Janus Desk", "Sigma Command",
          "Department X", "Section Phi", "Subdivision Tau", "Office 21", "Committee 8", "Bureau of Z Affairs", "Team Omega", "Sentinel Program",
          "Echelon", "Prism", "Stargate", "Carnivore", "Helix", "Mongoose", "Argus", "Janus"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Anatomy of a believable intelligence agency",
        "body": "<p>Real agencies have boring nomenclature and memorable acronyms. CIA is Central Intelligence Agency; MI6 is Secret Intelligence Service; FSB is Federalnaya Sluzhba Bezopasnosti. The full name is bureaucratic; the acronym circulates. For your fictional agency design both: long technical name and catchy abbreviation.</p><p>Typical structure: type + function + state. 'Federal Security Agency', 'Foreign Intelligence Service', 'Bureau of Special Investigations'. Add country and you get instant context. For fictional worlds, replace 'Federal' with the state's name: 'Imperial Intelligence Agency', 'Republican Bureau of Sensitive Affairs'.</p><p>The secret is internal division. The CIA has Directorate of Operations, Directorate of Intelligence, Directorate of Science and Technology. If your agency is central, define two or three internal directorates. <em>The Americans</em> uses KGB Department S for sleeper illegals; that specific detail gives operational weight.</p>"
      },
      {
        "h2": "Tones by your thriller's genre",
        "body": "<p>Classic Cold War espionage (Le Carré, Deighton): formal British names, bureaucratic structures, office jargon. 'The Circus' as MI6 nickname in Tinker Tailor Soldier Spy. Your fictional agency can have headquarters in a gray building, forgotten archives, bad coffee. Bureaucracy is the atmosphere.</p><p>Contemporary thriller (Bourne, Mission Impossible): nimble agencies, secret-within-government, with codes like 'Treadstone', 'Blackbriar', 'IMF'. The aesthetic is special project within special project. Your agency can be sub-department without official budget whose name changes every five years to avoid paper trail.</p><p>Modern cyber-espionage (Mr. Robot, Person of Interest): agencies with tech-project-style names ('Echelon', 'Prism', 'The Machine'). Espionage is mass surveillance more than field operatives. For sci-fi, add AI: 'Sentinel Predictive Analysis Bureau', 'Strategic Artificial Intelligence Coordination'.</p><p>Satire (Get Smart, Archer): parodic three-letter names: CONTROL, ISIS (pre-controversy, renamed), KAOS. The humor comes from contrast between serious names and absurd operatives.</p>"
      },
      {
        "h2": "Common mistakes inventing secret agencies",
        "body": "<p>Mistake 1: narrative omnipotence. Fictional agencies tend to know everything and do everything, flattening suspense. Real ones have limited budgets, internal rivalries, leaks and incompetents. <em>The Hour</em> and <em>Slow Horses</em> show mediocre and discarded agents; that realism builds empathy and tension.</p><p>Mistake 2: a single agency. Real governments have ecosystems: CIA, FBI, NSA, DIA, ODNI in the US alone. Each competes for budget and jurisdiction. If your thriller has only one agency, you lose rich inter-agency friction. Add at least two rivals and show meetings where they argue who takes the case.</p><p>Mistake 3: ignoring civilian counterpart. Every agency operates under political oversight. Parliamentary committee, prosecutors, investigative press are counterweights. The protagonist spy who leaks to a journalist creates genuine moral conflict. <em>Spy Game</em> and <em>The Looming Tower</em> use that oversight as dramatic engine.</p>"
      },
      {
        "h2": "Build deep lore for your fictional agency",
        "body": "<p>Define history: when was it founded? In what war or crisis? Who created it and what happened to that founder? CIA is born from WWII OSS. Mossad is born in 1949. Your fictional agency should have traumatic founding: response to attack, scandal, schism from another agency.</p><p>Internal culture: every fictional agency needs ethos. CIA has operations cowboys vs Langley analysts. Mossad has operational mystique. Your agency can be hyper-bureaucratic or cowboy or technocratic. That culture defines how your characters act in scenes.</p><p>Legendary operations: your agency must have archive of successes and failures. Operation X that saved the country, Operation Y that embarrassed the government, Operation Z still classified. Mentioning them in casual dialogue builds deep history. When two veterans drink coffee and mention 'what happened in Beirut 89', the reader feels that past exists even if untold yet.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between agency, service and bureau?",
        "a": "Almost interchangeable terms, but tradition varies. 'Agency' is generic American. 'Service' is common European (MI6 is Secret Intelligence Service). 'Bureau' implies police-investigative (FBI). Choose by the cultural inspiration of your world."
      },
      {
        "q": "Can I mix real with fictional agency in my novel?",
        "a": "Yes, common practice. <em>Tom Clancy</em> mixes real CIA with fictional groups. The rule: don't attribute specific crimes to real agencies without evidence. For controversial actions, invent the agency from scratch with plausible details."
      },
      {
        "q": "How do I decide if my agency is national or supranational?",
        "a": "Depends on scope. Classic espionage is national with operatives abroad. For sci-fi or global conspiracy, add fictional supranational organization (like Bond's Spectre or Marvel's Hydra). The latter allows greater scale but requires greater suspension of disbelief."
      },
      {
        "q": "Does giving the agency an iconic building or HQ work?",
        "a": "Very much. CIA at Langley, MI6 at Vauxhall Cross. A specific HQ with physical details (the marble-floored atrium, the basement café) anchors the agency in the concrete. Three to five recurring descriptions suffice."
      }
    ]
  }
};
