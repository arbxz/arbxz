import { faEye, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import sample from "/public/sample3.png";

interface InterfaceProjectItem {
  src: StaticImageData;
  url: string;
  name: string;
  description: string;
  tech: string;
}

const ProjectSection = () => {
  const projectList: InterfaceProjectItem[] = [
    {
      src: sample,
      url: "https://www.jeanpigeon.xyz/",
      name: "Jean-Pigeon",
      description: "A small website I co-authored with a friend.",
      tech: "NextJS",
    },
  ];

  const ProjectCard = ({ project }: { project: InterfaceProjectItem }) => {
    return (
      <div
        className="relative bg-white flex card w-full sm:w-64 min-h-64 sm:flex-col flex-row rounded-md shadow-md ease-in-out transition-all duration-300 hover:shadow-lg hover:-translate-y-3 overflow-hidden"
        key={project.name}>
        <div className="card-header">
          <Image
            className=" object-center object-cover"
            src={project.src}
            width={256}
            height={256}
            alt={project.name}
            placeholder="blur"
          />
        </div>
        <div className="card-body p-4 text-primary text-left">
          <span className="block text-xl font-semibold md:mb-2">
            {project.name}
          </span>
          <span className="block border-b text-md md:py-2 py-1 md:mb-2 mb-1">
            {project.description}
          </span>
          <span className="flex items-center gap-3 bg-primary text-white p-2 rounded">
            <FontAwesomeIcon icon={faWrench} />
            <span className="font-medium">{project.tech}</span>
          </span>
        </div>
        <Link
          href={project.url}
          target="_blank"
          className="cursor-pointer hover-sheet absolute w-full h-full bg-primary ease-in-out transition-opacity hover:opacity-70 opacity-0">
          <FontAwesomeIcon
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl"
            icon={faEye}
          />
        </Link>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="w-full mb-10 lg:max-w-5xl mx-auto md:py-8 p-4">
      <div className="text-center">
        <div className="inline-block mx-auto text-center md:mb-12 mb-8">
          <h2 className="font-system-ui font-semibold uppercase p-2 bg-primary text-white text-3xl md:text-5xl">
            Recent Projects
          </h2>
          <span className="block font-system-ui font-semibold p-2 bg-white text-primary text-lg md:text-xl">
            Check out what Ive been working on !
          </span>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6 items-start justify-center">
          {projectList.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
