import AboutSection from "@/components/about-section/AboutSection";
import ArtSection from "@/components/art-section/ArtSection";
import DesignSection from "@/components/design-section/DesignSection";
import Footer from "@/components/footer/Footer";
import MainBanner from "@/components/main-section/MainSection";
import Navigation from "@/components/navigation/Navigation";
import ProjectSection from "@/components/project-section/ProjectSection";

const PageContent = () => {
  return (
    <div className="relative overflow-hidden bg-background-secondary background-grid">
      <Navigation />
      <main className="relative px-4 text-base text-foreground flex gap-4 flex-col items-center justify-center select-none z-10">
        <MainBanner />
        <AboutSection />
        <DesignSection />
        <div className="px-4 h-1 w-full bg-arbxz-accent max-w-4xl rounded my-4 shadow"></div>

        <ProjectSection />
        {/* <div className="px-4 h-1 w-full bg-arbxz-accent max-w-4xl rounded my-4 shadow"></div> */}
        {/* <ArtSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default PageContent;
