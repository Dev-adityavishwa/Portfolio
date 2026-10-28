import { 
  BrainCircuit, 
  Home, 
  Shirt, 
  CheckSquare, 
  Compass, 
  Coins, 
  TrendingUp, 
  Mail 
} from 'lucide-react';

export default function ProjectCardPreview({ projectId }) {
  // 1. Student Placement Prediction
  if (projectId === 'placement-prediction') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#121128] via-[#1a173d] to-[#0c0d1c] rounded-2xl overflow-hidden flex items-center justify-center border border-indigo-500/25 group-hover:border-indigo-400/50 transition-all p-6">
        <div className="absolute inset-0 bg-grid-pattern opacity-35"></div>
        <div className="absolute w-44 h-44 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-xl bg-zinc-900/90 border border-white/15 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5">
              <BrainCircuit className="w-4 h-4 text-indigo-400" />
              <span className="text-[11px] font-bold text-white tracking-wide">PLACEMENT MODEL</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
              89% ACCURACY
            </span>
          </div>

          <div className="space-y-1.5 text-[10px] font-mono">
            <div className="flex justify-between text-zinc-300">
              <span>ALGORITHM:</span>
              <span className="text-cyan-300">Scikit-learn / Classifier</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>SERVING:</span>
              <span className="text-emerald-400">Flask REST API</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden mt-1">
              <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 rounded-full w-[89%]"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-indigo-500/20 border border-indigo-400/30 text-[10px] font-mono text-indigo-300">
          ML + Flask
        </div>
      </div>
    );
  }

  // 2. House Price Prediction
  if (projectId === 'house-price-prediction') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#0c1b2b] via-[#0f283d] to-[#08121c] rounded-2xl overflow-hidden flex items-center justify-center border border-cyan-500/25 group-hover:border-cyan-400/50 transition-all p-6">
        <div className="absolute inset-0 bg-grid-pattern opacity-35"></div>
        <div className="absolute w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-xl bg-zinc-900/90 border border-white/15 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5">
              <Home className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-bold text-white tracking-wide">ESTIMATION MODEL</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">
              R² = 0.91 SCORE
            </span>
          </div>

          <div className="space-y-1.5 text-[10px] font-mono">
            <div className="flex justify-between text-zinc-300">
              <span>METRIC FIT:</span>
              <span className="text-emerald-400">High Regression Fit</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>FEATURES:</span>
              <span className="text-cyan-300">Area, Beds, Locality</span>
            </div>
            <div className="flex items-center gap-2 pt-1 text-[9px] text-zinc-400">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Multi-variable Regression Pipeline</span>
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-cyan-500/20 border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
          Predictive Analytics
        </div>
      </div>
    );
  }

  // 3. Laundry Service Website
  if (projectId === 'laundry-service') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#0c221d] via-[#103029] to-[#081512] rounded-2xl overflow-hidden flex items-center justify-center border border-emerald-500/25 group-hover:border-emerald-400/50 transition-all p-6">
        <div className="absolute inset-0 bg-grid-pattern opacity-35"></div>
        <div className="absolute w-44 h-44 bg-emerald-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-xl bg-zinc-900/90 border border-white/15 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <Shirt className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-bold text-white tracking-wide">SERVICE PORTAL</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
              ACTIVE DISPATCH
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-[10px] space-y-0.5 text-zinc-300 font-mono">
              <p className="text-white font-semibold">EmailJS Integration</p>
              <p className="text-zinc-400">Pickup Scheduling</p>
              <p className="text-emerald-400">Instant Confirmation</p>
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-mono text-emerald-300">
          EmailJS Service
        </div>
      </div>
    );
  }

  // 4. MERN To-Do App
  if (projectId === 'mern-todo') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#1b122c] via-[#24173d] to-[#120a1c] rounded-2xl overflow-hidden flex items-center justify-center border border-violet-500/25 group-hover:border-violet-400/50 transition-all p-6">
        <div className="absolute inset-0 bg-grid-pattern opacity-35"></div>
        <div className="absolute w-44 h-44 bg-violet-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-xl bg-zinc-900/90 border border-white/15 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4 text-violet-400" />
              <span className="text-[11px] font-bold text-white tracking-wide">MERN TASK HUB</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 font-semibold">
              MONGODB PERSISTENCE
            </span>
          </div>

          <div className="space-y-1.5 text-[10px] font-mono">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="w-2 h-2 rounded bg-emerald-400"></span>
              <span>RESTful Express CRUD Routes</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="w-2 h-2 rounded bg-cyan-400"></span>
              <span>React State + Tailwind Theming</span>
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-violet-500/20 border border-violet-400/30 text-[10px] font-mono text-violet-300">
          MERN Stack
        </div>
      </div>
    );
  }

  // 5. Bella Vista UI
  if (projectId === 'bella-vista-ui') {
    return (
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#241b0f] via-[#332512] to-[#171007] rounded-2xl overflow-hidden flex items-center justify-center border border-amber-500/25 group-hover:border-amber-400/50 transition-all p-6">
        <div className="absolute inset-0 bg-grid-pattern opacity-35"></div>
        <div className="absolute w-44 h-44 bg-amber-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-2 shadow-lg group-hover:scale-105 transition-transform">
            <Compass className="w-7 h-7 text-amber-300" />
          </div>
          <span className="text-xs font-serif italic text-amber-200">Bella Vista Luxury</span>
          <span className="text-[10px] font-mono text-zinc-400 mt-0.5">Responsive Editorial Landing UI</span>
        </div>

        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-400/30 text-[10px] font-mono text-amber-300">
          HTML & CSS
        </div>
      </div>
    );
  }

  // 6. Currency Converter
  return (
    <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#0c182b] via-[#11243f] to-[#08101e] rounded-2xl overflow-hidden flex items-center justify-center border border-blue-500/25 group-hover:border-blue-400/50 transition-all p-6">
      <div className="absolute inset-0 bg-grid-pattern opacity-35"></div>
      <div className="absolute w-44 h-44 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex items-center gap-3">
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300">
          <Coins className="w-6 h-6 text-cyan-300" />
        </div>
        <div className="text-left font-mono">
          <div className="text-xs font-bold text-white">USD ⇄ INR Exchange</div>
          <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Financial REST API</span>
          </div>
        </div>
      </div>

      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-[10px] font-mono text-cyan-300">
        JavaScript API
      </div>
    </div>
  );
}
