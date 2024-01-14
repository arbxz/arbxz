import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Container from "../shared/Container";
import Button from "../ui-elements/Button";
import adminImg from "/public/admin.png";
import cocagneImg from "/public/cocagne.png";
import jeanPigeonImg from "/public/sample3.png";

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
      src: jeanPigeonImg,
      url: "https://www.jeanpigeon.xyz/",
      name: "Jean-Pigeon",
      description: "A small website I co-authored with a friend.",
      tech: "NextJS",
    },
    {
      src: adminImg,
      url: "https://www.arbxz.com/design-system",
      name: "Admin Dashboard",
      description: "An admin dashboard created using tailwind",
      tech: "NextJS",
    },
    {
      src: cocagneImg,
      url: "https://www.cocagne.fr/",
      name: "Cocagne.fr",
      description: "Developped the UI using Tailwind + Next",
      tech: "NextJS",
    },
  ];

  const cardVariants: Variants = {
    offscreen: {
      x: -5000,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  const ProjectCard = ({ project }: { project: InterfaceProjectItem }) => {
    return (
      <div
        className="relative group bg-background flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-64 sm:flex-col flex-row rounded-3xl scale-[.99] shadow transition-all duration-300 hover:shadow-md hover:scale-100 overflow-hidden"
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
          target="_blank"
          className="flex flex-wrap items-center w-full h-64 opacity-0 hover:opacity-100 border-2 border-transparent hover:glass transition-all duration-300 z-20 cursor-pointer">
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
      <div id="projects">
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}>
          <motion.div
            className="flex flex-wrap lg:flex-nowrap gap-4 md:gap-6 items-start justify-center"
            variants={cardVariants}>
            <div className="group flex flex-col justify-center w-full h-64 sm:w-1/2 md:w-1/3 lg:w-1/4 text-center bg-accent text-white rounded-3xl p-4 md:p-8">
              <div className="relative flex justify-center w-40 mx-auto border border-white text-sm text-white rounded-3xl px-4 py-1 mb-4 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-accent before:top-0 before:-left-60 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-white">
                <span className="relative inline-block z-10">
                  View my best work
                </span>
              </div>
              <h2 className="font-semibold text-4xl md:text-6xl">projects.</h2>
            </div>
            {projectList.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default ProjectSection;
