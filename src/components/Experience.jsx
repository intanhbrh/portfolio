import React from "react";
import { ExternalLink } from "lucide-react";
const jobs = [
  {
    period: "Apr — Jul 2025",
    role: "Software Engineer & IT Support Intern",
    company: "HELP International School",
    type: "EdTech · Shah Alam",
    color: "bg-yellow",
    link: "https://intan-internship-portfolio.vercel.app/",
    bullets: [
      "Built ANPR school pickup mobile app with React Native, Node.js, MySQL & Expo",
      "Implemented OTP auth via SendGrid — configured DNS, firewalls, Port 3000",
      "Migrated backend from personal laptop to school server",
      "Developed full Lost & Found system: SRS → UML → Figma → React/Node.js → UAT → IIS deployment",
      "Built AI-powered room booking system with OpenClaw Agentic AI on Ubuntu server",
    ],
  },
  {
    period: "Aug 2025",
    role: "Web / IT Assistant",
    company: "MBI Modal",
    type: "Cyberjaya",
    color: "bg-white",
    bullets: [
      "Managed website content and integrity updates via WordPress",
      "Added company policies, guidelines, and organisational information",
    ],
  },
  {
    period: "Jun — Aug 2022",
    role: "Web Designer Intern",
    company: "DYODD Sdn Bhd",
    type: "Petaling Jaya",
    color: "bg-yellow",
    bullets: [
      "Built e-commerce site with WordPress & Oxygen Builder",
      "Created automated customer service workflows using Uchat chatbot",
      "Improved website UX through plugin integration and UI optimisation",
    ],
  },
  {
    period: "2023 – 2025 (Part-time)",
    role: "Retail Sales Associate & TROOPERS",
    company: "2nd Street | 7-Eleven | B.bap Korean Food",
    type: "Kuala Lumpur",
    color: "bg-cream",
    bullets: ["Customer service skills in fast-paced retail and restaurant environments"],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 pb-10">
      <div className="brutal-card p-8">
        <p className="section-eyebrow">Where I've worked</p>
        <h2 className="section-heading mb-8">EXPERIENCE</h2>
        <div className="space-y-5">
          {jobs.map((j, i) => (
            <div key={i} className={`border-2 border-ink p-6 shadow-brutal-sm ${j.color}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight">{j.role}</h3>
                  <p className="text-sm font-bold text-pink">{j.company}</p>
                  <p className="text-xs font-medium text-ink/50">{j.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block bg-ink text-white text-xs font-bold uppercase tracking-widest px-3 py-1 whitespace-nowrap">{j.period}</span>
                 {j.link && (
  <a href={j.link} target="_blank" rel="noreferrer"
    className="inline-flex items-center gap-1.5 bg-pink text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-ink shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
    <ExternalLink size={12} /> View Portfolio
  </a>
)}
                </div>
              </div>
              <ul className="space-y-1.5">
                {j.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm font-medium">
                    <span className="font-black text-pink mt-0.5 flex-shrink-0">→</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
