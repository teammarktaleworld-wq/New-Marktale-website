"client";

import React from "react";
import PageHero from "@/components/ui/PageHero";
import AwardsGrid from "@/components/awards/AwardsGrid";
import AwardsImpact from "@/components/awards/AwardsImpact";
import TeamCTA from "@/components/TeamCTA";

export default function AwardsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Awards & Recognition"
        subtitle="Excellence"
        description="Our journey is defined by the milestones we've crossed and the impact we've created for our partners."
      />
      <AwardsGrid />
      <AwardsImpact />
      <TeamCTA />
    </div>
  );
}
