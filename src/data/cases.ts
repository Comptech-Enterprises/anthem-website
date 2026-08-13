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
  video?: string;
};

export const cases: CaseStudy[] = [
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
    media: [],
    video: "https://anthem-videos.s3.ap-south-1.amazonaws.com/uploads/5c184b95-8d7f-47e8-b69d-b93cc22084f2.mp4",
  },
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
    media: [],
  },
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
    media: ["/projects/ARKS/1.png", "/projects/ARKS/2.png", "/projects/ARKS/3.jpeg"],
  },
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
    media: ["/projects/don-julio/1.JPG", "/projects/don-julio/2.JPG", "/projects/don-julio/3.JPG", "/projects/don-julio/4.JPG"],
  },
  {
    slug: "whisky-experiments",
    company: "Diageo India",
    monogram: "JW",
    title: "Whisky Experiments",
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
    media: [],
    video: "https://anthem-videos.s3.ap-south-1.amazonaws.com/uploads/4c9360a9-41ac-419e-9f3c-d5630f420cb7.mov",
  },
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
    media: [],
    video: "https://anthem-videos.s3.ap-south-1.amazonaws.com/uploads/6b7b0ce5-51cd-409e-b62c-308daad8f003.mp4",
  },
  {
    slug: "chambal-gin",
    company: "Bapuna",
    monogram: "CG",
    title: "Chambal Gin",
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
    media: [],
    video: "https://anthem-videos.s3.ap-south-1.amazonaws.com/uploads/1f1ef839-838f-41ad-b27b-fdf937c0c9f0.mp4",
  },
  {
    slug: "hendricks-house-of-oddities",
    company: "William Grant & Sons",
    monogram: "HG",
    title: "Hendrick's Gin — The House of Oddities",
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
    media: ["/projects/Hendrick-Gin/2.jpg", "/projects/Hendrick-Gin/1.jpg", "/projects/Hendrick-Gin/3.jpg"],
    video: "https://anthem-videos.s3.ap-south-1.amazonaws.com/uploads/2216c33b-0763-4e23-b32a-34e6f2e06e78.mp4",
  },
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
    media: [],
  },
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
    media: [],
  },
  {
    slug: "toki-dinners",
    company: "Beam Suntory",
    monogram: "TK",
    title: "Toki Dinners",
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
    media: ["/projects/Toki-Dinners/1.jpg", "/projects/Toki-Dinners/2.jpg", "/projects/Toki-Dinners/3.jpg", "/projects/Toki-Dinners/4.jpg"],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
