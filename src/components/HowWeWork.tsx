"use client";

import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

const approach = [
  {
    step: "01",
    title: "Insight",
    copy: "We start with the audience, not the asset — finding the sharp truth a brand can own.",
  },
  {
    step: "02",
    title: "Craft",
    copy: "We build the idea across screen and stage, obsessing over every frame and every detail.",
  },
  {
    step: "03",
    title: "Activation",
    copy: "We take it live — measured, optimised and made to travel far beyond the moment itself.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="border-y border-border bg-surface/60 py-28 backdrop-blur-sm sm:py-36"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              How we work
            </p>
          </Reveal>
          <AnimatedHeading
            text="Three moves, screen to stage"
            highlight="screen to stage"
            className="font-display text-3xl font-bold leading-tight sm:text-5xl"
          />
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {approach.map((a, i) => (
            <Reveal key={a.step} delay={i * 0.08}>
              <div className="flex h-full flex-col bg-surface p-8">
                <span className="font-display text-5xl font-extrabold text-accent/25">
                  {a.step}
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold">
                  {a.title}
                </h3>
                <p className="mt-3 font-body leading-relaxed text-muted">
                  {a.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
