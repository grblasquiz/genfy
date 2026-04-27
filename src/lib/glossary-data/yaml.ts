import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "yaml",
    "en": "yaml"
  },
  "emoji": "📜",
  "category": "tech",
  "es": {
    "pageTitle": "YAML — Glosario | Genfy",
    "metaDesc": "YAML es el formato de serialización legible para humanos basado en indentación. Aprende su sintaxis, ventajas sobre JSON y por qué es el estándar en CI/CD y Kubernetes.",
    "h1": "YAML",
    "short": "YAML (YAML Ain't Markup Language) es un formato de serialización de datos diseñado para ser amigable con humanos. Se basa en indentación significativa y es el estándar en archivos de configuración para Docker, Kubernetes, GitHub Actions y Ansible.",
    "body": [
      {
        "title": "¿Qué es YAML?",
        "html": "<p><strong>YAML</strong> nació en 2001 como alternativa a XML y JSON para archivos de configuración. Su filosofía: maximizar legibilidad humana sin sacrificar expresividad. Un archivo YAML típico parece pseudocódigo más que un formato de datos.</p><p>Características clave:</p><ul><li><strong>Indentación significativa:</strong> espacios (nunca tabs) definen la jerarquía. Dos espacios es convención, algunos usan cuatro.</li><li><strong>Sin llaves ni corchetes:</strong> a diferencia de JSON, la estructura se infiere de la indentación.</li><li><strong>Comentarios nativos:</strong> <code># comentario</code>, algo que JSON no soporta.</li><li><strong>Tipos de datos ricos:</strong> strings, números, booleanos, null, arrays, objetos, timestamps, incluso referencias internas (<code>&amp;ancla</code>, <code>*alias</code>).</li></ul><p>Ejemplo básico:</p><p><code>app:\\n  name: Genfy\\n  port: 3000\\n  features:\\n    - auth\\n    - api\\n    - cms</code></p><p>Equivalente JSON: <code>{\"app\": {\"name\": \"Genfy\", \"port\": 3000, \"features\": [\"auth\", \"api\", \"cms\"]}}</code>.</p><p>YAML es superset de JSON: todo JSON válido es YAML válido, pero no al revés. Esto permite migrar gradualmente de JSON a YAML.</p>"
      },
      {
        "title": "Sintaxis y estructuras de YAML",
        "html": "<p><strong>Escalares:</strong> valores simples. Strings no necesitan comillas salvo que contengan caracteres especiales (<code>:</code>, <code>#</code>, <code>@</code>). Multilinea con <code>|</code> (preserva saltos) o <code>&gt;</code> (pliega en una línea).</p><p><code>descripcion: |\\n  Primera línea.\\n  Segunda línea.\\nresumen: &gt;\\n  Esto se pliega\\n  en una sola línea.</code></p><p><strong>Listas:</strong> <code>- item</code> o notación JSON <code>[item1, item2]</code>. Pueden anidarse:</p><p><code>frameworks:\\n  - name: React\\n    type: frontend\\n  - name: Node\\n    type: backend</code></p><p><strong>Diccionarios:</strong> pares clave-valor. Claves con espacios requieren comillas: <code>\"Mi Clave\": valor</code>.</p><p><strong>Anclas y alias:</strong> evitan repetición. <code>&amp;default</code> define un ancla, <code>*default</code> la referencia:</p><p><code>defaults: &amp;defaults\\n  timeout: 30\\n  retries: 3\\napi:\\n  &lt;&lt;: *defaults\\n  endpoint: /v1</code></p><p><strong>Tipos explícitos:</strong> <code>!!str</code>, <code>!!int</code>, <code>!!bool</code>. Útil cuando el parser infiere mal: <code>version: !!str 1.0</code> (sin eso, parsea como float).</p><p>Parsers populares: PyYAML (Python), js-yaml (JavaScript), go-yaml (Go). Todos soportan YAML 1.2, la especificación actual.</p>"
      },
      {
        "title": "Cuándo usar YAML",
        "html": "<p><strong>CI/CD:</strong> GitHub Actions, GitLab CI, CircleCI, Travis CI usan YAML para definir pipelines. Legibilidad crítica cuando el equipo edita workflows frecuentemente.</p><p><code>name: Deploy\\non: [push]\\njobs:\\n  build:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v3\\n      - run: npm install</code></p><p><strong>Infraestructura como código:</strong> Kubernetes manifests, Docker Compose, Ansible playbooks, Terraform (HCL es similar). YAML describe estado deseado del sistema.</p><p><strong>Configuración de aplicaciones:</strong> frameworks como Symfony, Rails y Spring Boot usan YAML para config (<code>config.yml</code>). Más expresivo que <code>.env</code>, menos verboso que JSON.</p><p><strong>No usar para:</strong></p><ul><li><strong>APIs:</strong> JSON es estándar y más eficiente para parseo automático.</li><li><strong>Datos grandes:</strong> YAML es lento para gigabytes de datos. Preferí JSON, CSV o formatos binarios (Parquet, Avro).</li><li><strong>Cuando indentación es riesgosa:</strong> un espacio de más/menos rompe todo el archivo. En equipos sin linter, JSON con llaves explícitas es más seguro.</li></ul>"
      },
      {
        "title": "YAML vs JSON: cuándo elegir cada uno",
        "html": "<p><strong>Usa YAML si:</strong></p><ul><li>Humanos editan el archivo frecuentemente (configs, CI/CD).</li><li>Necesitás comentarios (JSON no los tiene).</li><li>Querés reducir ruido visual (sin llaves/corchetes).</li><li>El archivo tiene estructura compleja con anclas/alias para DRY.</li></ul><p><strong>Usa JSON si:</strong></p><ul><li>Es para APIs o intercambio de datos entre sistemas.</li><li>Performance de parseo importa (JSON es 3-10x más rápido).</li><li>El equipo no está familiarizado con indentación estricta.</li><li>Necesitás validación con JSON Schema (más maduro que YAML Schema).</li></ul><p><strong>Errores comunes de YAML:</strong></p><ul><li><strong>Tabs:</strong> YAML rechaza tabs. Configurá tu editor para convertir tabs en espacios.</li><li><strong>Strings que parecen booleanos:</strong> <code>country: NO</code> parsea como <code>false</code> (NO es booleano noruego legacy). Usá comillas: <code>country: \"NO\"</code>.</li><li><strong>Indentación inconsistente:</strong> mezclando 2 y 4 espacios. Usá un linter (yamllint) en pre-commit.</li></ul><p>Herramientas: <code>yq</code> (como <code>jq</code> pero para YAML), VS Code con extensión YAML (autocompletado + validación), Genfy ofrece conversores YAML ↔ JSON online.</p>"
      }
    ],
    "examples": [
      "# Configuración de app\\napp:\\n  name: MiApp\\n  version: 1.0.0\\n  features:\\n    - auth\\n    - payments",
      "# Docker Compose\\nservices:\\n  web:\\n    image: nginx\\n    ports:\\n      - \"80:80\"",
      "# GitHub Action\\nname: CI\\non: [push]\\njobs:\\n  test:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - run: npm test",
      "# Anclas y alias\\ndefaults: &base\\n  timeout: 30\\napi:\\n  <<: *base\\n  url: /v1",
      "# Multilinea\\ndescripcion: |\\n  Primera línea\\n  Segunda línea"
    ],
    "related": [
      "yaml-a-json",
      "json-a-yaml"
    ],
    "faq": [
      {
        "q": "¿YAML soporta comentarios?",
        "a": "Sí. Los comentarios empiezan con # y van hasta el final de la línea. Esto es ventaja clave sobre JSON, que no soporta comentarios nativamente (solo workarounds como claves especiales)."
      },
      {
        "q": "¿Puedo usar tabs en YAML?",
        "a": "No. YAML rechaza tabs explícitamente. Solo espacios. La razón: tabs tienen ancho ambiguo (2, 4, 8 espacios según el editor), lo que rompe la indentación significativa. Configurá tu editor para convertir tabs en espacios."
      },
      {
        "q": "¿YAML es más lento que JSON?",
        "a": "Sí. Parsear YAML es 3-10x más lento que JSON porque tiene sintaxis más compleja (anclas, multilinea, tipos implícitos). Para archivos de configuración pequeños no importa; para APIs con miles de requests/segundo, JSON es preferible."
      }
    ]
  },
  "en": {
    "pageTitle": "YAML — Glossary | Genfy",
    "metaDesc": "YAML is the human-readable serialization format based on indentation. Learn its syntax, advantages over JSON and why it's the standard in CI/CD and Kubernetes.",
    "h1": "YAML",
    "short": "YAML (YAML Ain't Markup Language) is a data serialization format designed to be human-friendly. It relies on significant indentation and is the standard in configuration files for Docker, Kubernetes, GitHub Actions and Ansible.",
    "body": [
      {
        "title": "What is YAML?",
        "html": "<p><strong>YAML</strong> was born in 2001 as an alternative to XML and JSON for configuration files. Its philosophy: maximize human readability without sacrificing expressiveness. A typical YAML file looks like pseudocode rather than a data format.</p><p>Key characteristics:</p><ul><li><strong>Significant indentation:</strong> spaces (never tabs) define hierarchy. Two spaces is convention, some use four.</li><li><strong>No braces or brackets:</strong> unlike JSON, structure is inferred from indentation.</li><li><strong>Native comments:</strong> <code># comment</code>, something JSON doesn't support.</li><li><strong>Rich data types:</strong> strings, numbers, booleans, null, arrays, objects, timestamps, even internal references (<code>&amp;anchor</code>, <code>*alias</code>).</li></ul><p>Basic example:</p><p><code>app:\\n  name: Genfy\\n  port: 3000\\n  features:\\n    - auth\\n    - api\\n    - cms</code></p><p>JSON equivalent: <code>{\"app\": {\"name\": \"Genfy\", \"port\": 3000, \"features\": [\"auth\", \"api\", \"cms\"]}}</code>.</p><p>YAML is a superset of JSON: all valid JSON is valid YAML, but not vice versa. This allows gradual migration from JSON to YAML.</p>"
      },
      {
        "title": "YAML syntax and structures",
        "html": "<p><strong>Scalars:</strong> simple values. Strings don't need quotes unless they contain special characters (<code>:</code>, <code>#</code>, <code>@</code>). Multiline with <code>|</code> (preserves breaks) or <code>&gt;</code> (folds into one line).</p><p><code>description: |\\n  First line.\\n  Second line.\\nsummary: &gt;\\n  This folds\\n  into one line.</code></p><p><strong>Lists:</strong> <code>- item</code> or JSON notation <code>[item1, item2]</code>. Can nest:</p><p><code>frameworks:\\n  - name: React\\n    type: frontend\\n  - name: Node\\n    type: backend</code></p><p><strong>Dictionaries:</strong> key-value pairs. Keys with spaces require quotes: <code>\"My Key\": value</code>.</p><p><strong>Anchors and aliases:</strong> avoid repetition. <code>&amp;default</code> defines an anchor, <code>*default</code> references it:</p><p><code>defaults: &amp;defaults\\n  timeout: 30\\n  retries: 3\\napi:\\n  &lt;&lt;: *defaults\\n  endpoint: /v1</code></p><p><strong>Explicit types:</strong> <code>!!str</code>, <code>!!int</code>, <code>!!bool</code>. Useful when parser infers wrong: <code>version: !!str 1.0</code> (without it, parses as float).</p><p>Popular parsers: PyYAML (Python), js-yaml (JavaScript), go-yaml (Go). All support YAML 1.2, the current spec.</p>"
      },
      {
        "title": "When to use YAML",
        "html": "<p><strong>CI/CD:</strong> GitHub Actions, GitLab CI, CircleCI, Travis CI use YAML to define pipelines. Readability is critical when teams edit workflows frequently.</p><p><code>name: Deploy\\non: [push]\\njobs:\\n  build:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - uses: actions/checkout@v3\\n      - run: npm install</code></p><p><strong>Infrastructure as code:</strong> Kubernetes manifests, Docker Compose, Ansible playbooks, Terraform (HCL is similar). YAML describes desired system state.</p><p><strong>Application configuration:</strong> frameworks like Symfony, Rails and Spring Boot use YAML for config (<code>config.yml</code>). More expressive than <code>.env</code>, less verbose than JSON.</p><p><strong>Don't use for:</strong></p><ul><li><strong>APIs:</strong> JSON is standard and more efficient for automatic parsing.</li><li><strong>Large data:</strong> YAML is slow for gigabytes of data. Prefer JSON, CSV or binary formats (Parquet, Avro).</li><li><strong>When indentation is risky:</strong> one extra/missing space breaks the entire file. In teams without linters, JSON with explicit braces is safer.</li></ul>"
      },
      {
        "title": "YAML vs JSON: when to choose each",
        "html": "<p><strong>Use YAML if:</strong></p><ul><li>Humans edit the file frequently (configs, CI/CD).</li><li>You need comments (JSON doesn't have them).</li><li>You want to reduce visual noise (no braces/brackets).</li><li>File has complex structure with anchors/aliases for DRY.</li></ul><p><strong>Use JSON if:</strong></p><ul><li>It's for APIs or data exchange between systems.</li><li>Parse performance matters (JSON is 3-10x faster).</li><li>Team isn't familiar with strict indentation.</li><li>You need validation with JSON Schema (more mature than YAML Schema).</li></ul><p><strong>Common YAML mistakes:</strong></p><ul><li><strong>Tabs:</strong> YAML rejects tabs. Configure your editor to convert tabs to spaces.</li><li><strong>Strings that look like booleans:</strong> <code>country: NO</code> parses as <code>false</code> (NO is legacy Norwegian boolean). Use quotes: <code>country: \"NO\"</code>.</li><li><strong>Inconsistent indentation:</strong> mixing 2 and 4 spaces. Use a linter (yamllint) in pre-commit.</li></ul><p>Tools: <code>yq</code> (like <code>jq</code> but for YAML), VS Code with YAML extension (autocomplete + validation), Genfy offers online YAML ↔ JSON converters.</p>"
      }
    ],
    "examples": [
      "# App config\\napp:\\n  name: MyApp\\n  version: 1.0.0\\n  features:\\n    - auth\\n    - payments",
      "# Docker Compose\\nservices:\\n  web:\\n    image: nginx\\n    ports:\\n      - \"80:80\"",
      "# GitHub Action\\nname: CI\\non: [push]\\njobs:\\n  test:\\n    runs-on: ubuntu-latest\\n    steps:\\n      - run: npm test",
      "# Anchors and aliases\\ndefaults: &base\\n  timeout: 30\\napi:\\n  <<: *base\\n  url: /v1",
      "# Multiline\\ndescription: |\\n  First line\\n  Second line"
    ],
    "related": [
      "yaml-to-json",
      "json-to-yaml"
    ],
    "faq": [
      {
        "q": "Does YAML support comments?",
        "a": "Yes. Comments start with # and go to end of line. This is a key advantage over JSON, which doesn't support native comments (only workarounds like special keys)."
      },
      {
        "q": "Can I use tabs in YAML?",
        "a": "No. YAML explicitly rejects tabs. Only spaces. Reason: tabs have ambiguous width (2, 4, 8 spaces depending on editor), breaking significant indentation. Configure your editor to convert tabs to spaces."
      },
      {
        "q": "Is YAML slower than JSON?",
        "a": "Yes. Parsing YAML is 3-10x slower than JSON because it has more complex syntax (anchors, multiline, implicit types). For small config files it doesn't matter; for APIs with thousands of requests/second, JSON is preferable."
      }
    ]
  }
};
