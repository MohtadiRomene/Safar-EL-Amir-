"use client"
import React, { useState, useEffect } from "react"
import { CheckCircle } from 'lucide-react'
import { useLanguage } from "./header"

// Simple animated section component
const AnimatedSection = ({ children, animation = "fadeInUp", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const animationClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  
  return (
    <div className={`transition-all duration-700 ${animationClass}`}>
      {children}
    </div>
  )
}

export default function Agencies() {
  const { t } = useLanguage()
  const [selectedAgency, setSelectedAgency] = useState("")

  const agencies = [
    { id: "alger", name: t("agencyAlger") },
    { id: "oran", name: t("agencyOran") },
    { id: "constantine", name: t("agencyConstantine") },
    { id: "tlemcen", name: t("agencyTlemcen") },
    { id: "annaba", name: t("agencyAnnaba") },
    { id: "batna", name: t("agencyBatna") },
    { id: "setif", name: t("agencySetif") },
    { id: "bejaia", name: t("agencyBejaia") },
    { id: "jijel", name: t("agencyJijel") },
  ]

  return (
    <section id="agencies" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-[750] text-gray-900 tracking-tight leading-snug mb-4 font-[Arial]">
              {t("agenciesTitle")}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left side - Agency List */}
          <div className="lg:pr-4 xl:pr-8">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6">
                {t("agenciesSubtitle")}
              </h3>
              
              {/* Agency List with Check Icons */}
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {agencies.map((agency, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900 text-sm sm:text-base leading-relaxed">
                      {agency.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right side - Centered Map */}
          <AnimatedSection animation="fadeInRight" delay={300}>
            <div className="relative flex justify-center items-center">
              <img
                src="/images/map-alger-static.webp"
                alt="Carte statique de l'Algérie"
                className="w-full max-w-sm sm:max-w-md h-auto object-contain transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Find Agency Button - Centered at bottom */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="/agences"
              className="inline-block bg-white text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-none border-0 shadow-none transition-none hover:bg-white hover:text-black hover:shadow-none"
            >
              &gt; {t("findAgencyBtn")}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}