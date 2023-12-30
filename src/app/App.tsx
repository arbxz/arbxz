import { motion } from "framer-motion";

import SkillSection from "@/components/about-section/AboutSection";
import ArtSection from "@/components/design-section/DesignSection";
import Footer from "@/components/footer/Footer";
import MainBanner from "@/components/main-section/MainSection";
import Modal from "@/components/modal/Modal";
import Navigation from "@/components/navigation/Navigation";
import ProjectSection from "@/components/project-section/ProjectSection";
import { slideUpVariants } from "@/components/shared/Animations";
import Container from "@/components/shared/Container";
import MusicPlayer from "@/components/shared/MusicPlayer";

import { useAppContext } from "../context/appContext";

const App = () => {
  const { isModalOpen, modalContent } = useAppContext();

  return (
    <div
      className={`${
        isModalOpen && "fixed h-full w-full lg:pr-4"
      } overflow-hidden`}>
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
        <Modal isOpen={isModalOpen}>{modalContent}</Modal>
      </main>
      <Footer />
    </div>
  );
};

export default App;
