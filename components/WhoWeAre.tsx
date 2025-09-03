"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { theme } = useTheme();
  
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Stable positions for floating elements (avoid Math.random() hydration issues)
  const floatingElementPositions = [
    { left: 10, top: 20 },
    { left: 85, top: 15 },
    { left: 75, top: 80 },
    { left: 15, top: 70 },
    { left: 60, top: 25 },
    { left: 30, top: 90 },
    { left: 90, top: 50 },
    { left: 5, top: 45 },
    { left: 70, top: 10 },
    { left: 40, top: 85 },
    { left: 80, top: 35 },
    { left: 25, top: 60 }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const groupTypes = [
    {
      title: "Table Banking Groups",
      description: "ChamaConnect helps table banking groups by pooling savings, disbursing loans, tracking guarantors, and managing fines.",
      icon: "💰",
      gradient: "from-blue-500 to-purple-600",
      glowColor: "rgba(99, 102, 241, 0.4)"
    },
    {
      title: "Sacco Groups", 
      description: "The platform's streamlined features help handle contributions, structured loans, dividends, and guarantor-based loan approvals.",
      icon: "🏦",
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.4)"
    },
    {
      title: "Merry-Go Round Groups",
      description: "This simplified system aids in managing contributions, tracking beneficiaries, and maintaining rotation schedules.",
      icon: "🔄",
      gradient: "from-orange-500 to-red-600", 
      glowColor: "rgba(251, 146, 60, 0.4)"
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
    gsap.set(".group-card", { opacity: 1, visibility: "visible" });

    // Create floating background elements with simpler animations
    const floatingElements = floatingElementsRef.current?.querySelectorAll('.floating-element');
    if (floatingElements) {
      floatingElements.forEach((element, index) => {
        gsap.fromTo(element, 
          {
            y: 30,
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 2,
            delay: index * 0.1,
            ease: "power2.out"
          }
        );
        
        // Continuous gentle movement
        gsap.to(element, {
          y: "random(-20, 20)",
          x: "random(-15, 15)",
          duration: "random(6, 10)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      });
    }

    // Simple, reliable text animations
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title
    if (titleRef.current) {
      timeline.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
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

    // Animate cards
    const cards = document.querySelectorAll('.group-card');
    cards.forEach((card, index) => {
      timeline.fromTo(card,
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.1)" },
        `-=${0.4 - index * 0.1}`
      );
    });

    // Animate CTA buttons
    if (ctaRef.current) {
      timeline.fromTo(ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
    }

    // Parallax effect for floating elements
    if (!isMobile && floatingElements) {
      gsap.to(floatingElements, {
        y: "-20%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

  }, [isMobile, isClient]);

  // Card hover animations
  const handleCardHover = (index: number, isEntering: boolean) => {
    const card = document.querySelector(`.group-card-${index}`);
    const icon = card?.querySelector('.card-icon');
    const content = card?.querySelector('.card-content');
    
    if (!card) return;
    
    if (isEntering) {
      setHoveredCard(index);
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        boxShadow: `0 25px 50px ${groupTypes[index].glowColor}`,
        duration: 0.4,
        ease: "power2.out"
      });
      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 15,
          duration: 0.4,
          ease: "power2.out"
        });
      }
      if (content) {
        gsap.to(content, {
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    } else {
      setHoveredCard(null);
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        duration: 0.4,
        ease: "power2.out"
      });
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
      if (content) {
        gsap.to(content, {
          y: 0,
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
        background: "linear-gradient(135deg, var(--background) 0%, var(--card-bg) 50%, var(--background) 100%)"
      }}
    >
      {/* Floating Background Elements */}
      {isClient && (
        <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none opacity-20">
          {floatingElementPositions.map((position, i) => (
            <div
              key={i}
              className="floating-element absolute w-3 h-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[var(--background)] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div ref={titleRef} className="mb-4" style={{ opacity: 1, visibility: 'visible' }}>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent leading-tight">
              Who We Are
            </h2>
          </div>
          
          <div ref={subtitleRef} className="mb-6" style={{ opacity: 1, visibility: 'visible' }}>
            <h3 className="text-2xl lg:text-3xl font-semibold text-[var(--foreground)] leading-tight max-w-2xl mx-auto">
              Simplifying Finance,<br />
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
                Amplifying Community Impact
              </span>
            </h3>
          </div>

          <div ref={descriptionRef} className="max-w-2xl mx-auto space-y-3" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-base lg:text-lg text-[var(--foreground)] opacity-85 leading-relaxed">
              The ChamaConnect table banking solution is developed as a cross-platform solution (web and mobile) 
              to manage financial operations such as contributions, loans, fines, guarantor tracking, income, and expenses.
            </p>
            <p className="text-sm lg:text-base text-[var(--foreground)] opacity-75 leading-relaxed">
              The system accommodates customization of group policies and ensures secure and accurate financial management. 
              The platform targets:
            </p>
          </div>
        </div>

        {/* Group Types Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12" style={{ opacity: 1, visibility: 'visible' }}>
          {groupTypes.map((group, index) => (
            <div
              key={index}
              className={`group-card group-card-${index} relative p-8 lg:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] cursor-pointer transition-all duration-300`}
              style={{
                background: `linear-gradient(135deg, var(--card-bg) 0%, var(--card-bg) 100%)`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                opacity: 1,
                visibility: 'visible'
              }}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              
              {/* Icon */}
              <div className="card-icon text-6xl lg:text-7xl mb-6 transform transition-transform duration-300">
                {group.icon}
              </div>
              
              {/* Content */}
              <div className="card-content relative z-10">
                <h4 className="text-2xl lg:text-3xl font-bold text-[var(--foreground)] mb-4 leading-tight">
                  {group.title}
                </h4>
                <p className="text-[var(--foreground)] opacity-80 text-lg leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Hover Gradient Effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${group.glowColor} 0%, transparent 100%)`
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center" style={{ opacity: 1, visibility: 'visible' }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="cta-button group relative px-8 py-4 bg-[var(--primary)] text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[var(--accent)] hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="cta-button group relative px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--foreground)] hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full opacity-10 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default WhoWeAre;
