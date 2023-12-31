import { motion, Variants } from "framer-motion";
import Image from "next/image";

import Card from "../shared/Card";
import Container from "../shared/Container";
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
      <Container flexDirection="col">
        <Image
          className="absolute w-auto h-auto top-28 md:top-9 lg:top-16 left-1/2 -translate-x-1/2 -z-0"
          src={"/images/bgProps/circle-scatter-haikei.svg"}
          width={500}
          height={500}
          alt="backgrouynd prop"
        />
        <div className="text-center w-full">
          <h2 className="text-4xl md:text-6xl font-semibold">
            UI/<span className="text-accent">UX.</span>
          </h2>
          <span className="border border-accent text-sm text-accent rounded-3xl px-4 py-1">
            Figma | Adobe XD
          </span>
        </div>

        <div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-stretch gap-4">
            <motion.div
              id="designs"
              className="md:w-3/5"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}>
              <motion.div
                className="flex flex-col gap-4"
                variants={cardVariants}>
                <Card glass styles="h-full p-4 md:max-w-md">
                  <div className="text-left text-xl">
                    <span className="block lg:text-6xl text-4xl text-foreground font-bold md:mb-4 mb-2">
                      Need some design work done ?
                    </span>
                    <div className="flex flex-col justify-start gap-2 text-lg">
                      <span className="self-start bg-foreground text-background md:p-2 p-1">
                        Not a problem !
                      </span>
                      <span className="self-start bg-foreground text-background md:p-2 p-1">
                        I am very experienced in handling tools like
                      </span>
                    </div>
                  </div>
                </Card>
                <div className="flex h-full gap-4 md:justify-end justify-center">
                  <Card styles="h-24 w-24 p-4 flex items-center justify-center">
                    <Image
                      className="transition-all duration-300 ease-in-out hover:-translate-y-3"
                      src={psdIcon}
                      width={45}
                      height={45}
                      alt="photoshop icon"
                    />
                  </Card>
                  <Card styles="h-24 w-24 p-4 flex items-center justify-center">
                    <Image
                      className="transition-all duration-300 ease-in-out hover:-translate-y-3"
                      src={illustratorIcon}
                      width={45}
                      height={45}
                      alt="illustrator icon"
                    />
                  </Card>
                  <Card styles="h-24 w-24 p-4 flex items-center justify-center">
                    <Image
                      className="transition-all duration-300 ease-in-out hover:-translate-y-3 bg-white rounded-full p-2 overflow-hidden"
                      src={clipstudioIcon}
                      width={45}
                      height={45}
                      alt="clipstudio icon"
                    />
                  </Card>
                </div>
              </motion.div>
            </motion.div>

            <Card styles="p-4 flex flex-col gap-4 glass justify-center">
              <Card styles="w-[120px] h-[120px] mx-auto p-4 flex items-center justify-center shadow-inner">
                <Image
                  className="p-4"
                  src={"/images/icons/figma.svg"}
                  width={75}
                  height={75}
                  loading="lazy"
                  alt={"logo of figma"}
                />
              </Card>
              <span className="text-xl md:text-4xl text-center">
                I excel in{" "}
                <span className="text-accent font-semibold">Figma</span>,
                efficiently creating and implementing designs with precision.
              </span>
            </Card>

            {/* <ArtDeck /> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ArtSection;
