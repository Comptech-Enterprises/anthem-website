"use client";

import AnimatedHeading from "./AnimatedHeading";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

const cases = [
  {
    tag: "Live Event & IP",
    title: "World Class India Festival",
    challenge:
      "Launch a premium spirits festival IP that could scale across cities without diluting a luxury feel.",
    approach:
      "We designed an end-to-end format — venue design, curated line-ups, immersive brand zones and an always-on content engine — then rolled it out city by city.",
    results: [
      { metric: "50K+", label: "Attendees" },
      { metric: "2.4M", label: "Content reach" },
      { metric: "38%", label: "Brand-uplift" },
    ],
  },
  {
    tag: "360° Campaign",
    title: "National Product Launch",
    challenge:
      "Introduce a flagship product across eight markets in six weeks with a single, unmistakable brand moment.",
    approach:
      "A phased experiential campaign — teaser activations, an anchor launch event, and a synchronized digital push — kept the narrative tight from screen to street.",
    results: [
      { metric: "8", label: "Cities" },
      { metric: "120+", label: "Media pickups" },
      { metric: "3.1x", label: "ROI on spend" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative border-t border-border bg-surface/60 py-28 backdrop-blur-sm sm:py-36"
    >
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Case Studies
            </p>
          </Reveal>
          <AnimatedHeading
            text="The work, and what it delivered"
            highlight="and what it delivered"
            className="font-display text-3xl font-bold leading-tight sm:text-5xl"
          />
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="grid gap-8 rounded-2xl border border-border bg-background p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr]">
                <Placeholder label={c.title} ratio="aspect-[4/3]" className="h-full" />
                <div className="flex flex-col">
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-accent">
                    {c.tag}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                    {c.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-2">
                        Challenge
                      </p>
                      <p className="mt-1 font-body leading-relaxed text-muted">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-2">
                        Approach
                      </p>
                      <p className="mt-1 font-body leading-relaxed text-muted">
                        {c.approach}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-3 gap-4 border-t border-border pt-6">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <p className="font-display text-3xl font-extrabold text-gradient">
                          {r.metric}
                        </p>
                        <p className="mt-1 font-body text-xs text-muted-2">
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
