import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-rutina-estiramiento",
    "en": "stretching-routine-generator"
  },
  "category": "random",
  "emoji": "🤸",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Rutinas de Estiramiento | Genfy",
    "metaDesc": "Crea rutinas de estiramiento personalizadas por zona corporal, intensidad y duración. Prevení lesiones y mejorá tu flexibilidad con ejercicios específicos.",
    "h1": "Generador de Rutinas de Estiramiento",
    "intro": "Armá tu rutina de elongación personalizada según la zona que necesitás trabajar, tu nivel y el tiempo disponible.",
    "tag": "Aleatorio",
    "filterLabel": "Configuración",
    "countLabel": "Ejercicios",
    "generateLabel": "Generar rutina",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "bodyArea",
        "label": "Zona corporal",
        "items": [
          "Cuello y trapecios",
          "Hombros y deltoides",
          "Espalda alta (dorsal)",
          "Espalda baja (lumbar)",
          "Pecho y pectorales",
          "Core y abdominales",
          "Caderas y glúteos",
          "Flexores de cadera",
          "Isquiotibiales (posteriores)",
          "Cuádriceps (frontales)",
          "Aductores (internos)",
          "Pantorrillas y sóleo",
          "Tobillos y tibiales",
          "Antebrazos y muñecas",
          "Dedos y manos",
          "Cuerpo completo"
        ]
      },
      {
        "id": "duration",
        "label": "Duración por ejercicio",
        "items": [
          "15 segundos",
          "20 segundos",
          "30 segundos",
          "45 segundos",
          "60 segundos"
        ]
      },
      {
        "id": "intensity",
        "label": "Intensidad",
        "items": [
          "suave (despertar)",
          "moderada (mantenimiento)",
          "intensa (flexibilidad activa)",
          "profunda (movilidad avanzada)"
        ]
      },
      {
        "id": "context",
        "label": "Momento",
        "items": [
          "Pre-entrenamiento",
          "Post-entrenamiento",
          "Pausa laboral",
          "Antes de dormir",
          "Al despertar",
          "Recuperación activa"
        ]
      }
    ],
    "separator": " • ",
    "defaultCount": 5,
    "maxCount": 20,
    "content": [
      {
        "h2": "Diferencia entre estiramiento estático y dinámico",
        "body": "<p>El estiramiento <strong>estático</strong> implica mantener una posición de elongación por 15-60 segundos sin movimiento. Ejemplos: tocarse los dedos de los pies sentado, o el clásico estiramiento de cuádriceps parado. Relaja el músculo, reduce tensión post-ejercicio, ideal para enfriar. Error típico: hacerlo en frío antes de entrenar, lo que reduce potencia muscular hasta 30 minutos después según estudios de 2012.</p><p>El <strong>dinámico</strong> involucra movimiento controlado que lleva la articulación por su rango completo. Ejemplos: círculos de brazos, estocadas caminando, leg swings. Activa el sistema nervioso, aumenta flujo sanguíneo, preparación perfecta pre-entrenamiento. Los atletas olímpicos abandonaron el estático pre-competencia desde los 2000s por esto.</p><p>Regla práctica: dinámico antes, estático después. Excepción: yoga y pilates usan estático controlado como entrenamiento principal de flexibilidad. El estiramiento balístico (rebotes) está obsoleto, genera micro-roturas y no mejora flexibilidad real.</p>"
      },
      {
        "h2": "Cuánto tiempo mantener cada estiramiento",
        "body": "<p>La ciencia cambió: antes se recomendaban 10 segundos, hoy sabemos que <strong>30 segundos</strong> es el mínimo efectivo para elongación estática. El tejido conectivo (fascia) necesita ese tiempo para registrar el cambio. Menos de 20 segundos apenas relaja, más de 60 no suma beneficios significativos salvo en casos de contracturas crónicas.</p><p>Para flexibilidad permanente, mantené 30-45 segundos por 3-5 repeticiones del mismo estiramiento, 4-5 veces por semana. Un estudio de 2016 en Journal of Physical Therapy mostró que 15 minutos diarios de estáticos mejoran rango articular 20% en 6 semanas. Hacerlo 1 vez por semana no cambia nada.</p><p>Errores de timing: sostener la respiración (cortás oxígeno al músculo), rebotar en la posición (micro-lesiones), forzar dolor agudo (diferenciá tensión sana de dolor de lesión). La sensación debe ser tirante pero tolerable, nunca punzante. Si temblás incontrolablemente, estás forzando demasiado.</p>"
      },
      {
        "h2": "Estiramientos específicos por deporte o actividad",
        "body": "<p><strong>Ciclistas:</strong> cadenas posteriores (isquios + pantorrillas) y flexores de cadera se acortan por la posición encorvada. Prioritarios: estiramiento de cobra para espalda baja, figure-four para piriforme, lunge bajo para psoas iliaco. Ignorar esto deriva en dolor lumbar crónico.</p><p><strong>Oficinistas:</strong> pectorales y flexores de cuello se tensan por postura de escritorio. Doorway stretch para pecho, chin tucks para cuello, cat-cow para columna. Hacelo cada 2 horas o quedate jorobado permanentemente a los 40.</p><p><strong>Corredores:</strong> banda iliotibial, sóleo y tibial anterior sufren impacto repetitivo. IT band stretch contra pared, calf drops en escalón, toe pulls sentado. El 70% de las lesiones de running son por acortamiento muscular evitable. <strong>Levantadores de pesas:</strong> movilidad de hombro y tobillo limita técnica. Dislocaciones con banda elástica, squat profundo asistido. Sin rango completo, compensás con espalda baja y te lesionás.</p>"
      },
      {
        "h2": "Mitos y errores comunes al estirar",
        "body": "<p><strong>Mito:</strong> 'Estirar previene lesiones'. Realidad: reduce rigidez muscular pero no previene esguinces ni roturas según meta-análisis de Cochrane 2014. Lo que previene lesiones es el calentamiento progresivo + fortalecimiento excéntrico.</p><p><strong>Error:</strong> estirar músculos fríos. Necesitás 5-10 minutos de cardio ligero antes (caminata rápida, jumping jacks suaves) para aumentar temperatura muscular. Estirar en frío es como doblar un chicle congelado, se rompe fácil.</p><p><strong>Mito:</strong> 'Cuanto más duele, mejor'. El dolor agudo activa el reflejo miotático (contracción protectora), contrarrestando el objetivo. Buscá tensión de 5-6 en escala de 10, no 9-10. <strong>Error:</strong> aguantar la respiración. La exhalación lenta activa el parasimpático, permitiendo mayor elongación. Inhalá en posición neutra, exhalá mientras profundizás.</p><p>Último error crítico: estirar siempre los mismos músculos. Los antagonistas acortados (ej: psoas vs glúteos) causan desbalance postural. Si solo estirás posteriores y nunca frontales, creás asimetrías que derivan en lesiones.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuándo es mejor estirar, antes o después de entrenar?",
        "a": "Dinámico antes (movimiento activo), estático después (mantener posición). Estático pre-entrenamiento reduce fuerza hasta 30 minutos según estudios recientes."
      },
      {
        "q": "¿Es normal sentir dolor al estirar?",
        "a": "Tensión sí, dolor agudo no. Si sentís punzadas, estás forzando una lesión. La sensación debe ser tirante pero sostenible por 30-60 segundos sin temblar."
      },
      {
        "q": "¿Cuánto tiempo tarda en mejorar la flexibilidad?",
        "a": "Con rutina diaria de 15 minutos, cambios notables en 3-4 semanas. Flexibilidad permanente requiere 3-6 meses de práctica consistente."
      },
      {
        "q": "¿Los estiramientos sirven para el dolor lumbar?",
        "a": "Sí, pero solo si el dolor viene de tensión muscular (psoas, isquios). Si es hernia o problema estructural, consultá médico antes de estirar."
      }
    ]
  },
  "en": {
    "pageTitle": "Stretching Routine Generator | Genfy",
    "metaDesc": "Create custom stretching routines by body area, intensity and duration. Prevent injuries and improve flexibility with targeted exercises.",
    "h1": "Stretching Routine Generator",
    "intro": "Build your personalized stretching routine based on the area you need to work, your level, and available time.",
    "tag": "Random",
    "filterLabel": "Configuration",
    "countLabel": "Exercises",
    "generateLabel": "Generate routine",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "bodyArea",
        "label": "Body area",
        "items": [
          "Neck and traps",
          "Shoulders and deltoids",
          "Upper back (thoracic)",
          "Lower back (lumbar)",
          "Chest and pectorals",
          "Core and abs",
          "Hips and glutes",
          "Hip flexors",
          "Hamstrings (posterior)",
          "Quadriceps (anterior)",
          "Adductors (inner thigh)",
          "Calves and soleus",
          "Ankles and tibialis",
          "Forearms and wrists",
          "Fingers and hands",
          "Full body"
        ]
      },
      {
        "id": "duration",
        "label": "Duration per exercise",
        "items": [
          "15 seconds",
          "20 seconds",
          "30 seconds",
          "45 seconds",
          "60 seconds"
        ]
      },
      {
        "id": "intensity",
        "label": "Intensity",
        "items": [
          "gentle (wake-up)",
          "moderate (maintenance)",
          "intense (active flexibility)",
          "deep (advanced mobility)"
        ]
      },
      {
        "id": "context",
        "label": "Timing",
        "items": [
          "Pre-workout",
          "Post-workout",
          "Work break",
          "Before bed",
          "Upon waking",
          "Active recovery"
        ]
      }
    ],
    "separator": " • ",
    "defaultCount": 5,
    "maxCount": 20,
    "content": [
      {
        "h2": "Difference between static and dynamic stretching",
        "body": "<p><strong>Static</strong> stretching involves holding a lengthened position for 15-60 seconds without movement. Examples: seated toe touch, classic standing quad stretch. Relaxes muscle, reduces post-exercise tension, ideal for cooling down. Typical mistake: doing it cold before training, which reduces muscle power up to 30 minutes later according to 2012 studies.</p><p><strong>Dynamic</strong> involves controlled movement taking the joint through its full range. Examples: arm circles, walking lunges, leg swings. Activates nervous system, increases blood flow, perfect pre-workout prep. Olympic athletes abandoned static pre-competition since the 2000s for this reason.</p><p>Rule of thumb: dynamic before, static after. Exception: yoga and pilates use controlled static as primary flexibility training. Ballistic stretching (bouncing) is obsolete, causes micro-tears and doesn't improve real flexibility.</p>"
      },
      {
        "h2": "How long to hold each stretch",
        "body": "<p>Science changed: 10 seconds used to be recommended, today we know <strong>30 seconds</strong> is the effective minimum for static stretching. Connective tissue (fascia) needs that time to register the change. Less than 20 seconds barely relaxes, more than 60 adds no significant benefits except in chronic contracture cases.</p><p>For permanent flexibility, hold 30-45 seconds for 3-5 repetitions of the same stretch, 4-5 times per week. A 2016 Journal of Physical Therapy study showed 15 daily minutes of static stretches improve joint range 20% in 6 weeks. Doing it once weekly changes nothing.</p><p>Timing errors: holding your breath (cuts oxygen to muscle), bouncing in position (micro-injuries), forcing acute pain (differentiate healthy tension from injury pain). The sensation should be tight but tolerable, never sharp. If you're trembling uncontrollably, you're forcing too hard.</p>"
      },
      {
        "h2": "Sport-specific stretches by activity",
        "body": "<p><strong>Cyclists:</strong> posterior chains (hamstrings + calves) and hip flexors shorten from hunched position. Priority: cobra stretch for lower back, figure-four for piriformis, low lunge for psoas. Ignoring this leads to chronic low back pain.</p><p><strong>Office workers:</strong> pecs and neck flexors tense from desk posture. Doorway stretch for chest, chin tucks for neck, cat-cow for spine. Do it every 2 hours or stay permanently hunched by 40.</p><p><strong>Runners:</strong> IT band, soleus and tibialis anterior suffer repetitive impact. IT band stretch against wall, calf drops on step, seated toe pulls. 70% of running injuries come from preventable muscle shortening. <strong>Weightlifters:</strong> shoulder and ankle mobility limits technique. Band dislocations, assisted deep squat. Without full range, you compensate with lower back and get injured.</p>"
      },
      {
        "h2": "Myths and common stretching mistakes",
        "body": "<p><strong>Myth:</strong> 'Stretching prevents injuries'. Reality: reduces muscle stiffness but doesn't prevent sprains or tears according to 2014 Cochrane meta-analysis. What prevents injuries is progressive warm-up + eccentric strengthening.</p><p><strong>Mistake:</strong> stretching cold muscles. You need 5-10 minutes of light cardio first (brisk walk, gentle jumping jacks) to increase muscle temperature. Stretching cold is like bending frozen gum, it breaks easily.</p><p><strong>Myth:</strong> 'The more it hurts, the better'. Acute pain activates the myotatic reflex (protective contraction), counteracting the goal. Aim for 5-6 tension on a scale of 10, not 9-10. <strong>Mistake:</strong> holding your breath. Slow exhalation activates parasympathetic, allowing greater lengthening. Inhale in neutral, exhale while deepening.</p><p>Final critical error: always stretching the same muscles. Shortened antagonists (e.g., psoas vs glutes) cause postural imbalance. If you only stretch posterior and never anterior, you create asymmetries leading to injury.</p>"
      }
    ],
    "faq": [
      {
        "q": "When is it better to stretch, before or after training?",
        "a": "Dynamic before (active movement), static after (holding position). Static pre-workout reduces strength up to 30 minutes according to recent studies."
      },
      {
        "q": "Is it normal to feel pain when stretching?",
        "a": "Tension yes, sharp pain no. If you feel stabs, you're forcing an injury. The sensation should be tight but sustainable for 30-60 seconds without trembling."
      },
      {
        "q": "How long does it take to improve flexibility?",
        "a": "With daily 15-minute routine, noticeable changes in 3-4 weeks. Permanent flexibility requires 3-6 months of consistent practice."
      },
      {
        "q": "Do stretches help with lower back pain?",
        "a": "Yes, but only if pain comes from muscle tension (psoas, hamstrings). If it's a hernia or structural problem, consult a doctor before stretching."
      }
    ]
  }
};
