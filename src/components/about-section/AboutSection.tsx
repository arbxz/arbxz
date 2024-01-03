import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppContext } from "@/context/appContext";

import KnowledgeSection from "../about-modal-content/AboutModalContent";
import Card from "../shared/Card";

const SkillSection = () => {
  const { setIsModalOpen, setModalContent } = useAppContext();
  const textToHighlight = () => {
    const highlightArray = [
      "I'm a results-driven Frontend Engineer",
      "with expertise in ..",
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
    <Card styles="p-4 flex gap-4 flex-col h-full w-full sm:max-w-md w-full">
      <h2 className="md:text-6xl text-3xl font-bold">
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
        className="bg-foreground text-background border-foreground flex gap-4 items-center max-w-[20rem] text-xl md:px-6 px-4 md:py-2 py-1 rounded-3xl ml-auto mt-auto lg:mt-0 hover:scale-105 hover:shadow-md transition-all">
        <FontAwesomeIcon icon={faWindowMaximize} />
        Open me !
      </button>
    </Card>
  );
};

export default SkillSection;
