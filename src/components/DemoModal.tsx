import React, { useState, useEffect } from "react";
import { X, CheckCircle, MessageSquare, Send, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { BATCH_SLOTS, BUSINESS_WHATSAPP_NUMBER, getBatchKeyForGrade, BatchOption } from "../data/coachingData";
import { CustomSelect } from "./CustomSelect";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillGrade?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, prefillGrade }) => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [board, setBoard] = useState("");
  const [grade, setGrade] = useState(prefillGrade || "");
  const [slotKey, setSlotKey] = useState("");
  const [consent, setConsent] = useState(true);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedDetails, setBookedDetails] = useState<{
    name: string;
    grade: string;
    board: string;
    slotLabel: string;
    slotTime: string;
    groupLink: string;
    whatsappText: string;
  } | null>(null);

  // When prefillGrade changes or modal opens, sync grade
  useEffect(() => {
    if (prefillGrade) {
      setGrade(prefillGrade);
      setSlotKey("");
    }
  }, [prefillGrade, isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentBatchKey = grade ? getBatchKeyForGrade(grade) : "";
  const currentBatch = currentBatchKey ? BATCH_SLOTS[currentBatchKey] : null;

  const boardOptions = [
    { value: "CBSE", label: "CBSE Board", description: "NCERT & National framework" },
    { value: "IB", label: "IB (PYP / MYP)", description: "Inquiry-based international curriculum" },
    { value: "IGCSE", label: "Cambridge / IGCSE", description: "Checkpoint & Cambridge curriculum" },
    { value: "American", label: "American Curriculum", description: "Common Core & US High School prep" },
    { value: "MOE", label: "UAE MOE", description: "UAE Ministry of Education standards" },
    { value: "ICSE", label: "ICSE / State Board", description: "Rigorous regional syllabus" }
  ];

  const gradeOptions = [
    { value: "1", label: "Grade 1", badge: "Foundations" },
    { value: "2", label: "Grade 2", badge: "Foundations" },
    { value: "3", label: "Grade 3", badge: "Junior Olympiad" },
    { value: "4", label: "Grade 4", badge: "Junior Olympiad" },
    { value: "5", label: "Grade 5", badge: "IMO & ASSET" },
    { value: "6", label: "Grade 6", badge: "IMO & MAT" },
    { value: "7", label: "Grade 7", badge: "Olympiad Advanced" },
    { value: "8", label: "Grade 8", badge: "Olympiad Advanced" }
  ];

  const slotOptions = currentBatch
    ? currentBatch.options.map((opt, i) => ({
        value: `${currentBatchKey}|${i}`,
        label: `${opt.label}`,
        description: `Class Time: ${currentBatch.time}`,
        badge: "Live 1:6"
      }))
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || !board || !grade || !slotKey) {
      return;
    }

    const [key, indexStr] = slotKey.split("|");
    const batchGroup = BATCH_SLOTS[key];
    const optionIndex = parseInt(indexStr, 10);
    const selectedOption: BatchOption = batchGroup.options[optionIndex];

    const notifyText = encodeURIComponent(
      `New demo booking:\n` +
      `Student: ${name.trim()}\n` +
      `Grade: Grade ${grade} (${board})\n` +
      `Slot: ${selectedOption.label}, ${batchGroup.time}\n` +
      `Parent WhatsApp: ${whatsapp.trim()}\n` +
      `Status: Awaiting batch confirmation`
    );

    setBookedDetails({
      name: name.trim(),
      grade,
      board,
      slotLabel: selectedOption.label,
      slotTime: batchGroup.time,
      groupLink: selectedOption.link,
      whatsappText: notifyText
    });

    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setBookedDetails(null);
    setName("");
    setWhatsapp("");
    setBoard("");
    setGrade("");
    setSlotKey("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[#121420] rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-[#8A7BFF]/25 relative p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-[#B0A8D9] hover:bg-white/20 hover:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isBooked ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3AE8C7] bg-[#3AE8C7]/10 px-3.5 py-1.5 rounded-full border border-[#3AE8C7]/25 inline-flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#3AE8C7] animate-pulse" />
                Zero Cost · 45-Minute Live Class
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Book a Free Demo Class
              </h2>
              <p className="text-sm text-[#B0A8D9] mt-1.5">
                Pick your child’s grade and slot. You’ll be added directly to the official batch WhatsApp group.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Student Name */}
              <div>
                <label className="block text-xs font-semibold text-[#B0A8D9] uppercase tracking-wider mb-1">
                  Student's Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aanya Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#8A7BFF]/25 bg-[#0B0C10] text-white text-sm placeholder-[#B0A8D9]/40 focus:outline-none focus:ring-2 focus:ring-[#8A7BFF]/30 focus:border-[#8A7BFF] transition-colors"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-semibold text-[#B0A8D9] uppercase tracking-wider mb-1">
                  Parent's WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +971 50 123 4567 or +91 98765 43210"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#8A7BFF]/25 bg-[#0B0C10] text-white text-sm placeholder-[#B0A8D9]/40 focus:outline-none focus:ring-2 focus:ring-[#8A7BFF]/30 focus:border-[#8A7BFF] transition-colors"
                />
                <span className="text-[11px] text-[#B0A8D9]/70 mt-0.5 block">
                  We send the live Zoom room link and mentor note directly on WhatsApp.
                </span>
              </div>

              {/* Board and Grade with CustomSelect component */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CustomSelect
                  label="Syllabus / Board *"
                  value={board}
                  onChange={(val) => setBoard(val)}
                  options={boardOptions}
                  placeholder="Select Board"
                />

                <CustomSelect
                  label="Student Grade *"
                  value={grade}
                  onChange={(val) => {
                    setGrade(val);
                    setSlotKey("");
                  }}
                  options={gradeOptions}
                  placeholder="Select Grade"
                />
              </div>

              {/* Slot Selection with CustomSelect */}
              <CustomSelect
                label="Select Your Batch Slot *"
                value={slotKey}
                onChange={(val) => setSlotKey(val)}
                options={slotOptions}
                placeholder={!grade ? "Choose a grade first" : "Choose available slot"}
                disabled={!grade}
              />

              {grade && currentBatch && (
                <p className="text-[11px] text-[#3AE8C7] font-medium">
                  Standard batch time for Grade {grade}: {currentBatch.time}
                </p>
              )}

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#B0A8D9]">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-0.5 rounded border-[#8A7BFF]/30 bg-[#0B0C10] text-[#8A7BFF] focus:ring-[#8A7BFF]"
                  />
                  <span>
                    I agree to receive class updates on WhatsApp and understand I will be invited to the private batch group.
                  </span>
                </label>
              </div>

              {/* Submit CTA: Coral/Light Orange Gradient */}
              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#FF8A71] to-[#FF7A60] hover:from-[#ff967f] hover:to-[#ff856c] transition-all transform active:scale-98 shadow-[0_4px_20px_rgba(255,122,96,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm &amp; Book Free Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center pt-1 text-[11px] text-[#B0A8D9]/60">
                🔒 100% Free · No credit card required · Mentor assigned in 1 hour
              </div>
            </form>
          </div>
        ) : (
          /* Booked Success View */
          <div className="text-center py-4 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#3AE8C7]/20 border border-[#3AE8C7]/40 text-[#3AE8C7] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold text-[#3AE8C7] uppercase tracking-wider block">
                Booking Confirmed! 🎉
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                You’re Ready for Class!
              </h3>
              <div className="mt-3 p-4 rounded-2xl bg-[#0B0C10] border border-[#8A7BFF]/20 text-xs sm:text-sm text-white text-left space-y-1">
                <p>
                  <strong className="text-[#8A7BFF]">Student:</strong> {bookedDetails?.name} (Grade {bookedDetails?.grade}, {bookedDetails?.board})
                </p>
                <p>
                  <strong className="text-[#8A7BFF]">Scheduled Slot:</strong> {bookedDetails?.slotLabel}
                </p>
                <p>
                  <strong className="text-[#8A7BFF]">Class Time:</strong> {bookedDetails?.slotTime}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {/* Primary: Direct WhatsApp Group Join Link */}
              <a
                href={bookedDetails?.groupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Join Your Batch WhatsApp Group Now</span>
              </a>

              {/* Secondary: Notify Business Directly */}
              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${bookedDetails?.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full text-sm font-semibold text-white bg-[#0B0C10] border border-[#8A7BFF]/25 hover:border-[#8A7BFF] hover:text-[#8A7BFF] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#8A7BFF]" />
                <span>Send Booking Details to MathsVertex Desk</span>
              </a>

              {/* Done button */}
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#B0A8D9]/70 hover:text-white transition-colors cursor-pointer"
              >
                Done and Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
