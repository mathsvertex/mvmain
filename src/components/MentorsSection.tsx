import React, { useState } from "react";
import { MENTORS, Mentor } from "../data/coachingData";
import { Star, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface MentorsSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const MentorsSection: React.FC<MentorsSectionProps> = ({ onOpenDemo, onNavigate }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const specialties = [
    { id: "all", label: "All Mentors" },
    { id: "olympiad", label: "Olympiad & AMC" },
    { id: "school", label: "School Curriculum" },
    { id: "mat", label: "MAT & Logic" },
    { id: "speed", label: "Speed & Mental Maths" }
  ];

  const filteredMentors = MENTORS.filter((m) => {
    if (selectedSpecialty === "all") return true;
    if (selectedSpecialty === "olympiad") return m.role.includes("Olympiad");
    if (selectedSpecialty === "school") return m.role.includes("School") || m.role.includes("Elevation");
    if (selectedSpecialty === "mat") return m.role.includes("MAT") || m.role.includes("ASSET");
    if (selectedSpecialty === "speed") return m.role.includes("Mental");
    return true;
  });

  return (
    <section className="py-20 bg-[#0B0C10] text-white border-b border-[#8A7BFF]/15 relative overflow-hidden" id="mentors">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8A7BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF7A60]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
            World-Class Faculty
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Who is actually teaching your child
          </h2>
          <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
            No revolving-door tutors or recorded lectures. Every mentor is background-verified, has competed in or coached national-level Olympiads, and takes live small batches of 6.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpecialty(spec.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedSpecialty === spec.id
                  ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_4px_16px_rgba(138,123,255,0.4)] scale-[1.02]"
                  : "bg-[#121420] text-[#B0A8D9] hover:text-white border border-[#8A7BFF]/20"
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* Mentors Grid: Cards in #121420 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-6 sm:p-7 flex flex-col justify-between hover:border-[#8A7BFF]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all group"
            >
              <div>
                {/* Header with avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-13 h-13 rounded-2xl text-white font-display font-bold text-lg flex items-center justify-center shadow-lg border border-[#8A7BFF]/30"
                      style={{ backgroundColor: mentor.color }}
                    >
                      {mentor.initials}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-[#8A7BFF] transition-colors">
                        {mentor.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#8A7BFF]">
                        {mentor.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metadata separator */}
                <div className="text-xs text-[#B0A8D9] mb-3 flex items-center gap-2">
                  <span>{mentor.experience}</span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span>{mentor.studentsTaught}</span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span className="text-[#3AE8C7] font-semibold flex items-center gap-0.5">
                    ★ {mentor.rating}
                  </span>
                </div>

                <p className="text-sm text-[#B0A8D9] leading-relaxed mb-4">
                  {mentor.description}
                </p>

                <div className="text-xs text-white/90 bg-[#0B0C10] p-3.5 rounded-xl border border-[#8A7BFF]/15 space-y-1 mb-5">
                  <div className="font-medium text-[#8A7BFF] text-[11px] uppercase tracking-wider">Credentials &amp; Pedagogy:</div>
                  <div className="font-semibold text-white/95">{mentor.qualifications}</div>
                </div>
              </div>

              {/* Card Footer with Demo CTA & Profile link */}
              <div className="pt-4 border-t border-[#8A7BFF]/15 flex gap-2">
                {onNavigate && (
                  <button
                    onClick={() => onNavigate(`mentor/${mentor.id}`)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                {/* Primary CTA in Coral Gradient */}
                <button
                  onClick={() => onOpenDemo()}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_2px_10px_rgba(255,122,96,0.3)] transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Book Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Row / Why Us */}
        <div className="mt-16 pt-12 border-t border-[#8A7BFF]/15">
          <h3 className="font-display text-2xl font-bold text-white mb-8">
            Why our mentor model works differently
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2 p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 hover:border-[#8A7BFF]/40 transition-all">
              <span className="font-display text-2xl font-extrabold text-[#8A7BFF]">01</span>
              <h4 className="font-semibold text-base text-white">Sat These Exact Exams</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                Many of our mentors are Olympiad alumni themselves, teaching problem-solving instincts rather than just formulas.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 hover:border-[#8A7BFF]/40 transition-all">
              <span className="font-display text-2xl font-extrabold text-[#8A7BFF]">02</span>
              <h4 className="font-semibold text-base text-white">Batches Capped at 6</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                Small enough that a mentor notices exactly which concept your child is stuck on, live on screen.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 hover:border-[#3AE8C7]/40 transition-all">
              <span className="font-display text-2xl font-extrabold text-[#3AE8C7]">03</span>
              <h4 className="font-semibold text-base text-white">Report After Every Test</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                You get more than a score—a short note on which concepts are strong and which need another week.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 hover:border-[#FF7A60]/40 transition-all">
              <span className="font-display text-2xl font-extrabold text-[#FF7A60]">04</span>
              <h4 className="font-semibold text-base text-white">Custom Weekly Plan</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                School maths, Mental Maths, and Olympiads reward different skills. The plan is matched to your child’s goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
