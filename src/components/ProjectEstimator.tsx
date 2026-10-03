import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Zap,
  Globe,
  Smartphone,
  LayoutGrid,
  Bot
} from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenLeadModal: (initialProjectType?: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenLeadModal }) => {
  const [selectedType, setSelectedType] = useState<'web' | 'mobile' | 'software' | 'ai'>('web');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'OAuth 2.0 & Role Permissions',
    'PostgreSQL Database & RLS'
  ]);

  const featureOptions = [
    { id: 'auth', label: 'OAuth 2.0 & Role Permissions' },
    { id: 'db', label: 'PostgreSQL Database & RLS' },
    { id: 'billing', label: 'Stripe Billing & Ledgers' },
    { id: 'realtime', label: 'Real-Time Sync / WebSockets' },
    { id: 'ai', label: 'Private AI & Document Search' },
    { id: 'store', label: 'App Store & Play Store Release' },
    { id: 'cloud', label: 'Auto-Scaling Cloud in Your Account' }
  ];

  const toggleFeature = (label: string) => {
    if (selectedFeatures.includes(label)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter(f => f !== label));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, label]);
    }
  };

  const getTimelineEstimate = () => {
    if (selectedFeatures.length <= 3) return '1–2 Days (Rapid MVP Build)';
    if (selectedFeatures.length <= 5) return '2–3 Days (Comprehensive Build)';
    return '3–5 Days (Multi-Platform Suite)';
  };

  const typeConfig = {
    web: {
      name: 'Custom Web Application',
      icon: Globe,
      defaultStack: ['React / Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      baseScope: 'Production web application with server rendering and sub-second edge distribution.'
    },
    mobile: {
      name: 'Native Mobile App',
      icon: Smartphone,
      defaultStack: ['React Native / Expo', 'Kotlin/Swift Bridges', 'SQLite', 'Fastlane'],
      baseScope: 'Single codebase deployed directly to Apple App Store and Google Play Store.'
    },
    software: {
      name: 'Bespoke Business Software',
      icon: LayoutGrid,
      defaultStack: ['PostgreSQL', 'Drizzle ORM', 'Next.js Router', 'Redis Queue'],
      baseScope: 'Internal client management portal and operational workflow engine.'
    },
    ai: {
      name: 'AI System & Document Workflow',
      icon: Bot,
      defaultStack: ['Gemini 1.5 Pro', 'pgvector', 'FastAPI', 'LangChain'],
      baseScope: 'Confidential RAG knowledge engine trained strictly on proprietary client data.'
    }
  };

  const currentType = typeConfig[selectedType];

  return (
    <section id="estimator" className="py-16 sm:py-20 lg:py-28 relative bg-kr-canvas border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      
      {/* Background Architectural Dot Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="kr-badge-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="uppercase tracking-wide">Interactive Project Estimator</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Configure your build. <br className="hidden sm:inline" />
            See instant architecture & timeline.
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Select your desired product type and modular capabilities to review your estimated turnaround and verified handover checklist.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Configuration */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Type */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                1. Select Product Architecture
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {(Object.keys(typeConfig) as Array<keyof typeof typeConfig>).map((typeKey) => {
                  const item = typeConfig[typeKey];
                  const Icon = item.icon;
                  const isSelected = selectedType === typeKey;

                  return (
                    <button
                      key={typeKey}
                      onClick={() => setSelectedType(typeKey)}
                      className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-600 dark:text-blue-400 shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-850/60 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold truncate">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Features */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  2. Select Desired Features
                </div>
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">
                  {selectedFeatures.length} selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.label);

                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.label)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between gap-2 ${
                        isChecked
                          ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500/60 text-blue-700 dark:text-blue-300'
                          : 'bg-slate-50 dark:bg-slate-850/40 border-slate-200/70 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      <span className="truncate">{feat.label}</span>
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Estimate & Handover Summary */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow space-y-5">
            
            <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Live Blueprint Summary
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-display mt-0.5">
                {currentType.name}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {currentType.baseScope}
              </p>
            </div>

            {/* Estimated Turnaround */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">Estimated Timeline</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white font-display">{getTimelineEstimate()}</div>
              </div>
            </div>

            {/* Verified Handover Rights */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                What You Receive Upon Launch:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>100% Private GitHub Repository Transfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Direct Cloud & Domain Setup in YOUR Name</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Zero Ongoing Studio Royalties or Hostage Fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>30 Days of Complimentary Post-Launch Bug Warranty</span>
                </li>
              </ul>
            </div>

            {/* Pre-fill Modal CTA */}
            <button
              onClick={() => onOpenLeadModal(`${currentType.name} (${selectedFeatures.join(', ')})`)}
              className="w-full py-3.5 px-4 rounded-full kr-btn-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-95"
            >
              <span>Submit This Scope for Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
