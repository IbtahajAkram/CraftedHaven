"use client"
import { useState, useEffect, useRef } from "react"
import img1 from "../assets/bed1.jpeg"
import img2 from "../assets/char2.png"
import img3 from "../assets/furniture8.png"
import img4 from "../assets/books.jpg"
import Image from "next/image"
export default function AboutStory() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Journey Started With A Simple Dream
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In 2008, our founder Sarah Mitchell had a vision: to create furniture that doesn't just fill a space,
                but transforms it into a sanctuary. What started as a small workshop in Portland has grown into a
                trusted name in premium furniture design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every piece we create tells a story of dedication, craftsmanship, and attention to detail. We believe
                that furniture should be more than functional – it should inspire, comfort, and bring joy to everyday
                life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve customers across the country, but our commitment remains the same: creating
                exceptional furniture that stands the test of time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">2008</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Story Images */}
          <div
            className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src={img1}
                  alt="Our workshop"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <Image
                  src={img2}
                  alt="Craftsmanship detail"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src={img3}
                  alt="Design process"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <Image
                  src={img4}
                  alt="Finished furniture"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
