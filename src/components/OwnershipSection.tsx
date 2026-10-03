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
      case 'Globe': return <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Server': return <Server className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      default: return <Key className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="ownership" className="py-20 lg:py-28 relative bg-kr-section-alt border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="kr-badge-pill inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="uppercase tracking-wide">Uncompromising Asset Control</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            We build it. You own it.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Traditional agencies treat code as a hostage for recurring retainer fees. We operate on a clean product studio model: we build your system, and you own 100% of the intellectual property.
          </p>
        </div>

        {/* Editorial Quote Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-3xl p-8 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow backdrop-blur-md relative overflow-hidden text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              “Built for your business. Owned entirely by you.”
            </div>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              No locked accounts. No code retention clauses. No recurring monthly software tax paid to us. When your product launches, every repository, credential, and database key belongs to your company.
            </p>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl mb-16">
          <div className="p-5 sm:p-6 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
            <div className="font-display font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
              Asset Control Comparison
            </div>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
              100% Transparency
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200/80 dark:border-slate-800 text-slate-400 dark:text-slate-500 uppercase text-[11px] font-bold">
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5">Traditional Agencies / Closed SaaS</th>
                  <th className="p-4 sm:p-5 text-blue-600 dark:text-blue-400 font-extrabold bg-blue-50/50 dark:bg-blue-950/20">
                    KR Studio Custom Build
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500 dark:text-slate-400 flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.closedAgencies}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 dark:text-slate-100 font-semibold bg-blue-50/30 dark:bg-blue-950/10">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.krStudio}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Pillars of Absolute Ownership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {OWNERSHIP_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/50 flex items-center justify-center mb-4">
                {getPillarIcon(pillar.iconName)}
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Launch Day Handover Protocol Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl p-5 sm:p-6 bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-display">
                Official Launch Day Handover Protocol
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-semibold">
              Zero Hostage Fees Guaranteed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-bold text-blue-400 font-mono mb-1">01. Source Code</div>
              <div className="text-slate-300 text-[11px]">Private GitHub transfer with full commit history & push rights.</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-bold text-indigo-400 font-mono mb-1">02. Cloud Infrastructure</div>
              <div className="text-slate-300 text-[11px]">Direct deployment inside your own AWS, GCP, or Vercel accounts.</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-bold text-emerald-400 font-mono mb-1">03. Domain & DNS</div>
              <div className="text-slate-300 text-[11px]">Configured on your registrar. You pay regular renewal rates directly.</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="font-bold text-cyan-400 font-mono mb-1">04. Documentation</div>
              <div className="text-slate-300 text-[11px]">Video architecture walkthrough + 30-day bug warranty included.</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenLeadModal}
            className="kr-btn-primary px-8 py-4 rounded-full font-bold text-sm sm:text-base inline-flex items-center gap-2 active:scale-95"
          >
            <span>Start a Project with 100% Asset Ownership</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
