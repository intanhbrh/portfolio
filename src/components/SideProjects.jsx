import React from "react";
import { Github, ExternalLink } from "lucide-react";

const sideProjects = [
  {
    badge: "Personal · Free Time",
    title: "Stickerbox",
    desc: "A free, no-login web app for decorating photos. Upload a photo or start blank, then add PNG stickers, emoji, emoticons and shapes. Drag, resize, recolor and layer them, then save the image to share on Instagram stories or X.",
    tech: ["HTML", "CSS", "JavaScript", "Cloudflare Workers"],
    github: "https://github.com/intanhbrh/stickerbox",
    live: "https://stickerbox.snowymoshiflake.workers.dev/",
    accentColor: "bg-pink",
  },
];

function LinkBtn({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 border-2 border-ink bg-white text-ink shadow-brutal-sm transition-all hover:bg-yellow hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
    >
      <Icon size={12} />
      {label}
    </a>
  );
}

export default function SideProjects() {
  return (
    <section id="side-projects" className="max-w-6xl mx-auto px-6 pb-10">
      <div className="brutal-card p-8">
      
        <h2 className="section-heading mb-8">SIDE PROJECTS</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sideProjects.map((p) => (
            <div key={p.title} className="border-2 border-ink bg-white shadow-brutal flex flex-col hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all">
              <div className={`h-2 w-full ${p.accentColor} border-b-2 border-ink`} />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-pink mb-1">{p.badge}</p>
                  <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">{p.title}</h3>
                </div>
                <p className="text-sm font-medium leading-relaxed text-ink/70 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-bold uppercase tracking-wide border-2 border-ink px-2 py-0.5 bg-yellow">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-ink">
                  {p.github && <LinkBtn href={p.github} icon={Github} label="Code" />}
                  {p.live && <LinkBtn href={p.live} icon={ExternalLink} label="Live Site" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
