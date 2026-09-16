"use client";

type PlaceholderProps = {
  label?: string;
  className?: string;
  ratio?: string;
};

export default function Placeholder({
  label = "Image",
  className = "",
  ratio = "aspect-video",
}: PlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface-2 ${ratio} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(139,127,232,0.18) 50%, transparent 70%)",
          animation: "shimmer-sweep 2.4s ease-in-out infinite",
        }}
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
