import SkillItem from "./SkillsItem";

function Experience({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`} id="experience">
      <div className="text-center p-3">
        <p className={`text-4xl ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>Explore my</p>
        <p className="text-5xl font-bold">Experience</p>
      </div>
      
      <div className="md:flex justify-center sm:p-20 max-sm:p-10 gap-5 flex-wrap ">
        {/* Web Development */}
        <div className="experience-card">
          <p className={`text-4xl font-bold pb-5 ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>
            Web Development
          </p>
          <div className="lg:grid grid-cols-2">
            <SkillItem skill="Next.js" level="Proficient" />
            <SkillItem skill="React.js" level="Proficient" />
            <SkillItem skill="TypeScript" level="Experienced" />
            <SkillItem skill="TailwindCSS" level="Proficient" />
          </div>
        </div>

        {/* Backend & Databases */}
        <div className="experience-card max-md:mt-10">
          <p className={`text-4xl font-bold pb-5 ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>
            Backend & Databases
          </p>
          <div className="lg:grid grid-cols-2">
            <SkillItem skill="Node.js" level="Experienced" />
            <SkillItem skill="Express.js" level="Experienced" />
            <SkillItem skill="PostgreSQL" level="Experienced" />
            <SkillItem skill="Prisma ORM" level="Intermediate" />
          </div>
        </div>

        {/* DevOps & Cloud */}
        <div className="experience-card max-md:mt-10">
          <p className={`text-4xl font-bold pb-5 ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>
            DevOps & Cloud
          </p>
          <div className="lg:grid grid-cols-2">
            <SkillItem skill="Git" level="Experienced" />
            <SkillItem skill="Docker" level="Intermediate" />
            <SkillItem skill="Firebase" level="Intermediate" />
            <SkillItem skill="AWS" level="Familiar" />
          </div>
        </div>

        {/* Programming Languages */}
        <div className="experience-card max-md:mt-10">
          <p className={`text-4xl font-bold pb-5 ${isDarkMode ? 'dark-green' : 'text-slate-700'}`}>
            Programming Languages
          </p>
          <div className="lg:grid grid-cols-2">
            <SkillItem skill="C++" level="Experienced" />
            <SkillItem skill="Java" level="Experienced" />
            <SkillItem skill="Python" level="Experienced" />
            <SkillItem skill="JavaScript" level="Proficient" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
