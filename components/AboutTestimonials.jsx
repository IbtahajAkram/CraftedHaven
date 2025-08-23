"use client"
import { useState, useEffect } from "react"
import img1 from "../assets/human1.jpeg"
import img2 from "../assets/human2.jpeg"
import img3 from "../assets/human3.jpeg"
import img4 from "../assets/human4.png"
import Image from "next/image"
export default function AboutTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Interior Designer",
      image: img1,
      content:
        "CraftedHaven has been my go-to source for premium furniture for over 5 years. Their attention to detail and commitment to quality is unmatched in the industry.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      role: "Homeowner",
      image: img1,
      content:
        "The dining set we purchased has become the centerpiece of our home. The craftsmanship is exceptional, and it's held up beautifully over the years.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Restaurant Owner",
      image: img3,
      content:
        "We furnished our entire restaurant with CraftedHaven pieces. The durability and style have impressed both our staff and customers. Highly recommended!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it – hear from the people who have transformed their spaces with CraftedHaven.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <Image
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-amber-600">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-amber-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
