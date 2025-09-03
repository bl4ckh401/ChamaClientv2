"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export function SupportSection() {
  const router = useRouter()
  return (
    <section className="flex flex-col items-start w-full max-w-[1441px] min-h-[753px] px-4 md:px-8 lg:px-16 py-8 md:pt-[59px] md:pb-12 gap-10 md:gap-20 mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
        {/* Content Section */}
        <div className="flex flex-col items:center md:items-start gap-6 md:gap-8 flex-1 text-center lg:text-left w-full">
          <span className="text-[var(--foreground)] text-sm md:text-base">Support</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient max-w-[600px]">
            Show Your Support for Chama Connect
          </h2>
          <p className="text-[var(--foreground)] text-base md:text-lg max-w-[600px]">
            Explore our exclusive community merchandise designed to promote Chama Connect. Every purchase helps us
            enhance our platform and support our members.
          </p>
          <div className="flex flex-row sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="border-[#93F1AD] text-gradient hover:bg-[#93F1AD] hover:text-black w-full sm:w-auto hover:cursor-pointer" onClick={()=>router.push("/dashboard")}
            >
              Join Us
            </Button>
            <Button 
              variant="ghost" 
              className="text-[var(--foreground)] hover:text-gradient w-full sm:w-auto hover:cursor-pointer"
              onClick={()=>router.push("/contact")}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:flex-1 aspect-square lg:h-[640px]">
          <div 
            className="absolute inset-0 bg-[url('/community/WomenofDestiny.png')] bg-gray-300 bg-center bg-cover bg-no-repeat rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}