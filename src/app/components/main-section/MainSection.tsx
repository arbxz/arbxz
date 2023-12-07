import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import Navigation from "../navigation/Navigation";
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
    <div className="relative flex gap-5 justify-center items-center flex-col w-full">
      <Navigation />
      <div className="relative md:w-full lg:w-auto px-4 md:pt-32 pt-28 flex md:flex-row flex-col gap-4 align-top justify-center">
        <div className="flex md::w-1/2 justify-center flex-col">
          <h1 className="text-4xl md:text-6xl md:text-right text-center font-bold mb-4">
            <span className={styles.gradientTitle}>
              Frontend <br /> Developer
            </span>
          </h1>
          <span className="italic text-md md:text-right ml-auto md:max-w-md">
            <b className="text-accent">Disclaimer</b> : This website is in
            progress you might notice some UI is just placed as dummy :D
          </span>
        </div>
        <div
          className={`relative mainSection flex flex-col justify-center p-4 md:w-1/2 max-w-[500px] ${styles.mainSection}`}>
          <div className="highlightedText self-start">Hello visitor,</div>
          {introText.map((text, index) => (
            <div className="self-start highlightedText" key={index}>
              {text}
            </div>
          ))}
          <div className="md:text-6xl text3xl highlightedText font-semibold self-start">
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
      </div>
      <ImageCarousel />
    </div>
  );
};

export default MainBanner;
