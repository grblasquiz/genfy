import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-combinaciones-batido",
    "en": "smoothie-combo-generator"
  },
  "category": "random",
  "emoji": "🥤",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Combinaciones de Batidos | Genfy",
    "metaDesc": "Crea combos de batidos únicos mezclando frutas, líquidos y extras. Descubrí nuevas recetas nutritivas con un click. Ideal para romper la rutina saludable.",
    "h1": "Generador de Combinaciones de Batidos",
    "intro": "Sacudí tu rutina de smoothies. Generamos combos de frutas, líquidos y superalimentos para que pruebes sabores nuevos y nutritivos cada mañana.",
    "tag": "Aleatorio",
    "filterLabel": "Preferencia",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "base",
        "label": "Base frutal",
        "items": [
          "Banana",
          "Frutilla",
          "Arándanos",
          "Mango",
          "Ananá",
          "Durazno",
          "Pera",
          "Manzana verde",
          "Frambuesas",
          "Moras",
          "Kiwi",
          "Papaya",
          "Sandía",
          "Melón",
          "Cerezas",
          "Ciruela",
          "Maracuyá",
          "Guayaba",
          "Higos",
          "Granada",
          "Caqui",
          "Nectarina",
          "Damasco",
          "Uvas verdes",
          "Uvas rojas",
          "Mandarina",
          "Pomelo rosado",
          "Lima",
          "Limón",
          "Naranja",
          "Palta (aguacate)",
          "Coco rallado",
          "Chirimoya",
          "Lichi",
          "Carambola",
          "Pitaya (dragon fruit)",
          "Açaí",
          "Goji berries",
          "Mora blanca"
        ]
      },
      {
        "id": "liquid",
        "label": "Líquido",
        "items": [
          "Leche entera",
          "Leche descremada",
          "Leche de almendras",
          "Leche de avena",
          "Leche de coco",
          "Leche de soja",
          "Leche de arroz",
          "Agua de coco",
          "Agua mineral",
          "Jugo de naranja",
          "Jugo de manzana",
          "Jugo de uva",
          "Té verde frío",
          "Té de hierbas frío",
          "Kéfir",
          "Yogur bebible",
          "Agua con gas",
          "Kombucha",
          "Jugo de arándanos",
          "Leche de anacardos",
          "Leche de avellanas",
          "Infusión de jengibre",
          "Agua de rosas",
          "Leche de macadamia"
        ]
      },
      {
        "id": "extra",
        "label": "Extra nutritivo",
        "items": [
          "Espinaca",
          "Kale",
          "Apio",
          "Pepino",
          "Jengibre fresco",
          "Cúrcuma",
          "Semillas de chía",
          "Semillas de lino",
          "Avena",
          "Proteína en polvo",
          "Manteca de maní",
          "Manteca de almendras",
          "Cacao en polvo",
          "Maca en polvo",
          "Espirulina",
          "Chlorella",
          "Polen de abeja",
          "Miel",
          "Jarabe de arce",
          "Dátiles",
          "Canela",
          "Vainilla",
          "Nuez moscada",
          "Yogur griego",
          "Crema de coco",
          "Tahini",
          "Semillas de girasol",
          "Semillas de calabaza",
          "Coco deshidratado",
          "Aceite de coco",
          "Moringa",
          "Matcha",
          "Bayas goji",
          "Lecitina de soja",
          "Colágeno en polvo",
          "Ashwagandha",
          "Cacao nibs",
          "Açaí en polvo",
          "Lucuma en polvo",
          "Camu camu"
        ]
      }
    ],
    "separator": " + ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Por qué combinar ingredientes en lugar de seguir recetas fijas",
        "body": "<p>Las recetas de smoothies suelen aburrir después de la segunda semana. Tu cuerpo pide variedad de nutrientes, y tu paladar pide novedad. Combinar ingredientes al azar te obliga a probar mezclas que nunca hubieras elegido: banana + pepino + leche de avena suena raro, pero funciona. También evitás desperdiciar frutas maduras porque tenés un sistema para usarlas. Cada combo es un experimento de sabor y textura; algunos serán tus nuevos favoritos, otros te enseñarán qué no mezclar. La clave está en animarse a salir de frutilla-banana-leche.</p>"
      },
      {
        "h2": "Cómo equilibrar sabor y nutrición en un batido",
        "body": "<p>Regla básica: una fruta dulce (banana, mango) + una ácida (frutilla, kiwi) + un líquido neutro + un extra verde o proteico. Las frutas dulces enmascaran el sabor amargo de espinaca o kale; el líquido ajusta consistencia (más líquido = menos espeso). Los extras proteicos (yogur griego, proteína en polvo) te mantienen lleno hasta el almuerzo; las semillas (chía, lino) aportan omega-3 y fibra. Evitá combinar muchos extras en polvo (espirulina + maca + proteína) porque el sabor se vuelve terroso. Si agregás vegetales, no superes el 30% del volumen total o el batido será demasiado verde y amargo.</p>"
      },
      {
        "h2": "Errores comunes al preparar smoothies",
        "body": "<p><strong>Demasiada fruta:</strong> Tres bananas + mango + dátiles = bomba de azúcar. Limitá a 1-2 porciones de fruta. <strong>Poco líquido:</strong> Si la licuadora no gira, necesitás más líquido; agregá de a poco. <strong>No usar fruta congelada:</strong> La fruta congelada da textura cremosa sin necesidad de hielo aguado. <strong>Agregar hielo con frutas blandas:</strong> El hielo diluye sabor; mejor congela las frutas. <strong>Olvidar la grasa saludable:</strong> Un poco de palta, manteca de maní o aceite de coco ayuda a absorber vitaminas liposolubles y da saciedad. <strong>Licuar poco tiempo:</strong> Ingredientes fibrosos (kale, semillas de chía) necesitan 60-90 segundos para integrarse bien.</p>"
      },
      {
        "h2": "Superalimentos que transforman tu batido",
        "body": "<p><strong>Espirulina:</strong> Proteína completa, pero sabor fuerte; empezá con 1/4 cucharadita. <strong>Semillas de chía:</strong> Se expanden con líquido, dan textura gelatinosa y omega-3. <strong>Maca:</strong> Sabor malteado, energizante natural, buena con cacao. <strong>Açaí:</strong> Antioxidantes, sabor a chocolate-frutal, espesa el batido. <strong>Matcha:</strong> Cafeína + L-teanina = energía sostenida sin pico nervioso. <strong>Cúrcuma + pimienta negra:</strong> Antiinflamatorio potente; la pimienta aumenta absorción 2000%. <strong>Cacao en polvo:</strong> Antioxidantes, magnesio, sabor chocolatoso sin azúcar. Combiná máximo 2-3 superalimentos por batido para no saturar sabor ni precio.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cuántas frutas debo usar en un batido?",
        "a": "Entre 1 y 2 tazas de fruta total. Más de eso eleva demasiado el azúcar natural y las calorías, aunque sean saludables."
      },
      {
        "q": "¿Puedo preparar batidos la noche anterior?",
        "a": "Sí, en frasco hermético en la heladera aguantan 24hs. Agitá antes de tomar porque se separan. No recomendado con banana (oxida rápido)."
      },
      {
        "q": "¿Qué hago si mi batido queda muy espeso?",
        "a": "Agregá líquido de a 2 cucharadas hasta alcanzar la consistencia deseada. Empezá siempre con menos líquido; es más fácil diluir que espesar."
      },
      {
        "q": "¿Los smoothies sirven para reemplazar comidas?",
        "a": "Pueden reemplazar desayuno o snack si incluís proteína, grasas saludables y fibra. Un batido solo de frutas no te mantiene lleno."
      }
    ]
  },
  "en": {
    "pageTitle": "Smoothie Combo Generator | Genfy",
    "metaDesc": "Create unique smoothie combos by mixing fruits, liquids, and extras. Discover new nutritious recipes with one click. Perfect for breaking healthy routines.",
    "h1": "Smoothie Combo Generator",
    "intro": "Shake up your smoothie routine. We generate combos of fruits, liquids, and superfoods so you can try new, nutritious flavors every morning.",
    "tag": "Random",
    "filterLabel": "Preference",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "base",
        "label": "Fruit base",
        "items": [
          "Banana",
          "Strawberry",
          "Blueberries",
          "Mango",
          "Pineapple",
          "Peach",
          "Pear",
          "Green apple",
          "Raspberries",
          "Blackberries",
          "Kiwi",
          "Papaya",
          "Watermelon",
          "Cantaloupe",
          "Cherries",
          "Plum",
          "Passion fruit",
          "Guava",
          "Figs",
          "Pomegranate",
          "Persimmon",
          "Nectarine",
          "Apricot",
          "Green grapes",
          "Red grapes",
          "Tangerine",
          "Pink grapefruit",
          "Lime",
          "Lemon",
          "Orange",
          "Avocado",
          "Shredded coconut",
          "Cherimoya",
          "Lychee",
          "Starfruit",
          "Dragon fruit",
          "Açaí",
          "Goji berries",
          "White mulberries"
        ]
      },
      {
        "id": "liquid",
        "label": "Liquid",
        "items": [
          "Whole milk",
          "Skim milk",
          "Almond milk",
          "Oat milk",
          "Coconut milk",
          "Soy milk",
          "Rice milk",
          "Coconut water",
          "Water",
          "Orange juice",
          "Apple juice",
          "Grape juice",
          "Cold green tea",
          "Cold herbal tea",
          "Kefir",
          "Drinkable yogurt",
          "Sparkling water",
          "Kombucha",
          "Cranberry juice",
          "Cashew milk",
          "Hazelnut milk",
          "Ginger infusion",
          "Rose water",
          "Macadamia milk"
        ]
      },
      {
        "id": "extra",
        "label": "Nutritious extra",
        "items": [
          "Spinach",
          "Kale",
          "Celery",
          "Cucumber",
          "Fresh ginger",
          "Turmeric",
          "Chia seeds",
          "Flax seeds",
          "Oats",
          "Protein powder",
          "Peanut butter",
          "Almond butter",
          "Cocoa powder",
          "Maca powder",
          "Spirulina",
          "Chlorella",
          "Bee pollen",
          "Honey",
          "Maple syrup",
          "Dates",
          "Cinnamon",
          "Vanilla",
          "Nutmeg",
          "Greek yogurt",
          "Coconut cream",
          "Tahini",
          "Sunflower seeds",
          "Pumpkin seeds",
          "Shredded coconut",
          "Coconut oil",
          "Moringa",
          "Matcha",
          "Goji berries",
          "Soy lecithin",
          "Collagen powder",
          "Ashwagandha",
          "Cacao nibs",
          "Açaí powder",
          "Lucuma powder",
          "Camu camu"
        ]
      }
    ],
    "separator": " + ",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why combine ingredients instead of following fixed recipes",
        "body": "<p>Smoothie recipes get boring after the second week. Your body needs nutrient variety, and your palate craves novelty. Random ingredient combinations force you to try blends you'd never choose: banana + cucumber + oat milk sounds weird, but it works. It also prevents wasting ripe fruit because you have a system to use it. Each combo is an experiment in flavor and texture; some will become new favorites, others will teach you what not to mix. The key is daring to step away from strawberry-banana-milk.</p>"
      },
      {
        "h2": "How to balance flavor and nutrition in a smoothie",
        "body": "<p>Basic rule: one sweet fruit (banana, mango) + one acidic (strawberry, kiwi) + a neutral liquid + a green or protein extra. Sweet fruits mask the bitter taste of spinach or kale; liquid adjusts consistency (more liquid = less thick). Protein extras (Greek yogurt, protein powder) keep you full until lunch; seeds (chia, flax) provide omega-3 and fiber. Avoid combining many powder extras (spirulina + maca + protein) because the flavor becomes earthy. If adding vegetables, don't exceed 30% of total volume or the smoothie will be too green and bitter.</p>"
      },
      {
        "h2": "Common mistakes when making smoothies",
        "body": "<p><strong>Too much fruit:</strong> Three bananas + mango + dates = sugar bomb. Limit to 1-2 fruit servings. <strong>Not enough liquid:</strong> If the blender won't turn, you need more liquid; add gradually. <strong>Not using frozen fruit:</strong> Frozen fruit gives creamy texture without watery ice. <strong>Adding ice with soft fruits:</strong> Ice dilutes flavor; better to freeze the fruits. <strong>Forgetting healthy fat:</strong> A bit of avocado, peanut butter, or coconut oil helps absorb fat-soluble vitamins and provides satiety. <strong>Not blending long enough:</strong> Fibrous ingredients (kale, chia seeds) need 60-90 seconds to integrate well.</p>"
      },
      {
        "h2": "Superfoods that transform your smoothie",
        "body": "<p><strong>Spirulina:</strong> Complete protein, but strong flavor; start with 1/4 teaspoon. <strong>Chia seeds:</strong> Expand with liquid, give gel-like texture and omega-3. <strong>Maca:</strong> Malty flavor, natural energizer, good with cocoa. <strong>Açaí:</strong> Antioxidants, chocolate-fruity flavor, thickens smoothie. <strong>Matcha:</strong> Caffeine + L-theanine = sustained energy without nervous spike. <strong>Turmeric + black pepper:</strong> Powerful anti-inflammatory; pepper increases absorption 2000%. <strong>Cocoa powder:</strong> Antioxidants, magnesium, chocolatey flavor without sugar. Combine maximum 2-3 superfoods per smoothie to avoid saturating flavor or budget.</p>"
      }
    ],
    "faq": [
      {
        "q": "How much fruit should I use in a smoothie?",
        "a": "Between 1 and 2 cups of total fruit. More than that raises natural sugar and calories too much, even if healthy."
      },
      {
        "q": "Can I prepare smoothies the night before?",
        "a": "Yes, in an airtight jar in the fridge they last 24hrs. Shake before drinking because they separate. Not recommended with banana (oxidizes quickly)."
      },
      {
        "q": "What if my smoothie is too thick?",
        "a": "Add liquid 2 tablespoons at a time until you reach desired consistency. Always start with less liquid; it's easier to dilute than thicken."
      },
      {
        "q": "Can smoothies replace meals?",
        "a": "They can replace breakfast or snacks if you include protein, healthy fats, and fiber. A fruit-only smoothie won't keep you full."
      }
    ]
  }
};
