import type { GlossaryEntry } from './types';

export const entry: GlossaryEntry = {
  "slug": {
    "es": "cron",
    "en": "cron"
  },
  "emoji": "⏰",
  "category": "devops",
  "es": {
    "pageTitle": "Cron — Glosario | Genfy",
    "metaDesc": "Cron es una sintaxis para programar tareas recurrentes en sistemas Unix. Cinco campos controlan minuto, hora, día del mes, mes y día de la semana de ejecución.",
    "h1": "Cron",
    "short": "Cron es un sistema de programación de tareas en Unix/Linux y su sintaxis de cinco campos (minuto, hora, día del mes, mes, día de la semana) para definir cuándo ejecutar comandos automáticamente.",
    "body": [
      {
        "title": "¿Qué es Cron?",
        "content": "<p>Cron es un demonio de Unix/Linux que ejecuta tareas programadas (llamadas <strong>cron jobs</strong>) en intervalos específicos. Su nombre viene de \"chronos\" (tiempo en griego). Es fundamental en DevOps para automatizar backups, limpiezas, actualizaciones y cualquier tarea recurrente.</p><p>La <strong>sintaxis cron</strong> usa cinco campos separados por espacios: <code>* * * * *</code>, donde cada asterisco representa minuto (0-59), hora (0-23), día del mes (1-31), mes (1-12) y día de la semana (0-7, donde 0 y 7 son domingo). Ejemplo: <code>0 3 * * *</code> ejecuta a las 3:00 AM todos los días.</p><p>Aunque nació en Unix en 1975, hoy es universal: sistemas cloud (AWS EventBridge, GCP Cloud Scheduler), herramientas CI/CD (GitHub Actions, GitLab CI) y frameworks (Node.js con node-cron) usan sintaxis cron para programar tareas.</p>"
      },
      {
        "title": "¿Cómo funciona la sintaxis Cron?",
        "content": "<p>Una expresión cron tiene 5 campos obligatorios: <code>minuto hora día mes día_semana</code>. Cada campo acepta:</p><ul><li><strong>Números</strong>: <code>30 14 * * *</code> = 14:30 todos los días</li><li><strong>Asterisco (*)</strong>: cualquier valor. <code>* * * * *</code> = cada minuto</li><li><strong>Coma (,)</strong>: múltiples valores. <code>0 9,17 * * *</code> = 9:00 AM y 5:00 PM</li><li><strong>Guión (-)</strong>: rango. <code>0 9-17 * * *</code> = cada hora entre 9 AM y 5 PM</li><li><strong>Barra (/)</strong>: intervalos. <code>*/15 * * * *</code> = cada 15 minutos</li></ul><p>Ejemplos prácticos:</p><ul><li><code>0 0 * * 0</code>: Domingos a medianoche (backups semanales)</li><li><code>30 2 1 * *</code>: 2:30 AM el primer día de cada mes</li><li><code>0 */6 * * *</code>: Cada 6 horas (0:00, 6:00, 12:00, 18:00)</li><li><code>0 9 * * 1-5</code>: 9 AM de lunes a viernes (días laborables)</li></ul><p>Algunos sistemas soportan extensiones como <code>@daily</code> (= <code>0 0 * * *</code>), <code>@hourly</code>, <code>@reboot</code>, etc.</p>"
      },
      {
        "title": "¿Cuándo usar expresiones Cron?",
        "content": "<p>Usá cron cuando necesitás:</p><ul><li><strong>Backups programados</strong>: bases de datos, archivos, logs. Ej: backup diario a las 2 AM cuando el tráfico es bajo.</li><li><strong>Mantenimiento periódico</strong>: limpiar archivos temporales, rotar logs, vaciar caches. Ej: cada domingo a medianoche.</li><li><strong>Reportes automáticos</strong>: enviar métricas por email, generar dashboards, consolidar datos. Ej: reporte semanal todos los lunes.</li><li><strong>Sincronización</strong>: importar datos externos, actualizar APIs, replicar contenido. Ej: cada 30 minutos.</li><li><strong>Chequeos de salud</strong>: ping a servicios, validar certificados SSL, monitorear uptime. Ej: cada 5 minutos.</li></ul><p>En infraestructura moderna, usás cron en servidores Linux tradicionales, pero también en servicios cloud que lo abstraen (Lambda + EventBridge, Cloud Functions + Cloud Scheduler). La sintaxis es la misma.</p>"
      },
      {
        "title": "Errores comunes y mejores prácticas",
        "content": "<p><strong>Error #1:</strong> Confundir día del mes con día de la semana. <code>0 0 1 * 1</code> NO es \"primer lunes del mes\", es \"día 1 del mes O lunes\". Los campos se combinan con OR, no AND. Para lógica compleja, usá scripting externo.</p><p><strong>Error #2:</strong> No considerar zonas horarias. Cron usa la hora del sistema. Si tu servidor está en UTC pero querés ejecutar a las 9 AM hora local, calculá el offset manualmente o usá herramientas que soporten timezones (Kubernetes CronJobs con timeZone).</p><p><strong>Mejor práctica:</strong> Agregá logging a tus cron jobs. Redirigí stdout/stderr a un archivo: <code>0 3 * * * /script.sh >> /var/log/cron.log 2>&1</code>. Sin logs es imposible debuggear fallas silenciosas.</p><p><strong>Idempotencia:</strong> Tus scripts deben poder ejecutarse múltiples veces sin efectos adversos. Si un cron job se ejecuta dos veces por error, no debería duplicar datos o romper el sistema. Usá locks o checks de estado.</p><p><strong>Alertas:</strong> Implementá monitoreo. Si un backup falla a las 2 AM, necesitás saberlo. Herramientas como Cronitor, Healthchecks.io o Dead Man's Snitch te alertan si un cron job no se ejecuta en el tiempo esperado.</p>"
      }
    ],
    "examples": [
      "0 0 * * * — Todos los días a medianoche",
      "*/15 * * * * — Cada 15 minutos",
      "0 2 * * 0 — Domingos a las 2 AM (backups semanales)",
      "30 9 * * 1-5 — 9:30 AM de lunes a viernes",
      "0 */4 * * * — Cada 4 horas"
    ],
    "related": [
      "constructor-cron",
      "generador-de-fechas-aleatorias"
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre cron y crontab?",
        "a": "Cron es el demonio (servicio) que ejecuta tareas programadas. Crontab es el comando para editar la tabla de cron jobs de un usuario (crontab -e) o el archivo donde se almacenan esas tareas. Cada usuario tiene su crontab, y hay un crontab del sistema en /etc/crontab."
      },
      {
        "q": "¿Cómo ejecuto un cron job cada X minutos?",
        "a": "Usá */X en el campo de minutos. Ejemplos: */5 = cada 5 minutos, */30 = cada 30 minutos. Importante: */5 ejecuta en minutos 0, 5, 10, 15... no 5 minutos después del último. Si necesitás intervalos exactos desde el inicio, ejecutá manualmente la primera vez."
      },
      {
        "q": "¿Puedo usar sintaxis cron en aplicaciones web?",
        "a": "Sí, pero no directamente. Aplicaciones Node.js usan librerías como node-cron o agenda. En servicios cloud, usás sintaxis cron con EventBridge (AWS), Cloud Scheduler (GCP) o Azure Functions con timer triggers. La sintaxis es la misma, pero la ejecución es gestionada por el proveedor, no por cron del sistema."
      }
    ]
  },
  "en": {
    "pageTitle": "Cron — Glossary | Genfy",
    "metaDesc": "Cron is syntax for scheduling recurring tasks on Unix systems. Five fields control minute, hour, day of month, month and day of week for execution.",
    "h1": "Cron",
    "short": "Cron is a Unix/Linux task scheduling system and its five-field syntax (minute, hour, day of month, month, day of week) for defining when to execute commands automatically.",
    "body": [
      {
        "title": "What is Cron?",
        "content": "<p>Cron is a Unix/Linux daemon that executes scheduled tasks (called <strong>cron jobs</strong>) at specific intervals. Its name comes from \"chronos\" (time in Greek). It's fundamental in DevOps for automating backups, cleanups, updates and any recurring task.</p><p><strong>Cron syntax</strong> uses five space-separated fields: <code>* * * * *</code>, where each asterisk represents minute (0-59), hour (0-23), day of month (1-31), month (1-12) and day of week (0-7, where 0 and 7 are Sunday). Example: <code>0 3 * * *</code> runs at 3:00 AM every day.</p><p>Although born in Unix in 1975, today it's universal: cloud systems (AWS EventBridge, GCP Cloud Scheduler), CI/CD tools (GitHub Actions, GitLab CI) and frameworks (Node.js with node-cron) use cron syntax to schedule tasks.</p>"
      },
      {
        "title": "How does Cron syntax work?",
        "content": "<p>A cron expression has 5 mandatory fields: <code>minute hour day month weekday</code>. Each field accepts:</p><ul><li><strong>Numbers</strong>: <code>30 14 * * *</code> = 14:30 every day</li><li><strong>Asterisk (*)</strong>: any value. <code>* * * * *</code> = every minute</li><li><strong>Comma (,)</strong>: multiple values. <code>0 9,17 * * *</code> = 9:00 AM and 5:00 PM</li><li><strong>Hyphen (-)</strong>: range. <code>0 9-17 * * *</code> = every hour between 9 AM and 5 PM</li><li><strong>Slash (/)</strong>: intervals. <code>*/15 * * * *</code> = every 15 minutes</li></ul><p>Practical examples:</p><ul><li><code>0 0 * * 0</code>: Sundays at midnight (weekly backups)</li><li><code>30 2 1 * *</code>: 2:30 AM on the first day of each month</li><li><code>0 */6 * * *</code>: Every 6 hours (0:00, 6:00, 12:00, 18:00)</li><li><code>0 9 * * 1-5</code>: 9 AM Monday to Friday (business days)</li></ul><p>Some systems support extensions like <code>@daily</code> (= <code>0 0 * * *</code>), <code>@hourly</code>, <code>@reboot</code>, etc.</p>"
      },
      {
        "title": "When to use Cron expressions?",
        "content": "<p>Use cron when you need:</p><ul><li><strong>Scheduled backups</strong>: databases, files, logs. Ex: daily backup at 2 AM when traffic is low.</li><li><strong>Periodic maintenance</strong>: clean temp files, rotate logs, empty caches. Ex: every Sunday at midnight.</li><li><strong>Automatic reports</strong>: send metrics via email, generate dashboards, consolidate data. Ex: weekly report every Monday.</li><li><strong>Synchronization</strong>: import external data, update APIs, replicate content. Ex: every 30 minutes.</li><li><strong>Health checks</strong>: ping services, validate SSL certificates, monitor uptime. Ex: every 5 minutes.</li></ul><p>In modern infrastructure, you use cron on traditional Linux servers, but also in cloud services that abstract it (Lambda + EventBridge, Cloud Functions + Cloud Scheduler). The syntax is the same.</p>"
      },
      {
        "title": "Common mistakes and best practices",
        "content": "<p><strong>Mistake #1:</strong> Confusing day of month with day of week. <code>0 0 1 * 1</code> is NOT \"first Monday of the month\", it's \"day 1 of month OR Monday\". Fields combine with OR, not AND. For complex logic, use external scripting.</p><p><strong>Mistake #2:</strong> Not considering time zones. Cron uses system time. If your server is in UTC but you want to run at 9 AM local time, calculate the offset manually or use tools that support timezones (Kubernetes CronJobs with timeZone).</p><p><strong>Best practice:</strong> Add logging to your cron jobs. Redirect stdout/stderr to a file: <code>0 3 * * * /script.sh >> /var/log/cron.log 2>&1</code>. Without logs it's impossible to debug silent failures.</p><p><strong>Idempotency:</strong> Your scripts must be able to run multiple times without adverse effects. If a cron job executes twice by mistake, it shouldn't duplicate data or break the system. Use locks or state checks.</p><p><strong>Alerts:</strong> Implement monitoring. If a backup fails at 2 AM, you need to know. Tools like Cronitor, Healthchecks.io or Dead Man's Snitch alert you if a cron job doesn't execute in the expected time.</p>"
      }
    ],
    "examples": [
      "0 0 * * * — Every day at midnight",
      "*/15 * * * * — Every 15 minutes",
      "0 2 * * 0 — Sundays at 2 AM (weekly backups)",
      "30 9 * * 1-5 — 9:30 AM Monday to Friday",
      "0 */4 * * * — Every 4 hours"
    ],
    "related": [
      "cron-expression-builder",
      "random-date-generator"
    ],
    "faq": [
      {
        "q": "What's the difference between cron and crontab?",
        "a": "Cron is the daemon (service) that executes scheduled tasks. Crontab is the command to edit a user's cron job table (crontab -e) or the file where those tasks are stored. Each user has their crontab, and there's a system crontab in /etc/crontab."
      },
      {
        "q": "How do I run a cron job every X minutes?",
        "a": "Use */X in the minute field. Examples: */5 = every 5 minutes, */30 = every 30 minutes. Important: */5 executes at minutes 0, 5, 10, 15... not 5 minutes after the last one. If you need exact intervals from start, manually execute the first time."
      },
      {
        "q": "Can I use cron syntax in web applications?",
        "a": "Yes, but not directly. Node.js applications use libraries like node-cron or agenda. In cloud services, you use cron syntax with EventBridge (AWS), Cloud Scheduler (GCP) or Azure Functions with timer triggers. The syntax is the same, but execution is managed by the provider, not by system cron."
      }
    ]
  }
};
