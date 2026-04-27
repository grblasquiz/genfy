import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-objetivos-okr",
    "en": "okr-objective-generator"
  },
  "category": "work",
  "emoji": "🎯",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Objetivos OKR | Genfy",
    "metaDesc": "Crea objetivos OKR claros y medibles para tu equipo. Genera frameworks completos con resultados clave específicos. Perfecto para planificación trimestral.",
    "h1": "Generador de Objetivos OKR",
    "intro": "Diseñá objetivos y resultados clave (OKR) estructurados y medibles. Ideal para equipos que necesitan frameworks de planificación trimestral o anual.",
    "tag": "Trabajo",
    "filterLabel": "Área",
    "countLabel": "Cantidad",
    "generateLabel": "Generar OKRs",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "product",
        "label": "Producto",
        "items": [
          "Aumentar el engagement del usuario en un 40% medido por sesiones activas semanales",
          "Reducir el tiempo de onboarding de nuevos usuarios de 15 a 5 minutos para Q2",
          "Mejorar el NPS (Net Promoter Score) de 32 a 50 para fin de trimestre",
          "Lanzar 3 features críticas solicitadas por el top 20% de usuarios para julio",
          "Incrementar la tasa de conversión de trial a paid de 18% a 28% en 90 días",
          "Reducir el churn rate mensual de 7% a 4% implementando mejoras de retención",
          "Alcanzar 10,000 usuarios activos diarios (DAU) para fin de Q3",
          "Reducir bugs críticos en producción de 25 a menos de 5 por mes",
          "Mejorar el Core Web Vitals score a 90+ en todas las páginas principales",
          "Implementar feedback loop: responder al 100% de sugerencias de usuarios en <48hs",
          "Aumentar feature adoption rate del 35% al 60% en funcionalidades existentes",
          "Lograr que el 80% de usuarios completen el perfil en su primera sesión",
          "Reducir tiempo de carga de dashboard de 4.2s a <1.5s para usuarios globales",
          "Alcanzar 4.5+ estrellas promedio en app stores (actualmente 3.8)",
          "Lanzar versión mobile con paridad de features vs desktop para septiembre"
        ]
      },
      {
        "id": "engineering",
        "label": "Ingeniería",
        "items": [
          "Reducir deployment time de 45 min a 10 min mediante automatización completa",
          "Aumentar code coverage de tests de 62% a 85% en repos críticos",
          "Eliminar 100% de dependencias con vulnerabilidades críticas detectadas por Snyk",
          "Mejorar MTTR (Mean Time To Recovery) de 3 horas a 30 minutos para incidentes P0",
          "Implementar observability completa: logs, metrics, traces con 99.9% de datos capturados",
          "Reducir technical debt: refactorizar 3 módulos legacy identificados como bloqueadores",
          "Alcanzar 99.95% uptime en servicios core (actualmente 99.7%)",
          "Implementar disaster recovery: RPO <1hr, RTO <4hr validado con drills trimestrales",
          "Migrar 100% de workloads a Kubernetes con zero-downtime para Q2",
          "Establecer CI/CD completo: desde commit a producción en <30 min con rollback automático",
          "Reducir P95 latency de API de 800ms a <200ms en endpoints críticos",
          "Completar documentación técnica: 100% de sistemas con arquitectura y runbooks actualizados",
          "Implementar feature flags en 100% de nuevos features para despliegues graduales",
          "Alcanzar <5% error rate en todos los servicios backend (actualmente 12%)",
          "Reducir costos de infraestructura en 30% optimizando recursos cloud sin degradar performance"
        ]
      },
      {
        "id": "marketing",
        "label": "Marketing",
        "items": [
          "Aumentar tráfico orgánico en 150% mediante contenido SEO (de 50k a 125k visitas/mes)",
          "Generar 500 MQLs (Marketing Qualified Leads) mensuales con cost per lead <$50",
          "Incrementar social media engagement rate de 2.1% a 5% en todas las plataformas",
          "Lanzar 2 campañas virales que alcancen >1M impresiones orgánicas cada una",
          "Aumentar email open rate de 18% a 28% y CTR de 2.3% a 4.5%",
          "Crecer subscriber base de newsletter de 12k a 35k suscriptores activos para Q3",
          "Mejorar conversion rate de landing pages de 3.2% a 7% mediante A/B testing",
          "Establecer brand awareness: alcanzar 40% de reconocimiento en target demographic",
          "Generar 25 case studies y testimonios verificados de clientes enterprise",
          "Incrementar ROI de paid ads en 60%: de $2.50 a $4 por cada dólar invertido",
          "Crear contenido: publicar 40 artículos long-form (>2000 palabras) rankeando top 3 SERP",
          "Lanzar programa de referidos generando 20% de nuevos signups vía referencias",
          "Aumentar community engagement: 500 miembros activos en Discord/Slack con >30% weekly active",
          "Posicionar 3 piezas de thought leadership en publicaciones tier-1 del sector",
          "Incrementar branded search volume en 200% (de 2k a 6k búsquedas mensuales)"
        ]
      },
      {
        "id": "sales",
        "label": "Ventas",
        "items": [
          "Cerrar $2M ARR (Annual Recurring Revenue) en nuevos contratos enterprise para Q2",
          "Aumentar pipeline de oportunidades calificadas en 80% ($5M a $9M en pipeline value)",
          "Reducir sales cycle promedio de 90 días a 45 días implementando sales playbook",
          "Incrementar win rate de 22% a 35% en deals enterprise (>$50k ACV)",
          "Expandir en cuentas existentes: lograr 130% net revenue retention mediante upsells",
          "Onboarding: 100% de nuevos sales reps alcanzando quota en su 4to mes (actualmente 60%)",
          "Implementar account-based marketing: cerrar 15 de 30 target accounts (Fortune 500)",
          "Aumentar average deal size de $35k a $60k mediante value selling training",
          "Reducir churn de clientes enterprise de 12% anual a <5% con customer success proactivo",
          "Generar $500k en cross-sell/upsell revenue de base instalada en Q3",
          "Alcanzar 95% de forecast accuracy (actualmente 73%) para planning financiero confiable",
          "Establecer partnerships estratégicos generando 25% de pipeline via co-selling",
          "Implementar sales automation: 40% reducción en admin tasks para aumentar selling time",
          "Certificar 100% del equipo en Challenger Sale methodology con role-play mensual",
          "Acelerar deal velocity: 60% de leads calificados teniendo primera reunión en <48hs"
        ]
      },
      {
        "id": "hr",
        "label": "Recursos Humanos",
        "items": [
          "Reducir time-to-hire promedio de 60 días a 30 días sin comprometer quality of hire",
          "Aumentar employee satisfaction score de 7.2 a 8.5 (escala 1-10) medido trimestralmente",
          "Lograr 90% retention rate en top performers (actualmente 78%) mediante career paths claros",
          "Implementar programa L&D: 100% de empleados completando 20hrs de training anual",
          "Mejorar diversity metrics: 40% mujeres en roles técnicos (actualmente 22%) para fin de año",
          "Reducir voluntary turnover de 18% a <10% anual con mejoras en compensation y cultura",
          "Establecer performance reviews efectivos: 100% completado on-time con actionable feedback",
          "Implementar remote work policy: 95% employee satisfaction con herramientas y procesos",
          "Crear talent pipeline: 50 candidatos pre-calificados en talent pool para roles críticos",
          "Lanzar employee referral program generando 30% de nuevas contrataciones via referrals",
          "Mejorar onboarding experience: 90% de nuevos empleados productivos en semana 2 (vs semana 4)",
          "Implementar 360 feedback: 100% de managers recibiendo evaluación anual de reportes directos",
          "Establecer compensation competitivo: salarios en percentil 75 del mercado para retener talento",
          "Crear internal mobility program: 20% de posiciones senior llenadas con promociones internas",
          "Reducir sick days no planificados en 25% mejorando wellness programs y work-life balance"
        ]
      },
      {
        "id": "finance",
        "label": "Finanzas",
        "items": [
          "Reducir CAC (Customer Acquisition Cost) de $450 a $280 optimizando spend en canales",
          "Mejorar cash runway de 12 a 18 meses mediante cost optimization y revenue acceleration",
          "Aumentar gross margin de 65% a 75% renegociando contratos con vendors y optimizando COGS",
          "Reducir DSO (Days Sales Outstanding) de 45 a 30 días mejorando procesos de collections",
          "Implementar zero-based budgeting: 15% reducción en OpEx sin impactar growth targets",
          "Alcanzar break-even operativo para Q4 (actualmente burning $200k/mes)",
          "Mejorar forecast accuracy: <5% variance entre proyecciones y actuals (actualmente 18%)",
          "Reducir payment processing fees de 2.9% a 2.1% consolidando vendors",
          "Implementar financial controls: 100% de expenses aprobadas via automated workflow en <24hs",
          "Aumentar free cash flow en $500k anual optimizando working capital management",
          "Cerrar Serie B de $15M en Q3 con valuation mínima de $80M post-money",
          "Reducir SG&A (Selling, General & Administrative) de 45% a 35% de revenue",
          "Implementar FP&A completo: reportes mensuales con variance analysis en 5 business days",
          "Mejorar unit economics: LTV/CAC ratio de 2.8x a 4.5x mediante retention improvements",
          "Establecer R&D tax credits capturando $300k en savings fiscales anuales"
        ]
      },
      {
        "id": "operations",
        "label": "Operaciones",
        "items": [
          "Reducir fulfillment time de 5 días a 48 horas implementando automated warehousing",
          "Mejorar CSAT (Customer Satisfaction) de soporte de 82% a 95% en resoluciones first-contact",
          "Implementar knowledge base: 60% de tickets resueltos via self-service (actualmente 25%)",
          "Reducir average handle time de 12 min a 6 min sin degradar quality scores",
          "Alcanzar 99.5% order accuracy rate (actualmente 96.8%) mediante quality controls",
          "Implementar omnichannel support: respuesta en <2min en todos los canales 24/7",
          "Reducir operational costs en 20% mediante process automation y vendor consolidation",
          "Mejorar SLA compliance de 87% a 98% en entregas promised vs actual",
          "Implementar predictive maintenance: 80% reducción en unplanned downtime de equipos críticos",
          "Establecer supply chain resilience: 3 proveedores alternativos para componentes críticos",
          "Reducir ticket backlog de 450 a <50 mediante staffing optimization y automation",
          "Alcanzar Net Promoter Score (NPS) de support de +40 (actualmente +18)",
          "Implementar proactive monitoring: detectar y resolver 70% de issues antes de user reports",
          "Reducir RMA (Return Merchandise Authorization) rate de 8% a <3% mejorando QA",
          "Establecer business continuity: 100% de critical processes con documented runbooks y backups"
        ]
      },
      {
        "id": "customer_success",
        "label": "Customer Success",
        "items": [
          "Aumentar customer health score promedio de 7.1 a 8.5 mediante engagement proactivo",
          "Reducir churn rate de 5% mensual a 2% con early warning system y intervention plans",
          "Lograr 120% net revenue retention mediante expansion en cuentas existentes",
          "Implementar QBRs (Quarterly Business Reviews): 100% de enterprise accounts con roadmap alignment",
          "Aumentar product adoption: 75% de usuarios activos usando 3+ features core (actualmente 45%)",
          "Mejorar time-to-value: nuevos clientes alcanzando first win en <30 días (vs 60 días)",
          "Generar 25 customer advocates que participen en case studies, webinars y referencias",
          "Reducir support ticket volume por cliente en 40% mediante proactive education",
          "Implementar customer success platform: 100% de accounts con health tracking automated",
          "Alcanzar 90%+ satisfaction score en post-onboarding surveys (actualmente 76%)",
          "Crear customer advisory board: 15 strategic accounts proveyendo product feedback trimestral",
          "Mejorar expansion pipeline: identificar $1M en upsell opportunities en Q2",
          "Implementar success plans personalizados: 100% de enterprise accounts con documented goals",
          "Reducir time-to-resolution de escalations de 5 días a 24 horas con dedicated task force",
          "Aumentar customer lifetime value (LTV) promedio de $45k a $75k mediante strategic engagement"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Estructura correcta de un OKR efectivo",
        "body": "<p>Un OKR tiene dos componentes: el <strong>Objective</strong> (qué querés lograr, aspiracional pero alcanzable) y los <strong>Key Results</strong> (cómo medís el progreso, cuantitativos y time-bound). Formato correcto: 'Objetivo: Convertirnos en la plataforma preferida para X' con KRs como 'Aumentar NPS de 35 a 55', 'Reducir churn de 8% a 3%', 'Alcanzar 50k usuarios activos mensuales'. El objetivo inspira, los KRs anclan en realidad.</p><p>Los Key Results deben seguir criterios SMART pero el Objective puede ser más amplio. Error común: escribir el objetivo como métrica ('Aumentar revenue en 30%') en vez de dirección estratégica ('Escalar rentablemente nuestro modelo de negocio'). Los KRs son el '30% revenue', '25% CAC reduction', '120% net retention'. Tres KRs por objetivo es el sweet spot: menos de eso no captura complejidad, más de eso diluye foco.</p><p>La escala de logro típica: 70% completion se considera éxito. Si lográs 100% consistentemente, tus OKRs no son suficientemente ambiciosos. Google popularizó la regla '0.7 = success': sets aggressive targets que stretch al equipo sin crear burnout. Importante: los OKRs NO son performance reviews; son herramientas de alineación y priorización. Un OKR fallido no significa fracaso personal si se aprendió y ajustó rápido.</p>"
      },
      {
        "h2": "Cascada de OKRs: de empresa a equipo a individual",
        "body": "<p>Los OKRs funcionan mejor con <strong>cascada bidireccional</strong>: top-down (dirección estratégica desde liderazgo) y bottom-up (iniciativas desde equipos que saben qué es posible). Ejemplo: Company OKR 'Dominar mercado enterprise' → Product Team OKR 'Lanzar features compliance-ready' → Engineer OKR 'Implementar SOC2 Type II certification'. Cada nivel contribuye al anterior pero tiene autonomía en el cómo.</p><p>Reglas de alineación: el 60% de los OKRs de equipo deben conectar directamente con OKRs de empresa; el 40% puede ser iniciativas locales críticas (pagar tech debt, mejorar herramientas internas). Esto balancea alineación estratégica con necesidades operativas reales. Usá un OKR tree o dependency map visual para mostrar cómo cada objetivo de equipo alimenta metas organizacionales.</p><p>Los OKRs individuales (personal OKRs) son opcionales pero poderosos para desarrollo profesional. Deben ser 70% alineados con OKRs del equipo y 30% growth personal. Ejemplo: un developer puede tener 'Liderar implementación de feature X' (alineado) y 'Convertirme en go-to expert en GraphQL' (desarrollo). Los one-on-ones son el espacio para trackear estos, no las reuniones de equipo completo.</p>"
      },
      {
        "h2": "Ciclo de vida: planning, tracking, y retrospectiva",
        "body": "<p>El <strong>planning</strong> de OKRs toma 2-3 semanas al inicio del quarter. Semana 1: liderazgo propone company OKRs basados en estrategia anual. Semana 2: equipos draftan sus OKRs alineados, con sesiones de calibración cross-funcionales para evitar silos. Semana 3: finalization y comunicación all-hands. El objetivo es que todos entiendan no solo sus OKRs sino los del resto: Sales entiende por qué Product prioriza X feature, Engineering sabe por qué Marketing necesita Y capability.</p><p><strong>Tracking</strong> semanal o bi-semanal es crucial: status updates de 'on track / at risk / off track' con score numérico (0.0 a 1.0). Herramientas como Lattice, Perdoo, o simplemente spreadsheets compartidos. Lo importante no es la herramienta sino la disciplina: cada KR tiene owner, current value, target, y confidence level. En weekly syncs, enfocate en los 'at risk': ¿qué blockers hay? ¿necesitamos re-priorizar? Los OKRs que están on track no necesitan mucha discusión.</p><p>La <strong>retrospectiva de fin de quarter</strong> es donde ocurre el aprendizaje real. Pregunta clave no es 'logramos el número?' sino '¿qué aprendimos que cambia nuestra estrategia?' Un OKR logrado al 40% puede ser más valioso que uno al 90% si descubriste que el objetivo original no era el correcto. Documentá: qué funcionó, qué no, qué assumptions eran incorrectas, y cómo eso informa los próximos OKRs. Este doc se vuelve institutional memory invaluable.</p>"
      },
      {
        "h2": "Errores comunes y cómo evitarlos",
        "body": "<p><strong>OKRs disfrazados de todo-list</strong>: 'Migrar base de datos', 'Contratar 3 developers', 'Lanzar campaña email'. Estos son tasks, no objectives. El test: ¿el logro de esto cambia significativamente nuestro negocio/producto? Si la respuesta es 'un poco', no es un OKR. Los OKRs son resultados transformadores, no checklist operacional. Las tasks van en roadmaps y sprints, los OKRs guían qué roadmaps priorizar.</p><p><strong>Demasiados OKRs</strong>: tener 8 objectives de equipo significa que nada es realmente prioritario. El límite razonable: 3-5 company OKRs, 3-4 team OKRs. Menos es más porque fuerza conversaciones difíciles sobre qué NO hacer. Si todo es importante, nada es importante. Practicá el 'no': cada OKR nuevo debe desplazar algo existente o demostrar que es más crítico.</p><p><strong>KRs cualitativos o subjetivos</strong>: 'Mejorar la experiencia del usuario', '¿Aumentar calidad de código'. ¿Cómo medís 'mejorado'? Los KRs necesitan números: 'Aumentar NPS de X a Y', 'Reducir P95 latency de A a B ms', 'Alcanzar code coverage de C%'. Si no podés medir objetivamente, no es un Key Result válido. Excepción: experimentos exploratorios pueden tener KRs como 'Validar hipótesis X con 50 user interviews', donde el número está en la validación, no en el outcome.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre OKRs y KPIs?",
        "a": "Los KPIs miden salud continua del negocio (revenue, uptime), los OKRs impulsan cambio y crecimiento específico en un timeframe. KPIs = monitor, OKRs = transform."
      },
      {
        "q": "¿Cada cuánto debo revisar/actualizar los OKRs?",
        "a": "Check-ins semanales o bi-semanales para tracking. Los OKRs mismos se setean trimestralmente y solo se cambian si hay pivote estratégico mayor."
      },
      {
        "q": "¿Qué hago si estoy off-track en semana 6 del quarter?",
        "a": "Analiza causas: ¿mal scoping inicial? ¿blockers externos? Decide: re-priorizar recursos, ajustar target (con justificación), o aceptar falla y documentar aprendizaje."
      },
      {
        "q": "¿Los OKRs deben estar atados a compensation/bonos?",
        "a": "Controversial. Google dice no (incentiva gaming). Otros dicen sí parcialmente. Compromiso común: 70% de bono en company performance, 30% en logro de OKRs como factor."
      }
    ]
  },
  "en": {
    "pageTitle": "OKR Objective Generator | Genfy",
    "metaDesc": "Create clear, measurable OKR objectives for your team. Generate complete frameworks with specific key results. Perfect for quarterly planning.",
    "h1": "OKR Objective Generator",
    "intro": "Design structured, measurable Objectives and Key Results (OKRs). Ideal for teams needing quarterly or annual planning frameworks.",
    "tag": "Work",
    "filterLabel": "Area",
    "countLabel": "Amount",
    "generateLabel": "Generate OKRs",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "product",
        "label": "Product",
        "items": [
          "Increase user engagement by 40% measured by weekly active sessions",
          "Reduce new user onboarding time from 15 to 5 minutes by Q2",
          "Improve NPS (Net Promoter Score) from 32 to 50 by end of quarter",
          "Launch 3 critical features requested by top 20% of users by July",
          "Increase trial-to-paid conversion rate from 18% to 28% in 90 days",
          "Reduce monthly churn rate from 7% to 4% implementing retention improvements",
          "Reach 10,000 daily active users (DAU) by end of Q3",
          "Reduce critical bugs in production from 25 to less than 5 per month",
          "Improve Core Web Vitals score to 90+ on all main pages",
          "Implement feedback loop: respond to 100% of user suggestions in <48hrs",
          "Increase feature adoption rate from 35% to 60% in existing functionalities",
          "Achieve 80% of users completing profile in their first session",
          "Reduce dashboard load time from 4.2s to <1.5s for global users",
          "Reach 4.5+ average stars in app stores (currently 3.8)",
          "Launch mobile version with feature parity vs desktop by September"
        ]
      },
      {
        "id": "engineering",
        "label": "Engineering",
        "items": [
          "Reduce deployment time from 45 min to 10 min through complete automation",
          "Increase test code coverage from 62% to 85% in critical repos",
          "Eliminate 100% of dependencies with critical vulnerabilities detected by Snyk",
          "Improve MTTR (Mean Time To Recovery) from 3 hours to 30 minutes for P0 incidents",
          "Implement complete observability: logs, metrics, traces with 99.9% data captured",
          "Reduce technical debt: refactor 3 legacy modules identified as blockers",
          "Reach 99.95% uptime on core services (currently 99.7%)",
          "Implement disaster recovery: RPO <1hr, RTO <4hr validated with quarterly drills",
          "Migrate 100% of workloads to Kubernetes with zero-downtime by Q2",
          "Establish complete CI/CD: from commit to production in <30 min with automatic rollback",
          "Reduce P95 API latency from 800ms to <200ms on critical endpoints",
          "Complete technical documentation: 100% of systems with updated architecture and runbooks",
          "Implement feature flags in 100% of new features for gradual deployments",
          "Reach <5% error rate in all backend services (currently 12%)",
          "Reduce infrastructure costs by 30% optimizing cloud resources without degrading performance"
        ]
      },
      {
        "id": "marketing",
        "label": "Marketing",
        "items": [
          "Increase organic traffic by 150% through SEO content (from 50k to 125k visits/month)",
          "Generate 500 monthly MQLs (Marketing Qualified Leads) with cost per lead <$50",
          "Increase social media engagement rate from 2.1% to 5% across all platforms",
          "Launch 2 viral campaigns reaching >1M organic impressions each",
          "Increase email open rate from 18% to 28% and CTR from 2.3% to 4.5%",
          "Grow newsletter subscriber base from 12k to 35k active subscribers by Q3",
          "Improve landing page conversion rate from 3.2% to 7% through A/B testing",
          "Establish brand awareness: reach 40% recognition in target demographic",
          "Generate 25 verified case studies and testimonials from enterprise customers",
          "Increase paid ads ROI by 60%: from $2.50 to $4 per dollar invested",
          "Create content: publish 40 long-form articles (>2000 words) ranking top 3 SERP",
          "Launch referral program generating 20% of new signups via referrals",
          "Increase community engagement: 500 active members on Discord/Slack with >30% weekly active",
          "Position 3 thought leadership pieces in tier-1 industry publications",
          "Increase branded search volume by 200% (from 2k to 6k monthly searches)"
        ]
      },
      {
        "id": "sales",
        "label": "Sales",
        "items": [
          "Close $2M ARR (Annual Recurring Revenue) in new enterprise contracts by Q2",
          "Increase qualified opportunity pipeline by 80% ($5M to $9M in pipeline value)",
          "Reduce average sales cycle from 90 days to 45 days implementing sales playbook",
          "Increase win rate from 22% to 35% on enterprise deals (>$50k ACV)",
          "Expand in existing accounts: achieve 130% net revenue retention through upsells",
          "Onboarding: 100% of new sales reps reaching quota in their 4th month (currently 60%)",
          "Implement account-based marketing: close 15 of 30 target accounts (Fortune 500)",
          "Increase average deal size from $35k to $60k through value selling training",
          "Reduce enterprise customer churn from 12% annually to <5% with proactive customer success",
          "Generate $500k in cross-sell/upsell revenue from installed base in Q3",
          "Reach 95% forecast accuracy (currently 73%) for reliable financial planning",
          "Establish strategic partnerships generating 25% of pipeline via co-selling",
          "Implement sales automation: 40% reduction in admin tasks to increase selling time",
          "Certify 100% of team in Challenger Sale methodology with monthly role-play",
          "Accelerate deal velocity: 60% of qualified leads having first meeting in <48hrs"
        ]
      },
      {
        "id": "hr",
        "label": "Human Resources",
        "items": [
          "Reduce average time-to-hire from 60 days to 30 days without compromising quality of hire",
          "Increase employee satisfaction score from 7.2 to 8.5 (scale 1-10) measured quarterly",
          "Achieve 90% retention rate in top performers (currently 78%) through clear career paths",
          "Implement L&D program: 100% of employees completing 20hrs of annual training",
          "Improve diversity metrics: 40% women in technical roles (currently 22%) by year-end",
          "Reduce voluntary turnover from 18% to <10% annually with improvements in compensation and culture",
          "Establish effective performance reviews: 100% completed on-time with actionable feedback",
          "Implement remote work policy: 95% employee satisfaction with tools and processes",
          "Create talent pipeline: 50 pre-qualified candidates in talent pool for critical roles",
          "Launch employee referral program generating 30% of new hires via referrals",
          "Improve onboarding experience: 90% of new employees productive in week 2 (vs week 4)",
          "Implement 360 feedback: 100% of managers receiving annual evaluation from direct reports",
          "Establish competitive compensation: salaries at 75th percentile of market to retain talent",
          "Create internal mobility program: 20% of senior positions filled with internal promotions",
          "Reduce unplanned sick days by 25% improving wellness programs and work-life balance"
        ]
      },
      {
        "id": "finance",
        "label": "Finance",
        "items": [
          "Reduce CAC (Customer Acquisition Cost) from $450 to $280 optimizing channel spend",
          "Improve cash runway from 12 to 18 months through cost optimization and revenue acceleration",
          "Increase gross margin from 65% to 75% renegotiating vendor contracts and optimizing COGS",
          "Reduce DSO (Days Sales Outstanding) from 45 to 30 days improving collections processes",
          "Implement zero-based budgeting: 15% reduction in OpEx without impacting growth targets",
          "Reach operational break-even by Q4 (currently burning $200k/month)",
          "Improve forecast accuracy: <5% variance between projections and actuals (currently 18%)",
          "Reduce payment processing fees from 2.9% to 2.1% consolidating vendors",
          "Implement financial controls: 100% of expenses approved via automated workflow in <24hrs",
          "Increase free cash flow by $500k annually optimizing working capital management",
          "Close Series B of $15M in Q3 with minimum $80M post-money valuation",
          "Reduce SG&A (Selling, General & Administrative) from 45% to 35% of revenue",
          "Implement complete FP&A: monthly reports with variance analysis in 5 business days",
          "Improve unit economics: LTV/CAC ratio from 2.8x to 4.5x through retention improvements",
          "Establish R&D tax credits capturing $300k in annual tax savings"
        ]
      },
      {
        "id": "operations",
        "label": "Operations",
        "items": [
          "Reduce fulfillment time from 5 days to 48 hours implementing automated warehousing",
          "Improve support CSAT (Customer Satisfaction) from 82% to 95% in first-contact resolutions",
          "Implement knowledge base: 60% of tickets resolved via self-service (currently 25%)",
          "Reduce average handle time from 12 min to 6 min without degrading quality scores",
          "Reach 99.5% order accuracy rate (currently 96.8%) through quality controls",
          "Implement omnichannel support: <2min response on all channels 24/7",
          "Reduce operational costs by 20% through process automation and vendor consolidation",
          "Improve SLA compliance from 87% to 98% on promised vs actual deliveries",
          "Implement predictive maintenance: 80% reduction in unplanned downtime of critical equipment",
          "Establish supply chain resilience: 3 alternative suppliers for critical components",
          "Reduce ticket backlog from 450 to <50 through staffing optimization and automation",
          "Reach support Net Promoter Score (NPS) of +40 (currently +18)",
          "Implement proactive monitoring: detect and resolve 70% of issues before user reports",
          "Reduce RMA (Return Merchandise Authorization) rate from 8% to <3% improving QA",
          "Establish business continuity: 100% of critical processes with documented runbooks and backups"
        ]
      },
      {
        "id": "customer_success",
        "label": "Customer Success",
        "items": [
          "Increase average customer health score from 7.1 to 8.5 through proactive engagement",
          "Reduce churn rate from 5% monthly to 2% with early warning system and intervention plans",
          "Achieve 120% net revenue retention through expansion in existing accounts",
          "Implement QBRs (Quarterly Business Reviews): 100% of enterprise accounts with roadmap alignment",
          "Increase product adoption: 75% of active users using 3+ core features (currently 45%)",
          "Improve time-to-value: new customers reaching first win in <30 days (vs 60 days)",
          "Generate 25 customer advocates participating in case studies, webinars and referrals",
          "Reduce support ticket volume per customer by 40% through proactive education",
          "Implement customer success platform: 100% of accounts with automated health tracking",
          "Reach 90%+ satisfaction score in post-onboarding surveys (currently 76%)",
          "Create customer advisory board: 15 strategic accounts providing quarterly product feedback",
          "Improve expansion pipeline: identify $1M in upsell opportunities in Q2",
          "Implement personalized success plans: 100% of enterprise accounts with documented goals",
          "Reduce escalation time-to-resolution from 5 days to 24 hours with dedicated task force",
          "Increase average customer lifetime value (LTV) from $45k to $75k through strategic engagement"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Correct structure of an effective OKR",
        "body": "<p>An OKR has two components: the <strong>Objective</strong> (what you want to achieve, aspirational but attainable) and the <strong>Key Results</strong> (how you measure progress, quantitative and time-bound). Correct format: 'Objective: Become the preferred platform for X' with KRs like 'Increase NPS from 35 to 55', 'Reduce churn from 8% to 3%', 'Reach 50k monthly active users'. The objective inspires, the KRs anchor in reality.</p><p>Key Results should follow SMART criteria but the Objective can be broader. Common mistake: writing the objective as a metric ('Increase revenue by 30%') instead of strategic direction ('Scale our business model profitably'). The KRs are the '30% revenue', '25% CAC reduction', '120% net retention'. Three KRs per objective is the sweet spot: fewer doesn't capture complexity, more dilutes focus.</p><p>Typical achievement scale: 70% completion is considered success. If you consistently hit 100%, your OKRs aren't ambitious enough. Google popularized the '0.7 = success' rule: set aggressive targets that stretch the team without creating burnout. Important: OKRs are NOT performance reviews; they're alignment and prioritization tools. A failed OKR doesn't mean personal failure if you learned and adjusted quickly.</p>"
      },
      {
        "h2": "OKR cascade: from company to team to individual",
        "body": "<p>OKRs work best with <strong>bidirectional cascade</strong>: top-down (strategic direction from leadership) and bottom-up (initiatives from teams who know what's possible). Example: Company OKR 'Dominate enterprise market' → Product Team OKR 'Launch compliance-ready features' → Engineer OKR 'Implement SOC2 Type II certification'. Each level contributes to the previous but has autonomy in how.</p><p>Alignment rules: 60% of team OKRs should directly connect with company OKRs; 40% can be critical local initiatives (paying tech debt, improving internal tools). This balances strategic alignment with real operational needs. Use an OKR tree or visual dependency map to show how each team objective feeds organizational goals.</p><p>Individual OKRs (personal OKRs) are optional but powerful for professional development. Should be 70% aligned with team OKRs and 30% personal growth. Example: a developer might have 'Lead implementation of feature X' (aligned) and 'Become go-to expert in GraphQL' (development). One-on-ones are the space to track these, not full team meetings.</p>"
      },
      {
        "h2": "Lifecycle: planning, tracking, and retrospective",
        "body": "<p><strong>OKR planning</strong> takes 2-3 weeks at the start of the quarter. Week 1: leadership proposes company OKRs based on annual strategy. Week 2: teams draft their aligned OKRs, with cross-functional calibration sessions to avoid silos. Week 3: finalization and all-hands communication. The goal is for everyone to understand not just their OKRs but everyone else's: Sales understands why Product prioritizes X feature, Engineering knows why Marketing needs Y capability.</p><p><strong>Weekly or bi-weekly tracking</strong> is crucial: status updates of 'on track / at risk / off track' with numerical score (0.0 to 1.0). Tools like Lattice, Perdoo, or simply shared spreadsheets. What matters isn't the tool but the discipline: each KR has an owner, current value, target, and confidence level. In weekly syncs, focus on 'at risk' items: what blockers exist? Do we need to re-prioritize? OKRs that are on track don't need much discussion.</p><p>The <strong>end-of-quarter retrospective</strong> is where real learning happens. Key question isn't 'did we hit the number?' but 'what did we learn that changes our strategy?' An OKR achieved at 40% can be more valuable than one at 90% if you discovered the original objective wasn't correct. Document: what worked, what didn't, what assumptions were wrong, and how that informs next OKRs. This doc becomes invaluable institutional memory.</p>"
      },
      {
        "h2": "Common mistakes and how to avoid them",
        "body": "<p><strong>OKRs disguised as to-do lists</strong>: 'Migrate database', 'Hire 3 developers', 'Launch email campaign'. These are tasks, not objectives. The test: does achieving this significantly change our business/product? If the answer is 'a bit', it's not an OKR. OKRs are transformative outcomes, not operational checklist. Tasks go in roadmaps and sprints, OKRs guide which roadmaps to prioritize.</p><p><strong>Too many OKRs</strong>: having 8 team objectives means nothing is really a priority. Reasonable limit: 3-5 company OKRs, 3-4 team OKRs. Less is more because it forces difficult conversations about what NOT to do. If everything is important, nothing is important. Practice saying 'no': each new OKR must displace something existing or demonstrate it's more critical.</p><p><strong>Qualitative or subjective KRs</strong>: 'Improve user experience', 'Increase code quality'. How do you measure 'improved'? KRs need numbers: 'Increase NPS from X to Y', 'Reduce P95 latency from A to B ms', 'Reach C% code coverage'. If you can't measure objectively, it's not a valid Key Result. Exception: exploratory experiments can have KRs like 'Validate hypothesis X with 50 user interviews', where the number is in validation, not outcome.</p>"
      }
    ],
    "faq": [
      {
        "q": "What's the difference between OKRs and KPIs?",
        "a": "KPIs measure ongoing business health (revenue, uptime), OKRs drive specific change and growth in a timeframe. KPIs = monitor, OKRs = transform."
      },
      {
        "q": "How often should I review/update OKRs?",
        "a": "Weekly or bi-weekly check-ins for tracking. OKRs themselves are set quarterly and only changed if there's a major strategic pivot."
      },
      {
        "q": "What do I do if I'm off-track in week 6 of the quarter?",
        "a": "Analyze causes: bad initial scoping? External blockers? Decide: re-prioritize resources, adjust target (with justification), or accept failure and document learning."
      },
      {
        "q": "Should OKRs be tied to compensation/bonuses?",
        "a": "Controversial. Google says no (incentivizes gaming). Others say yes partially. Common compromise: 70% of bonus on company performance, 30% on OKR achievement as factor."
      }
    ]
  }
};
