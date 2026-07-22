"use client";

import { motion } from "framer-motion";

type PlaceholderProps = {
  label?: string;
  className?: string;
  ratio?: string; // e.g. "aspect-video", "aspect-square"
};

/**
 * Image placeholder — animated shimmer block used everywhere real photography
 * will eventually go. Keeps the dark, premium look with the electric-blue accent.
 */
export default function Placeholder({
  label = "Image",
  className = "",
  ratio = "aspect-video",
}: PlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface-2 ${ratio} ${className}`}
    >
      {/* diagonal grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* moving shimmer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(0,153,255,0.18) 50%, transparent 70%)",
        }}
        animate={{ x: ["-120%", "120%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          className="text-accent"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8.5" cy="8.5" r="1.8" fill="currentColor" />
          <path
            d="M21 15l-5-5L5 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-body text-xs uppercase tracking-[0.25em] text-muted-2">
          {label}
        </span>
      </div>
    </div>
  );
}
