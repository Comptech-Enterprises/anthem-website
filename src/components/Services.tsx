"use client";

import { motion, type Variants } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

// Case studies — company, the work delivered, and the discipline.
// Logos are intentional placeholder monograms (no real client artwork yet).
const cases = [
  {
    company: "Aurora",
    monogram: "AU",
    title: "World Class India Festival",
    tags: ["Live IP", "Stage Production", "360° Campaign"],
    blurb:
      "We built a homegrown festival IP from the ground up — from the first concept note to a stage that held its own against the best in the world. The brief was ambitious: create a property Aurora could own and grow year after year, not a one-off event. We shaped the format, the programming and the launch story, then produced the whole thing end to end.",
    points: [
      "Original festival format and brand identity",
      "Main-stage design and live production",
      "Multi-channel launch campaign that filled the grounds",
    ],
  },
  {
    company: "Northwind",
    monogram: "NW",
    title: "Explorers Club",
    tags: ["Brand Activation", "Experiential Pop-Up"],
    blurb:
      "Northwind wanted their product story to be felt, not just seen. We answered with a travelling pop-up — a hands-on world guests could walk through, play with and share. Each city stop was tuned to its crowd, and every touchpoint was designed to end up on a phone screen and travel further than the room itself.",
    points: [
      "Modular set that toured multiple cities",
      "Interactive stations built around the product",
      "Shareable moments engineered for social reach",
    ],
  },
  {
    company: "Solstice",
    monogram: "SO",
    title: "BCG Palooza",
    tags: ["Corporate Event", "Content Film"],
    blurb:
      "An internal celebration reimagined as a full production. We took what could have been a routine town hall and turned it into a day the whole company rallied behind — sharp staging, tight run-of-show, and a recap film that kept the energy alive long after everyone went home.",
    points: [
      "End-to-end event design and staging",
      "Live show calling and run-of-show",
      "Post-event recap film for internal reach",
    ],
  },
  {
    company: "Vertex",
    monogram: "VX",
    title: "Tiny 10 Salon",
    tags: ["Product Launch", "Social Campaign"],
    blurb:
      "Vertex was launching a new line and needed the moment to punch above its size. We built an intimate reveal for the people who mattered most, then wrapped it in a social rollout that carried the buzz well past the event — turning a single evening into weeks of conversation.",
    points: [
      "Invite-only launch experience",
      "Content capture built into the night",
      "Rollout calendar that sustained the buzz",
    ],
  },
  {
    company: "Meridian",
    monogram: "MD",
    title: "Global Sales Kickoff",
    tags: ["Conference Design", "Show Calling"],
    blurb:
      "A multi-day kickoff for a room of a thousand — designed, built and run by us. Meridian needed their teams to leave aligned and fired up, so we handled everything from the set and the run-of-show to live show calling, keeping a complex agenda moving without a beat dropped.",
    points: [
      "Full conference set and stage design",
      "Multi-day run-of-show and logistics",
      "Live show calling for a 1,000-seat room",
    ],
  },
  {
    company: "Lumen",
    monogram: "LM",
    title: "Flagship Store Reveal",
    tags: ["Activation", "Films", "Performance Media"],
    blurb:
      "Lumen opened a flagship and we made sure the city noticed. A street-level activation drew people in, launch films gave the story legs online, and a performance-media push kept the momentum pointed straight at footfall — so the doors stayed busy well past opening week.",
    points: [
      "Street-level activation at the storefront",
      "Launch film suite for digital channels",
      "Performance-media push tuned for footfall",
    ],
  },
];

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="work" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* drifting ambient glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/4 h-[520px] w-[520px] rounded-full opacity-[0.09]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-[440px] w-[440px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative">
        {/* header */}
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Our Work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <AnimatedHeading
              text="Brands we brought to life"
              highlight="brought to life"
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted">
              A look at the companies we&apos;ve partnered with and the
              experiences we built for them — from festival IPs to flagship
              launches.
            </p>
          </Reveal>
        </div>

        {/* case-study grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-accent/50 hover:shadow-[0_28px_80px_-32px_var(--accent-glow)] sm:p-8"
            >
              {/* hover spotlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
              />
              {/* sheen sweep */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />

              {/* giant index watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-8xl font-bold leading-none text-foreground/[0.03] transition-colors duration-300 group-hover:text-accent/[0.06]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-1 flex-col">
                {/* logo */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent">
                  <span className="font-display text-xl font-bold tracking-tight text-muted-2 transition-colors duration-300 group-hover:text-black">
                    {c.monogram}
                  </span>
                </div>

                <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-2">
                  {c.company}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                  {c.title}
                </h3>

                {/* write-up */}
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                  {c.blurb}
                </p>

                {/* highlight points */}
                <ul className="mt-5 space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 font-body text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent/70 transition-colors duration-300 group-hover:bg-accent"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* work tags */}
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border/50 pt-7">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 px-3 py-1 font-body text-[11px] uppercase tracking-[0.12em] text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
