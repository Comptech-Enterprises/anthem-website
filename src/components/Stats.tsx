"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Reveal";

const stats = [
  { value: 150, suffix: "+", label: "Experiences delivered" },
  { value: 12, suffix: "", label: "Years of craft" },
  { value: 80, suffix: "+", label: "Brands partnered" },
  { value: 30, suffix: "+", label: "Cities activated" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-border bg-surface/60 py-20 backdrop-blur-sm">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="text-center lg:text-left">
              <p className="font-display text-5xl font-extrabold text-gradient sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-body text-sm uppercase tracking-[0.2em] text-muted-2">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
