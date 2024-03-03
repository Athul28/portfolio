import React from "react";
import SkillItem from "./SkillsItem";

function Experience() {
  return (
    <div id="experience">
      <div className="text-center p-3">
        <p className="text-4xl font-bold text-slate-700">Explore my</p>
        <p className="text-5xl font-bold">Experience</p>
      </div>
      <div className="md:flex justify-center">
        <div className="experience-card">
          <p className="text-4xl font-bold text-slate-700 my-3">
            Frontend Development
          </p>
          <div className="lg:grid grid-cols-2">
            <SkillItem skill="HTML" level="Experienced" />
            <SkillItem skill="CSS" level="Experienced" />
            <SkillItem skill="JavaScript" level="Basic" />
            <SkillItem skill="Material UI" level="Intermediate" />
          </div>
        </div>
        <div className="experience-card">
          <p className="text-4xl font-bold text-slate-700 my-3">Other Skills</p>
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
