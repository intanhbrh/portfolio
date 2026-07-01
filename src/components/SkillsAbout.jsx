import React from "react";
const skills = [
  {name:"Java",icon:"☕"},{name:"JavaScript",icon:"JS"},{name:"PHP",icon:"🐘"},
  {name:"Python",icon:"🐍"},{name:"React Native",icon:"⚛"},{name:"Node.js",icon:"🟢"},
  {name:"MySQL",icon:"🗄"},{name:"Firebase",icon:"🔥"},{name:"WordPress",icon:"W"},
  {name:"Android",icon:"🤖"},{name:"Bootstrap",icon:"B"},{name:"GitHub",icon:"🐙"},
  {name:"HTML5",icon:"H"},{name:"CSS3",icon:"C"},{name:"C++",icon:"C++"},{name:"Figma",icon:"🎨"},
];
const quickInfo = [
  {label:"University",value:"MMU Cyberjaya"},
  {label:"Degree",value:"CS (Hons.) Software Eng."},
  {label:"Currently at",value:"HELP International School"},
  {label:"Based in",value:"Rawang, Selangor, MY"},
  {label:"Available",value:"Sept 2026+"},
];
export default function SkillsAbout() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 pb-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="brutal-card p-8">
          <p className="section-eyebrow">What I work with</p>
          <h2 className="section-heading mb-6">SKILLS</h2>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((s) => <div key={s.name} className="skill-pill"><span className="text-base">{s.icon}</span><span>{s.name}</span></div>)}
          </div>
        </div>
        <div id="about" className="brutal-card p-8 flex flex-col justify-between">
          <div>
            <p className="section-eyebrow">Who I am</p>
            <h2 className="section-heading mb-6">ABOUT</h2>
            <p className="text-sm font-medium leading-relaxed text-ink mb-4">I'm a passionate Computer Science student from Malaysia who loves building things that are both <strong>beautiful and functional</strong>. I've worked on Android apps, PHP web systems, and WordPress sites — and I enjoy the full stack, from database design to UI polish.</p>
            <p className="text-sm font-medium leading-relaxed text-ink mb-6">Currently wrapping up my internship at <strong>HELP International School</strong> where I built a real ANPR school pickup system, a room booking system powered by Agentic AI, and a Lost &amp; Found system — all deployed to production.</p>
          </div>
          <div className="border-t-2 border-ink pt-5 mt-2">
            <p className="text-xs font-bold uppercase tracking-widest text-pink mb-3">Quick Info</p>
            <ul className="space-y-2">
              {quickInfo.map((i) => (
                <li key={i.label} className="flex justify-between text-sm font-medium border-b border-ink/10 pb-2">
                  <span className="text-ink/50">{i.label}</span>
                  <span className="font-bold">{i.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
