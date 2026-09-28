import React from "react";
import { TestimonialsSection } from "./TestimonialsSection";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface ParentReviewsPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const ParentReviewsPage: React.FC<ParentReviewsPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Parent Reviews & Results" }]}
            onNavigate={onNavigate}
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
          Real Results
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Parent Reviews &amp; Success Stories
        </h1>
        <p className="mt-3 text-base text-[#B0A8D9] max-w-3xl leading-relaxed">
          See why 98% of parents renew with MathsVertex across India, UAE, Singapore, the UK, and the USA.
        </p>
      </div>

      <TestimonialsSection onOpenDemo={onOpenDemo} />
    </div>
  );
};
