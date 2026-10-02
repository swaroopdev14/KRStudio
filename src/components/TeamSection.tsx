import React from 'react';
import { 
  Users, 
  Code2, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/studioData.ts';

interface TeamSectionProps {
  onOpenLeadModal: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="team" className="py-20 lg:py-28 relative transition-colors duration-200">
      
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-4">
            <Users className="w-4 h-4 text-blue-500" />
            <span>STUDIO PRINCIPALS & LEAD ENGINEERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Direct access to the engineers who write your code.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            No middle managers, outsourced junior handoffs, or markups. You work directly with the technical founders of KR Studio throughout your entire build.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top ambient bar */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${member.gradient}`}></div>

              <div>
                {/* Profile Header */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Initials Avatar */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.gradient} text-white font-bold text-2xl flex items-center justify-center shadow-md font-display shrink-0`}>
                    {member.avatarInitial}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
                      {member.name}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {member.role}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {member.focus}
                    </div>
                  </div>
                </div>

                {/* Truthful Bio */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Core Responsibilities */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Engineering Focus
                  </div>
                  <div className="space-y-2">
                    {member.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Primary Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 max-w-3xl mx-auto rounded-xl p-4 bg-slate-100/70 dark:bg-slate-850/70 border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            Strict engineering guarantee: Swaroop & Krish personally review and approve every commit before staging deployment.
          </span>
        </div>

      </div>
    </section>
  );
};
