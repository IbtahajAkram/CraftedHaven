"use client"
import { useState, useEffect, useRef } from "react"

export default function AboutStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    customers: 0,
    products: 0,
    years: 0,
    satisfaction: 0,
  })
  const sectionRef = useRef(null)

  const finalValues = {
    customers: 50000,
    products: 1200,
    years: 15,
    satisfaction: 99,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          customers: Math.floor(finalValues.customers * progress),
          products: Math.floor(finalValues.products * progress),
          years: Math.floor(finalValues.years * progress),
          satisfaction: Math.floor(finalValues.satisfaction * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(finalValues)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      value: counters.customers.toLocaleString(),
      suffix: "+",
      label: "Happy Customers",
      description: "Families we've helped create beautiful homes",
    },
    {
      value: counters.products.toLocaleString(),
      suffix: "+",
      label: "Products Crafted",
      description: "Unique pieces designed and manufactured",
    },
    {
      value: counters.years,
      suffix: "+",
      label: "Years of Excellence",
      description: "Decades of furniture craftsmanship experience",
    },
    {
      value: counters.satisfaction,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Customer happiness and repeat business",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-amber-600 to-amber-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            These numbers represent more than statistics – they represent relationships, trust, and the countless homes
            we've helped transform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xl font-semibold text-amber-100 mb-2">{stat.label}</div>
                <div className="text-amber-200 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-amber-100 mb-8">Ready to become part of our story?</p>
          <button className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}
