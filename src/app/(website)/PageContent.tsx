import Link from "next/link";

import AboutSection from "@/components/about-section/AboutSection";
import DesignSection from "@/components/design-section/DesignSection";
import MainBanner from "@/components/main-section/MainSection";
import ProjectSection from "@/components/project-section/ProjectSection";
import Card from "@/components/shared/Card";

const PageContent = () => {
  return (
    <div className="relative z-20">
      <div className="relative px-4 text-base text-foreground flex gap-4 flex-col items-center justify-center select-none z-10">
        <MainBanner />
        <AboutSection />
        <Link href="/blog" className="max-w-5xl w-full px-4">
          <Card background="bg-arbxz-accent" styles="w-full px-4">
            <div className="text-center px-4 py-8 lg:p-16 w-full text-white">
              <h2 className="text-4xl lg:text-6xl font-bold">Blog.</h2>
              go to my blog.
            </div>
          </Card>
        </Link>
        <DesignSection />
        <div className="px-4 h-1 w-full bg-arbxz-accent max-w-4xl rounded my-4 shadow"></div>
        <ProjectSection />
      </div>
    </div>
  );
};

export default PageContent;
