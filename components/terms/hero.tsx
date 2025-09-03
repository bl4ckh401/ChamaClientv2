import Image from "next/image";

interface TermsHeroProps {
  title: string;
  description: string;
}

export function TermsHero({ title, description }: TermsHeroProps) {
  return (
    <section className="flex flex-col items-center justify-center md:items:start w-full min-h-[369px] px-4 md:px-8 lg:px-16 py-12 md:py-28 gap-10 md:gap-20 mx-auto relative md:min-h-[500px]">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

      <div className="relative container z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-20 w-full px-4 md:px-0">
        <div className="flex flex-col items-center md:items-start gap-6 flex-1">
          <h1 className="text-gradient text-4xl md:text-5xl font-bold text-center md:text-left">
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-center md:items-start gap-6 flex-1">
          <p className="text-[var(--foreground)] text-lg leading-[150%] text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
