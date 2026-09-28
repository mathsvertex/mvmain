import React, { useState } from "react";
import { MENTORS, Mentor } from "../data/coachingData";
import { ArrowRight, Star, ShieldCheck, Award, BookOpen } from "lucide-react";
import { SegmentedControl } from "./SegmentedControl";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface MentorsPageProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const MentorsPage: React.FC<MentorsPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  const filterItems = [
    { id: "all", label: "All Faculty", count: MENTORS.length },
    { id: "olympiad", label: "Olympiad & IMO", count: 1 },
    { id: "school", label: "School Curriculum", count: 2 },
    { id: "mat", label: "MAT & ASSET", count: 2 },
    { id: "speed", label: "Speed & Mental Maths", count: 1 }
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
    <div className="py-12 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[{ label: "Mentors" }]}
            onNavigate={onNavigate}
          />
        </div>

        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
            The MathsVertex Mentorship Desk
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Faculty &amp; Academic Leads
          </h1>
          <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
            Every MathsVertex mentor is background-verified, has competed in or prepared students for national and international Olympiads, and leads live batches strictly capped at 6 students.
          </p>
        </div>

        <div className="mb-10 overflow-x-auto pb-2">
          <SegmentedControl
            items={filterItems}
            selectedId={selectedSpecialty}
            onChange={(id) => setSelectedSpecialty(id)}
          />
        </div>

        {/* Mentors Grid: Cards in #121420 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-7 flex flex-col justify-between hover:border-[#8A7BFF]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-2xl text-white font-display font-bold text-xl flex items-center justify-center shadow-lg border border-[#8A7BFF]/30"
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

                <div className="text-xs text-white/95 bg-[#0B0C10] p-3.5 rounded-2xl border border-[#8A7BFF]/15 space-y-1 mb-5">
                  <div className="font-medium text-[#8A7BFF] text-[11px] uppercase tracking-wider">Credentials &amp; Pedagogy:</div>
                  <div className="font-semibold text-white/95">{mentor.qualifications}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#8A7BFF]/15 space-y-2">
                <button
                  onClick={() => onNavigate(`mentor/${mentor.id}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Full Mentor Profile &amp; Pedagogy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDemo()}
                  className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_2px_10px_rgba(255,122,96,0.3)] transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  Request Demo With {mentor.name.split(" ")[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
