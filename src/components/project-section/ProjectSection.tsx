"use client";

import { useEffect, useState } from "react";

import Container from "@/components/shared/Container";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((projects) => {
      setProjectData(projects);
    });
  }, []);

  return (
    <Container>
      <div id="projects" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 items-start justify-center w-full">
          <div className="group flex flex-col justify-center items-center w-full h-56 text-center animated-background bg-gradient-to-b from-indigo-500 via-indigo-600 to-violet-500 duration-500 text-white rounded-3xl p-4 md:p-8">
            <div className="relative flex justify-center min-w-min mx-auto border border-white text-sm text-white rounded-3xl px-4 py-1 mb-4 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-arbxz-accent before:top-0 before:-left-60 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-white">
              <span className="relative z-10">View my projects</span>
            </div>
            <h2 className="font-semibold text-4xl md:text-4xl">projects.</h2>
          </div>
          {projectData.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectSection;
