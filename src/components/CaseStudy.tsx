"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
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

function VideoHero({ src, heroScale }: { src: string; heroScale: MotionValue<number> }) {
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[16/7] overflow-hidden bg-surface">
      <motion.div style={{ scale: heroScale }} className="absolute inset-0 origin-center">
        <video
          ref={(el) => {
            (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = el;
            if (!el) return;
            el.play().catch(() => {
              el.muted = true;
              setMuted(true);
              el.play().catch(() => {});
            });
          }}
          src={src}
          autoPlay
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
          className="h-full w-full object-cover"
        />
      </motion.div>
      {/* shimmer overlays video until it can play */}
      <div
        className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-r from-surface via-border/30 to-surface transition-opacity duration-700"
        style={{ opacity: ready ? 0 : 1 }}
      />
      {/* mute/unmute button */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function CaseStudy({ data }: { data: CaseStudyType }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  return (
    <article className="relative overflow-hidden pt-24 pb-28 sm:pt-44 sm:pb-36">
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
            <div className="relative w-full aspect-[3/4] sm:aspect-[16/7] overflow-hidden">
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
        {/* overview + objective — stacked with left accent bar */}
        <div className="mt-20 space-y-10">
          <Reveal>
            <div className="flex gap-6">
              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/20" />
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-3">Overview</p>
                <p className="font-body text-lg leading-relaxed text-muted">{data.overview}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-6">
              <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent/20" />
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-3">Objective</p>
                <p className="font-body text-lg leading-relaxed text-muted">{data.objective}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* execution — masonry cards */}
        <div className="mt-20">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-8">Execution</p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="columns-1 sm:columns-2 gap-4 space-y-4"
          >
            {data.execution.map((step) => (
              <motion.div
                key={step}
                variants={scaleFade}
                className="break-inside-avoid rounded-2xl border border-border/40 bg-gradient-to-br from-surface/80 to-surface/40 p-6 backdrop-blur-sm"
              >
                <span className="font-body text-base leading-relaxed text-muted">{step}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* gallery */}
        {(data.video ? data.media.length > 0 : data.media.length > 1) && (
          <div className="mt-20">
            <Reveal>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-8">Gallery</p>
            </Reveal>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {(data.video ? data.media : data.media.slice(1)).map((m) =>
                m.startsWith("/") ? (
                  <motion.div
                    key={m}
                    variants={scaleFade}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
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
          </div>
        )}

        {/* results */}
        <div className="mt-20">
          <Reveal>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-accent mb-8">Impact</p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className={`grid gap-4 ${data.results.length === 2 ? "sm:grid-cols-2" : data.results.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}
          >
            {data.results.map((r) => (
              <ResultCard key={r.label} value={r.value} label={r.label} />
            ))}
          </motion.div>
        </div>

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
        <div className="mb-6 flex items-baseline gap-3">
          <span className="h-2 w-2 rounded-full bg-accent/60" />
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
        </div>
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}
