export const services = [
  {
    key: "experience-design",
    name: "Experience Design",
    description:
      "We craft immersive brand experiences that captivate audiences and leave lasting impressions. From concept to execution, our experience design team transforms spaces into storytelling environments.",
    features: [
      "Immersive Environment Design",
      "Multi-sensory Activations",
      "Spatial Storytelling",
      "Interactive Installations",
      "Festival & Venue Design",
      "Pop-up Experience Creation",
    ],
  },
  {
    key: "brand-activations",
    name: "Brand Activations",
    description:
      "We bring brands to life through high-impact activations that drive engagement and create memorable consumer connections. Every activation is designed to cut through the noise and spark real interaction.",
    features: [
      "Product Launch Events",
      "Sampling & Trial Campaigns",
      "Retail Activations",
      "On-ground Engagement",
      "Trade Shows & Exhibitions",
      "Guerrilla Marketing",
    ],
  },
  {
    key: "event-management",
    name: "Event Management",
    description:
      "End-to-end event management for brands that demand flawless execution. From intimate gatherings to large-scale productions, we handle every detail so your event delivers on every front.",
    features: [
      "Conference & Summit Management",
      "Award Ceremonies",
      "Product Launches",
      "Gala Dinners & Networking Events",
      "Venue Sourcing & Management",
      "On-site Production & Logistics",
    ],
  },
  {
    key: "luxury-experiences",
    name: "Luxury Experiences",
    description:
      "Bespoke luxury experiences crafted for premium brands and discerning audiences. We create exclusive, high-touch events that reflect the elegance and sophistication your brand demands.",
    features: [
      "Private Brand Experiences",
      "VIP & Invite-only Events",
      "Luxury Product Unveilings",
      "High-end Hospitality Events",
      "Curated Lifestyle Experiences",
      "Premium Gifting Experiences",
    ],
  },
  {
    key: "creator-collaborations",
    name: "Creator Collaborations",
    description:
      "Strategic creator and influencer collaborations that amplify your brand's reach. We connect brands with the right creators to produce authentic content and experiences that resonate.",
    features: [
      "Creator-led Brand Events",
      "Influencer Meet & Greets",
      "Content Co-creation",
      "Creator Campaign Management",
      "Community Building Events",
      "Social-first Activations",
    ],
  },
  {
    key: "content-production",
    name: "Content Production",
    description:
      "Full-service content production for brands that need compelling visual storytelling. From event documentation to campaign films, we produce content that captures the energy of every moment.",
    features: [
      "Event Documentation & Films",
      "Campaign Video Production",
      "Social Media Content",
      "Photography & Videography",
      "Post-production & Editing",
      "Live Streaming & Broadcast",
    ],
  },
  {
    key: "ip-development",
    name: "IP Development",
    description:
      "We create and scale owned intellectual properties — festivals, cultural platforms and recurring event IPs that build brand equity and become cultural touchpoints.",
    features: [
      "Festival IP Creation",
      "Cultural Platform Development",
      "Recurring Event Properties",
      "Branded Entertainment IPs",
      "Community-driven Platforms",
      "Scalable Event Formats",
    ],
  },
  {
    key: "corporate-events",
    name: "Corporate Events",
    description:
      "Professional corporate event management that balances business objectives with engaging experiences. From town halls to annual conferences, we make corporate events anything but ordinary.",
    features: [
      "Annual Conferences & Summits",
      "Town Halls & Internal Events",
      "Team Building Experiences",
      "Dealer & Channel Partner Meets",
      "Corporate Offsites",
      "Award & Recognition Ceremonies",
    ],
  },
  {
    key: "influencer-marketing",
    name: "Influencer Marketing",
    description:
      "Data-driven influencer marketing campaigns that deliver real results. We identify, engage and manage influencer partnerships that align with your brand values and drive measurable impact.",
    features: [
      "Influencer Strategy & Planning",
      "Campaign Execution & Management",
      "Influencer Events & Experiences",
      "Performance Tracking & Analytics",
      "Long-term Ambassador Programs",
      "Micro & Macro Influencer Networks",
    ],
  },
];

export const cities = [
  { key: "delhi", name: "Delhi", region: "Delhi NCR" },
  { key: "mumbai", name: "Mumbai", region: "Maharashtra" },
  { key: "bangalore", name: "Bangalore", region: "Karnataka" },
];

export type LocationService = (typeof services)[number];
export type City = (typeof cities)[number];

export function getServiceCity(slug: string) {
  for (const city of cities) {
    for (const service of services) {
      if (`${service.key}-in-${city.key}` === slug) {
        return { service, city };
      }
    }
  }
  return null;
}

export function getAllSlugs() {
  const slugs: string[] = [];
  for (const city of cities) {
    for (const service of services) {
      slugs.push(`${service.key}-in-${city.key}`);
    }
  }
  return slugs;
}
