import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Anthem",
  description:
    "An experiential agency that delivers 360° brand campaigns — rooted in innovation, consumer insight and storytelling.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
