<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

<xsl:template match="/">
  <html lang="es">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>Sitemap — Genfy</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, sans-serif; margin: 0; padding: 2rem 1rem; background: #fafafa; color: #18181b; line-height: 1.5; }
        @media (prefers-color-scheme: dark) { body { background: #09090b; color: #e4e4e7; } }
        .container { max-width: 1100px; margin: 0 auto; }
        h1 { font-size: 1.5rem; margin: 0 0 .5rem; }
        .meta { font-size: .875rem; color: #71717a; margin-bottom: 1.5rem; }
        .meta a { color: inherit; }
        table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e4e4e7; border-radius: 8px; overflow: hidden; }
        @media (prefers-color-scheme: dark) { table { background: #18181b; border-color: #27272a; } }
        th { background: #f4f4f5; text-align: left; padding: .75rem 1rem; font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: #52525b; border-bottom: 1px solid #e4e4e7; }
        @media (prefers-color-scheme: dark) { th { background: #1a1a1c; color: #a1a1aa; border-color: #27272a; } }
        td { padding: .625rem 1rem; font-size: .875rem; border-bottom: 1px solid #f4f4f5; vertical-align: top; }
        @media (prefers-color-scheme: dark) { td { border-color: #27272a; } }
        tr:last-child td { border-bottom: none; }
        tr:hover td { background: #fafafa; }
        @media (prefers-color-scheme: dark) { tr:hover td { background: #1a1a1c; } }
        a { color: #2563eb; text-decoration: none; word-break: break-all; }
        a:hover { text-decoration: underline; }
        @media (prefers-color-scheme: dark) { a { color: #60a5fa; } }
        .num { color: #71717a; font-variant-numeric: tabular-nums; font-size: .8125rem; }
        .lang-list { display: flex; gap: .375rem; flex-wrap: wrap; }
        .lang-tag { display: inline-block; padding: .125rem .375rem; background: #f4f4f5; border-radius: 4px; font-size: .6875rem; font-family: ui-monospace, monospace; color: #52525b; }
        @media (prefers-color-scheme: dark) { .lang-tag { background: #27272a; color: #a1a1aa; } }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Sitemap — Genfy</h1>
        <xsl:choose>
          <xsl:when test="s:sitemapindex">
            <p class="meta">
              <xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemap(s) — <a href="https://www.sitemaps.org/protocol.html">protocolo sitemaps.org</a>
            </p>
            <table>
              <thead><tr><th>#</th><th>URL</th><th>Última actualización</th></tr></thead>
              <tbody>
                <xsl:for-each select="s:sitemapindex/s:sitemap">
                  <tr>
                    <td class="num"><xsl:value-of select="position()"/></td>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="num"><xsl:value-of select="s:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>
          <xsl:otherwise>
            <p class="meta">
              <xsl:value-of select="count(s:urlset/s:url)"/> URLs — <a href="https://www.sitemaps.org/protocol.html">protocolo sitemaps.org</a>
            </p>
            <table>
              <thead><tr><th>#</th><th>URL</th><th>Última actualización</th><th>Idiomas</th></tr></thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td class="num"><xsl:value-of select="position()"/></td>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="num"><xsl:value-of select="substring(s:lastmod, 1, 10)"/></td>
                    <td>
                      <div class="lang-list">
                        <xsl:for-each select="xhtml:link[@rel='alternate']">
                          <span class="lang-tag"><xsl:value-of select="@hreflang"/></span>
                        </xsl:for-each>
                      </div>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:otherwise>
        </xsl:choose>
      </div>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>
