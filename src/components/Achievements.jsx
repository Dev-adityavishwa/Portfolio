import { motion } from 'framer-motion';
import { Award, CheckCircle2, Star } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export default function Achievements() {
  if (!achievementsData || achievementsData.length === 0) return null;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Star className="w-3.5 h-3.5" />
            <span>Milestones & Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Achievements & Highlights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-zinc-300 text-base sm:text-lg"
          >
            Notable academic selections, institutional appointments, and verified engineering milestones.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-amber-400/30 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-400">
                    {item.year}
                  </span>
                </div>

                <span className="text-xs font-mono text-cyan-300 block mb-1">
                  {item.issuer}
                </span>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 font-mono mb-4">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.badge}</span>
                </span>
                <span className="text-[11px] font-mono text-zinc-400">
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
