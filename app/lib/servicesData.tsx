import {
  Video,
  Search,
  FileText,
  Target,
  ShieldCheck,
  Palette,
  TrendingUp,
  BarChart,
  Globe,
  Code,
  Database,
  Layout,
  Smartphone,
  Zap,
  Users,
} from "lucide-react";

export interface ServiceSection {
  title?: string;
  subtitle?: string;
  content: string;
  list?: string[];
  image?: string;
  type?: "text" | "list" | "process" | "grid" | "highlight";
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  icon: any;
  image: string;
  tagline: string;
  heroDescription: string;
  metaDescription: string;
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  features: string[]; // For the grid card
  desc: string; // Short desc for the grid card
}

export const services: ServiceData[] = [
  // Priority 1: Core product-building service
  {
    id: "android-ios-development",
    slug: "android-ios-development",
    title: "Android and iOS Development",
    icon: Smartphone,
    image: "/images/services/mobile_app_dev.png",
    tagline: "Transforming Ideas into Powerful Mobile Experiences",
    heroDescription:
      "In a mobile-first world, your business needs to be in your customers’ pockets. We design and develop high-performance Android and iOS applications that offer seamless user experiences, robust functionality, and scalable architecture.",
    metaDescription:
      "Expert Android and iOS app development services. building native and cross-platform mobile solutions.",
    desc: "Developing high-performance, user-centric mobile applications for Android and iOS platforms.",
    features: [
      "Native Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
    ],
    sections: [
      {
        type: "text",
        title: "Mobile Excellence",
        content:
          "We build apps that people love to use. From intuitive interfaces to lightning-fast performance, our mobile solutions are engineered to deliver value. Whether you need a native app for maximum performance or a cross-platform solution for faster time-to-market, we have the expertise to bring your vision to life.",
      },
      {
        type: "list",
        title: "Our Mobile Services",
        content: "End-to-end mobile development capabilities.",
        list: [
          "iOS App Development (Swift/SwiftUI)",
          "Android App Development (Kotlin/Jetpack Compose)",
          "Cross-Platform Development (React Native/Flutter)",
          "App Maintenance & Updates",
          "Mobile UI/UX Design",
        ],
      },
      {
        type: "process",
        title: "App Development Lifecycle",
        content: "From napkin sketch to App Store launch.",
        list: [
          "Strategy & Specs: Defining core features and user flows.",
          "Design: Creating wireframes and high-fidelity mockups.",
          "Development: Agile coding cycles with regular builds.",
          "Testing: Rigorous QA across devices and OS versions.",
          "Launch: Handling App Store and Play Store submission processes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build for both iPhone and Android?",
        answer:
          "Yes, we specialize in both native iOS and Android development, as well as cross-platform frameworks like React Native and Flutter.",
      },
      {
        question: "How long does it take to build an app?",
        answer:
          "A simple app can take 3-4 months, while more complex enterprise applications may take 6+ months.",
      },
    ],
  },
  // Priority 2: Foundational service - entry point for most clients
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development Services",
    icon: Globe,
    image: "/images/services/web_development_1768164760639.png",
    tagline: "Your Partner For High-Performing Web Development",
    heroDescription:
      "We deliver web development services engineered for performance, scalability, and long-term business growth. Our approach blends technical excellence, conversion-focused design, and strategic architecture to create digital experiences that attract, engage, and convert.",
    metaDescription:
      "Custom, high-performing web development services by MarkTale. We build scalable, SEO-ready websites designed to drive growth and conversions.",
    desc: "Building robust, scalable, and high-performance websites that serve as the foundation of your digital presence.",
    features: ["Responsive Design", "Custom Solutions", "Seamless Integration"],
    sections: [
      {
        type: "text",
        title: "Strategic Web Solutions",
        content:
          "Our team works as a strategic extension of your business, aligning development decisions with your goals. From startups to enterprises, we craft custom web solutions that reflect your brand identity, support operational efficiency, and future-proof your digital presence. Every website we build is designed to perform flawlessly across devices, load at lightning speed, and support measurable outcomes—from lead generation to eCommerce revenue.",
      },
      {
        type: "highlight",
        title: "Start Your Project Today",
        content:
          "A high-performing website begins with a clear strategy and a disciplined execution plan. We initiate every project with a deep understanding of your objectives, audience behavior, and competitive landscape. This foundation enables us to build secure, scalable, and SEO-ready websites that perform from day one. Our process is transparent and collaborative, ensuring timely delivery without compromising quality. Whether launching a new platform or modernizing an existing one, we help you move forward with confidence.",
      },
      {
        type: "text",
        title: "Is Your Website Driving Customers Away?",
        content:
          "Slow load times, outdated interfaces, poor mobile responsiveness, and confusing navigation cost businesses valuable opportunities. A website that fails to communicate value or guide users effectively erodes trust and diminishes conversions. We eliminate friction points through performance optimization, UX refinement, and conversion-focused layouts. By improving page speed, accessibility, and content hierarchy, we transform underperforming websites into powerful acquisition and engagement tools.",
      },
      {
        type: "list",
        title: "What Sets Us Apart: A Team That Builds Winning Websites",
        content:
          "Our strength lies in our multidisciplinary expertise. We combine front-end engineering, back-end development, UI/UX design, and technical SEO into a single, cohesive workflow. This integrated approach ensures every component of your website works together seamlessly. We do not rely on templates. Every solution is purpose-built to deliver results.",
        list: [
          "Custom development tailored to your business logic",
          "Clean, maintainable code for long-term scalability",
          "SEO-first architecture that supports organic visibility",
          "Security best practices to protect data and users",
          "Performance optimization for faster load times and higher engagement",
        ],
      },
      {
        type: "process",
        title: "Our Proven Framework for High-Performing Websites",
        content:
          "We follow a structured framework that transforms ideas into measurable outcomes:",
        list: [
          "Discovery & Strategy: We define goals, success metrics, and technical requirements. Audience research and competitor analysis inform design and functionality decisions.",
          "UX/UI Design: User journeys are mapped to reduce friction and guide actions. Visual design reinforces brand credibility while prioritizing usability and accessibility.",
          "Development & Integration: Our developers implement robust architectures using modern frameworks and secure coding standards. Third-party integrations, APIs, and CMS configurations are executed with precision.",
          "Quality Assurance & Optimization: Rigorous testing ensures cross-browser compatibility, responsive performance, and security compliance. Speed optimization and on-page SEO are finalized before launch.",
          "Launch & Continuous Improvement: Post-launch monitoring and analytics guide ongoing enhancements, ensuring sustained performance and growth.",
        ],
      },
      {
        type: "grid",
        title: "Choosing the Right Platform to Match Your Vision",
        content:
          "Selecting the right technology stack is critical. We recommend platforms based on your objectives, scalability needs, and operational workflows. Each platform is implemented with best practices to ensure speed, security, and maintainability.",
        list: [
          "Custom Web Development for complex business logic and enterprise requirements",
          "WordPress Development for flexible content management and SEO-friendly publishing",
          "ECommerce Platforms such as Shopify or WooCommerce for conversion-driven online stores",
          "Headless CMS Solutions for omnichannel content delivery and performance",
        ],
      },
      {
        type: "text",
        title: "A Strategic Blueprint for Websites That Convert",
        content:
          "Conversion is not accidental—it is engineered. We design websites with clear value propositions, strategic calls-to-action, and data-driven layouts that guide users toward desired outcomes.",
      },
      {
        type: "list",
        subtitle: "Our conversion strategy includes:",
        content:
          "This blueprint ensures your website functions as a reliable revenue and lead-generation asset. If you are a mid-sized or enterprise-level company looking for an effective and adaptable e-commerce solution, Magento and MarkTale’s expertise are the ideal combination for success.",
        list: [
          "Intuitive navigation and content hierarchy",
          "Persuasive messaging aligned with user intent",
          "Optimized forms and checkout flows",
          "Trust signals such as testimonials, certifications, and social proof",
          "Analytics integration for continuous optimization",
        ],
      },
      {
        type: "highlight",
        title: "Results That Speak for Themselves",
        content:
          "Our clients experience tangible improvements in performance and ROI. Faster load times reduce bounce rates, improved UX increases engagement, and SEO-optimized structures drive sustainable organic traffic. Common outcomes include: Higher search engine visibility, Increased conversion rates, Improved user retention, and Reduced maintenance costs through scalable architecture. These results are achieved through disciplined execution and a relentless focus on performance.",
      },
    ],
    faqs: [
      {
        question: "How long does a web development project take?",
        answer:
          "Project timelines vary based on complexity, features, and integrations. Most projects range from several weeks to a few months, with clear milestones throughout.",
      },
      {
        question: "Do you provide SEO-ready websites?",
        answer:
          "Yes. Every website is built with technical SEO best practices, including clean URLs, optimized page speed, mobile responsiveness, and structured data readiness.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "We specialize in website redesigns that improve performance, usability, and conversions while preserving brand equity.",
      },
      {
        question: "Is ongoing support available after launch?",
        answer:
          "We offer maintenance, performance monitoring, and continuous optimization to ensure long-term success.",
      },
      {
        question: "Do you build secure websites?",
        answer:
          "Security is embedded into our development process, including SSL implementation, secure authentication, and regular updates.",
      },
    ],
  },
  // Priority 3: Strategy before execution
  {
    id: "market-research",
    slug: "market-research",
    title: "Market Research",
    icon: Search,
    image: "/images/services/market_research_1768164791783.png",
    tagline: "Data-Driven Insights for Confident Decisions",
    heroDescription:
      "Stop guessing and start knowing. Our in-depth market research services provide the concrete data and behavioral insights you need to de-risk your business decisions, identify new opportunities, and outmaneuver the competition.",
    metaDescription:
      "Comprehensive market research services. We provide the data and insights you need to make informed business decisions.",
    desc: "In-depth understanding of audience needs, pain points, and preferences through qualitative and quantitative analysis.",
    features: [
      "Qualitative Research",
      "Quantitative Analysis",
      "Observational Studies",
    ],
    sections: [
      {
        type: "text",
        title: "Uncovering the Truth Behind the Trends",
        content:
          "We go beyond surface-level data. Our researchers dive deep into consumer psychology, market dynamics, and competitive landscapes. We use a blend of traditional and modern methodologies to uncover actionable insights that drive product innovation and marketing strategy.",
      },
      {
        type: "grid",
        title: "Research Methodologies",
        content:
          "We employ a diverse toolkit to gather the most accurate data.",
        list: [
          "Consumer Surveys & Polls for broad quantitative data",
          "Focus Groups & Interviews for deep qualitative insights",
          "Competitive Intelligence to benchmark against industry leaders",
          "Trend Analysis to predict future market shifts",
        ],
      },
      {
        type: "highlight",
        title: "The Value of Insight",
        content:
          "Data without interpretation is noise. We translate complex data sets into clear, strategic recommendations. Whether you are launching a new product or entering a new market, our research provides the roadmap for success.",
      },
    ],
    faqs: [
      {
        question: "What industries do you cover?",
        answer:
          "We have experience across various sectors including technology, retail, healthcare, and finance.",
      },
      {
        question: "How do you ensure data accuracy?",
        answer:
          "We use verified sample panels and rigorous statistical validation methods to ensure high-confidence results.",
      },
    ],
  },
  // Priority 4: Converts research into actionable strategy
  {
    id: "marketing-plan-development",
    slug: "marketing-plan-development",
    title: "Marketing Plan Development",
    icon: FileText,
    image: "/images/services/marketing_strategy_1768164808685.png",
    tagline: "Strategic Blueprints for Sustainable Growth",
    heroDescription:
      "A goal without a plan is just a wish. We develop comprehensive, data-backed marketing strategies that align with your business objectives, ensuring every dollar spent contributes to your bottom line.",
    metaDescription:
      "Strategic marketing plan development. We build the roadmap to your business success.",
    desc: "Strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions.",
    features: [
      "Comprehensive Planning",
      "Data-Driven Insights",
      "Creative Ideation",
    ],
    sections: [
      {
        type: "text",
        title: "Holistic Strategy for a Fragmented World",
        content:
          "In today’s omnichannel environment, consistency is key. We create integrated marketing plans that synchronize your messaging across all touchpoints—from social media and email to PR and offline advertising. Our plans are flexible, measurable, and designed to scale.",
      },
      {
        type: "list",
        title: "What Our Plans Include",
        content:
          "Detailed roadmaps covering every aspect of your marketing ecosystem.",
        list: [
          "Executive Summary & Market Analysis",
          "Target Audience Personas & Journey Mapping",
          "Channel Strategy & Budget Allocation",
          "Content Calendar & Creative Direction",
          "KPI Definition & Measurement Frameworks",
        ],
      },
      {
        type: "highlight",
        title: "Execution-Ready",
        content:
          "We don’t just hand you a document and walk away. Our plans are practical and execution-ready, detailing day-to-day tactics and long-term milestones to ensure your team can hit the ground running.",
      },
    ],
    faqs: [
      {
        question: "Is this suitable for startups?",
        answer:
          "Absolutely. A solid marketing plan is even more critical for startups to ensure efficient use of limited resources.",
      },
      {
        question: "Do you help with execution?",
        answer:
          "Yes, we can seamlessly transition from planning to full-service execution as your marketing partner.",
      },
    ],
  },
  // Priority 5: Execution phase focused on ROI
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    icon: TrendingUp,
    image: "/images/services/performance_marketing_1768164883170.png",
    tagline: "Data-Focused Advertising for Maximum ROI",
    heroDescription:
      "Stop wasting budget on impressions that don’t convert. Our performance marketing strategies are laser-focused on driving measurable actions—clicks, leads, and sales—at the lowest possible acquisition cost.",
    metaDescription:
      " ROI-driven performance marketing. We optimize your ad spend for maximum impact.",
    desc: "Data-focused advertising campaigns optimized for maximum ROI and measurable impact.",
    features: ["Paid Search", "Social Ads", "Retargeting"],
    sections: [
      {
        type: "text",
        title: "Every Dollar Accountable",
        content:
          "We manage campaigns across Google Ads, Meta (Facebook/Instagram), LinkedIn, and programmatic networks. By constantly A/B testing copy, creatives, and audiences, we ensure your budget is allocated to the highest-performing channels.",
      },
      {
        type: "list",
        title: "Channels We Master",
        content: "Optimized for conversion.",
        list: [
          "Search Engine Marketing (SEM/PPC)",
          "Social Media Advertising",
          "Display & Native Advertising",
          "Conversion Rate Optimization (CRO)",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you charge?",
        answer:
          "We typically work on a hybrid model of management fee plus a percentage of ad spend, incentivizing us to scale your success.",
      },
    ],
  },
  // Priority 6: Long-term organic growth + measurement
  {
    id: "seo-analytics",
    slug: "seo-analytics",
    title: "SEO & Analytics",
    icon: BarChart,
    image: "/images/services/seo_analytics_1768164897957.png",
    tagline: "Visibility and Insights for Long-Term Growth",
    heroDescription:
      "Ranking high is good; ranking for the right keywords is better. We implement white-hat SEO strategies to drive organic traffic, paired with advanced analytics to turn that traffic into actionable business intelligence.",
    metaDescription:
      "Advanced SEO and analytics services. We help you dominate search results and understand your data.",
    desc: "Improving search engine visibility and deriving actionable insights from data to optimize performance.",
    features: ["Keyword Strategy", "Technical SEO", "Performance Tracking"],
    sections: [
      {
        type: "text",
        title: "Sustainable Organic Growth",
        content:
          "We don’t chase algorithm fads. We build a solid foundation of technical health, authoritative content, and quality backlinks. Our analytics team then helps you make sense of the data, setting up custom dashboards to track the metrics that actually matter to your C-suite.",
      },
      {
        type: "grid",
        title: "SEO Pillars",
        content: "Total site optimization.",
        list: [
          "Technical SEO: Site speed, mobile usability, and schema markup.",
          "On-Page SEO: Content optimization and keyword targeting.",
          "Off-Page SEO: Link building and authority signaling.",
          "Local SEO: GMB optimization for local visibility.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long until I see results?",
        answer:
          "SEO is a long-term strategy. Significant improvements usually take 3-6 months, but the ROI compounds over time.",
      },
    ],
  },
  // Priority 7: Tactical service supporting performance + SEO
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation",
    icon: Target,
    image: "/images/services/lead_generation_1768164831252.png",
    tagline: "Fueling Your Sales Pipeline with Quality Prospects",
    heroDescription:
      "Quantity is vanity; quality is sanity. Our lead generation strategies are hyper-focused on identifying and nurturing high-intent prospects who are ready to buy, maximizing your sales team’s efficiency and ROI.",
    metaDescription:
      "High-quality lead generation services. We fill your pipeline with prospects ready to convert.",
    desc: "Driving brand visibility and customer engagement to generate high-quality leads for your business.",
    features: [
      "Targeted Campaigns",
      "Conversion Optimization",
      "Pipeline Growth",
    ],
    sections: [
      {
        type: "text",
        title: "Precision Targeting",
        content:
          "We don’t rely on spray-and-pray tactics. Using advanced data profiling and intent monitoring, we pinpoint the exact decision-makers who need your solution. We engage them with personalized content that addresses their specific pain points, guiding them through the funnel until they are sales-ready.",
      },
      {
        type: "grid",
        title: "Lead Gen Channels",
        content: "We leverage a mix of inbound and outbound channels.",
        list: [
          "LinkedIn & B2B Social Selling",
          "Content Syndication & Gated Assets",
          "PPC & Display Retargeting",
          "Email Marketing Automation",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you qualify leads?",
        answer:
          "We use custom scoring models based on demographic fit and behavioral engagement (e.g., downloading a whitepaper, visiting pricing pages).",
      },
    ],
  },
  // Priority 8: Supporting service feeding marketing channels
  {
    id: "video-content-creation",
    slug: "video-content-creation",
    title: "Video Content Creation",
    icon: Video,
    image: "/images/services/video_content_1768164776471.png",
    tagline: "Visual Storytelling That Captivates and Converts",
    heroDescription:
      "In a digital landscape dominated by short attention spans, video is the most powerful tool to engage your audience. We produce high-quality, narrative-driven video content that not only showcases your brand but creates meaningful emotional connections with your customers.",
    metaDescription:
      "Professional video content creation services. We craft compelling visual stories that drive engagement and brand loyalty.",
    desc: "Crafting captivating video content is crucial for brands to engage their audience and showcase their products in a compelling manner.",
    features: [
      "High-quality production",
      "Storytelling",
      "Meaningful connections",
    ],
    sections: [
      {
        type: "text",
        title: "Cinematic Excellence Meets Marketing Strategy",
        content:
          "Video is more than just moving images; it is a strategic asset. Our production team blends cinematic excellence with marketing psychology to create videos that stop the scroll. From corporate documentaries to snappy social media reels, we tailor every frame to resonate with your target demographic.",
      },
      {
        type: "list",
        title: "Our Production Capabilities",
        content:
          "We handle the entire production lifecycle, ensuring a seamless experience from concept to final cut.",
        list: [
          "Concept Development & Scriptwriting",
          "On-location & Studio Filming",
          "Drone & Aerial Cinematography",
          "Motion Graphics & Animation",
          "Post-Production, Editing & Color Grading",
        ],
      },
      {
        type: "process",
        title: "From Concept to Screen",
        content:
          "Our disciplined process ensures your vision is translated perfectly onto the screen.",
        list: [
          "Pre-Production: Storyboarding, casting, and location scouting to set the stage.",
          "Production: utilizing state-of-the-art 4K cameras and lighting for professional quality.",
          "Post-Production: Editing, sound design, and VFX to bring the story to life.",
          "Distribution Strategy: Formatting and optimizing content for TV, Web, or Social Media platforms.",
        ],
      },
    ],
    faqs: [
      {
        question: "What types of videos do you produce?",
        answer:
          "We produce a wide range of content including brand films, product demos, testimonials, social media shorts, and corporate training videos.",
      },
      {
        question: "Do you provide scripts?",
        answer:
          "Yes, our creative team handles scriptwriting and storyboarding to ensure your message is clear and compelling.",
      },
      {
        question: "How long does production take?",
        answer:
          "Timelines vary by project scope, but typically range from 2 to 6 weeks from concept to final delivery.",
      },
    ],
  },
  // Priority 9: Maintenance + brand trust
  {
    id: "online-reputation-management",
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    icon: ShieldCheck,
    image: "/images/services/online_reputation_management_1768164848177.png",
    tagline: "Protecting and Enhancing Your Digital Legacy",
    heroDescription:
      "Your reputation is your most valuable asset. We help you build, monitor, and protect your brand’s online image, ensuring that when customers search for you, they see the best version of your business.",
    metaDescription:
      "Expert online reputation management. We safeguard your brand image and build digital trust.",
    desc: "Protecting and enhancing your brand's image across digital channels to build trust and credibility.",
    features: ["Brand Monitoring", "Review Management", "Crisis Response"],
    sections: [
      {
        type: "text",
        title: "Trust is the New Currency",
        content:
          "A single negative review or misleading article can cost you customers. Our ORM experts work around the clock to monitor brand sentiment, suppress negative results, and amplify positive customer experiences. We turn your reputation into a competitive advantage.",
      },
      {
        type: "list",
        title: "Our ORM Services",
        content: "Comprehensive protection for your brand.",
        list: [
          "24/7 Sentiment Monitoring",
          "Review Generation & Management",
          "Crisis Communication & PR",
          "Search Result Suppression & SEO",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you remove bad reviews?",
        answer:
          "While we cannot forcefully delete legitimate reviews, we can help dispute violations and suppress them by generating a volume of positive feedback.",
      },
    ],
  },
];

export function getAllServiceSlugs() {
  return services.map((service) => service.slug);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
