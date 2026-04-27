import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-definition-of-done",
    "en": "definition-of-done-generator"
  },
  "category": "work",
  "emoji": "🏁",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Definition of Done | Genfy",
    "metaDesc": "Checklist Definition of Done para sprints ágiles. Criterios claros de completitud que tu equipo puede adoptar y adaptar hoy mismo.",
    "h1": "Generador de Definition of Done",
    "intro": "Genera checklists Definition of Done sólidos para tus user stories. Criterios probados que eliminan ambigüedad y mejoran la calidad del sprint.",
    "tag": "Trabajo",
    "filterLabel": "Categoría",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "development",
        "label": "Desarrollo",
        "items": [
          "Código cumple guía de estilo del equipo",
          "Tests unitarios escritos y pasando",
          "Cobertura de código > 80% en módulo",
          "Sin warnings del linter",
          "Sin comentarios TODO/FIXME pendientes",
          "Lógica de negocio cubierta por tests",
          "Edge cases identificados y testeados",
          "Refactoring completado (no deuda técnica nueva)",
          "Dependencias actualizadas sin vulnerabilidades",
          "Código optimizado (no hay loops O(n²) innecesarios)",
          "Variables y funciones tienen nombres descriptivos",
          "Funciones < 20 líneas de código",
          "Sin duplicación de código (DRY aplicado)",
          "Logs y métricas implementados",
          "Feature flags configurados si aplica",
          "Configuración separada de código (env vars)",
          "Secrets no commiteados (validado con git-secrets)",
          "Migraciones de DB testeadas (up y down)",
          "Rollback plan documentado",
          "Sin conflictos de merge pendientes"
        ]
      },
      {
        "id": "testing",
        "label": "Testing",
        "items": [
          "Tests de integración pasando",
          "Tests E2E ejecutados en ambiente staging",
          "Happy path cubierto",
          "Casos de error cubiertos",
          "Regression tests actualizados",
          "Performance tests ejecutados (si aplica)",
          "Tests de carga validados (si feature crítico)",
          "Accesibilidad testeada (WCAG AA)",
          "Compatibilidad cross-browser verificada",
          "Responsive design validado (mobile, tablet, desktop)",
          "Tests manuales en dispositivos reales",
          "Security testing ejecutado (OWASP Top 10)",
          "Penetration testing si toca autenticación/pagos",
          "Validación de inputs sanitizada",
          "Tests de internacionalización (i18n)",
          "Tests pasan en pipeline CI/CD",
          "No hay tests skipped sin justificación",
          "Mocks/stubs limpios y mantenibles",
          "Tests son deterministas (no flaky)",
          "Datos de prueba anonimizados si vienen de prod"
        ]
      },
      {
        "id": "documentation",
        "label": "Documentación",
        "items": [
          "README actualizado con cambios",
          "Comentarios en código para lógica compleja",
          "API docs generados (Swagger/OpenAPI)",
          "Runbook actualizado para ops",
          "Changelog.md con entry de feature",
          "Diagrams de arquitectura actualizados (si aplica)",
          "ADR (Architecture Decision Record) escrito si hubo decisión técnica",
          "Guía de troubleshooting actualizada",
          "Instrucciones de setup local validadas",
          "Docs de ambiente (staging, prod) actualizados",
          "User stories con acceptance criteria verificados",
          "Ejemplos de uso documentados",
          "Endpoints de API con ejemplos curl/postman",
          "Esquemas de DB actualizados",
          "Dependencias externas documentadas",
          "Feature toggle states explicados",
          "Post-mortem de incidentes si hubo",
          "Knowledge base interna actualizada",
          "Onboarding docs revisados",
          "Glossario de términos técnicos actualizado"
        ]
      },
      {
        "id": "review",
        "label": "Revisión",
        "items": [
          "Code review aprobado por al menos 2 devs",
          "Feedback de code review addresseado",
          "QA sign-off obtenido",
          "Product owner revisó funcionalidad",
          "Designer sign-off (si hay cambios UI/UX)",
          "Security review si toca autenticación/datos sensibles",
          "Arquitecto revisó si hay cambios estructurales",
          "Legal/compliance revisó si toca datos personales",
          "Performance review si es feature crítico",
          "Accessibility review por especialista",
          "Revisión de i18n por team de localización",
          "DevOps/SRE revisó deployment plan",
          "DBA revisó queries/migraciones",
          "Tech lead dio visto bueno final",
          "Pair programming completado para secciones críticas",
          "Mob review hecho si cambios son transversales",
          "Retrospective mini si feature duró > 2 sprints",
          "Stakeholders externos notificados si aplica",
          "Dependencies de otros equipos validadas",
          "Release notes reviewed por technical writer"
        ]
      },
      {
        "id": "deployment",
        "label": "Deployment",
        "items": [
          "Feature desplegado en staging",
          "Smoke tests en staging pasando",
          "Rollback testeado en staging",
          "Deployment scripts validados",
          "Health checks configurados",
          "Monitoring y alertas activos",
          "Logs centralizados y consultables",
          "Dashboards actualizados con nuevas métricas",
          "Canary deployment configurado (si es critical path)",
          "Feature flags en posición correcta",
          "Blue/green deployment completado",
          "Database migrations ejecutadas sin downtime",
          "Cache invalidado correctamente",
          "CDN actualizado si hay assets nuevos",
          "DNS/routing actualizado si aplica",
          "Load balancer configurado para nuevo servicio",
          "Secrets rotados si fueron expuestos",
          "Backup pre-deploy tomado",
          "Comunicación a usuarios si hay downtime planeado",
          "Post-deploy verification checklist completado"
        ]
      },
      {
        "id": "quality",
        "label": "Calidad",
        "items": [
          "No hay bugs P0/P1 conocidos",
          "Performance dentro de SLA acordado",
          "Tiempo de respuesta < 200ms en p95",
          "Error rate < 0.1% en producción",
          "Accesibilidad cumple WCAG 2.1 AA",
          "SEO optimizado (si es público)",
          "Security scan sin vulnerabilidades high/critical",
          "Compliance validado (GDPR, CCPA si aplica)",
          "UX validada con usuarios reales (si es feature grande)",
          "A/B test configurado si hay experimento",
          "Analytics events implementados",
          "Conversión funnel testeado",
          "No hay memory leaks detectados",
          "Resource cleanup (conexiones, handles) verificado",
          "Graceful degradation implementado",
          "Fallback behavior definido",
          "Retry logic con backoff exponencial",
          "Circuit breaker configurado para dependencies externas",
          "Rate limiting implementado si es API pública",
          "Audit logs capturando acciones críticas"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Qué es Definition of Done y por qué importa",
        "body": "<p>Definition of Done (DoD) es el contrato de calidad del equipo: la checklist que determina si una user story está realmente terminada. Sin DoD, 'terminado' es subjetivo: para un dev significa código pusheado, para QA significa testeado, para el PO significa desplegado. Esa ambigüedad genera <strong>trabajo incompleto</strong> que vuelve en forma de bugs, retrabajos y deuda técnica.</p><p>Un DoD sólido tiene tres capas: <strong>1) Estándares técnicos</strong> (tests, code review, cobertura), <strong>2) Validación funcional</strong> (QA, PO sign-off, acceptance criteria cumplidos), <strong>3) Preparación para producción</strong> (docs, deployment checklist, monitoring). No es una wishlist infinita; es lo <strong>mínimo no negociable</strong> para considerar algo listo.</p><p>Error común: DoD demasiado laxo ('código funciona en mi máquina') o demasiado estricto (requiere 100% cobertura incluso en código trivial). El balance: lo suficientemente riguroso para mantener calidad, lo suficientemente pragmático para no bloquear progreso.</p><p>Evoluciona el DoD cada retro: si bugs de producción revelan gaps (ej: rollback no testeado), agregá ese ítem. Si algo nunca aplica (ej: 'legal review' en features internos), sacalo o marcalo 'si aplica'.</p>"
      },
      {
        "h2": "Cómo implementar DoD en tu equipo desde cero",
        "body": "<p>Paso 1: <strong>Workshop de 1 hora</strong>. Juntá dev, QA, PO, ops. Pregunta: '¿Qué condiciones deben cumplirse para que yo confíe en que esto va a prod sin explotarnos?'. Cada rol aporta su perspectiva: devs hablan de tests/refactoring, QA de cobertura funcional, ops de deployment/rollback, PO de acceptance criteria.</p><p>Paso 2: <strong>Agrupa ítems en categorías</strong> (dev, testing, docs, deployment, quality). Esto evita listas planas de 50 bullets que nadie lee. Categorías = cognitive chunks manejables.</p><p>Paso 3: <strong>Prioriza must-haves vs nice-to-haves</strong>. Un DoD de 40 ítems donde 30 son opcionales no sirve. Definí 10-15 no negociables (ej: tests pasando, code review, QA sign-off) y 5-10 condicionales (ej: security review solo si toca authn/authz).</p><p>Paso 4: <strong>Haz visible el DoD</strong>. Ponelo en Jira/Linear como checklist templatizada en cada ticket. En daily standup, el dev dice 'Feature lista, solo falta DoD item 8: docs'. Hace el progreso transparente.</p><p>Paso 5: <strong>Audita en retro</strong>. Si un bug llegó a prod porque faltó un paso del DoD, discutí si el DoD era claro, si fue ignorado, o si falta enforcement (ej: CI debe bloquear merge si tests no pasan).</p>"
      },
      {
        "h2": "DoD para equipos remotos y asincrónicos",
        "body": "<p>Desafío: sin stand-ups presenciales, es difícil validar que el DoD se cumplió. Solución: <strong>automatización + async accountability</strong>. Ítems técnicos (linter, tests, cobertura) los valida CI: pipeline rojo = merge bloqueado. Ítems humanos (code review, QA) los trackea la herramienta: PR no mergea hasta 2 approvals, ticket no pasa a 'Done' hasta QA movió a 'Verified'.</p><p>Usa <strong>checklists en PRs</strong>. Plantilla en GitHub/GitLab: markdown con checkboxes del DoD. El dev tickea lo que cumplió, reviewers validan. Ejemplo:</p><pre>- [x] Tests unitarios pasando\n- [x] Cobertura > 80%\n- [ ] Docs actualizados\n- [x] QA sign-off</pre><p>Si algo queda sin checkear, el PR no se aprueba hasta que se complete o se justifique (comentario: 'docs no aplica porque es fix interno').</p><p>Para ítems async como 'PO review', usá <strong>labels/tags</strong> en Jira: ticket tiene label 'needs-po-review', PO filtra por ese label 1-2 veces/día, da feedback, quita label. Evita bloqueos de 'esperando que el PO se conecte'.</p><p>Truco pro: DoD debe ser <strong>self-service</strong>. Si un ítem requiere conocimiento tribal ('pedir acceso a X sistema'), documenta el how-to en el DoD mismo con link. Ej: 'Deploy to staging (see runbook)'.</p>"
      },
      {
        "h2": "Errores comunes y cómo evitarlos",
        "body": "<p><strong>Error 1: DoD cambia cada sprint</strong>. Genera confusión. El DoD debe ser estable salvo cambios deliberados en retro. Si cambia 3 veces por sprint, el equipo no lo internaliza.</p><p><strong>Error 2: DoD es aspiracional, no realista</strong>. 'Cobertura 100%', 'cero deuda técnica' suenan bien pero son inalcanzables. El DoD debe reflejar lo que <strong>podemos cumplir sostenidamente</strong>, no la utopía. Mejor '> 80% cobertura en lógica crítica' que '100% siempre'.</p><p><strong>Error 3: DoD es solo técnico</strong>. Falta el lado producto: '¿Cumple los acceptance criteria?', '¿PO lo vio funcionando?'. Un feature técnicamente perfecto pero que no resuelve la necesidad del usuario no está done.</p><p><strong>Error 4: No hay enforcement</strong>. El DoD queda en un Google Doc que nadie lee. Solución: hazlo parte del workflow (CI checks, PR templates, Jira automation que no permite cerrar ticket sin completar checklist).</p><p><strong>Error 5: DoD idéntico para todos los tipos de trabajo</strong>. Un bugfix P0 en prod no puede tener el mismo DoD que un feature nuevo. Definí <strong>DoD por tipo</strong>: hotfix (mínimo: tests críticos, rollback plan), feature (completo: tests, docs, QA, PO), spike técnico (doc de hallazgos + decisión de arquitectura).</p><p>Principio rector: el DoD debe ser <strong>habilitador, no bloqueador</strong>. Si el equipo lo ve como burocracia, algo está mal. Debe dar confianza de que lo que deployamos no va a romper producción.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿El DoD es lo mismo que acceptance criteria?",
        "a": "No. Acceptance criteria son específicos de cada user story ('el usuario puede filtrar por fecha'); el DoD aplica a TODAS las stories ('tests pasando', 'code review hecho')."
      },
      {
        "q": "¿Quién define el DoD: el equipo o el Scrum Master?",
        "a": "El equipo completo (dev, QA, PO). El SM facilita la conversación pero no impone. El ownership compartido genera adherencia."
      },
      {
        "q": "¿Podemos tener DoD diferente por tipo de tarea?",
        "a": "Sí y es recomendable. Un hotfix urgente tiene DoD mínimo (tests críticos, rollback); un feature grande tiene DoD completo (docs, QA extensivo, monitoreo)."
      },
      {
        "q": "¿Qué pasa si no cumplimos el DoD antes del final del sprint?",
        "a": "La story no cuenta como terminada, vuelve al backlog. Esto genera presión sana para cumplir estándares o renegociar scope con el PO antes."
      }
    ]
  },
  "en": {
    "pageTitle": "Definition of Done Generator | Genfy",
    "metaDesc": "Definition of Done checklist for agile sprints. Clear completeness criteria your team can adopt and adapt today.",
    "h1": "Definition of Done Generator",
    "intro": "Generate solid Definition of Done checklists for your user stories. Proven criteria that eliminate ambiguity and improve sprint quality.",
    "tag": "Work",
    "filterLabel": "Category",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "development",
        "label": "Development",
        "items": [
          "Code meets team style guide",
          "Unit tests written and passing",
          "Code coverage > 80% in module",
          "No linter warnings",
          "No pending TODO/FIXME comments",
          "Business logic covered by tests",
          "Edge cases identified and tested",
          "Refactoring completed (no new tech debt)",
          "Dependencies updated without vulnerabilities",
          "Code optimized (no unnecessary O(n²) loops)",
          "Variables and functions have descriptive names",
          "Functions < 20 lines of code",
          "No code duplication (DRY applied)",
          "Logs and metrics implemented",
          "Feature flags configured if applicable",
          "Configuration separated from code (env vars)",
          "Secrets not committed (validated with git-secrets)",
          "DB migrations tested (up and down)",
          "Rollback plan documented",
          "No pending merge conflicts"
        ]
      },
      {
        "id": "testing",
        "label": "Testing",
        "items": [
          "Integration tests passing",
          "E2E tests executed in staging",
          "Happy path covered",
          "Error cases covered",
          "Regression tests updated",
          "Performance tests executed (if applicable)",
          "Load tests validated (if critical feature)",
          "Accessibility tested (WCAG AA)",
          "Cross-browser compatibility verified",
          "Responsive design validated (mobile, tablet, desktop)",
          "Manual tests on real devices",
          "Security testing executed (OWASP Top 10)",
          "Penetration testing if touching auth/payments",
          "Input validation sanitized",
          "Internationalization tests (i18n)",
          "Tests pass in CI/CD pipeline",
          "No skipped tests without justification",
          "Mocks/stubs clean and maintainable",
          "Tests are deterministic (not flaky)",
          "Test data anonymized if from prod"
        ]
      },
      {
        "id": "documentation",
        "label": "Documentation",
        "items": [
          "README updated with changes",
          "Comments in code for complex logic",
          "API docs generated (Swagger/OpenAPI)",
          "Runbook updated for ops",
          "Changelog.md with feature entry",
          "Architecture diagrams updated (if applicable)",
          "ADR (Architecture Decision Record) written if tech decision",
          "Troubleshooting guide updated",
          "Local setup instructions validated",
          "Environment docs (staging, prod) updated",
          "User stories with verified acceptance criteria",
          "Usage examples documented",
          "API endpoints with curl/postman examples",
          "DB schemas updated",
          "External dependencies documented",
          "Feature toggle states explained",
          "Incident post-mortem if occurred",
          "Internal knowledge base updated",
          "Onboarding docs reviewed",
          "Technical glossary updated"
        ]
      },
      {
        "id": "review",
        "label": "Review",
        "items": [
          "Code review approved by at least 2 devs",
          "Code review feedback addressed",
          "QA sign-off obtained",
          "Product owner reviewed functionality",
          "Designer sign-off (if UI/UX changes)",
          "Security review if touching auth/sensitive data",
          "Architect reviewed if structural changes",
          "Legal/compliance reviewed if touching personal data",
          "Performance review if critical feature",
          "Accessibility review by specialist",
          "i18n review by localization team",
          "DevOps/SRE reviewed deployment plan",
          "DBA reviewed queries/migrations",
          "Tech lead gave final approval",
          "Pair programming completed for critical sections",
          "Mob review done if changes are cross-cutting",
          "Mini retrospective if feature lasted > 2 sprints",
          "External stakeholders notified if applicable",
          "Dependencies from other teams validated",
          "Release notes reviewed by technical writer"
        ]
      },
      {
        "id": "deployment",
        "label": "Deployment",
        "items": [
          "Feature deployed to staging",
          "Smoke tests passing in staging",
          "Rollback tested in staging",
          "Deployment scripts validated",
          "Health checks configured",
          "Monitoring and alerts active",
          "Logs centralized and queryable",
          "Dashboards updated with new metrics",
          "Canary deployment configured (if critical path)",
          "Feature flags in correct position",
          "Blue/green deployment completed",
          "Database migrations executed without downtime",
          "Cache invalidated correctly",
          "CDN updated if new assets",
          "DNS/routing updated if applicable",
          "Load balancer configured for new service",
          "Secrets rotated if exposed",
          "Pre-deploy backup taken",
          "User communication if planned downtime",
          "Post-deploy verification checklist completed"
        ]
      },
      {
        "id": "quality",
        "label": "Quality",
        "items": [
          "No known P0/P1 bugs",
          "Performance within agreed SLA",
          "Response time < 200ms at p95",
          "Error rate < 0.1% in production",
          "Accessibility meets WCAG 2.1 AA",
          "SEO optimized (if public)",
          "Security scan without high/critical vulnerabilities",
          "Compliance validated (GDPR, CCPA if applicable)",
          "UX validated with real users (if large feature)",
          "A/B test configured if experiment",
          "Analytics events implemented",
          "Conversion funnel tested",
          "No memory leaks detected",
          "Resource cleanup (connections, handles) verified",
          "Graceful degradation implemented",
          "Fallback behavior defined",
          "Retry logic with exponential backoff",
          "Circuit breaker configured for external dependencies",
          "Rate limiting implemented if public API",
          "Audit logs capturing critical actions"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "What is Definition of Done and why it matters",
        "body": "<p>Definition of Done (DoD) is the team's quality contract: the checklist that determines if a user story is truly finished. Without DoD, 'done' is subjective: for a dev it means code pushed, for QA it means tested, for PO it means deployed. That ambiguity generates <strong>incomplete work</strong> that returns as bugs, rework and technical debt.</p><p>A solid DoD has three layers: <strong>1) Technical standards</strong> (tests, code review, coverage), <strong>2) Functional validation</strong> (QA, PO sign-off, acceptance criteria met), <strong>3) Production readiness</strong> (docs, deployment checklist, monitoring). It's not an infinite wishlist; it's the <strong>non-negotiable minimum</strong> to consider something ready.</p><p>Common mistake: DoD too lax ('works on my machine') or too strict (requires 100% coverage even in trivial code). The balance: rigorous enough to maintain quality, pragmatic enough not to block progress.</p><p>Evolve DoD each retro: if production bugs reveal gaps (e.g., rollback not tested), add that item. If something never applies (e.g., 'legal review' on internal features), remove it or mark 'if applicable'.</p>"
      },
      {
        "h2": "How to implement DoD in your team from scratch",
        "body": "<p>Step 1: <strong>1-hour workshop</strong>. Gather dev, QA, PO, ops. Ask: 'What conditions must be met for me to trust this goes to prod without exploding?'. Each role contributes perspective: devs talk tests/refactoring, QA functional coverage, ops deployment/rollback, PO acceptance criteria.</p><p>Step 2: <strong>Group items into categories</strong> (dev, testing, docs, deployment, quality). Avoids flat 50-bullet lists nobody reads. Categories = manageable cognitive chunks.</p><p>Step 3: <strong>Prioritize must-haves vs nice-to-haves</strong>. A 40-item DoD where 30 are optional doesn't work. Define 10-15 non-negotiables (e.g., tests passing, code review, QA sign-off) and 5-10 conditionals (e.g., security review only if touching authn/authz).</p><p>Step 4: <strong>Make DoD visible</strong>. Put it in Jira/Linear as templated checklist on each ticket. In daily standup, dev says 'Feature ready, just missing DoD item 8: docs'. Makes progress transparent.</p><p>Step 5: <strong>Audit in retro</strong>. If a bug reached prod because a DoD step was missed, discuss if DoD was clear, was ignored, or lacks enforcement (e.g., CI should block merge if tests don't pass).</p>"
      },
      {
        "h2": "DoD for remote and async teams",
        "body": "<p>Challenge: without in-person stand-ups, it's hard to validate DoD was met. Solution: <strong>automation + async accountability</strong>. Technical items (linter, tests, coverage) validated by CI: red pipeline = merge blocked. Human items (code review, QA) tracked by tool: PR doesn't merge until 2 approvals, ticket doesn't move to 'Done' until QA moved to 'Verified'.</p><p>Use <strong>checklists in PRs</strong>. Template in GitHub/GitLab: markdown with DoD checkboxes. Dev ticks what's met, reviewers validate. Example:</p><pre>- [x] Unit tests passing\n- [x] Coverage > 80%\n- [ ] Docs updated\n- [x] QA sign-off</pre><p>If something unchecked, PR not approved until completed or justified (comment: 'docs not applicable because internal fix').</p><p>For async items like 'PO review', use <strong>labels/tags</strong> in Jira: ticket has 'needs-po-review' label, PO filters by that 1-2 times/day, gives feedback, removes label. Avoids 'waiting for PO to log on' blocks.</p><p>Pro trick: DoD must be <strong>self-service</strong>. If an item requires tribal knowledge ('request access to X system'), document the how-to in DoD itself with link. E.g., 'Deploy to staging (see runbook)'.</p>"
      },
      {
        "h2": "Common mistakes and how to avoid them",
        "body": "<p><strong>Mistake 1: DoD changes every sprint</strong>. Creates confusion. DoD should be stable except deliberate changes in retro. If it changes 3 times per sprint, team doesn't internalize it.</p><p><strong>Mistake 2: DoD is aspirational, not realistic</strong>. '100% coverage', 'zero tech debt' sound good but are unattainable. DoD should reflect what we <strong>can sustainably achieve</strong>, not utopia. Better '> 80% coverage in critical logic' than '100% always'.</p><p><strong>Mistake 3: DoD is only technical</strong>. Missing product side: 'Does it meet acceptance criteria?', 'Did PO see it working?'. A technically perfect feature that doesn't solve user need isn't done.</p><p><strong>Mistake 4: No enforcement</strong>. DoD lives in a Google Doc nobody reads. Solution: make it part of workflow (CI checks, PR templates, Jira automation that doesn't allow closing ticket without completing checklist).</p><p><strong>Mistake 5: Identical DoD for all work types</strong>. A P0 prod hotfix can't have same DoD as new feature. Define <strong>DoD by type</strong>: hotfix (minimal: critical tests, rollback plan), feature (complete: tests, docs, QA, PO), tech spike (findings doc + architecture decision).</p><p>Guiding principle: DoD should be <strong>enabler, not blocker</strong>. If team sees it as bureaucracy, something's wrong. It should give confidence that what we deploy won't break production.</p>"
      }
    ],
    "faq": [
      {
        "q": "Is DoD the same as acceptance criteria?",
        "a": "No. Acceptance criteria are specific to each user story ('user can filter by date'); DoD applies to ALL stories ('tests passing', 'code review done')."
      },
      {
        "q": "Who defines DoD: the team or Scrum Master?",
        "a": "The whole team (dev, QA, PO). SM facilitates conversation but doesn't impose. Shared ownership generates adherence."
      },
      {
        "q": "Can we have different DoD per task type?",
        "a": "Yes and recommended. Urgent hotfix has minimal DoD (critical tests, rollback); large feature has complete DoD (docs, extensive QA, monitoring)."
      },
      {
        "q": "What if we don't meet DoD before sprint end?",
        "a": "Story doesn't count as done, returns to backlog. Creates healthy pressure to meet standards or renegotiate scope with PO beforehand."
      }
    ]
  }
};
