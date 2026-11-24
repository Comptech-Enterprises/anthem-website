import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import JobApplication from "@/components/JobApplication";
import PageFAQ from "@/components/PageFAQ";
import Footer from "@/components/Footer";
import { careersFAQs } from "@/data/page-faqs";

export const metadata: Metadata = {
  title: "Careers at Anthem — Join India's Top Experiential Agency",
  description:
    "Join the team behind India's biggest brand experiences. Open roles for producers, strategists and creatives at Anthem, New Delhi.",
  alternates: { canonical: "/careers" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: careersFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function CareersPage() {
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
        <JobApplication />
        <PageFAQ faqs={careersFAQs} />
      </main>
      <Footer />
    </>
  );
}
