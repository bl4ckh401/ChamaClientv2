import { Button } from "@/components/ui/button"
import { FileText, Video, Headphones } from "lucide-react"

const resources = [
  { title: "ChamaConnect User Guide", type: "Document", icon: FileText },
  { title: "Blockchain Basics Video Series", type: "Video", icon: Video },
  { title: "Financial Management Podcast", type: "Audio", icon: Headphones },
]

export function ResourcesSection() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Community Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg">
              <resource.icon className="h-12 w-12 text-gradient mb-4" />
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{resource.title}</h3>
              <p className="text-zinc-400 mb-4">{resource.type}</p>
              <Button
                variant="outline"
                className="w-full border-[#93F1AD] text-gradient hover:bg-[#93F1AD] hover:text-black"
              >
                Access Resource
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

