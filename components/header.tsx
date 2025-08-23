"use client"

import React from "react"

import { useState, createContext, useContext, useEffect } from "react"
import { Menu, X, Globe, User, Lock, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

// Context pour la traduction globale
const LanguageContext = createContext({
  language: "FR",
  setLanguage: (lang: string) => {},
  t: (key: string) => key,
  isClient: false,
})

const translations = {
  FR: {
    // Navigation
    models: "MODÈLES",
    agencies: "AGENCES",
    reviews: "AVIS CLIENTS",
    prime: "PROGRAMME PRIME",
    manageReservation: "GÉRER MA RÉSERVATION",

    // Menu sections
    services: "Services",
    contact: "Contactez-nous",
    testimonials: "Témoignages clients",
    charter: "Charte & confidentialité",
    usefulInfo: "Informations utiles",
    legal: "Mentions légales",
    rentalConditions: "Conditions générales de location",
    cancellation: "Conditions d'annulation",
    articles: "Articles",
    blog: "Blog",
    navigation: "Navigation",

    // Login modal
    myAccount: "Mon Compte",
    email: "E-mail",
    reservationNumber: "N° de réservation",
    connect: "Se connecter",
    reservationText: "Vous avez réservé un véhicule et souhaitez ajouter des options, ou annuler votre réservation ?",

    // Hero section
    heroTitle: "Votre voiture en Algérie en un clic !",
    heroSubtitle: "Découvrez l'Algérie avec Safar El Amir - Votre partenaire de confiance",
    pickupReturn: "Retrait et retour",
    findAgency: "Trouver une agence",
    departureDateTime: "Date & heure de départ",
    returnDateTime: "Date & heure de retour",
    seeOffers: "Voir les offres",
    applyPrimeRate: "Appliquer un tarif Prime",

    // Vehicle carousel
    discoverFleet: "Découvrez la flotte de véhicule chez",
    allModels: "Tous les modèles",

    // Agencies section
    agenciesTitle: "Les agences Safar el Amir en Algérie",
    agenciesSubtitle: "11 Agences à votre service en Algérie",
    selectAgency: "Sélectionnez une agence",
    findAgencyBtn: "Trouver une agence",

    // Reviews section
    reviewsTitle: "Ce qu'en disent nos clients",
    seeAllReviews: "Voir tous les avis",
    trustpilotText: "Voir nos 1045 avis sur Trustpilot",

    // FAQ section
    faqTitle: "Location avec chauffeur",
    faqSubtitle: "et transferts",
    readMore: "Lire la suite",
    learnMore: "En savoir plus",

    // Footer
    address: "Adresse",
    serviceClient: "Service Client",
    newsletter: "Inscription à newsletter",
    followUs: "Suivez-nous",
    copyright: "© Copyright 2025 Safar El Amir. All rights reserved.",

    // Services
    modernFleet: "Flotte moderne",
    service24h: "Service 24h/24",
    agencies11: "11 agences",

    // FAQ questions
    faqQ1: "Quelle sont vos prix et disponibilités ?",
    faqQ2: "Que dois-je vous laisser comme garantie ?",
    faqQ3: "Je peux payer par carte bleue sur place ?",
    faqQ4: "Puis je rendre la voiture à 05h00 du matin ?",
    faqQ5: "Je peux réserver par téléphone ?",
    faqQ6: "Où vous trouver une fois arrivé à l'aéroport ?",
    faqQ7: "Si mon vol a du retard, ma réservation serait-elle annulée ?",
    faqQ8: "J'ai moins de 26 ans, puis je louer chez vous ?",
    faqQ9: "Vos prix sont-ils négociables ?",
    faqQ10: "Puis je prendre la voiture de l'aéroport d'Alger et la retourner à Oran ou Constantine ?",
  },
  EN: {
    // Navigation
    models: "MODELS",
    agencies: "AGENCIES",
    reviews: "CUSTOMER REVIEWS",
    prime: "PRIME PROGRAM",
    manageReservation: "MANAGE MY RESERVATION",

    // Menu sections
    services: "Services",
    contact: "Contact us",
    testimonials: "Customer testimonials",
    charter: "Charter & confidentiality",
    usefulInfo: "Useful information",
    legal: "Legal notices",
    rentalConditions: "General rental conditions",
    cancellation: "Cancellation conditions",
    articles: "Articles",
    blog: "Blog",
    navigation: "Navigation",

    // Login modal
    myAccount: "My Account",
    email: "Email",
    reservationNumber: "Reservation number",
    connect: "Connect",
    reservationText: "You have booked a vehicle and want to add options, or cancel your reservation?",

    // Hero section
    heroTitle: "Your car in Algeria in one click!",
    heroSubtitle: "Discover Algeria with Safar El Amir - Your trusted partner",
    pickupReturn: "Pick-up and return",
    findAgency: "Find an agency",
    departureDateTime: "Date & time of Departure",
    returnDateTime: "Date & time of Arrival",
    seeOffers: "Prices and availability",
    applyPrimeRate: "Apply a Premium Rate",

    // Vehicle carousel
    discoverFleet: "Discover the vehicle fleet at",
    allModels: "All models",

    // Agencies section
    agenciesTitle: "Safar el Amir agencies in Algeria",
    agenciesSubtitle: "11 Agencies at your service in Algeria",
    selectAgency: "Select an agency",
    findAgencyBtn: "Find an agency",

    // Reviews section
    reviewsTitle: "What our customers say",
    seeAllReviews: "See all reviews",
    trustpilotText: "See our 1045 reviews on Trustpilot",

    // FAQ section
    faqTitle: "Car rental with driver",
    faqSubtitle: "and transfers",
    readMore: "Read more",
    learnMore: "Learn more",

    // Footer
    address: "Address",
    serviceClient: "Customer Service",
    newsletter: "Newsletter subscription",
    followUs: "Follow us",
    copyright: "© Copyright 2025 Safar El Amir. All rights reserved.",

    // Services
    modernFleet: "Modern fleet",
    service24h: "24/7 Service",
    agencies11: "11 agencies",

    // FAQ questions
    faqQ1: "What are your prices and availability?",
    faqQ2: "What do I need to leave as a guarantee?",
    faqQ3: "Can I pay by credit card on site?",
    faqQ4: "Can I return the car at 05:00 in the morning?",
    faqQ5: "Can I book by phone?",
    faqQ6: "Where to find you once arrived at the airport?",
    faqQ7: "If my flight is delayed, will my reservation be cancelled?",
    faqQ8: "I am under 26, can I rent from you?",
    faqQ9: "Are your prices negotiable?",
    faqQ10: "Can I take the car from Algiers airport and return it to Oran or Constantine?",
  },
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("FR")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.FR] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isClient }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const { language, setLanguage, t, isClient } = useLanguage()

  const navItems = [
    { name: t("models"), href: "/modeles" },
    { name: t("agencies"), href: "/agences" },
    { name: t("reviews"), href: "/avis-clients" },
    { name: t("prime"), href: "/programme-prime" },
  ]

  const menuSections = [
    {
      title: t("services"),
      items: [
        { name: t("contact"), href: "#" },
        { name: t("testimonials"), href: "/avis-clients" },
        { name: t("charter"), href: "#" },
      ],
    },
    {
      title: t("usefulInfo"),
      items: [
        { name: t("legal"), href: "#" },
        { name: t("rentalConditions"), href: "#" },
        { name: t("cancellation"), href: "#" },
      ],
    },
    {
      title: t("articles"),
      items: [{ name: t("blog"), href: "#" }],
    },
  ]

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    setIsLangOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
        <nav className="max-w-full px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left side - Menu Hamburger + Logo + Navigation Links */}
            <div className="flex items-center space-x-8">
              {/* Menu Hamburger */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-900 hover:text-blue-600 transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img src="/images/safar-el-amir-logo.png" alt="Safar El Amir" className="h-8 w-auto" />
              </Link>

              {/* Desktop Navigation Links - Aligned Left */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-900 hover:text-blue-600 font-bold text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Login + Language */}
            <div className="flex items-center space-x-4">
              {/* Login Button */}
              <button
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 font-bold text-sm transition-colors duration-200"
              >
                <Lock className="h-4 w-4" />
                <span>{t("manageReservation")}</span>
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-1 text-gray-900 hover:text-blue-600 font-bold text-sm transition-colors duration-200"
                  aria-label="Sélectionner la langue"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-10 transform transition-all duration-200 ease-out">
                    <div className="divide-y divide-gray-200">
                      <button
                        onClick={() => handleLanguageChange("FR")}
                        className={`flex items-center w-full text-left px-3 py-2 text-sm font-bold transition-colors ${
                          language === "FR" ? "bg-blue-50 text-blue-600" : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <span className="mr-2">🇫🇷</span>
                        Français
                      </button>
                      <button
                        onClick={() => handleLanguageChange("EN")}
                        className={`flex items-center w-full text-left px-3 py-2 text-sm font-bold transition-colors ${
                          language === "EN" ? "bg-blue-50 text-blue-600" : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <span className="mr-2">🇬🇧</span>
                        English
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Top Sliding Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
          <div
            className={`fixed top-0 left-0 right-0 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <img src="/images/safar-el-amir-logo.png" alt="Safar El Amir" className="h-8 w-auto" />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {menuSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">{section.title}</h3>
                    <div className="space-y-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Navigation Links */}
              <div className="lg:hidden mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{t("navigation")}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 border rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsLoginOpen(false)} />
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-all duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-red-600" />
                  <h2 className="text-xl font-bold text-gray-900">{t("myAccount")}</h2>
                </div>
                <button onClick={() => setIsLoginOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-gray-600 text-center mb-6">{t("reservationText")}</p>

              <form className="space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder={t("email")}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t("reservationNumber")}
                      className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold mt-6">
                  {t("connect")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
