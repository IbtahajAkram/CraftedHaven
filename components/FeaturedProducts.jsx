"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();

  const products = [
 
      {
    id: 5,
    name: "Patio Lounge Set",
    category: "Outdoor",
    price: 1299,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 110,
    inStock: true,
   images: [
      "https://m.media-amazon.com/images/I/91NSTuncjgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91w5XkCzhhS._UF894,1000_QL80_.jpg"
    ],
    colors: [
      { name: "gray", label: "Gray", hex: "#808080" },
      { name: "beige", label: "Beige", hex: "#F5F5DC" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 1299 }
    ],
    description: "Weather-resistant patio lounge set for outdoor relaxation.",
    features: [
      "Durable all-weather materials",
      "Comfortable cushions",
      "Stylish outdoor design",
      "Lightweight for easy relocation",
      "Easy to clean"
    ],
    specifications: {
      Dimensions: '78" W x 36" D x 32" H',
      Weight: "120 lbs",
      Material: "Synthetic wicker, fabric cushions",
      Assembly: "Minimal assembly",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Trending"
  },
  {
    id: 6,
    name: "Minimalist Bookshelf",
    category: "Storage",
    price: 499,
    originalPrice: 699,
    rating: 4.5,
    reviews: 60,
    inStock: true,
    images: [
      "https://theminimalistvegan.com/wp-content/uploads/2024/01/Best-Minimalist-Bookshelf-Design-Ideas.jpg",
      "https://furniturepalacesuperstore.com/cdn/shop/files/801574_01xHD_800x.jpg?v=1755406447"
    ],
    colors: [
      { name: "white", label: "White", hex: "#FFFFFF" },
      { name: "oak", label: "Natural Oak", hex: "#C19A6B" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 499 }
    ],
    description: "Modern minimalist bookshelf with clean lines and ample storage.",
    features: [
      "Solid wood construction",
      "Adjustable shelves",
      "Clean minimalist design",
      "Lightweight",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '30" W x 12" D x 72" H',
      Weight: "50 lbs",
      Material: "Wood, MDF",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "2 years"
    },
    badge: "Hot Pick"
  },

   {
    id: 7,
    name: "Classic Leather Recliner",
    category: "Living Room",
    price: 1299,
    originalPrice: 2599,
    rating: 4.7,
    reviews: 75,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/41Qk7fH6+VL._AC_US750_.jpg",
      "https://m.media-amazon.com/images/I/71wo1jDHBaL._AC_SL1500_.jpg"
    ],
    colors: [
      { name: "brown", label: "Chocolate Brown", hex: "#8B4513" },
      { name: "black", label: "Black", hex: "#000000" }
    ],
    sizes: [
      { name: "single", label: "Single Seat", price: 1299 }
    ],
    description: "Comfortable classic leather recliner with footrest and adjustable back.",
    features: [
      "Genuine leather upholstery",
      "Adjustable reclining positions",
      "Sturdy wooden frame",
      "Smooth recline mechanism",
      "2-year warranty"
    ],
    specifications: {
      Dimensions: '40" W x 36" D x 42" H',
      Weight: "80 lbs",
      Material: "Leather, hardwood frame",
      Assembly: "Minimal assembly required",
      Care: "Use leather cleaner",
      Warranty: "2 years"
    },
    badge: "Bestseller"
  },
  {
    id: 8,
    name: "Convertible Sofa Bed",
    category: "Living Room",
    price: 1399,
    originalPrice: 1699,
    rating: 4.6,
    reviews: 68,
    inStock: true,
    images: [
      "https://i5.walmartimages.com/seo/3-1-Convertible-Sleeper-Sofa-Bed-55-Modern-Convertible-Sofa-Bed-2-Detachable-Arm-Pockets-Velvet-Pull-Couch-Pull-Bed-Living-Room-Furniture-Black_d72a3e10-ad45-4158-a4c4-c6ed88bcda43.b0dc8bbd1c9e25a2d56c77846694fa42.jpeg",
      "https://m.media-amazon.com/images/I/81VDg3PXV2L.jpg"
    ],
    colors: [
      { name: "gray", label: "Charcoal Gray", hex: "#36454F" },
      { name: "blue", label: "Ocean Blue", hex: "#1E3A5F" }
    ],
    sizes: [
      { name: "standard", label: "Standard (80\")", price: 1399 },
      { name: "large", label: "Large (100\")", price: 1599 }
    ],
    description: "Convertible sofa bed that transforms easily for guests.",
    features: [
      "Modern design",
      "Durable fabric",
      "Easy transformation",
      "Comfortable mattress",
      "5-year warranty"
    ],
    specifications: {
      Dimensions: '80" W x 36" D x 32" H',
      Weight: "110 lbs",
      Material: "Fabric upholstery, hardwood frame",
      Assembly: "Required",
      Care: "Vacuum and spot clean",
      Warranty: "5 years"
    },
    badge: "Trending"
  },
  {
    id: 9,
    name: "Industrial Coffee Table",
    category: "Living Room",
    price: 699,
    originalPrice: 899,
    rating: 4.4,
    reviews: 55,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/813KRCslTdL._AC_SL1500_.jpg"
    ],
    colors: [
      { name: "black", label: "Black", hex: "#000000" },
      { name: "brown", label: "Brown", hex: "#8B4513" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 699 }
    ],
    description: "Industrial style coffee table with metal frame and wooden top.",
    features: [
      "Durable metal frame",
      "Solid wood top",
      "Rustic industrial look",
      "Easy to clean",
      "Lightweight yet sturdy"
    ],
    specifications: {
      Dimensions: '48" W x 24" D x 18" H',
      Weight: "60 lbs",
      Material: "Wood, metal",
      Assembly: "Required",
      Care: "Wipe with dry cloth",
      Warranty: "2 years"
    },
    badge: "Hot"
  },
  {
    id: 14,
    name: "Adjustable Standing Desk",
    category: "Office",
    price: 999,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 90,
    inStock: true,
    images: [
      "https://i5.walmartimages.com/seo/MXTARK-Height-Adjustable-Electric-Standing-Desk-Roller-with-Memory-Settings-it-Stand-Desk-with-Splice-Board-Black-Finish-55_66c659d0-7a97-42cf-9fb8-a2133a3bd670.8ee19b122f7fe409ab062a802fad05dd.jpeg"
    ],
    colors: [
      { name: "black", label: "Black", hex: "#000000" },
      { name: "white", label: "White", hex: "#FFFFFF" }
    ],
    sizes: [
      { name: "standard", label: "48-inch", price: 999 },
      { name: "large", label: "60-inch", price: 1199 }
    ],
    description: "Ergonomic adjustable desk for sitting or standing work.",
    features: [
      "Electric height adjustment",
      "Sturdy steel frame",
      "Spacious work surface",
      "Cable management included",
      "5-year warranty"
    ],
    specifications: {
      Dimensions: '48" W x 24" D x 28-47" H',
      Weight: "85 lbs",
      Material: "Steel, MDF",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "5 years"
    },
    badge: "Best Seller"
  },
  {
    id: 15,
    name: "Queen Upholstered Bed",
    category: "Bedroom",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 120,
    inStock: true,
    images: [
      "https://multiwood.com.pk/cdn/shop/files/1multiwoodbeds1.jpg?v=1685473893",
      "https://rjdfurniture.com/cdn/shop/files/WEBSITE_PICTURES_12.jpg?v=1745570841"
    ],
    colors: [
      { name: "gray", label: "Charcoal Gray", hex: "#36454F" },
      { name: "blue", label: "Navy Blue", hex: "#1E3A5F" }
    ],
    sizes: [
      { name: "queen", label: "Queen", price: 1299 },
      { name: "king", label: "King", price: 1499 }
    ],
    description: "Elegant upholstered bed with soft fabric and sturdy frame.",
    features: [
      "Fabric upholstered headboard",
      "Solid wood frame",
      "Slatted base",
      "Modern design",
      "10-year warranty"
    ],
    specifications: {
      Dimensions: '60" W x 80" L x 48" H',
      Weight: "180 lbs",
      Material: "Wood, fabric",
      Assembly: "Required",
      Care: "Spot clean fabric",
      Warranty: "10 years"
    },
    badge: "New Arrival"
  },
  {
    id: 16,
    name: "Outdoor Dining Set",
    category: "Outdoor",
    price: 1299,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 85,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/91ZH9mbF7bL._AC_SL1500_.jpg",
      
    ],
    colors: [
      { name: "gray", label: "Gray", hex: "#808080" },
      { name: "white", label: "White", hex: "#FFFFFF" }
    ],
    sizes: [
      { name: "4-seater", label: "4-Seater", price: 1299 },
      { name: "6-seater", label: "6-Seater", price: 1499 }
    ],
    description: "Weather-resistant outdoor dining set for patios and gardens.",
    features: [
      "Durable materials",
      "Comfortable seating",
      "Rust-resistant frame",
      "Easy to assemble",
      "Stylish design"
    ],
    specifications: {
      Dimensions: '72" L x 36" W x 30" H',
      Weight: "140 lbs",
      Material: "Metal, fabric cushions",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Trending"
  },
  {
    id: 17,
    name: "Modern Accent Chair",
    category: "Living Room",
    price: 499,
    originalPrice: 699,
    rating: 4.5,
    reviews: 50,
    inStock: true,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCQOeoVOCVnQI5eyWr0RTU7Mt6_Srygl2XQ&s",
      "https://images.thdstatic.com/productImages/983c2276-2f5f-44ff-aa9c-918dffccdbf2/svn/blue-jayden-creation-accent-chairs-chmjm002-blue-s2-e1_600.jpg",
      "https://i.pinimg.com/736x/93/9c/43/939c43fc6d2c3c41037e493d1803a7da.jpg"
    ],
    colors: [
      { name: "blue", label: "Royal Blue", hex: "#4169E1" },
      { name: "gray", label: "Gray", hex: "#808080" }
    ],
    sizes: [
      { name: "standard", label: "Single Seat", price: 499 }
    ],
    description: "Stylish modern accent chair for living rooms and bedrooms.",
    features: [
      "Soft fabric upholstery",
      "Sturdy wooden legs",
      "Comfortable seating",
      "Contemporary design",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '28" W x 30" D x 32" H',
      Weight: "40 lbs",
      Material: "Fabric, wood",
      Assembly: "Required",
      Care: "Vacuum regularly",
      Warranty: "2 years"
    },
    badge: "Hot"
  },
  {
    id: 18,
    name: "Foldable Storage Ottoman",
    category: "Storage",
    price: 149,
    originalPrice: 199,
    rating: 4.3,
    reviews: 30,
    inStock: true,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRNWoyTgH0ga69JiIaT7te_bT4IW06B_CIw&s"
    ],
    colors: [
      { name: "gray", label: "Gray", hex: "#808080" },
      { name: "beige", label: "Beige", hex: "#F5F5DC" }
    ],
    sizes: [
      { name: "standard", label: "Standard", price: 149 }
    ],
    description: "Foldable ottoman for storage and seating.",
    features: [
      "Durable fabric",
      "Hidden storage inside",
      "Lightweight and portable",
      "Collapsible design",
      "Easy to clean"
    ],
    specifications: {
      Dimensions: '18" W x 18" D x 18" H',
      Weight: "10 lbs",
      Material: "Fabric, MDF",
      Assembly: "None",
      Care: "Wipe with damp cloth",
      Warranty: "1 year"
    },
    badge: "Popular"
  },
  {
    id: 19,
    name: "Corner L-Shaped Desk",
    category: "Office",
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    reviews: 72,
    inStock: true,
    images: [
      "https://img.drz.lazcdn.com/static/pk/p/75e3149be7134293c415fe214246c1c3.jpg_720x720q80.jpg"
    ],
    colors: [
      { name: "black", label: "Black", hex: "#000000" },
      { name: "oak", label: "Natural Oak", hex: "#C19A6B" }
    ],
    sizes: [
      { name: "standard", label: "L-Shaped", price: 699 }
    ],
    description: "Spacious L-shaped desk for home office or study.",
    features: [
      "Sturdy MDF and metal construction",
      "Ample workspace",
      "Cable management system",
      "Modern design",
      "Easy assembly"
    ],
    specifications: {
      Dimensions: '55" W x 55" D x 30" H',
      Weight: "75 lbs",
      Material: "MDF, metal",
      Assembly: "Required",
      Care: "Wipe with damp cloth",
      Warranty: "3 years"
    },
    badge: "Best Seller"
  },
  {
    id: 20,
    name: "Reclining Leather Sofa",
    category: "Living Room",
    price: 1999,
    originalPrice: 2399,
    rating: 4.9,
    reviews: 140,
    inStock: true,
    images: [
      "https://m.media-amazon.com/images/I/71M1quiFmsL._AC_SL1500_.jpg",
      "https://shopforever.pk/wp-content/uploads/2021/09/64878496_2279050072188439_1841913505326825472_o.jpg"
    ],
    colors: [
      { name: "brown", label: "Chocolate Brown", hex: "#8B4513" },
      { name: "black", label: "Black", hex: "#000000" }
    ],
    sizes: [
      { name: "3-seater", label: "3-Seater", price: 1999 },
      { name: "4-seater", label: "4-Seater", price: 2299 }
    ],
    description: "Luxurious reclining leather sofa with adjustable footrest and premium comfort.",
    features: [
      "Genuine leather upholstery",
      "Reclining backrest",
      "Sturdy frame",
      "High-density foam cushions",
      "5-year warranty"
    ],
    specifications: {
      Dimensions: '88" W x 40" D x 38" H',
      Weight: "180 lbs",
      Material: "Leather, hardwood frame",
      Assembly: "Minimal assembly required",
      Care: "Leather cleaner recommended",
      Warranty: "5 years"
    },
    badge: "Featured"
  }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that combine style, comfort, and craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === "Sale"
                      ? "bg-red-500 text-white"
                      : product.badge === "New Arrival"
                      ? "bg-green-500 text-white"
                      : product.badge === "Best Seller"
                      ? "bg-amber-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative h-64">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                />
                <div
                  className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                {/* Quick Actions */}
                <div
                  className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300 ${
                    hoveredProduct === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </Link>

                  <button
                    onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      isInWishlist(product.id)
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-900 hover:bg-amber-500 hover:text-white"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill={isInWishlist(product.id) ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <button
                    onClick={() => addItem(product)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center bg-gray-900 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
