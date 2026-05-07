import { LANGS, type Lang } from "./site";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home", "nav.games": "All Games", "nav.categories": "Categories", "nav.about": "About", "nav.contact": "Contact",
  "hero.tag": "#1 Basketball Game Portal",
  "hero.title": "Basketball Legends Unblocked",
  "hero.subtitle": "Play Basketball Stars and the best free basketball games online. No download, instant fun.",
  "cta.play": "Play Now", "cta.fullscreen": "Fullscreen", "cta.exitFullscreen": "Exit Fullscreen",
  "section.featured": "Featured Game", "section.all": "All Basketball Games", "section.related": "Related Games", "section.categories": "Categories",
  "search.placeholder": "Search basketball games...",
  "footer.popular": "Popular Games", "footer.legal": "Legal", "footer.about": "About", "footer.contact": "Contact",
  "footer.privacy": "Privacy Policy", "footer.terms": "Terms", "footer.cookies": "Cookie Policy", "footer.dmca": "DMCA", "footer.legalNotice": "Legal Notice", "footer.parents": "Parents Info",
  "footer.tagline": "The best free basketball games online — unblocked and ready to play.",
  "footer.copyright": "All rights reserved.",
  "faq.title": "Frequently Asked Questions",
  "faq.q1": "Is this game free?", "faq.a1": "Yes — all our basketball games are 100% free to play with no download required.",
  "faq.q2": "Can I play on mobile?", "faq.a2": "Absolutely. Our games are mobile-responsive and work on phones, tablets and desktops.",
  "faq.q3": "Is it unblocked at school?", "faq.a3": "Yes. Our basketball legends and basketball stars games are unblocked and accessible everywhere.",
};

// Light translations for the others (real production app would have full sets)
const es: Dict = { ...en,
  "nav.home": "Inicio", "nav.games": "Juegos", "nav.categories": "Categorías", "nav.about": "Acerca", "nav.contact": "Contacto",
  "hero.tag": "Portal #1 de Baloncesto", "hero.title": "Basketball Legends Sin Bloqueo",
  "hero.subtitle": "Juega Basketball Stars y los mejores juegos de baloncesto gratis online.",
  "cta.play": "Jugar Ahora", "section.featured": "Juego Destacado", "section.all": "Todos los Juegos", "section.related": "Juegos Relacionados", "section.categories": "Categorías",
  "search.placeholder": "Buscar juegos...", "faq.title": "Preguntas Frecuentes",
};
const fr: Dict = { ...en,
  "nav.home": "Accueil", "nav.games": "Jeux", "nav.categories": "Catégories", "nav.about": "À propos", "nav.contact": "Contact",
  "hero.title": "Basketball Legends Débloqués", "hero.tag": "Portail #1 de Basketball",
  "hero.subtitle": "Jouez à Basketball Stars et aux meilleurs jeux de basket gratuits en ligne.",
  "cta.play": "Jouer", "section.featured": "Jeu en Vedette", "section.all": "Tous les Jeux",
};
const de: Dict = { ...en,
  "nav.home": "Start", "nav.games": "Spiele", "nav.categories": "Kategorien", "nav.about": "Über", "nav.contact": "Kontakt",
  "hero.title": "Basketball Legends Unblocked", "hero.tag": "Das #1 Basketball Portal",
  "hero.subtitle": "Spiele Basketball Stars und die besten kostenlosen Basketballspiele online.",
  "cta.play": "Jetzt Spielen", "section.featured": "Empfohlenes Spiel", "section.all": "Alle Spiele",
};
const it: Dict = { ...en,
  "nav.home": "Home", "nav.games": "Giochi", "nav.categories": "Categorie", "nav.about": "Chi siamo", "nav.contact": "Contatti",
  "hero.title": "Basketball Legends Sbloccati", "hero.tag": "Il Portale #1 di Basket",
  "hero.subtitle": "Gioca a Basketball Stars e ai migliori giochi di basket gratis online.",
  "cta.play": "Gioca Ora", "section.featured": "Gioco in Evidenza", "section.all": "Tutti i Giochi",
};
const tr: Dict = { ...en,
  "nav.home": "Ana Sayfa", "nav.games": "Oyunlar", "nav.categories": "Kategoriler", "nav.about": "Hakkında", "nav.contact": "İletişim",
  "hero.title": "Basketball Legends Engelsiz", "hero.tag": "1 Numaralı Basketbol Portalı",
  "hero.subtitle": "Basketball Stars ve en iyi ücretsiz basketbol oyunlarını çevrimiçi oyna.",
  "cta.play": "Şimdi Oyna", "section.featured": "Öne Çıkan Oyun", "section.all": "Tüm Oyunlar",
};

export const DICTS: Record<Lang, Dict> = { en, es, fr, de, it, tr };

export function t(lang: Lang, key: string): string {
  return DICTS[lang]?.[key] ?? DICTS.en[key] ?? key;
}

export { LANGS };
export type { Lang };
