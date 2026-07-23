import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Anthem",
  description:
    "Digital and Events, one seamless brand story — content, films and performance across every screen, live IPs and activations on every stage.",
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
      <ChatWidget />
    </>
  );
}
