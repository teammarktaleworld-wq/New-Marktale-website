import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import Delhi059Page from "@/components/projects/Delhi059Page";
import PageHero from "@/components/ui/PageHero";
import TeamCTA from "@/components/TeamCTA";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Special treatment for Delhi 059
  if (id === "delhi059") {
    return <Delhi059Page project={project} />;
  }

  // Default project page for other projects
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title={project.title}
        subtitle="Case Study"
        description={project.description}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-kestone-red transition-colors mb-12"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>

          {/* Image */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar / Specs */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-neutral-50 p-8 rounded-2xl border border-gray-100 sticky top-32">
                <h3 className="text-xl font-heading font-bold mb-6 border-b border-gray-200 pb-4">
                  Project Data
                </h3>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Client
                    </span>
                    <span className="text-lg font-medium text-kestone-black">
                      {project.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Industry
                    </span>
                    <span className="text-lg font-medium text-kestone-black">
                      {project.tags[0]}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Year
                    </span>
                    <span className="text-lg font-medium text-kestone-black">
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      Services
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.services.map((s, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <div className="max-w-3xl">
                <section className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-kestone-black">
                    The Challenge
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-body">
                    {project.challenge}
                  </p>
                </section>

                <section className="mb-16">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-kestone-black">
                    The Strategy
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-body">
                    {project.solution}
                  </p>
                </section>

                <section className="mb-16 bg-kestone-black text-white p-10 rounded-2xl">
                  <h2 className="text-3xl font-heading font-bold mb-8">
                    The Outcome
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed font-body mb-10">
                    {project.outcome}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-800 pt-8">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <span className="block text-4xl font-heading font-bold text-kestone-red mb-2">
                          {stat.value}
                        </span>
                        <span className="block text-sm font-bold uppercase tracking-widest text-gray-500">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamCTA />
    </div>
  );
}
