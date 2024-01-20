import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppContext } from "@/context/appContext";

import KnowledgeSection from "../about-modal-content/AboutModalContent";
import Card from "../shared/Card";

const SkillSection = () => {
  const { setIsModalOpen, setModalContent } = useAppContext();
  const textToHighlight = () => {
    const highlightArray = [
      "I'm a results-driven Frontend ",
      "Engineer, with expertise in ..",
    ];

    return (
      <>
        {highlightArray.map((text, index) => (
          <div className="highlight text-xl" key={index}>
            {text}
          </div>
        ))}
      </>
    );
  };
  return (
    <Card
      background="glass"
      styles="p-4 flex text-center gap-4 flex-col justify-center items-center h-full w-full hover:bg-accent hover:text-white transition-colors duration-300">
      <h2 className="text-6xl font-bold">
        Get to
        <br /> know me !
      </h2>
      <div className="text-xl">{textToHighlight()}</div>
      <button
        type="button"
        onClick={() => {
          setModalContent(<KnowledgeSection />);
          setIsModalOpen(true);
        }}
        className="bg-foreground text-background border-foreground flex gap-4 items-center max-w-[20rem] text-xl md:px-6 px-4 md:py-2 py-1 rounded-3xl hover:scale-105 hover:shadow-md transition-all">
        <FontAwesomeIcon icon={faWindowMaximize} />
        Open me !
      </button>
    </Card>
  );
};

export default SkillSection;
