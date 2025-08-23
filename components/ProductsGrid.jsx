"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import img1 from "../assets/bed1.jpeg";
import img2 from "../assets/chair.png";
import img3 from "../assets/table.jpg";
import img4 from "../assets/sofa.jpg";
import img5 from "../assets/palio.jpg";
import img6 from "../assets/books.jpg";
import img7 from "../assets/marbal.jpeg";
import img8 from "../assets/char2.png";
import img9 from "../assets/glass.png";
import img10 from "../assets/wall.png";
import Image from "next/image";
export default function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = [
    { id: "all", name: "All Products", count: 72 },
    { id: "living-room", name: "Living Room", count: 15 },
    { id: "bedroom", name: "Bedroom", count: 12 },
    { id: "dining-room", name: "Dining Room", count: 10 },
    { id: "office", name: "Office", count: 8 },
    { id: "outdoor", name: "Outdoor", count: 9 },
    { id: "storage", name: "Storage", count: 6 },
    { id: "kitchen", name: "Kitchen", count: 7 },
    { id: "decor", name: "Decor", count: 5 },
  ];

  const products = [
    {
      id: 1,
      name: "Modern Sectional Sofa",
      category: "Living Room",
      price: "$2,499",
      originalPrice: "$2,999",
      image: img1,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Rustic Dining Table",
      category: "Dining Room",
      price: "$1,899",
      originalPrice: "$2,299",
      image: img2,
      badge: "New Arrival",
    },
    {
      id: 3,
      name: "Luxury King Bed Frame",
      category: "Bedroom",
      price: "$1,599",
      originalPrice: "$1,899",
      image: img3,
      badge: "Sale",
    },
    {
      id: 4,
      name: "Executive Office Chair",
      category: "Office",
      price: "$899",
      originalPrice: "$1,199",
      image: img4,
      badge: "Featured",
    },
    {
      id: 5,
      name: "Patio Lounge Set",
      category: "Outdoor",
      price: "$1,299",
      originalPrice: "$1,599",
      image: img5,
      badge: "Trending",
    },
    {
      id: 6,
      name: "Minimalist Bookshelf",
      category: "Storage",
      price: "$499",
      originalPrice: "$699",
      image: img6,
      badge: "Hot Pick",
    },
    {
      id: 7,
      name: "Marble Kitchen Island",
      category: "Kitchen",
      price: "$2,199",
      originalPrice: "$2,599",
      image: img7,
      badge: "Premium",
    },
    {
      id: 8,
      name: "Abstract Wall Art",
      category: "Decor",
      price: "$199",
      originalPrice: "$299",
      image: img10,
      badge: "Editor's Choice",
    },
    {
      id: 9,
      name: "Velvet Recliner Chair",
      category: "Living Room",
      price: "$999",
      originalPrice: "$1,299",
      image: img10,
      badge: "Best Seller",
    },
    {
      id: 10,
      name: "Glass Coffee Table",
      category: "Living Room",
      price: "$799",
      originalPrice: "$999",
      image: img9,
      badge: "Sale",
    },
  ];

  useEffect(() => {
    const filtered =
      selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy]);

  useEffect(() => {
  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase().replace(" ", "-") === selectedCategory
        );

  // Sorting logic...
  setFilteredProducts(filtered);
}, [selectedCategory, sortBy]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 space-y-6 lg:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              : "space-y-6"
          }`}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${
                viewMode === "list" ? "flex items-center space-x-6 p-6" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === "Sale" || product.badge === "Summer Sale"
                      ? "bg-red-500 text-white"
                      : product.badge === "New Arrival"
                      ? "bg-green-500 text-white"
                      : product.badge === "Best Seller" ||
                        product.badge === "Bestseller"
                      ? "bg-amber-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div
                className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-48 h-32 flex-shrink-0" : "h-64"
                }`}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </Link>
                  <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-110">
                    <svg
                      className="w-5 h-5"
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
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className={`${viewMode === "list" ? "flex-1" : "p-6"}`}>
                <div className="mb-2">
                  <span className="text-sm text-amber-600 font-medium capitalize">
                    {product.category.replace("-", " ")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
