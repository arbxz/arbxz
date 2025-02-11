import AboutSection from "@/components/about-section/AboutSection";
import DesignSection from "@/components/design-section/DesignSection";
import MainBanner from "@/components/main-section/MainSection";
import ProjectSection from "@/components/project-section/ProjectSection";

const PageContent = () => {
  return (
    <div className="relative z-20">
      <div className="relative z-10 flex select-none flex-col items-center justify-center gap-4 px-4 text-base md:gap-8 lg:gap-16">
        <MainBanner />
        <ProjectSection />
        <AboutSection />
        <DesignSection />
      </div>
    </div>
  );
};

export default PageContent;
