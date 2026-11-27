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
  "chambal-gin": [
    {
      q: "What was the Chambal Gin brand launch experience conceptualized and produced by Anthem?",
      a: "The Chambal Gin launch was an experiential brand launch produced by Anthem in Delhi in 2023 for Bapuna. To introduce consumers and cocktail enthusiasts to a new Indian craft gin, Anthem turned the raw terroir and folklore of the Chambal ravines into a sensory brand world. The evening featured earthy spatial design, custom rustic decor, intimate theatrical performances, interactive games, and curated tasting sessions, bringing together more than 70 top content creators and culture tastemakers under one roof.",
    },
    {
      q: "How does Anthem approach craft spirits and luxury alcobev brand launches in India?",
      a: "Because direct alcohol advertising is restricted in India, launching a spirits brand comes down to creating memorable, real-world experiences. Instead of hosting generic club nights, Anthem builds narrative-led brand worlds that celebrate local ingredients, distillation stories, and signature cocktail rituals. Through immersive spatial design, live theatrical interactions, and guided tastings, Anthem helps craft spirit brands earn authentic attention from tastemakers, media, and early adopters across Delhi NCR, Mumbai, and Bengaluru.",
    },
    {
      q: "What brand launch agency and experiential design services did Anthem provide for Chambal Gin in Delhi?",
      a: "Anthem delivered complete end-to-end brand launch execution for Bapuna's Chambal Gin in Delhi. Backed by our multidisciplinary teams operating across Delhi NCR, Mumbai, and Bengaluru, we handled everything from creative concept development and spatial design to vendor procurement, theatrical performance direction, bespoke decor fabrication, F&B curation, creator invitation management, and on-ground event production.",
    },
    {
      q: "How did the Chambal Gin launch integrate immersive theatrical storytelling and spatial design?",
      a: "To bring the untamed spirit of the Chambal ravines into the room, Anthem designed an environment using raw earthy textures, indigenous botanical displays, and warm valley-inspired lighting. Guests walked through a sensory corridor that evoked the rugged landscape of the Chambal region before arriving at a styled tasting lounge. Live theatrical storytelling performances wove real folklore into the evening, transforming a standard product launch into a narrative journey.",
    },
    {
      q: "Why is creator curation and influencer engagement critical for premium alcobev launches?",
      a: "With traditional advertising off the table for alcohol brands in India, authentic creator experiences are one of the most effective ways to build awareness. By inviting and hosting more than 70 handpicked creators and tastemakers at the Chambal Gin launch, Anthem ensured that organic content captured the brand story through genuine personal endorsement rather than paid placements.",
    },
    {
      q: "Can Anthem execute turnkey brand launches and experiential marketing campaigns across Delhi NCR and India?",
      a: "Yes, Anthem operates nationwide with active teams and execution capabilities across Delhi NCR, Mumbai, and Bengaluru. Over the past decade, we have created and managed more than 150 brand launches, experiential activations, and marketing campaigns for 80+ brands across 30+ Indian cities, delivering end-to-end creative, production, and logistics solutions.",
    },
  ],
  "hiring-campaign-diageo-india": [
    {
      q: "What was Anthem's role in the Diageo India Culture and Community Curator hiring campaign?",
      a: "Anthem conceptualized, directed, and executed the entire turnkey recruitment campaign for Diageo India to discover its next Culture and Community Curator. The scope encompassed creative strategy, digital campaign production, multi-channel social distribution, candidate screening from over 1,000 applicants, and shortlisting the top 13 finalists. By reimagining corporate talent acquisition into an authentic cultural movement, Anthem helped Diageo generate more than 10 million digital impressions across India.",
    },
    {
      q: "How did the digital hiring campaign achieve over 10 million impressions and 1,000+ applications?",
      a: "Rather than relying on conventional job boards and text postings, Anthem produced culture-first video content and interactive digital narratives that highlighted the creative pulse of nightlife, music, mixology, and community building. The campaign engaged hyper-targeted creative communities across major hubs including Delhi NCR, Mumbai, and Bengaluru through Instagram, LinkedIn, and YouTube distribution.",
    },
    {
      q: "Can Anthem design and manage experiential corporate hiring campaigns in Bengaluru, Delhi NCR, and Mumbai?",
      a: "Yes. Anthem delivers end-to-end employer branding and experiential hiring campaigns across India, with dedicated production and strategy teams in Bengaluru, Delhi NCR, and Mumbai. The agency manages every phase of the process, including social-first content production, targeted digital distribution, candidate experience design, evaluation frameworks, and final selection events.",
    },
    {
      q: "How does experiential employer branding differ from traditional corporate recruitment?",
      a: "Traditional corporate hiring relies heavily on resume screenings and standard interview rooms, which rarely communicate an organization's true personality. Experiential employer branding transforms recruitment into an engaging brand activation. In the Diageo India campaign, candidates were immersed in the brand's cultural ecosystem through creative challenges, collaborative workshops, and culture-building exercises that revealed authentic leadership traits.",
    },
    {
      q: "How does Anthem shortlist and evaluate candidates during large-scale hiring campaigns?",
      a: "Anthem designs custom, multi-tier evaluation frameworks aligned with client business and culture goals. For the Diageo India campaign, Anthem developed a bespoke submission process that evaluated real-world portfolios, community influence, and strategic brand-building capability, narrowing over 1,000 entries down to 13 finalists who participated in an immersive in-person assessment experience.",
    },
    {
      q: "What types of corporate events and campaigns does Anthem produce for enterprise clients?",
      a: "In addition to employer branding and recruitment campaigns, Anthem produces a full spectrum of corporate events across Bengaluru, Delhi NCR, and Mumbai. The agency's corporate portfolio includes executive leadership retreats like the BCG India Leadership Meet, employer branding summits like Diageo's Curator Circle, annual stakeholder conferences, product launches, dealer meets, and employee engagement festivals.",
    },
  ],
  "black-and-white-table-for-everyone": [
    {
      q: "What is the Black & White Table for Everyone campaign, and how does Anthem execute it across India?",
      a: "Black & White Table for Everyone is a signature conversation-led dining property created for Diageo India to foster genuine community connections among Gen Z and young millennial consumers. Since launching in 2023, Anthem has produced over 350 editions hosting more than 6,000 guests across multiple metropolitan hubs, including Bengaluru, Delhi NCR, and Mumbai. Anthem manages the entire ecosystem end to end, covering concept design, curated restaurant collaborations, bespoke tablescapes, interactive conversation formats, and complete on-ground hospitality management.",
    },
    {
      q: "How does Anthem drive brand salience and measurable ROI for youth audiences through experiential dining?",
      a: "Rather than relying on conventional passive sampling, Anthem creates high-touch social dining experiences that integrate natural brand storytelling with culinary artistry. By curating communal tables, custom menus, and conversation-driven programming, Anthem embeds brand presence into genuinely memorable social moments that drive organic word-of-mouth and social sharing.",
    },
    {
      q: "Can Anthem scale recurring experiential dining activations across Bengaluru, Mumbai, and Delhi NCR?",
      a: "Yes. Anthem operates full-fledged production and creative teams across Bengaluru, Delhi NCR, and Mumbai, enabling seamless multi-city rollouts. Delivering more than 350 editions of Table for Everyone demonstrates Anthem's ability to maintain rigorous quality control, local venue licensing, top-tier chef collaborations, and uniform brand standards across regions.",
    },
    {
      q: "What programming elements are included in the Table for Everyone guest journey?",
      a: "Every edition is designed as a multi-sensory journey built around good food, shared laughter, and meaningful dialogue. Key elements include custom menus paired with signature Black & White cocktails, themed tablescapes, interactive icebreaker formats, curated playlists, and candid photo and video capture that extends the experience into digital content.",
    },
    {
      q: "How does Anthem measure the long-term impact of continuous activation properties like Table for Everyone?",
      a: "Anthem tracks both quantitative execution metrics and qualitative brand resonance. With over 350 editions and 6,000+ verified attendees between 2023 and 2026, the campaign showcases rare operational longevity. Success is measured through guest dwell time, qualitative sentiment, organic social amplification, and repeat brand affinity.",
    },
    {
      q: "How can consumer brands or corporate enterprises partner with Anthem for bespoke dining experiences?",
      a: "Brands and corporate leaders can engage Anthem for turnkey dining experiences, executive networking dinners, or nationwide roadshows. Anthem provides end-to-end capabilities spanning strategic positioning, venue curation, chef collaborations, branded tablescapes, hospitality management, and digital content production across Bengaluru, Delhi NCR, and Mumbai.",
    },
  ],
  "hendricks-house-of-oddities": [
    {
      q: "How does Anthem design luxury corporate brand activations for global brand launches and executive visits?",
      a: "Anthem approaches luxury corporate brand activations by turning brand narratives into living, multi-sensory worlds rather than predictable stage presentations. For William Grant & Sons, Anthem conceptualized The House of Oddities in Mumbai to mark the India visit of Hendrick's global brand ambassador, Ally Martin. Instead of hosting a standard press conference, Anthem built an intimate, narrative-driven environment that reflected the brand's eccentric heritage.",
    },
    {
      q: "How can corporate branding use immersive storytelling and theatrical environments to strengthen brand salience?",
      a: "Corporate branding achieves lasting recall when audiences actively participate in a brand story instead of passively reading marketing copy. At The House of Oddities, Anthem avoided superficial step-and-repeat backdrops by creating interactive story stations where guests engaged with the brand's eccentric cucumber-and-rose narrative through touch, taste, and conversation.",
    },
    {
      q: "What goes into bespoke venue transformations for high-end corporate events and experiential marketing campaigns?",
      a: "Bespoke venue transformations require a delicate balance of architectural scenography, structural safety, spatial flow, and ambient sensory control. For The House of Oddities, Anthem completely took over Love Fools, a boutique heritage property in Bandra, Mumbai, transforming it into a multi-room brand universe with curated botanical installations, theatrical lighting, and custom furniture.",
    },
    {
      q: "How do intimate corporate hospitality events build relationships with HNIs, media leaders, and key stakeholders?",
      a: "Intimate corporate hospitality events prioritize depth of engagement over superficial crowd volume. By limiting The House of Oddities to a curated gathering of 80+ top media editors, luxury tastemakers, PR leaders, and high-net-worth individuals, Anthem ensured every guest received personalized attention and direct interaction with Hendrick's global brand ambassador.",
    },
    {
      q: "How do enterprise brands measure the business ROI and media impact of intimate experiential corporate events?",
      a: "Measuring ROI on intimate corporate events requires looking beyond simple headcount to focus on audience quality, dwell time, earned media value, and brand sentiment. The House of Oddities generated substantial organic reach because the 80+ guests included influential lifestyle journalists and high-profile tastemakers who actively shared their bespoke journey on social channels, producing millions of targeted impressions and high-tier press coverage without reliance on paid media promotions.",
    },
    {
      q: "Why do global enterprise brands partner with Anthem for luxury corporate events and experiential brand activations across India?",
      a: "Global brands choose Anthem because we combine visionary creative concepting with meticulous operational execution. From welcoming international ambassadors and launching luxury products to producing nationwide corporate offsites, Anthem handles the complete lifecycle: creative strategy, venue procurement, scenic fabrication, theatrical scripting, artist curation, guest management, and statutory licensing across Bengaluru, Delhi NCR, and Mumbai.",
    },
  ],
  "por-amor-potluck-don-julio": [
    {
      q: "How does creator-led storytelling strengthen corporate branding and luxury product positioning?",
      a: "Creator-led storytelling builds authentic cultural relevance by anchoring luxury products within genuine human moments rather than scripted advertisements. In the Por Amor Potluck campaign executed for Diageo India and Don Julio Grapefruit Soda, Anthem partnered with prominent cultural tastemakers, including Meghna Kaur, Naina Bhan, and Armaan Jain, who hosted intimate gatherings with their inner circles. By framing the brand around the Mexican ethos of Por Amor (For Love), the product became a natural catalyst for connection, shared meals, and celebratory toasts.",
    },
    {
      q: "Why are enterprise brands choosing intimate hospitality and curated potlucks over traditional corporate events?",
      a: "Enterprise brands increasingly prefer curated, micro-format gatherings because intimate hospitality fosters deeper emotional engagement and organic conversation than large convention halls can deliver. The Don Julio Por Amor Potluck transformed corporate hospitality into a series of warm, shared culinary experiences where guests contributed dishes, shared personal stories, and enjoyed bespoke cocktails in relaxed residential and boutique settings.",
    },
    {
      q: "What metrics demonstrate the business ROI of an experiential influencer campaign?",
      a: "Measuring the return on investment of an experiential influencer campaign requires tracking both top-of-funnel reach and qualitative community engagement. The Don Julio Por Amor Potluck campaign delivered over 5.5 million total reach, more than 5 million organic video views, and upward of 110,000 active social engagements across its February to March 2026 run.",
    },
    {
      q: "How do agencies manage end-to-end talent coordination and content production for multi-city brand activations?",
      a: "Seamless talent coordination requires end-to-end management spanning creator curation, creative briefing, on-site production, compliance oversight, and post-production distribution. For the Por Amor Potluck initiative, Anthem managed talent negotiations, logistical scheduling, and dedicated video production crews to capture natural, unscripted moments without disrupting the intimacy of the gatherings.",
    },
    {
      q: "How can corporate branding be seamlessly woven into culinary and beverage experiences without feeling overly commercial?",
      a: "Integrating corporate branding into culinary experiences requires subtlety, sensory relevance, and cultural authenticity. Rather than placing overt logos or repetitive sales banners across the venue, Anthem integrated Don Julio Grapefruit Soda organically as the signature beverage pairing designed to complement communal dining rituals. Signature serves, crafted glassware, and customized cocktail stations blended naturally into the aesthetic table setting, reflecting the celebratory Por Amor spirit.",
    },
    {
      q: "How do corporate event organizers convert on-ground private gatherings into high-impact digital campaigns?",
      a: "Converting private on-ground gatherings into widespread digital impact relies on designing camera-ready environments and capturing authentic human emotion in real time. Anthem engineered the Por Amor Potluck with specialized lighting, artisanal tablescapes, and dedicated digital capture units that recorded high-definition short-form videos optimized for Instagram and YouTube. This hybrid experiential model allows an intimate gathering of 15 to 20 guests to achieve multi-million digital impressions across the country.",
    },
  ],
  "toki-dinners": [
    {
      q: "How do curated experiential dining series elevate corporate branding beyond traditional dinner sponsorships?",
      a: "Curated experiential dining transforms corporate branding from a passive sponsorship into an authentic sensory narrative. Rather than relying on static banner logos or generic welcome drinks, high-concept dining activations weave a brand into the evening through bespoke gastronomy, custom cocktail pairings, and intimate ambiance. In the Toki Serious Eaters Dinners executed for Beam Suntory, Anthem integrated Toki Blended Japanese Whisky as an organic storytelling vehicle across four distinct restaurant venues rather than a casual beverage add-on. This immersive approach allowed 180+ influential diners to connect with the brand's Japanese craftsmanship through off-menu courses created specifically to complement Toki's subtle flavour profile.",
    },
    {
      q: "What strategies ensure seamless brand integration during high-touch corporate events and VIP dinners?",
      a: "Seamless brand integration in high-touch corporate events requires aligning the product's core identity with every touchpoint of the guest journey, avoiding aggressive sales pitches in favour of subtle, authentic discovery. Key strategies include collaborating with executive chefs on ingredient harmonization, staging interactive tasting moments, and designing tactile tabletop collateral that explains tasting notes and heritage. During the Toki Serious Eaters Dinners, Anthem and Food Talk India curated custom off-menu dishes specifically paired with Toki highballs and neat serves, ensuring the whisky elevated the food and vice versa.",
    },
    {
      q: "How can enterprise brands use exclusive community channels to drive qualified attendance for corporate dining activations?",
      a: "Enterprise brands and luxury labels can dramatically enhance guest quality and attendance reliability by partnering with curated, interest-driven micro-communities instead of issuing broad public invitations. By utilizing private communication channels operated by trusted community platforms like Food Talk India, Anthem reached culinary enthusiasts, food critics, and industry insiders who self-selected into the dining experience based on genuine interest rather than casual curiosity.",
    },
    {
      q: "Why are chef-led culinary storytelling formats effective for executive client engagement and corporate hospitality?",
      a: "Chef-led culinary storytelling is exceptionally effective for executive client engagement because it shifts corporate hospitality from a passive meal into a shared intellectual and sensory adventure. When executive chefs personally present each course, explain ingredient sourcing, and demonstrate the craft behind each dish, it establishes a narrative arc that holds guest attention far longer than a standard seated dinner.",
    },
    {
      q: "What measurable digital reach and brand equity can an intimate corporate dining activation generate?",
      a: "While intimate corporate dining activations host relatively small guest lists, their capacity to generate outsized digital reach and authentic brand equity is immense when experiences are designed to be innately shareable. High-touch presentation, rare culinary pairings, and aesthetic ambiance naturally prompt social sharing among guests. The Toki Serious Eaters Dinners, produced across four high-profile restaurant venues, generated significant organic social reach and content across Instagram and YouTube.",
    },
    {
      q: "How does Anthem manage multi-venue corporate dining activations across key Indian metropolitan markets?",
      a: "Managing multi-venue corporate dining programs requires meticulous venue vetting, chef collaboration, supply chain consistency, and local regulatory adherence. Anthem acts as a turnkey partner across Bengaluru, Delhi NCR, and Mumbai, overseeing restaurant partnerships, bespoke menu co-creation, branded collateral design, guest management, event-day hospitality, and post-event digital content production.",
    },
  ],
  "roku-gin-come-alive": [
    {
      q: "How does Anthem build multi-city experiential brand IPs that transition smoothly from digital storytelling to on-ground consumer participation?",
      a: "Building a high-impact experiential IP begins with an authentic cultural hook rather than a sales pitch. For Beam Suntory's Roku Gin, Anthem translated the brand's \"Come Alive with the Seasons\" philosophy into a repeatable, ticketed weekend brunch experience that toured major metropolitan centers. Rather than simply serving drinks, each activation immersed guests in Japanese craftsmanship, natural botanicals, and mindful creative workshops. By pairing this high-touch physical environment with curated creator storytelling, the campaign generated 7M+ digital reach and 8M+ views.",
    },
    {
      q: "What interactive craft workshops can luxury brands incorporate into corporate retreats and client hospitality experiences?",
      a: "High-end corporate retreats and VIP hospitality gatherings thrive when guests actively create something beautiful with their hands. For the Roku Gin tour, Anthem designed hands-on Japanese botanical ateliers featuring Japanese ink painting (Sumi-e), botanical arrangement workshops, and guided sake and gin pairing sessions that connected the craft of Roku's six botanicals directly to guest creativity.",
    },
    {
      q: "How does an on-ground luxury activation generate over 7 million digital reach and organic social engagement without feeling promotional?",
      a: "The secret to massive organic engagement is designing physical environments that people naturally want to photograph and share. Rather than setting up standard step-and-repeat logo boards, Anthem crafted photogenic, sunlit botanical installations, origami-inspired decor, and artisanal cocktail stations that became organic content engines. The Roku Gin activations generated 7M+ digital reach and 8M+ views purely through authentic guest sharing and curated creator content.",
    },
    {
      q: "Why do premium consumer brands and corporate enterprises choose repeatable, ticketed event formats over one-off product launches?",
      a: "One-off launch parties often burn substantial budgets for a single night of fleeting attention. A repeatable, ticketed format transforms a campaign into an ongoing consumer and B2B touchpoint that builds compounding brand equity. Ticketing creates psychological value through exclusivity and commitment, while repetition across multiple cities generates a nationwide consumer footprint.",
    },
    {
      q: "How can a global enterprise translate abstract heritage and nature-inspired brand values into a tangible corporate event environment?",
      a: "Translating nuanced brand philosophy into a live space requires engaging all five senses simultaneously. For Roku Gin, \"Come Alive with the Seasons\" was not just a tagline printed on signage. It shaped every touchpoint: botanical garnishes hand-picked to reflect seasonal Japanese ingredients, ambient soundscapes recorded in Japanese gardens, and tactile craft workshops that placed guests directly within the brand's nature-inspired philosophy.",
    },
    {
      q: "What full-scope experiential production services does Anthem deliver for luxury multi-city activations across India?",
      a: "Anthem operates as a single, accountable turnkey production partner from creative ideation through post-campaign analytics. For multi-city campaigns like Roku Gin's seasonal tour, our services encompass spatial scenography, bespoke fabrication, master mixologist coordination, chef collaborations, ticketing operations, creator management, compliance and licensing, logistics, and post-event digital amplification across Bengaluru, Delhi NCR, and Mumbai.",
    },
  ],
};
