# Basketballstarsonline.online

📋 Prompt Template — Full Version:

أنشئ لي موقع ألعاب (Game Portal) احترافي بنفس بنية poki.com مع تصميم مختلف يناسب النيش . المعلومات الأساسية:

Domain: [Basketballstarsonline.online]
Keyword Principal: [basketball legends unblocked]
Keywords Secondaires: [basketball legends unblocked,Basketball stars online,Basketball stars,Basketball ,free games]
Email: [game@Basketballstarsonline.online]

الألعاب (Games): Category Analyse With Ai الاسم Slug Iframe URL Category الاسم Slug Iframe URL

1	Basketball Stars
		https://st.8games.net/7/igra-basketbol-golovami-na-dvoikh				
2	Basketball Stars 3
		https://st.8games.net/dasha1/igry-nikelodeon/basketball-stars-three/en/				
3	Basketball Simulator
		https://g1.igru.net/6/igra-simulyator-basketbola/				
4	Basketball School
		https://st.8games.net/6/igra-shkola-basketbola/				
5	Basketball Legends 2020
		https://st.8games.net/7/igra-legendy-basketbola-2020/index-en.html				
6	Halloween Basketball Legends
		https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra-basketbolnye-legendy-khellouina.swf				
7	Basketball Jam Shots
		https://st.8games.net/6/basketball-jam-shots/				
8	Basketball Shots 3D
		https://st.8games.net/7/igra-basketbolnye-broski-3d/index-en.html				
9	On Fire : Basketball Shots
		https://st.8games.net/7/igra-v-ogne-basketbolnye-broski/				
10	Basketball Legends
		https://st.8games.net/lib/ruffle/?game=https://st.8games.net/igra-legendy-basketbola.swf				
11	Flick Basketball
		https://g1.igru.net/7/igra-flik-basketbol/				
12	Basketball Master
		https://st.8games.net/7/igra-basketbol-profi/				
13	Basketball Five Hoops
		https://st.8games.net/10/igra-pyat-broskov/				
14	"Basketball Star 2
"		https://st.8games.net/10/igra-zvezda-basketbola-2/				
15	Basketball Stars 2026
		https://st.8games.net/7/8g/igra-zvjozdy-basketbola-2026/				
16	Basket Swooshes
		https://st.8games.net/7/igra-basketbol-brosok-so-svistom/				
17	Helix Dunk 3D
		https://g1.igru.net/7/igra-kheliks-dank/				
18	Basket Champs
		https://st.8games.net/6/igra-chempionat-po-basketbolu/				
19	Basket Champ 2
		https://st.8games.net/10/igra-chempion-basketbola-2/				
20	Dunk Hoop
		https://g1.igru.net/igry-na-skorost-i-reaktsiyu/igra-pojmaj-myach/				
21	Basket Random
		https://st.8games.net/10/igra-sluchajnyj-basketbol/				
22	Shot Shot
		https://html5.gamedistribution.com/c2e862b3aded441daea92346bd5f8bbb/				




Stack: React + Vite + Tailwind + TypeScript + shadcn/ui
التصميم: تصميم فريد يناسب النيش (ألوان، خطوط، أيقونات مختلفة) — ماشي نفس تصميم candy
i18n: 6 لغات (en, es, fr, de, it, tr) مع translations كاملة
الصفحات:
    Homepage (اللعبة الرئيسية embedded + all games grid)
    صفحة لكل لعبة (/game/slug) مع iframe + FAQ + related games
    صفحات Categories (/category/slug)
    About, Contact, Privacy Policy, Terms, Cookie Policy, DMCA, Legal Notice, Parents Info
البنية:
    كل لعبة فيها HTML wrapper فـ /public/games/
    Game data مركزي فـ src/data/games.ts
    Cover images لكل لعبة (AI generated)
    Favicon + OG image يناسبو النيش
الميزات:
    Fullscreen toggle, Mobile responsive, Search
    Similar/Related games, Category navigation, Language selector
Footer: روابط Popular Games + الصفحات القانونية
Game Cards: عرض وصف مقتطع (truncated) فـ كل card باش يزيد keyword density

SEO الكامل: Meta Tags (ديناميكية لكل صفحة):

title (<60 chars) + meta description (<160 chars)
OG tags: og:title, og:description, og:type, og:url, og:site_name, og:locale (+ alternates), og:image
Twitter Cards: twitter:card, twitter:site, twitter:title, twitter:description, twitter:image
Canonical URL + hreflang tags لـ 6 لغات + x-default
robots: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1

Schema.org (JSON-LD) — Homepage:

WebSite — اسم الموقع + SearchAction
Organization — الاسم، URL، email، logo، contactPoint، address، foundingDate
SoftwareApplication — اللعبة الرئيسية: name، category، OS، description، aggregateRating، offers (free)، screenshot
CollectionPage + ItemList — قائمة كل الألعاب مع position + VideoGame لكل وحدة
FAQPage — 3 أسئلة عن اللعبة الرئيسية (free?, mobile?, unblocked?)
BreadcrumbList — Home
VideoObject (اختياري إذا كاين videoId) — name، thumbnailUrl، embedUrl، duration

Schema.org (JSON-LD) — صفحة كل لعبة (/game/slug):

SoftwareApplication — نفس البنية ديال الرئيسية ولكن باللعبة الحالية
VideoGame — name، genre، playMode، isAccessibleForFree، offers
FAQPage — 3 أسئلة خاصة باللعبة
BreadcrumbList — Home > Category > Game Name (3 مستويات)
VideoObject (اختياري إذا كاين videoId)

Sitemaps: البنية:

public/ ├── sitemap.xml ← Master index يشير لـ 18 sub-sitemap ├── robots.txt ← Allow all + Sitemap reference └── sitemaps/ ├── en/ │ ├── games.xml ← كل الألعاب بـ hreflang 6 لغات │ ├── categories.xml ← كل الكاتيغوريات بـ hreflang │ └── pages.xml ← الصفحات الثابتة (about, contact, privacy, terms, cookie-policy, dmca, legal, parents) ├── es/ │ ├── games.xml │ ├── categories.xml │ └── pages.xml ├── fr/ (نفس البنية) ├── de/ (نفس البنية) ├── it/ (نفس البنية) └── tr/ (نفس البنية) Master sitemap.xml:
<?xml version="1.0" encoding="UTF-8"?> <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> <sitemap><loc>https://[domain]/sitemaps/en/games.xml</loc></sitemap> <sitemap><loc>https://[domain]/sitemaps/en/categories.xml</loc></sitemap> <sitemap><loc>https://[domain]/sitemaps/en/pages.xml</loc></sitemap> <!-- نفس الشي لـ es, fr, de, it, tr --> </sitemapindex>

شكل كل URL فـ sitemap:
<url> <loc>https://[domain]/game/[slug]</loc> <xhtml:link rel="alternate" hreflang="en" href="https://[domain]/game/[slug]"/> <xhtml:link rel="alternate" hreflang="es" href="https://[domain]/es/game/[slug]"/> <xhtml:link rel="alternate" hreflang="fr" href="https://[domain]/fr/game/[slug]"/> <xhtml:link rel="alternate" hreflang="de" href="https://[domain]/de/game/[slug]"/> <xhtml:link rel="alternate" hreflang="it" href="https://[domain]/it/game/[slug]"/> <xhtml:link rel="alternate" hreflang="tr" href="https://[domain]/tr/game/[slug]"/> <xhtml:link rel="alternate" hreflang="x-default" href="https://[domain]/game/[slug]"/> <changefreq>weekly</changefreq> <priority>0.9</priority> </url>

robots.txt:

User-agent: * Allow: / Sitemap: https://[domain]/sitemap.xml

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1b4095fb-6f16-453d-ad79-f792cf5daf8e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
