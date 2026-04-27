import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-regex-sql-injection",
    "en": "sql-injection-pattern-generator"
  },
  "category": "security",
  "emoji": "🛡️",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Regex SQL Injection | Genfy",
    "metaDesc": "Genera patrones regex para detectar intentos de SQL injection en inputs. Ideal para WAFs, validación de formularios y seguridad de aplicaciones web.",
    "h1": "Generador de Regex SQL Injection",
    "intro": "Patrones regex para detectar y bloquear ataques SQL injection antes de que lleguen a tu base de datos. Desde UNION-based hasta blind injection.",
    "tag": "Seguridad",
    "filterLabel": "Tipo de ataque",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "union-based",
        "label": "UNION-based",
        "items": [
          "(?i)(union\\s+(all\\s+)?select)",
          "(?i)(\\bunion\\b.{1,100}\\bselect\\b)",
          "(?i)(select.{1,100}union.{1,100}select)",
          "(?i)(\\bunion\\b.*?\\bfrom\\b)",
          "(?i)(union\\s+distinct\\s+select)",
          "(?i)(select.*union.*from)",
          "(?i)(union.*select.*from.*where)",
          "(?i)(\\|\\|.*union.*select)",
          "(?i)(union\\s+all\\s+select\\s+null)",
          "(?i)(union\\s+select.*information_schema)"
        ]
      },
      {
        "id": "boolean-blind",
        "label": "Boolean Blind",
        "items": [
          "(?i)(and\\s+1\\s*=\\s*1)",
          "(?i)(or\\s+1\\s*=\\s*1)",
          "(?i)(and\\s+\\d+\\s*=\\s*\\d+)",
          "(?i)(or\\s+'[^']*'\\s*=\\s*'[^']*')",
          "(?i)('\\s+(and|or)\\s+'\\w+'\\s*=\\s*'\\w+')",
          "(?i)(and\\s+exists\\s*\\(select)",
          "(?i)(or\\s+not\\s+exists\\s*\\(select)",
          "(?i)(and\\s+ascii\\(substring)",
          "(?i)(or\\s+length\\()",
          "(?i)(and\\s+\\(select\\s+count\\(\\*\\))"
        ]
      },
      {
        "id": "time-based",
        "label": "Time-based Blind",
        "items": [
          "(?i)(sleep\\s*\\(\\s*\\d+\\s*\\))",
          "(?i)(benchmark\\s*\\([^)]+\\))",
          "(?i)(waitfor\\s+delay\\s+'\\d+:\\d+:\\d+')",
          "(?i)(pg_sleep\\s*\\(\\d+\\))",
          "(?i)(and.{1,50}sleep\\s*\\()",
          "(?i)(or.{1,50}benchmark\\s*\\()",
          "(?i)(select.*sleep\\(\\d+\\))",
          "(?i)(;\\s*waitfor\\s+delay)",
          "(?i)(if\\s*\\(.{1,100}sleep\\()",
          "(?i)(case\\s+when.{1,100}sleep\\()"
        ]
      },
      {
        "id": "error-based",
        "label": "Error-based",
        "items": [
          "(?i)(extractvalue\\s*\\()",
          "(?i)(updatexml\\s*\\()",
          "(?i)(and\\s+row\\s*\\([^)]+\\))",
          "(?i)(convert\\s*\\(int,)",
          "(?i)(cast\\s*\\(.{1,50}\\bas\\b)",
          "(?i)(group\\s+by.{1,100}having)",
          "(?i)(floor\\s*\\(rand\\(0\\)\\*2\\))",
          "(?i)(exp\\s*\\(~\\s*\\(select)",
          "(?i)(geometrycollection\\s*\\()",
          "(?i)(multipoint\\s*\\(.*select)"
        ]
      },
      {
        "id": "stacked-queries",
        "label": "Stacked Queries",
        "items": [
          "(?i)(;\\s*drop\\s+(table|database))",
          "(?i)(;\\s*delete\\s+from)",
          "(?i)(;\\s*insert\\s+into)",
          "(?i)(;\\s*update\\s+\\w+\\s+set)",
          "(?i)(;\\s*exec\\s*\\()",
          "(?i)(;\\s*execute\\s+immediate)",
          "(?i)(;\\s*shutdown)",
          "(?i)(;\\s*truncate\\s+table)",
          "(?i)(;\\s*create\\s+(table|user))",
          "(?i)(;\\s*alter\\s+table)"
        ]
      },
      {
        "id": "out-of-band",
        "label": "Out-of-band",
        "items": [
          "(?i)(load_file\\s*\\()",
          "(?i)(into\\s+outfile\\s+')",
          "(?i)(into\\s+dumpfile\\s+')",
          "(?i)(xp_cmdshell)",
          "(?i)(exec\\s+master\\.)",
          "(?i)(bulk\\s+insert)",
          "(?i)(openrowset\\s*\\()",
          "(?i)(load\\s+data\\s+infile)",
          "(?i)(select.{1,100}into\\s+outfile)",
          "(?i)(copy.{1,100}from\\s+program)"
        ]
      },
      {
        "id": "authentication-bypass",
        "label": "Auth Bypass",
        "items": [
          "(?i)('\\s+or\\s+'1'\\s*=\\s*'1)",
          "(?i)('\\s+or\\s+1\\s*=\\s*1\\s*--)",
          "(?i)(admin'\\s*--)",
          "(?i)('\\s+or\\s+'a'\\s*=\\s*'a)",
          "(?i)(\\bor\\b\\s+1\\s*=\\s*1\\s*#)",
          "(?i)('\\s+or\\s+''\\s*=\\s*')",
          "(?i)(username'\\s*=\\s*'admin'\\s*--)",
          "(?i)('\\)|\\('a'\\s*=\\s*'a)",
          "(?i)(\\bor\\b\\s+'1'\\s*=\\s*'1'\\s*/\\*)",
          "(?i)('\\s+or\\s+1\\s*=\\s*1\\s*limit\\s+1\\s*--)"
        ]
      },
      {
        "id": "second-order",
        "label": "Second Order",
        "items": [
          "(?i)(concat\\s*\\(.{1,100}select)",
          "(?i)(char\\s*\\(\\d+)",
          "(?i)(unhex\\s*\\()",
          "(?i)(hex\\s*\\(select)",
          "(?i)(compress\\s*\\(select)",
          "(?i)(quote\\s*\\(select)",
          "(?i)(reverse\\s*\\(select)",
          "(?i)(soundex\\s*\\(select)",
          "(?i)(md5\\s*\\(select)",
          "(?i)(encode\\s*\\(.{1,100}select)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Estructura de patrones regex efectivos",
        "body": "<p>Un regex anti-SQLi eficaz equilibra sensibilidad y especificidad. El flag <code>(?i)</code> (case-insensitive) es crítico porque atacantes explotan variaciones como <strong>UnIoN</strong> o <strong>SeLeCt</strong> para evadir filtros básicos. El cuantificador <code>.{1,100}</code> captura ofuscación con espacios, tabs y comentarios: <code>UNION/**/SELECT</code> vs <code>UNION SELECT</code>.</p><p>Error común: patrones demasiado específicos tipo <code>union\\s+select</code>. Esto falla contra <code>union/**/select</code> o <code>union+select</code> (URL-encoded). Mejor: <code>(union\\s+(all\\s+)?select)</code> que cubre UNION ALL SELECT también. Para ataques blind, el patrón <code>and\\s+1\\s*=\\s*1</code> debe considerar espacios opcionales alrededor del operador.</p><p>Los límites de palabra <code>\\b</code> previenen falsos positivos: sin ellos, <code>union</code> matchea dentro de 'communion'. Pero cuidado: <code>\\b</code> falla con caracteres no-ASCII. En campos de email, el patrón debe ser menos estricto porque direcciones legítimas pueden contener <code>+</code> o <code>.</code> que parecen operadores SQL.</p>"
      },
      {
        "h2": "Implementar validación en múltiples capas",
        "body": "<p>Regex solo en backend es insuficiente. Los ataques sofisticados usan <strong>doble encoding</strong> (%2527 = %27 = '), <strong>unicode normalization</strong> (ᴜɴɪᴏɴ) o <strong>HPP</strong> (HTTP Parameter Pollution). Tu stack debe incluir: <strong>1)</strong> WAF perimetral con reglas OWASP ModSecurity, <strong>2)</strong> validación regex en API layer, <strong>3)</strong> prepared statements en DAL.</p><p>Para formularios, combiná regex con whitelisting. Si el campo 'username' solo admite <code>[a-zA-Z0-9_-]</code>, aplicá eso primero. El regex SQLi actúa como segunda línea contra payloads que pasen la whitelist. En campos de texto libre (bio, comentarios), el regex debe ser más agresivo: bloquear <code>select</code>, <code>union</code>, <code>drop</code> incluso en contexto legítimo, mejor que permitir un 0-day.</p><p>No confíes en client-side JavaScript para seguridad. Regex en frontend mejora UX (feedback inmediato) pero un atacante simplemente lo bypassea con curl. Todo request debe validarse en servidor. Log los matches: si alguien trigea el regex SQLi 10 veces en 1 minuto, es scan automatizado, no typo.</p>"
      },
      {
        "h2": "Detectar técnicas avanzadas de evasión",
        "body": "<p>Ataques modernos explotan <strong>inline comments</strong> para fragmentar keywords: <code>SEL/**/ECT</code>, <code>UN/*comment*/ION</code>. Tu regex debe manejar <code>/\\*.*?\\*/</code> entre caracteres. En MySQL, <code>/*!50000 SELECT */</code> ejecuta solo en versiones específicas; el pattern necesita <code>/\\*!\\d+.*?\\*/</code>.</p><p>El <strong>encoding alternativo</strong> es vector común: <code>CHAR(117,110,105,111,110)</code> construye 'union' dinámicamente. Patrones tipo <code>char\\s*\\(\\d+</code> detectan esto. En PostgreSQL, <code>CHR()</code> y <code>CONCAT()</code> sirven igual propósito. Hex encoding (<code>0x756e696f6e</code>) requiere <code>0x[0-9a-f]+</code>.</p><p>El <strong>time-based blind injection</strong> moderno usa funciones más sutiles que <code>SLEEP()</code>: <code>BENCHMARK(10000000, MD5('a'))</code> en MySQL, <code>WAITFOR DELAY '00:00:05'</code> en MSSQL. Tu regex debe cubrir familias enteras de funciones de demora, no solo las obvias. Y ojo con <code>RLIKE</code> o <code>REGEXP</code>: permiten ReDoS (Regex DoS) que bloquea el servidor con patterns catastróficos.</p>"
      },
      {
        "h2": "Testing y mantenimiento de reglas",
        "body": "<p>Construí un suite de test con 100+ payloads reales de <strong>sqlmap</strong>, <strong>PayloadsAllTheThings</strong> y CVEs recientes. Cada regex debe tener tasa de detección >95% sin falsos positivos en datos legítimos. Usá datasets tipo <strong>SecLists</strong> para validar.</p><p>Los falsos positivos son críticos: si tu regex bloquea búsquedas de <em>\"union membership\"</em> o nombres tipo <em>\"Shelby Andersen\"</em> (and + select), los usuarios reportan bugs en lugar de ataques. Tuneá con <strong>negative lookaheads</strong>: <code>(?!.*membership)union</code> excluye contextos safe.</p><p>Actualizá patterns trimestralmente. Seguí <strong>OWASP SQLi</strong> y <strong>PortSwigger Research</strong> para técnicas nuevas. Cuando SQLite lanza una función como <code>JSONB_EXTRACT()</code>, evaluá si necesita coverage. En producción, loguea todos los blocks: analizá mensualmente si hay patterns que ya no matchean (el ataque evolucionó) o matchean demasiado (falsos positivos). Los regex de seguridad no son set-and-forget.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Debo usar regex o prepared statements para prevenir SQLi?",
        "a": "Prepared statements son la defensa primaria; previenen SQLi arquitecturalmente. Regex es defensa en profundidad: detecta ataques antes de que lleguen a la query, útil para logging y blocking temprano."
      },
      {
        "q": "¿Cómo evito que regex cause ReDoS (catastrophic backtracking)?",
        "a": "Evitá cuantificadores anidados tipo (a+)+. Testeá con herramientas como regex101.com que alertan sobre complejidad. Limitá input length antes de aplicar regex (ej. max 1000 chars)."
      },
      {
        "q": "¿Los regex anti-SQLi funcionan para NoSQL injection?",
        "a": "No. NoSQL usa JSON/BSON, no SQL. Necesitás patterns diferentes para detectar payloads como {\"$gt\": \"\"} en MongoDB o SSJI (Server-Side JavaScript Injection) en CouchDB."
      },
      {
        "q": "¿Debería bloquear requests que matchean o solo loguear?",
        "a": "Depende del riesgo. En inputs de alta criticidad (auth, payment), bloquear. En búsquedas generales, loguear y analizar por 2 semanas antes de bloquear (para afinar y reducir falsos positivos)."
      }
    ]
  },
  "en": {
    "pageTitle": "SQL Injection Pattern Generator | Genfy",
    "metaDesc": "Generate regex patterns to detect SQL injection attempts in inputs. Perfect for WAFs, form validation and web application security hardening.",
    "h1": "SQL Injection Pattern Generator",
    "intro": "Regex patterns to detect and block SQL injection attacks before they reach your database. From UNION-based to blind injection techniques.",
    "tag": "Security",
    "filterLabel": "Attack type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "union-based",
        "label": "UNION-based",
        "items": [
          "(?i)(union\\s+(all\\s+)?select)",
          "(?i)(\\bunion\\b.{1,100}\\bselect\\b)",
          "(?i)(select.{1,100}union.{1,100}select)",
          "(?i)(\\bunion\\b.*?\\bfrom\\b)",
          "(?i)(union\\s+distinct\\s+select)",
          "(?i)(select.*union.*from)",
          "(?i)(union.*select.*from.*where)",
          "(?i)(\\|\\|.*union.*select)",
          "(?i)(union\\s+all\\s+select\\s+null)",
          "(?i)(union\\s+select.*information_schema)"
        ]
      },
      {
        "id": "boolean-blind",
        "label": "Boolean Blind",
        "items": [
          "(?i)(and\\s+1\\s*=\\s*1)",
          "(?i)(or\\s+1\\s*=\\s*1)",
          "(?i)(and\\s+\\d+\\s*=\\s*\\d+)",
          "(?i)(or\\s+'[^']*'\\s*=\\s*'[^']*')",
          "(?i)('\\s+(and|or)\\s+'\\w+'\\s*=\\s*'\\w+')",
          "(?i)(and\\s+exists\\s*\\(select)",
          "(?i)(or\\s+not\\s+exists\\s*\\(select)",
          "(?i)(and\\s+ascii\\(substring)",
          "(?i)(or\\s+length\\()",
          "(?i)(and\\s+\\(select\\s+count\\(\\*\\))"
        ]
      },
      {
        "id": "time-based",
        "label": "Time-based Blind",
        "items": [
          "(?i)(sleep\\s*\\(\\s*\\d+\\s*\\))",
          "(?i)(benchmark\\s*\\([^)]+\\))",
          "(?i)(waitfor\\s+delay\\s+'\\d+:\\d+:\\d+')",
          "(?i)(pg_sleep\\s*\\(\\d+\\))",
          "(?i)(and.{1,50}sleep\\s*\\()",
          "(?i)(or.{1,50}benchmark\\s*\\()",
          "(?i)(select.*sleep\\(\\d+\\))",
          "(?i)(;\\s*waitfor\\s+delay)",
          "(?i)(if\\s*\\(.{1,100}sleep\\()",
          "(?i)(case\\s+when.{1,100}sleep\\()"
        ]
      },
      {
        "id": "error-based",
        "label": "Error-based",
        "items": [
          "(?i)(extractvalue\\s*\\()",
          "(?i)(updatexml\\s*\\()",
          "(?i)(and\\s+row\\s*\\([^)]+\\))",
          "(?i)(convert\\s*\\(int,)",
          "(?i)(cast\\s*\\(.{1,50}\\bas\\b)",
          "(?i)(group\\s+by.{1,100}having)",
          "(?i)(floor\\s*\\(rand\\(0\\)\\*2\\))",
          "(?i)(exp\\s*\\(~\\s*\\(select)",
          "(?i)(geometrycollection\\s*\\()",
          "(?i)(multipoint\\s*\\(.*select)"
        ]
      },
      {
        "id": "stacked-queries",
        "label": "Stacked Queries",
        "items": [
          "(?i)(;\\s*drop\\s+(table|database))",
          "(?i)(;\\s*delete\\s+from)",
          "(?i)(;\\s*insert\\s+into)",
          "(?i)(;\\s*update\\s+\\w+\\s+set)",
          "(?i)(;\\s*exec\\s*\\()",
          "(?i)(;\\s*execute\\s+immediate)",
          "(?i)(;\\s*shutdown)",
          "(?i)(;\\s*truncate\\s+table)",
          "(?i)(;\\s*create\\s+(table|user))",
          "(?i)(;\\s*alter\\s+table)"
        ]
      },
      {
        "id": "out-of-band",
        "label": "Out-of-band",
        "items": [
          "(?i)(load_file\\s*\\()",
          "(?i)(into\\s+outfile\\s+')",
          "(?i)(into\\s+dumpfile\\s+')",
          "(?i)(xp_cmdshell)",
          "(?i)(exec\\s+master\\.)",
          "(?i)(bulk\\s+insert)",
          "(?i)(openrowset\\s*\\()",
          "(?i)(load\\s+data\\s+infile)",
          "(?i)(select.{1,100}into\\s+outfile)",
          "(?i)(copy.{1,100}from\\s+program)"
        ]
      },
      {
        "id": "authentication-bypass",
        "label": "Auth Bypass",
        "items": [
          "(?i)('\\s+or\\s+'1'\\s*=\\s*'1)",
          "(?i)('\\s+or\\s+1\\s*=\\s*1\\s*--)",
          "(?i)(admin'\\s*--)",
          "(?i)('\\s+or\\s+'a'\\s*=\\s*'a)",
          "(?i)(\\bor\\b\\s+1\\s*=\\s*1\\s*#)",
          "(?i)('\\s+or\\s+''\\s*=\\s*')",
          "(?i)(username'\\s*=\\s*'admin'\\s*--)",
          "(?i)('\\)|\\('a'\\s*=\\s*'a)",
          "(?i)(\\bor\\b\\s+'1'\\s*=\\s*'1'\\s*/\\*)",
          "(?i)('\\s+or\\s+1\\s*=\\s*1\\s*limit\\s+1\\s*--)"
        ]
      },
      {
        "id": "second-order",
        "label": "Second Order",
        "items": [
          "(?i)(concat\\s*\\(.{1,100}select)",
          "(?i)(char\\s*\\(\\d+)",
          "(?i)(unhex\\s*\\()",
          "(?i)(hex\\s*\\(select)",
          "(?i)(compress\\s*\\(select)",
          "(?i)(quote\\s*\\(select)",
          "(?i)(reverse\\s*\\(select)",
          "(?i)(soundex\\s*\\(select)",
          "(?i)(md5\\s*\\(select)",
          "(?i)(encode\\s*\\(.{1,100}select)"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Structure of effective regex patterns",
        "body": "<p>An effective anti-SQLi regex balances sensitivity and specificity. The <code>(?i)</code> flag (case-insensitive) is critical because attackers exploit variations like <strong>UnIoN</strong> or <strong>SeLeCt</strong> to evade basic filters. The quantifier <code>.{1,100}</code> captures obfuscation with spaces, tabs and comments: <code>UNION/**/SELECT</code> vs <code>UNION SELECT</code>.</p><p>Common mistake: overly specific patterns like <code>union\\s+select</code>. This fails against <code>union/**/select</code> or <code>union+select</code> (URL-encoded). Better: <code>(union\\s+(all\\s+)?select)</code> which also covers UNION ALL SELECT. For blind attacks, the pattern <code>and\\s+1\\s*=\\s*1</code> must consider optional spaces around the operator.</p><p>Word boundaries <code>\\b</code> prevent false positives: without them, <code>union</code> matches inside 'communion'. But beware: <code>\\b</code> fails with non-ASCII characters. In email fields, the pattern should be less strict because legitimate addresses can contain <code>+</code> or <code>.</code> that look like SQL operators.</p>"
      },
      {
        "h2": "Implementing validation in multiple layers",
        "body": "<p>Backend-only regex is insufficient. Sophisticated attacks use <strong>double encoding</strong> (%2527 = %27 = '), <strong>unicode normalization</strong> (ᴜɴɪᴏɴ) or <strong>HPP</strong> (HTTP Parameter Pollution). Your stack should include: <strong>1)</strong> perimeter WAF with OWASP ModSecurity rules, <strong>2)</strong> regex validation in API layer, <strong>3)</strong> prepared statements in DAL.</p><p>For forms, combine regex with whitelisting. If the 'username' field only accepts <code>[a-zA-Z0-9_-]</code>, apply that first. SQLi regex acts as second line against payloads that pass the whitelist. In free-text fields (bio, comments), regex should be more aggressive: block <code>select</code>, <code>union</code>, <code>drop</code> even in legitimate context, better than allowing a 0-day.</p><p>Don't trust client-side JavaScript for security. Frontend regex improves UX (immediate feedback) but an attacker simply bypasses it with curl. Every request must be validated server-side. Log the matches: if someone triggers the SQLi regex 10 times in 1 minute, it's automated scanning, not a typo.</p>"
      },
      {
        "h2": "Detecting advanced evasion techniques",
        "body": "<p>Modern attacks exploit <strong>inline comments</strong> to fragment keywords: <code>SEL/**/ECT</code>, <code>UN/*comment*/ION</code>. Your regex must handle <code>/\\*.*?\\*/</code> between characters. In MySQL, <code>/*!50000 SELECT */</code> executes only in specific versions; the pattern needs <code>/\\*!\\d+.*?\\*/</code>.</p><p><strong>Alternate encoding</strong> is a common vector: <code>CHAR(117,110,105,111,110)</code> constructs 'union' dynamically. Patterns like <code>char\\s*\\(\\d+</code> detect this. In PostgreSQL, <code>CHR()</code> and <code>CONCAT()</code> serve the same purpose. Hex encoding (<code>0x756e696f6e</code>) requires <code>0x[0-9a-f]+</code>.</p><p>Modern <strong>time-based blind injection</strong> uses more subtle functions than <code>SLEEP()</code>: <code>BENCHMARK(10000000, MD5('a'))</code> in MySQL, <code>WAITFOR DELAY '00:00:05'</code> in MSSQL. Your regex must cover entire families of delay functions, not just the obvious ones. And watch for <code>RLIKE</code> or <code>REGEXP</code>: they enable ReDoS (Regex DoS) that locks the server with catastrophic patterns.</p>"
      },
      {
        "h2": "Testing and maintaining rules",
        "body": "<p>Build a test suite with 100+ real payloads from <strong>sqlmap</strong>, <strong>PayloadsAllTheThings</strong> and recent CVEs. Each regex should have >95% detection rate without false positives on legitimate data. Use datasets like <strong>SecLists</strong> for validation.</p><p>False positives are critical: if your regex blocks searches for <em>\"union membership\"</em> or names like <em>\"Shelby Andersen\"</em> (and + select), users report bugs instead of attacks. Tune with <strong>negative lookaheads</strong>: <code>(?!.*membership)union</code> excludes safe contexts.</p><p>Update patterns quarterly. Follow <strong>OWASP SQLi</strong> and <strong>PortSwigger Research</strong> for new techniques. When SQLite releases a function like <code>JSONB_EXTRACT()</code>, evaluate if it needs coverage. In production, log all blocks: analyze monthly whether there are patterns that no longer match (the attack evolved) or match too much (false positives). Security regex is not set-and-forget.</p>"
      }
    ],
    "faq": [
      {
        "q": "Should I use regex or prepared statements to prevent SQLi?",
        "a": "Prepared statements are the primary defense; they prevent SQLi architecturally. Regex is defense-in-depth: detects attacks before they reach the query, useful for logging and early blocking."
      },
      {
        "q": "How do I prevent regex from causing ReDoS (catastrophic backtracking)?",
        "a": "Avoid nested quantifiers like (a+)+. Test with tools like regex101.com that alert about complexity. Limit input length before applying regex (e.g. max 1000 chars)."
      },
      {
        "q": "Do anti-SQLi regex work for NoSQL injection?",
        "a": "No. NoSQL uses JSON/BSON, not SQL. You need different patterns to detect payloads like {\"$gt\": \"\"} in MongoDB or SSJI (Server-Side JavaScript Injection) in CouchDB."
      },
      {
        "q": "Should I block requests that match or just log them?",
        "a": "Depends on risk. In high-criticality inputs (auth, payment), block. In general searches, log and analyze for 2 weeks before blocking (to tune and reduce false positives)."
      }
    ]
  }
};
