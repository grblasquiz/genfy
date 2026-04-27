import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-plan-de-precios",
    "en": "pricing-plan-name-generator"
  },
  "category": "business",
  "emoji": "💳",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Plan de Precios | Genfy",
    "metaDesc": "Crea nombres aspiracionales para tus planes SaaS, tiers de suscripción y paquetes premium. Genera opciones profesionales que conectan con cada segmento.",
    "h1": "Generador de Nombres de Plan de Precios",
    "intro": "Transforma tus tiers de pricing en etiquetas que comunican valor y posicionamiento. Generá combinaciones que ayudan a cada cliente a identificar su nivel ideal.",
    "tag": "Negocios",
    "filterLabel": "Estilo",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo",
        "items": [
          "Plan",
          "Tier",
          "Paquete",
          "Nivel",
          "Membresía",
          "Suscripción",
          "Acceso",
          "Suite",
          "Pack",
          "Kit",
          "Programa",
          "Modalidad",
          "Opción",
          "Categoría",
          "Edición",
          "Versión",
          "Plan de",
          "Modelo",
          "Formato",
          "Esquema",
          "Pack de",
          "Bundle",
          "Suite de",
          "Licencia",
          "Tarifa",
          "Módulo",
          "Sistema",
          "Solución",
          "Paquete de",
          "Espacio"
        ]
      },
      {
        "id": "tier",
        "label": "Nivel",
        "items": [
          "Inicial",
          "Básico",
          "Esencial",
          "Estándar",
          "Plus",
          "Pro",
          "Profesional",
          "Avanzado",
          "Premium",
          "Business",
          "Empresarial",
          "Elite",
          "Ultimate",
          "Platinum",
          "Gold",
          "Silver",
          "Bronze",
          "Starter",
          "Growth",
          "Scale",
          "Enterprise",
          "Team",
          "Equipo",
          "Individual",
          "Personal",
          "Corporativo",
          "Agency",
          "Studio",
          "Freelance",
          "Completo",
          "Total",
          "Unlimited",
          "Ilimitado",
          "Master",
          "Expert",
          "Creator",
          "Builder",
          "Developer",
          "Innovator",
          "Pioneer",
          "Lite",
          "Mini",
          "Mega",
          "Max",
          "Super",
          "Ultra",
          "Prime",
          "Core",
          "Extended",
          "Unlimited Pro"
        ]
      },
      {
        "id": "suffix",
        "label": "Sufijo (opcional)",
        "items": [
          "",
          "",
          "",
          "",
          "",
          "Experience",
          "Access",
          "Suite",
          "Package",
          "Solution",
          "Advantage",
          "Connect",
          "Hub",
          "Workspace",
          "Club",
          "Membership",
          "Edition",
          "Version",
          "Pass",
          "Portal",
          "Gateway",
          "Center",
          "Network",
          "Ecosystem",
          "Platform",
          "Engine",
          "Power",
          "Boost",
          "Drive",
          "Launch"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo elegir nombres que posicionan cada tier",
        "body": "<p>Los nombres de planes funcionan mejor cuando comunican jerarquía sin sonar arbitrarios. <strong>Evitá esquemas tipo Bronce/Plata/Oro</strong> si tu producto no es transaccional: funcionan en seguros o tarjetas de crédito, pero suenan genéricos en SaaS B2B.</p><p>Tres enfoques probados: <strong>funcional</strong> (Starter/Pro/Enterprise describe uso real), <strong>aspiracional</strong> (nombres evocativos como Launch/Scale/Dominate), o <strong>por segmento</strong> (Individual/Team/Business). Slack usa Free/Pro/Business+/Enterprise Grid; Notion usa Personal/Team/Enterprise. El patrón común: claridad sobre creatividad excesiva.</p><p>Un error frecuente es usar <strong>demasiados niveles</strong>. Tres tiers es óptimo para conversión; cuatro funciona si hay un freemium claro. Cinco o más diluyen la decisión. Dropbox simplificó de cuatro planes a tres y mejoró su tasa de upgrade 23%. <strong>La fricción cognitiva mata la conversión.</strong></p><p>Los sufijos como 'Plus' o 'Pro' tienen significado: Plus sugiere 'un paso más', Pro implica uso profesional. Ultimate o Premium posicionan tope de gama. Starter señala punto de entrada. Estas palabras no son decorativas, <strong>anclan expectativas de precio y funcionalidad</strong> antes de que el usuario lea features.</p>"
      },
      {
        "h2": "Errores comunes en naming de pricing tiers",
        "body": "<p>El error número uno: <strong>nombres que no escalan</strong>. Si llamás 'Ultimate' a tu tier medio, ¿qué nombre le ponés al enterprise cuando lo lances? GitHub tuvo este problema con 'Team' y terminó creando 'GitHub Enterprise', una solución incómoda. Pensá en expansión futura del producto.</p><p>Segundo error crítico: <strong>inconsistencia de marca</strong>. Si tu producto se llama 'Swift Analytics' y tus planes son Luna/Marte/Júpiter, hay desconexión. Buffer usa Free/Essentials/Team/Agency, todos términos que reflejan su posicionamiento de herramienta de trabajo. La coherencia reduce fricción mental.</p><p>Muchos copian a competidores sin pensar. Cinco productos en tu categoría usan Starter/Pro/Enterprise no significa que debas hacerlo. <strong>HubSpot diferencia con Starter/Professional/Enterprise</strong>, evitando el sobrecargado 'Pro'. Mailchimp usa Free/Essentials/Standard/Premium, una progresión menos obvia pero memorable.</p><p>El último error: nombres que requieren explicación. Si un tier se llama 'Infinity Plus Unlimited Max', nadie entiende qué significa. La regla: <strong>si necesitás un tooltip para aclarar el nombre del plan, fallaste</strong>. El nombre debe ser auto-evidente en contexto de pricing page.</p>"
      },
      {
        "h2": "Psicología del pricing: qué comunica cada término",
        "body": "<p><strong>'Starter' señala limitación temporal.</strong> Implica que el usuario crecerá fuera de este plan, lo cual es estratégico: creates expectativa de upgrade. Canva usa Canva Free (no Starter) porque no quieren sugerir limitación, prefieren posicionar su tier pago como opcional.</p><p>'Professional' vs 'Pro': Professional suena corporativo, atrae equipos y facturación por empresa. Pro es aspiracional individual, atrae freelancers y creadores. <strong>Figma usa Professional</strong>, Notion usa Personal Pro. La diferencia de una palabra cambia quién se identifica con el tier.</p><p>Términos de escala (Growth/Scale/Enterprise) funcionan en productos con pricing basado en uso o seats. <strong>Indican que el plan crece con vos.</strong> Intercom usa esta progresión porque su valor está ligado a volumen de conversaciones. No tiene sentido en productos de feature-gating puro.</p><p>'Premium' y 'Ultimate' son techos psicológicos. Posicionan precio alto pero <strong>también crean el problema del 'qué sigue'</strong>. Spotify usa Premium desde 2011 sin agregar tier superior porque su modelo no lo requiere. Si tu roadmap incluye enterprise personalizado, no quemes 'Ultimate' en un tier estándar de $99/mes.</p>"
      },
      {
        "h2": "Testing y optimización de nombres de planes",
        "body": "<p>Cambiar nombres de planes es más riesgoso que cambiar copy de features. Los usuarios existentes <strong>se identifican con su tier actual</strong>; renombrarlo puede generar confusión o percepción de downgrade. Cuando Adobe pasó de versiones perpetuas a CC, mantuvo 'Creative Cloud' consistente mientras migraba pricing.</p><p>Un A/B test clásico: Free/Pro/Business vs Free/Premium/Enterprise en productos B2B. <strong>Premium convierte mejor en B2C, Business en B2B.</strong> Tested esto con muestras de 5000+ visitantes por variante mínimo; cambios pequeños de naming tienen efectos sutiles que necesitan volumen para detectarse.</p><p>Considerá coherencia de canal. Si tu equipo de ventas dice 'nuestro plan corporativo' pero el sitio dice 'Enterprise Tier', hay fricción. <strong>Alineá naming entre marketing, ventas, producto y CS.</strong> Airtable documentó internamente que su tier 'Pro' debía mencionarse como 'plan Pro' (no 'versión Pro') para consistencia.</p><p>Testear internamente primero: mostrá esquemas de naming a 10-15 usuarios actuales en entrevistas. Preguntales <strong>'¿qué esperarías del Plan X?'</strong> antes de mostrar features. Si las respuestas están alineadas con tu intención, el naming funciona. Si hay confusión sistemática ('pensé que Pro incluiría SSO'), ajustá antes de lanzar.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántos planes debería ofrecer?",
        "a": "Tres es óptimo para maximizar conversión: un tier de entrada, uno medio (donde querés que caiga mayoría) y uno premium. Cuatro funciona si incluís freemium, pero más opciones diluyen decisión."
      },
      {
        "q": "¿Puedo cambiar el nombre de mis planes después del lanzamiento?",
        "a": "Sí, pero comunicalo claramente a usuarios actuales. Mantené URLs y referencias internas durante transición, y asegurate que dashboards reflejen el cambio sin generar confusión sobre qué incluye cada tier."
      },
      {
        "q": "¿Debo usar los mismos nombres que mi competencia?",
        "a": "No automáticamente. Si tu categoría usa Starter/Pro/Enterprise de forma estándar, diferenciarte puede confundir. Pero si podés comunicar valor único con nombres distintos, es ventaja competitiva."
      },
      {
        "q": "¿Qué pasa si quiero agregar un tier más caro después?",
        "a": "Evitá usar 'Ultimate' o 'Premium' en tiers medios. Dejá espacio semántico arriba: si tu tier actual top es 'Pro', podés agregar 'Enterprise'. Si ya es 'Ultimate', estás limitado."
      }
    ]
  },
  "en": {
    "pageTitle": "Pricing Plan Name Generator | Genfy",
    "metaDesc": "Create aspirational names for your SaaS plans, subscription tiers and premium packages. Generate professional options that connect with each segment.",
    "h1": "Pricing Plan Name Generator",
    "intro": "Turn your pricing tiers into labels that communicate value and positioning. Generate combinations that help each customer identify their ideal level.",
    "tag": "Business",
    "filterLabel": "Style",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefix",
        "items": [
          "Plan",
          "Tier",
          "Package",
          "Level",
          "Membership",
          "Subscription",
          "Access",
          "Suite",
          "Pack",
          "Kit",
          "Program",
          "Option",
          "Category",
          "Edition",
          "Version",
          "Model",
          "Format",
          "Scheme",
          "Bundle",
          "License",
          "Rate",
          "Module",
          "System",
          "Solution",
          "Space"
        ]
      },
      {
        "id": "tier",
        "label": "Tier",
        "items": [
          "Starter",
          "Basic",
          "Essential",
          "Standard",
          "Plus",
          "Pro",
          "Professional",
          "Advanced",
          "Premium",
          "Business",
          "Enterprise",
          "Elite",
          "Ultimate",
          "Platinum",
          "Gold",
          "Silver",
          "Bronze",
          "Growth",
          "Scale",
          "Team",
          "Individual",
          "Personal",
          "Corporate",
          "Agency",
          "Studio",
          "Freelance",
          "Complete",
          "Total",
          "Unlimited",
          "Master",
          "Expert",
          "Creator",
          "Builder",
          "Developer",
          "Innovator",
          "Pioneer",
          "Lite",
          "Mini",
          "Mega",
          "Max",
          "Super",
          "Ultra",
          "Prime",
          "Core",
          "Extended",
          "Unlimited Pro",
          "Power",
          "All-Access"
        ]
      },
      {
        "id": "suffix",
        "label": "Suffix (optional)",
        "items": [
          "",
          "",
          "",
          "",
          "",
          "Experience",
          "Access",
          "Suite",
          "Package",
          "Solution",
          "Advantage",
          "Connect",
          "Hub",
          "Workspace",
          "Club",
          "Membership",
          "Edition",
          "Version",
          "Pass",
          "Portal",
          "Gateway",
          "Center",
          "Network",
          "Ecosystem",
          "Platform",
          "Engine",
          "Boost",
          "Drive",
          "Launch"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to choose names that position each tier",
        "body": "<p>Plan names work best when they communicate hierarchy without sounding arbitrary. <strong>Avoid Bronze/Silver/Gold schemes</strong> if your product isn't transactional: they work for insurance or credit cards but sound generic in B2B SaaS.</p><p>Three proven approaches: <strong>functional</strong> (Starter/Pro/Enterprise describes actual use), <strong>aspirational</strong> (evocative names like Launch/Scale/Dominate), or <strong>segment-based</strong> (Individual/Team/Business). Slack uses Free/Pro/Business+/Enterprise Grid; Notion uses Personal/Team/Enterprise. The common pattern: clarity over excessive creativity.</p><p>A frequent mistake is using <strong>too many levels</strong>. Three tiers is optimal for conversion; four works if there's a clear freemium. Five or more dilutes decision-making. Dropbox simplified from four plans to three and improved their upgrade rate by 23%. <strong>Cognitive friction kills conversion.</strong></p><p>Suffixes like 'Plus' or 'Pro' carry meaning: Plus suggests 'one step up', Pro implies professional use. Ultimate or Premium position top-tier. Starter signals entry point. These words aren't decorative, <strong>they anchor price and feature expectations</strong> before users read feature lists.</p>"
      },
      {
        "h2": "Common mistakes in pricing tier naming",
        "body": "<p>Mistake number one: <strong>names that don't scale</strong>. If you call your mid-tier 'Ultimate', what do you name enterprise when you launch it? GitHub had this problem with 'Team' and ended up creating 'GitHub Enterprise', an awkward solution. Think about future product expansion.</p><p>Second critical error: <strong>brand inconsistency</strong>. If your product is called 'Swift Analytics' and your plans are Luna/Mars/Jupiter, there's disconnect. Buffer uses Free/Essentials/Team/Agency, all terms reflecting their positioning as a work tool. Coherence reduces mental friction.</p><p>Many copy competitors without thinking. Five products in your category using Starter/Pro/Enterprise doesn't mean you should. <strong>HubSpot differentiates with Starter/Professional/Enterprise</strong>, avoiding the overused 'Pro'. Mailchimp uses Free/Essentials/Standard/Premium, a less obvious but memorable progression.</p><p>The final mistake: names requiring explanation. If a tier is called 'Infinity Plus Unlimited Max', nobody understands what it means. The rule: <strong>if you need a tooltip to clarify the plan name, you failed</strong>. The name should be self-evident in pricing page context.</p>"
      },
      {
        "h2": "Pricing psychology: what each term communicates",
        "body": "<p><strong>'Starter' signals temporary limitation.</strong> It implies users will grow out of this plan, which is strategic: you create upgrade expectation. Canva uses Canva Free (not Starter) because they don't want to suggest limitation, they prefer positioning their paid tier as optional.</p><p>'Professional' vs 'Pro': Professional sounds corporate, attracts teams and company billing. Pro is aspirational individual, attracts freelancers and creators. <strong>Figma uses Professional</strong>, Notion uses Personal Pro. One word's difference changes who identifies with the tier.</p><p>Scale terms (Growth/Scale/Enterprise) work in products with usage or seat-based pricing. <strong>They indicate the plan grows with you.</strong> Intercom uses this progression because their value ties to conversation volume. It doesn't make sense in pure feature-gating products.</p><p>'Premium' and 'Ultimate' are psychological ceilings. They position high price but <strong>also create the 'what's next' problem</strong>. Spotify has used Premium since 2011 without adding a higher tier because their model doesn't require it. If your roadmap includes custom enterprise, don't burn 'Ultimate' on a standard $99/month tier.</p>"
      },
      {
        "h2": "Testing and optimizing plan names",
        "body": "<p>Changing plan names is riskier than changing feature copy. Existing users <strong>identify with their current tier</strong>; renaming it can generate confusion or perception of downgrade. When Adobe moved from perpetual versions to CC, they kept 'Creative Cloud' consistent while migrating pricing.</p><p>A classic A/B test: Free/Pro/Business vs Free/Premium/Enterprise in B2B products. <strong>Premium converts better in B2C, Business in B2B.</strong> Test this with samples of 5000+ visitors per variant minimum; small naming changes have subtle effects requiring volume to detect.</p><p>Consider cross-channel coherence. If your sales team says 'our corporate plan' but the site says 'Enterprise Tier', there's friction. <strong>Align naming across marketing, sales, product and CS.</strong> Airtable internally documented that their 'Pro' tier should be mentioned as 'Pro plan' (not 'Pro version') for consistency.</p><p>Test internally first: show naming schemes to 10-15 current users in interviews. Ask them <strong>'what would you expect from Plan X?'</strong> before showing features. If responses align with your intention, the naming works. If there's systematic confusion ('I thought Pro would include SSO'), adjust before launching.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many plans should I offer?",
        "a": "Three is optimal for maximizing conversion: an entry tier, a middle one (where you want most users) and a premium. Four works if you include freemium, but more options dilute decision-making."
      },
      {
        "q": "Can I change my plan names after launch?",
        "a": "Yes, but communicate it clearly to current users. Keep URLs and internal references during transition, and ensure dashboards reflect the change without creating confusion about what each tier includes."
      },
      {
        "q": "Should I use the same names as my competition?",
        "a": "Not automatically. If your category uses Starter/Pro/Enterprise as standard, differentiating might confuse. But if you can communicate unique value with different names, it's competitive advantage."
      },
      {
        "q": "What if I want to add a more expensive tier later?",
        "a": "Avoid using 'Ultimate' or 'Premium' on mid-tiers. Leave semantic space above: if your current top tier is 'Pro', you can add 'Enterprise'. If it's already 'Ultimate', you're limited."
      }
    ]
  }
};
