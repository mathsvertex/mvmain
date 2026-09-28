import React, { useState } from "react";
import { Menu, X, ArrowRight, ChevronDown, BookOpen, Sparkles, Zap, Target, Brain, Award } from "lucide-react";

interface HeaderProps {
  onOpenDemo: (prefillGrade?: string) => void;
  currentPage: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [topicsDropdownOpen, setTopicsDropdownOpen] = useState(false);

  const navLinks = [
    { label: "Home", route: "home" },
    { label: "Programs", route: "programs", hasDropdown: true },
    { label: "Courses", route: "courses" },
    { label: "Diagnostic", route: "diagnostic" },
    { label: "Mentors", route: "mentors" },
    { label: "How It Works", route: "how" },
    { label: "Reviews", route: "parents" }
  ];

  const topicItems = [
    { id: "school-maths", title: "School Maths", sub: "Class 1–10 Curriculum", icon: BookOpen },
    { id: "olympiads", title: "Math Olympiads", sub: "IMO, IOM, SASMO, AMC", icon: Award },
    { id: "mat-reasoning", title: "MAT Reasoning", sub: "Aptitude & Spatial Logic", icon: Brain },
    { id: "asset-prep", title: "ASSET Prep", sub: "Critical Thinking & HOTS", icon: Sparkles },
    { id: "mental-maths", title: "Mental Maths", sub: "Vedic Speed Arithmetic", icon: Zap },
    { id: "grade-elevation", title: "Grade Elevation", sub: "Prerequisite Gap Recovery", icon: Target }
  ];

  const handleNavClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    setTopicsDropdownOpen(false);
    onNavigate(route);
  };

  const handleTopicClick = (e: React.MouseEvent, topicId: string) => {
    e.preventDefault();
    setTopicsDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(`program/${topicId}`);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#8A7BFF]/15 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Wordmark with mathematical vertex icon in Neon Purple and Coral */}
        <button
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white hover:opacity-95 transition-opacity cursor-pointer"
        >
          <svg className="w-7 h-7 flex-none" viewBox="0 0 28 28" fill="none">
            <path
              d="M3 24 L12 7 L16 15 L25 3"
              stroke="#8A7BFF"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="7" r="3.2" fill="#FF7A60" />
            <circle cx="12" cy="7" r="5.5" stroke="#8A7BFF" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
          <span className="tracking-tight font-extrabold text-white">
            Maths<span className="text-[#8A7BFF]">Vertex</span>
          </span>
        </button>

        {/* Navigation links in Light Purple/Lavender (#B0A8D9) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#B0A8D9]">
          {navLinks.map((link) => {
            const isActive =
              currentPage === link.route ||
              (link.route === "programs" && currentPage.startsWith("program/")) ||
              (link.route === "courses" && currentPage.startsWith("course/")) ||
              (link.route === "mentors" && currentPage.startsWith("mentor/"));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.route}
                  className="relative"
                  onMouseEnter={() => setTopicsDropdownOpen(true)}
                  onMouseLeave={() => setTopicsDropdownOpen(false)}
                >
                  <button
                    onClick={(e) => handleNavClick(e, link.route)}
                    className={`transition-colors py-1 flex items-center gap-1 cursor-pointer ${
                      isActive ? "text-[#8A7BFF] font-semibold" : "hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8A7BFF] rounded-full shadow-[0_0_10px_rgba(138,123,255,0.9)]" />
                    )}
                  </button>

                  {/* Dropdown with all dedicated topic pages */}
                  {topicsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-[#121420] border border-[#8A7BFF]/30 rounded-2xl shadow-2xl p-3 grid grid-cols-1 gap-1 animate-in fade-in duration-100 z-50">
                      <div className="text-[11px] font-bold text-[#8A7BFF] uppercase tracking-wider px-3 py-1">
                        Dedicated Topic Pages
                      </div>
                      {topicItems.map((topic) => {
                        const Icon = topic.icon;
                        return (
                          <button
                            key={topic.id}
                            onClick={(e) => handleTopicClick(e, topic.id)}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#8A7BFF]/15 text-left transition-colors cursor-pointer group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#0B0C10] border border-[#8A7BFF]/20 flex items-center justify-center text-[#8A7BFF] group-hover:border-[#8A7BFF] flex-none">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover:text-[#8A7BFF]">
                                {topic.title}
                              </div>
                              <div className="text-[10px] text-[#B0A8D9]/70">
                                {topic.sub}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                      <div className="pt-2 border-t border-[#8A7BFF]/15 mt-1">
                        <button
                          onClick={(e) => handleNavClick(e, "programs")}
                          className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-center text-[#3AE8C7] hover:bg-[#3AE8C7]/10 transition-colors cursor-pointer"
                        >
                          View All Programs Overview →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.route}
                onClick={(e) => handleNavClick(e, link.route)}
                className={`transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? "text-[#8A7BFF] font-semibold"
                    : "hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8A7BFF] rounded-full shadow-[0_0_10px_rgba(138,123,255,0.9)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA: Coral/Light Orange Gradient Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenDemo()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] shadow-[0_4px_18px_rgba(255,122,96,0.35)] hover:shadow-[0_6px_24px_rgba(255,122,96,0.5)] transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#B0A8D9] hover:text-white hover:bg-[#8A7BFF]/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121420] border-b border-[#8A7BFF]/20 px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.route);
                }}
                className={`px-3 py-2 text-left text-base font-medium rounded-lg transition-colors cursor-pointer ${
                  currentPage === link.route
                    ? "bg-[#8A7BFF]/15 text-[#8A7BFF] font-semibold border-l-2 border-[#8A7BFF]"
                    : "text-[#B0A8D9] hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Dedicated Topic Links in Mobile Drawer */}
          <div className="pt-3 border-t border-[#8A7BFF]/20 space-y-2">
            <span className="text-[11px] font-bold text-[#8A7BFF] uppercase tracking-wider block px-2">
              Topic Deep Dives:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {topicItems.map((topic) => (
                <button
                  key={topic.id}
                  onClick={(e) => handleTopicClick(e, topic.id)}
                  className="p-2.5 rounded-xl bg-[#0B0C10] border border-[#8A7BFF]/15 text-left hover:border-[#8A7BFF] transition-colors cursor-pointer"
                >
                  <span className="text-xs font-semibold text-white block">{topic.title}</span>
                  <span className="text-[10px] text-[#B0A8D9] block">{topic.sub}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#8A7BFF]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] shadow-[0_4px_18px_rgba(255,122,96,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#B0A8D9]/70 mt-2">
              45 min · Free diagnostic · No credit card required
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
