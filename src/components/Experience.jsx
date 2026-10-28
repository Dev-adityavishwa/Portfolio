import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/20 text-violet-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institutional Leadership & Roles</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Experience & Leadership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-zinc-300 text-base sm:text-lg"
          >
            Verified institutional roles, student governance, and technical community organization at BIET Jhansi.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent opacity-30"></div>

          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Timeline node icon */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-white/15 text-indigo-400 shadow-xl group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:bg-indigo-950/40 transition-all shrink-0 z-10">
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Content Card */}
                <div className="w-full p-7 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-indigo-500/30 backdrop-blur-xl shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.badge}</span>
                    </span>

                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-indigo-200 transition-colors">
                    {item.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-300 mb-4">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item.organization}</span>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Responsibilities list */}
                  <div className="space-y-2 mb-6">
                    {item.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-800/80 border border-white/5 text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
