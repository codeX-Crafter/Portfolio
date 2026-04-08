import React, { useState } from "react";
import { Github, ExternalLink, Video, Download } from "lucide-react";

const projects = [
  {
    id: 0,
    tag: "Android · Accessibility",
    title: "Aeris",
    subtitle: "Real-Time Assistive Sound Awareness",
    img: "/aerisLogo.png",
    accent: "#2563eb",
    accentLight: "#eff6ff",
    links: [
      {
        icon: Github,
        href: "https://github.com/Isha-y1234/Aeris",
        label: "GitHub",
      },
      {
        icon: Video,
        href: "https://drive.google.com/file/d/1T4cKtBbqDbLKpixgbyIwco4CtnIx1xdN/view",
        label: "Demo",
      },
      {
        icon: Download,
        href: "https://drive.google.com/file/d/1KBZwE6Gg6H7GAV-UIrmPvaEtxwRmJqWh/view?usp=drive_link",
        label: "APK",
      },
    ],
    bullets: [
      "Always-on Android background service for deaf and hard-of-hearing users - classifies 5 environmental sound categories into distinct haptic patterns and visual alerts with per-category sensitivity tuning.",
      "End-to-end offline communication tab: on-device STT transcribes incoming speech, an LLM suggests contextual replies, and TTS speaks the response aloud - zero data leaves the device.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "YAMNet (TFLite)",
      "RunAnywhere SDK",
      "Vibrator API",
    ],
  },
  {
    id: 1,
    tag: "IoT · Embedded Systems",
    title: "ReFrost",
    subtitle: "IoT Cold-Chain Intelligence",
    img: "/refrostLOGO.png",
    accent: "#0d9488",
    accentLight: "#f0fdf4",
    links: [
      {
        icon: Github,
        href: "https://github.com/codeX-Crafter/Lily",
        label: "GitHub",
      },
      {
        icon: ExternalLink,
        href: "https://re-frost.vercel.app/",
        label: "Live",
      },
      { icon: Video, href: "https://youtu.be/APdSlxZSCJ8", label: "Demo" },
    ],
    bullets: [
      "ESP32-based cold-chain monitoring system tracking 4 ambient parameters via multi-sensor capture with on-device thresholding and local buzzer triggers.",
      "Cloud notifications for immediate anomaly response paired with a real-time web dashboard built on Blynk APIs, React.js, and Three.js.",
    ],
    stack: [
      "ESP32",
      "Arduino IDE",
      "Blynk Cloud",
      "React.js",
      "Three.js",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    tag: "Android · Healthcare AI",
    title: "Neuronexus",
    subtitle: "Early-Stage Dementia Detection Tool",
    img: "/neuronexusLogo.png",
    accent: "#7c3aed",
    accentLight: "#faf5ff",
    links: [
      {
        icon: Github,
        href: "https://github.com/Devikadudhani/Neuro-nexus.git",
        label: "GitHub",
      },
      {
        icon: Video,
        href: "https://drive.google.com/file/d/1u3OEH1WaZLYy9ZMfvT8UnwnzpIi-_YNu/view?usp=sharing",
        label: "Demo",
      },
      {
        icon: Download,
        href: "https://drive.google.com/file/d/1Ko19rOUsCLfeQ_-Am4rgQlKWKv82CbO1/view?usp=sharing",
        label: "APK",
      },
    ],
    bullets: [
      "Multi-modal Android tool assessing cognition via speech analysis (30+ markers), facial biometrics, and cognitive tasks - all scored into a unified risk profile.",
      "Fully offline experience with on-device STT, LLM-generated clinical insights, and a read-aloud assistant targeting early detection for the 55M+ people globally living with dementia.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "MediaPipe",
      "TarsosDSP",
      "RunAnywhere SDK",
      "CameraX",
    ],
  },
  {
    id: 3,
    tag: "Web · EdTech",
    title: "SkillSphere",
    subtitle: "Student Skill Accelerator",
    img: "/skillsphere.png",
    accent: "#166534",
    accentLight: "#ecfdf5",
    links: [
      {
        icon: Github,
        href: "https://github.com/codeX-Crafter/SkillSphere",
        label: "GitHub",
      },
      {
        icon: ExternalLink,
        href: "https://skillsphereee.vercel.app/",
        label: "Live",
      },
    ],
    bullets: [
      "Centralized upskilling platform aggregating curated learning resources across 8 technical domains with structured mentorship cohorts in a single access point.",
      "Reached 200+ users on launch, consolidating college-organized cohorts into one unified platform for early adopters.",
    ],
    stack: ["React.js", "Vite", "Tailwind CSS"],
  },
];

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="group relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30">
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
        style={{ backgroundColor: project.accent }}
      />

      {/* Image Panel */}
      <div
        className={`relative md:w-64 lg:w-72 flex-shrink-0 flex items-center justify-center p-8 ${isEven ? "md:order-first" : "md:order-last"}`}
        style={{ backgroundColor: project.accentLight }}
      >
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-gray-950/60 dark:block hidden" />

        <div className="relative w-full aspect-square max-w-[180px] rounded-xl overflow-hidden border border-white/20 dark:border-white/10 shadow-sm">
          <img
            src={project.img}
            alt={`${project.title} logo`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          {/* Placeholder shown if image fails */}
          <div
            className="absolute inset-0 items-center justify-center text-5xl font-bold hidden"
            style={{
              backgroundColor: project.accentLight,
              color: project.accent,
              display: "none",
            }}
          >
            {project.title[0]}
          </div>
        </div>

        {/* Index number */}
        <span
          className="absolute top-4 right-4 text-xs font-mono font-semibold opacity-40"
          style={{ color: project.accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 pl-10 gap-5">
        {/* Tag + links row */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              backgroundColor: project.accentLight,
              color: project.accent,
            }}
          >
            {project.tag}
          </span>
          <div className="flex gap-2">
            {project.links.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200"
              >
                <Icon size={13} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5">
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.accent }}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-mono border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-5xl w-full flex flex-col items-center gap-16">
        {/* Heading */}
        <h2 className="font-anton text-5xl md:text-7xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-widest text-center">
          PROJECTS
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-6 w-full">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
