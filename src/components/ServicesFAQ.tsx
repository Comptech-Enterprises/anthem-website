"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const link = "text-accent underline underline-offset-2 hover:text-accent/80 transition-colors";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What types of corporate events and experiential campaigns are featured in Anthem's portfolio?",
    a: (
      <>
        Anthem's portfolio highlights end-to-end execution across executive leadership summits, luxury retail launches, employee engagement offsites, and nationwide brand activations. Projects range from high-stakes corporate gatherings like the <Link href="/services/bcg-india-leadership-meet" className={link}>BCG India Leadership Meet</Link> to immersive lifestyle experiences and retail showcases. Across 12+ years of production excellence, Anthem manages creative strategy, technical production, spatial design, and VIP guest hospitality for enterprise clients in Bengaluru, Delhi NCR, and Mumbai.
      </>
    ),
  },
  {
    q: "Which enterprise brands and industry sectors does Anthem partner with across India?",
    a: (
      <>
        Anthem collaborates with global Fortune 500 enterprises, market-leading conglomerates, and disruptive consumer labels spanning management consulting, luxury spirits, automotive, technology, and retail. Notable portfolio partners include Boston Consulting Group, Diageo India, Pernod Ricard, and premium fashion labels. The agency designs tailored brand ecosystems and produces high-impact <Link href="/corporate-events-in-delhi" className={link}>corporate events in Delhi NCR</Link>, alongside pan-India brand campaigns delivered across Bengaluru, Delhi NCR, and Mumbai.
      </>
    ),
  },
  {
    q: "How does Anthem balance proprietary festival IPs with bespoke client brand activations?",
    a: "Anthem operates a dual model consisting of owned cultural intellectual properties and tailored client brand activations. The agency conceptualizes, funds, and produces flagship proprietary IPs such as The Gin Explorers Club and Food Talk India, which have engaged over 150,000 attendees. This firsthand experience managing massive crowds, complex vendor ecosystems, and liquor compliance directly informs how Anthem produces bespoke activations and corporate conferences for external brands across Bengaluru, Delhi NCR, and Mumbai.",
  },
  {
    q: "How does Anthem ensure quality control and production consistency across multi-city campaigns?",
    a: (
      <>
        Anthem maintains centralized creative direction and standardized production protocols supported by trusted local vendor networks. Whether executing multi-city roadshows or large-scale celebrations like <Link href="/services/world-class-festival-india" className={link}>World Class Festival India</Link>, Anthem deploys seasoned technical directors, spatial designers, and compliance managers to oversee fabrication, audio-visual staging, and artist management. This disciplined framework guarantees uniform brand prestige and zero downtime across Bengaluru, Delhi NCR, and Mumbai.
      </>
    ),
  },
  {
    q: "How are campaign outcomes, attendee engagement, and ROI measured across Anthem's portfolio?",
    a: "Anthem evaluates project success through structured quantitative metrics and qualitative brand equity benchmarks. For corporate conferences and leadership offsites, key metrics include executive net promoter scores, session dwell time, and stakeholder feedback. For consumer activations and brand festivals, Anthem tracks verified attendee footfall, digital impressions, media coverage, and on-ground conversion rates across Bengaluru, Delhi NCR, and Mumbai.",
  },
  {
    q: "How can prospective corporate clients initiate a project or request tailored case credentials?",
    a: "Enterprise brands and corporate teams can begin by submitting an initial project brief through Anthem's inquiry portal. Anthem's strategic leadership reviews project scope, expected timelines, and budget parameters before scheduling a collaborative discovery session. From there, the team delivers customized case study decks and spatial design proposals tailored to upcoming brand activations and corporate summits in Bengaluru, Delhi NCR, and Mumbai.",
  },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="relative border-t border-border py-28 sm:py-36">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-hand text-lg text-accent">
            <span className="h-px w-10 bg-accent" />
            FAQs
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-16 max-w-3xl font-display text-3xl font-bold sm:text-5xl">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </Reveal>

        <div className="mx-auto max-w-3xl divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div className="group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-accent"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-semibold sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-accent text-white border-accent" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 leading-relaxed text-muted">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
