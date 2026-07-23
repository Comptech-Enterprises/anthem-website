import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery — Anthem",
  description:
    "Our work in living colour — photos and films from the ground, the proof of what we build, captured as it happened.",
};

export default function GalleryPage() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Gallery />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
