import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Globe, 
  Smartphone, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles,
  TrendingUp,
  Activity,
  Code2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/studioData.ts';
import { ProjectCategory, ProjectItem } from '../types/index.ts';

interface PortfolioProps {
  onOpenLeadModal: (initialProjectType?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLeadModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [demoActionTriggered, setDemoActionTriggered] = useState<boolean>(false);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'ai', label: 'AI Systems' },
    { key: 'demo', label: 'Demos & Concepts' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === selectedCategory || (selectedCategory === 'demo' && p.type === 'Demo Concept'));

  const handleOpenModal = (project: ProjectItem) => {
    setActiveModalProject(project);
    setDemoActionTriggered(false);
  };

  return (
    <section id="work" className="py-20 lg:py-28 relative transition-colors duration-200">
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-4">
            <Layers className="w-4 h-4 text-blue-500" />
            <span>PORTFOLIO & SYSTEM DEMOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Proven products. Real architecture.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore our shipped client software and working studio prototypes. Click any project to inspect the architecture, metrics, and technical deliverables.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 max-w-xl mx-auto mb-12 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as ProjectCategory)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                selectedCategory === cat.key
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between glow-card"
            >
              {/* Thumbnail / Header Composition */}
              <div className={`h-48 w-full bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white`}>
                {/* Background decorative patterns */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                
                {/* Status Badges */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-black/25 backdrop-blur-md border border-white/20">
                    {project.categoryLabel}
                  </span>

                  <span className={`text-[11px] px-2.5 py-1 rounded-full font-semibold ${
                    project.type === 'Client Project'
                      ? 'bg-emerald-500/90 text-white'
                      : 'bg-purple-500/90 text-white'
                  } shadow-xs`}>
                    {project.type}
                  </span>
                </div>

                {/* Abstract Visual Representation */}
                <div className="z-10">
                  <div className="text-xl font-bold font-display tracking-tight text-white drop-shadow-xs">
                    {project.title.split('—')[0]}
                  </div>
                  <div className="text-xs text-white/85 line-clamp-1 font-medium mt-0.5">
                    {project.tagline}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Deep-Dive Affordance */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>Inspect Architecture & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Deep-Dive Slide-Over Dialog */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 bg-gradient-to-r ${activeModalProject.gradient} text-white flex items-start justify-between relative`}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                    {activeModalProject.categoryLabel}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/30 backdrop-blur-md font-semibold">
                    {activeModalProject.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-black/20 hover:bg-black/40 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
              
              {/* Executive Summary */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeModalProject.summary}
                </p>
              </div>

              {/* Interactive Sandbox Simulator within Modal */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    Live System Telemetry & Benchmark
                  </span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 text-[11px]">
                    Verified Performance
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {activeModalProject.demoDetails.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-center">
                      <div className="text-[11px] text-slate-500">{metric.label}</div>
                      <div className="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Interactive Simulated Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setDemoActionTriggered(true)}
                    className="w-full py-2.5 px-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                    <span>{activeModalProject.demoDetails.sampleAction}</span>
                  </button>
                  {demoActionTriggered && (
                    <div className="mt-2 text-center text-xs text-emerald-600 dark:text-emerald-400 font-mono animate-in fade-in">
                      ✓ Simulated event dispatched successfully: Handled in 24ms with zero schema violations.
                    </div>
                  )}
                </div>
              </div>

              {/* Project Scope & Deliverables */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Architecture Highlights */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Architecture & Engineering Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {activeModalProject.architectureHighlights.map((arch, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <Code2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome if Client Project */}
              {activeModalProject.clientOutcome && (
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-900 dark:text-blue-200">
                  <span className="font-bold">Business Outcome: </span>
                  {activeModalProject.clientOutcome}
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech) => (
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

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Want a custom solution tailored to your exact operational workflow?
              </div>
              <button
                onClick={() => {
                  const title = activeModalProject.title;
                  setActiveModalProject(null);
                  onOpenLeadModal(`Inquiry about ${title}`);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Build Similar Product</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
