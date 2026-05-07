import { writeFileSync, mkdirSync } from "fs";
import { GAMES, CATEGORIES } from "../src/data/games.ts";

const SITE = "https://basketballstarsonline.online";
const LANGS = ["en", "es", "fr", "de", "it", "tr"];
const STATIC = ["about", "contact", "privacy", "terms", "cookies", "dmca", "legal", "parents"];

const url = (lang, path) => `${SITE}${lang === "en" ? "" : "/" + lang}${path}`;
const alts = (path) => LANGS.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${url(l, path)}"/>`).join("") + `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${path}"/>`;
const entry = (lang, path, prio = "0.8", freq = "weekly") => `<url><loc>${url(lang, path)}</loc>${alts(path)}<changefreq>${freq}</changefreq><priority>${prio}</priority></url>`;
const wrap = (items) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${items.join("\n")}\n</urlset>`;

for (const lang of LANGS) {
  mkdirSync(`public/sitemaps/${lang}`, { recursive: true });
  writeFileSync(`public/sitemaps/${lang}/games.xml`, wrap(GAMES.map(g => entry(lang, `/game/${g.slug}`, "0.9"))));
  writeFileSync(`public/sitemaps/${lang}/categories.xml`, wrap(CATEGORIES.map(c => entry(lang, `/category/${c.slug}`, "0.7"))));
  writeFileSync(`public/sitemaps/${lang}/pages.xml`, wrap([entry(lang, "/", "1.0", "daily"), entry(lang, "/games", "0.9"), entry(lang, "/categories", "0.7"), ...STATIC.map(p => entry(lang, `/${p}`, "0.5", "monthly"))]));
}
const idx = LANGS.flatMap(l => ["games", "categories", "pages"].map(s => `<sitemap><loc>${SITE}/sitemaps/${l}/${s}.xml</loc></sitemap>`));
writeFileSync("public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${idx.join("\n")}\n</sitemapindex>`);
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log("OK");
