"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useThemeContext } from "@/app/context/theme";

import Navigation from "../navigation/Navigation";
import { StyledHighlightedText } from "../shared/sharedStyles";
import {
  StyledBiocontent,
  StyledMainBanner,
  StyledNoteCard,
} from "./MainSectionStyles";

const MainBanner = () => {
  const { theme } = useThemeContext();
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
    <>
      <StyledMainBanner
        className={`main-container ${
          theme === "dark" ? "main-container-dark" : "main-container-"
        } relative bg-blend-luminosity flex justify-center items-center flex-col w-full min-h-screen`}>
        <Navigation />

        <div className="my-auto flex items-center justify-center w-full">
          <div className="relative md:w-full lg:w-auto p-4 flex md:flex-row flex-col gap-4 align-top justify-center">
            <StyledNoteCard className="md:absolute relative md:left-1/4 md:-top-20 p-3 text-md">
              Welcome to my portfolio !<br />
              This website is currently under development,
              <br /> you can still look around :D
            </StyledNoteCard>
            <div className="flex gap-4 align-center justify-center flex-col md:flex-row">
              <div className="flex lg:w-3/5 justify-end  gap-5 lg:gap-10 flex-col">
                <h1 className="text-7xl md:text-8xl md:text-right text-center font-bold font-system-ui">
                  Frontend <br /> Developer
                </h1>
                <div className="flex justify-center md:justify-end gap-5 flex-row p-1.5 text-4xl">
                  <FontAwesomeIcon icon={faReact} />
                  <FontAwesomeIcon icon={faHtml5} />
                  <FontAwesomeIcon icon={faCss3} />
                  <FontAwesomeIcon icon={faJs} />
                </div>
              </div>
              <StyledBiocontent className="relative flex flex-col justify-center p-4 lg:w-2/5 max-w-[500px]">
                <div className="text-xl rounded-2xl p-4">
                  <StyledHighlightedText>Hello visitor,</StyledHighlightedText>
                  <div>
                    {introText.map((text, index) => (
                      <StyledHighlightedText key={index} isDark={true}>
                        {text}
                      </StyledHighlightedText>
                    ))}
                    <br />
                    <StyledHighlightedText className="text-4xl font-semibold font-system-ui">
                      <TextTransition springConfig={presets.wobbly}>
                        {skills[index % skills.length]}
                      </TextTransition>
                    </StyledHighlightedText>
                    .<br />
                    <StyledHighlightedText isDark={true}>
                      I am based in Mauritius and I love
                    </StyledHighlightedText>
                    <StyledHighlightedText isDark={true}>
                      art, hiking and diving.
                    </StyledHighlightedText>
                  </div>
                </div>
              </StyledBiocontent>
            </div>
          </div>
        </div>
      </StyledMainBanner>
    </>
  );
};

export default MainBanner;
