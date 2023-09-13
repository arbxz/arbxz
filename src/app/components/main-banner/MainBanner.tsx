"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import {
  faCss3,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "../navigation/Navigation";
import {
  StyledBiocontent,
  StyledHighlightedText,
  StyledMainBanner,
  StyledMainTitle,
  StyledNoteCard,
  StyledSocialContainer,
} from "./MainBannerStyles";

const MainBanner = () => {
  const Skills = ["NextJs", "ReactJs", "CSS", "Web design", "UX", "Tailwind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <StyledMainBanner className="relative flex justify-center align-middle flex-col w-full h-screen">
        <Navigation />

        <div className="main-container my-auto flex align-middle justify-center w-full">
          <div className="main-content relative w-full lg:w-auto p-4 flex md:flex-row flex-col gap-4 align-top justify-center">
            <StyledNoteCard className="md:absolute relative md:left-1/4 md:-top-20 p-3 text-xs">
              Welcome to my portfolio !<br />
              This website is currently in development
            </StyledNoteCard>
            <div className="flex gap-4 align-top justify-center flex-col md:flex-row">
              <div className="flex justify-end gap-5 flex-col">
                <StyledMainTitle className="md:text-8xl md:text-right text-6xl text-left">
                  Front-end <br /> Developer
                </StyledMainTitle>
                {/* Todo : Populate with array */}
                <div className="flex md:justify-end gap-5 flex-row p-1.5">
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem", color: "#333333" }}
                    icon={faReact}
                  />
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem", color: "#333333" }}
                    icon={faHtml5}
                  />
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem", color: "#333333" }}
                    icon={faCss3}
                  />
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem", color: "#333333" }}
                    icon={faJs}
                  />
                </div>
              </div>
              <StyledBiocontent className="relative flex flex-col justify-center p-4 max-w-xs">
                <div className="rounded-2xl p-4">
                  <StyledHighlightedText>Hello visitor,</StyledHighlightedText>
                  <div>
                    I am Arbaaz Mowlabucus, a fun loving dev with my primary
                    focus being
                    <StyledHighlightedText className="text-4xl">
                      <TextTransition springConfig={presets.wobbly}>
                        {Skills[index % Skills.length]}
                      </TextTransition>
                    </StyledHighlightedText>
                    .<br /> With over 4 years of professional experience in
                    building robust and scalable web applications.
                  </div>
                </div>
              </StyledBiocontent>
            </div>
          </div>
        </div>
      </StyledMainBanner>

      {/* Todo : Populate with array */}
      <StyledSocialContainer className="hidden fixed md:flex bg-white rounded-3xl gap-2 flex-col px-1.5 py-4 ml-5 top-1/2 left-0 -translate-y-1/2">
        <a
          href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
          target="_blank">
          <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faLinkedin} />
        </a>
        <a href="https://github.com/arbxz" target="_blank">
          <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/wulver.bd/" target="_blank">
          <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faInstagram} />
        </a>
        <a href="https://www.instagram.com/ares_arte/" target="_blank">
          <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faInstagram} />
        </a>
      </StyledSocialContainer>
    </>
  );
};

export default MainBanner;
