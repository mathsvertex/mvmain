import React, { useState } from "react";
import { FAQS, FaqItem } from "../data/coachingData";
import { ChevronDown, Search, HelpCircle, MessageSquare } from "lucide-react";

interface FaqSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDemo }) => {
  const [openIds, setOpenIds] = useState<string[]>(["q1"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-[#0B0C10] text-white relative overflow-hidden" id="faq">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-[#8A7BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
            Clear Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Questions parents usually ask
          </h2>
          <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
            Have a question about our batch ratios, timetable, or the free demo? We have answered the most common ones here.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-[#B0A8D9]/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. demo, recording, syllabus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#8A7BFF]/25 bg-[#121420] text-sm text-white placeholder-[#B0A8D9]/40 focus:outline-none focus:ring-2 focus:ring-[#8A7BFF]/30 focus:border-[#8A7BFF] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "demo", label: "Demo Class" },
              { id: "classes", label: "Live Batches" },
              { id: "curriculum", label: "Syllabus & Boards" },
              { id: "results", label: "Reports & Tracking" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_4px_16px_rgba(138,123,255,0.4)]"
                    : "bg-[#121420] text-[#B0A8D9] hover:text-white border border-[#8A7BFF]/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list in #121420 */}
        <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 divide-y divide-[#8A7BFF]/15 overflow-hidden shadow-xl">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#B0A8D9]">
              No questions found matching "{searchQuery}". You can ask us directly via WhatsApp!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} className="transition-colors">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#181B2B] focus:outline-none transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-[#8A7BFF]/15 text-[#8A7BFF] flex items-center justify-center flex-none transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#8A7BFF] text-[#0B0C10]" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#B0A8D9] leading-relaxed animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 text-center text-xs text-[#B0A8D9]">
          Have a specific board or tournament question?{" "}
          <a
            href="https://wa.me/918858079444?text=Hi%20MathsVertex,%20I%20have%20a%20question%20about%20your%20coaching%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF7A60] font-semibold hover:underline"
          >
            Chat with our academic counselor on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
