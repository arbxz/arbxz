import MainBanner from "./components/main-banner/MainBanner";
import SkillBlock from "./components/skill-block/SkillBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <SkillBlock />
    </main>
  );
}
