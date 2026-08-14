"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const slides = [
  "/sliders/1.webp",
  "/sliders/2.webp",
  "/sliders/3.webp",
  "/sliders/slider-4.webp",
  "/sliders/5.webp",
  "/sliders/6.webp",
];

const words = ["We", "Build", "Moments", "People", "Remember."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bandY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });
  const planeX = useTransform(sx, [-0.5, 0.5], [-40, 40]);
  const planeY = useTransform(sy, [-0.5, 0.5], [-30, 30]);
  const gridX = useTransform(sx, [-0.5, 0.5], [24, -24]);
  const gridY = useTransform(sy, [-0.5, 0.5], [16, -16]);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-16"
    >
      {/* ambient glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-deep/15 blur-[140px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "rgba(108,92,231,0.15)" }}
      />

      {/* grid overlay with parallax */}
      <motion.div
        aria-hidden
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        className="pointer-events-none absolute -inset-10 opacity-[0.05]"
      />

      <motion.div
        style={{ y, opacity }}
        className="container-x relative z-10 flex flex-col items-center text-center"
      >

        <h1 className="mx-auto max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-[7rem]">
          {words.map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`mr-4 inline-block ${
                  w === "Moments" ? "text-gradient" : ""
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 max-w-xl font-body text-lg leading-relaxed text-muted"
        >
          We create brand realities that transform sharp insight into
          experiences people feel — on every screen and every stage.
        </motion.p>

      </motion.div>

      {/* cinematic image band */}
      <motion.div
        style={{ y: bandY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container-x relative z-10 mt-16"
      >
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2">
          <div className="relative aspect-[3/4] w-full sm:aspect-[21/9] overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={slide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[slide]}
                  alt=""
                  fill
                  className={`object-cover ${slides[slide] === "/sliders/2.webp" ? "object-top" : "object-center"} ${slides[slide] === "/sliders/3.webp" ? "scale-[1.2] sm:scale-100" : ""}`}
                  unoptimized
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-black/30" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-end bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8">
              <span className="hidden font-body text-[10px] uppercase tracking-[0.3em] text-muted-2 sm:block">
                Based in New Delhi
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
