import React from "react";
import profilePic from "../assets/profile-pic.png";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import Resume from "../assets/Resume.pdf";
import Typewriter from "typewriter-effect";


function Intro({ isDarkMode }) {
  const githubLink = "https://github.com/Athul28";
  const linkedinLink =
    "https://www.linkedin.com/in/athul-d-bhandary-0b1912247/";

  const handleWebsiteClick = () => {
    const url = Resume;
    const target = "_blank";
    const options = "noopener,noreferrer";

    window.open(url, target, options);
  };

  return (
    <div
      className={`lg:flex md:p-20 justify-center ${isDarkMode ? "dark" : ""}`}
    >
      <div className="p-5">
        <img
          src={profilePic}
          alt="profile-pic"
          className="h-[450px] max-sm:h-[300px] m-auto color-shadow-image rounded-full object-cover cursor-pointer"
        />
      </div>
      <div className="my-auto p-5 text-center">
        <p
          className={`font-bold text-4xl ${
            isDarkMode ? "dark-green" : "text-slate-700"
          }`}
        >
          Hello, I'm
        </p>
        <p className="font-bold text-6xl py-3 typing-text">Athul Bhandary</p>
        {/* <p className={`font-bold text-4xl ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>Fullstack Developer</p> */}
        <p
          className={`font-bold text-4xl ${
            isDarkMode ? "dark-green" : "text-slate-700"
          }`}
        >
          <Typewriter
            options={{
              strings: ["Full Stack Developer", "AI and ML Enthusiast"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <button
          className={`border border-black p-3 m-2 rounded-[30px] w-24 ${
            isDarkMode
              ? "border-white hover:bg-slate-600"
              : "border-black hover:bg-slate-300"
          }`}
          onClick={handleWebsiteClick}
        >
          Download Resume
        </button>
        <button
          className="bg-slate-700 text-white p-3 m-2 rounded-[30px] w-24 hover:bg-slate-600"
          onClick={() => {
            const contactElement = document.getElementById("contact");
            contactElement.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Info
        </button>
        <div className="flex justify-center">
          <ImLinkedin
            className="text-3xl rounded-full m-2 cursor-pointer hover:dark-green hover:scale-110 transition"
            onClick={() => window.open(linkedinLink)}
          />
          <FaGithub
            className="text-3xl rounded-full m-2 cursor-pointer hover:dark-green hover:scale-110 transition"
            onClick={() => window.open(githubLink)}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
