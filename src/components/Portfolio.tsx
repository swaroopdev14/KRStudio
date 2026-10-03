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
    <section id="work" className="py-20 lg:py-28 relative bg-kr-canvas border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      
      {/* Background Architectural Dot Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-70 pointer-events-none -z-10"></div>

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="kr-badge-pill inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="uppercase tracking-wide">Portfolio & System Demos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Proven products. Real architecture.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore our shipped client software and working studio prototypes. Click any project to inspect the architecture, metrics, and technical deliverables.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as ProjectCategory)}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
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
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 kr-card-shadow hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Thumbnail / Header Composition */}
              <div className={`h-52 w-full bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white`}>
                {/* Background decorative patterns */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                
                {/* Status Badges */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs px-3 py-1 rounded-full font-bold bg-black/35 backdrop-blur-md border border-white/20">
                    {project.categoryLabel}
                  </span>

                  <span className={`text-[11px] px-3 py-1 rounded-full font-bold ${
                    project.type === 'Client Project'
                      ? 'bg-emerald-500/90 text-white'
                      : 'bg-blue-500/90 text-white'
                  } shadow-xs`}>
                    {project.type}
                  </span>
                </div>

                {/* Abstract Visual Representation */}
                <div className="z-10">
                  <div className="text-xl font-bold font-display tracking-tight text-white drop-shadow-xs">
                    {project.title.split('—')[0]}
                  </div>
                  <div className="text-xs text-white/90 font-medium mt-1">
                    {project.tagline}
                  </div>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Scope Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Architecture Scope
                  </div>
                  {project.scope.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Action */}
                <div className="pt-3 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">
                  <span>Inspect Architecture & Specs</span>
                  <span className="p-2 rounded-full bg-blue-50 dark:bg-blue-950/60 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-600 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-3 py-1 rounded-full font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {activeModalProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeModalProject.type}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                {activeModalProject.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {activeModalProject.summary}
              </p>
            </div>

            {/* Interactive Screen Preview */}
            <div className="mb-6 rounded-2xl bg-slate-950 p-4 border border-slate-800 text-white">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800 mb-3 text-slate-400">
                <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live Interactive Simulator
                </span>
                <span>Sub-second Response</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white">{activeModalProject.title.split('—')[0]} Live Instance</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Production Build
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 text-xs font-mono text-slate-300 space-y-1">
                  <div>&gt; Status: 200 OK | TLS 1.3 Certified</div>
                  <div>&gt; Latency: 32ms edge response time</div>
                  <div>&gt; Database: PostgreSQL Row-Level Security Enforced</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {demoActionTriggered ? '✓ Real-time test transaction dispatched' : 'Test system responsiveness:'}
                  </span>
                  <button
                    onClick={() => setDemoActionTriggered(true)}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all active:scale-95"
                  >
                    {demoActionTriggered ? 'Triggered Again' : 'Trigger Dispatch'}
                  </button>
                </div>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-4 mb-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Engineering Highlights & Design Specs
              </div>
              <ul className="space-y-2">
                {activeModalProject.architectureHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Details */}
            <div className="mb-8">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Technology Stack Handed Over
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                100% Repository Transfer & Cloud Handover on Launch
              </div>

              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenLeadModal(`Similar to ${activeModalProject.title}`);
                }}
                className="kr-btn-primary px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <span>Request Similar Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
