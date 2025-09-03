import Image from "next/image"

const featuredMembers = [
  { name: "Jane Doe", role: "Chama Leader", image: "/placeholder.svg" },
  { name: "John Smith", role: "Financial Advisor", image: "/placeholder.svg" },
  { name: "Alice Johnson", role: "Blockchain Expert", image: "/placeholder.svg" },
]

export function FeaturedMembersSection() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Featured Community Members</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{member.name}</h3>
              <p className="text-gradient">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

