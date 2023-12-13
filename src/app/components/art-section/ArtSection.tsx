import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Card from "../shared/Card";
import Container from "../shared/Container";
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

        <div className="flex flex-wrap justify-center sm:justify-stretch gap-4">
          <motion.div
            id="designs"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}>
            <motion.div variants={cardVariants}>
              <Card glass styles="h-full p-4 max-w-md">
                <div className="text-left text-xl">
                  <span className="block md:text-6xl text-4xl text-foreground font-bold md:mb-4 mb-2">
                    Need some graphic work done ?
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
            </motion.div>
          </motion.div>
          <div className="flex h-full gap-4 justify-between items-stretch sm:flex-col">
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
          {/* <ArtDeck /> */}
        </div>
        <div className="flex lg:flex-col gap-4">
          <div className="flex gap-4">
            <Card styles="flex justify-between flex-col gap-4 p-4 bg-foreground">
              <div className="flex gap-4 items-center text-background">
                <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
                <span>Insta</span>
              </div>
              <Link
                className="text-foreground bg-background px-4 py-2 rounded-full text-center border-[1px] border-white transition-colors duration-300 hover:border-background hover:text-background hover:bg-foreground"
                href="https://www.instagram.com/wulver.bd/"
                target="_blank">
                Open me
              </Link>
            </Card>
            <Card styles="w-[120px] h-[120px] p-4 flex items-center justify-center">
              <Image
                className="p-4"
                src={"/images/icons/figma.svg"}
                width={75}
                height={75}
                objectFit="contain"
                loading="lazy"
                alt={"logo of figma"}
              />
            </Card>
          </div>
          <Card styles="w-full h-full">
            <Image
              className="h-max w-full object-cover"
              src="/images/art/duck.webp"
              alt="A drawing"
              width={150}
              height={100}
            />
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ArtSection;
