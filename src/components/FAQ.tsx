"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const link = "text-accent underline underline-offset-2 hover:text-accent/80 transition-colors";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What services does Anthem provide as an integrated creative and experiential marketing agency?",
    a: (
      <>
        Anthem delivers end-to-end creative strategy, experiential brand activations, corporate event management, and digital amplification for global brands across India. Operating through integrated teams across Bengaluru, Delhi NCR, and Mumbai, Anthem pairs strategic storytelling with technical production to execute large-scale conferences, immersive brand worlds, and retail experiences. Explore our dedicated capabilities in <Link href="/corporate-events-in-delhi" className={link}>corporate event management</Link> to see how we build high-impact corporate experiences.
      </>
    ),
  },
  {
    q: "Where does Anthem operate and manage events across India?",
    a: (
      <>
        Anthem operates on a nationwide scale with dedicated physical hubs and production infrastructure in Bengaluru, Delhi NCR, and Mumbai. Having produced over 150 experiences across 30 Indian cities, Anthem seamlessly manages multi-city brand roadshows, high-security corporate offsites, and regional product rollouts with complete logistical control. Review our case studies and nationwide portfolio in <Link href="/our-work" className={link}>our work</Link> to explore our geographic reach.
      </>
    ),
  },
  {
    q: "Does Anthem create and produce proprietary brand IPs and cultural festivals?",
    a: "Yes, Anthem conceptualizes, finances, produces, and scales original experiential intellectual properties that shape modern consumer culture. A premier example is The Gin Explorers Club, India's largest cocktail festival, which has engaged more than 100,000 attendees across editions in Bengaluru, Delhi NCR, and Mumbai. This proprietary capability allows partner brands to integrate into high-traffic cultural festivals and access highly engaged consumer audiences.",
  },
  {
    q: "Does Anthem partner with corporate enterprises as well as high-growth brands?",
    a: (
      <>
        Anthem works with Fortune 500 corporations, management consulting firms, and market-defining consumer lifestyle brands. Whether engineering leadership summits such as the <Link href="/services/bcg-india-leadership-meet" className={link}>BCG India leadership meet</Link> or producing high-energy retail debuts, Anthem tailors creative direction, vendor governance, and spatial design to match each client&apos;s commercial goals across Bengaluru, Delhi NCR, and Mumbai.
      </>
    ),
  },
  {
    q: "What industry sectors does Anthem specialize in?",
    a: "Anthem holds established domain expertise across premium alcobev and spirits, consumer technology, luxury lifestyle, automotive, FMCG, banking, and professional services. By combining consumer behavioral insights with architectural production across Bengaluru, Delhi NCR, and Mumbai, Anthem translates nuanced brand narratives into memorable physical environments that resonate with corporate leadership and discerning consumers alike.",
  },
  {
    q: "How does Anthem Amplify connect on-ground experiences with digital reach?",
    a: (
      <>
        Anthem Amplify is our dedicated digital and creator marketing division that turns live experiential moments into sustained online conversation. By coordinating creator ambassador programs, real-time social clipping, and digital content distribution across Bengaluru, Delhi NCR, and Mumbai, Amplify converts physical event attendance into millions of verified impressions. Connect with our leadership team through our <Link href="/#enquiry" className={link}>project consultation form</Link> to plan your next integrated campaign.
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
    a: (
      <>
        Enterprise brands and corporate teams can begin by submitting an initial project brief through Anthem&apos;s inquiry portal. Anthem&apos;s strategic leadership reviews project scope, expected timelines, and budget parameters before scheduling a collaborative discovery session. From there, the team delivers customized case study decks and spatial design proposals tailored to upcoming brand activations and corporate summits in Bengaluru, Delhi NCR, and Mumbai. You can <Link href="/#enquiry" className={link}>contact Anthem&apos;s client solutions team</Link> to discuss your upcoming project requirements.
      </>
    ),
  },
];

export default function FAQ() {
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
