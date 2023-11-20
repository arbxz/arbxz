import Image from "next/image";
import { ThemeProvider } from "next-themes";

import ArtSection from "./components/art-section/ArtSection";
import Contact from "./components/contact-section/Contact";
import FigmaSection from "./components/figma-section/FigmaSection";
import Footer from "./components/footer/Footer";
import MainBanner from "./components/main-section/MainSection";
import Modal from "./components/modal/Modal";
import ProjectSection from "./components/project-section/ProjectSection";
import SocialList from "./components/social-list/SocialList";
import { useModalContext } from "./context/modal";
import WebsiteBg from "/public/quantum-gradient.png";

const App = () => {
  const { isModalOpen, modalContent } = useModalContext();

  return (
    <ThemeProvider>
      <main className="relative text-foreground flex min-h-screen flex-col items-center justify-start select-none">
        <div className="fixed w-full h-screen object-cover top-0 left-0 -z-0">
          <Image
            src={WebsiteBg}
            fill
            placeholder="blur"
            priority
            alt="Website background"
          />
        </div>

        <MainBanner />
        <ProjectSection />
        <Contact />
        <FigmaSection />
        <ArtSection />
        <SocialList />
        <Footer />
        <Modal isOpen={isModalOpen}>{modalContent}</Modal>
      </main>
    </ThemeProvider>
  );
};

export default App;
