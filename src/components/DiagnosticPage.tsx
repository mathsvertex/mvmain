import React from "react";
import { InteractiveDiagnostic } from "./InteractiveDiagnostic";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { MathGraphic } from "./MathGraphic";
import { CheckCircle2, Award, Zap, HelpCircle, ArrowRight } from "lucide-react";

export interface DiagnosticPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const DiagnosticPage: React.FC<DiagnosticPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Live Diagnostic Challenge" }]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Page Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3AE8C7] animate-pulse" />
              Online Skill Assessment
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Interactive Math Diagnostic
            </h1>
            <p className="mt-3 text-base text-[#B0A8D9] max-w-2xl leading-relaxed">
              Experience the exact four-pillar diagnostic framework our mentors use in free 45-minute demo classes. Test your child's problem decomposition, pattern discovery, and mental arithmetic agility.
            </p>
          </div>
          <div className="lg:col-span-4">
            <MathGraphic type="diagnostic-dashboard" />
          </div>
        </div>

        {/* Diagnostic Pillars Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 space-y-2">
            <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider block">Pillar 1</span>
            <h4 className="font-display text-base font-bold text-white">Conceptual Nuance</h4>
            <p className="text-xs text-[#B0A8D9]">Tests whether your child understands "why" a theorem works, not just memorized steps.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 space-y-2">
            <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider block">Pillar 2</span>
            <h4 className="font-display text-base font-bold text-white">Pattern Generalization</h4>
            <p className="text-xs text-[#B0A8D9]">Measures spatial logic, modular sequences, and non-verbal pattern recognition.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 space-y-2">
            <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider block">Pillar 3</span>
            <h4 className="font-display text-base font-bold text-white">Mental Agility</h4>
            <p className="text-xs text-[#B0A8D9]">Checks calculation speed, working memory capacity, and mental arithmetic shortcuts.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 space-y-2">
            <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider block">Pillar 4</span>
            <h4 className="font-display text-base font-bold text-white">Trap Elimination</h4>
            <p className="text-xs text-[#B0A8D9]">Assesses resilience against tempting multiple-choice distractors in ASSET &amp; IMO.</p>
          </div>
        </div>
      </div>

      {/* The Core Interactive Diagnostic Widget */}
      <InteractiveDiagnostic onOpenDemo={onOpenDemo} />

      {/* Post-Diagnostic Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="p-8 rounded-3xl bg-[#121420] border border-[#8A7BFF]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-white">
              Want a comprehensive 1-on-1 diagnostic report?
            </h3>
            <p className="text-sm text-[#B0A8D9]">
              Book a live 45-minute demo. Our lead mentor will assess all 12 mathematical dimensions for your child's specific grade and share a written milestone roadmap on WhatsApp within 24 hours.
            </p>
          </div>

          <button
            onClick={() => onOpenDemo()}
            className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_4px_16px_rgba(255,122,96,0.35)] flex items-center gap-2 cursor-pointer flex-none"
          >
            <span>Book 45-Min Live Diagnostic Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
