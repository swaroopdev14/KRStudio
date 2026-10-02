import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

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
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-200">
      {/* Backdrop glassmorphism container */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Brand Logo Zone */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-slate-900 dark:text-white transition-opacity hover:opacity-90"
            aria-label="KR Studio Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all">
              <span className="font-bold text-sm tracking-tight font-display">KR</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border-2 border-white dark:border-slate-950"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight font-display flex items-center gap-1.5">
                KR Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Switcher + Primary CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="p-2 sm:px-2.5 sm:py-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-xl bg-slate-100/80 dark:bg-slate-900/80 hover:bg-slate-200/70 dark:hover:bg-slate-800/80 border border-slate-200/70 dark:border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenLeadModal()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Over Menu (360px - 430px optimized) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-18 bottom-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl z-40 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-2 pt-2">
            <div className="px-3 py-1 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Studio Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3.5 text-base font-medium text-slate-800 dark:text-slate-100 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 active:bg-blue-50 dark:active:bg-blue-950/30 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-slate-400">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full py-3.5 px-4 text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2">
              KR Studio · Full code ownership & zero platform lock-in
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
