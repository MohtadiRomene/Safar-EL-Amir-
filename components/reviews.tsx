"use client"
import React, { useState, useEffect } from "react"
import { Star, ExternalLink, User, Calendar, ChevronRight } from "lucide-react"
import { useLanguage } from "./header"

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
      comment: t("review1Comment"),
      date: `22 ${t("august")}, 2025`,
      seeMore: t("seeMore")
    },
    {
      name: "Houcine MENOUER",
      rating: 5,
      comment: t("review2Comment"),
      date: `22 ${t("august")}, 2025`
    },
    {
      name: "HAKIM OUCHIKH",
      rating: 5,
      comment: t("review3Comment"),
      date: `22 ${t("august")}, 2025`
    },
    {
      name: "Boutaba MOUSTAFA",
      rating: 1,
      comment: t("review4Comment"),
      date: `22 ${t("august")}, 2025`
    },
    {
      name: "Kamel SOUADJI",
      rating: 5,
      comment: t("review5Comment"),
      date: `22 ${t("august")}, 2025`
    },
    {
      name: "Sarah BENALI",
      rating: 5,
      comment: t("review6Comment"),
      date: `21 ${t("august")}, 2025`
    },
    {
      name: "Ahmed KARIM",
      rating: 4,
      comment: t("review7Comment"),
      date: `20 ${t("august")}, 2025`
    },
    {
      name: "Fatima ZAHRA",
      rating: 5,
      comment: t("review8Comment"),
      date: `19 ${t("august")}, 2025`
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-3 w-3 sm:h-4 sm:w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return maxSlides - 1
      }
      return prev - 1
    })
  }

  // Determine slides to show based on screen size
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3
  }

  const slidesToShow = getSlidesToShow()
  const maxSlides = Math.max(1, reviews.length - slidesToShow + 1)

  return (
    <section id="reviews" className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("reviewsTitle")}</h2>
          </div>
        </AnimatedSection>

        {/* Reviews Carousel - Responsive */}
        <div className="relative mb-6 sm:mb-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
                  <AnimatedSection animation="fadeInUp" delay={index * 100}>
                    <div className="p-4 sm:p-6 h-full">
                      <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                        {review.comment}
                      </p>
                      <div className="mt-auto">
                        <div className="flex items-center space-x-2 mb-1">
                          <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                          <span className="font-semibold text-gray-900 text-xs sm:text-sm">{review.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons - Responsive */}
          {reviews.length > slidesToShow && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-1 sm:left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-colors duration-200 z-10"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-1 sm:right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-colors duration-200 z-10"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </>
          )}
        </div>

        {/* See All Reviews Link */}
        <AnimatedSection animation="fadeInUp" delay={300}>
          <div className="text-center mb-6 sm:mb-8">
            <a
              href="/avis-clients"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base transition-colors duration-200 cursor-pointer"
            >
              &gt; {t("seeAllReviews")}
            </a>
          </div>
        </AnimatedSection>

        {/* Trustpilot Section */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm flex-wrap">
              <span className="text-gray-700">{t("seeOur")}</span>
              <span className="font-bold text-gray-900">{t("trustpilotCount")}</span>
              <span className="text-gray-700">{t("trustpilotReviews")}</span>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 fill-current" />
                <span className="font-bold text-gray-900">Trustpilot</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}