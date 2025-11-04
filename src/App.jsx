import { useState } from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Hobbies from "./sections/Hobbies";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div>
      <Navbar />
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm dark:text-white shadow z-50"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
      <div className="min-h-screen bg-white dark:bg-black transition-colors flex flex-col gap-16 md:gap-20">
        {/* Sections */}
        <Landing />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Hobbies />
      </div>
      <Footer />
    </div>
  );
}

export default App;
