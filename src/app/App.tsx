import { ThemeProvider } from "next-themes";

import ArtSection from "./components/art-section/ArtSection";
import Contact from "./components/contact-section/Contact";
import FigmaSection from "./components/figma-section/FigmaSection";
import Footer from "./components/footer/Footer";
import MainBanner from "./components/main-section/MainSection";
import Modal from "./components/modal/Modal";
import ProjectSection from "./components/project-section/ProjectSection";
import MusicPlayer from "./components/shared/shared-components/MusicPlayer";
import SocialList from "./components/social-list/SocialList";
import { useModalContext } from "./context/modal";

const App = () => {
  const { isModalOpen, modalContent } = useModalContext();

  return (
    <ThemeProvider>
      <main className="relative snap-container text-base text-foreground flex gap-5 md:pb-10 pb-8 min-h-screen flex-col items-center justify-start select-none scoll">
        <MainBanner />
        <MusicPlayer />
        <ProjectSection />
        <ArtSection />
        {/* <FigmaSection /> */}
        <Contact />
        <Footer />
        <Modal isOpen={isModalOpen}>{modalContent}</Modal>
      </main>
    </ThemeProvider>
  );
};

export default App;
