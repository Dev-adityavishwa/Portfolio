import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Foundations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-zinc-300 text-base sm:text-lg"
          >
            My formal computer science and technical education journey, from foundational engineering diploma to final-year B.Tech.
          </motion.p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-indigo-500/30 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-semibold">
                    {edu.timeline}
                  </span>
                </div>

                {/* Degree & Field */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-indigo-200 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-indigo-300 mb-3">
                  {edu.field}
                </p>

                {/* Institution & Location */}
                <div className="space-y-1 mb-6 text-xs text-zinc-300 font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-200">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  {edu.status}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-semibold">
                  {edu.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
