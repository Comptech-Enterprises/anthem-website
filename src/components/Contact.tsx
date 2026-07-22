"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[160px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative z-10 text-center">
        <Reveal>
          <p className="mb-6 font-body text-sm uppercase tracking-[0.35em] text-accent">
            Let&apos;s Talk
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Let&apos;s Create Something{" "}
            <span className="text-gradient">Extraordinary</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-muted">
            Share your vision, we&apos;ll make it exceptional.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@theanthem.in"
              className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-body font-medium text-black transition-all hover:shadow-[0_0_40px_var(--accent-glow)]"
            >
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#top"
              className="rounded-full border border-border px-8 py-4 font-body font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Back to Top
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
