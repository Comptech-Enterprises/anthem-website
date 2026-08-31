import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import { cases, getCase } from "@/data/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getCase(slug);
  if (!data) return { title: "Case study — Anthem" };
  return {
    title: `${data.title} — Anthem`,
    description: data.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCase(slug);
  if (!data) notFound();

  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <CaseStudy data={data} />
      </main>
      <Footer />
    </>
  );
}
