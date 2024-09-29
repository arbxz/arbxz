import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

import Container from "../shared/Container";
import ProjectCard from "./ProjectCard";
import adminImg from "/public/admin.webp";
import exxonMotors from "/public/exxonmotors_logo.jpg";
import nuzanimoImg from "/public/logo_nuzanimo.png";
import soundBoard from "/public/logo-soundboard.png";
import jeanPigeonImg from "/public/sample3.webp";
import zap from "/public/zap-webapp.png";

export interface InterfaceProjectItem {
  src: StaticImageData;
  url: string;
  name: string;
  description: string;
  tech: string[];
}

const ProjectSection = () => {
  const t = useTranslations("Project");

  const projectList: InterfaceProjectItem[] = [
    {
      src: zap,
      url: "https://zap-webapp.vercel.app",
      name: "Zap",
      description:
        "A power outage monitoring website, inspired from Sandeep Ramgoolam talk from Devcon 2024.",
      tech: ["NextJS"],
    },
    {
      src: soundBoard,
      url: "https://nuxt-soundboard.vercel.app",
      name: "Nuxt Soundboard",
      description: "A fun side project using Nuxt for personal use :D",
      tech: ["Nuxt"],
    },
    {
      src: adminImg,
      url: "https://arbxz.dev/en/admin",
      name: "Admin Dashboard",
      description: "An admin dashboard created using tailwind",
      tech: ["NextJS"],
    },
    {
      src: jeanPigeonImg,
      url: "https://www.jeanpigeon.xyz/",
      name: "Jean-Pigeon",
      description: "A small website I co-authored with a friend.",
      tech: ["NextJS"],
    },
    {
      src: exxonMotors,
      url: "https://exxon-motors.vercel.app",
      name: "Exxon Motors",
      description:
        "Product showcase website for Exxon Motors, developed using NextJS and TailwindCSS",
      tech: ["NextJs", "Sanity"],
    },
    {
      src: nuzanimoImg,
      url: "https://www.nuzanimo.org/",
      name: "nuzanimo.org",
      description: "NGO website created to help stray animals",
      tech: ["NextJs", "Sanity"],
    },
  ];

  return (
    <Container>
      <div id="projects" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start justify-center w-full">
          <div className="group flex flex-col justify-center w-full h-56 text-center bg-arbxz-accent text-white rounded-3xl p-4 md:p-8">
            <div className="relative flex justify-center w-40 mx-auto border border-white text-sm text-white rounded-3xl px-4 py-1 mb-4 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-arbxz-accent before:top-0 before:-left-60 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-white">
              <span className="relative inline-block z-10">{t("text")}</span>
            </div>
            <h2 className="font-semibold text-4xl md:text-4xl">{t("title")}</h2>
          </div>
          {projectList.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectSection;
