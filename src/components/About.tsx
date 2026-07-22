"use client";

import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Create",
    copy: "We turn sharp insights into bold ideas and strategies that inspire, engage and move people to act.",
  },
  {
    title: "Curate",
    copy: "We craft events and activations that immerse audiences and turn brand moments into lasting memories.",
  },
  {
    title: "Design",
    copy: "We build distinctive brand identities and worlds that speak volumes and leave a lasting impression.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
            <span className="h-px w-10 bg-accent" />
            About Us
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">
            An experiential agency that delivers{" "}
            <span className="text-gradient">360° brand campaigns</span> — rooted
            in innovation, consumer insight and storytelling.
          </h2>
        </Reveal>

        {/* team picture */}
        <Reveal delay={0.1}>
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-border">
            <Placeholder label="The Anthem Team" ratio="aspect-[21/9]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="font-display text-lg font-semibold">
                The people behind the experiences
              </p>
              <p className="font-body text-sm text-muted">
                A team of strategists, producers and makers based in New Delhi.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/50"
              >
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
