"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const plans = [
    {
      name: "Basic Plan",
      description: "Ideal for small groups (5-20 members)",
      price: "Pricing TBD",
      popular: false,
      features: [
        { text: "Up-to 20 Members", included: true },
        { text: "Download accounting reports", included: true },
        { text: "Professional accounting tools", included: true },
        { text: "Advanced accounting features", included: false },
        { text: "Additional 50KES for each additional member (>20)", included: true },
        { text: "Constitution and policy configuration", included: true },
        { text: "Support Availability", included: true },
        { text: "Group notifications", included: true },
        { text: "Secure savings ledger", included: true },
        { text: "Blockchain-based transaction tracking", included: true }
      ],
      gradient: "from-blue-400 to-cyan-400",
      hoverGradient: "from-blue-500 to-cyan-500",
      icon: "💼"
    },
    {
      name: "Premium Plan",
      description: "Ideal for larger groups (20+ members)",
      price: "Pricing TBD",
      popular: true,
      features: [
        { text: "Up-to 30 Members", included: true },
        { text: "Professional accounting tools", included: true },
        { text: "Additional 50KES for each additional member (>30)", included: true },
        { text: "Constitution and policy configuration", included: true },
        { text: "Financial analytics", included: true },
        { text: "Fraud detection", included: true },
        { text: "Group notifications", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Priority customer support", included: true },
        { text: "Blockchain-based transaction tracking", included: true }
      ],
      gradient: "from-purple-400 to-fuchsia-400",
      hoverGradient: "from-purple-500 to-fuchsia-500",
      icon: "🚀"
    }
  ];

  // Define floating element positions
  const floatingElementPositions = [
    { left: 10, top: 15, size: 4 },
    { left: 85, top: 10, size: 6 },
    { left: 75, top: 80, size: 8 },
    { left: 15, top: 75, size: 5 },
    { left: 60, top: 20, size: 7 },
    { left: 30, top: 85, size: 3 },
    { left: 90, top: 45, size: 6 }
  ];

  useGSAP(() => {
    if (!sectionRef.current || !isClient) return;
    
    // Initialize visibility
    gsap.set([titleRef.current, subtitleRef.current, tabsRef.current, cardsContainerRef.current, ctaRef.current].filter(Boolean), {
      opacity: 1,
      visibility: "visible"
    });

    // Create floating elements animation
    const floatingElements = decorationRef.current?.querySelectorAll('.floating-element');
    if (floatingElements) {
      floatingElements.forEach((element, index) => {
        gsap.fromTo(element, 
          { y: 30, opacity: 0, scale: 0.5 },
          { y: 0, opacity: 1, scale: 1, duration: 1.5, delay: index * 0.1, ease: "power2.out" }
        );
        
        // Continuous gentle movement
        gsap.to(element, {
          y: "random(-15, 15)",
          x: "random(-10, 10)",
          duration: "random(4, 8)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      });
    }

    // Main scroll animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Title animations
    if (titleRef.current) {
      timeline.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
    
    if (subtitleRef.current) {
      timeline.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );
    }

    // Tabs animation
    if (tabsRef.current) {
      timeline.fromTo(tabsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Card animations
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach((card, index) => {
      timeline.fromTo(card,
        { y: 40, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: "back.out(1.2)" 
        },
        `-=${0.6 - index * 0.2}`
      );
    });

    // Badge animations for the popular plan
    const popularBadge = document.querySelector('.popular-badge');
    if (popularBadge) {
      timeline.fromTo(popularBadge,
        { scale: 0, rotation: -15, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
        "-=0.4"
      );
    }

    // Features staggered animation
    const features = document.querySelectorAll('.feature-item');
    timeline.fromTo(features,
      { y: 15, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        duration: 0.5, 
        ease: "power2.out" 
      },
      "-=0.5"
    );

    // CTA animation
    if (ctaRef.current) {
      timeline.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }

    // Parallax effect for decorative elements
    if (!isMobile && decorationRef.current) {
      gsap.to(decorationRef.current, {
        y: "-15%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

  }, [isMobile, isClient]);

  const handleCardHover = (index: number | null) => {
    setHoveredCard(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--background) 0%, var(--card-bg) 40%, var(--background) 100%)"
      }}
    >
      {/* Decorative Background Elements */}
      {isClient && (
        <div ref={decorationRef} className="absolute inset-0 pointer-events-none">
          {floatingElementPositions.map((pos, i) => (
            <div
              key={i}
              className="floating-element absolute rounded-full bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                width: `${pos.size}rem`,
                height: `${pos.size}rem`,
                filter: 'blur(15px)',
                opacity: 0.3
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div ref={titleRef} className="mb-4" style={{ opacity: 1, visibility: 'visible' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-full border border-[var(--primary)]/30 mb-4">
              <span className="text-lg">💲</span>
              <span className="text-sm font-medium text-[var(--primary)]">Affordable</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent leading-tight">
              Pricing Plans
            </h2>
          </div>
          
          <div ref={subtitleRef} className="max-w-2xl mx-auto" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-xl text-[var(--muted)]">
              Pricing Will Be Finalized Post-MVP
            </p>
          </div>
        </div>
        
        {/* Pricing Toggle */}
        <div ref={tabsRef} className="flex justify-center mb-12" style={{ opacity: 1, visibility: 'visible' }}>
          <div className="inline-flex p-1 bg-[var(--card-bg)] rounded-lg border border-[var(--border)]">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === "monthly"
                  ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--foreground)] shadow-lg"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeTab === "yearly"
                  ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--foreground)] shadow-lg"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div ref={cardsContainerRef} className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto" style={{ opacity: 1, visibility: 'visible' }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative p-8 rounded-2xl transition-all duration-300 ${
                hoveredCard === index
                  ? "transform -translate-y-3"
                  : ""
              }`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                boxShadow: hoveredCard === index 
                  ? "0 20px 40px rgba(0,0,0,0.2)"
                  : "0 8px 20px rgba(0,0,0,0.1)"
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="popular-badge absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-[var(--background)] text-sm font-bold py-1 px-4 rounded-full shadow-lg">
                  Popular
                </div>
              )}
              
              {/* Plan Icon */}
              <div className="mb-6">
                <div 
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${plan.gradient} text-[var(--foreground)] text-3xl`}
                  style={{
                    transform: hoveredCard === index ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0)",
                    transition: "transform 0.3s ease"
                  }}
                >
                  {plan.icon}
                </div>
              </div>

              {/* Plan Name & Description */}
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{plan.name}</h3>
              <p className="text-[var(--muted)] mb-6">{plan.description}</p>

              {/* Plan Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-[var(--foreground)]">{plan.price}</div>
              </div>

              {/* Plan Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item flex items-start gap-3">
                    <div className={`mt-1 ${feature.included ? "text-green-500" : "text-[var(--muted)]"}`}>
                      {feature.included ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={feature.included ? "text-[var(--foreground)]" : "text-[var(--muted)]"}>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Call To Action */}
              <div ref={ctaRef}>
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular 
                      ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black hover:shadow-lg hover:scale-105" 
                      : "bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)]/10"
                  }`}
                  style={{
                    boxShadow: hoveredCard === index && plan.popular ? "0 10px 25px rgba(0,0,0,0.2)" : "none"
                  }}
                >
                  Get started
                </button>
              </div>
              
              {/* Hover Effect Gradient Overlay */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${plan.popular ? "rgba(168, 85, 247, 0.1)" : "rgba(59, 130, 246, 0.1)"} 0%, transparent 100%)`,
                  opacity: hoveredCard === index ? 0.3 : 0
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full opacity-10 blur-3xl" />
    </section>
  );
};

export default Pricing;
