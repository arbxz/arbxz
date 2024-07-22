import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Container from "../shared/Container";
import Button from "../ui-elements/Button";
import adminImg from "/public/admin.webp";
import nuzanimoImg from "/public/logo_nuzanimo.png";
import jeanPigeonImg from "/public/sample3.webp";
import zap from "/public/zap-webapp.png";

interface InterfaceProjectItem {
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
      src: adminImg,
      url: "https://arbxz.dev/en/admin",
      name: "Admin Dashboard",
      description: "An admin dashboard created using tailwind",
      tech: ["NextJS"],
    },
    {
      src: nuzanimoImg,
      url: "https://www.nuzanimo.org/",
      name: "nuzanimo.org",
      description: "NGO website created to help stray animals",
      tech: ["NextJs", "TailwindCSS", "Sanity"],
    },
    {
      src: jeanPigeonImg,
      url: "https://www.jeanpigeon.xyz/",
      name: "Jean-Pigeon",
      description: "A small website I co-authored with a friend.",
      tech: ["NextJS"],
    },
  ];

  const ProjectCard = ({ project }: { project: InterfaceProjectItem }) => {
    return (
      <div
        className="relative group bg-white flex w-full min-h-64 sm:flex-col flex-row rounded-3xl scale-[.95] shadow transition-all duration-300 hover:shadow-md hover:scale-100 overflow-hidden"
        key={project.name}>
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Image
            className="object-cover w-full h-full z-10"
            src={project.src}
            height={400}
            width={400}
            alt={project.name}
            placeholder="blur"
          />
        </div>
        <Link
          href={project.url}
          prefetch={false}
          target="_blank"
          className="flex flex-wrap items-center w-full h-64 opacity-0 hover:opacity-100 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-background hover:before:opacity-95 transition-all duration-300 z-20 cursor-pointer">
          <div className="flex flex-col items-center gap-2 w-full p-4 text-foreground text-left">
            <span className="block text-lg font-semibold">{project.name}</span>
            <span className="text-center text-base overflow-hidden text-ellipsis mb-2">
              {project.description}
            </span>
            <Button icon={faGlobe} text="Website" intent="secondary" />
          </div>
        </Link>
      </div>
    );
  };

  return (
    <Container>
      <div id="projects" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start justify-center w-full">
          <div className="group flex flex-col justify-center w-full h-64 text-center bg-arbxz-accent text-white rounded-3xl p-4 md:p-8">
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
