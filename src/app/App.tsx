import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import SkillSection from "@/components/about-section/AboutSection";
import ArtSection from "@/components/art-section/ArtSection";
import DesignSection from "@/components/design-section/DesignSection";
import Footer from "@/components/footer/Footer";
import MainBanner from "@/components/main-section/MainSection";
import Navigation from "@/components/navigation/Navigation";
import ProjectSection from "@/components/project-section/ProjectSection";
import { slideUpVariants } from "@/components/shared/Animations";
import Container from "@/components/shared/Container";
import MusicPlayer from "@/components/shared/MusicPlayer";

import { useAppContext } from "../context/appContext";

const Modal = dynamic(() => import("@/components/modal/Modal"));

const App = () => {
  const { isModalOpen, modalContent } = useAppContext();

  return (
    <div
      className={`${
        isModalOpen && "overflow-hidden"
      } overflow-hidden bg-background-secondary`}>
      <Navigation />
      <main className="relative p-4 text-base text-foreground flex gap-4 md:gap-8 flex-col items-center justify-center select-none">
        <MainBanner />
        <motion.div
          id="skils"
          className="w-auto"
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
        <DesignSection />
        <ArtSection />
        {isModalOpen && <Modal isOpen={isModalOpen}>{modalContent}</Modal>}
      </main>
      <Footer />
    </div>
  );
};

export default App;
