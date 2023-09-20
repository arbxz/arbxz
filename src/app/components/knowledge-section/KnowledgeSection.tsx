import {
  faCircleXmark,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="flex gap-4 flex-wrap w-full items-center justify-center p-4">
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
    <section
      id="skills-section"
      className="flex flex-auto items-center justify-center w-4/5 md:w-3/5 lg:w-1/2 mx-auto px-4 py-6">
      <StyledScreenDummy className="flex flex-auto flex-col min-h-4/5 mx-auto items-center justify-center rounded-2xl shadow-xl overflow-hidden">
        <StyledDummyHeader className="flex justify-end items-center w-full gap-4 p-3">
          <h4 className="mr-auto">Things I am good at</h4>
          <FontAwesomeIcon icon={faWindowMinimize} />
          <FontAwesomeIcon icon={faWindowMaximize} />
          <FontAwesomeIcon icon={faCircleXmark} />
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
    </section>
  );
};

export default KnowledgeSection;
