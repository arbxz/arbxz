"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledHighlightedText,
  StyledMainTitle,
  StyledNoteCard,
  StyledBiocontent,
  StyledMainBanner,
} from "./MainBannerStyles";
import {
  faReact,
  faLinkedin,
  faInstagram,
  faGithub,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const MainBanner = () => {
  return (
    <>
      <StyledMainBanner className="relative flex justify-center align-middle flex-col w-full h-screen">
        <nav className="flex w-full justify-between align-middle p-4">
          <a className="text-xl" href="#">
            Arbxz
          </a>
          <div className="side-menu">
            <span className="language-wrapper block text-md">EN | FR</span>
          </div>
        </nav>

        <div className="main-container my-auto flex align-middle justify-center w-full">
          <div className="main-content relative w-full lg:w-auto p-4 flex md:flex-row flex-col gap-4 align-top justify-center">
            <StyledNoteCard className="md:absolute relative md:left-1/4 md:-top-20 p-3">
              Welcome to my portfolio !<br />
              This website is currently in development
            </StyledNoteCard>
            <div className="flex gap-4 align-top justify-center flex-col md:flex-row">
              <div className="flex justify-end gap-5 flex-col">
                <StyledMainTitle className="md:text-right text-left">
                  Front-end <br /> Developper
                </StyledMainTitle>
                <div className="flex md:justify-end gap-2 flex-row p-1.5">
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem" }}
                    icon={faReact}
                  />
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem" }}
                    icon={faHtml5}
                  />
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem" }}
                    icon={faCss3}
                  />
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ fontSize: "2rem" }}
                    icon={faJs}
                  />
                </div>
              </div>
              <StyledBiocontent className="relative p-4 max-w-xs">
                <StyledHighlightedText>Hello visitor,</StyledHighlightedText>
                <p>
                  I am Arbaaz Mowlabucus, a developer with a strong focus on
                  <StyledHighlightedText>
                    ReactJS
                  </StyledHighlightedText> and{" "}
                  <StyledHighlightedText>Next.js</StyledHighlightedText>. With
                  over 4 years of professional experience in building robust and
                  scalable web applications.
                </p>
              </StyledBiocontent>
            </div>
          </div>
        </div>
      </StyledMainBanner>

      <div className="social-container fixed flex gap-2 flex-col p-1.5 mr-5 top-1/2 right-0  -translate-y-1/2">
        <a
          href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
          target="_blank">
          <FontAwesomeIcon
            className="mb-2"
            style={{ fontSize: "1.5rem" }}
            icon={faLinkedin}
          />
        </a>
        <a href="https://github.com/arbxz" target="_blank">
          <FontAwesomeIcon
            className="mb-2"
            style={{ fontSize: "1.5rem" }}
            icon={faGithub}
          />
        </a>
        <a href="https://www.instagram.com/wulver.bd/" target="_blank">
          <FontAwesomeIcon
            className="mb-2"
            style={{ fontSize: "1.5rem" }}
            icon={faInstagram}
          />
        </a>
        <a href="https://www.instagram.com/ares_arte/" target="_blank">
          <FontAwesomeIcon
            className="mb-2"
            style={{ fontSize: "1.5rem" }}
            icon={faInstagram}
          />
        </a>
      </div>
    </>
  );
};

export default MainBanner;
