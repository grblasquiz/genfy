import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-tiempo-estimado-tarea",
    "en": "task-time-estimator"
  },
  "category": "work",
  "emoji": "⏰",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Tiempo Estimado de Tarea | Genfy",
    "metaDesc": "Estimá la duración de tareas usando planning poker y story points. Convertí puntos a horas realistas considerando complejidad, riesgo y contexto del equipo.",
    "h1": "Generador de Tiempo Estimado de Tarea",
    "intro": "Generá estimaciones de tiempo basadas en planning poker, story points y experiencia del equipo. Considerá complejidad técnica, incertidumbre y contexto para calcular duraciones realistas.",
    "tag": "Trabajo",
    "filterLabel": "Complejidad",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "complexity",
        "label": "Complejidad",
        "items": [
          "1 punto - Cambio trivial de texto o estilo",
          "2 puntos - Ajuste simple de lógica existente",
          "3 puntos - Feature pequeña con componente nuevo",
          "5 puntos - Feature mediana con integración",
          "8 puntos - Feature compleja multi-componente",
          "13 puntos - Refactor importante o migración",
          "21 puntos - Arquitectura nueva o reescritura",
          "Spike técnico - Investigación sin entregable",
          "Tarea de configuración - Setup sin código",
          "Bug crítico - Requiere hotfix inmediato",
          "Bug menor - Fix aislado sin dependencias",
          "Optimización de performance - Mejora existente",
          "Pruebas end-to-end - Suite de testing",
          "Documentación técnica - Sin código",
          "Diseño de API - Especificación completa",
          "Integración third-party - SDK externo",
          "Feature flag - Implementación simple",
          "A/B test setup - Configuración experimento",
          "Migración de datos - Scripts + validación",
          "Refactor sin cambio funcional - Mejora código",
          "UI polishing - Ajustes visuales finales",
          "Accessibility improvements - WCAG compliance",
          "Internacionalización - i18n setup",
          "Security hardening - Parches y auditoría",
          "CI/CD pipeline - Automatización deploy",
          "Monitoring setup - Dashboards y alertas",
          "Database migration - Schema changes",
          "Code review profundo - Análisis técnico",
          "Prototipo rápido - Throwaway code",
          "Technical debt payment - Limpieza acumulada",
          "Cross-browser testing - Validación múltiple",
          "Mobile responsive - Adaptación pantallas",
          "Email templates - HTML transaccional",
          "Cron job setup - Tarea programada",
          "Webhook integration - Listener externo",
          "GraphQL resolver - Nueva query/mutation",
          "Redis caching - Implementación cache",
          "Socket.io real-time - Feature en vivo",
          "Stripe integration - Pagos completos",
          "Google Auth - OAuth implementation",
          "PDF generation - Reportes descargables",
          "CSV export/import - Bulk operations",
          "Search indexing - Elasticsearch setup",
          "Image processing - Upload y resize",
          "Video transcoding - Media pipeline",
          "Notification system - Multi-channel",
          "Rate limiting - Throttling API",
          "Backup automation - Disaster recovery",
          "Load testing - Performance validation",
          "User analytics - Event tracking setup"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo funciona planning poker",
        "body": "<p>Planning poker es una técnica de estimación basada en consenso donde cada miembro del equipo vota simultáneamente usando cartas con números de la secuencia Fibonacci (1, 2, 3, 5, 8, 13, 21). Los números no son horas, son <strong>story points</strong>: unidades abstractas que representan esfuerzo, complejidad y riesgo combinados.</p><p>El proceso: alguien presenta una tarea, el equipo hace preguntas, todos eligen una carta en secreto, revelan simultáneamente. Si hay consenso, ese es el puntaje. Si hay disparidad (ej: un 3 y un 13), los extremos explican su razonamiento y se vuelve a votar. La clave es la conversación: un dev puede ver complejidad técnica que otros no, o QA identifica casos borde que aumentan el esfuerzo.</p><p>¿Por qué Fibonacci? Los gaps crecientes reflejan incertidumbre: distinguir entre 1 y 2 puntos es fácil, pero entre 13 y 15 no tiene sentido porque a esa escala la precisión es imposible. Si algo parece más de 13, probablemente debas dividirlo en tareas más chicas.</p>"
      },
      {
        "h2": "De story points a horas reales",
        "body": "<p>Story points no son horas, pero eventualmente necesitás traducirlos a calendario. Cada equipo tiene su propia <strong>velocidad</strong>: puntos completados por sprint. Si en un sprint de 2 semanas completás 40 puntos y tenés 4 devs, tu velocidad es ~10 puntos/dev/sprint, o ~1.25 puntos/dev/día.</p><p>Para convertir puntos a horas, usá tu histórico. Si 1 punto suele tomar 2-4 horas, 5 puntos son 10-20 horas (1-2.5 días). Pero ojo: esto es un promedio. Un 5 en backend puede ser 12 horas; un 5 en frontend puede ser 8. El contexto importa: ¿hay código legacy? ¿Equipo nuevo? ¿Dependencias externas? Agregá buffer.</p><p>Error común: convertir mecánicamente puntos a horas ('1 punto = 1 hora') ignora que los puntos incluyen testing, code review, refactor, reuniones. Una tarea de 3 puntos raramente son 3 horas de coding puro; son 3 puntos de esfuerzo total, que pueden ser 6-10 horas de calendario considerando interrupciones y overhead.</p>"
      },
      {
        "h2": "Factores que afectan la estimación",
        "body": "<p>La complejidad técnica es obvia: integrar una API externa con documentación pobre es más que copiar un componente existente. Pero hay factores menos visibles: <strong>contexto del equipo</strong> (¿alguien ya hizo algo similar?), <strong>calidad del diseño</strong> (mockups claros vs 'hacelo lindo'), <strong>claridad de requisitos</strong> (criterios de aceptación concretos vs 'algo como X').</p><p>El riesgo multiplica esfuerzo. Una tarea con dependencia de un servicio externo inestable puede ser técnicamente simple pero arriesgada: merece más puntos por el tiempo potencial de debugging. Lo mismo con cambios en código legacy sin tests: el coding es rápido, pero validar que no rompiste nada lleva tiempo.</p><p>El estado del equipo también cuenta. ¿Estás en modo 'sprint normal' o en 'todos en calls con stakeholders'? ¿Hay vacaciones planificadas? ¿Onboarding de alguien nuevo que hará pair programming? Una tarea de 5 puntos puede expandirse a 8 si sabés que vas a estar enseñando mientras la hacés. La honestidad en estos factores mejora las estimaciones.</p>"
      },
      {
        "h2": "Cuándo revisar y re-estimar",
        "body": "<p>Estimaciones no son contratos inmutables. Si arrancás una tarea de 5 puntos y a las 2 horas descubrís que la API que ibas a usar está deprecada, pará y re-estimá. Mejor comunicar temprano 'esto va a ser 8, no 5' que sorprender en la review con 'me llevó el doble'.</p><p>En retrospectiva, compará estimaciones vs tiempo real. Si constantemente subestimás, tu escala está mal calibrada: lo que considerás 3 puntos es en realidad 5 para tu contexto. Ajustá en futuros sprints. Si sobreestimás siempre, estás siendo demasiado conservador (o mejoraste mucho y no actualizaste tu baseline).</p><p>Tareas que consistentemente explotan (estimadas en 5, terminan siendo 13) son señal de problema: requisitos poco claros, deuda técnica oculta, o scope creep. No es un problema de estimación, es un problema de definición. Usá esos datos en refinement para pedir más claridad o dedicar un sprint a limpiar la base de código antes de seguir.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Qué hago si mi estimación está muy lejos de la del resto del equipo?",
        "a": "Explicá tu razonamiento: tal vez viste complejidad que otros no, o al revés. La conversación es el objetivo, no el consenso forzado. Si persiste la disparidad, dividí la tarea para reducir incertidumbre."
      },
      {
        "q": "¿Puedo usar horas directamente en lugar de story points?",
        "a": "Podés, pero es menos efectivo. Las horas invitan a micromanagement y no capturan bien incertidumbre. Los puntos abstraen complejidad sin anclar a tiempo de calendario específico."
      },
      {
        "q": "¿Qué significa que una tarea sea 'muy grande para estimar'?",
        "a": "Si algo parece más de 13 puntos, hay demasiada incertidumbre. Dividilo en tareas más chicas o hacé un spike de investigación primero para entender el alcance real."
      },
      {
        "q": "¿Debo incluir tiempo de testing en la estimación?",
        "a": "Sí, absolutamente. Los story points incluyen todo: coding, testing manual, escribir tests automatizados, code review, ajustes post-review. Es el esfuerzo total para 'done'."
      }
    ]
  },
  "en": {
    "pageTitle": "Task Time Estimator | Genfy",
    "metaDesc": "Estimate task duration using planning poker and story points. Convert points to realistic hours considering complexity, risk, and team context.",
    "h1": "Task Time Estimator",
    "intro": "Generate time estimates based on planning poker, story points, and team experience. Consider technical complexity, uncertainty, and context to calculate realistic durations.",
    "tag": "Work",
    "filterLabel": "Complexity",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "complexity",
        "label": "Complexity",
        "items": [
          "1 point - Trivial text or style change",
          "2 points - Simple adjustment to existing logic",
          "3 points - Small feature with new component",
          "5 points - Medium feature with integration",
          "8 points - Complex multi-component feature",
          "13 points - Major refactor or migration",
          "21 points - New architecture or rewrite",
          "Technical spike - Research without deliverable",
          "Configuration task - Setup without code",
          "Critical bug - Requires immediate hotfix",
          "Minor bug - Isolated fix without dependencies",
          "Performance optimization - Existing improvement",
          "End-to-end tests - Testing suite",
          "Technical documentation - No code",
          "API design - Complete specification",
          "Third-party integration - External SDK",
          "Feature flag - Simple implementation",
          "A/B test setup - Experiment configuration",
          "Data migration - Scripts + validation",
          "Refactor without functional change - Code improvement",
          "UI polishing - Final visual adjustments",
          "Accessibility improvements - WCAG compliance",
          "Internationalization - i18n setup",
          "Security hardening - Patches and audit",
          "CI/CD pipeline - Deploy automation",
          "Monitoring setup - Dashboards and alerts",
          "Database migration - Schema changes",
          "Deep code review - Technical analysis",
          "Quick prototype - Throwaway code",
          "Technical debt payment - Accumulated cleanup",
          "Cross-browser testing - Multiple validation",
          "Mobile responsive - Screen adaptation",
          "Email templates - Transactional HTML",
          "Cron job setup - Scheduled task",
          "Webhook integration - External listener",
          "GraphQL resolver - New query/mutation",
          "Redis caching - Cache implementation",
          "Socket.io real-time - Live feature",
          "Stripe integration - Complete payments",
          "Google Auth - OAuth implementation",
          "PDF generation - Downloadable reports",
          "CSV export/import - Bulk operations",
          "Search indexing - Elasticsearch setup",
          "Image processing - Upload and resize",
          "Video transcoding - Media pipeline",
          "Notification system - Multi-channel",
          "Rate limiting - API throttling",
          "Backup automation - Disaster recovery",
          "Load testing - Performance validation",
          "User analytics - Event tracking setup"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How planning poker works",
        "body": "<p>Planning poker is a consensus-based estimation technique where each team member votes simultaneously using cards with Fibonacci sequence numbers (1, 2, 3, 5, 8, 13, 21). Numbers aren't hours, they're <strong>story points</strong>: abstract units representing combined effort, complexity, and risk.</p><p>The process: someone presents a task, team asks questions, everyone secretly picks a card, reveals simultaneously. If there's consensus, that's the score. If there's disparity (e.g., a 3 and a 13), the extremes explain their reasoning and re-vote. The key is the conversation: one dev might see technical complexity others don't, or QA identifies edge cases that increase effort.</p><p>Why Fibonacci? Growing gaps reflect uncertainty: distinguishing between 1 and 2 points is easy, but between 13 and 15 makes no sense because precision is impossible at that scale. If something seems more than 13, you should probably split it into smaller tasks.</p>"
      },
      {
        "h2": "From story points to real hours",
        "body": "<p>Story points aren't hours, but eventually you need to translate them to calendar time. Each team has its own <strong>velocity</strong>: points completed per sprint. If in a 2-week sprint you complete 40 points with 4 devs, your velocity is ~10 points/dev/sprint, or ~1.25 points/dev/day.</p><p>To convert points to hours, use your history. If 1 point usually takes 2-4 hours, 5 points are 10-20 hours (1-2.5 days). But beware: this is an average. A 5 in backend might be 12 hours; a 5 in frontend might be 8. Context matters: is there legacy code? New team? External dependencies? Add buffer.</p><p>Common mistake: mechanically converting points to hours ('1 point = 1 hour') ignores that points include testing, code review, refactor, meetings. A 3-point task is rarely 3 hours of pure coding; it's 3 points of total effort, which might be 6-10 calendar hours considering interruptions and overhead.</p>"
      },
      {
        "h2": "Factors affecting estimation",
        "body": "<p>Technical complexity is obvious: integrating an external API with poor documentation is more than copying an existing component. But there are less visible factors: <strong>team context</strong> (has anyone done something similar?), <strong>design quality</strong> (clear mockups vs 'make it nice'), <strong>requirements clarity</strong> (concrete acceptance criteria vs 'something like X').</p><p>Risk multiplies effort. A task with dependency on an unstable external service might be technically simple but risky: it deserves more points for potential debugging time. Same with changes in legacy code without tests: coding is fast, but validating you didn't break anything takes time.</p><p>Team state also counts. Are you in 'normal sprint' mode or 'everyone in calls with stakeholders'? Are there planned vacations? Onboarding someone new who'll do pair programming? A 5-point task can expand to 8 if you know you'll be teaching while doing it. Honesty about these factors improves estimates.</p>"
      },
      {
        "h2": "When to review and re-estimate",
        "body": "<p>Estimates aren't immutable contracts. If you start a 5-point task and 2 hours in discover the API you were going to use is deprecated, stop and re-estimate. Better to communicate early 'this will be 8, not 5' than surprise in review with 'it took double'.</p><p>In retrospective, compare estimates vs real time. If you consistently underestimate, your scale is miscalibrated: what you consider 3 points is actually 5 for your context. Adjust in future sprints. If you always overestimate, you're being too conservative (or improved a lot and didn't update your baseline).</p><p>Tasks that consistently explode (estimated at 5, end up being 13) signal a problem: unclear requirements, hidden technical debt, or scope creep. It's not an estimation problem, it's a definition problem. Use that data in refinement to request more clarity or dedicate a sprint to cleaning the codebase before continuing.</p>"
      }
    ],
    "faq": [
      {
        "q": "What do I do if my estimate is far from the rest of the team?",
        "a": "Explain your reasoning: maybe you saw complexity others didn't, or vice versa. Conversation is the goal, not forced consensus. If disparity persists, split the task to reduce uncertainty."
      },
      {
        "q": "Can I use hours directly instead of story points?",
        "a": "You can, but it's less effective. Hours invite micromanagement and don't capture uncertainty well. Points abstract complexity without anchoring to specific calendar time."
      },
      {
        "q": "What does it mean for a task to be 'too big to estimate'?",
        "a": "If something seems more than 13 points, there's too much uncertainty. Split it into smaller tasks or do an investigation spike first to understand the real scope."
      },
      {
        "q": "Should I include testing time in the estimate?",
        "a": "Yes, absolutely. Story points include everything: coding, manual testing, writing automated tests, code review, post-review adjustments. It's the total effort for 'done'."
      }
    ]
  }
};
