import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsAbout from "./components/SkillsAbout";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="pt-6">
        <Hero />
        <SkillsAbout />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
