import BlogGrid from "../../components/BlogGrid"
import BlogHero from "../../components/BlogHero"

export const metadata = {
  title: "Blog - TechBlog",
  description: "Explore our latest articles on technology, web development, and programming tutorials",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}
