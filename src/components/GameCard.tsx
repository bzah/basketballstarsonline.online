import { Link } from "@tanstack/react-router";
import type { Game } from "@/data/games";
import { useLang } from "./Layout";
import type { Lang } from "@/lib/i18n";

const COVERS: Record<string, string> = {
  shooting: "linear-gradient(135deg, oklch(0.72 0.19 50), oklch(0.55 0.18 350))",
  arcade: "linear-gradient(135deg, oklch(0.85 0.18 95), oklch(0.72 0.19 50))",
  simulator: "linear-gradient(135deg, oklch(0.55 0.13 60), oklch(0.28 0.06 260))",
  multiplayer: "linear-gradient(135deg, oklch(0.65 0.22 30), oklch(0.45 0.15 320))",
  classic: "linear-gradient(135deg, oklch(0.4 0.12 30), oklch(0.2 0.05 260))",
};

export function GameCard({ game }: { game: Game }) {
  const lang = useLang() as Lang;
  return (
    <Link
      to="/game/$slug"
      params={{ slug: game.slug, lang: lang === "en" ? undefined : lang } as any}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={`/covers/${game.slug}.jpg`}
          alt={`${game.title} — basketball game cover`}
          loading="lazy"
          width={400} height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-1.5 top-1.5 rounded-full bg-background/85 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary backdrop-blur sm:left-2 sm:top-2 sm:px-2 sm:text-[10px]">
          {game.category}
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-2 pt-6 sm:p-3 sm:pt-8">
          <h3 className="font-display text-sm leading-tight text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-base md:text-lg">{game.title}</h3>
        </div>
      </div>
      <p className="line-clamp-2 px-2.5 py-2 text-[11px] text-muted-foreground sm:px-3 sm:text-xs">{game.shortDescription}</p>
    </Link>
  );
}
