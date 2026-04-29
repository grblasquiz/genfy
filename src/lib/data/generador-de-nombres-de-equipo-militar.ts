import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-equipo-militar",
    "en": "military-unit-name-generator"
  },
  "category": "fun",
  "emoji": "🪖",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Equipo Militar | Genfy",
    "metaDesc": "Creá nombres tácticos de unidades militares, escuadrones y divisiones de élite con autoridad castrense. Para sci-fi militar, thriller bélico y rol táctico.",
    "h1": "Generador de Nombres de Equipo Militar",
    "intro": "Bautizá tu unidad militar con autoridad castrense creíble. Escuadrones, regimientos y fuerzas especiales para sci-fi bélico, thriller militar y rol táctico.",
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
          "Regimiento", "Batallón", "Compañía", "Pelotón", "Escuadrón", "Brigada", "División", "Cuerpo",
          "Comando", "Equipo", "Grupo", "Unidad", "Sección", "Destacamento", "Patrulla", "Brigada de Asalto",
          "Fuerza Especial", "Equipo Táctico", "Grupo de Reconocimiento", "Pelotón de Élite", "Compañía de Asalto", "Batallón Mecanizado", "Regimiento Aéreo", "División Blindada",
          "Squad", "Strike Team", "Operations Group", "Special Forces Detachment", "Tactical Squad", "Recon Team", "Rangers", "Marine Expeditionary Unit",
          "Fuerza Conjunta", "Comando Conjunto", "Grupo Operativo", "Unidad Independiente", "Comando Aerotransportado", "Equipo de Buzos Tácticos", "Pelotón de Francotiradores", "Sección de Inteligencia"
        ]
      },
      {
        "id": "code",
        "label": "Designación / número",
        "items": [
          "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel",
          "India", "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", "Tango",
          "1°", "2°", "3°", "5°", "7°", "11°", "23°", "75°",
          "101", "82", "75", "10", "1-1", "2-7", "3-3", "6-9",
          "Alfa-7", "Bravo-3", "Charlie-9", "Delta-6", "Zulu-1", "Sierra-2", "Whiskey-4", "Foxtrot-8"
        ]
      },
      {
        "id": "epithet",
        "label": "Apodo / blasón",
        "items": [
          "los Lobos de Acero", "los Diablos Negros", "los Cuervos", "las Águilas Salvajes", "los Espectros", "los Centinelas", "los Truenos", "los Ángeles de la Muerte",
          "Screaming Eagles", "Big Red One", "Bloody Hundredth", "Devil's Brigade", "Iron Horsemen", "Night Stalkers", "Black Lions", "Wild Boars",
          "del Hierro", "de Plata", "Carmesí", "Negros", "del Trueno", "del Halcón", "del Lobo", "del Tigre",
          "Aerotransportado", "Mecanizado", "Blindado", "Aerotransportado de Asalto", "Anfibio", "de Montaña", "Paracaidista", "de Reconocimiento Profundo",
          "Cazadores", "Guardianes", "Vanguardia", "Custodios", "Guardia Pretoriana", "Centinelas Blancos", "Halcones Nocturnos", "Cobras"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo construir una unidad militar creíble",
        "body": "<p>Las unidades reales tienen tres elementos: tipo (regimiento, batallón), número (101st Airborne, 75th Ranger) y apodo (Screaming Eagles, Iron Horse). La 101 División Aerotransportada es 'los Screaming Eagles'. Esa tripleta da identidad operativa, historia y orgullo. Para tu unidad ficticia replicá la misma fórmula.</p><p>El número aporta linaje. Una unidad llamada simplemente 'Equipo Alfa' es genérica; '7° Comando Aerotransportado' implica que existieron seis antes y la tradición pesa. <em>Band of Brothers</em> es la 506th PIR, Easy Company. Ese detalle preciso es lo que separa worldbuilding militar serio del juvenil.</p><p>El apodo emerge en combate. <em>Devil's Brigade</em> recibió el nombre de los alemanes que la temían. <em>Hell's Angels</em> era escuadrón de bombardeos. Tu unidad ficticia debería tener historia detrás del apodo: ¿lo ganaron en qué batalla? ¿Quién los nombró así? Esos detalles aparecen en flashbacks y refuerzan identidad sin exposición forzada.</p>"
      },
      {
        "h2": "Estructura jerárquica para narrativa militar",
        "body": "<p>De menor a mayor: fireteam (4 hombres), escuadra (8-12), pelotón (30), compañía (100-200), batallón (500-1000), regimiento o brigada (3000-5000), división (15000), cuerpo (50000). Si tu protagonista comanda 30 personas, es teniente con pelotón. Si comanda mil, es teniente coronel con batallón. Equivocá esto y el lector militar descree todo.</p><p>Las fuerzas especiales tienen escala distinta. Equipos SEAL son 16 hombres; SAS Sabre Squadron son 64; Delta Force squadrons unos 100. Si tu unidad élite tiene 500 personas, ya no es élite, es regimiento regular. Mantené la escala correcta para la mística que querés transmitir.</p><p>Cadena de mando vertical: cabo, sargento, teniente, capitán, mayor, teniente coronel, coronel. Cada salto representa cinco a diez años de carrera. Si tu protagonista de 24 años es teniente coronel, necesita explicación (genio, guerra prolongada, sistema alternativo). <em>Starship Troopers</em> y <em>The Forever War</em> usan saltos justificados por dilatación temporal o atrición masiva.</p>"
      },
      {
        "h2": "Errores comunes en sci-fi militar y thriller bélico",
        "body": "<p>Error 1: nombres demasiado dramáticos sin contraparte mundana. 'Escuadrón Aniquilador Cero' es tono pulp. Las unidades reales tienen nombres burocráticos y apodos heroicos. Si solo tenés el dramático, sumá el burocrático: 'Unidad de Operaciones Especiales 7-Bravo, conocida como los Aniquiladores'. La doble nomenclatura es realismo.</p><p>Error 2: ignorar logística. Una unidad ficticia debe tener base, equipamiento y mando. ¿De dónde sale? ¿Quién la financia? ¿Bajo qué doctrina opera? <em>Black Hawk Down</em> dedica páginas a explicar que Task Force Ranger combinaba 75th Rangers, Delta Force y 160th SOAR. Esa precisión justifica la operación.</p><p>Error 3: confundir ramas. Marines no son Ejército, Special Forces no son Navy SEALs, paracaidistas no son rangers. Cada rama tiene cultura, doctrina e historia. Si tu personaje pasa de Marines a Delta, hay un proceso de selección y entrenamiento que la trama puede usar como arco de transformación.</p>"
      },
      {
        "h2": "Aplicación en sci-fi militar de mundos lejanos",
        "body": "<p>Para futuros lejanos, mantené la lógica militar y cambiá la nomenclatura. <em>Halo</em> tiene UNSC Marines, Spartan-II, ODST. <em>Warhammer 40K</em> tiene Astra Militarum, Space Marines, Tempestus Scions. Cada uno respeta tipo + número + apodo, pero traducidos al lore. Tu invención puede llamarse 'Legión Solar 9°' o '12° Cuerpo Estelar de Asalto'.</p><p>Mezclá tradición y ruptura. <em>The Expanse</em> tiene Mars Marine Corps, UN Navy, OPA Free Belt. Cada facción nombra unidades según su cultura. Marcianos son disciplinados-tradicionales: 'Martian Combined Operations Forces 4th Battalion'. Cinturonianos son anárquico-utilitarios: 'Tycho Operations Crew'. Esa diferencia comunica geopolítica sin discurso expositivo.</p><p>Para campañas de rol como <em>Lancer</em> o <em>Battletech</em>, los nombres importan tanto como las stats. Una mercenaria llamada 'la Compañía de Hierro 3°, Lobos Negros' tiene historia implícita: tres compañías existen, esta está afiliada a clan Lobos Negros. Construí ese tejido y los jugadores se sumergen sin que les expliques.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo evito que mi unidad ficticia suene a videojuego genérico?",
        "a": "Sumá historia y burocracia. 'Strike Force Eagle' es videojuego; 'Unidad de Operaciones Especiales 117, conocida como los Halcones, fundada en 2031 tras la pérdida del 12° Comando' es novela seria. Los detalles específicos son la diferencia."
      },
      {
        "q": "¿Puedo mezclar nomenclatura real con inventada en una novela alternativa?",
        "a": "Sí. <em>Tom Clancy</em> mezcla Delta Force real con grupos ficticios como Rainbow Six. Lo importante es que las unidades inventadas respeten la doctrina y estructura de las reales. Inventá unidades, no inventes la jerarquía."
      },
      {
        "q": "¿Qué tan profunda debe ser mi investigación militar?",
        "a": "Suficiente para evitar errores groseros. Lectores militares y veteranos detectan absurdos en segundos. Como mínimo: rangos, escala de unidades, ramas básicas y dos o tres jergas. Manuales de campo del Army Field Manual son gratis online."
      },
      {
        "q": "¿Funciona dar a la unidad un lema o grito de guerra?",
        "a": "Sí, y suma identidad. <em>Semper Fi</em> de Marines, <em>Rangers Lead the Way</em> de 75th. Inventá el equivalente: tres palabras en latín o lengua antigua del mundo, repetido en momentos de cohesión. Es shorthand emocional."
      }
    ]
  },
  "en": {
    "pageTitle": "Military Unit Name Generator | Genfy",
    "metaDesc": "Create tactical military unit, squadron and elite division names with martial authority. For military sci-fi, war thrillers and tactical roleplay.",
    "h1": "Military Unit Name Generator",
    "intro": "Christen your military unit with credible martial authority. Squads, regiments and special forces for military sci-fi, war thrillers and tactical roleplay.",
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
          "Regiment", "Battalion", "Company", "Platoon", "Squadron", "Brigade", "Division", "Corps",
          "Command", "Team", "Group", "Unit", "Section", "Detachment", "Patrol", "Assault Brigade",
          "Special Force", "Tactical Team", "Recon Group", "Elite Platoon", "Assault Company", "Mechanized Battalion", "Air Regiment", "Armored Division",
          "Squad", "Strike Team", "Operations Group", "Special Forces Detachment", "Tactical Squad", "Recon Team", "Rangers", "Marine Expeditionary Unit",
          "Joint Force", "Joint Command", "Operations Group", "Independent Unit", "Airborne Command", "Tactical Diver Team", "Sniper Platoon", "Intelligence Section"
        ]
      },
      {
        "id": "code",
        "label": "Designation / number",
        "items": [
          "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel",
          "India", "Juliet", "Kilo", "Lima", "Mike", "November", "Oscar", "Tango",
          "1st", "2nd", "3rd", "5th", "7th", "11th", "23rd", "75th",
          "101", "82", "75", "10", "1-1", "2-7", "3-3", "6-9",
          "Alfa-7", "Bravo-3", "Charlie-9", "Delta-6", "Zulu-1", "Sierra-2", "Whiskey-4", "Foxtrot-8"
        ]
      },
      {
        "id": "epithet",
        "label": "Nickname / motto",
        "items": [
          "Steel Wolves", "Black Devils", "Ravens", "Wild Eagles", "Specters", "Sentinels", "Thunders", "Angels of Death",
          "Screaming Eagles", "Big Red One", "Bloody Hundredth", "Devil's Brigade", "Iron Horsemen", "Night Stalkers", "Black Lions", "Wild Boars",
          "of Iron", "of Silver", "Crimson", "Black", "of Thunder", "of the Hawk", "of the Wolf", "of the Tiger",
          "Airborne", "Mechanized", "Armored", "Air Assault", "Amphibious", "Mountain", "Parachute", "Deep Reconnaissance",
          "Hunters", "Guardians", "Vanguard", "Custodians", "Praetorian Guard", "White Sentinels", "Night Hawks", "Cobras"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to build a believable military unit",
        "body": "<p>Real units have three elements: type (regiment, battalion), number (101st Airborne, 75th Ranger) and nickname (Screaming Eagles, Iron Horse). The 101st Airborne Division is 'the Screaming Eagles'. That triplet gives operational identity, history and pride. For your fictional unit replicate the same formula.</p><p>The number adds lineage. A unit simply called 'Alpha Team' is generic; '7th Airborne Command' implies six existed before and tradition weighs. <em>Band of Brothers</em> is the 506th PIR, Easy Company. That precise detail separates serious military worldbuilding from juvenile.</p><p>The nickname emerges in combat. <em>Devil's Brigade</em> got the name from Germans who feared them. <em>Hell's Angels</em> was a bomber squadron. Your fictional unit should have history behind the nickname: which battle did they earn it in? Who named them? Those details appear in flashbacks and reinforce identity without forced exposition.</p>"
      },
      {
        "h2": "Hierarchical structure for military narrative",
        "body": "<p>From small to large: fireteam (4), squad (8-12), platoon (30), company (100-200), battalion (500-1000), regiment or brigade (3000-5000), division (15000), corps (50000). If your protagonist commands 30 people, they're a lieutenant with a platoon. If they command a thousand, they're a lieutenant colonel with a battalion. Get this wrong and military readers disbelieve everything.</p><p>Special forces have different scale. SEAL Teams are 16; SAS Sabre Squadrons are 64; Delta Force squadrons around 100. If your elite unit has 500 people, it's no longer elite, it's regular regiment. Keep correct scale for the mystique you want.</p><p>Vertical chain of command: corporal, sergeant, lieutenant, captain, major, lieutenant colonel, colonel. Each jump represents five to ten years of career. If your 24-year-old protagonist is lieutenant colonel, it needs explanation (genius, prolonged war, alternative system). <em>Starship Troopers</em> and <em>The Forever War</em> use jumps justified by time dilation or massive attrition.</p>"
      },
      {
        "h2": "Common mistakes in military sci-fi and war thrillers",
        "body": "<p>Mistake 1: names too dramatic without mundane counterpart. 'Annihilator Squadron Zero' is pulp tone. Real units have bureaucratic names and heroic nicknames. If you only have the dramatic, add the bureaucratic: 'Special Operations Unit 7-Bravo, known as the Annihilators'. Double nomenclature is realism.</p><p>Mistake 2: ignoring logistics. A fictional unit must have base, equipment and command. Where does it come from? Who funds it? Under what doctrine does it operate? <em>Black Hawk Down</em> dedicates pages to explaining Task Force Ranger combined 75th Rangers, Delta Force and 160th SOAR. That precision justifies the operation.</p><p>Mistake 3: confusing branches. Marines aren't Army, Special Forces aren't Navy SEALs, paratroopers aren't rangers. Each branch has culture, doctrine and history. If your character moves from Marines to Delta, there's a selection and training process the plot can use as transformation arc.</p>"
      },
      {
        "h2": "Application in distant-world military sci-fi",
        "body": "<p>For far futures, keep military logic and change nomenclature. <em>Halo</em> has UNSC Marines, Spartan-II, ODST. <em>Warhammer 40K</em> has Astra Militarum, Space Marines, Tempestus Scions. Each respects type + number + nickname, translated to the lore. Your invention can be 'Solar Legion 9th' or '12th Stellar Assault Corps'.</p><p>Mix tradition and rupture. <em>The Expanse</em> has Mars Marine Corps, UN Navy, OPA Free Belt. Each faction names units per their culture. Martians are disciplined-traditional: 'Martian Combined Operations Forces 4th Battalion'. Belters are anarchic-utilitarian: 'Tycho Operations Crew'. That difference communicates geopolitics without expository speech.</p><p>For roleplay campaigns like <em>Lancer</em> or <em>Battletech</em>, names matter as much as stats. A mercenary called 'Iron Company 3rd, Black Wolves' has implicit history: three companies exist, this one is affiliated with Black Wolves clan. Build that fabric and players immerse without explanation.</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I avoid my fictional unit sounding like generic video game?",
        "a": "Add history and bureaucracy. 'Strike Force Eagle' is video game; 'Special Operations Unit 117, known as the Hawks, founded in 2031 after losing 12th Command' is serious novel. Specific details make the difference."
      },
      {
        "q": "Can I mix real with invented nomenclature in alternative novel?",
        "a": "Yes. <em>Tom Clancy</em> mixes real Delta Force with fictional groups like Rainbow Six. The important thing is invented units respect real doctrine and structure. Invent units, don't invent the hierarchy."
      },
      {
        "q": "How deep should my military research be?",
        "a": "Enough to avoid gross errors. Military readers and veterans detect absurdities in seconds. At minimum: ranks, unit scale, basic branches and two or three jargons. Army Field Manuals are free online."
      },
      {
        "q": "Does giving the unit a motto or war cry work?",
        "a": "Yes, and adds identity. <em>Semper Fi</em> for Marines, <em>Rangers Lead the Way</em> for 75th. Invent the equivalent: three words in Latin or ancient world language, repeated in cohesion moments. It's emotional shorthand."
      }
    ]
  }
};
