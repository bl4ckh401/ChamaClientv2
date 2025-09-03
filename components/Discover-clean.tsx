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
  const stepsRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isClient, setIsClient] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const steps = [
    {
      number: 1,
      title: "Create Your Group",
      description: "Set up a new Chama or SACCO in minutes. Invite members via SMS, email, or shareable links. Customize savings and loan rules to fit your group's needs.",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      number: 2,
      title: "Track Contributions",
      description: "Monitor all member contributions in real-time. Set automated reminders for payments and track progress toward group financial goals effortlessly.",
      icon: "💰",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      number: 3,
      title: "Manage Loans",
      description: "Apply for loans instantly with predefined terms. Track repayments automatically with interest calculations and maintain complete transparency.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    },
    {
      number: 4,
      title: "Generate Reports",
      description: "Access detailed financial reports instantly. Share transparent summaries with members and make data-driven decisions for group growth.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5"
    }
  ];

  useGSAP(() => {
    if (!isClient || !sectionRef.current) return;
    
    // Title animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      }
    });

    // Steps animation
    gsap.from(".discover-step", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: stepsRef.current,
        start: "top 85%",
      }
    });

  }, [isClient, isMobile]);

  if (!isClient) return null;

  return (
    <section
      id="discover"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-[var(--background)] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
            How It Works
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
            Get Started in
            <span className="text-gradient block">4 Simple Steps</span>
          </h2>
          
          <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
            Our intuitive platform makes managing your Chama finances easier than ever. 
            From setup to reporting, everything is designed for simplicity and transparency.
          </p>
        </div>

        {/* Steps Grid */}
        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="discover-step group relative"
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="glass-card p-6 rounded-2xl hover-lift h-full transition-all duration-300">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-[var(--foreground)] font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <div className="text-3xl absolute -top-2 -right-2 opacity-50">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-[var(--foreground)]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--border)] opacity-50"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Preview */}
        <div className="bg-[var(--card-bg)] rounded-3xl p-8 lg:p-12 border border-[var(--border)] shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
                Live Demo
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">
                Experience the Platform
              </h3>
              
              <p className="text-[var(--foreground)]/70 leading-relaxed">
                See how easy it is to manage your Chama with our intuitive dashboard. 
                Real-time tracking, automated calculations, and transparent reporting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[var(--primary)] text-[var(--foreground)] font-semibold rounded-lg hover-lift transition-all duration-300">
                  Try Demo
                </button>
                <button className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover-lift transition-all duration-300">
                  Watch Video
                </button>
              </div>
            </div>

            {/* Right: Preview */}
            <div className="relative">
              <div className="bg-[var(--muted)] rounded-2xl p-6 border border-[var(--border)]">
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--foreground)]">Group Balance</span>
                    <span className="text-2xl font-bold text-[var(--foreground)]">$12,450</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg">
                      <div className="text-lg font-bold text-[var(--success)]">32</div>
                      <div className="text-xs text-[var(--foreground)]/60">Members</div>
                    </div>
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg">
                      <div className="text-lg font-bold text-[var(--primary)]">8</div>
                      <div className="text-xs text-[var(--foreground)]/60">Active Loans</div>
                    </div>
                    <div className="text-center p-3 bg-[var(--background)] rounded-lg">
                      <div className="text-lg font-bold text-[var(--warning)]">98%</div>
                      <div className="text-xs text-[var(--foreground)]/60">Collection</div>
                    </div>
                  </div>

                  <div className="h-24 bg-[var(--background)] rounded-lg flex items-end p-4 gap-1">
                    {[60, 80, 45, 90, 70, 85].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-[var(--primary)] to-[var(--secondary)] rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating indicator */}
              <div className="absolute -top-4 -right-4 bg-[var(--success)] text-[var(--foreground)] px-3 py-1 rounded-full text-sm font-medium">
                Live
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
