// Blog content lives here so the listing (`Blog.tsx`) and the per-post pages
// (`app/blog/[slug]/page.tsx`) render from one source. No "use client" — this
// is plain data, importable from server and client components alike.

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  /** Article body — one string per paragraph. Placeholder copy for now. */
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "building-the-world-class-india-festival",
    category: "Behind the Scenes",
    title: "Building the World Class India Festival, day by day",
    excerpt:
      "How a bold idea became a multi-city celebration — the logistics, the late nights, and the moments that made it worth it.",
    date: "Jun 2026",
    read: "6 min read",
    body: [
      "Every festival starts as a sentence on a whiteboard. Ours was simple: bring a world-class music and culture experience to cities that rarely get one. Turning that line into a live event across three cities took nine months, a hundred conversations, and a lot of coffee.",
      "The hardest part was never the show itself — it was the thousand invisible decisions behind it. Where does the power come from at 2am? How do ten thousand people move through a space without ever feeling crowded? We mapped every flow, then walked it ourselves before a single guest arrived.",
      "What we learned is that logistics are the real creative act. The magic an audience feels is the sum of problems they never knew existed, solved quietly in advance. When the lights finally went up on the main stage, the roar wasn't for us — but we felt it anyway.",
      "We're already sketching next year on a fresh whiteboard. Bigger, sharper, and rooted in everything this one taught us.",
    ],
  },
  {
    slug: "what-makes-an-experience-memorable",
    category: "Insights",
    title: "What actually makes an experience memorable",
    excerpt:
      "Spectacle fades. Emotion sticks. A look at the psychology behind the experiences people never forget.",
    date: "May 2026",
    read: "4 min read",
    body: [
      "Ask someone about the best event they've ever been to and they won't describe the production budget. They'll describe a feeling — a moment they didn't see coming, a detail that felt made for them. Memory is emotional, not visual.",
      "Psychologists call it the peak-end rule: we remember an experience by its most intense moment and how it ended, not its average. That's why a single, well-placed surprise outperforms an hour of steady spectacle.",
      "So we design for peaks. We decide early where the goosebumps go, then build everything else in service of them. The quiet stretches matter too — they're the contrast that makes a peak land.",
      "Spectacle gets attention. Emotion earns memory. The brands people talk about years later understood the difference.",
    ],
  },
  {
    slug: "trends-reshaping-brand-activations-2026",
    category: "Strategy",
    title: "Five trends reshaping brand activations in 2026",
    excerpt:
      "From hyper-local IPs to always-on content ecosystems — where experiential marketing is heading next.",
    date: "Apr 2026",
    read: "5 min read",
    body: [
      "Experiential marketing is shifting from one-off spectacles to living systems. The activation is no longer the finish line — it's the content engine that feeds a brand for months. Here's where we see it heading.",
      "First, hyper-local IPs. Audiences are tired of borrowed global formats; they want something that feels like it grew out of their own city. Owned, local formats build loyalty that a touring show never will.",
      "Second, always-on ecosystems. The best activations are designed to be filmed, clipped, and re-shared from day one — the room is just the studio. Third, participation over presentation: people want to shape the moment, not watch it.",
      "Fourth, measurable everything, from dwell time to downstream sales. And fifth, sustainability as a design constraint, not an afterthought. The brands that treat these as creative fuel — not compliance — will define the next few years.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
