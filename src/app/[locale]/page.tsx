// "use client";

import dynamic from "next/dynamic";

import AboutSection from "@/components/about-section/AboutSection";
import ArtSection from "@/components/art-section/ArtSection";
import DesignSection from "@/components/design-section/DesignSection";
import Footer from "@/components/footer/Footer";
import MainBanner from "@/components/main-section/MainSection";
import Navigation from "@/components/navigation/Navigation";
import ProjectSection from "@/components/project-section/ProjectSection";

const Modal = dynamic(() => import("@/components/modal/Modal"));

const Home = () => {
  // const { isModalOpen, modalContent } = useAppContext();

  return (
    // <div
    //   className={`${
    //     isModalOpen && "overflow-hidden"
    //   } overflow-hidden bg-background-secondary`}>
    <div className="overflow-hidden bg-background-secondary">
      <Navigation />
      <main className="relative px-4 text-base text-foreground flex gap-4 flex-col items-center justify-center select-none">
        <MainBanner />
        <AboutSection />
        <ProjectSection />
        <DesignSection />
        <ArtSection />
        {/* {isModalOpen && <Modal isOpen={isModalOpen}>{modalContent}</Modal>} */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
