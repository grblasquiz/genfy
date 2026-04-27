import type { GeneratorMeta } from './generators';

export type HubCopy = {
  es: { intro: string; whyMatters: string; pickingTips: string[]; whenToUse: string[] };
  en: { intro: string; whyMatters: string; pickingTips: string[]; whenToUse: string[] };
};

export const HUB_COPY: Record<GeneratorMeta['category'], HubCopy> = {
  security: {
    es: {
      intro: 'Generadores que cubren los activos sensibles de cualquier producto: contraseñas fuertes, llaves de API, hashes, tokens y firmas. Todos corren en el navegador, ningún dato sale de tu equipo.',
      whyMatters: 'La diferencia entre un sistema seguro y uno comprometido suele estar en lo que se genera al lado del editor de código: contraseñas reusadas, llaves predecibles, hashes débiles. Estas herramientas eliminan esa fricción.',
      pickingTips: ['Para credenciales que humanos van a ver, usá generadores con buen balance de longitud y entropía.', 'Para llaves que solo lee software, prioritá entropía pura (256 bits o más).', 'Para passwords que se almacenan en bases de datos, hashealas con Bcrypt y salt.'],
      whenToUse: ['Onboarding de un nuevo entorno o cuenta administrativa.', 'Rotación periódica de credenciales en CI/CD.', 'Auditorías donde necesitás regenerar todo desde cero.'],
    },
    en: {
      intro: 'Generators covering the sensitive surface of any product: strong passwords, API keys, hashes, tokens and signatures. All run in the browser; no data leaves your machine.',
      whyMatters: 'The gap between a secure system and a compromised one usually lives in what gets generated next to the code editor: reused passwords, guessable keys, weak hashes. These tools remove that friction.',
      pickingTips: ['For credentials humans will see, pick generators that balance length and entropy.', 'For keys only software reads, prioritize raw entropy (256 bits or more).', 'For passwords stored in databases, hash them with Bcrypt and salt.'],
      whenToUse: ['Onboarding a new environment or admin account.', 'Periodic credential rotation in CI/CD.', 'Audits where you need to regenerate everything from scratch.'],
    },
  },
  business: {
    es: {
      intro: 'Naming, branding y mensajes que se usan a diario al lanzar un negocio. Pensados para iterar rápido sin caer en clichés.',
      whyMatters: 'Un nombre malo cuesta credibilidad incluso si el producto es bueno. Los generadores no reemplazan el criterio, pero te dan 50 alternativas en 30 segundos para descartar el 80% y quedarte con la mejor.',
      pickingTips: ['No te quedes con la primera idea: generá 30 y elegí la menos obvia que aún funcione.', 'Validá disponibilidad de dominio (.com) y handle de Instagram antes de comprometerte.', 'Probá decir el nombre en voz alta a tres personas distintas.'],
      whenToUse: ['Brainstorming de naming en la fase de pitch.', 'Encontrar variantes de slogans para A/B testing.', 'Llenar campos repetitivos en propuestas de venta o landing pages.'],
    },
    en: {
      intro: 'Naming, branding and messaging used daily when launching a business. Built to iterate fast without falling into clichés.',
      whyMatters: 'A bad name costs credibility even if the product is good. Generators do not replace judgment, but they hand you 50 alternatives in 30 seconds so you can drop 80% and keep the best.',
      pickingTips: ['Do not settle on the first idea: generate 30 and pick the least obvious that still works.', 'Check domain availability (.com) and Instagram handle before committing.', 'Try saying the name aloud to three different people.'],
      whenToUse: ['Brainstorming names in the pitch phase.', 'Finding slogan variants for A/B testing.', 'Filling repetitive fields in sales proposals or landing pages.'],
    },
  },
  content: {
    es: {
      intro: 'Bloques de texto, prompts y plantillas para escritura creativa, técnica y de marca. Cada generador tiene una intención distinta, no un montón de palabras al azar.',
      whyMatters: 'La página en blanco mata más proyectos que la falta de tiempo. Un prompt o un primer borrador rompe el bloqueo y te deja editar en vez de escribir desde cero.',
      pickingTips: ['Generá varios y combiná lo mejor de cada uno.', 'Usá los textos como punto de partida, no como producto final.', 'Si el tono no encaja, cambiá las keywords del input.'],
      whenToUse: ['Brainstorming de hooks y aperturas.', 'Llenar maquetas con texto específico al rubro.', 'Inspiración cuando estás trabado.'],
    },
    en: {
      intro: 'Text blocks, prompts and templates for creative, technical and brand writing. Each generator has a distinct intent, not random word soup.',
      whyMatters: 'A blank page kills more projects than lack of time. A prompt or first draft breaks the block and lets you edit instead of writing from scratch.',
      pickingTips: ['Generate several and combine the best of each.', 'Use the text as a starting point, not the final product.', 'If the tone is off, change the input keywords.'],
      whenToUse: ['Brainstorming hooks and openers.', 'Filling mockups with industry-specific copy.', 'Inspiration when you are stuck.'],
    },
  },
  fun: {
    es: {
      intro: 'Generadores para juegos, ratos libres, fiestas y aulas. Bajos en utilidad práctica, altos en disfrute.',
      whyMatters: 'A veces lo que necesitás es un trabalenguas para una clase, un dilema para una cena o un nombre absurdo para un personaje. Estas herramientas resuelven eso sin abrir veinte pestañas.',
      pickingTips: ['Para grupos chicos, generá uno por persona.', 'Filtrá por tono según el público (familiar, amigos, niños).', 'Mezclá categorías para sesiones más largas.'],
      whenToUse: ['Cumpleaños, asados y reuniones.', 'Aulas o talleres con dinámicas grupales.', 'Romper el hielo con personas nuevas.'],
    },
    en: {
      intro: 'Generators for games, downtime, parties and classrooms. Low on practical use, high on enjoyment.',
      whyMatters: 'Sometimes you need a tongue twister for a class, a dilemma for dinner or an absurd character name. These tools handle that without opening twenty tabs.',
      pickingTips: ['For small groups, generate one per person.', 'Filter by tone for the audience (family, friends, kids).', 'Mix categories for longer sessions.'],
      whenToUse: ['Birthdays, dinners and meetups.', 'Classrooms or workshops with group activities.', 'Breaking the ice with new people.'],
    },
  },
  tools: {
    es: {
      intro: 'Conversores, contadores, formateadores y validadores que se usan a diario en escritura, código y diseño.',
      whyMatters: 'Son las herramientas que abrías en cinco sitios distintos. Tenerlas en una sola interfaz reduce contexto y te deja enfocarte.',
      pickingTips: ['Bookmark las que uses más para acceso de un click.', 'Para flujos repetidos, considerá el atajo de URL con parámetros.', 'Compará el output con el original antes de pegarlo en producción.'],
      whenToUse: ['Limpieza de datos antes de cargarlos a una base.', 'Conversión rápida entre formatos durante development.', 'Verificación de inputs antes de un deploy.'],
    },
    en: {
      intro: 'Converters, counters, formatters and validators used daily in writing, code and design.',
      whyMatters: 'These are the tools you used to open in five different tabs. Having them in one interface reduces context-switching and lets you focus.',
      pickingTips: ['Bookmark the ones you use most for one-click access.', 'For repeated flows, consider URL shortcuts with parameters.', 'Compare the output to the original before pasting in production.'],
      whenToUse: ['Cleaning data before loading into a database.', 'Quick format conversion during development.', 'Verifying inputs before a deploy.'],
    },
  },
  tech: {
    es: {
      intro: 'Generadores para developers: UUIDs, hashes, IPs, formatos de datos, JSON, YAML, regex y más. Pensados para flujos de QA, mocking y debugging.',
      whyMatters: 'Cada minuto que pierdas armando un mock o copiando un UUID es un minuto que no estás resolviendo el problema real. Estas herramientas eliminan los micro-bloqueos del día a día técnico.',
      pickingTips: ['Para tests unitarios, fijá la seed cuando sea posible para resultados reproducibles.', 'Para mocks de API, generá payloads que reflejen casos edge además del happy path.', 'Validá que el formato generado matchee el contract real (API o schema).'],
      whenToUse: ['Setup de tests de integración.', 'Debugging que requiere datos sintéticos.', 'Generación rápida de identificadores para prototipos.'],
    },
    en: {
      intro: 'Generators for developers: UUIDs, hashes, IPs, data formats, JSON, YAML, regex and more. Built for QA, mocking and debugging workflows.',
      whyMatters: 'Every minute you waste building a mock or copying a UUID is one not spent on the real problem. These tools eliminate the micro-blockers of daily technical work.',
      pickingTips: ['For unit tests, fix the seed when possible for reproducible results.', 'For API mocks, generate payloads that reflect edge cases, not just the happy path.', 'Validate that the generated format matches the real contract (API or schema).'],
      whenToUse: ['Integration test setup.', 'Debugging that needs synthetic data.', 'Quick ID generation for prototypes.'],
    },
  },
  data: {
    es: {
      intro: 'Datos sintéticos para testing, QA y demos: nombres, direcciones, emails, teléfonos, tarjetas (Luhn), CSVs, IPs y MACs. Cero PII real, cero riesgo legal.',
      whyMatters: 'Cargar datos reales en testing es el origen de la mitad de los incidentes de privacidad. Datos sintéticos cubren el 95% de los casos sin exponer PII.',
      pickingTips: ['Generá volumen suficiente para detectar problemas de paginación y performance.', 'Mezclá países y formatos para validar i18n.', 'Para datos sensibles (tarjetas, IDs), usá los algoritmos válidos por checksum sin que correspondan a personas reales.'],
      whenToUse: ['Test factories y fixtures.', 'Demos para clientes sin exponer datos productivos.', 'Onboarding de devs nuevos a stage.'],
    },
    en: {
      intro: 'Synthetic data for testing, QA and demos: names, addresses, emails, phones, cards (Luhn), CSVs, IPs and MACs. Zero real PII, zero legal risk.',
      whyMatters: 'Loading real data into testing is the origin of half the privacy incidents. Synthetic data covers 95% of cases without exposing PII.',
      pickingTips: ['Generate enough volume to surface pagination and performance issues.', 'Mix countries and formats to validate i18n.', 'For sensitive data (cards, IDs), use checksum-valid algorithms with no real-person mapping.'],
      whenToUse: ['Test factories and fixtures.', 'Customer demos without exposing production data.', 'Onboarding new devs to staging.'],
    },
  },
  marketing: {
    es: {
      intro: 'Hashtags, captions, asuntos de email, headlines y copy para redes y campañas. Cada generador apunta a una plataforma específica con sus convenciones.',
      whyMatters: 'El copy promedio es invisible. La diferencia entre un post que escala y uno que no suele estar en una palabra del título o la primera línea de la caption. Estas herramientas te dan 30 alternativas para A/B testear.',
      pickingTips: ['Generá 5-10 variantes y testeá las dos más extremas en CTR.', 'No copies y pegues: ajustá tono y referencias específicas a tu marca.', 'Para hashtags, mezclá nicho-grandes con específicos para ranking estable.'],
      whenToUse: ['Antes de cada lanzamiento de campaña.', 'Planificación de calendario de contenido.', 'A/B testing de subject lines o headlines.'],
    },
    en: {
      intro: 'Hashtags, captions, email subjects, headlines and copy for social and campaigns. Each generator targets a specific platform with its conventions.',
      whyMatters: 'Average copy is invisible. The difference between a post that scales and one that does not usually lives in a word in the title or first line of the caption. These tools hand you 30 alternatives for A/B testing.',
      pickingTips: ['Generate 5-10 variants and test the two most extreme on CTR.', 'Do not copy-paste: adjust tone and specific references to your brand.', 'For hashtags, mix big-niche with specific ones for stable ranking.'],
      whenToUse: ['Before each campaign launch.', 'Content calendar planning.', 'A/B testing subject lines or headlines.'],
    },
  },
  design: {
    es: {
      intro: 'Paletas de colores, gradientes, sombras CSS, contrastes WCAG, conversiones de unidades y avatares. El kit del diseñador apurado.',
      whyMatters: 'Cada decisión de diseño tarda hasta que la tomás. Tener un generador a mano para una paleta o una sombra reduce la fricción y te deja iterar 10 veces en lo que antes tardabas en hacer 3.',
      pickingTips: ['Para paletas, validá contraste WCAG antes de fijarlas.', 'Las sombras CSS realistas suelen ser sutiles: blur > spread.', 'En tipografía fluida, usá clamp() en lugar de media queries cuando puedas.'],
      whenToUse: ['Mockups iniciales y prototipos.', 'Onboarding de nuevos sistemas de diseño.', 'Validación rápida de accesibilidad.'],
    },
    en: {
      intro: 'Color palettes, gradients, CSS shadows, WCAG contrast, unit conversions and avatars. The toolkit of the rushed designer.',
      whyMatters: 'Every design decision takes time you choose to take. Having a generator at hand for a palette or shadow reduces friction and lets you iterate 10 times in the time you used to do 3.',
      pickingTips: ['For palettes, validate WCAG contrast before locking them in.', 'Realistic CSS shadows tend to be subtle: blur > spread.', 'In fluid typography, use clamp() instead of media queries when possible.'],
      whenToUse: ['Initial mockups and prototypes.', 'Onboarding new design systems.', 'Quick accessibility validation.'],
    },
  },
  random: {
    es: {
      intro: 'Decisiones rápidas y aleatorios "honestos": dados, monedas, ruletas, listas, números, fechas. Útiles cuando necesitás una decisión sin sesgo.',
      whyMatters: 'Tu cerebro no es bueno generando aleatoriedad. "Pensá un número del 1 al 10" tiende a producir 7. Estas herramientas usan crypto.getRandomValues, no Math.random, para verdadera aleatoriedad.',
      pickingTips: ['Para sorteos públicos, mostrá el seed y la fórmula para que sea verificable.', 'Para tests, podés fijar el seed cuando lo permita el generador.', 'Si pedís "random sin repetir", asegurate que la lista de pool sea grande.'],
      whenToUse: ['Sorteos en redes sociales.', 'Decidir entre opciones equivalentes.', 'Juegos de mesa donde perdiste el dado.'],
    },
    en: {
      intro: 'Quick decisions and "honest" randomness: dice, coin flips, wheels, lists, numbers, dates. Useful when you need an unbiased pick.',
      whyMatters: 'Your brain is not good at generating randomness. "Think of a number 1 to 10" tends to produce 7. These tools use crypto.getRandomValues, not Math.random, for true randomness.',
      pickingTips: ['For public raffles, show the seed and formula so it is verifiable.', 'For tests, you can fix the seed when the generator allows.', 'If you ask for "random without repeats", make sure the pool is large.'],
      whenToUse: ['Social media giveaways.', 'Choosing between equivalent options.', 'Board games where you lost the dice.'],
    },
  },
  pets: {
    es: {
      intro: 'Nombres por especie, personalidad y tamaño. Para perros, gatos, conejos, hámsters, peces, aves, reptiles y más exóticos.',
      whyMatters: 'El nombre de tu mascota lo vas a decir 50.000 veces. Vale la pena dedicar 5 minutos a generar 30 alternativas y elegir el que mejor te suene en voz alta.',
      pickingTips: ['Probá llamar al animal con el nombre durante un día antes de fijarlo.', 'Evitá nombres que rimen con comandos básicos ("Beto" vs "quieto").', 'Considerá la personalidad: un nombre formal para un cachorro caótico no funciona.'],
      whenToUse: ['Cuando llega un animal nuevo a casa.', 'Adopción y rebautizo.', 'Inspiración para personajes de juegos o cuentos.'],
    },
    en: {
      intro: 'Names by species, personality and size. For dogs, cats, rabbits, hamsters, fish, birds, reptiles and more exotic pets.',
      whyMatters: 'You will say your pet\'s name 50,000 times. Worth spending 5 minutes generating 30 alternatives and picking the one that sounds best aloud.',
      pickingTips: ['Try calling the animal by the name for a day before locking it in.', 'Avoid names that rhyme with basic commands.', 'Consider personality: a formal name for a chaotic puppy does not work.'],
      whenToUse: ['When a new animal arrives.', 'Adoption and renaming.', 'Inspiration for game or story characters.'],
    },
  },
  people: {
    es: {
      intro: 'Nombres para bebés, autores, artistas, mellizos, usernames y más. Bilingüe y con filtros culturales.',
      whyMatters: 'Elegir un nombre humano es una decisión de impacto largo. Estas herramientas te dan exposición a opciones que no se te hubieran ocurrido por sesgo cultural o familiar.',
      pickingTips: ['Buscá significados antes de elegir.', 'Considerá cómo va a sonar con el apellido completo.', 'Para bebés, evitá nombres con iniciales que formen acrónimos incómodos.'],
      whenToUse: ['Embarazo y planificación familiar.', 'Personajes para escritura creativa.', 'Branding personal (artísticos, seudónimos).'],
    },
    en: {
      intro: 'Names for babies, authors, artists, twins, usernames and more. Bilingual with cultural filters.',
      whyMatters: 'Choosing a human name is a long-impact decision. These tools expose you to options you would not have considered due to cultural or family bias.',
      pickingTips: ['Look up meanings before choosing.', 'Consider how it sounds with the full surname.', 'For babies, avoid names whose initials form awkward acronyms.'],
      whenToUse: ['Pregnancy and family planning.', 'Characters for creative writing.', 'Personal branding (stage names, pen names).'],
    },
  },
  work: {
    es: {
      intro: 'Plantillas y generadores para el día laboral: cartas, agendas, mensajes, prompts de IA, ideas para reuniones y rituales de equipo.',
      whyMatters: 'El trabajo cognitivo se llena de tareas administrativas que no aportan pero consumen tiempo. Estos generadores las resuelven en segundos para que dediques esa energía a lo que importa.',
      pickingTips: ['Personalizá el output con detalles específicos para que no suene a template.', 'Para mensajes sensibles (renuncia, feedback), revisá dos veces antes de enviar.', 'Combiná generadores con tu propio criterio: la herramienta da estructura, vos das contenido.'],
      whenToUse: ['Comunicación administrativa repetitiva.', 'Preparación de retros, 1:1s o standups.', 'Onboarding de procesos en nuevos equipos.'],
    },
    en: {
      intro: 'Templates and generators for the workday: letters, agendas, messages, AI prompts, meeting ideas and team rituals.',
      whyMatters: 'Cognitive work fills with administrative tasks that do not add but consume time. These generators solve them in seconds so you can spend that energy on what matters.',
      pickingTips: ['Personalize the output with specific details so it does not sound like a template.', 'For sensitive messages (resignation, feedback), review twice before sending.', 'Combine generators with your judgment: the tool gives structure, you give content.'],
      whenToUse: ['Repetitive administrative communication.', 'Prep for retros, 1:1s or standups.', 'Onboarding processes in new teams.'],
    },
  },
  inspiration: {
    es: {
      intro: 'Citas, frases, cumplidos, prompts de escritura y disparadores creativos. Para días en blanco o sesiones de brainstorming.',
      whyMatters: 'La inspiración se trabaja, no se espera. Tener una colección de prompts y disparadores a mano acorta el tiempo entre "no sé qué escribir" y "ya tengo el primer párrafo".',
      pickingTips: ['Usá las frases como detonante, no como producto final.', 'Para escritura larga, generá 5 disparadores y elegí el más raro.', 'Combiná categorías para resultados inesperados.'],
      whenToUse: ['Inicio de sesiones de escritura.', 'Bloqueo creativo en cualquier disciplina.', 'Material para journaling o mindfulness.'],
    },
    en: {
      intro: 'Quotes, phrases, compliments, writing prompts and creative triggers. For blank days or brainstorming sessions.',
      whyMatters: 'Inspiration is worked, not waited for. Having a collection of prompts and triggers at hand shortens the time between "I do not know what to write" and "I have the first paragraph".',
      pickingTips: ['Use phrases as triggers, not the final product.', 'For long-form writing, generate 5 triggers and pick the strangest.', 'Mix categories for unexpected results.'],
      whenToUse: ['Start of writing sessions.', 'Creative block in any discipline.', 'Material for journaling or mindfulness.'],
    },
  },
};
