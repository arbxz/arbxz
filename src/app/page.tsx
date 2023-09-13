import KnowledgeBlock from "./components/knowledge-block/KnowledgeBlock";
import MainBanner from "./components/main-banner/MainBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <KnowledgeBlock />
    </main>
  );
}
