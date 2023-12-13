import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

import ArtSection from "./components/art-section/ArtSection";
import Contact from "./components/contact-section/Contact";
import FigmaSection from "./components/figma-section/FigmaSection";
import Footer from "./components/footer/Footer";
import MainBanner from "./components/main-section/MainSection";
import Modal from "./components/modal/Modal";
import Navigation from "./components/navigation/Navigation";
import ProjectSection from "./components/project-section/ProjectSection";
import { slideUpVariants } from "./components/shared/Animations";
import Container from "./components/shared/Container";
import MusicPlayer from "./components/shared/MusicPlayer";
import SkillSection from "./components/skills-section/SkillsSection";
import { useModalContext } from "./context/modal";

const App = () => {
  const { isModalOpen, modalContent } = useModalContext();

  return (
    <ThemeProvider>
      <div className={isModalOpen && "fixed"}>
        <Navigation />
        <main className="relative p-4 snap-container text-base text-foreground flex md:pb-24 pb-8 min-h-screen flex-col items-center justify-start select-none scroll">
          <MainBanner />
          <motion.div
            id="skils"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <Container>
              <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 justify-stretch items-stretch">
                <motion.div variants={slideUpVariants}>
                  <SkillSection />
                </motion.div>
                <motion.div
                  className="w-full sm:w-auto"
                  variants={slideUpVariants}>
                  <MusicPlayer />
                </motion.div>
              </div>
            </Container>
          </motion.div>
          <ArtSection />
          {/* Add figma back */}
          <ProjectSection />
          <Contact />
          <Modal isOpen={isModalOpen}>{modalContent}</Modal>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
