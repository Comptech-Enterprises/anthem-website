"use client";

import { motion, type Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Props = {
  text: string;
  highlight?: string;
  className?: string;
  delay?: number;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const word: Variants = {
  hidden: { y: "115%" },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const clean = (w: string) => w.replace(/[.,—]/g, "");

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth < 640);
  }, []);
  return mobile;
}

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

  const isMobile = useIsMobile();
  const cssRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!isMobile || !cssRef.current) return;
    const el = cssRef.current;
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
  }, [isMobile]);

  if (isMobile) {
    return (
      <h2
        ref={cssRef}
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
              style={{ animationDelay: `${delay + i * 0.04}s` }}
            >
              {w}
            </span>
          </span>
        ))}
      </h2>
    );
  }

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="me-[0.28em] inline-flex overflow-hidden pb-[0.2em] align-bottom last:me-0"
        >
          <motion.span
            variants={word}
            className={`inline-block ${hi.has(clean(w)) ? "text-gradient" : ""}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
}
