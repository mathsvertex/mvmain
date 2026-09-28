import React, { useState } from "react";
import { PROGRAMS, Program } from "../data/coachingData";
import { ArrowRight, CheckCircle2, Users, Calendar, Award } from "lucide-react";

interface ProgramsSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenDemo, onNavigate }) => {
  const [filter, setFilter] = useState<"all" | "core" | "course" | "extra">("all");

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section className="py-20 bg-[#0B0C10] text-white relative overflow-hidden" id="programs">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8A7BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF7A60]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
            Targeted Learning Tracks
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Programs designed for the exact exam your child is sitting
          </h2>
          <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
            Mental Maths is not treated as an isolated drill here—every mentor weaves speed calculations and logical shortcuts directly into the student’s weekly school or Olympiad syllabus.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: "All Offerings" },
            { id: "core", label: "Core Programs (School & Olympiads)" },
            { id: "course", label: "Dedicated Courses (Speed & Remediation)" },
            { id: "extra", label: "1:1 Mentoring, Bootcamps & Workshops" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_4px_16px_rgba(138,123,255,0.4)] scale-[1.02]"
                  : "bg-[#121420] text-[#B0A8D9] hover:text-white border border-[#8A7BFF]/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid: Cards in Secondary Background (#121420) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-6 sm:p-7 flex flex-col justify-between hover:border-[#8A7BFF]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all group relative"
            >
              <div>
                {/* Clean metadata */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-[#8A7BFF] uppercase tracking-wider">
                    {program.tag}
                  </span>
                  <span className="text-[#3AE8C7] bg-[#3AE8C7]/10 px-2.5 py-0.5 rounded-full border border-[#3AE8C7]/25 font-semibold text-[11px]">
                    {program.gradeSpan}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#8A7BFF] transition-colors mb-2">
                  {program.title}
                </h3>

                <p className="text-sm text-[#B0A8D9] leading-relaxed mb-5">
                  {program.shortDesc}
                </p>

                {/* Highlights List with Cyan checkmarks */}
                <div className="space-y-2 mb-6">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3AE8C7] flex-none" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Meta & CTA */}
              <div className="pt-4 border-t border-[#8A7BFF]/15 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#B0A8D9]">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#8A7BFF]" />
                    {program.batchSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8A7BFF]" />
                    {program.frequency}
                  </span>
                </div>

                <div className="flex gap-2">
                  {onNavigate && (
                    <button
                      onClick={() => onNavigate(`program/${program.id}`)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {/* Primary CTA: Coral/Light Orange Gradient */}
                  <button
                    onClick={() => onOpenDemo()}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_2px_12px_rgba(255,122,96,0.3)] transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Book Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
