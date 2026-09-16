"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const R2 = "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads";

const slides = [
  `${R2}/sliders-1.webp`,
  `${R2}/sliders-2.webp`,
  `${R2}/sliders-10.webp`,
  `${R2}/sliders-11.webp`,
  `${R2}/sliders-12.webp`,
];

const words = ["We", "Build", "Moments", "People", "Remember"];

const segments = [
  { text: "Anthem is an ", highlight: false },
  { text: "experiential marketing agency", highlight: true },
  { text: " that builds ideas people don't just see, but ", highlight: false },
  { text: "get to live", highlight: true },
  { text: ". From large-scale festivals and brand activations to creator-led campaigns and ", highlight: false },
  { text: "cultural IPs", highlight: true },
  { text: ", we create work that lives both ", highlight: false },
  { text: "online and offline", highlight: true },
  { text: ".", highlight: false },
];

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth < 640);
  }, []);
  return mobile;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 60 : 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bandY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -80]);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-start overflow-hidden pt-28 pb-16 sm:justify-center sm:pt-32"
    >
      {/* ambient glows — static, smaller on mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-10 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[80px] sm:h-[34rem] sm:w-[34rem] sm:blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[16rem] w-[16rem] rounded-full blur-[70px] sm:h-[28rem] sm:w-[28rem] sm:blur-[140px]"
        style={{ background: "rgba(108,92,231,0.15)" }}
      />

      {/* grid overlay — desktop only */}
      <div
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        className="pointer-events-none absolute -inset-10 opacity-[0.05] hidden sm:block"
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
                  duration: isMobile ? 0.5 : 0.9,
                  delay: isMobile ? 0.1 + i * 0.06 : 0.3 + i * 0.12,
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

        {isMobile ? (
          <motion.p
            className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {segments.map((segment, i) => (
              <span
                key={i}
                className={segment.highlight ? "text-gradient font-medium" : ""}
              >
                {segment.text}
              </span>
            ))}
          </motion.p>
        ) : (
          <motion.p
            className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-muted"
          >
            {segments.map((segment, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.0 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={segment.highlight ? "text-gradient font-medium" : ""}
              >
                {segment.text}
              </motion.span>
            ))}
          </motion.p>
        )}

      </motion.div>

      {/* cinematic image band */}
      <motion.div
        style={{ y: bandY }}
        initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: isMobile ? 0.5 : 1, delay: isMobile ? 0.4 : 0.7, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ duration: isMobile ? 0.5 : 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[slide]}
                  alt=""
                  fill
                  className={`object-cover ${
                    slides[slide] === `${R2}/sliders-2.webp`
                      ? "object-top"
                      : slides[slide] === `${R2}/sliders-12.webp`
                        ? "object-right sm:object-center"
                        : "object-center"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                  priority={slide === 0}
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-black/30" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
