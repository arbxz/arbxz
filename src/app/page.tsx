"use client";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import KnowledgeBlock from "./components/knowledge-block/KnowledgeBlock";
import MainBanner from "./components/main-banner/MainBanner";
import { StyledSocialContainer } from "./components/main-banner/MainBannerStyles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <KnowledgeBlock />

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
    </main>
  );
}
