"use client"
import { useState } from "react"

export default function ContactFAQ() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all furniture items in original condition. Custom pieces may have different terms. Please contact us for specific details about your purchase.",
    },
    {
      question: "Do you offer delivery and setup services?",
      answer:
        "Yes! We provide white-glove delivery and setup service for all orders over $1,000. For smaller orders, standard delivery is available. Our team will handle everything from delivery to placement in your desired room.",
    },
    {
      question: "Can I customize existing furniture pieces?",
      answer:
        "Many of our pieces can be customized in terms of fabric, finish, dimensions, and hardware. Our design team will work with you to create the perfect piece for your space.",
    },
    {
      question: "How long does custom furniture take?",
      answer:
        "Custom furniture typically takes 8-12 weeks depending on the complexity and materials chosen. We'll provide you with a detailed timeline when you place your order and keep you updated throughout the process.",
    },
    {
      question: "Do you work with interior designers?",
      answer:
        "Yes, we have a trade program for interior designers and decorators. We offer special pricing, dedicated support, and expedited delivery for trade professionals. Contact us to learn more about our trade program.",
    },
    {
      question: "What financing options do you offer?",
      answer:
        "We offer several financing options including 0% APR for qualified buyers, extended payment plans, and lease-to-own programs. Our financing partners can help you find the best option for your budget.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our products and services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div
                  className={`flex-shrink-0 w-6 h-6 text-amber-600 transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  )
}
