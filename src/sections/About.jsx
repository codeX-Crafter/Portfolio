import React from "react";
import { Linkedin, Mail, Github, Code2, Terminal } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/about.png"
            alt="About"
            className="w-[60%] max-w-md aspect-[3/4] object-cover rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-4 flex flex-col gap-4">
          <h2 className="font-anton text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest">
            ABOUT ME
          </h2>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-3">
            <a
              href="https://www.linkedin.com/in/harshita-bansal-65ba40327/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-cyan-400 hover:text-white transition"
            >
              <Linkedin
                size={22}
                className="text-blue-600 dark:text-cyan-400"
              />
            </a>

            <a
              href="mailto:harshitabansal3737@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-red-500 hover:text-white transition"
            >
              <Mail size={22} className="text-red-600" />
            </a>

            <a
              href="https://github.com/codeX-Crafter"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-black dark:hover:bg-gray-900 hover:text-white transition"
            >
              <Github size={22} className="text-black dark:text-white" />
            </a>

            {/* Codeforces */}
            <a
              href="https://codeforces.com/profile/harshitabansal"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 transition"
            >
              <img
                src="/cf.png"
                alt="Codeforces"
                className="w-6 h-6 rounded-full"
              />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/codeXcrafter/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-yellow-400 transition"
            >
              <img
                src="/lc.png"
                alt="LeetCode"
                className="w-6 h-6 rounded-full"
              />
            </a>
          </div>

          <p className="text-gray-800 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
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
