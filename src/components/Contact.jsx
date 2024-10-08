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
        <div className={`m-auto sm:flex p-6 gap-5 rounded-3xl ${isDarkMode ? 'border ':'bd'} `}>
          <div className={`flex justify-center hover:scale-110 transition ${isDarkMode ? 'hover:text-green-600':'hover:text-slate-700'}`}>
            <IoMail className="my-auto mx-2" />
            <a href="mailto:athulbhandary28@gmail.com" className="cursor-pointer hover:underline">athulbhandary28@gmail.com</a>
          </div>
          <div className={`flex justify-center hover:scale-110 transition ${isDarkMode ? 'hover:text-green-600':'hover:text-slate-700'}`}>
            <ImLinkedin className="my-auto mx-2" />
            <a href={linkedinLink} className="cursor-pointer hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
