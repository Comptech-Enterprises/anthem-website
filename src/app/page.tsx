import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import RibbonFlight from "@/components/RibbonFlight";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Brands from "@/components/Brands";
import OurServices from "@/components/OurServices";

const WhatWeDo = dynamic(() => import("@/components/WhatWeDo"));
const Founders = dynamic(() => import("@/components/Founders"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"));
const Footer = dynamic(() => import("@/components/Footer"));

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Anthem provide as an integrated creative and experiential marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem delivers end-to-end creative strategy, experiential brand activations, corporate event management, and digital amplification for global brands across India. Operating through integrated teams across Bengaluru, Delhi NCR, and Mumbai, Anthem pairs strategic storytelling with technical production to execute large-scale conferences, immersive brand worlds, and retail experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Anthem operate and manage events across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem operates on a nationwide scale with dedicated physical hubs and production infrastructure in Bengaluru, Delhi NCR, and Mumbai. Having produced over 150 experiences across 30 Indian cities, Anthem seamlessly manages multi-city brand roadshows, high-security corporate offsites, and regional product rollouts with complete logistical control.",
      },
    },
    {
      "@type": "Question",
      name: "Does Anthem create and produce proprietary brand IPs and cultural festivals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Anthem conceptualizes, finances, produces, and scales original experiential intellectual properties that shape modern consumer culture. A premier example is The Gin Explorers Club, India's largest cocktail festival, which has engaged more than 100,000 attendees across editions in Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "Does Anthem partner with corporate enterprises as well as high-growth brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem works with Fortune 500 corporations, management consulting firms, and market-defining consumer lifestyle brands. Whether engineering leadership summits such as the BCG India leadership meet or producing high-energy retail debuts, Anthem tailors creative direction, vendor governance, and spatial design to match each client's commercial goals across Bengaluru, Delhi NCR, and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "What industry sectors does Anthem specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem holds established domain expertise across premium alcobev and spirits, consumer technology, luxury lifestyle, automotive, FMCG, banking, and professional services. By combining consumer behavioral insights with architectural production across Bengaluru, Delhi NCR, and Mumbai, Anthem translates nuanced brand narratives into memorable physical environments that resonate with corporate leadership and discerning consumers alike.",
      },
    },
    {
      "@type": "Question",
      name: "How does Anthem Amplify connect on-ground experiences with digital reach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem Amplify is our dedicated digital and creator marketing division that turns live experiential moments into sustained online conversation. By coordinating creator ambassador programs, real-time social clipping, and digital content distribution across Bengaluru, Delhi NCR, and Mumbai, Amplify converts physical event attendance into millions of verified impressions.",
      },
    },
    {
      "@type": "Question",
      name: "Which enterprise brands and industry sectors does Anthem partner with across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem collaborates with global Fortune 500 enterprises, market-leading conglomerates, and disruptive consumer labels spanning management consulting, luxury spirits, automotive, technology, and retail. Notable portfolio partners include Boston Consulting Group, Diageo India, Pernod Ricard, and premium fashion labels.",
      },
    },
    {
      "@type": "Question",
      name: "How does Anthem balance proprietary festival IPs with bespoke client brand activations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem operates a dual model consisting of owned cultural intellectual properties and tailored client brand activations. The agency conceptualizes, funds, and produces flagship proprietary IPs such as The Gin Explorers Club and Food Talk India, which have engaged over 150,000 attendees.",
      },
    },
    {
      "@type": "Question",
      name: "How does Anthem ensure quality control and production consistency across multi-city campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem maintains centralized creative direction and standardized production protocols supported by trusted local vendor networks. Whether executing multi-city roadshows or large-scale celebrations like World Class Festival India, Anthem deploys seasoned technical directors, spatial designers, and compliance managers to oversee fabrication, audio-visual staging, and artist management.",
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

export default function Home() {
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
        <Hero />
        <Stats />
        <RibbonFlight>
          <Brands />
          <OurServices />
          <WhatWeDo />
        </RibbonFlight>
        {/* <Testimonials /> */}
        <Founders />
        <FAQ />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
