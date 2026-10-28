import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Terminal, 
  Database, 
  HardDrive, 
  Cloud, 
  Binary, 
  Cpu, 
  GitBranch, 
  Laptop, 
  Zap, 
  UploadCloud, 
  CloudRain, 
  Table, 
  Hash, 
  BarChart3, 
  PieChart, 
  Sparkles,
  Palette,
  Globe,
  FileCode,
  Network
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { skillCategories } from '../data/skills';

const iconLookup = {
  Code2,
  FileCode,
  Palette,
  Globe,
  Sparkles,
  Server,
  Terminal,
  Network,
  Database,
  HardDrive,
  Cloud,
  Binary,
  Cpu,
  GitBranch,
  Github: GithubIcon,
  Laptop,
  Zap,
  UploadCloud,
  CloudRain,
  Table,
  Hash,
  BarChart3,
  PieChart,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technologies & Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            My Tech Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-zinc-300 text-base sm:text-lg"
          >
            A curated set of tools, libraries, and languages I use to build scalable web applications and explore data.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
                : 'bg-zinc-900/80 text-zinc-300 border border-white/10 hover:text-white hover:bg-white/5'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === category.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
                  : 'bg-zinc-900/80 text-zinc-300 border border-white/10 hover:text-white hover:bg-white/5'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills list inside category */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const Icon = iconLookup[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-800/40 border border-white/5 hover:bg-zinc-800/80 hover:border-white/15 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-zinc-200 block">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                        {skill.note && (
                          <span className="text-[11px] text-zinc-400 font-mono text-right max-w-[150px] truncate" title={skill.note}>
                            {skill.note}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>VERIFIED PROFICIENCY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
