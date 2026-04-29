import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-curl-a-codigo', en: 'curl-to-code-generator' },
  category: 'tech',
  emoji: '🔄',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de cURL a Código | Genfy',
    metaDesc: 'Convertí comandos cURL a código Python (requests, httpx), JavaScript (fetch, axios), PHP, Ruby, Go y Rust para HTTP requests listos para producción.',
    h1: 'Generador de cURL a Código',
    intro: 'Traducí comandos cURL a tu lenguaje favorito en segundos. Para devs cansados de copiar y adaptar manualmente requests entre Postman, terminal y producción.',
    tag: 'Conversión de código',
    filterLabel: 'Lenguaje',
    countLabel: 'Cantidad',
    generateLabel: 'Generar conversiones',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'python',
        label: 'Python (requests, httpx, urllib)',
        items: [
          'GET simple → import requests; r = requests.get("https://api.example.com/users")',
          'GET con query params → requests.get("...", params={"page": 1, "limit": 20})',
          'POST con JSON → requests.post("...", json={"name": "test"})',
          'POST con form data → requests.post("...", data={"key": "value"})',
          'PUT con auth Bearer → requests.put("...", headers={"Authorization": f"Bearer {token}"}, json=data)',
          'DELETE con timeout → requests.delete("...", timeout=10)',
          'GET con basic auth → requests.get("...", auth=("user", "pass"))',
          'POST multipart file → requests.post("...", files={"file": open("doc.pdf", "rb")})',
          'GET con custom headers → requests.get("...", headers={"X-API-Key": "abc"})',
          'GET con cookies → requests.get("...", cookies={"session": "xyz"})',
          'POST con SSL verify off → requests.post("...", verify=False)',
          'GET con proxy → requests.get("...", proxies={"https": "http://proxy:8080"})',
          'GET con user-agent custom → requests.get("...", headers={"User-Agent": "MyBot/1.0"})',
          'POST con retry (urllib3) → session con HTTPAdapter y Retry strategy',
          'GET async con httpx → import httpx; async with httpx.AsyncClient() as c: await c.get(url)',
          'POST async batch httpx → asyncio.gather de múltiples requests concurrentes',
          'GET streaming response → requests.get("...", stream=True); for chunk in r.iter_content()',
          'POST con session reusable → s = requests.Session(); s.post(...)',
          'GET con redirección manual → requests.get("...", allow_redirects=False)',
          'POST con XML body → requests.post("...", data=xml_str, headers={"Content-Type": "application/xml"})',
          'GET con autenticación digest → requests.get("...", auth=HTTPDigestAuth(user, pass))',
          'POST con OAuth1 → requests.post("...", auth=OAuth1(key, secret))',
          'GET HTTP/2 con httpx → httpx.Client(http2=True).get(url)',
          'POST GraphQL → requests.post("...", json={"query": "{ user { name } }"})',
          'GET con cache (requests-cache) → requests_cache.install_cache(); requests.get(...)',
          'PATCH con JSON merge patch → requests.patch("...", json=patch, headers={"Content-Type": "application/merge-patch+json"})',
          'POST signed request (HMAC) → calcular signature y agregar a headers',
          'GET con server-sent events → for event in client.events(): handle(event)',
          'POST WebDAV → requests.request("PROPFIND", "...", data=xml)',
          'GET con certificate auth (mTLS) → requests.get("...", cert=("client.crt", "client.key"))'
        ]
      },
      {
        id: 'javascript',
        label: 'JavaScript (fetch, axios, node-fetch)',
        items: [
          'GET fetch básico → fetch("https://api.example.com/users").then(r => r.json())',
          'POST fetch con JSON → fetch(url, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) })',
          'GET axios básico → axios.get("https://api.example.com/users")',
          'POST axios con headers → axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } })',
          'PUT axios con interceptors → axios.interceptors.request.use(config => {...}); axios.put(url, data)',
          'DELETE fetch con AbortController → controller = new AbortController(); fetch(url, { signal: controller.signal })',
          'GET fetch con query params (URLSearchParams) → fetch(`${url}?${new URLSearchParams({page: 1})}`)',
          'POST fetch con FormData → fetch(url, { method: "POST", body: formData })',
          'GET fetch con credentials (cookies) → fetch(url, { credentials: "include" })',
          'POST fetch con multipart file upload → const form = new FormData(); form.append("file", file)',
          'GET fetch con timeout (AbortSignal) → AbortSignal.timeout(5000)',
          'POST axios con Bearer + retry → axios-retry plugin con configuración exponential backoff',
          'GET async/await fetch → async function() { const r = await fetch(url); return r.json(); }',
          'POST con node-fetch CommonJS → const fetch = require("node-fetch"); await fetch(url, options)',
          'GET con axios baseURL → const api = axios.create({baseURL: "https://api.example.com"})',
          'POST GraphQL con fetch → fetch(url, { method: "POST", body: JSON.stringify({query, variables}) })',
          'GET fetch con CORS preflight → request con custom header dispara OPTIONS automático',
          'POST fetch con stream upload → fetch(url, { method: "POST", body: readableStream, duplex: "half" })',
          'GET fetch SSE (server-sent events) → const evt = new EventSource(url); evt.onmessage = ...',
          'POST con websocket upgrade → new WebSocket("wss://api.example.com/socket")',
          'GET con axios cancel token (legacy) → CancelToken.source(); axios.get(url, {cancelToken})',
          'POST fetch con custom redirect → fetch(url, { redirect: "manual" })',
          'GET fetch con cache control → fetch(url, { cache: "no-store" })',
          'POST con response streaming (lectura chunks) → for await (chunk of response.body) { ... }',
          'GET fetch con priority hint → fetch(url, { priority: "high" })',
          'POST axios con upload progress → axios.post(url, data, { onUploadProgress: e => ... })',
          'GET fetch en Cloudflare Workers → fetch sigue mismo API en edge runtime',
          'POST fetch con keepalive (envío en unload) → fetch(url, { method: "POST", keepalive: true, body })',
          'GET fetch con referrer policy → fetch(url, { referrerPolicy: "no-referrer" })',
          'POST con axios mock adapter para testing → MockAdapter sobre axios instance'
        ]
      },
      {
        id: 'php',
        label: 'PHP (cURL, Guzzle, file_get_contents)',
        items: [
          'GET cURL básico PHP → $ch = curl_init($url); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_exec($ch);',
          'POST cURL con JSON → curl_setopt_array con CURLOPT_POSTFIELDS json_encode($data)',
          'PUT cURL → curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");',
          'DELETE cURL → curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");',
          'GET con headers cURL → curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer ..."])',
          'POST con form data cURL → CURLOPT_POSTFIELDS http_build_query($data)',
          'GET con basic auth → curl_setopt($ch, CURLOPT_USERPWD, "user:pass")',
          'POST con upload file → CURLOPT_POSTFIELDS con CURLFile($path)',
          'GET Guzzle básico → $client = new GuzzleHttp\\Client(); $r = $client->get($url);',
          'POST Guzzle con JSON → $client->post($url, ["json" => $data])',
          'PUT Guzzle async → $promise = $client->putAsync($url, [...]); $promise->wait();',
          'DELETE Guzzle con auth → $client->delete($url, ["auth" => [user, pass]])',
          'GET Guzzle con base_uri → new Client(["base_uri" => "https://api.example.com"])',
          'POST Guzzle multipart → $client->post($url, ["multipart" => [["name" => "file", "contents" => $stream]]])',
          'GET con file_get_contents simple → file_get_contents($url) (solo GET sin headers)',
          'POST file_get_contents con context → stream_context_create con http opts',
          'GET cURL con SSL verify off (dev only) → CURLOPT_SSL_VERIFYPEER false',
          'POST cURL con redirección automática → CURLOPT_FOLLOWLOCATION true',
          'GET con proxy cURL → CURLOPT_PROXY "http://proxy:8080"',
          'POST con timeout cURL → CURLOPT_TIMEOUT 30 + CURLOPT_CONNECTTIMEOUT 10',
          'GET con cookies cURL → CURLOPT_COOKIEFILE y CURLOPT_COOKIEJAR para persistencia',
          'POST con OAuth Guzzle → middleware de oauth-subscriber',
          'GET con retry Guzzle → middleware Guzzle\\Retry con strategy custom',
          'POST con response streaming Guzzle → ["stream" => true]; getBody()->read(1024)',
          'GET WebSocket con Ratchet → WebSocket\\Client connect to wss://...',
          'POST GraphQL con Guzzle → ["json" => ["query" => $gqlQuery, "variables" => $vars]]',
          'GET con HTTP/2 cURL → CURLOPT_HTTP_VERSION CURL_HTTP_VERSION_2_0',
          'POST con compresión Guzzle → ["headers" => ["Accept-Encoding" => "gzip"]]',
          'GET con caché de respuesta (Symfony HttpClient) → componente con CacheDecorator',
          'POST con retries y exponential backoff (Symfony) → RetryableHttpClient'
        ]
      },
      {
        id: 'other',
        label: 'Ruby, Go, Rust, Java, C#',
        items: [
          'Ruby Net::HTTP GET → require "net/http"; Net::HTTP.get(URI(url))',
          'Ruby Net::HTTP POST con JSON → req = Net::HTTP::Post.new(uri); req.body = data.to_json',
          'Ruby HTTParty GET → HTTParty.get("https://api.example.com/users")',
          'Ruby HTTParty con auth → HTTParty.get(url, basic_auth: {username: u, password: p})',
          'Ruby Faraday con middleware → Faraday.new(url) {|f| f.request :json; f.adapter :net_http}',
          'Go net/http GET → resp, err := http.Get("https://api.example.com/users")',
          'Go net/http POST con JSON → http.Post(url, "application/json", bytes.NewBuffer(jsonBytes))',
          'Go con custom client → client := &http.Client{Timeout: 10*time.Second}; client.Do(req)',
          'Go con request headers → req, _ := http.NewRequest("GET", url, nil); req.Header.Add(...)',
          'Go con context cancellation → req.WithContext(ctx) para deadline',
          'Rust reqwest GET (sync) → reqwest::blocking::get(url)?.text()?',
          'Rust reqwest async GET → reqwest::get(url).await?.text().await?',
          'Rust reqwest POST con JSON → client.post(url).json(&data).send().await?',
          'Rust reqwest con headers → client.get(url).header("Authorization", "Bearer ...").send()',
          'Rust con tower middleware → tower-http para retry, timeout, trace',
          'Java HttpClient GET (Java 11+) → HttpClient.newHttpClient().send(request, BodyHandlers.ofString())',
          'Java HttpClient async → client.sendAsync(req, BodyHandlers.ofString())',
          'Java OkHttp GET → Request req = new Request.Builder().url(url).build(); client.newCall(req).execute()',
          'Java OkHttp POST con JSON → RequestBody body = RequestBody.create(json, MediaType.parse("application/json"))',
          'Java RestTemplate (Spring) → restTemplate.getForObject(url, String.class)',
          'C# HttpClient GET → using var client = new HttpClient(); var r = await client.GetStringAsync(url)',
          'C# HttpClient POST con JSON → var content = new StringContent(json, Encoding.UTF8, "application/json")',
          'C# HttpClient con headers → client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}")',
          'C# RestSharp → var client = new RestClient(); var req = new RestRequest(url); client.Execute(req)',
          'C# Refit (typed client) → interfaz IApiClient con atributos [Get("/users")] y Refit.For<IApiClient>(url)',
          'Kotlin OkHttp → OkHttpClient().newCall(Request.Builder().url(url).build()).execute()',
          'Swift URLSession GET → URLSession.shared.dataTask(with: url) { data, response, error in ... }',
          'Swift Alamofire → AF.request(url).responseJSON { response in ... }',
          'Dart http package → import "package:http/http.dart" as http; final r = await http.get(Uri.parse(url))',
          'Elixir HTTPoison → HTTPoison.get!("https://api.example.com/users")'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Por qué convertir cURL a código en vez de copiar texto',
        body: '<p>El comando cURL es perfecto para probar APIs en terminal o documentar requests, pero cuando llega el momento de meterlo en código, hay que adaptar muchas cosas: headers, JSON escapado, autenticación, manejo de errores, retries. Hacer esa conversión a mano es tedioso y propenso a typos. Una conversión automática preserva exactamente la semántica del cURL pero en idiomas del lenguaje destino.</p><p>El caso típico es <strong>copiar como cURL desde DevTools de Chrome</strong>. Click derecho en una request del Network tab → Copy → Copy as cURL. Eso te da el comando exacto que el navegador hizo, incluyendo cookies, headers, body, todo. Después necesitás meter eso en tu backend Python o Node. Sin herramienta, se hace manual; con herramienta, lo pegás y obtenés código equivalente listo para uso.</p><p><em>Postman</em>, <em>Insomnia</em> y <em>Bruno</em> tienen esta funcionalidad incorporada: importás cURL y exportás en el lenguaje que necesites. <em>curl-converter</em> de la comunidad open source mantiene un sitio web gratuito que hace la conversión sin instalar nada. Para devs que pivotean entre lenguajes (Python para data, Node para backend, PHP para legacy), la conversión rápida ahorra horas semanales.</p>'
      },
      {
        h2: 'Diferencias entre lenguajes que importan al convertir',
        body: '<p>El primer problema es <strong>JSON escaping</strong>. En cURL podés mandar <code>-d \'{"name": "Juan"}\'</code> entre comillas simples sin escapar. En Python con requests, usás <code>json={"name": "Juan"}</code> y la librería se encarga. En PHP con cURL nativo necesitás <code>json_encode($array)</code>. En Java HttpClient, requiere construir BodyPublishers.ofString(). Cada lenguaje tiene su forma idiomática que la conversión automática debería respetar, no copiar literal el formato cURL.</p><p>El segundo problema es <strong>autenticación</strong>. cURL acepta <code>-u user:pass</code> para basic auth, <code>-H "Authorization: Bearer xyz"</code> para tokens, <code>--cert</code> para mTLS. Python requests tiene <code>auth=("u","p")</code>, headers dict, y <code>cert=("file.crt","file.key")</code>. JavaScript fetch no tiene auth helper, todo va por headers manualmente. Una buena conversión usa el método más idiomático del lenguaje destino, no la traducción literal del flag cURL.</p><p>El tercer problema es <strong>manejo de errores</strong>. cURL devuelve exit code y status HTTP por separado. Python requests lanza excepción con <code>raise_for_status()</code>. Go requiere chequear <code>err</code> en cada step. Rust devuelve <code>Result&lt;T, E&gt;</code> que obliga a manejar. Una conversión completa debería incluir el patrón idiomático de error handling, no solo la request happy path. <em>Stripe</em>, <em>Twilio</em> y otros API providers documentan ejemplos en cada lenguaje incluyendo error handling.</p>'
      },
      {
        h2: 'Errores comunes al convertir cURL manualmente',
        body: '<p>Error #1: <strong>olvidar que -d implica POST automáticamente en cURL</strong>. <code>curl -d \'data\' https://...</code> hace POST aunque no especifiques <code>-X POST</code>. En Python, si solo tradujiste el body sin método, hace GET por default. Resultado: la request se manda diferente y el server responde con error.</p><p>Error #2: <strong>perder configuración SSL</strong>. cURL tiene <code>-k</code> o <code>--insecure</code> que ignora verificación SSL (peligroso pero útil en dev). Python: <code>verify=False</code>. Node fetch: <code>NODE_TLS_REJECT_UNAUTHORIZED=0</code> en env (más invasivo). Olvidar este flag al convertir hace que la request falle en producción con cert chain válido pero pase en localhost.</p><p>Error #3: <strong>headers con valores complejos</strong>. cURL acepta <code>-H "Authorization: Basic $(echo -n user:pass | base64)"</code> con shell expansion. Al convertir, hay que ejecutar el base64 antes y poner el valor estático, o usar la librería de auth del lenguaje. Si copiás literalmente, el lenguaje destino no expande shell y manda el string crudo, fallando auth.</p>'
      },
      {
        h2: 'Casos de uso avanzados y herramientas profesionales',
        body: '<p>Para flujos de trabajo intensivos en API, conviene combinar herramientas. <strong>HTTPie</strong> es una alternativa a cURL con sintaxis más limpia. <strong>Postman</strong> permite colecciones versionadas con tests automatizados. <strong>Bruno</strong> almacena requests en archivos de texto plano (versionables en git) sin requerir cuenta cloud. <strong>Httpie\'s pie</strong> incluso convierte directo a Python desde su CLI.</p><p>Para integraciones serias, los proveedores de API publican <strong>SDKs oficiales</strong>. <em>Stripe</em>, <em>Twilio</em>, <em>SendGrid</em>, <em>OpenAI</em> tienen libraries en 6+ lenguajes que envuelven sus APIs con tipado, retry automático, idempotency keys y error handling estándar. Si vas a usar mucho una API, descartar el cURL y adoptar el SDK ahorra trabajo a largo plazo. La conversión de cURL es ideal para exploración inicial y casos one-off.</p><p>Para testing y CI/CD, considera convertir tu cURL a <strong>tests automatizados</strong>. <em>Karate</em> (Java), <em>Hurl</em> (Rust), <em>Postman tests</em> y <em>Bruno tests</em> permiten escribir suites de API tests legibles. Un cURL de exploración se vuelve test que corre en CI cada commit. Esa promoción de "comando ad-hoc" a "test versionado" mejora drásticamente la confiabilidad de tus integraciones. <em>Stripe</em>, <em>Vercel</em> y <em>GitHub</em> usan estos patrones internamente.</p>'
      }
    ],
    faq: [
      {
        q: '¿Puedo convertir cualquier cURL automáticamente?',
        a: 'Casi cualquiera. Los flags básicos (-X, -H, -d, -u, --cert, -k) tienen equivalentes claros. Casos edge como <code>--data-urlencode</code>, <code>--form-string</code> con archivos binarios, o shell expansions con <code>$()</code> requieren ajuste manual. Verificá siempre el código generado antes de meter en producción.'
      },
      {
        q: '¿Qué lenguaje es mejor para HTTP requests?',
        a: 'Depende del contexto. Python requests es el más legible y rápido para scripts. Go es ideal para alta concurrencia y servicios. Node.js fetch es estándar para frontend y backend JavaScript. Rust reqwest da máxima performance. Para integraciones empresariales con typing fuerte, Java o C# con clientes generados desde OpenAPI son robustos.'
      },
      {
        q: '¿Cómo manejo autenticación OAuth en la conversión?',
        a: 'OAuth requiere flow específico (authorization code, client credentials, etc.) que cURL no captura completo. Convertí solo el final request y agregá el flow OAuth con la librería del lenguaje: <em>oauthlib</em> en Python, <em>simple-oauth2</em> en Node, <em>oauth-subscriber</em> en PHP/Guzzle. Hardcodear tokens funciona para testing pero no para producción.'
      },
      {
        q: '¿La conversión preserva performance del cURL original?',
        a: 'No siempre. cURL en C nativo es muy eficiente. Python requests añade overhead pero es despreciable para uso normal. Para alta throughput, usá librerías async (httpx en Python, axios + Promise.all en Node, goroutines en Go). El bottleneck suele ser la red, no el lenguaje, salvo en aplicaciones de millones de requests por segundo.'
      }
    ]
  },
  en: {
    pageTitle: 'cURL to Code Generator | Genfy',
    metaDesc: 'Convert cURL commands to Python (requests, httpx), JavaScript (fetch, axios), PHP, Ruby, Go and Rust code. HTTP requests ready for production code.',
    h1: 'cURL to Code Generator',
    intro: 'Translate cURL commands to your favorite language in seconds. For devs tired of manually copying and adapting requests between Postman, terminal and production.',
    tag: 'Code conversion',
    filterLabel: 'Language',
    countLabel: 'Amount',
    generateLabel: 'Generate conversions',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'python',
        label: 'Python (requests, httpx, urllib)',
        items: [
          'Simple GET → import requests; r = requests.get("https://api.example.com/users")',
          'GET with query params → requests.get("...", params={"page": 1, "limit": 20})',
          'POST with JSON → requests.post("...", json={"name": "test"})',
          'POST with form data → requests.post("...", data={"key": "value"})',
          'PUT with Bearer auth → requests.put("...", headers={"Authorization": f"Bearer {token}"}, json=data)',
          'DELETE with timeout → requests.delete("...", timeout=10)',
          'GET with basic auth → requests.get("...", auth=("user", "pass"))',
          'POST multipart file → requests.post("...", files={"file": open("doc.pdf", "rb")})',
          'GET with custom headers → requests.get("...", headers={"X-API-Key": "abc"})',
          'GET with cookies → requests.get("...", cookies={"session": "xyz"})',
          'POST with SSL verify off → requests.post("...", verify=False)',
          'GET with proxy → requests.get("...", proxies={"https": "http://proxy:8080"})',
          'GET with custom user-agent → requests.get("...", headers={"User-Agent": "MyBot/1.0"})',
          'POST with retry (urllib3) → session with HTTPAdapter and Retry strategy',
          'Async GET with httpx → import httpx; async with httpx.AsyncClient() as c: await c.get(url)',
          'Async POST batch httpx → asyncio.gather of multiple concurrent requests',
          'GET streaming response → requests.get("...", stream=True); for chunk in r.iter_content()',
          'POST with reusable session → s = requests.Session(); s.post(...)',
          'GET with manual redirect → requests.get("...", allow_redirects=False)',
          'POST with XML body → requests.post("...", data=xml_str, headers={"Content-Type": "application/xml"})',
          'GET with digest auth → requests.get("...", auth=HTTPDigestAuth(user, pass))',
          'POST with OAuth1 → requests.post("...", auth=OAuth1(key, secret))',
          'HTTP/2 GET with httpx → httpx.Client(http2=True).get(url)',
          'GraphQL POST → requests.post("...", json={"query": "{ user { name } }"})',
          'GET with cache (requests-cache) → requests_cache.install_cache(); requests.get(...)',
          'PATCH with JSON merge patch → requests.patch("...", json=patch, headers={"Content-Type": "application/merge-patch+json"})',
          'POST signed request (HMAC) → calculate signature and add to headers',
          'GET with server-sent events → for event in client.events(): handle(event)',
          'POST WebDAV → requests.request("PROPFIND", "...", data=xml)',
          'GET with certificate auth (mTLS) → requests.get("...", cert=("client.crt", "client.key"))'
        ]
      },
      {
        id: 'javascript',
        label: 'JavaScript (fetch, axios, node-fetch)',
        items: [
          'Basic fetch GET → fetch("https://api.example.com/users").then(r => r.json())',
          'POST fetch with JSON → fetch(url, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) })',
          'Basic axios GET → axios.get("https://api.example.com/users")',
          'POST axios with headers → axios.post(url, data, { headers: { Authorization: `Bearer ${token}` } })',
          'PUT axios with interceptors → axios.interceptors.request.use(config => {...}); axios.put(url, data)',
          'DELETE fetch with AbortController → controller = new AbortController(); fetch(url, { signal: controller.signal })',
          'GET fetch with query params (URLSearchParams) → fetch(`${url}?${new URLSearchParams({page: 1})}`)',
          'POST fetch with FormData → fetch(url, { method: "POST", body: formData })',
          'GET fetch with credentials (cookies) → fetch(url, { credentials: "include" })',
          'POST fetch with multipart file upload → const form = new FormData(); form.append("file", file)',
          'GET fetch with timeout (AbortSignal) → AbortSignal.timeout(5000)',
          'POST axios with Bearer + retry → axios-retry plugin with exponential backoff config',
          'Async/await fetch → async function() { const r = await fetch(url); return r.json(); }',
          'POST with node-fetch CommonJS → const fetch = require("node-fetch"); await fetch(url, options)',
          'GET with axios baseURL → const api = axios.create({baseURL: "https://api.example.com"})',
          'GraphQL POST with fetch → fetch(url, { method: "POST", body: JSON.stringify({query, variables}) })',
          'GET fetch with CORS preflight → request with custom header triggers automatic OPTIONS',
          'POST fetch with stream upload → fetch(url, { method: "POST", body: readableStream, duplex: "half" })',
          'GET fetch SSE (server-sent events) → const evt = new EventSource(url); evt.onmessage = ...',
          'POST with websocket upgrade → new WebSocket("wss://api.example.com/socket")',
          'GET with axios cancel token (legacy) → CancelToken.source(); axios.get(url, {cancelToken})',
          'POST fetch with custom redirect → fetch(url, { redirect: "manual" })',
          'GET fetch with cache control → fetch(url, { cache: "no-store" })',
          'POST with response streaming (chunk reading) → for await (chunk of response.body) { ... }',
          'GET fetch with priority hint → fetch(url, { priority: "high" })',
          'POST axios with upload progress → axios.post(url, data, { onUploadProgress: e => ... })',
          'GET fetch in Cloudflare Workers → fetch follows same API in edge runtime',
          'POST fetch with keepalive (send on unload) → fetch(url, { method: "POST", keepalive: true, body })',
          'GET fetch with referrer policy → fetch(url, { referrerPolicy: "no-referrer" })',
          'POST with axios mock adapter for testing → MockAdapter on axios instance'
        ]
      },
      {
        id: 'php',
        label: 'PHP (cURL, Guzzle, file_get_contents)',
        items: [
          'Basic PHP cURL GET → $ch = curl_init($url); curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); curl_exec($ch);',
          'POST cURL with JSON → curl_setopt_array with CURLOPT_POSTFIELDS json_encode($data)',
          'PUT cURL → curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");',
          'DELETE cURL → curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");',
          'GET with cURL headers → curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer ..."])',
          'POST with form data cURL → CURLOPT_POSTFIELDS http_build_query($data)',
          'GET with basic auth → curl_setopt($ch, CURLOPT_USERPWD, "user:pass")',
          'POST with file upload → CURLOPT_POSTFIELDS with CURLFile($path)',
          'Basic Guzzle GET → $client = new GuzzleHttp\\Client(); $r = $client->get($url);',
          'POST Guzzle with JSON → $client->post($url, ["json" => $data])',
          'PUT Guzzle async → $promise = $client->putAsync($url, [...]); $promise->wait();',
          'DELETE Guzzle with auth → $client->delete($url, ["auth" => [user, pass]])',
          'GET Guzzle with base_uri → new Client(["base_uri" => "https://api.example.com"])',
          'POST Guzzle multipart → $client->post($url, ["multipart" => [["name" => "file", "contents" => $stream]]])',
          'Simple file_get_contents GET → file_get_contents($url) (only GET without headers)',
          'POST file_get_contents with context → stream_context_create with http opts',
          'cURL GET with SSL verify off (dev only) → CURLOPT_SSL_VERIFYPEER false',
          'POST cURL with auto redirect → CURLOPT_FOLLOWLOCATION true',
          'GET with cURL proxy → CURLOPT_PROXY "http://proxy:8080"',
          'POST cURL with timeout → CURLOPT_TIMEOUT 30 + CURLOPT_CONNECTTIMEOUT 10',
          'GET with cURL cookies → CURLOPT_COOKIEFILE and CURLOPT_COOKIEJAR for persistence',
          'POST with OAuth Guzzle → oauth-subscriber middleware',
          'GET with Guzzle retry → Guzzle\\Retry middleware with custom strategy',
          'POST with Guzzle response streaming → ["stream" => true]; getBody()->read(1024)',
          'WebSocket GET with Ratchet → WebSocket\\Client connect to wss://...',
          'GraphQL POST with Guzzle → ["json" => ["query" => $gqlQuery, "variables" => $vars]]',
          'GET with HTTP/2 cURL → CURLOPT_HTTP_VERSION CURL_HTTP_VERSION_2_0',
          'POST with Guzzle compression → ["headers" => ["Accept-Encoding" => "gzip"]]',
          'GET with response cache (Symfony HttpClient) → component with CacheDecorator',
          'POST with retries and exponential backoff (Symfony) → RetryableHttpClient'
        ]
      },
      {
        id: 'other',
        label: 'Ruby, Go, Rust, Java, C#',
        items: [
          'Ruby Net::HTTP GET → require "net/http"; Net::HTTP.get(URI(url))',
          'Ruby Net::HTTP POST with JSON → req = Net::HTTP::Post.new(uri); req.body = data.to_json',
          'Ruby HTTParty GET → HTTParty.get("https://api.example.com/users")',
          'Ruby HTTParty with auth → HTTParty.get(url, basic_auth: {username: u, password: p})',
          'Ruby Faraday with middleware → Faraday.new(url) {|f| f.request :json; f.adapter :net_http}',
          'Go net/http GET → resp, err := http.Get("https://api.example.com/users")',
          'Go net/http POST with JSON → http.Post(url, "application/json", bytes.NewBuffer(jsonBytes))',
          'Go with custom client → client := &http.Client{Timeout: 10*time.Second}; client.Do(req)',
          'Go with request headers → req, _ := http.NewRequest("GET", url, nil); req.Header.Add(...)',
          'Go with context cancellation → req.WithContext(ctx) for deadline',
          'Rust reqwest GET (sync) → reqwest::blocking::get(url)?.text()?',
          'Rust reqwest async GET → reqwest::get(url).await?.text().await?',
          'Rust reqwest POST with JSON → client.post(url).json(&data).send().await?',
          'Rust reqwest with headers → client.get(url).header("Authorization", "Bearer ...").send()',
          'Rust with tower middleware → tower-http for retry, timeout, trace',
          'Java HttpClient GET (Java 11+) → HttpClient.newHttpClient().send(request, BodyHandlers.ofString())',
          'Java HttpClient async → client.sendAsync(req, BodyHandlers.ofString())',
          'Java OkHttp GET → Request req = new Request.Builder().url(url).build(); client.newCall(req).execute()',
          'Java OkHttp POST with JSON → RequestBody body = RequestBody.create(json, MediaType.parse("application/json"))',
          'Java RestTemplate (Spring) → restTemplate.getForObject(url, String.class)',
          'C# HttpClient GET → using var client = new HttpClient(); var r = await client.GetStringAsync(url)',
          'C# HttpClient POST with JSON → var content = new StringContent(json, Encoding.UTF8, "application/json")',
          'C# HttpClient with headers → client.DefaultRequestHeaders.Add("Authorization", $"Bearer {token}")',
          'C# RestSharp → var client = new RestClient(); var req = new RestRequest(url); client.Execute(req)',
          'C# Refit (typed client) → IApiClient interface with [Get("/users")] attributes and Refit.For<IApiClient>(url)',
          'Kotlin OkHttp → OkHttpClient().newCall(Request.Builder().url(url).build()).execute()',
          'Swift URLSession GET → URLSession.shared.dataTask(with: url) { data, response, error in ... }',
          'Swift Alamofire → AF.request(url).responseJSON { response in ... }',
          'Dart http package → import "package:http/http.dart" as http; final r = await http.get(Uri.parse(url))',
          'Elixir HTTPoison → HTTPoison.get!("https://api.example.com/users")'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Why convert cURL to code instead of copying text',
        body: '<p>The cURL command is perfect for testing APIs in terminal or documenting requests, but when it comes time to put it in code, many things need adapting: headers, escaped JSON, authentication, error handling, retries. Doing that conversion by hand is tedious and typo-prone. Automatic conversion preserves cURL semantics exactly but in idiomatic target language.</p><p>Typical case is <strong>copy as cURL from Chrome DevTools</strong>. Right-click on a request in Network tab → Copy → Copy as cURL. That gives you exact command browser made, including cookies, headers, body, everything. Then you need to put that in your Python or Node backend. Without tool, manual; with tool, paste and get equivalent code ready to use.</p><p><em>Postman</em>, <em>Insomnia</em> and <em>Bruno</em> have this functionality built-in: import cURL and export in needed language. <em>curl-converter</em> from open-source community maintains a free website doing conversion without installing anything. For devs pivoting between languages (Python for data, Node for backend, PHP for legacy), quick conversion saves weekly hours.</p>'
      },
      {
        h2: 'Differences between languages that matter when converting',
        body: '<p>First problem is <strong>JSON escaping</strong>. In cURL you can send <code>-d \'{"name": "John"}\'</code> in single quotes without escaping. In Python with requests, use <code>json={"name": "John"}</code> and library handles it. In native PHP cURL you need <code>json_encode($array)</code>. In Java HttpClient, requires building BodyPublishers.ofString(). Each language has its idiomatic way that automatic conversion should respect, not literal copy of cURL format.</p><p>Second problem is <strong>authentication</strong>. cURL accepts <code>-u user:pass</code> for basic auth, <code>-H "Authorization: Bearer xyz"</code> for tokens, <code>--cert</code> for mTLS. Python requests has <code>auth=("u","p")</code>, headers dict, and <code>cert=("file.crt","file.key")</code>. JavaScript fetch has no auth helper, all goes through headers manually. A good conversion uses most idiomatic method of target language, not literal translation of cURL flag.</p><p>Third problem is <strong>error handling</strong>. cURL returns exit code and HTTP status separately. Python requests throws exception with <code>raise_for_status()</code>. Go requires checking <code>err</code> at each step. Rust returns <code>Result&lt;T, E&gt;</code> forcing handling. A complete conversion should include idiomatic error handling pattern, not just happy path request. <em>Stripe</em>, <em>Twilio</em> and other API providers document examples in each language including error handling.</p>'
      },
      {
        h2: 'Common mistakes when converting cURL manually',
        body: '<p>Mistake #1: <strong>forgetting that -d implies POST automatically in cURL</strong>. <code>curl -d \'data\' https://...</code> does POST even without specifying <code>-X POST</code>. In Python, if you only translated body without method, defaults to GET. Result: request sent differently and server responds with error.</p><p>Mistake #2: <strong>losing SSL configuration</strong>. cURL has <code>-k</code> or <code>--insecure</code> ignoring SSL verification (dangerous but useful in dev). Python: <code>verify=False</code>. Node fetch: <code>NODE_TLS_REJECT_UNAUTHORIZED=0</code> in env (more invasive). Forgetting this flag when converting makes request fail in production with valid cert chain but pass on localhost.</p><p>Mistake #3: <strong>headers with complex values</strong>. cURL accepts <code>-H "Authorization: Basic $(echo -n user:pass | base64)"</code> with shell expansion. When converting, you must execute base64 first and put static value, or use language\'s auth library. If you copy literally, target language doesn\'t expand shell and sends raw string, failing auth.</p>'
      },
      {
        h2: 'Advanced use cases and professional tools',
        body: '<p>For API-intensive workflows, combine tools. <strong>HTTPie</strong> is alternative to cURL with cleaner syntax. <strong>Postman</strong> allows versioned collections with automated tests. <strong>Bruno</strong> stores requests in plain text files (versionable in git) without requiring cloud account. <strong>Httpie\'s pie</strong> even converts directly to Python from its CLI.</p><p>For serious integrations, API providers publish <strong>official SDKs</strong>. <em>Stripe</em>, <em>Twilio</em>, <em>SendGrid</em>, <em>OpenAI</em> have libraries in 6+ languages wrapping their APIs with typing, automatic retry, idempotency keys and standard error handling. If you\'re going to use an API a lot, dropping cURL and adopting SDK saves long-term work. cURL conversion is ideal for initial exploration and one-off cases.</p><p>For testing and CI/CD, consider converting your cURL to <strong>automated tests</strong>. <em>Karate</em> (Java), <em>Hurl</em> (Rust), <em>Postman tests</em> and <em>Bruno tests</em> allow writing readable API test suites. An exploration cURL becomes a test running in CI on every commit. That promotion from "ad-hoc command" to "versioned test" drastically improves integration reliability. <em>Stripe</em>, <em>Vercel</em> and <em>GitHub</em> use these patterns internally.</p>'
      }
    ],
    faq: [
      {
        q: 'Can I automatically convert any cURL?',
        a: 'Almost any. Basic flags (-X, -H, -d, -u, --cert, -k) have clear equivalents. Edge cases like <code>--data-urlencode</code>, <code>--form-string</code> with binary files, or shell expansions with <code>$()</code> require manual adjustment. Always verify generated code before putting in production.'
      },
      {
        q: 'Which language is best for HTTP requests?',
        a: 'Depends on context. Python requests is most readable and quick for scripts. Go is ideal for high concurrency and services. Node.js fetch is standard for frontend and JavaScript backend. Rust reqwest gives maximum performance. For enterprise integrations with strong typing, Java or C# with OpenAPI-generated clients are robust.'
      },
      {
        q: 'How do I handle OAuth authentication in conversion?',
        a: 'OAuth requires specific flow (authorization code, client credentials, etc.) that cURL doesn\'t fully capture. Convert only the final request and add OAuth flow with language library: <em>oauthlib</em> in Python, <em>simple-oauth2</em> in Node, <em>oauth-subscriber</em> in PHP/Guzzle. Hardcoding tokens works for testing but not production.'
      },
      {
        q: 'Does conversion preserve original cURL performance?',
        a: 'Not always. Native C cURL is very efficient. Python requests adds overhead but negligible for normal use. For high throughput, use async libraries (httpx in Python, axios + Promise.all in Node, goroutines in Go). Bottleneck is usually network, not language, except in apps with millions of requests per second.'
      }
    ]
  }
};
