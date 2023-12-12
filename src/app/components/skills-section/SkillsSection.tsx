import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useModalContext } from "@/app/context/modal";

import KnowledgeSection from "../knowledge-section/KnowledgeSection";
import Card from "../shared/shared-components/Card";

const SkillSection = () => {
  const { setIsModalOpen, setModalContent } = useModalContext();
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
  return (
    <Card
      glass
      styles="p-4 flex gap-4 flex-col w-full sm:max-w-md w-full sm:w-auto">
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
