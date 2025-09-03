"use client";

import { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import gsap from 'gsap';
import { useImageCheck } from '@/utils/imageCheck';

type MarqueeProps = {
  logos: string[];
  reverse?: boolean;
  delay?: number;
};

const MarqueePartners = ({ logos, reverse = false, delay = 0 }: MarqueeProps) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Check if at least one image is loaded
  const firstImageLoaded = useImageCheck(logos[0]);
  
  useEffect(() => {
    if (firstImageLoaded) {
      setImagesLoaded(true);
    }
  }, [firstImageLoaded]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const logos = containerRef.current.querySelectorAll('.logo-item');
    
    // Make sure logos are visible immediately without any animation delay
    gsap.set(logos, { 
      opacity: 1,
      visibility: 'visible',
      y: 0,
      scale: 1
    });
    
    // Simpler entrance animation that doesn't hide logos initially
    gsap.fromTo(logos, 
      {
        opacity: 0.7,
        y: 5
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.1,
        clearProps: "visibility"
      }
    );
    
    // Add enhanced hover interactions with slight 3D effect
    logos.forEach(logo => {
      logo.addEventListener("mouseenter", () => {
        gsap.to(logo, {
          scale: 1.15,
          opacity: 1,
          rotateY: "5deg",
          duration: 0.4,
          ease: "back.out(1.7)",
          overwrite: true
        });
      });
      
      logo.addEventListener("mouseleave", () => {
        gsap.to(logo, {
          scale: 1,
          opacity: 0.9,
          rotateY: "0deg",
          duration: 0.3,
          ease: "power2.out",
          overwrite: true
        });
      });
    });
    
    // Add randomized subtle movements to create a more natural flow
    logos.forEach((logo, index) => {
      const randomDelay = index * 0.5 + Math.random() * 2;
      
      gsap.to(logo, {
        y: "random(-8, 8)",
        duration: 4 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: randomDelay
      });
    });
    
    return () => {
      logos.forEach(logo => {
        logo.removeEventListener("mouseenter", () => {});
        logo.removeEventListener("mouseleave", () => {});
      });
    };
  }, [delay, theme]);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative min-h-[80px] md:min-h-[100px]" ref={containerRef}>
        <div 
          className={`flex gap-16 md:gap-20 lg:gap-24 items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
          style={{ 
            willChange: "transform",
            display: "flex",
            animation: reverse 
              ? `marquee 40s linear infinite reverse` 
              : `marquee 45s linear infinite`
          }}
        >
          {/* Triple the logos for smoother continuous loop */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="logo-item inline-flex items-center justify-center"
              style={{ 
                transform: "translateZ(0)",
                animation: `subtle-pulse 7s ease-in-out infinite`,
                animationDelay: `${index * 0.7}s`,
                display: "inline-flex"
              }}
            >
              <img
                src={logo}
                alt={`Partner ${index % logos.length + 1}`}
                className="h-12 md:h-16 w-auto object-contain"
                style={{ 
                  opacity: 1,
                  display: "block", /* Ensure image displays properly */
                  filter: theme === 'dark' ? 'brightness(1.2)' : 'none',
                  transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease, opacity 0.3s ease',
                  willChange: "opacity, transform",
                  maxWidth: "none", /* Prevent image shrinking */
                  pointerEvents: "auto" /* Ensure hover effects work */
                }}
                loading="eager"
                onError={(e) => {
                  console.error("Image failed to load:", logo);
                  // Show fallback for failed images
                  (e.target as HTMLImageElement).style.display = "none";
                }}
                onLoad={(e) => {
                  console.log("Image loaded successfully:", logo);
                  // Ensure visibility on load
                  (e.target as HTMLImageElement).style.opacity = "1";
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Subtle gradient overlays for smooth fade effect - reduced opacity for better visibility */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent opacity-50 z-10"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent opacity-50 z-10"></div>
      </div>
    </div>
  );
};

export default MarqueePartners;
