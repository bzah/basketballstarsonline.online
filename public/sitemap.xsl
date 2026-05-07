<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:html="http://www.w3.org/TR/REC-html40">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Basketball Stars Online</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #333; background: #fff; margin: 0; padding: 0; }
          .header { background: linear-gradient(135deg, #ff6a2b, #e94560); color: #fff; padding: 30px 40px; }
          .header h1 { margin: 0 0 6px; font-size: 24px; }
          .header p { margin: 0; opacity: 0.92; font-size: 14px; }
          .container { padding: 24px 40px; }
          .meta { color: #666; font-size: 13px; margin-bottom: 16px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden; }
          th { background: #f7f7f9; text-align: left; padding: 12px 16px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #555; border-bottom: 1px solid #e5e5e5; }
          td { padding: 10px 16px; font-size: 13px; border-bottom: 1px solid #f0f0f0; }
          tr:hover td { background: #fafbff; }
          a { color: #ff6a2b; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .footer { padding: 16px 40px; color: #999; font-size: 12px; border-top: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🏀 XML Sitemap</h1>
          <p>Basketball Stars Online — Generated for search engines</p>
        </div>
        <div class="container">
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              <p class="meta">This is a <strong>sitemap index</strong> with <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sub-sitemaps.</p>
              <table>
                <tr><th>Sitemap URL</th><th>Last Modified</th></tr>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <p class="meta">This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
              <table>
                <tr><th>URL</th><th>Priority</th><th>Change Freq</th><th>Last Modified</th></tr>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                    <td><xsl:value-of select="sitemap:priority"/></td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </div>
        <div class="footer">XML Sitemap generated for Basketball Stars Online</div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
