import React from "react";
import { MENTORS } from "../data/coachingData";
import { ArrowRight, Star, Award, BookOpen, CheckCircle2 } from "lucide-react";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";

export interface MentorDetailPageProps {
  mentorId: string;
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

export const MentorDetailPage: React.FC<MentorDetailPageProps> = ({
  mentorId,
  onOpenDemo,
  onNavigate
}) => {
  const mentor = MENTORS.find((m) => m.id === mentorId) || MENTORS[2]; // Defaults to Mohd Hasib Alam

  return (
    <div className="py-12 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <BreadcrumbNavigation
            items={[
              { label: "Mentors", route: "mentors" },
              { label: mentor.name }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Mentor Profile Hero in #121420 */}
        <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-8 sm:p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex flex-col items-center text-center">
              <div
                className="w-28 h-28 rounded-3xl text-white font-display font-bold text-3xl flex items-center justify-center shadow-lg border border-[#8A7BFF]/30 mb-4"
                style={{ backgroundColor: mentor.color }}
              >
                {mentor.initials}
              </div>
              <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30">
                ✓ Verified Mentor
              </span>
            </div>

            <div className="md:col-span-9 space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider">
                  {mentor.role}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">
                  {mentor.name}
                </h1>
                <p className="text-sm font-medium text-[#B0A8D9] mt-1">
                  Specialty: {mentor.specialty}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#B0A8D9]">
                <span className="flex items-center gap-1 text-[#3AE8C7] font-semibold">
                  ★ {mentor.rating} Parent Rating
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span>{mentor.experience}</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span>{mentor.studentsTaught}</span>
              </div>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {mentor.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenDemo()}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_4px_16px_rgba(255,122,96,0.35)] transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Demo with {mentor.name.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Credentials & Teaching Method in #121420 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl space-y-4">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#8A7BFF]" />
              Academic Pedigree &amp; Certifications
            </h2>
            <p className="text-sm text-[#B0A8D9] leading-relaxed">
              {mentor.qualifications}
            </p>
            <div className="space-y-2 pt-2 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3AE8C7] flex-none" />
                <span>Extensive training in inquiry-based mathematical pedagogy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3AE8C7] flex-none" />
                <span>Specialist in de-escalating student test anxiety and building problem intuition</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3AE8C7] flex-none" />
                <span>Weekly direct WhatsApp feedback loop with parents</span>
              </div>
            </div>
          </div>

          <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl space-y-4">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#8A7BFF]" />
              Batch Philosophy
            </h2>
            <p className="text-sm text-[#B0A8D9] leading-relaxed">
              "In a large classroom of 30, a quiet student who misses a single step in a proof gets left behind. In our capped batch of 6, every student speaks, every error is analyzed live on screen without judgment, and math becomes an exciting puzzle."
            </p>
            <div className="pt-2 text-xs font-semibold text-[#8A7BFF]">
              — {mentor.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
