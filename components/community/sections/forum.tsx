import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

const forumTopics = [
  { title: "Best practices for Chama management", replies: 23, views: 156 },
  { title: "Understanding blockchain in table banking", replies: 15, views: 89 },
  { title: "Tips for increasing group savings", replies: 31, views: 210 },
]

export function ForumSection() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-gradient mb-8 text-center">Community Forum</h2>
        <div className="space-y-6 mb-8">
          {forumTopics.map((topic, index) => (
            <div key={index} className="bg-[var(--background)] p-6 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{topic.title}</h3>
                <p className="text-zinc-400">
                  <span className="mr-4">{topic.replies} replies</span>
                  <span>{topic.views} views</span>
                </p>
              </div>
              <MessageSquare className="h-6 w-6 text-gradient" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-[#93F1AD] hover:bg-[#93F1AD]/90 text-black">View All Topics</Button>
        </div>
      </div>
    </section>
  )
}

