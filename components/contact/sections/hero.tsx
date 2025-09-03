export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center md:items:start w-full min-h-[369px] px-4 md:px-8 lg:px-16 py-12 md:py-28 gap-10 md:gap-20 mx-auto relative md:min-h-[500px]">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

      {/* Content */}
      <div className="relative w-full container z-10 px-4 md:px-0 flex flex-col items-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 md:mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg sm:text-lg md:text-xl text-[var(--foreground)] mb-6 md:mb-8 text-center max-w-[600px] md:max-w-none">
          We're here to assist you with any questions or feedback you may have.
        </p>
      </div>
    </section>
  );
}
