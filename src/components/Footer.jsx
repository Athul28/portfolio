import PropTypes from 'prop-types';

function Footer({ isDarkMode }) {
  const openElement = (elementId) => {
    const Element = document.getElementById(elementId);
    Element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <ul className="sm:flex justify-center text-center">
        <li className="p-1 text-lg">
          <a className="cursor-pointer hover:dark-green" onClick={() => openElement("about")}>
            About
          </a>
        </li>
        <li className="p-1 text-lg">
          <a
            className="cursor-pointer hover:dark-green"
            onClick={() => openElement("experience")}
          >
            Experience
          </a>
        </li>
        <li className="p-1 text-lg">
          <a className="cursor-pointer hover:dark-green" onClick={() => openElement("projects")}>
            Projects
          </a>
        </li>
        <li className="p-1 text-lg">
          <a className="cursor-pointer hover:dark-green" onClick={() => openElement("contact")}>
            Contact
          </a>
        </li>
      </ul>
      <p className={`text-center py-2 p-2 ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>
        Copyright © 2025 Athul Bhandary. All Rights Reserved.
      </p>
    </div>
  );
}

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
