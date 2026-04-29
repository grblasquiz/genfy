import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-equipo-policiaco",
    "en": "police-unit-name-generator"
  },
  "category": "fun",
  "emoji": "👮",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Equipo Policiaco | Genfy",
    "metaDesc": "Creá nombres realistas de unidades policiales especiales, task forces y divisiones para procedurales, thrillers policiales y campañas de rol urbano.",
    "h1": "Generador de Nombres de Equipo Policiaco",
    "intro": "Inventá unidades policiales que suenan a expediente real. Brigadas, task forces y divisiones para procedurales, thrillers y rol con tono creíble.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Tipo de unidad",
        "items": [
          "Brigada", "División", "Unidad", "Equipo", "Grupo", "Sección", "Departamento", "Bureau",
          "Task Force", "Comando", "Escuadrón", "Patrulla", "Brigada Especial", "Operación", "Programa", "Iniciativa",
          "Centro", "Oficina", "Servicio", "Fuerza", "Compañía", "Pelotón", "Equipo Conjunto", "Célula",
          "Grupo Operativo", "Grupo Especial", "Brigada Móvil", "División Especial", "Unidad Élite", "Equipo Táctico", "Brigada de Élite", "Servicio Federal",
          "Grupo de Reacción", "Equipo de Choque", "Brigada de Investigación", "Unidad Encubierta", "Servicio Especial", "Departamento Federal", "División Mayor", "Bureau Central"
        ]
      },
      {
        "id": "specialty",
        "label": "Especialidad",
        "items": [
          "de Homicidios", "Antinarcóticos", "de Crimen Organizado", "Antiterrorismo", "Cibercrimen", "de Robos Mayores", "de Estupefacientes", "de Personas Desaparecidas",
          "de Fraude Financiero", "de Asuntos Internos", "de Inteligencia Criminal", "de Trata de Personas", "de Delitos Económicos", "de Lavado de Activos", "de Delitos Sexuales", "de Investigaciones Especiales",
          "de Crímenes Violentos", "Antisecuestros", "de Robo de Vehículos", "de Tráfico de Armas", "de Bandas", "de Pandillas", "de Crimen Patrimonial", "de Investigación Judicial",
          "Tactical Response", "K-9", "SWAT", "Bomb Squad", "Forensics", "Vice", "Narcotics Strike", "Major Crimes",
          "Cold Case", "Homicide", "Robbery-Homicide", "Special Victims", "Internal Affairs", "Organized Crime Control", "Counter-Terrorism", "Cyber Investigations"
        ]
      },
      {
        "id": "code",
        "label": "Código / locación",
        "items": [
          "Norte", "Sur", "Este", "Oeste", "Central", "Federal", "Metropolitana", "Provincial",
          "Zona 1", "Zona 7", "División 5", "Sector 3", "Distrito 14", "Precinto 87", "Comisaría 35", "Comando Sur",
          "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Lima", "Tango",
          "7-1", "K-9", "T-2", "F-3", "M-5", "9-Bravo", "12-X", "21-Special",
          "Phoenix", "Aurora", "Orion", "Serpent", "Talon", "Sentinel", "Vanguard", "Hawkeye"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo nombrar unidades policiales con realismo procedural",
        "body": "<p>Las series como <em>Law & Order</em>, <em>The Wire</em> y <em>Bron/Broen</em> ganan credibilidad porque las unidades suenan reales: 'Major Case Squad', 'Homicide Unit', 'Western District'. Los nombres reales son descriptivos pero no dramáticos. Una unidad llamada 'Los Cazadores de Sombras' es ficción adolescente; 'División de Homicidios y Crímenes Mayores' es ficción adulta.</p><p>Estructura típica: tipo + especialidad + locación. 'Brigada de Homicidios Norte', 'Task Force Antinarcóticos Federal', 'División de Cibercrimen Metropolitana'. Esta tripleta da identidad inmediata. Tu protagonista trabaja en una rama específica de un sistema más grande, no en un universo aislado.</p><p>Los códigos numéricos suman procedural. La unidad 7-1 de <em>Chicago P.D.</em> indica precinto 7, equipo 1. Una vez establecido el sistema, podés referirte abreviadamente: 'Que vaya el 7-1'. El lector capta el shorthand y se siente insider. Cuidá la consistencia: si decidiste nomenclatura numérica, sostenela en toda la novela.</p>"
      },
      {
        "h2": "Diferencias entre policía local, federal y militar",
        "body": "<p>Cada nivel jurisdiccional tiene nomenclatura distinta. Policía local: comisaría, precinto, distrito, brigada barrial. Policía estatal o provincial: división regional, fuerza estatal. Federal (FBI, AFI, Gendarmería): bureau, división nacional, task force interagencial. Militar policial (Carabineros, Guardia Civil, Marines MP): batallón, compañía, escuadrón.</p><p>Si tu protagonista cruza jurisdicciones, mostralo en el nombre. Una task force conjunta FBI-DEA-NYPD se llama 'Joint Counter-Narcotics Task Force' y incluye representantes de cada agencia. Esta interacción genera fricción narrativa: territorialidad, secretos compartidos a regañadientes, tensiones de mando.</p><p>Las series de éxito lo explotan. <em>True Detective</em> temporada 1 mezcla CID estatal con FBI federal. <em>The Bridge</em> mezcla policía sueca y danesa. Inventá tu equivalente: ¿cuál es la fricción jurisdiccional que entrega tu trama? Si una agencia local descubre algo que requiere recursos federales, ¿qué nombre tiene la oficina central que toma el caso?</p>"
      },
      {
        "h2": "Errores comunes al inventar unidades ficticias",
        "body": "<p>Error 1: nombres demasiado glamorosos. 'Escuadrón Sombra Cobra' es videojuego, no procedural creíble. Las unidades reales son aburridas burocráticamente: '3rd Precinct Detective Squad', 'Unidad 33 Investigaciones Complejas'. La burocracia es la estética. Si querés glamour, dale al protagonista, no a la unidad.</p><p>Error 2: ignorar la cadena de mando. Toda unidad tiene jefe, jerarquía y unidad superior. 'Brigada de Homicidios reporta a División de Investigaciones, que depende de Subjefatura Operativa'. Mostrá esa cadena en momentos clave: cuando el jefe del protagonista pelea con la cúpula por recursos, el lector entiende la estructura.</p><p>Error 3: confundir competencias. Una unidad antinarcóticos no investiga homicidios pasionales; una de delitos sexuales no se ocupa de fraude bancario. Si tu detective de homicidios persigue a un hacker, hay un problema de jurisdicción que la trama debe explicar (ya sea por error narrativo o por giro deliberado: 'el caso era un homicidio que destapó algo más grande').</p>"
      },
      {
        "h2": "Construir un equipo memorable dentro de la unidad",
        "body": "<p>El nombre de la unidad es solo el envase. Lo memorable son los integrantes y dinámicas. <em>Hill Street Blues</em> popularizó el ensemble policial; <em>Brooklyn Nine-Nine</em> lo modernizó. Dentro de tu Brigada de Homicidios Norte, definí roles arquetípicos: el detective veterano cínico, el novato idealista, el forense excéntrico, el jefe con presión política, la analista digital.</p><p>Cada personaje tiene jerga interna. 'El sarge', 'el LT', 'el cap'. Las series usan estos diminutivos para crear pertenencia. Tu lector debe aprender el shorthand y sentirse parte. Después de cien páginas, debe poder decir 'va a la unidad de Mike' sin que aclares qué unidad es.</p><p>Conflictos internos profundos: la mejor ficción policial tiene tanto drama dentro del equipo como con los criminales. Asuntos Internos investiga al protagonista, el novato grabó algo que no debía, el jefe oculta su pasado. <em>The Shield</em> y <em>Mare of Easttown</em> demuestran que el equipo también es escenario de crimen y complicidad. Construí esa textura desde el nombre: ¿qué historia oscura tiene la unidad en sí?</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo decido si mi unidad debe ser local, federal o militar?",
        "a": "Depende del crimen central. Homicidios urbanos puntuales: local. Crimen organizado interestatal o terrorismo: federal. Conflictos armados o frontera: militar policial. Si tu trama escala, podés mover al protagonista entre niveles, lo que da rica fricción jurisdiccional."
      },
      {
        "q": "¿Puedo usar el nombre de una unidad real existente?",
        "a": "Para color local sí (mencionar que ocurrió en jurisdicción del LAPD o de la Bonaerense). Inventar trama corrupta sobre una unidad real específica es riesgoso legal y reputacionalmente. Mejor usar el nombre real como contexto y ficcionalizar el equipo protagonista."
      },
      {
        "q": "¿Qué tan detallada debe ser la cadena de mando en mi novela?",
        "a": "Suficiente para que las decisiones tengan peso. No necesitás organigrama completo, pero el lector debe entender por qué el detective no puede simplemente arrestar a alguien sin coordinación. Tres niveles arriba del protagonista suelen alcanzar."
      },
      {
        "q": "¿Funciona dar a mi unidad un apodo callejero?",
        "a": "Sí, y suma sabor. La unidad oficial es 'Special Investigations Section'; los criminales la llaman 'el escuadrón'. Esa dualidad nomenclatural es exactamente cómo opera la realidad y aporta textura sin esfuerzo."
      }
    ]
  },
  "en": {
    "pageTitle": "Police Unit Name Generator | Genfy",
    "metaDesc": "Create realistic special police unit, task force and division names for procedurals, police thrillers and urban roleplay campaigns.",
    "h1": "Police Unit Name Generator",
    "intro": "Invent police units that sound like real case files. Squads, task forces and divisions for procedurals, thrillers and roleplay with credible tone.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Unit type",
        "items": [
          "Squad", "Division", "Unit", "Team", "Group", "Section", "Department", "Bureau",
          "Task Force", "Command", "Squadron", "Patrol", "Special Squad", "Operation", "Program", "Initiative",
          "Center", "Office", "Service", "Force", "Company", "Platoon", "Joint Team", "Cell",
          "Operations Group", "Special Group", "Mobile Squad", "Special Division", "Elite Unit", "Tactical Team", "Elite Brigade", "Federal Service",
          "Reaction Group", "Strike Team", "Investigations Squad", "Undercover Unit", "Special Service", "Federal Department", "Major Division", "Central Bureau"
        ]
      },
      {
        "id": "specialty",
        "label": "Specialty",
        "items": [
          "Homicide", "Narcotics", "Organized Crime", "Counter-Terrorism", "Cybercrime", "Major Robbery", "Drug Enforcement", "Missing Persons",
          "Financial Fraud", "Internal Affairs", "Criminal Intelligence", "Human Trafficking", "Economic Crimes", "Money Laundering", "Sex Crimes", "Special Investigations",
          "Violent Crimes", "Anti-Kidnapping", "Auto Theft", "Arms Trafficking", "Gang Unit", "Street Crime", "Property Crime", "Judicial Investigation",
          "Tactical Response", "K-9", "SWAT", "Bomb Squad", "Forensics", "Vice", "Narcotics Strike", "Major Crimes",
          "Cold Case", "Homicide and Robbery", "Special Victims", "Counter-Intelligence", "Public Corruption", "Hostage Rescue", "Cyber Investigations", "Emergency Response"
        ]
      },
      {
        "id": "code",
        "label": "Code / location",
        "items": [
          "North", "South", "East", "West", "Central", "Federal", "Metropolitan", "Provincial",
          "Zone 1", "Zone 7", "Division 5", "Sector 3", "District 14", "Precinct 87", "9th Precinct", "Southern Command",
          "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Lima", "Tango",
          "7-1", "K-9", "T-2", "F-3", "M-5", "9-Bravo", "12-X", "21-Special",
          "Phoenix", "Aurora", "Orion", "Serpent", "Talon", "Sentinel", "Vanguard", "Hawkeye"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to name police units with procedural realism",
        "body": "<p>Shows like <em>Law & Order</em>, <em>The Wire</em> and <em>Bron/Broen</em> earn credibility because units sound real: 'Major Case Squad', 'Homicide Unit', 'Western District'. Real names are descriptive but not dramatic. A unit called 'The Shadow Hunters' is teen fiction; 'Major Case Homicide Division' is adult fiction.</p><p>Typical structure: type + specialty + location. 'Northern Homicide Squad', 'Federal Narcotics Task Force', 'Metropolitan Cybercrime Division'. This triplet gives immediate identity. Your protagonist works in a specific branch of a larger system, not an isolated universe.</p><p>Numeric codes add procedural feel. <em>Chicago P.D.</em>'s 7-1 unit means precinct 7, team 1. Once the system is established, you can refer abbreviatedly: 'Send the 7-1'. The reader gets the shorthand and feels insider. Watch consistency: if you chose numeric nomenclature, sustain it throughout the novel.</p>"
      },
      {
        "h2": "Differences between local, federal and military police",
        "body": "<p>Each jurisdictional level has distinct nomenclature. Local police: precinct, district, neighborhood squad. State police: regional division, state force. Federal (FBI, DEA, ATF): bureau, national division, interagency task force. Military police (Marines MP, Military Police Corps, Carabineros): battalion, company, squadron.</p><p>If your protagonist crosses jurisdictions, show it in the name. A joint FBI-DEA-NYPD task force is called 'Joint Counter-Narcotics Task Force' and includes representatives from each agency. This interaction generates narrative friction: territoriality, reluctantly shared secrets, command tensions.</p><p>Hit shows exploit it. <em>True Detective</em> season 1 mixes state CID with federal FBI. <em>The Bridge</em> mixes Swedish and Danish police. Invent your equivalent: what jurisdictional friction does your plot deliver? If a local agency discovers something requiring federal resources, what's the central office's name?</p>"
      },
      {
        "h2": "Common mistakes inventing fictional units",
        "body": "<p>Mistake 1: names too glamorous. 'Shadow Cobra Squadron' is video game, not credible procedural. Real units are bureaucratically boring: '3rd Precinct Detective Squad', 'Unit 33 Complex Investigations'. Bureaucracy is the aesthetic. If you want glamour, give it to the protagonist, not the unit.</p><p>Mistake 2: ignoring chain of command. Every unit has a chief, hierarchy and superior unit. 'Homicide Squad reports to Investigations Division, which reports to Operational Sub-Chief'. Show that chain at key moments: when the protagonist's boss fights the brass for resources, the reader understands the structure.</p><p>Mistake 3: confusing jurisdictions. A narcotics unit doesn't investigate crimes of passion; a sex crimes unit doesn't handle bank fraud. If your homicide detective chases a hacker, there's a jurisdiction issue the plot must explain (either narrative error or deliberate twist: 'the case started as a homicide and uncovered something bigger').</p>"
      },
      {
        "h2": "Build a memorable team within the unit",
        "body": "<p>The unit name is just the package. What's memorable are members and dynamics. <em>Hill Street Blues</em> popularized the police ensemble; <em>Brooklyn Nine-Nine</em> modernized it. Within your Northern Homicide Squad, define archetypal roles: the cynical veteran detective, the idealistic rookie, the eccentric forensic, the politically pressured boss, the digital analyst.</p><p>Each character has internal jargon. 'The sarge', 'the LT', 'the cap'. Shows use these diminutives to create belonging. Your reader must learn the shorthand and feel part of it. After a hundred pages, they should be able to say 'go to Mike's unit' without you clarifying which unit.</p><p>Deep internal conflicts: the best police fiction has as much drama within the team as with criminals. Internal Affairs investigates the protagonist, the rookie recorded something they shouldn't have, the boss hides their past. <em>The Shield</em> and <em>Mare of Easttown</em> show the team is also crime and complicity scenario. Build that texture from the name: what dark story does the unit itself have?</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I decide if my unit should be local, federal or military?",
        "a": "Depends on the central crime. Specific urban homicides: local. Interstate organized crime or terrorism: federal. Armed conflict or border: military police. If your plot escalates, you can move the protagonist between levels, providing rich jurisdictional friction."
      },
      {
        "q": "Can I use a real existing unit's name?",
        "a": "For local color yes (mentioning it occurred in LAPD or NYPD jurisdiction). Inventing corrupt plots about a specific real unit is legally and reputationally risky. Better use the real name as context and fictionalize the protagonist team."
      },
      {
        "q": "How detailed should the chain of command be in my novel?",
        "a": "Enough for decisions to have weight. You don't need a full org chart, but the reader must understand why the detective can't simply arrest someone without coordination. Three levels above the protagonist usually suffices."
      },
      {
        "q": "Does giving my unit a street nickname work?",
        "a": "Yes, and adds flavor. The official unit is 'Special Investigations Section'; criminals call it 'the squad'. That nomenclatural duality is exactly how reality operates and adds texture effortlessly."
      }
    ]
  }
};
