import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-feedback-constructivo",
    "en": "constructive-feedback-generator"
  },
  "category": "work",
  "emoji": "💬",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Feedback Constructivo | Genfy",
    "metaDesc": "Frameworks y ejemplos para dar feedback constructivo efectivo usando SBI, COIN y otros modelos. Mejorá comunicación en tu equipo con técnicas probadas.",
    "h1": "Generador de Feedback Constructivo",
    "intro": "Dar feedback efectivo es una habilidad que separa managers promedio de excelentes. Este generador te ofrece estructuras probadas para entregar feedback que realmente cambia comportamientos sin dañar relaciones.",
    "tag": "Trabajo",
    "filterLabel": "Framework",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "sbi",
        "label": "SBI (Situación-Comportamiento-Impacto)",
        "items": [
          "Situación: En la reunión de sprint planning del martes. Comportamiento: Interrumpiste a Ana tres veces mientras explicaba su propuesta. Impacto: El equipo no pudo entender completamente su idea y perdimos 15 minutos reconstruyendo contexto.",
          "Situación: Durante el code review del PR #342. Comportamiento: Aprobaste el PR sin comentarios en 2 minutos. Impacto: Se mergeó código con un bug crítico que afectó producción y nos costó 4 horas de rollback.",
          "Situación: En la presentación al cliente del viernes. Comportamiento: Respondiste todas las preguntas sin consultar al resto del equipo. Impacto: Comprometiste tiempos que el equipo no puede cumplir y ahora tenemos expectativas irreales.",
          "Situación: En el standup de hoy. Comportamiento: Dijiste 'todo bien, sin blockers' pero el proyecto está atrasado 3 días. Impacto: No pudimos ayudarte a tiempo y ahora el deadline está en riesgo.",
          "Situación: En el documento de arquitectura que compartiste. Comportamiento: Usaste jerga técnica sin explicarla. Impacto: Los stakeholders no técnicos no pudieron dar feedback útil y ahora tenemos que rehacer la propuesta.",
          "Situación: Durante la retrospectiva del mes pasado. Comportamiento: Propusiste 5 acciones de mejora pero no te ofreciste a liderar ninguna. Impacto: Ninguna acción se ejecutó y repetimos los mismos problemas este sprint.",
          "Situación: En el onboarding de Julia la semana pasada. Comportamiento: Le asignaste 3 tareas complejas sin pair programming. Impacto: Está bloqueada, frustrada, y su confianza bajó. Ahora necesita más tiempo que si hubiéramos invertido en pairing inicial.",
          "Situación: En el canal de Slack #engineering ayer. Comportamiento: Criticaste públicamente la decisión de usar TypeScript. Impacto: El equipo frontend se sintió atacado y ahora hay tensión que afecta la colaboración.",
          "Situación: Durante el incidente del lunes. Comportamiento: Asumiste que el problema era del backend sin investigar. Impacto: Perdimos 2 horas buscando en el lugar equivocado; el issue era de infraestructura.",
          "Situación: En la 1-on-1 de la semana pasada. Comportamiento: Estuviste revisando tu teléfono durante nuestra conversación. Impacto: Sentí que mi preocupación sobre el proyecto no era importante para vos.",
          "Situación: En el diseño de la feature de pagos. Comportamiento: Implementaste tu solución sin discutir alternativas en el RFC. Impacto: Omitimos un edge case que ahora requiere refactoring y 2 sprints adicionales.",
          "Situación: Durante la migración de la base de datos. Comportamiento: No documentaste los pasos del rollback. Impacto: Cuando tuvimos que revertir, nadie supo cómo y extendimos el downtime 3 horas."
        ]
      },
      {
        "id": "coin",
        "label": "COIN (Contexto-Observación-Impacto-Siguiente paso)",
        "items": [
          "Contexto: Estamos en un momento crítico del lanzamiento. Observación: Tus commits del último sprint tienen menos tests que lo usual. Impacto: El QA está encontrando bugs básicos que los tests habrían detectado. Siguiente paso: Volvamos al estándar de 80% coverage antes del release.",
          "Contexto: El equipo está creciendo y necesitamos consistencia. Observación: Tu código usa patrones diferentes al style guide. Impacto: Otros devs necesitan más tiempo para entender tu código. Siguiente paso: Revisá el style guide y en el próximo PR seguí las convenciones acordadas.",
          "Contexto: Tenemos deadline fijo con el cliente. Observación: Cambiaste el scope del ticket sin avisar. Impacto: Product está comunicando features que no vamos a entregar. Siguiente paso: Cualquier cambio de scope necesita aprobación en #product antes de implementar.",
          "Contexto: Estamos construyendo cultura de ownership. Observación: Los bugs de tu feature están siendo fijeados por otros. Impacto: El equipo se siente responsable por tu código y vos perdés oportunidades de aprender. Siguiente paso: Cuando se reporte un bug en tu feature, tomalo como primera prioridad.",
          "Contexto: Las retrospectivas son espacios seguros para mejorar. Observación: Desestimaste la preocupación de Pablo sobre los deploys. Impacto: Pablo no volvió a hablar en la retro y perdimos feedback valioso. Siguiente paso: En la próxima, escuchá todas las preocupaciones sin defender la posición actual.",
          "Contexto: Nuestros clientes son startups pequeñas con presupuesto ajustado. Observación: En la demo propusiste features enterprise que triplican el costo. Impacto: Confundiste al cliente y ahora dudan si somos el producto para ellos. Siguiente paso: Antes de demos, revisá el perfil del cliente para ajustar el pitch.",
          "Contexto: El equipo trabaja async entre 3 zonas horarias. Observación: Tus mensajes asumen respuesta inmediata. Impacto: Bloqueás trabajo de otros y generás estrés innecesario. Siguiente paso: Incluí contexto completo en cada mensaje y date 24hs de buffer para respuestas.",
          "Contexto: Estamos migrando a microservicios gradualmente. Observación: Tu PR introduce dependencia nueva entre servicios que queremos separar. Impacto: Dificulta la migración y crea acoplamiento. Siguiente paso: En el próximo ticket, revisá el mapa de dependencias antes de diseñar la solución.",
          "Contexto: Los usuarios reportan lentitud en el dashboard. Observación: Tu query N+1 hace 500 requests a la DB. Impacto: El dashboard tarda 12 segundos en cargar. Siguiente paso: Reescribí la query con JOINs o eager loading, target es <2 segundos.",
          "Contexto: Tenemos política de no pushear a main directamente. Observación: Bypaseaste el PR process para un hotfix. Impacto: El hotfix introdujo otro bug y nadie lo revisó. Siguiente paso: Incluso para hotfixes, hacé PR rápido. Si es crítico, pedí emergency review.",
          "Contexto: Nuestro roadmap público es herramienta de marketing. Observación: Compartiste features no confirmadas como 'coming soon'. Impacto: Clientes están pidiendo esas features y no están en nuestro plan. Siguiente paso: Antes de hablar públicamente de features, confirmá con Product que están comprometidas."
        ]
      },
      {
        "id": "situational",
        "label": "Feedback Situacional",
        "items": [
          "Feedback de Refuerzo: 'Tu explicación del problema de CORS en la retro fue clara y educativa. Tres devs me dijeron después que finalmente lo entendieron. Seguí compartiendo conocimiento así.'",
          "Feedback Correctivo: 'Necesito que llegues a las dailies a horario. Esta semana llegaste tarde 3 veces y perdimos 15 minutos esperándote. ¿Qué podemos ajustar para que esto no pase?'",
          "Feedback de Coaching: 'Noté que resolviste el bug de la paginación solo. La próxima vez, considerá hacer pair programming. Es más lento al principio pero te ayuda a validar el approach y aprender técnicas nuevas.'",
          "Feedback de Evaluación: 'En el último quarter tus PRs tardaron 3 días promedio en ser aprobados, vs 1 día del equipo. Esto está afectando tu velocidad. Vamos a trabajar juntos en hacer PRs más pequeños y fáciles de revisar.'",
          "Feedback de Crecimiento: 'Has mejorado notablemente en escribir tests desde que hicimos el workshop. Ahora tus PRs tienen >85% coverage consistentemente. El siguiente nivel es agregar integration tests, ¿te interesa liderar ese esfuerzo?'",
          "Feedback Preventivo: 'Vi que tomaste el ticket de refactoring del core module. Es un área compleja que ha dado problemas. Antes de empezar, hacé un spike de 1 día para identificar risks y charlamos el approach.'",
          "Feedback de Reconocimiento: 'El postmortem que escribiste del incidente fue ejemplar. Identificaste la root cause, propusiste mejoras concretas, y lo hiciste sin culpar. Ese es el estándar que queremos para todos los postmortems.'",
          "Feedback de Expectativas: 'Como tech lead, necesito que revises PRs dentro de las 24hs. Esta semana dos PRs esperaron 4 días, bloqueando trabajo. ¿Qué necesitás para priorizar code reviews?'",
          "Feedback de Alineación: 'Tu propuesta de migrar a GraphQL es interesante pero no está en nuestras prioridades actuales. Este quarter estamos 100% en estabilidad, no en tech debs. Guardemos la idea para Q3.'",
          "Feedback 360: 'Tres personas mencionaron independientemente que tus code reviews son muy detallados pero a veces inflexibles. Hay valor en mantener estándares, pero también en ser pragmático. ¿Cómo podemos balancear ambos?'",
          "Feedback de Colaboración: 'En el proyecto de la API, trabajaste muy cerrado con backend. Frontend se enteró tarde de los cambios y tuvimos que rehacer integraciones. En el próximo proyecto, incluilos desde el diseño.'",
          "Feedback de Priorización: 'Dedicaste 2 días a optimizar un endpoint que recibe 3 requests/día, pero tenemos bugs P0 sin tocar. Entiendo el impulso de hacer las cosas bien, pero necesito que priorices según impacto en usuarios.'"
        ]
      },
      {
        "id": "positive",
        "label": "Feedback Positivo Específico",
        "items": [
          "Tu debugging del issue de memoria fue metodológico y bien documentado. Ver tu proceso en el Slack thread me enseñó técnicas nuevas. Compartir el razonamiento así eleva el nivel del equipo entero.",
          "La forma en que manejaste el desacuerdo con Product en la planning fue profesional y constructiva. Presentaste datos, escuchaste su perspectiva, y llegaron a un compromiso. Eso es liderazgo.",
          "Notaste que el nuevo dev estaba bloqueado y te ofreciste a hacer pair programming sin que nadie te lo pidiera. Ese tipo de iniciativa construye la cultura que queremos.",
          "Tu refactor del módulo de autenticación redujo la complejidad ciclomática de 15 a 6 sin cambiar funcionalidad. Código más simple es código más mantenible. Excelente trabajo.",
          "En la incident response del sábado mantuviste la calma, comunicaste claramente, y delegaste tareas efectivamente. Tu liderazgo en crisis es un asset enorme para el equipo.",
          "La documentación que agregaste al README sobre el setup local ahorró 2 horas de onboarding al último dev. Documentación proactiva así es oro.",
          "Rechazaste el feature request del cliente porque no encajaba con nuestra visión de producto. Tener criterio para decir no demuestra que entendés la estrategia.",
          "Tu presentación sobre testing strategies en la guild meeting fue clara, práctica, y bien preparada. Tres equipos están adoptando las técnicas que mostraste.",
          "Identificaste el performance bottleneck analizando los traces de APM, no asumiendo. Ese approach data-driven previene optimizaciones prematuras.",
          "Pediste feedback sobre tu PR antes de marcarlo ready. Esa humildad y búsqueda de mejora continua es lo que hace crecer a los devs senior.",
          "Defendiste al equipo cuando el stakeholder pidió features imposibles para el deadline. Proteger al equipo de compromisos irreales es responsabilidad del tech lead y lo hiciste bien.",
          "Tu initiative de automatizar los deployments ahorró 3 horas por semana al equipo. Ver oportunidades de mejora y ejecutarlas sin esperar permiso es ownership real."
        ]
      },
      {
        "id": "difficult",
        "label": "Feedback Difícil",
        "items": [
          "He notado un patrón: en las últimas 4 PRs tus tests solo cubren happy path. Los edge cases descubiertos en QA podrían haberse detectado con tests. Necesito que los tests cubran escenarios de error también.",
          "Tu comunicación en Slack a veces es brusca. Tres personas me han comentado que tus mensajes las hacen sentir incompetentes. Entiendo que valorás la eficiencia, pero el tono importa. Trabajemos en esto juntos.",
          "Los commits del último mes tienen mensajes como 'fix', 'wip', 'update'. Esto dificulta entender el historial del proyecto. De ahora en más, necesito commits descriptivos siguiendo conventional commits.",
          "Has faltado a 5 de las últimas 8 retrospectivas. Las retros son obligatorias porque construyen cultura de mejora continua. Si hay un conflicto de horario, hablemos. Si no, necesito que asistas.",
          "Tu código resuelve el problema pero ignora los estándares de arquitectura que definimos. Entiendo que tu approach es más rápido, pero la consistencia es más importante que la velocidad individual.",
          "En la última incident call, culpaste a DevOps públicamente. Eso daña la confianza del equipo. En incidentes, colaboramos sin culpar. Podés expresar frustración conmigo en privado, no en el war room.",
          "Has rechazado las últimas 3 oportunidades de mentorear juniors. Entiendo que tenés workload alto, pero mentoring es parte de tu rol como senior. Necesitamos que dediques 2 horas/semana a esto.",
          "Tu estimación del proyecto fue 2 semanas, pero llevamos 6 y no está completo. No estoy enojado por el error, pero necesito que las estimaciones sean honestas. Si no sabés, decí 'no sé' y hacemos un spike.",
          "Has implementado 3 features sin discutir el diseño. Valoramos autonomía, pero estas decisiones afectan al equipo. Necesito que las decisiones de arquitectura pasen por RFC antes de escribir código.",
          "Tu disponibilidad para pair programming es cero. Tres personas pidieron tu ayuda y las redirigiste a documentación. Documentación está bien, pero a veces el pairing es más efectivo. Necesitás balancear ambos.",
          "El feedback que das en code reviews es genérico: 'LGTM' o 'cambiar esto'. Code review es oportunidad de enseñar. Necesito comentarios más sustanciosos: explicá el por qué de tus sugerencias."
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Principios de feedback efectivo",
        "body": "<p>El feedback debe ser inmediato pero no instantáneo. Dar feedback en caliente, cuando estás frustrado, casi siempre sale mal. Esperá al menos 2 horas después del evento para que tus emociones se asienten. Pero no esperes una semana: el contexto se pierde y el impacto disminuye. 24-48 horas es el sweet spot para la mayoría de situaciones.</p><p>Específico vence a genérico siempre. 'Tu comunicación necesita mejorar' es inútil. La persona no sabe qué cambiar. 'En la reunión de hoy interrumpiste a Ana tres veces mientras explicaba su propuesta' es concreto. Pueden recordar el momento, entender el problema, y cambiar el comportamiento específico. Cada pieza de feedback debería incluir un ejemplo observable.</p><p>El ratio positivo-negativo importa, pero no de la forma que crees. La regla de 'sandwich' (positivo-negativo-positivo) es transparente y la gente aprende a ignorar el positivo. Mejor: da feedback positivo regularmente cuando lo observás, no solo cuando necesitás dar feedback negativo. Esto construye una cuenta bancaria de confianza que hace que el feedback difícil sea recibido con apertura, no defensividad.</p>"
      },
      {
        "h2": "Frameworks probados: SBI y COIN",
        "body": "<p>SBI (Situación-Comportamiento-Impacto) funciona porque elimina interpretación. En lugar de 'fuiste grosero', decís: 'En la retro (situación), interrumpiste a Juan tres veces (comportamiento), lo cual hizo que no pudiera terminar su punto (impacto).' Esto es irrefutable: son hechos observables. La persona puede estar en desacuerdo con la interpretación 'grosero', pero no puede negar que interrumpió tres veces.</p><p>COIN (Contexto-Observación-Impacto-Siguiente paso) agrega un componente crucial: acción. Muchos managers dan feedback pero no dicen qué esperan diferente. 'Contexto: estamos en crunch. Observación: tus PRs tardan 3 días en ser aprobados. Impacto: bloqueás a otros. Siguiente paso: revisá PRs dentro de 24hs esta semana.' Esto convierte feedback en plan de acción.</p><p>Para feedback positivo, ambos frameworks funcionan. No reserves las estructuras solo para feedback negativo. 'En la incident response del sábado (situación), mantuviste la calma y delegaste efectivamente (comportamiento), lo cual nos ayudó a resolver en 2 horas en lugar de 5 (impacto)' refuerza exactamente qué hacer más. Feedback positivo específico es más potente que 'buen trabajo'.</p>"
      },
      {
        "h2": "Dar feedback difícil sin destruir relaciones",
        "body": "<p>Empezá con permiso. 'Tengo feedback sobre la presentación de ayer, ¿es buen momento?' da a la persona control. Si están teniendo un día horrible, tal vez no sea el momento. Feedback dado cuando alguien no está receptivo es feedback desperdiciado. La única excepción: safety issues que no pueden esperar.</p><p>Asumí intención positiva y hablá del comportamiento, no del carácter. 'Sos descuidado' es un ataque personal. 'Los últimos 3 PRs no tenían tests y los bugs se descubrieron en producción' es un patrón observable. La persona puede cambiar comportamiento; no pueden cambiar su carácter. Focused en qué hicieron, no en quiénes son.</p><p>Después de dar feedback, preguntá 'eso tiene sentido para vos?' No es retórico: realmente querés saber si entendieron. A veces descubrís que tenías información incompleta. Otras veces entendés que necesitás explicar más. Y siempre, da chance de que la otra persona responda. Feedback no es monólogo; es el inicio de una conversación sobre cómo mejorar juntos.</p>"
      },
      {
        "h2": "Errores comunes al dar feedback",
        "body": "<p>El más grande: acumular feedback y soltarlo todo en la 1-on-1 mensual. Esto abruma a la persona y hace imposible actuar en todos los puntos. Además, el feedback viejo pierde contexto. Si algo te molestó hace 3 semanas, deberías haberlo dicho hace 3 semanas. La excepción: patrones que necesitás ver varias veces para estar seguro de que son patrones.</p><p>Comparar con otros es peligroso. 'Juan entrega features más rápido que vos' crea resentimiento, no mejora. Las personas son diferentes, los contextos son diferentes. En lugar de comparar, compará contra estándares: 'El estándar del equipo es test coverage >80% y tus últimos PRs están en 50%.' Estándares son objetivos, comparaciones son personales.</p><p>Dar feedback por Slack o email sobre temas sensibles es cobarde y contraproducente. El texto pierde tono, no hay chance de diálogo inmediato, y la persona puede malinterpretar brutalmente. Para feedback que anticipás será difícil de recibir, siempre cara a cara (o videollamada si son remotos). El canal de comunicación es parte del mensaje.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Con qué frecuencia debería dar feedback?",
        "a": "Feedback positivo: cuando lo ves. Feedback correctivo: dentro de 48hs del comportamiento. No esperes a 1-on-1s mensuales. El feedback regular normaliza la conversación y previene sorpresas en evaluaciones."
      },
      {
        "q": "¿Qué hago si la persona se pone defensiva?",
        "a": "Pausá, reconocé la emoción ('veo que esto te afectó'), y preguntá su perspectiva. A veces la defensividad señala que tu feedback omitió contexto importante. Escuchá genuinamente, no esperes turno para rebatir."
      },
      {
        "q": "¿Debería dar feedback en público o privado?",
        "a": "Feedback negativo siempre en privado. Feedback positivo puede ser público si la persona lo aprecia (algunos lo odian). Ante duda, privado. Elogios públicos forzados avergüenzan más que motivan."
      },
      {
        "q": "¿Cómo sé si mi feedback es útil?",
        "a": "Preguntá. 'Este feedback, ¿te da claridad sobre qué cambiar?' Si dicen sí pero el comportamiento no cambia después de 2-3 conversaciones, tal vez el problema es otro: falta de skills, falta de motivación, o que el feedback no era accionable."
      }
    ]
  },
  "en": {
    "pageTitle": "Constructive Feedback Generator | Genfy",
    "metaDesc": "Frameworks and examples for giving effective constructive feedback using SBI, COIN and other models. Improve team communication with proven techniques.",
    "h1": "Constructive Feedback Generator",
    "intro": "Giving effective feedback is a skill that separates average managers from excellent ones. This generator offers proven structures to deliver feedback that truly changes behaviors without damaging relationships.",
    "tag": "Work",
    "filterLabel": "Framework",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "sbi",
        "label": "SBI (Situation-Behavior-Impact)",
        "items": [
          "Situation: In Tuesday's sprint planning meeting. Behavior: You interrupted Ana three times while she explained her proposal. Impact: The team couldn't fully understand her idea and we lost 15 minutes reconstructing context.",
          "Situation: During the code review of PR #342. Behavior: You approved the PR without comments in 2 minutes. Impact: Code with a critical bug was merged, affecting production and costing us 4 hours of rollback.",
          "Situation: In Friday's client presentation. Behavior: You answered all questions without consulting the rest of the team. Impact: You committed to timelines the team can't meet and now we have unrealistic expectations.",
          "Situation: In today's standup. Behavior: You said 'all good, no blockers' but the project is 3 days behind. Impact: We couldn't help you in time and now the deadline is at risk.",
          "Situation: In the architecture document you shared. Behavior: You used technical jargon without explaining it. Impact: Non-technical stakeholders couldn't give useful feedback and now we have to redo the proposal.",
          "Situation: During last month's retrospective. Behavior: You proposed 5 improvement actions but didn't offer to lead any. Impact: No action was executed and we repeated the same problems this sprint.",
          "Situation: In Julia's onboarding last week. Behavior: You assigned her 3 complex tasks without pair programming. Impact: She's blocked, frustrated, and her confidence dropped. Now she needs more time than if we'd invested in initial pairing.",
          "Situation: In the #engineering Slack channel yesterday. Behavior: You publicly criticized the decision to use TypeScript. Impact: The frontend team felt attacked and now there's tension affecting collaboration.",
          "Situation: During Monday's incident. Behavior: You assumed the problem was in the backend without investigating. Impact: We lost 2 hours looking in the wrong place; the issue was infrastructure.",
          "Situation: In last week's 1-on-1. Behavior: You were checking your phone during our conversation. Impact: I felt my concern about the project wasn't important to you.",
          "Situation: In the payments feature design. Behavior: You implemented your solution without discussing alternatives in the RFC. Impact: We missed an edge case that now requires refactoring and 2 additional sprints.",
          "Situation: During the database migration. Behavior: You didn't document the rollback steps. Impact: When we had to revert, nobody knew how and we extended downtime 3 hours."
        ]
      },
      {
        "id": "coin",
        "label": "COIN (Context-Observation-Impact-Next step)",
        "items": [
          "Context: We're at a critical moment in the launch. Observation: Your commits from last sprint have less tests than usual. Impact: QA is finding basic bugs that tests would have caught. Next step: Let's return to the 80% coverage standard before release.",
          "Context: The team is growing and we need consistency. Observation: Your code uses patterns different from the style guide. Impact: Other devs need more time to understand your code. Next step: Review the style guide and in the next PR follow agreed conventions.",
          "Context: We have a fixed deadline with the client. Observation: You changed the ticket scope without notice. Impact: Product is communicating features we won't deliver. Next step: Any scope change needs approval in #product before implementing.",
          "Context: We're building ownership culture. Observation: Bugs in your feature are being fixed by others. Impact: The team feels responsible for your code and you lose learning opportunities. Next step: When a bug is reported in your feature, take it as first priority.",
          "Context: Retrospectives are safe spaces to improve. Observation: You dismissed Pablo's concern about deploys. Impact: Pablo didn't speak again in the retro and we lost valuable feedback. Next step: In the next one, listen to all concerns without defending the current position.",
          "Context: Our clients are small startups with tight budgets. Observation: In the demo you proposed enterprise features that triple the cost. Impact: You confused the client and now they doubt if we're the product for them. Next step: Before demos, review the client profile to adjust the pitch.",
          "Context: The team works async across 3 time zones. Observation: Your messages assume immediate response. Impact: You block others' work and generate unnecessary stress. Next step: Include full context in each message and give 24hr buffer for responses.",
          "Context: We're gradually migrating to microservices. Observation: Your PR introduces new dependency between services we want to separate. Impact: It hinders migration and creates coupling. Next step: In the next ticket, review the dependency map before designing the solution.",
          "Context: Users report slowness in the dashboard. Observation: Your N+1 query makes 500 requests to the DB. Impact: The dashboard takes 12 seconds to load. Next step: Rewrite the query with JOINs or eager loading, target is <2 seconds.",
          "Context: We have a policy of not pushing to main directly. Observation: You bypassed the PR process for a hotfix. Impact: The hotfix introduced another bug and nobody reviewed it. Next step: Even for hotfixes, do a quick PR. If critical, ask for emergency review.",
          "Context: Our public roadmap is a marketing tool. Observation: You shared unconfirmed features as 'coming soon'. Impact: Clients are asking for those features and they're not in our plan. Next step: Before talking publicly about features, confirm with Product they're committed."
        ]
      },
      {
        "id": "situational",
        "label": "Situational Feedback",
        "items": [
          "Reinforcing Feedback: 'Your explanation of the CORS problem in the retro was clear and educational. Three devs told me afterwards they finally understood it. Keep sharing knowledge like that.'",
          "Corrective Feedback: 'I need you to arrive at dailies on time. This week you were late 3 times and we lost 15 minutes waiting for you. What can we adjust so this doesn't happen?'",
          "Coaching Feedback: 'I noticed you solved the pagination bug alone. Next time, consider doing pair programming. It's slower at first but helps you validate the approach and learn new techniques.'",
          "Evaluation Feedback: 'Last quarter your PRs took 3 days average to be approved, vs 1 day for the team. This is affecting your velocity. We'll work together on making PRs smaller and easier to review.'",
          "Growth Feedback: 'You've noticeably improved in writing tests since we did the workshop. Now your PRs consistently have >85% coverage. The next level is adding integration tests, interested in leading that effort?'",
          "Preventive Feedback: 'I saw you took the core module refactoring ticket. It's a complex area that has caused problems. Before starting, do a 1-day spike to identify risks and we'll discuss the approach.'",
          "Recognition Feedback: 'The postmortem you wrote of the incident was exemplary. You identified root cause, proposed concrete improvements, and did it without blaming. That's the standard we want for all postmortems.'",
          "Expectation Feedback: 'As tech lead, I need you to review PRs within 24hrs. This week two PRs waited 4 days, blocking work. What do you need to prioritize code reviews?'",
          "Alignment Feedback: 'Your proposal to migrate to GraphQL is interesting but not in our current priorities. This quarter we're 100% on stability, not tech debt. Let's save the idea for Q3.'",
          "360 Feedback: 'Three people independently mentioned your code reviews are very detailed but sometimes inflexible. There's value in maintaining standards, but also in being pragmatic. How can we balance both?'",
          "Collaboration Feedback: 'In the API project, you worked very closed with backend. Frontend learned of changes late and we had to redo integrations. In the next project, include them from design.'",
          "Prioritization Feedback: 'You spent 2 days optimizing an endpoint that receives 3 requests/day, but we have untouched P0 bugs. I understand the impulse to do things well, but I need you to prioritize by user impact.'"
        ]
      },
      {
        "id": "positive",
        "label": "Specific Positive Feedback",
        "items": [
          "Your debugging of the memory issue was methodical and well documented. Seeing your process in the Slack thread taught me new techniques. Sharing reasoning like that elevates the entire team's level.",
          "The way you handled the disagreement with Product in planning was professional and constructive. You presented data, listened to their perspective, and reached a compromise. That's leadership.",
          "You noticed the new dev was blocked and offered to do pair programming without anyone asking. That kind of initiative builds the culture we want.",
          "Your refactor of the authentication module reduced cyclomatic complexity from 15 to 6 without changing functionality. Simpler code is more maintainable code. Excellent work.",
          "In Saturday's incident response you kept calm, communicated clearly, and delegated tasks effectively. Your crisis leadership is a huge asset for the team.",
          "The documentation you added to the README about local setup saved 2 hours of onboarding for the last dev. Proactive documentation like that is gold.",
          "You rejected the client's feature request because it didn't fit our product vision. Having criteria to say no shows you understand the strategy.",
          "Your presentation on testing strategies in the guild meeting was clear, practical, and well prepared. Three teams are adopting the techniques you showed.",
          "You identified the performance bottleneck by analyzing APM traces, not assuming. That data-driven approach prevents premature optimization.",
          "You asked for feedback on your PR before marking it ready. That humility and continuous improvement seeking is what makes senior devs grow.",
          "You defended the team when the stakeholder asked for impossible features for the deadline. Protecting the team from unrealistic commitments is the tech lead's responsibility and you did it well.",
          "Your initiative to automate deployments saved 3 hours per week for the team. Seeing improvement opportunities and executing them without waiting for permission is real ownership."
        ]
      },
      {
        "id": "difficult",
        "label": "Difficult Feedback",
        "items": [
          "I've noticed a pattern: in the last 4 PRs your tests only cover happy path. Edge cases discovered in QA could have been caught with tests. I need tests to also cover error scenarios.",
          "Your communication in Slack is sometimes abrupt. Three people have told me your messages make them feel incompetent. I understand you value efficiency, but tone matters. Let's work on this together.",
          "Last month's commits have messages like 'fix', 'wip', 'update'. This makes project history hard to understand. From now on, I need descriptive commits following conventional commits.",
          "You've missed 5 of the last 8 retrospectives. Retros are mandatory because they build continuous improvement culture. If there's a schedule conflict, let's talk. If not, I need you to attend.",
          "Your code solves the problem but ignores the architecture standards we defined. I understand your approach is faster, but consistency is more important than individual speed.",
          "In the last incident call, you publicly blamed DevOps. That damages team trust. In incidents, we collaborate without blaming. You can express frustration to me privately, not in the war room.",
          "You've declined the last 3 opportunities to mentor juniors. I understand you have high workload, but mentoring is part of your senior role. We need you to dedicate 2 hours/week to this.",
          "Your project estimation was 2 weeks, but we're at 6 and it's not complete. I'm not angry about the error, but I need estimates to be honest. If you don't know, say 'I don't know' and we'll do a spike.",
          "You've implemented 3 features without discussing the design. We value autonomy, but these decisions affect the team. I need architecture decisions to go through RFC before writing code.",
          "Your availability for pair programming is zero. Three people asked for your help and you redirected them to documentation. Documentation is fine, but sometimes pairing is more effective. You need to balance both.",
          "The feedback you give in code reviews is generic: 'LGTM' or 'change this'. Code review is a teaching opportunity. I need more substantive comments: explain the why of your suggestions."
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Principles of effective feedback",
        "body": "<p>Feedback should be immediate but not instant. Giving feedback while hot, when you're frustrated, almost always goes wrong. Wait at least 2 hours after the event for your emotions to settle. But don't wait a week: context is lost and impact diminishes. 24-48 hours is the sweet spot for most situations.</p><p>Specific beats generic always. 'Your communication needs improvement' is useless. The person doesn't know what to change. 'In today's meeting you interrupted Ana three times while she explained her proposal' is concrete. They can remember the moment, understand the problem, and change the specific behavior. Every piece of feedback should include an observable example.</p><p>The positive-negative ratio matters, but not how you think. The 'sandwich' rule (positive-negative-positive) is transparent and people learn to ignore the positive. Better: give positive feedback regularly when you observe it, not just when you need to give negative feedback. This builds a trust bank account that makes difficult feedback be received with openness, not defensiveness.</p>"
      },
      {
        "h2": "Proven frameworks: SBI and COIN",
        "body": "<p>SBI (Situation-Behavior-Impact) works because it eliminates interpretation. Instead of 'you were rude', you say: 'In the retro (situation), you interrupted Juan three times (behavior), which prevented him from finishing his point (impact).' This is irrefutable: they're observable facts. The person may disagree with the interpretation 'rude', but can't deny they interrupted three times.</p><p>COIN (Context-Observation-Impact-Next step) adds a crucial component: action. Many managers give feedback but don't say what they expect differently. 'Context: we're in crunch. Observation: your PRs take 3 days to be approved. Impact: you block others. Next step: review PRs within 24hrs this week.' This converts feedback into action plan.</p><p>For positive feedback, both frameworks work. Don't reserve structures only for negative feedback. 'In Saturday's incident response (situation), you kept calm and delegated effectively (behavior), which helped us resolve in 2 hours instead of 5 (impact)' reinforces exactly what to do more. Specific positive feedback is more powerful than 'good job'.</p>"
      },
      {
        "h2": "Giving difficult feedback without destroying relationships",
        "body": "<p>Start with permission. 'I have feedback about yesterday's presentation, is this a good time?' gives the person control. If they're having a horrible day, maybe it's not the moment. Feedback given when someone isn't receptive is wasted feedback. The only exception: safety issues that can't wait.</p><p>Assume positive intent and talk about behavior, not character. 'You're careless' is a personal attack. 'The last 3 PRs had no tests and bugs were discovered in production' is an observable pattern. The person can change behavior; they can't change their character. Focus on what they did, not who they are.</p><p>After giving feedback, ask 'does that make sense to you?' It's not rhetorical: you really want to know if they understood. Sometimes you discover you had incomplete information. Other times you understand you need to explain more. And always, give chance for the other person to respond. Feedback isn't monologue; it's the start of a conversation about how to improve together.</p>"
      },
      {
        "h2": "Common mistakes when giving feedback",
        "body": "<p>The biggest: accumulating feedback and releasing it all in the monthly 1-on-1. This overwhelms the person and makes it impossible to act on all points. Also, old feedback loses context. If something bothered you 3 weeks ago, you should have said it 3 weeks ago. Exception: patterns you need to see several times to be sure they're patterns.</p><p>Comparing with others is dangerous. 'Juan delivers features faster than you' creates resentment, not improvement. People are different, contexts are different. Instead of comparing, compare against standards: 'The team standard is test coverage >80% and your last PRs are at 50%.' Standards are objective, comparisons are personal.</p><p>Giving feedback via Slack or email about sensitive topics is cowardly and counterproductive. Text loses tone, there's no chance for immediate dialogue, and the person can brutally misinterpret. For feedback you anticipate will be hard to receive, always face-to-face (or video call if remote). The communication channel is part of the message.</p>"
      }
    ],
    "faq": [
      {
        "q": "How often should I give feedback?",
        "a": "Positive feedback: when you see it. Corrective feedback: within 48hrs of the behavior. Don't wait for monthly 1-on-1s. Regular feedback normalizes the conversation and prevents surprises in evaluations."
      },
      {
        "q": "What do I do if the person gets defensive?",
        "a": "Pause, acknowledge the emotion ('I see this affected you'), and ask their perspective. Sometimes defensiveness signals your feedback omitted important context. Listen genuinely, don't wait for your turn to rebut."
      },
      {
        "q": "Should I give feedback in public or private?",
        "a": "Negative feedback always in private. Positive feedback can be public if the person appreciates it (some hate it). When in doubt, private. Forced public praise embarrasses more than motivates."
      },
      {
        "q": "How do I know if my feedback is useful?",
        "a": "Ask. 'Does this feedback give you clarity on what to change?' If they say yes but behavior doesn't change after 2-3 conversations, maybe the problem is different: lack of skills, lack of motivation, or the feedback wasn't actionable."
      }
    ]
  }
};
