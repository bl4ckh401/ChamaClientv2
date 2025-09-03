"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TermsSectionProps {
  title: string
  subtitle: string
  content: {
    heading: string
    text: string
    list?: string[]
    footer?: string
  }[]
}

export function TermsSection({ title, subtitle, content }: TermsSectionProps) {
  const [activeId, setActiveId] = useState<string>(title.toLowerCase().replace(/\s+/g, '-'))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const elements = document.querySelectorAll('[data-section]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const titleId = title.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className="space-y-6">
      <div 
        className="space-y-4" 
        id={titleId}
        data-section={titleId}
      >
        <h2 className={cn(
          "text-3xl md:text-5xl font-bold transition-colors",
          activeId === titleId ? "text-gradient" : "text-[var(--foreground)]"
        )}>
          {title}
        </h2>
        <p className={cn(
          "text-sm md:text-base font-bold transition-colors",
          activeId === titleId ? "text-gradient" : "text-[var(--foreground)]"
        )}>
          {subtitle}
        </p>
      </div>

      {content.map((section, index) => {
        const sectionId = section.heading.toLowerCase().replace(/\s+/g, '-')
        return (
          <div 
            key={index} 
            className="pb-4" 
            id={sectionId}
            data-section={sectionId}
          >
            <h3 className={cn(
              "text-2xl md:text-4xl font-bold py-6 transition-colors",
              activeId === sectionId ? "text-gradient" : "text-[var(--foreground)]"
            )}>
              {section.heading}
            </h3>
            <p className={cn(
              "text-sm md:text-base pb-4 transition-colors",
              activeId === sectionId ? "text-gradient" : "text-[var(--foreground)]"
            )}>
              {section.text}
            </p>
            {section.list && (
              <ul className="list-disc pl-6 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i} className={cn(
                    "text-sm md:text-base transition-colors",
                    activeId === sectionId ? "text-gradient" : "text-[var(--foreground)]"
                  )}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.footer && (
              <p className={cn(
                "text-sm md:text-base transition-colors",
                activeId === sectionId ? "text-gradient" : "text-[var(--foreground)]"
              )}>
                {section.footer}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}