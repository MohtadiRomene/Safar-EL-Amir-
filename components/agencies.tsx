"use client"

import { MapPin, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import AnimatedSection from "./animated-section"
import { useLanguage } from "./header"

export default function Agencies() {
  const { t } = useLanguage()
  const [selectedAgency, setSelectedAgency] = useState("")

  const agencies = [
    { id: "alger", name: "Location de voiture à Alger Houari Boumediene", coordinates: [36.7538, 3.0588] },
    { id: "oran", name: "Location de voiture à Oran Ahmed Ben Bella", coordinates: [35.6911, -0.6417] },
    { id: "constantine", name: "Location de voiture à Constantine Mohamed Boudiaf", coordinates: [36.365, 6.6147] },
    { id: "tlemcen", name: "Location de voiture à Tlemcen Messali Hadj", coordinates: [34.8833, -1.3167] },
    { id: "annaba", name: "Location de voiture à Annaba Rabah Bitat", coordinates: [36.8333, 7.8167] },
    { id: "batna", name: "Location de voiture à Batna Mostepha Ben Boulaid", coordinates: [35.5667, 6.1667] },
    { id: "setif", name: "Location de voiture à Sétif 8 MAI 1945", coordinates: [36.1833, 5.4167] },
    { id: "bejaia", name: "Location de voiture à Bejaia Soummam Abane Ramdane", coordinates: [36.75, 5.0833] },
    { id: "jijel", name: "Location de voiture à Jijel Ferhat Abbas", coordinates: [36.8167, 5.7667] },
  ]

  return (
    <section id="agencies" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("agenciesTitle")}</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left side - Agency List and Dropdown */}
          <div>
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <h3 className="text-xl font-bold text-gray-900 mb-5">{t("agenciesSubtitle")}</h3>

              {/* Agency Dropdown */}
              <div className="mb-6">
                <div className="relative">
                  <select
                    value={selectedAgency}
                    onChange={(e) => setSelectedAgency(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-sm"
                  >
                    <option value="">{t("selectAgency")}</option>
                    {agencies.map((agency) => (
                      <option key={agency.id} value={agency.id}>
                        {agency.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Agency List with Checkboxes */}
              <div className="space-y-2 mb-6">
                {agencies.map((agency, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <label className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors text-sm">
                      {agency.name}
                    </label>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className="text-center">
                <Link href="/agences">
                  <Button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-2 text-sm font-medium border-0 shadow-none">
                    &gt; {t("findAgencyBtn")}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right side - Static Map */}
          <AnimatedSection animation="fadeInRight" delay={300}>
            <div className="relative">
            {/*<div className="flex items-center justify-center relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"> */} 
                {/* Using the static map-alger image */}
                <img
                  src="/images/map-alger-static.jpg"
                  alt="Carte statique de l'Algérie"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />                
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
