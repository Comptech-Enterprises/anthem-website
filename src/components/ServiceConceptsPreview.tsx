"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCase } from "@/data/cases";

type LayoutId = "1" | "2" | "3" | "4" | "5";
type PillarId = "events" | "retail" | "amplify";

type ServiceItem = {
  title: string;
  desc: string;
};

type PillarConfig = {
  id: PillarId;
  slug: string;
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
  items: ServiceItem[];
  caseSlugs: string[];
  otherPillars: { id: PillarId; name: string }[];
};

const R2 = "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads";

const PILLARS: Record<PillarId, PillarConfig> = {
  events: {
    id: "events",
    slug: "events-and-activations",
    eyebrow: "Events & Activations",
    titlePrefix: "Events &",
    titleHighlight: "Activations",
    intro:
      "From large-scale festivals and executive summits to immersive brand worlds and multi-city roadshows across India and internationally.",
    heroImage: `${R2}/what-we-do-events.webp`,
    heroAlt: "Live events, festivals, and large-scale brand productions by Anthem",
    secondaryImage: `${R2}/what-we-do-brand-activation.webp`,
    secondaryAlt: "Immersive experiential brand activation and consumer engagement by Anthem",
    items: [
      {
        title: "Brand Activations",
        desc: "On-ground activations, sampling, launches and consumer engagement at malls, campuses and venues.",
      },
      {
        title: "Large-scale and Live Events",
        desc: "Festivals, concerts, ticketed IPs and mass-audience experiences, from concept to crowd.",
      },
      {
        title: "Conferences, Summits & Corporate Events",
        desc: "Leadership meets, offsites, award nights, dealer and partner conferences.",
      },
      {
        title: "Roadshows & Outreach",
        desc: "Multi-city tours, mobile experiences, college, community and regional outreach.",
      },
      {
        title: "Event Production & Management",
        desc: "Venue, stage, sound, light, talent, logistics, permissions and show calling.",
      },
      {
        title: "Immersive Brand Experiences & Installations",
        desc: "Brand worlds, art installations, experience zones and interactive tech.",
      },
      {
        title: "IP Development",
        desc: "Owned and co-created formats built to scale, with sponsorship and ticketing.",
      },
      {
        title: "Exhibitions & Trade Shows",
        desc: "Stall design and build, pavilions, product showcases and visitor engagement.",
      },
    ],
    caseSlugs: [
      "world-class-festival-india",
      "bcg-india-leadership-meet",
      "hendricks-house-of-oddities",
    ],
    otherPillars: [
      { id: "retail", name: "Retail" },
      { id: "amplify", name: "Amplify" },
    ],
  },

  retail: {
    id: "retail",
    slug: "retail",
    eyebrow: "Retail",
    titlePrefix: "Retail",
    titleHighlight: "Experiences",
    intro:
      "Store concepts, flagship launches, travel retail pop-ups, shopper marketing and audited multi-store rollouts built for discovery and conversion.",
    heroImage: `${R2}/projects-ARKS-1.webp`,
    heroAlt: "ARKS flagship retail store launch and brand experience by Anthem",
    secondaryImage: `${R2}/projects-ARKS-2.webp`,
    secondaryAlt: "Interactive retail installation and studio space at ARKS flagship launch",
    items: [
      {
        title: "Retail Strategy & Design",
        desc: "Store concepts, customer journeys, format design and visual merchandising guidelines.",
      },
      {
        title: "In-store Branding",
        desc: "Signage, displays, POSM, window dressing and shelf visibility.",
      },
      {
        title: "Store Experiences",
        desc: "Flagship launches, shop-in-shops, experience zones and in-store events.",
      },
      {
        title: "Retail Activations",
        desc: "Promoter-led sampling, product demos, festive and seasonal in-store campaigns.",
      },
      {
        title: "Pop-ups & Kiosks",
        desc: "Pop-up stores, mall kiosks, high-street and travel retail installations.",
      },
      {
        title: "Shopper & Trade Marketing",
        desc: "Shopper promotions, trade programs, retailer engagement and channel incentives.",
      },
      {
        title: "Retail Production & Rollouts",
        desc: "Fabrication, installation and multi-store rollouts, with audits and reporting.",
      },
    ],
    caseSlugs: ["arks-store-launch", "whisky-experiments", "chambal-gin"],
    otherPillars: [
      { id: "events", name: "Events & Activations" },
      { id: "amplify", name: "Amplify" },
    ],
  },

  amplify: {
    id: "amplify",
    slug: "amplify",
    eyebrow: "Amplify",
    titlePrefix: "Anthem",
    titleHighlight: "Amplify",
    intro:
      "Creator ecosystems, seeding drops, brand films, culture-led content and owned media built to turn brand moments into conversation.",
    heroImage: `${R2}/what-we-do-digital.webp`,
    heroAlt: "Digital campaigns, creator collaborations, and content production by Anthem",
    secondaryImage: `${R2}/sliders-12.webp`,
    secondaryAlt: "Creator-led brand campaign and experiential pop-up content by Anthem",
    items: [
      {
        title: "Seeding",
        desc: "Product seeding and gifting, launch kits, sampling, always-on seeding calendars.",
      },
      {
        title: "Media",
        desc: "Media planning and buying, paid amplification, partnership ads, page networks, clipping.",
      },
      {
        title: "Creators",
        desc: "Nano to celebrity influencers, ambassadors, collectives, regional and UGC creators.",
      },
      {
        title: "Digital",
        desc: "Digital and social strategy, always-on content, community management, reporting.",
      },
      {
        title: "Memes & Culture",
        desc: "Meme marketing, trend-led content, moment marketing, meme-led launches.",
      },
      {
        title: "Owned Media & IPs",
        desc: "Branded content on Food Talk India and Explorers Club, publisher partnerships.",
      },
      {
        title: "Creative & Brand",
        desc: "Brand strategy, verbal and visual identity, campaign ideas, key visuals.",
      },
      {
        title: "Production",
        desc: "Brand films and video from script to final cut, photography, print and collateral.",
      },
      {
        title: "Web & Experience Design",
        desc: "Websites, campaign microsites, immersive and interactive brand experiences.",
      },
      {
        title: "Experience to Content",
        desc: "Turning events into creator-led content, live coverage and stories.",
      },
    ],
    caseSlugs: [
      "por-amor-potluck-don-julio",
      "hiring-campaign-diageo-india",
      "roku-gin-come-alive",
    ],
    otherPillars: [
      { id: "events", name: "Events & Activations" },
      { id: "retail", name: "Retail" },
    ],
  },
};

const LAYOUT_OPTIONS: { id: LayoutId; label: string }[] = [
  { id: "1", label: "01 · Clean Grid" },
  { id: "2", label: "02 · Editorial List" },
  { id: "3", label: "03 · Glassmorphism" },
  { id: "4", label: "04 · Asymmetric Magazine" },
  { id: "5", label: "05 · Open Two-Column" },
];

export default function ServiceConceptsPreview() {
  const [layout, setLayout] = useState<LayoutId>("1");
  const [pillarId, setPillarId] = useState<PillarId>("events");

  const pillar = PILLARS[pillarId];
  const linkedCases = pillar.caseSlugs
    .map((slug) => getCase(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const [leadItem, ...restItems] = pillar.items;

  return (
    <div className="relative overflow-hidden pt-28 pb-28 sm:pt-32">
      {/* Minimal staging preview controls */}
      <div className="container-x mb-14">
        <div className="flex flex-col gap-4 border-b border-border pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-body text-xs text-muted-2">Layout</span>
            {LAYOUT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLayout(opt.id)}
                className={`cursor-pointer rounded-full border px-3.5 py-1.5 font-display text-xs font-medium transition-colors ${
                  layout === opt.id
                    ? "border-accent bg-accent text-white"
                    : "border-border text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {(["events", "retail", "amplify"] as PillarId[]).map((id) => {
              const p = PILLARS[id];
              const active = pillarId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setPillarId(id)}
                  className={`cursor-pointer border-b pb-1 font-display text-xs font-medium transition-colors ${
                    active
                      ? "border-accent text-foreground"
                      : "border-transparent text-muted-2 hover:text-foreground"
                  }`}
                >
                  {p.eyebrow}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-x space-y-24">
        {/* 1. Hero — adapts cleanly for Glassmorphism vs standard editorial hero */}
        {layout === "3" ? (
          <section className="relative overflow-hidden rounded-3xl border border-white/10">
            <div className="relative min-h-[460px] w-full sm:min-h-[540px]">
              <Image
                src={pillar.heroImage}
                alt={pillar.heroAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />

              <div className="relative z-10 flex min-h-[460px] items-end p-6 sm:min-h-[540px] sm:p-10 lg:p-14">
                <div className="max-w-2xl rounded-2xl border border-white/15 bg-black/45 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:p-10">
                  <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
                    <span className="h-px w-10 bg-accent" aria-hidden="true" />
                    {pillar.eyebrow}
                  </p>

                  <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {pillar.titlePrefix}{" "}
                    <span className="text-gradient">{pillar.titleHighlight}</span>
                  </h1>

                  <p className="mt-5 font-body text-base leading-relaxed text-white/85 sm:text-lg">
                    {pillar.intro}
                  </p>

                  <div className="mt-7">
                    <Link
                      href="/#enquiry"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section>
            <div className="max-w-3xl">
              <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
                <span className="h-px w-10 bg-accent" aria-hidden="true" />
                {pillar.eyebrow}
              </p>

              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {pillar.titlePrefix}{" "}
                <span className="text-gradient">{pillar.titleHighlight}</span>
              </h1>

              <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg">
                {pillar.intro}
              </p>

              <div className="mt-8">
                <Link
                  href="/#enquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border sm:aspect-[21/9]">
              <Image
                src={pillar.heroImage}
                alt={pillar.heroAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
            </div>
          </section>
        )}

        {/* 2. Capabilities — 5 Distinct Professional Layouts */}
        <section>
          {/* 01 · Clean Grid */}
          {layout === "1" && (
            <div>
              <div className="mb-12 max-w-2xl">
                <p className="mb-3 flex items-center gap-3 font-hand text-lg text-accent">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  What We Do
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Our <span className="text-gradient">{pillar.eyebrow}</span> Capabilities
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pillar.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/40"
                  >
                    <span className="mb-4 block font-display text-sm font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 02 · Editorial List */}
          {layout === "2" && (
            <div className="grid items-start gap-12 lg:grid-cols-12">
              <div className="lg:sticky lg:top-28 lg:col-span-4">
                <p className="mb-3 flex items-center gap-3 font-hand text-lg text-accent">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  What We Do
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our <span className="text-gradient">{pillar.eyebrow}</span> Capabilities
                </h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted sm:text-base">
                  End-to-end strategy, creative and execution across physical and digital spaces.
                </p>
              </div>

              <div className="border-t border-border lg:col-span-8">
                {pillar.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="grid gap-3 border-b border-border py-7 sm:grid-cols-12 sm:gap-6"
                  >
                    <span className="font-display text-sm font-semibold text-accent sm:col-span-1 sm:pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="sm:col-span-11">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-muted sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 03 · Glassmorphism */}
          {layout === "3" && (
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14">
              {/* Restrained real-photo ambient backdrop so frosted glass has true depth */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <Image
                  src={pillar.secondaryImage}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="scale-110 object-cover opacity-25 blur-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
              </div>

              <div className="relative z-10">
                <div className="mb-12 max-w-2xl">
                  <p className="mb-3 flex items-center gap-3 font-hand text-lg text-accent">
                    <span className="h-px w-10 bg-accent" aria-hidden="true" />
                    What We Do
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    Our <span className="text-gradient">{pillar.eyebrow}</span> Capabilities
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {pillar.items.map((item, i) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/[0.12] bg-white/[0.05] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-colors duration-300 hover:border-accent/50 hover:bg-white/[0.08]"
                    >
                      <span className="mb-4 block font-display text-sm font-semibold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-semibold leading-snug text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 font-body text-sm leading-relaxed text-white/75">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 04 · Asymmetric Magazine */}
          {layout === "4" && (
            <div>
              <div className="mb-12 max-w-2xl">
                <p className="mb-3 flex items-center gap-3 font-hand text-lg text-accent">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  What We Do
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Our <span className="text-gradient">{pillar.eyebrow}</span> Capabilities
                </h2>
              </div>

              {/* Lead Anchor Feature */}
              <div className="mb-6 grid overflow-hidden rounded-2xl border border-border bg-surface lg:grid-cols-12">
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-6">
                  <span className="font-display text-sm font-semibold text-accent">01</span>
                  <div className="mt-8">
                    <h3 className="font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                      {leadItem.title}
                    </h3>
                    <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-muted">
                      {leadItem.desc}
                    </p>
                  </div>
                </div>
                <div className="relative min-h-[240px] lg:col-span-6 lg:min-h-[300px]">
                  <Image
                    src={pillar.secondaryImage}
                    alt={pillar.secondaryAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent opacity-60 lg:opacity-80" />
                </div>
              </div>

              {/* Remaining Services Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {restItems.map((item, i) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/40"
                  >
                    <span className="mb-4 block font-display text-sm font-semibold text-accent">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 05 · Open Two-Column (Typographic, No Card Boxes) */}
          {layout === "5" && (
            <div>
              <div className="mb-14 max-w-2xl">
                <p className="mb-3 flex items-center gap-3 font-hand text-lg text-accent">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  What We Do
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Our <span className="text-gradient">{pillar.eyebrow}</span> Capabilities
                </h2>
              </div>

              <div className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
                {pillar.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="group border-t border-border pt-7 transition-colors hover:border-accent/60"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm font-semibold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-semibold leading-snug text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-3 font-body text-sm leading-relaxed text-muted sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 3. Selected Work */}
        {linkedCases.length > 0 && (
          <section className="border-t border-border pt-16">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 flex items-center gap-3 font-hand text-lg text-accent">
                  <span className="h-px w-10 bg-accent" aria-hidden="true" />
                  Selected Work
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
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
                  className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_28px_80px_-32px_var(--accent-glow)] ${
                    layout === "3"
                      ? "border border-white/[0.12] bg-white/[0.04] backdrop-blur-xl"
                      : "border border-border bg-surface/60"
                  }`}
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

        {/* 4. Explore Other Verticals */}
        <section className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-body text-sm text-muted-2">Also explore:</span>
            {pillar.otherPillars.map((op) => (
              <button
                key={op.id}
                type="button"
                onClick={() => setPillarId(op.id)}
                className="cursor-pointer rounded-full border border-border px-4 py-2 font-body text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {op.name}
              </button>
            ))}
            <Link
              href="/our-work#owned-ips"
              className="rounded-full border border-border px-4 py-2 font-body text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              Owned IPs
            </Link>
          </div>

          <Link
            href="/#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
