import React from "react";
import { IoMail } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";

function Contact() {
  return (
    <div className="text-center mt-10" id="contact">
      <p className="text-4xl text-slate-700">Get in touch</p>
      <p className="text-5xl font-bold">Contact me</p>
      <div className="flex justify-center p-2 mt-10 text-xl">
        <div className="m-auto bd sm:flex p-6 rounded-3xl">
          <div className="flex justify-center">
            <IoMail className="my-auto mx-2" />
            <p>athulbhandary28@gmail.com</p>
          </div>
          <div className="flex justify-center">
            <ImLinkedin className="my-auto mx-2" />
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
