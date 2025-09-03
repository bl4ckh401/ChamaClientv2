import { HeroSection } from "@/components/contact/sections/hero";
import { ContactForm } from "@/components/contact/sections/contact-form";
import { ContactCards } from "@/components/contact/sections/contact-cards";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-[25%] left-[20%] w-[280px] h-[280px] rounded-full bg-[#93F1AD]/10 filter blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[320px] h-[320px] rounded-full bg-blue-500/10 filter blur-[120px]"></div>
      </div>
      
      <div className="relative z-10">
        
        <div className="section-glass">
          <HeroSection />
        </div>
        
        <div className="glass-glow">
          <ContactForm />
        </div>
        
        <div className="glass-sm">
          <ContactCards />
        </div>
        
      </div>
    </main>
  );
}
