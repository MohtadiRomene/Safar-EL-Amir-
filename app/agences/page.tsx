"use client"

import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useLanguage } from "../../components/header"
import { MapPin, Phone, Clock, Plane, Building2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AgencesPage() {
  const { t } = useLanguage()
  const agencies = [
    {
      name: `${t("agencyLabel")} Oran ${t("cityLabel")}`,
      type: "city",
      address: t("addressOranCity"),
      hours: t("hoursCity"),
      icon: Building2,
    },
    {
      name: `${t("agencyLabel")} Alger ${t("cityLabel")}`,
      type: "city",
      address: t("addressAlgerCity"),
      hours: t("hoursCity"),
      icon: Building2,
    },
    {
      name: "Oran",
      type: "airport",
      address: `${t("airportLabel")} Ahmed Ben Bella`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Tlemcen",
      type: "airport",
      address: `${t("airportLabel")} Messali El Hadj`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Alger",
      type: "airport",
      address: `${t("airportLabel")} Houari Boumediene`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Constantine",
      type: "airport",
      address: `${t("airportLabel")} Mohamed Boudiaf`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Batna",
      type: "airport",
      address: `${t("airportLabel")} Mostafa Benboulaid`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Béjaïa",
      type: "airport",
      address: `${t("airportLabel")} Abane Ramdane`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Sétif",
      type: "airport",
      address: `${t("airportLabel")} 08 Mai 1945`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Annaba",
      type: "airport",
      address: `${t("airportLabel")} Rabah Bitat`,
      hours: t("hours247"),
      icon: Plane,
    },
    {
      name: "Jijel",
      type: "airport",
      address: `${t("airportLabel")} Ferhat Abbas`,
      hours: t("hours247"),
      icon: Plane,
    },
  ]

  const locations = [
    t("agencyAlger"),
    t("agencyOran"),
    t("agencyConstantine"),
    t("agencyTlemcen"),
    t("agencyAnnaba"),
    t("agencyBatna"),
    t("agencySetif"),
    t("agencyBejaia"),
    t("agencyJijel"),
  ]

  const officeImages = [
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat min-h-[25vh]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Nosagences.webp')" }}
        ></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("aboutTitle")} <span className="text-[rgb(255,18,54)] font-[750] ">Safar El Amir</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t("aboutP1")}</p>
                <p>{t("aboutP2")}</p>
                <p className="font-semibold text-gray-900">{t("aboutCta")}</p>
              </div>

              {/* Contact Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">{t("serviceClient")}</h3>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <span className="text-lg font-semibold">+ 213 41 21 70 70</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                    <span className="text-lg font-semibold">+ 213 560 659 309</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Single Centered Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg relative">
                <Image
                  src="/images/about-image-group2 (3).webp"
                  alt="Bureau Safar El Amir"
                  width={500}
                  height={375}
                  className="w-full h-auto rounded-lg shadow-sm object-contain"
                  priority
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 ">
            {t("agenciesSectionTitle")} <span className="text-[rgb(255,18,54)] font-[750] ">Safar El Amir</span> {t("inAlgeria")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencies.map((agency, index) => {
              const IconComponent = agency.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-full ${agency.type === "airport" ? "bg-blue-100" : "bg-gray-100"}`}>
                      <IconComponent
                        className={`h-5 w-5 ${agency.type === "airport" ? "text-blue-600" : "text-gray-600"}`}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900">{agency.name}</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{agency.address}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{agency.hours}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}



      <Footer />
    </div>
  )
}
