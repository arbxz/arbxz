import {
  faCircleXmark,
  faPaperPlane,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { useModalContext } from "@/app/context/modal";

import KnowledgeSection from "../knowledge-section/KnowledgeSection";
import RippleButtonWrapper from "../shared/shared-components/RippleButtonWrapper";
import RippleTypingDots from "../shared/shared-components/RippleTyping";
import { StyledHighlightedText } from "../shared/sharedStyles";
import profileImg from "/public/images/arbaaz-picture.jpg";

const Contact = () => {
  const { setIsModalOpen, setModalContent } = useModalContext();

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
          <StyledHighlightedText className="text-lg" key={index} isDark={false}>
            {text}
          </StyledHighlightedText>
        ))}
      </>
    );
  };

  return (
    <>
      <section id="aboutme" className="w-full lg:max-w-5xl p-4 mb-10 lg:mb-24">
        <div
          className={`bg-background rounded-xl md:p-8 p-2 flex flex-auto gap-4 lg:gap-20 items-center justify-center flex-col lg:flex-row w-full mx-auto shadow-md hover:shadow-xl transition-shadow ease-out duration-300`}>
          <div className="inline-flex lg:flex gap-5 flex-col lg:w-1/2 w-full text-center lg:text-right">
            <div className="relative">
              <h2 className="block font-system-ui md:text-7xl text-6xl font-extrabold lg:max-w-md lg:ml-auto text-foreground relative z-10">
                Get to know me !
              </h2>
            </div>
            <div className="relative max-w-sm lg:ml-auto lg:mr-0 ml-auto mr-auto text-lg">
              {textToHighlight()}
            </div>
            <button
              type="button"
              onClick={() => {
                setModalContent(<KnowledgeSection />);
                setIsModalOpen(true);
              }}
              className="bg-foreground text-background border-foreground flex gap-4 items-center max-w-[20rem] md:text-xl text-xl md:px-6 px-4 md:py-2 py-1 rounded-3xl md:rounded-3xl mr-auto ml-auto lg:mr-0 hover:scale-105 hover:shadow-md transition-all">
              <FontAwesomeIcon icon={faWindowMaximize} />
              Open me !
            </button>
          </div>

          <div className="flex flex-col items-center justify-start w-full sm:w-3/5 lg:w-1/2 mx-auto rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex justify-end items-baseline bg-foreground text-background w-full gap-4 p-3 border-b">
              <h4 className="mr-auto">Let&apos;s get in touch !</h4>
              <FontAwesomeIcon icon={faWindowMinimize} />
              <FontAwesomeIcon icon={faWindowMaximize} />
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
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
              <div className="relative bg-square flex flex-col gap-3 w-full p-4">
                {messageContent.map((content, index) => (
                  <span
                    className="relative flex w-fit max-w-[75%] py-3 px-4 rounded-md text-sm text-white bg-primary odd:ml-auto odd:text-primary odd:bg-white shadow-md hover:odd:-translate-x-4 hover:even:translate-x-4 hover:scale-105 transition-all duration-300"
                    key={index}>
                    {content}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 w-full p-4 bg-white">
                <input
                  className="appearance-none border-2 rounded-3xl w-full py-2 px-4 leading-tight shadow-md focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  title="Message input"
                  placeholder="Type your email and message"
                  name="Email"
                  aria-label="Email and message"
                />
                <RippleButtonWrapper color="#333333">
                  <button
                    type="button"
                    title="Send message"
                    className="relative bg-foreground text-background flex items-center justify-center p-3 text-base rounded-full ml-auto z-10">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
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
