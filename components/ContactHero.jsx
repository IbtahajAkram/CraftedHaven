"use client"
import { useState, useEffect } from "react"

export default function ContactHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-800"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/20 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-md animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Have questions about our furniture? Need design consultation? We're here to help bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  )
}
