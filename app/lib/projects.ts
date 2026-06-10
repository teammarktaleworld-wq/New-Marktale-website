export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  outcome: string;
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "delhi059",
    title: "Delhi059",
    category: "Restaurant - Canada",
    description:
      "From zero to Canada's culinary icon with 650+ Google reviews—all without spending a rupee on performance marketing.",
    image: "https://www.marktaleworld.com/clients/delho059.png",
    tags: ["Hospitality", "Featured"],
    client: "Chef Kanishk",
    year: "2024",
    services: ["Branding", "Web Development", "Organic Growth", "Local SEO"],
    challenge:
      "Launching a new restaurant in Windsor's competitive food scene requires more than just good food. The challenge was to build a brand that resonated deeply with the local community immediately upon launch, without the heavy burn rate of paid advertising. We needed to create organic buzz and genuine advocacy from day one.",
    solution:
      'We engineered a "Community First" launch strategy. Instead of paying for clicks, we built a narrative around Indian culinary heritage tailored for the Canadian palate. We optimized Local SEO to dominate "Best Indian Food" searches in Windsor before the doors even opened. Simultaneously, we deployed an influencer seeding program that targeted genuine food lovers, not just paid promoters, ensuring authentic word-of-mouth.',
    outcome:
      "The results broke all local records. Delhi059 became a standout success story, amassing over 650 5-star Google reviews purely through customer delight and organic reach. The brand is now synonymous with quality Indian cuisine in Windsor, proving that product-led growth when amplified by smart SEO beats paid acquisition every time.",
    stats: [
      { label: "Google Reviews", value: "650+" },
      { label: "Ad Spend", value: "₹0" },
      { label: "Local Ranking", value: "#1" },
    ],
  },
  {
    id: "local-ride",
    title: "Local Ride",
    category: "Transportation - Canada",
    description:
      "Engineered from the ground up into a thriving Canadian rideshare powerhouse. Full-stack iOS/Android apps with zero commission for drivers.",
    image: "https://www.marktaleworld.com/clients/localride.png",
    tags: ["App Development", "Featured"],
    client: "Local Ride Inc.",
    year: "2023",
    services: [
      "Mobile App Dev",
      "UI/UX Design",
      "Backend Architecture",
      "Go-To-Market",
    ],
    challenge:
      "Breaking into the rideshare market dominated by Uber and Lyft is a monumental task. Drivers were tired of high commissions, and riders wanted fairer prices. The technical challenge was to build a robust, real-time dispatch system that could rival the giants in speed and reliability, while the business challenge was to disrupt the pricing model.",
    solution:
      'We built a zero-commission platform that empowered drivers. On the tech side, we utilized Flutter for a seamless cross-platform experience (iOS & Android) and a Node.js/Socket.io backend for millisecond-latency real-time tracking. We implemented algorithmic pricing that was fair to riders while maximizing driver earnings. Our launch marketing reframed the narrative from "convenience" to "fairness," rallying the local community.',
    outcome:
      "Local Ride successfully carved out a significant market share in Windsor and surrounding areas. The app boasts high retention rates for both drivers and riders. It stands as a testament to technical excellence and disruptive business modeling, facilitating thousands of rides daily with 99.9% uptime.",
    stats: [
      { label: "Driver Commission", value: "0%" },
      { label: "App Uptime", value: "99.9%" },
      { label: "Platform", value: "iOS & Android" },
    ],
  },
  {
    id: "dee-cee-accessories",
    title: "Dee Cee Accessories",
    category: "Jewelry",
    description:
      "Digital setup from scratch. Products photography, SEO based listings on Amazon and Flipkart. Digital Social Media Accounts setup.",
    image: "https://www.marktaleworld.com/clients/deeceeacceserioes.png",
    tags: ["E-commerce", "Photography"],
    client: "Dee Cee Group",
    year: "2023",
    services: [
      "E-commerce Setup",
      "Product Photography",
      "Marketplace Optimization",
    ],
    challenge:
      "Dee Cee had exquisite products but zero digital footprint. They were relying entirely on offline wholesale. The goal was to transition them into a D2C brand capable of competing on Amazon and Flipkart against established players with thousands of reviews.",
    solution:
      "We executed a full digital transformation. It started with high-fidelity product photography that highlighted the craftsmanship. We then wrote conversion-optimized copy for marketplace listings, targeting high-volume, low-competition keywords. We set up their social media to act as a lookbook, driving traffic back to the marketplaces.",
    outcome:
      "Dee Cee Accessories successfully launched on major platforms with immediate sales velocity. Their listings now rank organically for key category terms, and the brand has established a loyal recurring customer base.",
    stats: [
      { label: "Channels", value: "Amazon, Flipkart" },
      { label: "Growth", value: "100% MoM" },
      { label: "ROI", value: "4.5x" },
    ],
  },
  {
    id: "last-mile-care",
    title: "Last Mile Care",
    category: "NGO",
    description:
      "Supporting communities with compassionate care and digital outreach strategies to amplify their mission.",
    image: "https://www.marktaleworld.com/clients/lastmilecare.png",
    tags: ["Non-profit"],
    client: "Last Mile Care Foundation",
    year: "2022",
    services: ["Web Design", "Donation Systems", "Content Strategy"],
    challenge:
      "Last Mile Care was doing incredible work on the ground but struggled to communicate their impact to donors online. Their existing presence was fragmented, making fundraising difficult.",
    solution:
      "We built a storytelling-first website that put the beneficiaries at the center. We integrated seamless donation payment gateways and set up an automated email nurturing sequence to keep donors engaged with impact reports. We focused on transparency and trust signals throughout the design.",
    outcome:
      "Digital donations increased significantly within the first quarter. The foundation now has a scalable platform to share their stories and mobilize support during crises.",
    stats: [
      { label: "Donation Conv.", value: "+200%" },
      { label: "Reach", value: "Global" },
      { label: "Impact", value: "High" },
    ],
  },
  {
    id: "maggo-play-school",
    title: "Maggo Play School",
    category: "Education",
    description:
      "Creating joyful learning experiences for young minds in Delhi with innovative digital engagement.",
    image: "https://www.marktaleworld.com/clients/school1_maggokids.png",
    tags: ["Education"],
    client: "Maggo Education",
    year: "2024",
    services: ["Local SEO", "Social Media", "Lead Gen"],
    challenge:
      "With play schools on every corner, standing out is tough. Parents rely heavily on trust and proximity. Maggo Play School needed to be the clear #1 choice for parents in their catchment area.",
    solution:
      'We implemented a hyper-local SEO strategy, ensuring they dominated "play school near me" searches. We complemented this with a heartwarming social media content strategy featuring real stories of child development and joy, adhering to strict privacy and safety guidelines. We also built a lead nurturing system for admission inquiries.',
    outcome:
      "Admissions saw a record intake for the academic year. The school's digital presence now reflects the warmth and quality of their physical environment, serving as a primary trust-builder for prospective parents.",
    stats: [
      { label: "Admissions", value: "Full Capacity" },
      { label: "Local Visibility", value: "Dominant" },
      { label: "Parent Engagement", value: "High" },
    ],
  },
  {
    id: "bg-foundation",
    title: "BG Foundation",
    category: "NGO - Canada",
    description:
      "Empowering change through digital transformation and community engagement initiatives across Canada.",
    image: "https://www.marktaleworld.com/clients/bgfoundation.png",
    tags: ["Non-profit"],
    client: "BG Foundation",
    year: "2023",
    services: ["Brand Identity", "Web Portal", "Community Strategy"],
    challenge:
      "Launching a new foundation in Canada requires building immediate credibility. BG Foundation needed a digital identity that looked institutional and established from day one.",
    solution:
      "We crafted a minimalist, authoritative brand identity and a content-rich web portal. The site features dynamic sections for different community initiatives, allowing easy updates. We focused on accessibility and bilingual (English/French) capabilities to reach a wider audience.",
    outcome:
      "The foundation successfully launched its legislative initiatives with strong digital backing. The platform serves as a central hub for policy papers, community updates, and volunteer registration.",
    stats: [
      { label: "Launch", value: "National" },
      { label: "User Types", value: "Multi-stakeholder" },
      { label: "Uptime", value: "100%" },
    ],
  },
  {
    id: "bg-foods",
    title: "BG Foods",
    category: "E-commerce - Canada/USA",
    description:
      "Everything from scratch. Building a thriving food e-commerce platform across North America.",
    image: "https://www.marktaleworld.com/clients/bgfoods.png",
    tags: ["E-commerce"],
    client: "BG Foods North America",
    year: "2024",
    services: ["Shopify Plus", "Supply Chain Tech", "Performance Marketing"],
    challenge:
      "Scaling a food business across cross-border markets (Canada/USA) involves complex logistics and intense competition. We needed a robust e-commerce stack that could handle inventory synchronization and localized marketing.",
    solution:
      "We built a headless Shopify solution optimized for speed and conversion. We integrated it with their ERP for real-time inventory management. Our marketing strategy leveraged high-intent search ads for specific food categories and retention loops via email marketing.",
    outcome:
      "BG Foods has seen month-over-month growth since launch. The platform handles complex shipping rules effortlessly, and the brand is gaining traction as a go-to source for specialty foods.",
    stats: [
      { label: "Markets", value: "Canada & USA" },
      { label: "Stack", value: "Headless Shopify" },
      { label: "Growth", value: "Rapid" },
    ],
  },
  {
    id: "promac-advisory",
    title: "Promac Advisory",
    category: "Real Estate - Jaipur",
    description:
      "Transforming real estate advisory with data-driven insights and premium digital presence.",
    image: "https://www.marktaleworld.com/clients/promac.png",
    tags: ["Real Estate"],
    client: "Promac Group",
    year: "2023",
    services: ["Lead Generation", "CRM Integration", "Premium Web Design"],
    challenge:
      'Real estate marketing is often cluttered and salesy. Promac wanted to position themselves as "Advisors," not just brokers. They needed a premium look that attracted high-net-worth individuals.',
    solution:
      "We designed a sleek, minimalist website that feels more like a luxury lifestyle magazine than a property listing site. We implemented a high-quality lead qualification funnel connected directly to their CRM, ensuring sales teams only spent time on serious prospects.",
    outcome:
      "Lead quality improved dramatically. The brand is now perceived as a market leader in luxury advisory, commanding higher commissions and exclusive mandates.",
    stats: [
      { label: "Lead Quality", value: "Premium" },
      { label: "Brand Perception", value: "Luxury" },
      { label: "Conversion", value: "+40%" },
    ],
  },
  {
    id: "cabtale",
    title: "CabTale",
    category: "Transportation",
    description:
      "Building the future of urban mobility with seamless booking experiences and real-time tracking solutions.",
    image: "https://www.marktaleworld.com/clients/cab_cabtale.png",
    tags: ["Mobility", "App Development"],
    client: "CabTale",
    year: "2022",
    services: ["Product Design", "Web App", "Fleet Management"],
    challenge:
      "Managing a fleet and bookings manually is a receipt for disaster. CabTale needed a digital brain to manage dispatch, booking, and customer tracking.",
    solution:
      "We built a custom fleet management dashboard and a consumer-facing booking web app. The interface prioritizes speed—users can book a cab in 3 clicks. The admin side provides deep analytics on fleet utilization and driver performance.",
    outcome:
      "Operational efficiency soared. Missed bookings dropped to near zero, and customer satisfaction ratings improved due to the transparency of real-time tracking.",
    stats: [
      { label: "Efficiency", value: "+300%" },
      { label: "Booking Time", value: "< 30s" },
      { label: "Errors", value: "0" },
    ],
  },
  {
    id: "astro-nexus",
    title: "Astro Nexus",
    category: "Astrology",
    description:
      "Bridging ancient wisdom with modern technology through engaging digital astrology experiences.",
    image: "https://www.marktaleworld.com/clients/astronexus.png",
    tags: ["Digital Media"],
    client: "Astro Nexus",
    year: "2023",
    services: ["Content Strategy", "App Dev", "Monetization"],
    challenge:
      "Astrology is a crowded niche. To succeed, Astro Nexus needed to offer a superior user experience and credible, engaging content.",
    solution:
      "We developed an intuitive app interface that makes complex charts easy to understand. We paired this with a content strategy focused on daily, snackable insights shared across social media to drive app installs.",
    outcome:
      "The app gained immediate traction among millennials. Daily active user counts are high due to the gamified retention features we implemented.",
    stats: [
      { label: "DAU", value: "Growing" },
      { label: "Retention", value: "High" },
      { label: "Review", value: "4.8/5" },
    ],
  },
  {
    id: "biryani-bar",
    title: "Biryani Bar",
    category: "Hospitality",
    description:
      "Crafting memorable dining experiences through innovative digital ordering and customer loyalty programs.",
    image: "https://www.marktaleworld.com/clients/hotel1_biryanibar.jpg",
    tags: ["Hospitality"],
    client: "Biryani Bar Chain",
    year: "2022",
    services: ["Branding", "Menu Design", "Digital Loyalty"],
    challenge:
      "Converting one-time diners into regulars is the holy grail of hospitality. Biryani Bar needed a way to incentivize repeat visits without devaluing their brand with constant deep discounting.",
    solution:
      "We built a digital loyalty program integrated directly into their POS. We also refreshed their visual identity to appeal to a younger demographic. The digital ordering flow was optimized for upsells (add-ons, drinks).",
    outcome:
      "Repeat customer rate increased by 25%. The average order value (AOV) also saw a significant bump due to the optimized digital menu design.",
    stats: [
      { label: "Repeat Rate", value: "+25%" },
      { label: "AOV", value: "+15%" },
      { label: "Customer LTV", value: "High" },
    ],
  },
  {
    id: "read-abroad",
    title: "Read Abroad",
    category: "Education",
    description:
      "Connecting students with global educational opportunities through innovative digital platforms.",
    image: "https://www.marktaleworld.com/clients/readabroad.png",
    tags: ["Education"],
    client: "Read Abroad Consultancy",
    year: "2023",
    services: ["Lead Gen", "Web Portal", "Email Automation"],
    challenge:
      "Overseas education consultancy is built on trust. Students are making life-changing decisions. The digital presence needed to convey absolute authority and support.",
    solution:
      "We built a knowledge-first portal with extensive guides on universities and visa processes. We implemented a lead magnet strategy (free downloadable guides) to capture high-intent leads, followed by a nurturing email sequence.",
    outcome:
      "Lead cost decreased while quality increased. The consultancy is now seen as a thought leader in the space, attracting students organically.",
    stats: [
      { label: "CPL", value: "-40%" },
      { label: "Trust", value: "Verified" },
      { label: "Traffic", value: "Organic" },
    ],
  },
  {
    id: "writing-rodgers",
    title: "Writing Rodgers",
    category: "Education",
    description:
      "Empowering writers and educators with comprehensive digital tools and content strategies.",
    image: "https://www.marktaleworld.com/clients/writingrodgers.png",
    tags: ["Education"],
    client: "Writing Rodgers",
    year: "2024",
    services: ["SaaS Development", "Community Building", "Content"],
    challenge:
      "Building a SaaS tool for a niche audience of educators requires deep understanding of their pain points. The challenge was to build a tool that felt intuitive to non-tech-savvy users.",
    solution:
      'We adopted a "User-Centric Design" approach, conducting interviews with educators before writing a line of code. We built a clean, distraction-free writing interface with embedded pedagogical tools. We launched with a community-led strategy.',
    outcome:
      "Writing Rodgers has been adopted by multiple institutions. The user feedback highlights the simplicity and effectiveness of the design.",
    stats: [
      { label: "Adoption", value: "Institutional" },
      { label: "User Sat.", value: "100%" },
      { label: "Churn", value: "Low" },
    ],
  },
];
