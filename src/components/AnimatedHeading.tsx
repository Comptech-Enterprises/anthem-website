"use client";

import { useRef, useEffect } from "react";

type Props = {
  text: string;
  highlight?: string;
  className?: string;
  delay?: number;
};

const clean = (w: string) => w.replace(/[.,—]/g, "");
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

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
          const spans = el.querySelectorAll<HTMLSpanElement>("[data-hw]");
          spans.forEach((span, i) => {
            span.style.transition = `transform 0.55s ${EASE}`;
            span.style.transitionDelay = `${delay + i * 0.055}s`;
            span.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h2 ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="me-[0.28em] inline-flex overflow-hidden pb-[0.2em] align-bottom last:me-0"
        >
          <span
            data-hw
            className={`inline-block ${hi.has(clean(w)) ? "text-gradient" : ""}`}
            style={{ transform: "translateY(115%)" }}
          >
            {w}
          </span>
        </span>
      ))}
    </h2>
  );
}
