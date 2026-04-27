import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "swot",
    "en": "swot"
  },
  "emoji": "📈",
  "category": "general",
  "es": {
    "pageTitle": "Análisis SWOT/FODA — Glosario | Genfy",
    "metaDesc": "Análisis SWOT (FODA): marco estratégico para evaluar Fortalezas, Oportunidades, Debilidades y Amenazas. Guía práctica para planificación empresarial efectiva.",
    "h1": "Análisis SWOT/FODA",
    "short": "El análisis SWOT (Strengths, Weaknesses, Opportunities, Threats) o FODA (Fortalezas, Oportunidades, Debilidades, Amenazas) es un marco de planificación estratégica que evalúa factores internos y externos de un proyecto, producto o empresa. Organiza información en cuatro cuadrantes para identificar ventajas competitivas y riesgos.",
    "body": [
      {
        "title": "¿Qué es el análisis SWOT?",
        "html": "<p>El SWOT es una herramienta de diagnóstico empresarial desarrollada en los años 60 en Stanford Research Institute. Su nombre proviene de las iniciales en inglés: <strong>S</strong>trengths (Fortalezas), <strong>W</strong>eaknesses (Debilidades), <strong>O</strong>pportunities (Oportunidades), <strong>T</strong>hreats (Amenazas). En español se usa FODA o DAFO según la región.</p><p>La matriz divide factores en dos dimensiones: <strong>internos vs. externos</strong> y <strong>positivos vs. negativos</strong>. Fortalezas y Debilidades son internas (lo que controlás: equipo, tecnología, procesos). Oportunidades y Amenazas son externas (mercado, competencia, regulación, tendencias). Esta estructura fuerza a analizar tanto capacidades propias como contexto, evitando visiones incompletas.</p><p>Un SWOT efectivo no es solo listar items: debe ser <strong>específico, priorizado y accionable</strong>. \"Buen equipo\" es vago; \"Equipo con 10+ años en fintech y red de contactos en bancos top 5\" es útil. El resultado debe guiar decisiones concretas: explotar fortalezas, mitigar debilidades, capitalizar oportunidades, prepararse para amenazas.</p>"
      },
      {
        "title": "Cómo hacer un análisis SWOT paso a paso",
        "html": "<p><strong>Paso 1: Definir el alcance</strong>. ¿Analizás toda la empresa, un producto específico, una iniciativa de marketing? Un SWOT de producto SaaS es distinto a uno de expansión geográfica. Incluí stakeholders relevantes (founders, producto, ventas) para evitar sesgos.</p><p><strong>Paso 2: Fortalezas</strong>. ¿Qué hacés mejor que la competencia? Recursos únicos, ventajas tecnológicas, posicionamiento de marca, eficiencias operativas, propiedad intelectual. Ejemplo: \"API con 99.95% uptime documentada mejor que competidores según G2\".</p><p><strong>Paso 3: Debilidades</strong>. Sé honesto sobre limitaciones. Falta de recursos, dependencia de proveedores clave, procesos inmaduros, gaps en el equipo, deuda técnica. Ejemplo: \"Solo un desarrollador backend, riesgo de bus factor\".</p><p><strong>Paso 4: Oportunidades</strong>. Tendencias de mercado, cambios regulatorios favorables, tecnologías emergentes, segmentos desatendidos. Deben ser externas y explotables. Ejemplo: \"Nueva regulación obliga a bancos a integrar APIs abiertas\".</p><p><strong>Paso 5: Amenazas</strong>. Competencia nueva, cambios tecnológicos, riesgos económicos, dependencia de plataformas. Ejemplo: \"Google podría lanzar herramienta gratis similar\".</p>"
      },
      {
        "title": "Estrategias derivadas del SWOT",
        "html": "<p>El verdadero valor está en las <strong>estrategias que emergen del cruce de cuadrantes</strong>. <strong>Estrategias SO (Fortalezas-Oportunidades)</strong>: usar capacidades para aprovechar oportunidades. Si tenés expertise en IA (S) y hay demanda creciente de chatbots (O), desarrollá producto de IA conversacional.</p><p><strong>Estrategias WO (Debilidades-Oportunidades)</strong>: superar limitaciones para capturar oportunidades. Si la oportunidad requiere ventas enterprise (O) pero tu equipo es junior (W), contratá un sales director con experiencia. <strong>Estrategias ST (Fortalezas-Amenazas)</strong>: usar ventajas para defenderte. Si competidores grandes entran al mercado (T) pero vos tenés mejor customer support (S), enfatizá ese diferencial.</p><p><strong>Estrategias WT (Debilidades-Amenazas)</strong>: plan defensivo. Si tenés poco funding (W) y viene recesión (T), reducí burn rate y extendé runway. Estos cruces generan un plan estratégico balanceado que considera recursos reales y contexto.</p>"
      },
      {
        "title": "Limitaciones y cuándo complementar con otras herramientas",
        "html": "<p>El SWOT es excelente para visión panorámica pero tiene límites. Es <strong>estático</strong>: captura un momento, pero mercados cambian. Hacelo trimestral o ante cambios significativos. Es <strong>subjetivo</strong>: lo que un fundador ve como fortaleza otro puede ver como debilidad. Validá con datos externos (estudios de mercado, feedback de clientes).</p><p>No prioriza ni cuantifica: \"10 fortalezas\" no significa que todas importen igual. Después del SWOT, usá matriz de impacto/esfuerzo para priorizar acciones. No analiza competencia en profundidad: complementá con análisis de Cinco Fuerzas de Porter o mapeo competitivo.</p><p>Para proyectos técnicos, el SWOT puede ser demasiado general. Un <strong>análisis de riesgos</strong> con probabilidad e impacto es mejor para software. Para decisiones de pricing o posicionamiento, mejor hacer análisis de mercado cuantitativo. El SWOT brilla en planificación estratégica anual, lanzamiento de productos, evaluación de pivots o entrada a nuevos mercados. No lo uses para todo: es una herramienta de contexto, no de ejecución detallada.</p>"
      }
    ],
    "examples": [
      "Startup SaaS: Fortaleza = equipo técnico sólido; Debilidad = sin equipo de ventas; Oportunidad = mercado mid-market desatendido; Amenaza = incumbentes bajando precios",
      "Producto nuevo: F = tecnología patentada; D = brand awareness baja; O = competidor principal discontinuó feature similar; A = regulación nueva puede requerir compliance costoso",
      "Expansión geográfica: F = product-market fit probado en región actual; D = sin presencia local ni idioma; O = mercado objetivo crece 40% YoY; A = 3 competidores locales bien establecidos"
    ],
    "related": [
      "plantilla-swot",
      "plantilla-buyer-persona"
    ],
    "faq": [
      {
        "q": "¿Con qué frecuencia debería hacer un análisis SWOT?",
        "a": "Mínimo anualmente como parte de planificación estratégica. También ante eventos significativos: lanzamiento de producto, pivote, ronda de inversión, entrada de competidor fuerte. Startups en etapa temprana podrían hacerlo trimestral porque el contexto cambia rápido. Si tu último SWOT tiene más de 12 meses, probablemente está desactualizado."
      },
      {
        "q": "¿Cómo evito que el SWOT sea solo una lista sin valor?",
        "a": "Tres claves: (1) Sé específico con datos. \"Buen producto\" → \"NPS de 65, 40% más alto que promedio del sector\". (2) Priorizá: seleccioná los 3-5 items más críticos por cuadrante. (3) Define acciones concretas: cada insight debe conectar con una decisión. Si no cambia tu roadmap o presupuesto, probablemente no es relevante."
      },
      {
        "q": "¿SWOT sirve para empresas muy pequeñas o solo para corporaciones?",
        "a": "Es útil en cualquier tamaño, pero el enfoque cambia. En un equipo de 3 personas, las fortalezas/debilidades son más sobre personas específicas y recursos inmediatos. En una corporación, sobre unidades de negocio y capacidades organizacionales. Startups bootstrapped deben ser especialmente honestas con debilidades (funding limitado) y realistas con amenazas (no pueden competir en todas las dimensiones)."
      }
    ]
  },
  "en": {
    "pageTitle": "SWOT Analysis — Glossary | Genfy",
    "metaDesc": "SWOT Analysis: strategic framework to evaluate Strengths, Weaknesses, Opportunities and Threats. Practical guide for effective business planning.",
    "h1": "SWOT Analysis",
    "short": "SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats) is a strategic planning framework that evaluates internal and external factors of a project, product, or company. It organizes information into four quadrants to identify competitive advantages and risks.",
    "body": [
      {
        "title": "What is SWOT Analysis?",
        "html": "<p>SWOT is a business diagnostic tool developed in the 1960s at Stanford Research Institute. Its name comes from the initials: <strong>S</strong>trengths, <strong>W</strong>eaknesses, <strong>O</strong>pportunities, <strong>T</strong>hreats. The framework remains a standard in MBA programs and strategic consulting worldwide.</p><p>The matrix divides factors into two dimensions: <strong>internal vs. external</strong> and <strong>positive vs. negative</strong>. Strengths and Weaknesses are internal (what you control: team, technology, processes). Opportunities and Threats are external (market, competition, regulation, trends). This structure forces analysis of both own capabilities and context, avoiding incomplete views.</p><p>An effective SWOT isn't just listing items: it must be <strong>specific, prioritized, and actionable</strong>. \"Good team\" is vague; \"Team with 10+ years in fintech and network of contacts at top 5 banks\" is useful. The result should guide concrete decisions: exploit strengths, mitigate weaknesses, capitalize opportunities, prepare for threats.</p>"
      },
      {
        "title": "How to conduct a SWOT Analysis step by step",
        "html": "<p><strong>Step 1: Define scope</strong>. Are you analyzing the entire company, a specific product, a marketing initiative? A SaaS product SWOT differs from a geographic expansion one. Include relevant stakeholders (founders, product, sales) to avoid bias.</p><p><strong>Step 2: Strengths</strong>. What do you do better than competition? Unique resources, technological advantages, brand positioning, operational efficiencies, intellectual property. Example: \"API with 99.95% uptime documented better than competitors per G2\".</p><p><strong>Step 3: Weaknesses</strong>. Be honest about limitations. Lack of resources, key vendor dependencies, immature processes, team gaps, technical debt. Example: \"Only one backend developer, bus factor risk\".</p><p><strong>Step 4: Opportunities</strong>. Market trends, favorable regulatory changes, emerging technologies, underserved segments. Must be external and exploitable. Example: \"New regulation forces banks to integrate open APIs\".</p><p><strong>Step 5: Threats</strong>. New competition, technological shifts, economic risks, platform dependencies. Example: \"Google could launch free similar tool\".</p>"
      },
      {
        "title": "Strategies derived from SWOT",
        "html": "<p>The real value lies in <strong>strategies emerging from quadrant intersections</strong>. <strong>SO Strategies (Strengths-Opportunities)</strong>: use capabilities to seize opportunities. If you have AI expertise (S) and growing chatbot demand (O), develop conversational AI product.</p><p><strong>WO Strategies (Weaknesses-Opportunities)</strong>: overcome limitations to capture opportunities. If opportunity requires enterprise sales (O) but your team is junior (W), hire sales director with experience. <strong>ST Strategies (Strengths-Threats)</strong>: use advantages to defend. If large competitors enter market (T) but you have better customer support (S), emphasize that differentiator.</p><p><strong>WT Strategies (Weaknesses-Threats)</strong>: defensive plan. If you have little funding (W) and recession coming (T), reduce burn rate and extend runway. These crosses generate a balanced strategic plan considering real resources and context.</p>"
      },
      {
        "title": "Limitations and when to complement with other tools",
        "html": "<p>SWOT is excellent for panoramic view but has limits. It's <strong>static</strong>: captures a moment, but markets change. Do it quarterly or upon significant changes. It's <strong>subjective</strong>: what one founder sees as strength another may see as weakness. Validate with external data (market studies, customer feedback).</p><p>It doesn't prioritize or quantify: \"10 strengths\" doesn't mean all matter equally. After SWOT, use impact/effort matrix to prioritize actions. It doesn't analyze competition in depth: complement with Porter's Five Forces or competitive mapping.</p><p>For technical projects, SWOT can be too general. A <strong>risk analysis</strong> with probability and impact is better for software. For pricing or positioning decisions, better do quantitative market analysis. SWOT shines in annual strategic planning, product launches, pivot evaluation, or new market entry. Don't use it for everything: it's a context tool, not detailed execution.</p>"
      }
    ],
    "examples": [
      "SaaS Startup: Strength = solid technical team; Weakness = no sales team; Opportunity = underserved mid-market; Threat = incumbents lowering prices",
      "New Product: S = patented technology; W = low brand awareness; O = main competitor discontinued similar feature; T = new regulation may require costly compliance",
      "Geographic Expansion: S = proven product-market fit in current region; W = no local presence or language; O = target market growing 40% YoY; T = 3 well-established local competitors"
    ],
    "related": [
      "swot-analysis-template",
      "buyer-persona-template"
    ],
    "faq": [
      {
        "q": "How often should I conduct a SWOT Analysis?",
        "a": "Minimum annually as part of strategic planning. Also upon significant events: product launch, pivot, funding round, strong competitor entry. Early-stage startups might do it quarterly because context changes rapidly. If your last SWOT is over 12 months old, it's probably outdated."
      },
      {
        "q": "How do I avoid SWOT being just a valueless list?",
        "a": "Three keys: (1) Be specific with data. \"Good product\" → \"NPS of 65, 40% higher than industry average\". (2) Prioritize: select the 3-5 most critical items per quadrant. (3) Define concrete actions: each insight must connect to a decision. If it doesn't change your roadmap or budget, it's probably not relevant."
      },
      {
        "q": "Does SWOT work for very small companies or only corporations?",
        "a": "It's useful at any size, but the focus changes. In a 3-person team, strengths/weaknesses are more about specific people and immediate resources. In a corporation, about business units and organizational capabilities. Bootstrapped startups must be especially honest with weaknesses (limited funding) and realistic with threats (can't compete on all dimensions)."
      }
    ]
  }
};
