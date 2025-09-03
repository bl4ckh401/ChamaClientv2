"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Stable positions for floating elements
  const floatingElementPositions = [
    { left: 15, top: 25 },
    { left: 80, top: 20 },
    { left: 90, top: 70 },
    { left: 10, top: 80 },
    { left: 70, top: 15 },
    { left: 25, top: 85 },
    { left: 85, top: 45 },
    { left: 5, top: 50 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      title: "Unmatched Security Features",
      description: "Your data is protected with advanced encryption and secure access protocols to ensure privacy.",
      icon: "🔒",
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.4)"
    },
    {
      title: "Smart Contracts for Automated Transactions",
      description: "We are testing the implementation of smart contracts for loans, withdrawals, and savings disbursements.",
      icon: "⚡",
      gradient: "from-blue-500 to-purple-600",
      glowColor: "rgba(99, 102, 241, 0.4)"
    },
    {
      title: "Fully Customizable Configurations",
      description: "Adapt the platform to fit your group's unique constitution and policies effortlessly.",
      icon: "⚙️",
      gradient: "from-orange-500 to-red-600",
      glowColor: "rgba(251, 146, 60, 0.4)"
    },
    {
      title: "Tamper-Proof Record Keeping System",
      description: "Maintain accurate records with our built-in accounting tools. The MVP aims to create a blockchain-backed ledger to ensure record integrity.",
      icon: "📊",
      gradient: "from-purple-500 to-pink-600",
      glowColor: "rgba(168, 85, 247, 0.4)"
    }
  ];

  useGSAP(() => {
    if (!sectionRef.current || !isClient) return;
    
    // Initialize visibility
    const elements = [titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current].filter(Boolean);
    
    // Ensure content is visible initially
    gsap.set(elements, {
      opacity: 1, 
      visibility: "visible"
    });
    gsap.set(".feature-card", { opacity: 1, visibility: "visible" });
    gsap.set(".trust-badge", { opacity: 1, visibility: "visible" });

    // Floating elements animation
    const floatingElements = floatingElementsRef.current?.querySelectorAll('.floating-element');
    if (floatingElements) {
      floatingElements.forEach((element, index) => {
        gsap.fromTo(element, 
          { y: 40, opacity: 0, scale: 0.5 },
          { y: 0, opacity: 1, scale: 1, duration: 1.5, delay: index * 0.1, ease: "power2.out" }
        );
        
        gsap.to(element, {
          y: "random(-15, 15)",
          x: "random(-10, 10)",
          duration: "random(5, 8)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
      });
    }

    // Main timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate trust badge
    const trustBadge = sectionRef.current?.querySelector('.trust-badge');
    if (trustBadge) {
      timeline.fromTo(trustBadge,
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
      );
    }

    // Animate title
    if (titleRef.current) {
      timeline.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Animate subtitle
    if (subtitleRef.current) {
      timeline.fromTo(subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Animate description
    if (descriptionRef.current) {
      timeline.fromTo(descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }

    // Animate features
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      timeline.fromTo(card,
        { y: 80, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.2)" },
        `-=${0.5 - index * 0.1}`
      );
    });

    // Animate CTA
    if (ctaRef.current) {
      timeline.fromTo(ctaRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }

    // Parallax effect
    if (!isMobile && floatingElements) {
      gsap.to(floatingElements, {
        y: "-25%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

  }, [isMobile, isClient]);

  // Feature hover animations
  const handleFeatureHover = (index: number, isEntering: boolean) => {
    const card = document.querySelector(`.feature-card-${index}`);
    const icon = card?.querySelector('.feature-icon');
    
    if (!card) return;
    
    if (isEntering) {
      setHoveredFeature(index);
      gsap.to(card, {
        scale: 1.03,
        y: -8,
        boxShadow: `0 20px 40px ${features[index].glowColor}`,
        duration: 0.3,
        ease: "power2.out"
      });
      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    } else {
      setHoveredFeature(null);
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out"
      });
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--card-bg) 0%, var(--background) 30%, var(--card-bg) 70%, var(--background) 100%)"
      }}
    >
      {/* Floating Background Elements */}
      {isClient && (
        <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none opacity-15">
          {floatingElementPositions.map((position, i) => (
            <div
              key={i}
              className="floating-element absolute w-4 h-4 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/10 to-transparent opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Badge */}
        <div className="text-center mb-8">
          <div className="trust-badge inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-full border border-[var(--primary)]/30" style={{ opacity: 1, visibility: 'visible' }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-[var(--foreground)]">Bank-Level Security</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div ref={titleRef} className="mb-4" style={{ opacity: 1, visibility: 'visible' }}>
            <h4 className="text-[var(--primary)] font-bold tracking-wider mb-2">WHY CHOOSE US</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)]">
              Benefits That Make Us <span className="text-[var(--primary)]">Stand Out</span>
            </h2>
          </div>
          
          <div ref={subtitleRef} className="mb-4" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-xl text-[var(--muted)]">Innovative features designed specifically for Kenyan table banking groups</p>
          </div>

          <div ref={descriptionRef} className="max-w-2xl mx-auto" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-[var(--muted)]">Our platform combines ease of use with powerful functionality, providing your group with the tools needed for smooth and transparent financial management.</p>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12" style={{ opacity: 1, visibility: 'visible' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card feature-card-${index} p-8 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] transition-all duration-300 cursor-pointer`}
              style={{ 
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                opacity: 1,
                visibility: 'visible'
              }}
              onMouseEnter={() => handleFeatureHover(index, true)}
              onMouseLeave={() => handleFeatureHover(index, false)}
            >
              <div className="flex items-start gap-5">
                {/* Feature Icon */}
                <div className={`feature-icon shrink-0 w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-[var(--foreground)] text-2xl`}>
                  {feature.icon}
                </div>

                {/* Feature Content */}
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{feature.title}</h3>
                  <p className="text-[var(--muted)]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="text-center mb-12">
          <blockquote className="max-w-3xl mx-auto px-6 py-8 rounded-xl bg-[var(--card-bg)]/60 border border-[var(--border)]">
            <p className="text-lg italic text-[var(--muted)] mb-4">
              "ChamaConnect has completely transformed how our table banking group operates. The transparency and efficiency we've gained have increased member trust and participation."
            </p>
            <footer className="font-medium text-[var(--foreground)]">
              — Mary Wanjiku, Chairperson of Umoja Table Banking Group
            </footer>
          </blockquote>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center" style={{ opacity: 1, visibility: 'visible' }}>
          <button className="px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-black font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your 30-Day Free Trial
          </button>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full opacity-10 blur-xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default WhyChooseUs;
