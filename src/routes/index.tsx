import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramen Monkey Tycoon — First-Person Restaurant Game" },
      { name: "description", content: "Run a ramen restaurant, serve guests in first person, upgrade your kitchen, and build a monkey-powered food empire." },
      { property: "og:title", content: "Ramen Monkey Tycoon" },
      { property: "og:description", content: "Run the restaurant floor in an upgraded first-person ramen tycoon game." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-full overflow-hidden bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/game/index.html"
        title="Ramen Monkey Tycoon"
        allow="fullscreen"
      />
    </main>
  );
}
