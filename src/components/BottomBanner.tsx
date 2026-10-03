import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

interface BottomBannerProps {
  onOpenLeadModal: () => void;
}

export const BottomBanner: React.FC<BottomBannerProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="py-16 lg:py-24 bg-kr-canvas transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Voltage Blue & Indigo Gradient Banner */}
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-cyan-400/25 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-400/25 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-blue-100 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Project Intake Open</span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.15]">
              Have a digital product in mind? <br />
              Let’s engineer it right.
            </h2>

            {/* Authentic Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 font-normal max-w-2xl leading-relaxed">
              Direct access to lead engineers Swaroop & Krish. We establish clear architectural specs, fixed project scopes, and hand over 100% of the repository and cloud credentials upon launch.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenLeadModal}
                className="px-8 py-4 rounded-full bg-white text-slate-950 font-extrabold text-sm sm:text-base hover:bg-blue-50 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>

              <button
                onClick={onOpenLeadModal}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Schedule Architecture Call</span>
              </button>
            </div>

            {/* Quiet Trust Notes */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-blue-200 border-t border-white/20 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                <span>100% GitHub Repository Transfer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                <span>No Vendor Lock-in</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300" />
                <span>30-Day Post-Launch Warranty</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
