"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCase } from "@/data/cases";

type LayoutId = "1" | "2" | "3";
type PillarId = "events" | "retail" | "amplify";

type ServiceItem = {
  title: string;
  tag: string;
  desc: string;
  deliverables: string[];
  proof: string;
};

type PillarConfig = {
  id: PillarId;
  slug: string;
  code: string;
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  thesis: string;
  stats: { value: string; label: string }[];
  items: ServiceItem[];
  caseSlugs: string[];
  otherPillars: { id: PillarId; name: string; count: string }[];
};

const PILLARS: Record<PillarId, PillarConfig> = {
  events: {
    id: "events",
    slug: "events-and-activations",
    code: "VERTICAL 01",
    eyebrow: "Events & Activations",
    titlePrefix: "Events &",
    titleHighlight: "Activations",
    thesis:
      "Physical spaces turned into cultural moments — from large-scale festivals and executive summits to immersive brand worlds and multi-city roadshows across India and internationally.",
    stats: [
      { value: "12+ yrs", label: "Production craft" },
      { value: "1.5L+", label: "Festival footfall" },
      { value: "India + Global", label: "Execution footprint" },
    ],
    items: [
      {
        title: "Brand Activations",
        tag: "On-Ground",
        desc: "On-ground activations, sampling, launches and consumer engagement at malls, campuses and venues.",
        deliverables: ["Mall & Campus Zones", "Guided Sampling", "Launch Theatre"],
        proof: "Diageo & Pernod Ricard Multi-City Activations",
      },
      {
        title: "Large-scale and Live Events",
        tag: "Mass Scale",
        desc: "Festivals, concerts, ticketed IPs and mass-audience experiences, from concept to crowd.",
        deliverables: ["Festival Architecture", "Ticketing & Crowd Ops", "Mainstage Tech"],
        proof: "World Class Festival India · Explorers Club",
      },
      {
        title: "Conferences, Summits & Corporate Events",
        tag: "Enterprise",
        desc: "Leadership meets, offsites, award nights, dealer and partner conferences.",
        deliverables: ["Executive Summits", "Award Nights", "Dealer & Partner Meets"],
        proof: "BCG India Leadership Meet",
      },
      {
        title: "Roadshows & Outreach",
        tag: "Multi-City",
        desc: "Multi-city tours, mobile experiences, college, community and regional outreach.",
        deliverables: ["Multi-City Routing", "Mobile Experience Units", "Regional Outreach"],
        proof: "Pan-India Multi-City Brand Tours",
      },
      {
        title: "Event Production & Management",
        tag: "Technical",
        desc: "Venue, stage, sound, light, talent, logistics, permissions and show calling.",
        deliverables: ["Stage, Sound & Light", "Permissions & Compliance", "Show Calling"],
        proof: "Zero-Downtime Technical Direction",
      },
      {
        title: "Immersive Brand Experiences & Installations",
        tag: "Spatial",
        desc: "Brand worlds, art installations, experience zones and interactive tech.",
        deliverables: ["Spatial Brand Worlds", "Art Installations", "Interactive Tech"],
        proof: "Hendrick's House of Oddities",
      },
      {
        title: "IP Development",
        tag: "Proprietary",
        desc: "Owned and co-created formats built to scale, with sponsorship and ticketing.",
        deliverables: ["Format Creation", "Sponsorship Packaging", "Scalable IPs"],
        proof: "Food Talk India & The Gin Explorers Club",
      },
      {
        title: "Exhibitions & Trade Shows",
        tag: "B2B Showcase",
        desc: "Stall design and build, pavilions, product showcases and visitor engagement.",
        deliverables: ["Custom Pavilions", "Fabrication & Build", "Visitor Engagement"],
        proof: "Enterprise Trade Show Pavilions",
      },
    ],
    caseSlugs: [
      "world-class-festival-india",
      "bcg-india-leadership-meet",
      "hendricks-house-of-oddities",
    ],
    otherPillars: [
      { id: "retail", name: "Retail", count: "07" },
      { id: "amplify", name: "Amplify", count: "10" },
    ],
  },

  retail: {
    id: "retail",
    slug: "retail",
    code: "VERTICAL 02",
    eyebrow: "Retail",
    titlePrefix: "Retail",
    titleHighlight: "Experiences",
    thesis:
      "Retail designed for discovery and conversion — spanning flagship store concepts, travel retail pop-ups, shopper marketing and audited multi-store rollouts.",
    stats: [
      { value: "07", label: "Retail disciplines" },
      { value: "Multi-Store", label: "Pan-India rollouts" },
      { value: "Design to Audit", label: "Single-point delivery" },
    ],
    items: [
      {
        title: "Retail Strategy & Design",
        tag: "Blueprint",
        desc: "Store concepts, customer journeys, format design and visual merchandising guidelines.",
        deliverables: ["Store Concepts", "Customer Journey Maps", "VM Playbooks"],
        proof: "Flagship & Specialty Retail Concepts",
      },
      {
        title: "In-store Branding",
        tag: "Visibility",
        desc: "Signage, displays, POSM, window dressing and shelf visibility.",
        deliverables: ["POSM & Displays", "Window Dressing", "Shelf Visibility"],
        proof: "National Modern Trade Visibility Programs",
      },
      {
        title: "Store Experiences",
        tag: "Flagship",
        desc: "Flagship launches, shop-in-shops, experience zones and in-store events.",
        deliverables: ["Flagship Launches", "Shop-in-Shop Builds", "In-Store Events"],
        proof: "ARKS: A Ranbir Kapoor Studio",
      },
      {
        title: "Retail Activations",
        tag: "Conversion",
        desc: "Promoter-led sampling, product demos, festive and seasonal in-store campaigns.",
        deliverables: ["Trained Promoters", "Live Product Demos", "Festive Drives"],
        proof: "High-Conversion Festive Retail Campaigns",
      },
      {
        title: "Pop-ups & Kiosks",
        tag: "High-Footfall",
        desc: "Pop-up stores, mall kiosks, high-street and travel retail installations.",
        deliverables: ["Mall Kiosks", "High-Street Pop-Ups", "Travel Retail / Duty Free"],
        proof: "Airport & Mall Pop-Up Installations",
      },
      {
        title: "Shopper & Trade Marketing",
        tag: "Channel",
        desc: "Shopper promotions, trade programs, retailer engagement and channel incentives.",
        deliverables: ["Shopper Promos", "Trade Incentives", "Retailer Engagement"],
        proof: "Channel & Trade Engagement Programs",
      },
      {
        title: "Retail Production & Rollouts",
        tag: "Execution",
        desc: "Fabrication, installation and multi-store rollouts, with audits and reporting.",
        deliverables: ["Custom Fabrication", "Multi-City Installs", "Live Audit Reports"],
        proof: "Multi-City Audited Retail Rollouts",
      },
    ],
    caseSlugs: ["arks-store-launch", "whisky-experiments", "chambal-gin"],
    otherPillars: [
      { id: "events", name: "Events & Activations", count: "08" },
      { id: "amplify", name: "Amplify", count: "10" },
    ],
  },

  amplify: {
    id: "amplify",
    slug: "amplify",
    code: "VERTICAL 03",
    eyebrow: "Amplify",
    titlePrefix: "Anthem",
    titleHighlight: "Amplify",
    thesis:
      "Where physical culture meets internet velocity — creator ecosystems, seeding drops, brand films, memes and owned media built to travel.",
    stats: [
      { value: "10", label: "Digital & creative tracks" },
      { value: "Nano–Celeb", label: "Creator collectives" },
      { value: "Owned Media", label: "Food Talk & Explorers" },
    ],
    items: [
      {
        title: "Seeding",
        tag: "Drops",
        desc: "Product seeding and gifting, launch kits, sampling, always-on seeding calendars.",
        deliverables: ["Bespoke Launch Kits", "VIP & Creator Gifting", "Always-On Calendars"],
        proof: "High-Shareability Brand Seeding Drops",
      },
      {
        title: "Media",
        tag: "Distribution",
        desc: "Media planning and buying, paid amplification, partnership ads, page networks, clipping.",
        deliverables: ["Paid Amplification", "Partnership Ads", "Page Networks & Clipping"],
        proof: "Full-Funnel Digital Media Campaigns",
      },
      {
        title: "Creators",
        tag: "Influence",
        desc: "Nano to celebrity influencers, ambassadors, collectives, regional and UGC creators.",
        deliverables: ["Influencer Casting", "Regional & UGC Collectives", "Ambassadors"],
        proof: "Por Amor Potluck x Don Julio",
      },
      {
        title: "Digital",
        tag: "Always-On",
        desc: "Digital and social strategy, always-on content, community management, reporting.",
        deliverables: ["Social Strategy", "Always-On Content", "Community & Reporting"],
        proof: "Retainer Social & Community Management",
      },
      {
        title: "Memes & Culture",
        tag: "Velocity",
        desc: "Meme marketing, trend-led content, moment marketing, meme-led launches.",
        deliverables: ["Moment Marketing", "Meme Networks", "Trend-Led Launches"],
        proof: "Culture-First Viral Launch Moments",
      },
      {
        title: "Owned Media & IPs",
        tag: "Publishers",
        desc: "Branded content on Food Talk India and Explorers Club, publisher partnerships.",
        deliverables: ["Food Talk India Features", "Explorers Club Series", "Publisher Collabs"],
        proof: "Food Talk India · Explorers Club Reach",
      },
      {
        title: "Creative & Brand",
        tag: "Identity",
        desc: "Brand strategy, verbal and visual identity, campaign ideas, key visuals.",
        deliverables: ["Brand Strategy", "Visual & Verbal Identity", "Campaign Key Visuals"],
        proof: "Hiring Campaign for Diageo India",
      },
      {
        title: "Production",
        tag: "Film & Craft",
        desc: "Brand films and video from script to final cut, photography, print and collateral.",
        deliverables: ["Brand Films & Reels", "Editorial Photography", "Print & Collateral"],
        proof: "Roku Gin: Come Alive With The Seasons",
      },
      {
        title: "Web & Experience Design",
        tag: "Interactive",
        desc: "Websites, campaign microsites, immersive and interactive brand experiences.",
        deliverables: ["Campaign Microsites", "Brand Websites", "Interactive Web Tech"],
        proof: "Custom Digital Brand Flagships",
      },
      {
        title: "Experience to Content",
        tag: "Bridge",
        desc: "Turning events into creator-led content, live coverage and stories.",
        deliverables: ["Real-Time Event Reels", "Creator Press Rooms", "Live Storytelling"],
        proof: "On-Ground to Social Amplification Loops",
      },
    ],
    caseSlugs: [
      "por-amor-potluck-don-julio",
      "hiring-campaign-diageo-india",
      "roku-gin-come-alive",
    ],
    otherPillars: [
      { id: "events", name: "Events & Activations", count: "08" },
      { id: "retail", name: "Retail", count: "07" },
    ],
  },
};

const LAYOUT_OPTIONS: {
  id: LayoutId;
  code: string;
  label: string;
  badge?: string;
  summary: string;
}[] = [
  {
    id: "1",
    code: "01",
    label: "Asymmetric Bento",
    badge: "Recommended",
    summary: "2-col featured anchor + cursor-tracking spotlight cards + balanced brief tile.",
  },
  {
    id: "2",
    code: "02",
    label: "Editorial Index",
    summary: "Sticky manifesto left + sculptural hairline rows right with inline expandable proof.",
  },
  {
    id: "3",
    code: "03",
    label: "Show Cue-Sheet",
    summary: "Horizontal cue strip + production stage spotlight + show-spec card (← / → keys).",
  },
];

export default function ServiceConceptsPreview() {
  const [layout, setLayout] = useState<LayoutId>("1");
  const [pillarId, setPillarId] = useState<PillarId>("events");
  const [activeItem, setActiveItem] = useState(0);

  const pillar = PILLARS[pillarId];
  const linkedCases = pillar.caseSlugs
    .map((slug) => getCase(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const switchPillar = (next: PillarId) => {
    setPillarId(next);
    setActiveItem(0);
  };

  const switchLayout = (next: LayoutId) => {
    setLayout(next);
    setActiveItem(0);
  };

  const stepActiveItem = (delta: number) => {
    const len = pillar.items.length;
    setActiveItem((prev) => (prev + delta + len) % len);
  };

  useEffect(() => {
    if (layout !== "3") return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveItem((prev) => (prev + 1) % pillar.items.length);
      } else if (e.key === "ArrowLeft") {
        setActiveItem((prev) => (prev - 1 + pillar.items.length) % pillar.items.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [layout, pillar.items.length]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const selected = pillar.items[activeItem] ?? pillar.items[0];
  const occupiedSlots = 2 + (pillar.items.length - 1);
  const remainder = occupiedSlots % 3;
  const ctaColSpan =
    remainder === 1 ? "lg:col-span-2" : remainder === 2 ? "lg:col-span-1" : "lg:col-span-3";

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background pt-28 pb-24 sm:pt-32">
      {/* Subtle film grain matching globals.css */}
      <div
        aria-hidden="true"
        className="noise pointer-events-none fixed inset-0 z-0 opacity-[0.045] mix-blend-overlay"
      />

      {/* Ambient ribbon sweep echoing RibbonFlight */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-0 z-0 w-[720px] max-w-none opacity-[0.22]"
        viewBox="0 0 800 360"
        fill="none"
      >
        <defs>
          <linearGradient id="conceptRibbon" x1="0" y1="0" x2="800" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8b7fe8" stopOpacity="0" />
            <stop offset="45%" stopColor="#8b7fe8" stopOpacity="0.9" />
            <stop offset="78%" stopColor="#cf9fd8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-40 280 C 160 260, 260 40, 480 110 C 640 160, 710 60, 840 20"
          stroke="url(#conceptRibbon)"
          strokeWidth="2"
        />
        <path
          d="M-20 310 C 190 285, 290 75, 510 140 C 660 185, 730 95, 860 55"
          stroke="url(#conceptRibbon)"
          strokeWidth="1"
          strokeOpacity="0.55"
        />
      </svg>

      {/* Ambient violet radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/4 z-0 hidden h-[520px] w-[520px] rounded-full opacity-[0.11] sm:block"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />

      {/* Stakeholder Review Switcher Bar */}
      <div className="container-x relative z-20 mb-14">
        <div className="rounded-2xl border border-border bg-surface/90 p-4 backdrop-blur-xl sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <p className="font-display text-sm font-semibold text-foreground">
                  Staging Design Review — Service Pages
                </p>
              </div>
              <p className="mt-1 font-body text-xs text-muted-2">
                Compare 3 layout directions across Events &amp; Activations, Retail, and Amplify.
              </p>
            </div>
            <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-muted-2">
              theanthem.in/{pillar.slug}
            </span>
          </div>

          {/* 3 Design Options */}
          <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
            {LAYOUT_OPTIONS.map((opt) => {
              const active = layout === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => switchLayout(opt.id)}
                  className={`cursor-pointer rounded-xl border p-3.5 text-left transition-all ${
                    active
                      ? "border-accent/70 bg-accent/12 shadow-[0_12px_36px_-16px_var(--accent-glow)]"
                      : "border-border bg-background/70 hover:border-accent/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs font-semibold text-foreground sm:text-sm">
                      {opt.code} · {opt.label}
                    </span>
                    {opt.badge && (
                      <span className="rounded-full bg-accent/20 px-2 py-0.5 font-body text-[10px] font-medium text-[#d8d0ff]">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 font-body text-xs leading-snug text-muted-2">
                    {opt.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* 3 Pillar Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-border/70">
            <span className="mr-1 font-body text-xs text-muted-2">Preview vertical:</span>
            {(["events", "retail", "amplify"] as PillarId[]).map((id) => {
              const p = PILLARS[id];
              const active = pillarId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => switchPillar(id)}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 font-body text-xs font-medium transition-colors ${
                    active
                      ? "border-accent bg-accent text-black"
                      : "border-border bg-background text-muted hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {p.eyebrow} ({p.items.length})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Preview Content */}
      <div className="container-x relative z-10 space-y-24">
        {/* 1. Pillar Hero */}
        <section className="max-w-4xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <p className="flex items-center gap-3 font-hand text-lg text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {pillar.eyebrow}
            </p>
            <span className="rounded-full border border-border px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-2">
              {pillar.code}
            </span>
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {pillar.titlePrefix}{" "}
            <span className="text-gradient">{pillar.titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg">
            {pillar.thesis}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-black shadow-[0_12px_36px_-10px_var(--accent-glow)] transition-transform hover:scale-[1.02]"
            >
              Start a Project →
            </Link>
            <span className="inline-flex items-center rounded-full border border-border bg-surface/60 px-5 py-3.5 font-body text-xs text-muted sm:text-sm">
              Delhi NCR · Mumbai · Bengaluru · International
            </span>
          </div>
        </section>

        {/* 2. Capabilities Section — Switches between 01, 02, 03 */}
        <section>
          {layout === "1" && (
            <div>
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="mb-2 flex items-center gap-3 font-hand text-base text-accent">
                    <span className="h-px w-8 bg-accent" aria-hidden="true" />
                    Capabilities
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    Built for <span className="text-gradient">{pillar.eyebrow}</span>
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {String(pillar.items.length).padStart(2, "0")} CORE DISCIPLINES
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pillar.items.map((item, i) => {
                  const isHeroTile = i === 0;
                  return (
                    <article
                      key={item.title}
                      onMouseMove={handleCardMouseMove}
                      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface/80 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/55 hover:shadow-[0_28px_72px_-32px_var(--accent-glow)] ${
                        isHeroTile ? "min-h-[250px] lg:col-span-2" : "min-h-[225px]"
                      }`}
                      style={{
                        backgroundImage:
                          "radial-gradient(320px circle at var(--mx, 50%) var(--my, 0%), rgba(139, 127, 232, 0.14), transparent 65%)",
                      }}
                    >
                      {/* Shimmer sweep */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                      />

                      {isHeroTile && (
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-14 -bottom-16 h-60 w-60 rounded-full opacity-20"
                          style={{
                            background:
                              "radial-gradient(circle, var(--accent) 0%, var(--accent-pink) 45%, transparent 72%)",
                          }}
                        />
                      )}

                      <div className="relative z-10 mb-6 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-bold text-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px w-5 bg-border" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-2">
                            {item.tag}
                          </span>
                        </div>
                        <span className="text-xs text-muted-2 transition-colors group-hover:text-accent">
                          ↗
                        </span>
                      </div>

                      <div className="relative z-10 mt-auto">
                        <h3
                          className={`font-display font-bold leading-snug text-foreground ${
                            isHeroTile ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`mt-2.5 font-body text-sm leading-relaxed text-muted ${
                            isHeroTile ? "max-w-xl" : ""
                          }`}
                        >
                          {item.desc}
                        </p>
                        {isHeroTile && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.deliverables.map((d) => (
                              <span
                                key={d}
                                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-body text-xs text-[#ddd6ff]"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}

                {/* Closing Integrated Brief Tile */}
                <div
                  className={`relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/12 via-surface to-[#cf9fd8]/10 p-7 sm:flex-row sm:items-center ${ctaColSpan}`}
                >
                  <div>
                    <span className="font-hand text-sm text-[#b8a8f0]">Integrated Mandate</span>
                    <h3 className="mt-1 font-display text-xl font-bold text-foreground sm:text-2xl">
                      Combining {pillar.eyebrow} with Retail or Amplify?
                    </h3>
                    <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-muted">
                      One strategy, one creative team, end-to-end execution across physical and
                      digital spaces.
                    </p>
                  </div>
                  <Link
                    href="/#enquiry"
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-xs font-semibold text-black transition-transform hover:scale-[1.02]"
                  >
                    Share a Brief →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {layout === "2" && (
            <div className="grid items-start gap-12 lg:grid-cols-12">
              {/* Left Sticky Manifesto */}
              <div className="space-y-6 lg:sticky lg:top-28 lg:col-span-5">
                <div className="flex items-baseline justify-between border-b border-border pb-4">
                  <p className="flex items-center gap-3 font-hand text-base text-accent">
                    <span className="h-px w-8 bg-accent" aria-hidden="true" />
                    Capabilities Index
                  </p>
                  <span className="text-gradient font-mono text-4xl font-extrabold leading-none">
                    {String(pillar.items.length).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl">
                  End-to-end craft across every touchpoint.
                </h2>

                <p className="font-body text-sm leading-relaxed text-muted sm:text-base">
                  Click any discipline to inspect scope and proof points. Every vertical plugs
                  directly into Anthem&apos;s national production, retail and creator networks.
                </p>

                <div className="grid grid-cols-3 gap-4 border-t border-border pt-5">
                  {pillar.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-base font-bold text-foreground">
                        {s.value}
                      </div>
                      <div className="mt-0.5 font-body text-xs text-muted-2">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/#enquiry"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-xs font-semibold text-black"
                  >
                    Request {pillar.eyebrow} Deck →
                  </Link>
                </div>
              </div>

              {/* Right Sculptural Index */}
              <div className="border-t border-border lg:col-span-7">
                {pillar.items.map((item, i) => {
                  const isOpen = i === activeItem;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveItem(i)}
                      className={`w-full cursor-pointer border-b border-border px-4 py-6 text-left transition-all ${
                        isOpen
                          ? "border-b-accent/45 bg-gradient-to-r from-accent/[0.08] to-transparent"
                          : "hover:border-b-accent/35 hover:bg-accent/[0.04]"
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <span
                          className={`w-7 shrink-0 pt-0.5 font-mono text-base font-bold ${
                            isOpen ? "text-gradient" : "text-muted-2"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                              {item.title}
                            </h3>
                            <div className="flex shrink-0 items-center gap-2.5">
                              <span className="hidden rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-2 sm:inline-block">
                                {item.tag}
                              </span>
                              <span
                                className={`font-mono text-sm transition-transform duration-300 ${
                                  isOpen ? "rotate-45 text-accent" : "text-muted-2"
                                }`}
                              >
                                +
                              </span>
                            </div>
                          </div>

                          <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                            {item.desc}
                          </p>

                          <div
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-4">
                                <div className="flex flex-wrap gap-1.5">
                                  {item.deliverables.map((d) => (
                                    <span
                                      key={d}
                                      className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1 font-body text-xs text-[#ddd6ff]"
                                    >
                                      {d}
                                    </span>
                                  ))}
                                </div>
                                <span className="font-mono text-xs text-accent">
                                  Proof: {item.proof}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {layout === "3" && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="mb-2 flex items-center gap-3 font-hand text-base text-accent">
                    <span className="h-px w-8 bg-accent" aria-hidden="true" />
                    Service Cue-Sheet
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    Inside <span className="text-gradient">{pillar.eyebrow}</span>
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="mr-2 font-mono text-xs text-muted-2">
                    CUE {String(activeItem + 1).padStart(2, "0")} /{" "}
                    {String(pillar.items.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => stepActiveItem(-1)}
                    aria-label="Previous service"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => stepActiveItem(1)}
                    aria-label="Next service"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Horizontal Cue Strip */}
              <div className="flex gap-2 overflow-x-auto border-b border-border pb-1">
                {pillar.items.map((item, i) => {
                  const active = i === activeItem;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveItem(i)}
                      className={`relative shrink-0 cursor-pointer rounded-t-lg px-4 py-3 text-left transition-colors ${
                        active ? "bg-accent/12 text-foreground" : "text-muted-2 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-xs ${active ? "text-accent" : "text-muted-2"}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="whitespace-nowrap font-display text-xs font-medium sm:text-sm">
                          {item.title}
                        </span>
                      </div>
                      {active && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent to-[#cf9fd8]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Production Stage Panel */}
              <div className="grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-12">
                <div
                  className="relative flex min-h-[320px] flex-col justify-between overflow-hidden border-b border-border p-8 sm:p-10 lg:col-span-7 lg:border-r lg:border-b-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(139,127,232,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(139,127,232,0.065) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full opacity-25"
                    style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-4 right-6 select-none font-mono text-[112px] font-black leading-none text-white/[0.035]"
                  >
                    {String(activeItem + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10">
                    <span className="rounded-full border border-accent/45 bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b8a8f0]">
                      {pillar.code} · {selected.tag}
                    </span>
                  </div>

                  <div className="relative z-10 mt-10">
                    <h3 className="max-w-lg font-display text-2xl font-extrabold leading-[1.08] text-foreground sm:text-4xl">
                      {selected.title}
                    </h3>
                    <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-muted sm:text-base">
                      {selected.desc}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6 bg-surface-2 p-8 lg:col-span-5">
                  <div className="space-y-5">
                    <div>
                      <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-2">
                        Deliverables &amp; Scope
                      </div>
                      <ul className="space-y-2.5">
                        {selected.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 font-body text-sm text-foreground"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-2">
                        Flagship Proof Point
                      </div>
                      <div className="font-display text-sm font-semibold text-foreground">
                        {selected.proof}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-border pt-4 font-body text-xs text-muted-2">
                      <span>Footprint</span>
                      <span className="text-muted">Delhi NCR · Mumbai · Bengaluru · Global</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <Link
                      href="/#enquiry"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-xs font-semibold text-black"
                    >
                      Brief {selected.title} →
                    </Link>
                    <span className="font-mono text-[11px] text-muted-2">Use ← / → keys</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 3. Real Anthem Case Studies for This Pillar */}
        {linkedCases.length > 0 && (
          <section className="border-t border-border pt-14">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center gap-3 font-hand text-base text-accent">
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  Selected Work
                </p>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-4xl">
                  Ideas We&apos;ve <span className="text-gradient">Brought to Life</span>
                </h2>
              </div>
              <Link
                href="/our-work"
                className="font-body text-sm font-medium text-accent hover:underline"
              >
                Explore all work →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {linkedCases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_28px_80px_-32px_var(--accent-glow)]"
                >
                  {c.media[0] && (
                    <div className="pointer-events-none absolute inset-0 z-0 opacity-15 transition-opacity duration-500 group-hover:opacity-30">
                      <Image
                        src={c.media[0]}
                        alt={c.mediaMeta?.[0]?.alt ?? `${c.title} — ${c.company}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover ${c.bgPosition || "object-center"}`}
                      />
                    </div>
                  )}

                  <span className="relative z-10 self-end rounded-full border border-border/70 bg-background/70 px-3 py-1 font-body text-[10px] uppercase tracking-[0.14em] text-muted-2 group-hover:border-accent/50 group-hover:text-accent">
                    {c.tags[0]}
                  </span>

                  <div className="relative z-10 mt-6 flex flex-1 flex-col">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-2.5 font-body text-sm leading-relaxed text-muted">
                      {c.summary}
                    </p>
                    <span className="mt-auto flex items-center gap-2 border-t border-border/50 pt-6 font-body text-sm font-medium text-accent">
                      View case study
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 4. Cross-Pillar Footer Bar */}
        <section className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-2">
              Switch to another vertical
            </p>
            <div className="flex flex-wrap gap-2.5">
              {pillar.otherPillars.map((op) => (
                <button
                  key={op.id}
                  type="button"
                  onClick={() => switchPillar(op.id)}
                  className="cursor-pointer rounded-full border border-border px-4 py-2 font-body text-xs text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {op.name} <span className="ml-1 font-mono text-accent">{op.count}</span>
                </button>
              ))}
              <Link
                href="/our-work#owned-ips"
                className="rounded-full border border-border px-4 py-2 font-body text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                Owned IPs →
              </Link>
            </div>
          </div>

          <Link
            href="/#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Get in Touch →
          </Link>
        </section>
      </div>
    </div>
  );
}
