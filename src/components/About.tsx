"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Create",
    copy: "Transformative ideas into strategies that inspire and engage.",
    num: "01",
  },
  {
    title: "Curate",
    copy: "Experiences through events and activations that immerse and resonate.",
    num: "02",
  },
  {
    title: "Design",
    copy: "Unique visual identities that speak volumes and create lasting impressions.",
    num: "03",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-body text-sm uppercase tracking-[0.35em] text-accent">
            <span className="h-px w-10 bg-accent" />
            About Us
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            An experiential agency that delivers{" "}
            <span className="text-gradient">360° brand campaigns</span> — rooted
            in innovation, consumer insights and storytelling.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/50"
              >
                <div className="absolute right-4 top-2 font-display text-7xl font-extrabold leading-none text-surface-3 transition-colors group-hover:text-accent/20">
                  {p.num}
                </div>
                <h3 className="relative font-display text-2xl font-semibold">
                  {p.title}
                </h3>
                <p className="relative mt-4 font-body leading-relaxed text-muted">
                  {p.copy}
                </p>
                <span className="relative mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                  →
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
