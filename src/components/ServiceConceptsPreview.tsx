"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCase } from "@/data/cases";

type LayoutId = "1" | "2";
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

export default function ServiceConceptsPreview() {
  const [layout, setLayout] = useState<LayoutId>("1");
  const [pillarId, setPillarId] = useState<PillarId>("events");

  const pillar = PILLARS[pillarId];
  const linkedCases = pillar.caseSlugs
    .map((slug) => getCase(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="relative overflow-hidden pt-28 pb-28 sm:pt-32">
      {/* Minimal staging preview controls */}
      <div className="container-x mb-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-body text-xs text-muted-2">Layout</span>
            {(
              [
                { id: "1", label: "01 · Clean Grid" },
                { id: "2", label: "02 · Editorial List" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setLayout(opt.id)}
                className={`cursor-pointer rounded-full border px-4 py-1.5 font-display text-xs font-medium transition-colors ${
                  layout === opt.id
                    ? "border-accent bg-accent text-white"
                    : "border-border text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
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
        {/* 1. Hero */}
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

        {/* 2. Capabilities */}
        <section>
          {layout === "1" ? (
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
          ) : (
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
