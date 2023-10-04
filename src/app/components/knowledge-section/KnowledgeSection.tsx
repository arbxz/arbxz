import {
  faCircleXmark,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useThemeContext } from "@/app/context/theme";

import {
  StyledDummyHeader,
  StyledScreenDummy,
  StyledSkillButton,
} from "../shared/sharedStyles";

interface SkillButtonsProps {
  data: string[];
  isDark?: boolean;
}

const KnowledgeSection = () => {
  const { setIsModalOpen } = useThemeContext();

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

  const SkillButtons = ({ data, isDark }: SkillButtonsProps) => {
    return (
      <div className="flex gap-4 flex-wrap w-full items-center justify-center p-2">
        {data.map((skill, index) => (
          <StyledSkillButton
            key={index}
            className="md:text-2xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl"
            isDark={isDark}>
            {skill}
          </StyledSkillButton>
        ))}
      </div>
    );
  };

  return (
    <StyledScreenDummy className="relative h-full md:h-auto md:max-w-2xl flex flex-auto flex-col mx-auto items-center md:justify-center  md:rounded-2xl shadow-xl overflow-hidden z-10">
      <StyledDummyHeader className="flex justify-end items-end w-full gap-4 p-3">
        <h4 className="mr-auto">Things I am good at</h4>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}>
          <FontAwesomeIcon icon={faWindowMinimize} />
        </button>

        <button
          className="p-0"
          onClick={() => {
            setIsModalOpen(false);
          }}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </StyledDummyHeader>
      <div className="block p-4 w-full">
        <p className="text-md text-center max-w-sm mx-auto">
          Professional skills I use in my day to day life as a react developer
        </p>
        <SkillButtons data={skillData} />
        <p className="text-xl text-center">Hobbies</p>
        <SkillButtons data={hobbyData} isDark />
      </div>
    </StyledScreenDummy>
  );
};

export default KnowledgeSection;
