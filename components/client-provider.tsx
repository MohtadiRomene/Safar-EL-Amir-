"use client"

import React, { useState, useEffect } from "react"
import { LanguageProvider } from "./header"

interface ClientProviderProps {
  children: React.ReactNode
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white" suppressHydrationWarning>
        {/* Placeholder content for SSR */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          <nav className="max-w-full px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-8">
                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                <div className="h-8 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </nav>
        </div>
        <main>
          {/* Add placeholder content for other components */}
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
                <div className="h-4 w-96 bg-gray-200 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return <LanguageProvider>{children}</LanguageProvider>
}

