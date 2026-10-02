import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenLeadModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal }) => {
  const techBadges = [
    'Next.js 15',
    'React Native',
    'TypeScript',
    'Tailwind CSS',
    'PostgreSQL',
    'Gemini AI',
    'Cloudflare',
    'Stripe Billing',
    'Docker',
    'Redis'
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
      
      {/* Top Banner inside Footer: Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          
          <div className="max-w-xl text-center lg:text-left z-10">
            <span className="inline-block text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 mb-3 backdrop-blur-md">
              START YOUR 2026 SPRINT
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
              Have a digital product ready to design and engineer?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/90">
              We translate your business objectives into production-ready web and mobile platforms with 100% code ownership.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full sm:w-auto">
            <button
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          {/* Abstract background gradient circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs flex items-center justify-center shadow-md font-display">
                KR
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white font-display">
                KR Studio
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Ultra-premium digital product studio designing and engineering custom web applications, mobile apps, business software, and AI automation workflows.
            </p>

            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>US Timezone Aligned Collaboration (EST & PST friendly)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Client Code & IP Ownership Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="#capabilities" 
                  onClick={(e) => handleNavClick(e, '#capabilities')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Capabilities Matrix
                </a>
              </li>
              <li>
                <a 
                  href="#ownership" 
                  onClick={(e) => handleNavClick(e, '#ownership')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Code Ownership
                </a>
              </li>
              <li>
                <a 
                  href="#work" 
                  onClick={(e) => handleNavClick(e, '#work')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Portfolio & Demos
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  7-Phase Process
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => handleNavClick(e, '#team')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Swaroop & Krish
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Core Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>Web Platforms (Next.js)</li>
              <li>Mobile Apps (React Native)</li>
              <li>Business Portals & ERP</li>
              <li>Custom AI RAG Pipelines</li>
              <li>Automated Invoicing & Stripe</li>
              <li>Cloud Architecture (AWS / GCP)</li>
            </ul>
          </div>

          {/* Direct Contact & Studio Link */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href="mailto:swaroopdev14@gmail.com"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>swaroopdev14@gmail.com</span>
              </a>

              <button
                onClick={onOpenLeadModal}
                className="w-full mt-2 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
                <span>Schedule Feasibility Call</span>
              </button>
            </div>
          </div>

        </div>

        {/* Tech Stack Badges Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center sm:text-left">
            Production Technology Stack
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} KR Studio. All rights reserved. Clean architecture. 100% client code ownership.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Privacy & Data Security</span>
            <span>·</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Zero-Lockin Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
