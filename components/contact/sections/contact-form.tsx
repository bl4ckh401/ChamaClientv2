"use client"

import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { LocationPin } from "@/components/assets/ShieldIcon"

export function ContactForm() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-8 md:py-14 gap-10 md:gap-20 mx-auto">
      <div className="container flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-center">
        {/* Form Section */}
        <div className="w-full lg:flex-1 space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <span className="text-[var(--foreground)] text-sm md:text-base">Connect</span>
            <h2 className="text-gradient text-3xl md:text-4xl font-bold">Send Message</h2>
            <p className="text-[var(--foreground)] text-sm md:text-base">We'd love to hear from you!</p>
          </div>

          <form className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <label className="text-[var(--foreground)] text-sm md:text-base">First and Last Name</label>
              <Input
                className="bg-white/5 border border-[#93F1AD] text-[var(--foreground)] focus:border-[#93F1AD] focus:ring-[#93F1AD]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[var(--foreground)] text-sm md:text-base">Email</label>
              <Input
                type="email"
                className="bg-white/5 border border-[#93F1AD] text-[var(--foreground)] focus:border-[#93F1AD] focus:ring-[#93F1AD]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[var(--foreground)] text-sm md:text-base">Message</label>
              <Textarea
                placeholder="Type your message..."
                className="bg-white/5 border border-[#93F1AD] text-[var(--foreground)] focus:border-[#93F1AD] focus:ring-[#93F1AD] min-h-[120px] md:min-h-[150px]"
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="terms" className="border-[#93F1AD] data-[state=checked]:bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent" />
              <label htmlFor="terms" className="text-sm text-[var(--foreground)]">
                I accept the Terms
              </label>
            </div>

            <Button className="w-full sm:w-auto bg-gradient-to-r hover:bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--background)]">
              Submit
            </Button>
          </form>
        </div>

        {/* Map Icon Section */}
        <div className="flex md:flex w-full lg:w-[480px] h-[320px] lg:h-[480px] px-4 lg:px-[60px] justify-center items-center">
          <LocationPin color={"var(--foreground)"}/>
        </div>
      </div>
    </section>
  )
}