import React from "react";
import { CoursesSection } from "./CoursesSection";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { MathGraphic } from "./MathGraphic";

export interface CoursesPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <div className="py-6 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Courses & Accelerators" }]}
            onNavigate={onNavigate}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
              Intensive Accelerators
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Dedicated Courses
            </h1>
            <p className="mt-3 text-base text-[#B0A8D9] max-w-3xl leading-relaxed">
              Targeted 12-week intensive masterclasses for parents looking to build rapid mental math speed or close foundational school math gaps.
            </p>
          </div>
          <div className="lg:col-span-4">
            <MathGraphic type="mental-speed" />
          </div>
        </div>
      </div>

      <CoursesSection onOpenDemo={onOpenDemo} onNavigate={onNavigate} />
    </div>
  );
};
