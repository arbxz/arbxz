import { ThemeProvider } from "next-themes";

import ArtSection from "./components/art-section/ArtSection";
import Contact from "./components/contact-section/Contact";
import Footer from "./components/footer/Footer";
import MainBanner from "./components/main-section/MainSection";
import Modal from "./components/modal/Modal";
import Navigation from "./components/navigation/Navigation";
import ProjectSection from "./components/project-section/ProjectSection";
import Container from "./components/shared/Container";
import MusicPlayer from "./components/shared/shared-components/MusicPlayer";
import SkillSection from "./components/skills-section/SkillsSection";
import { useModalContext } from "./context/modal";

const App = () => {
  const { isModalOpen, modalContent } = useModalContext();

  return (
    <ThemeProvider>
      <Navigation />
      <main className="relative p-4 snap-container text-base text-foreground flex md:pb-24 pb-8 min-h-screen flex-col items-center justify-start select-none scroll">
        <MainBanner />
        <Container>
          <div className="flex flex-wrap w-full gap-4 justify-center">
            <SkillSection />
            <MusicPlayer />
          </div>
        </Container>
        <ArtSection />
        {/* Add figma back */}
        <ProjectSection />
        <Contact />
        <Modal isOpen={isModalOpen}>{modalContent}</Modal>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
