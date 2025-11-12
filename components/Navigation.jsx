"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useCart } from "../contexts/CartContext"
import { useWishlist } from "../contexts/WishlistContext"
import {  usePathname } from "next/navigation";
 

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { getTotalItems } = useCart()
  const { items: wishlistItems } = useWishlist()
  const pathname = usePathname(); // current route path
// console.log(params,"params")
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all  duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div> */}
            <span
              className={`font-bold text-2xl transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-[#f2800e]"
              }`}
            >
              CraftedHaven
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
             {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`font-medium transition-all duration-300 hover:scale-105 ${
            scrolled && pathname === "/" 
              ? "text-gray-700 hover:text-amber-600" 
              : "text-[#1f1f1f] font-bold hover:text-amber-600"
          }`}
        >
          {item.name}
        </Link>
      ))}

            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              className={`relative p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                scrolled ? "text-gray-700 hover:text-amber-600" : "text-gray-600 hover:text-amber-300"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            {/* Cart Icon */}
            <Link
              href="/cart"
              className={`relative p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                scrolled ? "text-gray-700 hover:text-amber-600" : "text-gray-500 hover:text-amber-300"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Icons */}
              <div className="flex items-center justify-around px-4 py-2 border-t text-black border-gray-200">
                <Link
                  href="/wishlist"
                  className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    color="black"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
                <Link
                  href="/cart"
                  className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    color="black"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
                    />
                  </svg>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
              </div>
              <div className="px-4 pt-2">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}
