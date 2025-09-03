"use client";

import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre-clean";
import WhyChooseUs from "@/components/WhyChooseUs-clean";
import Discover from "@/components/Discover";
import Pricing from "@/components/Pricing-clean";
import FAQs from "@/components/FAQs-clean";
import Footer from "@/components/Footer";

export default function PageContent() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Hero />
      <Discover />
      <WhoWeAre />
      <WhyChooseUs />
      <Pricing />
      <FAQs />
    </div>
  );
}
