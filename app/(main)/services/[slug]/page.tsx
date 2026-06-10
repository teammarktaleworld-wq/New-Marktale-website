import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/servicesData";
import ServiceHero from "@/components/services/detail/ServiceHero";
import ServiceContent from "@/components/services/detail/ServiceContent";
import ServiceCTA from "@/components/services/detail/ServiceCTA";
import ServiceFAQ from "@/components/services/detail/ServiceFAQ";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | MarkTale`,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        title={service.title}
        tagline={service.tagline}
        description={service.heroDescription}
        iconSmall={<Icon size={18} className="text-kestone-red" />}
        iconLarge={<Icon size={120} className="absolute text-white/10" />}
        image={service.image}
      />

      <ServiceContent sections={service.sections} />

      <ServiceCTA />

      <ServiceFAQ faqs={service.faqs} />
    </main>
  );
}
