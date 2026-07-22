"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * The paper-plane flight trail.
 *
 * A single thin violet ribbon that launches from the TOP-RIGHT of the first
 * child section, weaves down through the middle, and lands at the BOTTOM-CENTER
 * of the last child section. A paper-plane icon (matching the Anthem mark)
 * rides the leading tip, drawing the ribbon behind it as the user scrolls
 * through this range. Purely decorative.
 *
 * Wrap the About → Services → Work sections with this component.
 */

const VB_W = 1440;
const VB_H = 2000;

// right-top launch → wide, sweeping wave (nearly edge to edge) → vertical
// nose-down landing at center-bottom (final control points share the end's x
// so the tangent points straight down)
// All-smooth: after the opening cubic every segment is an S (auto-reflected
// control = C1-continuous, no kinks). The final S ends with its control point
// directly above the endpoint, so the tangent — and the plane — point straight
// down at the center landing.
// Every segment's outgoing control mirrors the next segment's incoming control
// (C1-continuous), so there are no tangent breaks / kinks. Wide waves left↔right,
// a rightward bulge near the bottom, then a smooth curved descent into a
// vertical (nose-down) landing at centre.
const FLIGHT_PATH = `M 1390 40
  C 1324 173, 120 420, 120 560
  C 120 700, 1360 940, 1360 1080
  C 1360 1220, 160 1380, 160 1520
  C 160 1660, 1216 1640, 1150 1740
  C 1084 1840, 720 1898, 720 1998`;

export default function RibbonFlight({ children }: { children: ReactNode }) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: zoneRef,
    offset: ["start start", "end end"],
  });

  // Track the scroll position directly (no spring) so the ribbon tip and the
  // plane stay exactly locked to each other and to the scroll — no lag that
  // strands the plane off-screen.
  const drawn = scrollYProgress;

  // Plane position + heading, sampled from the ribbon path itself.
  const px = useMotionValue(1330);
  const py = useMotionValue(60);
  const angle = useMotionValue(0);

  const updatePlane = (f: number) => {
    const el = pathRef.current;
    if (!el) return;
    const L = el.getTotalLength();
    const clf = Math.max(0.0001, Math.min(f, 1));
    const p = el.getPointAtLength(L * clf);
    // Heading = direction of travel, sampled from a point just BEHIND the tip.
    // (Sampling ahead breaks at the very end, where it clamps to the tip and
    // the plane snaps sideways.) This keeps the nose facing forward — and
    // straight down at the vertical landing.
    const back = el.getPointAtLength(Math.max(0, L * clf - 2));
    px.set(p.x);
    py.set(p.y);

    // The SVG uses preserveAspectRatio="none", so the viewBox is stretched
    // non-uniformly (esp. on narrow/tall mobile). Convert the tangent from
    // viewBox units to screen units before measuring the angle, otherwise the
    // plane points the wrong way relative to the visually-rendered ribbon.
    const svg = el.ownerSVGElement;
    const scaleX = svg && svg.clientWidth ? svg.clientWidth / VB_W : 1;
    const scaleY = svg && svg.clientHeight ? svg.clientHeight / VB_H : 1;
    const dx = (p.x - back.x) * scaleX;
    const dy = (p.y - back.y) * scaleY;
    angle.set((Math.atan2(dy, dx) * 180) / Math.PI);
  };

  useMotionValueEvent(drawn, "change", updatePlane);
  useEffect(() => {
    updatePlane(drawn.get());
    // re-measure on resize so the angle stays correct across breakpoints
    const onResize = () => updatePlane(drawn.get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const left = useTransform(px, (v) => `${(v / VB_W) * 100}%`);
  const top = useTransform(py, (v) => `${(v / VB_H) * 100}%`);
  // hide the plane until the flight actually begins
  const planeOpacity = useTransform(drawn, [0, 0.01, 1], [0, 1, 1]);

  return (
    <div ref={zoneRef} className="relative">
      {/* Flight layer — spans exactly this zone, floats ABOVE the content
          (click-through) so the plane + trail are never hidden behind cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-hidden"
      >
        <svg
          className="h-full w-full [filter:drop-shadow(0_0_4px_rgba(139,127,232,0.3))]"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="flight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b7fe8" />
              <stop offset="50%" stopColor="#b8a8f0" />
              <stop offset="100%" stopColor="#e0c8f2" />
            </linearGradient>
          </defs>

          {/* NOTE: no vectorEffect="non-scaling-stroke" — it breaks framer's
              pathLength reveal (renders microscopic dashes = invisible line). */}
          <motion.path
            ref={pathRef}
            d={FLIGHT_PATH}
            stroke="url(#flight)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ pathLength: drawn, opacity: 0.4 }}
          />
        </svg>

        {/* Paper plane riding the leading tip.
            Centering lives on the OUTER div (no framer transform here, so the
            Tailwind translate isn't clobbered); rotation lives on the INNER. */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left, top, opacity: planeOpacity }}
        >
          <motion.div
            style={{ rotate: angle }}
            className="[filter:drop-shadow(0_0_8px_rgba(139,127,232,0.9))]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#ffffff">
              {/* "send" paper plane, nose pointing right (0°) */}
              <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {children}
    </div>
  );
}
