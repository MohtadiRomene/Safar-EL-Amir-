"use client"

import React from "react"

import { useState } from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useLanguage } from "../../components/header"
import { CheckCircle, User, Mail } from "lucide-react"
import { Button } from "../../components/ui/button"
import Image from "next/image"
import Link from "next/link"
import WhatsAppWidget from "../../components/whatsapp-widget"

export default function ProgrammePrimePage() {
  const { t } = useLanguage()
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
      <section className="relative bg-cover bg-center bg-no-repeat min-h-[25vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/ProgrammePrime.webp')" }}
        ></div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t("primeHeroTitle")} <span className="text-red-600">Safar El Amir</span>
              </h2>

              <p className="text-base text-gray-700 mb-4">{t("primeIntro")}</p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed">{t("primeDesc")}</p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">{t("primeHowTitle")}</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("silverTitle")}</h4>
                      <p className="text-gray-700">{t("silverDesc")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("goldTitle")}</h4>
                      <p className="text-gray-700">{t("goldDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Both Cards Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/both-cards.webp"
                alt="Silver and Gold loyalty cards"
                width={760}
                height={480}
                quality={95}
                priority={false}
                sizes="(min-width:1024px) 340px, (min-width:768px) 320px, 260px"
                className="w-full max-w-[260px] md:max-w-[320px] lg:max-w-[340px] h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("loyaltyRequestTitle")}</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Civilité */}
              <div className="flex-1">
                <select
                  id="civilite"
                  name="civilite"
                  value={formData.civilite}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-b-2 border-blue-500 focus:outline-none text-gray-700"
                  required
                >
                  <option value="">{t("civility")}</option>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Mlle">Mlle</option>
                </select>
              </div>

              {/* Nom */}
              <div className="flex-1">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder={t("customerTestimonials")}
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none text-gray-700"
                    required
                  />
                </div>
              </div>

              {/* Prénom */}
              <div className="flex-1">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    placeholder={t("contactUs")}
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none text-gray-700"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex-1">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("email")}
                    className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none text-gray-700"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold whitespace-nowrap">
                {t("send")}
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
