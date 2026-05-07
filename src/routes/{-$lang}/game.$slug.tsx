import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GAMES, getGame, relatedGames, CATEGORIES } from "@/data/games";
import { useLang } from "@/components/Layout";
import { GameCard } from "@/components/GameCard";
import { pageMeta, jsonLd, gameSoftwareApp, videoGame, faqLd, breadcrumbLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/{-$lang}/game/$slug")({
  head: ({ params }) => {
    const game = getGame(params.slug);
    const lang = (params.lang ?? "en") as any;
    if (!game) return { meta: [{ title: "Game not found" }] };
    const cat = CATEGORIES.find((c) => c.slug === game.category)!;
    const m = pageMeta({
      lang, path: `/game/${game.slug}`,
      title: `${game.title} — Play Free Online | Basketball Stars Online`,
      description: game.shortDescription,
      image: `${SITE.url}/covers/${game.slug}.jpg`,
    });
    const faq = [
      { q: `Is ${game.title} free?`, a: `Yes — ${game.title} is 100% free to play, no download required.` },
      { q: `Can I play ${game.title} on mobile?`, a: `Yes, ${game.title} works on phones, tablets and desktop browsers.` },
      { q: `Is ${game.title} unblocked?`, a: `Yes — ${game.title} is unblocked and ready to play anywhere.` },
    ];
    return {
      meta: m.meta, links: m.links,
      scripts: [
        jsonLd(gameSoftwareApp(game)),
        jsonLd(videoGame(game)),
        jsonLd(faqLd(faq)),
        jsonLd(breadcrumbLd([
          { name: "Home", url: SITE.url },
          { name: cat.name, url: `${SITE.url}/category/${cat.slug}` },
          { name: game.title, url: `${SITE.url}/game/${game.slug}` },
        ])),
      ],
    };
  },
  loader: ({ params }) => {
    const game = getGame(params.slug);
    if (!game) throw notFound();
    return { game };
  },
  component: GamePage,
  notFoundComponent: () => <div className="container mx-auto p-10 text-center"><h1>Game not found</h1></div>,
});

function GamePage() {
  const { game } = Route.useLoaderData();
  const lang = useLang();
  const [fs, setFs] = useState(false);
  const related = relatedGames(game.slug, 10);
  const cat = CATEGORIES.find((c) => c.slug === game.category)!;

  return (
    <div className="container mx-auto px-4 py-6">
      <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" params={{ lang: lang === "en" ? undefined : lang } as any} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/category/$slug" params={{ slug: cat.slug, lang: lang === "en" ? undefined : lang } as any} className="hover:text-foreground">{cat.name}</Link>
        <span>/</span>
        <span className="text-foreground">{game.title}</span>
      </nav>

      <h1 className="font-display text-4xl text-foreground md:text-6xl">{game.title}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">{game.shortDescription}</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background shadow-card">
        <div className="flex items-center justify-between bg-secondary px-4 py-2">
          <span className="font-display text-sm tracking-wide text-primary">▶ {game.title}</span>
          <button onClick={() => setFs(!fs)} className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            {fs ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />} Fullscreen
          </button>
        </div>
        <div className={fs ? "fixed inset-0 z-50 bg-black" : "aspect-video"}>
          <iframe src={game.iframe} title={game.title} className="h-full w-full" allow="autoplay; fullscreen" />
          {fs && <button onClick={() => setFs(false)} className="absolute right-4 top-4 z-50 rounded-full bg-primary p-2 text-primary-foreground"><Minimize2 className="h-5 w-5" /></button>}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <article className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur md:p-8">
          <h2 className="font-display text-3xl text-foreground">About {game.title}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            {game.description.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-primary/30 bg-card p-6">
            <h3 className="font-display text-xl text-primary">How to Play</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {game.howToPlay.map((s, i) => (
                <li key={i} className="flex gap-2"><span className="font-bold text-primary">{i + 1}.</span><span>{s}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-card p-6">
            <h3 className="font-display text-xl text-accent">Game Features</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {game.features.map((s, i) => (
                <li key={i} className="flex gap-2"><span className="text-accent">★</span><span>{s}</span></li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-10">
        <h2 className="font-display text-3xl text-foreground">FAQ — {game.title}</h2>
        <div className="mt-6 space-y-3">
          {[
            { q: `Is ${game.title} free to play?`, a: `Yes — ${game.title} is 100% free to play on Basketball Stars Online with no download, no signup and no hidden costs.` },
            { q: `Can I play ${game.title} on mobile?`, a: `Absolutely. ${game.title} is fully mobile-responsive and works on iOS, Android, tablets and desktop browsers.` },
            { q: `Is ${game.title} unblocked at school?`, a: `Yes, ${game.title} is unblocked and works on most school and office networks. If one URL is blocked, our main domain ${SITE.domain} stays accessible.` },
            { q: `What category is ${game.title}?`, a: `${game.title} belongs to the ${cat.name} category — ${cat.description}` },
          ].map((f) => (
            <details key={f.q} className="group rounded-xl border border-border bg-background/40 p-4 open:border-primary">
              <summary className="cursor-pointer list-none font-bold text-foreground flex items-center justify-between">
                <span>{f.q}</span>
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl text-foreground">Related Basketball Games</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {related.map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      </section>
    </div>
  );
}
