// Case-study content for the Our Work page and its dedicated detail routes.
// Media are intentional placeholders (no real client artwork yet) — the
// `media` labels drive the shimmer boxes rendered by <Placeholder>.

export type CaseStudy = {
  slug: string;
  company: string;
  monogram: string;
  title: string;
  tags: string[];
  // short line used on the grid card
  summary: string;
  // dedicated page sections
  overview: string;
  objective: string;
  execution: string[];
  results: { value: string; label: string }[];
  media: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "world-class-india-festival",
    company: "Aurora",
    monogram: "AU",
    title: "World Class India Festival",
    tags: ["Live IP", "Stage Production", "360° Campaign"],
    summary:
      "A homegrown festival IP built from the first concept note to a world-class stage.",
    overview:
      "Aurora wanted a property they could own and grow year after year — not a one-off event. We built a homegrown festival IP from the ground up, shaping the format, the programming and the launch story, then producing the whole thing end to end.",
    objective:
      "Create a repeatable, ownable festival brand that could stand shoulder to shoulder with the best in the world while still feeling unmistakably local.",
    execution: [
      "Defined an original festival format, name and brand identity",
      "Designed and built the main stage and live production",
      "Ran a multi-channel launch campaign to fill the grounds",
      "Set up the show-calling and run-of-show for a multi-day event",
    ],
    results: [
      { value: "20K+", label: "Attendees across the weekend" },
      { value: "3", label: "Cities in the touring roadmap" },
      { value: "40M", label: "Campaign impressions" },
    ],
    media: ["Main stage — night one", "Crowd wide shot", "Backstage production"],
  },
  {
    slug: "explorers-club",
    company: "Northwind",
    monogram: "NW",
    title: "Explorers Club",
    tags: ["Brand Activation", "Experiential Pop-Up"],
    summary:
      "A travelling, hands-on pop-up that let people walk through the product story.",
    overview:
      "Northwind wanted their product story to be felt, not just seen. We answered with a travelling pop-up — a hands-on world guests could walk through, play with and share, tuned to the crowd at each city stop.",
    objective:
      "Turn a product story into a physical experience people would share, and carry that reach well past the room itself.",
    execution: [
      "Built a modular set that toured multiple cities",
      "Designed interactive stations around the product",
      "Engineered shareable moments for social reach",
      "Tuned each stop to its local audience",
    ],
    results: [
      { value: "6", label: "Cities on the tour" },
      { value: "12K", label: "Guests through the doors" },
      { value: "3.5M", label: "Organic social reach" },
    ],
    media: ["Pop-up exterior", "Interactive station", "Guest moment"],
  },
  {
    slug: "bcg-palooza",
    company: "Solstice",
    monogram: "SO",
    title: "BCG Palooza",
    tags: ["Corporate Event", "Content Film"],
    summary:
      "A routine town hall reimagined as a full production the whole company rallied behind.",
    overview:
      "An internal celebration reimagined as a full production. We took what could have been a routine town hall and turned it into a day the whole company rallied behind — sharp staging, tight run-of-show, and a recap film that kept the energy alive long after everyone went home.",
    objective:
      "Make an internal event feel like a moment worth showing up for, and give it a life beyond the day itself.",
    execution: [
      "Handled end-to-end event design and staging",
      "Managed live show calling and run-of-show",
      "Produced a post-event recap film for internal reach",
    ],
    results: [
      { value: "1.2K", label: "Employees in the room" },
      { value: "95%", label: "Positive post-event feedback" },
      { value: "1", label: "Recap film with lasting reach" },
    ],
    media: ["Main stage", "Audience", "Recap film still"],
  },
  {
    slug: "tiny-10-salon",
    company: "Vertex",
    monogram: "VX",
    title: "Tiny 10 Salon",
    tags: ["Product Launch", "Social Campaign"],
    summary:
      "An intimate reveal wrapped in a social rollout that turned one night into weeks of talk.",
    overview:
      "Vertex was launching a new line and needed the moment to punch above its size. We built an intimate reveal for the people who mattered most, then wrapped it in a social rollout that carried the buzz well past the event.",
    objective:
      "Make a small-format launch feel big, and sustain the conversation long after the doors closed.",
    execution: [
      "Designed an invite-only launch experience",
      "Built content capture into the night",
      "Ran a rollout calendar that sustained the buzz",
    ],
    results: [
      { value: "80", label: "Hand-picked guests" },
      { value: "4 wks", label: "Of sustained conversation" },
      { value: "2.1M", label: "Social impressions" },
    ],
    media: ["Reveal moment", "Guest experience", "Content still"],
  },
  {
    slug: "global-sales-kickoff",
    company: "Meridian",
    monogram: "MD",
    title: "Global Sales Kickoff",
    tags: ["Conference Design", "Show Calling"],
    summary:
      "A multi-day kickoff for a thousand — designed, built and run without a beat dropped.",
    overview:
      "A multi-day kickoff for a room of a thousand — designed, built and run by us. Meridian needed their teams to leave aligned and fired up, so we handled everything from the set and the run-of-show to live show calling.",
    objective:
      "Keep a complex, multi-day agenda moving flawlessly while leaving a thousand people aligned and energised.",
    execution: [
      "Designed the full conference set and stage",
      "Planned multi-day run-of-show and logistics",
      "Ran live show calling for a 1,000-seat room",
    ],
    results: [
      { value: "1K", label: "Seats, run flawlessly" },
      { value: "3", label: "Days of programming" },
      { value: "0", label: "Beats dropped" },
    ],
    media: ["Conference set", "Keynote moment", "Backstage ops"],
  },
  {
    slug: "flagship-store-reveal",
    company: "Lumen",
    monogram: "LM",
    title: "Flagship Store Reveal",
    tags: ["Activation", "Films", "Performance Media"],
    summary:
      "A flagship opening the whole city noticed — activation, films and performance media.",
    overview:
      "Lumen opened a flagship and we made sure the city noticed. A street-level activation drew people in, launch films gave the story legs online, and a performance-media push kept the momentum pointed straight at footfall.",
    objective:
      "Drive real footfall to a new flagship and keep the doors busy well past opening week.",
    execution: [
      "Staged a street-level activation at the storefront",
      "Produced a launch film suite for digital channels",
      "Ran a performance-media push tuned for footfall",
    ],
    results: [
      { value: "5K+", label: "Footfall in opening week" },
      { value: "8", label: "Launch films shipped" },
      { value: "2.4x", label: "Return on media spend" },
    ],
    media: ["Storefront activation", "Launch film still", "Opening crowd"],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
