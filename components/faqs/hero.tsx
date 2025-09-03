import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center md:items:start w-full min-h-[369px] px-4 md:px-8 lg:px-16 py-12 md:py-28 gap-10 md:gap-20 mx-auto relative md:min-h-[500px]">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

      <div className="relative top-[120px] h-full flex flex-col items-center justify-start text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)] mb-6 md:mb-8">
          Explore our FAQ to find answers to your most pressing questions about
          our platform.
        </p>
      </div>
    </section>
  );
}
