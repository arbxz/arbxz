"use client";

import { useEffect, useState } from "react";
import Clock from "react-live-clock";
import TextTransition, { presets } from "react-text-transition";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Card from "../shared/Card";
import Container from "../shared/Container";
import ImageCarousel from "../shared/ImageCarousel";

const MainBanner = () => {
  const introText = [
    "I am Arbaaz Mowlabucus",
    "a fun dev who loves implementing ",
    "modern and innovative solutions.",
    "My primary focus lies in",
  ];
  const skills = ["NextJs", "ReactJs", "SCSS", "UX", "Tailwind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container flexDirection="col">
      <Image
        className="absolute top-28 md:top-9 lg:top-16 left-1/2 -translate-x-1/2 -z-0 w-auto h-auto"
        src={"/images/bgProps/blob-haikei.svg"}
        alt="background prop"
        width={1200}
        height={1200}
      />

      <Card
        background="glass"
        styles="w-full mt-16 xxl:mt-40 md:max-w-3xl mx-auto">
        <div className="py-8 md:py-16">
          <div className="relative max-w-3xl mb-4 px-4 flex md:flex-row flex-col gap-4 items-center md:justify-center">
            <h1 className="md::w-1/2 text-5xl md:text-7xl md:text-right text-center font-bold">
              <span>
                Frontend <br /> Engineer.
              </span>
            </h1>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}>
              <div className="relative mainSection flex flex-col justify-center p-4">
                {introText.map((text, index) => (
                  <span className="self-start highlight" key={index}>
                    {text}
                  </span>
                ))}
                <div className="md:text-6xl text-4xl highlight font-semibold self-start">
                  <TextTransition springConfig={presets.wobbly}>
                    <span>{skills[index % skills.length]}</span>
                  </TextTransition>
                </div>
              </div>
            </motion.div>
          </div>
          <ImageCarousel />
        </div>
      </Card>

      <div className="flex flex-wrap md:flex-nowrap gap-4 items-stretch justify-stretch w-full mx-auto md:max-w-3xl">
        <Card styles="flex items-center w-full p-8 bg-danger text-white">
          <Clock
            format={"HH:mmA"}
            ticking
            className="p-4 mx-auto"
            style={{ fontSize: "3.5em" }}
          />
        </Card>
        <div className="flex min-w-max gap-4">
          <Card styles="flex justify-between flex-col gap-4 p-4 bg-foreground">
            <div className="flex gap-4 items-center text-background">
              <FontAwesomeIcon className="text-3xl" icon={faGithub} />
              <span>Github</span>
            </div>
            <Link
              className="text-foreground bg-background px-4 py-2 rounded-full text-center border-2 border-white transition-colors duration-300 hover:border-background hover:text-background hover:bg-foreground"
              href="https://github.com/arbxz"
              target="_blank">
              Open me
            </Link>
          </Card>
          <Card styles="flex justify-between flex-col gap-4 p-4">
            <div className="flex gap-4 items-center">
              <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
              <span>Linkedin</span>
            </div>
            <Link
              className="text-background bg-foreground px-4 py-2 rounded-full text-center border-2 border-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground hover:bg-background"
              href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
              target="_blank">
              Open me
            </Link>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
