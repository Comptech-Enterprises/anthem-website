import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ServiceConceptsPreview from "@/components/ServiceConceptsPreview";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Service Page Design Concepts (Staging Review)",
  description:
    "Internal staging preview comparing 3 service page layout directions across Events & Activations, Retail, and Amplify.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ServiceConceptsPage() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <ServiceConceptsPreview />
      </main>
      <Footer />
    </>
  );
}
