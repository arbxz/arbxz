import { motion, Variants } from "framer-motion";
import Image from "next/image";

import Container from "../shared/Container";
import Card from "../shared/shared-components/Card";
import ArtDeck from "./ArtDeck";
import clipstudioIcon from "/public/images/icons/clipstudio.svg";
import illustratorIcon from "/public/images/icons/illustrator.svg";
import psdIcon from "/public/images/icons/photoshop.svg";

const ArtSection = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 350,
    },
    onscreen: {
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <>
      <Container>
        <Image
          className="absolute top-28 md:top-9 lg:top-16 left-1/2 -translate-x-1/2 -z-0"
          src={"/images/bgProps/circle-scatter-haikei.svg"}
          width={1000}
          height={1000}
          alt="backgrouynd prop"
        />
        <motion.div
          id="designs"
          className="relative"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}>
          <motion.div variants={cardVariants}>
            <Card glass styles="p-4 max-w-md">
              <div className="text-left text-xl">
                <span className="block md:text-6xl text-4xl text-foreground font-bold md:mb-4 mb-2">
                  Need some graphic work done ?
                </span>
                <div className="flex flex-col justify-start gap-2 text-lg">
                  <span className="self-start bg-foreground text-background md:p-2 p-1">
                    or maybe some sketches or logos ?
                  </span>
                  <span className="self-start bg-foreground text-background md:p-2 p-1">
                    Not a problem !
                  </span>
                  <span className="self-start bg-foreground text-background md:p-2 p-1">
                    I am very experienced in handling tools like
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-4 mt-4">
                <Image
                  className="transition-all duration-300 ease-in-out hover:-translate-y-3"
                  src={psdIcon}
                  width={45}
                  height={45}
                  alt="photoshop icon"
                />
                <Image
                  className="transition-all duration-300 ease-in-out hover:-translate-y-3"
                  src={illustratorIcon}
                  width={45}
                  height={45}
                  alt="illustrator icon"
                />
                <Image
                  className="transition-all duration-300 ease-in-out hover:-translate-y-3 bg-white rounded-full p-2 overflow-hidden"
                  src={clipstudioIcon}
                  width={45}
                  height={45}
                  alt="clipstudio icon"
                />
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <ArtDeck />
      </Container>
    </>
  );
};

export default ArtSection;
