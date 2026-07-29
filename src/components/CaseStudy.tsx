"use client";

import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";
import MagneticButton from "./MagneticButton";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import type { CaseStudy as CaseStudyType } from "@/data/cases";

export default function CaseStudy({ data }: { data: CaseStudyType }) {
  return (
    <article className="relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/4 h-[520px] w-[520px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      <div className="container-x relative">
        {/* back link */}
        <Reveal>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-accent"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            All work
          </Link>
        </Reveal>

        {/* header */}
        <header className="mt-8 max-w-3xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              {data.company}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <AnimatedHeading
              text={data.title}
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted">
              {data.summary}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/70 px-3 py-1 font-body text-[11px] uppercase tracking-[0.12em] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </header>

        {/* hero media */}
        <Reveal delay={0.2}>
          <div className="mt-14">
            <Placeholder label={data.media[0]} ratio="aspect-[16/7]" className="w-full" />
          </div>
        </Reveal>

        {/* body */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* overview + objective */}
          <div className="space-y-14">
            <Section eyebrow="01" title="Project overview">
              <p className="font-body text-base leading-relaxed text-muted">
                {data.overview}
              </p>
            </Section>

            <Section eyebrow="02" title="Objective">
              <p className="font-body text-base leading-relaxed text-muted">
                {data.objective}
              </p>
            </Section>
          </div>

          {/* execution */}
          <Section eyebrow="03" title="Execution">
            <ol className="space-y-4">
              {data.execution.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm"
                >
                  <span className="font-display text-sm font-bold text-accent/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm leading-relaxed text-muted">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Section>
        </div>

        {/* results */}
        <div className="mt-20">
          <Section eyebrow="04" title="Results">
            <div className="grid gap-4 sm:grid-cols-3">
              {data.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur-sm"
                >
                  <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                    {r.value}
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* gallery */}
        {data.media.length > 1 && (
          <div className="mt-20">
            <Section eyebrow="05" title="Gallery">
              <div className="grid gap-4 sm:grid-cols-2">
                {data.media.slice(1).map((m) => (
                  <Placeholder key={m} label={m} ratio="aspect-[4/3]" className="w-full" />
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* CTA */}
        <Reveal>
          <div className="mt-24 flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface/60 px-8 py-14 text-center backdrop-blur-sm">
            <h2 className="max-w-xl font-display text-2xl font-bold sm:text-3xl">
              Got a moment worth building?
            </h2>
            <p className="max-w-md font-body text-muted">
              Tell us what you&apos;re planning — we&apos;ll help you make it land.
            </p>
            <MagneticButton
              href="/#enquiry"
              className="rounded-full bg-accent px-8 py-4 font-body font-medium text-black transition-shadow hover:shadow-[0_0_40px_var(--accent-glow)]"
            >
              Start a project
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <Reveal>
        <div className="mb-6 flex items-baseline gap-4">
          <span className="font-display text-sm font-bold text-accent/50">{eyebrow}</span>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
        </div>
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}
