import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  route?: string;
  onClick?: () => void;
}

export interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  onNavigate?: (route: string) => void;
  className?: string;
}

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  items,
  onNavigate,
  className = ""
}) => {
  const handleClick = (item: BreadcrumbItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.route && onNavigate) {
      onNavigate(item.route);
    } else if (item.route) {
      window.location.hash = item.route;
    }
  };

  // Prepend Home if not already the first item
  const allItems: BreadcrumbItem[] = [
    { label: "Home", route: "home" },
    ...items.filter((item) => item.label.toLowerCase() !== "home")
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-xs font-medium text-white/60 py-2 ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const isClickable = !isLast && (Boolean(item.route) || Boolean(item.onClick));

          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-white/40 flex-none" aria-hidden="true" />
              )}

              {isClickable ? (
                <button
                  type="button"
                  onClick={() => handleClick(item)}
                  className="flex items-center gap-1 text-white/70 hover:text-[#8A7BFF] transition-colors cursor-pointer py-1"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5 flex-none" aria-hidden="true" />}
                  <span>{item.label}</span>
                </button>
              ) : (
                <span
                  className={`py-1 ${
                    isLast
                      ? "text-[#8A7BFF] font-semibold truncate max-w-[260px] sm:max-w-none"
                      : "text-white/60"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
