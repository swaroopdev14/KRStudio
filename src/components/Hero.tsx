import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Cpu, 
  CheckCircle2, 
  Play, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  Terminal,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: (initialProjectType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'ai'>('web');
  const [simulatedFilter, setSimulatedFilter] = useState<'all' | 'priority' | 'dispatched'>('all');
  const [mobileScreenStep, setMobileScreenStep] = useState<number>(1);
  const [aiPromptInput, setAiPromptInput] = useState<string>('Review clause 4.2 in Master Services Agreement for liability caps');
  const [aiOutputStatus, setAiOutputStatus] = useState<string>('Analysis complete: $500k aggregate liability ceiling detected with 99.4% confidence.');
  const [isProcessingAi, setIsProcessingAi] = useState<boolean>(false);

  const handleSimulateAi = () => {
    setIsProcessingAi(true);
    setAiOutputStatus('Scanning token embeddings and contractual clauses...');
    setTimeout(() => {
      setIsProcessingAi(false);
      setAiOutputStatus(`Clause parsed: Standard indemnification limitation verified with cross-reference to section 7 (Confidentiality). Zero anomalies.`);
    }, 800);
  };

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
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-18 lg:pb-28 transition-colors duration-200">
      {/* Ambient background mesh gradient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] mesh-gradient-hero dark:mesh-gradient-hero-dark blur-3xl opacity-90"></div>
        <div className="absolute inset-0 bg-dot-pattern dark:bg-dot-pattern-dark opacity-35"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Text Container */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Roy Digital style Badge with soft glowing pill border */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-xs mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="tracking-wide">DIGITAL PRODUCT STUDIO</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal">Idea → Launch → Handover</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.12]">
            Digital products, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              built around your business.
            </span>
          </h1>

          {/* Subheadline in natural, confident US English */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            We design and engineer custom websites, cross-platform mobile apps, business software, and AI automation workflows built for real business growth.
          </p>

          {/* Dual CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => onOpenLeadModal()}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('#work')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Explore Demos & Work</span>
              <Layers className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Trust Value Points Strip (Roy Digital inspiration) */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 w-full flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Code & IP Ownership</span>
            </div>
            <div className="hidden sm:inline text-slate-300 dark:text-slate-700">·</div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Zero Monthly Platform Fees</span>
            </div>
            <div className="hidden sm:inline text-slate-300 dark:text-slate-700">·</div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-500" />
              <span>Direct Cloud Deployment</span>
            </div>
            <div className="hidden sm:inline text-slate-300 dark:text-slate-700">·</div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              <span>US-Timezone Aligned Sprints</span>
            </div>
          </div>
        </div>

        {/* Interactive Visual Anchor: Floating Browser / Device Frame */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-blue-500/20 via-slate-200/50 to-slate-200/20 dark:from-blue-500/30 dark:via-slate-800/40 dark:to-slate-900/20 shadow-2xl backdrop-blur-xl">
            
            {/* Inner Window Chrome */}
            <div className="rounded-xl overflow-hidden bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              
              {/* Window Header with Tab Selectors */}
              <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
                
                {/* Traffic lights + simulated URL */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>krstudio.app/live-sandbox</span>
                  </div>
                </div>

                {/* Interactive Mode Tabs */}
                <div className="flex items-center p-1 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('web')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                      activeTab === 'web'
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Web Platform</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                      activeTab === 'mobile'
                        ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile App</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('ai')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                      activeTab === 'ai'
                        ? 'bg-white dark:bg-slate-900 text-fuchsia-600 dark:text-fuchsia-400 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>AI Engine</span>
                  </button>
                </div>
              </div>

              {/* Window Body: Interactive Preview Content */}
              <div className="p-4 sm:p-6 lg:p-8 min-h-[380px] bg-slate-50/50 dark:bg-slate-900/50">
                
                {/* 1. WEB APP INTERACTIVE SIMULATOR */}
                {activeTab === 'web' && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                            Operations Workspace Demo
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono">
                            Live Sync Active
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mt-1">
                          Zenith Dispatch & Field Portal
                        </h3>
                      </div>

                      {/* Interactive Filter Pills */}
                      <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                        <button
                          onClick={() => setSimulatedFilter('all')}
                          className={`px-3 py-1 rounded font-medium transition-colors ${
                            simulatedFilter === 'all'
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          All Dispatches (4)
                        </button>
                        <button
                          onClick={() => setSimulatedFilter('priority')}
                          className={`px-3 py-1 rounded font-medium transition-colors ${
                            simulatedFilter === 'priority'
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          Priority High (2)
                        </button>
                        <button
                          onClick={() => setSimulatedFilter('dispatched')}
                          className={`px-3 py-1 rounded font-medium transition-colors ${
                            simulatedFilter === 'dispatched'
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          In Transit (1)
                        </button>
                      </div>
                    </div>

                    {/* Metric Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                        <div className="text-xs text-slate-500 dark:text-slate-400">Total Route Orders</div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono mt-1 tabular-nums">1,482</div>
                        <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> +18.4% this week
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                        <div className="text-xs text-slate-500 dark:text-slate-400">API Response Time</div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono mt-1 tabular-nums">34ms</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Edge Cached via CDN</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                        <div className="text-xs text-slate-500 dark:text-slate-400">Database Uptime</div>
                        <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-1 tabular-nums">99.98%</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Multi-AZ PostgreSQL</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                        <div className="text-xs text-slate-500 dark:text-slate-400">SaaS License Cost</div>
                        <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono mt-1 tabular-nums">$0 / mo</div>
                        <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">100% Owned Code</div>
                      </div>
                    </div>

                    {/* Simulated Live Dispatch Queue */}
                    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                      <div className="px-4 py-2.5 bg-slate-100/60 dark:bg-slate-850/60 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <span>DISPATCH TICKET</span>
                        <span>DESTINATION</span>
                        <span>STATUS</span>
                        <span>ACTION</span>
                      </div>
                      <div className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs">
                        {(simulatedFilter === 'all' || simulatedFilter === 'priority') && (
                          <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                            <div className="font-medium text-slate-900 dark:text-white">#DSP-9041 · Medical Supply Hub</div>
                            <div className="text-slate-500">Austin, TX (Downtown)</div>
                            <div>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Priority High
                              </span>
                            </div>
                            <button className="px-2.5 py-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded">
                              View Route
                            </button>
                          </div>
                        )}

                        {(simulatedFilter === 'all' || simulatedFilter === 'dispatched') && (
                          <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                            <div className="font-medium text-slate-900 dark:text-white">#DSP-9038 · Fleet Depot West</div>
                            <div className="text-slate-500">Denver, CO (Tech Center)</div>
                            <div>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> In Transit
                              </span>
                            </div>
                            <button className="px-2.5 py-1 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded">
                              View Route
                            </button>
                          </div>
                        )}

                        {simulatedFilter === 'all' && (
                          <div className="px-4 py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
                            <div className="font-medium text-slate-900 dark:text-white">#DSP-9032 · Logistics Warehouse A</div>
                            <div className="text-slate-500">Seattle, WA (Port Area)</div>
                            <div>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Delivered
                              </span>
                            </div>
                            <button className="px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                              Receipt
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MOBILE APP INTERACTIVE SIMULATOR */}
                {activeTab === 'mobile' && (
                  <div className="max-w-md mx-auto space-y-4 animate-in fade-in duration-200">
                    <div className="text-center pb-2">
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                        Interactive Native Flow Simulator
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        FitPulse Member Booking Flow
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Click through the real 3-step booking sequence built with React Native.
                      </p>
                    </div>

                    {/* Simulated Mobile Mockup Card */}
                    <div className="rounded-2xl p-4 bg-white dark:bg-slate-800 border-2 border-purple-500/30 shadow-lg">
                      {/* Step Indicator */}
                      <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100 dark:border-slate-700">
                        <span>Step {mobileScreenStep} of 3</span>
                        <div className="flex gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${mobileScreenStep >= 1 ? 'bg-purple-600' : 'bg-slate-300'}`}></span>
                          <span className={`w-2 h-2 rounded-full ${mobileScreenStep >= 2 ? 'bg-purple-600' : 'bg-slate-300'}`}></span>
                          <span className={`w-2 h-2 rounded-full ${mobileScreenStep >= 3 ? 'bg-purple-600' : 'bg-slate-300'}`}></span>
                        </div>
                      </div>

                      {/* Screen 1: Select Session */}
                      {mobileScreenStep === 1 && (
                        <div className="py-4 space-y-3">
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            Today's Available Studio Classes
                          </div>
                          <div 
                            onClick={() => setMobileScreenStep(2)}
                            className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 hover:border-purple-400 cursor-pointer transition-all"
                          >
                            <div className="flex justify-between items-center text-xs font-semibold text-purple-700 dark:text-purple-300">
                              <span>HIIT Conditioning & Core</span>
                              <span>09:30 AM EST</span>
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                              Coach Marcus · 4 slots remaining
                            </div>
                          </div>
                          <div 
                            onClick={() => setMobileScreenStep(2)}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-750 border border-slate-200 dark:border-slate-700 hover:border-purple-400 cursor-pointer transition-all"
                          >
                            <div className="flex justify-between items-center text-xs font-semibold text-slate-900 dark:text-white">
                              <span>Olympic Barbell Technique</span>
                              <span>05:00 PM EST</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              Coach Elena · 2 slots remaining
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Screen 2: Confirm & Apple Pay */}
                      {mobileScreenStep === 2 && (
                        <div className="py-4 space-y-3">
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            Confirm Reservation
                          </div>
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-750 text-xs space-y-1">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Selected Class:</span>
                              <span className="font-semibold text-slate-900 dark:text-white">HIIT Conditioning (45 min)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Studio:</span>
                              <span className="text-slate-900 dark:text-white">Downtown Soho Flagship</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Member Credit:</span>
                              <span className="text-emerald-600 font-semibold">1 Credit Applied ($0.00)</span>
                            </div>
                          </div>
                          <button
                            onClick={() => setMobileScreenStep(3)}
                            className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                          >
                            <span>1-Tap Confirm with Biometrics</span>
                            <Zap className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {/* Screen 3: Confirmed & Calendar Sync */}
                      {mobileScreenStep === 3 && (
                        <div className="py-6 text-center space-y-3">
                          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                            <CheckCircle2 className="w-7 h-7" />
                          </div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">
                            Reservation Confirmed!
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                            Synced to your Apple Calendar. Push reminder set for 30 minutes prior.
                          </p>
                          <button
                            onClick={() => setMobileScreenStep(1)}
                            className="px-4 py-1.5 text-xs text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                          >
                            Reset Mobile Demo Flow ↺
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 3. AI PIPELINE INTERACTIVE WORKFLOW */}
                {activeTab === 'ai' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <div>
                        <span className="text-xs font-semibold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-wider">
                          Enterprise Contract Intelligence
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          Cortex Contract RAG Parser
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <Terminal className="w-3.5 h-3.5 text-fuchsia-500" />
                        <span>pgvector · Hybrid BM25 · Gemini 1.5</span>
                      </div>
                    </div>

                    {/* Interactive Input Prompt Bar */}
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                        Test Contract Query:
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-2">
                        <input
                          type="text"
                          value={aiPromptInput}
                          onChange={(e) => setAiPromptInput(e.target.value)}
                          className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:border-fuchsia-500 font-mono"
                        />
                        <button
                          onClick={handleSimulateAi}
                          disabled={isProcessingAi}
                          className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg shrink-0 flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                        >
                          {isProcessingAi ? (
                            <>
                              <RefreshCw className="w-3 h-3 animate-spin" />
                              <span>Analyzing...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3 h-3" />
                              <span>Execute RAG Query</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Output Terminal Box */}
                    <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2 border border-slate-800 shadow-inner">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          PIPELINE_EXECUTION_STABLE
                        </span>
                        <span>Latency: 312ms · Tokens: 420</span>
                      </div>
                      <div className="text-fuchsia-300 font-semibold pt-1">
                        &gt; {aiOutputStatus}
                      </div>
                      <div className="text-slate-400 text-[11px] pt-1">
                        Source Verification: Exhibit B, Paragraph 4.2 (Pg. 19 of MSA_TechCorp_Final.pdf) · Verified with strict JSON schema.
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
