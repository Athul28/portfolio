import React from "react";
import Hamburger from "hamburger-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Navbar() {
  const [isOpen, setOpen] = React.useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  };
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const openElement = (elementId) => {
    const Element = document.getElementById(elementId);
    Element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`p-5 md:flex justify-between ${isDarkMode ? 'dark' : ''}`}>
      <h1 className="my-auto text-3xl">Athul Bhandary</h1>
      <ul
        className={`md:flex md:mr-16 my-auto text-xl ${
          isOpen ? "" : "hidden mr-8"
        }`}
      >
        <li className="nav-item">
          <a className="cursor-pointer" onClick={() => openElement("about")}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="cursor-pointer" onClick={() => openElement("experience")}
          >
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="cursor-pointer" onClick={() => openElement("projects")}>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="cursor-pointer" onClick={() => openElement("contact")}>
            Contact
          </a>
        </li>
      </ul>
      <DarkModeSwitch
        className="m-4 absolute right-2 max-md:right-16 top-3 max-md:top-2 "
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div className="absolute right-5 top-3 md:hidden">
        <Hamburger onToggle={openMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
