"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { theme } = useTheme();
  
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const plans = [
    {
      name: "Starter",
      popular: false,
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for small Chamas getting started",
      features: [
        "Up to 10 members",
        "Basic transaction tracking",
        "Mobile app access",
        "SMS notifications",
        "Email support"
      ]
    },
    {
      name: "Professional",
      popular: true,
      price: { monthly: 2500, yearly: 25000 },
      description: "Ideal for growing Chamas and SACCOs",
      features: [
        "Up to 50 members",
        "Advanced analytics",
        "Loan management",
        "Multi-currency support",
        "Priority support",
        "Custom reports",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      popular: false,
      price: { monthly: 4500, yearly: 45000 },
      description: "For large organizations and federations",
      features: [
        "Unlimited members",
        "Advanced security",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Training & onboarding",
        "SLA guarantee"
      ]
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

      // Cards animation
      const pricingCards = document.querySelectorAll(".pricing-card");
      if (pricingCards.length > 0) {
        gsap.from(pricingCards, {
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
      console.log("Pricing animation error:", error);
    }

    // Refresh ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

  }, [isClient, isMobile]);

  if (!isClient) return null;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-[var(--muted)] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)]/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-2"></span>
            Pricing Plans
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6">
            Choose Your Perfect
            <span className="text-gradient block">Plan</span>
          </h2>
          
          <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Transparent pricing designed to grow with your Chama. Start free and upgrade as you expand.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-[var(--background)] border border-[var(--border)] rounded-lg p-1">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'monthly'
                  ? 'bg-[var(--primary)] text-[var(--background)]'
                  : 'text-[var(--foreground)]/70 hover:text-[var(--foreground)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'yearly'
                  ? 'bg-[var(--primary)] text-[var(--background)]'
                  : 'text-[var(--foreground)]/70 hover:text-[var(--foreground)]'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-[var(--success)]/20 text-[var(--success)] px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] text-[var(--background)] px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`glass-card p-8 rounded-2xl hover-lift h-full transition-all duration-300 ${
                plan.popular ? 'border-[var(--primary)]/30 bg-[var(--primary)]/5' : ''
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[var(--foreground)]/60 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[var(--foreground)]">
                      Ksh{plan.price[activeTab]}
                    </span>
                    <span className="text-[var(--foreground)]/60 ml-2">
                      /{activeTab === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary)]/90'
                      : 'border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                  }`}>
                    {plan.price[activeTab] === 0 ? 'Get Started' : 'Start Free Trial'}
                  </button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-[var(--success)] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[var(--foreground)]/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <p className="text-[var(--foreground)]/60 mb-8">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover-lift transition-all duration-300">
              Contact Sales
            </button>
            <button className="px-8 py-4 text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)]/5 transition-all duration-300">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
