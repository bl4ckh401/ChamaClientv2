"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

interface NavigationItem {
  title: string
  href: string
  description?: string
  level?: number
}

interface TermsNavigationProps {
  items: NavigationItem[]
  title?: string
  className?: string
}

export function TermsNavigation({ items, title, className }: TermsNavigationProps) {
  const pathname = usePathname()
  const hash = typeof window !== 'undefined' ? window.location.hash : ''
  const [activeSection, setActiveSection] = useState<string>(items[0]?.href || '')


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
            window.history.replaceState({}, '', '#' + entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px' // Adjust these values to control when sections become "active"
      }
    )

    // Observe all section elements
    items.forEach((item) => {
      const element = document.getElementById(item.href.replace('#', ''))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(href)
      window.history.pushState({}, '', href)
    }
  }

  return (
    <div className={cn("w-full md:w-[320px] flex flex-col gap-4", className)}>
      <h2 className="text-[var(--foreground)] text-xl md:text-2xl font-bold">{title}</h2>
      <nav className="flex flex-col gap-2 md:gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              "group flex items-center gap-2 py-3 text-sm md:text-base text-[var(--foreground)] hover:text-gradient transition-all",
              "border-l-4 border-transparent",
              activeSection === item.href ? "border-[#93F1AD] bg-[#93F1AD]/10 text-gradient" : "hover:border-[#93F1AD]/50",
              {
                "pl-4": !item.level,
                "pl-8": item.level === 1,
                "pl-12": item.level === 2,
                "pl-16": item.level === 3,
                "pl-20": item.level === 4
              }
            )}
          >
            <ChevronRight 
              className={cn(
                "h-4 w-4 transition-transform",
                activeSection === item.href ? "text-gradient" : "text-zinc-400 group-hover:text-gradient",
                "group-hover:translate-x-1"
              )} 
            />
            <div className="flex-1">
              <div className="font-medium">
                {item.title}
              </div>
              {item.description && (
                <p className="text-sm text-zinc-400 group-hover:text-gradient/80">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}