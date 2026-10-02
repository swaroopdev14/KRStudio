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
import { CapabilityItem } from '../types/index.ts';

interface CapabilitiesProps {
  onOpenLeadModal: (initialProjectType?: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenLeadModal }) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

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

  return (
    <section id="capabilities" className="py-20 lg:py-28 relative transition-colors duration-200">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-4">
            <span>ENGINEERING CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Specialized engineering for every layer of your business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We don't do half-baked templates. Each domain is built using modern, production-grade stacks with clear architecture handoffs.
          </p>
        </div>

        {/* 8 Distinct Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES_DATA.map((item) => {
            const isExpanded = expandedCardId === item.id;
            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 bg-white/90 dark:bg-slate-900/90 border ${item.accentColors.border} ${item.accentColors.darkBorder} shadow-sm hover:shadow-lg relative overflow-hidden backdrop-blur-md glow-card`}
              >
                {/* Ambient Card Top Glow */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.accentColors.glow}`}></div>

                <div>
                  {/* Card Header: Number + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">
                      {item.number}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 ${item.accentColors.text}`}>
                      {getIcon(item.iconName, 'w-5 h-5')}
                    </div>
                  </div>

                  {/* Title & Color Theme Indicator */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    {item.title}
                  </h3>

                  {/* Simple US English Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.simpleDescription}
                  </p>

                  {/* 3 Key Points */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    {item.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progressive Disclosure: Expandable Architecture Drawer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors group"
                  >
                    <span>{isExpanded ? 'Hide Architecture Specs' : 'Explore Architecture & Details'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    )}
                  </button>

                  {/* Expanded Technical Specs Details */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3 text-xs animate-in fade-in duration-200">
                      
                      {/* Tech Stack Badges */}
                      <div>
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                          Core Stack
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.techSpecs.coreStack.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Architecture Summary */}
                      <div>
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                          Architecture
                        </div>
                        <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.techSpecs.architectureSummary}
                        </p>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                          What You Receive
                        </div>
                        <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                          {item.techSpecs.deliverables.map((deliv, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Security / Performance */}
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">Standard: </span>
                        {item.techSpecs.securityPerformance}
                      </div>

                      {/* Direct CTA */}
                      <button
                        onClick={() => onOpenLeadModal(item.title)}
                        className="w-full mt-2 py-2 px-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                      >
                        <span>Build {item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
