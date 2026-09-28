import React, { useState } from "react";
import { PROGRAMS, Program } from "../data/coachingData";
import { ArrowRight, CheckCircle2, Users, Calendar, Sparkles, Filter } from "lucide-react";
import { SegmentedControl } from "./SegmentedControl";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { MathGraphic } from "./MathGraphic";

export interface ProgramsPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [filter, setFilter] = useState<string>("all");

  const filterItems = [
    { id: "all", label: "All Programs", count: PROGRAMS.length },
    { id: "core", label: "Core Tracks (School & Olympiads)", count: 4 },
    { id: "course", label: "Accelerators (Speed & Elevation)", count: 2 },
    { id: "extra", label: "1:1 Mentoring & Workshops", count: 3 }
  ];

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <div className="py-12 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Programs" }]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Header with Visual Trophy Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
              Curriculum &amp; Exam Tracks
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Dedicated Math Programs
            </h1>
            <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
              Every competition and school board requires a distinct problem-solving instinct. Explore each specialized program below, view the complete 16-week curriculum syllabus, or book a free 45-minute live diagnostic demo.
            </p>
          </div>
          <div className="lg:col-span-4">
            <MathGraphic type="olympiad-trophy" />
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="mb-10 overflow-x-auto pb-2">
          <SegmentedControl
            items={filterItems}
            selectedId={filter}
            onChange={(id) => setFilter(id)}
          />
        </div>

        {/* Programs Grid: Cards in #121420 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-7 flex flex-col justify-between hover:border-[#8A7BFF]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-[#8A7BFF] uppercase tracking-wider">
                    {program.tag}
                  </span>
                  <span className="font-medium bg-[#3AE8C7]/10 text-[#3AE8C7] border border-[#3AE8C7]/25 px-2.5 py-0.5 rounded-full text-[11px]">
                    {program.gradeSpan}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#8A7BFF] transition-colors mb-2">
                  {program.title}
                </h3>

                <p className="text-sm text-[#B0A8D9] leading-relaxed mb-6">
                  {program.shortDesc}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3AE8C7] flex-none mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-[#8A7BFF]/15 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#B0A8D9] pb-1">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#8A7BFF]" />
                    {program.batchSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8A7BFF]" />
                    {program.frequency}
                  </span>
                </div>

                {/* Direct View Syllabus Link */}
                <button
                  onClick={() => onNavigate(`program/${program.id}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View 16-Week Syllabus &amp; Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* CTA in Coral Gradient */}
                <button
                  onClick={() => onOpenDemo()}
                  className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_2px_10px_rgba(255,122,96,0.3)] transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Book Free Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
