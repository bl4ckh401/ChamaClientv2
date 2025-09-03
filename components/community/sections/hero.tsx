"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center justify-center md:items:start w-full min-h-[369px] px-4 md:px-8 lg:px-16 py-12 md:py-28 gap-10 md:gap-20 mx-auto relative md:min-h-[500px]">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

      {/* Content */}
      <div className="relative flex flex-col z-10 items-center md:items-start max-w-3xl w-full px-4 md:px-0">
        <h1 className="text-4xl text-center md:text-left sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 md:mb-6">
          Join Our Community
        </h1>
        <p className="text-lg sm:text-lg text-center md:text-start md:text-xl text-[var(--foreground)] mb-6 md:mb-8">
          Become part of a supportive network that empowers your financial
          journey and enhances collaboration.
        </p>
        <Button
          className="bg-[#93F1AD] hover:bg-[#93F1AD]/90 text-black w-full sm:w-auto hover:cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
