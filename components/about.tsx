import { Award, Users, Car, Globe } from "lucide-react"

export default function About() {
  const stats = [
    {
      icon: Car,
      number: "500+",
      label: "Véhicules disponibles",
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Clients satisfaits",
    },
    {
      icon: Globe,
      number: "11",
      label: "Agences en Algérie",
    },
    {
      icon: Award,
      number: "15+",
      label: "Années d'expérience",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À propos de <span className="text-red-600">Safar El Amir</span>
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Depuis plus de 15 ans, Safar El Amir est le leader de la location de véhicules en Algérie. Nous nous
                engageons à fournir des services de qualité supérieure avec une flotte moderne et diversifiée pour
                répondre à tous vos besoins de mobilité.
              </p>
              <p>
                Que ce soit pour un voyage d'affaires, des vacances en famille ou un déplacement ponctuel, notre équipe
                professionnelle est là pour vous accompagner et vous offrir la meilleure expérience de location
                possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=About+Safar+El+Amir"
              alt="À propos de Safar El Amir"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
