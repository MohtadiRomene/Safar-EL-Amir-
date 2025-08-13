import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, User, Calendar } from "lucide-react"
import Link from "next/link"

export default function AvisClientsPage() {
  const testimonials = [
    {
      name: "Hafid LAIB",
      date: "30 juil., 2025",
      rating: 3,
      comment: "Avis: Bon service à recommander",
    },
    {
      name: "Malik Zafar",
      date: "29 juil., 2025",
      rating: 5,
      comment:
        "Parfait: Bonjour Encore une location parfaitement conclue avec Safar El Amir, client depuis 2015 je n'es jamais était déçu, voiture récente en parfaite état avec la Clim. J'ai passé 3 semaines de vacances en juillet parfaite grâce à votre voiture qui ma emmener partout, Alger, Bejaia, Annaba et chez la famille à Batna. Rendez-vous pris pour la prochaine location. Merci et à bientôt inchallah. véhicule : RENAULT SYMBOL",
    },
    {
      name: "Faride Lafi",
      date: "29 juil., 2025",
      rating: 5,
      comment:
        "Zaki: Bonjour Très bon service avec cette société de location, et Zaki la personne qui c'est occupée de nous je la recommande fortement. Cordialement Mr Lafi. véhicule : RENAULT CLIO 5 DCI",
    },
    {
      name: "Ahcene Bouharouf",
      date: "29 juil., 2025",
      rating: 5,
      comment:
        "Grande satisfaction: Très content d'avoir louer une voiture chez vous. Professionnalisme et diligence sont à relever. Merci d'être présent et d'offrir ce service malgré les conditions désastreuses des routes y compris l'autoroute menant à Alger. véhicule : RENAULT MEGANE SEDAN",
    },
    {
      name: "Seyyid Ali Guazou",
      date: "29 juil., 2025",
      rating: 4,
      comment: "Parfait: Très sérieux je recommande! véhicule : DACIA STEPWAY Gps",
    },
    {
      name: "Julien GOMES",
      date: "29 juil., 2025",
      rating: 5,
      comment:
        "Sérieux et professionnalisme: Très bon service et ravi de la prestation de Safar El Amir. Voiture très récente qui nous attendait sur le parking de l'aéroport. Bons échanges avec notre interlocuteur. Nous recommandons cette agence pour son sérieux ! véhicule : PEUGEOT 208 HDI",
    },
    {
      name: "Abdelkader Ouchem",
      date: "22 juil., 2025",
      rating: 3,
      comment:
        "Voiture: Salam alycoum Concernant la prise en charge, l'écoute et la disponibilité du personnel de l'agence je suis très satisfait. Concernant le prix du véhicule que j'ai loué est un peu élevé et exagéré. En tout cas je recommande cette agence véhicule : RENAULT KWID",
    },
    {
      name: "Isidro Tavares lopes",
      date: "21 juil., 2025",
      rating: 5,
      comment: "Très content de la prestation Safar El Amir: je recommande fortement véhicule : RENAULT MEGANE SEDAN",
    },
    {
      name: "Riad Merbet",
      date: "21 juil., 2025",
      rating: 5,
      comment:
        "Très bon service: Merci pour votre excellent service par contre un petit bémol en raison d'un supplément de 1000 dinars qui a été demandé lors de la remise des clés et la voiture pour cause de lavage du véhicule. Meilleures salutations Riad véhicule : FIAT TIPO AUTO",
    },
    {
      name: "Salah MILI",
      date: "20 juil., 2025",
      rating: 5,
      comment:
        "5: Super prestations ! Professionnalisme des agents. rien à dire la prochaine fois je louerais un véhicule plus touristique car la Fiat tipo était limite !!! véhicule : FIAT TIPO AUTO",
    },
    {
      name: "Hamid Zeghidar",
      date: "19 juil., 2025",
      rating: 5,
      comment:
        "Service impeccable: Cela fait des années que je loue des voitures chez Safarelamir et je n'ai jamais été déçu. Ils m'attendent à l'aéroport même quand le vol est en retard. La voiture est très récente, le service est fiable et impeccable. Pour mon dernier séjour en juillet 2025, la voiture était de 2023 et n'avait pas trop de km. Mieux vaut prendre ses précautions pour les sièges enfants car ils ne connaissent les dispo que la veille. véhicule : RENAULT SYMBOL",
    },
    {
      name: "Fatima Ouali",
      date: "19 juil., 2025",
      rating: 5,
      comment:
        "Ça fait plaisir: À al loué la voiture au dernier moment 16h pour 23h 5 min après on m a appelé pour m expliquer à voix vif La procédure. tout s est bien passé comme prévu ils sont venu me récupérer à l aéroport la voiture était sur le parking ils ont même payé le parking. Ils sont très arrangeant Et très sérieux il y a juste un petit détail moi j avais choisie une voiture noire j en ai trouvé une blanche qui était bien aussi c est juste la couleur j aime pas une voiture blanche si non réserver les yeux fermés véhicule : SKODA FABIA 4",
    },
    {
      name: "Farida OULMAS",
      date: "19 juil., 2025",
      rating: 5,
      comment:
        "Sérieux: Équipe à l heure au rendez-vous pour récupérer le véhicule. Il vous appelle avant et vous indique l'emplacement du véhicule. État des lieux, caution demandée, tout est clair et bien expliqué. véhicule : RENAULT SYMBOL",
    },
    {
      name: "Fouad Kaddour",
      date: "16 juil., 2025",
      rating: 5,
      comment:
        "Super: Location réservé le jour j tarif plus que satisfaisant. De plus la qualité du service et la prise en charge est nickel, véhicule se rapprochant du neuf, aucuns problèmes pendant mon séjour, un loueur très professionnel et humain. Merci à toutes l'équipe 🙏 véhicule : RENAULT CLIO 5 DCI",
    },
    {
      name: "Mostafa Bedjdi",
      date: "16 juil., 2025",
      rating: 5,
      comment:
        "Très satisfait: Une équipe très sérieuse, un véhicule en parfait état et très propre. Merci pour cette belle expérience, j'espère avoir l'opportunité de refaire affaire avec vous. Cordialement Mostafa BEDJDI véhicule : RENAULT CLIO 5 DCI",
    },
    {
      name: "Djamel Tilmatine",
      date: "16 juil., 2025",
      rating: 5,
      comment:
        "Vacance: Cet unrgrand plaisaire de location avec Safar elamir . Tous va bien Travaille professionel Sont très jounitie. véhicule : RENAULT KWID",
    },
    {
      name: "Larbi Sellam",
      date: "09 juil., 2025",
      rating: 5,
      comment:
        "Très bon accueil et professionnalisme: Accueil chaleureux, disponibilité, professionnalisme du représentant,que je salue d'ailleurs véhicule : RENAULT CLIO 5 DCI",
    },
    {
      name: "NAWALLE NOUAR EPOUSE YAWES",
      date: "07 juil., 2025",
      rating: 5,
      comment:
        "Parfait: J'ai loué un véhicule pour une semaine et l'expérience s'est avéré parfaite! Aucune surprise véhicule conforme à ma demande en très bon état, propre, papiers en ordre, personnel ponctuel et discret. C'est la seconde fois que je loue un véhicule chez Safar El Amir et je renouvelle l'expérience inchallah cet été ! Merci pour votre professionnalisme, je recommande ++++ véhicule : FIAT TIPO AUTO",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-5 w-5 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Témoignages clients</h1>
            <nav className="flex items-center justify-center space-x-2 text-sm">
              <Link href="/" className="hover:text-blue-600 transition-colors text-gray-600">
                Accueil
              </Link>
              <span className="text-gray-400">›</span>
              <span className="text-gray-600">Témoignages clients</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">{renderStars(testimonial.rating)}</div>

                {/* Comment */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">{testimonial.comment}</p>
                </div>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold text-gray-900 text-sm">{testimonial.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Satisfaction Client</h3>

            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">{renderStars(5)}</div>
                <span className="text-2xl font-bold text-gray-900">4.8/5</span>
              </div>
              <div className="border-l border-gray-300 pl-4">
                <span className="text-lg text-gray-600">Basé sur plus de 1,000 avis</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                <div className="text-gray-600">Clients servis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
