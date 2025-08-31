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
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)
  const [showEquipmentModal, setShowEquipmentModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)

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
      equipment: [
        "1.6 essence",
        "Direction assistée",
        "Climatisation",
        "Verrouillage centralisé",
        "Radio CD Mp3 avec sortie USB+Bluetooth",
        "Vitres avant électriques",
        "Double airbags"
      ]
    },
    {
      name: "PEUGEOT 301 Allure HDI",
      year: "Modèle 2023",
      image: "/images/30121.webp",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
      equipment: [
        "1.6 essence",
        "Direction assistée",
        "Climatisation",
        "Verrouillage centralisé",
        "Radio CD Mp3 avec sortie USB+Bluetooth",
        "Vitres avant électriques",
        "Double airbags"
      ]
    },
    {
      name: "DACIA STEPWAY Gps",
      year: "2023/2024",
      image: "/images/Dacia.webp",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
      equipment: [
        "1.6 essence",
        "Direction assistée",
        "Climatisation",
        "Verrouillage centralisé",
        "Radio CD Mp3 avec sortie USB+Bluetooth",
        "Vitres avant électriques",
        "Double airbags"
      ]
    },
    {
      name: "FIAT 500 X",
      year: "Modèle 2023",
      image: "/images/fiat.webp",
      fuel: "E",
      transmission: "M",
      category: ["Essence", "Boîte Manuelle"],
      equipment: [
        "1.6 essence",
        "Direction assistée",
        "Climatisation",
        "Verrouillage centralisé",
        "Radio CD Mp3 avec sortie USB+Bluetooth",
        "Vitres avant électriques",
        "Double airbags"
      ]
    },
    {
      name: "SEAT ARONA fR",
      year: "Modèle 2023",
      image: "/images/arona.webp",
      fuel: "D",
      transmission: "M",
      category: ["Diesel", "Boîte Manuelle"],
      equipment: [
        "1.6 essence",
        "Direction assistée",
        "Climatisation",
        "Verrouillage centralisé",
        "Radio CD Mp3 avec sortie USB+Bluetooth",
        "Vitres avant électriques",
        "Double airbags"
      ]
    },
    {
      name: "RENAULT CLIO 5 DCI",
      year: "Modèle 2023",
      image: "/images/clio.webp",
      fuel: "E",
      transmission: "A",
      category: ["Essence", "Boîte Automatique"],
      equipment: [
        "1.6 essence",
        "Direction assistée",
        "Climatisation",
        "Verrouillage centralisé",
        "Radio CD Mp3 avec sortie USB+Bluetooth",
        "Vitres avant électriques",
        "Double airbags"
      ]
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
      <section className="relative bg-cover bg-center bg-no-repeat min-h-[25vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Nosmodeles.webp.webp')" }}
        ></div>
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
                    <Button 
                      className="action-button-secondary text-gray-700"
                      onClick={() => {
                        setSelectedVehicle(vehicle)
                        setShowEquipmentModal(true)
                      }}
                    >
                      Équipements
                    </Button>
                    <Button 
                      className="action-button-primary text-white"
                      onClick={() => {
                        setSelectedVehicle(vehicle)
                        setShowBookingModal(true)
                      }}
                    >
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

      {/* Equipment Modal */}
      {showEquipmentModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Équipements</h3>
              <button
                onClick={() => setShowEquipmentModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Equipment List */}
            <div className="space-y-3">
              {selectedVehicle.equipment.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Return Button */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowEquipmentModal(false)}
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <span>Retour</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">{selectedVehicle.name}</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Pickup and Return Section */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Retrait et retour</h4>
              <div className="bg-gray-50 p-3 rounded-lg mb-3">
                <span className="text-blue-600 underline">Oran - Aéroport Ahmed Ben Bella</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="returnSameLocation" className="rounded" defaultChecked />
                <label htmlFor="returnSameLocation" className="text-sm text-gray-700">
                  Retour au lieu de retrait
                </label>
              </div>
            </div>

            {/* Departure Details */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date & heure de départ
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  defaultValue="2025-08-28"
                />
                <input
                  type="time"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  defaultValue="10:00"
                />
              </div>
            </div>

            {/* Return Details */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date & heure de retour
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  defaultValue="2025-09-01"
                />
                <input
                  type="time"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  defaultValue="10:00"
                />
              </div>
            </div>

            {/* Action Section */}
            <div className="flex justify-between items-center">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>Appliquer un tarif Prime</span>
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                Voir les offres
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
