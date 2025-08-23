"use client"
import { CheckCircle } from 'lucide-react'
import { useState, useEffect } from "react"

// Simple translation function for demo
const useLanguage = () => ({
  t: (key) => {
    const translations = {
      agenciesTitle: "Les agences Safar el Amir en Algérie",
      agenciesSubtitle: "11 Agences à votre service en Algérie",
      findAgencyBtn: "Trouver une agence"
    }
    return translations[key] || key
  }
})

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
    { id: "alger", name: "Location de voiture à Alger Houari Boumediene" },
    { id: "oran", name: "Location de voiture à Oran Ahmed Ben Bella" },
    { id: "constantine", name: "Location de voiture à Constantine Mohamed Boudiaf" },
    { id: "tlemcen", name: "Location de voiture à Tlemcen Messali Hadj" },
    { id: "annaba", name: "Location de voiture à Annaba Rabah Bitat" },
    { id: "batna", name: "Location de voiture à Batna Mostepha Ben Boulaid" },
    { id: "setif", name: "Location de voiture à Sétif 8 MAI 1945" },
    { id: "bejaia", name: "Location de voiture à Bejaia Soummam Abane Ramdane" },
    { id: "jijel", name: "Location de voiture à Jijel Ferhat Abbas" },
  ]

  return (
    <section id="agencies" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-[750] text-gray-900 tracking-tight leading-snug mb-4 font-[Arial]">
              {t("agenciesTitle")}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Agency List */}
          <div className="lg:pr-8">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <h3 className="text-xl font-black text-gray-900 mb-6">
                {t("agenciesSubtitle")}
              </h3>
              
              {/* Agency List with Check Icons */}
              <div className="space-y-3 mb-8">
                {agencies.map((agency, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 text-sm md:text-base">
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
                src="/images/map-alger-static.jpg"
                alt="Carte statique de l'Algérie"
                className="w-full max-w-md h-auto object-contain transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Find Agency Button - Centered at bottom */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center mt-8">
            <a
              href="/agences"
              className="text-black hover:text-gray-800 font-bold text-base transition-colors duration-200 cursor-pointer"
            >
              &gt; {t("findAgencyBtn")}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}