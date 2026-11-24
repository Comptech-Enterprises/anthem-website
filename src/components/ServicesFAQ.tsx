"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

const link = "text-accent underline underline-offset-2 hover:text-accent/80 transition-colors";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Does Anthem handle corporate events?",
    a: (
      <>
        Yes, as a premier <Link href="/corporate-events-in-delhi" className={link}>corporate event management company in Delhi</Link> and India, Anthem specializes in conceptualizing, planning, producing, and executing large-scale corporate experiences and B2B business events. The agency manages corporate conferences, annual leadership summits, business conventions, product launches, dealer meets, employee engagement programs, and <Link href="/corporate-events-in-mumbai" className={link}>corporate offsites in Mumbai</Link> and across key hubs like Delhi NCR.
      </>
    ),
  },
  {
    q: "Does Anthem offer creative and digital marketing services?",
    a: (
      <>
        Yes, operating as a top-tier integrated marketing agency in India, Anthem provides full-suite <Link href="/content-production-in-delhi" className={link}>creative strategy and content production in Delhi</Link> and digital marketing solutions to support brands across both digital and physical touchpoints. Its digital arm, Anthem Amplify, delivers <Link href="/influencer-marketing-in-delhi" className={link}>influencer marketing programs in Delhi</Link>, social media campaign management, digital content strategy, short-form video production, meme and culture marketing, and micro-influencer seeding to extend brand moments online.
      </>
    ),
  },
  {
    q: "Does Anthem handle brand activations?",
    a: (
      <>
        Yes, <Link href="/brand-activations-in-delhi" className={link}>brand activations in Delhi</Link> and experiential campaigns are core strengths of Anthem as a leading brand activation agency in India. The agency designs and executes immersive consumer engagement campaigns, retail pop-up experiences, mall activations, product sampling tours, roadshows, and interactive brand installations across <Link href="/brand-activations-in-mumbai" className={link}>Mumbai</Link> and <Link href="/brand-activations-in-bangalore" className={link}>Bangalore</Link>. By combining creative concept design with robust on-ground execution, Anthem helps brands build direct, measurable connections with target audiences.
      </>
    ),
  },
  {
    q: "What is the process for working with Anthem?",
    a: (
      <>
        Working with Anthem begins with an initial strategic discovery call to understand your brand objectives, campaign timeline, and target markets. Whether you need <Link href="/experience-design-in-delhi" className={link}>experience design in Delhi</Link>, <Link href="/event-management-in-mumbai" className={link}>event management in Mumbai</Link>, or <Link href="/brand-activations-in-bangalore" className={link}>brand activations in Bangalore</Link>, our 30+ member multidisciplinary team collaborates closely with your stakeholders through structured phases covering creative concept development, spatial design, logistics planning, and execution - delivering seamless campaigns backed by 12+ years of industry experience.
      </>
    ),
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
