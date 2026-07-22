"use client";

import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const founders = [
  {
    name: "Shuchir Suri",
    role: "Co-Founder",
    copy: "Drives strategy and flawless execution — turning bold ideas into experiences that deliver.",
  },
  {
    name: "Anjali Batra",
    role: "Co-Founder",
    copy: "Leads creative with a consumer-first approach, crafting stories that resonate and stick.",
  },
];

export default function Founders() {
  return (
    <section className="relative border-t border-border bg-surface/60 py-28 backdrop-blur-sm sm:py-36">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
            <span className="h-px w-10 bg-accent" />
            The Founders
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-3xl font-bold sm:text-5xl">
            The minds behind the experiences
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={0.1 + i * 0.1}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/50 sm:flex-row sm:items-center">
                <Placeholder
                  label={f.name}
                  ratio="aspect-square"
                  className="w-full shrink-0 sm:w-40"
                />
                <div>
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-accent">
                    {f.role}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold">
                    {f.name}
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-muted">
                    {f.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
