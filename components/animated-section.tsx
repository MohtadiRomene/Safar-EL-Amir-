"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeInDown" | "zoomIn" | "slideInUp" | "slideInLeft" | "slideInRight" | "scaleIn"
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

export default function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.8,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: triggerOnce,
    amount: threshold,
    margin: "0px 0px -100px 0px"
  })

  // Get initial and animate values based on animation type
  const getAnimationProps = () => {
    const baseProps = {
      initial: { opacity: 0 },
      animate: isInView ? { opacity: 1 } : { opacity: 0 },
      transition: { duration, delay, ease: "easeOut" }
    }

    switch (animation) {
      case "fadeInUp":
        return {
          initial: { opacity: 0, y: 50 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "fadeInLeft":
        return {
          initial: { opacity: 0, x: -50 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "fadeInRight":
        return {
          initial: { opacity: 0, x: 50 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "fadeInDown":
        return {
          initial: { opacity: 0, y: -50 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "zoomIn":
        return {
          initial: { opacity: 0, scale: 0.95 },
          animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "slideInUp":
        return {
          initial: { opacity: 0, y: 100 },
          animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "slideInLeft":
        return {
          initial: { opacity: 0, x: -100 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "slideInRight":
        return {
          initial: { opacity: 0, x: 100 },
          animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
          transition: { duration, delay, ease: "easeOut" }
        }
      case "scaleIn":
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 },
          transition: { duration, delay, ease: "easeOut" }
        }
      default:
        return baseProps
    }
  }

  const animationProps = getAnimationProps()

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className={className}
    >
      {children}
    </motion.div>
  )
}
