"use client"

import React from 'react'
import { Phone, Facebook, Instagram, Send } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useLanguage } from "./header"

export default function Footer() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      title: t("blogPost1"),
      image: "https://thumbs.dreamstime.com/b/setif-city-aerial-view-setif-city-center-algeria-265113510.jpg",
      date: "05/07/2019",
    },
    {
      title: t("blogPost2"),
      image: "https://image.shutterstock.com/image-photo/beautiful-landscape-lake-reflection-blue-600w-2614398167.jpg",
      date: "05/07/2019",
    },
    {
      title: t("blogPost3"),
      image: "https://tarasmulticulturaltable.com/wp-content/uploads/2013/09/Kefta-Mkaouara-1-of-2-e1673719913422.jpg",
      date: "05/07/2019",
    },
  ]

  const serviceLinks = [
    t("contactUs"),
    t("customerTestimonials"),
    t("charterPrivacy"),
    t("legalNotices"),
    t("rentalConditionsFooter"),
    t("cancellationConditions"),
  ]

  return (
    <footer className="bg-gray-50 relative overflow-hidden">
      {/* Thinner red band above footer */}
      <div className="w-full h-0.5 bg-red-500"></div>

      {/* Decorative background pattern - using existing map image */}
      <div 
        className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/map-alger-static.webp')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Address Column */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 relative">
              {t("address")}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-500"></div>
            </h3>
            <div className="mb-6 sm:mb-8">
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                {t("footerAddress")}
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 relative text-xs sm:text-sm">
                {t("newsletter")}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-500"></div>
              </h4>
              <div className="flex bg-white rounded border border-gray-200 overflow-hidden shadow-sm">
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="flex-1 px-3 sm:px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-xs sm:text-sm bg-transparent"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 px-2 sm:px-3 py-2 rounded-none border-0 shadow-none">
                  <Send className="h-3 w-3 text-white" />
                </Button>
              </div>
            </div>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 relative">
              {t("serviceClient")}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-500"></div>
            </h3>
            <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
              {serviceLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 relative text-xs sm:text-sm">
                {t("followUs")}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-500"></div>
              </h4>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
                <a
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-200"
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Column */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 relative">
              {t("blog")}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-500"></div>
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {blogPosts.map((post, index) => (
                <Link key={index} href="#" className="block group">
                  <div className="flex space-x-2">
                    <div className="flex-shrink-0">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-12 h-9 sm:w-16 sm:h-12 object-cover rounded group-hover:opacity-80 transition-opacity duration-200"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium text-black group-hover:text-blue-600 transition-colors duration-200 leading-tight mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 space-x-1">
                        <span className="inline-flex items-center">
                          <svg className="w-2 h-2 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {post.date}
                        </span>
                        <span className="text-orange-500 hover:text-orange-600 cursor-pointer font-medium">
                          Voir plus
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-blue-900 py-2 text-center text-white text-xs">
        © Copyright 2025 Safar El Amir. All rights reserved.
      </div>
    </footer>
  )
}