import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import Navigation from "../navigation/Navigation";
import ImageCarousel from "../shared/shared-components/ImageCarousel";
import { StyledHighlightedText } from "../shared/sharedStyles";
import styles from "./MainSection.module.css";

const MainBanner = () => {
  const introText = [
    "I am a fun loving dev who likes",
    "innovative and modern designs.",
    "My primary focus lies in",
  ];
  const skills = ["NextJs", "ReactJs", "CSS", "Web design", "UX", "Tailwind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="relative flex justify-center items-center flex-col w-full pt-28 mb-8">
      <Navigation />
      <div className="flex items-center justify-center w-full pt-20 md:pt-0">
        <div className="relative md:w-full lg:w-auto p-4 flex md:flex-row flex-col gap-4 align-top justify-center">
          <div className="flex gap-4 align-center justify-center flex-col md:flex-row">
            <div className="flex lg:w-3/5 justify-center flex-col">
              <h1 className="text-7xl md:text-8xl md:text-right text-center font-bold font-system-ui mb-4">
                Frontend <br /> Developer
              </h1>
              <span className="italic text-md text-left ml-auto md:max-w-md">
                <b className="text-accent text-3xl">Disclaimer</b> : This
                website is in progress you might notice some UI is just placed
                as dummy :D
              </span>
            </div>
            <div
              className={`relative mainSection flex flex-col justify-center p-4 lg:w-2/5 max-w-[500px] ${styles.mainSection}`}>
              <div className="text-xl rounded-2xl p-4">
                <StyledHighlightedText>Hello visitor,</StyledHighlightedText>
                <div>
                  {introText.map((text, index) => (
                    <StyledHighlightedText key={index}>
                      {text}
                    </StyledHighlightedText>
                  ))}
                  <br />
                  <StyledHighlightedText className="text-4xl text-accent font-semibold font-system-ui">
                    <span className="text-accent">
                      <TextTransition springConfig={presets.wobbly}>
                        {skills[index % skills.length]}
                      </TextTransition>
                    </span>
                  </StyledHighlightedText>
                  <br />
                  <StyledHighlightedText>
                    I am based in Mauritius and I
                  </StyledHighlightedText>
                  <StyledHighlightedText>
                    love art, hiking and diving.
                  </StyledHighlightedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageCarousel />
    </section>
  );
};

export default MainBanner;
