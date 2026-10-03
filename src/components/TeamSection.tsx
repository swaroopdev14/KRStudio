import React from 'react';
import { 
  Users, 
  Code2, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Layers, 
  MessageSquare
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/studioData.ts';

interface TeamSectionProps {
  onOpenLeadModal: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="team" className="py-20 lg:py-28 relative bg-kr-canvas border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      
      {/* Background Architectural Dot Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-70 pointer-events-none -z-10"></div>

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="kr-badge-pill inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="uppercase tracking-wide">Studio Principals & Lead Engineers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Direct access to the engineers who write your code.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            No middle managers, outsourced junior handoffs, or agency markups. You work directly with technical founders Swaroop & Krish throughout your build.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top ambient bar */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${member.gradient}`}></div>

              <div>
                {/* Profile Header */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Initials Avatar */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.gradient} text-white font-extrabold text-2xl flex items-center justify-center shadow-md font-display shrink-0`}>
                    {member.avatarInitial}
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase mt-0.5">
                      {member.role}
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">
                      {member.focus}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Engineering Responsibilities */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Technical Scope
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {member.responsibilities.map((resp, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Tech Stack */}
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Primary Tooling & Environment
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Founder Direct Card Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500 dark:text-slate-400">
                  Direct Engineering Partner
                </span>
                <button
                  onClick={onOpenLeadModal}
                  className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Direct Contact Ribbon (No personal email) */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow text-center text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Project intake currently open:</span>
          <button
            onClick={onOpenLeadModal}
            className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect with Swaroop & Krish</span>
          </button>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span>Response window: Under 24 hours</span>
        </div>

      </div>
    </section>
  );
};
