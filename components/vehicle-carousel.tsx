"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Fuel, Settings } from 'lucide-react'
import Link from "next/link"
import { useLanguage } from "./header"
import { useIsMobile } from "../hooks/use-mobile"

export default function VehicleCarousel() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("ESSENCE")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const isMobile = useIsMobile()

  // Custom Vehicle Image Component with error handling
  const VehicleImage = ({ vehicle }: { vehicle: any }) => {
    const [imageError, setImageError] = useState(false)

    if (imageError) {
      return (
        <div className="w-full h-32 sm:h-40 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="text-3xl text-gray-400 mb-2">🚗</div>
            <div className="text-xs text-gray-500 font-medium">{vehicle.name}</div>
          </div>
        </div>
      )
    }

    return (
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-32 sm:h-40 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    )
  }

  const filters = [
    { id: "ESSENCE", label: "ESSENCE" },
    { id: "DIESEL", label: "DIESEL" },
    { id: "BOITE_MANUELLE", label: "BOITE MANUELLE" },
    { id: "BOITE_AUTOMATIQUE", label: "BOITE AUTOMATIQUE" },
  ]

  const vehicles = [
    {
      name: "RENAULT CLIO 5 DCI",
      image: "/images/clio.webp",
      fuel: "E",
      transmission: "A",
      type: "ESSENCE",
    },
    {
      name: "FIAT 500 X",
      image: "/images/fiat.webp",
      fuel: "E",
      transmission: "M",
      type: "ESSENCE",
    },
    {
      name: "RENAULT SYMBOL",
      image: "/images/symbol11.webp",
      fuel: "E",
      transmission: "A",
      type: "ESSENCE",
    },
    {
      name: "DACIA STEPWAY Gps",
      image: "/images/Dacia.webp",
      fuel: "E",
      transmission: "A",
      type: "ESSENCE",
    },
    {
      name: "SEAT ARONA FR",
      image: "/images/arona.webp",
      fuel: "D",
      transmission: "M",
      type: "DIESEL",
    },
    {
      name: "PEUGEOT 301 Allure HDI",
      image: "/images/30121.webp",
      fuel: "E",
      transmission: "A",
      type: "ESSENCE",
    },
  
  ]

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (activeFilter === "ESSENCE") return vehicle.type === "ESSENCE"
    if (activeFilter === "DIESEL") return vehicle.type === "DIESEL"
    if (activeFilter === "BOITE_MANUELLE") return vehicle.transmission === "M"
    if (activeFilter === "BOITE_AUTOMATIQUE") return vehicle.transmission === "A"
    return true
  })

  // Determine slides to show based on screen size
  const slidesToShow = isMobile ? 1 : 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, filteredVehicles.length - slidesToShow + 1))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.max(1, filteredVehicles.length - slidesToShow + 1)) % Math.max(1, filteredVehicles.length - slidesToShow + 1),
    )
  }

  // Auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && filteredVehicles.length > slidesToShow) {
      interval = setInterval(nextSlide, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredVehicles.length, slidesToShow]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-8 sm:py-12 bg-white animate-float">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-[750] text-gray-900 tracking-tight leading-snug mb-4 font-[Arial] sticky top-0 z-50">
            {t("discoverFleet")} <span className="text-[rgb(255,18,54)] font-[750]">Safar El Amir</span>
          </h2>

          {/* Filter Tabs - Responsive */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id)
                  setCurrentSlide(0)
                }}
                className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-bold transition-all duration-200 hover:scale-105
                  ${activeFilter === filter.id
                    ? "bg-[rgb(0,13,107)] text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Carousel - Responsive */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` 
              }}
            >
              {filteredVehicles.map((vehicle, index) => (
                <div key={index} className={`${slidesToShow === 1 ? 'w-full' : 'w-1/3'} flex-shrink-0 px-2 sm:px-4`}>
                  <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 transition-colors duration-300 hover:text-blue-600">
                      {vehicle.name}
                    </h3>
                    <div className="p-3 sm:p-4 mb-2 sm:mb-3 transition-all duration-300 hover:shadow-lg">
                      <VehicleImage vehicle={vehicle} />
                    </div>
                    <div className="flex justify-center space-x-2 sm:space-x-3">
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full transition-all duration-300 hover:scale-105">
                        <Fuel className="h-3 w-3 transition-colors duration-300 hover:text-blue-600" />
                        <span className="text-xs font-medium">{vehicle.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-1 px-2 py-1 rounded-full transition-all duration-300 hover:scale-105">
                        <Settings className="h-3 w-3 transition-colors duration-300 hover:text-blue-600" />
                        <span className="text-xs font-medium">{vehicle.transmission}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Responsive */}
          {filteredVehicles.length > slidesToShow && (
            <>
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  prevSlide();
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
                className="absolute left-1 sm:left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  nextSlide();
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
                className="absolute right-1 sm:right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </>
          )}
        </div>

        {/* All Models Link */}
        <div className="text-center mt-4 sm:mt-6">
          <Link
            href="/modeles"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors duration-200"
          >
            → {t("allModels")}
          </Link>
        </div>
      </div>
    </section>
  )
}
