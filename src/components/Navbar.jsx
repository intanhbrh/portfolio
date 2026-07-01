import React, { useState } from "react";
import { Menu, X } from "lucide-react";
const links = ["About", "Education", "Skills", "Projects", "Experience", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-xl tracking-tight text-ink">intan<span className="text-pink">.</span></a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-widest text-ink hover:text-pink transition-colors">{l}</a></li>
          ))}
        </ul>
        <a href="mailto:intanhbrh@gmail.com" className="hidden md:inline-block bg-pink text-white font-bold text-sm uppercase tracking-widest px-5 py-2.5 border-2 border-ink shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">Hire Me</a>
        <button onClick={() => setOpen(!open)} className="md:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && (
        <div className="md:hidden border-t-2 border-ink bg-cream px-6 py-4 flex flex-col gap-4">
          {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-widest">{l}</a>)}
          <a href="mailto:intanhbrh@gmail.com" className="bg-pink text-white font-bold text-sm uppercase px-5 py-2.5 border-2 border-ink text-center">Hire Me</a>
        </div>
      )}
    </nav>
  );
}
