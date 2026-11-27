"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const link = "text-accent underline underline-offset-2 hover:text-accent/80 transition-colors";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What services does Anthem provide as an experiential marketing agency in India?",
    a: (
      <>
        Anthem is an integrated creative and experiential marketing agency in India operating across three core business verticals: Events &amp; Activations, Retail, and Anthem Amplify. Headquartered in Delhi NCR with operations in Mumbai and Bengaluru, Anthem delivers end-to-end creative strategy and production across 30+ Indian cities - spanning brand activations, product launches, and <Link href="/corporate-events-in-delhi" className={link}>corporate event management</Link> under Events &amp; Activations; flagship store launches, pop-ups, and in-store consumer experiences under Retail; and creator campaigns, brand ambassador programs, meme marketing, and short-form video production under Anthem Amplify.
      </>
    ),
  },
  {
    q: "Where does Anthem operate and manage events across India?",
    a: (
      <>
        Anthem is headquartered in Delhi NCR with operations in Mumbai and Bengaluru, executing brand experiences across 30+ Indian cities. Having delivered 150+ campaigns for 80+ brands, Anthem manages multi-city brand roadshows, retail launches, and corporate events nationwide with centralized creative direction and vetted local production networks. Explore our nationwide portfolio in <Link href="/our-work" className={link}>our work</Link>.
      </>
    ),
  },
  {
    q: "Does Anthem create and produce owned experiential IPs and cultural festivals?",
    a: "Yes. Alongside client campaigns, Anthem conceptualizes, funds, and scales owned IPs - original consumer festivals and culture-led platforms built and operated in-house rather than commissioned for a single brand. Anthem's flagship owned IPs include Explorers Club, a lifestyle and culture-led festival that has drawn 1.5 lakh+ attendees across Delhi NCR, Mumbai, and Bengaluru, and Food Talk India, a leading digital food and lifestyle community and experiences platform. These properties give partner brands direct access to established, high-engagement consumer audiences.",
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
    a: "Anthem holds established domain expertise across premium alco-bev and spirits, consumer technology, luxury lifestyle, automotive, FMCG, banking, and professional services. By combining consumer behavioral insights with architectural production across Bengaluru, Delhi NCR, and Mumbai, Anthem translates nuanced brand narratives into memorable physical environments that resonate with corporate leadership and discerning consumers alike.",
  },
  {
    q: "How does Anthem Amplify connect on-ground experiences with digital reach?",
    a: (
      <>
        Anthem Amplify is Anthem&apos;s dedicated creator, culture, and content vertical that extends physical brand activations into sustained digital conversation. Available per project or on a monthly retainer, Amplify delivers brand ambassador programs, micro-creator campaigns, campus challenges, meme marketing, culture-page seeding, event content clipping, and short-form video production - ensuring live experiences continue driving relevance across social platforms. Connect with our team through our <Link href="/#enquiry" className={link}>project consultation form</Link> to plan an integrated campaign.
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
