import React from "react";
import { IoMail } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";

function Contact({ isDarkMode }) {

  const linkedinLink="https://www.linkedin.com/in/athul-d-bhandary-0b1912247/";

  return (
    <div className={`text-center pt-10 ${isDarkMode ? 'dark' : ''}`} id="contact">
      <p className={`text-4xl ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>Get in touch</p>
      <p className="text-5xl font-bold">Contact me</p>
      <div className="flex justify-center p-2 mt-10 text-xl pb-10">
        <div className={`m-auto sm:flex p-6 rounded-3xl ${isDarkMode ? 'border ':'bd'} `}>
          <div className="flex justify-center hover:text-green-400">
            <IoMail className="my-auto mx-2" />
            <a href="mailto:athulbhandary28@gmail.com" className="cursor-pointer">athulbhandary28@gmail.com</a>
          </div>
          <div className="flex justify-center hover:text-green-400">
            <ImLinkedin className="my-auto mx-2" />
            <a href={linkedinLink} className="cursor-pointer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
