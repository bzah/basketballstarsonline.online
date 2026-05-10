import { createFileRoute } from "@tanstack/react-router";
import { STATIC_PAGES } from "@/components/StaticPage";
import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const data = STATIC_PAGES.contact;

export const Route = createFileRoute("/{-$lang}/contact")({
  head: ({ params }) => {
    const m = pageMeta({
      lang: (params.lang ?? "en") as any, path: "/contact",
      title: `${data.title} — ${SITE.name}`,
      description: data.body.slice(0, 155),
    });
    return { meta: m.meta, links: m.links };
  },
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-5xl text-foreground">{data.title}</h1>
      <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-muted-foreground">{data.body}</p>
      <ContactForm />
    </div>
  );
}
