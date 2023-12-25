import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useModalContext } from "@/context/modal";

interface SkillButtonsProps {
  data: string[];
  isDark?: boolean;
}

const KnowledgeSection = () => {
  const { setIsModalOpen } = useModalContext();

  const skillData = [
    "Figma",
    "HTML/TSX/JSX",
    "CSS/SCSS",
    "Typescript",
    "NextJs",
    "ReactJs",
    "Cypress",
    "Vercel",
  ];

  const hobbyData = ["Digital Art", "Art", "Web design", "Photoshop"];

  const SkillButtons = ({ data }: SkillButtonsProps) => {
    return (
      <div className="flex gap-4 flex-wrap w-full items-center justify-center p-2">
        {data.map((skill, index) => (
          <button
            type="button"
            key={index}
            className=" bg-foreground text-background text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
            {skill}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-full md:h-auto md:max-w-2xl flex flex-col mx-auto items-center md:justify-center  md:rounded-2xl shadow-xl overflow-hidden z-10">
      <div className="bg-foreground text-background flex items-center w-full gap-4 p-3">
        <h4 className="mr-auto">Things I am good at</h4>

        <button
          type="button"
          className="p-0"
          onClick={() => {
            setIsModalOpen(false);
          }}>
          <FontAwesomeIcon className="text-3xl" icon={faCircleXmark} />
        </button>
      </div>
      <div className="block p-4 w-full h-full bg-backgroundSecondary">
        <p className="text-xl text-center max-w-sm mx-auto">
          Professional skills I use in my day to day life as a react developer
        </p>
        <SkillButtons data={skillData} />
        <p className="text-xl text-center">Hobbies</p>
        <SkillButtons data={hobbyData} isDark />
      </div>
    </div>
  );
};

export default KnowledgeSection;
