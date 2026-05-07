import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, gamesByCategory } from "@/data/games";
import { useLang } from "@/components/Layout";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/{-$lang}/categories")({
  head: ({ params }) => {
    const m = pageMeta({
      lang: (params.lang ?? "en") as any, path: "/categories",
      title: "Basketball Game Categories — Browse by Style",
      description: "Browse basketball games by category — shooting, multiplayer, simulator, classic legends and arcade hits.",
    });
    return { meta: m.meta, links: m.links };
  },
  component: () => {
    const lang = useLang();
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-5xl text-foreground">Categories</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => {
            const count = gamesByCategory(c.slug).length;
            return (
              <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug, lang: lang === "en" ? undefined : lang } as any}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl text-foreground group-hover:text-primary">{c.name}</h2>
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">{count} games</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  },
});
