"use client";

import { useRef, useEffect } from "react";

type Props = {
  text: string;
  highlight?: string;
  className?: string;
  delay?: number;
};

const clean = (w: string) => w.replace(/[.,—]/g, "");

export default function AnimatedHeading({
  text,
  highlight = "",
  className = "",
  delay = 0,
}: Props) {
  const words = text.split(" ");
  const hi = new Set(
    highlight
      .split(" ")
      .map((w) => clean(w.trim()))
      .filter(Boolean),
  );

  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`css-heading ${className}`}
      style={delay > 0 ? { "--heading-base-delay": `${delay}s` } as React.CSSProperties : undefined}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="me-[0.28em] inline-flex overflow-hidden pb-[0.2em] align-bottom last:me-0"
        >
          <span
            className={`inline-block css-heading-word ${hi.has(clean(w)) ? "text-gradient" : ""}`}
            style={{ animationDelay: `${delay + i * 0.055}s` }}
          >
            {w}
          </span>
        </span>
      ))}
    </h2>
  );
}
