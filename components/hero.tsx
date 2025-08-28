"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useLanguage } from "./header"
import { motion } from "framer-motion"

export default function Hero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    agence: "",
    dateDepart: "24 août 2025",
    heureDepart: "10:00",
    dateRetour: "27 août 2025",
    heureRetour: "10:00",
  })

  const backgroundImages = [
    {
      src: "/images/hero-slider-bridge.webp",
      alt: t("backgroundImage1"),
      title: t("backgroundImage1")
    },
   
    {
      src: "/images/hero-slider-port.webp",
      alt: t("backgroundImage3"),
      title: t("backgroundImage3")
    },
    {
      src: "/images/tower.webp",
      alt: t("backgroundImage4"),
      title: t("backgroundImage4")
    }
  ]

  const agences = [
    t("findAgency"),
    t("airportTlemcen"),
    t("airportOran"),
    t("airportAlger"),
    t("airportConstantine"),
    t("airportChlef"),
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
    <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center overflow-hidden">
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
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-110 shadow-lg" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`${t("goToBackgroundImage")} ${index + 1}`}
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
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Modern Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-4 sm:p-6 border border-white/20 mb-4 sm:mb-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left"
              >
                {t("heroTitle")}
              </motion.h1>

              <div className="space-y-4 sm:space-y-6">
                {/* Retrait et retour */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("pickupReturn")}</label>
                    <select
                      name="agence"
                      value={formData.agence}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors text-gray-600 text-sm"
                    >
                      {agences.map((agence) => (
                        <option key={agence} value={agence}>
                          {agence}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                {/* Dates et heures */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("departureDateTime")}</label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          name="dateDepart"
                          value={formData.dateDepart}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
                        />
                        <input
                          type="time"
                          name="heureDepart"
                          value={formData.heureDepart}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
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
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
                        />
                        <input
                          type="time"
                          name="heureRetour"
                          value={formData.heureRetour}
                          onChange={handleInputChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors font-semibold text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-end sm:col-span-2 lg:col-span-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        {t("seeOffers")}
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Appliquer un tarif Prime */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="pt-3 sm:pt-4 border-t border-gray-200">
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-300">
                      <span>▶</span>
                      <span>{t("applyPrimeRate")}</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Service Features - Responsive layout */}
          <div className="mt-16 lg:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-row justify-center items-center gap-8 lg:gap-16 px-4">
                {/* Élément 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex items-center gap-2 w-1/4 text-center"
                >
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-white font-bold text-base lg:text-lg">
                    {t("serviceSince2003")}
                  </span>
                </motion.div>

                {/* Élément 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex items-center gap-2 w-1/4 text-center"
                >
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-white font-bold text-base lg:text-lg">
                    {t("unlimitedMileage")}
                  </span>
                </motion.div>

                {/* Élément 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex items-center gap-2 w-1/4 text-center"
                >
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-white font-bold text-base lg:text-lg">
                    {t("modelGuarantee")}
                  </span>
                </motion.div>

                {/* Élément 4 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex items-center gap-2 w-1/4 text-center"
                >
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-white font-bold text-base lg:text-lg">
                    {t("assistance24h")}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
