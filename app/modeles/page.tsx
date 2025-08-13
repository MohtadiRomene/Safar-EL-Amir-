"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Fuel, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ModelesPage() {
  const [activeFilter, setActiveFilter] = useState("Tous les modèles")

  const filters = ["Tous les modèles", "Essence", "Diesel", "Boîte Automatique", "Boîte Manuelle"]

  const vehicles = [
    {
      name: "FIAT TIPO AUTO",
      year: "2023/2024",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
    {
      name: "RENAULT MEGANE SEDAN",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
    {
      name: "FIAT 500 X",
      year: "2023/2024",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
    {
      name: "SEAT ARONA FR",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "M",
      category: ["Essence", "Boîte Manuelle"],
    },
    {
      name: "DACIA DUSTER EXTREME",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "D",
      transmission: "M",
      category: ["Diesel", "Boîte Manuelle"],
    },
    {
      name: "CHERY TIGGO 2 PRO",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
    {
      name: "RENAULT TALIANT",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "M",
      category: ["Essence", "Boîte Manuelle"],
    },
    {
      name: "Dacia Duster JOURNEY",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "D",
      transmission: "A",
      category: ["Diesel", "Boîte Automatique"],
    },
    {
      name: "RENAULT SYMBOL",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "M",
      category: ["Essence", "Boîte Manuelle"],
    },
    {
      name: "PEUGEOT 301 Allure HDI",
      year: "2022/2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "D",
      transmission: "M",
      category: ["Diesel", "Boîte Manuelle"],
    },
    {
      name: "DACIA STEPWAY Gps",
      year: "Modèle 2023",
      image: "/placeholder.svg?height=200&width=300",
      fuel: "E",
      transmission: "M",
      category: ["Essence", "Boîte Manuelle"],
    },
  ]

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (activeFilter === "Tous les modèles") return true
    return vehicle.category.includes(activeFilter)
  })

  const getYearBadgeColor = (year: string) => {
    if (year.includes("2023/2024")) return "bg-purple-600"
    if (year.includes("2022/2023")) return "bg-purple-600"
    return "bg-purple-600"
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos modèles</h1>
            <nav className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-600 transition-colors text-gray-600">
                Accueil
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600">Nos modèles</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  index === 0
                    ? "bg-blue-900 text-white clip-path-arrow"
                    : activeFilter === filter
                      ? "bg-blue-900 text-white clip-path-arrow"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                } ${index === 0 ? "rounded-l-lg" : index === filters.length - 1 ? "rounded-r-lg" : ""}`}
                style={{
                  clipPath:
                    activeFilter === filter && index > 0
                      ? "polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)"
                      : index === 0 && activeFilter === filter
                        ? "polygon(0% 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)"
                        : "none",
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                {/* Vehicle Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{vehicle.name}</h3>
                    <span
                      className={`${getYearBadgeColor(vehicle.year)} text-white text-xs px-3 py-1 rounded-full font-medium`}
                    >
                      {vehicle.year}
                    </span>
                  </div>
                </div>

                {/* Vehicle Image */}
                <div className="relative h-48 bg-gray-50">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>

                {/* Vehicle Specs */}
                <div className="p-4">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-full">
                      <Fuel className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{vehicle.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-gray-100 px-3 py-2 rounded-full">
                      <Settings className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{vehicle.transmission}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-white">
                      Équipements
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Prix & disponibilité</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun véhicule trouvé pour ce filtre.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
