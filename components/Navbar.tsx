"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Users,
  FileText,
  Phone,
  HelpCircle,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [logoError, setLogoError] = useState(false);

  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Refs for GSAP animations
  const navbarRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const themeToggleRef = useRef<HTMLButtonElement>(null);

  // Use react-responsive for responsive design
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // Scroll detection and navbar behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Set scrolled state
      setIsScrolled(currentScrollY > 10);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // // GSAP Animations
  // useEffect(() => {
  //   if (!isMounted || !navbarRef.current) return;

  //   const ctx = gsap.context(() => {
  //     // Initial navbar animation
  //     gsap.fromTo(
  //       navbarRef.current,
  //       {
  //         y: -100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1.2,
  //         ease: "power3.out",
  //         delay: 0.2,
  //       }
  //     );

  //     // Links stagger animation
  //     if (linksRef.current) {
  //       const links = linksRef.current.children;
  //       gsap.fromTo(
  //         links,
  //         {
  //           y: -30,
  //           opacity: 0,
  //         },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           duration: 0.8,
  //           stagger: 0.1,
  //           ease: "power2.out",
  //           delay: 0.8,
  //         }
  //       );
  //     }

  //     // CTA buttons animation
  //     if (ctaRef.current) {
  //       gsap.fromTo(
  //         ctaRef.current.children,
  //         {
  //           x: 50,
  //           opacity: 0,
  //         },
  //         {
  //           x: 0,
  //           opacity: 1,
  //           duration: 0.8,
  //           stagger: 0.1,
  //           ease: "power2.out",
  //           delay: 1,
  //         }
  //       );
  //     }

  //     // Theme toggle animation
  //     if (themeToggleRef.current) {
  //       gsap.fromTo(
  //         themeToggleRef.current,
  //         {
  //           scale: 0,
  //           rotation: 180,
  //         },
  //         {
  //           scale: 1,
  //           rotation: 0,
  //           duration: 0.6,
  //           ease: "back.out(2)",
  //           delay: 1.2,
  //         }
  //       );
  //     }
  //   }, navbarRef);

  //   return () => ctx.revert();
  // }, [isMounted]);

  // // Navbar visibility animation based on scroll
  // useEffect(() => {
  //   if (!navbarRef.current) return;

  //   if (scrollDirection === "down" && isScrolled) {
  //     gsap.to(navbarRef.current, {
  //       y: -100,
  //       duration: 0.3,
  //       ease: "power2.inOut",
  //     });
  //   } else {
  //     gsap.to(navbarRef.current, {
  //       y: 0,
  //       duration: 0.3,
  //       ease: "power2.inOut",
  //     });
  //   }
  // }, [scrollDirection, isScrolled]);

  // // Mobile menu animations
  // useEffect(() => {
  //   if (!mobileMenuRef.current) return;

  //   if (isOpen) {
  //     gsap.fromTo(
  //       mobileMenuRef.current,
  //       {
  //         height: 0,
  //         opacity: 0,
  //       },
  //       {
  //         height: "auto",
  //         opacity: 1,
  //         duration: 0.4,
  //         ease: "power2.out",
  //       }
  //     );

  //     // Animate menu items
  //     const menuItems =
  //       mobileMenuRef.current.querySelectorAll(".mobile-menu-item");
  //     gsap.fromTo(
  //       menuItems,
  //       {
  //         x: -50,
  //         opacity: 0,
  //       },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.3,
  //         stagger: 0.05,
  //         ease: "power2.out",
  //         delay: 0.1,
  //       }
  //     );
  //   }
  // }, [isOpen]);

  // // Dropdown animation
  // useEffect(() => {
  //   if (!dropdownRef.current) return;

  //   if (isCompanyOpen) {
  //     gsap.fromTo(
  //       dropdownRef.current,
  //       {
  //         scale: 0.8,
  //         opacity: 0,
  //         y: -10,
  //       },
  //       {
  //         scale: 1,
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.3,
  //         ease: "back.out(1.2)",
  //       }
  //     );

  //     // Animate dropdown items
  //     const dropdownItems = dropdownRef.current.children;
  //     gsap.fromTo(
  //       dropdownItems,
  //       {
  //         x: -20,
  //         opacity: 0,
  //       },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.2,
  //         stagger: 0.03,
  //         ease: "power2.out",
  //         delay: 0.1,
  //       }
  //     );
  //   }
  // }, [isCompanyOpen]);

  // Hover animations for interactive elements
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -2,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".navbar-container")) {
        setIsOpen(false);
        setIsCompanyOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;
  const isCompanyPage = [
    "/about",
    "/community",
    "/terms",
    "/contact",
    "/faqs",
  ].includes(pathname);

  const companyLinks = [
    {
      href: "/about",
      icon: Mail,
      title: "About Us",
      description: "Learn more about our mission and vision.",
    },
    {
      href: "/community",
      icon: Users,
      title: "Community",
      description: "Join our growing community of Chamas.",
    },
    {
      href: "/terms",
      icon: FileText,
      title: "Our Terms",
      description: "Review our terms and conditions.",
    },
    {
      href: "/contact",
      icon: Phone,
      title: "Contact Us",
      description: "Get in-touch with us.",
    },
    {
      href: "/faqs",
      icon: HelpCircle,
      title: "FAQs",
      description: "Check frequent questions.",
    },
  ];

  // Don't render until mounted to avoid hydration issues
  // if (!isMounted) {
  //   return null;
  // }

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled
          ? theme === "dark"
            ? "bg-gradient-to-br from-black/80 via-zinc-900/80 to-black/80 backdrop-blur-2xl border-b border-zinc-800/60 shadow-[0_8px_32px_0_rgba(147,241,173,0.12)]"
            : "bg-gradient-to-br from-white/80 via-gray-100/80 to-white/80 backdrop-blur-2xl border-b border-gray-200/60 shadow-[0_8px_32px_0_rgba(63,81,181,0.12)]"
          : theme === "dark"
          ? "bg-transparent border-b border-transparent"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        boxShadow: isScrolled ? "0 8px 32px 0 rgba(63,81,181,0.10)" : "none",
      }}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 pointer-events-none opacity-20 ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#93F1AD]/30 via-transparent to-[#93F1AD]/30"
            : "bg-gradient-to-r from-[#93F1AD]/30 via-transparent to-[#93F1AD]/80"
        }`}
      />

      <div className="navbar-container max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative w-48 h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Logo"
                className="absolute inset-0 w-full h-full object-contain p-1"
                onError={() => setLogoError(true)}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {(isDesktop || isTablet) && (
            <div
              ref={linksRef}
              className="hidden md:flex items-center gap-6 lg:gap-8"
            >
              <Link
                href="/"
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
                className={`relative text-base font-medium transition-all duration-300 group px-4 py-2 rounded-xl ${
                  isActive("/")
                    ? theme === "dark"
                      ? "text-[#93F1AD] bg-[#93F1AD]/10"
                      : "text-[#93F1AD]/30 bg-[#93F1AD]/10"
                    : theme === "dark"
                    ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                    : "text-gray-700 hover:text-[#93F1AD]/30 hover:bg-gray-100/60"
                } shadow-sm`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-1 ${
                    theme === "dark" ? "bg-[#93F1AD]" : "bg-[#93F1AD]"
                  } transition-all duration-300 ${
                    isActive("/") ? "w-full" : "group-hover:w-full"
                  } rounded-full`}
                />
              </Link>

              <Link
                href="/features"
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
                className={`relative text-base font-medium transition-all duration-300 group px-4 py-2 rounded-xl ${
                  isActive("/features")
                    ? theme === "dark"
                      ? "text-[#93F1AD] bg-[#93F1AD]/10"
                      : "text-[#93F1AD] bg-[#93F1AD]/10"
                    : theme === "dark"
                    ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                    : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                } shadow-sm`}
              >
                Features
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-1 ${
                    theme === "dark" ? "bg-[#93F1AD]" : "bg-[#93F1AD]"
                  } transition-all duration-300 ${
                    isActive("/features") ? "w-full" : "group-hover:w-full"
                  } rounded-full`}
                />
              </Link>

              <Link
                href="/pricing"
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
                className={`relative text-base font-medium transition-all duration-300 group px-4 py-2 rounded-xl ${
                  isActive("/pricing")
                    ? theme === "dark"
                      ? "text-[#93F1AD] bg-[#93F1AD]/10"
                      : "text-[#93F1AD] bg-[#93F1AD]/10"
                    : theme === "dark"
                    ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                    : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                } shadow-sm`}
              >
                Pricing
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-1 ${
                    theme === "dark" ? "bg-[#93F1AD]" : "bg-[#93F1AD]"
                  } transition-all duration-300 ${
                    isActive("/pricing") ? "w-full" : "group-hover:w-full"
                  } rounded-full`}
                />
              </Link>

              {/* Company Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  className={`flex items-center gap-2 text-base font-medium transition-all duration-300 group px-4 py-2 rounded-xl ${
                    isCompanyPage
                      ? theme === "dark"
                        ? "text-[#93F1AD] bg-[#93F1AD]/10"
                        : "text-[#93F1AD] bg-[#93F1AD]/10"
                      : theme === "dark"
                      ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                      : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                  } shadow-sm`}
                >
                  Company
                  <ChevronDown
                    className={`h-4 w-4 transition-all duration-300 ${
                      isCompanyOpen ? "rotate-180" : "group-hover:scale-110"
                    } ${
                      isCompanyPage
                        ? theme === "dark"
                          ? "text-[#93F1AD]"
                          : "text-[#93F1AD]"
                        : theme === "dark"
                        ? "text-[var(--foreground)]"
                        : "text-gray-700"
                    }`}
                  />
                </button>

                {isCompanyOpen && (
                  <div
                    ref={dropdownRef}
                    className={`absolute top-full right-0 mt-2 w-72 ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-black/95 via-zinc-900/95 to-black/95 border border-zinc-800/60"
                        : "bg-gradient-to-br from-white/95 via-gray-100/95 to-white/95 border border-gray-200/60"
                    } backdrop-blur-2xl rounded-2xl shadow-xl p-4 space-y-4 z-50 ${
                      theme === "dark"
                        ? "shadow-[#93F1AD]/20"
                        : "shadow-[#93F1AD]/20"
                    } overflow-y-auto max-h-[32rem]`}
                  >
                    {companyLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onMouseEnter={handleLinkHover}
                          onMouseLeave={handleLinkLeave}
                          className={`flex items-start gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                            isActive(link.href)
                              ? theme === "dark"
                                ? "text-[#93F1AD] bg-[#93F1AD]/10"
                                : "text-[#93F1AD] bg-[#93F1AD]/10"
                              : theme === "dark"
                              ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                              : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                          } shadow-sm`}
                          onClick={() => setIsCompanyOpen(false)}
                        >
                          <div
                            className={`p-3 rounded-lg ${
                              theme === "dark"
                                ? "bg-zinc-800/40 group-hover:bg-[#93F1AD]/20"
                                : "bg-gray-100/60 group-hover:bg-[#93F1AD]/20"
                            } transition-all duration-300 group-hover:scale-110 shadow-md`}
                          >
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                              {link.title}
                            </div>
                            <div
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-zinc-400"
                                  : "text-gray-500"
                              } group-hover:opacity-80 transition-opacity duration-300`}
                            >
                              {link.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Right side controls */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Theme Toggle */}
            <button
              ref={themeToggleRef}
              onClick={toggleTheme}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              className={`relative p-2.5 rounded-xl transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-zinc-800/40 text-[var(--foreground)] hover:bg-[#93F1AD]/20 hover:text-[#93F1AD]"
                  : "bg-gray-100/60 text-gray-700 hover:bg-[#93F1AD]/20 hover:text-[#93F1AD]"
              } backdrop-blur-md shadow-md`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              )}
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#93F1AD]/20 to-transparent"
                    : "bg-gradient-to-r from-[#93F1AD]/20 to-transparent"
                }`}
              />
            </button>

            {/* CTA Buttons */}
            {(isDesktop || isTablet) && (
              <div
                ref={ctaRef}
                className="hidden md:flex items-center gap-4 lg:gap-6"
              >
                <Link
                  href="/login"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl ${
                    theme === "dark"
                      ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                      : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                  } backdrop-blur-md shadow-md border border-white/10`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  className={`relative px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 overflow-hidden group ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-[#93F1AD] to-[#7fd99a] text-black hover:from-[#7fd99a] hover:to-[#93F1AD]"
                      : "bg-gradient-to-r from-[#93F1AD] to-[#5C6BC0] text-[var(--foreground)] hover:from-[#5C6BC0] hover:to-[#93F1AD]"
                  } shadow-lg hover:shadow-xl`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <Sparkles className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-[#7fd99a] to-[#93F1AD]"
                        : "bg-gradient-to-r from-[#5C6BC0] to-[#7986CB]"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                  />
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
                  theme === "dark"
                    ? "text-[var(--foreground)] hover:bg-zinc-800/40 hover:text-[#93F1AD]"
                    : "text-gray-700 hover:bg-gray-100/60 hover:text-[#93F1AD]"
                } backdrop-blur-md shadow-md border border-white/10`}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && isOpen && (
          <div
            ref={mobileMenuRef}
            className={`md:hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-black/95 via-zinc-900/95 to-black/95 backdrop-blur-2xl"
                : "bg-gradient-to-br from-white/95 via-gray-100/95 to-white/95 backdrop-blur-2xl"
            } border-t ${
              theme === "dark" ? "border-zinc-800/60" : "border-gray-200/60"
            } absolute top-full left-0 right-0 shadow-2xl rounded-b-2xl z-50`}
          >
            <div className="px-5 pt-6 pb-8 space-y-6">
              {/* Main navigation links */}
              <div className="space-y-4">
                <Link
                  href="/"
                  className={`mobile-menu-item block px-4 py-3 text-lg font-medium rounded-xl ${
                    isActive("/")
                      ? theme === "dark"
                        ? "text-[#93F1AD] bg-[#93F1AD]/10"
                        : "text-[#93F1AD] bg-[#93F1AD]/10"
                      : theme === "dark"
                      ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                      : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/features"
                  className={`mobile-menu-item block px-4 py-3 text-lg font-medium rounded-xl ${
                    isActive("/features")
                      ? theme === "dark"
                        ? "text-[#93F1AD] bg-[#93F1AD]/10"
                        : "text-[#93F1AD] bg-[#93F1AD]/10"
                      : theme === "dark"
                      ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                      : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>

                <Link
                  href="/pricing"
                  className={`mobile-menu-item block px-4 py-3 text-lg font-medium rounded-xl ${
                    isActive("/pricing")
                      ? theme === "dark"
                        ? "text-[#93F1AD] bg-[#93F1AD]/10"
                        : "text-[#93F1AD] bg-[#93F1AD]/10"
                      : theme === "dark"
                      ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                      : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </div>

              {/* Company section */}
              <div className="space-y-4">
                <div
                  className={`px-4 py-2 text-lg font-medium ${
                    theme === "dark" ? "text-zinc-400" : "text-gray-500"
                  }`}
                >
                  Company
                </div>
                {companyLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`mobile-menu-item flex items-center gap-4 px-4 py-3 ml-1 rounded-xl ${
                        isActive(link.href)
                          ? theme === "dark"
                            ? "text-[#93F1AD] bg-[#93F1AD]/10"
                            : "text-[#93F1AD] bg-[#93F1AD]/10"
                          : theme === "dark"
                          ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40"
                          : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`p-2.5 rounded-lg ${
                          theme === "dark" ? "bg-zinc-800/40" : "bg-gray-100/60"
                        } shadow-md`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold">{link.title}</div>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-zinc-400" : "text-gray-500"
                          }`}
                        >
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA Buttons */}
              <div
                className={`pt-6 space-y-4 border-t ${
                  theme === "dark" ? "border-zinc-800/60" : "border-gray-200/60"
                }`}
              >
                <Link
                  href="/login"
                  className={`mobile-menu-item block w-full text-center px-4 py-3 text-lg font-medium rounded-xl border border-white/10 ${
                    theme === "dark"
                      ? "text-[var(--foreground)] hover:text-[#93F1AD] hover:bg-zinc-800/40 border-zinc-700/40"
                      : "text-gray-700 hover:text-[#93F1AD] hover:bg-gray-100/60 border-gray-300/40"
                  } backdrop-blur-md shadow-md`}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className={`mobile-menu-item block w-full text-center px-4 py-3 text-lg font-bold rounded-xl transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-[#93F1AD] to-[#7fd99a] text-black hover:from-[#7fd99a] hover:to-[#93F1AD]"
                      : "bg-gradient-to-r from-[#93F1AD] to-[#5C6BC0] text-[var(--foreground)] hover:from-[#5C6BC0] hover:to-[#93F1AD]"
                  } shadow-md`}
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
