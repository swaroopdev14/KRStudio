import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Layers, 
  Code2, 
  Zap,
  Cpu,
  LayoutGrid,
  Bot
} from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: (initialProjectType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  const [selectedProjectType, setSelectedProjectType] = useState<'web' | 'mobile' | 'software' | 'ai'>('web');

  const projectBlueprints = {
    web: {
      title: 'Custom Web Application',
      category: 'Production Web App',
      tagline: 'High-conversion SaaS & digital customer portals',
      turnaround: '1–2 Day Turnaround',
      stack: ['Next.js 15', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      metrics: { label1: 'Performance', val1: '100/100', label2: 'Response', val2: '< 35ms' },
      previewFeature: 'Server-rendered dashboard with live customer activity feed',
      color: '#2563EB',
    },
    mobile: {
      title: 'Native Mobile App',
      category: 'iOS & Android Suite',
      tagline: 'Cross-platform mobile apps submitted to stores',
      turnaround: '1–2 Day Turnaround',
      stack: ['React Native', 'Expo', 'Push Alerts', 'Offline Sync'],
      metrics: { label1: 'Frame Rate', val1: '60 FPS', label2: 'Bundle Size', val2: '< 32MB' },
      previewFeature: 'Biometric authentication, camera access, and offline data sync',
      color: '#7C3AED',
    },
    software: {
      title: 'Bespoke Business Software',
      category: 'Internal Tools & Portals',
      tagline: 'Custom CRM and dispatch portals replacing $300/mo SaaS',
      turnaround: '1–2 Day Turnaround',
      stack: ['PostgreSQL', 'Drizzle ORM', 'Stripe', 'Docker'],
      metrics: { label1: 'Monthly SaaS Saved', val1: '$0 Rent', label2: 'Data Privacy', val2: '100% RLS' },
      previewFeature: 'Role-based access control with real-time audit logging',
      color: '#10B981',
    },
    ai: {
      title: 'AI Workflow & Search',
      category: 'Intelligent Systems',
      tagline: 'Private RAG document pipelines & automated workflows',
      turnaround: '1–2 Day Turnaround',
      stack: ['Gemini 1.5', 'pgvector', 'FastAPI', 'Workflows'],
      metrics: { label1: 'Query Speed', val1: '< 400ms', label2: 'Confidentiality', val2: 'Zero Retention' },
      previewFeature: 'Private vector search over proprietary PDF manuals and contracts',
      color: '#9333EA',
    },
  };

  const current = projectBlueprints[selectedProjectType];

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-kr-canvas pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 transition-colors duration-200">
      
      {/* Background Architectural Dot Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none -z-10"></div>

      {/* Ambient Blue & Indigo Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none kr-mesh-hero opacity-80 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Value Proposition + Right Interactive Blueprint Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Authentic Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Tag */}
            <div className="kr-badge-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>KR DIGITAL PRODUCT STUDIO</span>
              <span className="text-blue-300 dark:text-blue-700">|</span>
              <span className="font-semibold text-blue-800 dark:text-blue-200">Founders: Swaroop & Krish</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.12]">
              Digital products <br className="hidden sm:inline" />
              built fast,{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                engineered right.
              </span>
            </h1>

            {/* Plain English Subheadline */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              We design and build custom web applications, native mobile apps, business software, and AI systems in rapid 1–2 day turnarounds. Direct engineering with the founders, fixed pricing, and 100% legal ownership of your code, cloud accounts, and domain.
            </p>

            {/* Dual CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenLeadModal()}
                className="kr-btn-primary px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold rounded-full flex items-center justify-center gap-2 active:scale-98 shadow-md"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => scrollToSection('#capabilities')}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 rounded-full shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Capabilities</span>
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </button>
            </div>

            {/* Key Trust Guarantees */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>1–2 Day Rapid Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>You Own Your Domain & Cloud</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Blueprint Composer */}
          <div className="lg:col-span-5 w-full">
            
            <div className="relative rounded-3xl p-4 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-md">
              
              {/* Top Selector Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-display">
                    Interactive Blueprint
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold">
                  {current.turnaround}
                </span>
              </div>

              {/* Project Type Switcher Tabs */}
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-4">
                <button
                  onClick={() => setSelectedProjectType('web')}
                  className={`py-2 px-1 text-center rounded-lg text-[11px] font-bold transition-all ${
                    selectedProjectType === 'web'
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Web
                </button>
                <button
                  onClick={() => setSelectedProjectType('mobile')}
                  className={`py-2 px-1 text-center rounded-lg text-[11px] font-bold transition-all ${
                    selectedProjectType === 'mobile'
                      ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Mobile
                </button>
                <button
                  onClick={() => setSelectedProjectType('software')}
                  className={`py-2 px-1 text-center rounded-lg text-[11px] font-bold transition-all ${
                    selectedProjectType === 'software'
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Software
                </button>
                <button
                  onClick={() => setSelectedProjectType('ai')}
                  className={`py-2 px-1 text-center rounded-lg text-[11px] font-bold transition-all ${
                    selectedProjectType === 'ai'
                      ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  AI
                </button>
              </div>

              {/* Dynamic Blueprint Card Body */}
              <div className="space-y-4">
                
                {/* Title & Tagline */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-slate-400">{current.category}</span>
                    <span className="text-emerald-500 font-bold text-[11px]">✓ Production Ready</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white font-display">
                    {current.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    {current.tagline}
                  </p>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">{current.metrics.label1}</div>
                    <div className="text-base sm:text-lg font-extrabold font-mono text-slate-900 dark:text-white mt-0.5">
                      {current.metrics.val1}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 text-center">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">{current.metrics.label2}</div>
                    <div className="text-base sm:text-lg font-extrabold font-mono text-blue-600 dark:text-blue-400 mt-0.5">
                      {current.metrics.val2}
                    </div>
                  </div>
                </div>

                {/* Architecture Feature Highlight */}
                <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {current.previewFeature}
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {current.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Trigger */}
                <button
                  onClick={() => onOpenLeadModal(current.title)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
                >
                  <span>Build This Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Trust Ribbon */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center sm:text-left">
            
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 kr-card-shadow">
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 font-bold shrink-0 text-sm">
                ⚡
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Direct Engineering</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Talk directly to founders</div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 kr-card-shadow">
              <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-bold shrink-0 text-sm">
                📱
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Web, iOS & Android</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Single responsive codebase</div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 kr-card-shadow">
              <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 font-bold shrink-0 text-sm">
                🛡️
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Fixed Project Scope</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Zero surprise fees</div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 kr-card-shadow">
              <div className="p-2 sm:p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-300 font-bold shrink-0 text-sm">
                📦
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 dark:text-white">100% Asset Ownership</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Domain & Cloud in your name</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
