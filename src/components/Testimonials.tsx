"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Anthem turned our product launch into a citywide moment. From the first strategy deck to the final teardown, the execution was flawless.",
    name: "Marketing Head",
    org: "Global Spirits Brand",
  },
  {
    quote:
      "Few teams understand experiential like Anthem. Bold creative, obsessive attention to detail, and a genuine partner through every twist.",
    name: "Brand Director",
    org: "Leading FMCG Company",
  },
  {
    quote:
      "They took a sharp consumer insight and built an experience our audience couldn't stop talking about. Impossible to ignore, easy to love.",
    name: "Chief Marketing Officer",
    org: "High-Growth Tech Startup",
  },
  {
    quote:
      "Every milestone was hit, every detail considered. Anthem made a complex multi-city rollout feel effortless from our side of the table.",
    name: "Head of Brand",
    org: "National Beverage Leader",
  },
  {
    quote:
      "The kind of partner that makes your brand braver. Ideas with teeth, delivered with real craft and zero drama.",
    name: "VP Marketing",
    org: "Global Lifestyle Label",
  },
];

const AUTOPLAY_MS = 5000;

// direction-aware slide + fade
const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export default function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number, direction: number) => {
    const len = testimonials.length;
    setState([(next + len) % len, direction]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(index + 1, 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, paused, go]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative border-t border-border py-28 sm:py-36"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Testimonials
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Trusted by brands who{" "}
              <span className="text-gradient">came back for more</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            className="relative mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* slider stage */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-16 sm:py-16">
              {/* ambient glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

              <span className="block font-display text-6xl leading-none text-accent/40">
                &ldquo;
              </span>

              <div className="relative min-h-[16rem] sm:min-h-[11rem]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={index}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <blockquote className="max-w-3xl font-display text-lg font-medium leading-snug text-foreground sm:text-3xl">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-8 flex items-center gap-4">
                      <Placeholder
                        label=""
                        ratio="aspect-square"
                        className="h-12 w-12 shrink-0 rounded-full"
                      />
                      <div>
                        <p className="font-display text-base font-semibold">
                          {t.name}
                        </p>
                        <p className="font-body text-sm text-muted-2">{t.org}</p>
                      </div>
                    </figcaption>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* controls */}
            <div className="mt-8 flex items-center justify-between">
              {/* dots + autoplay progress */}
              <div className="flex items-center gap-2.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    className="group relative h-2 overflow-hidden rounded-full bg-surface-3 transition-all"
                    style={{ width: i === index ? 40 : 10 }}
                  >
                    {i === index && !paused && (
                      <motion.span
                        key={index}
                        className="absolute inset-0 origin-left rounded-full bg-accent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                      />
                    )}
                    {i === index && paused && (
                      <span className="absolute inset-0 rounded-full bg-accent" />
                    )}
                  </button>
                ))}
              </div>

              {/* arrows */}
              <div className="flex gap-3">
                <button
                  aria-label="Previous"
                  onClick={() => go(index - 1, -1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  ←
                </button>
                <button
                  aria-label="Next"
                  onClick={() => go(index + 1, 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
