import { CircleX } from "lucide-react";

import { useAppContext } from "@/context/appContext";

interface SkillButtonsProps {
  data: string[];
  isDark?: boolean;
}

const AboutModalContent = () => {
  const { setIsModalOpen } = useAppContext();

  const skillData = [
    "Figma",
    "HTML/TSX/JSX",
    "CSS/SCSS",
    "Typescript",
    "NextJs",
    "ReactJs",
    "Cypress",
    "Vercel",
    "Redux",
    "TailwindCSS",
    "Jest",
  ];

  const hobbyData = [
    "Digital Art",
    "Art",
    "Web design",
    "Photoshop",
    "Clip studio",
  ];

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
    <div className="relative h-full md:h-auto md:max-w-2xl flex flex-col mx-auto items-center md:justify-center shadow-xl overflow-hidden z-10">
      <div className="bg-arbxz-accent text-white flex items-center w-full gap-4 p-4 md:mb-2 md:rounded-xl">
        <h4 className="mr-auto text-xl">Random modal to show my expertise</h4>

        <button
          type="button"
          className="p-0"
          onClick={() => {
            setIsModalOpen(false);
          }}>
          <CircleX className="text-3xl" />
        </button>
      </div>

      <div className="block p-4 w-full h-full md:rounded-xl bg-background">
        <p className="text-xl text-center max-w-sm mx-auto mb-4">
          Professional skills I use in my day to day life as a react developer
        </p>
        <SkillButtons data={skillData} />
        <div className="w-full h-[1px] bg-foreground my-6 px-4"></div>
        <p className="text-xl text-center mb-4">Hobbies</p>
        <SkillButtons data={hobbyData} isDark />
      </div>
    </div>
  );
};

export default AboutModalContent;
