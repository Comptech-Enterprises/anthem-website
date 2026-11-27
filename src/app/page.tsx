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
      name: "What services does Anthem provide as an experiential marketing agency in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem is an integrated creative and experiential marketing agency in India operating across three core business verticals: Events & Activations, Retail, and Anthem Amplify. Headquartered in Delhi NCR with operations in Mumbai and Bengaluru, Anthem delivers end-to-end creative strategy and production across 30+ Indian cities.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Anthem operate and manage events across India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem is headquartered in Delhi NCR with operations in Mumbai and Bengaluru, executing brand experiences across 30+ Indian cities. Having delivered 150+ campaigns for 80+ brands, Anthem manages multi-city brand roadshows, retail launches, and corporate events nationwide with centralized creative direction and vetted local production networks.",
      },
    },
    {
      "@type": "Question",
      name: "Does Anthem create and produce owned experiential IPs and cultural festivals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alongside client campaigns, Anthem conceptualizes, funds, and scales owned IPs - original consumer festivals and culture-led platforms built and operated in-house. Anthem's flagship owned IPs include Explorers Club, a lifestyle and culture-led festival that has drawn 1.5 lakh+ attendees across Delhi NCR, Mumbai, and Bengaluru, and Food Talk India, a leading digital food and lifestyle community and experiences platform.",
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
        text: "Anthem holds established domain expertise across premium alco-bev and spirits, consumer technology, luxury lifestyle, automotive, FMCG, banking, and professional services. By combining consumer behavioral insights with architectural production across Bengaluru, Delhi NCR, and Mumbai, Anthem translates nuanced brand narratives into memorable physical environments that resonate with corporate leadership and discerning consumers alike.",
      },
    },
    {
      "@type": "Question",
      name: "How does Anthem Amplify connect on-ground experiences with digital reach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anthem Amplify is Anthem's dedicated creator, culture, and content vertical that extends physical brand activations into sustained digital conversation. Available per project or on a monthly retainer, Amplify delivers brand ambassador programs, micro-creator campaigns, campus challenges, meme marketing, culture-page seeding, event content clipping, and short-form video production.",
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
