"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from "./ui/button"
import { useLanguage } from "./header"
import Link from "next/link"

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: t("faqQ1"),
      answer: t("faqA1"),
      moreInfo: t("faqA1More"),
    },
    {
      question: t("faqQ2"),
      answer: t("faqA2"),
      moreInfo: t("faqA2More"),
    },
    {
      question: t("faqQ3"),
      answer: t("faqA3"),
      moreInfo: t("faqA3More"),
    },
    {
      question: t("faqQ4"),
      answer: t("faqA4"),
      moreInfo: t("faqA4More"),
    },
    {
      question: t("faqQ5"),
      answer: t("faqA5"),
      moreInfo: t("faqA5More"),
    },
    {
      question: t("faqQ6"),
      answer: t("faqA6"),
      moreInfo: t("faqA6More"),
    },
    {
      question: t("faqQ7"),
      answer: t("faqA7"),
      moreInfo: t("faqA7More"),
    },
    {
      question: t("faqQ8"),
      answer: t("faqA8"),
      moreInfo: t("faqA8More"),
    },
    {
      question: t("faqQ9"),
      answer: t("faqA9"),
      moreInfo: t("faqA9More"),
    },
    {
      question: t("faqQ10"),
      answer: t("faqA10"),
      moreInfo: t("faqA10More"),
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left side - Content */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
              {t("faqTitle")} <span className="text-red-600">{t("faqSubtitle")}</span>
            </h2>
            <div className="prose prose-base text-gray-600 mb-4 sm:mb-6">
              <p className="text-sm leading-relaxed mb-3 sm:mb-4">
                {t("faqIntro1")}
              </p>
              <p className="text-sm leading-relaxed mb-3 sm:mb-4">
                {t("faqIntro2")}
              </p>
              <p className="text-sm leading-relaxed mb-3 sm:mb-4">
                {t("faqIntro3")}
              </p>
              <p className="text-sm leading-relaxed mb-4 sm:mb-6">
                {t("faqIntro4")}
              </p>
            </div>
            <div>
              <Link href="/agences" className="text-orange-500 hover:text-orange-600 text-sm underline font-medium transition-colors duration-200">
                {t("readMore")}
              </Link>
            </div>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-1">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full bg-white border border-blue-200 text-left flex items-center hover:bg-gray-50 transition-colors duration-200 relative overflow-hidden"
                  >
                    <span className="flex-1 px-3 sm:px-5 py-3 sm:py-4 font-medium text-gray-900 text-xs sm:text-sm pr-12 sm:pr-20 leading-relaxed">
                      {faq.question}
                    </span>
                    {/* Parallélogramme bleu */}
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-blue-600 flex items-center justify-center"
                      style={{
                        clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      }}
                    >
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-white ml-1 sm:ml-2" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-3 sm:px-5 py-3 sm:py-4 bg-blue-50 border-l border-r border-b border-blue-200">
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-2">{faq.answer}</p>
                      <p className="text-xs text-gray-600 mb-2 sm:mb-3">{faq.moreInfo}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}