"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isClient, setIsClient] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsClient(true);
    // Initialize stepRefs array with null values
    stepRefs.current = Array(steps.length).fill(null);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Create or Join a Group",
      description: "Set up a new table banking group in minutes or join an existing one using email, SMS, or shareable links, with customizable settings for savings and loans tailored to your needs.",
      icon: "👥"
    },
    {
      number: 2,
      title: "Manage Finances",
      description: "Track contributions and group savings in real-time via intuitive dashboards, set auto-reminders for timely payments, and monitor financial goals effortlessly, all managed by admins through a sleek interface.",
      icon: "💰"
    },
    {
      number: 3,
      title: "Simplify Loans and Savings",
      description: "Apply for loans instantly on the platform, define repayment terms with automated interest tracking, and manage savings securely—eliminating manual errors and boosting group trust with blockchain precision.",
      icon: "🔄"
    },
    {
      number: 4,
      title: "Generate Financial Reports",
      description: "Access instant, detailed reports on savings, loans, and expenses, share them with members for transparency, and leverage insights to drive smart financial decisions, all powered by professional-grade accounting tools.",
      icon: "📊"
    }
  ];

  // Draw SVG path for the squiggly line
  const createPath = () => {
    if (!isClient) return "";
    
    // Different path based on screen size
    if (isMobile) {
      // Vertical path for mobile
      return "M50,0 Q70,50 30,100 Q70,150 30,200 Q70,250 30,300 Q70,350 30,400";
    } else {
      // Horizontal path for desktop
      return "M0,50 Q100,20 200,80 Q300,140 400,80 Q500,20 600,80 Q700,140 800,80";
    }
  };
  
  // // Calculate path length for animation
  const getPathLength = () => {
    if (!pathRef.current) return 0;
    return pathRef.current.getTotalLength();
  };

  useGSAP(() => {
    if (!sectionRef.current || !isClient || !pathRef.current) return;
    
    // Initialize visibility
    gsap.set([titleRef.current, descriptionRef.current, ctaRef.current], {
      opacity: 1,
      visibility: "visible"
    });
    
    // Get path length for animation
    const pathLength = getPathLength();
    
    // Initialize path
    gsap.set(pathRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });
    
    // Hide all steps initially
    gsap.set(".step-item", { opacity: 0, y: 50 });

    // Create main timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(
            Math.floor(progress * steps.length),
            steps.length - 1
          );
          setActiveStep(progress >= 0.98 ? steps.length - 1 : stepIndex);
        }
      }
    });
    
    // Animate section title and description
    timeline.fromTo(
      [titleRef.current, descriptionRef.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out", stagger: 0.1 }
    );
    
    // Animate path drawing
    timeline.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });
    
    // Animate each step
    steps.forEach((_, index) => {
      timeline.fromTo(
        `.step-${index}`,
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        },
        index * 0.15 + 0.3 // Stagger the animations
      );
    });
    
    // Animate CTA at the end
    timeline.fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3 },
      0.7
    );
    
    // Add hover animations for steps
    gsap.utils.toArray<HTMLElement>(".step-item").forEach((step, index) => {
      gsap.set(step, { 
        transformOrigin: "center center"
      });
      
      step.addEventListener("mouseenter", () => {
        gsap.to(step, { 
          scale: 1.05, 
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)", 
          duration: 0.3 
        });
        gsap.to(`.step-icon-${index}`, { 
          y: -5, 
          scale: 1.1, 
          duration: 0.2
        });
      });
      
      step.addEventListener("mouseleave", () => {
        gsap.to(step, { 
          scale: 1, 
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)", 
          duration: 0.3 
        });
        gsap.to(`.step-icon-${index}`, { 
          y: 0, 
          scale: 1, 
          duration: 0.2 
        });
      });
    });
    
  }, [isMobile, isClient, steps.length]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--background) 0%, var(--card-bg) 100%)"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div ref={titleRef} className="mb-6" style={{ opacity: 1, visibility: 'visible' }}>
            <h4 className="text-[var(--primary)] font-bold tracking-wider mb-2">
              DISCOVER
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[var(--foreground)]">
              How Our Table <span className="text-[var(--primary)]">Banking System</span> Works
            </h2>
          </div>
          
          <div ref={descriptionRef} className="max-w-3xl mx-auto" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-[var(--foreground)] text-lg mb-6">
              ChamaConnect streamlines table banking with innovative tools designed for Kenyan groups, blending blockchain security with user-friendly fintech solutions.
            </p>
            <p className="text-[var(--foreground)]">
              This solution addresses the operational inefficiencies commonly faced by Chama groups, such as manual record-keeping, lack of transparency, and financial mismanagement.
            </p>
          </div>
        </div>
        

        {/* SVG Path Container - visible on larger screens */}
        <div className={`relative ${isMobile ? 'hidden' : 'block'} mb-12`}>
          <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="none" className="path-container">
            <path
              ref={pathRef}
              d={createPath()}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              className="path"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--accent)" />
              </linearGradient>
            </defs>
            
            {/* Step markers on the path */}
            {steps.map((_, index) => {
              // Position dots along the path
              const xPos = isMobile ? 50 : (index * 200) + 100;
              const yPos = isMobile ? (index * 100) + 50 : 80;
              
              return (
                <g key={index} className={`step-marker ${activeStep >= index ? 'active' : ''}`}>
                  <circle
                    cx={xPos}
                    cy={yPos}
                    r={activeStep >= index ? 12 : 8}
                    fill={activeStep >= index ? 'var(--primary)' : 'var(--card-bg)'}
                    stroke="var(--primary)"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  <text
                    x={xPos}
                    y={yPos}
                    dy=".3em"
                    textAnchor="middle"
                    fill={activeStep >= index ? 'white' : 'var(--foreground)'}
                    className="text-xs font-bold"
                  >
                    {index + 1}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        
        
        {/* Steps container */}
        <div
          ref={stepsContainerRef}
          className={`grid ${isMobile ? 'grid-cols-1 gap-10' : 'grid-cols-2 lg:grid-cols-4 gap-6'} mb-16`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                stepRefs.current[index] = el;
              }}
              className={`step-item step-${index} p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] shadow-lg transition-all duration-300 ${activeStep >= index ? 'opacity-100' : 'opacity-40'}`}
            >
              {/* Mobile step number indicator */}
              {isMobile && (
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mr-3">
                    <span className="text-[var(--foreground)] font-bold">{step.number}</span>
                  </div>
                  <h4 className="font-bold text-lg">Step {step.number}</h4>
                </div>
              )}
              
              {/* Step icon */}
              <div className={`step-icon-${index} mb-4 text-4xl`}>
                {step.icon}
              </div>
              
              {/* Step title and description */}
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">{step.title}</h3>
              <p className="text-[var(--foreground)]">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div ref={ctaRef} className="text-center" style={{ opacity: 1, visibility: 'visible' }}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-[var(--background)] font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
              <span>Sign Up for Early Access</span>
            </button>
            <button className="px-8 py-3 bg-transparent hover:bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] font-medium rounded-md transition-all duration-300 flex items-center space-x-2">
              <span>Request Demo</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full opacity-10 blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full opacity-10 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Discover;
