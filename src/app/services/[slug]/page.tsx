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
  const primaryImage = data.media[0];
  const primaryImageAlt = data.mediaMeta?.[0]?.alt ?? `${data.title} — ${data.company}`;
  return {
    title: `${data.title} — Anthem`,
    description: data.summary,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${data.title} — Anthem`,
      description: data.summary,
      url: `https://theanthem.in/services/${slug}`,
      siteName: "Anthem",
      type: "article",
      locale: "en_IN",
      ...(primaryImage
        ? {
            images: [
              {
                url: primaryImage,
                alt: primaryImageAlt,
              },
            ],
          }
        : {}),
    },
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

  const videos = data.video ? (Array.isArray(data.video) ? data.video : [data.video]) : [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.title,
    description: data.summary,
    url: `https://theanthem.in/services/${data.slug}`,
    creator: {
      "@type": "Organization",
      name: "Anthem",
      url: "https://theanthem.in",
    },
    about: {
      "@type": "Organization",
      name: data.company,
    },
    image: data.media.map((url, i) => ({
      "@type": "ImageObject",
      url,
      contentUrl: url,
      name: data.mediaMeta?.[i]?.name ?? `${data.title} — Image ${i + 1}`,
      description: data.mediaMeta?.[i]?.alt ?? `${data.title} visual for ${data.company} by Anthem`,
      caption: data.mediaMeta?.[i]?.alt ?? `${data.title} visual for ${data.company} by Anthem`,
    })),
    ...(videos.length > 0
      ? {
          video: videos.map((url, i) => ({
            "@type": "VideoObject",
            contentUrl: url,
            name: data.videoMeta?.[i]?.name ?? `${data.title} — Event Video${videos.length > 1 ? ` ${i + 1}` : ""}`,
            description: data.videoMeta?.[i]?.alt ?? `${data.title} campaign video for ${data.company} by Anthem`,
            thumbnailUrl: data.media[0],
          })),
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
