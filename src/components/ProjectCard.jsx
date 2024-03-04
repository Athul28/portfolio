import React from "react";


function ProjectCard(props) {
  return (
    <div className={`border-[3px] border-slate-700 p-5 rounded-xl mx-auto ${props.isDarkMode ? 'bg-slate-700' : ''}`} >
      <img
        src={props.imgLink}
        alt="ProjectImage"
        className="h-[300px] w-[300px] mx-auto rounded-xl"
      />
      <p className="text-center font-bold text-2xl p-3">{props.projectTitle}</p>
      <div className="grid grid-cols-2 my-3">
        <button className={`border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2 ${props.isDarkMode ? ' bg-slate-800 hover:bg-green-600 hover:border-green-600':''}`} onClick={()=>window.open(props.link1)}>
          Github
        </button>
        <button className={`border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2 ${props.isDarkMode ? ' bg-slate-800 hover:bg-green-600 hover:border-green-600':''}`} onClick={()=>window.open(props.link2)}>
          Live Demo
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
