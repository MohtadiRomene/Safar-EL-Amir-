"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
  className?: string
  persistent?: boolean // New prop for persistent animations
}

export default function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  persistent = false,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || persistent) {
            setTimeout(() => {
              setIsVisible(true)
              if (!persistent) {
                setHasAnimated(true)
              }
            }, delay)
          }
        } else if (persistent) {
          // Reset animation when element goes out of view (for persistent mode)
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, hasAnimated, persistent])

  // Listen for scroll to top to re-trigger animations
  useEffect(() => {
    if (persistent) {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsVisible(false)
          setTimeout(() => setIsVisible(true), 100)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [persistent])

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        isVisible ? `animate-${animation} opacity-100` : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}
