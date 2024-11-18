import React from "react";
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
      className="group relative flex w-full flex-row overflow-hidden rounded-3xl shadow hover:shadow-xl sm:flex-col"
    >
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-arbxz-accent">
        <Image
          className="z-10 h-full w-full object-cover mix-blend-screen contrast-150 grayscale"
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
        className="z-20 flex h-56 w-full cursor-pointer flex-wrap items-center opacity-0 transition-all duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-background before:content-[''] hover:opacity-100 hover:before:opacity-100"
      >
        <div className="z-30 flex w-full flex-col items-center gap-2 p-4 text-left">
          <span className="block text-lg font-semibold">{project.name}</span>
          <small className="mb-2 overflow-hidden text-ellipsis text-center text-sm leading-4">
            {project.description}
          </small>
          <div className="flex items-center gap-2 rounded-full border-[1px] border-white px-4 py-1">
            <Globe size={14} />
            <small>Website.</small>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-0 right-0 z-20 rounded-full p-4">
        <span
          className={`${
            project.framework === "NuxtJs" &&
            "bg-lime-400 font-semibold text-stone-900"
          } ml-2 rounded-full bg-background px-2 py-1 text-xs text-foreground shadow-inner`}
        >
          {project.framework}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
