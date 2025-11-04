import React from "react";

export default function Education() {
  const educationData = [
    {
      img: "/school.png",
      title: "Sachdeva Public School",
      lines: ["Class 10th Boards - 96.2%", "Class 12th Boards - 95%"],
    },
    {
      img: "/college.png",
      title: "Indira Gandhi Delhi Technical University (IGDTUW)",
      lines: ["Computer Science Engineering", "JEE Mains - 96.6%ile"],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full flex flex-col items-center space-y-10">
        <h2 className="font-anton text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest">
          EDUCATION
        </h2>

        <div className="grid md:grid-cols-2 gap-6 w-[90%] md:w-[80%]">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-900 shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={edu.img}
                alt={edu.title}
                className="w-full h-80 object-cover" // bigger & no rounding
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white">
                  {edu.title}
                </h3>
                {edu.lines.map((line, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base text-gray-600 dark:text-gray-400"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
