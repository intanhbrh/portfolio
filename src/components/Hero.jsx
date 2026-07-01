import React from "react";
export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-12">
      <div className="relative bg-yellow border-2 border-ink shadow-brutal-lg p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden">
        <div className="flex-1 z-10">
          <span className="inline-block bg-ink text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-6">Software Engineer / Web Designer</span>
          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-none mb-6">
            Hi, I'm <span className="inline-block bg-pink text-white px-3 py-1">Intan.</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-ink max-w-md leading-relaxed mb-8">
            Final-year CS student at MMU Cyberjaya. I build things for the web &amp; mobile — from Android apps to PHP systems to WordPress sites.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-block bg-pink text-white font-bold uppercase tracking-widest text-sm px-7 py-4 border-2 border-ink shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">View Projects</a>
            <a href="mailto:intanhbrh@gmail.com" className="inline-block bg-white text-ink font-bold uppercase tracking-widest text-sm px-7 py-4 border-2 border-ink shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">Say Hello</a>
          </div>
        </div>
        <div className="flex-shrink-0 self-end md:self-center">
          <div className="w-52 h-64 md:w-64 md:h-80 border-4 border-ink shadow-brutal-lg bg-pink flex items-center justify-center overflow-hidden rotate-2">
           <img src="/photo.jpg" alt="Intan" className="w-full h-full object-cover" />
            <div className="text-center text-white p-4">
              <div className="text-6xl mb-2">👩‍💻</div>
              <p className="text-xs font-bold uppercase tracking-wide">Add photo to<br/>/public/photo.jpg</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20" style={{backgroundImage:"radial-gradient(#111 1.5px,transparent 0)",backgroundSize:"12px 12px"}}/>
      </div>
      <div className="mt-4 border-2 border-ink bg-white shadow-brutal-sm px-6 py-3 flex items-center gap-3 w-fit">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"/>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">Available for full-time · Sept 2026</span>
      </div>
    </section>
  );
}
