import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-desafios-creativos', en: 'creative-challenge-generator' },
  category: 'inspiration',
  emoji: '🎨',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de Desafíos Creativos | Genfy',
    metaDesc: 'Generá desafíos diarios para artistas, diseñadores y escritores que buscan vencer el bloqueo creativo. Ejercicios concretos para destrabar tu práctica.',
    h1: 'Generador de Desafíos Creativos',
    intro: 'Rompé el bloqueo con ejercicios concretos: desafíos para ilustradores, escritores, diseñadores y músicos que necesitan empujones diarios.',
    tag: 'Inspiración',
    filterLabel: 'Disciplina',
    countLabel: 'Cantidad',
    generateLabel: 'Generar desafíos',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'visual',
        label: 'Artes visuales',
        items: [
          'Dibujá tu desayuno usando solo tres colores que normalmente no usarías juntos',
          'Ilustrá la misma escena en tres estilos: realista, caricatura y abstracto',
          'Pintá un autorretrato sin mirarte al espejo, solo de memoria',
          'Diseñá una flor que no existe en la naturaleza pero que parezca posible',
          'Hacé un sketch de 30 segundos cada hora durante todo un día',
          'Reinterpretá una obra clásica cambiando la época a 2090',
          'Dibujá un objeto desde un ángulo imposible (debajo, dentro, atrás)',
          'Creá una ilustración usando solo formas geométricas básicas',
          'Pintá la emoción "nostalgia" sin usar caras ni personas',
          'Dibujá tu hogar como lo vería un fantasma del año 1850',
          'Hacé un collage con basura del día y fotografialo',
          'Diseñá la portada de un libro que aún no fue escrito',
          'Ilustrá un sueño raro que tuviste en la última semana',
          'Pintá un paisaje usando solo el color complementario al esperado',
          'Hacé 50 thumbnails de personajes en una hora sin borrar ninguno',
          'Dibujá la misma manzana 10 veces, cada una en un estilo distinto',
          'Creá un patrón decorativo a partir de una palabra escrita 100 veces',
          'Ilustrá el sonido de un instrumento musical sin mostrarlo',
          'Pintá el mismo árbol en cuatro estaciones distintas',
          'Diseñá un personaje cuya silueta se reconozca a 100 metros',
          'Hacé una serie de 5 retratos del mismo desconocido del subte',
          'Creá una ilustración inspirada en una receta de cocina antigua',
          'Pintá una habitación que solo existe en tu memoria de la infancia',
          'Diseñá el logo de una empresa ficticia que vende emociones',
          'Hacé una ilustración usando solo materiales encontrados en la cocina',
          'Dibujá tres versiones del mismo personaje en distintas edades',
          'Creá una postal turística de un planeta inventado',
          'Ilustrá una metáfora literal: "tener mariposas en el estómago"'
        ]
      },
      {
        id: 'writing',
        label: 'Escritura',
        items: [
          'Escribí una historia de 100 palabras donde nadie diga lo que siente',
          'Redactá un diálogo entre dos personas que se odian sin que se digan nada hostil',
          'Escribí la primera página de una novela usando solo frases de cuatro palabras',
          'Creá un personaje basado en un olor específico que recordás de la infancia',
          'Escribí una escena de despedida en un aeropuerto desde la perspectiva del piloto',
          'Redactá un cuento que empiece y termine con la misma frase exacta',
          'Escribí 10 primeras líneas de novelas que nunca vas a escribir',
          'Creá un poema sobre la luz de tu habitación a las 3 AM',
          'Redactá un email de disculpa que el receptor nunca leerá',
          'Escribí una receta detallada de un plato emocional, no comestible',
          'Creá un diario ficticio de un objeto inanimado durante una semana',
          'Escribí una historia donde el villano gane y eso sea bueno para todos',
          'Redactá un obituario para una idea que abandonaste',
          'Escribí un capítulo entero usando solo diálogo, sin descripciones',
          'Creá un cuento donde el clima sea el protagonista principal',
          'Redactá una entrevista a un personaje histórico fallecido en 1820',
          'Escribí una historia de amor sin usar las palabras amor, corazón o romance',
          'Creá una escena de tensión donde no pase nada físicamente',
          'Redactá tres versiones del mismo evento desde tres testigos distintos',
          'Escribí una carta a tu yo de hace 10 años con un solo consejo',
          'Creá un cuento basado en la última imagen que viste antes de dormir',
          'Redactá un diálogo entre dos personajes que comparten un secreto sin mencionarlo',
          'Escribí una historia que empiece in medias res sin contexto previo',
          'Creá un personaje memorable usando solo tres detalles físicos',
          'Redactá una escena ambientada exactamente en tu cuarto pero en otra época',
          'Escribí un cuento donde un objeto cotidiano tenga vida propia',
          'Creá una escena de discusión donde ambos personajes tengan razón',
          'Redactá una historia donde el final cambie completamente el inicio'
        ]
      },
      {
        id: 'design',
        label: 'Diseño',
        items: [
          'Rediseñá el logo de tu marca favorita en 30 minutos sin computadora',
          'Diseñá una app que solo se use una vez en la vida y sea memorable',
          'Creá tres versiones de un poster de evento usando solo tipografía',
          'Diseñá la identidad visual de una panadería de 200 años atrás',
          'Rediseñá un objeto cotidiano para que dure 50 años más',
          'Creá un sistema de iconos para emociones que no tienen nombre',
          'Diseñá la portada de un álbum musical inspirada en un sabor',
          'Rediseñá tu currículum como si fuera un menú de restaurante',
          'Creá un brand book para una marca que solo existe los domingos',
          'Diseñá un empaque que se transforme en otra cosa al abrirse',
          'Rediseñá un cartel público mejorando su accesibilidad',
          'Creá tres paletas de color a partir de tres canciones distintas',
          'Diseñá una infografía sobre algo trivial pero con tono dramático',
          'Rediseñá el control remoto del televisor reduciéndolo a 5 botones',
          'Creá un cartel para un evento que ocurre solo en tus sueños',
          'Diseñá el dashboard de una app que ya no existe pero usaste mucho',
          'Rediseñá tu cocina para alguien que cocina por primera vez',
          'Creá una identidad visual basada en un fenómeno meteorológico',
          'Diseñá un libro que se lea de derecha a izquierda y sea coherente',
          'Rediseñá la señalética del subte para una persona ciega que la ve',
          'Creá un sistema gráfico para representar el silencio',
          'Diseñá el manual de instrucciones de un sentimiento',
          'Rediseñá un envase que cuente la historia del producto sin texto',
          'Creá un poster minimalista de tu película favorita usando solo 3 elementos',
          'Diseñá una interface para alguien que nunca usó tecnología',
          'Rediseñá tu firma como un logotipo personal funcional',
          'Creá un calendario donde cada mes tenga una identidad visual única',
          'Diseñá un libro de cuentos que también funcione como objeto decorativo'
        ]
      },
      {
        id: 'music',
        label: 'Música y sonido',
        items: [
          'Componé una melodía usando solo cinco notas durante toda la pieza',
          'Creá un beat con sonidos grabados de tu cocina',
          'Improvisá durante 10 minutos sin parar y subí lo que salió',
          'Componé una canción cuya letra sea solo una pregunta repetida',
          'Recreá una canción famosa cambiando completamente su género',
          'Grabá un foley de una escena imaginaria sin instrumentos',
          'Componé en un tempo extraño (5/4 o 7/8) durante un minuto',
          'Hacé un loop de 8 segundos que pueda escucharse en bucle 1 hora',
          'Componé música para una emoción que no tiene nombre en español',
          'Creá una melodía a partir de tu número telefónico convertido en notas',
          'Grabá tres versiones de la misma melodía en tres estados de ánimo',
          'Componé un tema sin tonalidad clara que igual sea memorable',
          'Hacé una canción de cuna para alguien que tenga miedo de dormir',
          'Creá un soundscape que represente una ciudad ficticia',
          'Componé una pieza inspirada en el sonido del mar sin samplear mar',
          'Hacé una canción que dure exactamente lo que tarda hervir agua',
          'Componé un tema con la estructura inversa de tu canción favorita',
          'Grabá un cover de tu mismo tema más viejo y compará las versiones',
          'Creá una melodía que solo use sonidos de objetos no musicales',
          'Componé un coro pegadizo en menos de 15 minutos sin pensar mucho',
          'Hacé una versión a cappella de un instrumento usando solo tu voz',
          'Componé un tema basado en el ritmo de una conversación grabada',
          'Creá un instrumental que cuente una historia con tres actos claros',
          'Grabá un ritmo solo con palmas, chasquidos y zapateos',
          'Componé un tema donde el silencio sea más importante que el sonido',
          'Hacé un beat usando exclusivamente sonidos vocales modificados',
          'Creá una pieza de un solo acorde que dure 5 minutos sin aburrir',
          'Componé un jingle para una marca que aún no inventaste'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Por qué los desafíos creativos funcionan contra el bloqueo',
        body: '<p>El bloqueo creativo casi nunca es falta de ideas: es exceso de autoexigencia. Tu cerebro filtra propuestas tachándolas de "no lo suficientemente buenas" antes de que lleguen al papel. Los desafíos diarios desactivan ese filtro porque la consigna externa libera de la presión de originalidad pura. Si la regla dice "dibujá tu desayuno en tres colores raros", no estás creando arte trascendente, estás cumpliendo un ejercicio.</p><p>Estudios sobre creatividad de Teresa Amabile (Harvard) muestran que las restricciones aumentan la producción creativa, no la limitan. Por eso los haikus, los sonetos y las películas con presupuesto bajo a menudo superan a obras con libertad total. Un desafío bien formulado da estructura mínima y libertad máxima dentro de ella.</p><p>La práctica diaria importa más que la duración. Hacer un sketch de 5 minutos cada día durante 30 días produce más mejora que un maratón de 8 horas el último sábado del mes. Establecé una hora fija (mañana antes del trabajo, noche antes de dormir) y un espacio dedicado. La consistencia construye memoria muscular y desarrolla intuición creativa que ningún taller intensivo puede dar.</p>'
      },
      {
        h2: 'Cómo elegir desafíos según tu disciplina',
        body: '<p>Para artistas visuales, alterná entre desafíos de observación (dibujá lo que ves) y de invención (dibujá lo que no existe). El balance evita estancarse en una zona de confort. Si llevás meses haciendo retratos de fotos, un desafío de imaginación pura como "diseñá una flor que no existe" rompe automatismos.</p><p>Para escritores, los ejercicios de restricción funcionan mejor que los temas abiertos. "Escribí lo que quieras" rara vez produce; "escribí una historia de 100 palabras sin verbos en pasado" obliga a problemas concretos. Raymond Queneau y el grupo Oulipo basaron toda una poética en esto: las constraints generan creatividad, no la matan.</p><p>Para diseñadores, los desafíos cross-disciplinarios son oro. Un diseñador gráfico que pasa una semana haciendo ejercicios de fotografía, otra de tipografía manual y otra de modelado 3D vuelve al brief comercial con mirada renovada. Los desafíos también deben tensar tus debilidades: si nunca dibujaste tipografía a mano, exponerte ahí construye habilidad transferible al trabajo digital.</p>'
      },
      {
        h2: 'Errores comunes que sabotean los desafíos',
        body: '<p>Primer error: querer que cada desafío produzca obra final compartible. Los desafíos son entrenamiento, no entregables. Si publicás cada ejercicio en redes esperando likes, vas a empezar a hacer lo que crees que gusta y perderás el espíritu exploratorio. Hacé un cuaderno o carpeta privada para los desafíos, separada del portfolio público.</p><p>Segundo error: saltar al siguiente desafío antes de terminar el actual. Multitasking creativo divide la atención y dilata el progreso. Comprometete con uno por día, completalo aunque salga mal, y recién mañana abrís el siguiente. La incomodidad de terminar algo malo enseña más que abandonar tres cosas mediocres.</p><p>Tercer error: confundir desafío con productividad. Hacer 50 sketches en una hora sin pensar no es necesariamente mejor que hacer 5 con intención. Los desafíos efectivos tienen propósito específico: practicar perspectiva, explorar paleta limitada, romper hábitos de composición. Antes de empezar, preguntate "¿qué quiero aprender hoy?" y elegí el desafío que apunte a eso. Sin objetivo, los ejercicios se vuelven busy work decorativo.</p>'
      },
      {
        h2: 'Cómo construir una práctica creativa sostenible',
        body: '<p>Los desafíos diarios solo funcionan si se vuelven hábito. Aplicá la regla de los dos minutos de James Clear: hacé el setup tan fácil que sea más esfuerzo no hacerlo. Dejá la libreta abierta en tu escritorio, los pinceles cargados, el documento de Word con la fecha de hoy ya escrita. La fricción mata más prácticas creativas que la falta de talento.</p><p>Acompañate con otros. Comunidades como #the100dayproject en Instagram, prompts de Inktober, NaNoWriMo en noviembre crean accountability social. Saber que otros están haciendo el mismo desafío en otro continente sostiene tu compromiso en días flojos. Buscá un compañero de práctica con el que intercambiar resultados sin juzgar.</p><p>Documentá tu progreso visualmente. Una grilla de 30 sketches del mes muestra evolución que día a día no notás. Esa evidencia visible es combustible para los meses 4 y 5, cuando la novedad se agota y la disciplina se pone difícil. Después de un año de desafíos diarios, vas a tener un cuerpo de trabajo que ningún proyecto comercial te hubiera permitido construir, y la mejora será innegable incluso para vos mismo en tus peores días de duda.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuánto tiempo debe durar cada desafío diario?',
        a: 'Para principiantes, 15-30 minutos diarios alcanzan. Para profesionales, 1-2 horas son sostenibles si forman parte de la rutina laboral. Más de 3 horas diarias suele llevar a burnout en 2-3 semanas. Mejor consistencia con poco tiempo que sesiones largas e irregulares.'
      },
      {
        q: '¿Qué hago si un desafío me sale terrible?',
        a: 'Guardalo igual. Los peores resultados muchas veces enseñan más que los exitosos: te muestran qué evitar, qué necesitás practicar más, qué herramientas te frenan. Después de 30 días, mirá los peores 5 ejercicios; ahí está tu siguiente plan de aprendizaje.'
      },
      {
        q: '¿Sirven los desafíos para profesionales o solo para principiantes?',
        a: 'Funcionan especialmente para profesionales atrapados en estilos comerciales. Cuando hacés siempre lo mismo para clientes, la atrofia creativa es real. Hayao Miyazaki, James Cameron y Lin-Manuel Miranda hablan abiertamente de mantener prácticas paralelas para no acartonarse.'
      },
      {
        q: '¿Cómo combino desafíos creativos con un trabajo full-time?',
        a: 'Reservá 20 minutos antes del trabajo o 30 después de cenar. La clave es bloquear el horario en calendario como si fuera reunión innegociable. Mucha gente progresa más con 20 minutos diarios consistentes que con 4 horas los sábados aleatorios.'
      }
    ]
  },
  en: {
    pageTitle: 'Creative Challenge Generator | Genfy',
    metaDesc: 'Generate daily challenges for artists, designers and writers seeking to overcome creative blocks. Concrete exercises to unlock your practice.',
    h1: 'Creative Challenge Generator',
    intro: 'Break creative block with concrete exercises: challenges for illustrators, writers, designers and musicians who need daily nudges.',
    tag: 'Inspiration',
    filterLabel: 'Discipline',
    countLabel: 'Amount',
    generateLabel: 'Generate challenges',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'visual',
        label: 'Visual arts',
        items: [
          'Draw your breakfast using only three colors you wouldn\'t normally combine',
          'Illustrate the same scene in three styles: realistic, cartoon and abstract',
          'Paint a self-portrait without looking in the mirror, only from memory',
          'Design a flower that doesn\'t exist in nature but seems plausible',
          'Make a 30-second sketch every hour throughout an entire day',
          'Reinterpret a classical work changing the era to 2090',
          'Draw an object from an impossible angle (below, inside, behind)',
          'Create an illustration using only basic geometric shapes',
          'Paint the emotion "nostalgia" without using faces or people',
          'Draw your home as a ghost from 1850 would see it',
          'Make a collage with daily trash and photograph it',
          'Design the cover of a book that hasn\'t been written yet',
          'Illustrate a strange dream you had in the last week',
          'Paint a landscape using only the complementary color to the expected one',
          'Make 50 character thumbnails in an hour without erasing any',
          'Draw the same apple 10 times, each in a different style',
          'Create a decorative pattern from a word written 100 times',
          'Illustrate the sound of a musical instrument without showing it',
          'Paint the same tree across four different seasons',
          'Design a character whose silhouette is recognizable from 100 meters',
          'Make a series of 5 portraits of the same stranger from the subway',
          'Create an illustration inspired by an old cooking recipe',
          'Paint a room that exists only in your childhood memory',
          'Design the logo of a fictional company that sells emotions',
          'Make an illustration using only materials found in the kitchen',
          'Draw three versions of the same character at different ages',
          'Create a tourist postcard of an invented planet',
          'Illustrate a literal metaphor: "having butterflies in your stomach"'
        ]
      },
      {
        id: 'writing',
        label: 'Writing',
        items: [
          'Write a 100-word story where no one says what they feel',
          'Draft a dialogue between two people who hate each other without saying anything hostile',
          'Write the first page of a novel using only four-word sentences',
          'Create a character based on a specific smell you remember from childhood',
          'Write a goodbye scene at an airport from the pilot\'s perspective',
          'Draft a story that begins and ends with the exact same sentence',
          'Write 10 first lines of novels you\'ll never write',
          'Create a poem about the light in your room at 3 AM',
          'Draft an apology email the recipient will never read',
          'Write a detailed recipe for an emotional, non-edible dish',
          'Create a fictional diary of an inanimate object during a week',
          'Write a story where the villain wins and that\'s good for everyone',
          'Draft an obituary for an idea you abandoned',
          'Write an entire chapter using only dialogue, no descriptions',
          'Create a story where weather is the main protagonist',
          'Draft an interview with a historical figure who died in 1820',
          'Write a love story without using the words love, heart or romance',
          'Create a tense scene where physically nothing happens',
          'Draft three versions of the same event from three different witnesses',
          'Write a letter to your 10-year-younger self with one piece of advice',
          'Create a story based on the last image you saw before sleeping',
          'Draft a dialogue between two characters sharing a secret without mentioning it',
          'Write a story that begins in medias res with no prior context',
          'Create a memorable character using only three physical details',
          'Draft a scene set exactly in your room but in another era',
          'Write a story where an everyday object has its own life',
          'Create an argument scene where both characters are right',
          'Draft a story where the ending completely changes the beginning'
        ]
      },
      {
        id: 'design',
        label: 'Design',
        items: [
          'Redesign your favorite brand\'s logo in 30 minutes without a computer',
          'Design an app used only once in a lifetime and make it memorable',
          'Create three versions of an event poster using only typography',
          'Design the visual identity of a bakery from 200 years ago',
          'Redesign an everyday object to last 50 more years',
          'Create an icon system for emotions that have no name',
          'Design a music album cover inspired by a flavor',
          'Redesign your resume as if it were a restaurant menu',
          'Create a brand book for a brand that only exists on Sundays',
          'Design packaging that transforms into something else when opened',
          'Redesign a public sign improving its accessibility',
          'Create three color palettes from three different songs',
          'Design an infographic about something trivial but in dramatic tone',
          'Redesign the TV remote reducing it to 5 buttons',
          'Create a poster for an event that only happens in your dreams',
          'Design the dashboard of an app that no longer exists but you used a lot',
          'Redesign your kitchen for someone cooking for the first time',
          'Create a visual identity based on a meteorological phenomenon',
          'Design a book read right-to-left that\'s coherent that way',
          'Redesign subway signage for a blind person who can see it',
          'Create a graphic system to represent silence',
          'Design the instruction manual for a feeling',
          'Redesign packaging that tells the product\'s story without text',
          'Create a minimalist poster of your favorite movie using only 3 elements',
          'Design an interface for someone who never used technology',
          'Redesign your signature as a functional personal logo',
          'Create a calendar where each month has unique visual identity',
          'Design a story book that also works as a decorative object'
        ]
      },
      {
        id: 'music',
        label: 'Music and sound',
        items: [
          'Compose a melody using only five notes throughout the entire piece',
          'Create a beat with sounds recorded from your kitchen',
          'Improvise for 10 minutes without stopping and upload what came out',
          'Compose a song whose lyrics are just a repeated question',
          'Recreate a famous song completely changing its genre',
          'Record foley for an imaginary scene without instruments',
          'Compose in an unusual time signature (5/4 or 7/8) for one minute',
          'Make an 8-second loop that can be heard for 1 hour without tiring',
          'Compose music for an emotion with no name in your language',
          'Create a melody from your phone number converted into notes',
          'Record three versions of the same melody in three moods',
          'Compose a piece without clear tonality that\'s still memorable',
          'Make a lullaby for someone afraid to sleep',
          'Create a soundscape representing a fictional city',
          'Compose a piece inspired by sea sounds without sampling sea',
          'Make a song lasting exactly the time it takes to boil water',
          'Compose a piece with the inverted structure of your favorite song',
          'Record a cover of your own older song and compare versions',
          'Create a melody using only sounds from non-musical objects',
          'Compose a catchy chorus in less than 15 minutes without overthinking',
          'Make an a cappella version of an instrument using only your voice',
          'Compose a piece based on the rhythm of a recorded conversation',
          'Create an instrumental that tells a story with three clear acts',
          'Record a rhythm only with claps, snaps and stomps',
          'Compose a piece where silence is more important than sound',
          'Make a beat using exclusively modified vocal sounds',
          'Create a single-chord piece lasting 5 minutes without boring',
          'Compose a jingle for a brand you haven\'t invented yet'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Why creative challenges work against block',
        body: '<p>Creative block is rarely lack of ideas: it\'s excess self-demand. Your brain filters proposals as "not good enough" before they reach paper. Daily challenges deactivate that filter because external constraint frees you from pure originality pressure. If the rule says "draw your breakfast in three weird colors", you\'re not creating transcendent art, you\'re completing an exercise.</p><p>Creativity studies by Teresa Amabile (Harvard) show that constraints increase creative output, not limit it. That\'s why haikus, sonnets and low-budget films often outshine works with total freedom. A well-formulated challenge gives minimum structure and maximum freedom within it.</p><p>Daily practice matters more than duration. Doing a 5-minute sketch every day for 30 days produces more improvement than an 8-hour marathon the last Saturday of the month. Set a fixed time (morning before work, evening before sleep) and a dedicated space. Consistency builds muscle memory and develops creative intuition no intensive workshop can deliver.</p>'
      },
      {
        h2: 'How to choose challenges by discipline',
        body: '<p>For visual artists, alternate between observation challenges (draw what you see) and invention challenges (draw what doesn\'t exist). The balance avoids stagnating in one comfort zone. If you\'ve been doing photo portraits for months, a pure imagination challenge like "design a flower that doesn\'t exist" breaks automatisms.</p><p>For writers, restriction exercises work better than open prompts. "Write whatever you want" rarely produces; "write a 100-word story without past-tense verbs" forces concrete problems. Raymond Queneau and the Oulipo group based an entire poetics on this: constraints generate creativity, they don\'t kill it.</p><p>For designers, cross-disciplinary challenges are gold. A graphic designer who spends a week doing photography exercises, another on hand typography and another on 3D modeling returns to commercial briefs with renewed eyes. Challenges should also stretch your weaknesses: if you never drew typography by hand, exposing yourself there builds skills transferable to digital work.</p>'
      },
      {
        h2: 'Common mistakes that sabotage challenges',
        body: '<p>First mistake: wanting every challenge to produce shareable final work. Challenges are training, not deliverables. If you publish every exercise on social media seeking likes, you\'ll start doing what you think people want and lose exploratory spirit. Make a private notebook or folder for challenges, separate from public portfolio.</p><p>Second mistake: jumping to the next challenge before finishing the current one. Creative multitasking divides attention and dilates progress. Commit to one per day, complete it even if it turns out badly, and only tomorrow open the next. The discomfort of finishing something bad teaches more than abandoning three mediocre things.</p><p>Third mistake: confusing challenge with productivity. Doing 50 sketches in an hour without thinking isn\'t necessarily better than doing 5 with intention. Effective challenges have specific purpose: practicing perspective, exploring limited palette, breaking composition habits. Before starting, ask "what do I want to learn today?" and pick the challenge aimed at that. Without objective, exercises become decorative busy work.</p>'
      },
      {
        h2: 'Building a sustainable creative practice',
        body: '<p>Daily challenges only work if they become habit. Apply James Clear\'s two-minute rule: make setup so easy it\'s more effort to skip. Leave the notebook open on your desk, brushes loaded, Word document with today\'s date already written. Friction kills more creative practices than lack of talent.</p><p>Accompany yourself with others. Communities like #the100dayproject on Instagram, Inktober prompts, NaNoWriMo in November create social accountability. Knowing others are doing the same challenge on another continent sustains commitment on weak days. Find a practice partner to exchange results without judgment.</p><p>Document your progress visually. A grid of 30 monthly sketches shows evolution you don\'t notice day-to-day. That visible evidence is fuel for months 4 and 5, when novelty wears off and discipline gets hard. After a year of daily challenges, you\'ll have a body of work no commercial project would have allowed you to build, and improvement will be undeniable even to yourself on your worst doubt days.</p>'
      }
    ],
    faq: [
      {
        q: 'How long should each daily challenge last?',
        a: 'For beginners, 15-30 daily minutes is enough. For professionals, 1-2 hours is sustainable if part of work routine. More than 3 hours daily often leads to burnout in 2-3 weeks. Better consistency with little time than long irregular sessions.'
      },
      {
        q: 'What if a challenge turns out terrible?',
        a: 'Save it anyway. Worst results often teach more than successful ones: they show what to avoid, what needs more practice, what tools slow you down. After 30 days, look at the worst 5 exercises; that\'s your next learning plan.'
      },
      {
        q: 'Are challenges for professionals or only beginners?',
        a: 'They work especially well for professionals trapped in commercial styles. When you always do the same for clients, creative atrophy is real. Hayao Miyazaki, James Cameron and Lin-Manuel Miranda speak openly about maintaining parallel practices to avoid stiffening.'
      },
      {
        q: 'How do I combine creative challenges with full-time work?',
        a: 'Reserve 20 minutes before work or 30 after dinner. Key: block time on calendar like a non-negotiable meeting. Many people progress more with 20 consistent daily minutes than 4 random Saturday hours.'
      }
    ]
  }
};
