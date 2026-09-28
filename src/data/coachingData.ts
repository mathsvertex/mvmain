export interface BatchOption {
  label: string;
  link: string;
}

export interface BatchSlotGroup {
  time: string;
  options: BatchOption[];
}

export const BUSINESS_WHATSAPP_NUMBER = "918858079444";

export const BATCH_SLOTS: Record<string, BatchSlotGroup> = {
  "1&2": {
    time: "5:00–6:00 PM (UAE)",
    options: [
      { label: "Monday & Tuesday", link: "https://chat.whatsapp.com/C3Wunb7t2cODsUeNSirKyG" },
      { label: "Wednesday & Thursday", link: "https://chat.whatsapp.com/G2xCtopMNrL0UZ0gYLAFjl" },
      { label: "Friday & Saturday", link: "https://chat.whatsapp.com/Le2D59dsujw5apzD7A9KH8" }
    ]
  },
  "3&4": {
    time: "7:00–8:00 PM (UAE)",
    options: [
      { label: "Monday & Tuesday", link: "https://chat.whatsapp.com/JxaP5Jn5TmE8Ww9k48oZ5T" },
      { label: "Wednesday & Thursday", link: "https://chat.whatsapp.com/JWAdNW1Adbo7e4XhFefUc2" },
      { label: "Friday & Saturday", link: "https://chat.whatsapp.com/BCgQgXgcHYv4jyV7XExLyQ" }
    ]
  },
  "5&6": {
    time: "5:30–6:30 PM (UAE)",
    options: [
      { label: "Monday & Tuesday", link: "https://chat.whatsapp.com/BYaQyCvSsjmGlqVUkFwTku" },
      { label: "Wednesday & Thursday", link: "https://chat.whatsapp.com/IfpZbsMCwvH3UQSwb8WqkJ" },
      { label: "Friday & Saturday", link: "https://chat.whatsapp.com/Bl0hO4b6LZ96wB9tAn6t0d" }
    ]
  },
  "7&8": {
    time: "7:00–8:00 PM (UAE)",
    options: [
      { label: "Monday & Tuesday", link: "https://chat.whatsapp.com/INwNUmfXPlq8bd59FCOrTF" },
      { label: "Wednesday & Thursday", link: "https://chat.whatsapp.com/B5I3bSbZbTK1Ds6Yquke7m" },
      { label: "Friday & Saturday", link: "https://chat.whatsapp.com/LwXhvjptxnV2XtojSSU8Ej" }
    ]
  }
};

export function getBatchKeyForGrade(grade: number | string): string {
  const g = typeof grade === "string" ? parseInt(grade, 10) : grade;
  if (isNaN(g) || g <= 2) return "1&2";
  if (g <= 4) return "3&4";
  if (g <= 6) return "5&6";
  return "7&8";
}

export interface Mentor {
  id: string;
  name: string;
  initials: string;
  color: string;
  role: string;
  specialty: string;
  description: string;
  experience: string;
  rating: string;
  studentsTaught: string;
  qualifications: string;
}

export const MENTORS: Mentor[] = [
  {
    id: "sakshi-arora",
    name: "Sakshi Arora",
    initials: "SA",
    color: "#4B3DF0",
    role: "Lead Mentor · School Maths",
    specialty: "Class 1–10 Curriculum",
    description: "Leads School Maths batches for Class 1–10, focused on building rock-solid conceptual clarity aligned to CBSE, IB, and IGCSE curriculums.",
    experience: "7+ years teaching",
    rating: "4.95/5",
    studentsTaught: "820+ students",
    qualifications: "M.Sc. Mathematics · Former Delhi Public School Faculty"
  },
  {
    id: "preeti-kumari",
    name: "Preeti Kumari",
    initials: "PK",
    color: "#FF6A45",
    role: "Lead Mentor · MAT & Reasoning",
    specialty: "Mental Ability & Non-Verbal Logic",
    description: "Runs MAT batches, specializing in spatial reasoning, sequence detection, and matrix pattern puzzles needed for competitive exams.",
    experience: "6+ years teaching",
    rating: "4.92/5",
    studentsTaught: "650+ students",
    qualifications: "B.Tech & Cognitive Psychology Cert. · MAT Specialist"
  },
  {
    id: "hasib-alam",
    name: "Mohd Hasib Alam",
    initials: "HA",
    color: "#1F9C79",
    role: "Head Mentor · Math Olympiads",
    specialty: "IMO, IOM, SASMO & AMC 8/10",
    description: "Leads Math Olympiad batches with a focus on competition instincts, non-routine combinatorics, number theory, and speed proofs.",
    experience: "8+ years coaching",
    rating: "4.98/5",
    studentsTaught: "1,100+ students",
    qualifications: "National Math Olympiad Ranker · Alumnus AMU"
  },
  {
    id: "afreen-javed",
    name: "Afreen Javed",
    initials: "AJ",
    color: "#D97706",
    role: "Lead Mentor · ASSET Exam",
    specialty: "Diagnostic & Skill-Based Testing",
    description: "Handles ASSET prep, with practice mapped directly to question traps, conceptual nuance, and high-order critical reasoning.",
    experience: "5+ years teaching",
    rating: "4.89/5",
    studentsTaught: "540+ students",
    qualifications: "M.Sc. Applied Maths · Educational Assessment Certified"
  },
  {
    id: "raj-deepak",
    name: "Raj Deepak",
    initials: "RD",
    color: "#9333EA",
    role: "Lead Mentor · Mental Maths",
    specialty: "Rapid Mental Arithmetic & Speed Drills",
    description: "Runs the Mental Maths Program, transforming calculation speeds by 3x–5x without scratch paper using structured mental visualizations.",
    experience: "9+ years coaching",
    rating: "4.96/5",
    studentsTaught: "950+ students",
    qualifications: "Speed Calculation Record Holder · Vedic Maths Master"
  },
  {
    id: "kartik-raghav",
    name: "Kartik Raghav",
    initials: "KR",
    color: "#2563EB",
    role: "Lead Mentor · Grade Elevation",
    specialty: "Diagnostic Remediation & Foundation",
    description: "Leads the Grade Elevation Program, zeroing in on missing prerequisite concepts from previous years to restore confidence and top grades.",
    experience: "6+ years teaching",
    rating: "4.93/5",
    studentsTaught: "700+ students",
    qualifications: "B.Ed. & M.Sc. Mathematics · Remedial Pedagogy Specialist"
  }
];

export interface Program {
  id: string;
  title: string;
  category: "core" | "course" | "extra";
  tag: string;
  tagColor: string;
  gradeSpan: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  batchSize: string;
  frequency: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "school-maths",
    title: "School Maths Excellence",
    category: "core",
    tag: "Curriculum",
    tagColor: "border-indigo-600 text-indigo-600",
    gradeSpan: "Class 1–10",
    shortDesc: "Class 1–10 syllabus alignment for CBSE, IB, IGCSE & American boards with concept-first mastery.",
    fullDesc: "Ensures complete command over NCERT, Cambridge, and IB frameworks. Rather than passive memorization, students tackle core theorems, algebra, geometry, and real-world math applications.",
    highlights: ["Board-specific syllabus mapping", "Weekly diagnostic quizzes", "School exam test series"],
    batchSize: "Max 6 students",
    frequency: "3 live sessions / week"
  },
  {
    id: "olympiads",
    title: "Math Olympiads (IMO / IOM)",
    category: "core",
    tag: "Competition",
    tagColor: "border-emerald-600 text-emerald-600",
    gradeSpan: "Class 3–12",
    shortDesc: "Targeted training for SOF IMO, SilverZone IOM, SASMO, Kangaroo, and AMC 8/10.",
    fullDesc: "Designed for eager problem-solvers. We teach Olympiad-grade problem decomposition, modular arithmetic, combinatorics, and unconventional geometry tricks.",
    highlights: ["Past 10 years solved paper banks", "Speed strategy for Level 1 & Level 2", "340+ qualifiers in 2026"],
    batchSize: "Max 6 students",
    frequency: "3 live sessions / week"
  },
  {
    id: "mat-reasoning",
    title: "MAT (Mental Ability Test)",
    category: "core",
    tag: "Logic & Aptitude",
    tagColor: "border-orange-600 text-orange-600",
    gradeSpan: "Class 4–10",
    shortDesc: "Logical reasoning, pattern identification, non-verbal matrices, and competitive aptitude.",
    fullDesc: "Critical for NTSE, scholarship examinations, and international admission tests. Builds structured deduction and lightning pattern recognition.",
    highlights: ["Spatial, verbal & non-verbal logic", "Deductive reasoning speed circuits", "Weekly timed aptitude mocks"],
    batchSize: "Max 6 students",
    frequency: "2 live sessions / week"
  },
  {
    id: "asset-prep",
    title: "ASSET Mathematics Prep",
    category: "core",
    tag: "Skill Assessment",
    tagColor: "border-amber-600 text-amber-600",
    gradeSpan: "Class 3–9",
    shortDesc: "Conceptual skill assessment prep mapped directly to real test formats and analytical traps.",
    fullDesc: "ASSET tests deep insight rather than textbook drills. We teach students how to identify question traps and think through unfamiliar mathematical puzzles.",
    highlights: ["Concept trap identification", "Detailed skill percentile feedback", "Mapped to Ei ASSET pattern"],
    batchSize: "Max 6 students",
    frequency: "2 live sessions / week"
  },
  {
    id: "mental-maths",
    title: "Mental Maths Program",
    category: "course",
    tag: "Dedicated Course",
    tagColor: "border-purple-600 text-purple-600",
    gradeSpan: "Class 2–8",
    shortDesc: "A dedicated speed & calculation course for rapid arithmetic and mental visualization.",
    fullDesc: "Students learn to calculate 3x to 5x faster in their head using Vedic techniques, chunking, and mental number lines, drastically cutting test-time anxiety.",
    highlights: ["100% paperless calculation drills", "Rapid multiplication & division shortcuts", "Weekly live lightning rounds"],
    batchSize: "Max 6 students",
    frequency: "2 live sessions / week"
  },
  {
    id: "grade-elevation",
    title: "Grade Elevation Program",
    category: "course",
    tag: "Diagnostic Remediation",
    tagColor: "border-blue-600 text-blue-600",
    gradeSpan: "Class 4–10",
    shortDesc: "Built for students needing to close prerequisite gaps and jump from struggling to top marks.",
    fullDesc: "Uses a pinpoint diagnostic to find exactly where the chain of understanding broke down (e.g. fractions in Grade 5 affecting algebra in Grade 7) and systematically repairs it.",
    highlights: ["Root-cause gap diagnosis", "Zero-judgment pacing", "Average 2-grade jump in 90 days"],
    batchSize: "Max 6 students",
    frequency: "3 live sessions / week"
  },
  {
    id: "one-on-one",
    title: "1:1 Personalised Mentoring",
    category: "extra",
    tag: "VIP Add-on",
    tagColor: "border-slate-800 text-slate-800",
    gradeSpan: "Class 1–12",
    shortDesc: "Dedicated mentor, tailored pace, custom curriculum schedule, and individual milestone roadmap.",
    fullDesc: "When even a 6-student batch is not focused enough, our 1:1 format provides direct continuous feedback and custom question curation.",
    highlights: ["Fully flexible scheduling", "Immediate real-time feedback", "Custom-tailored pacing"],
    batchSize: "1:1 Private",
    frequency: "Flexible slots"
  },
  {
    id: "bootcamps",
    title: "Holiday Intensive Bootcamps",
    category: "extra",
    tag: "Seasonal",
    tagColor: "border-rose-600 text-rose-600",
    gradeSpan: "Class 3–9",
    shortDesc: "High-energy 2-week summer & winter crash courses to test-drive MathsVertex coaching.",
    fullDesc: "Intensive sprints covering high-yield problem solving, competition shortcuts, and math games during school breaks.",
    highlights: ["Low commitment test-drive", "Certificate of completion", "Fun interactive math challenges"],
    batchSize: "Max 8 students",
    frequency: "Daily for 2 weeks"
  },
  {
    id: "parent-workshops",
    title: "Complimentary Parent Workshops",
    category: "extra",
    tag: "Free for Parents",
    tagColor: "border-emerald-700 text-emerald-700",
    gradeSpan: "All Grades",
    shortDesc: "Free monthly live masterclasses on how to guide your child's math journey at home.",
    fullDesc: "Helps parents decode common homework roadblocks, understand how to review report cards, and support mathematical curiosity without friction.",
    highlights: ["Zero enrollment required", "Actionable homework guides", "Live Q&A with Senior Mentors"],
    batchSize: "Open webinar",
    frequency: "Monthly on Saturdays"
  }
];

export interface DiagnosticQuestion {
  gradeGroup: string;
  title: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  roteMethod: string;
  vertexMethod: string;
  insight: string;
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    gradeGroup: "1&2",
    title: "Grade 1–2: Visual Number Decomposition",
    topic: "Mental Arithmetic & Number Bonds",
    question: "Maya has 17 marbles. Liam has 8 fewer marbles than Maya. How many marbles do they have in total?",
    options: ["25 marbles", "26 marbles", "24 marbles", "32 marbles"],
    correctIndex: 1,
    roteMethod: "First subtract 17 - 8 = 9 by counting backwards on fingers. Then set up 17 + 9 on paper, carry 1 from the tens column, yielding 26.",
    vertexMethod: "MathsVertex Double-Bar Method: Liam has 17 - 8 = 9. Total is Maya + Liam = 17 + 9 = (17 + 10) - 1 = 27 - 1 = 26 in under 4 seconds!",
    insight: "Students learn friendly tens rounding, eliminating finger-counting errors."
  },
  {
    gradeGroup: "3&4",
    title: "Grade 3–4: Olympiad Pattern Discovery",
    topic: "Sequences & Spatial Patterns",
    question: "In a pattern: 3, 7, 15, 31, 63, ... What is the 6th number in this sequence?",
    options: ["95", "125", "127", "131"],
    correctIndex: 2,
    roteMethod: "Subtract adjacent terms: +4, +8, +16, +32. Then calculate 63 + 64 using column addition.",
    vertexMethod: "MathsVertex Power Form Insight: Notice that each term is (2^(n+1) - 1). 3 is 4-1, 7 is 8-1, 15 is 16-1... Term 6 is 2^7 - 1 = 128 - 1 = 127!",
    insight: "Recognizing binary powers allows students to solve 50th-term Olympiad questions in seconds."
  },
  {
    gradeGroup: "5&6",
    title: "Grade 5–6: Non-Routine Ratio & Fractions",
    topic: "IMO Junior: Working Backwards",
    question: "A water tank was 3/8 full. When 35 liters of water were poured in, it became 3/4 full. What is the total capacity of the tank?",
    options: ["70 liters", "80 liters", "93.3 liters", "105 liters"],
    correctIndex: 2,
    roteMethod: "Set up algebraic equation 3/8 x + 35 = 3/4 x. Subtract 3/8 x from both sides, find common denominator, solve for x.",
    vertexMethod: "MathsVertex Unit Model: 3/4 is equivalent to 6/8. The tank went from 3 units to 6 units (+3 units). Those 3 units = 35 liters, so 1 unit = 35/3 liters. Total tank has 8 units = 8 × (35/3) = 280/3 = 93.3 liters (or 80L if 30L added).",
    insight: "Visual unit fractions remove the barrier of high-school algebra for primary students."
  },
  {
    gradeGroup: "7&8",
    title: "Grade 7–8: Combinatorics & Olympiad Logic",
    topic: "AMC 8 / IMO: Pigeonhole Principle",
    question: "There are 12 pairs of red socks and 12 pairs of black socks mixed in a drawer. What is the minimum number of individual socks you must pull out in the dark to guarantee at least one matching pair?",
    options: ["3 socks", "13 socks", "25 socks", "4 socks"],
    correctIndex: 0,
    roteMethod: "Overthinking the worst-case scenario with total pairs (12 + 12 = 24), leading to answering 13 or 25.",
    vertexMethod: "MathsVertex Pigeonhole Theorem: There are only 2 colors (holes: Red, Black). If you pull 3 socks (pigeons), by Dirichlet's Pigeonhole Principle, at least two MUST share the same color. Answer: 3 socks!",
    insight: "Olympiad math tests conceptual elegance, not long tedious computation."
  }
];

export interface Testimonial {
  id: string;
  name: string;
  childInfo: string;
  quote: string;
  program: string;
  tag: string;
  avatarBg: string;
  outcome: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "anjali-s",
    name: "Anjali Sharma",
    childInfo: "Mother of Aanya (Class 9)",
    quote: "The free demo made the decision easy. My daughter came out of it already talking through a geometry proof she had been dreading for weeks. In 4 months, she qualified for IMO Level 2.",
    program: "Math Olympiad (IMO Track)",
    tag: "IMO Level 2 Qualifier",
    avatarBg: "bg-indigo-600",
    outcome: "+48 percentile rank jump"
  },
  {
    id: "rahul-k",
    name: "Rahul Kulkarni",
    childInfo: "Father of Aarav (Class 8)",
    quote: "What I appreciated most was the post-test WhatsApp report. It didn't just give a marks percentage; it specified that he was hesitating on speed questions with Venn diagrams, and the mentor fixed it the next class.",
    program: "MAT & Logical Reasoning",
    tag: "School Rank #1",
    avatarBg: "bg-orange-600",
    outcome: "98th percentile in MAT"
  },
  {
    id: "priya-m",
    name: "Priya Menon",
    childInfo: "Mother of Kabir (Class 6)",
    quote: "Batches capped at 6 students make a tremendous difference. Hasib Sir noticed Kabir was doing scratch arithmetic when a visual trick existed. His confidence in school exams soared.",
    program: "School Maths + Mental Maths",
    tag: "Grade 6 CBSE",
    avatarBg: "bg-emerald-600",
    outcome: "Marks went from 71% to 94%"
  },
  {
    id: "fatima-n",
    name: "Fatima Al-Noor",
    childInfo: "Mother of Zayd (Grade 5, Dubai)",
    quote: "Finding quality UAE-timezone math coaching for ASSET was difficult until MathsVertex. The class timings at 5:30 PM UAE are ideal and the live board interaction keeps my son thoroughly engaged.",
    program: "ASSET Mathematics Prep",
    tag: "Dubai UAE · GEMS School",
    avatarBg: "bg-amber-600",
    outcome: "Top 1% ASSET Distinction"
  }
];

export interface FaqItem {
  id: string;
  category: "demo" | "classes" | "curriculum" | "results";
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "q1",
    category: "demo",
    question: "Is this only for students who are already math toppers?",
    answer: "No, absolutely not. Over 60% of our students join to build their foundation from scratch or overcome math anxiety. The 45-minute free demo includes a friendly diagnostic that reveals your child's exact starting point, so their weekly batch and plan are matched to their current stage."
  },
  {
    id: "q2",
    category: "demo",
    question: "What happens right after the free demo class?",
    answer: "Within 24 hours of the demo, our academic coordinator sends a personalized diagnostic summary detailing strong concepts and specific gaps. You are also assigned to the corresponding grade WhatsApp group. There is zero pushy sales call — you decide if you wish to enroll."
  },
  {
    id: "q3",
    category: "classes",
    question: "Are the classes live or pre-recorded?",
    answer: "All regular batches are 100% live and interactive with two-way audio and interactive canvas problem solving. Every student speaks, asks questions, and writes on the virtual whiteboard. In addition, every session is recorded and shared with parents for revision."
  },
  {
    id: "q4",
    category: "classes",
    question: "What if my child misses a live class?",
    answer: "Because every session is recorded in HD, your child can watch the video replay immediately. Furthermore, our mentors offer on-demand doubt clearance through the dedicated student WhatsApp channel."
  },
  {
    id: "q5",
    category: "curriculum",
    question: "My child is in Class 3–5. Is it too early for Olympiad coaching?",
    answer: "Class 3–5 is the ideal golden window. At this stage, our syllabus emphasizes 'playful intuition'—puzzles, number patterns, and spatial reasoning rather than tedious rote calculations. Early exposure prevents math fear before middle school."
  },
  {
    id: "q6",
    category: "curriculum",
    question: "Does MathsVertex align with CBSE, ICSE, IB, or British IGCSE?",
    answer: "Yes! Our School Maths curriculum tracks the specific board syllabi (CBSE/ICSE/IB/Cambridge IGCSE). Our Olympiad and MAT tracks operate alongside school coursework, enriching critical thinking without conflicting with school homework."
  },
  {
    id: "q7",
    category: "results",
    question: "How do parents track student progress?",
    answer: "After every weekly timed mock test, parents receive a concise diagnostic card showing accuracy rate, speed index, and topic-wise mastery. We also schedule a monthly one-on-one parent-mentor check-in."
  }
];
