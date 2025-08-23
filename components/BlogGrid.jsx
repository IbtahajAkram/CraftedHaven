"use client"
import { useState } from "react"
import Link from "next/link"

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Web Development", "React", "AI/ML", "JavaScript", "CSS", "Node.js"]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Coming in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks and tools that will revolutionize how we build applications.",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Mastering React Server Components: A Complete Guide",
      excerpt:
        "Learn how to leverage React Server Components to build faster, more efficient applications with better user experience and improved performance metrics.",
      author: "Mike Chen",
      date: "Dec 12, 2023",
      readTime: "12 min read",
      category: "React",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "AI and Machine Learning in Modern Applications",
      excerpt:
        "Discover how artificial intelligence is revolutionizing software development and creating new possibilities for intelligent user experiences.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2023",
      readTime: "10 min read",
      category: "AI/ML",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Advanced CSS Grid Techniques for Modern Layouts",
      excerpt:
        "Master CSS Grid with advanced techniques and real-world examples that will transform how you approach responsive web design and layout creation.",
      author: "David Kim",
      date: "Dec 8, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn best practices for creating robust, scalable APIs using Node.js and Express, including authentication, error handling, and performance optimization.",
      author: "Alex Thompson",
      date: "Dec 5, 2023",
      readTime: "15 min read",
      category: "Node.js",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "JavaScript ES2024: New Features and Improvements",
      excerpt:
        "Explore the latest JavaScript features and improvements in ES2024, including new syntax, built-in methods, and performance enhancements.",
      author: "Lisa Wang",
      date: "Dec 3, 2023",
      readTime: "9 min read",
      category: "JavaScript",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 7,
      title: "Responsive Design Patterns for 2024",
      excerpt:
        "Discover modern responsive design patterns and techniques that ensure your websites look great on all devices and screen sizes.",
      author: "James Wilson",
      date: "Dec 1, 2023",
      readTime: "7 min read",
      category: "CSS",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 8,
      title: "React Hooks: Advanced Patterns and Best Practices",
      excerpt:
        "Deep dive into advanced React Hooks patterns, custom hooks creation, and best practices for state management in modern React applications.",
      author: "Maria Garcia",
      date: "Nov 28, 2023",
      readTime: "11 min read",
      category: "React",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 9,
      title: "Web Performance Optimization: A Developer's Guide",
      excerpt:
        "Learn essential techniques for optimizing web performance, from code splitting to image optimization and caching strategies.",
      author: "Robert Brown",
      date: "Nov 25, 2023",
      readTime: "13 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 group"
                >
                  Read Full Article
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1.306"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
