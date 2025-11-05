import React from "react";
import { Linkedin, Mail, Github } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 md:px-16 lg:px-28 transition-colors duration-300 py-16 md:py-0"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center mb-8 md:mb-0">
          <img
            src="/about.png"
            alt="About"
            className="w-[80%] xs:w-[70%] sm:w-[60%] md:w-[85%] lg:w-[70%] max-w-sm aspect-[3/4] object-cover  shadow-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-4 flex flex-col gap-6 text-center md:text-left">
          <h2 className="font-anton text-4xl sm:text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest">
            ABOUT ME
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-3">
            <a
              href="https://www.linkedin.com/in/harshita-bansal-65ba40327/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white transition"
            >
              <Linkedin
                size={20}
                className="text-blue-600 dark:text-cyan-400"
              />
            </a>

            <a
              href="mailto:harshitabansal3737@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-red-500 hover:text-white transition"
            >
              <Mail size={20} className="text-red-600" />
            </a>

            <a
              href="https://github.com/codeX-Crafter"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-black dark:hover:bg-gray-900 hover:text-white transition"
            >
              <Github size={20} className="text-black dark:text-white" />
            </a>

            <a
              href="https://codeforces.com/profile/harshitabansal"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 transition"
            >
              <img
                src="/cf.png"
                alt="Codeforces"
                className="w-5 h-5 rounded-full"
              />
            </a>

            <a
              href="https://leetcode.com/u/codeXcrafter/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-yellow-400 transition"
            >
              <img
                src="/lc.png"
                alt="LeetCode"
                className="w-5 h-5 rounded-full"
              />
            </a>
          </div>

          <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I specialize in building the full spectrum of digital experiences,
            from the structural logic of competitive programming to the
            aesthetic finesse of frontend development and UI/UX design. For me,
            it's all about finding the perfect balance where beautiful,
            intuitive interfaces are powered by clean, thoughtful code. I'm
            constantly learning and exploring new technologies to create
            solutions that are not only functional but also meaningful and
            engaging.
          </p>
        </div>
      </div>
    </section>
  );
}
