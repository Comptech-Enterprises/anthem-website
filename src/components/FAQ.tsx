"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const link = "text-accent underline underline-offset-2 hover:text-accent/80 transition-colors";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What does Anthem do?",
    a: (
      <>
        Anthem is a leading <Link href="/experience-design-in-delhi" className={link}>experiential marketing agency in Delhi</Link> and India that builds brands through strategic ideas, immersive experiences, and culture. Backed by 12+ years of experience and a core 30+ member team, Anthem operates out of primary hubs in Delhi NCR and <Link href="/event-management-in-mumbai" className={link}>Mumbai</Link> to deliver comprehensive campaigns nationwide. The agency&apos;s multi-disciplinary capabilities span creative strategy, integrated marketing, <Link href="/brand-activations-in-delhi" className={link}>brand activations</Link>, <Link href="/corporate-events-in-delhi" className={link}>corporate event management</Link>, digital marketing, <Link href="/content-production-in-delhi" className={link}>content production</Link>, <Link href="/influencer-marketing-in-delhi" className={link}>influencer marketing</Link>, and large-scale entertainment properties.
      </>
    ),
  },
  {
    q: "Where does Anthem operate?",
    a: (
      <>
        Anthem operates on a pan-India scale, anchored by physical offices in <Link href="/experience-design-in-delhi" className={link}>Delhi NCR</Link> (covering Delhi, Gurgaon, and Noida) and <Link href="/brand-activations-in-mumbai" className={link}>Mumbai</Link>. Leveraging a proven track record of executing over 150+ experiences across 30+ cities for 80+ global and national brands, Anthem regularly deploys multi-city marketing campaigns, corporate offsites, and <Link href="/brand-activations-in-bangalore" className={link}>brand activations in Bangalore</Link>, Hyderabad, and Pune.
      </>
    ),
  },
  {
    q: "Does Anthem create and manage original brand IPs?",
    a: (
      <>
        Yes, Anthem specializes in developing, producing, and scaling original experiential intellectual properties (IPs). A prime example is The Gin Explorers Club, India&apos;s largest and most celebrated cocktail festival created and produced by the team. Having welcomed over 100,000 enthusiasts across major metropolitan hubs like Delhi, Mumbai, and Bengaluru, this marquee property showcases Anthem&apos;s unique capability to build cultural relevance, brand partnerships, and large-scale consumer communities from the ground up.
      </>
    ),
  },
  {
    q: "Does Anthem work with startups or only enterprise brands?",
    a: (
      <>
        Anthem partners with a diverse portfolio ranging from high-growth startups to established enterprise brands and Fortune 500 companies. As an integrated <Link href="/experience-design-in-mumbai" className={link}>experiential marketing agency in Mumbai</Link> and Delhi, the agency tailors its creative strategies, <Link href="/brand-activations-in-delhi" className={link}>brand activations</Link>, and <Link href="/corporate-events-in-mumbai" className={link}>corporate event production</Link> capabilities to match the specific scale, budget, and commercial goals of each client - backed by a track record supporting over 80+ brands nationwide.
      </>
    ),
  },
  {
    q: "What industries does Anthem specialize in?",
    a: (
      <>
        Anthem possesses deep domain expertise across multiple high-impact industries, including FMCG, food and beverage, alcohol and spirits (Alcobev), <Link href="/luxury-experiences-in-delhi" className={link}>luxury and lifestyle</Link>, automotive, technology, fashion, beauty, hospitality, and corporate services. By combining industry-specific consumer insights with creative execution and <Link href="/brand-activations-in-delhi" className={link}>brand activation expertise</Link>, Anthem delivers campaigns that resonate authentically within each sector.
      </>
    ),
  },
  {
    q: "What is Anthem Amplify?",
    a: (
      <>
        Anthem Amplify is Anthem&apos;s dedicated digital, creator, and culture marketing arm designed to extend live physical brand moments into the digital ecosystem. Amplify manages micro-creator ambassador programs, meme and culture-page seeding, short-form video production, event clipping, and digital-first campaigns that maximize online engagement. Learn more about our <Link href="/influencer-marketing-in-delhi" className={link}>influencer marketing in Delhi</Link>, <Link href="/influencer-marketing-in-mumbai" className={link}>Mumbai</Link>, and <Link href="/influencer-marketing-in-bangalore" className={link}>Bangalore</Link>.
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
