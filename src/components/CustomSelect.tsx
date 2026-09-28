import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface CustomSelectOption {
  value: string;
  label: string;
  badge?: string;
  description?: string;
}

export interface CustomSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: CustomSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-xs font-semibold text-[#B0A8D9] uppercase tracking-wider mb-1">
          {label}
        </label>
      )}

      {/* Select trigger button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border text-left text-sm flex items-center justify-between transition-all bg-[#0B0C10] ${
          disabled
            ? "opacity-40 cursor-not-allowed border-white/10 text-white/40"
            : isOpen
            ? "border-[#8A7BFF] ring-2 ring-[#8A7BFF]/30 text-white"
            : "border-[#8A7BFF]/25 text-white hover:border-[#8A7BFF] cursor-pointer"
        }`}
      >
        <span className={selectedOption ? "text-white font-medium" : "text-[#B0A8D9]/40"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#B0A8D9] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#8A7BFF]" : ""
          }`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && !disabled && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-[#121420] border border-[#8A7BFF]/30 rounded-xl shadow-2xl overflow-hidden max-h-56 overflow-y-auto animate-in fade-in zoom-in-95 duration-100 divide-y divide-[#8A7BFF]/15">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left flex items-start justify-between gap-3 text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#8A7BFF]/20 text-[#8A7BFF]"
                      : "text-[#B0A8D9] hover:bg-[#8A7BFF]/10 hover:text-white"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{opt.label}</span>
                      {opt.badge && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-[#3AE8C7]/15 text-[#3AE8C7] font-semibold border border-[#3AE8C7]/30">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    {opt.description && (
                      <p className="text-xs text-[#B0A8D9]/70">{opt.description}</p>
                    )}
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#3AE8C7] flex-none mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
