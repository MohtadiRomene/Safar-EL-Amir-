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

    // Additional translations for other components
    // Hero service features
    serviceSince2003: "À votre service depuis 2003",
    unlimitedMileage: "Kilométrage illimité gratuit",
    modelGuarantee: "Garantie du modèle choisi",
    assistance24h: "Assistance 24H/24",

    // Footer additional content
    footerAddress: "Nous sommes présents sur plusieurs aéroports en Algérie: aéroport d'Alger, Oran, Tlemcen, Chlef, Constantine, Sétif, Annaba, Jijel, Skikda, Biskra, Bejaia et Batna.",
    emailPlaceholder: "E-mail",
    contactUs: "Contactez-nous",
    customerTestimonials: "Témoignages clients",
    charterPrivacy: "Charte & confidentialité",
    legalNotices: "Mentions légales",
    rentalConditionsFooter: "Conditions de location",
    cancellationConditions: "Conditions d'annulation",

    // FAQ additional content
    faqIntro1: "Pour tous vos déplacements en Algérie, nous proposons un service de location voiture avec chauffeur. Notre agent vous attend à l'aéroport et vous prend en charge quel que soit le nombre de personnes. Vous pouvez compter sur nous pour vos navette aéroport hôtel vers les différentes villes algériennes à des prix abordables.",
    faqIntro2: "Nous mettons à votre disposition les simples ou les luxueuses berlines, les 4x4 de luxes, les minis bus et même les autocars. Visitez notre site web spécialement dédié à ce service en cliquant sur AlgerieTransfert.com",
    faqIntro3: "Pour tous vos déplacements en Algérie, nous proposons un service de location voiture avec chauffeur. Notre agent vous attend à l'aéroport et vous prend en charge quel que soit le nombre de personnes. Vous pouvez compter sur nous pour vos navette aéroport hôtel vers les différentes villes algériennes à des prix abordables.",
    faqIntro4: "Nous mettons à votre disposition les simples ou les luxueuses berlines, les 4x4 de luxes, les minis bus et même les autocars. Visitez notre site web spécialement dédié à ce service en cliquant sur AlgerieTransfert.com",

    // FAQ answers
    faqA1: "Veuillez saisir vos dates ainsi que l'aéroport de votre choix et cliquez sur 'Tarifs & Disponibilité' pour obtenir un devis détaillé en temps réel.",
    faqA1More: "Nos tarifs varient selon la saison, la durée de location et le type de véhicule choisi.",
    faqA2: "Une pièce d'identité valide et une caution selon le véhicule choisi sont requises.",
    faqA2More: "Le montant de la caution varie entre 5000 et 15000 DA selon le véhicule.",
    faqA3: "Oui, nous acceptons les paiements par carte bancaire sur place.",
    faqA3More: "Nous acceptons Visa, Mastercard et les cartes bancaires locales.",
    faqA4: "Oui, grâce à notre service 24h/24, vous pouvez rendre le véhicule à tout moment.",
    faqA4More: "Notre service est disponible 24h/24 et 7j/7 dans toutes nos agences.",
    faqA5: "Absolument ! Vous pouvez nous appeler ou nous contacter via WhatsApp pour réserver.",
    faqA5More: "Nos conseillers sont disponibles de 8h à 20h pour vous assister.",
    faqA6: "Nos agents vous attendent avec une pancarte à votre nom dans le hall d'arrivée.",
    faqA6More: "Nous vous enverrons un SMS avec les détails de localisation avant votre arrivée.",
    faqA7: "Non, nous suivons les horaires de vol et adaptons nos services en conséquence.",
    faqA7More: "Nous surveillons automatiquement les horaires de vol pour ajuster nos services.",
    faqA8: "Oui, avec un permis valide depuis au moins 2 ans et moyennant un supplément jeune conducteur.",
    faqA8More: "Le supplément jeune conducteur est de 500 DA par jour.",
    faqA9: "Nos tarifs sont fixes mais nous proposons des offres spéciales selon la durée de location.",
    faqA9More: "Des remises progressives sont appliquées pour les locations de plus de 7 jours.",
    faqA10: "Oui, nous proposons des locations aller simple entre nos différentes agences.",
    faqA10More: "Des frais supplémentaires s'appliquent pour les retours dans une agence différente.",

    // Blog posts
    blogPost1: "Sétif: Perle de l'Est Algérien - Guide de Voyage",
    blogPost2: "Jijel: Mini Guide pour une Escapade Côtière",
    blogPost3: "L'Aéroport d'Alger Houari-Boumédiène : le 3ème plus important aéroport en Afrique",

    // Hero additional content
    airportTlemcen: "Tlemcen - Aéroport Messali El Hadj",
    airportOran: "Oran - Aéroport Ahmed Ben Bella",
    airportAlger: "Alger - Aéroport Houari Boumediene",
    airportConstantine: "Constantine - Aéroport Mohamed Boudiaf",
    airportChlef: "Chlef - Aéroport",
    backgroundImage1: "Pont suspendu entre des falaises",
    backgroundImage2: "Monument historique d'Alger",
    backgroundImage3: "Port maritime",
    backgroundImage4: "Tour côtière",
    goToBackgroundImage: "Aller à l'image de fond",

    // Agencies additional content
    agencyAlger: "Location de voiture à Alger Houari Boumediene",
    agencyOran: "Location de voiture à Oran Ahmed Ben Bella",
    agencyConstantine: "Location de voiture à Constantine Mohamed Boudiaf",
    agencyTlemcen: "Location de voiture à Tlemcen Messali Hadj",
    agencyAnnaba: "Location de voiture à Annaba Rabah Bitat",
    agencyBatna: "Location de voiture à Batna Mostepha Ben Boulaid",
    agencySetif: "Location de voiture à Sétif 8 MAI 1945",
    agencyBejaia: "Location de voiture à Bejaia Soummam Abane Ramdane",
    agencyJijel: "Location de voiture à Jijel Ferhat Abbas",

    // Reviews additional content
    review1Comment: "Parfait. Je recommande à 100% l'agence de location. Très sérieux très gentil et pro. La voiture était nickel 👌 Merci à Rafik\nvéhicule : RENAULT KWID",
    review2Comment: "remerciements: je suis très satisfait de ma réservation qui a été simple et rapide avec une confirmation immédiate . A mon arrivée le personnel a été accueillant et professionnel. Je recommande vivem... Voir plus",
    review3Comment: "Location véhicule: Nous avons été satisfait de notre location. L agent de livraison est d'une gentillesse ponctuel. Merci à lui. Tarif tout de même un peu élevé. Dans l ensemble tout s'est bien passé.\n",
    review4Comment: "Trop.cher: Trop.cher\nvéhicule: DACIA STEPWAY Gps",
    review5Comment: "Très professionnelle: Première réservation à l'agence d'Oran. Service nickel : l'agent vous attend à votre arrivée à l'aéroport avec une pancarte à votre nom. La voiture correspond parfaitement à ma commande...",
    review6Comment: "Excellent service: Personnel très accueillant et professionnel. La voiture était parfaitement entretenue et le processus de réservation très simple. Je recommande vivement !",
    review7Comment: "Très satisfait: Bon rapport qualité-prix, voiture en bon état. Le seul bémol est le délai d'attente un peu long lors de la récupération. Sinon tout était parfait.",
    review8Comment: "Service impeccable: Depuis la réservation en ligne jusqu'à la restitution, tout s'est déroulé parfaitement. Personnel compétent et voiture impeccable. Merci !",

    // Dates and months
    august: "Août",
    seeMore: "Voir plus",
    trustpilotCount: "1,098",
    trustpilotReviews: "avis sur",
    seeOur: "Voir nos",
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
    charter: "Charter & privacy",
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
    reservationText: "You have reserved a vehicle and want to add options, or cancel your reservation?",

    // Hero section
    heroTitle: "Your car in Algeria in one click!",
    heroSubtitle: "Discover Algeria with Safar El Amir - Your trusted partner",
    pickupReturn: "Pickup and return",
    findAgency: "Find an agency",
    departureDateTime: "Departure date & time",
    returnDateTime: "Return date & time",
    seeOffers: "See offers",
    applyPrimeRate: "Apply Prime rate",

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
    faqTitle: "Chauffeur rental",
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
    service24h: "24/7 service",
    agencies11: "11 agencies",

    // FAQ questions
    faqQ1: "What are your prices and availability?",
    faqQ2: "What guarantee should I leave you?",
    faqQ3: "Can I pay by credit card on site?",
    faqQ4: "Can I return the car at 5:00 AM?",
    faqQ5: "Can I book by phone?",
    faqQ6: "Where to find you once arrived at the airport?",
    faqQ7: "If my flight is delayed, will my reservation be cancelled?",
    faqQ8: "I am under 26, can I rent from you?",
    faqQ9: "Are your prices negotiable?",
    faqQ10: "Can I take the car from Algiers airport and return it to Oran or Constantine?",

    // Additional translations for other components
    // Hero service features
    serviceSince2003: "At your service since 2003",
    unlimitedMileage: "Free unlimited mileage",
    modelGuarantee: "Guaranteed model choice",
    assistance24h: "24/7 assistance",

    // Footer additional content
    footerAddress: "We are present at several airports in Algeria: Algiers, Oran, Tlemcen, Chlef, Constantine, Sétif, Annaba, Jijel, Skikda, Biskra, Bejaia and Batna airports.",
    emailPlaceholder: "E-mail",
    contactUs: "Contact us",
    customerTestimonials: "Customer testimonials",
    charterPrivacy: "Charter & privacy",
    legalNotices: "Legal notices",
    rentalConditionsFooter: "Rental conditions",
    cancellationConditions: "Cancellation conditions",

    // FAQ additional content
    faqIntro1: "For all your travels in Algeria, we offer a car rental service with driver. Our agent waits for you at the airport and takes care of you regardless of the number of people. You can count on us for your airport-hotel shuttle to different Algerian cities at affordable prices.",
    faqIntro2: "We provide you with simple or luxury sedans, luxury 4x4s, minibuses and even coaches. Visit our website specially dedicated to this service by clicking on AlgerieTransfert.com",
    faqIntro3: "For all your travels in Algeria, we offer a car rental service with driver. Our agent waits for you at the airport and takes care of you regardless of the number of people. You can count on us for your airport-hotel shuttle to different Algerian cities at affordable prices.",
    faqIntro4: "We provide you with simple or luxury sedans, luxury 4x4s, minibuses and even coaches. Visit our website specially dedicated to this service by clicking on AlgerieTransfert.com",

    // FAQ answers
    faqA1: "Please enter your dates and the airport of your choice and click on 'Tarifs & Disponibilité' to obtain a detailed real-time quote.",
    faqA1More: "Our prices vary according to the season, rental duration and the type of vehicle chosen.",
    faqA2: "A valid identity document and a deposit according to the chosen vehicle are required.",
    faqA2More: "The amount of the deposit varies between 5000 and 15000 DA depending on the vehicle.",
    faqA3: "Yes, we accept credit card payments on site.",
    faqA3More: "We accept Visa, Mastercard and local bank cards.",
    faqA4: "Yes, thanks to our 24/7 service, you can return the vehicle at any time.",
    faqA4More: "Our service is available 24/7 and 7/7 in all our agencies.",
    faqA5: "Absolutely! You can call us or contact us via WhatsApp to book.",
    faqA5More: "Our advisors are available from 8:00 to 20:00 to assist you.",
    faqA6: "Our agents are waiting for you with a sign with your name at the arrival hall.",
    faqA6More: "We will send you an SMS with the location details before your arrival.",
    faqA7: "No, we follow flight schedules and adapt our services accordingly.",
    faqA7More: "We monitor flight schedules automatically to adjust our services.",
    faqA8: "Yes, with a valid license for at least 2 years and a young driver supplement.",
    faqA8More: "The young driver supplement is 500 DA per day.",
    faqA9: "Our prices are fixed but we offer special offers depending on the rental duration.",
    faqA9More: "Progressive discounts are applied for rentals of more than 7 days.",
    faqA10: "Yes, we offer simple one-way rentals between our different agencies.",
    faqA10More: "Additional fees apply for returns to a different agency.",

    // Blog posts
    blogPost1: "Sétif: Pearl of Eastern Algeria - Travel Guide",
    blogPost2: "Jijel: Mini Guide for a Coastal Getaway",
    blogPost3: "Algiers Houari-Boumédiène Airport: the 3rd most important airport in Africa",

    // Hero additional content
    airportTlemcen: "Tlemcen - Messali El Hadj Airport",
    airportOran: "Oran - Ahmed Ben Bella Airport",
    airportAlger: "Algiers - Houari Boumediene Airport",
    airportConstantine: "Constantine - Mohamed Boudiaf Airport",
    airportChlef: "Chlef Airport",
    backgroundImage1: "Suspension bridge between cliffs",
    backgroundImage2: "Historical monument of Algiers",
    backgroundImage3: "Maritime port",
    backgroundImage4: "Coastal tower",
    goToBackgroundImage: "Go to background image",

    // Agencies additional content
    agencyAlger: "Car rental in Algiers Houari Boumediene",
    agencyOran: "Car rental in Oran Ahmed Ben Bella",
    agencyConstantine: "Car rental in Constantine Mohamed Boudiaf",
    agencyTlemcen: "Car rental in Tlemcen Messali Hadj",
    agencyAnnaba: "Car rental in Annaba Rabah Bitat",
    agencyBatna: "Car rental in Batna Mostepha Ben Boulaid",
    agencySetif: "Car rental in Sétif 8 MAI 1945",
    agencyBejaia: "Car rental in Bejaia Soummam Abane Ramdane",
    agencyJijel: "Car rental in Jijel Ferhat Abbas",

    // Reviews additional content
    review1Comment: "Perfect. I recommend 100% the rental agency. Very serious, very nice and professional. The car was perfect 👌 Thank you Rafik\n\nvehicle: RENAULT KWID",
    review2Comment: "Thanks: I am very satisfied with my reservation which was simple and fast with immediate confirmation. Upon my arrival, the staff was welcoming and professional. I highly recommend... See more",
    review3Comment: "Vehicle rental: We were satisfied with our rental. The delivery agent is punctual and kind. Thank you to him. Price still a bit high. Overall everything went well.\n",
    review4Comment: "Too expensive: Too expensive\n\nvehicle: DACIA STEPWAY Gps",
    review5Comment: "Very professional: First reservation at the Oran agency. Excellent service: the agent waits for you upon arrival at the airport with a sign with your name. The car perfectly matches my order...",
    review6Comment: "Excellent service: Very welcoming and professional staff. The car was perfectly maintained and the reservation process very simple. I highly recommend!",
    review7Comment: "Very satisfied: Good value for money, car in good condition. The only downside is the slightly long waiting time during pickup. Otherwise everything was perfect.",
    review8Comment: "Impeccable service: From online reservation to return, everything went perfectly. Competent staff and impeccable car. Thank you!",

    // Dates and months
    august: "August",
    seeMore: "See more",
    trustpilotCount: "1,098",
    trustpilotReviews: "reviews on",
    seeOur: "See our",
  },
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("FR")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Récupérer la langue sauvegardée depuis localStorage
    const savedLanguage = localStorage.getItem("safarLanguage")
    if (savedLanguage && (savedLanguage === "FR" || savedLanguage === "EN")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Mettre à jour l'attribut lang de la balise HTML
  useEffect(() => {
    if (isClient) {
      document.documentElement.lang = language === "EN" ? "en" : "fr"
    }
  }, [language, isClient])

  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.FR] || key
  }

  const updateLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
    // Sauvegarder la langue dans localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem("safarLanguage", newLanguage)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t, isClient }}>
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
        <nav className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left side - Menu Hamburger + Logo + Navigation Links */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              {/* Menu Hamburger - Always visible on mobile */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-gray-900 hover:text-blue-600 transition-colors lg:hidden"
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img 
                  src="/images/safar-el-amir-logo.png" 
                  alt="Safar El Amir" 
                  className="h-6 w-auto sm:h-8 lg:h-8" 
                />
              </Link>

              {/* Desktop Navigation Links - Hidden on mobile */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-900 hover:text-blue-600 font-bold text-sm transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Login + Language */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Login Button - Responsive text */}
              <button
                onClick={() => setIsLoginOpen(true)}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-900 hover:text-blue-600 font-bold text-xs sm:text-sm transition-colors duration-200"
              >
                <Lock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{t("manageReservation")}</span>
                <span className="sm:hidden">Connexion</span>
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-1 text-gray-900 hover:text-blue-600 font-bold text-xs sm:text-sm transition-colors duration-200"
                  aria-label="Sélectionner la langue"
                >
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{language}</span>
                  <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-28 sm:w-32 bg-white rounded-md shadow-lg border border-gray-200 z-10 transform transition-all duration-200 ease-out">
                    <div className="divide-y divide-gray-200">
                      <button
                        onClick={() => handleLanguageChange("FR")}
                        className={`flex items-center w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm font-bold transition-colors ${
                          language === "FR" ? "bg-blue-50 text-blue-600" : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <span className="mr-2">🇫🇷</span>
                        <span className="hidden sm:inline">Français</span>
                        <span className="sm:hidden">FR</span>
                      </button>
                      <button
                        onClick={() => handleLanguageChange("EN")}
                        className={`flex items-center w-full text-left px-2 sm:px-3 py-2 text-xs sm:text-sm font-bold transition-colors ${
                          language === "EN" ? "bg-blue-50 text-blue-600" : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <span className="mr-2">🇬🇧</span>
                        <span className="hidden sm:inline">English</span>
                        <span className="sm:hidden">EN</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full screen overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 left-0 right-0 bg-white shadow-xl transform transition-transform duration-300 ease-in-out h-full overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <img 
                src="/images/safar-el-amir-logo.png" 
                alt="Safar El Amir" 
                className="h-8 w-auto" 
              />
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              {/* Mobile Navigation Links - Top priority */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">{t("navigation")}</h3>
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Menu Sections - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {menuSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">{section.title}</h3>
                    <div className="space-y-2 sm:space-y-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal - Responsive */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsLoginOpen(false)} />
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-sm sm:max-w-md mx-auto transform transition-all duration-300 ease-in-out">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">{t("myAccount")}</h2>
                </div>
                <button 
                  onClick={() => setIsLoginOpen(false)} 
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">{t("reservationText")}</p>

              <form className="space-y-4">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder={t("email")}
                      className="w-full pl-10 sm:pl-10 pr-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t("reservationNumber")}
                      className="w-full pl-10 sm:pl-10 pr-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base sm:text-lg font-semibold mt-4 sm:mt-6">
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
