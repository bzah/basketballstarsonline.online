import { SITE, LANGS, type Lang } from "./site";
import type { Game } from "@/data/games";

export function pageMeta({
  lang, title, description, path, image, type = "website",
}: { lang: Lang; title: string; description: string; path: string; image?: string; type?: string }) {
  const url = `${SITE.url}${lang === "en" ? "" : "/" + lang}${path}`;
  const ogImage = image || SITE.ogImage;
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: SITE.keywords },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: localeTag(lang) },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE.twitter },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];
  for (const l of LANGS) if (l !== lang) meta.push({ property: "og:locale:alternate", content: localeTag(l) });

  const links: Array<Record<string, string>> = [
    { rel: "canonical", href: url },
    ...LANGS.map((l) => ({ rel: "alternate", hreflang: l, href: `${SITE.url}${l === "en" ? "" : "/" + l}${path}` })),
    { rel: "alternate", hreflang: "x-default", href: `${SITE.url}${path}` },
  ];
  return { meta, links };
}

function localeTag(l: Lang) {
  return ({ en: "en_US", es: "es_ES", fr: "fr_FR", de: "de_DE", it: "it_IT", tr: "tr_TR" } as const)[l];
}

export function jsonLd(obj: any) {
  return { type: "application/ld+json", children: JSON.stringify(obj) };
}

export function gameSoftwareApp(game: Game) {
  return {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    name: game.title, applicationCategory: "GameApplication",
    operatingSystem: "Web Browser", description: game.description,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", ratingCount: "1284" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    screenshot: SITE.ogImage,
  };
}

export function videoGame(game: Game) {
  return {
    "@context": "https://schema.org", "@type": "VideoGame",
    name: game.title, genre: game.category, playMode: "SinglePlayer",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}

export function faqLd(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: qa.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org", "@type": "WebSite",
    name: SITE.name, url: SITE.url,
    potentialAction: { "@type": "SearchAction", target: `${SITE.url}/games?q={search_term_string}`, "query-input": "required name=search_term_string" },
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org", "@type": "Organization",
    name: SITE.name, url: SITE.url, email: SITE.email,
    logo: `${SITE.url}/logo.png`,
    contactPoint: { "@type": "ContactPoint", email: SITE.email, contactType: "customer support" },
    foundingDate: "2024",
  };
}
