import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "csv",
    "en": "csv"
  },
  "emoji": "📊",
  "category": "data",
  "es": {
    "pageTitle": "CSV — Glosario | Genfy",
    "metaDesc": "CSV (Comma-Separated Values) es el formato tabular plano donde cada línea es una fila. Aprende su sintaxis, ventajas, limitaciones y cuándo preferirlo sobre JSON o Excel.",
    "h1": "CSV",
    "short": "CSV (Comma-Separated Values) es un formato de archivo de texto plano para datos tabulares. Cada línea representa una fila y los valores se separan por comas (o punto y coma en regiones que usan coma como separador decimal).",
    "body": [
      {
        "title": "¿Qué es CSV?",
        "html": "<p><strong>CSV</strong> es uno de los formatos de datos más antiguos y ubicuos. Apareció en los 70 para intercambio de datos entre mainframes. Su popularidad se debe a su simplicidad extrema: texto plano, sin metadatos, sin compresión.</p><p>Estructura básica:</p><p><code>nombre,edad,ciudad\\nJuan,30,Buenos Aires\\nMaría,25,Montevideo</code></p><p>Primera fila típicamente contiene headers (nombres de columnas). Cada fila subsecuente es un registro. Los valores se separan por comas, aunque el separador puede ser punto y coma (<code>;</code>), tab (<code>\\t</code>) o pipe (<code>|</code>) según configuración regional.</p><p>CSV es el formato de exportación por defecto en Excel, Google Sheets, bases de datos SQL y herramientas analíticas. Todo lenguaje de programación tiene bibliotecas nativas para leer/escribir CSV: <code>csv</code> en Python, <code>csv-parse</code> en Node, <code>encoding/csv</code> en Go.</p><p>Ventaja clave: <strong>universalidad</strong>. Un CSV de 1980 se abre hoy en cualquier editor de texto. No hay lock-in de vendor ni versiones incompatibles.</p>"
      },
      {
        "title": "Sintaxis y edge cases de CSV",
        "html": "<p>Aunque CSV parece trivial, tiene sutilezas que rompen parsers ingenuos:</p><ul><li><strong>Valores con comas:</strong> si un campo contiene el separador, debe ir entre comillas: <code>\"Pérez, Juan\",30,CABA</code>.</li><li><strong>Comillas dentro de valores:</strong> se escapan duplicándolas: <code>\"Dijo \"\"hola\"\" y se fue\"</code> representa <code>Dijo \"hola\" y se fue</code>.</li><li><strong>Saltos de línea en campos:</strong> valores multilínea van entre comillas: <code>\"Primera línea\\nSegunda línea\",otro,valor</code>.</li><li><strong>Separador regional:</strong> Europa usa <code>;</code> porque usan coma como separador decimal (3,14 en lugar de 3.14). Excel exporta según configuración del sistema.</li><li><strong>Encoding:</strong> el estándar no especifica charset. UTF-8 es recomendado, pero muchos sistemas viejos usan Latin-1 o Windows-1252, causando problemas con acentos.</li></ul><p>RFC 4180 (2005) intentó estandarizar CSV, pero la adopción es parcial. Muchos exportadores generan \"CSV compatible con Excel\" que rompe otros parsers.</p><p><strong>BOM (Byte Order Mark):</strong> Excel requiere <code>\\uFEFF</code> al inicio del archivo UTF-8 para detectar encoding correctamente. Otros parsers lo ignoran o rechazan.</p>"
      },
      {
        "title": "Cuándo usar CSV",
        "html": "<p><strong>Exportar datos de bases de datos:</strong> PostgreSQL (<code>COPY TO</code>), MySQL (<code>SELECT INTO OUTFILE</code>), SQLite (<code>.mode csv</code>) exportan a CSV nativamente. Ideal para backups livianos o migrar datos entre sistemas.</p><p><strong>Análisis con Excel/Google Sheets:</strong> stakeholders no-técnicos pueden abrir CSV directamente. Para dashboards simples o reportes ad-hoc, CSV + Sheets es más rápido que armar un BI.</p><p><strong>ETL y data pipelines:</strong> herramientas como Apache Spark, Pandas, dbt ingieren CSV sin configuración. S3 + CSV es arquitectura común para data lakes.</p><p><strong>Datasets públicos:</strong> gobierno, universidades, Kaggle publican datos en CSV porque es el formato más portable. No requiere software especial para consumir.</p><p><strong>No usar para:</strong></p><ul><li><strong>Datos jerárquicos/nested:</strong> CSV es estrictamente tabular. Para relaciones anidadas (ej: usuario → órdenes → items) necesitás JSON o Parquet.</li><li><strong>Archivos grandes (&gt;1GB):</strong> CSV sin compresión ocupa mucho espacio y es lento de parsear. Preferí Parquet (columnar + compresión) o CSV.gz.</li><li><strong>Tipos de datos complejos:</strong> CSV no tiene tipos nativos. Todo es string hasta que el parser infiere. Fechas, booleans y nulls son ambiguos.</li><li><strong>Seguridad:</strong> CSV injection existe. Campos que empiezan con <code>=</code>, <code>+</code>, <code>-</code>, <code>@</code> pueden ejecutar fórmulas en Excel. Sanitizá inputs.</li></ul>"
      },
      {
        "title": "CSV vs alternativas: JSON, Parquet, Excel",
        "html": "<p><strong>CSV vs JSON:</strong></p><ul><li>CSV gana en simplicidad, peso y compatibilidad con herramientas analíticas.</li><li>JSON gana en expresividad (anidamiento, tipos nativos) y es estándar para APIs.</li><li>Regla práctica: si los datos son tabulares y van a Sheets/SQL, usá CSV. Si van a una app web o tienen jerarquía, usá JSON.</li></ul><p><strong>CSV vs Parquet:</strong></p><ul><li>Parquet es formato columnar binario, optimizado para BigData (Spark, Hive, Redshift).</li><li>10-100x más eficiente en storage y queries analíticos (lee solo columnas necesarias).</li><li>CSV gana si necesitás inspeccionar datos con <code>cat</code> o editarlos manualmente.</li></ul><p><strong>CSV vs Excel (.xlsx):</strong></p><ul><li>Excel soporta múltiples sheets, fórmulas, formato y validación. CSV es single-sheet, solo datos.</li><li>Excel es binario (zip + XML), más pesado. CSV es texto plano.</li><li>CSV gana en automatización: es más fácil generar/parsear programáticamente.</li></ul><p><strong>Mejores prácticas:</strong></p><ul><li>Siempre incluí header row con nombres descriptivos.</li><li>Usá UTF-8 + BOM si el target es Excel.</li><li>Escapá comillas y saltos de línea según RFC 4180.</li><li>Comprimí CSVs grandes con gzip (CSV.gz reduce 80-90%).</li><li>Versioná con Git (texto plano = diffs legibles).</li></ul>"
      }
    ],
    "examples": [
      "nombre,edad,ciudad\\nCarlos,28,Rosario\\nLaura,32,Córdoba",
      "producto,precio,stock\\n\"Laptop, 15\\\"\",1200.50,15\\nMouse,25.00,200",
      "fecha,temperatura,humedad\\n2024-01-15,22.5,65\\n2024-01-16,24.0,60",
      "id;descripción;activo\\n1;\"Item con; separador\";true\\n2;Normal;false",
      "usuario,rol,\"permisos\"\\nadmin,superuser,\"leer,escribir,borrar\"\\nguest,readonly,leer"
    ],
    "related": [
      "csv-a-json",
      "json-a-csv"
    ],
    "faq": [
      {
        "q": "¿CSV tiene un estándar oficial?",
        "a": "Sí y no. RFC 4180 (2005) define un estándar, pero muchas implementaciones pre-datan ese RFC y tienen comportamientos distintos. En la práctica, \"CSV compatible con Excel\" es el estándar de facto, aunque no está formalmente especificado."
      },
      {
        "q": "¿Cómo manejo valores nulos en CSV?",
        "a": "CSV no tiene representación estándar de null. Opciones: campo vacío (,,), string literal \"NULL\" o \"N/A\", o convención específica del parser (Pandas usa NaN). Documentá la convención en tu proyecto para evitar ambigüedad."
      },
      {
        "q": "¿Qué es CSV injection?",
        "a": "Vulnerability donde campos CSV maliciosos (empezando con =, +, -, @) se interpretan como fórmulas en Excel, ejecutando comandos. Mitigación: escapar esos caracteres con apóstrofe ('=cmd) o validar inputs. Afecta solo a parsers tipo Excel, no a herramientas analíticas."
      }
    ]
  },
  "en": {
    "pageTitle": "CSV — Glossary | Genfy",
    "metaDesc": "CSV (Comma-Separated Values) is the flat tabular format where each line is a row. Learn its syntax, advantages, limitations and when to prefer it over JSON or Excel.",
    "h1": "CSV",
    "short": "CSV (Comma-Separated Values) is a plain text file format for tabular data. Each line represents a row and values are separated by commas (or semicolons in regions using comma as decimal separator).",
    "body": [
      {
        "title": "What is CSV?",
        "html": "<p><strong>CSV</strong> is one of the oldest and most ubiquitous data formats. It appeared in the 70s for data exchange between mainframes. Its popularity stems from extreme simplicity: plain text, no metadata, no compression.</p><p>Basic structure:</p><p><code>name,age,city\\nJohn,30,New York\\nMary,25,Boston</code></p><p>First row typically contains headers (column names). Each subsequent row is a record. Values are separated by commas, though the separator can be semicolon (<code>;</code>), tab (<code>\\t</code>) or pipe (<code>|</code>) depending on regional settings.</p><p>CSV is the default export format in Excel, Google Sheets, SQL databases and analytics tools. Every programming language has native libraries for reading/writing CSV: <code>csv</code> in Python, <code>csv-parse</code> in Node, <code>encoding/csv</code> in Go.</p><p>Key advantage: <strong>universality</strong>. A 1980 CSV opens today in any text editor. No vendor lock-in or incompatible versions.</p>"
      },
      {
        "title": "CSV syntax and edge cases",
        "html": "<p>Though CSV seems trivial, it has subtleties that break naive parsers:</p><ul><li><strong>Values with commas:</strong> if a field contains the separator, it must be quoted: <code>\"Pérez, Juan\",30,NYC</code>.</li><li><strong>Quotes inside values:</strong> escaped by doubling: <code>\"He said \"\"hello\"\" and left\"</code> represents <code>He said \"hello\" and left</code>.</li><li><strong>Line breaks in fields:</strong> multiline values go in quotes: <code>\"First line\\nSecond line\",other,value</code>.</li><li><strong>Regional separator:</strong> Europe uses <code>;</code> because they use comma as decimal separator (3,14 instead of 3.14). Excel exports according to system settings.</li><li><strong>Encoding:</strong> standard doesn't specify charset. UTF-8 is recommended, but many legacy systems use Latin-1 or Windows-1252, causing issues with accents.</li></ul><p>RFC 4180 (2005) tried to standardize CSV, but adoption is partial. Many exporters generate \"Excel-compatible CSV\" that breaks other parsers.</p><p><strong>BOM (Byte Order Mark):</strong> Excel requires <code>\\uFEFF</code> at start of UTF-8 file to detect encoding correctly. Other parsers ignore or reject it.</p>"
      },
      {
        "title": "When to use CSV",
        "html": "<p><strong>Exporting database data:</strong> PostgreSQL (<code>COPY TO</code>), MySQL (<code>SELECT INTO OUTFILE</code>), SQLite (<code>.mode csv</code>) export to CSV natively. Ideal for lightweight backups or migrating data between systems.</p><p><strong>Analysis with Excel/Google Sheets:</strong> non-technical stakeholders can open CSV directly. For simple dashboards or ad-hoc reports, CSV + Sheets is faster than building a BI.</p><p><strong>ETL and data pipelines:</strong> tools like Apache Spark, Pandas, dbt ingest CSV without configuration. S3 + CSV is common architecture for data lakes.</p><p><strong>Public datasets:</strong> government, universities, Kaggle publish data in CSV because it's the most portable format. Doesn't require special software to consume.</p><p><strong>Don't use for:</strong></p><ul><li><strong>Hierarchical/nested data:</strong> CSV is strictly tabular. For nested relationships (e.g. user → orders → items) you need JSON or Parquet.</li><li><strong>Large files (&gt;1GB):</strong> uncompressed CSV takes up space and is slow to parse. Prefer Parquet (columnar + compression) or CSV.gz.</li><li><strong>Complex data types:</strong> CSV has no native types. Everything is string until parser infers. Dates, booleans and nulls are ambiguous.</li><li><strong>Security:</strong> CSV injection exists. Fields starting with <code>=</code>, <code>+</code>, <code>-</code>, <code>@</code> can execute formulas in Excel. Sanitize inputs.</li></ul>"
      },
      {
        "title": "CSV vs alternatives: JSON, Parquet, Excel",
        "html": "<p><strong>CSV vs JSON:</strong></p><ul><li>CSV wins in simplicity, size and compatibility with analytics tools.</li><li>JSON wins in expressiveness (nesting, native types) and is standard for APIs.</li><li>Rule of thumb: if data is tabular and going to Sheets/SQL, use CSV. If going to web app or has hierarchy, use JSON.</li></ul><p><strong>CSV vs Parquet:</strong></p><ul><li>Parquet is binary columnar format, optimized for BigData (Spark, Hive, Redshift).</li><li>10-100x more efficient in storage and analytical queries (reads only needed columns).</li><li>CSV wins if you need to inspect data with <code>cat</code> or edit manually.</li></ul><p><strong>CSV vs Excel (.xlsx):</strong></p><ul><li>Excel supports multiple sheets, formulas, formatting and validation. CSV is single-sheet, data only.</li><li>Excel is binary (zip + XML), heavier. CSV is plain text.</li><li>CSV wins in automation: easier to generate/parse programmatically.</li></ul><p><strong>Best practices:</strong></p><ul><li>Always include header row with descriptive names.</li><li>Use UTF-8 + BOM if target is Excel.</li><li>Escape quotes and line breaks per RFC 4180.</li><li>Compress large CSVs with gzip (CSV.gz reduces 80-90%).</li><li>Version with Git (plain text = readable diffs).</li></ul>"
      }
    ],
    "examples": [
      "name,age,city\\nCarlos,28,Chicago\\nLaura,32,Austin",
      "product,price,stock\\n\"Laptop, 15\\\"\",1200.50,15\\nMouse,25.00,200",
      "date,temperature,humidity\\n2024-01-15,72.5,65\\n2024-01-16,75.2,60",
      "id;description;active\\n1;\"Item with; separator\";true\\n2;Normal;false",
      "user,role,\"permissions\"\\nadmin,superuser,\"read,write,delete\"\\nguest,readonly,read"
    ],
    "related": [
      "csv-to-json",
      "json-to-csv"
    ],
    "faq": [
      {
        "q": "Does CSV have an official standard?",
        "a": "Yes and no. RFC 4180 (2005) defines a standard, but many implementations predate that RFC and have different behaviors. In practice, \"Excel-compatible CSV\" is the de facto standard, though not formally specified."
      },
      {
        "q": "How do I handle null values in CSV?",
        "a": "CSV has no standard null representation. Options: empty field (,,), literal string \"NULL\" or \"N/A\", or parser-specific convention (Pandas uses NaN). Document your project's convention to avoid ambiguity."
      },
      {
        "q": "What is CSV injection?",
        "a": "Vulnerability where malicious CSV fields (starting with =, +, -, @) are interpreted as formulas in Excel, executing commands. Mitigation: escape those characters with apostrophe ('=cmd) or validate inputs. Only affects Excel-like parsers, not analytics tools."
      }
    ]
  }
};
