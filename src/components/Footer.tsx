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
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0A0F1D] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm font-display shadow-md shadow-blue-500/20">
                KR
              </div>
              <span className="text-xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
                KR STUDIO
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Ultra-premium digital product studio designing and engineering custom web applications, native mobile apps, business software, and AI automation systems.
            </p>

            <div className="pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 space-y-1">
              <div>Principals & Lead Engineers: Swaroop & Krish</div>
              <div>Direct: Direct milestone communication with zero middle management</div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Capabilities
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li><a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')} className="hover:text-blue-600">Web Development</a></li>
              <li><a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')} className="hover:text-blue-600">Mobile Applications</a></li>
              <li><a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')} className="hover:text-blue-600">Business Software</a></li>
              <li><a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')} className="hover:text-blue-600">AI Systems & LLMs</a></li>
              <li><a href="#capabilities" onClick={(e) => handleNavClick(e, '#capabilities')} className="hover:text-blue-600">Payments & Billing</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Studio
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <li><a href="#ownership" onClick={(e) => handleNavClick(e, '#ownership')} className="hover:text-blue-600">100% Asset Ownership</a></li>
              <li><a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:text-blue-600">Portfolio & Demos</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="hover:text-blue-600">7-Step Build Process</a></li>
              <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="hover:text-blue-600">Founders Swaroop & Krish</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-blue-600">Studio FAQs</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Direct Contact
            </div>
            <div className="space-y-3">
              <button
                onClick={onOpenLeadModal}
                className="w-full py-2.5 px-4 rounded-xl kr-btn-primary font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                100% IP Handover · Fixed Scope Projects · Zero Platform Lock-in
              </div>
            </div>
          </div>

        </div>

        {/* Tech Badges Row */}
        <div className="py-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Engineered with modern standards:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} KR Studio. All source code and intellectual property transferred 100% to clients.
          </div>
          <div className="flex items-center gap-2">
            <span>Built by Swaroop & Krish</span>
            <span>·</span>
            <span>Zero Vendor Lock-in</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
