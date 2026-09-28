import React, { useState } from "react";
import { DIAGNOSTIC_QUESTIONS, DiagnosticQuestion } from "../data/coachingData";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Clock, Zap } from "lucide-react";
import { DiagnosticVisualDiagram } from "./DiagnosticVisualDiagram";

interface InteractiveDiagnosticProps {
  onOpenDemo: (prefillGrade?: string) => void;
}

export const InteractiveDiagnostic: React.FC<InteractiveDiagnosticProps> = ({ onOpenDemo }) => {
  const [selectedGradeKey, setSelectedGradeKey] = useState<string>("3&4");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const currentQuestion =
    DIAGNOSTIC_QUESTIONS.find((q) => q.gradeGroup === selectedGradeKey) || DIAGNOSTIC_QUESTIONS[0];

  const currentAnswer = selectedAnswers[selectedGradeKey];
  const isAnswered = currentAnswer !== undefined && currentAnswer !== null;
  const isCorrect = isAnswered && currentAnswer === currentQuestion.correctIndex;
  const revealed = showSolution[selectedGradeKey] || isAnswered;

  const handleSelectOption = (idx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [selectedGradeKey]: idx }));
    setShowSolution((prev) => ({ ...prev, [selectedGradeKey]: true }));
  };

  const getGradeNumberForDemo = (key: string): string => {
    if (key === "1&2") return "2";
    if (key === "3&4") return "4";
    if (key === "5&6") return "6";
    return "8";
  };

  return (
    <section className="py-20 bg-[#0B0C10] border-b border-[#8A7BFF]/15 text-white relative overflow-hidden" id="diagnostic">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8A7BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF7A60]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3AE8C7] animate-pulse" />
            Interactive Problem Simulation
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            How Olympiad alumni think vs. how schools teach
          </h2>
          <p className="mt-3 text-base text-[#B0A8D9] leading-relaxed">
            Try an actual diagnostic challenge below. Notice how MathsVertex mentors replace lengthy scratch algebra with spatial clarity and lightning mental models.
          </p>
        </div>

        {/* Grade Level Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {[
            { key: "1&2", label: "Grades 1 & 2 (Foundations)" },
            { key: "3&4", label: "Grades 3 & 4 (Junior Olympiad)" },
            { key: "5&6", label: "Grades 5 & 6 (Intermediate IMO / ASSET)" },
            { key: "7&8", label: "Grades 7 & 8 (Advanced Olympiad & MAT)" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedGradeKey(tab.key)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedGradeKey === tab.key
                  ? "bg-[#8A7BFF] text-[#0B0C10] shadow-[0_4px_16px_rgba(138,123,255,0.4)] font-bold scale-[1.02]"
                  : "bg-[#121420] text-[#B0A8D9] hover:text-white hover:bg-[#181B2B] border border-[#8A7BFF]/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Challenge Card in Secondary Background (#121420) */}
        <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#8A7BFF]/15">
            <div>
              <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider">
                {currentQuestion.topic}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                {currentQuestion.title}
              </h3>
            </div>
            <span className="text-xs text-[#3AE8C7] bg-[#3AE8C7]/10 px-3 py-1 rounded-full border border-[#3AE8C7]/25 font-semibold">
              Interactive Simulation
            </span>
          </div>

          {/* Problem Statement */}
          <div className="py-6 space-y-5">
            <p className="text-base sm:text-xl font-medium text-white/95 leading-relaxed">
              "{currentQuestion.question}"
            </p>

            {/* Visual Problem Diagram */}
            <div className="pt-1">
              <DiagnosticVisualDiagram
                gradeGroup={selectedGradeKey}
                revealed={revealed}
              />
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {currentQuestion.options.map((opt, idx) => {
              const isChosen = currentAnswer === idx;
              const isTheCorrectOne = idx === currentQuestion.correctIndex;

              let btnStyle = "bg-[#0B0C10] border-[#8A7BFF]/25 text-white hover:border-[#8A7BFF] hover:bg-[#161928]";
              if (isAnswered) {
                if (isTheCorrectOne) {
                  btnStyle = "bg-[#3AE8C7]/15 border-[#3AE8C7] text-[#3AE8C7] font-semibold shadow-[0_0_15px_rgba(58,232,199,0.25)]";
                } else if (isChosen) {
                  btnStyle = "bg-[#FF7A60]/15 border-[#FF7A60] text-[#FF7A60]";
                } else {
                  btnStyle = "bg-[#0B0C10]/50 border-white/5 text-[#B0A8D9]/40";
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border-2 text-left text-sm sm:text-base flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                >
                  <span className="font-medium">{opt}</span>
                  {isAnswered && isTheCorrectOne && (
                    <CheckCircle2 className="w-5 h-5 text-[#3AE8C7] flex-none ml-2" />
                  )}
                  {isAnswered && isChosen && !isTheCorrectOne && (
                    <XCircle className="w-5 h-5 text-[#FF7A60] flex-none ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation comparison box */}
          {revealed && (
            <div className="mt-8 pt-6 border-t border-[#8A7BFF]/15 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    isCorrect
                      ? "bg-[#3AE8C7]/20 text-[#3AE8C7] border border-[#3AE8C7]/30"
                      : "bg-[#8A7BFF]/20 text-[#8A7BFF] border border-[#8A7BFF]/30"
                  }`}
                >
                  {isCorrect ? "✓ Correct Answer!" : "⚡ Exam Breakdown"}
                </span>
                <span className="text-xs text-[#B0A8D9]">
                  See the difference in methodology:
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Traditional School Way */}
                <div className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/15 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FF7A60]">
                    <Clock className="w-4 h-4 text-[#FF7A60]" />
                    <span>Traditional School Rote Method (~2–3 Minutes)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#B0A8D9] leading-relaxed">
                    {currentQuestion.roteMethod}
                  </p>
                </div>

                {/* MathsVertex Method */}
                <div className="p-5 rounded-2xl bg-[#8A7BFF]/10 border border-[#8A7BFF]/40 space-y-2 shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8A7BFF]">
                    <Zap className="w-4 h-4 text-[#8A7BFF]" />
                    <span>The MathsVertex Instinct (&lt; 10 Seconds)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    {currentQuestion.vertexMethod}
                  </p>
                </div>
              </div>

              {/* Core Insight Callout in Neon Green/Cyan */}
              <div className="p-4 rounded-xl bg-[#3AE8C7]/10 border border-[#3AE8C7]/25 text-xs sm:text-sm text-white/90 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-[#3AE8C7] flex-none mt-0.5" />
                <div>
                  <strong className="text-[#3AE8C7]">Mentor's Key Takeaway:</strong>{" "}
                  <span className="text-[#B0A8D9]">{currentQuestion.insight}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-[#8A7BFF]/15 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-[#B0A8D9]">
              Want a comprehensive diagnostic across 12 math domains?
            </div>
            {/* Primary CTA: Coral/Light Orange Gradient */}
            <button
              onClick={() => onOpenDemo(getGradeNumberForDemo(selectedGradeKey))}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_4px_16px_rgba(255,122,96,0.35)] transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Get Full Diagnostic in Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
