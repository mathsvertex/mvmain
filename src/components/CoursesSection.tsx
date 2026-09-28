import React from "react";
import { ArrowRight, Zap, Target, CheckCircle2, Star, BookOpen } from "lucide-react";
import { MentalMathVisualizer } from "./MentalMathVisualizer";

interface CoursesSectionProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenDemo, onNavigate }) => {
  return (
    <section className="py-20 bg-[#0B0C10] text-white border-y border-[#8A7BFF]/15 relative overflow-hidden" id="courses">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#8A7BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF7A60]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3AE8C7]" />
            Specialized Math Accelerators
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Dedicated courses for parents targeting a single decisive outcome
          </h2>
          <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
            Beyond our continuous exam tracks, these two intensive courses address the two most common math parent requests: rapid calculation speed and closing deep prerequisite gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course 1: Mental Maths Program (Card in #121420) */}
          <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#8A7BFF]/50 transition-all">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider">
                <Zap className="w-4 h-4 text-[#8A7BFF]" />
                <span>Speed, Accuracy &amp; Working Memory · Class 2–8</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Mental Maths Mastery Course
              </h3>

              {/* Interactive Mental Math Visualizer */}
              <div className="my-3">
                <MentalMathVisualizer />
              </div>

              <p className="text-sm sm:text-base text-[#B0A8D9] leading-relaxed">
                A dedicated course in mental arithmetic and visualization techniques. For parents who want mental math as its own rigorous focus—not just a casual add-on. Small batches of 6 with weekly timed lightning circuits.
              </p>

              {/* What is covered */}
              <div className="pt-2 space-y-2.5">
                {[
                  "Left-to-right lightning addition & subtraction",
                  "Vedic base multiplication (e.g. 96 × 97 in 4 seconds)",
                  "Fractions, decimals & percentages mental conversions",
                  "Eliminating scratch paper dependency and calculation anxiety"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#3AE8C7] flex-none mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome pill */}
              <div className="pt-3 text-xs text-[#B0A8D9] flex items-center gap-3">
                <span className="font-semibold text-white">Batch Ratio:</span> <span className="text-[#8A7BFF] font-bold">1:6</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="font-semibold text-white">Pace:</span> 2 classes / week
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="font-semibold text-white">Duration:</span> 12 weeks
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#8A7BFF]/15 space-y-3">
              {onNavigate && (
                <button
                  onClick={() => onNavigate("program/mental-maths")}
                  className="w-full py-3 px-6 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Full 12-Week Syllabus &amp; Visual Techniques</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_4px_16px_rgba(255,122,96,0.35)] transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free Mental Maths Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Course 2: Grade Elevation Program (Card in #121420) */}
          <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#FF7A60]/50 transition-all">
            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF7A60] uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#FF7A60]" />
                <span>Foundational Diagnostic &amp; Remediation · Class 4–10</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Grade Elevation Program
              </h3>

              {/* Visual 2-Grade Lift Trajectory in #0B0C10 */}
              <div className="my-2 bg-[#0B0C10] rounded-2xl border border-[#8A7BFF]/20 p-4 text-white">
                <div className="flex items-center justify-between text-xs text-white/90 font-semibold mb-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3AE8C7] animate-pulse" />
                    Prerequisite Gap Recovery Trajectory
                  </span>
                  <span className="text-[#3AE8C7] font-mono font-bold">+20–30% Lift</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-[#121420] rounded-xl border border-[#8A7BFF]/15 text-xs">
                  <div className="text-center">
                    <span className="text-[#FF7A60] block font-bold text-sm">Grade D / C</span>
                    <span className="text-[10px] text-[#B0A8D9]">Baseline</span>
                  </div>
                  <div className="flex-1 px-4 flex items-center">
                    <div className="w-full h-2 bg-[#0B0C10] rounded-full relative overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF7A60] via-[#8A7BFF] to-[#3AE8C7] rounded-full w-full" />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-[#3AE8C7] block font-bold text-sm">Grade A</span>
                    <span className="text-[10px] text-[#B0A8D9]">90 Days</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#B0A8D9] leading-relaxed">
                For students who need to catch up on school maths and lift their current grade by 2 levels. Built around closing specific concept gaps rather than dragging students along a rigid syllabus pace. Includes a comprehensive diagnostic prior to the customized plan.
              </p>

              {/* What is covered */}
              <div className="pt-2 space-y-2.5">
                {[
                  "Pinpointing hidden gaps from previous academic years",
                  "Restoring fundamental number sense, fractions & algebraic thinking",
                  "De-escalating math anxiety in an encouraging, small-batch setting",
                  "Direct preparation for upcoming school mid-terms and finals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#3AE8C7] flex-none mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Outcome pill */}
              <div className="pt-3 text-xs text-[#B0A8D9] flex items-center gap-3">
                <span className="font-semibold text-white">Batch Ratio:</span> <span className="text-[#8A7BFF] font-bold">1:6</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="font-semibold text-white">Pace:</span> 3 classes / week
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="font-semibold text-white">Results:</span> <span className="text-[#3AE8C7] font-bold">+20–30% average lift</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#8A7BFF]/15 space-y-3">
              {onNavigate && (
                <button
                  onClick={() => onNavigate("program/grade-elevation")}
                  className="w-full py-3 px-6 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore 12-Week Recovery Plan &amp; Trajectory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_4px_16px_rgba(255,122,96,0.35)] transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free Grade Elevation Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
