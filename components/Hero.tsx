"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "@/contexts/ThemeContext";
import MarqueePartners from "./MarqueePartners";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const changingTextRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTerm, setCurrentTerm] = useState(0);

  const financialTerms = [
    "Chamas",
    "SACCOs",
    "Savings Groups",
    "Table Banking",
  ];

  const partnerLogos = [
    "/Ngeni.svg",
    "/nairobicount.svg",
    "/computeraid.svg",
    "/womenof.svg",
  ];

  // useEffect(() => {
  //   setIsLoaded(true);
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 100);
  // }, []);

  // // Text rotation effect
  // useEffect(() => {
  //   if (!isLoaded) return;
  //   const termInterval = setInterval(() => {
  //     setCurrentTerm((prev) => (prev + 1) % financialTerms.length);
  //   }, 3000);
  //   return () => clearInterval(termInterval);
  // }, [isLoaded]);

  // useGSAP(() => {
  //   if (!isLoaded) return;

  //   try {
  //     // Ensure elements exist before animating
  //     const titleElement = document.querySelector(".hero-title");
  //     const descriptionElement = document.querySelector(".hero-description");
  //     const ctaElements = document.querySelectorAll(".hero-cta > *");
  //     const productElement = document.querySelector(".hero-product");
  //     const statsElement = document.querySelector(".hero-stats");

  //     if (titleElement) {
  //       gsap.from(titleElement, {
  //         opacity: 0,
  //         y: 30,
  //         duration: 1,
  //         ease: "power3.out",
  //       });
  //     }

  //     if (descriptionElement) {
  //       gsap.from(descriptionElement, {
  //         opacity: 0,
  //         y: 20,
  //         duration: 0.8,
  //         delay: 0.3,
  //         ease: "power3.out",
  //       });
  //     }

  //     if (ctaElements.length > 0) {
  //       gsap.from(ctaElements, {
  //         opacity: 0,
  //         y: 20,
  //         duration: 0.6,
  //         stagger: 0.1,
  //         delay: 0.6,
  //         ease: "power3.out",
  //       });
  //     }

  //     if (productElement) {
  //       gsap.from(productElement, {
  //         opacity: 0,
  //         y: 40,
  //         duration: 1,
  //         delay: 0.4,
  //         ease: "power3.out",
  //       });
  //     }

  //     if (statsElement) {
  //       gsap.from(statsElement, {
  //         opacity: 0,
  //         y: 20,
  //         duration: 0.8,
  //         delay: 1,
  //         ease: "power3.out",
  //       });
  //     }

  //   } catch (error) {
  //     console.log("Animation setup error:", error);
  //   }

  //   // Refresh ScrollTrigger after a delay to ensure DOM is ready
  //   setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 100);
  // }, [isMobile, isLoaded]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-[var(--background)] overflow-hidden"
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:mt-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)]/80 text-sm font-medium">
              <div className="w-2 h-2 bg-[var(--success)] rounded-full mr-2 animate-pulse"></div>
              Secure • Transparent • Automated
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)]">
                The Future of{" "}
                <span
                  ref={changingTextRef}
                  className="text-gradient transition-all duration-500"
                >
                  {financialTerms[currentTerm]}
                </span>
                <br />
                is Here
              </h1>

              <p className="hero-description text-xl text-[var(--foreground)]/70 max-w-lg leading-relaxed">
                Secure, transparent, and automated financial management platform
                built on blockchain technology for African savings groups.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Link
                href="#platform"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover-lift transition-all duration-300"
              >
                Get Started
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover-lift transition-all duration-300"
              >
                Watch Demo
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats flex items-center gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)]">
                  100+
                </div>
                <div className="text-sm text-[var(--foreground)]/60">
                  Early Users
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)]">
                  $2M+
                </div>
                <div className="text-sm text-[var(--foreground)]/60">
                  Secured
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--foreground)]">
                  99.9%
                </div>
                <div className="text-sm text-[var(--foreground)]/60">
                  Uptime
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Showcase */}
          <div className="hero-product relative w-full h-full rounded-2xl">
            <div className="h-full w-full rounded-2xl">
              <Image
                src="/cc1.png"
                alt="Product Demo"
                layout="fill"
                objectFit="contain"
                priority
                className="rounded-2xl"
                // height={500}
                // width={300}
              />
            </div>

            {/* Main Product Image/Demo */}
            {/* <div className="relative bg-[var(--card-bg)] rounded-2xl shadow-2xl p-8 border border-[var(--border)]">
              
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 px-3 py-1 bg-[var(--muted)] rounded text-xs text-[var(--foreground)]/60">
                  chamaconnect.co.ke
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">Dashboard</h3>
                    <p className="text-sm text-[var(--foreground)]/60">Welcome back, John</p>
                  </div>
                  <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-[var(--foreground)] font-semibold">
                    J
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-lg">
                    <div className="text-sm text-[var(--foreground)]/60">Total Contributions</div>
                    <div className="text-2xl font-bold text-[var(--foreground)]">KES 24,500</div>
                    <div className="text-xs text-[var(--success)]">+12% this month</div>
                  </div>
                  <div className="glass-card p-4 rounded-lg">
                    <div className="text-sm text-[var(--foreground)]/60">Members</div>
                    <div className="text-2xl font-bold text-[var(--foreground)]">32</div>
                    <div className="text-xs text-[var(--success)]">+3 new</div>
                  </div>
                </div>

                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-[var(--foreground)]">Growth</span>
                    <span className="text-xs text-[var(--foreground)]/60">Last 6 months</span>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    {[40, 65, 45, 80, 60, 90].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-[var(--primary)] to-[var(--accent)] rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-[var(--foreground)]">Recent Activity</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[var(--success)]/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[var(--foreground)]">Deposit</div>
                          <div className="text-xs text-[var(--foreground)]/60">2 hours ago</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-[var(--foreground)]">+KES 500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Floating Elements - Subtle */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl rotate-12 opacity-80 shadow-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] rounded-full opacity-60 shadow-lg"></div>
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-24 text-center">
          <p className="text-sm font-medium text-[var(--foreground)]/60 mb-8">
            Trusted by leading organizations
          </p>
          <MarqueePartners logos={partnerLogos} delay={0.2} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
