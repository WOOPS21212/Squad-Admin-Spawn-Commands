"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="max-w-[700px] mx-auto mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search vehicles... (e.g. Abrams, helicopter, RUS)'
        autoComplete="off"
        className="w-full px-3.5 py-2.5 bg-[#161b22] border border-[#30363d] rounded-lg text-[#e6edf3] text-[0.95rem] outline-none focus:border-[#58a6ff] placeholder:text-[#484f58]"
      />
    </div>
  );
}
