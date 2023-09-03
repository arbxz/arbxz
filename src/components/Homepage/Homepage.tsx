import React from "react";
import SkillCarousel from "./SkillCarousel/SkillCarousel";
import SocialBox from "../SocialBox/SocialBox";
import { AboutParagraph, AboutSection } from "./HomepageStyles";

const Homepage = () => {
  return (
    <AboutSection>
      <AboutParagraph>
        <h1>Front-End</h1>
        <h2>Developer</h2>
        <p>
          I develop websites, mobile apps as a career and graphic design for
          fun.
        </p>
        <p>
          My favourite tools for web development are VS code, Figma, Adobe XD,
          Illustrator and Photoshop.
        </p>
      </AboutParagraph>
      <SocialBox />
      {/* <SkillCarousel /> */}
    </AboutSection>
  );
};

export default Homepage;
