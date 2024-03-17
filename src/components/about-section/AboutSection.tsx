import { useTranslations } from "next-intl";

import Container from "../shared/Container";
import MusicPlayer from "../shared/MusicPlayer";
import About from "./About";

const AboutSection = () => {
  const t = useTranslations("Misc");
  return (
    // <motion.div
    //   id="skils"
    //   className="w-full"
    //   initial="offscreen"
    //   whileInView="onscreen"
    //   viewport={{ once: true, amount: 0.8 }}>
    //   <Container>
    //     <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 justify-stretch items-stretch">
    //       <motion.div variants={slideUpVariants}>
    //         <About />
    //       </motion.div>
    //       <motion.div className="w-full" variants={slideUpVariants}>
    //         <MusicPlayer />
    //       </motion.div>
    //     </div>
    //   </Container>
    // </motion.div>
    <div id="skils" className="w-full">
      <Container>
        <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 justify-stretch items-stretch">
          <div>
            <About />
          </div>
          <div className="w-full">
            <MusicPlayer text={t("music")} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
