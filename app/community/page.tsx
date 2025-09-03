import { HeroSection } from "@/components/community/sections/hero";
import { SupportSection } from "@/components/community/sections/support";
import { EventsSection } from "@/components/community/sections/events";
import { BlogSection } from "@/components/community/sections/blog";
import { ShowcaseSection } from "@/components/community/sections/showcase";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]  w-full overflow-x-hidden">
      <HeroSection />
      <ShowcaseSection />
      <SupportSection />
      <EventsSection />
      <BlogSection />
    </main>
  );
}
