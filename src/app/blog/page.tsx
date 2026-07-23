import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Anthem",
  description:
    "Stories from behind the experiences — notes on building live IPs, brand activations and moments people remember.",
};

export default function BlogPage() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Blog />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
