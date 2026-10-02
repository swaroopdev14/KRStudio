import React from 'react';
import { 
  ShieldCheck, 
  Check, 
  X, 
  Globe, 
  Code2, 
  Database, 
  Server, 
  Lock, 
  Unlock,
  Key,
  ArrowRight
} from 'lucide-react';
import { COMPARISON_DATA, OWNERSHIP_PILLARS } from '../data/studioData.ts';

interface OwnershipSectionProps {
  onOpenLeadModal: () => void;
}

export const OwnershipSection: React.FC<OwnershipSectionProps> = ({ onOpenLeadModal }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-500" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-indigo-500" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-500" />;
      case 'Server': return <Server className="w-6 h-6 text-cyan-500" />;
      default: return <Key className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="ownership" className="py-20 lg:py-28 relative bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 transition-colors duration-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>UNCOMPROMISING ASSET CONTROL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            We build it. You own it.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Most digital agencies treat software as a hostage for monthly retainer fees. We operate on a clean product studio model: we engineer your system, and you own 100% of the intellectual property.
          </p>
        </div>

        {/* Editorial Quote Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-500/10 border border-blue-200/80 dark:border-blue-800/80 backdrop-blur-md relative overflow-hidden text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              “Built for your business. Owned entirely by you.”
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              No locked accounts. No code retention clauses. No recurring monthly software tax paid to us. When your product launches, every repository, credential, and database key belongs to your company.
            </p>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
            
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold uppercase tracking-wider">
              <div className="hidden md:block md:col-span-4 p-4 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950">
                Pillar
              </div>
              <div className="md:col-span-4 p-4 bg-red-50/50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Lock className="w-4 h-4" />
                <span>Template Agencies & Closed SaaS</span>
              </div>
              <div className="md:col-span-4 p-4 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Unlock className="w-4 h-4" />
                <span>KR Studio Custom Build</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50/50 dark:hover:bg-slate-850/50 transition-colors">
                  
                  {/* Category Title */}
                  <div className="md:col-span-4 p-4 font-semibold text-slate-900 dark:text-white flex items-center bg-slate-50/30 dark:bg-slate-950/30">
                    {row.feature}
                  </div>

                  {/* Typical Agency / Closed SaaS */}
                  <div className="md:col-span-4 p-4 text-slate-500 dark:text-slate-400 md:border-l border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.closedAgencies}</span>
                  </div>

                  {/* KR Studio Advantage */}
                  <div className="md:col-span-4 p-4 text-slate-900 dark:text-white font-medium md:border-l border-slate-200 dark:border-slate-800 flex items-start gap-2.5 bg-emerald-50/20 dark:bg-emerald-950/10">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{row.krStudio}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 4 Ownership Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {OWNERSHIP_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" />
                <span>Zero Lock-in Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA within Ownership */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenLeadModal}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-xl transition-all shadow-md active:scale-[0.98]"
          >
            <span>Discuss Your Custom Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
