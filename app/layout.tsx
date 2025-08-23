import React from 'react'
import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Safar El Amir | Location Voiture Algérie',
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
    <html lang="en" style={{ fontFamily: GeistSans.style.fontFamily }}>
      <body
        style={{
          // variables accessibles dans ton CSS si besoin
          ['--font-sans' as any]: GeistSans.variable,
          ['--font-mono' as any]: GeistMono.variable,
        }}
      >
        {children}
      </body>
    </html>
  )
}
