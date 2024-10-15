import Container from "@/components/shared/Container";
import MusicPlayer from "@/components/shared/MusicPlayer";

import About from "./About";

const AboutSection = () => {
  return (
    <div id="skils" className="w-full">
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 justify-stretch items-stretch">
          <div>
            <About />
          </div>
          <div className="w-full">
            <MusicPlayer text={"Listen to some music"} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
