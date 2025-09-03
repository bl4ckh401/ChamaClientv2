import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Osborne Njoroge",
    title: "Founder",
    image: "/aboutus/Ozzy.png",
    bio: "With extensive experience in integrating fintech and blockchain strategies, he has worked for companies like Wells Fargo Bank in North America.",
  },
  {
    name: "Chebet Rotich",
    title: "System Analyst",
    image: "/aboutus/Chebet.jpg",
    bio: "Susan Rotich is a seasoned UI/UX designer, marketing expert, and SEO professional with over 8 years of experience.",
  },
  {
    name: "John Muthee",
    title: "General Manager",
    image: "/aboutus/John.png",
    bio: "Experienced in MCS sales and marketing. Has worked at DIAGEO Kenya in corporate and business development at Kenya Postal Corporation.",
  },
  {
    name: "Marvin Ngala",
    title: "Product Designer",
    image: "/aboutus/Marvin.png",
    bio: "Finance and design guru with knowledge in blockchain technology, business finance, product design, and operations management.",
  },
  {
    name: "Emmanuel Koki",
    title: "Outreach and Marketing",
    image: "/aboutus/Emmanuel.png",
    bio: "A CPA and accounting manager at First Love Kenya since 2014. Has led impactful projects like a transition home for orphans and food relief initiatives.",
  },
  {
    name: "Vanessa Njoroge",
    title: "HR & Talent Recruiter",
    image: "/aboutus/Vanessa.png",
    bio: "Senior recruiter with 10 years of full-cycle recruiting experience; currently VP of Talent Acquisition at Bank of America, leading Business Banking recruitment.",
  },
  {
    name: "Antonio Omambia",
    title: "Project Manager",
    image: "/aboutus/Antonio.png",
    bio: "Specialist in Project Management, Digital Marketing with expertise in fintech, blockchain, and IoT technical support and maintenance.",
  },
  {
    name: "Joseah Biwott",
    title: "Senior Software Engineer",
    image: "/aboutus/Carl.png",
    bio: "Joseah specializes in full-stack development, creating robust blockchain solutions that ensure seamless performance of financial systems.",
  },
  {
    name: "Omambia Dauglous",
    title: "DeFi, DevOps & Software",
    image: "/aboutus/domambia.jpg",
    bio: "Seasoned Web3 Software Engineer with 8+ years of experience in Fintech and Web3 Blockchain development; currently steering Web3 operations.",
  },
  {
    name: "Pavin Kiptoo",
    title: "Blockchain Dev & DeFi Maxi",
    image: "/aboutus/Pavin.png",
    bio: "DeFi Analyst and researcher with hands-on experience in smart contract development on Cypherium, Ethereum and other EVM blockchains.",
  },
]

export function TeamSection() {
  return (
    <section className="">
      <div className="container px-4 mx-auto">

        {/* First Row (3 members) */}
        <div className="flex justify-center items-center gap-8 flex-wrap mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Second Row (4 members) */}
        <div className="flex justify-center items-center gap-8 flex-wrap mb-8">
          {teamMembers.slice(3, 7).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Third Row (3 members) */}
        <div className="flex justify-center items-center gap-8 flex-wrap mb-8">
          {teamMembers.slice(7, 10).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Careers Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#93F1AD] mb-4">
            Available Opportunities!
          </h3>
          <p className="text-[var(--foreground)] mb-8">
            Join our team and make a difference today!
          </p>
          <button className="bg-[#93F1AD] hover:bg-[#93F1AD]/90 text-black">
            Careers
          </button>
        </div>
      </div>
    </section>
  )
}

interface TeamMember {
  name: string
  title: string
  image: string
  bio: string
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="flex w-[280px] flex-col justify-center items-center gap-6 rounded-lg overflow-hidden">
    {/* Image Section */}
    <div className="relative w-full h-64">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center gap-3 px-4 pb-4">
      <div className="text-center">
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">{member.name}</h3>
        <p className="text-[#93F1AD] mb-3">{member.title}</p>
        <p className="text-zinc-400 text-sm">{member.bio}</p>
      </div>

      <div className="flex justify-center gap-4">
        <Link href="#" aria-label={`${member.name}'s LinkedIn`} className="text-[#93F1AD] hover:text-[var(--foreground)]">
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link href="#" aria-label={`${member.name}'s Twitter`} className="text-[#93F1AD] hover:text-[var(--foreground)]">
          <Twitter className="h-5 w-5" />
        </Link>
      </div>
    </div>
  </div>
)