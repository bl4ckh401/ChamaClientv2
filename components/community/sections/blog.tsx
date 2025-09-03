import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const posts = [
  {
    category: "Chama",
    title: "Chamas in Kenya: Driving Grassroots Economic Empowerment",
    description:
      "Learn the the principles of collective saving and investment.",
    author: {
      name: "Susan Rotich",
      image: "/community/events1.jpg",
    },
    date: "1 Dec 2024",
    readTime: "8 mins read",
    image: "/community/events1.jpg",
  },
  {
    category: "Finance",
    title:
      "Microfinance vs. Digital Banking: Who Will Win the Battle for the Unbanked?",
    description:
      "What does the future hold for these two systems? Will they coexist, compete, or converge?",
    author: {
      name: "Blog Admin",
      image: "/community/events2.jpeg",
    },
    date: "20 Feb 2025",
    readTime: "12 mins read",
    image: "/community/events2.jpeg",
  },
  {
    category: "Chama",
    title: "The Chama Revolution: Kenyan Banks Targeting Investment Clubs",
    description:
      "chamas, or informal investment clubs, have emerged as powerful tools for wealth creation.",
    author: {
      name: "Blog Admin",
      image: "/community/events3.jpg",
    },
    date: "20 Nov 2024",
    readTime: "6 mins read",
    image: "/community/events3.jpg",
  },
];

export function BlogSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-8 lg:px-16 pt-8 md:pt-8 pb-12 md:pb-12 gap-10 md:gap-20 mx-auto">
      {/* Title Section */}

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--secondary)]/5"></div>

      <div className="flex flex-col items-center w-full max-w-[768px] gap-4 text-center px-4">
        <span className="text-[var(--foreground)] text-sm md:text-base">Blog</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gradient">
          Latest Insights and Tips
        </h2>
        <p className="text-[var(--foreground)] text-sm md:text-base">
          Explore our latest articles on table banking.
        </p>
      </div>

      {/* Blog Posts Container */}
      <div className="flex flex-col items-start gap-8 md:gap-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`https://www.blog.muiaa.com/category/${post.category.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-4 md:gap-6 group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
                <span className="text-xs md:text-sm text-gradient">
                  {post.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-gradient transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base line-clamp-2">
                  {post.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 md:gap-4 w-full mt-2">
                  <Avatar className="h-8 w-8 md:h-10 md:w-10">
                    <AvatarImage
                      src={post.author.image}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1">
                    <span className="text-[var(--foreground)] font-medium text-sm md:text-base">
                      {post.author.name}
                    </span>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Link
            href="https://www.blog.muiaa.com/category/chama/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-[#93F1AD] text-gradient hover:bg-[#93F1AD] hover:text-black w-full sm:w-auto"
            >
              View all posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
