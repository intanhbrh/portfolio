import React from "react";
import { Mail, Linkedin, Github, Phone, ExternalLink } from "lucide-react";
const contacts = [
  {icon:Mail,label:"Email",value:"intanhbrh@gmail.com",href:"mailto:intanhbrh@gmail.com",color:"bg-yellow"},
  {icon:Linkedin,label:"LinkedIn",value:"linkedin.com/in/intanhbrh",href:"https://linkedin.com/in/intanhbrh",color:"bg-white"},
  {icon:Github,label:"GitHub",value:"github.com/intanhbrh",href:"https://github.com/intanhbrh",color:"bg-white"},
  {icon:Phone,label:"Phone",value:"+60 11-2337 7664",href:"tel:+601123377664",color:"bg-white"},
  {icon:ExternalLink,label:"Internship Portfolio",value:"intan-internship-portfolio.vercel.app",href:"https://intan-internship-portfolio.vercel.app/",color:"bg-pink"},
];
export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pb-16">
      <div className="brutal-card p-8">
        <p className="section-eyebrow">Let's connect</p>
        <h2 className="section-heading mb-3">CONTACT</h2>
        <p className="text-sm font-medium text-ink/60 max-w-lg mb-8">Finishing internship Jul 2026, available full-time from September 2026 (expected graduation December). Open to Software Engineering, Web Design &amp; Development, or Mobile roles — remote, hybrid, or on-site in KL.</p>
        <a href="mailto:intanhbrh@gmail.com" className="inline-flex items-center gap-2 bg-pink text-white font-bold uppercase tracking-widest text-sm px-8 py-4 border-2 border-ink shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all mb-10">
          <Mail size={16}/> Send Me an Email
        </a>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contacts.map(({icon:Icon,label,value,href,color})=>(
            <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer"
              className={`flex items-start gap-3 border-2 border-ink p-4 shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all ${color} ${color==="bg-pink"?"text-white":""}`}>
              <div className="w-9 h-9 bg-ink flex items-center justify-center flex-shrink-0">
                <Icon size={15} className="text-white"/>
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${color==="bg-pink"?"text-white/70":"text-ink/50"}`}>{label}</p>
                <p className="text-sm font-bold break-all leading-snug mt-0.5">{value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t-2 border-ink flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40">© 2026 Intan Nur Habriah</p>
          <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Built with React + Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
