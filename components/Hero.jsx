"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import hero from "../assets/furniturehero1.jpg"
import hero1 from "../assets/furniturehero2.png"
import hero2 from "../assets/furniturehero4.png"
import hero3 from "../assets/furniturehero6.png"
import hero4 from "../assets/furniturehero7.png"
import hero5 from "../assets/furniture10.png"
import hero6 from "../assets/furniture8.png"
import Image from "next/image"
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Transform Your Space",
      subtitle: "Premium Furniture Collection",
      description:
        "Discover handcrafted furniture pieces that blend comfort, style, and functionality to create your perfect living space.",
      image: hero,
    }, {
      title: "Elevate Your Lifestyle",
      subtitle: "Modern Living Essentials",
      description:
        "From sleek designs to functional decor, explore products that redefine the way you live every day.",

      image: hero1,
    },
    {
      title: "Luxury Comfort",
      subtitle: "Bedroom Inspirations",
      description:
        "Turn your bedroom into a sanctuary of peace and luxury with our premium collection of furniture and decor.",
     image: hero2,
    },
    {
      title: "Outdoor Living",
      subtitle: "Garden & Patio Collection",
      description:
        "Enjoy the outdoors with stylish, durable, and weather-resistant furniture designed for your perfect gatherings.",
     image: hero3,
    },   {
     title: "Minimalist Aesthetics",
      subtitle: "Scandinavian Designs",
      description:
        "Embrace simplicity and elegance with clean, functional furniture inspired by Scandinavian minimalism.",
        image: hero4,
    },

       {
      title: "Sustainable Design",
      subtitle: "Eco-Friendly Materials",
      description:
        "We're committed to sustainability, using responsibly sourced materials and eco-friendly manufacturing processes.",
      image: hero5,
    },
       {
      title: "Sustainable Design",
      subtitle: "Eco-Friendly Materials",
      description:
        "We're committed to sustainability, using responsibly sourced materials and eco-friendly manufacturing processes.",
      image: hero6,
    },

  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="  z-10"></div>
  <Image
    src={slide.image || "/placeholder.svg"}
    alt={slide.title}
    fill
    className="object-cover"
    quality={100}
    priority
    placeholder="empty"
  />
</div>
      ))}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-20 w-24 h-24 bg-amber-600/30 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <p className="text-amber-400 font-medium text-lg tracking-wide uppercase">
                  {slides[currentSlide].subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  {slides[currentSlide].title}
                </h1>
              </div>

              <p className="text-xl text-gray-100 leading-relaxed max-w-lg">{slides[currentSlide].description}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
                >
                  Explore Collection
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Watch Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-amber-500 scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm font-medium rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/50 relative overflow-hidden">
            <div className="w-full h-4 bg-amber-500 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
