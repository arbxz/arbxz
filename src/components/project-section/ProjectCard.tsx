import { useRef } from "react";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Button from "../ui-elements/Button";
import { InterfaceProjectItem } from "./ProjectSection";

const ProjectCard = ({ project }: { project: InterfaceProjectItem }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="relative overflow-hidden group flex w-full sm:flex-col flex-row rounded-3xl shadow hover:shadow-xl"
      key={project.name}>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          className="object-cover w-full h-full z-10"
          src={project.src}
          height={300}
          width={300}
          alt={project.name}
          placeholder="blur"
        />
      </div>
      <Link
        href={project.url}
        prefetch={false}
        target="_blank"
        className="flex flex-wrap items-center w-full h-56 opacity-0 hover:opacity-100 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 z-20 before:bg-background hover:before:opacity-95 transition-all duration-300 cursor-pointer">
        <div className="z-30 flex flex-col items-center gap-2 w-full p-4 text-foreground text-left">
          <span className="block text-lg font-semibold">{project.name}</span>
          <span className="text-center text-base overflow-hidden text-ellipsis mb-2">
            {project.description}
          </span>
          <Button icon={faGlobe} text="Website" intent="primary" />
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
