import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ProgramsPage } from "./components/ProgramsPage";
import { ProgramDetailPage } from "./components/ProgramDetailPage";
import { MentorsPage } from "./components/MentorsPage";
import { MentorDetailPage } from "./components/MentorDetailPage";
import { CoursesPage } from "./components/CoursesPage";
import { HowItWorksPage } from "./components/HowItWorksPage";
import { ParentReviewsPage } from "./components/ParentReviewsPage";
import { FaqPage } from "./components/FaqPage";
import { DiagnosticPage } from "./components/DiagnosticPage";
import { Footer } from "./components/Footer";
import { DemoModal } from "./components/DemoModal";

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [prefillGrade, setPrefillGrade] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleOpenDemo = (grade?: string) => {
    setPrefillGrade(grade);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
    setPrefillGrade(undefined);
  };

  const handleNavigate = (route: string) => {
    window.location.hash = route;
    setCurrentPage(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to hash changes for deep linking across all pages
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (!hash || hash === "home") {
        setCurrentPage("home");
      } else if (hash === "book") {
        setDemoModalOpen(true);
      } else {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Update HTML document title based on current page
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: "MathsVertex — Online Coaching for Competitive Math Exams",
      programs: "Programs & Curriculum Tracks — MathsVertex",
      courses: "Dedicated Math Accelerators & Courses — MathsVertex",
      mentors: "Our Faculty & Olympiad Mentors — MathsVertex",
      how: "How It Works: Free Demo to Olympiad Peak — MathsVertex",
      parents: "Parent Reviews & Exam Results — MathsVertex",
      faq: "Frequently Asked Questions — MathsVertex",
      diagnostic: "Live Math Diagnostic Challenge — MathsVertex"
    };

    const topicTitles: Record<string, string> = {
      "school-maths": "School Maths Curriculum Mastery (Class 1–10) — MathsVertex",
      "olympiads": "Math Olympiads (IMO, IOM, SASMO, AMC) Coaching — MathsVertex",
      "mat-reasoning": "MAT & Logical Reasoning Preparation — MathsVertex",
      "asset-prep": "ASSET Mathematics Prep & Diagnostic — MathsVertex",
      "mental-maths": "Mental Maths Mastery Accelerator — MathsVertex",
      "grade-elevation": "Grade Elevation & Prerequisite Recovery — MathsVertex"
    };

    if (currentPage.startsWith("program/")) {
      const topicId = currentPage.replace("program/", "");
      document.title = topicTitles[topicId] || "16-Week Syllabus & Program Details — MathsVertex";
    } else if (currentPage.startsWith("topic/")) {
      const topicId = currentPage.replace("topic/", "");
      document.title = topicTitles[topicId] || "Topic Details — MathsVertex";
    } else if (currentPage.startsWith("course/")) {
      const courseId = currentPage.replace("course/", "");
      document.title = topicTitles[courseId] || "Dedicated Course Details — MathsVertex";
    } else if (currentPage.startsWith("mentor/")) {
      document.title = "Mentor Pedagogy & Profile — MathsVertex";
    } else {
      document.title = pageTitles[currentPage] || "MathsVertex — Online Competitive Math Coaching";
    }
  }, [currentPage]);

  // Render the current view
  const renderCurrentView = () => {
    // Topic & Program detail routes
    if (currentPage.startsWith("program/")) {
      const programId = currentPage.replace("program/", "");
      return (
        <ProgramDetailPage
          programId={programId}
          onOpenDemo={handleOpenDemo}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPage.startsWith("topic/")) {
      const topicId = currentPage.replace("topic/", "");
      return (
        <ProgramDetailPage
          programId={topicId}
          onOpenDemo={handleOpenDemo}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPage.startsWith("course/")) {
      const courseId = currentPage.replace("course/", "");
      return (
        <ProgramDetailPage
          programId={courseId}
          onOpenDemo={handleOpenDemo}
          onNavigate={handleNavigate}
        />
      );
    }

    // Mentor detail route
    if (currentPage.startsWith("mentor/")) {
      const mentorId = currentPage.replace("mentor/", "");
      return (
        <MentorDetailPage
          mentorId={mentorId}
          onOpenDemo={handleOpenDemo}
          onNavigate={handleNavigate}
        />
      );
    }

    switch (currentPage) {
      case "diagnostic":
        return <DiagnosticPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "programs":
        return <ProgramsPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "courses":
        return <CoursesPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "mentors":
        return <MentorsPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "how":
        return <HowItWorksPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "parents":
        return <ParentReviewsPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "faq":
        return <FaqPage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
      case "home":
      default:
        return <HomePage onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0C10] text-[#F3F4F8]">
      {/* Dynamic Header */}
      <Header
        onOpenDemo={handleOpenDemo}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Dynamic Page Main Content */}
      <main className="flex-1 animate-in fade-in duration-150">
        {renderCurrentView()}
      </main>

      {/* Global Footer */}
      <Footer onOpenDemo={handleOpenDemo} onNavigate={handleNavigate} />

      {/* Free Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemo}
        prefillGrade={prefillGrade}
      />
    </div>
  );
}
