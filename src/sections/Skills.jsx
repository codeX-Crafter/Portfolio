import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "/skills/html.png" },
    { name: "CSS", icon: "/skills/css.png" },
    { name: "JavaScript", icon: "/skills/js.png" },
    { name: "C++", icon: "/skills/cpp.png" },
    { name: "React", icon: "/skills/react.png" },
    { name: "Tailwind CSS", icon: "/skills/tailwind.png" },
    { name: "Git", icon: "/skills/git.png" },
    { name: "GitHub", icon: "/skills/github.png" },
    { name: "VS Code", icon: "/skills/vscode.png" },
    { name: "Figma", icon: "/skills/figma.png" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full flex flex-col items-center space-y-12">
        {/* Heading */}
        <h2 className="font-anton text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest">
          TECHNICAL SKILLS
        </h2>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-[90%] md:w-[80%]">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 p-4 rounded-xl 
              border border-blue-500/40 dark:border-cyan-400/40
              hover:border-blue-500 dark:hover:border-cyan-400
              transition-all bg-white dark:bg-black shadow-sm 
              hover:shadow-[0_0_12px_rgba(0,255,255,0.3)]
              "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
