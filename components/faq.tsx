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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              {t("faqTitle")} <span className="text-red-600">{t("faqSubtitle")}</span>
            </h2>
            <div className="prose prose-base text-gray-600 mb-6">
              <p className="text-sm leading-relaxed mb-4">
                Pour tous vos déplacements en Algérie, nous proposons un service de location voiture avec chauffeur.
                Notre agent vous attend à l'aéroport et vous prend en charge quel que soit le nombre de personnes. Vous
                pouvez compter sur nous pour vos navette aéroport hôtel vers les différentes villes algériennes à des
                prix abordables.
              </p>
              <p className="text-sm leading-relaxed mb-4">
                Nous mettons à votre disposition les simples ou les luxueuses berlines, les 4x4 de luxes, les minis bus
                et même les autocars. Visitez notre site web spécialement dédié à ce service en cliquant sur
                AlgerieTransfert.com
              </p>
              <p className="text-sm leading-relaxed mb-4">
                Pour tous vos déplacements en Algérie, nous proposons un service de location voiture avec chauffeur.
                Notre agent vous attend à l'aéroport et vous prend en charge quel que soit le nombre de personnes. Vous
                pouvez compter sur nous pour vos navette aéroport hôtel vers les différentes villes algériennes à des
                prix abordables.
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Nous mettons à votre disposition les simples ou les luxueuses berlines, les 4x4 de luxes, les minis bus
                et même les autocars. Visitez notre site web spécialement dédié à ce service en cliquant sur
                AlgerieTransfert.com
              </p>
            </div>
            <div>
              <Link href="/agences" className="text-orange-500 hover:text-orange-600 text-sm underline font-medium transition-colors duration-200">
                {t("readMore")}
              </Link>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-1">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full bg-white border border-blue-200 text-left flex items-center hover:bg-gray-50 transition-colors duration-200 relative overflow-hidden"
                  >
                    <span className="flex-1 px-5 py-4 font-medium text-gray-900 text-sm pr-20">{faq.question}</span>
                    {/* Parallélogramme bleu */}
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-16 bg-blue-600 flex items-center justify-center"
                      style={{
                        clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      }}
                    >
                      <ChevronRight className="h-4 w-4 text-white ml-2" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-blue-50 border-l border-r border-b border-blue-200">
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">{faq.answer}</p>
                      <p className="text-xs text-gray-600 mb-3">{faq.moreInfo}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}