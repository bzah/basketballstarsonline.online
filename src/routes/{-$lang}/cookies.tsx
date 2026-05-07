import { createFileRoute } from "@tanstack/react-router";
import { STATIC_PAGES, StaticPage } from "@/components/StaticPage";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const data = STATIC_PAGES.cookies;

export const Route = createFileRoute("/{-$lang}/cookies")({
  head: ({ params }) => {
    const m = pageMeta({
      lang: (params.lang ?? "en") as any, path: "/cookies",
      title: `${data.title} — ${SITE.name}`,
      description: data.body.slice(0, 155),
    });
    return { meta: m.meta, links: m.links };
  },
  component: () => <StaticPage data={data} />,
});
