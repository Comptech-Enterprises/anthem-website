export type MediaMeta = {
  name: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  company: string;
  monogram: string;
  title: string;
  tags: string[];
  summary: string;
  overview: string;
  objective: string;
  execution: string[];
  results: { value: string; label: string }[];
  media: string[];
  mediaMeta?: MediaMeta[];
  video?: string | string[];
  videoMeta?: MediaMeta[];
  bgPosition?: string;
};

export const cases: CaseStudy[] = [
  // 1. World Class Festival (Cocktail Festival IP)
  {
    slug: "world-class-festival-india",
    company: "Diageo India",
    monogram: "DI",
    title: "World Class Festival India",
    tags: ["Live Event - IP"],
    summary:
      "India's premier cocktail festival and bartending competition, bringing together Diageo's premium portfolio through a large-scale celebration of cocktail culture.",
    overview:
      "India's premier cocktail festival and bartending competition, bringing together Diageo's premium portfolio through a large-scale celebration of cocktail culture.",
    objective:
      "Bring Diageo's premium portfolio under one roof for India's biggest annual cocktail showcase & competition.",
    execution: [
      "Built the campaign around the duality of competition followed by the festival",
      "Drove talkability through influencer tie-ups",
      "Developed and managed brand zones",
      "Curated artist lineup & F&B",
    ],
    results: [
      { value: "4", label: "Successful editions (2023–2026)" },
      { value: "8,000+", label: "Attendees" },
      { value: "50M+", label: "Reach" },
      { value: "55M+", label: "Impressions" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/world-class.webp"],
    mediaMeta: [
      {
        name: "World Class Festival India — Diageo India Cocktail Festival",
        alt: "World Class Festival India live cocktail festival and bartending showcase for Diageo India by Anthem",
      },
    ],
    video: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/world-class-optimized.mp4",
    videoMeta: [
      {
        name: "World Class Festival India — Official Event Aftermovie",
        alt: "Event highlight video of World Class Festival India featuring Diageo brand zones, bartenders, and live music produced by Anthem",
      },
    ],
  },
  // 2. BCG India Leadership Meet (Corporate Summit - Non-Alcohol)
  {
    slug: "bcg-india-leadership-meet",
    company: "Boston Consulting Group",
    monogram: "BCG",
    title: "BCG India — Leadership Meet, Goa",
    tags: ["Corporate Event"],
    summary:
      "A three-day leadership summit designed for BCG India's senior leadership, combining conferences, networking and celebration.",
    overview:
      "A three-day leadership summit designed for BCG India's senior leadership, combining conferences, networking and celebration.",
    objective:
      "Create a premium leadership experience that felt engaging, immersive and reflective of BCG's culture.",
    execution: [
      "Managed hotel operations end-to-end, ensuring a seamless experience for all attendees",
      "Led collateral design and fabrication across the event's physical touchpoints",
      "Oversaw all technical setups and AV production to ensure smooth event delivery",
      "Managed transitions and show runs to keep the programme seamless and on schedule",
      "Curated and managed entertainment",
    ],
    results: [
      { value: "500+", label: "Senior leaders" },
      { value: "3-day", label: "Multi-format experience" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-BCG-3.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-BCG-2.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-BCG-4.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-BCG-5.webp"],
    mediaMeta: [
      {
        name: "BCG India Leadership Meet Goa — Main Stage & Conference Setup",
        alt: "BCG India Leadership Meet main conference stage and AV production in Goa by Anthem",
      },
      {
        name: "BCG India Leadership Meet Goa — Executive Networking Experience",
        alt: "Senior leaders networking during the three-day BCG India Leadership Meet in Goa",
      },
      {
        name: "BCG India Leadership Meet Goa — Branded Event Collaterals",
        alt: "Custom event fabrication and branded spatial touchpoints at BCG India Leadership Meet Goa",
      },
      {
        name: "BCG India Leadership Meet Goa — Evening Entertainment & Gala",
        alt: "Curated evening entertainment and gala experience at BCG India Leadership Meet in Goa",
      },
    ],
  },
  // 3. Don Julio (Tequila IP)
  {
    slug: "don-julio-cinco-on",
    company: "Diageo India",
    monogram: "DJ",
    title: "Don Julio — Cinco On With Don",
    tags: ["Brand IP"],
    summary:
      "A multi-city experiential platform celebrating Cinco de Mayo while strengthening Don Julio's cultural relevance in India.",
    overview:
      "A multi-city experiential platform celebrating Cinco de Mayo while strengthening Don Julio's cultural relevance in India.",
    objective:
      "Create brand awareness and own the Mexican holiday of Cinco de Mayo in India through impactful brand activations and events.",
    execution: [
      "Designed and executed a multi-city activation strategy to build momentum across markets",
      "Built the journey towards a flagship event that brought together culture, fashion, creators and premium hospitality",
      "Curated the overall experience to create talkability and brand engagement across the activation",
    ],
    results: [
      { value: "3", label: "Successful editions" },
      { value: "2,000+", label: "Attendees" },
      { value: "5M+", label: "Reach (2026)" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-don-julio-1.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-don-julio-2.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-don-julio-3.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-don-julio-4.webp"],
    mediaMeta: [
      {
        name: "Don Julio Cinco On With Don — Flagship Celebration",
        alt: "Don Julio Cinco de Mayo flagship experiential event and brand setup by Anthem",
      },
      {
        name: "Don Julio Cinco On With Don — Multi-City Brand Activation",
        alt: "Guests enjoying curated Don Julio tequila experiences at Cinco On With Don",
      },
      {
        name: "Don Julio Cinco On With Don — Culture & Fashion Guests",
        alt: "Creators and attendees celebrating Cinco de Mayo at Don Julio's experiential IP in India",
      },
      {
        name: "Don Julio Cinco On With Don — Luxury Hospitality Experience",
        alt: "Bespoke bar and immersive lighting installation for Don Julio Cinco On With Don",
      },
    ],
  },
  // 4. ARKS Store Launch (Fashion / Retail Launch - Non-Alcohol)
  {
    slug: "arks-store-launch",
    company: "ARKS",
    monogram: "AK",
    title: "ARKS: A Ranbir Kapoor Studio",
    tags: ["Store Launch Event"],
    summary:
      "Launch of ARKS' flagship store through an immersive brand experience that reflected the label's philosophy of quiet confidence.",
    overview:
      "Launch of ARKS' flagship store through an immersive brand experience that reflected the label's philosophy of quiet confidence.",
    objective:
      "Unveil the ARKS flagship store at DLF Avenue, Saket, through an immersive launch experience that brought the brand's philosophy of quiet confidence and individuality to life.",
    execution: [
      "Oversaw end-to-end event production and operations to ensure seamless execution",
      "Curated the guest experience, from arrival through the event journey",
      "Managed celebrity movement and management throughout the launch experience",
      "Designed and executed interactive installations to drive engagement",
      "Managed F&B curation and execution as part of the overall experience",
    ],
    results: [
      { value: "1", label: "Flagship store launch in Delhi" },
      { value: "5,000+", label: "People queued for the launch" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-ARKS-1.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-ARKS-2.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-ARKS-3.webp"],
    mediaMeta: [
      {
        name: "ARKS Flagship Store Launch — DLF Avenue Saket",
        alt: "ARKS by Ranbir Kapoor flagship store launch event and crowd experience at DLF Avenue Saket",
      },
      {
        name: "ARKS Flagship Store Launch — Interactive Brand Installations",
        alt: "Immersive retail installation and minimalist studio space at the ARKS store launch in New Delhi",
      },
      {
        name: "ARKS Flagship Store Launch — Guest Experience & Reveal",
        alt: "Attendees exploring the ARKS flagship store launch curated by Anthem",
      },
    ],
  },
  // 5. Johnnie Walker Whisky Experiments (Whisky IP)
  {
    slug: "whisky-experiments",
    company: "Diageo India",
    monogram: "JW",
    title: "Johnnie Walker Black Label Whisky Experiments",
    tags: ["Brand IP"],
    summary:
      "A year-long experiential platform designed to reposition Johnnie Walker Black Label within India's evolving cocktail culture.",
    overview:
      "A year-long experiential platform designed to reposition Johnnie Walker Black Label within India's evolving cocktail culture.",
    objective:
      "Drive cultural relevance and make Johnnie Walker Black Label more discoverable through modern cocktail experiences.",
    execution: [
      "Built a 365-day campaign to strengthen Johnnie Walker Black Label's relevance",
      "Developed collaborations and partnerships across key cultural platforms",
      "Activated bar partnerships to drive the brand's presence within cocktail culture",
      "Created large-scale events and consumer activations across the year",
    ],
    results: [
      { value: "500+", label: "Outlets activated" },
      { value: "50+", label: "Activations" },
      { value: "5", label: "Large-scale events" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/whisky-experiments.webp"],
    mediaMeta: [
      {
        name: "Johnnie Walker Black Label Whisky Experiments — Cocktail Culture IP",
        alt: "Johnnie Walker Black Label Whisky Experiments cocktail activation and bar collaboration by Anthem",
      },
    ],
    video: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/whisky-experiments-optimized.mp4",
    videoMeta: [
      {
        name: "Johnnie Walker Black Label Whisky Experiments — Campaign Film",
        alt: "Highlight video of Johnnie Walker Black Label Whisky Experiments experiential activations across Indian bars",
      },
    ],
  },
  // 6. Curator Circle (Recruitment / Culture Event - Non-Alcohol)
  {
    slug: "curator-circle",
    company: "Diageo India",
    monogram: "CC",
    title: "Curator Circle",
    tags: ["Corporate Event"],
    summary:
      "A culture-first hiring experience that reimagined traditional recruitment for Diageo India.",
    overview:
      "A culture-first hiring experience that reimagined traditional recruitment for Diageo India.",
    objective:
      "Help Diageo India discover their next set of Culture & Community Curators.",
    execution: [
      "End-to-end event production and on-ground execution",
      "Program planning and experience curation",
      "F&B planning and management",
      "Jury coordination and management",
      "Finalist coordination and guest management",
      "On-ground staffing and event operations",
    ],
    results: [
      { value: "13", label: "Finalists" },
      { value: "3", label: "Culture Maestros" },
      { value: "Hired", label: "Culture & Community Curators for Diageo India" },
    ],
    media: [
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/curator-circle-1.webp",
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/curator-circle-2.webp",
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/curator-circle-3.webp",
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/curator-circle-4.webp",
    ],
    mediaMeta: [
      {
        name: "Curator Circle Diageo India — Culture Hiring Experience",
        alt: "Diageo India Curator Circle culture-first recruitment event produced by Anthem",
      },
      {
        name: "Curator Circle Diageo India — Jury & Finalists Session",
        alt: "Finalists presenting to the jury panel during Diageo India's Curator Circle event",
      },
      {
        name: "Curator Circle Diageo India — Community & Hospitality Curation",
        alt: "Curated F&B and interactive experience setup at Diageo India Curator Circle",
      },
      {
        name: "Curator Circle Diageo India — Culture Maestros Finale",
        alt: "Culture and Community Curators finalists and winners at Diageo India Curator Circle",
      },
    ],
  },
  // 7. Chambal Gin (Gin Brand Activation)
  {
    slug: "chambal-gin",
    company: "Bapuna",
    monogram: "CG",
    title: "Chambal Gin Launch",
    tags: ["Brand Activation"],
    summary:
      "Chambal Gin's launch designed as an immersive brand experience that brought the spirit and untamed flavours of the Chambal ravines to life.",
    overview:
      "Chambal Gin's launch designed as an immersive brand experience that brought the spirit and untamed flavours of the Chambal ravines to life.",
    objective:
      "Capture the essence of the mystical Chambal ravines while creating a rich, immersive Indian gin-sipping experience.",
    execution: [
      "Designed the space with earthy layers, decor and props inspired by the brand's spirit",
      "Brought Chambal's untamed flavours to life through an evening of indulgence",
      "Introduced intimate theatrical experiences and games to create memorable moments while staying true to the brand's essence",
    ],
    results: [
      { value: "70+", label: "Content creators invited" },
      { value: "1", label: "End-to-end execution" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/chambal-launch.webp"],
    mediaMeta: [
      {
        name: "Chambal Gin Launch — Immersive Brand Experience",
        alt: "Chambal Gin launch event featuring earthy ravine-inspired decor and gin tasting by Anthem",
      },
    ],
    video: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/chambal-gin-optimized.mp4",
    videoMeta: [
      {
        name: "Chambal Gin Launch — Event Film",
        alt: "Launch film of Chambal Gin brand activation showcasing theatrical guest experiences and creator attendance",
      },
    ],
  },
  // 8. Hiring Campaign (Digital Talent / Campaign - Non-Alcohol)
  {
    slug: "hiring-campaign-diageo-india",
    company: "Diageo India",
    monogram: "HC",
    title: "Hiring Campaign for Diageo India",
    tags: ["Digital Campaign"],
    summary:
      "A digital campaign designed to help Diageo India discover the people shaping culture and community around them.",
    overview:
      "A digital campaign designed to help Diageo India discover the people shaping culture and community around them.",
    objective:
      "Drive awareness and applications for Diageo India's search for its next Culture & Community Curators.",
    execution: [
      "Developed the campaign concept and creative direction",
      "End-to-end digital campaign production",
      "Campaign rollout and amplification",
      "Content designed to identify and attract culture-forward talent",
    ],
    results: [
      { value: "Pan-India", label: "Campaign reach" },
      { value: "10M+", label: "Social reach" },
      { value: "1000+", label: "Entries" },
      { value: "13", label: "Finalists identified" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/hiring-campaign.webp"],
    mediaMeta: [
      {
        name: "Diageo India Hiring Campaign — Culture & Community Curators",
        alt: "Digital hiring campaign key visual for Diageo India Culture & Community Curators by Anthem",
      },
    ],
    video: [
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/hiring-campaign-1-optimized.mp4",
      "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/hiring-campaign-2-optimized.mp4",
    ],
    videoMeta: [
      {
        name: "Diageo India Hiring Campaign — Launch Film",
        alt: "Digital campaign film 1 for Diageo India's pan-India Culture & Community Curators talent search",
      },
      {
        name: "Diageo India Hiring Campaign — Culture Creators Film",
        alt: "Digital campaign film 2 spotlighting culture-forward creators for Diageo India's hiring campaign",
      },
    ],
  },
  // 9. Black & White Table For Everyone (Dining & Connection)
  {
    slug: "black-and-white-table-for-everyone",
    company: "Diageo India",
    monogram: "BW",
    title: "Black & White — Table For Everyone",
    tags: ["Brand IP"],
    summary:
      "A conversation-led dining experience designed to build meaningful connections around the Black & White brand.",
    overview:
      "A conversation-led dining experience designed to build meaningful connections around the Black & White brand.",
    objective:
      "Create talkability, increase ROIs and brand salience with a GenZ & young Millennial audience.",
    execution: [
      "Created intimate dining experiences designed around the brand's world",
      "Curated food and dining experiences to complement each gathering",
      "Introduced interactive conversation formats to encourage meaningful engagement",
      "Created a relaxed setting that encouraged genuine conversations and connections",
    ],
    results: [
      { value: "350+", label: "Editions" },
      { value: "6,000+", label: "Attendees" },
      { value: "2023–", label: "Running successfully since" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/table-for-everyone.webp"],
    mediaMeta: [
      {
        name: "Black & White Table For Everyone — Conversation-Led Dining IP",
        alt: "Guests sharing dinner and conversation at Black & White Table For Everyone experiential IP by Anthem",
      },
    ],
    video: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/black-white-optimized.mp4",
    videoMeta: [
      {
        name: "Black & White Table For Everyone — Experience Film",
        alt: "Video recap of Black & White Table For Everyone intimate dining experiences across India",
      },
    ],
    bgPosition: "object-top",
  },
  // 10. The House of Oddities (Hendrick's Gin)
  {
    slug: "hendricks-house-of-oddities",
    company: "William Grant & Sons",
    monogram: "HG",
    title: "The House of Oddities",
    tags: ["Brand Activation"],
    summary:
      "A surreal, whimsical brand experience in Mumbai designed to welcome Hendrick's global ambassador and immerse guests in the eccentric world of Hendrick's.",
    overview:
      "A surreal, whimsical brand experience in Mumbai designed to welcome Hendrick's global ambassador, Ally Martin, and immerse guests in the eccentric world of Hendrick's.",
    objective:
      "Host a unique experience for the global ambassador's India visit while immersing attendees in Hendrick's distinctive and whimsical brand world.",
    execution: [
      "Took over Love Fools in Bandra, Mumbai, transforming the space into the House of Oddities",
      "Created a world filled with eccentric characters, quirky décor and curated tables",
      "Curated F&B and music to bring the experience to life",
      "Designed an immersive environment filled with spells, secrets, puzzles and missions inspired by the brand's world",
    ],
    results: [
      { value: "80+", label: "Media, PR & top HNIs" },
      { value: "1", label: "Mumbai experience" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-Hendrick-Gin-2.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-Hendrick-Gin-1.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-Hendrick-Gin-3.webp"],
    mediaMeta: [
      {
        name: "Hendrick's Gin House of Oddities — Mumbai Brand Activation",
        alt: "Surreal House of Oddities experience for Hendrick's Gin at Love Fools in Bandra, Mumbai",
      },
      {
        name: "Hendrick's Gin House of Oddities — Immersive Decor & Characters",
        alt: "Whimsical decor, eccentric characters, and curated tables inside Hendrick's House of Oddities",
      },
      {
        name: "Hendrick's Gin House of Oddities — Global Ambassador Experience",
        alt: "Guests experiencing puzzles, secrets, and curated cocktails at Hendrick's House of Oddities Mumbai",
      },
    ],
  },
  // 11. Por Amor Potluck (Creator Series)
  {
    slug: "por-amor-potluck-don-julio",
    company: "Diageo India",
    monogram: "PA",
    title: "Por Amor Potluck x Don Julio",
    tags: ["Digital Campaign - Influencer"],
    summary:
      "A creator-led digital series celebrating shared meals, meaningful conversations and togetherness through the spirit of Por Amor.",
    overview:
      "A creator-led digital series celebrating shared meals, meaningful conversations and togetherness through the spirit of Por Amor.",
    objective:
      "Build cultural relevance for Don Julio Grapefruit Soda through authentic creator storytelling.",
    execution: [
      "Partnered with leading creators to bring the experience to life through intimate potlucks",
      "Built creator-led content around food, togetherness and shared experiences",
      "End-to-end influencer management & coordination",
    ],
    results: [
      { value: "5.5M+", label: "Reach" },
      { value: "5M+", label: "Views" },
      { value: "110K+", label: "Engagement" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/por-amor.webp"],
    mediaMeta: [
      {
        name: "Por Amor Potluck x Don Julio — Creator Digital Series",
        alt: "Creator-led Por Amor Potluck dinner collaboration with Don Julio Grapefruit Soda by Anthem",
      },
    ],
    video: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/naina-bhan-don-julio-optimized.mp4",
    videoMeta: [
      {
        name: "Por Amor Potluck x Don Julio — Creator Campaign Video",
        alt: "Creator storytelling video from Por Amor Potluck with Don Julio Grapefruit Soda featuring Naina Bhan",
      },
    ],
    bgPosition: "object-top",
  },
  // 12. Serious Eaters Club Dinners (Dining & Toki Whisky)
  {
    slug: "toki-dinners",
    company: "Beam Suntory",
    monogram: "TK",
    title: "Serious Eaters Club Dinners",
    tags: ["Digital Campaign"],
    summary:
      "A curated dining series by Food Talk India celebrating bold cuisine and storytelling, with Toki Whisky seamlessly integrated into the experience.",
    overview:
      "A curated dining series by Food Talk India celebrating bold cuisine and storytelling, with Toki Whisky seamlessly integrated into the experience.",
    objective:
      "Position Toki as an integral part of memorable dining experiences rather than simply a beverage served alongside them.",
    execution: [
      "Developed a ticketed dining format designed to create a distinctive brand experience",
      "Curated unique culinary concepts for each dining experience",
      "Built immersive storytelling into the overall guest journey",
      "Integrated the brand naturally across the dining experience, from start to finish",
    ],
    results: [
      { value: "4", label: "Outlets activated" },
      { value: "10.5M+", label: "Social reach" },
      { value: "180+", label: "Attendees" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/serious-eaters-club-1.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-Toki-Dinners-2.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-Toki-Dinners-3.webp", "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/projects-Toki-Dinners-4.webp"],
    mediaMeta: [
      {
        name: "Serious Eaters Club Dinners x Toki Whisky — Culinary Experience",
        alt: "Serious Eaters Club curated dining experience featuring Suntory Toki Whisky by Food Talk India and Anthem",
      },
      {
        name: "Serious Eaters Club Dinners — Bespoke Dining Table",
        alt: "Ticketed dining setup and immersive table curation for Serious Eaters Club x Toki Whisky",
      },
      {
        name: "Serious Eaters Club Dinners — Highball & Cuisine Pairing",
        alt: "Toki Whisky highball pairings served alongside bold culinary courses at Serious Eaters Club",
      },
      {
        name: "Serious Eaters Club Dinners — Community Gathering",
        alt: "Guests enjoying storytelling and fine dining at Serious Eaters Club Dinners",
      },
    ],
  },
  // 13. Roku Gin (Japanese Craft / Nature IP)
  {
    slug: "roku-gin-come-alive",
    company: "Beam Suntory",
    monogram: "RG",
    title: "Roku Gin: Come Alive With The Seasons",
    tags: ["Digital Campaign"],
    summary:
      "A premium, nature-led experiential IP rooted in Japanese craft and culture, bringing Roku Gin's philosophy to life through immersive experiences.",
    overview:
      "A premium, nature-led experiential IP rooted in Japanese craft and culture, bringing Roku Gin's \"Come Alive with the Seasons\" philosophy to life through immersive experiences.",
    objective:
      "Create a culturally relevant, high-energy campaign that translated seamlessly from digital to on-ground experiences.",
    execution: [
      "Created a ticketed, repeatable and scalable format designed for deployment across key metro markets",
      "Built a social-first experience amplified through high-quality, organic content",
      "Curated immersive activities including Japanese ink art, moss terrarium building and Ikebana",
      "Activated the experience across Delhi, Mumbai and Bengaluru",
    ],
    results: [
      { value: "10", label: "Influencers activated" },
      { value: "7M+", label: "Reach" },
      { value: "8M+", label: "Views" },
      { value: "600K+", label: "Engagement" },
    ],
    media: ["https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/roku-gin.webp"],
    mediaMeta: [
      {
        name: "Roku Gin Come Alive With The Seasons — Japanese Craft Experience",
        alt: "Roku Gin Come Alive With The Seasons Japanese craft workshop and sensory activation by Anthem",
      },
    ],
    video: "https://pub-c591ee037cf34224a3fb5b70122e4a59.r2.dev/uploads/roku-gin-optimized.mp4",
    videoMeta: [
      {
        name: "Roku Gin Come Alive With The Seasons — Campaign Film",
        alt: "Experiential campaign film for Roku Gin featuring Japanese ink art, terrarium building, and Ikebana across Delhi, Mumbai, and Bengaluru",
      },
    ],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
