import React from "react";

export default function Navbar() {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "hobbies", label: "HOBBIES" },
  ];

  return (
    <nav className="w-full py-6 bg-white dark:bg-black transition-colors duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto hidden md:flex justify-center gap-8 text-lg font-semibold">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="
              cursor-pointer 
              text-gray-800 
              dark:text-gray-300 
              hover:text-blue-600 
              dark:hover:text-cyan-400 
              transition-colors duration-200
            "
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
