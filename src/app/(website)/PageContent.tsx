import AboutSection from "@/components/about-section/AboutSection";
import DesignSection from "@/components/design-section/DesignSection";
import MainBanner from "@/components/main-section/MainSection";
import ProjectSection from "@/components/project-section/ProjectSection";

const PageContent = () => {
  return (
    <div className="relative z-20">
      <div className="relative px-4 text-base flex gap-4 md:gap-8 lg:gap-16 flex-col items-center justify-center select-none z-10">
        <MainBanner />

        <AboutSection />

        <DesignSection />

        <ProjectSection />
      </div>
    </div>
  );
};

export default PageContent;
