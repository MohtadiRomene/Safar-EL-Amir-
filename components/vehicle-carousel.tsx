"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Fuel, Settings } from 'lucide-react'
import Link from "next/link"
import { useLanguage } from "./header"

export default function VehicleCarousel() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("ESSENCE")
  const [currentSlide, setCurrentSlide] = useState(0)

  const filters = [
    { id: "ESSENCE", label: "ESSENCE" },
    { id: "DIESEL", label: "DIESEL" },
    { id: "BOITE_MANUELLE", label: "BOITE MANUELLE" },
    { id: "BOITE_AUTOMATIQUE", label: "BOITE AUTOMATIQUE" },
  ]

  const vehicles = [
    {
      name: "CHERY TIGO 2 PRO",
      image: "/placeholder.svg?height=200&width=300&text=CHERY+TIGO+2+PRO",
      fuel: "E",
      transmission: "A",
      type: "ESSENCE",
    },
    {
      name: "RENAULT TALIENT",
      image: "/placeholder.svg?height=200&width=300&text=RENAULT+TALIENT",
      fuel: "E",
      transmission: "A",
      type: "ESSENCE",
    },
    {
      name: "Dacia Duster JOURNEY",
      image: "/placeholder.svg?height=200&width=300&text=Dacia+Duster+JOURNEY",
      fuel: "E",
      transmission: "A",
      type: "ESSENCE",
    },
    {
      name: "PEUGEOT 208",
      image: "/placeholder.svg?height=200&width=300&text=PEUGEOT+208",
      fuel: "D",
      transmission: "M",
      type: "DIESEL",
    },
    {
      name: "VOLKSWAGEN GOLF",
      image: "/placeholder.svg?height=200&width=300&text=VOLKSWAGEN+GOLF",
      fuel: "D",
      transmission: "A",
      type: "DIESEL",
    },
  ]

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (activeFilter === "ESSENCE") return vehicle.type === "ESSENCE"
    if (activeFilter === "DIESEL") return vehicle.type === "DIESEL"
    if (activeFilter === "BOITE_MANUELLE") return vehicle.transmission === "M"
    if (activeFilter === "BOITE_AUTOMATIQUE") return vehicle.transmission === "A"
    return true
  })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, filteredVehicles.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.max(1, filteredVehicles.length - 2)) % Math.max(1, filteredVehicles.length - 2),
    )
  }

  return (
    <section className="py-12 bg-white animate-float">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t("discoverFleet")} <span className="text-red-600">Safar El Amir</span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id)
                  setCurrentSlide(0)
                }}
                className={`px-5 py-2 text-sm font-bold transition-all duration-200 hover:scale-105 ${
                  activeFilter === filter.id
                    ? "bg-blue-900 text-white clip-path-arrow"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {filteredVehicles.map((vehicle, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="text-center transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-blue-600">{vehicle.name}</h3>
                    <div className="bg-gray-100 rounded-lg p-4 mb-3 transition-all duration-300 hover:bg-blue-50 hover:shadow-lg">
                      <img
                        src={vehicle.image || "/placeholder.svg"}
                        alt={vehicle.name}
                        className="w-full h-40 object-contain mx-auto transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex justify-center space-x-3">
                      <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full transition-all duration-300 hover:bg-blue-100 hover:scale-105">
                        <Fuel className="h-3 w-3 transition-colors duration-300 hover:text-blue-600" />
                        <span className="text-xs font-medium">{vehicle.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full transition-all duration-300 hover:bg-blue-100 hover:scale-105">
                        <Settings className="h-3 w-3 transition-colors duration-300 hover:text-blue-600" />
                        <span className="text-xs font-medium">{vehicle.transmission}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredVehicles.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* All Models Link */}
        <div className="text-center mt-6">
          <Link
            href="/modeles"
            className="text-blue-600 hover:text-blue-700 font-medium text-base transition-colors duration-200"
          >
            → {t("allModels")}
          </Link>
        </div>
      </div>
    </section>
  )
}
