import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const PAGES = {
  about: { title: "About Us", body: `${SITE.name} is the home of Basketball Stars, Basketball Legends Unblocked and the world's best free basketball games online. We curate the most fun, mobile-friendly, instantly-playable basketball games — no downloads, no installs, no signup. Our mission is simple: deliver the purest basketball gaming experience right in your browser, anytime, anywhere.` },
  contact: { title: "Contact", body: `Got a question, partnership idea, or want to suggest a game? Email us at ${SITE.email} and we'll get back to you within 48 hours.` },
  privacy: { title: "Privacy Policy", body: `${SITE.name} respects your privacy. We collect minimal analytics data (page views, device type) to improve the site. We do not sell personal data. Third-party game providers may set cookies. You can clear cookies anytime in your browser settings. For requests email ${SITE.email}.` },
  terms: { title: "Terms of Service", body: `By using ${SITE.name} you agree to play games for personal entertainment, not redistribute embedded games, and respect the rights of original game creators. We reserve the right to remove content or restrict access. Games are provided "as-is".` },
  cookies: { title: "Cookie Policy", body: `${SITE.name} uses essential cookies to keep the site functional and analytics cookies to understand how visitors use it. Embedded games may use their own cookies. Disabling cookies may affect game functionality.` },
  dmca: { title: "DMCA Policy", body: `If you are a copyright owner and believe content on ${SITE.name} infringes your rights, send a DMCA takedown notice to ${SITE.email} including: identification of the work, the URL, your contact info, and a good-faith statement. We respond to valid notices within 72 hours.` },
  legal: { title: "Legal Notice", body: `${SITE.name} (${SITE.domain}) is an independent gaming portal. All trademarks, game titles and brands referenced belong to their respective owners. We embed third-party games legally via public iframe URLs provided by their original publishers.` },
  parents: { title: "Information for Parents", body: `${SITE.name} is designed to be safe and family-friendly. Games are casual and skill-based. We do not require account registration. Embedded games may show advertisements served by third-party publishers — please supervise younger children. Questions? Email ${SITE.email}.` },
};

function makePage(key: keyof typeof PAGES) {
  const data = PAGES[key];
  return createFileRoute(`/{-$lang}/${key}` as any)({
    head: ({ params }: any) => {
      const m = pageMeta({
        lang: (params.lang ?? "en") as any, path: `/${key}`,
        title: `${data.title} — ${SITE.name}`, description: data.body.slice(0, 155),
      });
      return { meta: m.meta, links: m.links };
    },
    component: () => (
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-5xl text-foreground">{data.title}</h1>
        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-muted-foreground">{data.body}</p>
      </div>
    ),
  });
}

export const Route = makePage("about");
