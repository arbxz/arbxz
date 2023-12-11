import { useEffect, useState } from "react";
import Clock from "react-live-clock";
import TextTransition, { presets } from "react-text-transition";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../navigation/Navigation";
import Container from "../shared/Container";
import Card from "../shared/shared-components/Card";
import ImageCarousel from "../shared/shared-components/ImageCarousel";
import styles from "./MainSection.module.css";

const MainBanner = () => {
  const introText = [
    "I am a fun loving dev who likes",
    "innovative and modern designs.",
    "My primary focus lies in",
  ];
  const skills = ["NextJs", "ReactJs", "SCSS", "UX", "Tailwind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative flex gap-5 md:gap-14 justify-center items-center flex-col w-full">
      <Navigation />
      <Container>
        <Image
          className="absolute top-28 md:top-9 lg:top-16 left-1/2 -translate-x-1/2"
          src={"/images/bgProps/blob-haikei.svg"}
          alt="background prop"
          width={1200}
          height={1200}
        />
        <Card glass styles="w-full mt-16 xxl:mt-40 md:max-w-3xl mx-auto">
          <div className="py-8 md:py-16">
            <div className="relative max-w-3xl mb-4 px-4 flex md:flex-row flex-col gap-4 items-center md:justify-center">
              <h1 className="md::w-1/2 text-5xl md:text-7xl md:text-right text-center font-bold">
                <span className="">
                  Frontend <br /> Developer
                </span>
              </h1>
              <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}>
                <div
                  className={`relative mainSection flex flex-col justify-center p-4 ${styles.mainSection}`}>
                  <div className="highlightedText self-start">
                    Hello visitor,
                  </div>
                  {introText.map((text, index) => (
                    <div className="self-start highlightedText" key={index}>
                      {text}
                    </div>
                  ))}
                  <div className="md:text-6xl text-4xl highlightedText font-semibold self-start">
                    <TextTransition springConfig={presets.wobbly}>
                      {skills[index % skills.length]}
                    </TextTransition>
                  </div>
                  <div className="highlightedText self-start">
                    I am based in Mauritius and I
                  </div>
                  <div className="highlightedText self-start">
                    love art, hiking and diving.
                  </div>
                </div>
              </motion.div>
            </div>
            <ImageCarousel />
          </div>
        </Card>
        <div className="flex flex-wrap md:flex-nowrap gap-4 items-start justify-center w-full mx-auto md:max-w-3xl">
          <Card styles="flex items-center w-full p-8 bg-red text-white">
            <Clock
              format={"HH:mmA"}
              className="md:p-8 p-4 mx-auto"
              style={{ fontSize: "4em" }}
            />
          </Card>
          <div className="flex w-full gap-4">
            <Card styles="flex flex-col gap-4 p-4 bg-foreground">
              <div className="flex gap-4 items-center text-background">
                <FontAwesomeIcon className="text-3xl" icon={faGithub} />
                <span>Github</span>
              </div>
              <Link
                className="text-foreground bg-background px-4 py-2 rounded-full text-center border-[1px] border-white transition-colors duration-300 hover:border-background hover:text-background hover:bg-foreground"
                href="https://github.com/arbxz"
                target="_blank">
                Open me
              </Link>
            </Card>
            <Card styles="flex flex-col gap-4 p-4">
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
                <span>Linkedin</span>
              </div>
              <Link
                className="text-background bg-foreground px-4 py-2 rounded-full text-center border-[1px] border-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground hover:bg-background"
                href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
                target="_blank">
                Open me
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainBanner;
