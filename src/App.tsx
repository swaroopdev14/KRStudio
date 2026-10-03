import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Capabilities } from './components/Capabilities.tsx';
import { OwnershipSection } from './components/OwnershipSection.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { ProjectEstimator } from './components/ProjectEstimator.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { BottomBanner } from './components/BottomBanner.tsx';
import { LeadModal } from './components/LeadModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('kr_studio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // Default to clean light mode matching reference
    }
    return false;
  });

  const [leadModalOpen, setLeadModalOpen] = useState<boolean>(false);
  const [leadInitialType, setLeadInitialType] = useState<string | undefined>(undefined);

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
        darkMode ? 'bg-[#0A0F1D] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* 01. Sticky Top Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenLeadModal={handleOpenLeadModal} 
      />

      {/* Main Content: KR Studio Authentic Sections */}
      <main>
        {/* 02. Hero with Value Prop & Code-Rendered Zenith Ops Device Showcase */}
        <Hero onOpenLeadModal={handleOpenLeadModal} />

        {/* 03. Full-Stack Capabilities Matrix (8 Domain Cards with Expandable Architecture Specs) */}
        <Capabilities onOpenLeadModal={handleOpenLeadModal} />

        {/* 04. Absolute Asset Ownership & Control ("We Build It. You Own It.") */}
        <OwnershipSection onOpenLeadModal={() => handleOpenLeadModal('100% Code Ownership Build')} />

        {/* 05. Portfolio & Interactive Work Demos (Zenith Ops, Pulse Health, OmniFlow, Apex Ledger) */}
        <Portfolio onOpenLeadModal={handleOpenLeadModal} />

        {/* 06. The 7-Step Build Process (Discovery to 30-Day Support) */}
        <ProcessTimeline onOpenLeadModal={() => handleOpenLeadModal('Project Inquiry')} />

        {/* 07. Interactive Project Scope & Turnaround Estimator */}
        <ProjectEstimator onOpenLeadModal={handleOpenLeadModal} />

        {/* 08. Studio Founders & Lead Engineers (Swaroop & Krish) */}
        <TeamSection onOpenLeadModal={() => handleOpenLeadModal('Direct Engineering Inquiry')} />

        {/* 09. Frequently Answered Questions (Accurate Studio Policies) */}
        <FAQSection onOpenLeadModal={() => handleOpenLeadModal('Technical Question')} />

        {/* 10. High-Impact Bottom Call to Action Banner */}
        <BottomBanner onOpenLeadModal={() => handleOpenLeadModal('Free Product Architecture Call')} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenLeadModal={() => handleOpenLeadModal('Footer Inquiry')} />

      {/* Lead Intake Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={handleCloseLeadModal}
        initialProjectType={leadInitialType}
      />
    </div>
  );
}
