import type { GenData } from './types';

export const data: GenData = {
  slug: { es: "generador-de-nombres-de-club-secreto", en: "secret-society-name-generator" },
  category: "fun",
  emoji: "🔐",
  mode: "combine",
  es: {
    pageTitle: "Generador de Nombres de Club Secreto | Genfy",
    metaDesc: "Creá nombres misteriosos para sociedades secretas, hermandades ocultas y clubes exclusivos con aura enigmática para tus historias y juegos de rol.",
    h1: "Generador de Nombres de Club Secreto",
    intro: "Inventá hermandades ocultas, logias clandestinas y círculos iniciáticos con un solo clic. Ideal para novelas, juegos de rol y mundos de conspiración.",
    tag: "Worldbuilding",
    filterLabel: "Estructura",
    countLabel: "Cantidad",
    generateLabel: "Generar nombres",
    copyLabel: "Copiar",
    separator: " ",
    groups: [
      {
        id: "prefix",
        label: "Prefijo",
        items: [
          "Orden de", "Hermandad de", "Logia de", "Círculo de", "Cofradía de",
          "Sociedad de", "Concilio de", "Cábala de", "Sindicato de", "Cónclave de",
          "Tribunal de", "Fraternidad de", "Asamblea de", "Cámara de", "Custodios de",
          "Guardianes de", "Hijos de", "Hijas de", "Herederos de", "Discípulos de",
          "Vigilantes de", "Centinelas de", "Adeptos de", "Iniciados de", "Maestros de",
          "Escribas de", "Tejedores de", "Forjadores de", "Sembradores de", "Portadores de"
        ]
      },
      {
        id: "adjective",
        label: "Adjetivo",
        items: [
          "la Mano", "el Ojo", "el Velo", "la Llave", "la Sombra",
          "la Luna", "el Espejo", "la Brasa", "el Hilo", "la Daga",
          "la Pluma", "el Sello", "la Llama", "el Diente", "el Hueso",
          "la Aguja", "la Cuerda", "el Anillo", "la Calavera", "la Estrella",
          "la Espina", "el Faro", "el Corazón", "la Boca", "el Cuervo",
          "el Reloj", "el Trono", "el Pacto", "la Garra", "la Página"
        ]
      },
      {
        id: "modifier",
        label: "Modificador",
        items: [
          "Negra", "Rota", "Silenciosa", "Carmesí", "Invisible",
          "Hueca", "Marchita", "Eterna", "Fracturada", "Velada",
          "Ardiente", "Enterrada", "Olvidada", "Sangrante", "Helada",
          "Insomne", "Prohibida", "Susurrante", "Marcada", "Errante",
          "Caída", "Profana", "Oculta", "Devorada", "Ahogada",
          "Trémula", "Quebrada", "Doblada", "Dormida", "Ciega"
        ]
      },
      {
        id: "suffix",
        label: "Sufijo",
        items: [
          "del Norte", "del Crepúsculo", "del Abismo", "del Páramo", "del Silencio",
          "de los Trece", "del Ocaso", "del Vacío", "del Acero", "del Pacto Antiguo",
          "de la Octava Hora", "de las Cenizas", "del Décimo Sello", "del Nudo Ciego", "de la Niebla",
          "del Espejo Roto", "del Pozo", "de la Última Vela", "de la Marca Gris", "del Umbral",
          "del Río Muerto", "de la Torre Caída", "del Viento del Sur", "del Lazo Plateado", "de la Hora Cero",
          "del Sello de Sal", "del Camino Hueco", "de los Versos Mudos", "del Verbo Roto", "de la Llave Inversa"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "Cómo construir nombres de sociedades secretas creíbles",
        body: "<p>Una sociedad secreta convincente combina tres ingredientes: un cuerpo institucional (Orden, Logia, Cofradía), un símbolo central que actúe como tótem (la Mano, el Ojo, la Llave) y un calificador que insinúe historia (Quebrada, Eterna, Olvidada). Cuando estos elementos riman a nivel temático, el nombre se vuelve memorable. Por ejemplo, <strong>Hermandad de la Llave Hueca del Pozo</strong> sugiere por sí solo un mito fundador.</p><p>Evitá juntar palabras al azar. Los nombres más potentes en literatura, como los Illuminati Bávaros o la Skull and Bones de Yale, parten de un símbolo concreto y construyen alrededor. Si tu sociedad protege un secreto cosmológico, el sufijo conviene que apunte a un lugar (del Pozo, del Umbral). Si su misión es vigilancia, sumá <em>Centinelas</em> o <em>Custodios</em> al prefijo.</p><p>Probá la regla del trípode: el nombre debe revelar quién (Hermandad), qué (la Daga) y dónde o cuándo (de la Hora Cero). Si dos de esos pilares fallan, el nombre suena vacío. Generá variantes y leelas en voz alta: las que se traban en la lengua se descartan.</p>"
      },
      {
        h2: "Usos en novelas, juegos de rol y campañas de horror cósmico",
        body: "<p>En novelas conspirativas al estilo de <em>El péndulo de Foucault</em> o <em>El nombre de la rosa</em>, una sociedad secreta funciona como motor de trama oculto. Conviene tener al menos dos nombres en tensión: la facción que el protagonista descubre primero y la verdadera estructura detrás. Si la primera se llama <strong>Cofradía del Espejo Roto</strong>, la segunda puede ser <strong>Tribunal de la Llave Inversa</strong>, sugiriendo una jerarquía superior.</p><p>En D&D y Pathfinder, los nombres compuestos por cuatro partes son ideales para grupos rivales que el grupo enfrenta a lo largo de varias sesiones. Para Call of Cthulhu o Vaesen, conviene nombres más cortos y evocativos: <strong>Adeptos del Hueso Marchito</strong> evoca de inmediato decadencia y culto.</p><p>En videojuegos narrativos, el nombre debe leerse rápido en pantalla. Si supera siete palabras, los jugadores lo abrevian. Diseñá el nombre largo para los códices y un alias corto para los diálogos: <em>los Trece</em>, <em>la Mano Negra</em>, <em>los Insomnes</em>. Esa dualidad agrega profundidad.</p>"
      },
      {
        h2: "Errores frecuentes al inventar hermandades ficticias",
        body: "<p>El primer error es saturar de adjetivos: <strong>Cofradía Eterna Sangrante de la Sombra Marchita Olvidada</strong> suena a parodia, no a amenaza. Limitate a un único modificador fuerte. El segundo error es repetir conceptos: <em>Orden de la Llama Ardiente</em> es redundante, mientras que <em>Orden de la Llama Hueca</em> abre preguntas.</p><p>Otro fallo habitual es elegir símbolos sobreusados sin reinventarlos. La calavera, la luna y la rosa aparecen en cientos de obras. Si los usás, cruzalos con un sufijo inesperado: <strong>Sembradores de la Calavera del Río Muerto</strong> diferencia tu sociedad de la genérica <em>Orden de la Calavera Negra</em>.</p><p>Cuidá la coherencia idiomática. Si tu mundo tiene tradición latinizante, mezclar términos como <em>Sindicato</em> (moderno) con <em>Cábala</em> (medieval) puede sonar mal. Definí el registro antes de generar y filtrá los resultados que rompan tono. Por último, leé el nombre completo: si no podés repetirlo de memoria tras dos lecturas, los lectores tampoco lo harán.</p>"
      },
      {
        h2: "De la idea al canon: cómo desarrollar la sociedad después del nombre",
        body: "<p>Tener un nombre es solo el principio. Una vez generado, escribí en una ficha: fundación (siglo, motivo), símbolo visible (anillo, tatuaje, broche), saludo o seña ritual, jerarquía interna (al menos tres rangos) y enemigo histórico. Sin estos cinco elementos, la sociedad queda en cartón pintado.</p><p>Un truco profesional: convertí el nombre en mito. Si tu sociedad se llama <strong>Guardianes de la Aguja Quebrada</strong>, escribí una leyenda fundacional donde una aguja real (¿de un reloj? ¿de una brújula?) se rompió y dispersó. Cada fragmento es ahora una reliquia que la orden busca o protege. La metáfora se transforma en MacGuffin.</p><p>Definí también qué pasa cuando alguien rompe el juramento: ¿exilio, marca, ejecución? Las consecuencias dan peso. Y reservá tres datos como secreto del autor: cosas que vos sabés pero los lectores nunca sabrán explícitamente. Esa información oculta filtra coherencia incluso si nunca se enuncia. Los nombres generados acá son la chispa; el worldbuilding posterior es la hoguera.</p>"
      }
    ],
    faq: [
      {
        q: "¿Puedo usar estos nombres comercialmente en mi novela o videojuego?",
        a: "Sí. Los nombres generados son combinaciones libres y no están protegidos. Te recomendamos buscar el resultado final en Google para confirmar que no coincide con marcas registradas o sociedades reales históricas."
      },
      {
        q: "¿Cómo elijo entre dos nombres generados que me gustan por igual?",
        a: "Pronunciá ambos en voz alta tres veces. El que se traba en la lengua o pierde fuerza al repetirlo se descarta. También probá si funciona como abreviatura natural: si <em>Hermandad de la Llave Hueca</em> se reduce bien a <em>los Llaveros</em>, tiene futuro."
      },
      {
        q: "¿Sirven estos nombres para ambientaciones contemporáneas o solo medievales?",
        a: "Sirven para ambas. Para tono moderno (thriller, conspiración urbana), preferí prefijos como <em>Sindicato</em>, <em>Cámara</em> o <em>Concilio</em>. Para tono medieval o gótico, usá <em>Cofradía</em>, <em>Logia</em> u <em>Orden</em>. El generador permite filtrar por estructura."
      },
      {
        q: "¿Qué hago si los nombres me suenan todos parecidos?",
        a: "Generá tandas de 30 y descartá las primeras 25. Quedate solo con los nombres que te disparan una imagen mental inmediata. Si ninguno lo hace, modificá los símbolos centrales en tu ficha de mundo y volvé a generar."
      }
    ]
  },
  en: {
    pageTitle: "Secret Society Name Generator | Genfy",
    metaDesc: "Create mysterious names for secret societies, hidden brotherhoods and exclusive clubs with enigmatic aura for your stories and roleplay games.",
    h1: "Secret Society Name Generator",
    intro: "Invent hidden brotherhoods, clandestine lodges and initiatory circles with a single click. Perfect for novels, roleplay games and conspiracy worlds.",
    tag: "Worldbuilding",
    filterLabel: "Structure",
    countLabel: "Amount",
    generateLabel: "Generate names",
    copyLabel: "Copy",
    separator: " ",
    groups: [
      {
        id: "prefix",
        label: "Prefix",
        items: [
          "Order of", "Brotherhood of", "Lodge of", "Circle of", "Confraternity of",
          "Society of", "Council of", "Cabal of", "Syndicate of", "Conclave of",
          "Tribunal of", "Fraternity of", "Assembly of", "Chamber of", "Custodians of",
          "Wardens of", "Sons of", "Daughters of", "Heirs of", "Disciples of",
          "Watchers of", "Sentinels of", "Adepts of", "Initiates of", "Masters of",
          "Scribes of", "Weavers of", "Forgers of", "Sowers of", "Bearers of"
        ]
      },
      {
        id: "adjective",
        label: "Adjective",
        items: [
          "the Hand", "the Eye", "the Veil", "the Key", "the Shadow",
          "the Moon", "the Mirror", "the Ember", "the Thread", "the Dagger",
          "the Quill", "the Seal", "the Flame", "the Tooth", "the Bone",
          "the Needle", "the Cord", "the Ring", "the Skull", "the Star",
          "the Thorn", "the Beacon", "the Heart", "the Mouth", "the Raven",
          "the Clock", "the Throne", "the Pact", "the Claw", "the Page"
        ]
      },
      {
        id: "modifier",
        label: "Modifier",
        items: [
          "Black", "Broken", "Silent", "Crimson", "Unseen",
          "Hollow", "Withered", "Eternal", "Fractured", "Veiled",
          "Burning", "Buried", "Forgotten", "Bleeding", "Frozen",
          "Sleepless", "Forbidden", "Whispering", "Marked", "Wandering",
          "Fallen", "Profane", "Hidden", "Devoured", "Drowned",
          "Trembling", "Splintered", "Bent", "Sleeping", "Blind"
        ]
      },
      {
        id: "suffix",
        label: "Suffix",
        items: [
          "of the North", "of Twilight", "of the Abyss", "of the Wastes", "of Silence",
          "of the Thirteen", "of Sundown", "of the Void", "of Steel", "of the Old Pact",
          "of the Eighth Hour", "of Ashes", "of the Tenth Seal", "of the Blind Knot", "of the Mist",
          "of the Broken Mirror", "of the Pit", "of the Last Candle", "of the Grey Mark", "of the Threshold",
          "of the Dead River", "of the Fallen Tower", "of the South Wind", "of the Silver Cord", "of Hour Zero",
          "of the Salt Seal", "of the Hollow Path", "of the Mute Verses", "of the Broken Word", "of the Inverse Key"
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: "How to build credible secret society names",
        body: "<p>A convincing secret society combines three ingredients: an institutional body (Order, Lodge, Confraternity), a central symbol acting as totem (the Hand, the Eye, the Key) and a qualifier hinting at history (Broken, Eternal, Forgotten). When these elements rhyme thematically, the name becomes memorable. For example, <strong>Brotherhood of the Hollow Key of the Pit</strong> already suggests a founding myth.</p><p>Avoid stringing words randomly. The most powerful names in literature, like the Bavarian Illuminati or Yale's Skull and Bones, start from a concrete symbol and build around it. If your society guards a cosmological secret, the suffix should point to a place (of the Pit, of the Threshold). If its mission is surveillance, add <em>Sentinels</em> or <em>Custodians</em> to the prefix.</p><p>Try the tripod rule: the name must reveal who (Brotherhood), what (the Dagger) and where or when (of Hour Zero). If two of those pillars fail, the name sounds empty. Generate variants and read them aloud: those that trip on the tongue get cut.</p>"
      },
      {
        h2: "Uses in novels, roleplay games and cosmic horror campaigns",
        body: "<p>In conspiracy novels in the style of <em>Foucault's Pendulum</em> or <em>The Name of the Rose</em>, a secret society works as a hidden plot engine. It pays to have at least two names in tension: the faction the protagonist discovers first and the true structure behind. If the first is <strong>Confraternity of the Broken Mirror</strong>, the second can be <strong>Tribunal of the Inverse Key</strong>, suggesting a higher hierarchy.</p><p>In D&D and Pathfinder, four-part compound names are ideal for rival groups the party faces across multiple sessions. For Call of Cthulhu or Vaesen, prefer shorter, more evocative names: <strong>Adepts of the Withered Bone</strong> immediately evokes decay and cult.</p><p>In narrative video games, the name must read fast on screen. If it exceeds seven words, players abbreviate it. Design the long name for codices and a short alias for dialogue: <em>the Thirteen</em>, <em>the Black Hand</em>, <em>the Sleepless</em>. That duality adds depth.</p>"
      },
      {
        h2: "Common mistakes when inventing fictional brotherhoods",
        body: "<p>The first mistake is over-stacking adjectives: <strong>Eternal Bleeding Confraternity of the Withered Forgotten Shadow</strong> sounds like parody, not threat. Stick to a single strong modifier. The second mistake is repeating concepts: <em>Order of the Burning Flame</em> is redundant, while <em>Order of the Hollow Flame</em> opens questions.</p><p>Another frequent failure is choosing overused symbols without reinventing them. Skull, moon and rose appear in hundreds of works. If you use them, cross with an unexpected suffix: <strong>Sowers of the Skull of the Dead River</strong> sets your society apart from the generic <em>Order of the Black Skull</em>.</p><p>Watch idiomatic coherence. If your world has Latinate tradition, mixing terms like <em>Syndicate</em> (modern) with <em>Cabal</em> (medieval) can clash. Define register before generating and filter results that break tone. Finally, read the full name: if you can't repeat it from memory after two readings, neither will readers.</p>"
      },
      {
        h2: "From idea to canon: developing the society after naming",
        body: "<p>Having a name is just the start. Once generated, write a sheet with: founding (century, motive), visible symbol (ring, tattoo, brooch), ritual greeting or sign, internal hierarchy (at least three ranks) and historical enemy. Without these five elements, the society stays cardboard.</p><p>A pro trick: turn the name into myth. If your society is <strong>Wardens of the Broken Needle</strong>, write a founding legend where a real needle (clock? compass?) shattered and scattered. Each fragment is now a relic the order seeks or guards. The metaphor becomes a MacGuffin.</p><p>Also define what happens when someone breaks the oath: exile, branding, execution? Consequences add weight. And reserve three facts as author's secret: things you know but readers will never explicitly learn. That hidden info filters coherence even if never stated. The names generated here are the spark; later worldbuilding is the bonfire.</p>"
      }
    ],
    faq: [
      {
        q: "Can I use these names commercially in my novel or video game?",
        a: "Yes. Generated names are free combinations and not protected. We recommend googling the final result to confirm it doesn't match registered trademarks or real historical societies."
      },
      {
        q: "How do I choose between two generated names I like equally?",
        a: "Say both aloud three times. The one that trips on the tongue or loses force when repeated gets cut. Also test if it works as natural abbreviation: if <em>Brotherhood of the Hollow Key</em> reduces well to <em>the Keyholders</em>, it has a future."
      },
      {
        q: "Do these names work for contemporary settings or only medieval?",
        a: "Both. For modern tone (thriller, urban conspiracy), prefer prefixes like <em>Syndicate</em>, <em>Chamber</em> or <em>Council</em>. For medieval or gothic tone, use <em>Confraternity</em>, <em>Lodge</em> or <em>Order</em>. The generator lets you filter by structure."
      },
      {
        q: "What do I do if all names sound similar?",
        a: "Generate batches of 30 and discard the first 25. Keep only names that trigger immediate mental images. If none does, change central symbols in your world sheet and regenerate."
      }
    ]
  }
};
