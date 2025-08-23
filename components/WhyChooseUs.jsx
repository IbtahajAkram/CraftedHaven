"use client"
import { useState, useEffect, useRef } from "react"

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: "🎨",
      title: "Premium Design",
      description:
        "Each piece is thoughtfully designed by our team of expert designers to blend seamlessly with your lifestyle.",
    },
    {
      icon: "🌿",
      title: "Sustainable Materials",
      description: "We use only responsibly sourced, eco-friendly materials that are built to last for generations.",
    },
    {
      icon: "🔨",
      title: "Expert Craftsmanship",
      description:
        "Our skilled artisans bring decades of experience to create furniture that's both beautiful and functional.",
    },
    {
      icon: "🚚",
      title: "Free Delivery",
      description: "Enjoy complimentary white-glove delivery and setup service for all orders over $1,000.",
    },
    {
      icon: "🛡️",
      title: "Lifetime Warranty",
      description: "We stand behind our quality with comprehensive warranty coverage on all our furniture pieces.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our dedicated customer service team is always ready to help with any questions or concerns.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose CraftedHaven?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional furniture that transforms your space while supporting sustainable
            practices and superior craftsmanship.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-amber-200">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-amber-200">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-amber-200">Products Available</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-amber-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
