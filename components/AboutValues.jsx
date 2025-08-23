"use client"
import { useState, useEffect, useRef } from "react"

export default function AboutValues() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "We're committed to environmental responsibility, using sustainably sourced materials and eco-friendly manufacturing processes that protect our planet for future generations.",
    },
    {
      icon: "✨",
      title: "Quality Craftsmanship",
      description:
        "Every piece is meticulously crafted by skilled artisans who take pride in their work, ensuring that each item meets our exacting standards for beauty and durability.",
    },
    {
      icon: "🎨",
      title: "Timeless Design",
      description:
        "Our designs transcend trends, focusing on classic aesthetics and functional beauty that will remain relevant and cherished for years to come.",
    },
    {
      icon: "🤝",
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We provide exceptional service, from initial consultation to after-sale support, ensuring your complete happiness with every purchase.",
    },
    {
      icon: "🔧",
      title: "Innovation",
      description:
        "We continuously explore new techniques, materials, and designs to push the boundaries of furniture craftsmanship while maintaining our commitment to quality.",
    },
    {
      icon: "💎",
      title: "Authenticity",
      description:
        "We believe in honest craftsmanship and transparent business practices, building trust through genuine quality and authentic relationships with our customers.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do, from the materials we choose to the relationships we build with our
            customers and community.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
