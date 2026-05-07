export const SITE = {
  domain: "basketballstarsonline.online",
  url: "https://basketballstarsonline.online",
  name: "Basketball Stars Online",
  email: "game@basketballstarsonline.online",
  description: "Play Basketball Stars, Basketball Legends Unblocked and the best free basketball games online — no download, no install.",
  keywords: "basketball legends unblocked, basketball stars online, basketball stars, basketball, free games",
  twitter: "@bballstarsonline",
  ogImage: "https://basketballstarsonline.online/og-image.png",
};

export const LANGS = ["en", "es", "fr", "de", "it", "tr"] as const;
export type Lang = (typeof LANGS)[number];
