import { createFileRoute, Link } from "@tanstack/react-router";
import { GAMES, FEATURED_GAME, CATEGORIES } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { useLang, localePath } from "@/components/Layout";
import { t } from "@/lib/i18n";
import { pageMeta, jsonLd, websiteLd, organizationLd, gameSoftwareApp, faqLd, breadcrumbLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { useState } from "react";
import { Maximize2, Minimize2, Play } from "lucide-react";

export const Route = createFileRoute("/{-$lang}/")({
  head: ({ params }) => {
    const lang = (params.lang ?? "en") as any;
    const m = pageMeta({
      lang, path: "/",
      title: "Basketball Legends Unblocked — Play Basketball Stars Online Free",
      description: "Play Basketball Stars, Basketball Legends Unblocked and 22+ free basketball games online. No download. Mobile-friendly. Instant play.",
    });
    const faq = [
      { q: "Is Basketball Stars free?", a: "Yes, Basketball Stars and every game on our portal is 100% free to play." },
      { q: "Can I play on mobile?", a: "Yes — all our basketball games work on phones, tablets and desktop." },
      { q: "Is Basketball Legends unblocked?", a: "Yes. Our basketball legends games are unblocked and accessible at school or work." },
    ];
    return {
      meta: m.meta, links: m.links,
      scripts: [
        jsonLd(websiteLd()), jsonLd(organizationLd()),
        jsonLd(gameSoftwareApp(FEATURED_GAME)),
        jsonLd(faqLd(faq)),
        jsonLd(breadcrumbLd([{ name: "Home", url: SITE.url }])),
        jsonLd({
          "@context": "https://schema.org", "@type": "CollectionPage",
          name: "All Basketball Games",
          mainEntity: { "@type": "ItemList", itemListElement: GAMES.map((g, i) => ({
            "@type": "ListItem", position: i + 1,
            item: { "@type": "VideoGame", name: g.title, url: `${SITE.url}/game/${g.slug}` }
          })) }
        }),
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  const lang = useLang();
  const [fs, setFs] = useState(false);

  return (
    <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl bg-gradient-hero p-4 shadow-glow sm:rounded-3xl sm:p-6 md:p-10">
        <div className="grid gap-5 md:grid-cols-[1fr,1.4fr] md:items-center md:gap-6">
          <div className="text-white">
            <span className="inline-block rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur sm:text-xs">
              {t(lang, "hero.tag")}
            </span>
            <h1 className="mt-3 font-display text-4xl leading-[0.95] sm:text-5xl md:text-7xl">
              {t(lang, "hero.title")}
            </h1>
            <p className="mt-3 max-w-md text-base text-white/95 sm:mt-4 sm:text-lg">{t(lang, "hero.subtitle")}</p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
              <a href="#play" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-neutral-900 transition-transform hover:scale-105 sm:px-6 sm:text-base">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" /> {t(lang, "cta.play")}
              </a>
              <Link to="/games" params={{ lang: lang === "en" ? undefined : lang } as any} className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/20 sm:px-6 sm:text-base">
                {t(lang, "nav.games")}
              </Link>
            </div>
          </div>
          <div id="play" className="overflow-hidden rounded-xl border-2 border-black/30 bg-background shadow-card sm:rounded-2xl sm:border-4">
            <div className="flex items-center justify-between gap-2 bg-background/90 px-3 py-2">
              <div className="truncate font-display text-xs tracking-wider text-primary sm:text-sm">▶ {FEATURED_GAME.title}</div>
              <button onClick={() => setFs(!fs)} className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold text-foreground hover:bg-primary hover:text-primary-foreground sm:px-3 sm:text-xs">
                {fs ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />} <span className="hidden sm:inline">{fs ? t(lang, "cta.exitFullscreen") : t(lang, "cta.fullscreen")}</span>
              </button>
            </div>
            <div className={fs ? "fixed inset-0 z-50 bg-black" : "aspect-video"}>
              <iframe src={`/embeds/${FEATURED_GAME.slug}.html`} title={FEATURED_GAME.title} className="h-full w-full" allow="autoplay; fullscreen; gamepad" allowFullScreen />
              {fs && (
                <button onClick={() => setFs(false)} className="absolute right-4 top-4 z-50 rounded-full bg-primary p-2 text-primary-foreground">
                  <Minimize2 className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories pills */}
      <section className="mt-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug, lang: lang === "en" ? undefined : lang } as any}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-foreground hover:border-primary hover:text-primary">
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* All games grid */}
      <section className="mt-8">
        <h2 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">{t(lang, "section.all")}</h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{GAMES.length} basketball games — free, unblocked, online.</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {GAMES.map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14 rounded-2xl border border-border bg-card p-6 md:p-10">
        <h2 className="font-display text-3xl text-foreground">{t(lang, "faq.title")}</h2>
        <div className="mt-6 space-y-4">
          {[1,2,3].map((i) => (
            <details key={i} className="group rounded-xl border border-border bg-background/40 p-4">
              <summary className="cursor-pointer font-bold text-foreground">{t(lang, `faq.q${i}`)}</summary>
              <p className="mt-2 text-sm text-muted-foreground">{t(lang, `faq.a${i}`)}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
