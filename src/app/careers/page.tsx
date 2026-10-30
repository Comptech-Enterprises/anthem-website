import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import JobApplication from "@/components/JobApplication";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers at Anthem — Join India's Top Experiential Agency",
  description:
    "Join the team behind India's biggest brand experiences. Open roles for producers, strategists and creatives at Anthem, New Delhi.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <JobApplication />
      </main>
      <Footer />
    </>
  );
}
