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
import AnimatedSection from "../components/animated-section"

export const revalidate = 3600

export default function Home() {
  return (
    <ClientProvider>
      <div className="min-h-screen bg-white">
        {/* Header avec animation d'entrée depuis le haut */}
        <AnimatedSection animation="fadeInDown" delay={0} duration={0.6}>
          <Header />
        </AnimatedSection>

        <main>
          {/* Hero Section - Animation zoom-in pour un effet d'impact */}
          <AnimatedSection animation="zoomIn" delay={0.2} duration={1.2}>
            <Hero />
          </AnimatedSection>

          {/* Vehicle Carousel - Animation slide depuis la droite */}
          <AnimatedSection animation="fadeInRight" delay={0.1} duration={1.0}>
            <VehicleCarousel />
          </AnimatedSection>

          {/* Agencies Section - Animation slide depuis la gauche */}
          <AnimatedSection animation="fadeInLeft" delay={0.15} duration={1.0}>
            <Agencies />
          </AnimatedSection>

          {/* Reviews Section - Animation fade-up avec zoom */}
          <AnimatedSection animation="fadeInUp" delay={0.2} duration={1.0}>
            <Reviews />
          </AnimatedSection>

          {/* FAQ Section - Animation slide depuis le bas */}
          <AnimatedSection animation="fadeInUp" delay={0.25} duration={1.0}>
            <FAQ />
          </AnimatedSection>
        </main>

        {/* Footer - Affichage direct sans animation */}
        <Footer />

        {/* WhatsApp Widget - Animation spéciale depuis la droite */}
        <AnimatedSection animation="fadeInRight" delay={0.5} duration={0.6}>
          <WhatsAppWidget />
        </AnimatedSection>
      </div>
    </ClientProvider>
  )
}
