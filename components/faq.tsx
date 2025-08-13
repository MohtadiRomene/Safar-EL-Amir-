"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useLanguage } from "./header"
import Link from "next/link"

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: t("faqQ1"),
      answer:
        "Veuillez saisir vos dates ainsi que l'aéroport de votre choix et cliquez sur 'Tarifs & Disponibilité' pour obtenir un devis détaillé en temps réel.",
      moreInfo: "Nos tarifs varient selon la saison, la durée de location et le type de véhicule choisi.",
    },
    {
      question: t("faqQ2"),
      answer: "Une pièce d'identité valide et une caution selon le véhicule choisi sont requises.",
      moreInfo: "Le montant de la caution varie entre 5000 et 15000 DA selon le véhicule.",
    },
    {
      question: t("faqQ3"),
      answer: "Oui, nous acceptons les paiements par carte bancaire sur place.",
      moreInfo: "Nous acceptons Visa, Mastercard et les cartes bancaires locales.",
    },
    {
      question: t("faqQ4"),
      answer: "Oui, grâce à notre service 24h/24, vous pouvez rendre le véhicule à tout moment.",
      moreInfo: "Notre service est disponible 24h/24 et 7j/7 dans toutes nos agences.",
    },
    {
      question: t("faqQ5"),
      answer: "Absolument ! Vous pouvez nous appeler ou nous contacter via WhatsApp pour réserver.",
      moreInfo: "Nos conseillers sont disponibles de 8h à 20h pour vous assister.",
    },
    {
      question: t("faqQ6"),
      answer: "Nos agents vous attendent avec une pancarte à votre nom dans le hall d'arrivée.",
      moreInfo: "Nous vous enverrons un SMS avec les détails de localisation avant votre arrivée.",
    },
    {
      question: t("faqQ7"),
      answer: "Non, nous suivons les horaires de vol et adaptons nos services en conséquence.",
      moreInfo: "Nous surveillons automatiquement les horaires de vol pour ajuster nos services.",
    },
    {
      question: t("faqQ8"),
      answer: "Oui, avec un permis valide depuis au moins 2 ans et moyennant un supplément jeune conducteur.",
      moreInfo: "Le supplément jeune conducteur est de 500 DA par jour.",
    },
    {
      question: t("faqQ9"),
      answer: "Nos tarifs sont fixes mais nous proposons des offres spéciales selon la durée de location.",
      moreInfo: "Des remises progressives sont appliquées pour les locations de plus de 7 jours.",
    },
    {
      question: t("faqQ10"),
      answer: "Oui, nous proposons des locations aller simple entre nos différentes agences.",
      moreInfo: "Des frais supplémentaires s'appliquent pour les retours dans une agence différente.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 bg-white animate-float">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side - Content */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 animate-pulse">
              {t("faqTitle")} <span className="text-red-600 animate-bounce">{t("faqSubtitle")}</span>
            </h2>
            <div className="prose prose-base text-gray-600 mb-6 transform transition-all duration-300 hover:text-gray-800">
              <p className="text-sm leading-relaxed">
                Pour tous vos déplacements en Algérie, nous proposons un service de location voiture avec chauffeur.
                Notre agent vous attend à l'aéroport et vous prend en charge quel que soit le nombre de personnes. Vous
                pouvez compter sur nous pour vos navette aéroport hôtel vers les différentes villes algériennes à des
                prix abordables.
              </p>
              <p className="text-sm leading-relaxed">
                Nous mettons à votre disposition les simples ou les luxueuses berlines, les 4x4 de luxes, les minis bus
                et même les autocars. Visitez notre site web spécialement dédié à ce service en cliquant sur
                AlgerieTransfert.com
              </p>
              <p className="text-sm leading-relaxed">
                Pour tous vos déplacements en Algérie, nous proposons un service de location voiture avec chauffeur.
                Notre agent vous attend à l'aéroport et vous prend en charge quel que soit le nombre de personnes. Vous
                pouvez compter sur nous pour vos navette aéroport hôtel vers les différentes villes algériennes à des
                prix abordables.
              </p>
              <p className="text-sm leading-relaxed">
                Nous mettons à votre disposition les simples ou les luxueuses berlines, les 4x4 de luxes, les minis bus
                et même les autocars. Visitez notre site web spécialement dédié à ce service en cliquant sur
                AlgerieTransfert.com
              </p>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110">
              <Link href="/agences">
                <Button className="bg-orange-100 hover:bg-orange-200 text-black text-opacity-70 px-6 py-2 text-sm border-0 shadow-none transition-all duration-300 hover:shadow-lg hover:scale-105 animate-pulse">
                  {t("readMore")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-5 py-3 text-left flex justify-between items-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-blue-600 text-white transform scale-105"
                      : "bg-white hover:bg-gray-50 text-gray-900 hover:scale-102"
                  }`}
                >
                  <span className="font-medium pr-4 text-sm transition-all duration-300">{faq.question}</span>
                  <div className="flex-shrink-0 transition-transform duration-300">
                    {openIndex === index ? (
                      <ChevronDown className="h-4 w-4 animate-spin" />
                    ) : (
                      <ChevronRight className="h-4 w-4 hover:scale-125" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 py-3 bg-blue-50 border-t border-blue-100 animate-slideDown">
                    <p className="text-gray-700 leading-relaxed mb-2 text-sm transition-all duration-300 hover:text-gray-900">{faq.answer}</p>
                    <p className="text-xs text-gray-600 mb-3 transition-all duration-300 hover:text-gray-800">{faq.moreInfo}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent text-xs transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      {t("learnMore")} →
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
