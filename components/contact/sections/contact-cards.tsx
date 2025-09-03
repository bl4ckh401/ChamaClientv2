import Link from "next/link"
import { EmailIconContacts, LiveChat, OfficeIcon, PhoneIcon, PhoneIconContacts } from "@/components/assets/ShieldIcon"

const contactCards = [
  {
    icon: ()=>EmailIconContacts({color: "#93F1AD"}),
    title: "Email",
    description: "Reach us anytime for inquiries or support.",
    link: "muiaalimited@gmail.com",
    href: "mailto:muiaalimited@gmail.com",
  },
  {
    icon: ()=>LiveChat({color: "#93F1AD"}),
    title: "Live Chat",
    description: "Chat with our support team for immediate assistance.",
    link: "Start New Chat",
    href: "#chat",
  },
  {
    icon: ()=>PhoneIconContacts({color: "#93F1AD"}),
    title: "Phone",
    description: "Call us for quick answers to your questions.",
    link: "+254-723-655011",
    href: "tel:+254-723-655011",
  },
  {
    icon: ()=>OfficeIcon({color: "#93F1AD"}),
    title: "Office",
    description: "Visit us at our headquarters for more information.",
    link: "57610 00200 - CITY SQUARE Nairobi, Kenya",
    href: "https://maps.google.com/?q=Nairobi,Kenya",
  },
]

export function ContactCards() {
  return (
    <section className="w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactCards.map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-4 md:gap-6 text-center p-4 md:p-6 rounded-lg"
            >
              <card.icon />
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--foreground)]/80">
                    {card.description}
                  </p>
                </div>
                <Link 
                  href={card.href} 
                  className="inline-block text-sm md:text-base text-gradient underline hover:text-gradient/80 transition-colors"
                >
                  {card.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

