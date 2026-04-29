import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-cazarrecompensas", en: "bounty-hunter-name-generator" },
  category: "fun",
  emoji: "🎯",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Cazarrecompensas | Genfy",
    metaDesc: "Creá nombres de cazarrecompensas, mercenarios y hunters profesionales para westerns espaciales, cyberpunk y campañas de rol con tono áspero.",
    h1: "Generador de Nombres de Cazarrecompensas",
    intro: "Inventá hunters profesionales con apodos que pesen en el gremio. Ideal para westerns, space opera y noir cyberpunk donde la captura es el oficio.",
    tag: "Worldbuilding",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "rank",
        label: "Rango",
        items: [
          "Mando", "Cazadora", "Cazador", "Hunter", "Reclamador",
          "Reclamadora", "Tracker", "Persigue", "Verdugo", "Verduga",
          "Marshall Privado", "Sabueso", "Sabuesa", "Patrón", "Patrona",
          "Tasadora", "Tasador", "Recolector", "Recolectora", "Escolta",
          "Limpiadora", "Limpiador", "Cosechador", "Cosechadora", "Saldador",
          "Saldadora", "Comodoro Libre", "Lanza Negra", "Mano Fría", "Daga Larga"
        ]
      },
      {
        id: "first",
        label: "Nombre",
        items: [
          "Cassandra", "Vohl", "Reza", "Irma", "Tariq",
          "Magda", "Boyd", "Ezra", "Tula", "Yago",
          "Nadya", "Rook", "Saskia", "Onega", "Pell",
          "Bashir", "Mira", "Drax", "Kael", "Yusra",
          "Cobb", "Ada", "Saito", "Vance", "Riggs",
          "Octavia", "Knell", "Tarra", "Sable", "Marlow"
        ]
      },
      {
        id: "trait",
        label: "Rasgo",
        items: [
          "Mano Fría", "Bala Fija", "Sin Pulso", "Voz Baja", "Ojo Hueco",
          "Pulmón Roto", "Cuello Lento", "Diente Roto", "Cicatriz Vertical", "Sombra Larga",
          "Lengua Corta", "Pie Plomado", "Risa Tarda", "Mirada Plana", "Cabeza Quieta",
          "Mecha Corta", "Aliento Frío", "Hombro Caído", "Mandíbula Doble", "Sangre Lenta",
          "Tiro Largo", "Mano Izquierda", "Mano Derecha", "Cuenta Pares", "Cinco Cartuchos",
          "Tres Marcas", "Costilla Falsa", "Sin Reflejo", "Tres Pasos", "Última Bala"
        ]
      },
      {
        id: "specialty",
        label: "Especialidad",
        items: [
          "del Distrito 9", "del Borde", "de las Lunas Mineras", "del Anillo Falso", "del Sector Quemado",
          "de los Vivos o Muertos", "del Pacto Largo", "del Contrato Frío", "del Cobro Doble", "del Hueso Limpio",
          "de los Sin Cara", "del Registro Negro", "de las Listas Cerradas", "del Cuarto Nivel", "de la Caja Sellada",
          "del Tiro Limpio", "del Pago en Frío", "del Acta Bastarda", "del Sello Rojo", "del Lazo Plata",
          "de las Diez Cabezas", "del Décimo Anillo", "del Camino Hueco", "del Cobro Vivo", "del Crédito Sin Plazo",
          "del Acero Negro", "del Tribunal Ciego", "del Acuerdo Roto", "de la Marca Profunda", "del Último Inventario"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Qué hace memorable a un cazarrecompensas",
        body: "<p>El cazarrecompensas vive del nombre. <em>Boba Fett</em>, <em>Spike Spiegel</em>, <em>Roland Deschain</em>, <em>Anton Chigurh</em>: en todos los casos, el nombre suena antes que el personaje. La razón es estructural. El hunter rara vez tiene tiempo en pantalla para introducirse: aparece, persigue, dispara. Su carta de presentación es exactamente eso, una carta. Si el nombre no impacta en la primera lectura, el personaje queda anónimo.</p><p>Tres rasgos hacen un nombre fuerte. Primero, asimetría: <strong>Mando Cassandra Mano Fría del Borde</strong> tiene rango, nombre, apodo y zona; cada elemento dice algo distinto. Segundo, dureza fonética: prefiere consonantes oclusivas (K, T, D) sobre líquidas (L, R suave). <em>Drax</em> golpea, <em>Lirian</em> acaricia. Tercero, especificidad geográfica: el hunter sin territorio es un mito vacío.</p><p>El epíteto profesional debe ser técnico, no decorativo. <strong>Bala Fija</strong> dice cómo dispara: nunca falla. <strong>Cinco Cartuchos</strong> dice cómo trabaja: matará en cinco tiros o no cobra. Estos detalles construyen reputación. Cuando otros personajes mencionan al hunter en una taberna, repiten el apodo y los detalles operativos. Eso es lo que vuelve al cazarrecompensas leyenda dentro del mundo, no fuera.</p>"
      },
      {
        h2: "Cazarrecompensas en distintos géneros y settings",
        body: "<p>En westerns clásicos y neo-westerns (<em>The Mandalorian</em>, <em>The Good, the Bad and the Ugly</em>, <em>True Grit</em>), el hunter es un solitario con código frágil. Generá nombres con tradición militar (Mando, Marshall Privado) y especialidad de zona (del Borde, de las Lunas Mineras). El paisaje define la profesión: fronteras donde la ley llega tarde y mal.</p><p>En cyberpunk (<em>Cowboy Bebop</em>, <em>Cyberpunk 2077</em>, <em>Altered Carbon</em>), los hunters son contratistas corporativos. El nombre incluye registro burocrático (Reclamador, Saldador) y zona (Distrito 9, Sector Quemado). Para campañas de Cyberpunk RED o Shadowrun, generá tres hunters rivales que se dividen el mercado: uno legal, uno gris, uno ilegal.</p><p>En fantasía oscura (<em>The Witcher</em>, <em>Bloodborne</em>) y space opera (<em>Star Wars</em>), los nombres tienden a lo arquetípico. <strong>Cazadora Magda Sangre Lenta del Pacto Largo</strong> funciona en ambos contextos. La estructura compuesta permite trasplantar el nombre entre géneros con ajustes mínimos. El truco está en filtrar el sufijo: si tu mundo no tiene anillos planetarios, descartá <em>del Décimo Anillo</em>.</p>"
      },
      {
        h2: "Errores típicos al diseñar un hunter",
        body: "<p>Error 1: hunter sin código. El cazarrecompensas creíble tiene reglas: <em>nunca acepta encargos políticos</em>, <em>cobra solo en metálico</em>, <em>devuelve al objetivo vivo si pagan más</em>. Sin código, es solo un sicario. El código es lo que diferencia al hunter del asesino. <em>Boba Fett</em> tiene código tribal mandaloriano; <em>Spike</em> tiene código personal de jazz y melancolía.</p><p>Error 2: hunter omnipotente. Si tu cazarrecompensas nunca falla, no hay tensión. Diseñá una debilidad estructural: dolor crónico, traición pasada que vuelve, miedo a un grupo específico. El mejor episodio de <em>The Mandalorian</em> es cuando Mando duda. Sin grietas, el hunter aburre.</p><p>Error 3: hunter sin economía. ¿Cuánto cobra? ¿Quién le paga? ¿Adónde mete el dinero? Si tu hunter vive viajando con presupuesto infinito, el público lo nota. Definí la economía: gasto en municiones, mantenimiento de nave o moto, sobornos a informantes, retiro soñado. Esa textura financiera convierte al cazarrecompensas en oficio real, no en pose. <em>Cowboy Bebop</em> trabaja sobre esa economía precaria desde el primer episodio.</p>"
      },
      {
        h2: "El gremio: cómo expandir más allá del hunter individual",
        body: "<p>Una vez generado tu cazarrecompensas, definí el gremio que regula la profesión. ¿Hay registro oficial de hunters? ¿Existen niveles? ¿Cómo se autoriza un objetivo? <em>The Mandalorian</em> usa el Bounty Hunters' Guild como infraestructura plausible. Sin gremio o equivalente, el hunter trabaja en vacío. El gremio puede ser oficial (corporativo, gubernamental) o subterráneo (sindicato criminal con código).</p><p>Sumá tres rivales del mismo nivel para generar fricción: el hunter veterano que enseñó al protagonista, el rival joven y ambicioso, el ex compañero que cruzó la línea. Esa trinidad permite escenas recurrentes y dilemas morales. Cuando dos hunters van por el mismo objetivo, surge tensión natural sin necesidad de villano externo.</p><p>Diseñá un objetivo blanco icónico: la pieza que todos los hunters del gremio quisieron capturar y nadie pudo. Esa figura mítica organiza la cosmovisión profesional. Cuando tu protagonista se acerca al objetivo blanco, todos los demás hunters convergen también. Es el equivalente narrativo del rey en el ajedrez: rara vez se mueve, pero ordena todo el tablero.</p>"
      }
    ],
    faq: [
      {
        q: "¿Sirve este generador para Mandalorianos en campañas de Star Wars?",
        a: "Sí. Filtrá los apodos a tono militar y geografía estelar. <em>Mando Reza Bala Fija del Anillo Falso</em> encaja perfectamente. Los Mandalorianos siguen estructura tribal de nombres + clan, así que también podés concatenar dos resultados para clan y portador."
      },
      {
        q: "¿Cómo diferencio un cazarrecompensas de un asesino a sueldo?",
        a: "El hunter persigue objetivos con orden de captura formal (oficial o gremial); el asesino mata por contrato sin marco regulatorio. En tono narrativo, el hunter respeta cierto código y entrega a veces vivo; el asesino solo cobra por cadáver. Ambos pueden coexistir en el mismo mundo."
      },
      {
        q: "¿Puedo usar nombres del generador para personajes femeninos sin cambios?",
        a: "Sí, los rangos y rasgos son neutros o ya están en versión femenina. Los nombres propios incluidos pueden leerse como neutros o asignarse libremente. Si querés más opciones específicas, generá tandas hasta encontrar la combinación deseada."
      },
      {
        q: "¿Cómo equilibro la potencia del hunter para que el grupo de PJ pueda enfrentarlo?",
        a: "Diseñá tres versiones: encuentro inicial (el hunter persigue pero el grupo escapa), encuentro medio (el hunter casi captura a un PJ y se revelan más detalles), encuentro final (combate directo con apoyos del gremio). Esa progresión evita que el hunter aparezca y desaparezca como objeto descartable."
      }
    ]
  },
  en: {
    pageTitle: "Bounty Hunter Name Generator | Genfy",
    metaDesc: "Create bounty hunter, mercenary and professional hunter names for space westerns, cyberpunk and rough-toned roleplay campaigns.",
    h1: "Bounty Hunter Name Generator",
    intro: "Invent professional hunters with nicknames that carry weight in the guild. Perfect for westerns, space opera and cyberpunk noir where capture is the trade.",
    tag: "Worldbuilding",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "rank",
        label: "Rank",
        items: [
          "Mando", "Hunter", "Reclaimer", "Tracker", "Stalker",
          "Headhunter", "Private Marshall", "Hound", "Bagger", "Collector",
          "Assessor", "Cleaner", "Reaper", "Settler", "Closer",
          "Free Commodore", "Black Lance", "Cold Hand", "Long Dagger", "Wrangler",
          "Snare", "Catcher", "Trapper", "Pursuer", "Sealer",
          "Shadowman", "Shadowwoman", "Skipchaser", "Net", "Bondsman"
        ]
      },
      {
        id: "first",
        label: "Name",
        items: [
          "Cassandra", "Vohl", "Reza", "Irma", "Tariq",
          "Magda", "Boyd", "Ezra", "Tula", "Yago",
          "Nadya", "Rook", "Saskia", "Onega", "Pell",
          "Bashir", "Mira", "Drax", "Kael", "Yusra",
          "Cobb", "Ada", "Saito", "Vance", "Riggs",
          "Octavia", "Knell", "Tarra", "Sable", "Marlow"
        ]
      },
      {
        id: "trait",
        label: "Trait",
        items: [
          "Cold Hand", "Fixed Round", "Pulseless", "Low Voice", "Hollow Eye",
          "Broken Lung", "Slow Neck", "Broken Tooth", "Vertical Scar", "Long Shadow",
          "Short Tongue", "Lead Foot", "Late Laugh", "Flat Stare", "Still Head",
          "Short Fuse", "Cold Breath", "Dropped Shoulder", "Double Jaw", "Slow Blood",
          "Long Shot", "Left Hand", "Right Hand", "Even Count", "Five Rounds",
          "Three Marks", "False Rib", "No Reflection", "Three Steps", "Last Bullet"
        ]
      },
      {
        id: "specialty",
        label: "Specialty",
        items: [
          "of District 9", "of the Edge", "of the Mining Moons", "of the False Ring", "of the Burnt Sector",
          "of Live or Dead", "of the Long Pact", "of the Cold Contract", "of Double Pay", "of Clean Bone",
          "of the Faceless", "of the Black Registry", "of the Sealed Lists", "of the Fourth Tier", "of the Sealed Box",
          "of the Clean Shot", "of Cold Payment", "of the Bastard Writ", "of the Red Seal", "of the Silver Snare",
          "of Ten Heads", "of the Tenth Ring", "of the Hollow Path", "of Live Collection", "of Indefinite Credit",
          "of Black Steel", "of the Blind Tribunal", "of the Broken Deal", "of the Deep Mark", "of the Last Ledger"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "What makes a bounty hunter memorable",
        body: "<p>The bounty hunter lives by name. <em>Boba Fett</em>, <em>Spike Spiegel</em>, <em>Roland Deschain</em>, <em>Anton Chigurh</em>: in every case, the name lands before the character. The reason is structural. The hunter rarely has screen time to introduce themselves: they appear, pursue, fire. Their calling card is exactly that, a card. If the name doesn't hit on first read, the character stays anonymous.</p><p>Three traits make a name strong. First, asymmetry: <strong>Mando Cassandra Cold Hand of the Edge</strong> has rank, name, nickname and zone; each element says something different. Second, phonetic hardness: prefer plosive consonants (K, T, D) over liquid (L, soft R). <em>Drax</em> hits, <em>Lirian</em> caresses. Third, geographic specificity: the hunter without territory is empty myth.</p><p>The professional epithet must be technical, not decorative. <strong>Fixed Round</strong> says how they shoot: never miss. <strong>Five Rounds</strong> says how they work: kill in five shots or no charge. These details build reputation. When other characters mention the hunter in a tavern, they repeat the nickname and operational details. That's what turns the bounty hunter into legend inside the world, not outside.</p>"
      },
      {
        h2: "Bounty hunters across genres and settings",
        body: "<p>In classic and neo-westerns (<em>The Mandalorian</em>, <em>The Good, the Bad and the Ugly</em>, <em>True Grit</em>), the hunter is a loner with fragile code. Generate names with military tradition (Mando, Private Marshall) and zone specialty (of the Edge, of the Mining Moons). Landscape defines the profession: frontiers where law arrives late and badly.</p><p>In cyberpunk (<em>Cowboy Bebop</em>, <em>Cyberpunk 2077</em>, <em>Altered Carbon</em>), hunters are corporate contractors. The name includes bureaucratic register (Reclaimer, Closer) and zone (District 9, Burnt Sector). For Cyberpunk RED or Shadowrun campaigns, generate three rival hunters splitting the market: one legal, one gray, one illegal.</p><p>In dark fantasy (<em>The Witcher</em>, <em>Bloodborne</em>) and space opera (<em>Star Wars</em>), names lean archetypal. <strong>Hunter Magda Slow Blood of the Long Pact</strong> works in both contexts. The compound structure lets you transplant the name across genres with minimal adjustments. The trick is filtering the suffix: if your world has no planetary rings, drop <em>of the Tenth Ring</em>.</p>"
      },
      {
        h2: "Typical mistakes when designing a hunter",
        body: "<p>Mistake 1: codeless hunter. The credible bounty hunter has rules: <em>never accepts political contracts</em>, <em>cash only</em>, <em>returns target alive if they pay more</em>. Without code, just a hitman. Code is what differentiates hunter from killer. <em>Boba Fett</em> has Mandalorian tribal code; <em>Spike</em> has personal code of jazz and melancholy.</p><p>Mistake 2: omnipotent hunter. If your bounty hunter never fails, no tension. Design a structural weakness: chronic pain, returning past betrayal, fear of a specific group. <em>The Mandalorian</em>'s best episodes are when Mando hesitates. Without cracks, the hunter bores.</p><p>Mistake 3: hunter without economy. How much do they charge? Who pays? Where do they stash the money? If your hunter travels endlessly on infinite budget, the audience notices. Define economics: ammo spending, ship or bike maintenance, informant bribes, dreamed retirement. That financial texture turns the bounty hunter into real trade, not pose. <em>Cowboy Bebop</em> works on that precarious economy from episode one.</p>"
      },
      {
        h2: "The guild: expanding beyond the individual hunter",
        body: "<p>Once you've generated your bounty hunter, define the guild regulating the profession. Is there an official hunter registry? Are there tiers? How is a target authorized? <em>The Mandalorian</em> uses the Bounty Hunters' Guild as plausible infrastructure. Without guild or equivalent, the hunter works in a vacuum. The guild can be official (corporate, governmental) or underground (criminal syndicate with code).</p><p>Add three rivals at the same level to generate friction: the veteran who taught the protagonist, the young ambitious rival, the ex-partner who crossed the line. That trinity enables recurring scenes and moral dilemmas. When two hunters chase the same target, natural tension arises without need of external villain.</p><p>Design an iconic white whale: the target every hunter in the guild wanted to capture and none could. That mythic figure organizes the professional worldview. When your protagonist approaches the white whale, all other hunters converge too. It's the narrative equivalent of the king in chess: rarely moves, but orders the whole board.</p>"
      }
    ],
    faq: [
      {
        q: "Does this generator work for Mandalorians in Star Wars campaigns?",
        a: "Yes. Filter nicknames to military tone and stellar geography. <em>Mando Reza Fixed Round of the False Ring</em> fits perfectly. Mandalorians follow tribal name + clan structure, so you can also concatenate two results for clan and bearer."
      },
      {
        q: "How do I differentiate a bounty hunter from a hitman?",
        a: "The hunter pursues targets with formal capture order (official or guild); the hitman kills under contract without regulatory frame. Tonally, the hunter respects some code and sometimes returns alive; the hitman charges per corpse. Both can coexist in the same world."
      },
      {
        q: "Can I use generator names for female characters without changes?",
        a: "Yes, ranks and traits are neutral or already in feminine version. Included first names can read as neutral or be assigned freely. If you want more specific options, generate batches until you find the desired combination."
      },
      {
        q: "How do I balance hunter power so the PC party can confront them?",
        a: "Design three versions: initial encounter (hunter pursues but party escapes), middle encounter (hunter almost captures a PC and more details emerge), final encounter (direct combat with guild backup). That progression avoids the hunter appearing and disappearing as disposable object."
      }
    ]
  }
};
