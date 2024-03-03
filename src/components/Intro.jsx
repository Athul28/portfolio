import React from "react";
import profilePic from "../assets/profile-pic.png";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";

function Intro(){

    return(
        <div className="lg:flex md:p-20 justify-center ">
            <div className="">
                <img src={profilePic} alt="profile-pic" className="h-[450px] max-sm:h-[350px] m-auto p-5 object-cover" />
            </div>
            <div className="my-auto p-5 text-center">
                <p className="font-bold text-4xl text-slate-700">Hello, I'm</p>
                <p className="font-bold text-6xl my-3">Athul Bhandary</p>
                <p className="font-bold text-4xl text-slate-700">Frontend Developer</p>
                <button className="border border-black p-3 m-2 rounded-[30px] w-24">Download Resume</button>
                <button className="bg-slate-700 text-white p-3 m-2 rounded-[30px] w-24">Contact Info</button>
                <div className="flex justify-center">
                    <ImLinkedin className="text-3xl rounded-full m-2"/>
                    <FaGithub className="text-3xl rounded-full m-2"/>
                </div>
            </div>
        </div>
    )
}

export default Intro