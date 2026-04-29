import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-nombres-de-algoritmo",
    "en": "algorithm-name-generator"
  },
  "category": "tech",
  "emoji": "📊",
  "mode": "combine",
  "es": {
    "pageTitle": "Generador de Nombres de Algoritmo | Genfy",
    "metaDesc": "Creá nombres técnicos para algoritmos, modelos ML y sistemas de predicción con resonancia científica. Para papers, demos, productos y narrativa tech.",
    "h1": "Generador de Nombres de Algoritmo",
    "intro": "Bautizá modelos de machine learning, algoritmos de optimización y sistemas predictivos con nombres que suenan a paper de NeurIPS. Para tech, papers y narrativa.",
    "tag": "Tech",
    "filterLabel": "Slot",
    "countLabel": "Cantidad",
    "generateLabel": "Generar nombres",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefijo / familia",
        "items": [
          "Deep", "Neural", "Hyper", "Meta", "Auto", "Self", "Multi", "Cross",
          "Adaptive", "Sparse", "Dense", "Robust", "Fast", "Quantum", "Causal", "Bayesian",
          "Graph", "Tensor", "Vector", "Latent", "Implicit", "Explicit", "Recurrent", "Convolutional",
          "Transformer", "Attention", "Diffusion", "Generative", "Contrastive", "Probabilistic", "Differentiable", "Variational",
          "Mega", "Nano", "Micro", "Edge", "Federated", "Distributed", "Continual", "Few-Shot"
        ]
      },
      {
        "id": "core",
        "label": "Núcleo del nombre",
        "items": [
          "Net", "GAN", "VAE", "BERT", "GPT", "LSTM", "RNN", "CNN",
          "Forest", "Tree", "Boost", "Stack", "Ensemble", "Mesh", "Cluster", "Beam",
          "Search", "Sort", "Hash", "Index", "Embedding", "Encoder", "Decoder", "Mixer",
          "Solver", "Sampler", "Classifier", "Regressor", "Estimator", "Optimizer", "Scheduler", "Distiller",
          "Oracle", "Sage", "Sentinel", "Lighthouse", "Compass", "Beacon", "Lens", "Prism"
        ]
      },
      {
        "id": "suffix",
        "label": "Sufijo / versión",
        "items": [
          "v1", "v2", "v3", "v4", "v7", "Pro", "XL", "Mini",
          "Lite", "Turbo", "Ultra", "Plus", "Max", "Edge", "Mobile", "Cloud",
          "-1B", "-7B", "-13B", "-70B", "-3.5", "-4o", "-Alpha", "-Beta",
          "Distill", "Distilled", "Quantized", "Pruned", "Compressed", "Tuned", "Fine-Tuned", "Aligned",
          "Open", "Pretrained", "Multilingual", "Sparse", "Mixture", "Hybrid", "Compact", "Foundation"
        ]
      }
    ],
    "separator": "-",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Cómo nombrar un algoritmo de machine learning",
        "body": "<p>Los nombres reales de la literatura ML siguen patrones detectables. ResNet (Residual Network), BERT (Bidirectional Encoder Representations from Transformers), GPT (Generative Pre-trained Transformer), AlphaGo. Notá: muchos son acrónimos que también funcionan como palabras pronunciables. Para tu algoritmo, intentá lo mismo: un acrónimo descriptivo que suene a palabra real.</p><p>La técnica del 'método-foundation-task'. RoBERTa = Robustly Optimized BERT Approach. ELECTRA = Efficiently Learning an Encoder that Classifies Token Replacements Accurately. Cada letra del acrónimo justifica algo del paper. Ejercicio: escribí primero qué hace tu modelo en una frase, luego extraé iniciales que formen palabra.</p><p>Otra escuela usa nombres mitológicos o astronómicos: AlphaGo, AlphaZero, MuZero (DeepMind), Gemini, Claude, GPT-4, Llama. Esta tradición busca evocar inteligencia o universalidad sin describir técnica. Si tu algoritmo es producto comercial más que paper académico, esta ruta vende mejor.</p>"
      },
      {
        "h2": "Para papers académicos vs. productos comerciales",
        "body": "<p>Papers de NeurIPS, ICML, ACL: el nombre debe ser memorable y describir contribución técnica. ResNet llegó porque el método central es residual connection. Transformer llegó por la atención. Si tu paper introduce mecanismo nuevo, el nombre debe codificarlo. <em>Attention Is All You Need</em> es título; el algoritmo es Transformer, palabra que evoca 'transformación de representación'.</p><p>Productos comerciales: el nombre debe ser pronunciable, registrable y memorable. Watson, Cortana, Alexa, Siri, Bard, ChatGPT, Gemini, Copilot. Notá la tendencia a nombres humanos cortos. Para tu producto inventá nombre que pueda ser pronunciado en cualquier idioma sin tropiezo. Watson en inglés y español funciona; un nombre con 'ñ' o caracteres especiales no se exporta bien.</p><p>Modelos open-source: la cultura es más juguetona. LLaMA, Vicuna, Alpaca, Falcon, Mistral. Animales, mitología, juego de palabras. Si tu modelo es derivado de Llama, podés llamarlo Vicuna, Guanaco, Alpaca para señalar lineage. Esta convención visual del nombre crea pertenencia comunitaria.</p>"
      },
      {
        "h2": "Errores comunes al nombrar algoritmos",
        "body": "<p>Error 1: nombre demasiado largo o impronunciable. 'BiLSTM-CRF-Attention-Multi-Task-Network' es nombre de paper técnico que nadie cita. La regla es 1-2 palabras pronunciables o un acrónimo de 3-5 letras. Si tu paper se llama así, en literatura aparecerá abreviado torpemente y la marca se diluye.</p><p>Error 2: colisión con nombres existentes. Antes de fijar tu algoritmo en un paper, googleá. 'OpenAI lanza GPT-X' colisiona con familia OpenAI. 'Bard' chocó con la marca Google. La búsqueda de 30 segundos evita meses de problemas legales y citaciones perdidas.</p><p>Error 3: nombre genérico. 'DeepNet' o 'NeuralNet' es como llamar a tu auto 'Auto'. Necesitás especificidad. <em>Going Deeper with Convolutions</em> dio GoogLeNet/Inception, mejor que 'DeeperConvNet'. Pensá qué metáfora visual o concepto distinguible podés capturar en 5-8 letras.</p>"
      },
      {
        "h2": "Aplicaciones en narrativa de ciencia ficción y thriller tech",
        "body": "<p>En sci-fi cercana, el nombre del algoritmo es elemento de mundo. <em>Person of Interest</em> tiene The Machine y Samaritan. <em>Westworld</em> tiene Rehoboam. <em>Devs</em> tiene Devs (deus). Cada nombre tiene resonancia: bíblica, mítica, religiosa. Tu algoritmo ficticio puede llamarse Tiresias, Cassandra, Oracle, Lighthouse. La elección comunica qué hace antes de explicarlo.</p><p>En thrillers contemporáneos, el algoritmo es villano sutil. <em>The Social Dilemma</em>, <em>Coded Bias</em> nombran 'el algoritmo' genéricamente, lo que produce horror difuso. Para narrativa específica, dale nombre: 'el sistema FACE-IV', 'el modelo Recidivismo-3', 'el ranker SocialScore-7'. La nomenclatura técnica vuelve concreto el peligro.</p><p>Para sátira corporativa, el nombre del algoritmo puede ser absurdo-aspiracional: 'TalentSync v2.0', 'SmileScore Pro', 'EmpathyMetric Enterprise'. <em>Severance</em> y <em>Mr. Robot</em> usan esta técnica. La mezcla de palabras vacías de marketing tech con función deshumanizante específica es subgénero entero.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Conviene basarme en nombres existentes o inventar desde cero?",
        "a": "Inventá pero con familias reconocibles. Si tu modelo es transformer-based, podés llamarlo XYZformer (PerformerX, FastFormer, etc.). El sufijo señala tradición técnica. Inventar desde cero sin guiños deja al lector sin contexto."
      },
      {
        "q": "¿El nombre puede ser un acrónimo forzado?",
        "a": "Es práctica estándar y aceptada en ML. RoBERTa fuerza un poco las iniciales pero funciona porque la palabra resultante es memorable. Si forzar produce 'JSDPRZ' no sirve; si produce 'CALYPSO' o 'NORA' funciona perfecto."
      },
      {
        "q": "¿Diferencia entre nombrar algoritmo, modelo y producto?",
        "a": "Algoritmo es el método matemático (Adam, SGD, k-means). Modelo es la implementación entrenada (BERT-base, GPT-3.5). Producto es la oferta comercial (ChatGPT, Copilot). Mismo trabajo puede tener tres nombres: la familia algorítmica, el modelo específico, el producto vendible."
      },
      {
        "q": "¿Cómo evito que mi algoritmo ficticio en novela suene falso?",
        "a": "Sumá detalles plausibles: tamaño en parámetros (7B, 70B), año de release, paper de referencia ficticio ('en el paper de Liu et al. 2026'), benchmark donde rinde mejor ('superó el SuperGLUE en 0.3'). Esos números específicos venden realismo."
      }
    ]
  },
  "en": {
    "pageTitle": "Algorithm Name Generator | Genfy",
    "metaDesc": "Create technical names for algorithms, ML models and prediction systems with scientific resonance. For papers, demos, products and tech narrative.",
    "h1": "Algorithm Name Generator",
    "intro": "Christen ML models, optimization algorithms and predictive systems with names that sound like NeurIPS papers. For tech, papers and narrative.",
    "tag": "Tech",
    "filterLabel": "Slot",
    "countLabel": "Amount",
    "generateLabel": "Generate names",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "prefix",
        "label": "Prefix / family",
        "items": [
          "Deep", "Neural", "Hyper", "Meta", "Auto", "Self", "Multi", "Cross",
          "Adaptive", "Sparse", "Dense", "Robust", "Fast", "Quantum", "Causal", "Bayesian",
          "Graph", "Tensor", "Vector", "Latent", "Implicit", "Explicit", "Recurrent", "Convolutional",
          "Transformer", "Attention", "Diffusion", "Generative", "Contrastive", "Probabilistic", "Differentiable", "Variational",
          "Mega", "Nano", "Micro", "Edge", "Federated", "Distributed", "Continual", "Few-Shot"
        ]
      },
      {
        "id": "core",
        "label": "Name core",
        "items": [
          "Net", "GAN", "VAE", "BERT", "GPT", "LSTM", "RNN", "CNN",
          "Forest", "Tree", "Boost", "Stack", "Ensemble", "Mesh", "Cluster", "Beam",
          "Search", "Sort", "Hash", "Index", "Embedding", "Encoder", "Decoder", "Mixer",
          "Solver", "Sampler", "Classifier", "Regressor", "Estimator", "Optimizer", "Scheduler", "Distiller",
          "Oracle", "Sage", "Sentinel", "Lighthouse", "Compass", "Beacon", "Lens", "Prism"
        ]
      },
      {
        "id": "suffix",
        "label": "Suffix / version",
        "items": [
          "v1", "v2", "v3", "v4", "v7", "Pro", "XL", "Mini",
          "Lite", "Turbo", "Ultra", "Plus", "Max", "Edge", "Mobile", "Cloud",
          "-1B", "-7B", "-13B", "-70B", "-3.5", "-4o", "-Alpha", "-Beta",
          "Distill", "Distilled", "Quantized", "Pruned", "Compressed", "Tuned", "Fine-Tuned", "Aligned",
          "Open", "Pretrained", "Multilingual", "Sparse", "Mixture", "Hybrid", "Compact", "Foundation"
        ]
      }
    ],
    "separator": "-",
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "How to name a machine learning algorithm",
        "body": "<p>Real ML literature names follow detectable patterns. ResNet (Residual Network), BERT (Bidirectional Encoder Representations from Transformers), GPT (Generative Pre-trained Transformer), AlphaGo. Note: many are acronyms that also work as pronounceable words. For your algorithm, try the same: a descriptive acronym sounding like a real word.</p><p>The 'method-foundation-task' technique. RoBERTa = Robustly Optimized BERT Approach. ELECTRA = Efficiently Learning an Encoder that Classifies Token Replacements Accurately. Each letter of the acronym justifies something from the paper. Exercise: first write what your model does in one sentence, then extract initials forming a word.</p><p>Another school uses mythological or astronomical names: AlphaGo, AlphaZero, MuZero (DeepMind), Gemini, Claude, GPT-4, Llama. This tradition seeks to evoke intelligence or universality without describing technique. If your algorithm is commercial product more than academic paper, this route sells better.</p>"
      },
      {
        "h2": "For academic papers vs. commercial products",
        "body": "<p>NeurIPS, ICML, ACL papers: the name should be memorable and describe technical contribution. ResNet stuck because the central method is residual connection. Transformer stuck because of attention. If your paper introduces a new mechanism, the name should encode it. <em>Attention Is All You Need</em> is title; the algorithm is Transformer, evoking 'representation transformation'.</p><p>Commercial products: the name must be pronounceable, registerable and memorable. Watson, Cortana, Alexa, Siri, Bard, ChatGPT, Gemini, Copilot. Note the trend toward short human names. For your product invent a name pronounceable in any language without stumble. Watson works in English and Spanish; a name with 'ñ' or special characters doesn't export well.</p><p>Open-source models: the culture is more playful. LLaMA, Vicuna, Alpaca, Falcon, Mistral. Animals, mythology, wordplay. If your model is derived from Llama, you can call it Vicuna, Guanaco, Alpaca to signal lineage. This visual naming convention creates community belonging.</p>"
      },
      {
        "h2": "Common mistakes naming algorithms",
        "body": "<p>Mistake 1: too long or unpronounceable name. 'BiLSTM-CRF-Attention-Multi-Task-Network' is technical paper name nobody cites. The rule is 1-2 pronounceable words or a 3-5 letter acronym. If your paper is named that, it will appear awkwardly abbreviated in literature and the brand dilutes.</p><p>Mistake 2: collision with existing names. Before fixing your algorithm in a paper, google it. 'OpenAI launches GPT-X' collides with OpenAI family. 'Bard' clashed with Google's brand. The 30-second search avoids months of legal problems and lost citations.</p><p>Mistake 3: generic name. 'DeepNet' or 'NeuralNet' is like calling your car 'Car'. You need specificity. <em>Going Deeper with Convolutions</em> gave GoogLeNet/Inception, better than 'DeeperConvNet'. Think what visual metaphor or distinguishable concept you can capture in 5-8 letters.</p>"
      },
      {
        "h2": "Applications in sci-fi narrative and tech thriller",
        "body": "<p>In near sci-fi, the algorithm name is world element. <em>Person of Interest</em> has The Machine and Samaritan. <em>Westworld</em> has Rehoboam. <em>Devs</em> has Devs (deus). Each name has resonance: biblical, mythical, religious. Your fictional algorithm can be Tiresias, Cassandra, Oracle, Lighthouse. The choice communicates what it does before explaining.</p><p>In contemporary thrillers, the algorithm is subtle villain. <em>The Social Dilemma</em>, <em>Coded Bias</em> name 'the algorithm' generically, producing diffuse horror. For specific narrative, give it a name: 'the FACE-IV system', 'the Recidivism-3 model', 'the SocialScore-7 ranker'. Technical nomenclature concretizes the danger.</p><p>For corporate satire, the algorithm name can be absurd-aspirational: 'TalentSync v2.0', 'SmileScore Pro', 'EmpathyMetric Enterprise'. <em>Severance</em> and <em>Mr. Robot</em> use this technique. The mix of empty marketing tech words with specific dehumanizing function is its own subgenre.</p>"
      }
    ],
    "faq": [
      {
        "q": "Should I base on existing names or invent from scratch?",
        "a": "Invent but with recognizable families. If your model is transformer-based, you can call it XYZformer (PerformerX, FastFormer, etc.). The suffix signals technical tradition. Inventing from scratch without nods leaves the reader without context."
      },
      {
        "q": "Can the name be a forced acronym?",
        "a": "Standard and accepted ML practice. RoBERTa forces initials a bit but works because the resulting word is memorable. If forcing produces 'JSDPRZ' it's no good; if produces 'CALYPSO' or 'NORA' works perfect."
      },
      {
        "q": "Difference between naming algorithm, model and product?",
        "a": "Algorithm is the mathematical method (Adam, SGD, k-means). Model is the trained implementation (BERT-base, GPT-3.5). Product is the commercial offering (ChatGPT, Copilot). Same work can have three names: algorithmic family, specific model, sellable product."
      },
      {
        "q": "How do I avoid my fictional novel algorithm sounding fake?",
        "a": "Add plausible details: parameter size (7B, 70B), release year, fictional reference paper ('per Liu et al. 2026 paper'), benchmark where it performs best ('beat SuperGLUE by 0.3'). Those specific numbers sell realism."
      }
    ]
  }
};
