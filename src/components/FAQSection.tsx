import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/studioData.ts';

interface FAQSectionProps {
  onOpenLeadModal: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenLeadModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-kr-section-alt border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="kr-badge-pill inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="uppercase tracking-wide">Transparency & Policies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Frequently answered questions.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers on code ownership, delivery timelines, and direct collaboration with Swaroop & Krish.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white font-display">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
