import React from "react";

export default function Landing() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full flex gap-11 items-center justify-center ">
        {/* LEFT TEXT */}
        <div className="space-y-3">
          <p className="text-3xl font-medium text-gray-700 dark:text-gray-300">
            Hello! I am
          </p>

          <h1 className="font-anton text-6xl md:text-8xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest">
            HARSHITA
          </h1>

          <div className="space-y-1 text-lg md:text-2xl">
            <p className="text-gray-800 dark:text-gray-300">
              Competitive Programmer
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Frontend Web Developer
            </p>
            <p className="text-gray-400 dark:text-gray-500">UI/UX Designer</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="hero img"
            className="w-[90%] max-w-sm md:max-w-md drop-shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-all"
          />
        </div>
      </div>
    </section>
  );
}
