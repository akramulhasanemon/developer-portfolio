import React from 'react';
import { educationAndExp } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-dark-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Background &amp; Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-3">
            Education &amp; Experience
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            My academic timeline and technical milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
          {educationAndExp.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Glowing Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-dark-950 border-4 border-brand-500 group-hover:scale-125 group-hover:bg-brand-400 transition duration-300 shadow-md shadow-brand-500/50"></div>

              {/* Card */}
              <div className="glass-card p-6 rounded-2xl border border-slate-800">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-500/15 text-brand-400 border border-brand-500/30 mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.role}
                </h3>
                <h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1.5">
                  <i class="bi bi-building text-brand-400"></i> {item.company}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
