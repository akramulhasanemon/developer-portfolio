import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import profilePic from '../assets/akramul.jpg';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== fullText) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-600/20 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob"></div>
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-brand-500/15 rounded-full blur-[90px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-slate-700/60 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-300">{personalInfo.availability}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight leading-[1.15]">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typewriter text */}
            <div className="text-xl sm:text-2xl font-bold text-slate-300 font-display flex items-center justify-center lg:justify-start gap-2 h-10">
              <span>I specialize in</span>
              <span className="text-brand-400 underline decoration-brand-500/50 underline-offset-4">
                {displayedText}
                <span className="animate-ping font-light">|</span>
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-sky-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition duration-300 flex items-center gap-2"
              >
                <i className="bi bi-briefcase-fill"></i> View My Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full font-bold text-sm text-slate-200 glass border border-slate-700/80 hover:bg-slate-800/80 hover:border-slate-600 hover:scale-105 transition duration-300 flex items-center gap-2"
              >
                <i className="bi bi-envelope-fill"></i> Contact Me
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Connect:</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-brand-600/30 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60 hover:scale-110">
                <i className="bi bi-github text-lg"></i>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-brand-600/30 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60 hover:scale-110">
                <i className="bi bi-linkedin text-lg"></i>
              </a>
              <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-brand-600/30 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60 hover:scale-110">
                <i className="bi bi-facebook text-lg"></i>
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass hover:bg-brand-600/30 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60 hover:scale-110">
                <i className="bi bi-whatsapp text-lg"></i>
              </a>
            </div>

          </div>

          {/* Right Column (Hero Avatar & Floating Tech Badges) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-72 sm:w-96 aspect-square">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500 via-indigo-500 to-purple-500 blur-2xl opacity-40 animate-pulse-slow"></div>

              {/* Developer Avatar Container */}
              <div className="relative w-full h-full rounded-3xl glass border border-slate-700/70 p-2 shadow-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-slate-800/40 to-slate-900/80">
                <img
                  src={profilePic}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top rounded-2xl drop-shadow-2xl hover:scale-105 transition duration-500"
                />
              </div>

              {/* Floating Badge 1: React / Next.js */}
              <div className="absolute -top-4 -left-6 glass px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 border border-sky-500/30 animate-float">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center text-xl">
                  <i className="bi bi-filetype-jsx"></i>
                </div>
                <div>
                  <strong className="text-white text-xs block font-bold">React 19 &amp; Next.js</strong>
                  <span className="text-[10px] text-slate-400">Frontend Core</span>
                </div>
              </div>

              {/* Floating Badge 2: Full-Stack / Node */}
              <div className="absolute -bottom-4 -right-4 glass px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-500/30 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">
                  <i className="bi bi-database-check"></i>
                </div>
                <div>
                  <strong className="text-white text-xs block font-bold">MySQL &amp; Node.js</strong>
                  <span className="text-[10px] text-slate-400">Backend &amp; REST</span>
                </div>
              </div>

              {/* Floating Badge 3: Tailwind */}
              <div className="absolute top-1/2 -right-10 -translate-y-1/2 glass px-3.5 py-2 rounded-2xl shadow-xl hidden sm:flex items-center gap-2 border border-purple-500/30 animate-float" style={{ animationDelay: '2.5s' }}>
                <i className="bi bi-palette-fill text-purple-400 text-lg"></i>
                <span className="text-xs font-bold text-white">Tailwind CSS</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-8 border-t border-slate-800/80">
          <div className="glass-card p-5 rounded-2xl text-center">
            <h3 className="text-3xl font-extrabold text-white font-display mb-1">{personalInfo.experienceYears}</h3>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years of Coding</span>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center">
            <h3 className="text-3xl font-extrabold text-brand-400 font-display mb-1">{personalInfo.projectsCompleted}</h3>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Projects Built</span>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center">
            <h3 className="text-3xl font-extrabold text-indigo-400 font-display mb-1">{personalInfo.githubCommits}</h3>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">GitHub Commits</span>
          </div>
          <div className="glass-card p-5 rounded-2xl text-center">
            <h3 className="text-3xl font-extrabold text-emerald-400 font-display mb-1">{personalInfo.clientSatisfaction}</h3>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Satisfaction Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
