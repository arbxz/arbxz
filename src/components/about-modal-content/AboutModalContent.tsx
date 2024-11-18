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
      <div className="flex w-full flex-wrap items-center justify-center gap-4 p-2">
        {data.map((skill, index) => (
          <button
            type="button"
            key={index}
            className="rounded-xl bg-foreground px-4 py-1 text-xl text-background md:rounded-3xl md:px-8 md:py-2"
          >
            {skill}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="relative z-10 mx-auto flex h-full flex-col items-center overflow-hidden shadow-xl md:h-auto md:max-w-2xl md:justify-center">
      <div className="flex w-full items-center gap-4 bg-arbxz-accent p-4 text-white md:mb-2 md:rounded-xl">
        <h4 className="mr-auto text-xl">Random modal to show my expertise</h4>

        <button
          type="button"
          className="p-0"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <CircleX className="text-3xl" />
        </button>
      </div>

      <div className="block h-full w-full bg-background p-4 md:rounded-xl">
        <p className="mx-auto mb-4 max-w-sm text-center text-xl">
          Professional skills I use in my day to day life as a react developer
        </p>
        <SkillButtons data={skillData} />
        <div className="my-6 h-[1px] w-full bg-foreground px-4"></div>
        <p className="mb-4 text-center text-xl">Hobbies</p>
        <SkillButtons data={hobbyData} isDark />
      </div>
    </div>
  );
};

export default AboutModalContent;
