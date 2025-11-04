import React from "react";

export default function Hobbies() {
  const hobbies = [
    { img: "/cinema.png", alt: "Cinema" },
    { img: "/stadium.png", alt: "Stadium / Sports" },
    { img: "/art.png", alt: "Art & Painting" },
  ];

  return (
    <section
      id="hobbies"
      className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-12">
        {/* Heading */}
        <h2 className="font-anton text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest leading-tight">
          HOBBIES & INTERESTS
        </h2>

        {/* Images */}
        <div className="flex gap-8 flex-wrap justify-center">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="w-44 h-44 md:w-60 md:h-60 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img
                src={hobby.img}
                alt={hobby.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <p className="text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed text-lg md:text-xl max-w-3xl">
          Beyond tech, I find creativity and inspiration in cinema, art, and
          live experiences. Films shape my storytelling in design & development,
          sports keep me driven and disciplined, and painting gives me space to
          think freely. I believe creativity off-screen fuels innovation
          on-screen.
        </p>
      </div>
    </section>
  );
}
