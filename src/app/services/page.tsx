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
  alternates: { canonical: "/services" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Anthem handle corporate events?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as a premier corporate event management company in India, Anthem specializes in conceptualizing, planning, producing, and executing large-scale corporate experiences and B2B business events. The agency manages corporate conferences, annual leadership summits, business conventions, product launches, dealer meets, employee engagement programs, and corporate offsites across key hubs like Delhi NCR and Mumbai.",
      },
    },
    {
      "@type": "Question",
      name: "Does Anthem offer creative and digital marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, operating as a top-tier integrated marketing agency in India, Anthem provides full-suite creative strategy and digital marketing solutions to support brands across both digital and physical touchpoints. Its digital arm, Anthem Amplify, delivers creator and influencer marketing programs, social media campaign management, digital content strategy, short-form video production, meme and culture marketing, and micro-influencer seeding to extend brand moments online.",
      },
    },
    {
      "@type": "Question",
      name: "Does Anthem handle brand activations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, brand activations and experiential campaigns are core strengths of Anthem as a leading brand activation agency in India. The agency designs and executes immersive consumer engagement campaigns, retail pop-up experiences, mall activations, product sampling tours, roadshows, and interactive brand installations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the process for working with Anthem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Working with Anthem begins with an initial strategic discovery call to understand your brand objectives, campaign timeline, and target markets. From there, our 30+ member multidisciplinary team collaborates closely with your stakeholders through structured phases covering creative concept development, spatial design, logistics planning, and execution.",
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
