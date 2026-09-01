import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import JobApplication from "@/components/JobApplication";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers — Anthem",
  description:
    "Join the team behind the experiences — roles for producers, strategists and makers at an experiential agency in New Delhi.",
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
