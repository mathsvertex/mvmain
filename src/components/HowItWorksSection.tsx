import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, Calendar, Video, FileText, MessageCircle, Award, Sparkles } from "lucide-react";
import { MathGraphic } from "./MathGraphic";

interface HowItWorksProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "Book a Free Demo Class",
      desc: "Pick an available slot matching your child's grade and meet your dedicated mentor live on Zoom—zero credit card or payment details needed.",
      meta: "⏱ 45 minutes · No cost · No card required",
      icon: Calendar,
      detail: "Within minutes of booking, you are welcomed to the batch's WhatsApp group where room links and prep materials are posted."
    },
    {
      step: 2,
      title: "Diagnostic Assessment",
      desc: "A friendly, low-stress diagnostic during the demo shows us exactly which conceptual building blocks need strengthening, rather than just a raw grade.",
      meta: "⏱ Completed during the same 45-minute session",
      icon: Sparkles,
      detail: "We test 4 foundational dimensions: conceptual clarity, pattern discovery, mental calculation speed, and problem decomposition."
    },
    {
      step: 3,
      title: "Personalised Weekly Plan",
      desc: "We map out a milestone roadmap built around your child’s target program (School Maths, IMO, MAT, or ASSET) and current level before you commit.",
      meta: "📄 Shared with you within 24 hours of demo",
      icon: FileText,
      detail: "Clear target milestones for month 1, month 3, and competition season, customized to your child's school board exam timetable."
    },
    {
      step: 4,
      title: "Live Interactive Classes Begin",
      desc: "Batches are strictly capped at 6 students. Every child speaks, solves problems on the live digital whiteboard, and gets immediate mentor intervention.",
      meta: "👥 Batches of 6 · 3 live classes a week",
      icon: Video,
      detail: "Zero passive video watching. Students interact actively, debate alternate proof paths, and gain genuine competition-level confidence."
    },
    {
      step: 5,
      title: "Track Measurable Progress Together",
      desc: "After every weekly timed mock test, parents receive a concise diagnostic note detailing concept accuracy, speed improvements, and focus areas.",
      meta: "📊 A report every week after each mock test",
      icon: Award,
      detail: "You always know whether your child is ready for school finals or Olympiad Level 2, with no guesswork."
    }
  ];

  return (
    <section className="py-20 bg-[#0B0C10] text-white border-b border-[#8A7BFF]/15 relative overflow-hidden" id="how">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8A7BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF7A60]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
              The Roadmap to Peak Performance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              From free demo to first test result
            </h2>
            <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
              Here is exactly what happens once you book a slot—and how our structured weekly cadence turns math anxiety into Olympiad mastery.
            </p>
          </div>
          <div className="lg:col-span-4">
            <MathGraphic type="classroom-session" />
          </div>
        </div>

        {/* 5-Step Vertical / Grid Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-5 space-y-3">
            {steps.map((s) => {
              const Icon = s.icon;
              const isSelected = activeStep === s.step;
              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#121420] border-[#8A7BFF] shadow-[0_0_25px_rgba(138,123,255,0.25)] ring-1 ring-[#8A7BFF]/50"
                      : "bg-[#121420]/60 border-[#8A7BFF]/15 hover:border-[#8A7BFF]/30 hover:bg-[#121420]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm flex-none transition-colors ${
                        isSelected
                          ? "bg-[#8A7BFF] text-[#0B0C10] shadow-md"
                          : "bg-white/10 text-[#B0A8D9]"
                      }`}
                    >
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">
                        {s.title}
                      </h3>
                      <p className="text-xs text-[#B0A8D9] mt-1 line-clamp-2">
                        {s.desc}
                      </p>
                      <div className="mt-2 text-[11px] font-semibold text-[#3AE8C7]">
                        {s.meta}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Deep Dive for Selected Step (Secondary Background #121420) */}
          <div className="lg:col-span-7 bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-8 sm:p-10 shadow-2xl relative">
            {(() => {
              const current = steps.find((s) => s.step === activeStep) || steps[0];
              const Icon = current.icon;
              return (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-6 border-b border-[#8A7BFF]/15">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#8A7BFF]/15 text-[#8A7BFF] border border-[#8A7BFF]/30 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider">
                          Phase 0{current.step}
                        </span>
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {current.title}
                        </h4>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30">
                      Step {current.step} of 5
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-white/95 font-medium leading-relaxed">
                    {current.desc}
                  </p>

                  <div className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/15 space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#8A7BFF]">
                      Deep Dive on Step {current.step}:
                    </div>
                    <p className="text-sm text-[#B0A8D9] leading-relaxed">
                      {current.detail}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#3AE8C7]/10 border border-[#3AE8C7]/25 text-xs sm:text-sm text-[#3AE8C7] font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-none" />
                    <span>{current.meta}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[#B0A8D9]">
                      Ready to experience Step 1?
                    </span>
                    <button
                      onClick={() => onOpenDemo()}
                      className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_4px_16px_rgba(255,122,96,0.35)] transition-all transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Book Free Demo Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Typical Week Grid (Cards in #121420) */}
        <div className="mt-16 pt-12 border-t border-[#8A7BFF]/15">
          <div className="max-w-3xl mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              What a typical week looks like
            </h3>
            <p className="text-sm sm:text-base text-[#B0A8D9] mt-2">
              Three live classes and one timed mock test every single week—with unlimited doubt support in between whenever your child needs a quick hint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121420] p-6 rounded-2xl border border-[#8A7BFF]/20 space-y-2 hover:border-[#8A7BFF]/40 transition-colors">
              <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider">Session 01</span>
              <h4 className="font-display text-lg font-bold text-white">Concept Discovery</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                New concept taught interactively with visual proofs and live problems solved on screen.
              </p>
            </div>

            <div className="bg-[#121420] p-6 rounded-2xl border border-[#8A7BFF]/20 space-y-2 hover:border-[#8A7BFF]/40 transition-colors">
              <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider">Session 02</span>
              <h4 className="font-display text-lg font-bold text-white">Guided Practice</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                Application and variation—mentor observes each student’s approach in real-time.
              </p>
            </div>

            <div className="bg-[#121420] p-6 rounded-2xl border border-[#8A7BFF]/20 space-y-2 hover:border-[#8A7BFF]/40 transition-colors">
              <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider">Session 03</span>
              <h4 className="font-display text-lg font-bold text-white">Competition Drills</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                Non-routine problem solving and exam-pattern traps, building instincts under time.
              </p>
            </div>

            <div className="bg-[#121420] p-6 rounded-2xl border border-[#8A7BFF]/20 space-y-2 hover:border-[#3AE8C7]/50 transition-colors">
              <span className="text-xs font-bold text-[#3AE8C7] uppercase tracking-wider">Weekend Mock</span>
              <h4 className="font-display text-lg font-bold text-white">Weekly Timed Mock</h4>
              <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                Timed test mapped to the real exam pattern, followed by the WhatsApp parent report.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[#121420] border border-[#8A7BFF]/20 flex items-center justify-between flex-wrap gap-4 text-xs sm:text-sm text-[#B0A8D9]">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#3AE8C7]" />
              <span>
                <strong className="text-white">24/7 Doubt Desk:</strong> Mentors are reachable on WhatsApp whenever homework or a practice question gets stuck.
              </span>
            </div>
            <button
              onClick={() => onOpenDemo()}
              className="text-[#FF7A60] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              Check Available Batch Times
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* What's included, always */}
        <div className="mt-16 pt-12 border-t border-[#8A7BFF]/15">
          <h3 className="font-display text-2xl font-bold text-white mb-8">
            What is included, always
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Recorded Classes",
                desc: "Every live session is recorded in HD so nothing is ever missed."
              },
              {
                title: "Parent Reports",
                desc: "A plain-language diagnostic update after every mock test."
              },
              {
                title: "Weekly Mocks",
                desc: "Timed tests modeled after actual Olympiad and school exam patterns."
              },
              {
                title: "On-Demand Doubts",
                desc: "Mentors reachable on WhatsApp between classes for instant hints."
              },
              {
                title: "Certificate",
                desc: "Official completion certificate issued for school portfolio records."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#121420] p-5 rounded-2xl border border-[#8A7BFF]/20 hover:border-[#8A7BFF]/40 transition-all">
                <h4 className="font-bold text-sm text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-[#B0A8D9] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
