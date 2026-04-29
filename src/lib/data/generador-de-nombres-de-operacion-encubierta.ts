import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-operacion-encubierta",
    "en": "covert-operation-name-generator"
  },
  "category": "fun",
  "emoji": "🎯",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Operación Encubierta | Genfy",
    "metaDesc": "Creá nombres clasificados de operaciones encubiertas, misiones black-ops y acciones clandestinas para thrillers, sci-fi militar y rol táctico.",
    "h1": "Generador de Nombres de Operación Encubierta",
    "intro": "Inventá codenames de operaciones black-ops y misiones clandestinas con peso militar real. Para thriller, sci-fi militar y rol de espías.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo de la operación",
        "items": [
          "Operación", "Operation", "Misión", "Mission", "Maniobra", "Ejercicio", "Exercise", "Programa",
          "Iniciativa", "Initiative", "Acción", "Phase", "Fase", "Black", "Gold", "Crimson",
          "Silver", "Iron", "Steel", "Joint", "Conjunta", "Combined", "Unified", "Sustained",
          "Enduring", "Strategic", "Tactical", "Quick", "Decisive", "Storm", "Tempest", "Final",
          "Dawn", "Dusk", "Eclipse", "Midnight", "Twilight", "Sunrise", "Sunset", "Daybreak"
        ]
      },
      {
        "id": "name",
        "label": "Nombre clave",
        "items": [
          "Cobra", "Halcón", "Águila", "Lobo", "Tigre", "Pantera", "Serpiente", "Escorpión",
          "Trueno", "Tormenta", "Relámpago", "Huracán", "Tornado", "Ventisca", "Niebla", "Aurora",
          "Neptune", "Mercury", "Apollo", "Atlas", "Orion", "Phoenix", "Hydra", "Cerberus",
          "Liberty", "Justice", "Patriot", "Freedom", "Sentinel", "Vigilance", "Resolute", "Steadfast",
          "Anaconda", "Mongoose", "Falcon Reach", "Iron Hand", "Silent Trumpet", "Blue Star", "Crimson Tide", "Long Shadow"
        ]
      },
      {
        "id": "modifier",
        "label": "Modificador / variante",
        "items": [
          "I", "II", "III", "IV", "V", "Plus", "Prime", "Final",
          "Phase 1", "Phase 2", "Phase 3", "Wave I", "Wave II", "Sub-Operación 1", "Sub-Operación 2", "Anexo Bravo",
          "Sigma", "Omega", "Alpha", "Delta", "Epsilon", "Theta", "Lambda", "Kappa",
          "-Echo", "-Foxtrot", "-Tango", "-Sierra", "-Whiskey", "-Charlie", "-Bravo", "-Zulu",
          "Plan A", "Plan B", "Reserva", "Contingencia", "Excepción 7", "Caso 13", "Anexo C", "Variante Z"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo construir codename de operación clandestina",
        "body": "<p>Los codenames militares reales (Operation Neptune Spear, Operation Eagle Claw, Operation Just Cause) usan dos a cuatro palabras evocadoras. La regla del DoD: las palabras se eligen de listas curadas para evitar que el nombre revele la operación. 'Neptune Spear' no dice nada de matar a Bin Laden; eso es deliberado.</p><p>Estructura típica: prefijo (Operation/Mission) + adjetivo + sustantivo. Operation Iraqi Freedom, Operation Enduring Freedom, Operation Desert Storm. Notá la repetición de 'Freedom' en operaciones americanas post-2001. Cada país tiene su preferencia: Reino Unido usa nombres botánicos (Operation Fortis), Israel usa nombres bíblicos (Operation Entebbe).</p><p>Para tu narrativa ficticia, decidí: ¿la operación se conoce públicamente o es clandestina? Las públicas tienen nombres aspiracionales (Operation Iron Resolve). Las clandestinas tienen nombres opacos o numéricos (Operation Crimson-7, Project Aurora). La distinción es clave para tu lector.</p>"
      },
      {
        "h2": "Tipos de operación según género narrativo",
        "body": "<p>Asalto comando: extracción de rehén, eliminación de objetivo, sabotaje de instalación. Tono <em>Zero Dark Thirty</em>, <em>Lone Survivor</em>, <em>Captain Phillips</em>. Codenames cortos, agresivos: 'Eagle Claw', 'Neptune Spear', 'Iron Hand'. La operación tiene inicio definido, escalada, clímax violento, exfiltración.</p><p>Inteligencia y vigilancia: recopilación de información, infiltración, escucha. Tono <em>Tinker Tailor Soldier Spy</em>, <em>Munich</em>, <em>Bridge of Spies</em>. Codenames poéticos o crípticos: 'Operation Mockingbird', 'Project Bluebird'. La operación dura meses o años, sin clímax explosivo. La tensión viene de la prolongación del riesgo.</p><p>Negación plausible: golpe de estado, asesinato selectivo, financiación de proxy. Tono <em>The Constant Gardener</em>, <em>Body of Lies</em>. Codenames anónimos hasta filtración: 'Operation Ajax' (Irán 1953), 'Operation Condor' (Sudamérica). La operación termina supuestamente exitosa pero deja secuelas geopolíticas que la trama explora.</p><p>Sci-fi militar: contención de IA, primera línea contra invasión alienígena, recuperación de tecnología perdida. Tono <em>Edge of Tomorrow</em>, <em>Halo</em>. Codenames mixtos tradición militar + lore: 'Operation Lambda Halo', 'Project Wormhole'. La escala puede ser planetaria o estelar.</p>"
      },
      {
        "h2": "Errores comunes al inventar operaciones encubiertas",
        "body": "<p>Error 1: nombre que telegrafía la misión. 'Operation Bin Laden Hunt' es absurdo; 'Operation Neptune Spear' es real. La esencia del codename es opacidad. Si tu operación se llama 'Eliminación del Presidente Enemigo', tu lector pierde sutileza. Mejor 'Operation Crimson Wave' y que el contexto revele qué hace.</p><p>Error 2: sin briefing creíble. Toda operación real tiene un briefing previo: objetivo, ROE (rules of engagement), exfil, contingencias. Si tu protagonista 'sale a hacer la misión' sin que se mencionen estos elementos, perdés realismo procedural. Una página de briefing antes del asalto vale oro.</p><p>Error 3: éxito o fracaso binario. Las operaciones reales son grises. <em>Black Hawk Down</em> ejemplifica operación que técnicamente cumplió objetivo (capturar a Aidid) pero fue desastre político. <em>Eagle Claw</em> falló completamente. Tu operación ficticia puede ganar la batalla y perder la guerra, capturar al objetivo y dejar 12 bajas, o exfiltrar exitosamente con la misión equivocada.</p>"
      },
      {
        "h2": "Cronología y estructura de operación creíble",
        "body": "<p>Las operaciones reales tienen fases nombradas. <em>Just Cause</em> tuvo Phase I (initial strike), Phase II (consolidation), Phase III (stabilization). Tu operación ficticia merece la misma articulación: ¿qué pasa primero, segundo, tercero? Un asalto típico: insertion, breach, target acquisition, secure, exfiltration. Cada fase puede tener subnombre.</p><p>Tiempo y ritmo: 'H-Hour' es momento del asalto. 'D-Day' es día de operación. 'Time Now' es momento actual. Esa nomenclatura procedural anclada en horas precisas (H-3, H-1, H-Hour, H+5) crea tensión. Tu narrativa puede contar cada minuto si la operación es de 30 minutos, o saltar días si es de meses.</p><p>Acrónimos y jergas: ROE (Rules of Engagement), AO (Area of Operations), HVT (High Value Target), PID (Positive Identification), TOC (Tactical Operations Center). Sembrá tres a cinco abreviaturas y tu lector militar se siente en casa. No expliques cada una explícitamente; el contexto las descifra. La autenticidad jergal es shortcut a credibilidad.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo decido si la operación es pública o clandestina?",
        "a": "Si los gobiernos la reivindican, es pública (Operation Desert Storm). Si la niegan o no se conoce hasta filtración, es clandestina (Operation Mongoose). Las clandestinas suelen ser más interesantes narrativamente porque la deniability genera trama secundaria de exposición y consecuencias."
      },
      {
        "q": "¿Conviene basarse en operaciones reales famosas?",
        "a": "Sí, son fuente legítima. Investigá Operation Eagle Claw (fracaso famoso), Operation Neptune Spear (Bin Laden), Operation Mincemeat (deception WWII). Combiná elementos de varias para ficcionalizar sin replicar literal. La estructura de operaciones reales enseña ritmo narrativo."
      },
      {
        "q": "¿Una novela puede mezclar varias operaciones?",
        "a": "Sí, y suma realismo. Las narrativas militares serias suelen tener operación principal y dos o tres relacionadas mencionadas. <em>Generation Kill</em>, <em>The Hunt for Red October</em> hacen esto. Tu protagonista participa de Operation X mientras Operation Y ocurre en paralelo y Operation Z fracasó tres meses antes."
      },
      {
        "q": "¿Cómo manejo bajas y daño colateral en mi operación ficticia?",
        "a": "Con honestidad. Las operaciones reales producen víctimas, errores, daño civil. Si tu novela glorifica sin costo, pierde peso adulto. <em>American Sniper</em> y <em>The Hurt Locker</em> dramatizan el peso moral. Mostrá al menos una decisión gris: rehén que muere por error, civil que aparece donde no debía, soldado herido que ralentiza la exfiltración."
      }
    ]
  },
  "en": {
    "pageTitle": "Covert Operation Name Generator | Genfy",
    "metaDesc": "Create classified covert operation, black-ops mission and clandestine action names for thrillers, military sci-fi and tactical roleplay.",
    "h1": "Covert Operation Name Generator",
    "intro": "Invent codenames for black-ops and clandestine missions with real military weight. For thriller, military sci-fi and spy roleplay.",
    "tag": "Worldbuilding",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Operation prefix",
        "items": [
          "Operation", "Mission", "Maneuver", "Exercise", "Program", "Initiative", "Action", "Phase",
          "Black", "Gold", "Crimson", "Silver", "Iron", "Steel", "Joint", "Combined",
          "Unified", "Sustained", "Enduring", "Strategic", "Tactical", "Quick", "Decisive", "Storm",
          "Tempest", "Final", "Dawn", "Dusk", "Eclipse", "Midnight", "Twilight", "Sunrise",
          "Sunset", "Daybreak", "Lasting", "Continuous", "Sudden", "Silent", "Stealth", "Shadow"
        ]
      },
      {
        "id": "name",
        "label": "Codename",
        "items": [
          "Cobra", "Hawk", "Eagle", "Wolf", "Tiger", "Panther", "Snake", "Scorpion",
          "Thunder", "Storm", "Lightning", "Hurricane", "Tornado", "Blizzard", "Fog", "Aurora",
          "Neptune", "Mercury", "Apollo", "Atlas", "Orion", "Phoenix", "Hydra", "Cerberus",
          "Liberty", "Justice", "Patriot", "Freedom", "Sentinel", "Vigilance", "Resolute", "Steadfast",
          "Anaconda", "Mongoose", "Falcon Reach", "Iron Hand", "Silent Trumpet", "Blue Star", "Crimson Tide", "Long Shadow"
        ]
      },
      {
        "id": "modifier",
        "label": "Modifier / variant",
        "items": [
          "I", "II", "III", "IV", "V", "Plus", "Prime", "Final",
          "Phase 1", "Phase 2", "Phase 3", "Wave I", "Wave II", "Sub-Operation 1", "Sub-Operation 2", "Annex Bravo",
          "Sigma", "Omega", "Alpha", "Delta", "Epsilon", "Theta", "Lambda", "Kappa",
          "-Echo", "-Foxtrot", "-Tango", "-Sierra", "-Whiskey", "-Charlie", "-Bravo", "-Zulu",
          "Plan A", "Plan B", "Reserve", "Contingency", "Exception 7", "Case 13", "Annex C", "Variant Z"
        ]
      }
    ],
    "separator": " ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to build a clandestine operation codename",
        "body": "<p>Real military codenames (Operation Neptune Spear, Operation Eagle Claw, Operation Just Cause) use two to four evocative words. The DoD rule: words are chosen from curated lists to prevent the name from revealing the operation. 'Neptune Spear' says nothing about killing Bin Laden; that's deliberate.</p><p>Typical structure: prefix (Operation/Mission) + adjective + noun. Operation Iraqi Freedom, Operation Enduring Freedom, Operation Desert Storm. Note the repetition of 'Freedom' in post-2001 American operations. Each country has its preference: UK uses botanical names (Operation Fortis), Israel uses biblical (Operation Entebbe).</p><p>For your fictional narrative, decide: is the operation publicly known or clandestine? Public ones have aspirational names (Operation Iron Resolve). Clandestine ones have opaque or numeric names (Operation Crimson-7, Project Aurora). The distinction is key for your reader.</p>"
      },
      {
        "h2": "Operation types by narrative genre",
        "body": "<p>Commando assault: hostage rescue, target elimination, facility sabotage. Tone <em>Zero Dark Thirty</em>, <em>Lone Survivor</em>, <em>Captain Phillips</em>. Short, aggressive codenames: 'Eagle Claw', 'Neptune Spear', 'Iron Hand'. Operation has defined start, escalation, violent climax, exfiltration.</p><p>Intelligence and surveillance: information gathering, infiltration, eavesdropping. Tone <em>Tinker Tailor Soldier Spy</em>, <em>Munich</em>, <em>Bridge of Spies</em>. Poetic or cryptic codenames: 'Operation Mockingbird', 'Project Bluebird'. Operation lasts months or years, no explosive climax. Tension comes from prolongation of risk.</p><p>Plausible deniability: coup, targeted assassination, proxy funding. Tone <em>The Constant Gardener</em>, <em>Body of Lies</em>. Anonymous codenames until leak: 'Operation Ajax' (Iran 1953), 'Operation Condor' (South America). Operation supposedly ends successfully but leaves geopolitical sequels the plot explores.</p><p>Military sci-fi: AI containment, frontline against alien invasion, recovery of lost tech. Tone <em>Edge of Tomorrow</em>, <em>Halo</em>. Mixed codenames military tradition + lore: 'Operation Lambda Halo', 'Project Wormhole'. Scale can be planetary or stellar.</p>"
      },
      {
        "h2": "Common mistakes inventing covert operations",
        "body": "<p>Mistake 1: name telegraphing the mission. 'Operation Bin Laden Hunt' is absurd; 'Operation Neptune Spear' is real. The codename's essence is opacity. If your operation is called 'Enemy President Elimination', your reader loses subtlety. Better 'Operation Crimson Wave' and let context reveal what it does.</p><p>Mistake 2: no credible briefing. Every real operation has a prior briefing: objective, ROE (rules of engagement), exfil, contingencies. If your protagonist 'goes out on the mission' without these elements mentioned, you lose procedural realism. A page of briefing before the assault is gold.</p><p>Mistake 3: binary success or failure. Real operations are gray. <em>Black Hawk Down</em> exemplifies operation that technically met objective (capturing Aidid) but was political disaster. <em>Eagle Claw</em> failed completely. Your fictional operation can win the battle and lose the war, capture the target and leave 12 casualties, or exfil successfully with the wrong mission.</p>"
      },
      {
        "h2": "Believable operation chronology and structure",
        "body": "<p>Real operations have named phases. <em>Just Cause</em> had Phase I (initial strike), Phase II (consolidation), Phase III (stabilization). Your fictional operation deserves the same articulation: what happens first, second, third? Typical assault: insertion, breach, target acquisition, secure, exfiltration. Each phase can have sub-name.</p><p>Time and rhythm: 'H-Hour' is assault moment. 'D-Day' is operation day. 'Time Now' is current moment. That procedural nomenclature anchored in precise hours (H-3, H-1, H-Hour, H+5) creates tension. Your narrative can count every minute if the operation is 30 minutes, or skip days if it's months.</p><p>Acronyms and jargon: ROE (Rules of Engagement), AO (Area of Operations), HVT (High Value Target), PID (Positive Identification), TOC (Tactical Operations Center). Seed three to five abbreviations and your military reader feels at home. Don't explain each explicitly; context decodes them. Jargon authenticity is shortcut to credibility.</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I decide if the operation is public or clandestine?",
        "a": "If governments claim it, it's public (Operation Desert Storm). If they deny it or it's unknown until leak, it's clandestine (Operation Mongoose). Clandestine ones tend to be more narratively interesting because deniability generates secondary plot of exposure and consequences."
      },
      {
        "q": "Should I base on famous real operations?",
        "a": "Yes, legitimate source. Research Operation Eagle Claw (famous failure), Operation Neptune Spear (Bin Laden), Operation Mincemeat (WWII deception). Combine elements from several to fictionalize without literal replication. Real operation structure teaches narrative rhythm."
      },
      {
        "q": "Can a novel mix several operations?",
        "a": "Yes, adds realism. Serious military narratives usually have main operation and two or three related ones mentioned. <em>Generation Kill</em>, <em>The Hunt for Red October</em> do this. Your protagonist participates in Operation X while Operation Y happens in parallel and Operation Z failed three months ago."
      },
      {
        "q": "How do I handle casualties and collateral damage in my fictional operation?",
        "a": "With honesty. Real operations produce victims, errors, civilian damage. If your novel glorifies without cost, it loses adult weight. <em>American Sniper</em> and <em>The Hurt Locker</em> dramatize the moral weight. Show at least one gray decision: hostage who dies by mistake, civilian appearing where they shouldn't, wounded soldier slowing exfiltration."
      }
    ]
  }
};
