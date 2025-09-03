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
            <span className="text-2xl">🛡️</span>
            <span className="text-sm font-medium text-[var(--primary)]">Trust</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div ref={titleRef} className="mb-4" style={{ opacity: 1, visibility: 'visible' }}>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent leading-tight">
              Why Choose Our Table Banking Platform?
            </h2>
          </div>
          
          <div ref={subtitleRef} className="mb-6" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-lg lg:text-xl text-[var(--foreground)] opacity-90 leading-relaxed max-w-3xl mx-auto">
              Chama Connect is currently in the MVP phase, where we are developing and testing secure, 
              transparent financial record-keeping solutions for Chamas and SACCOs.
            </p>
          </div>

          <div ref={descriptionRef} style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-base lg:text-lg font-medium text-[var(--accent)] leading-relaxed">
              Sign up to be part of our early testing group!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12" style={{ opacity: 1, visibility: 'visible' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card feature-card-${index} relative p-6 lg:p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] cursor-pointer transition-all duration-300`}
              style={{
                background: `linear-gradient(135deg, var(--card-bg) 0%, var(--card-bg) 100%)`,
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                opacity: 1,
                visibility: 'visible'
              }}
              onMouseEnter={() => handleFeatureHover(index, true)}
              onMouseLeave={() => handleFeatureHover(index, false)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 transition-opacity duration-300 pointer-events-none`} />
              
              {/* Icon */}
              <div className="feature-icon text-4xl lg:text-5xl mb-4 transform transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="feature-content relative z-10">
                <h4 className="text-xl lg:text-2xl font-bold text-[var(--foreground)] mb-3 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-[var(--foreground)] opacity-80 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Gradient Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${feature.glowColor} 0%, transparent 100%)`
                }}
              />
            </div>
          ))}
        </div>

        {/* Professional Image Placeholder */}
        <div className="text-center mb-12">
          <div className="inline-block p-8 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 rounded-3xl border border-[var(--primary)]/20">
            <div className="text-6xl mb-4">👨‍💼</div>
            <p className="text-sm text-[var(--foreground)] opacity-70">Professional using ChamaConnect</p>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center" style={{ opacity: 1, visibility: 'visible' }}>
          <button className="group relative px-8 py-4 bg-[var(--primary)] text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[var(--accent)] hover:scale-105 hover:shadow-2xl overflow-hidden">
            <span className="relative z-10">Join Early Testing</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
