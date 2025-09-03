"use client";

import { useState, useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [isClient, setIsClient] = useState(false);
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const keySolutions = [
    {
      title: "Blockchain-Powered Security",
      description: "All financial records are stored on an immutable blockchain ledger, ensuring that contributions, withdrawals, and loans remain fraud-proof and transparent.",
      icon: "🔒",
      gradient: "from-emerald-500 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.4)"
    },
    {
      title: "Smart Contract Automation",
      description: "Leverage self-executing smart contracts to automate deposits, loan approvals, and repayment tracking, reducing administrative workload significantly.",
      icon: "⚡",
      gradient: "from-blue-500 to-cyan-600",
      glowColor: "rgba(59, 130, 246, 0.4)"
    },
    {
      title: "Mobile-First Design",
      description: "Designed specifically for African mobile users with seamless integration to M-Pesa, Airtel Money, and other mobile payment platforms.",
      icon: "📱",
      gradient: "from-orange-500 to-red-600",
      glowColor: "rgba(249, 115, 22, 0.4)"
    }
  ];

  const teamMembers = [
    {
      name: "Osborne Njoroge",
      role: "Founder & CEO",
      description: "Extensive experience in fintech and blockchain strategies, formerly at Wells Fargo Bank in North America.",
      avatar: "ON",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Chebet Rotich",
      role: "System Analyst",
      description: "UI/UX designer and marketing expert with over 8 years of experience in system analysis.",
      avatar: "CR",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      name: "John Muthee",
      role: "General Manager",
      description: "Experienced in sales and marketing, formerly at DIAGEO Kenya and Kenya Postal Corporation.",
      avatar: "JM",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Marvin Ngala",
      role: "Product Designer",
      description: "Finance and design expert with knowledge in blockchain technology and product design.",
      avatar: "MN",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Joseah Biwott",
      role: "Senior Software Engineer",
      description: "Full-stack developer specializing in robust blockchain solutions for financial systems.",
      avatar: "JB",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Pavin Kiptoo",
      role: "Blockchain Developer",
      description: "DeFi analyst with hands-on experience in smart contract development on multiple blockchains.",
      avatar: "PK",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  useGSAP(() => {
    if (!sectionRef.current || !isClient) return;

    // Hero section animation
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    heroTl
      .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.3");

    // Story cards animation
    gsap.from(".story-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // Solutions cards animation
    gsap.from(".solution-card", {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: solutionsRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // Team cards animation
    gsap.from(".team-card", {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // Testimonials animation
    gsap.from(".testimonial-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    // CTA section animation
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

  }, [isClient]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--primary)]">Loading...</div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="hero-title mb-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)] mb-6">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide">About ChamaConnect</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                    Transforming
                  </span>
                  <br />
                  <span className="text-[var(--foreground)]">
                    Community Finance
                  </span>
                </h1>
              </div>
              
              <div className="hero-subtitle mb-8">
                <p className="text-xl md:text-2xl text-[var(--foreground)]/80 leading-relaxed">
                  Empowering African Communities with Blockchain-Powered Financial Solutions
                </p>
              </div>

              <div className="hero-description mb-12">
                <p className="text-lg text-[var(--foreground)]/70 leading-relaxed">
                  ChamaConnect is revolutionizing table banking in Kenya by providing secure, transparent, and automated financial management tools built on blockchain technology.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="hero-cta group relative px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <span>Join Our Mission</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  href="/features" 
                  className="hero-cta group px-8 py-4 border-2 border-[var(--border)] text-[var(--foreground)] font-semibold rounded-lg hover:bg-[var(--muted)] transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 backdrop-blur-sm border border-[var(--border)] p-8 flex items-center justify-center">
                  <div className="space-y-6 w-full">
                    {/* Company logo area */}
                    <div className="flex justify-center mb-8">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center shadow-xl">
                        <span className="text-4xl">🏢</span>
                      </div>
                    </div>
                    
                    {/* Team representation */}
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((_, index) => (
                        <div key={index} className="aspect-square rounded-xl bg-[var(--muted)] border border-[var(--border)] flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                            <span className="text-sm">👤</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Mission statement visual */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)]">
                        <span className="text-xs font-medium text-[var(--primary)]">Building Trust Through Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">50+</div>
              <div className="text-sm text-[var(--foreground)]/70">Groups in Beta</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">99.9%</div>
              <div className="text-sm text-[var(--foreground)]/70">Uptime</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">2M+</div>
              <div className="text-sm text-[var(--foreground)]/70">Secured Transactions</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
              <div className="text-3xl font-bold text-[var(--primary)] mb-2">24/7</div>
              <div className="text-sm text-[var(--foreground)]/70">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section ref={storyRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)] mb-6">
              <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wide">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                MUIAA Limited
              </span>
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Building the future of community finance in Africa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="story-card space-y-8">
              <div className="p-8 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">Our Vision</h3>
                </div>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  To be the leading blockchain-powered financial solution for community-driven savings, impact, and investment groups in Africa.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)]">Our Mission</h3>
                </div>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  To provide SACCOs and Chamas with a secure, automated, and decentralized financial ledger that enhances trust, efficiency, and transparency.
                </p>
              </div>
            </div>

            <div className="story-card">
              <div className="p-8 rounded-2xl bg-[var(--muted)] border border-[var(--border)]">
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-6">
                  MUIAA Limited is a Registered Data Processor and Data Controller in Kenya providing customized blockchain solutions.
                </p>
                <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
                  Chama Connect is a blockchain-powered financial management platform designed to transform group banking for SACCOs and Chamas. Currently in its MVP phase, we are working with early adopters to refine our platform, ensuring secure, automated, and transparent financial solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions Section */}
      <section ref={solutionsRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)] mb-6">
              <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wide">Key Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Tailored Financial Solutions
              </span>
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Transform your group's financial management with our cutting-edge technology
            </p>
          </div>

          <div className="space-y-8">
            {keySolutions.map((solution, index) => (
              <div
                key={index}
                className="solution-card group p-8 rounded-2xl border border-[var(--border)] bg-[var(--background)] transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onMouseEnter={() => setHoveredSolution(index)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center text-2xl transition-transform duration-300 ${hoveredSolution === index ? 'scale-110 rotate-12' : ''}`}>
                      {solution.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-[var(--foreground)]/70 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)] mb-6">
              <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wide">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Meet the blockchain and fintech experts behind ChamaConnect
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--muted)] transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onMouseEnter={() => setHoveredTeamMember(index)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <div className="relative p-6 text-center">
                  {/* Profile Avatar */}
                  <div className="relative mb-4 mx-auto w-fit">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-xl font-bold text-white transition-all duration-300 ${hoveredTeamMember === index ? 'scale-110 rotate-6' : ''} shadow-lg`}>
                      {member.avatar}
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-lg font-bold mb-1 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[var(--muted)]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--muted)] rounded-full border border-[var(--border)] mb-6">
              <span className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 mb-12">MVP Beta Testimonials</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Testimonial */}
            <div className="testimonial-card group relative p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:scale-105 transition-all duration-500">
              <div className="flex justify-start mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">⭐</span>
                ))}
              </div>
              
              <blockquote className="text-lg italic text-[var(--foreground)] mb-6 leading-relaxed">
                "Being part of the beta showed me how powerful this tool is. It's simplified everything, from contributions to payouts!"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold shadow-lg">
                  JM
                </div>
                <div className="text-left">
                  <div className="font-semibold text-[var(--foreground)]">Jane Mwaura</div>
                  <div className="text-sm text-[var(--foreground)]/70">Member, Women of Destiny</div>
                </div>
              </div>
            </div>

            {/* Stats & Trust Indicators */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-xl">✅</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--foreground)]">100%</div>
                    <div className="text-sm text-[var(--foreground)]/70">Beta User Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--foreground)]">50+</div>
                    <div className="text-sm text-[var(--foreground)]/70">Early Access Users</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--foreground)]">5.0</div>
                    <div className="text-sm text-[var(--foreground)]/70">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cta-section p-12 rounded-3xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 border border-[var(--border)]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Join Our Team!
              </span>
            </h2>
            <p className="text-xl text-[var(--foreground)]/80 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our mission of transforming community finance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span>Get In Touch</span>
              <span className="text-xl">🚀</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
