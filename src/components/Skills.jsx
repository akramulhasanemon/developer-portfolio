import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'DevOps & Tools' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skillsData.frontend,
        ...skillsData.backend,
        ...skillsData.database,
        ...skillsData.tools
      ];
    }
    return skillsData[activeTab] || [];
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3.5 py-1.5 rounded-full border border-brand-500/20">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-3">
            My Tech Stack &amp; Skills
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            The core programming languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'glass text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, index) => (
            <div key={index} className="glass-card p-5 rounded-2xl group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-xl group-hover:scale-110 transition duration-200">
                    <i className={`bi ${skill.icon}`} style={{ color: skill.color }}></i>
                  </div>
                  <strong className="text-sm font-bold text-white">{skill.name}</strong>
                </div>
                <span className="text-xs font-mono font-bold text-brand-400">{skill.level}%</span>
              </div>

              {/* Progress Bar with Animation */}
              <div className="w-full bg-slate-800/90 h-2 rounded-full overflow-hidden p-0.5 border border-slate-700/60">
                <div
                  className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-brand-500 to-indigo-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
