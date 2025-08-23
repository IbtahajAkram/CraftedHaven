export default function BlogHero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Discover insights, tutorials, and the latest trends in technology and web development from our expert
            contributors.
          </p>
        </div>
      </div>
    </section>
  )
}
