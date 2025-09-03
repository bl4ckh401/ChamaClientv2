"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      icon: "🛡️",
      title: "Bank-Level Security",
      description: "Your funds are protected with military-grade encryption, multi-signature wallets, and blockchain immutability. Never worry about security again.",
      stats: "99.9% Uptime",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Designed specifically for African mobile users. Works seamlessly on any device, even with slow internet connections.",
      stats: "Works on 2G",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      icon: "⚡",
      title: "Instant Transactions",
      description: "Send and receive money instantly within your group. Integrate with M-Pesa, Airtel Money, and other mobile payment platforms.",
      stats: "<1 Second",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      icon: "🌍",
      title: "Built for Africa",
      description: "Understanding local contexts, currencies, and financial practices. Supporting multiple languages and regional preferences.",
      stats: "12 Languages",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      icon: "🤖",
      title: "Smart Analytics",
      description: "AI-powered insights help your group make better financial decisions. Predictive analytics for savings goals and loan approvals.",
      stats: "95% Accuracy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      icon: "💎",
      title: "Premium Support",
      description: "24/7 customer support in your local language. Dedicated account managers for enterprise clients and training resources.",
      stats: "24/7 Support",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    }
  ];

  useGSAP(() => {
    if (!isClient || !sectionRef.current) return;

    try {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Features animation
      const whyFeatures = document.querySelectorAll(".why-feature");
      if (whyFeatures.length > 0) {
        gsap.from(whyFeatures, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }

    } catch (error) {
      console.log("WhyChooseUs animation error:", error);
    }

    // Refresh ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, [isClient, isMobile]);


  if (!isClient) return null;

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-[var(--muted)] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)]/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
            Why Choose Us
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
            The Most Trusted
            <span className="text-gradient block">Chama Platform</span>
          </h2>
          
          <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied users who trust our platform for their financial needs. 
            Experience the difference of purpose-built technology.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="why-feature group cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="glass-card p-6 rounded-2xl hover-lift h-full transition-all duration-300">
                {/* Feature Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl bg-[var(--primary)]/10 rounded-full w-12 h-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--primary)] font-medium">
                      {feature.stats}
                    </div>
                  </div>
                </div>

                {/* Feature Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[var(--foreground)]/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="w-full bg-[var(--border)] rounded-full h-1 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: hoveredFeature === index ? '100%' : '0%' 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[var(--foreground)]">10,000+</div>
            <div className="text-[var(--foreground)]/60">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[var(--foreground)]">$50M+</div>
            <div className="text-[var(--foreground)]/60">Funds Secured</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[var(--foreground)]">500+</div>
            <div className="text-[var(--foreground)]/60">Active Groups</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[var(--foreground)]">99.9%</div>
            <div className="text-[var(--foreground)]/60">Satisfaction</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover-lift transition-all duration-300">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover-lift transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
