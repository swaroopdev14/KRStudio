import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  LayoutGrid, 
  Sparkles, 
  Zap, 
  CreditCard, 
  Cloud, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ArrowRight,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';
import { CAPABILITIES_DATA } from '../data/studioData.ts';

interface CapabilitiesProps {
  onOpenLeadModal: (initialProjectType?: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenLeadModal }) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'apps' | 'tools' | 'ai'>('all');

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'LayoutGrid': return <LayoutGrid className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'Cloud': return <Cloud className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      default: return <Layers className={className} />;
    }
  };

  const filteredData = CAPABILITIES_DATA.filter((item) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'apps') return item.id === 'web-development' || item.id === 'mobile-applications';
    if (filterCategory === 'tools') return item.id === 'business-software' || item.id === 'payments-billing';
    if (filterCategory === 'ai') return item.id === 'ai-systems' || item.id === 'workflow-automation' || item.id === 'cloud-infrastructure' || item.id === 'security-conscious-dev';
    return true;
  });

  return (
    <section id="capabilities" className="py-16 sm:py-20 lg:py-28 relative bg-kr-canvas transition-colors duration-200 border-t border-slate-200/70 dark:border-slate-800/70">
      
      {/* Background Architectural Dot Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="kr-badge-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3.5 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="tracking-wide uppercase">Core Engineering Domains</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Tailored digital products. <br className="hidden sm:inline" />
            Built for rapid launch.
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Click any domain to inspect features, deliverables, and architecture specs. Clean code, modern TypeScript, and 100% intellectual property handover.
          </p>
        </div>

        {/* Quick Filter Pill Tabs (Makes mobile browsing 10x faster & cleaner!) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filterCategory === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            All Domains (8)
          </button>
          <button
            onClick={() => setFilterCategory('apps')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filterCategory === 'apps'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            Web & Mobile
          </button>
          <button
            onClick={() => setFilterCategory('tools')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filterCategory === 'tools'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            Business & Billing
          </button>
          <button
            onClick={() => setFilterCategory('ai')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filterCategory === 'ai'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            AI & Cloud Systems
          </button>
        </div>

        {/* Compact, Ergonomic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredData.map((item) => {
            const isExpanded = expandedCardId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow hover:shadow-xl ${
                  isExpanded ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div>
                  {/* Top Bar: Clean Number Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                      {item.number}
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accentColors.primary }}></span>
                  </div>

                  {/* Icon Box with Domain-Specific Glow */}
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md transition-transform"
                    style={{
                      background: `linear-gradient(135deg, ${item.accentColors.primary}, ${item.accentColors.secondary})`,
                      boxShadow: `0 6px 16px -3px ${item.accentColors.primary}35`
                    }}
                  >
                    {getIcon(item.iconName, 'w-5 h-5')}
                  </div>

                  {/* Domain Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display mb-2">
                    {item.title}
                  </h3>

                  {/* Plain-English Punchy Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.simpleDescription}
                  </p>
                </div>

                <div>
                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/70 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between transition-colors mb-2.5"
                    aria-expanded={isExpanded}
                  >
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{isExpanded ? 'Hide Specs' : 'View Specs & Deliverables'}</span>
                    </span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Smooth Expandable Drawer */}
                  {isExpanded && (
                    <div className="pt-3 pb-2 border-t border-slate-100 dark:border-slate-800 space-y-3 text-left animate-in fade-in duration-200">
                      {/* Highlights */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Highlights
                        </div>
                        <ul className="space-y-1.5">
                          {item.keyPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                              <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Core Tech Stack */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Stack
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.techSpecs.coreStack.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Deliverables
                        </div>
                        <ul className="space-y-1">
                          {item.techSpecs.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="text-[10px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Start Project Action */}
                  <button
                    onClick={() => onOpenLeadModal(item.title)}
                    className="w-full py-2.5 px-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
