"use client";

import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Reveal from "./Reveal";
import AnimatedHeading from "./AnimatedHeading";

const founders = [
  {
    name: "Shuchir Suri",
    role: "Co-Founder",
    long: "With a sharp eye for what moves markets and what moves people, Shuchir anchors every campaign in strategy that actually ships. From festival stages to boardroom pitches, he ensures the vision lands — on time, on brand, and on fire.",
  },
  {
    name: "Anjali Batra",
    role: "Co-Founder",
    long: "Anjali turns consumer insight into creative conviction. She shapes the narrative layer of every Anthem project — finding the emotional thread that makes a brand activation feel less like marketing and more like a moment worth remembering.",
  },
];

/* ── Puzzle mosaic config ── */
const COLS = 5;
const ROWS = 3;
const PW = 1920 / COLS;
const PH = 1080 / ROWS;
const TAB = 30;
const NECK = 18;
const HEAD = 26;

function buildEdges() {
  const g: number[][][] = [];
  for (let r = 0; r < ROWS; r++) {
    g[r] = [];
    for (let c = 0; c < COLS; c++) {
      const top = r === 0 ? 0 : -g[r - 1][c][2];
      const left = c === 0 ? 0 : -g[r][c - 1][1];
      const right = c === COLS - 1 ? 0 : (r + c) % 2 === 0 ? 1 : -1;
      const bottom =
        r === ROWS - 1 ? 0 : (r + c + 1) % 2 === 0 ? 1 : -1;
      g[r][c] = [top, right, bottom, left];
    }
  }
  return g;
}

function topEdgeFn(x1: number, x2: number, y: number, t: number) {
  if (t === 0) return ` L ${x2} ${y}`;
  const cx = (x1 + x2) / 2;
  const d = t * TAB;
  return (
    ` L ${cx - NECK} ${y}` +
    ` C ${cx - NECK} ${y - d * 0.4}, ${cx - HEAD} ${y - d * 0.8}, ${cx} ${y - d}` +
    ` C ${cx + HEAD} ${y - d * 0.8}, ${cx + NECK} ${y - d * 0.4}, ${cx + NECK} ${y}` +
    ` L ${x2} ${y}`
  );
}

function rightEdgeFn(x: number, y1: number, y2: number, t: number) {
  if (t === 0) return ` L ${x} ${y2}`;
  const cy = (y1 + y2) / 2;
  const d = t * TAB;
  return (
    ` L ${x} ${cy - NECK}` +
    ` C ${x + d * 0.4} ${cy - NECK}, ${x + d * 0.8} ${cy - HEAD}, ${x + d} ${cy}` +
    ` C ${x + d * 0.8} ${cy + HEAD}, ${x + d * 0.4} ${cy + NECK}, ${x} ${cy + NECK}` +
    ` L ${x} ${y2}`
  );
}

function bottomEdgeFn(x2: number, x1: number, y: number, t: number) {
  if (t === 0) return ` L ${x1} ${y}`;
  const cx = (x1 + x2) / 2;
  const d = t * TAB;
  return (
    ` L ${cx + NECK} ${y}` +
    ` C ${cx + NECK} ${y + d * 0.4}, ${cx + HEAD} ${y + d * 0.8}, ${cx} ${y + d}` +
    ` C ${cx - HEAD} ${y + d * 0.8}, ${cx - NECK} ${y + d * 0.4}, ${cx - NECK} ${y}` +
    ` L ${x1} ${y}`
  );
}

function leftEdgeFn(x: number, y2: number, y1: number, t: number) {
  if (t === 0) return ` L ${x} ${y1}`;
  const cy = (y1 + y2) / 2;
  const d = t * TAB;
  return (
    ` L ${x} ${cy + NECK}` +
    ` C ${x - d * 0.4} ${cy + NECK}, ${x - d * 0.8} ${cy + HEAD}, ${x - d} ${cy}` +
    ` C ${x - d * 0.8} ${cy - HEAD}, ${x - d * 0.4} ${cy - NECK}, ${x} ${cy - NECK}` +
    ` L ${x} ${y1}`
  );
}

const edgeGrid = buildEdges();

const pieces = (() => {
  const arr: {
    r: number;
    c: number;
    id: string;
    path: string;
    cx: number;
    cy: number;
  }[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const [t, ri, b, l] = edgeGrid[r][c];
      const x = c * PW;
      const y = r * PH;
      let p = `M ${x} ${y}`;
      p += topEdgeFn(x, x + PW, y, t);
      p += rightEdgeFn(x + PW, y, y + PH, ri);
      p += bottomEdgeFn(x + PW, x, y + PH, b);
      p += leftEdgeFn(x, y + PH, y, l);
      p += " Z";
      arr.push({
        r,
        c,
        id: `${r}-${c}`,
        path: p,
        cx: x + PW / 2,
        cy: y + PH / 2,
      });
    }
  }
  return arr;
})();

const displaced: Record<string, { dx: number; dy: number; rot: number }> = {
  "0-2": { dx: 28, dy: -18, rot: 4 },
  "0-4": { dx: -22, dy: -12, rot: -3 },
  "1-0": { dx: -18, dy: 22, rot: -5 },
  "1-4": { dx: 32, dy: 14, rot: 3 },
  "2-1": { dx: 18, dy: 28, rot: -4 },
  "2-3": { dx: -26, dy: -18, rot: 5 },
};

export default function Team() {
  return (
    <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        {/* ── Page Header ── */}
        <div className="mb-24 max-w-3xl">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" />
              Our Team
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <AnimatedHeading
              text="The people behind every moment"
              highlight="every moment"
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted">
              Lean by design, relentless by nature. Every person here owns their
              craft end-to-end — from the first brief to the last light cue.
            </p>
          </Reveal>
        </div>

        {/* ── Founders ── */}
        <Reveal>
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-muted-2">
            Founders
          </p>
          <div className="mb-4 h-px w-full bg-border" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-colors hover:border-accent/40"
              >
                <div className="relative">
                  <Placeholder
                    label={f.name}
                    ratio="aspect-[3/4]"
                    className="w-full"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
                </div>

                <div className="relative -mt-16 z-10 flex flex-col gap-3 p-6 sm:p-8">
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-accent">
                    {f.role}
                  </span>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    {f.name}
                  </h3>
                  <p className="font-body leading-relaxed text-muted">
                    {f.long}
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* ── The Crew — puzzle mosaic ── */}
        <div className="mt-32">
          <Reveal>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-muted-2">
              The Crew
            </p>
            <div className="mb-4 h-px w-full bg-border" />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mb-14 max-w-lg font-body text-lg leading-relaxed text-muted">
              Strategists, designers, producers, and makers — a tight crew that
              ships live experiences at full intensity.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden rounded-2xl border border-border transition-colors hover:border-accent/30">
              <svg
                viewBox="0 0 1920 1080"
                className="block w-full h-auto"
                role="img"
                aria-label="The Anthem crew — puzzle mosaic"
              >
                <defs>
                  {pieces.map((p) => (
                    <clipPath key={p.id} id={`pc-${p.id}`}>
                      <path d={p.path} />
                    </clipPath>
                  ))}
                </defs>

                {pieces.map((p) => {
                  const d = displaced[p.id];
                  return (
                    <motion.g
                      key={p.id}
                      clipPath={`url(#pc-${p.id})`}
                      initial={
                        d
                          ? {
                              x: d.dx,
                              y: d.dy,
                              rotate: d.rot,
                              opacity: 0.75,
                            }
                          : { opacity: 0, scale: 0.96 }
                      }
                      whileInView={
                        d
                          ? { x: 0, y: 0, rotate: 0, opacity: 1 }
                          : { opacity: 1, scale: 1 }
                      }
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 1.2,
                        delay: (p.r * COLS + p.c) * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        transformOrigin: `${p.cx}px ${p.cy}px`,
                      }}
                    >
                      <image
                        href="/team.jpg"
                        width="1920"
                        height="1080"
                      />
                    </motion.g>
                  );
                })}

                {/* Puzzle seam lines */}
                {pieces.map((p) => (
                  <path
                    key={`s-${p.id}`}
                    d={p.path}
                    fill="none"
                    stroke="rgba(0,0,0,0.45)"
                    strokeWidth="2"
                  />
                ))}
              </svg>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-8 pb-8 pt-24">
                <p className="font-body text-[11px] uppercase tracking-[0.25em] text-accent">
                  The Crew
                </p>
                <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-muted">
                  Every piece fits. Every person counts.
                </p>
              </div>

              <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>
        </div>

        {/* ── CTA ── */}
        <Reveal>
          <div className="mt-28 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md font-body text-lg text-muted">
              Think you belong here?
            </p>
            <a
              href="/careers"
              className="group inline-flex items-center gap-2 rounded-full border border-accent/40 px-8 py-3.5 font-display text-sm font-semibold text-accent transition-all hover:border-accent hover:shadow-[0_0_30px_var(--accent-glow)]"
            >
              <span>View Careers</span>
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
