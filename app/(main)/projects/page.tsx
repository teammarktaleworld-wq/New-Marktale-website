"use client";

import React from "react";
import VisualJourneyHero from "@/components/projects/VisualJourneyHero";
import BestPostersGallery from "@/components/projects/BestPostersGallery";
import ReelsShowcase from "@/components/projects/ReelsShowcase";
import BlogsArticles from "@/components/projects/BlogsArticles";
import InfluencerMarketing from "@/components/projects/InfluencerMarketing";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import TeamCTA from "@/components/TeamCTA";

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <VisualJourneyHero />
      <BestPostersGallery />
      <ReelsShowcase />
      <ProjectsGallery />
      <BlogsArticles />
      <InfluencerMarketing />
      <TeamCTA />
    </div>
  );
}
