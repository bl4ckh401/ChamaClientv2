import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Cypherium Jan 2025 Hackathon",
    type: "Hackathon",
    date: "Sat 18 Jan 2025",
    location: "Nairobi",
    image: "/community/blog1.jpg",
    description:
      "Learn essential skills for managing your finances effectively in this interactive session.",
  },
  {
    title: "Savings Strategies Workshop",
    type: "Workshop",
    date: "Sat 10 Feb 2024",
    location: "Community Center",
    image: "/community/blog2.png",
    description:
      "Discover effective savings strategies tailored for your group's financial goals.",
  },
  {
    title: "Monthly Group Meeting",
    type: "Meeting",
    date: "Sun 11 Feb 2024",
    location: "Library",
    image: "/community/blog3.png",
    description:
      "Join us to discuss group progress and future financial plans.",
  },
];

export function EventsSection() {
  return (
    <section className="flex flex-col justify-center items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 pt-8 md:pt-[61px] pb-12 md:pb-28 gap-10 md:gap-20 mx-auto">
      <div className="container px-0 md:px-4 mx-auto">

              {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

        {/* Title Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between md:items-start sm:items-end w-full mb-10 md:mb-20 gap-4 sm:gap-0">
          <div className="text-center px-4">
            <span className="text-[var(--foreground)] mb-2 block text-sm md:text-base">
              Connect
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Events
            </h2>
            <p className="text-[var(--foreground)] mt-2 text-sm md:text-base">
              Join us for our upcoming community events and workshops!
            </p>
          </div>
          <Link
            // key={index}
            href="https://www.blog.muiaa.com/category/blockchain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-[#93F1AD] text-gradient hover:bg-[#93F1AD] hover:text-black w-full sm:w-auto"
            >
              View all
            </Button>
          </Link>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-start border border-[#93F1AD] rounded-lg overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-video md:h-[277px]">
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-[#93F1AD] text-black text-xs md:text-sm rounded-full">
                    {event.type}
                  </span>
                </div>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-start gap-3 md:gap-4 p-4 md:p-6 w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-zinc-400 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
                  {event.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base">
                  {event.description}
                </p>
                <Button
                  variant="link"
                  className="text-gradient hover:text-gradient/80 p-0 h-auto font-semibold text-sm md:text-base"
                >
                  View event →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
