"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsLoading(false);
    }, 1500);
  };

  useGSAP(() => {
    // Footer animation with staggered elements
    const footerElements = document.querySelectorAll('.footer-animate');
    
    gsap.from(footerElements, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
      }
    });

    // Newsletter form special animation
    gsap.from(".newsletter-container", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
      }
    });
    
    // Social icons animation
    gsap.from(".social-icon", {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
      }
    });
  }, []);

  return (
    <footer id="footer" className="bg-[var(--card-bg)] border-t border-[var(--border)] py-16 px-4 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full opacity-5 blur-3xl" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and Newsletter Section */}
          <div className="lg:col-span-5 footer-animate">
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="ChamaConnect Logo" 
                  width={180} 
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            
            <div className="newsletter-container">
              <h3 className="text-[var(--foreground)] text-lg font-semibold mb-4">Join our newsletter</h3>
              <p className="text-[var(--foreground)] mb-4">Stay up to date on features and releases</p>
              
              {isSubscribed ? (
                <div className="bg-[var(--primary)]/10 text-[var(--primary)] p-4 rounded-lg">
                  <p>Thank you for subscribing! You'll hear from us soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                        required
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-3 bg-[var(--primary)] text-[var(--background)] font-medium rounded-lg hover:bg-[var(--primary-dark)] hover:text-[var(--foreground)] transition-all duration-300 flex justify-center items-center"
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[var(--background)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing
                        </span>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </div>
                </form>
              )}
              
              <p className="text-[var(--foreground)] text-xs mt-3">
                By subscribing you agree to with our <Link href="/privacy" className="text-[var(--primary)] hover:underline">Privacy Policy</Link> and provide consent to receive updates from our company.
              </p>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="lg:col-span-2 footer-animate">
            <h3 className="text-[var(--foreground)] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div className="lg:col-span-2 footer-animate">
            <h3 className="text-[var(--foreground)] font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/blog" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media Section */}
          {/* <div className="lg:col-span-3 footer-animate">
            <h3 className="text-[var(--foreground)] font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 bg-[var(--background)] rounded-full flex items-center justify-center hover:bg-[var(--primary)]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 bg-[var(--background)] rounded-full flex items-center justify-center hover:bg-[var(--primary)]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 bg-[var(--background)] rounded-full flex items-center justify-center hover:bg-[var(--primary)]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 bg-[var(--background)] rounded-full flex items-center justify-center hover:bg-[var(--primary)]/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div> */}
        </div>
        
        {/* Copyright and Legal */}
        <div className="pt-8 mt-8 border-t border-[var(--border)]">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-[var(--foreground)] text-sm footer-animate">
              &copy; 2025 ChamaConnect - MUIAA LTD. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 lg:mt-0 footer-animate">
              <Link href="/privacy" className="text-[var(--foreground)] text-sm hover:text-[var(--primary)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[var(--foreground)] text-sm hover:text-[var(--primary)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
