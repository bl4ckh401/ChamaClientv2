import Image from "next/image"

const showcaseImages = [
  {
    id: 1,
    src: "/community/1.jpeg",
    alt: "Community event - Workshop session"
  },
  {
    id: 2,
    src: "/community/2.jpeg",
    alt: "Community event - Group meeting"
  },
  {
    id: 3,
    src: "/community/3.jpg",
    alt: "Community event - Financial training"
  },
  {
    id: 4,
    src: "/community/4.jpeg",
    alt: "Community event - Members networking"
  },
  {
    id: 5,
    src: "/community/5.jpg",
    alt: "Community event - Leadership summit"
  },
  {
    id: 6,
    src: "/community/6.jpeg",
    alt: "Community event - Awards ceremony"
  }
]

export function ShowcaseSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 pt-12 md:pt-20 pb-8 md:pb-12 gap-6 md:gap-8">
      {/* Header */}
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3 md:mb-4">Community Showcase</h2>
        <p className="text-[var(--foreground)] text-sm md:text-base">Explore our vibrant community events and success stories.</p>
      </div>

      {/* Images Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
        {showcaseImages.map((image) => (
          <div 
            key={image.id} 
            className="relative h-[200px] sm:h-[250px] md:h-[416px] rounded-lg overflow-hidden bg-gray-300"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}