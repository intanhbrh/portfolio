import React from "react";
const edu = [
  {
    badge: "Degree · Current",
    title: "Bachelor of Computer Science",
    sub: "Software Engineering (Hons.)",
    institution: "Multimedia University (MMU) · Cyberjaya",
    period: "Oct 2023 — Nov 2026",
    gpa: "CGPA 3.41 / 4.00",
    subjects: ["OOP","Software Design","Algorithm Design","Requirements Eng.","Computer Networks","Quality Assurance"],
  },
  {
    badge: "Diploma · Completed",
    title: "Diploma in Computer Science",
    sub: "",
    institution: "Universiti Tenaga Nasional (UNITEN) · Putrajaya",
    period: "Jun 2020 — Feb 2023",
    gpa: "CGPA 3.63 / 4.00 · Dean's List 3×",
    subjects: ["Web Programming","Data Structures","Database Systems","System Analysis","OOP","Computer Security"],
  },
];
export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 pb-10">
      <div className="brutal-card p-8">
        <p className="section-eyebrow">Where I studied</p>
        <h2 className="section-heading mb-8">EDUCATION</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {edu.map((e) => (
            <div key={e.title} className="border-2 border-ink p-6 bg-cream shadow-brutal-sm">
              <span className="inline-block bg-pink text-white text-xs font-bold uppercase tracking-widest px-2.5 py-1 mb-4">{e.badge}</span>
              <h3 className="text-lg font-bold uppercase leading-tight mb-0.5">{e.title}</h3>
              {e.sub && <p className="text-sm font-bold text-pink mb-2">{e.sub}</p>}
              <p className="text-sm font-medium text-ink/60 mb-1">{e.institution}</p>
              <p className="text-xs font-bold text-ink/40 mb-3">{e.period}</p>
              <div className="inline-block bg-yellow border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">{e.gpa}</div>
              <div className="flex flex-wrap gap-2">
                {e.subjects.map((s) => <span key={s} className="text-xs font-bold border border-ink px-2 py-0.5 bg-white">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
