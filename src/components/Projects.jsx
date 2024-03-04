import React from "react";
import ProjectCard from "./ProjectCard";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import Project4 from "../assets/project-4.jpg";

function Projects({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`} id="projects">
      <div className="text-center pt-10">
        <p className={`text-4xl ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>Browse My Recent</p>
        <p className="text-5xl font-bold">Projects</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-3 mt-5 px-5">
        <ProjectCard  imgLink={Project1} projectTitle="GPT Assistant" />
        <ProjectCard  imgLink={Project2} projectTitle="Cars Site" />
        <ProjectCard  imgLink={Project3} projectTitle="Car Rental System" />
        <ProjectCard  imgLink={Project4} projectTitle="Financial Chatbot" />
      </div>
    </div>
  );
}

export default Projects;
