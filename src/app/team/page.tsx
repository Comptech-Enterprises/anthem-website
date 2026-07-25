import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Team — Anthem",
  description:
    "Meet the strategists, creators and producers behind Anthem's experiential campaigns.",
};

export default function TeamPage() {
  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Team />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
