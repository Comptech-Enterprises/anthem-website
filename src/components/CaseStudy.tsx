"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import MagneticButton from "./MagneticButton";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import type { CaseStudy as CaseStudyType } from "@/data/cases";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function useCountUp(target: string, active: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const match = target.match(/^(\D*)([\d,]+)(\D*)$/);
    if (!match) { setDisplay(target); return; }
    const [, pre, raw, suf] = match;
    const end = parseInt(raw.replace(/,/g, ""), 10);
    if (isNaN(end)) { setDisplay(target); return; }

    let startTs: number;
    const duration = 1200;
    const raf = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = Math.round(eased * end);
      setDisplay(pre + cur.toLocaleString() + suf);
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target]);

  return display;
}

function ResultCard({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const display = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      variants={scaleFade}
      className="rounded-2xl border border-border bg-surface/60 p-7 backdrop-blur-sm"
    >
      <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
        {display}
      </p>
      <p className="mt-3 font-body text-sm leading-relaxed text-muted">{label}</p>
    </motion.div>
  );
}

function VideoHero({ src, heroScale }: { src: string; heroScale: ReturnType<typeof useTransform> }) {
  const [ready, setReady] = useState(false);
  return (
    <div className="relative w-full aspect-[16/7] overflow-hidden bg-surface">
      <motion.div style={{ scale: heroScale }} className="absolute inset-0 origin-center">
        <video
          ref={(el) => {
            if (!el) return;
            el.play().catch(() => {
              // autoplay blocked; show first frame silently
              el.muted = true;
              el.play().catch(() => {});
            });
          }}
          src={src}
          autoPlay
          loop
          playsInline
          onCanPlay={() => setReady(true)}
          className="h-full w-full object-cover"
        />
      </motion.div>
      {/* shimmer overlays video until it can play */}
      <div
        className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-r from-surface via-border/30 to-surface transition-opacity duration-700"
        style={{ opacity: ready ? 0 : 1 }}
      />
    </div>
  );
}

export default function CaseStudy({ data }: { data: CaseStudyType }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  return (
    <article className="relative overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36">
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
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
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

        {/* hero media — parallax */}
        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 overflow-hidden rounded-2xl border border-border"
        >
          {data.video ? (
            <VideoHero src={data.video} heroScale={heroScale} />
          ) : data.media[0]?.startsWith("/") ? (
            <div className="relative w-full aspect-[16/7] overflow-hidden">
              <motion.div style={{ scale: heroScale }} className="absolute inset-0 origin-center">
                <Image src={data.media[0]} alt={data.title} fill sizes="100vw" className="object-cover" unoptimized />
              </motion.div>
            </div>
          ) : (
            <Placeholder label={data.media[0]} ratio="aspect-[16/7]" className="w-full" />
          )}
        </motion.div>

      </div>

      <div className="container-x relative">
        {/* body */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="space-y-14">
            <Section eyebrow="01" title="Project overview">
              <p className="font-body text-base leading-relaxed text-muted">{data.overview}</p>
            </Section>
            <Section eyebrow="02" title="Objective">
              <p className="font-body text-base leading-relaxed text-muted">{data.objective}</p>
            </Section>
          </div>

          {/* execution — staggered slide */}
          <Section eyebrow="03" title="Execution">
            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
            >
              {data.execution.map((step, i) => (
                <motion.li
                  key={step}
                  variants={slideLeft}
                  className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur-sm"
                >
                  <span className="font-display text-sm font-bold text-accent/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-sm leading-relaxed text-muted">{step}</span>
                </motion.li>
              ))}
            </motion.ol>
          </Section>
        </div>

        {/* results — staggered scale + count-up */}
        <div className="mt-20">
          <Section eyebrow="04" title="Results">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {data.results.map((r) => (
                <ResultCard key={r.label} value={r.value} label={r.label} />
              ))}
            </motion.div>
          </Section>
        </div>

        {/* gallery — staggered scale */}
        {data.media.length > 0 && (
          <div className="mt-20">
            <Section eyebrow="05" title="Gallery">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {(data.video ? data.media : data.media.slice(1)).map((m) =>
                  m.startsWith("/") ? (
                    <motion.div
                      key={m}
                      variants={scaleFade}
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border"
                    >
                      <Image src={m} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" unoptimized />
                    </motion.div>
                  ) : (
                    <motion.div key={m} variants={scaleFade}>
                      <Placeholder label={m} ratio="aspect-[4/3]" className="w-full" />
                    </motion.div>
                  )
                )}
              </motion.div>
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
