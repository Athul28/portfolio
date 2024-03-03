import React from "react";
import profilePic from "../assets/profile-pic.png";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import Resume from "../assets/Resume.pdf";

function Intro() {
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
    <div className="lg:flex md:p-20 justify-center">
      <div className="">
        <img
          src={profilePic}
          alt="profile-pic"
          className="h-[450px] max-sm:h-[350px] m-auto p-5 object-cover"
        />
      </div>
      <div className="my-auto p-5 text-center">
        <p className="font-bold text-4xl text-slate-700">Hello, I'm</p>
        <p className="font-bold text-6xl my-3">Athul Bhandary</p>
        <p className="font-bold text-4xl text-slate-700">Frontend Developer</p>
        <button
          className="border border-black p-3 m-2 rounded-[30px] w-24"
          onClick={handleWebsiteClick}
        >
          Download Resume
        </button>
        <button
          className="bg-slate-700 text-white p-3 m-2 rounded-[30px] w-24"
          onClick={() => {
            const contactElement = document.getElementById("contact");
            contactElement.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Info
        </button>
        <div className="flex justify-center">
          <ImLinkedin
            className="text-3xl rounded-full m-2 cursor-pointer"
            onClick={() => window.open(linkedinLink)}
          />
          <FaGithub
            className="text-3xl rounded-full m-2 cursor-pointer"
            onClick={() => window.open(githubLink)}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
