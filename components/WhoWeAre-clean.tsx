"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { theme } = useTheme();
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      icon: "🔒",
      title: "Table Banking Groups",
      description: "ChamaConnect helps table banking groups by pooling savings, disbursing loans, tracking guarantors, and managing fines.",
      image: "/image2.png"
    },
    {
      icon: "📊",
      title: "Sacco Groups",
      description: "The platform's streamlined features help handle contributions, structured loans, dividends, and guarantor-based loan approvals.",
      image: "/image3.png"
    },
    {
      icon: "🤝",
      title: "Merry-Go Round Groups",
      description: "This simplified system aids in managing contributions, tracking beneficiaries, and maintaining rotation schedules.",
      image: "/image1.png"
    },
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

      // Cards animation
      const featureCards = document.querySelectorAll(".feature-card");
      if (featureCards.length > 0) {
        gsap.from(featureCards, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }

    } catch (error) {
      console.log("WhoWeAre animation error:", error);
    }

    // Refresh ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, [isClient, isMobile]);

  if (!isClient) return null;

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-[var(--background)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
            Who We are
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
            Built for African
            <span className="text-gradient block">Savings Groups</span>
          </h2>
          
          <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
            We understand the unique needs of African communities. Our platform combines traditional values 
            with cutting-edge technology to empower financial growth.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="glass-card pb-6 rounded-2xl hover-lift h-full transition-all duration-300">
                {/* Feature Image */}
                <div className="relative overflow-hidden mb-6 h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-3xl bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <div className="space-y-4 px-6">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[var(--foreground)]/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="flex items-center text-[var(--primary)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover-lift transition-all duration-300">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover-lift transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
