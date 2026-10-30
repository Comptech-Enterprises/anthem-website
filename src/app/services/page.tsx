import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work — Brand Activations & Experiential Campaigns",
  description:
    "Explore Anthem's portfolio of experiential marketing campaigns, brand activations, live events and festival IPs for brands like Diageo, Pernod Ricard, BCG and more across India.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Services />
      </main>
      <Footer />
    </>
  );
}
