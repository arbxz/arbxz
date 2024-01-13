import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Container from "../shared/Container";
import adminImg from "/public/admin.jpeg";
import cocagneImg from "/public/cocagne.jpeg";
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
      x: -1300,
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
        className="relative bg-background flex w-full sm:w-64 min-h-64 sm:flex-col flex-row rounded-2xl scale-[.99] shadow transition-all duration-300 hover:shadow-md hover:scale-100 overflow-hidden"
        key={project.name}>
        <Link href={project.url} target="_blank" className="cursor-pointer">
          <div className="w-2/5 h-auto sm:w-64 sm:h-44">
            <Image
              className="object-contain object-top w-full h-full"
              src={project.src}
              height={256}
              width={256}
              alt={project.name}
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-center gap-4 w-3/5 sm:w-full p-4 text-foreground text-left">
            <span className="block text-xl font-semibold">{project.name}</span>
            <span className="text-center overflow-hidden text-ellipsis">
              {project.description}
            </span>
            <span className="flex items-center justify-center gap-3 border border-accent text-sm text-accent rounded-3xl px-4 py-1">
              <FontAwesomeIcon icon={faWrench} /> |
              <span className="font-medium">{project.tech}</span>
            </span>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <Container>
      <div id="projects" className="w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-center mb-8 lg:mb-16">
          <span className="relative border border-accent text-sm text-accent rounded-3xl px-4 py-1 before:content-[''] before:h-full before:w-full before:absolute hover:text-white before:top-0 before:-left-40 hover:before:left-0 before:-z-0 overflow-hidden before:duration-400 before:transition-all  before:bg-accent">
            <span className="relative z-10">View my best work</span>
          </span>
          <h2 className="font-semibold text-4xl md:text-6xl">projects.</h2>
        </div>

        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}>
          <motion.div
            className="flex flex-wrap gap-4 md:gap-6 items-start justify-start"
            variants={cardVariants}>
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
