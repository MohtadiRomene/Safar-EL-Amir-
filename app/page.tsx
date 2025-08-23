import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import VehicleCarousel from "../components/vehicle-carousel"
import Agencies from "../components/agencies"
import Reviews from "../components/reviews"
import FAQ from "../components/faq"
import Footer from "../components/footer"
import WhatsAppWidget from "../components/whatsapp-widget"
import ClientProvider from "../components/client-provider"

export default function Home() {
  return (
    <ClientProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <VehicleCarousel />
          <Agencies />
          <Reviews />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </ClientProvider>
  )
}
