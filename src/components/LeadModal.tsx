import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Smartphone, 
  Cpu, 
  Zap, 
  LayoutGrid, 
  Copy, 
  Check,
  Clock,
  ArrowRight
} from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectType?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialProjectType }) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Web Application']);
  const [budgetTier, setBudgetTier] = useState<string>('$6,000 – $15,000 (Standard Production Build)');
  const [timeline, setTimeline] = useState<string>('1–2 Days (Rapid MVP Build)');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');
  const [copiedRef, setCopiedRef] = useState<boolean>(false);

  useEffect(() => {
    if (initialProjectType) {
      if (initialProjectType.includes('Web')) setSelectedTypes(['Web Application']);
      else if (initialProjectType.includes('Mobile')) setSelectedTypes(['Mobile App (iOS & Android)']);
      else if (initialProjectType.includes('AI')) setSelectedTypes(['AI Systems & Workflows']);
      else if (initialProjectType.includes('Business')) setSelectedTypes(['Bespoke Business Software']);
      else if (initialProjectType.includes('Automation')) setSelectedTypes(['Workflow Automation']);
      else setDescription(`Inquiry regarding: ${initialProjectType}`);
    }
  }, [initialProjectType]);

  if (!isOpen) return null;

  const projectTypeOptions = [
    { label: 'Web Application', icon: Globe },
    { label: 'Mobile App (iOS & Android)', icon: Smartphone },
    { label: 'AI Systems & Workflows', icon: Cpu },
    { label: 'Bespoke Business Software', icon: LayoutGrid },
    { label: 'Workflow Automation', icon: Zap },
  ];

  const budgetOptions = [
    '$3,000 – $6,000 (Focused MVP Build)',
    '$6,000 – $15,000 (Standard Production Build)',
    '$15,000 – $30,000+ (Multi-Platform / Enterprise)',
    'Advisory / Custom Architecture Scope',
  ];

  const timelineOptions = [
    '1–2 Days (Immediate Priority / Rapid MVP)',
    '1–2 Weeks (Production Build)',
    '2–4 Weeks (Multi-Platform Suite)',
    'Flexible / Planning Phase',
  ];

  const toggleType = (typeLabel: string) => {
    if (selectedTypes.includes(typeLabel)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter((t) => t !== typeLabel));
      }
    } else {
      setSelectedTypes([...selectedTypes, typeLabel]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const code = `KRS-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(referenceCode);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setCompany('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-white/20">
                KR STUDIO INTAKE
              </span>
              <span className="text-xs text-white/80">Direct to Swaroop & Krish</span>
            </div>
            <h3 className="text-xl font-bold font-display mt-1">
              Start Your Project
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Project Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  What are you looking to build? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projectTypeOptions.map((type) => {
                    const isSelected = selectedTypes.includes(type.label);
                    const IconComponent = type.icon;
                    return (
                      <button
                        key={type.label}
                        type="button"
                        onClick={() => toggleType(type.label)}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2.5 transition-all text-left ${
                          isSelected
                            ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-700 dark:text-blue-300 shadow-xs'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                        }`}
                      >
                        <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                        <span className="flex-1">{type.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Estimated Budget Target
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Target Launch Window
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  >
                    {timelineOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Project Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Brief Overview of Your Idea or Operations
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. We need a custom client portal for our consulting firm with Stripe billing and PDF invoice automation. Currently using spreadsheets."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500"
                ></textarea>
              </div>

              {/* 4. Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Mercer"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Company / Website
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Reassurance Banner */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  100% confidentiality guaranteed. We review technical architecture and reply within 24 hours.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Evaluating Scope & Dispatching...</span>
                ) : (
                  <>
                    <span>Submit Project Scope for Review</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          ) : (
            /* Confirmation Screen */
            <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Project Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-2">
                  Thank you, <span className="font-semibold">{fullName}</span>. Krish and Swaroop have received your scope details and will review technical requirements within 24 hours.
                </p>
              </div>

              {/* Reference Box */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-500">Inquiry Reference Code:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{referenceCode}</span>
                    <button
                      onClick={handleCopyRef}
                      className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-500"
                      title="Copy reference code"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Product:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{selectedTypes.join(', ')}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Target Launch:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{timeline}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Direct Contact:</span>
                  <span className="font-medium text-slate-900 dark:text-white">{email}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs hover:opacity-90 transition-opacity"
                >
                  Done & Return to Studio
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
