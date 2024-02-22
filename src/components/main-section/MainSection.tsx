"use client";

import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Card from "../shared/Card";
import Clock from "../shared/Clock";
import Container from "../shared/Container";

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
    <Container>
      <div className="flex flex-nowrap flex-col lg:flex-row gap-4 mt-16 xxl:mt-40">
        <div className="flex flex-col md:flex-row lg:flex-col gap-4 text-center lg:w-1/3">
          <Card
            background="bg-accent"
            styles="flex items-center justify-center p-16 md:w-1/2 lg:w-full h-full lg:h-1/2">
            <div className="text-white text-6xl lg:text-6xl">Arbxz</div>
          </Card>

          <Card
            background="glass"
            styles="flex items-center justify-center p-16 h-full">
            <div className="text-foreground text-4xl">
              Crafting Digital Experiences, One Line of Code at a Time.{" "}
              <FontAwesomeIcon className="text-4xl" icon={faQuoteRight} />
            </div>
          </Card>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <Card
            background="glass"
            styles="flex items-center justify-center w-full h-full overflow-hidden">
            <div className="w-auto py-8 md:py-16 lg:py-18">
              <div className="relative lg:max-w-3xl w-full mb-8 px-4 flex md:flex-row flex-col gap-4 items-center md:justify-center">
                <h1 className="md::w-1/2 text-5xl md:text-7xl md:text-right text-center font-bold">
                  <span>
                    Frontend <br /> Engineer.
                  </span>
                </h1>

                <div className="relative mainSection flex flex-col justify-center p-4 rounded-3xl border-4 border-dashed border-accent">
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
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap md:flex-nowrap gap-4 items-stretch justify-stretch w-full">
            <Card
              background="bg-accent"
              styles="flex w-full items-center p-8 text-white text-6xl text-center">
              <Clock />
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
                  target="_blank"
                  prefetch={false}>
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
                  target="_blank"
                  prefetch={false}>
                  Open me
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
