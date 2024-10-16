export default function MyTechStacks({ isDarkMode }) {
  const techStacks = [
    "React",
    "Tailwindcss",
    "Firebase",
    "Next.js",
    "Svelte",
    "SvelteKit",
    "Express",
    "Flask",
    "Git",
    "GitHub",
    "Prisma",
    "tRPC",
    "zod",
    "Firebase",
    "Supabase",
    "CockroachDB",
    "PostgreSQL",
    "Supabase",
    "SQL",
    "Java",
    "C/C++",
    "Python",
  ];
  return (
    <div className={` ${isDarkMode ? "dark" : ""}`}>
      <div className="text-center pt-10">
        <p
          className={`text-4xl ${isDarkMode ? "dark-green" : "text-slate-700"}`}
        >
          Checkout My
        </p>
        <p className="text-5xl font-bold">Tech Stacks</p>
        {/* 
•	Web Development: React, tailwindcss, firebase, Next.js, Svelte, SvelteKit
•	Programming Languages: Java, C/C++, Python
•	Database Management: CockroachDB, PostgreSQL, Supabase, SQL
•	Tools: Git, GitHub, Prisma, tRPC, zod
•	Cloud Platforms: Firebase, Supabase

         */}
        <div className="flex flex-wrap justify-center mt-8 max-w-[500px] m-auto rounded-full">
          {techStacks.map((tech, index) => {
            return (
              <div
                key={index}
                className="border-2 border-green-600 hover:scale-125 cursor-pointer transition w-fit px-4 py-3 m-3 rounded-xl shadow-sm hover:shadow-green-600"
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
