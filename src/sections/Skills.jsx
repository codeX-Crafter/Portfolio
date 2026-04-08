import React from "react";

export default function Skills() {
  const languages = ["C++", "C", "JavaScript"];

  const webDevelopment = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  const mobileDevelopment = ["Kotlin", "Jetpack Compose", "Android Studio"];

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

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Languages */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              Languages
            </h3>
            <div className="flex flex-col gap-4">
              {languages.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-4 py-2 rounded-xl h-16 w-56
                  border border-blue-500/40 dark:border-cyan-400/40
                  hover:border-blue-500 dark:hover:border-cyan-400
                  transition-all bg-white dark:bg-black shadow-sm 
                  hover:shadow-[0_0_12px_rgba(0,255,255,0.3)]
                  "
                >
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              Web Development
            </h3>
            <div className="flex flex-col gap-4">
              {webDevelopment.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-4 py-2 rounded-xl h-16 w-56
                  border border-blue-500/40 dark:border-cyan-400/40
                  hover:border-blue-500 dark:hover:border-cyan-400
                  transition-all bg-white dark:bg-black shadow-sm 
                  hover:shadow-[0_0_12px_rgba(0,255,255,0.3)]
                  "
                >
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Development */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              Mobile Development
            </h3>
            <div className="flex flex-col gap-4">
              {mobileDevelopment.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-4 py-2 rounded-xl h-16 w-56
                  border border-blue-500/40 dark:border-cyan-400/40
                  hover:border-blue-500 dark:hover:border-cyan-400
                  transition-all bg-white dark:bg-black shadow-sm 
                  hover:shadow-[0_0_12px_rgba(0,255,255,0.3)]
                  "
                >
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 text-center">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
