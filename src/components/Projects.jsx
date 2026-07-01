import React, { useState } from "react";
import { Github, ExternalLink, Youtube } from "lucide-react";

const projects = [
  {
    badge: "FYP · Degree",
    title: "SafePoint",
    desc: "Emergency response mobile app with one-touch SOS alerts, real-time GPS location sharing, incident reporting with photos, and safety resource hub.",
    tech: ["Java", "Android Studio", "Firebase", "Google Maps API", "XML"],
    github: "https://github.com/intanhbrh",
    accentColor: "bg-yellow",
  },
  {
    badge: "Internship · HELP International School",
    title: "ANPR School Pickup System",
    desc: "Automated Number Plate Recognition system — when a parent's car plate is detected at the school gate, students get a real-time notification to head to the pickup zone. No more manual name-calling.",
    tech: ["React Native", "Node.js", "MySQL", "Expo", "SendGrid", "Android"],
    github: "https://github.com/intanhbrh/ANPR_SchoolPickupSystem",
    youtube: "https://youtu.be/RDN6vBnkbm4",
    live: "https://intan-internship-portfolio.vercel.app/",
    accentColor: "bg-pink",
  },
  {
    badge: "Internship · HELP International School",
    title: "Room Booking System (Agentic AI)",
    desc: "AI-powered Room Booking System using OpenClaw Agentic AI to automate reservations through natural language conversations. Users can check room availability, book meeting rooms, and manage reservations — deployed on Ubuntu with a local LLM.",
    tech: ["OpenClaw", "Agentic AI", "Python", "Ubuntu Linux", "Ollama", "Gemini Flash", "Local LLM"],
    github: null,
    youtube: "https://youtu.be/VQcr3sO1fuE",
    accentColor: "bg-yellow",
  },
  {
    badge: "Internship · HELP International School",
    title: "Lost & Found Management System",
    desc: "Web-based Lost & Found system for HELP International School — admins manage item records while students and staff can search, submit, and claim belongings through a centralised platform. Deployed on IIS server.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "REST API", "IIS Server"],
    github: null,
    live: "https://lostandfound.kl.his.edu.my/",
    liveAdmin: "https://lostandfound.kl.his.edu.my/admin/login.php",
    accentColor: "bg-pink",
  },
  {
    badge: "Research & Deployment",
    title: "Agentic AI — OpenClaw",
    desc: "Researched and deployed OpenClaw Agentic AI on an NVIDIA RTX 4090 Ubuntu server. Focused on local AI agent deployment, GPU acceleration, gateway configuration, and multi-step reasoning. Documented the full deployment process and resolved system integration issues.",
    tech: ["OpenClaw", "NemoClaw", "Python", "Ubuntu Linux", "Ollama", "NVIDIA RTX 4090", "Docker", "Local LLM"],
    github: "https://github.com/intanhbrh/agentic-ai-openclaw",
    accentColor: "bg-yellow",
  },
  {
    badge: "FYP · Diploma",
    title: "DeliTEN",
    desc: "Online food ordering system for UNITEN campus — full-stack with role-based auth (User/Vendor/Admin), cart, vendor dashboard, and real-time order tracking.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    github: "https://github.com/intanhbrh",
    accentColor: "bg-pink",
  },
];

function LinkBtn({ href, icon: Icon, label, highlight }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-ink transition-all hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 ${
        highlight
          ? "bg-pink text-white shadow-brutal-sm"
          : "bg-white text-ink shadow-brutal-sm hover:bg-yellow"
      }`}
    >
      <Icon size={12} />
      {label}
    </a>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-2 border-ink bg-white shadow-brutal flex flex-col hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all">
      {/* Coloured top bar */}
      <div className={`h-2 w-full ${project.accentColor} border-b-2 border-ink`} />

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-pink mb-1">{project.badge}</p>
          <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">{project.title}</h3>
        </div>

        <p className="text-sm font-medium leading-relaxed text-ink/70 flex-1">
          {expanded ? project.desc : project.desc.slice(0, 120) + (project.desc.length > 120 ? "…" : "")}
          {project.desc.length > 120 && (
            <button onClick={() => setExpanded(!expanded)} className="ml-1 text-pink font-bold hover:underline">
              {expanded ? "less" : "more"}
            </button>
          )}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-bold uppercase tracking-wide border-2 border-ink px-2 py-0.5 bg-yellow">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-ink">
          {project.github && <LinkBtn href={project.github} icon={Github} label="Code" />}
          {project.youtube && <LinkBtn href={project.youtube} icon={Youtube} label="Demo Video" highlight />}
          {project.live && <LinkBtn href={project.live} icon={ExternalLink} label="Live Site" />}
          {project.liveAdmin && <LinkBtn href={project.liveAdmin} icon={ExternalLink} label="Admin" />}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 pb-10">
      <div className="brutal-card p-8">
        <p className="section-eyebrow">Featured Work</p>
        <h2 className="section-heading mb-8">PROJECTS</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
