"use client";

import { useState } from "react";
import { toast } from "./Toast";
import { VehicleCommand } from "@/data/types";

export default function CommandRow({ cmd }: { cmd: VehicleCommand }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(cmd.c).then(() => {
      toast("Copied to clipboard!");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-[0.65rem] font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/15 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
        {cmd.v}
      </span>
      <span
        onClick={handleClick}
        className={`flex-1 font-mono text-[0.68rem] border rounded-lg px-2.5 py-1.5 cursor-pointer overflow-x-auto whitespace-nowrap select-all transition-all ${
          copied
            ? "border-green-500/40 bg-green-500/8 text-[#7ee787]"
            : "bg-black/25 border-white/5 text-[#7ee787] hover:border-[#7ee787]/25 hover:bg-[#7ee787]/4"
        }`}
      >
        {cmd.c}
      </span>
      <button
        onClick={handleClick}
        className={`shrink-0 px-3 py-1 rounded-full text-[0.7rem] font-semibold cursor-pointer transition-all ${
          copied
            ? "bg-emerald-400 text-black"
            : "bg-[#e8e8e8] text-[#111] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
        }`}
      >
        {copied ? "copied!" : "copy"}
      </button>
    </div>
  );
}
