import React from "react";

export interface SegmentedControlItem {
  id: string;
  label: string;
  count?: number | string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps {
  items: SegmentedControlItem[];
  selectedId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  items,
  selectedId,
  onChange,
  className = "",
  size = "md"
}) => {
  return (
    <div
      className={`inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#121420] rounded-full border border-[#8A7BFF]/25 shadow-inner ${className}`}
      role="tablist"
    >
      {items.map((item) => {
        const isSelected = item.id === selectedId;
        const paddingClass = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-xs sm:text-sm";

        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(item.id)}
            className={`rounded-full font-semibold transition-all flex items-center gap-2 cursor-pointer ${paddingClass} ${
              isSelected
                ? "bg-[#8A7BFF] text-[#0B0C10] font-bold shadow-[0_2px_12px_rgba(138,123,255,0.4)] scale-[1.02]"
                : "text-[#B0A8D9] hover:text-white hover:bg-white/5"
            }`}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.label}</span>
            {item.count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? "bg-[#0B0C10] text-[#8A7BFF]" : "bg-[#0B0C10] text-[#3AE8C7]"
                }`}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
