"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Users, TrendingUp, Target, Globe, LucideIcon } from "lucide-react";

// Strict TypeScript Interfaces for Production Stability
interface MetricItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface CaseStudy {
  title: string;
  category: string;
  country: string;
  tags: string[];
  challenge: string;
  solution: string;
  metrics: MetricItem[];
  quote: string;
}

const detailedStudies: Record<string, CaseStudy> = {
  mentorleap: {
    title: "MentorLeap",
    category: "EdTech",
    country: "India",
    tags: ["AI Mentorship", "EdTech Platform", "Strategic Branding"],
    challenge: "Hesitant professionals struggled with boardroom communication and leadership identity due to generic, non-scalable learning approaches.",
    solution: "We deployed an AI-powered mentorship structure that mapped skill gaps instantly, offering hyper-personalized learning paths.",
    metrics: [
      { label: "Professionals Transformed", value: "10,000+", icon: Users },
      { label: "Platform Growth", value: "400%", icon: TrendingUp },
      { label: "Core Feature", value: "AI-Powered", icon: Target }
    ],
    quote: "MentorLeap re-engineered how professionals look at executive presence across standard tech firms."
  },
  delhi059: {
    title: "Delhi059",
    category: "Hospitality",
    country: "Canada",
    tags: ["Local SEO", "Social Media", "Reputation Management"],
    challenge: "Chef Kanishk wanted to bring authentic Indian flavors to Canada but had absolutely zero digital footprint or local discovery channels.",
    solution: "Built a robust organic identity from scratch covering strategic local SEO, intense social proofing, and reputation mechanics.",
    metrics: [
      { label: "Organic Google Reviews", value: "650+", icon: Users },
      { label: "Revenue Inflow Growth", value: "500%", icon: TrendingUp },
      { label: "Marketing Budget Spend", value: "Zero Ads", icon: Target }
    ],
    quote: "MarkTale gave our kitchen an authentic digital voice across Canada that brought pure local momentum."
  },
  localride: {
    title: "Local Ride",
    category: "Transportation",
    country: "Canada",
    tags: ["App Marketing", "Growth Strategy", "Branding"],
    challenge: "Entering a highly monopolized rideshare market dominated by multi-billion dollar tech giants required a brilliant grassroots challenger strategy.",
    solution: "Engineered local brand narratives combined with precise geofenced app marketing and rider retention funnels.",
    metrics: [
      { label: "Completed Rides", value: "100k+", icon: Users },
      { label: "User Acquisition Rate", value: "300%", icon: TrendingUp },
      { label: "Market Footprint", value: "Full Build", icon: Target }
    ],
    quote: "Turned our rideshare startup idea into a trusted daily utility platform safely."
  },
  bgfoods: {
    title: "BG Foods",
    category: "E-commerce",
    country: "Canada/USA",
    tags: ["Performance Ads", "E-commerce SEO", "Logistics Storytelling"],
    challenge: "Scaling regional Indian grocery and snack products to highly competitive North American retail shelves and cross-border digital buyers.",
    solution: "Implemented end-to-end performance ad pipelines, search optimization, and dynamic cross-border tracking transparency.",
    metrics: [
      { label: "Successfully Shipped Orders", value: "50k+", icon: Users },
      { label: "Digital Sales Velocity", value: "1000%", icon: TrendingUp },
      { label: "Cross-Border Coverage", value: "2 Countries", icon: Target }
    ],
    quote: "Our cross-border orders multiplied exponentially under MarkTale's watch."
  },
  deecee: {
    title: "Dee Cee Accessories",
    category: "Jewelry",
    country: "India",
    tags: ["E-commerce Setup", "Product Photography", "SEO Cataloging"],
    challenge: "A highly trusted, legacy offline jewelry manufacturer with absolutely no internet storefront or direct-to-consumer pipelines.",
    solution: "Engineered a high-end digital showroom backed by professional micro-photography and deep organic catalog search tuning.",
    metrics: [
      { label: "Gross Sales Multiplier", value: "10x", icon: Users },
      { label: "Online Store Growth", value: "900%", icon: TrendingUp },
      { label: "Digital Framework", value: "Full Setup", icon: Target }
    ],
    quote: "They beautifully digitized generations of traditional crafting heritage flawlessly."
  },
  cabtale: {
    title: "CabTale",
    category: "Transportation",
    country: "India",
    tags: ["UI/UX Strategy", "Digital Marketing", "App Growth Loops"],
    challenge: "Solving high friction urban transit demands required an intuitive, lightning-fast application experience backed by heavy localized awareness.",
    solution: "Crafted sleek, high-efficiency interface flows coupled with massive digital outreach loops targeting urban commuters.",
    metrics: [
      { label: "App Store Downloads", value: "1M+", icon: Users },
      { label: "Active User Scalability", value: "800%", icon: TrendingUp },
      { label: "Industry Category", value: "Mobility", icon: Target }
    ],
    quote: "A flawless UI overhaul that drove real organic volume on app stores instantly."
  },
  lastmile: {
    title: "Last Mile Care",
    category: "NGO",
    country: "India",
    tags: ["Brand Identity", "Donor Outreach", "Social Presence Engine"],
    challenge: "An impactful ground-level healthcare collective struggled to build digital transparency needed for continuous institutional donations.",
    solution: "Restructured their digital narrative engine using emotional video case profiles and real-time impact validation dashboards.",
    metrics: [
      { label: "Lives Influenced Digitally", value: "50k+", icon: Users },
      { label: "Donor Engagement Rate", value: "200%", icon: TrendingUp },
      { label: "Core Agency Goal", value: "Social Impact", icon: Target }
    ],
    quote: "Amplified our field initiatives to global philanthropists gracefully and authentically."
  },
  biryanibar: {
    title: "Biryani Bar",
    category: "Hospitality",
    country: "India",
    tags: ["Viral Content Strategy", "Social Media Growth", "Local Discovery"],
    challenge: "A brilliant local eatery with delicious food remained undiscovered outside its immediate neighborhood due to low local social presence.",
    solution: "Executed a food-first viral short video campaign that captured culinary processes, creating immense localized consumer demand.",
    metrics: [
      { label: "Average Post Likes", value: "3.5k+", icon: Users },
      { label: "Audience Engagement", value: "Viral Loops", icon: TrendingUp },
      { label: "Footfall Status", value: "Full House", icon: Target }
    ],
    quote: "Every single reel they planned directly converted into massive weekend table queues."
  },
  astronexus: {
    title: "Astro Nexus",
    category: "Astrology",
    country: "India",
    tags: ["Brand Development", "Targeted Marketing", "Content Engine"],
    challenge: "Scaling modern algorithmic astrology services inside a tradition-bound niche without losing cultural authenticity or depth.",
    solution: "Blended contemporary design systems with deep spiritual educational graphics to drive hyper-targeted community growth.",
    metrics: [
      { label: "Average Likes Per Post", value: "1.8k+", icon: Users },
      { label: "Target Community", value: "High Niche", icon: TrendingUp },
      { label: "User Interaction", value: "High Activity", icon: Target }
    ],
    quote: "MarkTale captured complex spiritual tech concepts with beautiful aesthetic precision."
  },
  promac: {
    title: "Promac Advisory",
    category: "Real Estate",
    country: "India",
    tags: ["Lead Generation", "Trust Branding", "Social Proofing Layouts"],
    challenge: "High-ticket property advisory firms require deep consumer trust, making traditional cold transactional digital ads highly ineffective.",
    solution: "Engineered premium digital portfolios highlighting detailed case studies, video testimonials, and data-driven property insight pieces.",
    metrics: [
      { label: "Qualified Intent Leads", value: "50+/Month", icon: Users },
      { label: "Platform Trust Metric", value: "Excellent", icon: TrendingUp },
      { label: "Engagement Class", value: "Premium Content", icon: Target }
    ],
    quote: "Transformed cold web window shoppers into deep high-value lifelong clients."
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const project = detailedStudies[resolvedParams.slug];

  if (!project) {
    return <div className="text-center py-20 text-zinc-500">Project Not Found</div>;
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900 py-16 px-4 md:px-8 selection:bg-blue-600/10">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Top Control Header */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 text-xs font-semibold uppercase tracking-wider group transition-colors bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"/> Back to Showcase
          </button>
          <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase">Case Study File</span>
        </div>

        {/* Title and Tags Section */}
        <div className="space-y-4 border-b border-zinc-100 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500 font-medium bg-zinc-50 px-3 py-1 rounded-full border border-zinc-200">
              📍 Operational Region: {project.country}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-950">{project.title}</h1>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag: string, index: number) => (
              <span key={index} className="text-xs bg-zinc-50 text-zinc-600 border border-zinc-200 px-3 py-1 rounded-lg font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge & Strategy Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-zinc-200 p-6 rounded-2xl space-y-3 shadow-xs">
            <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> The Challenge
            </h3>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">{project.challenge}</p>
          </div>

          <div className="bg-zinc-50/60 border border-zinc-200 p-6 rounded-2xl space-y-3 shadow-xs">
            <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> The Execution Strategy
            </h3>
            <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-medium">{project.solution}</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-400">Validated Impact Metrics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric: MetricItem, index: number) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="bg-white border border-zinc-200 p-5 rounded-2xl flex items-center gap-4 shadow-xs">
                  <div className="p-3 bg-blue-50 text-blue-600 border border-blue-100 rounded-xl">
                    <Icon className="w-5 h-5"/>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-zinc-950 tracking-tight">{metric.value}</div>
                    <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-0.5">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="border-l-4 border-blue-600 bg-zinc-50 p-6 rounded-r-2xl">
          <p className="text-zinc-600 italic text-sm md:text-base leading-relaxed">
            &ldquo;{project.quote}&rdquo;
          </p>
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs font-medium">Want to deploy a similar infrastructure for your business model?</p>
          <Link className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-zinc-950/10" href="/#contact">
            Launch Campaign Operations <Globe className="w-4 h-4"/>
          </Link>
        </div>

      </div>
    </main>
  );
}