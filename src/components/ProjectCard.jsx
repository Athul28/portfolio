import React from "react";

function ProjectCard(props) {
  return (
    <div className="border border-slate-700 p-5 rounded-xl m-auto">
      <img
        src={props.imgLink}
        alt="ProjectImage"
        className="h-[300px] w-[300px] mx-auto"
      />
      <p className="text-center font-bold text-2xl p-3">{props.projectTitle}</p>
      <div className="flex justify-center my-3">
        <button className="border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2">
          Github
        </button>
        <button className="border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2">
          Live Demo
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
