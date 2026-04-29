import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-diplomático", en: "diplomat-name-generator" },
  category: "fun",
  emoji: "🤝",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Diplomático | Genfy",
    metaDesc: "Creá nombres de diplomáticos, embajadores y negociadores intergalácticos con gravitas política para tus historias de space opera y novelas históricas.",
    h1: "Generador de Nombres de Diplomático",
    intro: "Inventá embajadores con peso institucional, negociadores con doble agenda y enviados con mandato imposible. Para tramas políticas y space opera.",
    tag: "Política ficcional",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "title",
        label: "Título",
        items: [
          "Embajador", "Embajadora", "Plenipotenciaria", "Plenipotenciario", "Cónsul",
          "Cónsula", "Legado", "Legada", "Enviado Especial", "Enviada Especial",
          "Nuncio", "Nuncia", "Mediador Imperial", "Mediadora Imperial", "Vocera",
          "Vocero", "Negociador Jefe", "Negociadora Jefa", "Procurador", "Procuradora",
          "Comisionada", "Comisionado", "Heraldo", "Heralda", "Encargada de Negocios",
          "Ministra Plenipotenciaria", "Ministro Plenipotenciario", "Embajadora Errante", "Delegado Supremo", "Delegada Suprema"
        ]
      },
      {
        id: "first",
        label: "Nombre",
        items: [
          "Lysandra", "Aurelio", "Kashira", "Beltrán", "Selene",
          "Idris", "Anastasia", "Vasilis", "Talin", "Magdalena",
          "Octavio", "Yara", "Pavel", "Aspasia", "Ezekiel",
          "Sigrid", "Cassander", "Aurora", "Tariq", "Nadia",
          "Jorah", "Iliana", "Dorian", "Reza", "Catalina",
          "Konstantin", "Yusra", "Adrian", "Mireya", "Amalric"
        ]
      },
      {
        id: "epithet",
        label: "Epíteto",
        items: [
          "el Sereno", "la Serena", "Voz Suave", "Manos Limpias", "Lengua Plata",
          "Pacto Largo", "Acuerdo Frío", "Sin Memoria", "el Sonriente", "la Sonriente",
          "Doble Sello", "Tres Idiomas", "Siete Banderas", "el Imparcial", "la Imparcial",
          "Cara Sin Lectura", "Mano Suelta", "Verso Lento", "Tinta Verde", "Tinta Roja",
          "Carta Bajo la Mesa", "Cifra Doble", "Pulso Quieto", "el Acuerdo", "la Acuerdo",
          "Aliento Largo", "Sonrisa Falsa", "Caminos Cruzados", "Voz Sin Eco", "Mensajero Doble"
        ]
      },
      {
        id: "court",
        label: "Corte / Mandato",
        items: [
          "ante la Corte de Acero", "del Pacto Estelar", "ante el Concilio del Velo", "del Tribunal Bastardo", "de la Federación Polar",
          "ante el Senado del Anillo", "del Reino del Norte", "ante la Coalición Roja", "del Consejo del Cabo", "ante el Imperio del Río",
          "del Sello Verde", "del Tratado de la Octava Hora", "ante el Khanato del Sur", "del Pacto del Lago Frío", "ante la República Hueca",
          "del Cónclave Eterno", "ante la Liga del Velo", "del Concierto de las Lunas", "ante el Tribunal del Pacto", "del Acuerdo Doble",
          "ante el Consorcio del Anillo Externo", "del Tratado del Sexto Frente", "ante la Casa del Cuervo", "del Pacto del Cabo Cero", "ante el Consejo Quemado",
          "del Foro de Tres Banderas", "ante la Asamblea Estelar", "del Concierto del Décimo Mundo", "ante el Tribunal del Velo Roto", "del Pacto Bastardo"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Construyendo diplomáticos creíbles para tu mundo",
        body: "<p>El diplomático de ficción es el opuesto del soldado: gana batallas con pausas, no con disparos. Su nombre debe transmitir gravedad institucional. <em>Ekati Sirantha</em> en <em>The Expanse</em>, <em>Mon Mothma</em> en Star Wars, <em>Hari Seldon</em> en Foundation. Todos cargan títulos largos que el lector tarda en pronunciar pero retiene por peso. La fórmula es título + nombre + epíteto + corte/mandato.</p><p>El epíteto debe sugerir habilidad negociadora, no virtud moral. <em>Lengua Plata</em> implica oratoria; <em>Manos Limpias</em> sugiere falta de escándalos previos; <em>Cifra Doble</em> insinúa que sabe leer entre líneas. Evitá apodos como <em>el Justo</em> o <em>la Pura</em>: los diplomáticos viven en grises, no en blancos. La diplomacia interesante es ambigua, no santa.</p><p>El mandato es lo que le da urgencia narrativa. <em>ante el Tribunal Bastardo</em> indica que el diplomático trabaja en un foro disputado por todas las facciones; <em>del Pacto del Cabo Cero</em> sugiere que representa un tratado controvertido. Sin mandato concreto, el diplomático es solo un personaje elegante. Con mandato, es un agente con stake real en el conflicto del mundo.</p>"
      },
      {
        h2: "Aplicaciones por género: política, sci-fi, fantasía",
        body: "<p>En thrillers políticos contemporáneos (estilo <em>The Diplomat</em>, <em>Madam Secretary</em>), el diplomático opera en fronteras grises entre interés nacional y ético personal. Generá nombres más sobrios filtrando los rangos arcaicos. Quedate con <em>Embajador</em>, <em>Cónsul</em>, <em>Encargado de Negocios</em>. La acción es burocrática y verbal, lo que paradójicamente exige nombres más comunes.</p><p>En space opera (<em>Foundation</em>, <em>Babylon 5</em>, <em>Star Wars</em>), los diplomáticos manejan tratados interplanetarios. Acá conviene rangos exóticos como <em>Plenipotenciaria</em> o <em>Legado</em>, y mandatos cósmicos: <em>del Pacto Estelar</em>, <em>ante el Concilio del Velo</em>. La escala del mandato debe corresponder a la escala del universo. Un embajador entre dos planetas pequeños no se llama igual que uno entre imperios galácticos.</p><p>En fantasía épica (Dune, A Song of Ice and Fire, The Goblin Emperor), el diplomático mezcla protocolo cortesano con intriga palaciega. Los rangos antiguos como <em>Heraldo</em>, <em>Nuncio</em>, <em>Procurador</em> funcionan bien. Sumá un detalle ritual: el embajador siempre lleva un anillo específico, viste un color obligatorio, debe ofrecer un objeto antes de hablar. Esos detalles ceremoniales construyen verosimilitud cultural.</p>"
      },
      {
        h2: "Errores comunes al diseñar diplomáticos en ficción",
        body: "<p>Error 1: diplomático monolingüe. Si tu embajador trabaja entre dos culturas pero solo habla un idioma, no es creíble. Los diplomáticos reales manejan tres a cinco idiomas y conocen los protocolos de cada corte. Diseñá esa competencia explícitamente: qué idioma habla con qué facción, qué traductor lo acompaña, qué malentendidos pasados marcaron su carrera.</p><p>Error 2: diplomático sin red doméstica. Todo embajador responde a un gobierno. Definí quién manda en su capital, qué facciones pelean por su retorno, quién quiere reemplazarlo. Sin esa red interna, el personaje flota en el mundo sin presión real. Los thrillers políticos buenos (<em>House of Cards</em>, <em>Borgen</em>) muestran que la diplomacia es 30% exterior y 70% conspiración interna.</p><p>Error 3: diplomático sin agenda secreta. La diplomacia narrativamente interesante esconde intenciones dobles. Tu embajador puede tener una directiva oficial y otra personal contradictoria. Tal vez el ministerio le ordena firmar el tratado, pero su familia quiere que lo sabotee. Esa tensión genera escenas de elección moral. Sin agenda secreta, el diplomático es solo un repetidor de líneas oficiales.</p>"
      },
      {
        h2: "Del nombre al ecosistema diplomático completo",
        body: "<p>Una vez generado tu diplomático, definí su delegación: traductor de confianza, agregado militar (ojos del ejército dentro de la embajada), agregado cultural (suele ser espía), secretario administrativo (controla la agenda real), guardia personal (con código propio). Cinco figuras alrededor del embajador permiten escenas de embajada con tensión interna.</p><p>Diseñá la corte donde opera: quién es el monarca o presidente al que se acerca, quién es el rival diplomático de otra potencia que también busca el oído del gobierno local, quién es el contacto local clave (un noble, un industrial, un periodista). Esa triangulación local da textura a la presencia diplomática en el escenario.</p><p>Reservá una crisis inminente. La diplomacia narrativamente interesante siempre opera bajo amenaza de ruptura: una guerra que se evita, un tratado que se firma, una alianza que se quiebra. Diseñá esa crisis desde el inicio aunque tarde en revelarse. Cuanto más alto sea el costo de fallar, más peso tiene cada decisión del embajador. <em>The Goblin Emperor</em> y <em>A Memory Called Empire</em> trabajan magistralmente esa tensión sostenida.</p>"
      }
    ],
    faq: [
      {
        q: "¿Sirve este generador para diplomáticos contemporáneos o solo para ficción especulativa?",
        a: "Sirve para ambos contextos. Filtrá los mandatos según realismo: para thrillers contemporáneos quedate con cortes plausibles (Federación, Senado, Consejo). Para space opera o fantasía, usá los más exóticos (Khanato, Pacto Estelar, Cónclave Eterno)."
      },
      {
        q: "¿Cómo doy a mi diplomático profundidad más allá del nombre formal?",
        a: "Definí el momento decisivo de su carrera previa: una negociación que ganó pero que dejó víctimas colaterales, un tratado que firmó y arrepiente, una traición que cometió por orden superior. Esa cicatriz política da peso. Los diplomáticos planos son aburridos; los diplomáticos con remordimientos son novelables."
      },
      {
        q: "¿Cuántos diplomáticos diferentes debería generar para una novela política?",
        a: "Mínimo tres: el protagonista, su contraparte (diplomático rival que negocia desde el otro lado) y el mediador neutral que actúa de árbitro. Esa triada permite todos los movimientos posibles: alianza, traición, mediación, ruptura. Para sagas largas, podés expandir a cinco o seis."
      },
      {
        q: "¿Cómo trabajo el lenguaje formal sin que los diálogos suenen acartonados?",
        a: "Mezclá registro alto con detalles cotidianos. Tu embajador puede negociar un tratado mientras se queja del clima o pide otro café. Esa mezcla copia cómo hablan los diplomáticos reales. <em>The Diplomat</em> trabaja muy bien ese contraste entre lenguaje técnico de cancillería y conversación humana."
      }
    ]
  },
  en: {
    pageTitle: "Diplomat Name Generator | Genfy",
    metaDesc: "Create diplomat, ambassador and intergalactic negotiator names with political gravitas for your space opera stories and historical novels.",
    h1: "Diplomat Name Generator",
    intro: "Invent ambassadors with institutional weight, negotiators with double agendas and envoys with impossible mandates. For political plots and space opera.",
    tag: "Fictional politics",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "title",
        label: "Title",
        items: [
          "Ambassador", "Plenipotentiary", "Consul", "Legate", "Special Envoy",
          "Nuncio", "Imperial Mediator", "Spokesperson", "Chief Negotiator", "Procurator",
          "Commissioner", "Herald", "Chargé d'Affaires", "Minister Plenipotentiary", "Wandering Ambassador",
          "Supreme Delegate", "Sealed Voice", "Concord Officer", "Treaty Bearer", "Court Envoy",
          "First Ambassador", "Second Ambassador", "Diplomat at Large", "Crown Envoy", "Council Voice",
          "Resident Minister", "Itinerant Legate", "Senior Mediator", "High Commissioner", "Ambassador Extraordinary"
        ]
      },
      {
        id: "first",
        label: "Name",
        items: [
          "Lysandra", "Aurelio", "Kashira", "Beltran", "Selene",
          "Idris", "Anastasia", "Vasilis", "Talin", "Magdalena",
          "Octavio", "Yara", "Pavel", "Aspasia", "Ezekiel",
          "Sigrid", "Cassander", "Aurora", "Tariq", "Nadia",
          "Jorah", "Iliana", "Dorian", "Reza", "Catalina",
          "Konstantin", "Yusra", "Adrian", "Mireya", "Amalric"
        ]
      },
      {
        id: "epithet",
        label: "Epithet",
        items: [
          "the Serene", "Soft Voice", "Clean Hands", "Silver Tongue", "Long Pact",
          "Cold Accord", "Memoryless", "the Smiling", "Double Seal", "Three Tongues",
          "Seven Flags", "the Impartial", "Unread Face", "Loose Hand", "Slow Verse",
          "Green Ink", "Red Ink", "Card Under Table", "Double Cipher", "Still Pulse",
          "the Accord", "Long Breath", "False Smile", "Crossed Paths", "Echoless Voice",
          "Double Messenger", "the Patient", "Threefold Pen", "Quiet Border", "Twin Treaty"
        ]
      },
      {
        id: "court",
        label: "Court / Mandate",
        items: [
          "to the Steel Court", "of the Stellar Pact", "to the Veil Council", "of the Bastard Tribunal", "of the Polar Federation",
          "to the Ring Senate", "of the Northern Realm", "to the Red Coalition", "of the Cape Council", "to the River Empire",
          "of the Green Seal", "of the Treaty of the Eighth Hour", "to the Southern Khanate", "of the Cold Lake Pact", "to the Hollow Republic",
          "of the Eternal Conclave", "to the Veil League", "of the Moons Concert", "to the Pact Tribunal", "of the Double Accord",
          "to the Outer Ring Consortium", "of the Sixth Front Treaty", "to the House of the Crow", "of the Cape Zero Pact", "to the Burnt Council",
          "of the Three Flags Forum", "to the Stellar Assembly", "of the Tenth World Concert", "to the Broken Veil Tribunal", "of the Bastard Pact"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Building credible diplomats for your world",
        body: "<p>The fictional diplomat is the soldier's opposite: wins battles with pauses, not shots. Their name must convey institutional gravity. <em>Mon Mothma</em> in Star Wars, <em>Hari Seldon</em> in Foundation, <em>Kavalier Brutha</em> in Discworld. They all carry long titles readers pronounce slowly but retain by weight. The formula is title + name + epithet + court/mandate.</p><p>The epithet must suggest negotiating skill, not moral virtue. <em>Silver Tongue</em> implies oratory; <em>Clean Hands</em> suggests no prior scandals; <em>Double Cipher</em> hints they can read between lines. Avoid nicknames like <em>the Just</em> or <em>the Pure</em>: diplomats live in grays, not whites. Interesting diplomacy is ambiguous, not saintly.</p><p>The mandate gives narrative urgency. <em>to the Bastard Tribunal</em> indicates the diplomat works in a forum disputed by all factions; <em>of the Cape Zero Pact</em> suggests they represent a controversial treaty. Without concrete mandate, the diplomat is just an elegant character. With mandate, an agent with real stake in the world's conflict.</p>"
      },
      {
        h2: "Applications by genre: political, sci-fi, fantasy",
        body: "<p>In contemporary political thrillers (style of <em>The Diplomat</em>, <em>Madam Secretary</em>), the diplomat operates in gray frontiers between national interest and personal ethics. Generate more sober names by filtering archaic ranks. Stick to <em>Ambassador</em>, <em>Consul</em>, <em>Chargé d'Affaires</em>. Action is bureaucratic and verbal, paradoxically demanding more common names.</p><p>In space opera (<em>Foundation</em>, <em>Babylon 5</em>, <em>Star Wars</em>), diplomats handle interplanetary treaties. Here exotic ranks like <em>Plenipotentiary</em> or <em>Legate</em> work, and cosmic mandates: <em>of the Stellar Pact</em>, <em>to the Veil Council</em>. Mandate scale must match universe scale. An ambassador between two small planets isn't named like one between galactic empires.</p><p>In epic fantasy (Dune, A Song of Ice and Fire, The Goblin Emperor), the diplomat mixes courtly protocol with palace intrigue. Ancient ranks like <em>Herald</em>, <em>Nuncio</em>, <em>Procurator</em> work well. Add a ritual detail: the ambassador always wears a specific ring, dresses in mandatory color, must offer an object before speaking. Those ceremonial details build cultural verisimilitude.</p>"
      },
      {
        h2: "Common mistakes when designing fictional diplomats",
        body: "<p>Mistake 1: monolingual diplomat. If your ambassador works between two cultures but speaks only one language, not credible. Real diplomats handle three to five languages and know each court's protocols. Design that competence explicitly: which language they speak with which faction, which translator accompanies them, which past misunderstandings marked their career.</p><p>Mistake 2: diplomat without domestic network. Every ambassador answers to a government. Define who runs the capital, which factions fight for their return, who wants to replace them. Without that internal network, the character floats in the world without real pressure. Good political thrillers (<em>House of Cards</em>, <em>Borgen</em>) show diplomacy is 30% foreign and 70% internal conspiracy.</p><p>Mistake 3: diplomat without secret agenda. Narratively interesting diplomacy hides double intentions. Your ambassador may have an official directive and a contradictory personal one. Maybe the ministry orders signing the treaty, but their family wants sabotage. That tension generates moral choice scenes. Without secret agenda, the diplomat is just a repeater of official lines.</p>"
      },
      {
        h2: "From name to full diplomatic ecosystem",
        body: "<p>Once you've generated your diplomat, define their delegation: trusted translator, military attaché (army's eyes inside the embassy), cultural attaché (often a spy), administrative secretary (controls the real schedule), personal guard (with own code). Five figures around the ambassador enable embassy scenes with internal tension.</p><p>Design the court where they operate: who's the monarch or president they approach, who's the rival diplomat from another power also seeking the local government's ear, who's the key local contact (a noble, an industrialist, a journalist). That local triangulation gives texture to diplomatic presence in the setting.</p><p>Reserve an imminent crisis. Narratively interesting diplomacy always operates under threat of rupture: a war averted, a treaty signed, an alliance broken. Design that crisis from the start even if late to reveal. The higher the cost of failure, the more weight each ambassador's decision carries. <em>The Goblin Emperor</em> and <em>A Memory Called Empire</em> work that sustained tension masterfully.</p>"
      }
    ],
    faq: [
      {
        q: "Does this generator work for contemporary diplomats or only speculative fiction?",
        a: "Both contexts. Filter mandates by realism: for contemporary thrillers stick to plausible courts (Federation, Senate, Council). For space opera or fantasy, use the more exotic ones (Khanate, Stellar Pact, Eternal Conclave)."
      },
      {
        q: "How do I give my diplomat depth beyond the formal name?",
        a: "Define the decisive moment of their previous career: a negotiation they won but left collateral victims, a treaty they signed and regret, a betrayal committed under superior orders. That political scar gives weight. Flat diplomats are boring; remorseful diplomats are novelable."
      },
      {
        q: "How many different diplomats should I generate for a political novel?",
        a: "Minimum three: the protagonist, their counterpart (rival diplomat negotiating from the other side) and the neutral mediator acting as arbiter. That triad enables all possible moves: alliance, betrayal, mediation, rupture. For long sagas, expand to five or six."
      },
      {
        q: "How do I work formal language without dialogue sounding stilted?",
        a: "Mix high register with everyday details. Your ambassador can negotiate a treaty while complaining about the weather or asking for another coffee. That mix copies how real diplomats speak. <em>The Diplomat</em> works that contrast between technical chancellery language and human conversation very well."
      }
    ]
  }
};
