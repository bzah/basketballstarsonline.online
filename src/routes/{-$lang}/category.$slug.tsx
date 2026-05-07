import { createFileRoute, notFound } from "@tanstack/react-router";
import { CATEGORIES, gamesByCategory, type Category, type Game } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/{-$lang}/category/$slug")({
  head: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) return { meta: [{ title: "Category" }] };
    const m = pageMeta({
      lang: (params.lang ?? "en") as any, path: `/category/${cat.slug}`,
      title: `${cat.name} Basketball Games — Free Online`,
      description: `${cat.description} Play free, unblocked, instantly.`,
    });
    return { meta: m.meta, links: m.links };
  },
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat, games: gamesByCategory(cat.slug as Category) };
  },
  component: () => {
    const { cat, games } = Route.useLoaderData();
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-5xl text-foreground">{cat.name} Basketball Games</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">{cat.description}</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {games.map((g: Game) => <GameCard key={g.id} game={g} />)}
        </div>
      </div>
    );
  },
  notFoundComponent: () => <div className="container mx-auto p-10 text-center"><h1>Category not found</h1></div>,
});
