import React from "react";
import { FaqSection } from "./FaqSection";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface FaqPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <BreadcrumbNavigation
            items={[{ label: "Frequently Asked Questions" }]}
            onNavigate={onNavigate}
          />
        </div>

        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
            Knowledge Base
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
            Everything you need to know about our batch ratios, recording policies, curriculum alignment, and trial sessions.
          </p>
        </div>
      </div>

      <FaqSection onOpenDemo={onOpenDemo} />
    </div>
  );
};
