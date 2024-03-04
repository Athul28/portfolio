import React from "react";
import ProjectCard from "./ProjectCard";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import Project4 from "../assets/project-4.jpg";

function Projects({ isDarkMode }) {

  const p1GithubLink="https://github.com/Athul28/GPT_Assistant";
  const p1DemoLink="https://github.com/Athul28/GPT_Assistant";

  const p2GithubLink="https://github.com/Athul28/luxuriouscars";
  const p2DemoLink="https://athul28.github.io/cars/";

  const p3GithubLink="https://github.com/Athul28/Car-Rental-System";
  const p3DemoLink="https://github.com/Athul28/Car-Rental-System";

  const p4GithubLink="https://github.com/Athul28/FinAi";
  const p4DemoLink="https://fin-ai-tan.vercel.app/";

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`} id="projects">
      <div className="text-center pt-10">
        <p className={`text-4xl ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>Browse My Recent</p>
        <p className="text-5xl font-bold">Projects</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-3 mt-5 px-5">
        <ProjectCard  imgLink={Project1} projectTitle="GPT Assistant" link1={p1GithubLink} link2={p1DemoLink}/>
        <ProjectCard  imgLink={Project2} projectTitle="Cars Site" link1={p2GithubLink} link2={p2DemoLink}/>
        <ProjectCard  imgLink={Project3} projectTitle="Car Rental System" link1={p3GithubLink} link2={p3DemoLink}/>
        <ProjectCard  imgLink={Project4} projectTitle="Financial Chatbot" link1={p4GithubLink} link2={p4DemoLink}/>
      </div>
    </div>
  );
}

export default Projects;
