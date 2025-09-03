"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const FAQs = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const faqsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  
  const [isClient, setIsClient] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const faqs = [
    {
      question: "What is table banking?",
      answer: "Table banking is a community-based savings and loan system where members contribute funds. These funds can then be accessed by members for loans or emergencies. It promotes financial inclusion and collective responsibility."
    },
    {
      question: "How does Chama Connect work?",
      answer: "ChamaConnect provides a digital platform for managing group savings, loans, and financial records. Members can track contributions, apply for loans, and access financial reports through our secure platform."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we implement bank-grade security measures including encryption and secure authentication to protect your financial data and transactions. All data is stored securely and backed up regularly."
    },
    {
      question: "Can I access funds?",
      answer: "Yes, members can access funds through loans based on their group's policies and their contribution history. The process is transparent and managed through our platform."
    },
    {
      question: "What features are included?",
      answer: "Our platform includes member management, contribution tracking, loan processing, automated calculations, financial reporting, group notifications, and blockchain-based transaction tracking."
    }
  ];



  // useGSAP(() => {
  //   if (!sectionRef.current || !isClient) return;
    
  //   // Initialize visibility
  //   gsap.set([titleRef.current, subtitleRef.current, faqsContainerRef.current, ctaRef.current].filter(Boolean), {
  //     opacity: 1,
  //     visibility: "visible"
  //   });

  //   // Create floating elements animation
  //   const floatingElements = decorationRef.current?.querySelectorAll('.floating-element');
  //   if (floatingElements) {
  //     floatingElements.forEach((element, index) => {
  //       gsap.fromTo(element, 
  //         { y: 20, opacity: 0, scale: 0.8 },
  //         { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: index * 0.1, ease: "power2.out" }
  //       );
        
  //       // Continuous gentle movement
  //       gsap.to(element, {
  //         y: "random(-10, 10)",
  //         x: "random(-8, 8)",
  //         duration: "random(4, 7)",
  //         repeat: -1,
  //         yoyo: true,
  //         ease: "sine.inOut",
  //         delay: index * 0.15
  //       });
  //     });
  //   }

  //   // Main scroll animations
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 75%",
  //       end: "center 25%",
  //       toggleActions: "play none none reverse"
  //     }
  //   });

  //   // Title animations
  //   if (titleRef.current) {
  //     timeline.fromTo(titleRef.current,
  //       { y: 30, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
  //     );
  //   }
    
  //   if (subtitleRef.current) {
  //     timeline.fromTo(subtitleRef.current,
  //       { y: 20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
  //       "-=0.5"
  //     );
  //   }

  //   // FAQ items staggered animation
  //   const faqItems = document.querySelectorAll('.faq-item');
  //   timeline.fromTo(faqItems,
  //     { y: 30, opacity: 0 },
  //     { 
  //       y: 0, 
  //       opacity: 1, 
  //       stagger: 0.1, 
  //       duration: 0.7, 
  //       ease: "back.out(1.1)" 
  //     },
  //     "-=0.3"
  //   );

  //   // CTA animation
  //   if (ctaRef.current) {
  //     timeline.fromTo(ctaRef.current,
  //       { y: 20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
  //       "-=0.4"
  //     );
  //   }

  //   // FAQ click animations
  //   document.querySelectorAll('.faq-header').forEach((header, index) => {
  //     header.addEventListener('click', () => {
  //       const content = document.querySelector(`.faq-content-${index}`);
  //       const plusIcon = header.querySelector('.plus-icon');
  //       const minusIcon = header.querySelector('.minus-icon');
        
  //       if (content && plusIcon && minusIcon) {
  //         if (openFAQ === index) {
  //           gsap.to(content, {
  //             height: 0,
  //             opacity: 0,
  //             duration: 0.3,
  //             ease: "power2.inOut"
  //           });
  //           gsap.to(plusIcon, { rotation: 0, opacity: 1, duration: 0.3 });
  //           gsap.to(minusIcon, { rotation: -90, opacity: 0, duration: 0.3 });
  //         } else {
  //           // Close any open FAQ first
  //           if (openFAQ !== null) {
  //             const openContent = document.querySelector(`.faq-content-${openFAQ}`);
  //             const openPlusIcon = document.querySelector(`.faq-header-${openFAQ} .plus-icon`);
  //             const openMinusIcon = document.querySelector(`.faq-header-${openFAQ} .minus-icon`);
              
  //             if (openContent && openPlusIcon && openMinusIcon) {
  //               gsap.to(openContent, {
  //                 height: 0,
  //                 opacity: 0,
  //                 duration: 0.3,
  //                 ease: "power2.inOut"
  //               });
  //               gsap.to(openPlusIcon, { rotation: 0, opacity: 1, duration: 0.3 });
  //               gsap.to(openMinusIcon, { rotation: -90, opacity: 0, duration: 0.3 });
  //             }
  //           }
            
  //           // Open the clicked FAQ
  //           gsap.to(content, {
  //             height: "auto",
  //             opacity: 1,
  //             duration: 0.5,
  //             ease: "power2.out"
  //           });
  //           gsap.to(plusIcon, { rotation: 90, opacity: 0, duration: 0.3 });
  //           gsap.to(minusIcon, { rotation: 0, opacity: 1, duration: 0.3 });
  //         }
  //       }
  //     });
  //   });

  //   // Parallax effect for decorative elements
  //   if (!isMobile && decorationRef.current) {
  //     gsap.to(decorationRef.current, {
  //       y: "-20%",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: 1
  //       }
  //     });
  //   }

  // }, [isMobile, isClient, openFAQ]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section
      id="who-we-are"
      className="py-20 lg:py-32 bg-[var(--background)] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Question Marks Decoration */}
      <div className="absolute top-10 right-10 text-6xl opacity-10 animate-pulse" style={{ animationDuration: '5s' }}>❓</div>
      <div className="absolute bottom-20 left-10 text-7xl opacity-10 animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}>❓</div>
      <div className="absolute top-40 left-20 text-5xl opacity-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}>❓</div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div ref={titleRef} className="mb-4" style={{ opacity: 1, visibility: 'visible' }}>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent leading-tight">
              FAQs
            </h2>
          </div>
          
          <div ref={subtitleRef} className="max-w-2xl mx-auto" style={{ opacity: 1, visibility: 'visible' }}>
            <p className="text-lg text-[var(--foreground)]">
              Find answers to your most pressing questions about our table banking platform and its features.
            </p>
          </div>
        </div>
        
        {/* FAQs Accordion */}
        <div ref={faqsContainerRef} className="max-w-3xl mx-auto" style={{ opacity: 1, visibility: 'visible' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item mb-5 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] overflow-hidden transition-all duration-300 ${
                openFAQ === index ? "shadow-md" : ""
              }`}
            >
              {/* FAQ Header - now a button for accessibility */}
              <button
                type="button"
                aria-expanded={openFAQ === index}
                aria-controls={`faq-content-${index}`}
                className={`faq-header faq-header-${index} flex justify-between items-center w-full p-5 text-left hover:bg-[var(--primary)]/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30`}
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
              >
                <h4 className="text-lg font-semibold text-[var(--foreground)]">{faq.question}</h4>
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {/* Plus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`plus-icon h-6 w-6 text-[var(--primary)] transition-all duration-300 ${openFAQ === index ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>

                  {/* Minus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`minus-icon absolute h-6 w-6 text-[var(--primary)] transition-all duration-300 ${openFAQ === index ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
              </button>

              {/* FAQ Content */}
              <div
                id={`faq-content-${index}`}
                className={`faq-content faq-content-${index} transition-[max-height,opacity,padding] duration-300 overflow-hidden`} 
                style={{
                  maxHeight: openFAQ === index ? '600px' : '0px',
                  opacity: openFAQ === index ? 1 : 0,
                  padding: openFAQ === index ? '0 20px 20px 20px' : '0 20px'
                }}
              >
                <p className="text-[var(--foreground)]/75">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
};

export default FAQs;
