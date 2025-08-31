import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { LanguageProvider } from '../components/header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.safarelamir.com'),
  title: 'Safar El Amir | Location Voiture Algérie',
  description:
    "Safar El Amir propose la location de voitures en Algérie au meilleur prix. Réservation rapide, véhicules récents, agences dans plusieurs villes.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Safar El Amir | Location Voiture Algérie',
    description:
      "Location de voitures en Algérie: large flotte, réservation simple, tarifs compétitifs.",
    url: 'https://www.safarelamir.com',
    siteName: 'Safar El Amir',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'Safar El Amir',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
