"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function JoinCommunitySection() {
  const router = useRouter()
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gradient mb-6">Join Our Growing Community</h2>
        <p className="text-[var(--foreground)] text-xl mb-8 max-w-2xl mx-auto">
          Be part of a network that's revolutionizing table banking. Share experiences, learn from others, and grow
          together.
        </p>
        <Button className="bg-[#93F1AD] hover:bg-[#93F1AD]/90 text-black text-lg px-8 py-3 hover:cursor-pointer" onClick={()=>router.push("/dashboard")}>Become a Member</Button>
      </div>
    </section>
  )
}

