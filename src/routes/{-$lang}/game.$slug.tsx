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
    const kw = [
      game.title.toLowerCase(),
      `${game.title.toLowerCase()} unblocked`,
      `${game.title.toLowerCase()} online`,
      `play ${game.title.toLowerCase()}`,
      `${game.title.toLowerCase()} free`,
      `${game.title.toLowerCase()} no download`,
      `${game.title.toLowerCase()} 2 player`,
      `${cat.name.toLowerCase()} basketball games`,
      "basketball games", "basketball stars", "basketball legends",
      "free online basketball", "unblocked basketball games",
      "basketball games for school", "html5 basketball games",
      "browser basketball", "1v1 basketball", "basketball arcade",
      ...game.tags,
    ].join(", ");
    const longDesc = `Play ${game.title} free online — ${game.shortDescription} Enjoy ${game.title} unblocked at school, on mobile, tablet or desktop with no download, no signup and no ads between rounds. Part of the Basketball Stars Online ${cat.name.toLowerCase()} collection.`;
    const m = pageMeta({
      lang, path: `/game/${game.slug}`,
      title: `${game.title} — Play Free Online Unblocked | Basketball Stars Online`,
      description: longDesc.slice(0, 300),
      image: `${SITE.url}/covers/${game.slug}.jpg`,
    });
    m.meta.push({ name: "keywords", content: kw });
    m.meta.push({ name: "author", content: SITE.name });
    m.meta.push({ name: "article:section", content: cat.name });
    m.meta.push({ property: "article:tag", content: kw });
    const faq = [
      { q: `Is ${game.title} free to play?`, a: `Yes — ${game.title} is 100% free to play online with no download, no installation and no signup required. Just click play and enjoy ${game.title} unblocked anywhere.` },
      { q: `Can I play ${game.title} on mobile?`, a: `Yes, ${game.title} is fully mobile-responsive and works on iPhone, Android phones, tablets, Chromebooks and desktop browsers including Chrome, Firefox, Safari and Edge.` },
      { q: `Is ${game.title} unblocked at school?`, a: `Yes — ${game.title} is unblocked at most schools, colleges and offices. The HTML5 build runs directly in your browser so no firewall plugin is needed.` },
      { q: `What kind of game is ${game.title}?`, a: `${game.title} is a ${cat.name.toLowerCase()} basketball game. ${cat.description}` },
      { q: `Do I need to download ${game.title}?`, a: `No — ${game.title} is a browser-based HTML5 game. There is nothing to download, install or update. Bookmark this page to come back any time.` },
      { q: `Is ${game.title} safe for kids?`, a: `Yes, ${game.title} is family-friendly with no inappropriate content, no chat with strangers and no in-app purchases. Safe for classrooms and home.` },
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
    <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
      <nav className="mb-3 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
        <Link to="/" params={{ lang: lang === "en" ? undefined : lang } as any} className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/category/$slug" params={{ slug: cat.slug, lang: lang === "en" ? undefined : lang } as any} className="hover:text-foreground">{cat.name}</Link>
        <span>/</span>
        <span className="truncate text-foreground">{game.title}</span>
      </nav>

      <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-6xl">{game.title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">{game.shortDescription}</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-background shadow-card">
        <div className="flex items-center justify-between bg-secondary px-4 py-2">
          <span className="font-display text-sm tracking-wide text-primary">▶ {game.title}</span>
          <button onClick={() => setFs(!fs)} className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            {fs ? <Minimize2 className="h-3 w-3" /> : <Maximize2 className="h-3 w-3" />} Fullscreen
          </button>
        </div>
        <div className={fs ? "fixed inset-0 z-50 bg-black" : "aspect-video"}>
          <iframe src={`/embeds/${game.slug}.html`} title={game.title} className="h-full w-full" allow="autoplay; fullscreen; gamepad" allowFullScreen />
          {fs && <button onClick={() => setFs(false)} className="absolute right-4 top-4 z-50 rounded-full bg-primary p-2 text-primary-foreground"><Minimize2 className="h-5 w-5" /></button>}
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <article className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur md:p-8">
          <h2 className="font-display text-3xl text-foreground">About {game.title}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            {game.description.split("\n\n").map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
        </article>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-primary/30 bg-card p-6">
            <h3 className="font-display text-xl text-primary">How to Play</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {game.howToPlay.map((s: string, i: number) => (
                <li key={i} className="flex gap-2"><span className="font-bold text-primary">{i + 1}.</span><span>{s}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-card p-6">
            <h3 className="font-display text-xl text-accent">Game Features</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {game.features.map((s: string, i: number) => (
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

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <h2 className="font-display text-2xl text-foreground">Why Play {game.title}?</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {game.title} stands out among free online basketball games because it combines the instant accessibility of an HTML5 browser game with the depth of a real {cat.name.toLowerCase()} basketball experience. Whether you have five minutes between classes or a full afternoon to climb the leaderboards, {game.title} unblocked delivers fast loading, smooth controls and addictive scoring loops that keep you coming back for one more match.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            As part of the Basketball Stars Online catalog, {game.title} sits alongside the best basketball legends, basketball stars and basketball shooting games on the web. No download, no signup — just pure b-ball action in your browser.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <h2 className="font-display text-2xl text-foreground">Tips & Tricks for {game.title}</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>🎯 Wait for the perfect release window — green timing always beats yellow.</li>
            <li>🔥 Chain consecutive perfect shots to trigger combo multipliers.</li>
            <li>🛡️ On defense, anticipate your opponent's jump instead of chasing the ball.</li>
            <li>⚡ Save your special move for clutch moments late in the match.</li>
            <li>📱 Use landscape mode on mobile for the best {game.title} experience.</li>
            <li>🏆 Replay daily to climb our community {cat.name.toLowerCase()} basketball leaderboard.</li>
          </ul>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-border bg-card/40 p-6">
        <h2 className="font-display text-2xl text-foreground">Tags</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[...game.tags, `${cat.name} basketball`, "unblocked", "free", "no download", "browser game", "HTML5"].map((t) => (
            <span key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">#{t}</span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-foreground sm:text-3xl">Related Basketball Games</h2>
        <p className="mt-2 text-sm text-muted-foreground">More handpicked {cat.name.toLowerCase()} basketball games you'll love if you enjoyed {game.title}.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {related.map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      </section>
    </div>
  );
}
