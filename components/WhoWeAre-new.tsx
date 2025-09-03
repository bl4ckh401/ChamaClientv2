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
            <h4 className="text-[var(--primary)] font-bold tracking-wider mb-2">WHO WE SERVE</h4>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent leading-tight">
              Groups We Support
            </h2>
          </div>
          
          <div ref={subtitleRef} className="mb-6" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-xl text-[var(--muted)]">Our platform is specifically designed for various types of table banking groups</p>
          </div>

          <div ref={descriptionRef} className="max-w-2xl mx-auto space-y-3" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-[var(--muted)]">We've built ChamaConnect to address the unique needs of different financial groups in Kenya, providing specialized tools for each type of organization.</p>
            <p className="text-[var(--muted)]">Our platform streamlines operations while ensuring security, transparency, and ease of use for all members.</p>
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
              {/* Card background gradient */}
              <div className={`absolute inset-0 rounded-3xl opacity-5 bg-gradient-to-br ${group.gradient}`} />
              
              {/* Card Content */}
              <div className="card-content relative z-10">
                {/* Icon */}
                <div className={`card-icon text-5xl mb-6 transition-all duration-300`}>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${group.gradient} text-[var(--foreground)]`}>
                    {group.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">{group.title}</h3>
                
                {/* Description */}
                <p className="text-[var(--muted)] mb-6">{group.description}</p>
                
                {/* Learn More Link */}
                <div className={`inline-flex items-center font-medium text-[var(--primary)] transition-all duration-300 ${hoveredCard === index ? 'translate-x-2' : ''}`}>
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div 
                className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${hoveredCard === index ? 'opacity-20' : 'opacity-0'}`}
                style={{ 
                  background: `radial-gradient(circle at center, ${group.glowColor} 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }} 
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="text-center" style={{ opacity: 1, visibility: 'visible' }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-black font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <span>Join a Group</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-md transition-all duration-300 flex items-center space-x-2">
              <span>Create New Group</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
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
