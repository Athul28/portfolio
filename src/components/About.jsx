import React from "react";
import AboutPic from "../assets/about-pic.png";
import SkillItem from "./SkillsItem";

function About() {
  return (
    <div id="about">
      <div className="text-center mt-10">
        <p className="text-4xl text-slate-700">Get To Know More</p>
        <p className="text-5xl font-bold">About Me</p>
      </div>
      <div className="p-5">
        <img
          src={AboutPic}
          alt="AboutPic"
          className="m-auto w-[300px] rounded-2xl"
        />
      </div>
      <div className="sm:flex justify-center text-center">
        <SkillItem skill="Experience" level="2+ years Frontend Developer" />
        <SkillItem skill="Education" level="BTech in AIML" />
      </div>
      <p className="p-7 text-center text-slate-700">
        I am a student pursuing my Engineering at NMAMIT, and I am passionate
        about programming and learning new stuffs!
      </p>
    </div>
  );
}

export default About;
