import React from "react";
import ProjectCard from "../components/ProjectCard"
import { myProjects } from "../lib/data";

function Projects({ isDarkMode }) {

  return (
    <div className={`${isDarkMode ? "dark" : ""}`} id="projects">
      <div className="text-center pt-10">
        <p
          className={`text-4xl ${isDarkMode ? "dark-green" : "text-slate-700"}`}
        >
          Browse My Recent
        </p>
        <p className="text-5xl font-bold">Projects</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-3 mt-5 px-5 lg:px-20">
        {myProjects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              imgLink={project.imgLink}
              projectTitle={project.title}
              link1={project.githubLink}
              link2={project.demoLink}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
