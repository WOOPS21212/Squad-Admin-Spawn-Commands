"use client";

import { CategoryKey } from "@/data/types";
import { CATEGORIES, CATEGORY_ORDER } from "@/data/categories";

interface FilterBarProps {
  active: CategoryKey | "all";
  onChange: (cat: CategoryKey | "all") => void;
}

export default function FilterBar({ active, onChange }: FilterBarProps) {
  const btnClass = (key: string) =>
    `px-3.5 py-1.5 rounded-full border text-[0.8rem] cursor-pointer transition-all ${
      active === key
        ? "bg-[#58a6ff] text-black border-[#58a6ff] font-semibold"
        : "bg-[#161b22] text-[#8b949e] border-[#30363d] hover:border-[#58a6ff] hover:text-[#e6edf3]"
    }`;

  return (
    <div className="flex flex-wrap gap-1.5 justify-center max-w-[900px] mx-auto mb-6">
      <button className={btnClass("all")} onClick={() => onChange("all")}>
        All
      </button>
      {CATEGORY_ORDER.map((key) => (
        <button
          key={key}
          className={btnClass(key)}
          onClick={() => onChange(key)}
        >
          {CATEGORIES[key].name}
        </button>
      ))}
    </div>
  );
}
