import Link from "next/link"

export default function RelatedPosts({ currentPostId, category }) {
  // This would normally come from a database or CMS
  const relatedPosts = [
    {
      id: 2,
      title: "Mastering React Server Components: A Complete Guide",
      excerpt: "Learn how to leverage React Server Components to build faster, more efficient applications.",
      author: "Mike Chen",
      date: "Dec 12, 2023",
      readTime: "12 min read",
      category: "React",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "AI and Machine Learning in Modern Applications",
      excerpt: "Discover how artificial intelligence is revolutionizing software development.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2023",
      readTime: "10 min read",
      category: "AI/ML",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Advanced CSS Grid Techniques for Modern Layouts",
      excerpt: "Master CSS Grid with advanced techniques and real-world examples.",
      author: "David Kim",
      date: "Dec 8, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg?height=200&width=300",
    },
  ].filter((post) => post.id !== currentPostId)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Related Articles</h2>
          <p className="text-xl text-gray-600">Continue exploring with these hand-picked articles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.slice(0, 3).map((post, index) => (
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
                  Read Article
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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
