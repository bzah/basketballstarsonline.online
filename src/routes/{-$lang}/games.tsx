import { createFileRoute } from "@tanstack/react-router";
import { GAMES } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { pageMeta } from "@/lib/seo";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/{-$lang}/games")({
  head: ({ params }) => {
    const m = pageMeta({
      lang: (params.lang ?? "en") as any, path: "/games",
      title: "All Basketball Games 🏀 22+ Free Unblocked Basketball Games Online",
      description: "Browse 22+ free basketball games unblocked: Basketball Stars, Basketball Legends, Basket Random, Dunk Hoop & more. Instant play, no download, mobile-ready.",
    });
    return { meta: m.meta, links: m.links };
  },
  component: GamesPage,
});

function GamesPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => GAMES.filter((g) => g.title.toLowerCase().includes(q.toLowerCase()) || g.tags.some(t => t.includes(q.toLowerCase()))), [q]);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-5xl text-foreground">All Basketball Games</h1>
      <p className="mt-2 text-muted-foreground">Every basketball game on our portal — free and unblocked.</p>
      <div className="relative mt-6 max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search basketball games..."
          className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map((g) => <GameCard key={g.id} game={g} />)}
      </div>
    </div>
  );
}
