"use client"

import { Star, ExternalLink } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "./animated-section"
import { useLanguage } from "./header"

export default function Reviews() {
  const { t } = useLanguage()

  const reviews = [
    {
      name: "Abdelkader Ouchem",
      rating: 4,
      comment: "Salam alycom, service excellent et voitures en très bon état. Je recommande vivement !",
      date: "21 juillet 2025",
    },
    {
      name: "Fatima Benali",
      rating: 5,
      comment: "Parfait ! Personnel très professionnel et véhicule impeccable. Merci Safar El Amir.",
      date: "22 juillet 2025",
    },
    {
      name: "Mohamed Khelifi",
      rating: 5,
      comment: "Excellent service, ponctualité au rendez-vous. Je referai appel à vos services.",
      date: "23 juillet 2025",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="reviews" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("reviewsTitle")}</h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
              <div className="bg-white rounded-lg shadow-lg p-5">
                <div className="flex items-center space-x-1 mb-3">{renderStars(review.rating)}</div>
                <p className="text-gray-700 mb-3 leading-relaxed text-sm">"{review.comment}"</p>
                <div className="border-t pt-3">
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trustpilot Section */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white rounded-lg shadow-md p-5">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">{renderStars(5)}</div>
                <span className="font-semibold text-gray-900 text-sm">4.8/5</span>
              </div>
              <div className="border-l border-gray-300 pl-4">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  <span>{t("trustpilotText")}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <div className="mt-5">
              <Link
                href="/avis-clients"
                className="text-blue-600 hover:text-blue-700 font-medium text-base transition-colors duration-200"
              >
                → {t("seeAllReviews")}
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
