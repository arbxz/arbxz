import {
  faCircleXmark,
  faPaperPlane,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { useThemeContext } from "@/app/context/theme";

import KnowledgeSection from "../knowledge-section/KnowledgeSection";
import RippleButtonWrapper from "../shared/shared-components/RippleButtonWrapper";
import RippleTypingDots from "../shared/shared-components/RippleTyping";
import {
  StyledDummyHeader,
  StyledHighlightedText,
  StyledPrimaryButton,
  StyledSkillButton,
} from "../shared/sharedStyles";
import { StyledMessageBox } from "./ContactStyles";
import profileImg from "/public/images/arbaaz-picture.jpg";

const Contact = () => {
  const { setIsModalOpen, setModalContent } = useThemeContext();

  const messageContent = [
    "I've also served as a Scrum Master, improving my knowledge of agile methodologies and team dynamics. My attention to detail and commitment to best practices guarantee robust applications. Let's collaborate to bring your vision to life and optimize user experiences!",
    "Hmmm, sounds interesting.\nCan I get in touch with you ?",
    "Sure ! ᕙ(⇀‸↼‶)ᕗ\nJust send me your info down below haha :D",
    // eslint-disable-next-line react/jsx-key
    <RippleTypingDots />,
  ];

  const textToHighlight = () => {
    const highlightedTextArray = [
      "I'm a results-driven Frontend Developer",
      "with expertise in ..",
    ];

    return (
      <>
        {highlightedTextArray.map((text, index) => (
          <StyledHighlightedText className="text-lg" key={index} isDark={true}>
            {text}
          </StyledHighlightedText>
        ))}
      </>
    );
  };

  return (
    <>
      <section
        id="contact-section"
        className="w-full lg:max-w-7xl p-4 mb-10 lg:mb-24 ">
        <div className="bg-redAccent rounded-xl p-8 flex flex-auto gap-4 lg:gap-20 items-center justify-center flex-col lg:flex-row w-full lg:w-4/5 mx-auto shadow-md hover:shadow-xl transition-shadow ease-out duration-300">
          <div className="inline-flex lg:flex gap-5 flex-col lg:w-1/2 w-full text-center lg:text-right">
            <h2 className="font-system-ui md:text-7xl text-6xl font-extrabold lg:max-w-md lg:ml-auto text-primary">
              Get to know me !
            </h2>
            <div className="max-w-sm lg:ml-auto lg:mr-0 ml-auto mr-auto text-lg">
              {textToHighlight()}
            </div>
            <StyledSkillButton
              onClick={() => {
                setModalContent(<KnowledgeSection />);
                setIsModalOpen(true);
              }}
              className="flex gap-4 items-center max-w-[20rem] md:text-xl text-xl md:px-6 px-4 md:py-2 py-1 rounded-3xl md:rounded-3xl mr-auto ml-auto lg:mr-0"
              isDark={true}>
              <FontAwesomeIcon icon={faWindowMaximize} />
              Open me !
            </StyledSkillButton>
          </div>

          <div className="flex flex-col items-center justify-start w-full sm:w-3/5 lg:w-1/2 mx-auto rounded-2xl shadow-xl overflow-hidden">
            <StyledDummyHeader className="flex justify-end items-baseline w-full gap-4 p-3 border-b">
              <h4 className="mr-auto">Let&apos;s get in touch !</h4>
              <FontAwesomeIcon icon={faWindowMinimize} />
              <FontAwesomeIcon icon={faWindowMaximize} />
              <FontAwesomeIcon icon={faCircleXmark} />
            </StyledDummyHeader>
            <div className="flex flex-wrap">
              <div className="flex flex-row gap-4 w-full items-center justify-start py-2 px-4 bg-primary text-white">
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
                <div className="text-sm z-10">
                  <span className="flex items-center gap-3 font-semibold">
                    Arbaaz Mowlabucus{" "}
                    <span className="inline-block rounded-full w-3 h-3 overflow-hidden bg-amber-400"></span>
                  </span>
                  <span>Frontend Developer</span>
                </div>
              </div>
              <StyledMessageBox className="flex flex-col gap-3 w-full p-4">
                {messageContent.map((content, index) => (
                  <span
                    className="relative flex w-fit max-w-[75%] py-3 px-4 rounded-md text-sm text-white bg-primary odd:ml-auto odd:text-primary odd:bg-white"
                    key={index}>
                    {content}
                  </span>
                ))}
              </StyledMessageBox>
              <div className="flex items-center gap-4 w-full p-4 bg-white">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  title="Message input"
                  placeholder="Type your email and message"
                  name="Email"
                  aria-label="Email and message"
                />
                <RippleButtonWrapper color="#F74545">
                  <StyledPrimaryButton
                    type="submit"
                    title="Send message"
                    className="relative flex items-center justify-center p-3 text-base rounded-full ml-auto z-10">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </StyledPrimaryButton>
                </RippleButtonWrapper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
