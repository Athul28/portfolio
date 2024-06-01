"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

function ProjectCard(props) {

  const Link="https://google.com"

  return (
    // <div className={` p-5 rounded-xl mx-auto hover:scale-105 transition ${props.isDarkMode ? 'bg-slate-700 border-slate-700 border-[3px]' : ' bg-slate-300'}`} >
    //   <img
    //     src={props.imgLink}
    //     alt="ProjectImage"
    //     className="h-[300px] w-[300px] mx-auto rounded-xl"
    //   />
    //   <p className="text-center font-bold text-2xl p-3">{props.projectTitle}</p>
    //   <div className="grid grid-cols-2 my-3">
    //     <button className={`border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2 hover:bg-green-600 hover:border-green-600 ${props.isDarkMode ? ' bg-slate-800 ':''}`} onClick={()=>window.open(props.link1)}>
    //       Github
    //     </button>
    //     <button className={`border-2 border-slate-700 p-3 rounded-3xl font-bold mx-2 hover:bg-green-600 hover:border-green-600 ${props.isDarkMode ? ' bg-slate-800':''}`} onClick={()=>window.open(props.link2)}>
    //       Live Demo
    //     </button>
    //   </div>
    // </div>
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.projectTitle}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={props.imgLink}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            // as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            GitHub →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Visit
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ProjectCard;
