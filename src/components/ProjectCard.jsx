import React from "react";
import { useState } from "react";

function ProjectCard(props) {
  const [imgLoading, setImgLoading] = useState(true);

  const handleImageLoad = () => {
    setImgLoading(false);
  };

  return (
    <div
      className={` p-5 rounded-xl mx-auto hover:scale-105 transition ${
        props.isDarkMode
          ? "bg-slate-700 border-slate-700 border-[3px]"
          : " bg-slate-300"
      }`}
    >
      {imgLoading && (
        <div className="h-[300px] w-[300px] mx-auto rounded-xl">
          <div className="flex items-center justify-center h-[300px] w-[300px] mx-auto">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-600"></div>
          </div>
        </div>
      )}
      <img
        src={props.imgLink}
        alt="ProjectImage"
        className={`h-[300px] w-[300px] mx-auto rounded-xl object-cover ${imgLoading ? "hidden" : ""}`}
        onLoad={handleImageLoad}
      />

      <p className="text-center font-bold text-2xl p-3">{props.projectTitle}</p>
      <div className="grid grid-cols-2 my-3">
        <button
          className={`border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2 hover:bg-green-600 hover:border-green-600 ${
            props.isDarkMode ? " bg-slate-800 " : ""
          }`}
          onClick={() => window.open(props.link1)}
        >
          Github
        </button>
        <button
          className={`border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2 hover:bg-green-600 hover:border-green-600 ${
            props.isDarkMode ? " bg-slate-800" : ""
          }`}
          onClick={() => window.open(props.link2)}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
