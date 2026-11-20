import React from 'react';
import { servicesData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            About My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-3">
            Passionate Developer Building Tomorrow's Web
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Bridging strong Computer Science fundamentals from university with modern full-stack development tools.
          </p>
        </div>

        {/* 2-Column Info & Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a dedicated <strong>Computer Science &amp; Engineering</strong> student at <strong>Bangladesh University of Business and Technology (BUBT)</strong>, currently excelling in my <strong>5th semester</strong>.
            </p>
            <p>
              My journey involves building real-world enterprise applications — from architecting complete multi-portal hospital and academic systems to high-performance Next.js React user interfaces.
            </p>
            <p>
              I believe in clean code, robust database normalization, scalable API contracts, and fluid micro-interactions that elevate users' digital experiences.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 rounded-lg glass text-xs font-semibold text-slate-300 border border-slate-700">
                <i class="bi bi-mortarboard-fill text-brand-400 me-1.5"></i> BUBT CSE (5th Sem)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg glass text-xs font-semibold text-slate-300 border border-slate-700">
                <i class="bi bi-geo-alt-fill text-rose-400 me-1.5"></i> Mirpur, Dhaka, Bangladesh
              </span>
              <span className="px-3.5 py-1.5 rounded-lg glass text-xs font-semibold text-slate-300 border border-slate-700">
                <i class="bi bi-check2-circle text-emerald-400 me-1.5"></i> Production Deployment
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center text-xl">
                  <i class="bi bi-terminal-fill"></i>
                </div>
                <h4 className="font-bold text-white text-lg">My Core Philosophy</h4>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <i class="bi bi-check-circle-fill text-brand-400 mt-1"></i>
                  <span><strong>Performance First:</strong> Leveraging Next.js SSR, code-splitting, and memoization for lightning page speeds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i class="bi bi-check-circle-fill text-brand-400 mt-1"></i>
                  <span><strong>Security by Design:</strong> Prepared PDO statements, bcrypt hashing, input sanitization, and route protection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i class="bi bi-check-circle-fill text-brand-400 mt-1"></i>
                  <span><strong>Modern Aesthetics:</strong> Thoughtful Tailwind design tokens, responsive breakpoints, and tactile micro-animations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services & Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 text-white flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition duration-300">
                  <i className={`bi ${svc.icon}`}></i>
                </div>
                <h4 className="font-bold text-base text-white mb-2">{svc.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
