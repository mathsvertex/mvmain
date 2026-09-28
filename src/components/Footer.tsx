import React from "react";
import { ArrowRight, MessageSquare, Mail, Phone, Sparkles, Brain, Award } from "lucide-react";
import { BUSINESS_WHATSAPP_NUMBER } from "../data/coachingData";

interface FooterProps {
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate?: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onNavigate }) => {
  const handleNav = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.hash = route;
    }
  };

  return (
    <div className="bg-[#0B0C10]">
      {/* Final Call to Action Band */}
      <section className="py-16" id="book">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121420] border border-[#8A7BFF]/30 text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            {/* Background mathematical decoration & parabola glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#8A7BFF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF7A60]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3AE8C7] animate-pulse" />
                Zero Risk · No Credit Card Required
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-white tracking-tight">
                See a live class before you decide anything
              </h2>

              <p className="text-base sm:text-lg text-[#B0A8D9] leading-relaxed">
                Book a free 45-minute demo—your child meets a real mentor, and you get a diagnostic starting point, not an aggressive sales call.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Primary CTA in Coral/Light Orange Gradient */}
                <button
                  onClick={() => onOpenDemo()}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_6px_24px_rgba(255,122,96,0.4)] transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=Hi%20MathsVertex,%20I%20would%20like%20to%20inquire%20about%20your%20upcoming%20batches.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-full text-base font-semibold text-white border border-[#8A7BFF]/30 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="text-xs text-[#B0A8D9]/70">
                Batches are strictly capped at 6 students to maintain direct mentor engagement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Dark Navy Footer */}
      <footer className="bg-[#08090D] border-t border-[#8A7BFF]/15 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Col 1: Wordmark & Statement */}
            <div className="space-y-3">
              <button
                onClick={() => handleNav("home")}
                className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white cursor-pointer"
              >
                <svg className="w-6 h-6 flex-none" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M3 24 L12 7 L16 15 L25 3"
                    stroke="#8A7BFF"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="7" r="3.2" fill="#FF7A60" />
                </svg>
                <span>Maths<span className="text-[#8A7BFF]">Vertex</span></span>
              </button>
              <p className="text-sm text-[#B0A8D9] leading-relaxed">
                Live online coaching for competitive mathematics from school syllabus to international Olympiads (IMO, IOM, MAT, ASSET). Batches strictly capped at 6 students.
              </p>
              <div className="text-xs text-[#B0A8D9]/60 pt-1">
                Serving students across UAE, India, Singapore, UK, and USA.
              </div>
            </div>

            {/* Col 2: Programs Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-sm text-[#8A7BFF] mb-3 uppercase tracking-wider">
                Dedicated Topics
              </h4>
              <ul className="space-y-2 text-xs text-[#B0A8D9]">
                <li><button onClick={() => handleNav("program/school-maths")} className="hover:text-white transition-colors cursor-pointer text-left">School Maths (Class 1–10)</button></li>
                <li><button onClick={() => handleNav("program/olympiads")} className="hover:text-white transition-colors cursor-pointer text-left">Math Olympiads (IMO / IOM)</button></li>
                <li><button onClick={() => handleNav("program/mat-reasoning")} className="hover:text-white transition-colors cursor-pointer text-left">MAT (Mental Ability Test)</button></li>
                <li><button onClick={() => handleNav("program/asset-prep")} className="hover:text-white transition-colors cursor-pointer text-left">ASSET Preparation</button></li>
                <li><button onClick={() => handleNav("program/mental-maths")} className="hover:text-white transition-colors cursor-pointer text-left">Mental Maths Mastery</button></li>
                <li><button onClick={() => handleNav("program/grade-elevation")} className="hover:text-white transition-colors cursor-pointer text-left">Grade Elevation Program</button></li>
              </ul>
            </div>

            {/* Col 3: Interactive Tests & Tools */}
            <div>
              <h4 className="font-display font-semibold text-sm text-[#8A7BFF] mb-3 uppercase tracking-wider">
                Interactive Diagnostic
              </h4>
              <ul className="space-y-2 text-xs text-[#B0A8D9]">
                <li><button onClick={() => handleNav("diagnostic")} className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-[#3AE8C7]">★ Live Diagnostic Challenge</button></li>
                <li><button onClick={() => handleNav("program/olympiads")} className="hover:text-white transition-colors cursor-pointer text-left">Modular Clock Sandbox</button></li>
                <li><button onClick={() => handleNav("program/mental-maths")} className="hover:text-white transition-colors cursor-pointer text-left">Speed Arithmetic Matrix</button></li>
                <li><button onClick={() => handleNav("parents")} className="hover:text-white transition-colors cursor-pointer text-left">Parent Reviews &amp; Results</button></li>
                <li><button onClick={() => handleNav("mentors")} className="hover:text-white transition-colors cursor-pointer text-left">Faculty Directory</button></li>
                <li><button onClick={() => handleNav("faq")} className="hover:text-white transition-colors cursor-pointer text-left">Admissions FAQ</button></li>
              </ul>
            </div>

            {/* Col 4: Direct Contact */}
            <div>
              <h4 className="font-display font-semibold text-sm text-[#8A7BFF] mb-3 uppercase tracking-wider">
                Contact &amp; Admissions
              </h4>
              <ul className="space-y-2.5 text-xs text-[#B0A8D9]">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#8A7BFF]" />
                  <span>hello@mathsvertex.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#8A7BFF]" />
                  <span>+91 88580 79444</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp: +91 88580 79444</span>
                </li>
                <li className="pt-1">
                  <button
                    onClick={() => onOpenDemo()}
                    className="text-[#FF7A60] font-semibold hover:underline cursor-pointer"
                  >
                    Book a free demo class →
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#8A7BFF]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B0A8D9]/50">
            <div>© 2026 MathsVertex. Online coaching for competitive math exams. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span aria-hidden="true">·</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span aria-hidden="true">·</span>
              <span className="hover:text-white cursor-pointer">Parent Trust Code</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
