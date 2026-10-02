import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  Clock, 
  FileText, 
  UserCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { PROCESS_PHASES } from '../data/studioData.ts';

interface ProcessTimelineProps {
  onOpenLeadModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenLeadModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activePhase = PROCESS_PHASES[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors duration-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-4">
            <Compass className="w-4 h-4 text-blue-500" />
            <span>THE 7-PHASE SPRINT SYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            From initial idea to live production.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A transparent, sprint-based engineering lifecycle. You never disappear into a ticket queue—you test live builds every week.
          </p>
        </div>

        {/* 7-Step Interactive Selector Strip */}
        <div className="mb-12 overflow-x-auto pb-4 pt-1">
          <div className="flex items-center min-w-max mx-auto justify-center gap-2 px-2">
            {PROCESS_PHASES.map((phase, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={phase.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-blue-400'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {phase.step}
                  </span>
                  <span>{phase.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Detailed Spotlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden transition-all duration-300">
            
            {/* Top Accent Line */}
            <div 
              className="absolute top-0 inset-x-0 h-1.5 transition-all duration-300"
              style={{ backgroundColor: activePhase.accentColor }}
            ></div>

            {/* Step Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span 
                    className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{ 
                      backgroundColor: `${activePhase.accentColor}18`,
                      color: activePhase.accentColor 
                    }}
                  >
                    Phase {activePhase.step} of 7
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Estimated: {activePhase.timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display mt-2">
                  {activePhase.step}. {activePhase.name} — <span className="font-normal text-slate-500 dark:text-slate-400 text-xl sm:text-2xl">{activePhase.subtitle}</span>
                </h3>
              </div>

              {/* Step Navigation Pill */}
              <div className="flex items-center gap-1 self-start sm:self-auto">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-200 transition-colors"
                >
                  ← Prev
                </button>
                <button
                  disabled={activeStepIndex === PROCESS_PHASES.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_PHASES.length - 1, prev + 1))}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-200 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {activePhase.description}
            </p>

            {/* Two-Column Deliverables & Client Role */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Client Deliverables */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span>Exact Deliverables You Receive</span>
                </div>
                <ul className="space-y-2.5">
                  {activePhase.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What the Client Provides */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-indigo-500" />
                    <span>What We Need From You</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activePhase.clientProvides}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-750 text-[11px] text-slate-500">
                  ⚡ Transparent asynchronous updates via Slack / Loom with zero wasted meetings.
                </div>
              </div>

            </div>

            {/* Bottom Milestone Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Ready to review sprint availability for your product idea?
              </div>
              <button
                onClick={onOpenLeadModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Reserve Sprint Window</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
