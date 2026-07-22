"use client";

import { motion } from "framer-motion";
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

        {/* team picture — bespoke band (no centered icon to collide with the
            caption); taller on mobile so it reads large on every screen */}
        <Reveal delay={0.1}>
          <figure className="relative mt-14 overflow-hidden rounded-2xl border border-border">
            <div className="relative aspect-[3/4] w-full bg-surface-2 sm:aspect-[21/9]">
              <div className="absolute inset-0 bg-[radial-gradient(120%_140%_at_75%_-10%,rgba(139,127,232,0.22),transparent_60%)]" />
              <div
                className="absolute inset-0 opacity-[0.10]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <span className="absolute right-5 top-4 font-body text-[10px] uppercase tracking-[0.3em] text-muted-2">
                New Delhi
              </span>
            </div>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8">
              <p className="font-display text-lg font-semibold sm:text-xl">
                The people behind the experiences
              </p>
              <p className="mt-1 font-body text-sm text-muted">
                A team of strategists, producers and makers based in New Delhi.
              </p>
            </figcaption>
          </figure>
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
