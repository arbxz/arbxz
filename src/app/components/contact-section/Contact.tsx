import {
  faCircleXmark,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledScreenDummy } from "../shared/WindowFrame";


const Contact = () => {
  return (
    <section
      id="skills-block"
      className=" align-middle justify-center h-screen w-full">
      <StyledScreenDummy className="flex flex-auto flex-col md:w-3/5 w-4/5 min-h-4/5 mx-auto align-middle justify-start rounded-2xl overflow-hidden">
        <div className="flex justify-self-start justify-end align-baseline gap-4 p-3 border-b bg-neutral-700">
          <h4 className="mr-auto text-white">Let&apos;s get in contact</h4>
          <FontAwesomeIcon color="white" icon={faWindowMinimize} />
          <FontAwesomeIcon color="white" icon={faWindowMaximize} />
          <FontAwesomeIcon color="white" icon={faCircleXmark} />
        </div>
        <div className="flex flex-wrap">
          <div className="about-section"></div>
          <div className="contact-section"></div>
        </div>
      </StyledScreenDummy>
    </section>
  );
};

export default Contact;
