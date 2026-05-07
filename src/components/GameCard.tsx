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
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: COVERS[game.category] }}>
        <div className="absolute inset-0 court-lines opacity-30" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-6xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">🏀</span>
        </div>
        <div className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary backdrop-blur">
          {game.category}
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-3">
          <h3 className="font-display text-lg leading-tight text-foreground">{game.title}</h3>
        </div>
      </div>
      <p className="line-clamp-2 px-3 py-2 text-xs text-muted-foreground">{game.shortDescription}</p>
    </Link>
  );
}
