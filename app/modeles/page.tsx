"use client"

import React, { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import WhatsAppWidget from "../../components/whatsapp-widget"
import { useLanguage } from "../../components/header"
import { Fuel, Settings } from "lucide-react"
import { Button } from "../../components/ui/button"
import Link from "next/link"

export default function ModelesPage() {
  const { t } = useLanguage()
  const [fuelFilter, setFuelFilter] = useState("Tous")
  const [transmissionFilter, setTransmissionFilter] = useState("Tous")

  // Custom Vehicle Image Component with error handling
  const VehicleImage = ({ vehicle }: { vehicle: any }) => {
    const [imageError, setImageError] = useState(false)

    if (imageError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="text-4xl text-gray-400 mb-2">🚗</div>
            <div className="text-sm text-gray-500 font-medium">{vehicle.name}</div>
          </div>
        </div>
      )
    }

    return (
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    )
  }

  // Filtres séparés pour carburant et transmission
  const fuelFilters = ["Tous", "Essence", "Diesel"]
  const transmissionFilters = ["Tous", "Boîte Automatique", "Boîte Manuelle"]

  const vehicles = [
    {
      name: "RENAULT SYMBOL",
      year: "2023/2024",
      image: "/images/symbol11.webp",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
    {
      name: "PEUGEOT 301 Allure HDI",
      year: "Modèle 2023",
      image: "/images/30121.webp",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
    {
      name: "DACIA STEPWAY Gps",
      year: "2023/2024",
      image: "/images/Dacia.webp",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
    {
      name: "FIAT 500 X",
      year: "Modèle 2023",
      image: "/images/fiat.webp",
      fuel: "E",
      transmission: "M",
      category: ["Essence", "Boîte Manuelle"],
    },
    {
      name: "SEAT ARONA fR",
      year: "Modèle 2023",
      image: "/images/arona.webp",
      fuel: "D",
      transmission: "M",
      category: ["Diesel", "Boîte Manuelle"],
    },
    {
      name: "RENAULT CLIO 5 DCI",
      year: "Modèle 2023",
      image: "/images/clio.webp",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
    },
  ]

  const filteredVehicles = vehicles.filter((vehicle) => {
    // Filtrage par carburant
    const fuelMatch = fuelFilter === "Tous" || 
      (fuelFilter === "Essence" && vehicle.fuel === "E") ||
      (fuelFilter === "Diesel" && vehicle.fuel === "D")
    
    // Filtrage par transmission
    const transmissionMatch = transmissionFilter === "Tous" ||
      (transmissionFilter === "Boîte Automatique" && vehicle.transmission === "A") ||
      (transmissionFilter === "Boîte Manuelle" && vehicle.transmission === "M")
    
    return fuelMatch && transmissionMatch
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t("allModels")}</h1>
            <nav className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-600 transition-colors text-gray-600">
                /
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600">{t("models")}</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtres combinés en une seule ligne - Style identique au vehicle-carousel */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Tous les modèles", "Essence", "Diesel", "Boîte Automatique", "Boîte Manuelle"].map((filter, index) => {
              // Déterminer si le filtre est actif
              const isActive = 
                (filter === "Essence" && fuelFilter === "Essence") ||
                (filter === "Diesel" && fuelFilter === "Diesel") ||
                (filter === "Boîte Automatique" && transmissionFilter === "Boîte Automatique") ||
                (filter === "Boîte Manuelle" && transmissionFilter === "Boîte Manuelle") ||
                (filter === "Tous les modèles" && fuelFilter === "Tous" && transmissionFilter === "Tous")

              // Gérer le clic sur les filtres
              const handleFilterClick = () => {
                if (filter === "Tous les modèles") {
                  setFuelFilter("Tous")
                  setTransmissionFilter("Tous")
                } else if (filter === "Essence" || filter === "Diesel") {
                  setFuelFilter(filter)
                } else if (filter === "Boîte Automatique" || filter === "Boîte Manuelle") {
                  setTransmissionFilter(filter)
                }
              }

              return (
                <button
                  key={filter}
                  onClick={handleFilterClick}
                  className={`px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-sm font-bold transition-all duration-200 hover:scale-105 ${
                    isActive
                      ? "bg-[rgb(0,13,107)] text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`}
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)"
                  }}
                >
                  {filter}
                </button>
              )
            })}
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
                className="vehicle-card bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                {/* Vehicle Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{vehicle.name}</h3>
                    <span className="year-badge text-white text-xs px-3 py-1 rounded-full font-medium">
                      {vehicle.year}
                    </span>
                  </div>
                </div>

                {/* Vehicle Image */}
                <div className="relative h-48 bg-gray-50">
                  <VehicleImage vehicle={vehicle} />
                </div>

                {/* Vehicle Specs */}
                <div className="p-4">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="spec-icon flex items-center space-x-1 px-3 py-2 rounded-full">
                      <Fuel className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{vehicle.fuel}</span>
                    </div>
                    <div className="spec-icon flex items-center space-x-1 px-3 py-2 rounded-full">
                      <Settings className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{vehicle.transmission}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="action-button-secondary text-gray-700">
                      Équipements
                    </Button>
                    <Button className="action-button-primary text-white">
                      Prix & disponibilité
                    </Button>
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
      <WhatsAppWidget />
    </div>
  )
}
