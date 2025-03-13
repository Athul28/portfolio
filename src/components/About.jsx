import React from "react";
import AboutPic from "../assets/about-pic.png";
import { IoBook } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";

function About({ isDarkMode }) {
  return (
    <div id="about" className={`${isDarkMode ? "dark" : ""}`}>
      <div className="text-center pt-10">
        <p
          className={`text-4xl ${isDarkMode ? "dark-green" : "text-slate-700"}`}
        >
          Get To Know More
        </p>
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
        <div className="p-4 border-2 border-slate-500 m-5 rounded-xl sm:w-[400px] max-sm:w-[250px] max-sm:mx-auto">
          <PiMedalFill className="m-auto" size="30px" />
          <p className="text-xl font-bold">Experience</p>
          <p>Started my Frontend Developement Journey in 2024</p>
        </div>
        <div className="p-4 border-2 border-slate-500 m-5 rounded-xl sm:w-[400px] max-sm:w-[250px] max-sm:mx-auto">
          <IoBook className="m-auto" size="30px" />
          <p className="text-xl font-bold">Education</p>
          <p>BTech in Artificial Intelligence and Machine Learning</p>
        </div>
      </div>
      <p className={`p-7 text-center ${isDarkMode ? "" : "text-slate-700"}`}>
        I am a student pursuing my Engineering at NMAMIT, and I am passionate
        about programming and learning new stuffs!
      </p>
    </div>
  );
}

export default About;
