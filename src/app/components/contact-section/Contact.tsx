"use-client";
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
import RippleTypingDots from "../shared/shared-components/RippleTyping";
import profileImg from "/public/images/arbaaz-picture.jpg";

const Contact = () => {
  const API_KEY = process.env.WEB3FORMS_API_KEY;
  const { setIsModalOpen, setModalContent } = useModalContext();
  const messageContent = [
    "I've also served as a Scrum Master, improving my knowledge of agile methodologies and team dynamics.",
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
          <div className="highlightedText text-xl" key={index}>
            {text}
          </div>
        ))}
      </>
    );
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", API_KEY || "TEST");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
    }
  }

  return (
    <>
      <div id="aboutme" className="w-full lg:max-w-5xl md:p-4">
        <div
          className={`bg-accent md:rounded-xl md:p-6 p-4 flex gap-4 lg:gap-20 items-center justify-center flex-col lg:flex-row w-full mx-auto shadow-md hover:shadow-xl transition-shadow ease-out duration-300`}>
          <div className="inline-flex lg:flex gap-5 flex-col lg:w-1/2 w-full text-center lg:text-right">
            <h2 className="block md:text-6xl text-3xl font-bold lg:max-w-md lg:ml-auto text-white relative z-10">
              Get to
              <br /> know me !
            </h2>
            <div className="relative max-w-sm lg:ml-auto lg:mr-0 ml-auto mr-auto text-xl">
              {textToHighlight()}
            </div>
            <button
              type="button"
              onClick={() => {
                setModalContent(<KnowledgeSection />);
                setIsModalOpen(true);
              }}
              className="bg-foreground text-background border-foreground flex gap-4 items-center max-w-[20rem] text-xl md:px-6 px-4 md:py-2 py-1 rounded-3xl md:rounded-3xl mr-auto ml-auto lg:mr-0 hover:scale-105 hover:shadow-md transition-all">
              <FontAwesomeIcon icon={faWindowMaximize} />
              Open me !
            </button>
          </div>

          <div className="flex flex-col items-center justify-start w-full sm:w-3/5 lg:w-1/2 mx-auto rounded-2xl shadow-md overflow-hidden">
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
                <div className="z-10">
                  <span className="flex items-center gap-3 font-semibold">
                    Arbaaz Mowlabucus
                    <span className="inline-block rounded-full w-3 h-3 overflow-hidden bg-amber-400"></span>
                  </span>
                  <span>Frontend Developer</span>
                </div>
              </div>
              <div className="relative bg-white flex flex-col gap-3 w-full p-4">
                {messageContent.map((content, index) => (
                  <span
                    className="relative h-auto flex w-fit max-w-[75%] py-3 px-4 rounded-md text-white bg-primary odd:ml-auto odd:text-primary odd:bg-white shadow-md hover:odd:-translate-x-4 hover:even:translate-x-4 hover:scale-105 transition-all duration-300"
                    key={index}>
                    {content}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 w-full p-4 bg-white">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-4">
                  <div className="flex lg:flex-row flex-col gap-4">
                    <input
                      className="appearance-none border-2 rounded-xl w-full py-2 px-4 leading-tight shadow-md focus:outline-none focus:bg-white focus:border-purple-500"
                      type="text"
                      title="Message input"
                      placeholder="Type your name"
                      name="Name"
                      aria-label="Name"
                    />
                    <input
                      className="appearance-none border-2 rounded-xl w-full py-2 px-4 leading-tight shadow-md focus:outline-none focus:bg-white focus:border-purple-500"
                      type="email"
                      title="Message input"
                      placeholder="Type your email"
                      name="Email"
                      aria-label="Email"
                    />
                  </div>
                  <textarea
                    className="appearance-none border-2 rounded-xl w-full py-2 px-4 leading-tight shadow-md focus:outline-none focus:bg-white focus:border-purple-500"
                    title="Message input"
                    placeholder="Type your messsage"
                    name="Message"
                    aria-label="Message"
                  />

                  <button
                    type="submit"
                    title="Send message"
                    className="w-full flex text-background bg-foreground gap-4 items-center justify-center px-4 py-2 text-base rounded-xl ml-auto z-10">
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
