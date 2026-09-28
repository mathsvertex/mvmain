import React, { useState } from "react";
import { TESTIMONIALS, Testimonial } from "../data/coachingData";
import { Quote, Star, ArrowRight, ShieldCheck } from "lucide-react";

interface TestimonialsSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenDemo }) => {
  const [filter, setFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Reviews" },
    { id: "olympiad", label: "Math Olympiads" },
    { id: "mat", label: "MAT & Aptitude" },
    { id: "school", label: "School Maths" }
  ];

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filter === "all") return true;
    if (filter === "olympiad") return t.program.includes("Olympiad");
    if (filter === "mat") return t.program.includes("MAT");
    if (filter === "school") return t.program.includes("School") || t.program.includes("ASSET");
    return true;
  });

  return (
    <section className="py-20 bg-[#0B0C10] text-white border-b border-[#8A7BFF]/15 relative overflow-hidden" id="parents">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#8A7BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
              Verified Parent Feedback
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What parents tell us after term one
            </h2>
            <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
              Real outcomes from parents in India, UAE, Singapore and the UK whose children shifted from test anxiety to Olympiad medalists.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_4px_16px_rgba(138,123,255,0.4)]"
                    : "bg-[#121420] text-[#B0A8D9] hover:text-white border border-[#8A7BFF]/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid: Cards in #121420 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#121420] rounded-2xl border border-[#8A7BFF]/20 p-6 flex flex-col justify-between hover:border-[#8A7BFF]/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all group"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A60] text-[#FF7A60]" />
                  ))}
                </div>

                <p className="text-sm text-white/90 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#8A7BFF]/15">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full text-white font-display font-bold text-xs flex items-center justify-center flex-none border border-[#8A7BFF]/30 ${t.avatarBg}`}
                  >
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white group-hover:text-[#8A7BFF] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-[#B0A8D9]">{t.childInfo}</p>
                  </div>
                </div>

                {/* Outcome badge in Neon Green/Cyan #3AE8C7 */}
                <div className="mt-3 text-[11px] text-[#3AE8C7] font-semibold flex items-center gap-1 bg-[#3AE8C7]/10 px-2 py-1 rounded-md border border-[#3AE8C7]/25">
                  <span className="text-[#B0A8D9]">Result:</span>
                  <span>{t.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proof statistics banner in #121420 with numbers in #8A7BFF */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121420] border border-[#8A7BFF]/30 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#8A7BFF] flex-none" />
            <span className="text-xs sm:text-sm font-medium text-white/90">
              <strong className="text-[#8A7BFF] font-bold text-base">98.2%</strong> parent renewal rate across 3 consecutive terms in 2025–2026.
            </span>
          </div>

          <button
            onClick={() => onOpenDemo()}
            className="text-xs sm:text-sm font-semibold text-[#FF7A60] hover:text-[#ff967f] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Experience your child's free demo class</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
