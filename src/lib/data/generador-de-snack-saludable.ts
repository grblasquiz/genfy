import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-snack-saludable",
    "en": "healthy-snack-generator"
  },
  "category": "random",
  "emoji": "🥗",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Snack Saludable | Genfy",
    "metaDesc": "Generá combinaciones de snacks saludables al instante con información de calorías y macros. Ideal para planificar colaciones nutritivas y equilibradas.",
    "h1": "Generador de Snack Saludable",
    "intro": "Combiná snacks nutritivos según tus necesidades calóricas y de macronutrientes. Planificá colaciones equilibradas que se ajusten a tu estilo de vida activo.",
    "tag": "Aleatorio",
    "filterLabel": "Categoría",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "base",
        "label": "Base",
        "items": [
          "Mix de frutos secos (30g)",
          "Yogur griego natural (150g)",
          "Rodajas de manzana verde",
          "Palitos de zanahoria y apio",
          "Tostadas de arroz integral",
          "Edamames al vapor (100g)",
          "Huevo duro",
          "Queso cottage bajo en grasa (100g)",
          "Pepino en rodajas",
          "Rollitos de pavo",
          "Bastones de pimiento rojo",
          "Tomates cherry",
          "Chips de kale al horno",
          "Rodajas de pepino",
          "Tiras de pechuga de pollo",
          "Chips de batata al horno",
          "Hummus casero (50g)",
          "Frambuesas frescas (100g)",
          "Arándanos frescos (80g)",
          "Galletas de arroz",
          "Pan árabe integral",
          "Palitos de jícama",
          "Cubos de sandía",
          "Trozos de melón",
          "Kiwi en rodajas",
          "Frutillas (150g)",
          "Uvas verdes",
          "Coliflor al vapor",
          "Brócoli crudo",
          "Mix de vegetales encurtidos"
        ]
      },
      {
        "id": "protein",
        "label": "Proteína",
        "items": [
          "mantequilla de maní natural (15g)",
          "almendras tostadas (20g)",
          "atún al natural",
          "queso mozzarella light",
          "proteína en polvo sin azúcar",
          "nueces de Brasil (6 unidades)",
          "pistachos sin sal (25g)",
          "anacardos crudos",
          "semillas de girasol",
          "semillas de calabaza",
          "mantequilla de almendras",
          "queso cheddar bajo en grasa",
          "salmón ahumado (30g)",
          "camarones cocidos",
          "claras de huevo cocidas",
          "tofu firme (50g)",
          "tempeh marinado",
          "leche de almendras sin azúcar",
          "requesón bajo en grasa",
          "shake de proteína vegetal",
          "sardinas en agua",
          "pechuga de pavo ahumada",
          "jamón serrano magro",
          "leche de soja fortificada",
          "queso fresco descremado"
        ]
      },
      {
        "id": "topping",
        "label": "Extra",
        "items": [
          "+ semillas de chía",
          "+ semillas de lino molidas",
          "+ cacao nibs",
          "+ canela en polvo",
          "+ miel orgánica (5g)",
          "+ chips de coco sin azúcar",
          "+ granola sin azúcar (20g)",
          "+ arándanos deshidratados sin azúcar",
          "+ dátiles picados (2 unidades)",
          "+ pasas de uva (15g)",
          "+ cúrcuma en polvo",
          "+ jengibre fresco rallado",
          "+ stevia líquida",
          "+ extracto de vainilla",
          "+ ralladura de limón",
          "+ semillas de sésamo tostadas",
          "+ aceite de oliva extra virgen",
          "+ vinagre balsámico",
          "+ sal del Himalaya",
          "+ pimienta negra molida",
          "+ levadura nutricional",
          "+ espirulina en polvo",
          "+ matcha en polvo",
          "+ extracto de menta",
          "+ ralladura de naranja"
        ]
      }
    ],
    "separator": " con ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo armar snacks equilibrados según tus macros",
        "body": "<p>Un snack saludable debe combinar los tres macronutrientes en proporciones adecuadas para mantener la saciedad y la energía estable. La regla general es incluir <strong>15-20g de proteína</strong>, carbohidratos complejos y grasas saludables en cantidades moderadas.</p><p>Para snacks pre-entrenamiento, priorizá carbohidratos de absorción rápida como frutas frescas más una pequeña porción de proteína. Post-entrenamiento, aumentá la proteína a 20-25g y agregá carbohidratos para reponer glucógeno. Si buscás controlar el apetito entre comidas, enfocate en proteínas y fibra: yogur griego con semillas de chía y frutos rojos mantiene la saciedad por 2-3 horas.</p><p>Los errores más comunes incluyen excederse en frutos secos (una porción correcta son 20-30g, no el puñado entero), creer que las barritas comerciales son saludables (muchas tienen más azúcar que un alfajor) y no considerar las calorías líquidas de smoothies o jugos naturales.</p><p>Para calcular tus necesidades, un snack debe representar 10-15% de tu ingesta calórica diaria total: 150-250 kcal para dietas de 1500-2000 kcal/día.</p>"
      },
      {
        "h2": "Ideas de combinaciones por objetivo nutricional",
        "body": "<p><strong>Para ganar masa muscular:</strong> Yogur griego (150g) + granola sin azúcar + mantequilla de maní + banana. Aporta ~350 kcal, 25g proteína, 40g carbohidratos.</p><p><strong>Para pérdida de grasa:</strong> Bastones de apio y zanahoria + hummus (50g) + huevo duro. Total: ~180 kcal, 12g proteína, alta saciedad por volumen y fibra.</p><p><strong>Para energía sostenida:</strong> Tostadas de arroz integral + queso cottage + rodajas de manzana verde + canela. Mezcla perfecta de carbohidratos complejos y proteína de digestión lenta.</p><p><strong>Para deportistas de resistencia:</strong> Dátiles (3 unidades) + almendras (15) + chips de coco. Carbohidratos de rápida disponibilidad con grasas que mantienen la energía.</p><p><strong>Para veganos:</strong> Edamames al vapor + chips de kale + semillas de calabaza + levadura nutricional. Completo en aminoácidos esenciales y micronutrientes.</p><p>La clave está en preparar porciones de antemano: dividí frutos secos en bolsitas de 25g, cortá vegetales el domingo para toda la semana, y tené siempre huevos duros en la heladera.</p>"
      },
      {
        "h2": "Timing y frecuencia ideal de snacks",
        "body": "<p>El momento del snack es tan importante como su composición. Para la mayoría de las personas, 2-3 snacks diarios funcionan mejor: uno a media mañana (10-11h), otro a media tarde (16-17h) y opcionalmente uno nocturno ligero si cenás temprano.</p><p>El intervalo óptimo entre comidas es de 3-4 horas. Si esperás más, llegás a la próxima comida con demasiada hambre y tendés a sobrecompensarte. Si comés cada 2 horas, nunca activás completamente el metabolismo de grasas y mantenés la insulina elevada constantemente.</p><p><strong>Snack pre-entrenamiento (60-90 min antes):</strong> Carbohidratos de fácil digestión + proteína ligera. Ejemplo: banana + mantequilla de almendras.</p><p><strong>Snack post-entrenamiento (dentro de los 30-60 min):</strong> Proteína de rápida absorción + carbohidratos. Ejemplo: shake de proteína + arándanos.</p><p><strong>Snack nocturno (2h antes de dormir):</strong> Proteína de digestión lenta + grasas saludables, sin carbohidratos simples que puedan afectar el sueño. Ejemplo: yogur griego + nueces + canela.</p><p>Para trabajo mental intenso, snacks cada 3-4 horas con énfasis en grasas omega-3 (nueces, semillas de chía) mejoran la concentración sin generar picos de glucemia que causan somnolencia posterior.</p>"
      },
      {
        "h2": "Preparación y almacenamiento para la semana",
        "body": "<p>La clave del éxito con snacks saludables es el <strong>meal prep dominical</strong>. Dedicá 1-2 horas para preparar todo y tendrás opciones listas cuando el hambre apriete, evitando decisiones impulsivas.</p><p><strong>Vegetales:</strong> Lavá, pelá y cortá zanahorias, apio, pimientos y pepinos. Guardá en recipientes herméticos con papel absorbente en el fondo. Duran 5-6 días perfectos.</p><p><strong>Proteínas:</strong> Herví 10-12 huevos de una vez, guardá con cáscara en la heladera (7 días). Porcioná quesos en cubos de 30g envueltos individualmente. Cociná pechuga de pollo y cortá en tiras.</p><p><strong>Frutos secos:</strong> Comprá al por mayor y dividí en bolsitas de 25-30g. Usá un marcador para anotar calorías y macros en cada bolsita. Esto previene el típico error de comerte medio paquete sin darte cuenta.</p><p><strong>Hummus y dips:</strong> Preparalos caseros y porcioná en frascos de 50g. Se conservan 4-5 días en heladera. Agregá un chorrito de aceite de oliva arriba para que no se sequen.</p><p><strong>Sistema de rotación:</strong> Organizá tu heladera con snacks en la primera repisa, bien visibles. Los alimentos a la vista se consumen 70% más que los guardados atrás. Usá esta psicología a tu favor con opciones saludables.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántas calorías debe tener un snack saludable?",
        "a": "Entre 150-250 kcal para la mayoría de las personas, representando 10-15% de tu ingesta diaria total. Ajustá según tu nivel de actividad y objetivos."
      },
      {
        "q": "¿Los frutos secos engordan si como todos los días?",
        "a": "No si respetás las porciones: 20-30g diarios (un puñado pequeño) aportan grasas saludables sin exceso calórico. El problema es comer directo de la bolsa sin medir."
      },
      {
        "q": "¿Es mejor comer frutas solas o combinadas con proteína?",
        "a": "Combinadas con proteína o grasas saludables previene picos de glucemia y aumenta la saciedad. Ejemplo: manzana con mantequilla de maní en lugar de manzana sola."
      },
      {
        "q": "¿Cuánto tiempo antes de entrenar debo comer el snack?",
        "a": "Entre 60-90 minutos antes para snacks sólidos, o 30-45 minutos si es algo muy ligero como una banana. Post-entrenamiento, dentro de los 30-60 minutos para optimizar recuperación."
      }
    ]
  },
  "en": {
    "pageTitle": "Healthy Snack Generator | Genfy",
    "metaDesc": "Generate healthy snack combinations instantly with calorie and macro information. Perfect for planning nutritious, balanced meals between main courses.",
    "h1": "Healthy Snack Generator",
    "intro": "Combine nutritious snacks based on your calorie and macronutrient needs. Plan balanced mini-meals that fit your active lifestyle and health goals.",
    "tag": "Random",
    "filterLabel": "Category",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "base",
        "label": "Base",
        "items": [
          "Mixed nuts (30g)",
          "Plain Greek yogurt (150g)",
          "Green apple slices",
          "Carrot and celery sticks",
          "Brown rice cakes",
          "Steamed edamame (100g)",
          "Hard-boiled egg",
          "Low-fat cottage cheese (100g)",
          "Cucumber slices",
          "Turkey roll-ups",
          "Red bell pepper strips",
          "Cherry tomatoes",
          "Baked kale chips",
          "Sliced cucumber",
          "Chicken breast strips",
          "Baked sweet potato chips",
          "Homemade hummus (50g)",
          "Fresh raspberries (100g)",
          "Fresh blueberries (80g)",
          "Rice crackers",
          "Whole wheat pita",
          "Jicama sticks",
          "Watermelon cubes",
          "Cantaloupe chunks",
          "Sliced kiwi",
          "Strawberries (150g)",
          "Green grapes",
          "Steamed cauliflower",
          "Raw broccoli",
          "Mixed pickled vegetables"
        ]
      },
      {
        "id": "protein",
        "label": "Protein",
        "items": [
          "natural peanut butter (15g)",
          "roasted almonds (20g)",
          "tuna in water",
          "light mozzarella cheese",
          "unsweetened protein powder",
          "Brazil nuts (6 pieces)",
          "unsalted pistachios (25g)",
          "raw cashews",
          "sunflower seeds",
          "pumpkin seeds",
          "almond butter",
          "low-fat cheddar cheese",
          "smoked salmon (30g)",
          "cooked shrimp",
          "cooked egg whites",
          "firm tofu (50g)",
          "marinated tempeh",
          "unsweetened almond milk",
          "low-fat ricotta",
          "plant-based protein shake",
          "sardines in water",
          "smoked turkey breast",
          "lean prosciutto",
          "fortified soy milk",
          "fat-free cream cheese"
        ]
      },
      {
        "id": "topping",
        "label": "Extra",
        "items": [
          "+ chia seeds",
          "+ ground flaxseed",
          "+ cacao nibs",
          "+ cinnamon powder",
          "+ organic honey (5g)",
          "+ unsweetened coconut chips",
          "+ no-sugar granola (20g)",
          "+ sugar-free dried cranberries",
          "+ chopped dates (2 pieces)",
          "+ raisins (15g)",
          "+ turmeric powder",
          "+ grated fresh ginger",
          "+ liquid stevia",
          "+ vanilla extract",
          "+ lemon zest",
          "+ toasted sesame seeds",
          "+ extra virgin olive oil",
          "+ balsamic vinegar",
          "+ Himalayan salt",
          "+ ground black pepper",
          "+ nutritional yeast",
          "+ spirulina powder",
          "+ matcha powder",
          "+ mint extract",
          "+ orange zest"
        ]
      }
    ],
    "separator": " with ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to build balanced snacks by macros",
        "body": "<p>A healthy snack should combine all three macronutrients in proper proportions to maintain satiety and stable energy. The general rule is to include <strong>15-20g of protein</strong>, complex carbohydrates, and moderate amounts of healthy fats.</p><p>For pre-workout snacks, prioritize fast-absorbing carbs like fresh fruit plus a small portion of protein. Post-workout, increase protein to 20-25g and add carbs to replenish glycogen. If you're looking to control appetite between meals, focus on protein and fiber: Greek yogurt with chia seeds and berries keeps you full for 2-3 hours.</p><p>Common mistakes include overdoing nuts (a proper serving is 20-30g, not the whole handful), believing commercial protein bars are healthy (many have more sugar than candy bars), and ignoring liquid calories from smoothies or fresh juices.</p><p>To calculate your needs, a snack should represent 10-15% of your total daily caloric intake: 150-250 kcal for 1500-2000 kcal/day diets.</p>"
      },
      {
        "h2": "Combination ideas by nutritional goal",
        "body": "<p><strong>For muscle gain:</strong> Greek yogurt (150g) + no-sugar granola + peanut butter + banana. Provides ~350 kcal, 25g protein, 40g carbohydrates.</p><p><strong>For fat loss:</strong> Celery and carrot sticks + hummus (50g) + hard-boiled egg. Total: ~180 kcal, 12g protein, high satiety through volume and fiber.</p><p><strong>For sustained energy:</strong> Brown rice cakes + cottage cheese + green apple slices + cinnamon. Perfect blend of complex carbs and slow-digesting protein.</p><p><strong>For endurance athletes:</strong> Dates (3 pieces) + almonds (15) + coconut chips. Quick-availability carbs with fats that sustain energy.</p><p><strong>For vegans:</strong> Steamed edamame + kale chips + pumpkin seeds + nutritional yeast. Complete in essential amino acids and micronutrients.</p><p>The key is prepping portions ahead: divide nuts into 25g baggies, cut vegetables on Sunday for the whole week, and always keep hard-boiled eggs in the fridge.</p>"
      },
      {
        "h2": "Ideal snack timing and frequency",
        "body": "<p>Snack timing is as important as composition. For most people, 2-3 daily snacks work best: one mid-morning (10-11am), another mid-afternoon (4-5pm), and optionally a light evening snack if you eat dinner early.</p><p>The optimal interval between meals is 3-4 hours. If you wait longer, you arrive at the next meal too hungry and tend to overcompensate. If you eat every 2 hours, you never fully activate fat metabolism and keep insulin constantly elevated.</p><p><strong>Pre-workout snack (60-90 min before):</strong> Easy-to-digest carbs + light protein. Example: banana + almond butter.</p><p><strong>Post-workout snack (within 30-60 min):</strong> Fast-absorbing protein + carbohydrates. Example: protein shake + blueberries.</p><p><strong>Evening snack (2h before bed):</strong> Slow-digesting protein + healthy fats, without simple carbs that might affect sleep. Example: Greek yogurt + walnuts + cinnamon.</p><p>For intense mental work, snacks every 3-4 hours emphasizing omega-3 fats (walnuts, chia seeds) improve concentration without creating blood sugar spikes that cause subsequent drowsiness.</p>"
      },
      {
        "h2": "Weekly preparation and storage",
        "body": "<p>The key to success with healthy snacks is <strong>Sunday meal prep</strong>. Dedicate 1-2 hours to prepare everything and you'll have ready options when hunger strikes, avoiding impulsive decisions.</p><p><strong>Vegetables:</strong> Wash, peel, and cut carrots, celery, peppers, and cucumbers. Store in airtight containers with paper towel on the bottom. They last 5-6 days perfectly.</p><p><strong>Proteins:</strong> Boil 10-12 eggs at once, store with shells in the fridge (7 days). Portion cheeses into 30g cubes wrapped individually. Cook chicken breast and cut into strips.</p><p><strong>Nuts:</strong> Buy in bulk and divide into 25-30g bags. Use a marker to note calories and macros on each bag. This prevents the typical mistake of eating half a package without realizing it.</p><p><strong>Hummus and dips:</strong> Make homemade and portion into 50g jars. They keep 4-5 days refrigerated. Add a drizzle of olive oil on top to prevent drying.</p><p><strong>Rotation system:</strong> Organize your fridge with snacks on the first shelf, highly visible. Foods in sight are consumed 70% more than those stored in back. Use this psychology in your favor with healthy options.</p>"
      }
    ],
    "faq": [
      {
        "q": "How many calories should a healthy snack have?",
        "a": "Between 150-250 kcal for most people, representing 10-15% of your total daily intake. Adjust according to your activity level and goals."
      },
      {
        "q": "Do nuts make you gain weight if eaten daily?",
        "a": "Not if you respect portions: 20-30g daily (one small handful) provides healthy fats without caloric excess. The problem is eating straight from the bag without measuring."
      },
      {
        "q": "Is it better to eat fruits alone or combined with protein?",
        "a": "Combined with protein or healthy fats prevents blood sugar spikes and increases satiety. Example: apple with peanut butter instead of apple alone."
      },
      {
        "q": "How long before working out should I eat the snack?",
        "a": "Between 60-90 minutes before for solid snacks, or 30-45 minutes if it's something very light like a banana. Post-workout, within 30-60 minutes to optimize recovery."
      }
    ]
  }
};
