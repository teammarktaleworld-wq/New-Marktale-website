import PageHero from "@/components/ui/PageHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSteps from "@/components/services/ProcessSteps";
import TeamCTA from "@/components/TeamCTA";
import ServiceDeepDive from "@/components/services/ServiceDeepDive";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Services"
        subtitle="What We Do"
        description="Comprehensive solutions to scale your business with AI-powered strategies and human creativity."
      />
      <ServicesGrid />
      <ProcessSteps />
      <ServiceDeepDive />
      <TeamCTA />
    </div>
  );
}
