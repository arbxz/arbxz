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
      <div className={isModalOpen && "fixed w-full pr-4"}>
        <Navigation />
        <main className="relative p-4 text-base text-foreground flex gap-4 flex-col items-center justify-start select-none">
          <MainBanner />
          <motion.div
            id="skils"
            className="w-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <Container>
              <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 justify-stretch items-stretch">
                <motion.div variants={slideUpVariants}>
                  <SkillSection />
                </motion.div>
                <motion.div
                  className="w-full sm:w-8/12"
                  variants={slideUpVariants}>
                  <MusicPlayer />
                </motion.div>
              </div>
            </Container>
          </motion.div>
          <ProjectSection />
          <ArtSection />
          {/* <Contact /> */}
          <Modal isOpen={isModalOpen}>{modalContent}</Modal>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
