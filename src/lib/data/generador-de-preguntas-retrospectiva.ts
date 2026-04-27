import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-preguntas-retrospectiva",
    "en": "retrospective-question-generator"
  },
  "category": "work",
  "emoji": "🔄",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Preguntas para Retrospectiva | Genfy",
    "metaDesc": "Preguntas facilitadoras para retrospectivas ágiles efectivas. Rompé la rutina de 'qué salió bien/mal' con técnicas que generan insights reales.",
    "h1": "Generador de Preguntas para Retrospectiva",
    "intro": "Transformá tus retros de formalidad obligatoria a sesiones que generan cambio real. Preguntas diseñadas para equipos que ya escucharon 'qué mejorar' mil veces.",
    "tag": "Trabajo",
    "filterLabel": "Enfoque",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "focus",
        "label": "Enfoque",
        "items": [
          "Mejora Continua",
          "Dinámica de Equipo",
          "Procesos",
          "Comunicación",
          "Celebración",
          "Conflictos",
          "Innovación",
          "Burnout Prevention"
        ]
      },
      {
        "id": "questions",
        "label": "Preguntas",
        "items": [
          "¿Qué decisión tomada este sprint ojalá pudiéramos revertir?",
          "Si este sprint fuera una película, ¿qué género sería y por qué?",
          "¿Qué proceso seguimos 'porque siempre se hizo así' que deberíamos cuestionar?",
          "¿En qué momento del sprint sentiste más energía? ¿Y menos?",
          "¿Qué conversación difícil estuvimos evitando?",
          "Si pudieras eliminar UNA reunión permanentemente, ¿cuál y por qué?",
          "¿Qué aprendió el equipo que no estaba en ningún backlog item?",
          "¿Cuál fue nuestro mejor momento de colaboración este sprint?",
          "¿Qué impedimento reportamos que nunca se resolvió realmente?",
          "Si tuviéramos que arrancar el sprint de vuelta, ¿qué haríamos diferente el día 1?",
          "¿Qué cosa pequeña que cambió mejoró significativamente tu día?",
          "¿En qué nos estamos autoengañando como equipo?",
          "¿Qué feedback no diste porque asumiste que no cambiaría nada?",
          "¿Qué celebración pendiente tenemos?",
          "¿Qué habilidad nueva surgió en alguien del equipo?",
          "¿Qué dependencies externas nos frenaron más esta vez?",
          "Si nuestro proceso fuera un producto, ¿qué bug crítico tendría?",
          "¿Qué pregunta deberíamos estar haciendo que nadie hace?",
          "¿Cuándo sentiste que tu trabajo realmente importaba este sprint?",
          "¿Qué riesgo técnico estamos pateando para adelante?",
          "¿Qué hizo alguien del equipo que merece reconocimiento público?",
          "¿Qué ritual o ceremonia se convirtió en teatro de seguridad?",
          "¿Qué palabra describe mejor este sprint?",
          "¿Qué dato o métrica nos sorprendió negativamente?",
          "Si pudiéramos exportar UNA práctica a otros equipos, ¿cuál sería?",
          "¿Qué suposición sobre nuestros usuarios resultó incorrecta?",
          "¿Dónde pedimos permiso cuando podríamos simplemente actuar?",
          "¿Qué win pequeño pasó desapercibido?",
          "¿Qué bloqueo se resolvió solo sin intervención?",
          "¿Qué equipo externo nos facilitó el trabajo y deberíamos agradecer?",
          "¿En qué momento tuvimos el mejor debate técnico?",
          "¿Qué decisión de arquitectura nos está costando más de lo esperado?",
          "Si tuvieras superpoderes para cambiar algo del sprint, ¿qué sería?",
          "¿Qué experimento fallido nos enseñó algo valioso?",
          "¿Cuál es el elefante en la sala que nadie menciona?",
          "¿Qué cosa dejamos 'casi lista' que deberíamos terminar?",
          "¿Qué hizo el Product Owner que facilitó u obstaculizó nuestro trabajo?",
          "¿Dónde necesitamos decir NO más seguido?",
          "¿Qué technical debt priorizamos bien (o mal)?",
          "Si este equipo fuera un superpoder, ¿cuál sería y qué limitación tendría?",
          "¿Qué aprendimos sobre lo que NO deberíamos hacer?",
          "¿Qué herramienta o proceso nuevo adoptamos que realmente ayudó?",
          "¿En qué momento la async communication falló y necesitamos sync?",
          "¿Qué feedback de usuarios nos impactó más?",
          "¿Qué distracción consumió más tiempo del planeado?",
          "¿Dónde sobreestimamos o subestimamos groseramente?",
          "¿Qué pair/mob programming session fue la más productiva?",
          "¿Qué código legacy finalmente refactorizamos (o deberíamos)?",
          "¿Qué onboarding o knowledge sharing hicimos bien?",
          "¿En qué fallamos como equipo, no como individuos?"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué las retros estándar fallan",
        "body": "<p>El formato clásico 'Start/Stop/Continue' o 'Glad/Sad/Mad' muere de aburrimiento después del tercer sprint. Los equipos entran en <strong>piloto automático</strong>: repiten los mismos issues ('falta tiempo', 'muchas reuniones', 'dependencies'), nadie propone acciones concretas, y la retro se vuelve un checkbox de Scrum compliance.</p><p>El problema no es el formato, es la <strong>falta de variedad cognitiva</strong>. Cuando usás las mismas preguntas, activás los mismos patrones de pensamiento. 'Qué salió mal' genera una lista de quejas; 'Qué decisión ojalá pudiéramos revertir' obliga a pensar en agency y consecuencias. La diferencia es brutal.</p><p>Equipos maduros necesitan <strong>preguntas de segundo orden</strong>: no 'qué mejorar' sino 'qué nos impide mejorar'. No 'qué funcionó' sino 'por qué funcionó y cómo replicarlo'. Las preguntas superficiales generan action items superficiales que nadie implementa.</p>"
      },
      {
        "h2": "Técnicas de facilitación para máximo impacto",
        "body": "<p>La <strong>regla del silencio inicial</strong>: después de lanzar la pregunta, esperá 60 segundos sin hablar. El facilitador que llena el silencio con explicaciones mata el pensamiento divergente. Los mejores insights emergen después del segundo 30, cuando la gente supera la respuesta obvia.</p><p>Usá <strong>votación por puntos</strong> para priorizar temas, pero con twist: cada persona tiene 3 votos y puede poner los 3 en un solo item si le importa mucho. Esto revela intensidad emocional, no solo popularidad. Un tema con 3 votos de una persona puede ser más crítico que uno con 6 votos de 6 personas.</p><p>Implementá <strong>rondas de profundización</strong>. Primera ronda: todos responden la pregunta. Segunda ronda: 'Alguien dijo X, ¿por qué creés que pasa eso?' Forzar la construcción sobre ideas ajenas genera insights que el brainstorming individual no produce. El patrón es problema → causa raíz → acción sistémica.</p>"
      },
      {
        "h2": "Señales de que tu retro necesita cambiar",
        "body": "<p><strong>Red flag #1</strong>: Los mismos 3 temas aparecen en cada retro sin resolverse. Esto indica que las action items son síntomas, no causas. Si 'muchas reuniones' es recurrente, la pregunta real es '¿Qué decisión delegamos a reuniones que podríamos tomar async?' o '¿Qué reunión existe por falta de trust?'</p><p><strong>Red flag #2</strong>: Participan siempre las mismas 3 personas. El formato está beneficiando perfiles extrovertidos. Probá silent brainstorming (escriben en post-its antes de hablar), async retros (contribuyen en Miro/Notion durante 48hs), o técnicas como 1-2-4-All donde primero piensan solos, luego en pairs, luego grupos de 4.</p><p><strong>Red flag #3</strong>: Las action items son vagas ('mejorar comunicación', 'ser más proactivos'). Esto indica que la pregunta no fue específica. Reemplazá '¿Qué mejorar?' por '¿Qué conversación específica deberíamos haber tenido el martes que no tuvimos?' La especificidad genera acción.</p>"
      },
      {
        "h2": "Formatos alternativos que funcionan",
        "body": "<p>El <strong>Timeline Retro</strong>: dibujás una línea temporal del sprint en la pared. Cada persona pega post-its de momentos clave (decisiones, bloqueos, wins) en la cronología. Los clusters revelan patrones: si todos marcan 'caos' en los últimos 3 días del sprint, tu problema es estimation, no ejecución.</p><p>La <strong>Retro de Superlatives</strong>: 'Mayor sorpresa', 'Debate más productivo', 'Bloqueo más frustrante', 'Win más inesperado'. Las categorías tipo premio fuerzan a la gente a elegir eventos específicos, no generalizar. Bonus: es divertida, que es un feature subestimado en retros.</p><p>El <strong>5 Whys aplicado al sprint</strong>: tomás el impedimento más votado y preguntás 'por qué' cinco veces. 'Tuvimos muchas interrupciones.' ¿Por qué? 'Porque Slack es caótico.' ¿Por qué? 'Porque otros equipos no saben cuándo estamos en focus time.' ¿Por qué? Boom, descubriste que el problema es falta de working agreements cross-team, no Slack.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántas preguntas debería usar en una retro de 1 hora?",
        "a": "2-3 preguntas max. Profundidad > amplitud. Una pregunta bien explorada con action items concretos vale más que 10 preguntas superficiales."
      },
      {
        "q": "¿Cómo evito que las retros se vuelvan sesiones de quejas?",
        "a": "Exigí que cada problema venga con una propuesta de solución. O usá el formato 'I wish / I wonder': 'Ojalá pudiéramos X' suena más constructivo que 'X es una mierda'."
      },
      {
        "q": "¿Qué hago si nadie habla en las retros?",
        "a": "Probá formatos escritos primero (silent brainstorming, async retros), rotá el facilitador, o hacé check-in emocional antes: cuando la gente comparte cómo se siente, baja la guardia para temas difíciles."
      },
      {
        "q": "¿Deberían participar stakeholders externos?",
        "a": "Ocasionalmente sí, especialmente POs o engineering managers. Pero aclarales que están como observers: pueden responder preguntas, no dirigir la conversación. El equipo debe sentirse seguro para hablar honestamente."
      }
    ]
  },
  "en": {
    "pageTitle": "Retrospective Question Generator | Genfy",
    "metaDesc": "Facilitator questions for effective agile retrospectives. Break the 'what went well/bad' routine with techniques that generate real insights.",
    "h1": "Retrospective Question Generator",
    "intro": "Transform your retros from mandatory formality to sessions that drive real change. Questions designed for teams that have heard 'what to improve' a thousand times.",
    "tag": "Work",
    "filterLabel": "Focus",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "focus",
        "label": "Focus",
        "items": [
          "Continuous Improvement",
          "Team Dynamics",
          "Processes",
          "Communication",
          "Celebration",
          "Conflicts",
          "Innovation",
          "Burnout Prevention"
        ]
      },
      {
        "id": "questions",
        "label": "Questions",
        "items": [
          "What decision made this sprint do we wish we could reverse?",
          "If this sprint were a movie, what genre would it be and why?",
          "What process do we follow 'because we always did' that we should question?",
          "When during the sprint did you feel most energized? And least?",
          "What difficult conversation have we been avoiding?",
          "If you could eliminate ONE meeting permanently, which one and why?",
          "What did the team learn that wasn't in any backlog item?",
          "What was our best moment of collaboration this sprint?",
          "What impediment did we report that never actually got resolved?",
          "If we had to restart the sprint, what would we do differently on day 1?",
          "What small thing that changed significantly improved your day?",
          "What are we fooling ourselves about as a team?",
          "What feedback didn't you give because you assumed nothing would change?",
          "What pending celebration do we have?",
          "What new skill emerged in someone on the team?",
          "What external dependencies slowed us down most this time?",
          "If our process were a product, what critical bug would it have?",
          "What question should we be asking that nobody asks?",
          "When did you feel your work really mattered this sprint?",
          "What technical risk are we kicking down the road?",
          "What did someone on the team do that deserves public recognition?",
          "What ritual or ceremony became security theater?",
          "What word best describes this sprint?",
          "What data or metric surprised us negatively?",
          "If we could export ONE practice to other teams, what would it be?",
          "What assumption about our users turned out wrong?",
          "Where do we ask permission when we could just act?",
          "What small win went unnoticed?",
          "What blocker resolved itself without intervention?",
          "What external team facilitated our work and we should thank?",
          "When did we have the best technical debate?",
          "What architecture decision is costing us more than expected?",
          "If you had superpowers to change something about the sprint, what would it be?",
          "What failed experiment taught us something valuable?",
          "What's the elephant in the room nobody mentions?",
          "What did we leave 'almost done' that we should finish?",
          "What did the Product Owner do that facilitated or hindered our work?",
          "Where do we need to say NO more often?",
          "What technical debt did we prioritize well (or poorly)?",
          "If this team were a superpower, what would it be and what limitation would it have?",
          "What did we learn about what NOT to do?",
          "What new tool or process did we adopt that actually helped?",
          "When did async communication fail and we needed sync?",
          "What user feedback impacted us most?",
          "What distraction consumed more time than planned?",
          "Where did we grossly overestimate or underestimate?",
          "What pair/mob programming session was most productive?",
          "What legacy code did we finally refactor (or should we)?",
          "What onboarding or knowledge sharing did we do well?",
          "Where did we fail as a team, not as individuals?"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why standard retros fail",
        "body": "<p>The classic 'Start/Stop/Continue' or 'Glad/Sad/Mad' format dies of boredom after the third sprint. Teams go into <strong>autopilot</strong>: they repeat the same issues ('not enough time', 'too many meetings', 'dependencies'), nobody proposes concrete actions, and the retro becomes a Scrum compliance checkbox.</p><p>The problem isn't the format, it's the <strong>lack of cognitive variety</strong>. When you use the same questions, you activate the same thought patterns. 'What went wrong' generates a list of complaints; 'What decision do we wish we could reverse' forces thinking about agency and consequences. The difference is brutal.</p><p>Mature teams need <strong>second-order questions</strong>: not 'what to improve' but 'what prevents us from improving'. Not 'what worked' but 'why did it work and how to replicate it'. Superficial questions generate superficial action items that nobody implements.</p>"
      },
      {
        "h2": "Facilitation techniques for maximum impact",
        "body": "<p>The <strong>initial silence rule</strong>: after launching the question, wait 60 seconds without speaking. The facilitator who fills silence with explanations kills divergent thinking. The best insights emerge after second 30, when people get past the obvious answer.</p><p>Use <strong>dot voting</strong> to prioritize topics, but with a twist: each person has 3 votes and can put all 3 on a single item if they care deeply. This reveals emotional intensity, not just popularity. A topic with 3 votes from one person may be more critical than one with 6 votes from 6 people.</p><p>Implement <strong>deepening rounds</strong>. First round: everyone answers the question. Second round: 'Someone said X, why do you think that happens?' Forcing building on others' ideas generates insights that individual brainstorming doesn't produce. The pattern is problem → root cause → systemic action.</p>"
      },
      {
        "h2": "Signs your retro needs to change",
        "body": "<p><strong>Red flag #1</strong>: The same 3 topics appear in every retro without getting resolved. This indicates action items are symptoms, not causes. If 'too many meetings' is recurring, the real question is 'What decision do we delegate to meetings that we could make async?' or 'What meeting exists because of lack of trust?'</p><p><strong>Red flag #2</strong>: The same 3 people always participate. The format is benefiting extroverted profiles. Try silent brainstorming (write on post-its before speaking), async retros (contribute in Miro/Notion over 48hrs), or techniques like 1-2-4-All where they first think alone, then in pairs, then groups of 4.</p><p><strong>Red flag #3</strong>: Action items are vague ('improve communication', 'be more proactive'). This indicates the question wasn't specific. Replace 'What to improve?' with 'What specific conversation should we have had on Tuesday that we didn't?' Specificity generates action.</p>"
      },
      {
        "h2": "Alternative formats that work",
        "body": "<p>The <strong>Timeline Retro</strong>: draw a sprint timeline on the wall. Each person sticks post-its of key moments (decisions, blockers, wins) on the chronology. Clusters reveal patterns: if everyone marks 'chaos' in the last 3 days of the sprint, your problem is estimation, not execution.</p><p>The <strong>Superlatives Retro</strong>: 'Biggest surprise', 'Most productive debate', 'Most frustrating blocker', 'Most unexpected win'. Award-type categories force people to choose specific events, not generalize. Bonus: it's fun, which is an underrated feature in retros.</p><p>The <strong>5 Whys applied to the sprint</strong>: take the most voted impediment and ask 'why' five times. 'We had too many interruptions.' Why? 'Because Slack is chaotic.' Why? 'Because other teams don't know when we're in focus time.' Why? Boom, you discovered the problem is lack of cross-team working agreements, not Slack.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many questions should I use in a 1-hour retro?",
        "a": "2-3 questions max. Depth > breadth. One well-explored question with concrete action items is worth more than 10 superficial questions."
      },
      {
        "q": "How do I prevent retros from becoming complaint sessions?",
        "a": "Require that each problem comes with a proposed solution. Or use the 'I wish / I wonder' format: 'I wish we could X' sounds more constructive than 'X sucks'."
      },
      {
        "q": "What do I do if nobody talks in retros?",
        "a": "Try written formats first (silent brainstorming, async retros), rotate the facilitator, or do emotional check-in beforehand: when people share how they feel, they lower their guard for difficult topics."
      },
      {
        "q": "Should external stakeholders participate?",
        "a": "Occasionally yes, especially POs or engineering managers. But clarify they're observers: they can answer questions, not direct the conversation. The team must feel safe to speak honestly."
      }
    ]
  }
};
