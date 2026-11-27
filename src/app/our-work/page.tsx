import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Services from "@/components/Services";
import ServicesFAQ from "@/components/ServicesFAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work — Brand Activations & Experiential Campaigns",
  description:
    "Explore Anthem's portfolio of experiential marketing campaigns, brand activations, live events and festival IPs for brands like Diageo, Pernod Ricard, BCG and more across India.",
  alternates: { canonical: "/our-work" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of corporate events and experiential campaigns are featured in Anthem's portfolio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem's portfolio highlights end-to-end execution across executive leadership summits, luxury retail launches, employee engagement offsites, and nationwide brand activations. Projects range from high-stakes corporate gatherings like the BCG India Leadership Meet to immersive lifestyle experiences and retail showcases. Across 12+ years of production excellence, Anthem manages creative strategy, technical production, spatial design, and VIP guest hospitality for enterprise clients in Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "Which enterprise brands and industry sectors does Anthem partner with across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem collaborates with global Fortune 500 enterprises, market-leading conglomerates, and disruptive consumer labels spanning management consulting, luxury spirits, automotive, technology, and retail. Notable portfolio partners include Boston Consulting Group, Diageo India, Pernod Ricard, and premium fashion labels. The agency designs tailored brand ecosystems and produces high-impact corporate events in Delhi NCR, alongside pan-India brand campaigns delivered across Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "How does Anthem balance proprietary festival IPs with bespoke client brand activations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem operates a dual model consisting of owned cultural intellectual properties and tailored client brand activations. The agency conceptualizes, funds, and produces flagship proprietary IPs such as The Gin Explorers Club and Food Talk India, which have engaged over 150,000 attendees. This firsthand experience managing massive crowds, complex vendor ecosystems, and liquor compliance directly informs how Anthem produces bespoke activations and corporate conferences for external brands across Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "How does Anthem ensure quality control and production consistency across multi-city campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem maintains centralized creative direction and standardized production protocols supported by trusted local vendor networks. Whether executing multi-city roadshows or large-scale celebrations like World Class Festival India, Anthem deploys seasoned technical directors, spatial designers, and compliance managers to oversee fabrication, audio-visual staging, and artist management. This disciplined framework guarantees uniform brand prestige and zero downtime across Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "How are campaign outcomes, attendee engagement, and ROI measured across Anthem's portfolio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem evaluates project success through structured quantitative metrics and qualitative brand equity benchmarks. For corporate conferences and leadership offsites, key metrics include executive net promoter scores, session dwell time, and stakeholder feedback. For consumer activations and brand festivals, Anthem tracks verified attendee footfall, digital impressions, media coverage, and on-ground conversion rates across Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "How can prospective corporate clients initiate a project or request tailored case credentials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enterprise brands and corporate teams can begin by submitting an initial project brief through Anthem's inquiry portal. Anthem's strategic leadership reviews project scope, expected timelines, and budget parameters before scheduling a collaborative discovery session. From there, the team delivers customized case study decks and spatial design proposals tailored to upcoming brand activations and corporate summits in Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Services />
        <ServicesFAQ />
      </main>
      <Footer />
    </>
  );
}
