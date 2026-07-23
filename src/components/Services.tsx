"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import MagneticButton from "./MagneticButton";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

type Category = {
  key: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  projects: { title: string; tag: string }[];
  link?: { label: string; href: string };
};

const categories: Category[] = [
  {
    key: "digital",
    index: "01",
    title: "Digital",
    tagline: "Where audiences already live",
    description:
      "We build brands on the screens people already hold. From always-on social storytelling to high-craft films and performance-led campaigns, we plan, produce and publish content that earns attention and drives measurable action.",
    offerings: [
      "Social Media & Community",
      "Content Production",
      "Films, Reels & Motion",
      "Performance Marketing",
      "Web & Digital Experiences",
    ],
    projects: [
      { title: "Always-On Social", tag: "Content System" },
      { title: "Brand Film", tag: "Film & Motion" },
      { title: "Performance Campaign", tag: "Growth" },
    ],
    // Food Talk is Anthem's digital-content arm — swap href for the live URL.
    link: { label: "Explore Food Talk", href: "https://www.foodtalkindia.com" },
  },
  {
    key: "events",
    index: "02",
    title: "Events",
    tagline: "Where audiences take part",
    description:
      "We turn spaces into stories. From owned festival IPs to brand activations, launches and immersive pop-ups, we design and deliver on-ground experiences end-to-end — where audiences don't just watch, they take part.",
    offerings: [
      "Live Events & Owned IPs",
      "Brand Activations",
      "Product Launches",
      "Experiential Pop-Ups",
      "Stage, Set & Production",
    ],
    projects: [
      { title: "World Class India Festival", tag: "Live IP" },
      { title: "Explorers Club", tag: "Festival" },
      { title: "BCG Palooza", tag: "Activation" },
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="services"
        className="relative overflow-hidden pt-40 pb-20 sm:pt-48 sm:pb-24"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-24 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[150px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-x relative">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Services
            </p>
          </Reveal>
          <AnimatedHeading
            text="From the first insight to the final activation"
            highlight="final activation"
            className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-muted">
              One partner, two disciplines, one seamless brand story — built for
              every screen and delivered on every stage.
            </p>
          </Reveal>

          {/* discipline index — jumps to the two spreads below */}
          <Reveal delay={0.15}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {categories.map((cat) => (
                <a
                  key={cat.key}
                  href={`#${cat.key}`}
                  className="group flex items-baseline justify-between gap-4 bg-surface px-7 py-8 transition-colors hover:bg-surface-2"
                >
                  <span className="font-display text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">
                    {cat.title}
                  </span>
                  <span className="flex items-center gap-3 font-body text-sm text-muted-2">
                    {cat.tagline}
                    <span className="text-accent transition-transform group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Disciplines ──────────────────────────────────────── */}
      {categories.map((cat) => (
        <section
          key={cat.key}
          id={cat.key}
          className="relative scroll-mt-28 border-t border-border py-24 sm:py-32"
        >
          <div className="container-x">
            {/* oversized wordmark + description */}
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <Reveal>
                <div>
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-2">
                    {cat.index} — {cat.tagline}
                  </span>
                  <h2 className="mt-4 font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-8xl">
                    {cat.title}
                    <span className="text-accent">.</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <p className="font-body text-lg leading-relaxed text-muted">
                    {cat.description}
                  </p>
                  {cat.link && (
                    <a
                      href={cat.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 font-body text-sm font-medium text-accent transition-all hover:bg-accent hover:text-black"
                    >
                      {cat.link.label}
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </Reveal>
            </div>

            {/* capabilities index */}
            <div className="mt-16">
              <Reveal>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-2">
                  Capabilities
                </p>
              </Reveal>
              <ul className="mt-4 grid border-t border-border sm:grid-cols-2">
                {cat.offerings.map((o, j) => (
                  <Reveal key={o} delay={j * 0.05}>
                    <li className="group flex items-center gap-4 border-b border-border py-5 transition-colors sm:[&:nth-last-child(-n+1)]:border-b-0">
                      <span className="font-body text-xs tabular-nums text-muted-2">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-medium transition-colors group-hover:text-accent sm:text-xl">
                        {o}
                      </span>
                      <span className="ml-auto text-accent opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* signature work */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {cat.projects.map((p, j) => (
                <Reveal key={p.title} delay={0.1 + j * 0.08}>
                  <motion.article
                    whileHover="hover"
                    className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:border-accent/60 hover:shadow-[0_24px_70px_-24px_var(--accent-glow)]"
                  >
                    <motion.div
                      variants={{ hover: { scale: 1.05 } }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Placeholder label={p.title} ratio="aspect-[4/3]" />
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5">
                      <span className="font-body text-[11px] uppercase tracking-[0.25em] text-accent">
                        {p.tag}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-semibold">
                        {p.title}
                      </h3>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-border py-28 sm:py-36">
        <div className="container-x relative text-center">
          <AnimatedHeading
            text="Let's build something people remember"
            highlight="people remember"
            className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-md font-body text-lg text-muted">
              Tell us about the moment you want to create. We'll shape the
              rest — across every screen and every stage.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                href="/#enquiry"
                className="group flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-body font-medium text-black transition-shadow hover:shadow-[0_0_45px_var(--accent-glow)]"
              >
                Start a Project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
