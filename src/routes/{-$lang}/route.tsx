import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header, Footer } from "@/components/Layout";

export const Route = createFileRoute("/{-$lang}")({
  component: LangLayout,
});

function LangLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
