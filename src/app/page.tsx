import MainBanner from "./components/main-banner/MainBanner";
import KnowledgeBlock from "./components/knowledge-block/KnowledgeBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <KnowledgeBlock />
    </main>
  );
}
