import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, Users, Calendar, Clock, Star, BookOpen, ShieldCheck, ChevronRight, Eye, Zap, Award } from "lucide-react";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { MathGraphic, MathIllustrationType } from "./MathGraphic";
import { TopicInteractiveSandbox } from "./TopicInteractiveSandbox";

export interface ProgramDetailPageProps {
  programId: string;
  onOpenDemo: (prefillGrade?: string) => void;
  onNavigate: (route: string) => void;
}

interface SyllabusModule {
  title: string;
  weeks: string;
  topics: string[];
  deliverable: string;
}

interface SampleProblemItem {
  q: string;
  standard: string;
  vertexMethod: string;
  timeSaved: string;
}

interface TopicDetail {
  title: string;
  badge: string;
  gradeSpan: string;
  headline: string;
  overview: string;
  batchRatio: string;
  weeklySessions: string;
  keyMentor: string;
  mentorId: string;
  mentorRole: string;
  mentorInitial: string;
  graphicType: MathIllustrationType;
  modules: SyllabusModule[];
  pedagogyPoints: { title: string; desc: string }[];
  sampleProblems: SampleProblemItem[];
  timetable: { batch: string; ist: string; gst: string; sgt: string; days: string }[];
  reviews: { name: string; grade: string; outcome: string; text: string }[];
  examFocus: string[];
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({
  programId,
  onOpenDemo,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<"syllabus" | "sandbox" | "pedagogy" | "problems" | "schedule">("syllabus");
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});

  const toggleSolution = (idx: number) => {
    setRevealedSolutions((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const detailsMap: Record<string, TopicDetail> = {
    "school-maths": {
      title: "School Maths Curriculum Mastery",
      badge: "Curriculum Excellence · Class 1 to 10",
      gradeSpan: "Class 1–10",
      headline: "Master every school syllabus topic with 100% conceptual clarity before exams arrive.",
      overview: "Designed for CBSE, IB (PYP/MYP), Cambridge (Checkpoint/IGCSE), and American curriculums. We do not just teach step-by-step textbook exercises; we teach the foundational theorems, algebraic proofs, and geometry visualization so school homework becomes effortless and exam anxiety disappears.",
      batchRatio: "1:6 Mentor to Student Ratio",
      weeklySessions: "3 Live Interactive Sessions / Week",
      keyMentor: "Sakshi Arora",
      mentorId: "sakshi-arora",
      mentorRole: "Lead Mentor · School Maths (M.Sc. Maths, 7+ yrs teaching)",
      mentorInitial: "SA",
      graphicType: "classroom-session",
      modules: [
        {
          title: "Phase 1: Number Systems, Fractions & Pre-Algebra",
          weeks: "Weeks 1–4",
          topics: [
            "Visual unit fractions, improper conversions & decimals",
            "Integers on coordinate planes & absolute values",
            "Fast prime factorization & Euclidean LCM/HCF shortcuts",
            "Order of operations without mechanical PEMDAS confusion"
          ],
          deliverable: "Diagnostic Baseline Assessment & Unit 1 Mastery Check"
        },
        {
          title: "Phase 2: Algebraic Foundations & Balance Equations",
          weeks: "Weeks 5–8",
          topics: [
            "Variable balance models and multi-step equations",
            "Linear equations in one and two variables",
            "Translating word problems into algebraic systems without hesitation",
            "Coordinate graphing, slopes & linear intercepts"
          ],
          deliverable: "Algebra Fluency Circuit & Speed Formulation Test"
        },
        {
          title: "Phase 3: Spatial Geometry, Mensuration & Visual Proofs",
          weeks: "Weeks 9–12",
          topics: [
            "Angle chasing, transversal lines and polygon angle sums",
            "Area and perimeter proofs without formula cramming",
            "Pythagorean theorem derivations & spatial 3D volume visualization",
            "Circle properties, chords, tangents & arc geometry"
          ],
          deliverable: "Geometric Construction & Proof Presentation Clinic"
        },
        {
          title: "Phase 4: School Term Exam Simulation Series",
          weeks: "Weeks 13–16",
          topics: [
            "Full-length timed school mock tests mapped to your specific board",
            "Personal error-log analysis and recurring mistake correction",
            "Subjective answer presentation techniques to secure full step marks",
            "Speed-checking algorithms to catch silly arithmetic slips"
          ],
          deliverable: "Final School Term Exam Readiness Certification & Progress Report"
        }
      ],
      pedagogyPoints: [
        {
          title: "The 'Why Before How' Principle",
          desc: "Instead of forcing students to memorize formulas like (a + b)² = a² + 2ab + b², we construct the visual geometric area model so they immediately understand and remember it forever."
        },
        {
          title: "Active Whiteboard Participation",
          desc: "In our capped batches of 6, no student sits silently on mute. Every student writes on the live interactive screen, explaining their problem-solving path to the mentor."
        },
        {
          title: "Direct Board Curriculum Synchronization",
          desc: "We coordinate directly with your child's upcoming school chapter tests, ensuring coaching reinforcement translates directly into top class grades."
        }
      ],
      sampleProblems: [
        {
          q: "If 3x + 7 = 28, find the value of 6x - 5.",
          standard: "Subtract 7 from 28 to get 3x = 21. Divide by 3 to get x = 7. Then substitute into 6(7) - 5 = 42 - 5 = 37. Takes 45 seconds of handwriting.",
          vertexMethod: "Direct Scaling Insight: Notice 6x is simply 2 × (3x). Since 3x = 21, 6x must be 42. Immediately 42 - 5 = 37 in 3 seconds flat!",
          timeSaved: "3 sec vs 45 sec (93% time saved)"
        },
        {
          q: "A rectangle has a perimeter of 48 cm. If its length is twice its width, find its area.",
          standard: "Write 2(L + W) = 48, substitute L = 2W, solve 2(3W) = 48, 6W = 48, W = 8, L = 16, Area = 16 × 8 = 128.",
          vertexMethod: "Ratio Thinking: Perimeter = 2(2 + 1) = 6 equal width-units. 48 ÷ 6 = 8 cm per width unit. Length = 16. Area = 8 × 16 = 128 cm² paperless!",
          timeSaved: "Solved in 8 seconds in the head"
        },
        {
          q: "What is the remainder when 4x³ - 2x² + 5x - 7 is divided by (x - 2)?",
          standard: "Perform long polynomial division through 4 steps of algebraic subtraction.",
          vertexMethod: "Remainder Theorem: Simply evaluate P(2) = 4(8) - 2(4) + 5(2) - 7 = 32 - 8 + 10 - 7 = 27 in one mental line.",
          timeSaved: "Solved in 10 seconds vs 2 minutes"
        }
      ],
      timetable: [
        { batch: "Weekday Batch A", ist: "05:00 PM – 06:00 PM", gst: "03:30 PM – 04:30 PM", sgt: "07:30 PM – 08:30 PM", days: "Mon, Wed, Fri" },
        { batch: "Weekday Batch B", ist: "06:30 PM – 07:30 PM", gst: "05:00 PM – 06:00 PM", sgt: "09:00 PM – 10:00 PM", days: "Tue, Thu, Sat" },
        { batch: "Weekend Intensive", ist: "10:30 AM – 12:00 PM", gst: "09:00 AM – 10:30 AM", sgt: "01:00 PM – 02:30 PM", days: "Sat & Sun" }
      ],
      reviews: [
        {
          name: "Ritu Singhal",
          grade: "Mother of Kabir, Class 7 (CBSE, Delhi)",
          outcome: "Term 1 Math Grade jumped from 68% to 94%",
          text: "Kabir always got terrified of word problems in algebra. Sakshi ma'am broke down the equation translation so intuitively that he finished his school mid-term 20 minutes before time."
        },
        {
          name: "Tariq Mansoor",
          grade: "Father of Sarah, Grade 8 (IB MYP, Dubai)",
          outcome: "Achieved Criterion A/B 7/7 top band",
          text: "The small batch of 6 made all the difference. In regular school she never spoke up, but at MathsVertex she was answering proofs on screen in every single session."
        }
      ],
      examFocus: ["CBSE Board Exams", "Cambridge Checkpoint & IGCSE", "IB MYP eAssessments", "School Mid-Terms & Finals"]
    },
    "olympiads": {
      title: "Math Olympiads (IMO / IOM / SASMO / AMC)",
      badge: "Elite Competition Track · Class 3 to 12",
      gradeSpan: "Class 3–12",
      headline: "The elite problem-solving framework that produced 340+ national qualifiers in 2026.",
      overview: "Standard school mathematics teaches algorithms; Olympiads reward non-routine intuition. Our mentors are Olympiad alumni who teach modular arithmetic, Dirichlet's Pigeonhole Principle, combinatorics, and geometry construction tricks tested in IMO, SilverZone IOM, Singapore SASMO, Kangaroo Math, and AMC 8/10.",
      batchRatio: "1:6 Elite Batch Ratio",
      weeklySessions: "3 Live Sessions + 1 Timed Mock / Week",
      keyMentor: "Mohd Hasib Alam",
      mentorId: "hasib-alam",
      mentorRole: "Head Mentor · Math Olympiads (IMO/IOM Specialist, 8+ yrs coaching)",
      mentorInitial: "HA",
      graphicType: "olympiad-trophy",
      modules: [
        {
          title: "Phase 1: Number Theory, Modular Clocks & Divisibility",
          weeks: "Weeks 1–4",
          topics: [
            "Modular arithmetic clocks and remainder cycles",
            "Divisibility patterns beyond standard textbook rules",
            "Diophantine equations and Euclidean GCD algorithms",
            "Last digit, last two digits, and prime factorization powers"
          ],
          deliverable: "Level 1 Number Theory Olympiad Sprint Benchmark"
        },
        {
          title: "Phase 2: Combinatorics, Counting Trees & Logic",
          weeks: "Weeks 5–8",
          topics: [
            "Dirichlet's Pigeonhole Principle (worst-case proofs)",
            "Permutations & Combinations (Stars and Bars technique)",
            "Principle of Inclusion-Exclusion and tournament tree modeling",
            "Parity arguments, coloring invariants and game strategy proofs"
          ],
          deliverable: "Combinatorics & Logic Speed Arena"
        },
        {
          title: "Phase 3: Non-Routine Geometry & Visual Proofs",
          weeks: "Weeks 9–12",
          topics: [
            "Cyclic quadrilaterals & Ptolemy's Theorem",
            "Auxiliary line constructions and reflection symmetry",
            "Area ratios, mass points, and Ceve/Menelaus theorems",
            "Inscribed/circumscribed circle tangencies without trig"
          ],
          deliverable: "Olympiad Geometry Construction Master Portfolio"
        },
        {
          title: "Phase 4: IMO / IOM Level 1 & Level 2 Master Camp",
          weeks: "Weeks 13–16",
          topics: [
            "10-year past papers solved under tournament clock pressure",
            "Achieving negative marking risk management",
            "Speed elimination heuristics for multiple-choice traps",
            "Writing rigorous subjective proofs for Level 2 qualifying rounds"
          ],
          deliverable: "Official Olympiad Mock Medal Ranking & Certificate"
        }
      ],
      pedagogyPoints: [
        {
          title: "Alumni-Led Competitive Instincts",
          desc: "Taught exclusively by mentors who have competed at national and international Olympiads, sharing the exact shortcut intuition they used to win medals."
        },
        {
          title: "Non-Routine Problem Decomposition",
          desc: "Students learn to tackle questions they have never seen before by analyzing invariants, extremals, and structural symmetries."
        },
        {
          title: "Weekly Timed Mock Simulations",
          desc: "Every weekend includes a simulated competition under real tournament time constraints with immediate WhatsApp diagnostic feedback."
        }
      ],
      sampleProblems: [
        {
          q: "Find the remainder when 3^2026 is divided by 5.",
          standard: "Compute multiple powers by hand or attempt binomial expansion.",
          vertexMethod: "Modular Cycle Method: Powers of 3 mod 5 cycle in 4 steps: 3¹=3, 3²=4, 3³=2, 3⁴=1. Since 2026 = 4 × 506 + 2, remainder is 3² mod 5 = 4!",
          timeSaved: "Solved in 8 seconds paperless"
        },
        {
          q: "How many positive integers less than 1,000 are divisible by neither 5 nor 7?",
          standard: "List multiples, attempt counting individual primes.",
          vertexMethod: "Inclusion-Exclusion: Multiples of 5 = 199. Multiples of 7 = 142. Multiples of 35 = 28. Union = 199 + 142 - 28 = 313. Answer = 999 - 313 = 686.",
          timeSaved: "Solved in 15 seconds"
        },
        {
          q: "In a drawer there are 24 red socks and 24 black socks. What is the minimum number of socks you must pull in the dark to guarantee at least one matching pair?",
          standard: "Students often guess 25 or 13 thinking of half the pairs.",
          vertexMethod: "Pigeonhole Principle: There are only k = 2 categories (colors). By PHP, pulling k + 1 = 3 socks guarantees at least two of the same color!",
          timeSaved: "Solved in 2 seconds"
        }
      ],
      timetable: [
        { batch: "Olympiad Track Alpha", ist: "06:00 PM – 07:15 PM", gst: "04:30 PM – 05:45 PM", sgt: "08:30 PM – 09:45 PM", days: "Mon, Wed, Fri" },
        { batch: "Olympiad Track Beta", ist: "07:30 PM – 08:45 PM", gst: "06:00 PM – 07:15 PM", sgt: "10:00 PM – 11:15 PM", days: "Tue, Thu, Sat" },
        { batch: "Weekend AMC Elite", ist: "04:00 PM – 05:45 PM", gst: "02:30 PM – 04:15 PM", sgt: "06:30 PM – 08:15 PM", days: "Sat & Sun" }
      ],
      reviews: [
        {
          name: "Dr. Ananya Roy",
          grade: "Mother of Aayush, Class 5 (Singapore)",
          outcome: "Gold Medalist, SASMO 2026 & SOF IMO Rank 12",
          text: "Hasib Alam sir taught Aayush to see the beauty in number theory. He went from fearing high-competition papers to qualifying for SASMO with a Gold Medal. The 1:6 batch ratio gives him constant attention."
        },
        {
          name: "Siddharth Verma",
          grade: "Father of Reyansh, Grade 7 (Dubai)",
          outcome: "IMO Level 1 score: 58/60 (School Rank 1)",
          text: "MathsVertex isn't about rote formulas. They train the child's brain to break down completely unexpected puzzles. The weekly mock tests on weekends prepared him perfectly."
        }
      ],
      examFocus: ["SOF IMO Level 1 & 2", "SilverZone IOM", "Singapore & Asian Schools SASMO", "AMC 8 & AMC 10", "Kangaroo Math"]
    },
    "mat-reasoning": {
      title: "Mental Ability Test (MAT) & Logical Reasoning",
      badge: "Cognitive Aptitude & Logic · Class 4 to 10",
      gradeSpan: "Class 4–10",
      headline: "Deconstruct non-verbal matrices, coding-decoding, and spatial reasoning under time pressure.",
      overview: "Mental Ability Tests (MAT) determine scholarship qualifications, gifted program admissions, and competitive aptitude. We train students to decipher complex series, spatial paper folds, syllogisms, and directional puzzles using cognitive visualization techniques without paper.",
      batchRatio: "1:6 Mentor to Student Ratio",
      weeklySessions: "2 Live Classes + Timed Logic Drills / Week",
      keyMentor: "Preeti Kumari",
      mentorId: "preeti-kumari",
      mentorRole: "Lead Mentor · MAT & Cognitive Logic (6+ yrs teaching)",
      mentorInitial: "PK",
      graphicType: "diagnostic-dashboard",
      modules: [
        {
          title: "Phase 1: Series Detection, Number Matrices & Alpha-Numeric",
          weeks: "Weeks 1–4",
          topics: [
            "Alpha-numeric patterns and Fibonacci progressions",
            "Grid matrix logic & hidden mathematical relations",
            "Direction sense & multi-generational family relation trees",
            "Coding-decoding positional transformations"
          ],
          deliverable: "MAT Pattern Decryption Speed Benchmark"
        },
        {
          title: "Phase 2: Non-Verbal & Spatial Reasoning",
          weeks: "Weeks 5–8",
          topics: [
            "Paper folding, cutting & punch hole detection models",
            "Mirror & water image geometric reflections",
            "Embedded figures, pattern completion, and cube dissections",
            "Rotational symmetry in 2D and 3D wireframe nets"
          ],
          deliverable: "Spatial Aptitude & 3D Net Construction Exam"
        },
        {
          title: "Phase 3: Analytical Logic, Deductions & Venn Sets",
          weeks: "Weeks 9–12",
          topics: [
            "Venn diagrams for complex categorical set overlap",
            "Syllogisms and truth-teller / liar constraint logic",
            "Circular and linear seating arrangement constraint matrices",
            "Data sufficiency and statement-assumption deduction"
          ],
          deliverable: "Analytical Deduction & Logic Matrix Showcase"
        },
        {
          title: "Phase 4: Scholarship Exam Simulation & Sprint Drills",
          weeks: "Weeks 13–16",
          topics: [
            "NTSE and competitive talent search simulated papers",
            "Rapid elimination heuristics to bypass lengthy verification",
            "Zero error rate maintenance under countdown timers",
            "Individual cognitive strength profile for parents"
          ],
          deliverable: "Official MAT Aptitude Ranking & Scholarship Readiness Report"
        }
      ],
      pedagogyPoints: [
        {
          title: "Spatial Mental Visualization",
          desc: "We train students to mentally fold, rotate, and mirror geometric nets in their heads so spatial questions take under 10 seconds."
        },
        {
          title: "Constraint Matrix Solving",
          desc: "Students learn structured constraint matrices to solve complicated multi-person seating arrangements without confusing scratch work."
        },
        {
          title: "Elimination Heuristics",
          desc: "In competitive aptitude exams, ruling out impossible options is 3x faster than solving forward. We master strategic distractor elimination."
        }
      ],
      sampleProblems: [
        {
          q: "If CLOCK is coded as 3-12-15-3-11, what is the value of TIME multiplied by 2?",
          standard: "Write letters T(20), I(9), M(13), E(5). Sum: 20 + 9 + 13 + 5 = 47. Multiply by 2 = 94.",
          vertexMethod: "Direct positional indexing with mental summation, executed in 5 seconds flat with zero scratch work.",
          timeSaved: "5 sec vs 35 sec standard derivation"
        },
        {
          q: "A cube painted blue on all sides is cut into 64 small identical cubes. How many small cubes have exactly 2 blue faces?",
          standard: "Draw 3D cube, count interior vs corner vs edge blocks on scratch pad.",
          vertexMethod: "Structural Invariant: 64 cubes = 4³. Edge cubes (excluding 2 corners per edge) have 2 painted faces. (4 - 2) = 2 per edge. Cube has 12 edges: 2 × 12 = 24 instantly!",
          timeSaved: "Solved in 4 seconds"
        },
        {
          q: "Pointing to a photograph, Rohit said, 'Her mother is the only daughter of my mother.' How is Rohit related to the girl?",
          standard: "Draw tree, parse backward sentence fragment by fragment.",
          vertexMethod: "'Only daughter of my mother' = Rohit's sister. So Rohit is her maternal uncle!",
          timeSaved: "Solved in 3 seconds"
        }
      ],
      timetable: [
        { batch: "MAT Logic Batch A", ist: "05:00 PM – 06:15 PM", gst: "03:30 PM – 04:45 PM", sgt: "07:30 PM – 08:45 PM", days: "Tue & Thu" },
        { batch: "MAT Logic Batch B", ist: "07:00 PM – 08:15 PM", gst: "05:30 PM – 06:45 PM", sgt: "09:30 PM – 10:45 PM", days: "Wed & Sat" },
        { batch: "Sunday Aptitude Camp", ist: "11:00 AM – 01:00 PM", gst: "09:30 AM – 11:30 AM", sgt: "01:30 PM – 03:30 PM", days: "Sundays" }
      ],
      reviews: [
        {
          name: "Deepak Chawla",
          grade: "Father of Aarav, Class 8 (Gurgaon)",
          outcome: "Cleared NTSE Stage 1 with 96th percentile in MAT",
          text: "Preeti ma'am's techniques for cube cuts and syllogisms were a revelation. Aarav went from getting bogged down in spatial questions to solving the entire MAT paper with 15 minutes left."
        },
        {
          name: "Farida Al-Hashimi",
          grade: "Mother of Zayd, Year 7 (Sharjah)",
          outcome: "Gifted & Talented Cognitive Score: 98th Percentile",
          text: "Zayd loves the puzzle-solving approach. The mentor treats logic like an adventure, and his critical thinking across all school subjects has visibly sharpened."
        }
      ],
      examFocus: ["NTSE Stage 1 & 2", "Competitive School Aptitude Tests", "Talent Search Exams", "Gifted & Talented Assessments"]
    },
    "asset-prep": {
      title: "ASSET Mathematics Diagnostic Prep",
      badge: "Concept Insights & Trap Avoidance · Class 3 to 9",
      gradeSpan: "Class 3–9",
      headline: "Master high-order critical reasoning and identify the subtle traps in Educational Initiatives ASSET.",
      overview: "ASSET tests whether students understand the true concept rather than superficial textbook rules. Our ASSET preparation focuses on reading comprehension of math problems, analyzing misleading distractors, and learning to explain mathematical models.",
      batchRatio: "1:6 Focused Batch",
      weeklySessions: "2 Live Interactive Sessions / Week",
      keyMentor: "Afreen Javed",
      mentorId: "afreen-javed",
      mentorRole: "Lead Mentor · ASSET Prep (M.Sc. Applied Maths, 5+ yrs teaching)",
      mentorInitial: "AJ",
      graphicType: "diagnostic-dashboard",
      modules: [
        {
          title: "Phase 1: Deconstructing ASSET Trap Questions",
          weeks: "Weeks 1–4",
          topics: [
            "Why 70% of students choose the distractor option",
            "Interpreting non-standard mathematical diagrams and charts",
            "Data sufficiency, estimation methods and realistic bounds",
            "Reading comprehension of multi-sentence math problem stems"
          ],
          deliverable: "ASSET Trap Avoidance Diagnostic Score"
        },
        {
          title: "Phase 2: Real-World Mathematical Modeling",
          weeks: "Weeks 5–8",
          topics: [
            "Rates, proportions & scale representations in diagrams",
            "Probability models without textbook formula memorization",
            "Measurement units and error propagation bounds",
            "Financial math and realistic percentages in context"
          ],
          deliverable: "HOTS Modeling Case Study Portfolio"
        },
        {
          title: "Phase 3: High-Order Thinking Skills (HOTS) Mastery",
          weeks: "Weeks 9–12",
          topics: [
            "Multi-step deduction questions and hypothesis testing",
            "Visualizing 3D perspectives from 2D isometric nets",
            "Pattern generalization and formula discovery from data tables",
            "Analyzing contradictory mathematical claims"
          ],
          deliverable: "ASSET Advanced Problem Decomposition Circuit"
        },
        {
          title: "Phase 4: Full-Length ASSET Simulation & Percentile Review",
          weeks: "Weeks 13–16",
          topics: [
            "Full-length ASSET Summer/Winter simulated tests",
            "Detailed personal skill breakdown report across all 4 quadrants",
            "Confidence building on unfamiliar problem stems",
            "Parent strategy report showing target percentile trajectory"
          ],
          deliverable: "Official ASSET Talent Search Readiness Assessment"
        }
      ],
      pedagogyPoints: [
        {
          title: "Distractor Anatomy",
          desc: "ASSET options are specifically designed around predictable student mistakes. We teach students to reverse-engineer why a wrong option was placed there."
        },
        {
          title: "Diagram Literacy",
          desc: "Most students lose points because they misread scale or orientation in diagrams. We focus heavily on visual precision and axis reading."
        },
        {
          title: "Conceptual Nuance vs Algorithm",
          desc: "We train students to explain why a formula works with physical counters or visual bars before ever using algebraic notation."
        }
      ],
      sampleProblems: [
        {
          q: "Which fraction is closer to 1/2: 4/9 or 5/11?",
          standard: "Convert to common denominators: 4/9 = 88/198 vs 99/198, 5/11 = 90/198 vs 99/198, compare difference 11/198 vs 9/198.",
          vertexMethod: "MathsVertex Half-Distance: Half of 9 is 4.5; distance from 4 is 0.5/9 = 1/18. Half of 11 is 5.5; distance from 5 is 0.5/11 = 1/22. Since 1/22 < 1/18, 5/11 is closer!",
          timeSaved: "Calculated in 4 seconds without common denominators"
        },
        {
          q: "If a wire is bent to form a square of area 36 cm², what is the length of the wire?",
          standard: "Students frequently confuse area with perimeter and select 6 cm or 24 cm.",
          vertexMethod: "Side = √36 = 6 cm. Total wire length = Perimeter = 4 × 6 = 24 cm. Clean check prevents the common '6 cm' distractor trap!",
          timeSaved: "Solved in 3 seconds with zero confusion"
        },
        {
          q: "A bottle with its cap weighs 110 grams. The bottle weighs 100 grams more than the cap. How much does the cap weigh?",
          standard: "Students instinctively answer '10 grams'.",
          vertexMethod: "Equation: B + C = 110, B - C = 100. Subtract: 2C = 10, so C = 5 grams! Notice the classic cognitive trap.",
          timeSaved: "Solved in 4 seconds"
        }
      ],
      timetable: [
        { batch: "ASSET Sprint Batch", ist: "04:30 PM – 05:45 PM", gst: "03:00 PM – 04:15 PM", sgt: "07:00 PM – 08:15 PM", days: "Mon & Wed" },
        { batch: "ASSET Weekend Focus", ist: "02:00 PM – 03:30 PM", gst: "12:30 PM – 02:00 PM", sgt: "04:30 PM – 06:00 PM", days: "Sat & Sun" }
      ],
      reviews: [
        {
          name: "Sowmya Krishnan",
          grade: "Mother of Diya, Class 6 (Bangalore)",
          outcome: "ASSET Score: Top 2% Nationally (98th Percentile)",
          text: "Afreen ma'am taught Diya to spot the 'trap choices' Educational Initiatives plants in ASSET. Her confidence went through the roof, and she qualified for the ASSET Talent Search."
        },
        {
          name: "Naveen Sethi",
          grade: "Father of Aryan, Grade 4 (Dubai)",
          outcome: "Jumped from 65th to 94th percentile in one cycle",
          text: "MathsVertex doesn't just do drills. They teach how to read a word problem critically. Aryan can now explain the mathematical logic behind every single answer."
        }
      ],
      examFocus: ["Ei ASSET Summer & Winter Tests", "ASSET Talent Search", "High-Order Thinking (HOTS) Assessments"]
    },
    "mental-maths": {
      title: "Dedicated Mental Maths Accelerator",
      badge: "Speed Arithmetic & Working Memory · Class 2 to 8",
      gradeSpan: "Class 2–8",
      headline: "Calculate 3x to 5x faster in your head — permanently ditch scratch paper and calculation panic.",
      overview: "A specialized 12-week course designed for students who hesitate with basic multiplication, division, fractions, or time pressure. Taught through structured mental number lines, Vedic chunking, and daily 5-minute timed audio drills to build rock-solid working memory.",
      batchRatio: "1:6 Small Batch",
      weeklySessions: "2 Live Lightning Drill Sessions / Week",
      keyMentor: "Raj Deepak",
      mentorId: "raj-deepak",
      mentorRole: "Lead Mentor · Mental Maths & Speed Calculation (9+ yrs experience)",
      mentorInitial: "RD",
      graphicType: "mental-speed",
      modules: [
        {
          title: "Module 1: Lightning Left-to-Right Addition & Subtraction",
          weeks: "Weeks 1–3",
          topics: [
            "Thinking in friendly tens and hundreds from left to right",
            "Eliminating carry-over cognitive friction permanently",
            "Mental compensation techniques (e.g. adding 98 by adding 100 - 2)",
            "3-digit and 4-digit mental chains without writing"
          ],
          deliverable: "Left-to-Right Arithmetic Fluency Benchmark"
        },
        {
          title: "Module 2: Vedic Base Multiplication & Squares",
          weeks: "Weeks 4–6",
          topics: [
            "Multiplication near bases 10, 50, 100 (e.g. 96 × 97 in 4 seconds)",
            "Squaring numbers ending in 5 in 1 second flat",
            "Criss-cross 2-digit multiplication in working memory",
            "Doubling and halving strategies for clean mental products"
          ],
          deliverable: "Vedic Base Speed Certification"
        },
        {
          title: "Module 3: Fractions, Decimals & Percentages at Sight",
          weeks: "Weeks 7–9",
          topics: [
            "15%, 20%, 25% and 33.3% rapid mental conversions",
            "Fraction benchmark comparisons without common denominators",
            "Mental division with instant remainder visualization",
            "Ratio scaling and unitary calculations in real-world scenarios"
          ],
          deliverable: "Proportional Speed Circuit & Sight Conversion Test"
        },
        {
          title: "Module 4: Lightning Speed Championship & Working Memory",
          weeks: "Weeks 10–12",
          topics: [
            "30-question speed drills completed in 90 seconds",
            "Confidence under timed competitive pressure",
            "Auditory math drills: solving while listening without seeing text",
            "Official MathsVertex Speed Calculation Master Certificate"
          ],
          deliverable: "Speed Calculation Master Certification (3x–5x Speed Lift Verified)"
        }
      ],
      pedagogyPoints: [
        {
          title: "Left-to-Right Processing",
          desc: "Schools teach right-to-left calculation which forces working memory to store digits backward. Mental champions compute left-to-right to announce the answer as they see it."
        },
        {
          title: "Vedic Complement Arithmetic",
          desc: "Instead of tedious cross-multiplication, we use deficits from friendly bases (10, 100, 1000) so complicated calculations reduce to single-digit subtraction."
        },
        {
          title: "Auditory Working Memory Drills",
          desc: "We train students to hold intermediate numbers in audio memory, freeing up visual focus for problem decomposition."
        }
      ],
      sampleProblems: [
        {
          q: "Calculate 97 × 94 without writing anything down.",
          standard: "Standard vertical algorithm: 94 × 7 = 658, 94 × 90 = 8460, add 658 + 8460 = 9118. Takes 40 seconds.",
          vertexMethod: "Base 100 Vedic: Deficits from 100 are -3 and -6. Cross-subtract: 97 - 6 = 91 (first part). Multiply deficits: (-3) × (-6) = 18 (second part). Answer is 9,118 in 3 seconds!",
          timeSaved: "Solved in 3 seconds vs 40 seconds"
        },
        {
          q: "What is 85 squared in your head?",
          standard: "85 × 85 vertical multiplication on scratch paper.",
          vertexMethod: "Vedic Ending in 5 Rule: Multiply first digit by its next consecutive integer: 8 × (8 + 1) = 72. Suffix 25. Answer is 7,225 in 1 second!",
          timeSaved: "Solved in 1 second flat"
        },
        {
          q: "Calculate 15% tip on a bill of $64.00.",
          standard: "Compute 0.15 × 64 with pencil.",
          vertexMethod: "10% of 64 is 6.40. Half of that (5%) is 3.20. Add: 6.40 + 3.20 = $9.60 instantly!",
          timeSaved: "Solved in 2 seconds"
        }
      ],
      timetable: [
        { batch: "Lightning Speed Track A", ist: "05:30 PM – 06:30 PM", gst: "04:00 PM – 05:00 PM", sgt: "08:00 PM – 09:00 PM", days: "Mon & Thu" },
        { batch: "Lightning Speed Track B", ist: "06:45 PM – 07:45 PM", gst: "05:15 PM – 06:15 PM", sgt: "09:15 PM – 10:15 PM", days: "Tue & Fri" },
        { batch: "Weekend Speed Clinic", ist: "09:30 AM – 11:00 AM", gst: "08:00 AM – 09:30 AM", sgt: "12:00 PM – 01:30 PM", days: "Sat & Sun" }
      ],
      reviews: [
        {
          name: "Meera Nambiar",
          grade: "Mother of Rohan, Class 4 (Chennai)",
          outcome: "Calculation speed improved by 4.2x in 10 weeks",
          text: "Rohan used to count on his fingers and dread math tests. Raj Deepak sir transformed his calculation speed completely. Now he computes grocery totals faster than the cashier!"
        },
        {
          name: "Jason Wong",
          grade: "Father of Chloe, Primary 5 (Singapore)",
          outcome: "Zero calculation errors on school term paper",
          text: "The Vedic base 100 tricks blew Chloe's mind. She used to run out of time on school papers; now she finishes with 15 minutes to spare and checks her work calmly."
        }
      ],
      examFocus: ["School Speed Tests", "Olympiad Speed rounds", "Mental arithmetic agility", "Math anxiety elimination"]
    },
    "grade-elevation": {
      title: "Grade Elevation Diagnostic Program",
      badge: "Diagnostic Remediation · Class 4 to 10",
      gradeSpan: "Class 4–10",
      headline: "Close prerequisite gaps and lift your child's math scores by 2 full letter grades in 90 days.",
      overview: "Most math struggles are not caused by current coursework, but by a concept that was half-understood 1–2 years ago (like fractions, negative numbers, or ratios). We diagnose the root cause and systematically repair it with encouraging 1:6 mentorship, turning math panic into confident top grades.",
      batchRatio: "1:6 Zero-Judgment Batch",
      weeklySessions: "3 Live Restorative Sessions / Week",
      keyMentor: "Kartik Raghav",
      mentorId: "kartik-raghav",
      mentorRole: "Lead Mentor · Grade Elevation (B.Ed., M.Sc. Maths, 6+ yrs remedial specialist)",
      mentorInitial: "KR",
      graphicType: "classroom-session",
      modules: [
        {
          title: "Phase 1: Deep Root-Cause Diagnostic",
          weeks: "Weeks 1–2",
          topics: [
            "Diagnostic across 12 fundamental mathematical branches",
            "Pinpointing exact grade-level missing prerequisites",
            "Building an encouraging, safe-to-fail rapport where errors are welcomed",
            "Establishing the student's customized 90-day progress roadmap"
          ],
          deliverable: "Individual Missing Prerequisite Diagnostic Map"
        },
        {
          title: "Phase 2: Fundamental Concept Restoration Sprint",
          weeks: "Weeks 3–6",
          topics: [
            "Fractions & proportional thinking reset using visual bar models",
            "Mastering negative integers and order of operations without confusion",
            "Step-by-step word problem translation without cognitive overload",
            "Restoring confidence through small, quick daily mastery wins"
          ],
          deliverable: "Prerequisite Gap Closure & Confidence Audit"
        },
        {
          title: "Phase 3: Current School Syllabus Synchronization",
          weeks: "Weeks 7–10",
          topics: [
            "Syncing with student's current school chapter test schedule",
            "Targeted practice on school textbook and exemplar problems",
            "Focusing on high-weightage topics (algebra, geometry, linear graphs)",
            "Learning to write clear, structured mathematical steps for full marks"
          ],
          deliverable: "School Chapter Mock & Step-Mark Optimization Review"
        },
        {
          title: "Phase 4: Independent Confidence & Exam Readiness",
          weeks: "Weeks 11–12",
          topics: [
            "Full simulated school term exams under gentle clock guidance",
            "Self-checking techniques to catch silly arithmetic mistakes",
            "Parent report showing verified 2-grade jump (e.g. C/D to A)",
            "Sustainable study habits for independent high school success"
          ],
          deliverable: "Final Grade Elevation Certification & 90-Day Outcome Report"
        }
      ],
      pedagogyPoints: [
        {
          title: "Zero-Judgment Environment",
          desc: "Students who fall behind in school feel embarrassed to ask questions. In our safe 1:6 environment, mistakes are treated as brilliant diagnostic clues to celebrate."
        },
        {
          title: "Remediating the Prerequisite, Not the Symptom",
          desc: "If a child struggles with 8th-grade linear equations, tutoring them on equations fails if their 5th-grade fractions are shaky. We fix the root gap first."
        },
        {
          title: "Consistent Parent WhatsApp Updates",
          desc: "Parents receive a concise diagnostic note after every class and weekly mock, detailing exactly which concept was repaired that week."
        }
      ],
      sampleProblems: [
        {
          q: "Why do we flip and multiply when dividing fractions like (2/3) ÷ (4/5)?",
          standard: "Schools teach 'Keep, Change, Flip' as a mindless rhyme without explanation, causing confusion on tests.",
          vertexMethod: "Visual Division Model: Division asks 'how many 4/5 are inside 2/3?'. We show the common denominator visual (10/15 ÷ 12/15 = 10/12 = 5/6), so the child understands 'why' it works forever!",
          timeSaved: "Restores permanent confidence"
        },
        {
          q: "Solve for x: -4(2x - 3) = 28.",
          standard: "Students often blunder the negative sign distribution: -8x - 12 = 28.",
          vertexMethod: "MathsVertex Box Method: Divide both sides by -4 first! 2x - 3 = -7. Immediately 2x = -4, so x = -2 in 2 steps without sign confusion.",
          timeSaved: "Eliminates sign errors completely"
        },
        {
          q: "A jacket costs $120 after a 20% discount. What was the original price?",
          standard: "Common error: students add 20% of 120 ($24) to get $144.",
          vertexMethod: "Unit Thinking: The sale price represents 100% - 20% = 80% = 4 units. 4 units = $120. Therefore 1 unit = $30. Original price (5 units) = 5 × 30 = $150!",
          timeSaved: "Solved in 5 seconds without messy algebra"
        }
      ],
      timetable: [
        { batch: "Grade Elevation Sprint A", ist: "04:30 PM – 05:45 PM", gst: "03:00 PM – 04:15 PM", sgt: "07:00 PM – 08:15 PM", days: "Mon, Wed, Fri" },
        { batch: "Grade Elevation Sprint B", ist: "06:00 PM – 07:15 PM", gst: "04:30 PM – 05:45 PM", sgt: "08:30 PM – 09:45 PM", days: "Tue, Thu, Sat" },
        { batch: "Weekend Remedial Camp", ist: "11:30 AM – 01:15 PM", gst: "10:00 AM – 11:45 AM", sgt: "02:00 PM – 03:45 PM", days: "Sat & Sun" }
      ],
      reviews: [
        {
          name: "Sunita Deshmukh",
          grade: "Mother of Rohan, Class 8 (Mumbai)",
          outcome: "Grade elevated from D (42%) to A (86%) in 90 days",
          text: "Kartik sir identified within 30 minutes of the free demo that Rohan's real issue was 5th-grade fractions, not 8th-grade algebra. Fixing that foundation changed his whole attitude toward school."
        },
        {
          name: "Karim Merchant",
          grade: "Father of Layla, Year 6 (London)",
          outcome: "Turned around math anxiety, now in Top Math Set",
          text: "Layla used to cry before every school math exam. After 12 weeks with MathsVertex, she volunteered to solve problems on the whiteboard in school! The difference is night and day."
        }
      ],
      examFocus: ["School Grade Recovery (C/D to A)", "Mid-Term and Final Exam Turnarounds", "Foundation Building for High School"]
    }
  };

  const program = detailsMap[programId] || detailsMap["olympiads"];

  return (
    <div className="py-12 bg-[#0B0C10] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <BreadcrumbNavigation
            items={[
              { label: "Programs & Topics", route: "programs" },
              { label: program.title }
            ]}
            onNavigate={onNavigate}
          />
        </div>

        {/* Hero Header in Secondary Background #121420 */}
        <div className="bg-[#121420] text-white rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden border border-[#8A7BFF]/25 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3AE8C7] bg-[#3AE8C7]/10 px-3 py-1 rounded-full border border-[#3AE8C7]/25 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#3AE8C7]" />
                  {program.badge}
                </span>
                <span className="text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 px-3 py-1 rounded-full border border-[#8A7BFF]/25">
                  {program.gradeSpan}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-white tracking-tight">
                {program.title}
              </h1>

              <p className="text-base sm:text-lg text-[#B0A8D9] leading-relaxed max-w-2xl">
                {program.headline}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenDemo(program.gradeSpan.replace("Class ", "").split("–")[0])}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] transition-all transform active:scale-95 shadow-[0_4px_16px_rgba(255,122,96,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Demo For {program.title.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate("programs")}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-[#8A7BFF] border border-[#8A7BFF]/35 hover:border-[#8A7BFF] hover:bg-[#8A7BFF]/10 transition-colors cursor-pointer"
                >
                  View All Topics
                </button>
              </div>
            </div>

            {/* Visual Graphic on Right */}
            <div className="lg:col-span-4">
              <MathGraphic type={program.graphicType} />
            </div>
          </div>

          {/* Quick Metrics Bar inside Hero: Numbers in Neon Purple #8A7BFF */}
          <div className="mt-10 pt-6 border-t border-[#8A7BFF]/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#B0A8D9]">
            <div>
              <span className="block text-[#8A7BFF] font-display font-bold text-lg">{program.batchRatio}</span>
              <span>Strictly capped for 1:1 attention</span>
            </div>
            <div>
              <span className="block text-[#8A7BFF] font-display font-bold text-lg">{program.weeklySessions}</span>
              <span>Live interactive whiteboard classes</span>
            </div>
            <div>
              <span className="block text-[#8A7BFF] font-display font-bold text-lg">{program.keyMentor}</span>
              <span>{program.mentorRole}</span>
            </div>
            <div>
              <span className="block text-[#3AE8C7] font-display font-bold text-lg">Weekly Mock Reports</span>
              <span>Detailed diagnostic sent on WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Interactive Topic Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#8A7BFF]/15 pb-4 overflow-x-auto">
          {[
            { id: "syllabus", label: "16-Week Syllabus & Phases", icon: BookOpen },
            { id: "sandbox", label: "Interactive Visual Sandbox", icon: Zap },
            { id: "pedagogy", label: "1:6 Pedagogy & Why Us", icon: ShieldCheck },
            { id: "problems", label: "Sample Problems & Shortcuts", icon: Award },
            { id: "schedule", label: "Batch Timetable & Time Zones", icon: Calendar }
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  isCurrent
                    ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_4px_16px_rgba(138,123,255,0.4)] scale-[1.02]"
                    : "bg-[#121420] text-[#B0A8D9] hover:text-white border border-[#8A7BFF]/20"
                }`}
              >
                <Icon className="w-4 h-4 flex-none" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tab 1: Syllabus Breakdown */}
            {activeTab === "syllabus" && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl font-bold text-white">
                      Structured 16-Week Curriculum Blueprint
                    </h2>
                    <span className="text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/15 border border-[#8A7BFF]/30 px-3 py-1 rounded-full">
                      Capped 1:6
                    </span>
                  </div>
                  <p className="text-sm text-[#B0A8D9] leading-relaxed">
                    Unlike standard coaching centers where students get lost in a sea of 30 faces, our small batches move through four structured, progressive phases with explicit weekly milestones.
                  </p>

                  <div className="space-y-4 pt-2">
                    {program.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/15 space-y-3 hover:border-[#8A7BFF]/40 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="font-display text-base font-bold text-white">
                            {mod.title}
                          </h3>
                          <span className="text-xs font-bold text-[#8A7BFF] font-mono">
                            {mod.weeks}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#B0A8D9]">
                          {mod.topics.map((t, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3AE8C7] flex-none mt-0.5" />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#3AE8C7]">
                          <Award className="w-3.5 h-3.5 flex-none" />
                          <span><strong>Deliverable:</strong> {mod.deliverable}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Interactive Sandbox */}
            {activeTab === "sandbox" && (
              <div className="space-y-6 animate-in fade-in duration-150">
                <TopicInteractiveSandbox topicId={programId} />
              </div>
            )}

            {/* Tab 3: Pedagogy & Why Us */}
            {activeTab === "pedagogy" && (
              <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl space-y-6 animate-in fade-in duration-150">
                <h2 className="font-display text-2xl font-bold text-white">
                  Why MathsVertex Pedagogy Outperforms Standard Tutoring
                </h2>

                <div className="space-y-4">
                  {program.pedagogyPoints.map((point, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/15 space-y-2">
                      <div className="flex items-center gap-2 text-[#8A7BFF] font-display font-bold text-base">
                        <span className="w-6 h-6 rounded-full bg-[#8A7BFF]/20 text-[#8A7BFF] flex items-center justify-center text-xs">
                          {idx + 1}
                        </span>
                        <span>{point.title}</span>
                      </div>
                      <p className="text-sm text-[#B0A8D9] leading-relaxed pl-8">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#8A7BFF]/10 to-[#FF7A60]/10 border border-[#8A7BFF]/25 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display text-base font-bold text-white">Meet the Lead Mentor Live</h4>
                    <p className="text-xs text-[#B0A8D9] mt-0.5">Experience this methodology firsthand during a 45-minute zero-cost demo.</p>
                  </div>
                  <button
                    onClick={() => onOpenDemo()}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] flex items-center gap-1.5 cursor-pointer flex-none"
                  >
                    <span>Book Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Tab 4: Sample Problems & Solutions */}
            {activeTab === "problems" && (
              <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl space-y-6 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Actual Exam Problems Solved in Seconds
                  </h2>
                  <span className="text-xs text-[#3AE8C7] font-semibold">Click to reveal mentor method</span>
                </div>

                <div className="space-y-5">
                  {program.sampleProblems.map((prob, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/20 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-[#8A7BFF] uppercase tracking-wider">
                          Problem 0{idx + 1}
                        </span>
                        <span className="text-[11px] text-[#3AE8C7] font-mono font-semibold">
                          ⚡ {prob.timeSaved}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-white">
                        "{prob.q}"
                      </h3>

                      <div className="pt-2">
                        <button
                          onClick={() => toggleSolution(idx)}
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{revealedSolutions[idx] ? "Hide Solution" : "Reveal MathsVertex Shortcut Proof"}</span>
                        </button>
                      </div>

                      {revealedSolutions[idx] && (
                        <div className="mt-3 p-4 rounded-xl bg-[#121420] border border-[#8A7BFF]/25 space-y-2 animate-in fade-in duration-150 text-xs sm:text-sm">
                          <div>
                            <span className="text-white/40 block text-xs line-through mb-1">Standard Method:</span>
                            <p className="text-[#B0A8D9]/70 line-through">{prob.standard}</p>
                          </div>
                          <div className="pt-2 border-t border-[#8A7BFF]/15">
                            <span className="text-[#3AE8C7] font-bold block text-xs uppercase tracking-wider mb-1">
                              ✓ MathsVertex Shortcut Proof:
                            </span>
                            <p className="text-white font-medium">{prob.vertexMethod}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 5: Batch Schedule & Time Zones */}
            {activeTab === "schedule" && (
              <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl space-y-6 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Upcoming Live Batch Timetable
                  </h2>
                  <span className="text-xs text-[#3AE8C7] bg-[#3AE8C7]/15 px-3 py-1 rounded-full border border-[#3AE8C7]/30">
                    Max 6 Students
                  </span>
                </div>

                <p className="text-sm text-[#B0A8D9]">
                  We operate international batches synchronized to parent time zones in India (IST), the UAE (GST), Singapore (SGT), and the UK (GMT).
                </p>

                <div className="space-y-4">
                  {program.timetable.map((slot, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold text-[#8A7BFF] block">{slot.batch}</span>
                        <span className="text-sm font-bold text-white block mt-1">{slot.days}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-xs text-center">
                        <div className="p-2 rounded-lg bg-[#121420] border border-[#8A7BFF]/10">
                          <span className="text-[10px] text-[#B0A8D9] block">India (IST)</span>
                          <span className="font-bold text-white">{slot.ist}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#121420] border border-[#8A7BFF]/10">
                          <span className="text-[10px] text-[#B0A8D9] block">UAE (GST)</span>
                          <span className="font-bold text-[#3AE8C7]">{slot.gst}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#121420] border border-[#8A7BFF]/10">
                          <span className="text-[10px] text-[#B0A8D9] block">SG (SGT)</span>
                          <span className="font-bold text-white">{slot.sgt}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenDemo()}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] flex items-center justify-center gap-1 cursor-pointer flex-none"
                      >
                        Reserve Seat
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Parent Reviews Specific to This Topic */}
            <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/20 p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-white">
                  Parent Reviews For {program.title}
                </h3>
                <div className="flex items-center gap-1 text-[#FF7A60]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A60]" />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.reviews.map((rev, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/15 space-y-3 flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
                      "{rev.text}"
                    </p>
                    <div className="pt-2 border-t border-[#8A7BFF]/15">
                      <div className="text-xs font-bold text-white">{rev.name}</div>
                      <div className="text-[11px] text-[#B0A8D9]">{rev.grade}</div>
                      <div className="mt-1 text-[11px] text-[#3AE8C7] font-semibold">
                        ✓ {rev.outcome}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4-Column Sticky Action Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Lead Mentor Card */}
            <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#8A7BFF] text-[#0B0C10] font-display font-bold text-xl flex items-center justify-center shadow-lg">
                  {program.mentorInitial}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#3AE8C7] uppercase tracking-wider block">
                    Lead Faculty
                  </span>
                  <h4 className="font-display text-lg font-bold text-white">
                    {program.keyMentor}
                  </h4>
                  <p className="text-xs text-[#B0A8D9]">
                    {program.mentorRole}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate(`mentor/${program.mentorId}`)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#8A7BFF] bg-[#8A7BFF]/10 hover:bg-[#8A7BFF]/20 border border-[#8A7BFF]/30 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Mentor Pedagogy Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Enrollment / Demo Card in #121420 */}
            <div className="bg-[#121420] rounded-3xl border border-[#8A7BFF]/25 p-6 shadow-2xl space-y-5 sticky top-24">
              <div>
                <span className="text-xs font-semibold text-[#8A7BFF] uppercase tracking-wider block">
                  Interactive Batch of 6
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  Ready to experience this class?
                </h3>
                <p className="text-xs text-[#B0A8D9] mt-1.5 leading-relaxed">
                  Book a free 45-minute live diagnostic session. Meet the mentor, test baseline skills, and receive your child's written roadmap.
                </p>
              </div>

              <div className="space-y-2 text-xs text-white pt-2 border-t border-[#8A7BFF]/15">
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#B0A8D9]">Target Grades:</span>
                  <span className="font-semibold">{program.gradeSpan}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#B0A8D9]">Batch Ratio:</span>
                  <span className="font-semibold text-[#8A7BFF]">Max 6 Students</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#B0A8D9]">Live Frequency:</span>
                  <span className="font-semibold">2–3 sessions / week</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#B0A8D9]">Target Exams:</span>
                  <span className="font-semibold text-right max-w-[160px] truncate text-[#3AE8C7]">{program.examFocus.slice(0, 2).join(", ")}</span>
                </div>
              </div>

              {/* Primary CTA in Coral Gradient */}
              <button
                onClick={() => onOpenDemo()}
                className="w-full py-3.5 px-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(255,122,96,0.35)]"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-[#B0A8D9]/70">
                🔒 100% Free · No credit card required · Free assessment report included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
