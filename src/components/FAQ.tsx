"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What does Anthem do?",
    a: "Anthem is a leading experiential marketing agency and creative agency in India that builds brands through strategic ideas, immersive experiences, and culture. Backed by 12+ years of experience and a core 30+ member team, Anthem operates out of primary hubs in Delhi NCR and Mumbai to deliver comprehensive campaigns nationwide. The agency’s multi-disciplinary capabilities span creative strategy, integrated marketing, brand activations, corporate event management, digital marketing, content production via Anthem Amplify, influencer marketing, and large-scale entertainment properties.",
  },
  {
    q: "Where does Anthem operate?",
    a: "Anthem operates on a pan-India scale, anchored by physical offices in Delhi NCR (covering Delhi, Gurgaon, and Noida) and Mumbai. Leveraging a proven track record of executing over 150+ experiences across 30+ cities for 80+ global and national brands, Anthem regularly deploys multi-city marketing campaigns, corporate offsites, and brand activations across key metropolitan markets including Bengaluru, Hyderabad, and Pune.",
  },
  {
    q: "Does Anthem handle corporate events?",
    a: "Yes, as a premier corporate event management company in India, Anthem specializes in conceptualizing, planning, producing, and executing large-scale corporate experiences and B2B business events. The agency manages corporate conferences, annual leadership summits, business conventions, product launches, dealer meets, employee engagement programs, and corporate offsites across key hubs like Delhi NCR and Mumbai.",
  },
  {
    q: "Does Anthem offer creative and digital marketing services?",
    a: "Yes, operating as a top-tier integrated marketing agency in India, Anthem provides full-suite creative strategy and digital marketing solutions to support brands across both digital and physical touchpoints. Its digital arm, Anthem Amplify, delivers creator and influencer marketing programs, social media campaign management, digital content strategy, short-form video production, meme and culture marketing, and micro-influencer seeding to extend brand moments online.",
  },
  {
    q: "Does Anthem handle brand activations?",
    a: "Yes, brand activations and experiential campaigns are core strengths of Anthem as a leading brand activation agency in India. The agency designs and executes immersive consumer engagement campaigns, retail pop-up experiences, mall activations, product sampling tours, roadshows, and interactive brand installations. By combining creative concept design with robust on-ground execution, Anthem helps brands build direct, measurable connections with target audiences.",
  },
  {
    q: "Does Anthem create and manage original brand IPs?",
    a: "Yes, Anthem specializes in developing, producing, and scaling original experiential intellectual properties (IPs). A prime example is The Gin Explorers Club, India’s largest and most celebrated cocktail festival created and produced by the team. Having welcomed over 100,000 enthusiasts across major metropolitan hubs like Delhi, Mumbai, and Bengaluru, this marquee property showcases Anthem’s unique capability to build cultural relevance, brand partnerships, and large-scale consumer communities from the ground up.",
  },
  {
    q: "Does Anthem work with startups or only enterprise brands?",
    a: "Anthem partners with a diverse portfolio ranging from high-growth startups to established enterprise brands and Fortune 500 companies. As an integrated experiential marketing agency in India, the agency tailors its creative strategies, brand activations, and corporate event production capabilities to match the specific scale, budget, and commercial goals of each client—backed by a track record supporting over 80+ brands nationwide.",
  },
  {
    q: "What industries does Anthem specialize in?",
    a: "Anthem possesses deep domain expertise across multiple high-impact industries, including FMCG, food and beverage, alcohol and spirits (Alcobev), luxury and lifestyle, automotive, technology, fashion, beauty, hospitality, and corporate services. By combining industry-specific consumer insights with creative execution and brand activation expertise, Anthem delivers campaigns that resonate authentically within each sector.",
  },
  {
    q: "What is Anthem Amplify?",
    a: "Anthem Amplify is Anthem’s dedicated digital, creator, and culture marketing arm designed to extend live physical brand moments into the digital ecosystem. Amplify manages micro-creator ambassador programs, meme and culture-page seeding, short-form video production, event clipping, and digital-first campaigns that maximize online engagement before, during, and long after an event concludes.",
  },
  {
    q: "What is the process for working with Anthem?",
    a: "Working with Anthem begins with an initial strategic discovery call to understand your brand objectives, campaign timeline, and target markets (such as Delhi NCR, Mumbai, or Bengaluru). From there, our 30+ member multidisciplinary team collaborates closely with your stakeholders through structured phases covering creative concept development, spatial design, logistics planning, and execution—delivering seamless campaigns backed by 12+ years of industry experience.",
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
