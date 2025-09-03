"use client";

import { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pricingCardsRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');
  
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small savings groups starting their journey",
      price: "Free",
      period: "forever",
      popular: false,
      features: [
        "Up to 15 members",
        "Basic financial tracking",
        "Group notifications",
        "Mobile app access",
        "Email support",
        "Data export",
        "Monthly reports (5)"
      ],
      buttonText: "Get Started Free",
      badge: null
    },
    {
      name: "Professional",
      description: "Ideal for established Chamas and growing groups",
      price: activeTab === 'monthly' ? "KSh 2,500" : "KSh 2,000",
      period: "month",
      popular: true,
      features: [
        "Up to 100 members",
        "Advanced financial tracking",
        "Automated loan management",
        "Custom branding",
        "Priority support",
        "Unlimited reports",
        "Multi-currency support",
        "Analytics dashboard"
      ],
      buttonText: "Start Free Trial",
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      description: "For large SACCOs and financial institutions",
      price: "Custom",
      period: "contact us",
      popular: false,
      features: [
        "Unlimited members",
        "Full blockchain suite",
        "API access",
        "Custom integrations",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "Regulatory compliance"
      ],
      buttonText: "Contact Sales",
      badge: null
    }
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        { feature: "Maximum Members", starter: "15", professional: "100", enterprise: "Unlimited" },
        { feature: "Financial Tracking", starter: "✓", professional: "✓", enterprise: "✓" },
        { feature: "Group Management", starter: "✓", professional: "✓", enterprise: "✓" },
        { feature: "Mobile App", starter: "✓", professional: "✓", enterprise: "✓" },
        { feature: "Data Export", starter: "✓", professional: "✓", enterprise: "✓" }
      ]
    },
    {
      category: "Advanced Features",
      items: [
        { feature: "Monthly Reports", starter: "5", professional: "Unlimited", enterprise: "Unlimited" },
        { feature: "Loan Management", starter: "Basic", professional: "Advanced", enterprise: "Full Suite" },
        { feature: "Custom Branding", starter: "✗", professional: "✓", enterprise: "✓" },
        { feature: "API Access", starter: "✗", professional: "✗", enterprise: "✓" },
        { feature: "White-label", starter: "✗", professional: "✗", enterprise: "✓" }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { feature: "Support Level", starter: "Email", professional: "Priority", enterprise: "Dedicated" },
        { feature: "Blockchain Security", starter: "Basic", professional: "Advanced", enterprise: "Enterprise" },
        { feature: "Compliance", starter: "✗", professional: "✓", enterprise: "✓" },
        { feature: "SLA", starter: "✗", professional: "99.5%", enterprise: "99.9%" }
      ]
    }
  ];

  useGSAP(() => {
    if (!sectionRef.current || !isClient) return;
    
    // Hero animation
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    heroTl
      .from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from(".pricing-toggle", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.3");

    // Pricing cards animation
    gsap.from(".pricing-card", {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: pricingCardsRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Comparison table animation
    gsap.from(".comparison-section", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: comparisonRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // CTA animation
    gsap.from(".cta-section", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

  }, [isClient, activeTab]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--primary)]">Loading...</div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-[var(--background)] overflow-hidden"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="hero-badge mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)] mb-6">
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">
                  Transparent Pricing
                </span>
              </div>
            </div>

            <div className="hero-title mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Simple Pricing
                </span>
                <br />
                <span className="text-[var(--foreground)]">
                  for Every Chama
                </span>
              </h1>
            </div>

            <div className="hero-subtitle mb-12">
              <p className="text-xl md:text-2xl text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto">
                Choose the perfect plan for your savings group. Start free and
                scale as you grow.
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="pricing-toggle flex justify-center mb-12">
              <div className="inline-flex p-1 bg-[var(--muted)] rounded-lg border border-[var(--border)]">
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === 'monthly'
                      ? 'bg-[var(--primary)] text-[var(--foreground)] shadow-sm'
                      : 'text-[var(--foreground)]/70 hover:text-[var(--foreground)]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab('yearly')}
                  className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    activeTab === 'yearly'
                      ? 'bg-[var(--primary)] text-[var(--foreground)] shadow-sm'
                      : 'text-[var(--foreground)]/70 hover:text-[var(--foreground)]'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-[var(--accent)] text-[var(--foreground)] text-xs px-1.5 py-0.5 rounded-full">
                    20% off
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section ref={pricingCardsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card relative group ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-[var(--primary)] text-[var(--foreground)] px-4 py-1 text-sm font-medium rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? 'border-[var(--primary)]/50 bg-[var(--card-bg)] shadow-lg'
                      : 'border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary)]/30'
                  } ${
                    hoveredCard === index ? 'shadow-xl scale-105' : 'shadow-sm'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-[var(--foreground)]/70 mb-8">
                      {plan.description}
                    </p>

                    <div className="mb-8">
                      <span className="text-4xl font-bold text-[var(--foreground)]">
                        {plan.price}
                      </span>
                      {plan.period !== 'forever' && plan.period !== 'contact us' && (
                        <span className="text-[var(--foreground)]/70">
                          /{plan.period}
                        </span>
                      )}
                    </div>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 mb-8 ${
                        plan.popular
                          ? 'bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--primary)]/90'
                          : 'border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--foreground)]'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-[var(--primary)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-[var(--foreground)]/80 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section
        ref={comparisonRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="comparison-section">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Feature Comparison
                </span>
              </h2>
              <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto">
                Compare features across all plans to find what works best for
                your group.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-4 p-6 bg-[var(--card-bg)] rounded-t-2xl border border-[var(--border)]">
                  <div className="font-semibold text-[var(--foreground)]">
                    Features
                  </div>
                  <div className="font-semibold text-[var(--foreground)] text-center">
                    Starter
                  </div>
                  <div className="font-semibold text-[var(--foreground)] text-center">
                    Professional
                  </div>
                  <div className="font-semibold text-[var(--foreground)] text-center">
                    Enterprise
                  </div>
                </div>

                {/* Table Body */}
                {comparisonFeatures.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="border-x border-[var(--border)]">
                    {/* Category Header */}
                    <div className="p-4 bg-[var(--muted)]/50 border-b border-[var(--border)]">
                      <h3 className="font-semibold text-[var(--primary)]">
                        {category.category}
                      </h3>
                    </div>

                    {/* Category Items */}
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="grid grid-cols-4 gap-4 p-4 border-b border-[var(--border)] hover:bg-[var(--muted)]/20 transition-colors duration-200"
                      >
                        <div className="text-[var(--foreground)]/80">
                          {item.feature}
                        </div>
                        <div className="text-center">
                          {item.starter === '✓' ? (
                            <span className="text-green-500 text-lg">✓</span>
                          ) : item.starter === '✗' ? (
                            <span className="text-red-500 text-lg">✗</span>
                          ) : (
                            <span className="text-[var(--foreground)]/80 text-sm">
                              {item.starter}
                            </span>
                          )}
                        </div>
                        <div className="text-center">
                          {item.professional === '✓' ? (
                            <span className="text-green-500 text-lg">✓</span>
                          ) : item.professional === '✗' ? (
                            <span className="text-red-500 text-lg">✗</span>
                          ) : (
                            <span className="text-[var(--foreground)]/80 text-sm">
                              {item.professional}
                            </span>
                          )}
                        </div>
                        <div className="text-center">
                          {item.enterprise === '✓' ? (
                            <span className="text-green-500 text-lg">✓</span>
                          ) : item.enterprise === '✗' ? (
                            <span className="text-red-500 text-lg">✗</span>
                          ) : (
                            <span className="text-[var(--foreground)]/80 text-sm">
                              {item.enterprise}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                
                {/* Table Footer */}
                <div className="p-6 bg-[var(--card-bg)] rounded-b-2xl border border-[var(--border)] border-t-0">
                  <div className="grid grid-cols-4 gap-4">
                    <div></div>
                    <div className="text-center">
                      <button className="w-full py-2 px-4 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-[var(--foreground)] transition-colors duration-200">
                        Get Started
                      </button>
                    </div>
                    <div className="text-center">
                      <button className="w-full py-2 px-4 bg-[var(--primary)] text-[var(--foreground)] rounded-lg hover:bg-[var(--primary)]/90 transition-colors duration-200">
                        Start Trial
                      </button>
                    </div>
                    <div className="text-center">
                      <button className="w-full py-2 px-4 border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-[var(--foreground)] transition-colors duration-200">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-section p-12 rounded-2xl bg-gradient-to-r from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--primary)]/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Chama Management?
              </span>
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of groups already using Chama Connect to manage
              their finances with confidence and transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[var(--primary)] text-[var(--foreground)] font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-colors duration-200"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-[var(--foreground)] transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
