import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-ingredientes-nevera",
    "en": "fridge-ingredient-generator"
  },
  "category": "random",
  "emoji": "🧊",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Ingredientes de Nevera | Genfy",
    "metaDesc": "Descubrí qué cocinar con lo que tenés en tu nevera. Generador aleatorio de ingredientes para inspirarte en la cocina y reducir el desperdicio alimentario.",
    "h1": "Generador de Ingredientes de Nevera",
    "intro": "¿Abrís la heladera y no sabés qué preparar? Este generador te sugiere combinaciones de ingredientes comunes para inspirarte en tus próximas comidas.",
    "tag": "Aleatorio",
    "filterLabel": "Tipo de ingrediente",
    "countLabel": "Cantidad",
    "generateLabel": "Generar ingredientes",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "proteinas",
        "label": "Proteínas",
        "items": [
          "Pollo",
          "Carne molida",
          "Huevos",
          "Atún enlatado",
          "Salmón",
          "Tofu",
          "Lentejas",
          "Garbanzos",
          "Queso fresco",
          "Jamón cocido",
          "Salchichas",
          "Pechuga de pavo",
          "Camarones",
          "Carne de cerdo",
          "Bacalao",
          "Sardinas",
          "Frijoles negros",
          "Tempeh",
          "Chorizo",
          "Costillas",
          "Pechuga de pato",
          "Anchoas",
          "Queso mozzarella",
          "Yogur griego",
          "Cottage cheese",
          "Lomo de res",
          "Almejas",
          "Mejillones",
          "Panceta",
          "Mortadela"
        ]
      },
      {
        "id": "vegetales",
        "label": "Vegetales",
        "items": [
          "Tomates",
          "Cebolla",
          "Ajo",
          "Zanahoria",
          "Papa",
          "Brócoli",
          "Espinaca",
          "Calabacín",
          "Pimiento rojo",
          "Champiñones",
          "Lechuga",
          "Pepino",
          "Berenjena",
          "Coliflor",
          "Rúcula",
          "Acelga",
          "Apio",
          "Puerro",
          "Batata",
          "Remolacha",
          "Zapallo",
          "Calabaza",
          "Espárragos",
          "Ejotes",
          "Maíz",
          "Kale",
          "Jengibre",
          "Repollo",
          "Alcachofa",
          "Rabanitos",
          "Chayote",
          "Nabo",
          "Col de Bruselas",
          "Pak choi",
          "Berros"
        ]
      },
      {
        "id": "carbohidratos",
        "label": "Carbohidratos",
        "items": [
          "Arroz blanco",
          "Pasta",
          "Pan",
          "Arroz integral",
          "Quinoa",
          "Fideos de huevo",
          "Cuscús",
          "Avena",
          "Polenta",
          "Tortillas de maíz",
          "Pan pita",
          "Fideos de arroz",
          "Bulgur",
          "Pan rallado",
          "Galletas saladas",
          "Harina",
          "Fideos soba",
          "Arroz salvaje",
          "Pan integral",
          "Bagels",
          "Ñoquis",
          "Pasta de trigo sarraceno",
          "Croissants",
          "Fideos ramen",
          "Muffins ingleses"
        ]
      },
      {
        "id": "condimentos",
        "label": "Condimentos y sabor",
        "items": [
          "Aceite de oliva",
          "Sal",
          "Pimienta negra",
          "Limón",
          "Vinagre",
          "Salsa de soja",
          "Manteca",
          "Mayonesa",
          "Mostaza",
          "Ketchup",
          "Ajo en polvo",
          "Orégano",
          "Comino",
          "Paprika",
          "Albahaca",
          "Perejil",
          "Cilantro",
          "Curry en polvo",
          "Tomillo",
          "Romero",
          "Salsa picante",
          "Miel",
          "Vinagre balsámico",
          "Aceite de sésamo",
          "Caldo de pollo",
          "Caldo de vegetales",
          "Salsa inglesa",
          "Sriracha",
          "Pimentón ahumado",
          "Cúrcuma"
        ]
      },
      {
        "id": "lacteos",
        "label": "Lácteos",
        "items": [
          "Leche",
          "Queso rallado",
          "Crema de leche",
          "Manteca",
          "Yogur natural",
          "Queso cheddar",
          "Queso parmesano",
          "Queso crema",
          "Ricota",
          "Queso azul",
          "Crema agria",
          "Leche condensada",
          "Queso feta",
          "Leche evaporada",
          "Queso gouda",
          "Queso suizo",
          "Mascarpone",
          "Queso provolone",
          "Queso brie",
          "Nata montada"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo usar el generador para reducir desperdicio",
        "body": "<p>El desperdicio alimentario es un problema global: tiramos casi el 30% de los alimentos que compramos. Este generador te ayuda a visualizar combinaciones posibles con ingredientes típicos de nevera. <strong>La técnica del inventario</strong> funciona así: anotás los 5-8 ingredientes que tenés a punto de vencer, generás combinaciones aquí, y buscás recetas que coincidan con al menos 3 de ellos.</p><p>Por ejemplo, si te salen pollo + limón + ajo + papas + romero, tenés un clásico pollo al horno mediterráneo. Con tofu + jengibre + salsa de soja + brócoli + fideos de arroz, preparás un salteado asiático en 15 minutos. <strong>Errores comunes:</strong> intentar usar TODOS los ingredientes en un solo plato (innecesario), o generar sin considerar categorías básicas (siempre necesitás proteína + vegetal + carbohidrato como base).</p>"
      },
      {
        "h2": "Combinaciones clásicas que siempre funcionan",
        "body": "<p>Algunas duplas de ingredientes son infalibles en cualquier cocina:</p><ul><li><strong>Tomate + albahaca + mozzarella:</strong> la trinidad italiana que va desde ensaladas hasta pizzas</li><li><strong>Huevo + papa + cebolla:</strong> tortilla española, hash browns, o papas a la española</li><li><strong>Limón + ajo + aceite de oliva:</strong> base para marinadas, vinagretas y salsas mediterráneas</li><li><strong>Jengibre + salsa de soja + aceite de sésamo:</strong> el trío asiático para salteados express</li><li><strong>Carne molida + tomate + cebolla:</strong> la base de boloñesa, chili, picadillo y más</li></ul><p>Cuando el generador te da ingredientes que no parecen compatibles, buscá el <strong>puente común:</strong> un condimento o técnica de cocción que los una. Calabacín + atún no suenan obvios, pero ambos van perfectos en una pasta con limón y ajo.</p>"
      },
      {
        "h2": "Técnicas para improvisar sin receta",
        "body": "<p>Saber improvisar en la cocina es cuestión de entender estructuras básicas. <strong>La fórmula del bowl:</strong> proteína + grano + vegetales crudos + vegetales cocidos + salsa + topping crujiente. Aplicala con cualquier combinación del generador: arroz + pollo + pepino + zanahoria salteada + salsa de yogur + almendras.</p><p><strong>La técnica del sofrito universal:</strong> calentás aceite, rehogás aromáticos (cebolla/ajo/jengibre según cultura culinaria), agregás proteína, luego vegetales duros, después blandos, terminás con líquido (caldo/salsa) y dejás reducir. Funciona igual para un salteado chino, un guiso español o un curry indio.</p><p>Si tenés ingredientes dispares, la <strong>sopa o guiso</strong> es tu aliado: casi todo lo que se cocina junto en líquido termina teniendo sentido. Las tortillas, omelettes y frittatas también son formatos salvadores que aceptan combinaciones experimentales.</p>"
      },
      {
        "h2": "Cómo almacenar para maximizar opciones",
        "body": "<p>La organización de tu nevera determina qué tan creativamente podés cocinar. <strong>Sistema de zonas:</strong> vegetales de hoja en cajón con papel absorbente (duran el doble), proteínas en la zona más fría, lácteos en puertas superiores, condimentos abajo. Esto no solo preserva mejor, sino que cuando abrís la heladera ves TODO de un vistazo.</p><p><strong>Batch cooking de bases:</strong> dedicá 1 hora el domingo a cocinar arroz, quinoa, caldo casero y vegetales asados. Tenerlos listos multiplica tus opciones por 5. Un lunes generás 'pollo + espinaca + quinoa + limón' y en 10 minutos tenés cena, porque la quinoa ya está hecha.</p><p>Congelá en porciones individuales: caldos en cubeteras, hierbas frescas picadas con aceite, panes en rebanadas. <strong>Etiquetá con fecha</strong> usando cinta de papel. La regla de oro: lo que ves es lo que usás. Si está escondido atrás, no existe.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo sé si los ingredientes generados combinan bien?",
        "a": "Buscá al menos una proteína, un vegetal y un carbohidrato en tu combinación. Si comparten una cultura culinaria (ej: jengibre + soja son asiáticos) o una técnica común (todo se puede asar), funcionarán juntos."
      },
      {
        "q": "¿Puedo usar este generador para planificar compras?",
        "a": "Sí, generá varias combinaciones y anotá ingredientes que aparecen repetidamente. Esos son tus básicos de despensa que te darán más versatilidad en la cocina."
      },
      {
        "q": "¿Qué hago si me sale un ingrediente que no tengo?",
        "a": "Generá de nuevo o sustituí por algo de la misma categoría: cualquier proteína puede reemplazar otra proteína, vegetales verdes entre sí, etc. La estructura importa más que ingredientes específicos."
      },
      {
        "q": "¿Cuántos ingredientes necesito para hacer una comida completa?",
        "a": "Con 5-7 ingredientes (incluyendo condimentos básicos) ya tenés una comida completa. Más que eso puede complicar innecesariamente; menos puede resultar monótono."
      }
    ]
  },
  "en": {
    "pageTitle": "Fridge Ingredient Generator | Genfy",
    "metaDesc": "Discover what to cook with what you have in your fridge. Random ingredient generator to inspire your cooking and reduce food waste effectively.",
    "h1": "Fridge Ingredient Generator",
    "intro": "Open your fridge and don't know what to make? This generator suggests common ingredient combinations to inspire your next meals.",
    "tag": "Random",
    "filterLabel": "Ingredient type",
    "countLabel": "Amount",
    "generateLabel": "Generate ingredients",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "proteins",
        "label": "Proteins",
        "items": [
          "Chicken breast",
          "Ground beef",
          "Eggs",
          "Canned tuna",
          "Salmon",
          "Tofu",
          "Lentils",
          "Chickpeas",
          "Fresh cheese",
          "Ham",
          "Sausages",
          "Turkey breast",
          "Shrimp",
          "Pork chops",
          "Cod",
          "Sardines",
          "Black beans",
          "Tempeh",
          "Chorizo",
          "Ribs",
          "Duck breast",
          "Anchovies",
          "Mozzarella",
          "Greek yogurt",
          "Cottage cheese",
          "Beef tenderloin",
          "Clams",
          "Mussels",
          "Bacon",
          "Bologna"
        ]
      },
      {
        "id": "vegetables",
        "label": "Vegetables",
        "items": [
          "Tomatoes",
          "Onion",
          "Garlic",
          "Carrots",
          "Potatoes",
          "Broccoli",
          "Spinach",
          "Zucchini",
          "Red bell pepper",
          "Mushrooms",
          "Lettuce",
          "Cucumber",
          "Eggplant",
          "Cauliflower",
          "Arugula",
          "Swiss chard",
          "Celery",
          "Leeks",
          "Sweet potato",
          "Beets",
          "Butternut squash",
          "Pumpkin",
          "Asparagus",
          "Green beans",
          "Corn",
          "Kale",
          "Ginger",
          "Cabbage",
          "Artichoke",
          "Radishes",
          "Chayote",
          "Turnips",
          "Brussels sprouts",
          "Bok choy",
          "Watercress"
        ]
      },
      {
        "id": "carbs",
        "label": "Carbohydrates",
        "items": [
          "White rice",
          "Pasta",
          "Bread",
          "Brown rice",
          "Quinoa",
          "Egg noodles",
          "Couscous",
          "Oats",
          "Polenta",
          "Corn tortillas",
          "Pita bread",
          "Rice noodles",
          "Bulgur",
          "Breadcrumbs",
          "Crackers",
          "Flour",
          "Soba noodles",
          "Wild rice",
          "Whole wheat bread",
          "Bagels",
          "Gnocchi",
          "Buckwheat pasta",
          "Croissants",
          "Ramen noodles",
          "English muffins"
        ]
      },
      {
        "id": "seasonings",
        "label": "Seasonings & flavor",
        "items": [
          "Olive oil",
          "Salt",
          "Black pepper",
          "Lemon",
          "Vinegar",
          "Soy sauce",
          "Butter",
          "Mayonnaise",
          "Mustard",
          "Ketchup",
          "Garlic powder",
          "Oregano",
          "Cumin",
          "Paprika",
          "Basil",
          "Parsley",
          "Cilantro",
          "Curry powder",
          "Thyme",
          "Rosemary",
          "Hot sauce",
          "Honey",
          "Balsamic vinegar",
          "Sesame oil",
          "Chicken broth",
          "Vegetable broth",
          "Worcestershire sauce",
          "Sriracha",
          "Smoked paprika",
          "Turmeric"
        ]
      },
      {
        "id": "dairy",
        "label": "Dairy",
        "items": [
          "Milk",
          "Shredded cheese",
          "Heavy cream",
          "Butter",
          "Plain yogurt",
          "Cheddar cheese",
          "Parmesan cheese",
          "Cream cheese",
          "Ricotta",
          "Blue cheese",
          "Sour cream",
          "Condensed milk",
          "Feta cheese",
          "Evaporated milk",
          "Gouda cheese",
          "Swiss cheese",
          "Mascarpone",
          "Provolone",
          "Brie cheese",
          "Whipped cream"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to use the generator to reduce waste",
        "body": "<p>Food waste is a global problem: we throw away almost 30% of the groceries we buy. This generator helps you visualize possible combinations with typical fridge ingredients. <strong>The inventory technique</strong> works like this: write down the 5-8 ingredients you have about to expire, generate combinations here, and search for recipes that match at least 3 of them.</p><p>For example, if you get chicken + lemon + garlic + potatoes + rosemary, you have a classic Mediterranean roasted chicken. With tofu + ginger + soy sauce + broccoli + rice noodles, you make an Asian stir-fry in 15 minutes. <strong>Common mistakes:</strong> trying to use ALL ingredients in one dish (unnecessary), or generating without considering basic categories (you always need protein + vegetable + carbohydrate as a base).</p>"
      },
      {
        "h2": "Classic combinations that always work",
        "body": "<p>Some ingredient pairings are foolproof in any kitchen:</p><ul><li><strong>Tomato + basil + mozzarella:</strong> the Italian trinity that goes from salads to pizzas</li><li><strong>Egg + potato + onion:</strong> Spanish tortilla, hash browns, or home fries</li><li><strong>Lemon + garlic + olive oil:</strong> base for marinades, vinaigrettes, and Mediterranean sauces</li><li><strong>Ginger + soy sauce + sesame oil:</strong> the Asian trio for express stir-fries</li><li><strong>Ground beef + tomato + onion:</strong> the base for bolognese, chili, picadillo and more</li></ul><p>When the generator gives you ingredients that don't seem compatible, look for the <strong>common bridge:</strong> a seasoning or cooking technique that unites them. Zucchini + tuna don't sound obvious, but both work perfectly in pasta with lemon and garlic.</p>"
      },
      {
        "h2": "Techniques to improvise without a recipe",
        "body": "<p>Knowing how to improvise in the kitchen is about understanding basic structures. <strong>The bowl formula:</strong> protein + grain + raw vegetables + cooked vegetables + sauce + crunchy topping. Apply it with any generator combination: rice + chicken + cucumber + sautéed carrots + yogurt sauce + almonds.</p><p><strong>The universal sofrito technique:</strong> heat oil, sauté aromatics (onion/garlic/ginger depending on culinary culture), add protein, then hard vegetables, then soft ones, finish with liquid (broth/sauce) and let reduce. Works equally for Chinese stir-fry, Spanish stew, or Indian curry.</p><p>If you have disparate ingredients, <strong>soup or stew</strong> is your ally: almost everything cooked together in liquid ends up making sense. Tortillas, omelets, and frittatas are also lifesaver formats that accept experimental combinations.</p>"
      },
      {
        "h2": "How to store to maximize options",
        "body": "<p>Your fridge organization determines how creatively you can cook. <strong>Zone system:</strong> leafy vegetables in drawer with paper towel (last twice as long), proteins in coldest zone, dairy on upper doors, condiments below. This not only preserves better, but when you open the fridge you see EVERYTHING at a glance.</p><p><strong>Batch cooking basics:</strong> dedicate 1 hour on Sunday to cooking rice, quinoa, homemade broth, and roasted vegetables. Having them ready multiplies your options by 5. On Monday you generate 'chicken + spinach + quinoa + lemon' and in 10 minutes you have dinner, because the quinoa is already made.</p><p>Freeze in individual portions: broths in ice cube trays, fresh herbs chopped with oil, bread in slices. <strong>Label with date</strong> using masking tape. The golden rule: what you see is what you use. If it's hidden in the back, it doesn't exist.</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I know if the generated ingredients combine well?",
        "a": "Look for at least one protein, one vegetable, and one carbohydrate in your combination. If they share a culinary culture (e.g., ginger + soy are Asian) or a common technique (everything can be roasted), they'll work together."
      },
      {
        "q": "Can I use this generator to plan shopping?",
        "a": "Yes, generate several combinations and note ingredients that appear repeatedly. Those are your pantry basics that will give you more versatility in the kitchen."
      },
      {
        "q": "What do I do if I get an ingredient I don't have?",
        "a": "Generate again or substitute with something from the same category: any protein can replace another protein, green vegetables among themselves, etc. Structure matters more than specific ingredients."
      },
      {
        "q": "How many ingredients do I need to make a complete meal?",
        "a": "With 5-7 ingredients (including basic seasonings) you already have a complete meal. More than that can unnecessarily complicate; less can be monotonous."
      }
    ]
  }
};
