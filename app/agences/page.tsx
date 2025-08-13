import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Clock, Plane, Building2 } from "lucide-react"
import Link from "next/link"

export default function AgencesPage() {
  const agencies = [
    {
      name: "Agence Oran ville",
      type: "city",
      address: "51, Avenue Emir Khaled (face à la poste)",
      hours: "Du Samedi au Jeudi : 08H30 à 17H00",
      icon: Building2,
    },
    {
      name: "Agence Alger ville",
      type: "city",
      address: "Centre Commercial city center les banniers",
      hours: "Du Samedi au Jeudi : 08H30 à 17H00",
      icon: Building2,
    },
    {
      name: "Oran",
      type: "airport",
      address: "Aéroport Ahmed Ben Bella",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Tlemcen",
      type: "airport",
      address: "Aéroport Messali El Hadj",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Alger",
      type: "airport",
      address: "Aéroport Houari Boumediene",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Constantine",
      type: "airport",
      address: "Aéroport Mohamed Boudiaf",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Batna",
      type: "airport",
      address: "Aéroport Mostafa Benboulaid",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Béjaïa",
      type: "airport",
      address: "Aéroport Abane Ramdane",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Sétif",
      type: "airport",
      address: "Aéroport 08 Mai 1945",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Annaba",
      type: "airport",
      address: "Aéroport Rabah Bitat",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
    {
      name: "Jijel",
      type: "airport",
      address: "Aéroport Ferhat Abbas",
      hours: "7J / 7 24H/24",
      icon: Plane,
    },
  ]

  const locations = [
    "Location de voiture à Alger Houari Boumediene",
    "Location de voiture à Oran Ahmed Ben Bella",
    "Location de voiture à Constantine Mohamed Boudiaf",
    "Location de voiture à Tlemcen Messali Hadj",
    "Location de voiture à Annaba Rabah Bitat",
    "Location de voiture à Batna Mostepha Ben Boulaid",
    "Location de voiture à Sétif 8 MAI 1945",
    "Location de voiture à Béjaïa Soummam Abane Ramdane",
    "Location de voiture à Jijel Ferhat Abbas",
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos agences</h1>
            <nav className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-600 transition-colors text-gray-600">
                Accueil
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600">Nos agences</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                À propos de <span className="text-red-600">Safar El Amir</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Safar El Amir est une société familiale fondée en 2003 qui est vite devenue le loueur de voiture
                  préféré et incontournable en Algérie. Pourquoi ? Car nous travaillons chaque jour très dur pour
                  améliorer la qualité de l'expérience vécue par nos clients qui nous ont accordé leur précieuse
                  confiance. Cela implique une remise en cause régulière au niveau de tous nos départements afin de
                  réinventer notre beau métier chaque jour.
                </p>
                <p>
                  Safar El Amir est une marque premium qui a été choisie par plus de 15 000 clients durant nos 20 ans
                  d'expérience et à travers nos 11 agences en Algérie. Safar El Amir a été à plusieurs reprises citée et
                  récompensée par les plus grands guides touristiques européens tels que Le petit futé et Le routard.
                </p>
                <p className="font-semibold text-gray-900">Vous êtes prêt à faire le premier pas ?</p>
              </div>

              {/* Contact Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">Nos conseillers clients</h3>
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

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {officeImages.map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Bureau Safar El Amir ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agencies Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Les agences <span className="text-red-600">Safar El Amir</span> en Algérie
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

      {/* Map and Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nous sommes présent un peu partout en Algérie</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Locations List */}
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    {location}
                  </Link>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative">
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Carte de l'Algérie avec les agences Safar El Amir"
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
