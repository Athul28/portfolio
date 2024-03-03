import React from "react";
import Navbar from "./Navbar";

function Footer() {
  const openElement = (elementId) => {
    const Element = document.getElementById(elementId);
    Element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={``}>
      <ul className="sm:flex justify-center text-center">
        <li className="p-1 text-lg">
          <a className="cursor-pointer" onClick={() => openElement("about")}>
            About
          </a>
        </li>
        <li className="p-1 text-lg">
          <a
            className="cursor-pointer"
            onClick={() => openElement("experience")}
          >
            Experience
          </a>
        </li>
        <li className="p-1 text-lg">
          <a className="cursor-pointer" onClick={() => openElement("projects")}>
            Projects
          </a>
        </li>
        <li className="p-1 text-lg">
          <a className="cursor-pointer" onClick={() => openElement("contact")}>
            Contact
          </a>
        </li>
      </ul>
      <p className="text-center my-2 p-2 text-slate-700">
        Copyright © 2023 Athul Bhandary. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
