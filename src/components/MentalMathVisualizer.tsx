import React, { useState } from "react";
import { Zap, Sparkles, RefreshCw, Eye, Check } from "lucide-react";

export interface MentalMathVisualizerProps {
  className?: string;
  autoPlay?: boolean;
}

export const MentalMathVisualizer: React.FC<MentalMathVisualizerProps> = ({
  className = "",
  autoPlay = false
}) => {
  // Step state: 0 = idle/base numbers, 1 = deficiencies revealed, 2 = cross-subtraction & product revealed (solution)
  const [activeStep, setActiveStep] = useState<number>(autoPlay ? 2 : 2);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const showDeficiencies = isHovered || activeStep >= 1;
  const showCalculations = isHovered || activeStep >= 2;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full rounded-2xl overflow-hidden bg-[#121420] border border-[#8A7BFF]/25 shadow-2xl p-5 sm:p-7 text-white transition-all duration-300 hover:border-[#8A7BFF]/60 hover:shadow-[0_12px_40px_rgba(138,123,255,0.2)] ${className}`}
    >
      {/* Background ambient radial grid & glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#8A7BFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#8A7BFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-[#FF7A60]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar with tag & interactive controls */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#8A7BFF]/15">
        <div className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3AE8C7] animate-pulse" />
          <span className="text-xs font-bold tracking-wider uppercase text-white font-display">
            Vedic Mental Matrix · Base 100
          </span>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold text-[#8A7BFF] bg-[#8A7BFF]/15 border border-[#8A7BFF]/30">
            Sutra: Yavadunam
          </span>
        </div>

        {/* Step toggle / hint */}
        <div className="inline-flex items-center gap-2 text-xs">
          <span className="text-[#B0A8D9] text-[11px] hidden md:inline">
            {isHovered ? "⚡ Hover Active: Mental paths illuminated" : "Hover or tap to reveal mental pathways"}
          </span>
          <button
            onClick={() => setActiveStep((prev) => (prev === 2 ? 0 : prev + 1))}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#B0A8D9] bg-[#0B0C10] hover:text-white border border-[#8A7BFF]/25 transition-all cursor-pointer active:scale-95"
            title="Step through calculation"
          >
            <RefreshCw className="w-3 h-3 text-[#FF7A60]" />
            <span>{activeStep === 2 ? "Reset" : `Step ${activeStep + 1}/2`}</span>
          </button>
        </div>
      </div>

      {/* Main Calculation Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left side: The Matrix and SVG overlay */}
        <div className="lg:col-span-8 flex flex-col items-center sm:items-start justify-center">
          {/* Base 100 Indicator Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-[#0B0C10] border border-[#8A7BFF]/20 text-[11px] font-mono text-[#B0A8D9]">
            <span className="text-[#8A7BFF] font-semibold">Reference Base = 100</span>
            <span className="text-white/20">|</span>
            <span>Deviation = Number - 100</span>
          </div>

          {/* Matrix Box */}
          <div className="relative inline-flex flex-col p-4 sm:p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/25 shadow-inner">
            {/* SVG Connecting Diagonal Cross-Subtractions */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20"
              viewBox="0 0 280 160"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="diagonalGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3AE8C7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8A7BFF" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="diagonalGlow2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A7BFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3AE8C7" stopOpacity="0.9" />
                </linearGradient>
                <filter id="svgPathGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <marker id="arrowPurple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#8A7BFF" />
                </marker>
                <marker id="arrowCyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#3AE8C7" />
                </marker>
              </defs>

              {/* Diagonal 1: 98 connected across to -7 */}
              <path
                d="M 68 40 C 115 45, 145 95, 205 105"
                stroke="url(#diagonalGlow1)"
                strokeWidth={isHovered ? "3" : "2"}
                strokeDasharray={isHovered ? "none" : "5 4"}
                strokeOpacity={isHovered || showCalculations ? "1" : "0.35"}
                filter={isHovered ? "url(#svgPathGlow)" : undefined}
                markerEnd="url(#arrowPurple)"
                className="transition-all duration-300"
              />

              {/* Diagonal 2: 93 connected across to -2 */}
              <path
                d="M 68 105 C 115 100, 145 50, 205 40"
                stroke="url(#diagonalGlow2)"
                strokeWidth={isHovered ? "2.5" : "1.8"}
                strokeDasharray={isHovered ? "none" : "5 4"}
                strokeOpacity={isHovered || showCalculations ? "0.85" : "0.25"}
                filter={isHovered ? "url(#svgPathGlow)" : undefined}
                markerEnd="url(#arrowCyan)"
                className="transition-all duration-300"
              />

              {/* Vertical Multiplication Path between -2 and -7 in Coral */}
              <path
                d="M 235 48 L 235 98"
                stroke="#FF7A60"
                strokeWidth={isHovered ? "2.5" : "1.8"}
                strokeDasharray="3 3"
                strokeOpacity={isHovered || showCalculations ? "0.9" : "0.3"}
                className="transition-all duration-300"
              />
            </svg>

            {/* Row 1: 98 & Difference (-2) */}
            <div className="inline-flex items-center justify-between gap-6 sm:gap-10 pb-3 z-10">
              <div className="inline-flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  98
                </span>
                <span className="text-xs text-[#B0A8D9]/70 font-mono">(100 - 2)</span>
              </div>

              {/* Deficiency Pill */}
              <div
                className={`inline-flex items-center justify-center px-3 py-1 rounded-full border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                  showDeficiencies
                    ? "bg-[#8A7BFF]/20 border-[#8A7BFF] text-[#8A7BFF] shadow-[0_0_12px_rgba(138,123,255,0.4)] scale-105"
                    : "bg-[#121420] border-white/15 text-[#B0A8D9]"
                }`}
              >
                <span>- 02</span>
              </div>
            </div>

            {/* Operator & Row 2: × 93 & Difference (-7) */}
            <div className="inline-flex items-center justify-between gap-6 sm:gap-10 pb-4 z-10">
              <div className="inline-flex items-baseline gap-2">
                <span className="font-mono text-lg text-[#FF7A60] font-bold">×</span>
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  93
                </span>
                <span className="text-xs text-[#B0A8D9]/70 font-mono">(100 - 7)</span>
              </div>

              {/* Deficiency Pill */}
              <div
                className={`inline-flex items-center justify-center px-3 py-1 rounded-full border text-xs sm:text-sm font-mono font-bold transition-all duration-300 ${
                  showDeficiencies
                    ? "bg-[#FF7A60]/20 border-[#FF7A60] text-[#FF7A60] shadow-[0_0_12px_rgba(255,122,96,0.4)] scale-105"
                    : "bg-[#121420] border-white/15 text-[#B0A8D9]"
                }`}
              >
                <span>- 07</span>
              </div>
            </div>

            {/* Separator Line */}
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#8A7BFF]/50 to-transparent my-1 z-10" />

            {/* Solution Row with Partition (/ or |) */}
            <div className="inline-flex items-center justify-between pt-3 gap-6 sm:gap-10 z-10">
              {/* Left Part: 98 - 7 or 93 - 2 = 91 */}
              <div
                className={`inline-flex flex-col transition-all duration-500 transform ${
                  showCalculations
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-1"
                }`}
              >
                <div className="inline-flex items-baseline gap-2">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#3AE8C7] drop-shadow-[0_0_12px_rgba(58,232,199,0.5)]">
                    91
                  </span>
                  <span className="text-[11px] font-mono text-[#B0A8D9]">
                    (98 - 7)
                  </span>
                </div>
                <span className="text-[10px] text-[#B0A8D9]/60 uppercase tracking-wider font-semibold">
                  Left Hand (Hundreds)
                </span>
              </div>

              {/* Divider slash */}
              <div className="text-2xl font-mono text-[#8A7BFF]/70 font-light select-none">
                |
              </div>

              {/* Right Part: (-2) × (-7) = 14 */}
              <div
                className={`inline-flex flex-col text-right transition-all duration-700 delay-150 transform ${
                  showCalculations
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-1"
                }`}
              >
                <div className="inline-flex items-baseline justify-end gap-2">
                  <span className="text-[11px] font-mono text-[#B0A8D9]">
                    (-2 × -7)
                  </span>
                  <span className="font-mono text-3xl sm:text-4xl font-black text-[#8A7BFF] drop-shadow-[0_0_12px_rgba(138,123,255,0.5)]">
                    14
                  </span>
                </div>
                <span className="text-[10px] text-[#B0A8D9]/60 uppercase tracking-wider font-semibold">
                  Right Hand (Units)
                </span>
              </div>
            </div>

            {/* Combined Final Answer Banner */}
            <div
              className={`mt-4 pt-3 border-t border-[#8A7BFF]/15 inline-flex items-center justify-between w-full transition-all duration-700 delay-300 ${
                showCalculations ? "opacity-100" : "opacity-40"
              }`}
            >
              <span className="text-xs text-[#B0A8D9] font-medium">
                Combined Instant Answer:
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#3AE8C7]/15 border border-[#3AE8C7]/35">
                <span className="text-xs text-[#3AE8C7] font-bold">91</span>
                <span className="text-xs text-white/50 font-bold">·</span>
                <span className="text-xs text-[#8A7BFF] font-bold">14</span>
                <span className="text-xs font-mono font-bold text-white ml-1.5">= 9,114</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Floating Speed Metric Card & Step Breakdown */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Floating Speed Metric Card in #0B0C10 with Neon Purple Number (#8A7BFF) */}
          <div className="relative inline-flex flex-col p-4 rounded-xl bg-[#0B0C10] border border-[#8A7BFF]/35 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="inline-flex items-center justify-between mb-2">
              <div className="inline-flex items-center gap-1.5">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#FF7A60]/20 text-[#FF7A60] border border-[#FF7A60]/30">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                </span>
                <span className="text-xs font-semibold text-white font-display">
                  Calculation Time
                </span>
              </div>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold text-[#3AE8C7] bg-[#3AE8C7]/15 border border-[#3AE8C7]/30">
                Zero Scratchpad
              </span>
            </div>

            <div className="inline-flex items-baseline gap-2 my-1">
              <span className="font-mono text-3xl font-extrabold text-[#8A7BFF] tracking-tight">
                0.4 sec
              </span>
              <span className="text-xs text-[#B0A8D9]">vs 45s traditional</span>
            </div>

            <p className="text-[11px] text-[#B0A8D9] leading-relaxed mt-1">
              Standard long multiplication requires 6 steps, 2 carry-overs, and column addition. Vedic base-100 requires 2 mental numbers.
            </p>
          </div>

          {/* 2-Step Micro Breakdown Cards */}
          <div className="space-y-2 text-xs">
            <div
              className={`p-3 rounded-xl border transition-all duration-300 ${
                showCalculations
                  ? "bg-[#3AE8C7]/10 border-[#3AE8C7]/30 text-white"
                  : "bg-[#0B0C10] border-[#8A7BFF]/15 text-[#B0A8D9]"
              }`}
            >
              <div className="inline-flex items-center gap-1.5 font-bold mb-0.5 text-[#3AE8C7]">
                <span>Step 1: Cross-Subtract</span>
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] text-[#B0A8D9]">
                Either <strong>98 - 7</strong> or <strong>93 - 2</strong> = <span className="text-[#3AE8C7] font-bold">91</span>. Both cross paths always produce the identical number!
              </p>
            </div>

            <div
              className={`p-3 rounded-xl border transition-all duration-300 ${
                showCalculations
                  ? "bg-[#8A7BFF]/10 border-[#8A7BFF]/30 text-white"
                  : "bg-[#0B0C10] border-[#8A7BFF]/15 text-[#B0A8D9]"
              }`}
            >
              <div className="inline-flex items-center gap-1.5 font-bold mb-0.5 text-[#8A7BFF]">
                <span>Step 2: Multiply Deficiencies</span>
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] text-[#B0A8D9]">
                Multiply (-2) × (-7) = <span className="text-[#8A7BFF] font-bold">14</span>. Append the two digits to the right of 91 to get <strong>9,114</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
