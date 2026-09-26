import { createFileRoute } from "@tanstack/react-router";
import { EstherAI } from "@/components/esther/EstherAI";

const title = "Esther AI · Cloud Esther";
const description =
  "Esther AI es la asistente de inteligencia artificial de Cloud Esther: estados visuales, conversación y acciones rápidas para el trabajo clínico diario.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <EstherAI context={{ section: "general" }} />
    </main>
  );
}
