"use client";

import { useRef, useEffect, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  blur?: boolean;
  from?: "up" | "down" | "left" | "right";
};

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
  from = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const offsets: Record<string, string> = {
      up: "translateY(24px)", down: "translateY(-24px)",
      left: "translateX(24px)", right: "translateX(-24px)",
    };
    el.style.transform = offsets[from];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.6s ${EASE}, transform 0.6s ${EASE}`;
          el.style.transitionDelay = `${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-hide ${className}`}
    >
      {children}
    </div>
  );
}
