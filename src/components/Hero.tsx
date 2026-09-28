import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Sliders } from "lucide-react";

interface HeroProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onNavigate }) => {
  const [rankValue, setRankValue] = useState(0);
  const [trajectoryMode, setTrajectoryMode] = useState<"vertex" | "standard">("vertex");
  const [vertexHovered, setVertexHovered] = useState(false);

  // Counter animation on load
  useEffect(() => {
    let start = 0;
    const end = 46;
    const duration = 1600;
    const frameRate = 30;
    const step = end / (duration / frameRate);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setRankValue(end);
        clearInterval(timer);
      } else {
        setRankValue(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#0B0C10] text-white pt-16 pb-20 overflow-hidden" id="home">
      {/* Background Floating Math Symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-[12%] left-[6%] font-display text-4xl text-[#8A7BFF]/10 animate-float">
          ∑
        </span>
        <span className="absolute top-[68%] left-[82%] font-display text-5xl text-[#8A7BFF]/10 animate-float-delayed">
          ∫
        </span>
        <span className="absolute top-[20%] right-[10%] font-display text-4xl text-[#8A7BFF]/10 animate-float">
          π
        </span>
        <span className="absolute bottom-[22%] left-[12%] font-display text-4xl text-[#8A7BFF]/10 animate-float-delayed">
          Δ
        </span>
        <span className="absolute top-[48%] left-[45%] font-display text-3xl text-[#8A7BFF]/10 animate-float">
          √x
        </span>
        <span className="absolute top-[32%] right-[32%] font-display text-3xl text-[#8A7BFF]/10 animate-float-delayed">
          θ
        </span>
        {/* Subtle radial glow in Neon Purple and Coral */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#8A7BFF]/15 via-[#FF7A60]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Highlight Badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#3AE8C7] animate-pulse" />
              <span>Live Online Coaching · School Maths to Olympiad Level</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-white max-w-2xl text-balance">
              Every parabola has a peak. We help your child reach theirs.
            </h1>

            {/* Secondary Text in Light Purple/Lavender */}
            <p className="text-base sm:text-lg text-[#B0A8D9] max-w-xl leading-relaxed">
              Small live batches of 6, mentors who have competed at the exact same Olympiads, and a personalized weekly plan built around your child’s target exam—not a generic textbook syllabus.
            </p>

            {/* CTAs: Primary in Coral/Light Orange Gradient, Secondary in Neon Purple border */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenDemo()}
                className="px-6 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_8px_24px_rgba(255,122,96,0.35)] hover:shadow-[0_12px_32px_rgba(255,122,96,0.5)] transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => (onNavigate ? onNavigate("how") : (window.location.hash = "how"))}
                className="px-6 py-3.5 rounded-full text-base font-semibold text-[#8A7BFF] border border-[#8A7BFF]/40 hover:border-[#8A7BFF] hover:bg-[#8A7BFF]/10 transition-colors cursor-pointer"
              >
                See How It Works
              </button>
            </div>

            {/* Micro reassurance notes in Secondary Text & Cyan checks */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#B0A8D9]/80">
              <span className="flex items-center gap-1.5"><span className="text-[#3AE8C7]">✓</span> No card required</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="flex items-center gap-1.5"><span className="text-[#3AE8C7]">✓</span> 45-minute live diagnostic</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="flex items-center gap-1.5"><span className="text-[#3AE8C7]">✓</span> Meet your mentor before you commit</span>
            </div>
          </div>

          {/* Right Column: Interactive Parabola Graphic in Secondary Background */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-[#121420] rounded-2xl border border-[#8A7BFF]/25 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative">
              {/* Curve mode toggles */}
              <div className="flex items-center justify-between pb-3 border-b border-[#8A7BFF]/15 text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#8A7BFF]" />
                  Mathematical Curve Model
                </span>
                <div className="inline-flex rounded-lg bg-[#0B0C10] p-0.5 border border-[#8A7BFF]/20">
                  <button
                    onClick={() => setTrajectoryMode("vertex")}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      trajectoryMode === "vertex"
                        ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_2px_8px_rgba(138,123,255,0.4)]"
                        : "text-[#B0A8D9] hover:text-white"
                    }`}
                  >
                    MathsVertex Peak
                  </button>
                  <button
                    onClick={() => setTrajectoryMode("standard")}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      trajectoryMode === "standard"
                        ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_2px_8px_rgba(138,123,255,0.4)]"
                        : "text-[#B0A8D9] hover:text-white"
                    }`}
                  >
                    Standard Curve
                  </button>
                </div>
              </div>

              {/* The SVG Visualization with Neon Purple lines and Cyan highlights */}
              <div className="relative py-2">
                <svg
                  viewBox="0 0 380 290"
                  fill="none"
                  className="w-full h-auto overflow-visible select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                >
                  <defs>
                    <linearGradient id="purpleGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C3BCED" />
                      <stop offset="50%" stopColor="#8A7BFF" />
                      <stop offset="100%" stopColor="#6C5CE7" />
                    </linearGradient>
                    <linearGradient id="coralGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF8A71" />
                      <stop offset="100%" stopColor="#FF7A60" />
                    </linearGradient>
                    <linearGradient id="areaGlowPurple" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8A7BFF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#8A7BFF" stopOpacity="0.0" />
                    </linearGradient>
                    <filter id="neonPurpleGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Secondary Accent Grid Lines in Neon Purple/Lavender */}
                  <line x1="30" y1="240" x2="355" y2="240" stroke="#8A7BFF" strokeOpacity="0.3" strokeWidth="1.5" />
                  <line x1="60" y1="25" x2="60" y2="260" stroke="#8A7BFF" strokeOpacity="0.3" strokeWidth="1.5" />
                  
                  {/* Subtle Grid Subdivisions */}
                  <line x1="30" y1="130" x2="355" y2="130" stroke="#8A7BFF" strokeOpacity="0.1" strokeDasharray="3 3" />
                  <line x1="200" y1="25" x2="200" y2="240" stroke="#8A7BFF" strokeOpacity="0.2" strokeDasharray="4 4" />

                  {/* Axis arrows in Neon Purple */}
                  <polygon points="355,237 363,240 355,243" fill="#8A7BFF" />
                  <polygon points="57,25 60,17 63,25" fill="#8A7BFF" />

                  <text x="345" y="260" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#B0A8D9">
                    Time (Months)
                  </text>
                  <text x="35" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#B0A8D9">
                    Rank
                  </text>

                  {/* Shaded Area under trajectory curve */}
                  {trajectoryMode === "vertex" && (
                    <path
                      d="M 65 235 C 125 55, 255 55, 335 235 Z"
                      fill="url(#areaGlowPurple)"
                      className="animate-in fade-in duration-300"
                    />
                  )}

                  {/* Standard Curve (Faded comparison) */}
                  <path
                    d="M 65 235 C 130 185, 230 185, 340 235"
                    stroke={trajectoryMode === "standard" ? "#FF8A71" : "rgba(176,168,217,0.3)"}
                    strokeWidth={trajectoryMode === "standard" ? "3.5" : "2"}
                    strokeDasharray={trajectoryMode === "standard" ? "none" : "5 5"}
                    fill="none"
                    className="transition-all duration-300"
                  />

                  {/* MathsVertex Parabola Path with Neon Purple Gradient & Glow */}
                  <path
                    className="parabola-path"
                    d="M 65 230 C 125 55, 255 55, 335 230"
                    stroke="url(#purpleGradientHero)"
                    strokeWidth={trajectoryMode === "vertex" ? "4.5" : "2.5"}
                    fill="none"
                    strokeLinecap="round"
                    filter={trajectoryMode === "vertex" ? "url(#neonPurpleGlow)" : undefined}
                  />

                  {/* Progression Milestone Points in Neon Cyan and Coral */}
                  <circle cx="105" cy="165" r="4.5" fill="#3AE8C7" stroke="#121420" strokeWidth="1.5" />
                  <circle cx="290" cy="155" r="4.5" fill="#FF7A60" stroke="#121420" strokeWidth="1.5" />

                  {/* Peak Point Group (Interactive Vertex) with Coral accent */}
                  <g
                    className="cursor-pointer transition-transform hover:scale-105"
                    onMouseEnter={() => setVertexHovered(true)}
                    onMouseLeave={() => setVertexHovered(false)}
                    onClick={() => onOpenDemo()}
                  >
                    {/* Pulsing halo */}
                    <circle cx="200" cy="74" r="28" fill="#8A7BFF" opacity="0.18" />
                    <circle cx="200" cy="74" r="16" fill="#FF7A60" opacity="0.4" />
                    <circle cx="200" cy="74" r="7.5" fill="#FFFFFF" stroke="#FF7A60" strokeWidth="3" />
                    
                    {/* Tooltip on Vertex */}
                    <g className={`transition-opacity duration-200 ${vertexHovered || trajectoryMode === "vertex" ? "opacity-100" : "opacity-90"}`}>
                      <rect
                        x="85"
                        y="16"
                        width="230"
                        height="38"
                        rx="10"
                        fill="#0B0C10"
                        stroke="#8A7BFF"
                        strokeWidth="1.5"
                        filter="drop-shadow(0 4px 14px rgba(138,123,255,0.35))"
                      />
                      <text
                        x="200"
                        y="40"
                        textAnchor="middle"
                        fontFamily="Space Grotesk, sans-serif"
                        fontSize="11.5"
                        fill="#FFFFFF"
                        fontWeight="700"
                        letterSpacing="0.3px"
                      >
                        ⚡ VERTEX: Peak Olympiad Potential
                      </text>
                    </g>
                  </g>

                  {/* Standard Curve Point */}
                  {trajectoryMode === "standard" && (
                    <g>
                      <circle cx="195" cy="185" r="5" fill="#FF8A71" />
                      <rect x="120" y="145" width="150" height="28" rx="6" fill="#0B0C10" stroke="#FF8A71" strokeWidth="1" />
                      <text x="195" y="163" textAnchor="middle" fontSize="10" fill="#FF8A71" fontWeight="600">
                        Typical School Plateau
                      </text>
                    </g>
                  )}

                  {/* Floating Stat Card Inside SVG with Neon Green/Cyan highlight */}
                  <g transform="translate(242, 152)">
                    <rect
                      x="0"
                      y="0"
                      width="118"
                      height="70"
                      rx="14"
                      fill="#0B0C10"
                      stroke="#8A7BFF"
                      strokeWidth="1.3"
                      strokeOpacity="0.4"
                      filter="drop-shadow(0 8px 20px rgba(0,0,0,0.6))"
                    />
                    <circle cx="18" cy="22" r="4.5" fill="#3AE8C7" />
                    <text x="28" y="25" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fill="#B0A8D9" fontWeight="600">
                      Average Lift
                    </text>
                    {/* Small Highlight Text in Neon Green/Cyan (#3AE8C7) */}
                    <text
                      x="16"
                      y="54"
                      fontFamily="Space Grotesk, sans-serif"
                      fontSize="22"
                      fontWeight="800"
                      fill="#3AE8C7"
                      className="tabular-nums"
                    >
                      ↑ {rankValue}%
                    </text>
                  </g>
                </svg>
              </div>

              {/* Explanatory text under graphic */}
              <div className="pt-2 text-xs text-[#B0A8D9] flex items-center justify-between border-t border-[#8A7BFF]/15">
                <span>In 3 months, students average a <strong className="text-[#3AE8C7]">46%</strong> rank climb</span>
                <button
                  onClick={() => onOpenDemo()}
                  className="text-[#FF8A71] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  Book Demo
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Stats Bar (Secondary Background for Metrics: #121420) */}
        <div className="mt-16 bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {/* Metric 1: Numbers in Neon Purple/Lavender (#8A7BFF) */}
            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8A7BFF] tabular-nums block">
                4,200+
              </span>
              <p className="text-xs sm:text-sm text-[#B0A8D9]">
                Students coached across 14 countries since 2020
              </p>
            </div>

            {/* Metric 2: Numbers in Neon Purple/Lavender (#8A7BFF) */}
            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8A7BFF] tabular-nums block">
                340
              </span>
              <p className="text-xs sm:text-sm text-[#B0A8D9]">
                Olympiad qualifiers in 2026 alone (IMO / IOM / SASMO)
              </p>
            </div>

            {/* Metric 3: Numbers in Neon Purple/Lavender (#8A7BFF), highlight pill in #3AE8C7 */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8A7BFF] tabular-nums block">
                  92%
                </span>
                <span className="text-[10px] font-bold text-[#3AE8C7] bg-[#3AE8C7]/15 px-2 py-0.5 rounded-full border border-[#3AE8C7]/30">
                  Rank ↑ 46%
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#B0A8D9]">
                Saw a measurable rank improvement in just one term
              </p>
            </div>

            {/* Metric 4: Numbers in Neon Purple/Lavender (#8A7BFF) */}
            <div className="space-y-1">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8A7BFF] tabular-nums block">
                1:6
              </span>
              <p className="text-xs sm:text-sm text-[#B0A8D9]">
                Strict mentor-to-student batch ratio (never overcrowded)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust reassurance ribbon */}
      <div className="mt-10 py-3.5 bg-[#121420]/80 border-y border-[#8A7BFF]/15">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-[#B0A8D9]">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3AE8C7]" />
            Background-verified Olympiad alumni mentors
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3AE8C7]" />
            Every class recorded &amp; shared immediately with parents
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3AE8C7]" />
            Official Certificate of Completion for every program
          </span>
        </div>
      </div>
    </section>
  );
};
