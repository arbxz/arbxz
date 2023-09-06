"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faReact,
  faLinkedin,
  faInstagram,
  faGithub,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "../navigation/Navigation";
import {
  StyledHighlightedText,
  StyledMainTitle,
  StyledNoteCard,
  StyledBiocontent,
  StyledMainBanner,
  StyledSocialContainer,
} from "./MainBannerStyles";

const MainBanner = () => {
  return (
    <>
      <StyledMainBanner className="relative flex justify-center align-middle flex-col w-full h-screen">
        <Image
          src="/images/gradient-mesh.webp"
          alt="Vercel Logo"
          fill
          priority
        />

        <Navigation />

        <div className="main-container my-auto flex align-middle justify-center w-full">
          <div className="main-content relative w-full lg:w-auto p-4 flex md:flex-row flex-col gap-4 align-top justify-center">
            <StyledNoteCard className="md:absolute relative md:left-1/4 md:-top-20 p-3 text-xs">
              Welcome to my portfolio !<br />
              This website is currently in development
            </StyledNoteCard>
            <div className="flex gap-4 align-top justify-center flex-col md:flex-row">
              <div className="flex justify-end gap-5 flex-col">
                <StyledMainTitle className="md:text-right text-left">
                  Front-end <br /> Developper
                </StyledMainTitle>
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
                  <p className="text-white">
                    I am Arbaaz Mowlabucus, a developer with a strong focus on
                    <StyledHighlightedText>
                      ReactJS
                    </StyledHighlightedText> and{" "}
                    <StyledHighlightedText>Next.js</StyledHighlightedText>. With
                    over 4 years of professional experience in building robust
                    and scalable web applications.
                  </p>
                </div>
              </StyledBiocontent>
            </div>
          </div>
        </div>
      </StyledMainBanner>

      <StyledSocialContainer className="fixed flex bg-white rounded-3xl gap-2 flex-col px-1.5 py-4 ml-5 top-1/2 left-0 -translate-y-1/2">
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
