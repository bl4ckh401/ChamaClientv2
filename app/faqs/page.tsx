"use client";
import { HeroSection } from "@/components/faqs/hero";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/faqs/qa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";

export default function FAQPage() {
  const router = useRouter();
    const ctaRef = useRef<HTMLDivElement>(null);
  
  return (
    <main className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <FaqSection />
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-section p-12 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Chama Management?
              </span>
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of groups already using Chama Connect to manage
              their finances with confidence and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors duration-200"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
