"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";

const perks = [
  {
    icon: "01",
    title: "Build things people remember",
    description:
      "You won't push pixels in a vacuum. Every project ships live — festivals, launches, activations — and you'll see thousands of people experience what you made.",
  },
  {
    icon: "02",
    title: "Small team, outsized reach",
    description:
      "We're lean by design. That means you own your lane from day one, work directly with founders, and move faster than agencies five times our size.",
  },
  {
    icon: "03",
    title: "Creative without the fluff",
    description:
      "No jargon decks. No brainstorms that go nowhere. We brief sharp, execute fast, and measure what matters — then do it again.",
  },
  {
    icon: "04",
    title: "New Delhi, on the ground",
    description:
      "We work out of Chhatarpur, Delhi. The role is in-person because the best experiential work happens when the team is in the room together.",
  },
];

export default function JobApplication() {
  return (
    <section id="careers" className="relative pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        {/* header — two-column: text left, email CTA right */}
        <div className="mb-20 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
                <span className="h-px w-10 bg-accent" />
                Careers
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <AnimatedHeading
                text="Work with us, not for us"
                highlight="with us"
                className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted">
                We&apos;re always looking for sharp, restless people who&apos;d rather make
                the moment than watch it. No open roles listed — if you&apos;re good,
                we&apos;ll find a seat.
              </p>
            </Reveal>
          </div>

          {/* email CTA card — right side */}
          <Reveal delay={0.15}>
            <div className="flex flex-col items-center rounded-2xl border border-border bg-surface/60 px-8 py-10 text-center backdrop-blur-sm">
              <p className="mb-4 font-body text-sm leading-relaxed text-muted">
                Send us your portfolio, a note about yourself, and the role you see yourself in.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=hr@theanthem.in&su=Application%20—%20Anthem"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full border border-accent/40 px-8 py-4 font-display text-lg font-semibold text-accent transition-all hover:border-accent hover:shadow-[0_0_40px_var(--accent-glow)]"
              >
                <span className="relative z-10">hr@theanthem.in</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
                <span className="absolute inset-0 rounded-full bg-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <p className="mt-4 font-body text-xs text-muted-2">
                We read every email. If there&apos;s a fit, you&apos;ll hear back within a week.
              </p>
            </div>
          </Reveal>
        </div>

        {/* why work at Anthem */}
        <div className="mb-12">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Why work at Anthem
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Reasons people stick around
            </h2>
          </Reveal>
        </div>

        {/* perks grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {perks.map((perk, i) => (
            <Reveal key={perk.icon} delay={0.05 * i} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full gap-5 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-colors hover:border-accent/30 sm:p-8"
              >
                <span className="shrink-0 font-display text-3xl font-bold text-accent/20 transition-colors group-hover:text-accent/50">
                  {perk.icon}
                </span>
                <div>
                  <h3 className="mb-2 font-display text-lg font-semibold">
                    {perk.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
