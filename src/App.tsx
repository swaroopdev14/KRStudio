/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { OwnershipSection } from './components/OwnershipSection.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { LeadModal } from './components/LeadModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('kr_studio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Default to clean bright light theme benchmark
      return false;
    }
    return false;
  });

  const [leadModalOpen, setLeadModalOpen] = useState<boolean>(false);
  const [leadInitialType, setLeadInitialType] = useState<string | undefined>(undefined);

  // Sync dark mode class with html document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('kr_studio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('kr_studio_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenLeadModal = (initialType?: string) => {
    setLeadInitialType(initialType);
    setLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setLeadModalOpen(false);
    setLeadInitialType(undefined);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-[#090D16] text-slate-100' : 'bg-[#FAFCFF] text-slate-900'
      }`}
    >
      {/* Navigation Top Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenLeadModal={handleOpenLeadModal} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 02. Hero Section (Roy Digital style benchmark) */}
        <Hero onOpenLeadModal={handleOpenLeadModal} />

        {/* 03. Capabilities Matrix (8 Domain Cards) */}
        <Capabilities onOpenLeadModal={handleOpenLeadModal} />

        {/* 04. Ownership & Trust ("We build it. You own it.") */}
        <OwnershipSection onOpenLeadModal={() => handleOpenLeadModal('Custom Platform Ownership Build')} />

        {/* 05. Portfolio & Demo Library */}
        <Portfolio onOpenLeadModal={handleOpenLeadModal} />

        {/* 06. The Process (7-Step Interactive Sprint Timeline) */}
        <ProcessTimeline onOpenLeadModal={() => handleOpenLeadModal('Sprint Planning Consultation')} />

        {/* 07. Team Section (Truthful Profiles: Swaroop & Krish) */}
        <TeamSection onOpenLeadModal={() => handleOpenLeadModal('Direct Engineering Inquiry')} />

        {/* 08. FAQ (Accordion System) */}
        <FAQSection onOpenLeadModal={() => handleOpenLeadModal('Technical Feasibility Question')} />
      </main>

      {/* 09. Footer */}
      <Footer onOpenLeadModal={() => handleOpenLeadModal('Footer Inquiry')} />

      {/* Interactive Lead Intake Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={handleCloseLeadModal}
        initialProjectType={leadInitialType}
      />
    </div>
  );
}
