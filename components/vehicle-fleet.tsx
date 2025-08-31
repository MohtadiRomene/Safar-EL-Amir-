"use client"

import { useState } from "react"
import { Car, Users, Fuel, Settings, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VehicleFleet() {
  const [activeCategory, setActiveCategory] = useState("economy")

  const categories = [
    { id: "economy", name: "Économique", icon: Car },
    { id: "compact", name: "Compact", icon: Car },
    { id: "suv", name: "SUV", icon: Car },
    { id: "luxury", name: "Luxe", icon: Car },
  ]

  const vehicles = {
    economy: [
      {
        name: "Renault Clio",
        image: "/placeholder.svg?height=200&width=300&text=Renault+Clio",
        passengers: 5,
        fuel: "Essence",
        transmission: "Manuelle",
        rating: 4.5,
        price: "2500 DA/jour",
      },
      {
        name: "Peugeot 208",
        image: "/placeholder.svg?height=200&width=300&text=Peugeot+208",
        passengers: 5,
        fuel: "Essence",
        transmission: "Automatique",
        rating: 4.3,
        price: "2800 DA/jour",
      },
    ],
    compact: [
      {
        name: "Volkswagen Golf",
        image: "/placeholder.svg?height=200&width=300&text=VW+Golf",
        passengers: 5,
        fuel: "Diesel",
        transmission: "Manuelle",
        rating: 4.6,
        price: "3200 DA/jour",
      },
    ],
    suv: [
      {
        name: "Dacia Duster",
        image: "/placeholder.svg?height=200&width=300&text=Dacia+Duster",
        passengers: 5,
        fuel: "Diesel",
        transmission: "Automatique",
        rating: 4.4,
        price: "4500 DA/jour",
      },
    ],
    luxury: [
      {
        name: "Mercedes Classe C",
        image: "/placeholder.svg?height=200&width=300&text=Mercedes+C",
        passengers: 5,
        fuel: "Essence",
        transmission: "Automatique",
        rating: 4.8,
        price: "8500 DA/jour",
      },
    ],
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre flotte de véhicules</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre large gamme de véhicules adaptés à tous vos besoins
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles[activeCategory as keyof typeof vehicles].map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={vehicle.image || "/placeholder.svg"}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{vehicle.name}</h3>

                {/* Vehicle Features */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Settings className="h-4 w-4" />
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(vehicle.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({vehicle.rating})</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{vehicle.price}</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Réserver</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
            Voir tous les véhicules
          </Button>
        </div>
      </div>
    </section>
  )
}
