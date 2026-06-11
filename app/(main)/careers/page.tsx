"use client";

import React from "react";
import PageHero from "@/components/ui/PageHero";
import CareersContent from "@/components/careers/CareersContent";
import TeamCTA from "@/components/TeamCTA";
import TeamCulture from "@/components/about/TeamCulture";

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Careers"
        subtitle="Join Us"
        description="We are building the future of marketing. If you want to move fast and break things, you belong here."
      />
      <TeamCulture />
      <CareersContent />
      <TeamCTA />
    </div>
  );
}
