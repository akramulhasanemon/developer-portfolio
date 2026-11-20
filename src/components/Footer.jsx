import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 py-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-indigo-500 text-white flex items-center justify-center font-display font-bold text-sm">
              AH
            </div>
            <div>
              <span className="font-extrabold text-white text-sm">Akramul Hasan</span>
              <span className="block text-[10px] text-slate-500">BSc in CSE @ BUBT (5th Semester)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-base text-slate-400">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition"><i className="bi bi-github"></i></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition"><i className="bi bi-linkedin"></i></a>
            <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition"><i className="bi bi-facebook"></i></a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition"><i className="bi bi-whatsapp"></i></a>
          </div>

          <div className="flex items-center gap-4">
            <p className="mb-0 text-slate-500">
              &copy; {new Date().getFullYear()} Akramul Hasan. Built with React &amp; Tailwind.
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg glass hover:bg-brand-600 hover:text-white flex items-center justify-center transition border border-slate-800"
              title="Scroll to top"
            >
              <i className="bi bi-arrow-up-short text-lg"></i>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
