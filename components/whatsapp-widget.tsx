"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Phone } from "lucide-react"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPhoneIndex, setCurrentPhoneIndex] = useState(0)

  const phoneNumbers = [
    { number: "+213 555 123 456", label: "Service Client" },
    { number: "+213 555 789 012", label: "Réservations" },
    { number: "+213 555 345 678", label: "Urgences 24h/24" },
  ]

  // Animation des numéros de téléphone
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentPhoneIndex((prev) => (prev + 1) % phoneNumbers.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isOpen, phoneNumbers.length])

  const handleWhatsAppClick = (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/\s+/g, "").replace("+", "")
    const message = encodeURIComponent(
      "Bonjour, je souhaite obtenir des informations sur vos services de location de véhicules.",
    )
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget ouvert */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-80 animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Safar El Amir</h3>
                <p className="text-sm text-green-600">En ligne maintenant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-4">Bonjour ! 👋 Comment pouvons-nous vous aider aujourd'hui ?</p>

          {/* Numéros de téléphone animés */}
          <div className="space-y-2 mb-4">
            {phoneNumbers.map((phone, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppClick(phone.number)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  index === currentPhoneIndex
                    ? "bg-green-50 border-2 border-green-200 transform scale-105"
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === currentPhoneIndex ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{phone.label}</div>
                  <div className="text-sm text-gray-600">{phone.number}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-xs text-gray-500 text-center">
            Cliquez sur un numéro pour démarrer une conversation WhatsApp
          </div>
        </div>
      )}

      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Ouvrir WhatsApp"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </button>

      {/* Indicateur de notification */}
      {!isOpen && <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>}
    </div>
  )
}
