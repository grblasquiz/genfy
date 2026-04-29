import type { GenData } from './types';

export const data: GenData = {
  slug: { es: 'generador-de-cron-humano', en: 'human-readable-cron-generator' },
  category: 'tools',
  emoji: '⏰',
  mode: 'pick',
  es: {
    pageTitle: 'Generador de Cron Humano | Genfy',
    metaDesc: 'Convertí expresiones cron en lenguaje natural y al revés. Ejemplos comunes para Linux, GitHub Actions, Kubernetes y schedulers para tareas programadas.',
    h1: 'Generador de Cron Humano',
    intro: 'Traducí expresiones cron a lenguaje claro y obtené las más usadas listas para copiar. Para sysadmins, devs y automatizadores cansados de stackoverflow.',
    tag: 'DevOps',
    filterLabel: 'Categoría',
    countLabel: 'Cantidad',
    generateLabel: 'Generar expresiones',
    copyLabel: 'Copiar',
    groups: [
      {
        id: 'frequent',
        label: 'Frecuentes (cada N minutos/horas)',
        items: [
          '*/1 * * * * — Cada minuto',
          '*/5 * * * * — Cada 5 minutos',
          '*/10 * * * * — Cada 10 minutos',
          '*/15 * * * * — Cada 15 minutos',
          '*/30 * * * * — Cada 30 minutos',
          '0 * * * * — Cada hora en punto',
          '0 */2 * * * — Cada 2 horas',
          '0 */3 * * * — Cada 3 horas',
          '0 */4 * * * — Cada 4 horas',
          '0 */6 * * * — Cada 6 horas',
          '0 */8 * * * — Cada 8 horas',
          '0 */12 * * * — Cada 12 horas',
          '15 * * * * — Cada hora a y 15',
          '30 * * * * — Cada hora a y 30',
          '45 * * * * — Cada hora a y 45',
          '0,30 * * * * — A las en punto y a las 30',
          '*/2 * * * * — Cada 2 minutos',
          '*/20 * * * * — Cada 20 minutos',
          '*/45 * * * * — Cada 45 minutos',
          '0 9-17 * * * — Cada hora de 9 a 17 horas',
          '0 9-17/2 * * * — Cada 2 horas de 9 a 17',
          '*/15 9-17 * * * — Cada 15 minutos en horario laboral',
          '0 8-20 * * * — Cada hora de 8 a 20',
          '0,15,30,45 * * * * — Cada cuarto de hora',
          '5 * * * * — A los 5 minutos de cada hora',
          '0 0,12 * * * — A las 00:00 y a las 12:00',
          '*/7 * * * * — Cada 7 minutos',
          '0 */1 * * * — Cada hora exacta',
          '*/3 * * * * — Cada 3 minutos',
          '*/25 * * * * — Cada 25 minutos'
        ]
      },
      {
        id: 'daily',
        label: 'Diarios (horarios fijos)',
        items: [
          '0 0 * * * — Todos los días a medianoche',
          '0 6 * * * — Todos los días a las 6:00 AM',
          '0 9 * * * — Todos los días a las 9:00 AM',
          '0 12 * * * — Todos los días al mediodía',
          '0 18 * * * — Todos los días a las 6:00 PM',
          '0 22 * * * — Todos los días a las 10:00 PM',
          '30 8 * * * — Todos los días a las 8:30 AM',
          '0 9,18 * * * — Todos los días a las 9 y a las 18',
          '15 7 * * * — Todos los días a las 7:15 AM',
          '45 23 * * * — Todos los días a las 23:45',
          '0 3 * * * — Todos los días a las 3 AM (ideal para cleanup)',
          '0 4 * * * — Todos los días a las 4 AM',
          '0 5 * * * — Todos los días a las 5 AM',
          '30 0 * * * — Todos los días a las 00:30',
          '0 8 * * * — Todos los días a las 8:00 AM',
          '0 17 * * * — Todos los días a las 5:00 PM',
          '0 20 * * * — Todos los días a las 8:00 PM',
          '15 0 * * * — Todos los días a las 00:15',
          '0 7,12,19 * * * — Tres veces al día (mañana, mediodía, noche)',
          '0 2 * * * — Todos los días a las 2 AM',
          '0 14 * * * — Todos los días a las 2 PM',
          '30 22 * * * — Todos los días a las 22:30',
          '0 1 * * * — Todos los días a la 1 AM',
          '0 11 * * * — Todos los días a las 11 AM',
          '45 18 * * * — Todos los días a las 18:45',
          '0 23 * * * — Todos los días a las 11 PM',
          '0 0,6,12,18 * * * — Cada 6 horas exactas',
          '0 10 * * * — Todos los días a las 10 AM',
          '15 21 * * * — Todos los días a las 21:15',
          '0 16 * * * — Todos los días a las 4 PM'
        ]
      },
      {
        id: 'weekly',
        label: 'Semanales y por día',
        items: [
          '0 9 * * 1 — Todos los lunes a las 9 AM',
          '0 18 * * 5 — Todos los viernes a las 18:00',
          '0 9 * * 1-5 — Días laborables a las 9 AM',
          '0 0 * * 0 — Todos los domingos a medianoche',
          '0 0 * * 6 — Todos los sábados a medianoche',
          '0 9 * * 0,6 — Sábados y domingos a las 9 AM',
          '30 8 * * 1-5 — Días laborables a las 8:30 AM',
          '0 17 * * 5 — Viernes a las 17:00 (cierre semanal)',
          '0 22 * * 0 — Domingos a las 22:00',
          '0 6 * * 1 — Lunes a las 6 AM (inicio de semana)',
          '0 12 * * 3 — Miércoles al mediodía',
          '0 15 * * 4 — Jueves a las 15:00',
          '0 10 * * 2 — Martes a las 10 AM',
          '0 14 * * 5 — Viernes a las 2 PM',
          '*/30 9-18 * * 1-5 — Cada 30 min en horario laboral',
          '0 0 * * 1 — Lunes a medianoche',
          '0 8 * * 1,3,5 — Lunes, miércoles y viernes a las 8 AM',
          '0 9 * * 2,4 — Martes y jueves a las 9 AM',
          '0 12 * * 1-5 — Días laborables al mediodía',
          '0 18 * * 1-5 — Salida de trabajo (lun-vie 18:00)',
          '0 19 * * 0 — Domingos a las 7 PM',
          '0 7 * * 1 — Lunes muy temprano (7 AM)',
          '30 16 * * 5 — Viernes a las 16:30',
          '0 21 * * 6 — Sábados a las 21:00',
          '0 11 * * 0 — Domingos a las 11 AM',
          '15 9 * * 1-5 — Días laborables a las 9:15',
          '0 13 * * 1-5 — Almuerzo días laborables',
          '0 8 * * 0 — Domingos a las 8 AM',
          '45 17 * * 5 — Viernes a las 17:45',
          '0 6 * * 1-5 — Días laborables a las 6 AM'
        ]
      },
      {
        id: 'monthly',
        label: 'Mensuales y especiales',
        items: [
          '0 0 1 * * — El día 1 de cada mes a medianoche',
          '0 0 15 * * — El día 15 de cada mes a medianoche',
          '0 9 1 * * — El primer día del mes a las 9 AM',
          '0 0 L * * — El último día del mes (algunos cron)',
          '0 9 1 1 * — Solo el 1 de enero a las 9 AM',
          '0 0 1 */3 * — Trimestral (cada 3 meses, día 1)',
          '0 0 1 1,4,7,10 * — Inicio de cada trimestre',
          '0 0 1 6 * — El 1 de junio a medianoche',
          '0 0 1 12 * — El 1 de diciembre a medianoche',
          '0 0 25 12 * — Navidad a medianoche',
          '0 0 1 1 * — Año nuevo (1 de enero)',
          '0 12 14 2 * — San Valentín al mediodía',
          '0 0 31 10 * — Halloween a medianoche',
          '0 9 * * 1#1 — Primer lunes del mes a las 9 AM',
          '0 9 * * 1#2 — Segundo lunes del mes',
          '0 9 * * 5#3 — Tercer viernes del mes',
          '0 9 * * 1L — Último lunes del mes',
          '0 9 * * 5L — Último viernes del mes',
          '0 0 1,15 * * — El 1 y el 15 de cada mes',
          '0 9 1,16 * * — Quincenas (1 y 16 de cada mes)',
          '0 0 28-31 * * — Últimos días del mes',
          '0 9 10 * * — El 10 de cada mes a las 9 AM',
          '0 0 5 * * — El 5 de cada mes a medianoche',
          '0 18 25 * * — El 25 de cada mes a las 18:00',
          '0 0 * 1 * — Todos los días de enero',
          '0 0 1 */6 * — Cada 6 meses (semestral)',
          '0 9 1 * 1 — Día 1 del mes si es lunes',
          '@yearly — Una vez al año (atajo)',
          '@monthly — Una vez al mes (atajo)',
          '@reboot — Al iniciar el sistema (atajo)'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'Cómo leer una expresión cron sin morir en el intento',
        body: '<p>El formato estándar tiene cinco campos separados por espacios: <strong>minuto hora día-mes mes día-semana</strong>. Por ejemplo, <code>0 9 * * 1-5</code> se lee de izquierda a derecha: minuto 0, hora 9, cualquier día del mes, cualquier mes, días 1 a 5 de la semana (lunes a viernes). Resultado: 9 AM en días laborables.</p><p>Los caracteres especiales más usados son <strong>asterisco (*) que significa "cualquier valor"</strong>, <strong>barra (/) para intervalos</strong> (<code>*/15</code> = cada 15), <strong>coma (,) para listas</strong> (<code>1,3,5</code> = lunes, miércoles, viernes), y <strong>guion (-) para rangos</strong> (<code>9-17</code> = de 9 a 17). En cron extendido (Quartz) hay un sexto campo de segundos al inicio y caracteres extras como L (último) y # (n-ésimo).</p><p>Los días de la semana van de 0 a 6, donde 0 es domingo en la mayoría de implementaciones (incluyendo Linux cron y crontab). Algunos sistemas como Quartz cuentan 1-7 con 1=domingo. Eso causa el bug clásico: programás "todos los lunes" con <code>* * * * 1</code> y termina ejecutándose los domingos. Verificá la documentación de tu sistema. <em>cron-utils</em> en Java tiene flags para cambiar entre dialectos.</p>'
      },
      {
        h2: 'Cron en distintos sistemas: las trampas más comunes',
        body: '<p>En <strong>Linux crontab</strong>, los trabajos corren con el shell del usuario y heredan PATH limitado. Si tu script usa <code>node</code> y crontab no encuentra node en su PATH, falla silenciosamente. Solución: usar paths absolutos (<code>/usr/local/bin/node /home/user/script.js</code>) o setear <code>PATH=...</code> al inicio del crontab.</p><p>En <strong>GitHub Actions</strong>, el cron acepta sintaxis estándar pero solo se ejecuta en el branch default. <code>schedule: - cron: \'0 9 * * 1-5\'</code> dispara workflow a las 9 UTC, no en tu zona horaria. GitHub corre todo en UTC sin opción de cambiarlo. Para 9 AM Argentina (UTC-3), programá <code>0 12 * * 1-5</code>. Otra trampa: GitHub puede retrasar ejecuciones bajo carga, así que cron crítico no es ideal allí.</p><p>En <strong>Kubernetes CronJob</strong>, el campo <code>schedule</code> usa cron estándar pero también respeta <code>timeZone</code> (desde k8s 1.27). Antes de eso, era todo UTC. Otra particularidad: <code>concurrencyPolicy: Forbid</code> evita que un job se solape con su instancia anterior si corre largo. Para tareas que pueden correr más de un minuto en cron de cada minuto, esto es crítico para evitar runaway jobs.</p>'
      },
      {
        h2: 'Errores típicos y cómo evitarlos',
        body: '<p>Error #1: <strong>confundir día del mes con día de la semana</strong>. <code>0 9 1 * 1</code> NO es "los lunes 1 del mes". Es "día 1 del mes O cualquier lunes" (operador OR implícito). Si querés el primer lunes específicamente, usá <code>0 9 * * 1#1</code> en cron extendido o calculalo en código.</p><p>Error #2: <strong>asumir que <code>*/N</code> divide exactamente</strong>. <code>*/7 * * * *</code> no es "cada 7 minutos" en sentido estricto: ejecuta en 0, 7, 14, 21, 28, 35, 42, 49, 56 y vuelve a 0 al cambiar de hora, dejando 4 minutos de gap entre 56 y 0 siguiente. Si necesitás intervalos exactos, usá un scheduler con duración configurable, no cron.</p><p>Error #3: <strong>scheduled tasks que dependen de zonas horarias con DST</strong>. Una tarea programada a las 2:30 AM puede ejecutarse dos veces o ninguna en cambios de hora. Linux cron en sistemas con TZ local tiene este bug. Solución: usar TZ=UTC en crontab para tareas críticas, o usar systemd timers que manejan DST correctamente. <em>Atlassian</em>, <em>Stripe</em> y <em>GitHub</em> tuvieron incidentes públicos por esto.</p>'
      },
      {
        h2: 'Atajos cron y alternativas modernas',
        body: '<p>Cron tiene atajos predefinidos que muchos no conocen: <code>@yearly</code> (= <code>0 0 1 1 *</code>), <code>@monthly</code>, <code>@weekly</code>, <code>@daily</code>, <code>@hourly</code> y <code>@reboot</code>. Son legibles pero menos flexibles. <code>@reboot</code> ejecuta una vez al iniciar el sistema, útil para scripts de bootstrap pero peligroso si tu sistema reinicia frecuentemente.</p><p>Para casos donde cron se queda corto, hay alternativas. <strong>systemd timers</strong> en Linux modernos permiten persistencia (re-ejecutar si el sistema estaba apagado), randomización (<code>RandomizedDelaySec</code> evita thundering herd) y dependencias entre tareas. <strong>Apache Airflow</strong> y <strong>Prefect</strong> manejan DAGs con dependencias, retries y observabilidad que cron nunca tuvo.</p><p>Para apps modernas, frameworks como <em>BullMQ</em> (Node), <em>Celery</em> (Python) y <em>Sidekiq</em> (Ruby) ofrecen scheduling con monitoring incorporado. Si tu cron empieza a tener 30+ tareas, lógica condicional o necesita observabilidad, mudate a uno de esos. Cron está pensado para tareas simples y aisladas. <em>Slack</em>, <em>GitHub</em> y <em>Stripe</em> usan combinaciones de cron + queue systems para que cron solo dispare workers, sin lógica de negocio.</p>'
      }
    ],
    faq: [
      {
        q: '¿Cuál es la diferencia entre cron y crontab?',
        a: 'Cron es el demonio (proceso) que ejecuta tareas programadas en sistemas Unix. Crontab es el archivo donde definís esas tareas y también el comando para editarlo (<code>crontab -e</code>). Cada usuario tiene su propio crontab; root tiene crontab del sistema en <code>/etc/crontab</code>.'
      },
      {
        q: '¿Por qué mi cron no se ejecuta aunque la sintaxis es correcta?',
        a: 'Las causas más comunes: PATH incompleto (usá rutas absolutas), permisos del script (<code>chmod +x</code>), zona horaria distinta a la esperada, o el cron daemon no está corriendo (<code>systemctl status cron</code>). Revisá <code>/var/log/syslog</code> o <code>/var/log/cron</code> para errores de ejecución.'
      },
      {
        q: '¿Cómo testeo una expresión cron antes de poner en producción?',
        a: 'Usá <em>crontab.guru</em> para validar lectura humana, o <em>cronitor.io</em> para monitoreo. Para testing local, podés simular con <code>at</code> o ejecutar el script directamente con los args que cron pasaría. En CI/CD, validá la sintaxis con <code>crontab -T archivo</code> antes de instalar.'
      },
      {
        q: '¿Cron soporta segundos?',
        a: 'El cron POSIX estándar (Linux/Mac) NO soporta segundos: granularidad mínima es 1 minuto. Quartz (Java) y algunos schedulers extendidos sí lo soportan agregando un campo de segundos al inicio (6 campos en lugar de 5). Si necesitás sub-minuto, usá un scheduler diferente o un loop con sleep.'
      }
    ]
  },
  en: {
    pageTitle: 'Human-Readable Cron Generator | Genfy',
    metaDesc: 'Convert cron expressions to natural language and back. Common examples for Linux, GitHub Actions, Kubernetes and schedulers. Stop fighting crontab.guru.',
    h1: 'Human-Readable Cron Generator',
    intro: 'Translate cron expressions to clear language and copy the most-used ones instantly. For sysadmins, devs and automators tired of stack overflow.',
    tag: 'DevOps',
    filterLabel: 'Category',
    countLabel: 'Amount',
    generateLabel: 'Generate expressions',
    copyLabel: 'Copy',
    groups: [
      {
        id: 'frequent',
        label: 'Frequent (every N minutes/hours)',
        items: [
          '*/1 * * * * — Every minute',
          '*/5 * * * * — Every 5 minutes',
          '*/10 * * * * — Every 10 minutes',
          '*/15 * * * * — Every 15 minutes',
          '*/30 * * * * — Every 30 minutes',
          '0 * * * * — Every hour on the hour',
          '0 */2 * * * — Every 2 hours',
          '0 */3 * * * — Every 3 hours',
          '0 */4 * * * — Every 4 hours',
          '0 */6 * * * — Every 6 hours',
          '0 */8 * * * — Every 8 hours',
          '0 */12 * * * — Every 12 hours',
          '15 * * * * — Every hour at :15',
          '30 * * * * — Every hour at :30',
          '45 * * * * — Every hour at :45',
          '0,30 * * * * — On the hour and at :30',
          '*/2 * * * * — Every 2 minutes',
          '*/20 * * * * — Every 20 minutes',
          '*/45 * * * * — Every 45 minutes',
          '0 9-17 * * * — Every hour from 9 AM to 5 PM',
          '0 9-17/2 * * * — Every 2 hours from 9 to 17',
          '*/15 9-17 * * * — Every 15 min during business hours',
          '0 8-20 * * * — Every hour from 8 to 20',
          '0,15,30,45 * * * * — Every quarter hour',
          '5 * * * * — At 5 minutes past every hour',
          '0 0,12 * * * — At midnight and noon',
          '*/7 * * * * — Every 7 minutes',
          '0 */1 * * * — Every exact hour',
          '*/3 * * * * — Every 3 minutes',
          '*/25 * * * * — Every 25 minutes'
        ]
      },
      {
        id: 'daily',
        label: 'Daily (fixed times)',
        items: [
          '0 0 * * * — Every day at midnight',
          '0 6 * * * — Every day at 6:00 AM',
          '0 9 * * * — Every day at 9:00 AM',
          '0 12 * * * — Every day at noon',
          '0 18 * * * — Every day at 6:00 PM',
          '0 22 * * * — Every day at 10:00 PM',
          '30 8 * * * — Every day at 8:30 AM',
          '0 9,18 * * * — Every day at 9 AM and 6 PM',
          '15 7 * * * — Every day at 7:15 AM',
          '45 23 * * * — Every day at 11:45 PM',
          '0 3 * * * — Every day at 3 AM (ideal for cleanup)',
          '0 4 * * * — Every day at 4 AM',
          '0 5 * * * — Every day at 5 AM',
          '30 0 * * * — Every day at 12:30 AM',
          '0 8 * * * — Every day at 8:00 AM',
          '0 17 * * * — Every day at 5:00 PM',
          '0 20 * * * — Every day at 8:00 PM',
          '15 0 * * * — Every day at 12:15 AM',
          '0 7,12,19 * * * — Three times daily (morning, noon, night)',
          '0 2 * * * — Every day at 2 AM',
          '0 14 * * * — Every day at 2 PM',
          '30 22 * * * — Every day at 10:30 PM',
          '0 1 * * * — Every day at 1 AM',
          '0 11 * * * — Every day at 11 AM',
          '45 18 * * * — Every day at 6:45 PM',
          '0 23 * * * — Every day at 11 PM',
          '0 0,6,12,18 * * * — Every 6 exact hours',
          '0 10 * * * — Every day at 10 AM',
          '15 21 * * * — Every day at 9:15 PM',
          '0 16 * * * — Every day at 4 PM'
        ]
      },
      {
        id: 'weekly',
        label: 'Weekly and by day',
        items: [
          '0 9 * * 1 — Every Monday at 9 AM',
          '0 18 * * 5 — Every Friday at 6 PM',
          '0 9 * * 1-5 — Weekdays at 9 AM',
          '0 0 * * 0 — Every Sunday at midnight',
          '0 0 * * 6 — Every Saturday at midnight',
          '0 9 * * 0,6 — Weekends at 9 AM',
          '30 8 * * 1-5 — Weekdays at 8:30 AM',
          '0 17 * * 5 — Fridays at 5 PM (weekly close)',
          '0 22 * * 0 — Sundays at 10 PM',
          '0 6 * * 1 — Mondays at 6 AM (week start)',
          '0 12 * * 3 — Wednesdays at noon',
          '0 15 * * 4 — Thursdays at 3 PM',
          '0 10 * * 2 — Tuesdays at 10 AM',
          '0 14 * * 5 — Fridays at 2 PM',
          '*/30 9-18 * * 1-5 — Every 30 min business hours',
          '0 0 * * 1 — Mondays at midnight',
          '0 8 * * 1,3,5 — Mon, Wed, Fri at 8 AM',
          '0 9 * * 2,4 — Tue and Thu at 9 AM',
          '0 12 * * 1-5 — Weekdays at noon',
          '0 18 * * 1-5 — End of workday (Mon-Fri 6 PM)',
          '0 19 * * 0 — Sundays at 7 PM',
          '0 7 * * 1 — Mondays very early (7 AM)',
          '30 16 * * 5 — Fridays at 4:30 PM',
          '0 21 * * 6 — Saturdays at 9 PM',
          '0 11 * * 0 — Sundays at 11 AM',
          '15 9 * * 1-5 — Weekdays at 9:15',
          '0 13 * * 1-5 — Weekday lunch',
          '0 8 * * 0 — Sundays at 8 AM',
          '45 17 * * 5 — Fridays at 5:45 PM',
          '0 6 * * 1-5 — Weekdays at 6 AM'
        ]
      },
      {
        id: 'monthly',
        label: 'Monthly and special',
        items: [
          '0 0 1 * * — On the 1st of each month at midnight',
          '0 0 15 * * — On the 15th of each month at midnight',
          '0 9 1 * * — First day of month at 9 AM',
          '0 0 L * * — Last day of month (some cron flavors)',
          '0 9 1 1 * — Only Jan 1st at 9 AM',
          '0 0 1 */3 * — Quarterly (every 3 months, day 1)',
          '0 0 1 1,4,7,10 * — Start of each quarter',
          '0 0 1 6 * — June 1st at midnight',
          '0 0 1 12 * — December 1st at midnight',
          '0 0 25 12 * — Christmas at midnight',
          '0 0 1 1 * — New Year (Jan 1st)',
          '0 12 14 2 * — Valentine\'s Day at noon',
          '0 0 31 10 * — Halloween at midnight',
          '0 9 * * 1#1 — First Monday of month at 9 AM',
          '0 9 * * 1#2 — Second Monday of month',
          '0 9 * * 5#3 — Third Friday of month',
          '0 9 * * 1L — Last Monday of month',
          '0 9 * * 5L — Last Friday of month',
          '0 0 1,15 * * — On the 1st and 15th of each month',
          '0 9 1,16 * * — Bi-weekly (1st and 16th)',
          '0 0 28-31 * * — Last days of month',
          '0 9 10 * * — On the 10th of each month at 9 AM',
          '0 0 5 * * — On the 5th of each month at midnight',
          '0 18 25 * * — On the 25th of each month at 6 PM',
          '0 0 * 1 * — Every day in January',
          '0 0 1 */6 * — Every 6 months (semi-annual)',
          '0 9 1 * 1 — Day 1 if it\'s a Monday',
          '@yearly — Once a year (shortcut)',
          '@monthly — Once a month (shortcut)',
          '@reboot — On system startup (shortcut)'
        ]
      }
    ],
    defaultCount: 5,
    maxCount: 30,
    content: [
      {
        h2: 'How to read a cron expression without dying',
        body: '<p>Standard format has five space-separated fields: <strong>minute hour day-of-month month day-of-week</strong>. For example, <code>0 9 * * 1-5</code> reads left to right: minute 0, hour 9, any day of month, any month, days 1 to 5 of the week (Monday to Friday). Result: 9 AM on weekdays.</p><p>Most-used special characters are <strong>asterisk (*) meaning "any value"</strong>, <strong>slash (/) for intervals</strong> (<code>*/15</code> = every 15), <strong>comma (,) for lists</strong> (<code>1,3,5</code> = Mon, Wed, Fri), and <strong>hyphen (-) for ranges</strong> (<code>9-17</code> = from 9 to 17). In extended cron (Quartz) there\'s a sixth seconds field at the start and extra characters like L (last) and # (nth).</p><p>Days of week range 0 to 6, where 0 is Sunday in most implementations (including Linux cron and crontab). Some systems like Quartz count 1-7 with 1=Sunday. That causes the classic bug: you schedule "every Monday" with <code>* * * * 1</code> and it ends up running Sundays. Verify your system\'s docs. <em>cron-utils</em> in Java has flags to switch dialects.</p>'
      },
      {
        h2: 'Cron in different systems: most common traps',
        body: '<p>In <strong>Linux crontab</strong>, jobs run with user shell and inherit limited PATH. If your script uses <code>node</code> and crontab can\'t find node in its PATH, it fails silently. Solution: use absolute paths (<code>/usr/local/bin/node /home/user/script.js</code>) or set <code>PATH=...</code> at the top of crontab.</p><p>In <strong>GitHub Actions</strong>, cron accepts standard syntax but only runs on default branch. <code>schedule: - cron: \'0 9 * * 1-5\'</code> triggers workflow at 9 UTC, not your timezone. GitHub runs everything in UTC with no option to change. For 9 AM ET (UTC-5), schedule <code>0 14 * * 1-5</code>. Another trap: GitHub may delay executions under load, so critical cron isn\'t ideal there.</p><p>In <strong>Kubernetes CronJob</strong>, <code>schedule</code> field uses standard cron but also respects <code>timeZone</code> (since k8s 1.27). Before that, all UTC. Another quirk: <code>concurrencyPolicy: Forbid</code> prevents a job from overlapping with previous instance if it runs long. For tasks that may run more than a minute on per-minute cron, this is critical to avoid runaway jobs.</p>'
      },
      {
        h2: 'Typical mistakes and how to avoid them',
        body: '<p>Mistake #1: <strong>confusing day-of-month with day-of-week</strong>. <code>0 9 1 * 1</code> is NOT "Mondays the 1st of month". It\'s "day 1 of month OR any Monday" (implicit OR operator). If you want first Monday specifically, use <code>0 9 * * 1#1</code> in extended cron or compute in code.</p><p>Mistake #2: <strong>assuming <code>*/N</code> divides exactly</strong>. <code>*/7 * * * *</code> isn\'t "every 7 minutes" strictly: it runs at 0, 7, 14, 21, 28, 35, 42, 49, 56 and back to 0 at hour change, leaving 4-minute gap between 56 and next 0. If you need exact intervals, use a scheduler with configurable duration, not cron.</p><p>Mistake #3: <strong>scheduled tasks depending on DST timezones</strong>. A task scheduled at 2:30 AM may run twice or none on time changes. Linux cron with local TZ has this bug. Solution: use TZ=UTC in crontab for critical tasks, or systemd timers that handle DST correctly. <em>Atlassian</em>, <em>Stripe</em> and <em>GitHub</em> had public incidents from this.</p>'
      },
      {
        h2: 'Cron shortcuts and modern alternatives',
        body: '<p>Cron has predefined shortcuts many don\'t know: <code>@yearly</code> (= <code>0 0 1 1 *</code>), <code>@monthly</code>, <code>@weekly</code>, <code>@daily</code>, <code>@hourly</code> and <code>@reboot</code>. Readable but less flexible. <code>@reboot</code> runs once on system startup, useful for bootstrap scripts but dangerous if your system restarts frequently.</p><p>For cases where cron falls short, there are alternatives. <strong>systemd timers</strong> on modern Linux allow persistence (re-execute if system was off), randomization (<code>RandomizedDelaySec</code> avoids thundering herd) and task dependencies. <strong>Apache Airflow</strong> and <strong>Prefect</strong> handle DAGs with dependencies, retries and observability cron never had.</p><p>For modern apps, frameworks like <em>BullMQ</em> (Node), <em>Celery</em> (Python) and <em>Sidekiq</em> (Ruby) offer scheduling with built-in monitoring. If your cron starts having 30+ tasks, conditional logic or needs observability, move to one of those. Cron is meant for simple isolated tasks. <em>Slack</em>, <em>GitHub</em> and <em>Stripe</em> use combinations of cron + queue systems so cron only triggers workers, no business logic.</p>'
      }
    ],
    faq: [
      {
        q: 'What\'s the difference between cron and crontab?',
        a: 'Cron is the daemon (process) executing scheduled tasks on Unix systems. Crontab is the file where you define those tasks and also the command to edit it (<code>crontab -e</code>). Each user has their own crontab; root has system crontab at <code>/etc/crontab</code>.'
      },
      {
        q: 'Why doesn\'t my cron run even though syntax is correct?',
        a: 'Most common causes: incomplete PATH (use absolute paths), script permissions (<code>chmod +x</code>), different timezone than expected, or cron daemon not running (<code>systemctl status cron</code>). Check <code>/var/log/syslog</code> or <code>/var/log/cron</code> for execution errors.'
      },
      {
        q: 'How do I test a cron expression before production?',
        a: 'Use <em>crontab.guru</em> for human-readable validation, or <em>cronitor.io</em> for monitoring. For local testing, simulate with <code>at</code> or run script directly with args cron would pass. In CI/CD, validate syntax with <code>crontab -T file</code> before installing.'
      },
      {
        q: 'Does cron support seconds?',
        a: 'Standard POSIX cron (Linux/Mac) does NOT support seconds: minimum granularity is 1 minute. Quartz (Java) and some extended schedulers do, adding a seconds field at start (6 fields instead of 5). If you need sub-minute, use a different scheduler or a sleep loop.'
      }
    ]
  }
};
