import { Link, useParams } from "@tanstack/react-router";
import { LANGS, type Lang, t } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { CATEGORIES } from "@/data/games";
import { Search, Globe } from "lucide-react";
import { useState } from "react";

export function useLang(): Lang {
  const params = useParams({ strict: false }) as { lang?: string };
  const l = params.lang;
  return (LANGS.includes(l as Lang) ? l : "en") as Lang;
}

export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "en" ? clean : `/${lang}${clean === "/" ? "" : clean}`;
}

export function Header() {
  const lang = useLang();
  const [q, setQ] = useState("");
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="container mx-auto flex items-center gap-4 px-4 py-3">
        <Link to="/" params={{ lang: lang === "en" ? undefined : lang }} className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Basketball Stars Online — basketball legends unblocked logo" width={48} height={48} className="h-12 w-12 object-contain drop-shadow-[0_0_12px_rgba(255,106,43,0.6)] transition-transform group-hover:scale-110" />
          <div className="hidden sm:block">
            <div className="font-display text-xl leading-none tracking-wide text-foreground">{SITE.name}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{t(lang, "hero.tag")}</div>
          </div>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          <NavLink to="/" label={t(lang, "nav.home")} />
          <NavLink to="/games" label={t(lang, "nav.games")} />
          <NavLink to="/categories" label={t(lang, "nav.categories")} />
          <NavLink to="/about" label={t(lang, "nav.about")} />
        </nav>
        <Link to="/games" params={{ lang: lang === "en" ? undefined : lang }} className="relative hidden lg:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q} onChange={(e) => setQ(e.target.value)}
            placeholder={t(lang, "search.placeholder")}
            className="h-10 w-64 rounded-full border border-border bg-secondary/60 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </Link>
        <LangSwitcher current={lang} />
      </div>
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const lang = useLang();
  return (
    <Link
      to={to as any}
      params={{ lang: lang === "en" ? undefined : lang } as any}
      className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground" }}
      activeOptions={{ exact: true }}
    >
      {label}
    </Link>
  );
}

function LangSwitcher({ current }: { current: Lang }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="flex h-10 items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 text-sm font-semibold uppercase text-foreground hover:bg-secondary">
        <Globe className="h-4 w-4" /> {current}
      </button>
      {open && (
        <div onMouseLeave={() => setOpen(false)} className="absolute right-0 top-12 z-50 grid w-32 grid-cols-2 gap-1 rounded-lg border border-border bg-popover p-2 shadow-card">
          {LANGS.map((l) => (
            <a key={l} href={localePath(l, typeof window !== "undefined" ? window.location.pathname.replace(/^\/(es|fr|de|it|tr)/, "") || "/" : "/")}
              className={`rounded px-2 py-1 text-center text-xs uppercase font-bold ${l === current ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>
              {l}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Footer() {
  const lang = useLang();
  const popular = ["basketball-stars", "basketball-legends-2020", "basket-random", "basketball-stars-2026", "basketball-shots-3d", "basketball-legends"];
  return (
    <footer className="mt-20 border-t border-border bg-background/60">
      <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-2xl text-foreground">{SITE.name}</div>
          <p className="mt-2 text-sm text-muted-foreground">{t(lang, "footer.tagline")}</p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm uppercase tracking-wider text-primary">{t(lang, "footer.popular")}</h4>
          <ul className="space-y-2 text-sm">
            {popular.map((s) => (
              <li key={s}><Link to="/game/$slug" params={{ slug: s, lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{s.replace(/-/g, " ")}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm uppercase tracking-wider text-primary">{t(lang, "nav.categories")}</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link to="/category/$slug" params={{ slug: c.slug, lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm uppercase tracking-wider text-primary">{t(lang, "footer.legal")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.about")}</Link></li>
            <li><Link to="/contact" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.contact")}</Link></li>
            <li><Link to="/privacy" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.privacy")}</Link></li>
            <li><Link to="/terms" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.terms")}</Link></li>
            <li><Link to="/cookies" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.cookies")}</Link></li>
            <li><Link to="/dmca" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.dmca")}</Link></li>
            <li><Link to="/legal" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.legalNotice")}</Link></li>
            <li><Link to="/parents" params={{ lang: lang === "en" ? undefined : lang } as any} className="text-muted-foreground hover:text-foreground">{t(lang, "footer.parents")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. {t(lang, "footer.copyright")} · {SITE.email}
      </div>
    </footer>
  );
}
