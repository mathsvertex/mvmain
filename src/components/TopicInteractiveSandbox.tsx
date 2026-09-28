import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, HelpCircle, Eye, Zap, Layers } from "lucide-react";

interface TopicInteractiveSandboxProps {
  topicId: string;
}

export const TopicInteractiveSandbox: React.FC<TopicInteractiveSandboxProps> = ({ topicId }) => {
  // Olympiads: Modular Arithmetic & Remainder Cycles
  const [modExponent, setModExponent] = useState(6);
  const [modBase, setModBase] = useState(3);
  const [modDivisor, setModDivisor] = useState(5);

  // School Maths: Linear Equation Balance
  const [eqA, setEqA] = useState(3);
  const [eqB, setEqB] = useState(7);
  const [eqResult, setEqResult] = useState(28);
  const [schoolStep, setSchoolStep] = useState(0);

  // MAT Reasoning: Pattern Matrix
  const [selectedMatOption, setSelectedMatOption] = useState<number | null>(null);

  // ASSET Prep: Distractor Trap Analysis
  const [selectedAssetChoice, setSelectedAssetChoice] = useState<string | null>(null);

  // Grade Elevation: Missing Prerequisite Diagnostic Map
  const [activeElevationNode, setActiveElevationNode] = useState<string>("fractions");

  // Render Olympiad Modular Sandbox
  if (topicId === "olympiads") {
    // Powers of base mod divisor
    const cycle = [
      Math.pow(modBase, 1) % modDivisor,
      Math.pow(modBase, 2) % modDivisor,
      Math.pow(modBase, 3) % modDivisor,
      Math.pow(modBase, 4) % modDivisor,
    ];
    const currentRemainder = Math.pow(modBase, modExponent) % modDivisor;

    return (
      <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-6 sm:p-8 space-y-6 text-white shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#8A7BFF]/15">
          <div>
            <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider block">
              Interactive Olympiad Sandbox
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              Modular Arithmetic Cycle Engine (IMO &amp; SASMO)
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30 self-start sm:self-auto">
            Number Theory Tool
          </span>
        </div>

        <p className="text-sm text-[#B0A8D9] leading-relaxed">
          Standard school curriculums attempt to calculate gigantic powers directly. Olympiad medalists use modular cycle clocks to predict remainders instantly. Experiment with exponents below to observe the recurring 4-step cycle.
        </p>

        {/* Interactive Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/20">
          <div>
            <label className="text-xs text-[#B0A8D9] block mb-1">Base Number (b):</label>
            <div className="flex gap-2">
              {[2, 3, 7].map((b) => (
                <button
                  key={b}
                  onClick={() => setModBase(b)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    modBase === b
                      ? "bg-[#8A7BFF] text-[#0B0C10]"
                      : "bg-[#121420] text-[#B0A8D9] border border-[#8A7BFF]/20 hover:text-white"
                  }`}
                >
                  Base {b}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-[#B0A8D9] block mb-1">Divisor Modulo (m):</label>
            <div className="flex gap-2">
              {[5, 7, 10].map((m) => (
                <button
                  key={m}
                  onClick={() => setModDivisor(m)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    modDivisor === m
                      ? "bg-[#8A7BFF] text-[#0B0C10]"
                      : "bg-[#121420] text-[#B0A8D9] border border-[#8A7BFF]/20 hover:text-white"
                  }`}
                >
                  Mod {m}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-[#B0A8D9] block mb-1">
              Exponent Power (n): <span className="text-[#3AE8C7] font-bold">{modExponent}</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={modExponent}
              onChange={(e) => setModExponent(parseInt(e.target.value, 10))}
              className="w-full accent-[#8A7BFF] cursor-pointer mt-1"
            />
          </div>
        </div>

        {/* Visual Clock Model & Formula */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 bg-[#0B0C10] p-5 rounded-2xl border border-[#8A7BFF]/20 flex flex-col items-center">
            <span className="text-xs text-[#B0A8D9] mb-3">Cyclic Clocks in Modulo {modDivisor}</span>
            
            <svg viewBox="0 0 200 200" className="w-48 h-48 select-none">
              {/* Outer circle */}
              <circle cx="100" cy="100" r="75" stroke="#8A7BFF" strokeWidth="2" strokeDasharray="3 3" fill="none" opacity="0.4" />
              
              {/* Cycle nodes */}
              {[1, 2, 3, 4].map((step, idx) => {
                const angle = (idx * (360 / 4) - 90) * (Math.PI / 180);
                const cx = 100 + 75 * Math.cos(angle);
                const cy = 100 + 75 * Math.sin(angle);
                const isCurrent = (modExponent - 1) % 4 === idx;
                const rem = Math.pow(modBase, step) % modDivisor;

                return (
                  <g key={idx}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isCurrent ? "18" : "14"}
                      fill={isCurrent ? "#FF7A60" : "#121420"}
                      stroke={isCurrent ? "#FFFFFF" : "#8A7BFF"}
                      strokeWidth={isCurrent ? "3" : "1.5"}
                      className="transition-all duration-300"
                    />
                    <text
                      x={cx}
                      y={cy + 4}
                      textAnchor="middle"
                      fontSize="11"
                      fontWeight="bold"
                      fill={isCurrent ? "#FFFFFF" : "#8A7BFF"}
                    >
                      {rem}
                    </text>
                    <text
                      x={cx}
                      y={cy + (cy < 100 ? -22 : 30)}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#B0A8D9"
                    >
                      n={step}, {step + 4}...
                    </text>
                  </g>
                );
              })}

              {/* Center value */}
              <text x="100" y="95" textAnchor="middle" fontSize="10" fill="#B0A8D9">Remainder:</text>
              <text x="100" y="122" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#3AE8C7">
                {currentRemainder}
              </text>
            </svg>
          </div>

          <div className="md:col-span-6 space-y-3">
            <div className="p-4 rounded-xl bg-[#0B0C10] border border-[#8A7BFF]/15">
              <span className="text-[11px] text-[#8A7BFF] uppercase tracking-wider font-semibold block mb-1">
                Mathematical Proof Step:
              </span>
              <p className="font-mono text-sm text-white">
                {modBase}<sup>{modExponent}</sup> ≡ <span className="text-[#3AE8C7] font-bold text-base">{currentRemainder}</span> (mod {modDivisor})
              </p>
              <p className="text-xs text-[#B0A8D9] mt-2">
                Since the period length is 4, {modExponent} = 4 × {Math.floor(modExponent / 4)} + {modExponent % 4 === 0 ? 4 : modExponent % 4}. Thus the result equals {modBase}<sup>{modExponent % 4 === 0 ? 4 : modExponent % 4}</sup> mod {modDivisor}.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#3AE8C7]/10 border border-[#3AE8C7]/25 text-xs text-[#3AE8C7]">
              ⚡ Olympiad Insight: Solves competition problems with 2000+ digit exponents in 6 seconds flat!
            </div>
          </div>
        </div>
      </div>
    );
  }

  // School Maths: Equation Balance Sandbox
  if (topicId === "school-maths") {
    return (
      <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-6 sm:p-8 space-y-6 text-white shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#8A7BFF]/15">
          <div>
            <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider block">
              Interactive School Maths Sandbox
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              Visual Equation Balance &amp; Shortcut Scale
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30 self-start sm:self-auto">
            Algebra Modeling
          </span>
        </div>

        <p className="text-sm text-[#B0A8D9] leading-relaxed">
          In school, students memorize "move 7 to the right and flip signs" mechanically. Here they visually balance the scale so equations make intuitive physical sense, preventing silly algebra mistakes on board exams.
        </p>

        {/* Problem Equation */}
        <div className="p-4 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="text-lg font-mono font-bold text-white">
            <span className="text-[#8A7BFF]">{eqA}x</span> + <span className="text-[#FF7A60]">{eqB}</span> = <span className="text-[#3AE8C7]">{eqResult}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSchoolStep(Math.max(0, schoolStep - 1))}
              disabled={schoolStep === 0}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#121420] border border-[#8A7BFF]/20 text-[#B0A8D9] disabled:opacity-40 cursor-pointer"
            >
              Previous Step
            </button>
            <button
              onClick={() => setSchoolStep(Math.min(2, schoolStep + 1))}
              disabled={schoolStep === 2}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#8A7BFF] text-[#0B0C10] disabled:opacity-40 cursor-pointer"
            >
              Next Step →
            </button>
            <button
              onClick={() => setSchoolStep(0)}
              className="p-1.5 rounded-lg text-xs text-[#B0A8D9] hover:text-white cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Balance Beam */}
        <div className="bg-[#0B0C10] rounded-2xl border border-[#8A7BFF]/20 p-6 flex flex-col items-center">
          <svg viewBox="0 0 400 140" className="w-full max-w-md h-auto select-none">
            {/* Fulcrum base */}
            <polygon points="200,120 185,140 215,140" fill="#8A7BFF" opacity="0.6" />
            <line x1="60" y1="120" x2="340" y2="120" stroke="#8A7BFF" strokeWidth="4" strokeLinecap="round" />
            <circle cx="200" cy="120" r="5" fill="#FFFFFF" />

            {/* Left Pan */}
            <line x1="80" y1="120" x2="80" y2="90" stroke="#8A7BFF" strokeWidth="2" />
            <rect x="30" y="60" width="100" height="30" rx="6" fill="#121420" stroke="#8A7BFF" strokeWidth="1.5" />
            <text x="80" y="80" textAnchor="middle" fontSize="12" fill="#FFFFFF" fontWeight="bold">
              {schoolStep === 0 ? "3x + 7" : schoolStep === 1 ? "3x" : "x"}
            </text>

            {/* Equals sign */}
            <text x="200" y="80" textAnchor="middle" fontSize="18" fill="#8A7BFF" fontWeight="bold">
              =
            </text>

            {/* Right Pan */}
            <line x1="320" y1="120" x2="320" y2="90" stroke="#8A7BFF" strokeWidth="2" />
            <rect x="270" y="60" width="100" height="30" rx="6" fill="#121420" stroke="#3AE8C7" strokeWidth="1.5" />
            <text x="320" y="80" textAnchor="middle" fontSize="12" fill="#3AE8C7" fontWeight="bold">
              {schoolStep === 0 ? "28" : schoolStep === 1 ? "21" : "7"}
            </text>
          </svg>

          {/* Explanation Banner */}
          <div className="mt-4 p-4 rounded-xl bg-[#121420] border border-[#8A7BFF]/15 text-xs text-[#B0A8D9] text-center max-w-lg">
            {schoolStep === 0 && (
              <span>
                <strong>Step 1:</strong> The balance is initially balanced: 3 unknowns plus 7 units equals 28 units.
              </span>
            )}
            {schoolStep === 1 && (
              <span>
                <strong>Step 2:</strong> Remove 7 units from BOTH sides equally to preserve balance. Now <span className="text-[#3AE8C7] font-bold">3x = 21</span>.
              </span>
            )}
            {schoolStep === 2 && (
              <span>
                <strong>Step 3:</strong> Divide both pans into 3 equal parts. Each <span className="text-[#3AE8C7] font-bold">x = 7</span>! If solving for 6x - 5, double 21 to get 42 - 5 = 37.
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // MAT Reasoning Sandbox: Pattern Matrix
  if (topicId === "mat-reasoning") {
    const matOptions = [
      { id: 1, label: "Option A", symbol: "✦✦", shape: "Double Star", correct: false },
      { id: 2, label: "Option B", symbol: "■●", shape: "Square + Dot", correct: false },
      { id: 3, label: "Option C", symbol: "▲▲", shape: "Inverted Twin Triangles", correct: true },
      { id: 4, label: "Option D", symbol: "◆◆", shape: "Rhombus Pair", correct: false }
    ];

    return (
      <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-6 sm:p-8 space-y-6 text-white shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#8A7BFF]/15">
          <div>
            <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider block">
              Interactive MAT Reasoning Sandbox
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              3×3 Non-Verbal Matrix Pattern Puzzle (NTSE Track)
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30 self-start sm:self-auto">
            Cognitive Aptitude
          </span>
        </div>

        <p className="text-sm text-[#B0A8D9] leading-relaxed">
          Examine the row-wise and column-wise transformation rules (rotations and shape mutations). Determine which pattern replaces the question mark in cell (3, 3).
        </p>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto p-4 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/20">
          {/* Row 1 */}
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#8A7BFF]">●</span>
            <span className="text-[10px] text-[#B0A8D9]">1 Dot</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#8A7BFF]">●●</span>
            <span className="text-[10px] text-[#B0A8D9]">2 Dots</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#3AE8C7]">●●●</span>
            <span className="text-[10px] text-[#B0A8D9]">3 Dots</span>
          </div>

          {/* Row 2 */}
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#FF7A60]">■</span>
            <span className="text-[10px] text-[#B0A8D9]">1 Square</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#FF7A60]">■■</span>
            <span className="text-[10px] text-[#B0A8D9]">2 Squares</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#3AE8C7]">■■■</span>
            <span className="text-[10px] text-[#B0A8D9]">3 Squares</span>
          </div>

          {/* Row 3 */}
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#8A7BFF]">▲</span>
            <span className="text-[10px] text-[#B0A8D9]">1 Triangle</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#121420] border border-[#8A7BFF]/20 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl text-[#8A7BFF]">▲▲</span>
            <span className="text-[10px] text-[#B0A8D9]">2 Triangles</span>
          </div>
          <div className="aspect-square rounded-xl bg-[#8A7BFF]/10 border-2 border-dashed border-[#8A7BFF] flex flex-col items-center justify-center p-2 text-center animate-pulse">
            <span className="text-2xl font-bold text-[#8A7BFF]">?</span>
            <span className="text-[10px] text-[#8A7BFF]">Missing</span>
          </div>
        </div>

        {/* Options to click */}
        <div className="space-y-3">
          <span className="text-xs text-[#B0A8D9] block text-center">Select the matching figure:</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 1, label: "▲▲▲", desc: "3 Triangles", correct: true },
              { id: 2, label: "▲▲", desc: "2 Triangles", correct: false },
              { id: 3, label: "◆◆◆", desc: "3 Diamonds", correct: false },
              { id: 4, label: "●▲■", desc: "Mixed Shapes", correct: false }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedMatOption(opt.id)}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  selectedMatOption === opt.id
                    ? opt.correct
                      ? "bg-[#3AE8C7]/20 border-[#3AE8C7] text-white"
                      : "bg-[#FF7A60]/20 border-[#FF7A60] text-white"
                    : "bg-[#0B0C10] border-[#8A7BFF]/20 text-[#B0A8D9] hover:border-[#8A7BFF] hover:text-white"
                }`}
              >
                <span className="text-xl block mb-1">{opt.label}</span>
                <span className="text-[11px] block">{opt.desc}</span>
              </button>
            ))}
          </div>

          {selectedMatOption && (
            <div className={`p-4 rounded-xl text-xs ${
              selectedMatOption === 1
                ? "bg-[#3AE8C7]/10 border border-[#3AE8C7]/30 text-[#3AE8C7]"
                : "bg-[#FF7A60]/10 border border-[#FF7A60]/30 text-[#FF7A60]"
            }`}>
              {selectedMatOption === 1 ? (
                <span>
                  ✓ <strong>Correct!</strong> Row 3 maintains the triangle motif while incrementing count across columns (1 → 2 → 3). In MAT exams, noticing simultaneous shape-preservation and numerical sequencing earns maximum speed points.
                </span>
              ) : (
                <span>
                  ✕ Not quite. Look horizontally: each row maintains the exact same shape while the count increases by +1 per column. Try again!
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ASSET Prep: Distractor Trap Analysis
  if (topicId === "asset-prep") {
    return (
      <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-6 sm:p-8 space-y-6 text-white shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#8A7BFF]/15">
          <div>
            <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider block">
              Interactive ASSET Diagnostic Sandbox
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              "Concept vs. Distractor Trap" Analyzer
            </h3>
          </div>
          <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30 self-start sm:self-auto">
            HOTS &amp; Trap Avoidance
          </span>
        </div>

        <p className="text-sm text-[#B0A8D9] leading-relaxed">
          In ASSET tests, multiple-choice options are deliberately engineered around typical misconceptions. 68% of students fall for Option A because they look at denominator size rather than unit density.
        </p>

        {/* Real ASSET question */}
        <div className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/20 space-y-3">
          <span className="text-xs font-bold text-[#8A7BFF]">Question Stem:</span>
          <p className="text-sm font-semibold text-white">
            "A water tank is 3/8 full. When 35 liters of water are poured into the tank, it becomes 3/4 full. What is the total capacity of the tank?"
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { id: "A", text: "35 × 4 = 140 Liters", note: "Common Trap (misinterprets 3/4 as 4 parts)", isTrap: true },
              { id: "B", text: "93.3 Liters (or 280/3 Liters)", note: "Correct Conceptual Unit Model", isTrap: false }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedAssetChoice(opt.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedAssetChoice === opt.id
                    ? opt.isTrap
                      ? "bg-[#FF7A60]/20 border-[#FF7A60] text-white"
                      : "bg-[#3AE8C7]/20 border-[#3AE8C7] text-white"
                    : "bg-[#121420] border-[#8A7BFF]/20 text-[#B0A8D9] hover:border-[#8A7BFF] hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white">Option {opt.id}</span>
                  <span className="text-[10px] text-[#B0A8D9]">{opt.note}</span>
                </div>
                <div className="text-sm font-mono text-white/95">{opt.text}</div>
              </button>
            ))}
          </div>
        </div>

        {selectedAssetChoice && (
          <div className="p-4 rounded-xl bg-[#0B0C10] border border-[#8A7BFF]/20 text-xs sm:text-sm space-y-2">
            <span className="font-semibold text-[#8A7BFF] block">Mentor Analysis:</span>
            {selectedAssetChoice === "A" ? (
              <p className="text-[#FF7A60]">
                ⚠️ <strong>The ASSET Trap:</strong> Many students see the denominator 4 and instinctively multiply 35 by 4. But 35 liters only represents the difference between 3/8 and 3/4 (which is 6/8 - 3/8 = 3/8). 3 units = 35 L, meaning each unit is 35/3 = 11.66 L, so the full 8 units is 8 × 11.66 = 93.3 Liters!
              </p>
            ) : (
              <p className="text-[#3AE8C7]">
                ✓ <strong>Excellent Conceptual Thinking:</strong> Converting 3/4 to 6/8 allows immediate unit subtraction: 6/8 - 3/8 = 3/8. 3 parts = 35 liters, so 1 part = 35/3 liters. The whole tank is 8 parts = 280/3 ≈ 93.33 liters.
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  // Grade Elevation / Mental Maths default fallback
  return (
    <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-6 sm:p-8 space-y-6 text-white shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#8A7BFF]/15">
        <div>
          <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider block">
            Interactive Diagnostic Tree
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
            Prerequisite Gap Recovery Trajectory
          </h3>
        </div>
        <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30 self-start sm:self-auto">
          Diagnostic Mapping
        </span>
      </div>

      <p className="text-sm text-[#B0A8D9] leading-relaxed">
        Select any foundational concept below to see how hidden gaps from earlier grades cause school test anxiety—and how our 1:6 batches systematically restore permanent mastery in 90 days.
      </p>

      {/* Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { id: "fractions", title: "Fractions & Decimals", root: "Grade 4–5 Gap", impact: "Blocks algebra & ratios in Gr 7–8" },
          { id: "integers", title: "Negative Numbers", root: "Grade 6 Gap", impact: "Causes sign errors on every mid-term" },
          { id: "word-problems", title: "Word Translation", root: "Reading & Modeling", impact: "Student freezes on 4-mark questions" }
        ].map((node) => (
          <button
            key={node.id}
            onClick={() => setActiveElevationNode(node.id)}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
              activeElevationNode === node.id
                ? "bg-[#8A7BFF]/20 border-[#8A7BFF] shadow-[0_0_15px_rgba(138,123,255,0.3)]"
                : "bg-[#0B0C10] border-[#8A7BFF]/20 text-[#B0A8D9] hover:border-[#8A7BFF]"
            }`}
          >
            <span className="text-xs font-bold text-[#3AE8C7] block mb-1">{node.root}</span>
            <span className="font-bold text-white block text-sm mb-1">{node.title}</span>
            <span className="text-[11px] text-[#B0A8D9] block">{node.impact}</span>
          </button>
        ))}
      </div>

      {/* Active node detail */}
      <div className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/20 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-[#8A7BFF] uppercase tracking-wider">
            90-Day Grade Recovery Plan for {activeElevationNode.toUpperCase()}:
          </span>
          <span className="text-[#3AE8C7] font-semibold">Projected: Grade D → Grade A</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-[#121420] border border-[#8A7BFF]/15 space-y-1">
            <span className="text-[#FF7A60] font-bold block">Weeks 1–3: Diagnostic</span>
            <p className="text-[#B0A8D9]">Isolate the exact missing visual representation with no grading judgment.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#121420] border border-[#8A7BFF]/15 space-y-1">
            <span className="text-[#8A7BFF] font-bold block">Weeks 4–8: Reconstruction</span>
            <p className="text-[#B0A8D9]">Step-by-step small batch coaching until child solves without hints.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#121420] border border-[#8A7BFF]/15 space-y-1">
            <span className="text-[#3AE8C7] font-bold block">Weeks 9–12: School Sync</span>
            <p className="text-[#B0A8D9]">Direct alignment with school exam chapters to guarantee high test marks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
