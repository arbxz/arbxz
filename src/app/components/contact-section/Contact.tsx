import {
  faCircleXmark,
  faPaperPlane,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { useThemeContext } from "@/app/context/theme";

import { StyledTitle } from "../main-section/MainSectionStyles";
import RippleButtonWrapper from "../shared/shared-components/RippleButtonWrapper";
import {
  StyledDummyHeader,
  StyledPrimaryButton,
  StyledScreenDummy,
} from "../shared/sharedStyles";
import {
  StyledMessageBox,
  StyledMessageBoxWrapper,
  StyledMessageHeader,
  StyledMessageItem,
} from "./ContactStyles";
import profileImg from "/public/images/arbaaz-picture.jpg";

const Contact = () => {
  const { theme } = useThemeContext();
  const messageContent = [
    "I've also served as a Scrum Master, mastering Agile methodologies and team dynamics. My attention to detail and commitment to best practices guarantee robust, visually stunning, and maintainable applications. I thrive in cross-functional teams and stay updated on frontend trends. Let's collaborate to bring your vision to life and optimize user experiences!",
    "Hmmm, sounds interesting.\nCan I get in touch with you ?",
    "Sure ! ᕙ(⇀‸↼‶)ᕗ\nJust send me your info down below haha :D",
  ];

  return (
    <section
      id="contact-section"
      className=" items-center justify-center min-h-screen h-full w-full p-4">
      <div className="main-container my-auto flex items-center justify-center w-full">
        <div className="main-content relative md:w-full lg:w-auto p-4 flex md:flex-row flex-col gap-4 align-top justify-center">
          <div className="flex flex-auto gap-4 lg:gap-8 items-center justify-center flex-col lg:flex-row">
            <div className="block lg:flex gap-5 flex-col lg:w-1/2 w-full text-center lg:text-right">
              <StyledTitle className="md:text-8xl text-6xl font-bold">
                Get to know me !
              </StyledTitle>
              <div className="max-w-md lg:ml-auto lg:mr-0 ml-auto mr-auto text-lg font-semibold">
                <p>
                  I&apos;m a results-driven Frontend Developer with expertise in
                  React, Next.js, TypeScript, and a range of UI libraries.
                  Proficient in Cypress for testing, I ensure high-quality,
                  interactive web applications. With Vercel, I deploy
                  lightning-fast websites. Git and versioning systems are second
                  nature, ensuring seamless collaboration.{" "}
                </p>
              </div>
            </div>
            <StyledScreenDummy className="flex flex-auto flex-col items-center justify-start md:w-2/4 lg:w-60 w-full mx-auto rounded-2xl shadow-md overflow-hidden">
              <StyledDummyHeader className="flex justify-end items-center w-full gap-4 p-3 border-b">
                <h4 className="mr-auto">Let&apos;s get in touch !</h4>
                <FontAwesomeIcon icon={faWindowMinimize} />
                <FontAwesomeIcon icon={faWindowMaximize} />
                <FontAwesomeIcon icon={faCircleXmark} />
              </StyledDummyHeader>
              <StyledMessageBoxWrapper className="flex flex-wrap">
                <StyledMessageHeader className="messanger-header flex flex-row gap-4 w-full items-center justify-start py-2 px-4">
                  <div className="rounded-full overflow-hidden z-10">
                    <Image
                      src={profileImg}
                      width={40}
                      height={40}
                      alt="Picture of the myself"
                      placeholder="blur"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center text-sm z-10">
                    <span className="font-semibold">Arbaaz Mowlabucus</span>
                    <span>Frontend Developer</span>
                  </div>
                </StyledMessageHeader>
                <StyledMessageBox className="flex flex-col gap-3 w-full p-4">
                  {messageContent.map((content, index) => (
                    <StyledMessageItem key={index}>{content}</StyledMessageItem>
                  ))}
                </StyledMessageBox>
                <div className="flex items-center gap-4 w-full p-4">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text"
                    title="message to arbaaz input"
                    placeholder="Type your email and message"
                    name="Email"
                    aria-label="Email and message"
                  />
                  <RippleButtonWrapper
                    color={theme == "light" ? "#FF00FF" : "#54ECC4"}>
                    <StyledPrimaryButton
                      type="submit"
                      title="Send message"
                      className="relative flex items-center justify-center p-3 text-base rounded-full ml-auto z-10">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </StyledPrimaryButton>
                  </RippleButtonWrapper>
                </div>
              </StyledMessageBoxWrapper>
            </StyledScreenDummy>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
