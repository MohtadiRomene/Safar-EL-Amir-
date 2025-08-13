"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import WhatsAppWidget from "@/components/whatsapp-widget"

export default function ProgrammePrimePage() {
  const [formData, setFormData] = useState({
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demande de carte de fidélité:", formData)
    alert("Votre demande a été envoyée avec succès !")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-lg opacity-75">Image à venir</p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Programme Prime</h1>
            <nav className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Accueil
              </Link>
              <span>›</span>
              <span>Programme Prime</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <div className="flex flex-col space-y-8">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg opacity-80"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg opacity-70"></div>
            <div className="w-16 h-16 bg-white rounded-lg shadow-lg transform rotate-12 opacity-90"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full shadow-lg opacity-60"></div>
          </div>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
          <div className="flex flex-col space-y-8">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg opacity-80"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg opacity-70"></div>
            <div className="w-16 h-16 bg-white rounded-lg shadow-lg transform -rotate-12 opacity-90"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full shadow-lg opacity-60"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Faites des économies sur toute l'année avec
                <br />
                Safar El Amir <span className="text-red-600">Safar El Amir</span>
              </h2>

              <p className="text-base text-gray-700 mb-6">Vous êtes déjà client chez nous !</p>

              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Nous vous offrons une carte de fidélité (Silver ou Gold) qui vous fera gagner des économies sur vos
                factures de locations sur simple saisie de votre code lors de votre réservation en ligne.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Comment avoir ma carte de fidélité ?</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Carte Silver</h4>
                      <p className="text-gray-700">Avoir consommé 14 jours de location au minimum.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Carte Gold</h4>
                      <p className="text-gray-700">Avoir consommé 30 jours de location au minimum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Loyalty Cards */}
            <div className="flex flex-col items-center space-y-4">
              {/* Silver Card */}
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg p-4 w-60 h-36 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-6 bg-white/20 rounded"></div>
                    <span className="text-xs font-medium">SAFAR EL AMIR</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-1">Carte de fidélité</h3>
                    <p className="text-base font-semibold">SILVER</p>
                  </div>
                  <div className="absolute bottom-3 left-4 text-xs opacity-80">LOCATION DE VOITURES</div>
                </div>
              </div>

              {/* Gold Card */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-4 w-60 h-36 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-6 bg-white/20 rounded"></div>
                    <span className="text-xs font-medium">SAFAR EL AMIR</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-1">Carte de fidélité</h3>
                    <p className="text-base font-semibold">GOLD</p>
                  </div>
                  <div className="absolute bottom-3 left-4 text-xs opacity-80">LOCATION DE VOITURES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Demande Carte De Fidélité</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-lg p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {/* Civilité */}
              <div>
                <label htmlFor="civilite" className="block text-sm font-medium text-gray-700 mb-2">
                  Civilité
                </label>
                <select
                  id="civilite"
                  name="civilite"
                  value={formData.civilite}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Mlle">Mlle</option>
                </select>
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Nom"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              {/* Prénom */}
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  placeholder="Prénom"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  className="w-full px-3 py-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Envoyer
              </Button>
            </div>
          </form>
        </div>
      </section>

     

      

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
