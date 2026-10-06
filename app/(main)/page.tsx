// // app/(main)/page.tsx

// import HeroSection from "../components/HeroSection";
// import PhilosophySection from "../components/PhilosophySection";
// import ServicesSection from "../components/ServicesSection";
// import AboutSection from "../components/AboutSection";
// import WorkGallery from "../components/WorkGallery";
// import Testimonials from "../components/Testimonials";
// import StartupFeature from "../components/StartupFeature";
// import AwardsGrid from "../components/awards/AwardsGrid";
// import TeamCTA from "../components/TeamCTA";
// import GlobalIndustries from "../components/GlobalIndustries";
// import CertificationsSection from "../components/CertificationsSection";
// import ReviewsSection from "../components/ReviewsSection";
// import WhatsAppMascot from "../components/WhatsAppMascot";
// import WhatsAppFloat from "../components/WhatsAppFloat";
// import PricingSection from "../components/PricingSection";
// import HomeContactSection from "../components/HomeContactSection";
// import CreativeShowcase from "../components/CreativeShowcase";

// export default async function Home() {

//   return (
//     <main className="min-h-screen bg-white">
//       <HeroSection />
//       <PhilosophySection />
//       <WorkGallery />
//       <StartupFeature />
//       <ServicesSection />
//       <PricingSection />
//       <GlobalIndustries />
//       <CreativeShowcase />
//       <Testimonials />
//       <AwardsGrid />
//       <TeamCTA />
//       <AboutSection />
//       <CertificationsSection />
//       <ReviewsSection />
//       <HomeContactSection />
//       {/* Floating WhatsApp Components */}
//       <WhatsAppMascot />
//       <WhatsAppFloat />
//     </main>
//   );
// }












// app/(main)/page.tsx

import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WorkGallery from "../components/WorkGallery";
import Testimonials from "../components/Testimonials";
import PricingSection from "../components/PricingSection";
import HomeContactSection from "../components/HomeContactSection";
import WhatsAppMascot from "../components/WhatsAppMascot";
import WhatsAppFloat from "../components/WhatsAppFloat";

// Removed — duplicates hero messaging, adds scroll length without conversion value
// import PhilosophySection from "../components/PhilosophySection";

// Removed — niche feature, distracts from main CTA funnel
// import StartupFeature from "../components/StartupFeature";

// Removed — too early in the funnel; pricing page handles this better
// import GlobalIndustries from "../components/GlobalIndustries";

// Removed — redundant with WorkGallery visual storytelling
// import CreativeShowcase from "../components/CreativeShowcase";

// Removed — awards feel self-congratulatory before trust is built; testimonials do this better
// import AwardsGrid from "../components/awards/AwardsGrid";

// Removed — team CTA is better placed on /about; disrupts homepage flow
// import TeamCTA from "../components/TeamCTA";

// Removed — about content belongs on /about page, not homepage
// import AboutSection from "../components/AboutSection";

// Removed — certifications add clutter; add as logos in footer or /about
// import CertificationsSection from "../components/CertificationsSection";

// Removed — duplicate of Testimonials
// import ReviewsSection from "../components/ReviewsSection";

export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hook — auto-playing video carousel + headline */}
      <HeroSection />

      {/* 2. Proof — show the work immediately after the hook */}
      <WorkGallery />

      {/* 3. What we do — services after proof, not before */}
      <ServicesSection />

      {/* 4. Social proof — real client voices */}
      <Testimonials />

      {/* 5. Investment — pricing after trust is established */}
      <PricingSection />

      {/* 6. Convert — contact form as the final CTA */}
      <HomeContactSection />

      {/* Floating WhatsApp */}
      <WhatsAppMascot />
      <WhatsAppFloat />
    </main>
  );
}