import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work — Anthem",
  description:
    "Case studies from the brands we've partnered with — festival IPs, brand activations, launches and films across screen and stage.",
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
