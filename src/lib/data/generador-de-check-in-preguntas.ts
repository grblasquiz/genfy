import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-check-in-preguntas",
    "en": "daily-check-in-question-generator"
  },
  "category": "work",
  "emoji": "☀️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Preguntas para Check-in Diario | Genfy",
    "metaDesc": "Genera preguntas auténticas para check-ins de equipo remoto. Rompe la rutina con prompts que conectan, revelan blockers y mejoran la cultura async.",
    "h1": "Generador de Preguntas para Check-in Diario",
    "intro": "Transformá tus stand-ups remotos con preguntas que van más allá del 'qué hiciste ayer'. Revelá blockers tempranos, fortalecé vínculos y hacé visibles las victorias silenciosas del equipo distribuido.",
    "tag": "Trabajo",
    "filterLabel": "Tipo de pregunta",
    "countLabel": "Cantidad",
    "generateLabel": "Generar preguntas",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "warmup",
        "label": "Warm-up / Conexión personal",
        "items": [
          "¿Qué canción te acompaña hoy mientras trabajás?",
          "Si tu día fuera un emoji, ¿cuál sería y por qué?",
          "¿Qué aprendiste esta semana fuera del trabajo?",
          "Compartí algo que te hizo reír últimamente",
          "¿Qué serie o libro te está enganchando ahora?",
          "¿Cuál fue tu mejor momento del fin de semana?",
          "Si pudieras almorzar con alguien del equipo hoy, ¿quién y por qué?",
          "¿Qué cosa pequeña te hizo feliz esta mañana?",
          "Describí tu setup actual en tres palabras",
          "¿Qué habilidad no laboral querés desarrollar este año?",
          "¿Cuál es tu bebida favorita mientras trabajás?",
          "Mostrame tu vista desde la ventana en una palabra",
          "¿Qué tradición familiar extrañás cuando estás remoto?",
          "Si tuvieras una hora libre hoy, ¿en qué la invertirías?",
          "¿Qué herramienta personal descubriste que cambió tu rutina?",
          "Contanos un dato curioso que nadie del equipo sabe de vos",
          "¿Qué te motiva a levantarte hoy específicamente?",
          "¿Cuál fue tu último 'momento aha' fuera del código?",
          "¿Qué cambiarías de tu espacio de trabajo ahora mismo?",
          "Compartí una foto de tu mascota o planta de escritorio",
          "¿Qué comida te recarga energía a mitad del día?",
          "¿Qué podcast o video te inspiró últimamente?",
          "Si tu estado de ánimo fuera un clima, ¿cuál sería?",
          "¿Qué hobby retomaste o querés retomar?",
          "Describí tu café/té perfecto de la mañana"
        ]
      },
      {
        "id": "productivity",
        "label": "Enfoque / Productividad",
        "items": [
          "¿Cuál es tu prioridad #1 hoy y qué necesitás para cerrarla?",
          "¿En qué tarea te sentís trabado y cómo podemos destrabarla?",
          "¿Qué cosa vas a terminar hoy que te va a dar más satisfacción?",
          "Si tuvieras 2 horas de foco sin interrupciones, ¿qué harías?",
          "¿Hay algo que estés postponiendo? ¿Por qué?",
          "¿Qué dependencia externa te está frenando?",
          "Compartí un win (por más chico que sea) de ayer",
          "¿Qué aprendiste debugueando que te sorprendió?",
          "¿En qué horario del día rendís más y cómo lo aprovechás?",
          "¿Qué tarea te genera más fricción y cómo podríamos suavizarla?",
          "¿Hay contexto que te falte para avanzar hoy?",
          "¿Qué decisión técnica necesitás tomar y quién puede ayudarte?",
          "¿Cuál es tu definición de 'done' para hoy?",
          "¿Qué experimento querés probar esta semana?",
          "Si pudieras eliminar una reunión hoy, ¿cuál y por qué?",
          "¿Qué herramienta nueva probaste y valió la pena?",
          "¿Hay algún proceso que te frene más que ayudarte?",
          "¿Qué feedback necesitás antes de seguir avanzando?",
          "¿En qué estás invirtiendo tiempo que no suma valor?",
          "¿Qué tarea pensabas que iba a ser fácil y resultó compleja?",
          "¿Qué te gustaría automatizar de tu día?",
          "¿Cuál es tu mayor distracción hoy y cómo la manejás?",
          "¿Qué documentación te hubiera ahorrado horas?",
          "¿En qué parte del proyecto sentís que falta claridad?",
          "¿Qué task pequeña podés delegar o compartir?",
          "¿Qué métrica o señal te indica que vas por buen camino?",
          "¿Hay algún refactor que viene pidiendo atención?",
          "¿Qué conocimiento compartido falta en el equipo?",
          "¿Cuál es tu mayor aprendizaje técnico de la semana?",
          "¿Qué te hubiera gustado saber al inicio de este sprint?"
        ]
      },
      {
        "id": "blockers",
        "label": "Blockers / Ayuda",
        "items": [
          "¿Qué te impide avanzar ahora mismo?",
          "¿Con quién necesitás hablar para destrabar algo?",
          "¿Hay algún assumption que deberíamos validar antes de seguir?",
          "¿Qué información te falta y dónde creés que está?",
          "¿Esperás alguna respuesta que no llega?",
          "¿Hay conflicto de prioridades que necesite resolverse?",
          "¿Qué riesgo ves que nadie más menciona?",
          "¿Te falta acceso a algún sistema o recurso?",
          "¿Hay deuda técnica que esté afectando tu trabajo actual?",
          "¿Qué decisión pendiente está paralizando tu progreso?",
          "¿Necesitás code review urgente de algo específico?",
          "¿Hay algún bug en producción que te preocupe?",
          "¿Qué claridad te falta sobre los requerimientos?",
          "¿Estás esperando deploy o merge de otra rama?",
          "¿Hay test flaky que te esté haciendo perder tiempo?",
          "¿Necesitás pair programming en algo puntual?",
          "¿Qué ambiente (dev/staging) no está funcionando bien?",
          "¿Te falta ancho de banda o capacidad del equipo?",
          "¿Hay scope creep que nadie está visibilizando?",
          "¿Qué suposición técnica resultó incorrecta?",
          "¿Necesitás que alguien tome ownership de algo?",
          "¿Hay comunicación asyncrónica que no está funcionando?",
          "¿Qué proceso burocrático te está frenando?",
          "¿Falta algún third-party dependency o API key?",
          "¿Hay conflicto de merge que necesite atención conjunta?"
        ]
      },
      {
        "id": "team",
        "label": "Colaboración / Equipo",
        "items": [
          "¿A quién del equipo querés agradecer por algo y por qué?",
          "¿Qué podría hacer yo para facilitarte el trabajo?",
          "¿Hay conocimiento que deberías compartir con el equipo?",
          "¿En qué área podrías mentorear a alguien?",
          "¿De quién aprendiste algo valioso esta semana?",
          "¿Qué práctica del equipo te gustaría que mejoremos?",
          "¿Hay feedback que quieras dar de forma constructiva?",
          "¿Qué pregunta te gustaría hacerle al equipo?",
          "¿Con quién te gustaría colaborar más seguido?",
          "¿Qué win del equipo deberíamos celebrar?",
          "¿Hay silos de información que deberíamos romper?",
          "¿Qué ritual del equipo te resulta más útil?",
          "¿Dónde sentís que el equipo está perdiendo momentum?",
          "¿Qué fortaleza individual podríamos aprovechar mejor?",
          "¿Hay iniciativa que necesite más manos?",
          "¿Qué tipo de pair/mob programming te gustaría probar?",
          "¿Dónde ves oportunidad de cross-training?",
          "¿Qué pregunta evitamos hacer y deberíamos?",
          "¿Hay tensión no resuelta que afecte la colaboración?",
          "¿Qué canal de comunicación no estamos usando bien?",
          "¿En qué reunión sentís que tu input falta?",
          "¿Qué documentación colaborativa necesitamos crear?",
          "¿Hay dependencia entre tareas que podamos coordinar mejor?",
          "¿Qué diversidad de perspectiva nos falta considerar?",
          "¿Dónde el equipo podría ser más transparente?"
        ]
      },
      {
        "id": "wellbeing",
        "label": "Bienestar / Balance",
        "items": [
          "Del 1 al 10, ¿cómo está tu energía hoy?",
          "¿Qué necesitás del equipo para cuidar tu bienestar?",
          "¿Hay señales de burnout que estés sintiendo?",
          "¿Cómo está tu balance work-life esta semana?",
          "¿Qué límites necesitás poner hoy?",
          "¿Tomaste breaks suficientes ayer? ¿Qué cambiarías hoy?",
          "¿Hay presión invisible que estés cargando solo?",
          "¿Qué te ayudaría a desconectar mejor al final del día?",
          "¿Sentís que estás en modo sostenible o sprint insostenible?",
          "¿Qué ritual de autocuidado incorporaste últimamente?",
          "¿Hay overload de meetings que deberíamos revisar?",
          "¿Cómo te sentís respecto a tus horas de sueño?",
          "¿Qué actividad física o mental te recarga?",
          "¿Hay expectativas poco realistas que necesitemos ajustar?",
          "¿Qué te genera más stress del trabajo remoto?",
          "¿Sentís que tenés permiso para decir 'no'?",
          "¿Hay algo que estés sacrificando por trabajo sin necesidad?",
          "¿Qué te hubiera gustado delegar esta semana?",
          "¿Cómo manejás la soledad o aislamiento del remote?",
          "¿Hay culpa por desconectar que deberíamos desarmar?",
          "¿Qué boundary entre vida y trabajo se desdibujó?",
          "¿Sentís que estás creciendo profesionalmente o estancado?",
          "¿Hay feedback pendiente que te genera ansiedad?",
          "¿Qué celebración personal tuviste que nadie vio?",
          "¿Qué necesitás comunicar sobre tu disponibilidad?"
        ]
      },
      {
        "id": "reflection",
        "label": "Retrospectiva / Aprendizaje",
        "items": [
          "¿Qué harías diferente si empezaras esta tarea de nuevo?",
          "¿Qué suposición tuya resultó incorrecta y qué aprendiste?",
          "¿Cuál fue tu mejor decisión técnica de la semana?",
          "¿Qué error cometiste que valga la pena compartir?",
          "¿Qué patrón estás viendo que antes no veías?",
          "¿En qué aspecto técnico sentís que más creciste?",
          "¿Qué trade-off elegiste y qué consecuencias tuvo?",
          "¿Qué legacy code entendiste mejor esta semana?",
          "¿Cuál fue tu momento de mayor frustración y qué lo causó?",
          "¿Qué práctica nueva adoptaste que funciona?",
          "¿Dónde subestimaste la complejidad?",
          "¿Qué feedback recibiste que cambió tu approach?",
          "¿Cuál fue tu mayor 'TIL' (Today I Learned)?",
          "¿Qué hábito del equipo adoptaste como propio?",
          "¿En qué te equivocaste y qué sistema podría prevenir eso?",
          "¿Qué métrica o data te sorprendió?",
          "¿Cuál fue tu mejor rabbit hole productivo de la semana?",
          "¿Qué documentación leíste que valió cada minuto?",
          "¿Dónde la comunicación falló y cómo mejorarlo?",
          "¿Qué feature resultó más simple o compleja de lo pensado?",
          "¿Qué test te salvó de un bug en producción?",
          "¿Cuál fue tu mejor momento de flujo esta semana?",
          "¿Qué refactor hiciste que mejoró la vida del equipo?",
          "¿Qué tool o shortcut descubriste que cambió tu workflow?",
          "¿En qué todavía te sentís impostor y cómo lo manejás?"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué las preguntas genéricas matan los check-ins remotos",
        "body": "<p>En equipos distribuidos, la pregunta '¿qué vas a hacer hoy?' genera respuestas en piloto automático. El problema: los <strong>blockers reales quedan ocultos hasta que es tarde</strong>. Un dev puede estar frenado esperando code review hace dos días, pero en el check-in escrito solo pone 'sigo con el feature X'. Otro puede tener burnout silencioso y nadie lo detecta porque la pregunta no invita a la vulnerabilidad.</p><p>Las mejores preguntas de check-in tienen tres cualidades: <strong>revelan información accionable</strong> (blockers, dependencias, riesgos), <strong>construyen conexión humana</strong> (evitan que el equipo sea una lista de tareas), y <strong>rotan suficiente</strong> para no volverse ruido de fondo. Un equipo de Shopify documentó que cambiar de 'updates de progreso' a 'una pregunta de bienestar + una de blockers' redujo el tiempo promedio de resolución de impedimentos de 1.8 días a 4 horas.</p><p>La clave está en <strong>alternar entre dominios</strong>: lunes algo de warm-up para reconectar post-weekend, miércoles foco duro en blockers técnicos, viernes retrospectiva ligera. Evitá preguntar lo mismo todos los días o el equipo dejará de leer. Y nunca uses preguntas performativas tipo '¿cómo vas a superar tus límites hoy?' — generan cinismo, no data útil.</p>"
      },
      {
        "h2": "Cómo diseñar preguntas que destapen blockers antes del daily",
        "body": "<p>Los mejores equipos usan check-ins <strong>asíncronos 2 horas antes del daily</strong> (si es que tienen daily). ¿Por qué? Porque da tiempo a que alguien lea 'estoy trabado esperando que legal apruebe el contrato del proveedor' y ya llegue al meeting con una solución o escalation. Las preguntas efectivas tienen verbos de acción: 'necesitás', 'esperás', 'te falta' — no 'cómo te sentís con el blocker' (eso es terapia, no gestión).</p><p>Un patrón potente: <strong>la pregunta en dos niveles</strong>. Primero filtro rápido ('¿Tenés algún blocker? Sí/No'), después profundización solo si aplica ('¿Quién específicamente puede ayudarte y cuándo lo necesitás?'). Esto respeta el tiempo del 80% que no tiene blockers mientras da espacio al 20% que sí. Gitlab usa variantes de 'si hoy fuera tu último día en este proyecto, ¿qué deuda técnica documentarías primero?' — revela lo que está bajo la superficie sin sonar amenazante.</p><p>Errores comunes: preguntar por status que ya está en Jira (redundancia), pedir reflexiones filosóficas en lunes a las 9am (timing brutal), o preguntas que solo el líder puede responder ('¿está el roadmap alineado con la estrategia?'). Las mejores preguntas <strong>invitan a la acción inmediata o al conocimiento compartido</strong>, no a la contemplación abstracta.</p>"
      },
      {
        "h2": "La anatomía de una pregunta que genera conexión real",
        "body": "<p>Las preguntas de warm-up no son pérdida de tiempo si están bien calibradas. <strong>La regla: una pregunta de conexión debe ser respondible en 30 segundos y generar al menos un 'yo también' o 'no sabía eso de vos'</strong>. Ejemplo débil: '¿Cómo estuvo tu fin de semana?' (muy amplio, respuesta genérica). Ejemplo fuerte: '¿Qué cosa pequeña te hizo feliz este finde?' (específico, positivo, revela personalidad).</p><p>Un equipo de Buffer rota entre tres tipos de warm-up: <strong>aspiracional</strong> ('¿qué habilidad no-tech querés desarrollar?'), <strong>situacional</strong> ('describí tu setup de hoy en tres palabras'), y <strong>retrospectivo</strong> ('¿qué aprendiste fuera del trabajo esta semana?'). La magia está en la especificidad — 'tu canción de hoy' es mejor que 'tu música favorita' porque la respuesta cambia día a día y no requiere pensar en una respuesta definitiva.</p><p>Las preguntas de gratitud son especialmente potentes en remoto: '¿A quién del equipo querés agradecer y por qué?' hace visible el trabajo invisible (alguien que te ayudó en un PR, quien mejoró la doc, quien compartió contexto). Un equipo de Notion documenta estos agradecimientos en un canal público y los usa como input para 360 reviews. La clave: <strong>pedí siempre el 'por qué' junto con el 'quién'</strong> — eso transforma una mención superficial en reconocimiento significativo.</p>"
      },
      {
        "h2": "Errores que convierten check-ins en teatro corporativo",
        "body": "<p>El peor antipatrón: <strong>preguntas de performance en vez de preguntas de trabajo real</strong>. '¿Cómo vas a brillar hoy?' solo genera respuestas para quedar bien. '¿Qué te impide avanzar ahora mismo?' genera información útil. Zapier hizo un análisis de sentimiento de sus check-ins y encontró que las preguntas con lenguaje aspiracional ('superar', 'destacar', 'sobresalir') correlacionaban con <strong>menor honestidad en reportar problemas</strong>.</p><p>Otro error: no adaptar las preguntas al <strong>ciclo del sprint o proyecto</strong>. Preguntar por blockers al 90% del sprint cuando ya es tarde para pivotear. Mejor: '¿Qué riesgo ves en el horizonte?' al 40-60% del sprint. O preguntar por retrospectiva al inicio de la semana cuando nadie recuerda la semana pasada. Las preguntas de reflexión funcionan viernes tarde o lunes temprano, no miércoles a la mitad del caos.</p><p>El error más sutil: <strong>no cerrar el loop de las respuestas</strong>. Si alguien reporta un blocker en el check-in y nadie responde o actúa, aprenden que la pregunta es performativa. Basecamp tiene una regla: todo blocker mencionado en check-in debe tener un owner asignado en <2 horas o una explicación de por qué no es accionable ahora. Eso transforma el check-in de reporte pasivo a herramienta de coordinación activa. Si vas a preguntar, <strong>asegurate de que la respuesta importe</strong>.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántas preguntas debería hacer en un check-in diario?",
        "a": "Entre 1 y 3 máximo. Una de foco/progreso, opcionalmente una de blocker, y si tenés budget de atención una de warm-up o bienestar. Más de 3 y la tasa de respuesta cae dramáticamente."
      },
      {
        "q": "¿Debería rotar las preguntas todos los días o mantener consistencia?",
        "a": "Rotá la pregunta de warm-up diariamente, pero mantené estructura consistente en las de trabajo (blocker/prioridad). La variedad evita el ruido; la consistencia permite comparar patrones semana a semana."
      },
      {
        "q": "¿Cómo evito que las preguntas se sientan invasivas o de micromanagement?",
        "a": "Enfocate en información accionable, no en juicios. '¿Qué necesitás para cerrar X?' es útil; '¿por qué no cerraste X ayer?' es interrogatorio. Dejá claro que el propósito es coordinar, no auditar."
      },
      {
        "q": "¿Qué hago si nadie responde los check-ins escritos?",
        "a": "Dos causas comunes: preguntas muy genéricas (aburrimiento) o respuestas sin consecuencias (irrelevancia). Probá preguntas más específicas y cerrá el loop — respondé a cada blocker, agradecé cada insight compartido."
      }
    ]
  },
  "en": {
    "pageTitle": "Daily Check-in Question Generator | Genfy",
    "metaDesc": "Generate authentic questions for remote team check-ins. Break routines with prompts that surface blockers early, strengthen bonds, and improve async culture.",
    "h1": "Daily Check-in Question Generator",
    "intro": "Transform your remote stand-ups with questions beyond 'what did you do yesterday'. Surface blockers early, strengthen team bonds, and make silent wins visible across distributed teams.",
    "tag": "Work",
    "filterLabel": "Question type",
    "countLabel": "Amount",
    "generateLabel": "Generate questions",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "warmup",
        "label": "Warm-up / Personal connection",
        "items": [
          "What song is accompanying you today while working?",
          "If your day were an emoji, which one and why?",
          "What did you learn this week outside of work?",
          "Share something that made you laugh recently",
          "What show or book has you hooked right now?",
          "What was your best moment this weekend?",
          "If you could have lunch with someone on the team today, who and why?",
          "What small thing made you happy this morning?",
          "Describe your current setup in three words",
          "What non-work skill do you want to develop this year?",
          "What's your favorite drink while working?",
          "Show me your window view in one word",
          "What family tradition do you miss when remote?",
          "If you had a free hour today, how would you spend it?",
          "What personal tool did you discover that changed your routine?",
          "Tell us a fun fact nobody on the team knows about you",
          "What motivates you to get up today specifically?",
          "What was your last 'aha moment' outside of code?",
          "What would you change about your workspace right now?",
          "Share a photo of your desk pet or plant",
          "What food recharges your energy mid-day?",
          "What podcast or video inspired you lately?",
          "If your mood were weather, what would it be?",
          "What hobby did you pick up or want to restart?",
          "Describe your perfect morning coffee/tea"
        ]
      },
      {
        "id": "productivity",
        "label": "Focus / Productivity",
        "items": [
          "What's your #1 priority today and what do you need to close it?",
          "Where are you stuck and how can we unblock you?",
          "What will you finish today that will give you most satisfaction?",
          "If you had 2 uninterrupted focus hours, what would you do?",
          "Is there something you're postponing? Why?",
          "What external dependency is blocking you?",
          "Share a win (however small) from yesterday",
          "What did you learn while debugging that surprised you?",
          "What time of day are you most productive and how do you leverage it?",
          "What task creates the most friction and how could we smooth it?",
          "Is there context you're missing to move forward today?",
          "What technical decision do you need to make and who can help?",
          "What's your definition of 'done' for today?",
          "What experiment do you want to try this week?",
          "If you could eliminate one meeting today, which and why?",
          "What new tool did you try that was worth it?",
          "Is there a process that slows you down more than helps?",
          "What feedback do you need before moving forward?",
          "Where are you spending time that doesn't add value?",
          "What task did you think would be easy but turned complex?",
          "What would you like to automate from your day?",
          "What's your biggest distraction today and how do you handle it?",
          "What documentation would have saved you hours?",
          "Where in the project do you feel there's lack of clarity?",
          "What small task could you delegate or share?",
          "What metric or signal tells you you're on the right track?",
          "Is there a refactor that's been asking for attention?",
          "What shared knowledge is missing in the team?",
          "What's your biggest technical learning this week?",
          "What do you wish you'd known at the start of this sprint?"
        ]
      },
      {
        "id": "blockers",
        "label": "Blockers / Help needed",
        "items": [
          "What's preventing you from moving forward right now?",
          "Who do you need to talk to to unblock something?",
          "Is there an assumption we should validate before continuing?",
          "What information are you missing and where do you think it is?",
          "Are you waiting for a response that hasn't come?",
          "Is there a priority conflict that needs resolving?",
          "What risk do you see that nobody else mentions?",
          "Are you missing access to any system or resource?",
          "Is there tech debt affecting your current work?",
          "What pending decision is paralyzing your progress?",
          "Do you need urgent code review on something specific?",
          "Is there a production bug that concerns you?",
          "What clarity are you missing about requirements?",
          "Are you waiting for deploy or merge from another branch?",
          "Is there flaky test making you waste time?",
          "Do you need pair programming on something specific?",
          "What environment (dev/staging) isn't working properly?",
          "Are you lacking bandwidth or team capacity?",
          "Is there scope creep nobody is surfacing?",
          "What technical assumption turned out incorrect?",
          "Do you need someone to take ownership of something?",
          "Is async communication not working somewhere?",
          "What bureaucratic process is blocking you?",
          "Is a third-party dependency or API key missing?",
          "Is there a merge conflict needing joint attention?"
        ]
      },
      {
        "id": "team",
        "label": "Collaboration / Team",
        "items": [
          "Who on the team do you want to thank for something and why?",
          "What could I do to make your work easier?",
          "Is there knowledge you should share with the team?",
          "In what area could you mentor someone?",
          "Who did you learn something valuable from this week?",
          "What team practice would you like us to improve?",
          "Is there feedback you want to give constructively?",
          "What question would you like to ask the team?",
          "Who would you like to collaborate with more often?",
          "What team win should we celebrate?",
          "Are there information silos we should break?",
          "What team ritual is most useful to you?",
          "Where do you feel the team is losing momentum?",
          "What individual strength could we leverage better?",
          "Is there an initiative needing more hands?",
          "What type of pair/mob programming would you like to try?",
          "Where do you see opportunity for cross-training?",
          "What question do we avoid asking that we should?",
          "Is there unresolved tension affecting collaboration?",
          "What communication channel aren't we using well?",
          "In what meeting do you feel your input is missing?",
          "What collaborative documentation do we need to create?",
          "Is there task dependency we could coordinate better?",
          "What diversity of perspective are we missing?",
          "Where could the team be more transparent?"
        ]
      },
      {
        "id": "wellbeing",
        "label": "Wellbeing / Balance",
        "items": [
          "From 1 to 10, how's your energy today?",
          "What do you need from the team to care for your wellbeing?",
          "Are there burnout signs you're experiencing?",
          "How's your work-life balance this week?",
          "What boundaries do you need to set today?",
          "Did you take enough breaks yesterday? What would you change today?",
          "Is there invisible pressure you're carrying alone?",
          "What would help you disconnect better at end of day?",
          "Do you feel you're in sustainable mode or unsustainable sprint?",
          "What self-care ritual did you incorporate lately?",
          "Is there meeting overload we should review?",
          "How do you feel about your sleep hours?",
          "What physical or mental activity recharges you?",
          "Are there unrealistic expectations we need to adjust?",
          "What generates most stress from remote work?",
          "Do you feel you have permission to say 'no'?",
          "Is there something you're sacrificing for work unnecessarily?",
          "What would you have liked to delegate this week?",
          "How do you handle loneliness or isolation from remote?",
          "Is there guilt about disconnecting we should dismantle?",
          "What boundary between life and work got blurred?",
          "Do you feel you're growing professionally or stagnant?",
          "Is there pending feedback generating anxiety?",
          "What personal celebration did you have that nobody saw?",
          "What do you need to communicate about your availability?"
        ]
      },
      {
        "id": "reflection",
        "label": "Retrospective / Learning",
        "items": [
          "What would you do differently if starting this task again?",
          "What assumption of yours was incorrect and what did you learn?",
          "What was your best technical decision this week?",
          "What mistake did you make worth sharing?",
          "What pattern are you seeing that you didn't before?",
          "In what technical aspect do you feel you grew most?",
          "What trade-off did you choose and what consequences did it have?",
          "What legacy code did you understand better this week?",
          "What was your moment of greatest frustration and what caused it?",
          "What new practice did you adopt that works?",
          "Where did you underestimate complexity?",
          "What feedback did you receive that changed your approach?",
          "What was your biggest TIL (Today I Learned)?",
          "What team habit did you adopt as your own?",
          "Where were you wrong and what system could prevent that?",
          "What metric or data surprised you?",
          "What was your best productive rabbit hole this week?",
          "What documentation did you read that was worth every minute?",
          "Where did communication fail and how to improve it?",
          "What feature turned out simpler or more complex than expected?",
          "What test saved you from a production bug?",
          "What was your best flow moment this week?",
          "What refactor did you do that improved team life?",
          "What tool or shortcut did you discover that changed your workflow?",
          "Where do you still feel impostor and how do you handle it?"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why generic questions kill remote check-ins",
        "body": "<p>In distributed teams, the question 'what will you do today?' generates autopilot answers. The problem: <strong>real blockers stay hidden until it's too late</strong>. A dev might be stuck waiting for code review for two days, but in the written check-in only writes 'continuing with feature X'. Another might have silent burnout and nobody detects it because the question doesn't invite vulnerability.</p><p>The best check-in questions have three qualities: <strong>reveal actionable information</strong> (blockers, dependencies, risks), <strong>build human connection</strong> (prevent the team from being a task list), and <strong>rotate enough</strong> to not become background noise. A Shopify team documented that switching from 'progress updates' to 'one wellbeing question + one blocker question' reduced average impediment resolution time from 1.8 days to 4 hours.</p><p>The key is <strong>alternating between domains</strong>: Monday something warm-up to reconnect post-weekend, Wednesday hard focus on technical blockers, Friday light retrospective. Avoid asking the same thing every day or the team will stop reading. And never use performative questions like 'how will you exceed your limits today?' — they generate cynicism, not useful data.</p>"
      },
      {
        "h2": "How to design questions that surface blockers before the daily",
        "body": "<p>The best teams use <strong>async check-ins 2 hours before the daily</strong> (if they even have a daily). Why? Because it gives time for someone to read 'I'm stuck waiting for legal to approve the vendor contract' and arrive at the meeting with a solution or escalation already. Effective questions have action verbs: 'need', 'waiting for', 'missing' — not 'how do you feel about the blocker' (that's therapy, not management).</p><p>A powerful pattern: <strong>the two-level question</strong>. First quick filter ('Do you have any blocker? Yes/No'), then deepening only if applicable ('Who specifically can help you and when do you need it?'). This respects the time of the 80% who don't have blockers while giving space to the 20% who do. Gitlab uses variants of 'if today were your last day on this project, what tech debt would you document first?' — reveals what's under the surface without sounding threatening.</p><p>Common mistakes: asking for status already in Jira (redundancy), requesting philosophical reflections on Monday at 9am (brutal timing), or questions only the leader can answer ('is the roadmap aligned with strategy?'). The best questions <strong>invite immediate action or shared knowledge</strong>, not abstract contemplation.</p>"
      },
      {
        "h2": "The anatomy of a question that generates real connection",
        "body": "<p>Warm-up questions aren't time waste if well calibrated. <strong>The rule: a connection question must be answerable in 30 seconds and generate at least one 'me too' or 'didn't know that about you'</strong>. Weak example: 'How was your weekend?' (too broad, generic answer). Strong example: 'What small thing made you happy this weekend?' (specific, positive, reveals personality).</p><p>A Buffer team rotates between three types of warm-up: <strong>aspirational</strong> ('what non-tech skill do you want to develop?'), <strong>situational</strong> ('describe your setup today in three words'), and <strong>retrospective</strong> ('what did you learn outside work this week?'). The magic is in specificity — 'your song today' is better than 'your favorite music' because the answer changes day to day and doesn't require thinking of a definitive answer.</p><p>Gratitude questions are especially powerful in remote: 'Who on the team do you want to thank and why?' makes invisible work visible (someone who helped you in a PR, who improved the docs, who shared context). A Notion team documents these thanks in a public channel and uses them as input for 360 reviews. The key: <strong>always ask for the 'why' along with the 'who'</strong> — that transforms a superficial mention into meaningful recognition.</p>"
      },
      {
        "h2": "Mistakes that turn check-ins into corporate theater",
        "body": "<p>The worst antipattern: <strong>performance questions instead of real work questions</strong>. 'How will you shine today?' only generates answers to look good. 'What's preventing you from moving forward right now?' generates useful information. Zapier did sentiment analysis of their check-ins and found that questions with aspirational language ('exceed', 'standout', 'excel') correlated with <strong>lower honesty in reporting problems</strong>.</p><p>Another mistake: not adapting questions to <strong>sprint or project cycle</strong>. Asking about blockers at 90% of sprint when it's too late to pivot. Better: 'What risk do you see on the horizon?' at 40-60% of sprint. Or asking for retrospective at start of week when nobody remembers last week. Reflection questions work Friday afternoon or Monday morning, not Wednesday in the middle of chaos.</p><p>The most subtle mistake: <strong>not closing the loop on answers</strong>. If someone reports a blocker in check-in and nobody responds or acts, they learn the question is performative. Basecamp has a rule: every blocker mentioned in check-in must have an owner assigned in <2 hours or explanation of why it's not actionable now. That transforms check-in from passive report to active coordination tool. If you're going to ask, <strong>make sure the answer matters</strong>.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many questions should I ask in a daily check-in?",
        "a": "Between 1 and 3 maximum. One for focus/progress, optionally one for blockers, and if you have attention budget one for warm-up or wellbeing. More than 3 and response rate drops dramatically."
      },
      {
        "q": "Should I rotate questions daily or maintain consistency?",
        "a": "Rotate the warm-up question daily, but maintain consistent structure in work ones (blocker/priority). Variety prevents noise; consistency allows comparing patterns week to week."
      },
      {
        "q": "How do I avoid questions feeling invasive or micromanagement?",
        "a": "Focus on actionable information, not judgments. 'What do you need to close X?' is useful; 'why didn't you close X yesterday?' is interrogation. Make clear the purpose is to coordinate, not audit."
      },
      {
        "q": "What do I do if nobody responds to written check-ins?",
        "a": "Two common causes: questions too generic (boredom) or answers without consequences (irrelevance). Try more specific questions and close the loop — respond to each blocker, thank each shared insight."
      }
    ]
  }
};
