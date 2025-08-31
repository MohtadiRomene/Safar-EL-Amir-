import { Car, Shield, Clock, Users, MapPin, Headphones } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Flotte moderne",
      description: "Véhicules récents et bien entretenus pour votre confort et sécurité",
    },
    {
      icon: Shield,
      title: "Assurance complète",
      description: "Couverture totale pour une tranquillité d'esprit absolue",
    },
    {
      icon: Clock,
      title: "Service 24h/24",
      description: "Assistance disponible à tout moment, jour et nuit",
    },
    {
      icon: Users,
      title: "Équipe professionnelle",
      description: "Personnel qualifié et expérimenté à votre service",
    },
    {
      icon: MapPin,
      title: "11 agences",
      description: "Présence dans les principales villes d'Algérie",
    },
    {
      icon: Headphones,
      title: "Support client",
      description: "Assistance téléphonique et WhatsApp disponible",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les avantages de choisir Safar El Amir pour vos locations de véhicules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
