"use client";

import { useEffect, useState, useCallback } from "react";

let showToastFn: ((msg: string) => void) | null = null;

export function toast(msg: string) {
  showToastFn?.(msg);
}

export default function Toast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const show = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 1500);
  }, []);

  useEffect(() => {
    showToastFn = show;
    return () => { showToastFn = null; };
  }, [show]);

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-2.5 rounded-lg font-semibold text-sm z-50 transition-all duration-300 pointer-events-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      {message}
    </div>
  );
}
