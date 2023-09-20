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

import Navigation from "../navigation/Navigation";
import { StyledHighlightedText, StyledMainTitle } from "../shared/sharedStyles";
import {
  StyledBiocontent,
  StyledMainBanner,
  StyledNoteCard,
} from "./MainSectionStyles";

const MainBanner = () => {
  const Skills = ["NextJs", "ReactJs", "CSS", "Web design", "UX", "Tailwind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <StyledMainBanner className="relative flex justify-center items-center flex-col w-full min-h-screen">
        <Navigation />

        <div className="main-container my-auto flex items-center justify-center w-full">
          <div className="main-content relative md:w-full lg:w-auto p-4 flex md:flex-row flex-col gap-4 align-top justify-center">
            <StyledNoteCard className="md:absolute relative md:left-1/4 md:-top-20 p-3 text-xs">
              Welcome to my portfolio !<br />
              This website is currently in development
            </StyledNoteCard>
            <div className="flex gap-4 align-top justify-center flex-col md:flex-row">
              <div className="flex justify-end gap-5 flex-col">
                <StyledMainTitle className="md:text-8xl md:text-right text-6xl text-center font-semibold">
                  Front-end <br /> Developer
                </StyledMainTitle>
                <div className="flex justify-center md:justify-end gap-5 flex-row p-1.5 text-4xl">
                  <FontAwesomeIcon icon={faReact} />
                  <FontAwesomeIcon icon={faHtml5} />
                  <FontAwesomeIcon icon={faCss3} />
                  <FontAwesomeIcon icon={faJs} />
                </div>
              </div>
              <StyledBiocontent className="relative flex flex-col justify-center p-4 max-w-xs">
                <div className="rounded-2xl p-4">
                  <StyledHighlightedText>Hello visitor,</StyledHighlightedText>
                  <div>
                    <StyledHighlightedText isDark={true}>
                      I am a fun loving dev who likes
                    </StyledHighlightedText>
                    <StyledHighlightedText isDark={true}>
                      innovative and modern designs.
                    </StyledHighlightedText>
                    <StyledHighlightedText isDark={true}>
                      My primary focus lies in
                    </StyledHighlightedText>
                    <br />
                    <StyledHighlightedText className="text-4xl">
                      <TextTransition springConfig={presets.wobbly}>
                        {Skills[index % Skills.length]}
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
