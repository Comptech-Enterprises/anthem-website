export interface FAQItem {
  q: string;
  a: string;
  links?: { text: string; href: string }[];
}

export const careersFAQs: FAQItem[] = [
  {
    q: "What roles does Anthem hire for across India?",
    a: "Anthem onboards talent across five principal pillars: Experiential & Event Production (experiential producers, technical directors, and staging managers), Creative Strategy & Design (art leads, 3D visualizers, copywriters, and visual designers), Digital & Creator Marketing (influencer specialists, content creators, and meme strategists via Anthem Amplify), Client Servicing & Account Management (brand partners and project directors), along with IP Operations (festival coordinators for proprietary ventures like Explorers Club).",
  },
  {
    q: "Where are Anthem team members located, and is work remote or on-site?",
    a: "Headquartered in Delhi NCR (Chhatarpur, New Delhi) with a robust operating footprint in Mumbai, Anthem directs execution crews pan-India. Given that core activations involve physical fabrication, on-site event execution, and experiential setups across 30+ cities, technical and production positions are based on-ground. Strategic planning, digital marketing, and design disciplines operate on a hybrid workflow anchored out of our Delhi NCR and Mumbai offices.",
  },
  {
    q: "What is work culture and team size at Anthem?",
    a: "Established in 2014 by Shuchir Suri and Anjali Batra, Anthem operates with a 30+ member team of strategists, experiential producers, and digital marketers. The agency fosters high-ownership execution where creative concepts move rapidly into live activations. Team members get direct exposure across integrated campaigns-ranging from executive corporate meets for BCG to large-scale 100,000+ attendee culture festivals.",
  },
  {
    q: "What brands and projects do employees work on at Anthem?",
    a: "Team members drive work for 80+ brands across 9+ industry verticals. Key accounts include Diageo, Don Julio, Johnnie Walker, Tanqueray, Boston Consulting Group (BCG), and ARKS by Ranbir Kapoor. Our talent also spearheads internal proprietary assets: Food Talk India (culinary culture platform) and Explorers Club (lifestyle IP across Delhi, Mumbai, and Bengaluru).",
  },
  {
    q: "Does Anthem hire for digital and creator marketing roles under Anthem Amplify?",
    a: "Yes. Anthem Amplify serves as our dedicated digital, creator, and content arm. We bring on digital-native talent for brand ambassador networks, creator seeding, short-form video production, culture-page distribution, and viral meme marketing-extending physical activations into the digital ecosystem.",
  },
  {
    q: "Does Anthem offer internships and entry-level roles for freshers?",
    a: "Yes. We run 3-to-6 month internship programs across experiential production, social media strategy, event management, and creative design. Interns execute live brand briefs and on-ground activations, with high performers transitioning into full-time roles.",
  },
  {
    q: "What is hiring and interview process at Anthem?",
    a: "Our recruitment process follows four structured stages: 1. Portfolio Submission - Submit your CV and case study deck to hr@theanthem.in. 2. Initial Review - Our team reviews materials and connects within 7 business days. 3. Practical Task - Candidates complete a practical brief (spatial layout, campaign idea, or creator plan). 4. Leadership Interview - Final interview with co-founders and department leads.",
  },
  {
    q: "What specific skills and qualifications does Anthem prioritize?",
    a: "We prioritize practical execution experience over traditional qualifications. Core competencies include: proven experience in live event management, creative problem-solving under tight deadlines, budget management for physical setups, aesthetic design standards for premium clients, and an intuitive pulse on Indian culture.",
  },
];

export const caseStudyFAQs: Record<string, FAQItem[]> = {
  "world-class-festival-india": [
    {
      q: "What is World Class Festival India?",
      a: "World Class Festival India serves as the country’s premier mixology competition and cocktail culture platform, established globally by Diageo. Executed end-to-end by Anthem across four consecutive editions (2023–2026), this multi-day venture convenes 8,000+ cocktail enthusiasts, master mixologists, artisan culinary pop-ups, and live entertainment performances into a unified experiential ecosystem.",
    },
    {
      q: "What happens at the World Class Festival?",
      a: "The experience operates across two primary tracks: The National Competition - Top mixologists across India go head-to-head in technical cocktail challenges to secure the national title and represent India at global finals. The Cultural Experience - Attendees explore custom brand environments, international guest bartender masterclasses, tasting flights, curated food concepts, and live music stages designed and fabricated by Anthem.",
    },
    {
      q: "Which spirits brands are featured at World Class Festival India?",
      a: "The festival highlights Diageo’s Reserve and luxury portfolio. Guests engage with bespoke spatial environments and signature serves from premier labels including Don Julio (tequila), Tanqueray (gin), Johnnie Walker (Scotch whisky), and The Singleton (single malt).",
    },
    {
      q: "Who can attend World Class Festival India, and how does entry work?",
      a: "The festival opens its doors to hospitality industry professionals and cocktail enthusiasts of legal drinking age. Access is managed via curated registration platforms, providing pass holders entry to competition stages, brand lounges, tasting workshops, and live entertainment. Across four editions, Anthem has overseen ticketing, guest management, and ground operations for 8,000+ attendees.",
    },
    {
      q: "How many editions of World Class Festival have been held in India?",
      a: "Four editions have taken place between 2023 and 2026, scaling rapidly in scope and turnout. The platform has garnered 50M+ social media reach alongside 55M+ earned PR impressions, establishing itself among India’s premier branded lifestyle properties.",
    },
    {
      q: "Who produces and executes World Class Festival in India?",
      a: "World Class Festival India is produced end-to-end by Anthem, an integrated creative and experiential marketing agency headquartered in Delhi NCR with an active operational presence in Mumbai. Anthem directs the full lifecycle for Diageo India-encompassing creative strategy, spatial architecture, stage fabrication, talent management, F&B curation, and live execution.",
    },
  ],
  "bcg-india-leadership-meet": [
    {
      q: "What was the BCG India Leadership Meet in Goa and what made it unique?",
      a: "The BCG India Leadership Meet served as a premier 3-day executive retreat conceptualized for 500+ senior leaders and partners of Boston Consulting Group (BCG) India. Anthem directed the venture end-to-end as an integrated leadership experience, uniting plenary keynote sessions, interactive strategy tracks, custom spatial architecture, resort operations, recognition galas, and live music stages.",
    },
    {
      q: "Is Anthem a top corporate event company in Delhi NCR for large enterprise meets?",
      a: "Yes. Headquartered in Delhi NCR with a 12-year operational footprint, Anthem ranks among the premier corporate event management companies in India. The team routinely executes multi-day enterprise gatherings-such as the BCG Palooza leadership retreat in Goa for 500+ attendees-overseeing hospitality logistics, complex AV setups, stage fabrication, and live run-of-show execution.",
    },
    {
      q: "How does Anthem plan and manage corporate parties, annual days, and executive galas?",
      a: "Alongside daytime strategic conferences, Anthem creates custom corporate parties, annual celebrations, and awards galas. For enterprise partners like BCG India, the agency designs immersive environments incorporating thematic spatial decor, architectural lighting setups, premium culinary direction, headline artist programming, and seamless stage governance.",
    },
    {
      q: "What makes Anthem one of the best corporate event planners in Delhi for destination offsites?",
      a: "Anthem delivers turnkey destination offsites across India. Backed by a portfolio of 150+ brand experiences across 30+ cities, the agency coordinates pan-India offground operations in hubs like Goa, Jaipur, and Udaipur-handling travel logistics, 5-star venue management, staging, technical setups, and evening entertainment setups.",
    },
    {
      q: "Can Anthem handle large-scale corporate events with 500+ attendees?",
      a: "Absolutely. Anthem maintains production capabilities structured for high-capacity gatherings ranging from 500 to over 5,000 guests. Demonstrating this operational scale, the BCG India Leadership Meet convened 500+ corporate leaders across three days of multi-track keynotes, break-out workshops, and evening entertainment setups.",
    },
    {
      q: "What services do corporate event management companies like Anthem provide?",
      a: "Full-scope corporate event production encompasses five core execution pillars: 1. Concept & Spatial Design - 3D visual setups, custom stage fabrication, and branded environment integration. 2. Technical AV & Lighting - High-definition LED backdrops, acoustic sound engineering, and multi-camera live broadcast setups. 3. Hospitality & Hotel Operations - Five-star venue sourcing, room allocation logistics, VIP ground transport, and guest management. 4. Run-of-Show Direction - Stage management, keynote teleprompter operations, speaker timing, and execution governance. 5. Corporate Parties & Entertainment - Live artist curation, custom bar setups, and themed awards galas.",
    },
    {
      q: "How can companies in Delhi NCR, Mumbai, or Bengaluru hire Anthem for corporate events?",
      a: "Corporate marketing, HR, and procurement leads can initiate project briefs directly at theanthem.in/#enquiry or by connecting with our primary hubs in Delhi NCR (Chhatarpur) and Mumbai. Anthem submits comprehensive proposals featuring spatial renders, technical AV breakdowns, venue options, and itemized execution estimates for pan-India events.",
    },
  ],
  "don-julio-cinco-on": [
    {
      q: "What does a brand activation agency do in India?",
      a: "A brand activation agency conceptualizes, designs, and executes experiential platforms that translate core brand strategy into live consumer engagement. Moving beyond passive advertising touchpoints, activations establish direct audience interaction through physical setups-including bespoke retail pop-ups, multi-city roadshows, high-fashion collaborations, and proprietary brand IPs. Agencies like Anthem direct complete execution lifecycles encompassing spatial architecture, guest-list management, artist programming, and digital amplification through Anthem Amplify.",
    },
    {
      q: "What is a Brand IP, and why should companies invest in proprietary assets?",
      a: "A Brand IP (Intellectual Property) represents a recurring, branded experiential property or cultural platform fully conceptualized and owned by an enterprise rather than sponsoring third-party events. Developing proprietary IP-such as Diageo India’s Cinco On With Don for Don Julio or World Class Festival-allows organizations to build long-term brand equity, control creative expression, gather first-party consumer engagement, and transform transactional event spend into compounding cultural equity.",
    },
    {
      q: "Which is the top brand activations agency in Delhi NCR for luxury brands?",
      a: "Anthem is widely recognized among premier brand activation and experiential communication agencies across Delhi NCR. Operating out of Chhatarpur, New Delhi with operational teams in Mumbai, Anthem specializes in immersive activations, experiential IP creation, luxury retail pop-ups, and live consumer engagements. The agency executes nationwide setups for global alcobev and luxury leaders, including Diageo India (Don Julio, Tanqueray, Johnnie Walker), Beam Suntory (Roku Gin), and BCG.",
    },
    {
      q: "How do agencies execute multi-city brand activation rollouts across India?",
      a: "Multi-city activations rely on structured, tiered execution frameworks that balance high-impact flagship events with widespread market penetration. In executing the Cinco On With Don campaign for Don Julio, Anthem deployed a proprietary 1-9-45 activation model: 1 flagship cultural festival, 9 tier-1 experiential venue takeovers across major metros, and 45 on-premise partner touchpoints paired with creator seeding.",
    },
    {
      q: "How do activation agencies leverage fashion and creator collaborations for luxury brands?",
      a: "Experiential agencies partner with prominent cultural leaders, designers, and tastemakers to anchor brand experiences within contemporary lifestyle conversations. For the Don Julio Cinco de Mayo platform, Anthem drove a landmark luxury collaboration featuring couture designer Anamika Khanna. Combining high-fashion aesthetic design, Mexican-inspired luxury decor, curated mixology, and high-net-worth guest management, the activation placed Don Julio at the intersection of luxury craftsmanship, fashion, and lifestyle culture.",
    },
    {
      q: "How do brands measure the ROI and success of brand activations?",
      a: "Experiential ROI is measured across qualitative brand positioning shifts and concrete quantitative metrics: Footfall & Audience Profile (2,000+ curated guests across editions for Cinco On With Don), Digital & Social Reach (5M+ organic digital reach in 2026), Brand IP Longevity (3 consecutive annual editions from 2024 to 2026), and Commercial Uplift (on-premise sales velocity and partner venue distribution gains).",
    },
    {
      q: "What was Anthem's role in the Don Julio “Cinco On With Don” brand activation?",
      a: "Anthem was commissioned by Diageo India as the turnkey experiential and brand activation agency for Don Julio’s Cinco On With Don platform. Anthem designed and executed a multi-year brand IP crafted to establish Don Julio’s cultural leadership over Mexico’s Cinco de Mayo holiday in India. The project covered strategic roadmap design (1-9-45 model), the Don Julio x Anamika Khanna luxury fashion partnership, flagship festival production, artist programming, bespoke agave mixology curation, and VIP guest management-delivering 3 annual editions (2024–2026), 2,000+ attendees, and 5M+ digital reach in 2026.",
    },
  ],
  "arks-store-launch": [
    {
      q: "What retail launch services does Anthem provide as an experiential marketing agency?",
      a: "Anthem delivers turnkey retail launch and brand activation services across India, covering spatial concept design, dramatic reveal staging, celebrity management, guest curation, mall licensing, and crowd operations. For the launch of ARKS (A Ranbir Kapoor Studio) at DLF Avenue Saket, New Delhi, Anthem orchestrated end-to-end event production, a live fireside chat, an interactive matcha bar, and safe crowd logistics for over 5,000 attendees.",
    },
    {
      q: "How does an experiential agency manage large crowds and celebrity appearances at mall store launches?",
      a: "Managing high-profile celebrity store launches in premium shopping centres requires multi-tier security zoning, mall authority coordination, and frictionless guest flow. For Ranbir Kapoor’s ARKS flagship launch at DLF Avenue Saket, Anthem deployed dedicated VIP arrival corridors, zoned security barricading, staged queueing for 5,000+ public fans, and private invite-only preview access to ensure guest safety without compromising brand intimacy.",
    },
    {
      q: "Why is Delhi NCR a primary hub for luxury brand launches and flagship retail activations?",
      a: "Delhi NCR offers premier high-density luxury retail destinations like DLF Avenue Saket, DLF Emporio, and The Chanakya, attracting India’s most discerning consumer demographic. Leading experiential marketing agencies like Anthem headquartered in Chhatarpur, New Delhi leverage localized operational expertise, fast-track mall venue licensing, and established celebrity and media networks to deliver flagship retail activations that command national reach.",
    },
    {
      q: "How do interactive brand touchpoints translate a label’s philosophy into consumer experiences?",
      a: "Interactive touchpoints bridge abstract brand values into physical consumer memory. For ARKS’ philosophy of quiet confidence and individuality, Anthem avoided generic promotional booths, instead engineering custom tactile brand installations: an artisan matcha bar reflecting contemporary lifestyle culture, a bespoke foosball lounge for playful interaction, and a dramatic architectural lighting reveal that spotlighted the apparel collection.",
    },
    {
      q: "What metrics determine the success of a flagship retail store launch event?",
      a: "A successful flagship store launch is evaluated across three performance pillars: Footfall & Operational Scale (managing 5,000+ queued attendees safely), Cultural & Earned Media Reach (organic creator impressions, tier-1 press coverage, and celebrity amplification), and Commercial Conversion (immediate footfall conversion and opening-week retail revenue).",
    },
    {
      q: "What was Anthem’s role in the ARKS by Ranbir Kapoor flagship store launch?",
      a: "Anthem functioned as the end-to-end experiential marketing, production, and operations partner for the ARKS flagship store unveiling at DLF Avenue Saket in Delhi (2025). Anthem was responsible for launch concept ideation, dramatic lighting reveal engineering, fireside chat stage production with Ranbir Kapoor, F&B curation, interactive activity zones, and managing logistics for over 5,000 attendees.",
    },
  ],
  "whisky-experiments": [
    {
      q: "What experiential marketing agency led Johnnie Walker Black Label’s Whisky Experiments campaign in India?",
      a: "Anthem, an integrated creative and experiential marketing agency headquartered in Delhi NCR with offices in Mumbai, conceptualised and executed the year-long Johnnie Walker Black Label ‘Whisky Experiments’ platform for Diageo India. The campaign repositioned the iconic Scotch whisky into contemporary cocktail culture across 500+ activated on-trade outlets, 50+ bespoke activations, and 5 large-scale experiential events.",
    },
    {
      q: "How does an integrated brand campaign reposition a heritage spirits brand for modern consumers?",
      a: "Repositioning a heritage spirits brand requires shifting consumer perception from traditional consumption to contemporary culture. For Johnnie Walker Black Label, Anthem deployed a 365-day experiential framework that moved beyond conventional serve formats. By embedding the brand into urban cocktail culture, partnering with 50 top cocktail bars, and producing immersive consumer-led events, the campaign drove fresh consideration and sustained cultural relevance among younger legal-drinking-age consumers.",
    },
    {
      q: "What services does Anthem provide for nationwide on-trade bar activations and cocktail festivals in India?",
      a: "Anthem provides full-service nationwide on-trade execution, including on-premise bar tie-ups, menu co-creation, bespoke serveware development, mixologist collaborations, staff training, high-impact bar installations, compliance navigation, and digital-to-offline footfall amplification. Anthem’s network spans over 50 leading cocktail bars and 500+ high-energy nightlife outlets across Delhi NCR, Mumbai, Bengaluru, and other metro markets.",
    },
    {
      q: "How does Anthem measure ROI and consumer engagement for a 365-day brand campaign?",
      a: "Anthem tracks multifaceted ROI benchmarks across on-ground trial, distribution penetration, and cultural amplification. For Johnnie Walker Whisky Experiments, success was measured through 500+ retail and bar outlets activated, 50+ targeted experiential consumer activations, 5 flagship large-scale cultural events, incremental cocktail serve volume, and multi-channel earned media engagement generated through creator collaborations and digital storytelling.",
    },
    {
      q: "Why should enterprise brands choose a Delhi NCR-based agency for pan-India experiential activations?",
      a: "Based out of Chhatarpur, New Delhi, with active production hubs in Mumbai and pan-India reach, Anthem combines strategic brand consulting with in-house design fabrication, regulatory expertise, and turnkey event operations. Anthem has delivered over 150+ brand experiences across 30+ Indian cities for global leaders including Diageo, Beam Suntory, Brown-Forman, and Boston Consulting Group.",
    },
    {
      q: "What is the difference between a one-off brand activation and a 365-day brand IP framework?",
      a: "A single brand activation delivers a temporary spike in visibility, whereas a 365-day brand IP framework establishes sustained cultural equity, continuous retail and bar momentum, and recurring consumer touchpoints. Anthem builds annual campaign engines-like Whisky Experiments for Diageo or Anthem’s owned IP The Gin Explorers Club-that keep brands continuously top-of-mind through seasonal activations, partner venues, and multi-tiered event programming.",
    },
  ],
  "curator-circle": [
    {
      q: "What was the Diageo India Curator Circle corporate hiring experience?",
      a: "Diageo India’s Curator Circle was an experiential employer branding campaign and immersive hiring summit conceptualized and produced by Anthem. Reimagining traditional corporate recruitment, Anthem built an end-to-end recruitment funnel that drew over 1,000+ digital entries, shortlisted 13 elite finalists, and brought them together for a dynamic, multi-stage assessment experience. Evaluated by four industry culture maestros through collaborative creative challenges, live presentations, and culture-building workshops, the initiative culminated in appointing Diageo India’s Culture & Community Curators.",
    },
    {
      q: "How do experiential corporate events improve employer branding and executive talent acquisition?",
      a: "Experiential corporate events transform passive talent acquisition into immersive employer branding showcases. Rather than relying on standard boardroom interviews, companies use experiential hiring summits, talent hackathons, and culture offsites to observe candidate leadership, creativity, and cultural alignment in real-time. By immersing candidates in curated hospitality, peer-to-peer collaboration, and direct engagement with senior leaders and industry icons, enterprises elevate their Employer Value Proposition (EVP) and attract high-caliber culture shapers.",
    },
    {
      q: "What corporate event management services does Anthem deliver in Delhi NCR and across India?",
      a: "Anthem is a premier corporate event management and experiential marketing agency headquartered in Delhi NCR with an office in Mumbai. Anthem delivers end-to-end corporate event services across India, including executive leadership offsites, corporate retreats, employer branding summits, employee engagement festivals, annual stakeholder meets, brand IP rollouts, and experiential hackathons. Anthem’s full-service scope encompasses creative concepting, venue transformation, stage and AV production, hospitality, artist and keynote curation, and digital content capture.",
    },
    {
      q: "How does Anthem design unconventional corporate events differently from traditional event planners?",
      a: "While traditional corporate event planners focus strictly on logistics and stage setups, Anthem approaches corporate events as culture-shaping brand experiences. By blending strategic brand marketing, immersive spatial design, bespoke culinary curation, and interactive storytelling, Anthem creates engaging corporate environments where participants solve real-world problems, build lasting community, and internalize brand values. From multi-city corporate retreats like BCG Palooza to culture-driven hiring summits like Diageo’s Curator Circle, Anthem bridges corporate strategy with cultural relevance.",
    },
    {
      q: "Can Anthem manage corporate events, summits, and offsites across multiple Indian cities?",
      a: "Yes. With dual headquarters in Delhi NCR and Mumbai, Anthem operates on a pan-India scale, having produced over 150+ high-profile corporate, brand, and festival experiences across 30+ Indian cities, including Bengaluru, Kolkata, Goa, Hyderabad, and Pune. Anthem manages complete on-ground turnkey execution, including venue sourcing, local vendor management, multi-city travel logistics, technical audio-visual production, luxury hospitality, and regulatory compliance.",
    },
    {
      q: "How do corporate events and employer branding activations drive measurable digital ROI?",
      a: "Anthem integrates live corporate experiences with digital amplification through its dedicated culture division, Anthem Amplify. By capturing social-first, high-production behind-the-scenes content, leadership spotlight reels, and candidate testimonial clips, the live event is transformed into an ongoing employer branding campaign. In the Diageo Curator Circle campaign, Anthem generated over 1,000+ organic recruitment entries and extensive social visibility across LinkedIn and Instagram, multiplying the enterprise’s return on investment far beyond the physical room.",
    },
  ],
};
