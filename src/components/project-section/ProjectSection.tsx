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
        <div className="grid w-full grid-cols-1 items-start justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          <div className="animated-background group flex h-56 w-full flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-purple-600 via-purple-500 to-arbxz-accent p-4 text-center text-white duration-500 md:p-8">
            <div className="relative mx-auto mb-4 flex min-w-min justify-center overflow-hidden rounded-3xl border border-white px-4 py-1 text-sm text-white before:absolute before:-left-60 before:top-0 before:-z-0 before:h-full before:w-full before:bg-white before:transition-all before:duration-700 before:content-[''] group-hover:text-arbxz-accent group-hover:before:left-0">
              <span className="relative z-10">View my projects</span>
            </div>
            <h2 className="text-4xl font-semibold md:text-4xl">projects.</h2>
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
