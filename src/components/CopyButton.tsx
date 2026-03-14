"use client";

import { useState } from "react";
import { toast } from "./Toast";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      toast("Copied to clipboard!");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy"
      className={`shrink-0 w-8 h-7 border rounded flex items-center justify-center text-sm cursor-pointer transition-all ${
        copied
          ? "bg-[#112211] border-green-500 text-green-500"
          : "bg-[#21262d] border-[#30363d] text-[#8b949e] hover:border-green-500 hover:text-green-500"
      }`}
    >
      {copied ? "\u2713" : "\uD83D\uDCCB"}
    </button>
  );
}
