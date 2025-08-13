"use client"

import { Phone, Facebook, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "./header"

export default function Footer() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      title: "Sétif : Perle de l'Est Algérien - Guide de Voyage",
      image: "/images/bridge.jpg",
      date: "05/07/2019",
    },
    {
      title: "Jijel : Mini Guide pour une Escapade Côtière",
      image: "/images/monument.jpg",
      date: "05/07/2019",
    },
    {
      title: "l'Aéroport d'Alger Houari-Boumédiène : le 3ème plus important aéroport en Afrique",
      image: "/images/port.jpg",
      date: "05/07/2019",
    },
  ]

  const serviceLinks = [
    "Contactez-nous",
    "Témoignages clients",
    "Charte & confidentialité",
    "Mentions légales",
    "Conditions de location",
    "Conditions d'annulation",
  ]

  return (
    <footer className="bg-gray-100 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 border-2 border-gray-400 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Adresse Column */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3 relative">
              {t("address")}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></div>
            </h3>
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed text-sm">
                Nous sommes présents sur plusieurs aéroports en Algérie: aéroport d'Alger, Oran, Tlemcen, Chlef,
                Constantine, Sétif, Annaba, Jijel, Skikda, Biskra, Bejaia et Batna.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3 relative text-sm">
                {t("newsletter")}
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></div>
              </h4>
              <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="flex-1 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-none">
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Service Client Column */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3 relative">
              {t("serviceClient")}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></div>
            </h3>
            <div className="space-y-2 mb-6">
              {serviceLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3 relative text-sm">
                {t("followUs")}
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></div>
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200"
                >
                  {/* Placeholder for another social media icon */}
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/1234567890"
                  className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Column */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-3 relative">
              {t("blog")}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></div>
            </h3>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <Link key={index} href="#" className="block group">
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-16 h-12 object-cover rounded group-hover:opacity-80 transition-opacity duration-200"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-tight mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span className="ml-2 text-orange-500 hover:text-orange-600 cursor-pointer">Voir plus</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10">
          <div className="bg-blue-900 text-white py-3 px-5 rounded-t-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xs">
                <span>https://www.instagram.com/safarelamir/?hl=fr</span>
              </div>
              <div className="text-xs mt-2 md:mt-0">
                <span>{t("copyright")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
