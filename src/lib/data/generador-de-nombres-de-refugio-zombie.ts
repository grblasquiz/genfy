import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-refugio-zombie",
    "en": "zombie-shelter-name-generator"
  },
  "category": "fun",
  "emoji": "🧟",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Refugio Anti-Zombie | Genfy",
    "metaDesc": "Inventá nombres de refugios anti-zombies, safe zones y bastiones supervivenciales para tu novela, juego de rol o campaña apocalíptica.",
    "h1": "Generador de Nombres de Refugio Anti-Zombie",
    "intro": "Diseñá nombres memorables para fortalezas, asentamientos y safe zones del apocalipsis zombi. Útil para fan fiction, campañas de rol y juegos de mesa.",
    "tag": "Apocalipsis",
    "filterLabel": "Tipo de refugio",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "tag",
        "label": "Etiqueta funcional",
        "items": [
          "Punto Cero", "Sector", "Zona", "Bastión", "Reducto", "Enclave", "Refugio",
          "Asentamiento", "Comunidad", "Aldea", "Campamento", "Estación", "Cuartel",
          "Fortaleza", "Plaza Fuerte", "Centro", "Barrera", "Puesto", "Avanzada",
          "Retaguardia", "Línea", "Outpost", "Búnker", "Hangar", "Silo", "Granero",
          "Acampe", "Coto", "Gueto", "Cinturón", "Aldea Cerrada", "Cooperativa",
          "Comuna", "Recinto", "Zona Verde"
        ]
      },
      {
        "id": "number",
        "label": "Identificador / nivel",
        "items": [
          "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel",
          "Cero", "Uno", "Dos", "Tres", "Siete", "Nueve", "Once", "Trece",
          "Veintiuno", "33", "47", "Norte", "Sur", "Este", "Oeste", "Central",
          "Última", "Primera", "Final", "Segunda Línea", "Anillo Interior",
          "Anillo Exterior", "Núcleo", "Periferia", "Zona Roja", "Zona Verde",
          "Zona Amarilla"
        ]
      },
      {
        "id": "place",
        "label": "Topónimo / lugar de origen",
        "items": [
          "del Estadio", "del Hospital", "del Hipódromo", "del Cementerio Norte",
          "del Shopping", "del Subte", "del Aeropuerto", "del Puerto", "de la Iglesia",
          "del Colegio", "de la Universidad", "del Country", "del Polo Industrial",
          "del Parque", "del Faro", "de la Represa", "del Embalse", "del Granero",
          "del Frigorífico", "de la Estación de Tren", "de la Mina", "de la Cantera",
          "de la Cuchilla", "del Cerro", "del Río", "del Arroyo", "del Embarcadero",
          "del Asilo", "de la Cárcel Vieja", "del Galpón", "del Paso a Nivel",
          "del Silobolsa", "del Silo de Misiles", "del Bunker Cold-War", "del Hostal"
        ]
      },
      {
        "id": "epithet",
        "label": "Epíteto del lugar",
        "items": [
          "el Último", "la Esperanza", "el Resguardo", "los Vivos", "los Despiertos",
          "los Quietos", "los Lúcidos", "los Pocos", "los Restantes", "los Tercos",
          "el Faro", "la Cuna", "el Nido", "el Hueso", "el Cerrojo", "la Llave",
          "el Cordón", "la Muralla", "el Anillo", "la Trampa", "el Filo",
          "la Sombra", "la Cicatriz", "la Senda", "el Eco", "la Memoria",
          "la Promesa", "el Pacto", "el Susurro", "la Pausa", "la Tregua",
          "la Vigilia", "el Paso", "la Costilla", "la Aguja"
        ]
      },
      {
        "id": "tone",
        "label": "Tono del nombre",
        "items": [
          "Militar y siglas formales (FOB, COP)",
          "Civil y nombre histórico de barrio",
          "Apocalíptico bíblico (Nuevo Edén, Gileán)",
          "Cínico y autoirónico", "Esperanzador y comunal",
          "Amenazante y territorial", "Anglo con número técnico",
          "Hispano con santo patrón corrupto", "Indígena con palabra del pueblo originario",
          "Industrial con nombre de la planta tomada", "Religioso con secta sobreviviente",
          "Burocrático con código gubernamental", "Familiar con apellido del fundador",
          "Político con nombre de presidente caído", "Naval si el refugio flota",
          "Aéreo si está en torre o terraza", "Subterráneo si es búnker o subte",
          "Rural si es chacra reconvertida", "Urbano si es manzana fortificada",
          "Resistencia con nombre clandestino", "Anti-régimen con burla al gobierno previo",
          "Pacifista con nombre de poesía o canción", "Brutalista con consonantes duras",
          "Romántico con frase melancólica", "Esperanto con nombre artificial",
          "Latín litúrgico revivido", "Mezcla de idiomas inventada",
          "Spanglish funcional", "Acrónimo legible (CASA, NIDO)",
          "Acrónimo críptico (G7, T-12)", "Apodo cariñoso del barrio",
          "Burla a Romero, Kirkman u otros referentes", "Referencia a Walking Dead reapropiada",
          "Estilo Mad Max territorial", "Estilo The Last of Us climático"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo nombrar un refugio anti-zombie creíble",
        "body": "<p>El nombre de un refugio cuenta su historia compacta: cómo se formó, quién lo lidera, qué espera. Mirá <em>The Walking Dead</em>: 'Alexandria', 'The Kingdom', 'The Hilltop', 'Oceanside', 'The Sanctuary'. Cada uno propone tono distinto. Alexandria sugiere civilización suburbana; The Kingdom sugiere mesianismo; The Sanctuary sugiere autoridad de Negan. El nombre debe coincidir con la facción que lo habita.</p><p>Considerá el origen del refugio. Si fue tomado por militares al colapso, el nombre va a tener código (FOB Bravo, Outpost 7); si surgió como ocupación civil de un edificio, llevará el nombre del lugar (Refugio del Hospital, Sector Estadio); si lo fundó un grupo religioso, tendrá tono profético (Nuevo Edén, La Promesa). El nombre revela la línea fundacional sin exposición.</p><p>Pensá la audiencia narrativa. ¿El nombre lo usan los habitantes con orgullo, los enemigos con burla, los visitantes con cautela? <em>The Walking Dead</em> juega con esto: 'The Sanctuary' suena bien hasta que descubrís que es la base de los Saviors. Tu refugio puede tener nombre oficial, nombre que usan otros grupos, y apodo despectivo de los que escaparon. Esa estratificación enriquece el mundo.</p>"
      },
      {
        "h2": "Tipos de refugio en ficción zombie",
        "body": "<p>Hay tipologías clásicas. <strong>Fortaleza militar</strong>: bases tomadas por sobrevivientes con disciplina, jerarquía y armamento. Nombres: 'Cuartel Delta', 'FOB Última'. <strong>Comunidad civil</strong>: barrios o pueblos pequeños amurallados. Nombres: 'Alexandria', 'Pueblo Verde'. <strong>Granja autosuficiente</strong>: chacras alejadas con autonomía alimentaria. Nombres: 'La Granja', 'Hershel's Farm', 'Cooperativa Norte'.</p><p><strong>Búnker subterráneo</strong>: silos, refugios atómicos, subtes adaptados. Nombres: 'Búnker 33', 'Subte Línea D'. <strong>Móvil</strong>: caravanas, trenes, barcos. Nombres: 'La Caravana', 'El Tren del Sur'. <strong>Vertical</strong>: torres, edificios altos. Nombres: 'Torre Babel', 'Piso Sesenta'. Cada tipología sugiere distintos conflictos: la fortaleza militar tiene tensiones jerárquicas, la granja tensiones de recursos, el búnker tensiones psicológicas por encierro.</p><p>El tamaño también importa. Un refugio de 12 personas tendrá nombre íntimo, casi familiar; uno de 3000 tendrá nombre político, casi nacional. <em>Z Nation</em> usa 'Northern Light' para una iniciativa grande; <em>Y: The Last Man</em> usa 'The Citizen' como cuadrilla pequeña. Coordiná escala con sonoridad del nombre.</p>"
      },
      {
        "h2": "Errores frecuentes al nombrar refugios",
        "body": "<p>Primero: nombre genérico que no diferencia entre refugios. 'El Refugio' funciona una vez; en una novela con cinco asentamientos, todos llamados así, el lector pierde orientación. Cada refugio necesita identidad sonora propia. Si tu campaña de rol tiene seis lugares, asegurate de que se distingan al oído.</p><p>Segundo: usar referencias literales a obras existentes. Llamar a tu refugio 'Alexandria' es plagio obvio; llamar 'El Reino' es plagio sutil. Inspirate en The Walking Dead, Z Nation o The Last of Us, pero busca tu sonoridad propia. Mejor mezclar: tomá la lógica de The Kingdom (mesiánica, teatral) y aplicala a un refugio basado en un cementerio: 'La Catedral de los Pacientes'.</p><p>Tercero: olvidar el contexto local. Si tu historia transcurre en Argentina, tus refugios pueden llamarse 'La Bombonera' (estadio convertido), 'San Cayetano' (templo fortificado), 'El Tigre' (delta apto para defensa). Aprovechá geografía y referencias culturales locales en lugar de calcar nombres anglosajones. <em>Distancia de Rescate</em> no es zombie pero muestra cómo localizar terror funciona. Cuarto: nombres demasiado largos para uso oral repetido. 'Asentamiento Defensivo Comunitario Número Siete' nadie lo dice; los personajes lo abreviarán a 'el Siete' rápidamente.</p>"
      },
      {
        "h2": "El refugio como personaje en la narrativa",
        "body": "<p>Un buen refugio en ficción zombie funciona como personaje. Tiene historia (cómo se formó), personalidad (las reglas no escritas), enemigos (otras facciones, hordas, traidores internos) y arco (puede caer, mutar, fragmentarse). El nombre debe poder soportar ese peso narrativo. <em>The Walking Dead</em> dedica temporadas enteras a un solo refugio precisamente porque el lugar es protagonista.</p><p>Considerá la rotación. Si tu narrativa cubre meses o años, los refugios cambian. Una comunidad llamada 'Esperanza' puede convertirse en 'La Trampa' tras una traición interna; un nombre puede mantenerse pero el significado cambiar. <em>Station Eleven</em> juega con esto: el Museo de la Civilización es un nombre que evoluciona en sentido a lo largo de la novela.</p><p>El nombre puede ser punto de tensión política. ¿Quién tiene autoridad para nombrar el refugio? En grupos democráticos hay votación; en grupos autoritarios el líder impone. Si tu novela explora gobernanza poscatástrofe, la elección o cambio de nombre puede ser escena clave. <em>The Stand</em> y <em>The Walking Dead</em> ambos tienen episodios de tensión política sobre nombre y bandera del lugar. Usá esa palanca.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos refugios distintos puede tener mi historia?",
        "a": "Para mantener al lector orientado, tres a cinco refugios mayores funcionan bien. Pueden mencionarse otros menores. <em>The Walking Dead</em> introdujo gradualmente: prisión, granja, Alexandria, Hilltop, Kingdom, etc., uno por temporada aproximadamente."
      },
      {
        "q": "¿Conviene que mi refugio tenga nombre formal y apodo?",
        "a": "Sí, agrega capas. 'Asentamiento Cooperativo del Hipódromo' como nombre oficial y 'El Hipódromo' o 'la Pista' como apodo entre habitantes. La diferencia entre ambos puede señalar tensión política o simplemente uso pragmático del lenguaje."
      },
      {
        "q": "¿Sirven estos nombres para juegos de rol como Walking Dead RPG?",
        "a": "Perfecto material. Usalos para asentamientos en tu campaña, generá dos o tres antes de empezar y desarrollá historia para cada uno. Funcionan también para Apocalypse World, All Flesh Must Be Eaten o Mutant: Year Zero."
      },
      {
        "q": "¿Cómo decido el tamaño correcto del refugio?",
        "a": "Para drama interpersonal (relaciones, traiciones), 20-50 habitantes funciona. Para drama político (facciones, sucesión), 200-500. Para drama épico (gobierno, guerras entre comunidades), miles. El nombre debería sentirse acorde a la escala."
      }
    ]
  },
  "en": {
    "pageTitle": "Zombie Shelter Name Generator | Genfy",
    "metaDesc": "Invent names for zombie shelters, safe zones and survival strongholds for your novel, roleplay game or apocalyptic campaign. Endless inspiration.",
    "h1": "Zombie Shelter Name Generator",
    "intro": "Design memorable names for fortresses, settlements and safe zones in the zombie apocalypse. Useful for fan fiction, RPG campaigns and board games.",
    "tag": "Apocalypse",
    "filterLabel": "Shelter type",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "tag",
        "label": "Functional tag",
        "items": [
          "Ground Zero", "Sector", "Zone", "Bastion", "Redoubt", "Enclave", "Shelter",
          "Settlement", "Community", "Hamlet", "Camp", "Station", "Garrison",
          "Stronghold", "Citadel", "Center", "Barrier", "Post", "Outpost",
          "Rearguard", "Line", "Forward Base", "Bunker", "Hangar", "Silo", "Granary",
          "Compound", "Preserve", "Ghetto", "Belt", "Closed Hamlet", "Cooperative",
          "Commune", "Enclosure", "Green Zone"
        ]
      },
      {
        "id": "number",
        "label": "Identifier / level",
        "items": [
          "Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel",
          "Zero", "One", "Two", "Three", "Seven", "Nine", "Eleven", "Thirteen",
          "Twenty-one", "33", "47", "North", "South", "East", "West", "Central",
          "Last", "First", "Final", "Second Line", "Inner Ring",
          "Outer Ring", "Core", "Periphery", "Red Zone", "Green Zone",
          "Yellow Zone"
        ]
      },
      {
        "id": "place",
        "label": "Place of origin",
        "items": [
          "of the Stadium", "of the Hospital", "of the Racetrack", "of the North Cemetery",
          "of the Mall", "of the Subway", "of the Airport", "of the Harbor", "of the Church",
          "of the School", "of the University", "of the Country Club", "of the Industrial Park",
          "of the Park", "of the Lighthouse", "of the Dam", "of the Reservoir", "of the Granary",
          "of the Slaughterhouse", "of the Train Station", "of the Mine", "of the Quarry",
          "of the Ridge", "of the Hill", "of the River", "of the Creek", "of the Pier",
          "of the Asylum", "of the Old Prison", "of the Warehouse", "of the Crossing",
          "of the Grain Silo", "of the Missile Silo", "of the Cold War Bunker", "of the Hostel"
        ]
      },
      {
        "id": "epithet",
        "label": "Place epithet",
        "items": [
          "the Last", "Hope", "the Refuge", "the Living", "the Awake",
          "the Quiet", "the Lucid", "the Few", "the Remaining", "the Stubborn",
          "the Lighthouse", "the Cradle", "the Nest", "the Bone", "the Latch", "the Key",
          "the Cord", "the Wall", "the Ring", "the Trap", "the Edge",
          "the Shadow", "the Scar", "the Path", "the Echo", "Memory",
          "the Promise", "the Pact", "the Whisper", "the Pause", "the Truce",
          "the Vigil", "the Pass", "the Rib", "the Needle"
        ]
      },
      {
        "id": "tone",
        "label": "Name tone",
        "items": [
          "Military and formal acronyms (FOB, COP)",
          "Civilian and historic neighborhood name",
          "Biblical apocalyptic (New Eden, Gilead)",
          "Cynical and self-ironic", "Hopeful and communal",
          "Threatening and territorial", "Anglo with technical number",
          "Hispanic with corrupted patron saint", "Indigenous with native word",
          "Industrial with seized plant name", "Religious with surviving sect",
          "Bureaucratic with government code", "Family with founder's surname",
          "Political with fallen president's name", "Naval if the shelter floats",
          "Aerial if on tower or rooftop", "Underground if bunker or subway",
          "Rural if reconverted farm", "Urban if fortified city block",
          "Resistance with clandestine name", "Anti-regime mocking previous government",
          "Pacifist with poetry or song phrase", "Brutalist with hard consonants",
          "Romantic with melancholic phrase", "Esperanto with artificial name",
          "Revived liturgical Latin", "Invented language mix",
          "Functional Spanglish", "Readable acronym (HOME, NEST)",
          "Cryptic acronym (G7, T-12)", "Affectionate neighborhood nickname",
          "Mocking Romero, Kirkman or other references", "Reappropriated Walking Dead reference",
          "Mad Max territorial style", "The Last of Us climatic style"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to name a believable zombie shelter",
        "body": "<p>A shelter's name tells its compact story: how it formed, who leads it, what it hopes for. Look at <em>The Walking Dead</em>: 'Alexandria', 'The Kingdom', 'The Hilltop', 'Oceanside', 'The Sanctuary'. Each proposes a different tone. Alexandria suggests suburban civilization; The Kingdom suggests messianism; The Sanctuary suggests Negan's authority. The name must match the faction inhabiting it.</p><p>Consider the shelter's origin. If taken by military at collapse, the name will have code (FOB Bravo, Outpost 7); if it arose as civilian occupation of a building, it'll bear the place's name (Hospital Refuge, Stadium Sector); if a religious group founded it, it'll have prophetic tone (New Eden, The Promise). The name reveals the founding line without exposition.</p><p>Think about narrative audience. Do inhabitants use the name with pride, enemies with mockery, visitors with caution? <em>The Walking Dead</em> plays with this: 'The Sanctuary' sounds nice until you discover it's the Saviors' base. Your shelter can have official name, name other groups use, and contemptuous nickname from escapees. That stratification enriches the world.</p>"
      },
      {
        "h2": "Shelter types in zombie fiction",
        "body": "<p>There are classic typologies. <strong>Military fortress</strong>: bases taken by survivors with discipline, hierarchy and weaponry. Names: 'Garrison Delta', 'FOB Last'. <strong>Civilian community</strong>: walled neighborhoods or small towns. Names: 'Alexandria', 'Green Town'. <strong>Self-sufficient farm</strong>: distant farms with food autonomy. Names: 'The Farm', 'Hershel's Farm', 'Northern Cooperative'.</p><p><strong>Underground bunker</strong>: silos, atomic shelters, adapted subways. Names: 'Bunker 33', 'D-Line Subway'. <strong>Mobile</strong>: caravans, trains, ships. Names: 'The Caravan', 'The Southern Train'. <strong>Vertical</strong>: towers, tall buildings. Names: 'Babel Tower', 'Sixtieth Floor'. Each typology suggests different conflicts: military fortress has hierarchical tensions, farm has resource tensions, bunker has psychological enclosure tensions.</p><p>Size also matters. A 12-person shelter will have an intimate, almost familial name; one of 3000 will have a political, almost national name. <em>Z Nation</em> uses 'Northern Light' for a large initiative; <em>Y: The Last Man</em> uses 'The Citizen' as a small group. Coordinate scale with name's sonority.</p>"
      },
      {
        "h2": "Frequent mistakes naming shelters",
        "body": "<p>First: generic name that doesn't differentiate between shelters. 'The Refuge' works once; in a novel with five settlements all called the same, the reader loses orientation. Each shelter needs its own sonic identity. If your RPG campaign has six locations, ensure they're distinguishable by ear.</p><p>Second: using literal references to existing works. Calling your shelter 'Alexandria' is obvious plagiarism; calling it 'The Kingdom' is subtle plagiarism. Be inspired by The Walking Dead, Z Nation or The Last of Us, but find your own sonority. Better to mix: take The Kingdom's logic (messianic, theatrical) and apply to a cemetery-based shelter: 'The Cathedral of Patients'.</p><p>Third: forgetting local context. If your story takes place in a specific region, your shelters can use real local landmarks, fortified temples, defensible deltas. Leverage geography and local cultural references instead of copying generic names. Fourth: names too long for repeated oral use. Nobody says 'Defensive Community Settlement Number Seven'; characters quickly shorten to 'the Seven'.</p>"
      },
      {
        "h2": "The shelter as a character in the narrative",
        "body": "<p>A good shelter in zombie fiction works like a character. It has history (how it formed), personality (unwritten rules), enemies (other factions, hordes, internal traitors) and arc (it can fall, mutate, fragment). The name must be able to bear that narrative weight. <em>The Walking Dead</em> dedicates entire seasons to a single shelter precisely because the place is protagonist.</p><p>Consider rotation. If your narrative covers months or years, shelters change. A community called 'Hope' can become 'The Trap' after internal betrayal; a name can persist but meaning shift. <em>Station Eleven</em> plays with this: the Museum of Civilization is a name that evolves in sense throughout the novel.</p><p>The name can be a point of political tension. Who has authority to name the shelter? In democratic groups there's voting; in authoritarian groups the leader imposes. If your novel explores post-catastrophe governance, choosing or changing the name can be a key scene. <em>The Stand</em> and <em>The Walking Dead</em> both have episodes of political tension about the place's name and flag. Use that lever.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many different shelters can my story have?",
        "a": "To keep readers oriented, three to five major shelters work well. Smaller ones can be mentioned. <em>The Walking Dead</em> introduced gradually: prison, farm, Alexandria, Hilltop, Kingdom, etc., approximately one per season."
      },
      {
        "q": "Should my shelter have formal name and nickname?",
        "a": "Yes, it adds layers. 'Cooperative Settlement of the Racetrack' as official name and 'The Track' or 'the Pista' as nickname among inhabitants. The difference can signal political tension or simply pragmatic language use."
      },
      {
        "q": "Are these names useful for RPGs like Walking Dead RPG?",
        "a": "Perfect material. Use them for settlements in your campaign, generate two or three before starting and develop history for each. They also work for Apocalypse World, All Flesh Must Be Eaten or Mutant: Year Zero."
      },
      {
        "q": "How do I decide the right shelter size?",
        "a": "For interpersonal drama (relationships, betrayals), 20-50 inhabitants works. For political drama (factions, succession), 200-500. For epic drama (governance, wars between communities), thousands. The name should feel appropriate to scale."
      }
    ]
  }
};
