import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  FileText, 
  UserCheck, 
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Zap,
  Globe,
  Key
} from 'lucide-react';
import { PROCESS_PHASES } from '../data/studioData.ts';

interface ProcessTimelineProps {
  onOpenLeadModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenLeadModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activePhase = PROCESS_PHASES[activeStepIndex];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-28 relative bg-kr-section-alt border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="kr-badge-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="uppercase tracking-wide">Our 7-Step Build Process</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            From initial idea to live production. <br className="hidden sm:inline" />
            Completed in 1–2 days.
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A transparent, rapid engineering process. We build your system, test it thoroughly, and deploy it directly into your own domain and cloud accounts.
          </p>
        </div>

        {/* Essential Domain Rights Banner (Highlighting the user's core studio principle!) */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0">
            <Key className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-900 dark:text-white">Why we configure domains and cloud directly in your name: </span>
            <span>
              If an agency buys domains or hosting on their side, they hold your assets hostage with recurring markup fees. At KR Studio, we set up all domains and cloud hosting directly in your own accounts. You retain 100% legal ownership, direct registrar renewal rates, and full DNS control from Day 1.
            </span>
          </div>
        </div>

        {/* Step Selector Pills (Horizontally scrollable with clean indicators on mobile) */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center min-w-max sm:justify-center gap-2">
            {PROCESS_PHASES.map((phase, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-102'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                  }`}>
                    {phase.step}
                  </span>
                  <span>{phase.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Card - Compact & Clean */}
        <div className="max-w-4xl mx-auto rounded-3xl p-5 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-slate-100 dark:border-slate-800 gap-3">
            <div>
              <div className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Step {activePhase.step} of 07 · {activePhase.subtitle}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-display mt-0.5">
                {activePhase.name}
              </h3>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-300 self-start sm:self-auto shadow-xs">
              <Zap className="w-3.5 h-3.5 text-emerald-500" />
              <span>{activePhase.timeline}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {activePhase.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Key Deliverables */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>What We Deliver</span>
              </div>
              <ul className="space-y-1.5">
                {activePhase.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Input */}
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-2.5">
                  <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>What We Need From You</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activePhase.clientProvides}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-blue-200/50 dark:border-blue-900/30 text-[11px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Transparent progress with direct founder access</span>
              </div>
            </div>
          </div>

          {/* Stepper Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
            <button
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeStepIndex === 0}
              className={`px-3.5 py-1.5 rounded-full font-bold transition-colors ${
                activeStepIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-slate-400'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              ← Previous
            </button>

            <span className="text-[11px] text-slate-400 font-mono">
              {activeStepIndex + 1} / {PROCESS_PHASES.length}
            </span>

            <button
              onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_PHASES.length - 1, prev + 1))}
              disabled={activeStepIndex === PROCESS_PHASES.length - 1}
              className={`px-3.5 py-1.5 rounded-full font-bold transition-colors ${
                activeStepIndex === PROCESS_PHASES.length - 1
                  ? 'opacity-30 cursor-not-allowed text-slate-400'
                  : 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40'
              }`}
            >
              Next Step →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
