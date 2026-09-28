import React from "react";
import { MentalMathVisualizer } from "./MentalMathVisualizer";

export type MathIllustrationType =
  | "parabola-hero"
  | "classroom-session"
  | "olympiad-trophy"
  | "diagnostic-dashboard"
  | "mental-speed"
  | "geometry-proof";

interface MathGraphicProps {
  type: MathIllustrationType;
  className?: string;
  badge?: string;
}

export const MathGraphic: React.FC<MathGraphicProps> = ({
  type,
  className = "",
  badge
}) => {
  switch (type) {
    case "parabola-hero":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B0C10] via-[#121420] to-[#161928] border border-[#8A7BFF]/25 p-4 shadow-2xl ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#8A7BFF_1px,transparent_1px)] [background-size:18px_18px] opacity-15 pointer-events-none" />
          <svg viewBox="0 0 380 280" fill="none" className="w-full h-auto overflow-visible select-none">
            <defs>
              <linearGradient id="purpleGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C3BCED" />
                <stop offset="50%" stopColor="#8A7BFF" />
                <stop offset="100%" stopColor="#6C5CE7" />
              </linearGradient>
              <linearGradient id="areaGlowPurple" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8A7BFF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#8A7BFF" stopOpacity="0.0" />
              </linearGradient>
              <filter id="neonPurpleGlowGraphic" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Grid Coordinates in Neon Purple */}
            <line x1="30" y1="235" x2="355" y2="235" stroke="#8A7BFF" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="55" y1="25" x2="55" y2="255" stroke="#8A7BFF" strokeOpacity="0.3" strokeWidth="1.5" />
            <line x1="30" y1="130" x2="355" y2="130" stroke="#8A7BFF" strokeOpacity="0.1" strokeDasharray="3 3" />
            <line x1="200" y1="25" x2="200" y2="235" stroke="#8A7BFF" strokeOpacity="0.2" strokeDasharray="4 4" />

            {/* Area under curve fill */}
            <path
              d="M 60 235 C 120 50, 260 50, 335 235 Z"
              fill="url(#areaGlowPurple)"
            />

            {/* Main Parabolic Arc with glowing purple vector */}
            <path
              d="M 60 235 C 120 50, 260 50, 335 235"
              stroke="url(#purpleGradientHero)"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              filter="url(#neonPurpleGlowGraphic)"
            />

            {/* Intermediate Points on the curve */}
            <circle cx="100" cy="165" r="4.5" fill="#3AE8C7" />
            <circle cx="285" cy="155" r="4.5" fill="#FF7A60" />

            {/* Peak Vertex Point */}
            <g className="cursor-pointer">
              <circle cx="195" cy="74" r="26" fill="#8A7BFF" opacity="0.18" />
              <circle cx="195" cy="74" r="14" fill="#FF7A60" opacity="0.35" />
              <circle cx="195" cy="74" r="7" fill="#FFFFFF" stroke="#FF7A60" strokeWidth="2.5" />
              
              {/* Vertex Callout Box */}
              <rect x="95" y="16" width="200" height="34" rx="8" fill="#0B0C10" stroke="#8A7BFF" strokeWidth="1.2" />
              <text x="195" y="38" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#8A7BFF" fontWeight="700">
                ⚡ VERTEX: Peak Olympiad Rank
              </text>
            </g>

            {/* Floating Live Metric Card */}
            <g transform="translate(245, 155)">
              <rect x="0" y="0" width="112" height="66" rx="12" fill="#0B0C10" stroke="#8A7BFF" strokeOpacity="0.35" strokeWidth="1" />
              <circle cx="18" cy="22" r="5" fill="#3AE8C7" />
              <text x="30" y="25" fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#B0A8D9">
                Live Delta
              </text>
              <text x="16" y="52" fontFamily="Space Grotesk, sans-serif" fontSize="20" fontWeight="700" fill="#3AE8C7">
                ↑ 46%
              </text>
            </g>
          </svg>
          {badge && (
            <span className="absolute bottom-3 left-4 text-[10px] font-semibold text-[#8A7BFF] uppercase tracking-wider bg-[#0B0C10] px-2 py-0.5 rounded border border-[#8A7BFF]/30">
              {badge}
            </span>
          )}
        </div>
      );

    case "classroom-session":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-[#121420] border border-[#8A7BFF]/20 p-5 text-white shadow-lg ${className}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[#8A7BFF]/15 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A60] animate-pulse" />
              <span className="font-semibold text-white">MathsVertex Live Studio · Batch of 6</span>
            </div>
            <span className="text-[#3AE8C7] font-mono text-[11px] font-bold">UAE: 05:30 PM</span>
          </div>

          <svg viewBox="0 0 360 190" fill="none" className="w-full h-auto mt-3 select-none">
            {/* Virtual Board Background */}
            <rect x="10" y="10" width="225" height="170" rx="10" fill="#0B0C10" stroke="#8A7BFF" strokeOpacity="0.25" />
            
            {/* Whiteboard problem text */}
            <text x="25" y="35" fontFamily="Space Grotesk, sans-serif" fontSize="11" fill="#8A7BFF" fontWeight="700">
              IMO 2026: Working Backwards
            </text>
            
            {/* Geometric diagram on board */}
            <polygon points="50,140 180,140 115,60" stroke="#3AE8C7" strokeWidth="2.5" fill="rgba(58,232,199,0.1)" />
            <circle cx="115" cy="113" r="27" stroke="#FF7A60" strokeWidth="1.8" fill="none" strokeDasharray="3 3" />
            <text x="105" y="117" fontSize="10" fill="#FFFFFF" fontWeight="bold">r = 3</text>
            
            {/* Small student video grid on right */}
            <rect x="245" y="10" width="105" height="48" rx="8" fill="#161928" stroke="#8A7BFF" strokeOpacity="0.3" />
            <circle cx="265" cy="34" r="14" fill="#8A7BFF" />
            <text x="260" y="38" fontSize="10" fill="#0B0C10" fontWeight="bold">HA</text>
            <text x="286" y="32" fontSize="9" fill="#FFFFFF" fontWeight="600">Hasib Sir</text>
            <text x="286" y="44" fontSize="8" fill="#3AE8C7">Mentor</text>

            <rect x="245" y="65" width="105" height="38" rx="6" fill="#0B0C10" stroke="#8A7BFF" strokeOpacity="0.15" />
            <circle cx="262" cy="84" r="10" fill="#FF7A60" />
            <text x="278" y="87" fontSize="9" fill="#B0A8D9">Aanya (Gr 6)</text>

            <rect x="245" y="110" width="105" height="38" rx="6" fill="#0B0C10" stroke="#8A7BFF" strokeOpacity="0.15" />
            <circle cx="262" cy="129" r="10" fill="#3AE8C7" />
            <text x="278" y="132" fontSize="9" fill="#B0A8D9">Kabir (Gr 6)</text>

            <rect x="245" y="154" width="105" height="26" rx="6" fill="#0B0C10" />
            <text x="297" y="171" textAnchor="middle" fontSize="9" fill="#B0A8D9" opacity="0.6">+ 4 Students</text>
          </svg>
        </div>
      );

    case "olympiad-trophy":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-[#121420] border border-[#8A7BFF]/25 p-6 text-center text-white shadow-xl ${className}`}>
          <svg viewBox="0 0 200 200" fill="none" className="w-32 h-32 mx-auto select-none">
            <defs>
              <linearGradient id="trophyGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C3BCED" />
                <stop offset="40%" stopColor="#8A7BFF" />
                <stop offset="100%" stopColor="#6C5CE7" />
              </linearGradient>
            </defs>
            {/* Halo */}
            <circle cx="100" cy="90" r="60" fill="#8A7BFF" opacity="0.15" />
            
            {/* Cup */}
            <path d="M60 40 L140 40 L132 100 C132 120, 118 135, 100 135 C82 135, 68 120, 68 100 Z" fill="url(#trophyGradPurple)" />
            {/* Handles */}
            <path d="M60 55 C40 55, 40 85, 63 90" stroke="url(#trophyGradPurple)" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M140 55 C160 55, 160 85, 137 90" stroke="url(#trophyGradPurple)" strokeWidth="7" fill="none" strokeLinecap="round" />
            {/* Stem & Base */}
            <rect x="94" y="135" width="12" height="22" fill="#6C5CE7" />
            <path d="M70 157 L130 157 L124 175 L76 175 Z" fill="url(#trophyGradPurple)" />
            {/* Mathematical Vertex star on trophy */}
            <circle cx="100" cy="80" r="14" fill="#0B0C10" />
            <text x="100" y="85" textAnchor="middle" fontSize="14" fill="#3AE8C7" fontWeight="bold">∑</text>
          </svg>
          {/* Metrics in Neon Purple (#8A7BFF) */}
          <div className="mt-2 font-display text-lg font-bold text-[#8A7BFF]">340+ Qualifiers in 2026</div>
          <p className="text-xs text-[#B0A8D9] mt-1">SOF IMO · SilverZone IOM · SASMO · AMC 8/10</p>
        </div>
      );

    case "diagnostic-dashboard":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-[#121420] border border-[#8A7BFF]/25 p-5 shadow-xl text-white ${className}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[#8A7BFF]/15">
            <div>
              <span className="text-[10px] font-bold text-[#8A7BFF] uppercase tracking-wider block">Student Diagnostic Report</span>
              <span className="font-display text-sm font-bold text-white">Aanya Sharma · Grade 6 (CBSE)</span>
            </div>
            <span className="text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/15 px-2.5 py-0.5 rounded-full border border-[#3AE8C7]/30">
              Verified Score
            </span>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold text-white mb-1">
                <span>Algebra &amp; Equations</span>
                {/* Numbers in Neon Purple */}
                <span className="text-[#8A7BFF] font-bold">94% Mastery</span>
              </div>
              <div className="w-full h-2 bg-[#0B0C10] rounded-full overflow-hidden border border-[#8A7BFF]/20">
                <div className="h-full bg-[#8A7BFF] rounded-full" style={{ width: "94%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-white mb-1">
                <span>Visual Geometry &amp; Angles</span>
                <span className="text-[#3AE8C7] font-bold">88% Mastery</span>
              </div>
              <div className="w-full h-2 bg-[#0B0C10] rounded-full overflow-hidden border border-[#3AE8C7]/20">
                <div className="h-full bg-[#3AE8C7] rounded-full" style={{ width: "88%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-white mb-1">
                <span>Mental Speed Calculation</span>
                <span className="text-[#FF7A60] font-bold">3.4x Faster</span>
              </div>
              <div className="w-full h-2 bg-[#0B0C10] rounded-full overflow-hidden border border-[#FF7A60]/20">
                <div className="h-full bg-[#FF7A60] rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#8A7BFF]/15 flex items-center justify-between text-xs text-[#B0A8D9]">
            <span>Weekly Parent WhatsApp Dispatch</span>
            <span className="font-semibold text-[#3AE8C7]">Every Sunday</span>
          </div>
        </div>
      );

    case "mental-speed":
      return <MentalMathVisualizer className={className} />;

    case "geometry-proof":
      return (
        <div className={`relative w-full rounded-2xl overflow-hidden bg-[#121420] border border-[#8A7BFF]/20 p-4 ${className}`}>
          <svg viewBox="0 0 240 130" fill="none" className="w-full h-auto select-none">
            <circle cx="120" cy="65" r="50" stroke="#8A7BFF" strokeWidth="2" fill="none" />
            <polygon points="80,95 160,95 120,20" stroke="#FF7A60" strokeWidth="2" fill="rgba(255,122,96,0.1)" />
            <line x1="120" y1="20" x2="120" y2="95" stroke="#3AE8C7" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="125" y="60" fontSize="9" fill="#3AE8C7" fontWeight="600">h = 75</text>
            <circle cx="120" cy="20" r="3.5" fill="#8A7BFF" />
            <circle cx="80" cy="95" r="3.5" fill="#FF7A60" />
            <circle cx="160" cy="95" r="3.5" fill="#FF7A60" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
