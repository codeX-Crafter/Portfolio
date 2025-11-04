import React from "react";
import { Github, ExternalLink, Video } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "IGDTUW Lost & Found",
      img: "/l&f.png",
      github: "https://github.com/ayushi1527/Lost_and_Found",
      demo: "https://your-demo-link1.com",
      video: "https://your-video-link1.com",
      desc: "A smart campus lost-and-found system that enables students to report, verify, and recover items faster. Features secure item matching, claim validation, and real-time status tracking to reduce manual effort and improve campus asset recovery.",
    },
    {
      title: "SkillSphere",
      img: "/skillsphere.png",
      github: "https://github.com/codeX-Crafter/SkillSphere",
      demo: "https://skillsphereee.vercel.app/",
      video: "https://your-video-link2.com",
      desc: "A personalized learning ecosystem for engineering students, combining domain-wise roadmaps, project ideas, curated resources, and mentorship guidance. Designed to accelerate skill development through structured learning and practical upskilling paths.",
    },
    {
      title: "ReFrost",
      img: "/refrost.png",
      github: "https://github.com/codeX-Crafter/lily",
      demo: "https://re-frost.vercel.app/",
      video: "https://your-video-link3.com",
      desc: "An IoT cold-chain intelligence system that predicts spoilage, monitors environmental conditions, and flags tampering in real-time. Built to ensure supply-chain integrity with sensor-based alerts, anomaly detection, and automated compliance insights.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl w-full flex flex-col items-center space-y-14">
        <h2 className="font-anton text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest">
          PROJECTS
        </h2>

        <div className="flex flex-col gap-10 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 gap-8 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Larger Image */}
              <div className="w-full md:w-1/3 h-72 rounded-lg overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col md:w-2/3 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-wide">
                  {project.title}
                </h3>

                {/* Icons */}
                <div className="flex gap-7 text-blue-600 dark:text-cyan-400">
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <Github size={28} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <ExternalLink size={28} />
                  </a>
                  <a
                    href={project.video}
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <Video size={28} />
                  </a>
                </div>

                <p className="text-gray-700 dark:text-gray-300 tracking-wider leading-relaxed text-base md:text-lg">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
