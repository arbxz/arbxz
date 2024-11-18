import { useRef } from "react";

import { useInView } from "framer-motion";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types/project";

interface InterfaceProjectItem extends Project {}

const ProjectCard = ({ project }: { project: InterfaceProjectItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="relative overflow-hidden group flex w-full sm:flex-col flex-row rounded-3xl shadow hover:shadow-xl">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-arbxz-accent">
        <Image
          className="object-cover w-full h-full z-10 mix-blend-screen grayscale contrast-150"
          src={urlFor(project.image).url()}
          height={300}
          width={300}
          alt={project.name}
        />
      </div>
      <Link
        href={project.link}
        prefetch={false}
        target="_blank"
        className="flex flex-wrap items-center w-full h-56 opacity-0 hover:opacity-100 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 z-20 before:bg-background hover:before:opacity-100 transition-all duration-300 cursor-pointer">
        <div className="z-30 flex flex-col items-center gap-2 w-full p-4 text-left">
          <span className="block text-lg font-semibold">{project.name}</span>
          <small className="text-center text-sm overflow-hidden text-ellipsis mb-2 leading-4">
            {project.description}
          </small>
          <div className="flex gap-2 items-center px-4 py-1 border-[1px] border-white rounded-full">
            <Globe size={14} />
            <small>Website.</small>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-0 right-0 z-20 p-4 rounded-full">
        <span
          className={`${
            project.framework === "NuxtJs" &&
            "bg-lime-400 text-stone-900 font-semibold"
          } text-xs bg-background text-foreground px-2 py-1 rounded-full ml-2 shadow-inner`}>
          {project.framework}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
