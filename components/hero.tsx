"use client"

import type React from "react"
import AnimatedSection from "./animated-section"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./header"

export default function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    agence: "",
    dateDepart: "04 août 2025",
    heureDepart: "10:00",
    dateRetour: "07 août 2025",
    heureRetour: "10:00",
  })

  const backgroundImages = [
    {
      src: "/images/hero-slider-bridge.jpg",
      alt: "Pont suspendu entre des falaises",
      title: "Pont suspendu spectaculaire"
    },
    {
      src: "/images/hero-slider-monument.jpg", 
      alt: "Monument entouré de palmiers",
      title: "Monument historique d'Alger"
    },
    {
      src: "/images/hero-slider-port.jpg",
      alt: "Port maritime",
      title: "Vue panoramique du port"
    },
    {
      src: "/images/tower.jpg", // Using existing tower image as 4th slide
      alt: "Tour près d'une côte",
      title: "Tour côtière"
    }
  ]

  const agences = [
    t("findAgency"),
    "Tlemcen - Aéroport Messali El Hadj",
    "Oran - Aéroport Ahmed Ben Bella",
    "Alger - Aéroport Houari Boumediene",
    "Constantine - Aéroport Mohamed Boudiaf",
    "Chlef - Aéroport",
  ]

  // Auto-rotate background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="relative h-[75vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${image.src}')`,
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
              }}
            />
          </div>
        ))}
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />
      </div>

      {/* Background slide indicators */}
      <div className="absolute bottom-6 left-6 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-110 shadow-lg" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller à l'image de fond ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar for background carousel */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <div 
          className="h-full bg-white/80 transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / backgroundImages.length) * 100}%` 
          }}
        />
      </div>

      {/* Content - positioned above background with proper z-index */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Modern Booking Form */}
          <AnimatedSection animation="fadeInUp" delay={200} persistent={true}>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 border border-white/20 mb-6">
              <h1 className="text-xl font-bold text-gray-900 mb-6">{t("heroTitle")}</h1>

              <div className="space-y-6">
                {/* Retrait et retour */}
                <AnimatedSection animation="fadeInUp" delay={400}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("pickupReturn")}</label>
                    <select
                      name="agence"
                      value={formData.agence}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors text-gray-600 text-sm"
                    >
                      {agences.map((agence) => (
                        <option key={agence} value={agence}>
                          {agence}
                        </option>
                      ))}
                    </select>
                  </div>
                </AnimatedSection>

                {/* Dates et heures */}
                <AnimatedSection animation="fadeInUp" delay={600}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("departureDateTime")}</label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          name="dateDepart"
                          value={formData.dateDepart}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
                        />
                        <input
                          type="time"
                          name="heureDepart"
                          value={formData.heureDepart}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("returnDateTime")}</label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          name="dateRetour"
                          value={formData.dateRetour}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
                        />
                        <input
                          type="time"
                          name="heureRetour"
                          value={formData.heureRetour}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-end">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        {t("seeOffers")}
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Appliquer un tarif Prime */}
                <AnimatedSection animation="fadeInUp" delay={800}>
                  <div className="pt-4 border-t border-gray-200">
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-300">
                      <span>▶</span>
                      <span>{t("applyPrimeRate")}</span>
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>

          {/* Service Features - Positioned as separate container below booking form */}
          <br></br>
          <br></br>
          <br></br>
          <br></br> 
          <AnimatedSection animation="fadeInUp" delay={1000} persistent={true}>
          <div className="flex flex-row justify-center items-center gap-32 p">
  {/* Élément 1 */}
  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold text-xl">✓</span>
    <span className="text-white font-bold text-lg whitespace-nowrap">
      À votre service depuis 2008
    </span>
  </div>

  {/* Élément 2 */}
  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold text-xl">✓</span>
    <span className="text-white font-bold text-lg whitespace-nowrap">
      Kilométrage illimité gratuit
    </span>
  </div>

  {/* Élément 3 */}
  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold text-xl">✓</span>
    <span className="text-white font-bold text-lg whitespace-nowrap">
      Garantie du modèle choisi
    </span>
  </div>

  {/* Élément 4 */}
  <div className="flex items-center gap-2">
    <span className="text-green-500 font-bold text-xl">✓</span>
    <span className="text-white font-bold text-lg whitespace-nowrap">
      Assistance 24H/24
    </span>
  </div>
</div>
</AnimatedSection>

          {/* Current slide title overlay */}
          
      </div>
    </div>
  </section>
)
}
