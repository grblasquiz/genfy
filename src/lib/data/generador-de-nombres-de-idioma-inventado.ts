import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-nombres-de-idioma-inventado', en: 'constructed-language-name-generator' },
  category: 'fun',
  emoji: '🗣️',
  mode: 'combine',
  es: {
    pageTitle: 'Generador de Nombres de Idioma Inventado | Genfy',
    metaDesc: 'Creá nombres de idiomas ficticios y lenguas inventadas para worldbuilding lingüístico y culturas alienígenas. Conlangs nombrados al instante.',
    h1: 'Generador de Nombres de Idioma Inventado',
    intro: 'Bautizá tus conlangs y lenguas ficticias: idiomas élficos, dialectos enanos, jergas piratas, lenguas alienígenas y proto-lenguas extintas.',
    tag: 'Worldbuilding',
    filterLabel: 'Estilo',
    countLabel: 'Cantidad',
    generateLabel: 'Generar nombres',
    copyLabel: 'Copiar',
    separator: ' ',
    groups: [
      {
        id: 'root',
        label: 'Raíz cultural',
        items: [
          'Vael', 'Mor', 'Khar', 'Sel', 'Nyx', 'Aer', 'Tor', 'Ish',
          'Lir', 'Kael', 'Bren', 'Ozz', 'Thal', 'Rhia', 'Vor', 'Sin',
          'Drel', 'Mael', 'Yur', 'Kal', 'Sef', 'Vir', 'Tir', 'Mok',
          'Hel', 'Run', 'Vas', 'Khor', 'Lis', 'Aen', 'Tyr', 'Bal',
          'Iri', 'Var', 'Sol', 'Lun', 'Yev', 'Quel', 'Aza', 'Old'
        ]
      },
      {
        id: 'suffix',
        label: 'Sufijo lingüístico',
        items: [
          '-ano', '-és', '-ico', '-eño', '-ino', '-ardo', '-aico',
          '-ariano', '-iano', '-ico antiguo', '-ico clásico', '-ico vulgar', '-ico arcaico',
          '-iano', '-eano', '-iano antiguo', '-iano alto', '-iano bajo', '-iano común',
          'aniano', 'oriano', 'ariano', 'eriano', 'iliano', 'oniano',
          '-an', '-ic', '-en', '-ish', '-an antiguo', '-ic medio',
          '-otongo', '-úa', '-uí', '-ía', '-ari', '-uri',
          '-arino del norte', '-arino del sur', '-arino oriental', '-arino occidental',
          '-uto', '-uta', '-ura', '-arios'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'Antiguo', 'Clásico', 'Vulgar', 'Arcaico', 'Moderno', 'Medio',
          'Alto', 'Bajo', 'Común', 'Sagrado', 'Litúrgico', 'Cortesano',
          'Plebeyo', 'Imperial', 'Real', 'Tribal', 'Ceremonial', 'Cotidiano',
          'Escrito', 'Hablado', 'Oral', 'Susurrado', 'Cantado', 'Silbado',
          'del Norte', 'del Sur', 'del Este', 'del Oeste', 'Continental', 'Insular',
          'de las Cumbres', 'de los Valles', 'del Bosque', 'del Mar',
          'de los Sabios', 'de los Druidas', 'de los Sacerdotes', 'de los Mercaderes',
          'de los Caminos', 'de los Marineros'
        ]
      },
      {
        id: 'origin',
        label: 'Origen narrativo',
        items: [
          'hablado por elfos del bosque eterno', 'usado por enanos en sus minas', 'preservado por druidas exiliados',
          'cantado por hadas en festivales', 'gritado por orcos en batalla', 'susurrado por nigromantes',
          'codificado por la corte imperial', 'simplificado para mercaderes ambulantes', 'enseñado solo a iniciados',
          'prohibido tras la última guerra', 'extinto desde la caída del imperio', 'restaurado por arqueólogos lingüistas',
          'evolucionado de proto-lengua común', 'derivado de tres dialectos antiguos', 'aislado por barrera geográfica',
          'desarrollado por culto religioso', 'creado para diplomacia neutral', 'inventado por filósofos racionalistas',
          'transmitido por tradición oral', 'recogido en pergaminos prohibidos', 'tallado en monolitos antiguos',
          'usado en rituales nocturnos', 'reservado para ceremonias funerarias', 'enseñado a niños desde nacimiento',
          'aprendido en academias secretas', 'transmitido entre gemelos místicos', 'compartido con animales sagrados',
          'codificado en patrones musicales', 'expresado en gestos rituales', 'mezclado con lengua de signos',
          'tonal con cuatro pitches semánticos', 'aglutinante con sufijos infinitos', 'analítico con orden estricto SVO',
          'ergativo con marcado inverso', 'polipersonal con concordancia múltiple', 'evidencialista con marcado obligatorio',
          'rico en consonantes laterales', 'rico en vocales nasales', 'sin distinción entre verbos y sustantivos',
          'con sistema honorífico de cinco niveles', 'sin marcas de tiempo gramatical'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo nombrar idiomas inventados con autenticidad',
        body: '<p>Los idiomas reales tienen nombres que reflejan origen geográfico o cultural. <em>Español</em> viene de <em>Hispania</em>; <em>francés</em> de los <em>francos</em>; <em>quechua</em> es palabra de los hablantes para designarse. Cuando bautices tu conlang, seguí ese patrón: el nombre debe sembrar pista sobre quién lo habla, dónde se habla o qué papel cumple en la cultura.</p><p>La fórmula que rinde combina <strong>raíz cultural</strong> (Vael, Khar, Sel) con <strong>sufijo lingüístico</strong> (-ano, -ico, -ish) y <strong>descriptor narrativo</strong> (Antiguo, Sagrado, del Norte). <em>Vaeliano Antiguo del Norte</em> ya carga información: existe variante moderna, hay versión sureña, está asociado a momento histórico anterior. Esa estructura imita realismo de <em>latín vulgar</em>, <em>griego clásico</em>, <em>chino mandarín</em>.</p><p>Para mundos con varias culturas, definí relaciones genealógicas. <em>Vaeliano Antiguo</em> es proto-lengua de la cual derivan <em>Vaeliano del Norte</em> (élfico moderno) y <em>Vaeliano Vulgar</em> (humano simplificado). Esa estratificación lingüística da profundidad histórica sin necesidad de inventar gramática completa. Tolkien hizo esto con <em>Quenya</em> (alto élfico arcaico) y <em>Sindarin</em> (élfico común derivado).</p>'
      },
      {
        h2: 'Aplicaciones para fantasía, sci-fi y conlangs',
        body: '<p>En fantasía épica, los idiomas marcan identidad cultural. Tolkien dedicó vida entera a desarrollar <em>Quenya</em>, <em>Sindarin</em>, <em>Khuzdul</em>, <em>Lengua Negra</em>; cada uno comunica algo sobre su pueblo. Los enanos hablan algo gutural y cerrado porque viven bajo tierra; los elfos algo melódico y abierto porque viven entre árboles. Tu naming debe reflejar esa correspondencia entre fonética y cultura.</p><p>Para sci-fi con culturas alienígenas, los nombres pueden romper convenciones humanas. <em>Klingoniano</em>, <em>Vulcaniano</em>, <em>Na\'vi</em> son nombres traducidos para audiencia humana; los hablantes originales los llamarán de otra forma. Esa duplicidad enriquece worldbuilding: <em>el idioma que nosotros llamamos Klingoniano se llama tlhIngan Hol</em>. Esa nota de traducción sembra autenticidad.</p><p>Para conlangs sin universo asociado (Esperanto, Lojban, Toki Pona), el nombre suele tener intención filosófica. <em>Esperanto</em> significa "el que espera"; <em>Toki Pona</em> es "lengua simple"; <em>Lojban</em> es "lengua lógica". Si tu conlang tiene propósito (auxiliar, lógica, artística), el nombre debe declararlo. Esa transparencia ideológica atrae adopción de hablantes interesados en el proyecto filosófico.</p>'
      },
      {
        h2: 'Errores comunes al nombrar idiomas inventados',
        body: '<p>Primer error: nombres derivativos sin variación. <em>Élfico</em>, <em>Enano</em>, <em>Orco</em> son etiquetas genéricas que mil mundos ya usaron. Mejor nombrar específicamente: <em>Vaeliano</em> en vez de <em>Élfico</em>, <em>Khuzdul</em> en vez de <em>Enano</em>. Los hablantes de un idioma rara vez se autodenominan por raza ("hablo Humano" suena raro); usan nombre cultural propio.</p><p>Segundo error: ignorar la fonotáctica. Si tu idioma se llama <em>Pkhrzthngi</em>, suena impronunciable y los lectores lo evitan. Los nombres reales de idiomas suelen tener entre 2 y 4 sílabas con estructura consonante-vocal alterna: <em>Quechua</em>, <em>Suajili</em>, <em>Mandarín</em>. Si tu nombre supera 5 sílabas o acumula consonantes, simplifícalo. <em>Vaeliano</em> es mejor que <em>Vaelirthandiriano</em>.</p><p>Tercer error: incoherencia entre nombre del idioma y palabras del idioma. Si tu idioma se llama <em>Mellifluo</em> pero las palabras son <em>krpzthk</em> y <em>vrgzn</em>, hay desconexión sonora. El nombre del idioma debe muestrear su propia fonética. <em>Quenya</em> usa sonidos típicos del Quenya; tu conlang debe hacer lo mismo. Si la mayoría de palabras tienen vocales abiertas y consonantes suaves, el nombre del idioma debe reflejarlo.</p>'
      },
      {
        h2: 'Construir tradición lingüística para tu mundo',
        body: '<p>Un idioma no existe en vacío: vive en gramática, literatura y rituales. Para cada conlang relevante, definí: ¿qué orden de palabras predomina (SVO, SOV, VSO)? ¿tiene casos gramaticales o usa preposiciones? ¿distingue tiempo verbal o aspecto? Esas decisiones afectan cómo tus personajes piensan en ese idioma. Los hablantes de Quenya, lengua aglutinante con muchos casos, expresan ideas largas y filosóficas en pocas palabras compuestas.</p><p>La literatura preservada importa. ¿Qué textos sobreviven en tu idioma antiguo? ¿poemas épicos como Beowulf, tratados religiosos como los Vedas, registros administrativos como las tablillas sumerias? Esa elección moldea qué pueblos lo conservan: monasterios élficos guardan poesía; secretarios humanos preservan recibos comerciales. Tus personajes investigan idiomas extintos descifrando esos textos.</p><p>Los idiomas también marcan estatus social. En tu mundo, ¿quién aprende qué idioma? Un noble del reino del norte podría aprender Vaeliano Antiguo como signo de educación; un campesino habla solo Vaeliano Vulgar. Cuando tu protagonista cita verso en idioma muerto, demuestra clase culta sin que lo digas explícitamente. Esa estratificación lingüística enriquece diálogos y conflictos: dos personajes hablando el mismo idioma pero con registros distintos transmiten tensión social inmediata.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuántos idiomas debe tener un mundo de fantasía?',
        a: 'Para una novela enfocada, 2-3 idiomas con identidad clara alcanzan. Para sagas épicas, 5-7 con familias relacionadas (proto-lengua, derivados modernos, dialectos regionales). Tolkien tenía decenas pero la mayoría solo aparecen como nombres; nadie escribe gramáticas completas para todos.'
      },
      {
        q: '¿Es necesario inventar gramática completa o solo nombres?',
        a: 'Para mayoría de fantasía, basta con: nombre del idioma, 20-30 palabras significativas, una frase ceremonial memorable. Tolkien fue excepción; Sanderson y Martin definen idiomas mucho menos detalladamente y funciona narrativamente. Solo invertí tiempo gramatical si el idioma es protagonista de tu historia.'
      },
      {
        q: '¿Cómo manejo idiomas múltiples en diálogo de novela?',
        a: 'Tres técnicas: cursivas con traducción ("<em>Mellon</em>", <em>amigo</em> en élfico), sin cursivas pero con contexto que aclara, o italiana directa con guía al final del libro. Tolkien usa todas. Para lectores casuales, cursiva más traducción inmediata es lo más cómodo. Reservá idioma sin traducir solo para frases ceremoniales o tensión narrativa.'
      },
      {
        q: '¿Funcionan estos nombres para conlangs reales tipo Esperanto?',
        a: 'Sí, especialmente si querés sumar conlang artístico a tu portafolio sin pretensiones lingüísticas profundas. Para conlangs serios (Klingon, Dothraki, Valyrian), conviene contratar conlanger profesional como David J. Peterson. Pero para conlang amateur con nombre evocador, esta herramienta da punto de partida sólido.'
      }
    ]
  },
  en: {
    pageTitle: 'Constructed Language Name Generator | Genfy',
    metaDesc: 'Create fictional language and invented tongue names for linguistic worldbuilding and alien cultures. Named conlangs instantly.',
    h1: 'Constructed Language Name Generator',
    intro: 'Christen your conlangs and fictional languages: Elvish tongues, Dwarven dialects, pirate slang, alien languages and extinct proto-tongues.',
    tag: 'Worldbuilding',
    filterLabel: 'Style',
    countLabel: 'Amount',
    generateLabel: 'Generate names',
    copyLabel: 'Copy',
    separator: ' ',
    groups: [
      {
        id: 'root',
        label: 'Cultural root',
        items: [
          'Vael', 'Mor', 'Khar', 'Sel', 'Nyx', 'Aer', 'Tor', 'Ish',
          'Lir', 'Kael', 'Bren', 'Ozz', 'Thal', 'Rhia', 'Vor', 'Sin',
          'Drel', 'Mael', 'Yur', 'Kal', 'Sef', 'Vir', 'Tir', 'Mok',
          'Hel', 'Run', 'Vas', 'Khor', 'Lis', 'Aen', 'Tyr', 'Bal',
          'Iri', 'Var', 'Sol', 'Lun', 'Yev', 'Quel', 'Aza', 'Old'
        ]
      },
      {
        id: 'suffix',
        label: 'Linguistic suffix',
        items: [
          '-an', '-ish', '-ic', '-ese', '-ine', '-ard', '-aic',
          '-arian', '-ian', '-ic Old', '-ic Classical', '-ic Vulgar', '-ic Archaic',
          '-ian', '-ean', '-ian Old', '-ian High', '-ian Low', '-ian Common',
          'anian', 'orian', 'arian', 'erian', 'ilian', 'onian',
          '-an', '-ic', '-en', '-ish', '-an Old', '-ic Middle',
          '-otongo', '-ua', '-ui', '-ia', '-ari', '-uri',
          '-arine Northern', '-arine Southern', '-arine Eastern', '-arine Western',
          '-uto', '-uta', '-ura', '-arios'
        ]
      },
      {
        id: 'descriptor',
        label: 'Descriptor',
        items: [
          'Old', 'Classical', 'Vulgar', 'Archaic', 'Modern', 'Middle',
          'High', 'Low', 'Common', 'Sacred', 'Liturgical', 'Courtly',
          'Plebeian', 'Imperial', 'Royal', 'Tribal', 'Ceremonial', 'Everyday',
          'Written', 'Spoken', 'Oral', 'Whispered', 'Sung', 'Whistled',
          'Northern', 'Southern', 'Eastern', 'Western', 'Continental', 'Insular',
          'of the Peaks', 'of the Valleys', 'of the Forest', 'of the Sea',
          'of the Sages', 'of the Druids', 'of the Priests', 'of the Merchants',
          'of the Roads', 'of the Sailors'
        ]
      },
      {
        id: 'origin',
        label: 'Narrative origin',
        items: [
          'spoken by elves of the eternal forest', 'used by dwarves in their mines', 'preserved by exiled druids',
          'sung by fae at festivals', 'shouted by orcs in battle', 'whispered by necromancers',
          'codified by the imperial court', 'simplified for traveling merchants', 'taught only to initiates',
          'forbidden after the last war', 'extinct since the empire fell', 'restored by linguistic archaeologists',
          'evolved from common proto-language', 'derived from three ancient dialects', 'isolated by geographic barrier',
          'developed by religious cult', 'created for neutral diplomacy', 'invented by rationalist philosophers',
          'transmitted through oral tradition', 'collected in forbidden scrolls', 'carved on ancient monoliths',
          'used in nocturnal rituals', 'reserved for funerary ceremonies', 'taught to children from birth',
          'learned in secret academies', 'transmitted between mystic twins', 'shared with sacred animals',
          'encoded in musical patterns', 'expressed in ritual gestures', 'mixed with sign language',
          'tonal with four semantic pitches', 'agglutinative with infinite suffixes', 'analytic with strict SVO order',
          'ergative with inverse marking', 'polypersonal with multiple agreement', 'evidentialist with mandatory marking',
          'rich in lateral consonants', 'rich in nasal vowels', 'with no verb-noun distinction',
          'with five-level honorific system', 'without grammatical tense markers'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to name invented languages with authenticity',
        body: '<p>Real languages have names reflecting geographic or cultural origin. <em>Spanish</em> comes from <em>Hispania</em>; <em>French</em> from the <em>Franks</em>; <em>Quechua</em> is a word the speakers use to designate themselves. When you christen your conlang, follow that pattern: the name should plant a clue about who speaks it, where it\'s spoken or what role it plays in the culture.</p><p>The working formula combines <strong>cultural root</strong> (Vael, Khar, Sel) with <strong>linguistic suffix</strong> (-an, -ic, -ish) and <strong>narrative descriptor</strong> (Old, Sacred, Northern). <em>Old Northern Vaelian</em> already carries information: there\'s a modern variant, there\'s a southern version, it\'s associated with an earlier historical moment. That structure mimics the realism of <em>vulgar Latin</em>, <em>classical Greek</em>, <em>Mandarin Chinese</em>.</p><p>For worlds with multiple cultures, define genealogical relationships. <em>Old Vaelian</em> is the proto-language from which <em>Northern Vaelian</em> (modern Elvish) and <em>Vulgar Vaelian</em> (simplified human) derive. That linguistic stratification gives historical depth without needing to invent complete grammar. Tolkien did this with <em>Quenya</em> (archaic high Elvish) and <em>Sindarin</em> (common derived Elvish).</p>'
      },
      {
        h2: 'Applications for fantasy, sci-fi and conlangs',
        body: '<p>In epic fantasy, languages mark cultural identity. Tolkien dedicated his entire life to developing <em>Quenya</em>, <em>Sindarin</em>, <em>Khuzdul</em>, <em>Black Speech</em>; each communicates something about its people. Dwarves speak something guttural and closed because they live underground; elves something melodic and open because they live among trees. Your naming should reflect that correspondence between phonetics and culture.</p><p>For sci-fi with alien cultures, names can break human conventions. <em>Klingon</em>, <em>Vulcan</em>, <em>Na\'vi</em> are translated names for human audience; original speakers would call them otherwise. That duplicity enriches worldbuilding: <em>the language we call Klingon is called tlhIngan Hol</em>. That translation note plants authenticity.</p><p>For conlangs without associated universe (Esperanto, Lojban, Toki Pona), the name often has philosophical intention. <em>Esperanto</em> means "one who hopes"; <em>Toki Pona</em> is "simple language"; <em>Lojban</em> is "logical language". If your conlang has purpose (auxiliary, logical, artistic), the name should declare it. That ideological transparency attracts adoption from speakers interested in the philosophical project.</p>'
      },
      {
        h2: 'Common mistakes when naming invented languages',
        body: '<p>First mistake: derivative names without variation. <em>Elvish</em>, <em>Dwarvish</em>, <em>Orcish</em> are generic labels a thousand worlds already used. Better name specifically: <em>Vaelian</em> instead of <em>Elvish</em>, <em>Khuzdul</em> instead of <em>Dwarvish</em>. Speakers of a language rarely self-designate by race ("I speak Human" sounds odd); they use their own cultural name.</p><p>Second mistake: ignoring phonotactics. If your language is called <em>Pkhrzthngi</em>, it sounds unpronounceable and readers avoid it. Real language names usually have between 2 and 4 syllables with alternating consonant-vowel structure: <em>Quechua</em>, <em>Swahili</em>, <em>Mandarin</em>. If your name exceeds 5 syllables or stacks consonants, simplify it. <em>Vaelian</em> is better than <em>Vaelirthandirian</em>.</p><p>Third mistake: inconsistency between language name and language words. If your language is called <em>Mellifluous</em> but words are <em>krpzthk</em> and <em>vrgzn</em>, there\'s sonic disconnect. The language name should sample its own phonetics. <em>Quenya</em> uses typical Quenya sounds; your conlang should do the same. If most words have open vowels and soft consonants, the language name should reflect that.</p>'
      },
      {
        h2: 'Building linguistic tradition for your world',
        body: '<p>A language doesn\'t exist in vacuum: it lives in grammar, literature and rituals. For each relevant conlang, define: what word order predominates (SVO, SOV, VSO)? does it have grammatical cases or use prepositions? does it distinguish tense or aspect? Those decisions affect how your characters think in that language. Quenya speakers, agglutinative language with many cases, express long philosophical ideas in few compound words.</p><p>Preserved literature matters. What texts survive in your ancient language? Epic poems like Beowulf, religious treatises like the Vedas, administrative records like Sumerian tablets? That choice shapes which peoples preserve it: Elvish monasteries keep poetry; human secretaries preserve commercial receipts. Your characters research extinct languages by deciphering those texts.</p><p>Languages also mark social status. In your world, who learns which language? A noble of the northern kingdom might learn Old Vaelian as sign of education; a peasant speaks only Vulgar Vaelian. When your protagonist quotes verse in dead language, they demonstrate cultured class without you saying it explicitly. That linguistic stratification enriches dialogues and conflicts: two characters speaking the same language but with different registers convey immediate social tension.</p>'
      }
    ],
    faq: [
      {
        q: 'How many languages should a fantasy world have?',
        a: 'For a focused novel, 2-3 languages with clear identity is enough. For epic sagas, 5-7 with related families (proto-language, modern derivatives, regional dialects). Tolkien had dozens but most appear only as names; nobody writes complete grammars for all.'
      },
      {
        q: 'Is it necessary to invent complete grammar or just names?',
        a: 'For most fantasy, enough to have: language name, 20-30 significant words, one memorable ceremonial phrase. Tolkien was exception; Sanderson and Martin define languages much less in detail and it works narratively. Only invest grammatical time if the language is protagonist of your story.'
      },
      {
        q: 'How do I handle multiple languages in novel dialogue?',
        a: 'Three techniques: italics with translation ("<em>Mellon</em>", <em>friend</em> in Elvish), no italics but with clarifying context, or direct italics with end-of-book glossary. Tolkien uses all. For casual readers, italics plus immediate translation is most comfortable. Reserve untranslated language only for ceremonial phrases or narrative tension.'
      },
      {
        q: 'Do these names work for real conlangs like Esperanto?',
        a: 'Yes, especially if you want to add an artistic conlang to your portfolio without deep linguistic pretensions. For serious conlangs (Klingon, Dothraki, Valyrian), it\'s worth hiring a professional conlanger like David J. Peterson. But for amateur conlang with evocative name, this tool gives a solid starting point.'
      }
    ]
  }
};
