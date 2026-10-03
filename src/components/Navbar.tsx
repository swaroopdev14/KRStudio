import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, MessageSquare, Terminal } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenLeadModal: (initialProjectType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenLeadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Ownership', href: '#ownership' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full transition-colors duration-200">
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#0A0F1D]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-slate-900 dark:text-white"
            aria-label="KR Studio Home"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm font-display shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              KR
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
                KR STUDIO
              </span>
              <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Digital Product Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="p-2 sm:px-3 sm:py-2 text-slate-700 dark:text-slate-300 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-blue-600" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Direct Consultation / Modal Button */}
            <button
              onClick={() => onOpenLeadModal('Quick Consultation')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Inquiry</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenLeadModal()}
              className="kr-btn-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-full flex items-center gap-1.5 active:scale-95"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-18 bottom-0 bg-white/98 dark:bg-[#0A0F1D]/98 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-2 pt-2">
            <div className="px-3 py-1 mb-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              Studio Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3.5 text-base font-bold text-slate-900 dark:text-slate-100 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-blue-600">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="kr-btn-primary w-full py-3.5 px-4 text-center font-bold text-sm rounded-full flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-1">
              KR Studio · 100% Code Ownership · Direct Founder Engineering
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
