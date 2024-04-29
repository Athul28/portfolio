import React from "react";
import SkillItem from "./SkillsItem";

function Experience({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`} id="experience">
      <div className="text-center p-3">
        <p className={`text-4xl ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>Explore my</p>
        <p className="text-5xl font-bold">Experience</p>
      </div>
      <div className="md:flex justify-center sm:p-20 max-sm:p-10 gap-5">
        <div className="experience-card">
          <p className={`text-4xl font-bold pb-5 ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>
            Web Development
          </p>
          <div className="lg:grid grid-cols-2">
            <SkillItem skill="React" level="Intermediate" />
            <SkillItem skill="TailwindCSS" level="Intermediate" />
            <SkillItem skill="JavaScript" level="Intermediate" />
            <SkillItem skill="Firebase" level="Basic" />
          </div>
        </div>
        <div className="experience-card  max-md:mt-10">
          <p className={`text-4xl font-bold pb-5 ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>
            Other Skills</p>
          <div className="lg:grid grid-cols-2">
            <SkillItem skill="C++" level="Intermediate" />
            <SkillItem skill="Java" level="Intermediate" />
            <SkillItem skill="Python" level="Intermediate" />
            <SkillItem skill="Git" level="Intermediate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
