"use client";

import { motion, type Variants } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  blur?: boolean;
  from?: "up" | "down" | "left" | "right";
};

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth < 640);
  }, []);
  return mobile;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
  once = true,
  blur = true,
  from = "up",
}: RevealProps) {
  const isMobile = useIsMobile();
  const cssRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile || !cssRef.current) return;
    const el = cssRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile, once]);

  if (isMobile) {
    const dirClass = from === "up" ? "" : `css-reveal-${from}`;
    return (
      <div
        ref={cssRef}
        className={`css-reveal ${dirClass} ${className}`}
        style={delay > 0 ? { animationDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    );
  }

  const offset: Record<string, { x?: number; y?: number }> = {
    up: { y },
    down: { y: -y },
    left: { x: y },
    right: { x: -y },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset[from],
      filter: blur ? "blur(10px)" : "blur(0px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
