// Synonyms / aliases for fuzzy search on /generadores y /en/generators.
// Each entry: when user types `key`, expand the search with `expansions` joined.

export const SYNONYMS_ES: Record<string, string[]> = {
  passw: ['contraseñas', 'password'],
  password: ['contraseñas'],
  logo: ['favicon'],
  pwd: ['contraseñas'],
  api: ['api key', 'token'],
  uid: ['uuid', 'id'],
  rgb: ['color', 'paleta'],
  hex: ['color'],
  emoji: ['emoticono'],
  ia: ['inteligencia artificial', 'ai', 'chatgpt', 'prompt'],
  ai: ['ia', 'chatgpt', 'prompt'],
  qa: ['testing', 'mock', 'fake', 'datos'],
  test: ['testing', 'mock', 'fake'],
  fake: ['falso', 'mock', 'testing'],
  perro: ['can', 'cachorro'],
  gato: ['felino'],
  bebe: ['bebé', 'recién nacido'],
  startup: ['empresa', 'negocio'],
  marca: ['empresa', 'branding'],
  nombre: ['naming'],
  contraseña: ['password', 'pwd'],
  texto: ['lorem', 'frase', 'oración'],
  email: ['correo', 'mail'],
  cv: ['curriculum', 'currículum'],
  carta: ['letter'],
  ip: ['ipv4', 'ipv6'],
  json: ['javascript object', 'mock'],
  yaml: ['yml'],
  csv: ['excel', 'tabla'],
  sql: ['base de datos', 'consulta'],
  regex: ['expresión regular'],
  chiste: ['humor', 'gracia'],
  insulto: ['ofensa'],
  amor: ['romántico', 'pareja'],
  fantasia: ['fantasy', 'rpg'],
  rpg: ['fantasía', 'd&d', 'dnd'],
  dnd: ['d&d', 'rpg', 'fantasía'],
  fitness: ['ejercicio', 'gym', 'gimnasio'],
  receta: ['cocina', 'comida'],
  ingles: ['english'],
  espanol: ['español', 'castellano'],
};

export const SYNONYMS_EN: Record<string, string[]> = {
  passw: ['password'],
  pwd: ['password'],
  logo: ['favicon'],
  uid: ['uuid', 'id'],
  rgb: ['color', 'palette'],
  hex: ['color'],
  ai: ['artificial intelligence', 'chatgpt', 'prompt'],
  ia: ['ai'],
  qa: ['testing', 'mock', 'fake', 'data'],
  test: ['testing', 'mock', 'fake'],
  fake: ['mock', 'testing', 'sample'],
  cat: ['feline', 'kitten'],
  dog: ['puppy', 'canine'],
  baby: ['newborn', 'infant'],
  startup: ['business', 'company'],
  brand: ['business', 'branding'],
  name: ['naming'],
  email: ['mail'],
  cv: ['resume', 'curriculum'],
  letter: ['cover'],
  ip: ['ipv4', 'ipv6'],
  json: ['mock'],
  yaml: ['yml'],
  csv: ['excel', 'table'],
  sql: ['database', 'query'],
  regex: ['regular expression'],
  joke: ['humor', 'funny'],
  insult: ['offense'],
  love: ['romantic', 'couple'],
  fantasy: ['rpg'],
  rpg: ['fantasy', 'd&d', 'dnd'],
  dnd: ['d&d', 'rpg'],
  fitness: ['exercise', 'gym', 'workout'],
  recipe: ['cooking', 'food'],
  spanish: ['español', 'castellano'],
  english: ['inglés'],
};

export function expandQuery(q: string, lang: 'es' | 'en'): string {
  const normalized = q.toLowerCase().trim();
  if (!normalized) return '';
  const map = lang === 'es' ? SYNONYMS_ES : SYNONYMS_EN;
  const expansions: string[] = [normalized];
  for (const [key, vals] of Object.entries(map)) {
    if (normalized.includes(key)) expansions.push(...vals);
  }
  return [...new Set(expansions)].join(' ');
}
