"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const integrationRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [isClient, setIsClient] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const coreFeatures = [
    {
      category: "Administration",
      title: "Group & Membership Management",
      description:
        "Effortlessly register and manage members in your Chama or SACCO using blockchain-backed identity verification for secure and transparent access control.",
      icon: "🔒",
      gradient: "from-blue-500 to-purple-600",
      image:
        "/group.svg",
      features: [
        "Each member's transaction record is securely stored on a decentralized ledger, preventing unauthorized changes.",
        "Manage member profiles, roles, and permissions.",
        "Tamper-proof participation records ensure fair and auditable financial processes.",
      ],
    },
    {
      category: "Accountability",
      title: "Smart Financial Management",
      description:
        "Automate financial contributions, loan approvals, and penalty tracking with blockchain-powered smart contracts, reducing administrative workload and human errors.",
      icon: "👥",
      gradient: "from-emerald-500 to-teal-600",
      image:
        "/sfm.svg",
      features: [
        "Smart contracts automate savings deposits and loan approvals, reducing the need for manual interventions.",
        "Eliminates fraud risks by ensuring that all transactions are pre-set and executed without manipulation.",
        "Automate fines for late contributions and missed payments.",
      ],
    },
    {
      category: "Analytics",
      title: "Blockchain Financial Reporting & Tracking Tools",
      description:
        "Generate real-time financial reports, track Chama contributions, and monitor cash flow with immutable blockchain-backed records.",
      icon: "📊",
      gradient: "from-orange-500 to-red-600",
      image:
        "/bfrtt.svg",
      features: [
        "Immutable financial records ensure that no one can alter or erase past",
        "Automated real-time tracking means treasurers and members always have updated, fraud-proof financial summaries.",
      ],
    },
    {
      category: "Flexibility",
      title: "Automated Financial Policies Customization",
      description:
        "Set up flexible group policies, including savings rules, loan terms, and penalties, with blockchain-backed automation to ensure compliance and transparency.",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-600",
      image:
        "/afpc.svg",
      features: [
        "Self-executing smart contracts ensure all transactions adhere to predefined group policies.",
        "Members can verify policy execution in real-time, reducing disputes and ensuring compliance.",
      ],
    },
  ];

  const integrationFeatures = [
    {
      title: "Mobile Money Integration",
      description:
        "M-pesa and bank integration (Coming Soon) will enable seamless deposits, withdrawals, and loan repayments",
      icon: "📱",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Decentralized Finance (DeFi) for Chamas.",
      description:
        "Decentralized ledgers eliminate centralized points of failure and fraud risks.",
      icon: "🏦",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Blockchain Network",
      description:
        "Built on secure blockchain infrastructure for immutable transaction records and transparency.",
      icon: "🔗",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  useGSAP(() => {
    if (!sectionRef.current || !isClient) return;

    // Hero section animation
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    heroTl
      .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        ".hero-subtitle",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".hero-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

    // Features cards animation
    gsap.from(".feature-card", {
      y: 80,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
    });

    // Integration section animation
    const integrationTl = gsap.timeline({
      scrollTrigger: {
        trigger: integrationRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
    });

    integrationTl
      .from(".integration-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        ".integration-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.5"
      );

    // CTA section animation
    gsap.from(".cta-section", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, [isMobile, isClient]);

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
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center flex-row bg-[var(--background)] overflow-hidden"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>
        <div className="max-w-7xl mx-auto mt-8">
          <div className="text-center mb-20">
            <div className="hero-title mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)] mb-6">
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">
                  Platform Features
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Professional Features
                </span>
                <br />
                <span className="text-[var(--foreground)]">
                  for Modern Chamas
                </span>
              </h1>
            </div>

            <div className="hero-subtitle mb-8">
              <p className="text-xl md:text-2xl text-[var(--foreground)]/80 leading-relaxed max-w-4xl mx-auto">
                Comprehensive financial management tools designed specifically
                for African savings groups
              </p>
            </div>

            <div className="hero-description mb-12">
              <p className="text-lg text-[var(--foreground)]/70 leading-relaxed max-w-3xl mx-auto">
                From secure transactions to automated loan processing, our
                platform provides everything your Chama needs to thrive in the
                digital age.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="hero-cta group relative px-8 py-4 bg-[var(--primary)] text-[var(--foreground)] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>Get Started Today</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/pricing"
                className="hero-cta group px-8 py-4 border-2 border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover:bg-[var(--muted)] transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>View Pricing</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[var(--foreground)]">Core Features</span>
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
              Everything you need to manage your savings group professionally
              and securely.
            </p>
          </div>

          <div className="space-y-24">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className={`feature-card grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--primary)] border border-[var(--border)]">
                      {feature.category}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--foreground)]">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-[var(--foreground)]/80 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-[var(--foreground)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-[var(--foreground)]/80 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain transition-transform py-4 duration-500 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 dark:bg-gradient-to-br from-black/20 to-transparent"></div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section
        ref={integrationRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[var(--foreground)]">
                Seamless Integration
              </span>
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
              Connect with your existing financial ecosystem for a unified
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <span className="text-4xl filter drop-shadow-lg">
                    {feature.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
                  {feature.title}
                </h3>

                <p className="text-[var(--foreground)]/80 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-section p-12 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {" "}
                Chama?
              </span>
            </h2>

            <p className="text-xl text-[var(--foreground)]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of savings groups already using ChamaConnect to
              manage their finances securely and efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>Start Free Trial</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/pricing"
                className="group px-8 py-4 border-2 border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover:bg-[var(--muted)] transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>View Pricing</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 mt-8 border-t border-[var(--border)]">
              <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/60">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/60">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/60">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
