import {
  faCircleXmark,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledScreenDummy, StyledSkillButton } from "../shared/WindowFrame";

const KnowledgeBlock = () => {
  return (
    <section
      id="skills-block"
      className=" align-middle justify-center h-screen w-full">
      <StyledScreenDummy className="flex flex-auto flex-col md:w-3/5 w-4/5 min-h-4/5 mx-auto align-middle justify-start rounded-2xl overflow-hidden">
        <div className="flex justify-self-start justify-end align-baseline gap-4 p-3 border-b bg-neutral-700">
          <h4 className="mr-auto text-white">Things I am good at</h4>
          <FontAwesomeIcon color="white" icon={faWindowMinimize} />
          <FontAwesomeIcon color="white" icon={faWindowMaximize} />
          <FontAwesomeIcon color="white" icon={faCircleXmark} />
        </div>
        <div className="p-4">
          <p className="text-md text-center max-w-sm mx-auto">
            Professional skills I use in my day to day life as a react developer
          </p>
          <div className="flex gap-4 flex-wrap w-full align-middle justify-center p-4">
            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              Figma
            </StyledSkillButton>

            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              HTML/TSX/ JSX
            </StyledSkillButton>

            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              CSS/SCSS
            </StyledSkillButton>

            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              Typescript
            </StyledSkillButton>

            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              NextJs
            </StyledSkillButton>

            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              ReactJs
            </StyledSkillButton>

            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              Cypress
            </StyledSkillButton>

            <StyledSkillButton className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl">
              Vercel
            </StyledSkillButton>
          </div>
          <p className="text-xl text-center">Hobbies</p>
          <div className="flex gap-4 flex-wrap w-full align-middle justify-center p-4">
            <StyledSkillButton
              className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl"
              isDark>
              Digital Art
            </StyledSkillButton>

            <StyledSkillButton
              className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl"
              isDark>
              Art
            </StyledSkillButton>
            <StyledSkillButton
              className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl"
              isDark>
              Web design
            </StyledSkillButton>
            <StyledSkillButton
              className="md:text-3xl text-xl md:px-8 px-4 md:py-2 py-1 rounded-xl md:rounded-3xl"
              isDark>
              Photoshop
            </StyledSkillButton>
          </div>
        </div>
      </StyledScreenDummy>
    </section>
  );
};

export default KnowledgeBlock;
