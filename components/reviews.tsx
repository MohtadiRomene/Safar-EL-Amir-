"use client"
import { Star, ExternalLink, User, Calendar, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

// Simple translation function for demo
const useLanguage = () => ({
  t: (key) => {
    const translations = {
      reviewsTitle: "Ce qu'en disent nos clients",
      trustpilotText: "Voir nos 1045 avis sur Trustpilot",
      seeAllReviews: "Voir tous les avis",
      seeMore: "Voir plus"
    }
    return translations[key] || key
  }
})

// Simple animated section component
const AnimatedSection = ({ children, animation = "fadeInUp", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const animationClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  
  return (
    <div className={`transition-all duration-700 ${animationClass}`}>
      {children}
    </div>
  )
}

export default function Reviews() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const reviews = [
    {
      name: "Magali Bourgin",
      rating: 5,
      comment: "Parfait. Je recommande à 100% l'agence de location. Très sérieux très gentil et pro. La voiture était nickel 👌 Merci à Rafik\\n\\nvéhicule : RENAULT KWID",
      date: "22 août, 2025",
      seeMore: "Voir plus"
    },
    {
      name: "Houcine MENOUER",
      rating: 5,
      comment: "remerciements: je suis très satisfait de ma réservation qui a été simple et rapide avec une confirmation immédiate . A mon arrivée le personnel a été accueillant et professionnel. Je recommande vivem... Voir plus",
      date: "22 août, 2025"
    },
    {
      name: "HAKIM OUCHIKH",
      rating: 5,
      comment: "Location véhicule: Nous avons été satisfait de notre location. L agent de livraison est d'une gentillesse ponctuel. Merci à lui. Tarif tout de même un peu élevé. Dans l ensemble tout s'est bien passé.\\n",
      date: "22 août, 2025"
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, reviews.length - 2))
  }

  return (
    <section id="reviews" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("reviewsTitle")}</h2>
          </div>
        </AnimatedSection>

        {/* Reviews Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <AnimatedSection animation="fadeInUp" delay={index * 100}>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
                      <div className="flex items-center space-x-1 mb-4">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {review.comment}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center space-x-2 mb-1">
                          <User className="h-4 w-4 text-gray-500" />
                          <span className="font-semibold text-gray-900 text-sm">{review.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 shadow-lg transition-colors duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* See All Reviews Link */}
        <AnimatedSection animation="fadeInUp" delay={300}>
          <div className="text-center mb-8">
            <a
              href="/avis-clients"
              className="text-blue-600 hover:text-blue-700 font-medium text-base transition-colors duration-200 cursor-pointer"
            >
              &gt; {t("seeAllReviews")}
            </a>
          </div>
        </AnimatedSection>

        {/* Trustpilot Section */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-gray-700">Voir nos</span>
              <span className="font-bold text-gray-900">1 098</span>
              <span className="text-gray-700">avis sur</span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-green-500 fill-current" />
                <span className="font-bold text-gray-900">Trustpilot</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}