import BlogPost from "../../../components/BlogPost"
import RelatedPosts from "../../../components/RelatedPosts"

// This would normally come from a database or CMS
const getBlogPost = (id) => {
  const posts = {
    1: {
      id: 1,
      title: "The Future of Web Development: What's Coming in 2024",
      content: `
        <p>The web development landscape is evolving at an unprecedented pace, and 2024 promises to bring revolutionary changes that will reshape how we build and interact with web applications. From artificial intelligence integration to new frameworks and development paradigms, let's explore what's on the horizon.</p>

        <h2>AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is no longer just a buzzword in web development—it's becoming an integral part of our daily workflow. AI-powered code completion tools like GitHub Copilot and Tabnine are already transforming how developers write code, but 2024 will see even more sophisticated AI integration.</p>

        <p>We're seeing the emergence of AI tools that can:</p>
        <ul>
          <li>Generate entire component libraries based on design specifications</li>
          <li>Automatically optimize code for performance and accessibility</li>
          <li>Provide intelligent debugging suggestions</li>
          <li>Create comprehensive test suites automatically</li>
        </ul>

        <h2>The Rise of Edge Computing</h2>
        <p>Edge computing is revolutionizing how we think about web application architecture. By processing data closer to the user, we can achieve unprecedented performance improvements and create more responsive user experiences.</p>

        <p>Key benefits of edge computing include:</p>
        <ul>
          <li>Reduced latency for global applications</li>
          <li>Improved performance for dynamic content</li>
          <li>Better user experience across different geographical locations</li>
          <li>Enhanced security through distributed processing</li>
        </ul>

        <h2>WebAssembly Goes Mainstream</h2>
        <p>WebAssembly (WASM) is finally reaching mainstream adoption, enabling developers to run high-performance applications directly in the browser. This technology opens up new possibilities for web applications that were previously impossible or impractical.</p>

        <p>Applications of WebAssembly include:</p>
        <ul>
          <li>High-performance gaming applications</li>
          <li>Complex data visualization tools</li>
          <li>Real-time audio and video processing</li>
          <li>Scientific computing applications</li>
        </ul>

        <h2>Progressive Web Apps Evolution</h2>
        <p>Progressive Web Apps (PWAs) continue to evolve, with new capabilities that blur the line between web and native applications. The latest updates to PWA specifications include enhanced offline capabilities, better integration with operating systems, and improved performance metrics.</p>

        <h2>Conclusion</h2>
        <p>The future of web development is bright and full of exciting possibilities. As we move into 2024, developers who embrace these new technologies and paradigms will be well-positioned to create the next generation of web applications that are faster, more intelligent, and more user-friendly than ever before.</p>

        <p>Stay tuned to our blog for more insights and tutorials on these emerging technologies. The web development journey is just getting started!</p>
      `,
      author: "Sarah Johnson",
      authorBio:
        "Sarah is a senior full-stack developer with over 8 years of experience in modern web technologies. She specializes in React, Node.js, and cloud architecture.",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "December 15, 2023",
      readTime: "8 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Web Development", "AI", "Edge Computing", "WebAssembly", "PWA"],
    },
    2: {
      id: 2,
      title: "Mastering React Server Components: A Complete Guide",
      content: `
        <p>React Server Components represent a paradigm shift in how we build React applications. By allowing components to render on the server, we can create faster, more efficient applications with better user experiences.</p>

        <h2>What are React Server Components?</h2>
        <p>React Server Components are a new type of component that runs on the server instead of the client. This means they can access server-side resources directly, reduce bundle sizes, and improve initial page load times.</p>

        <h2>Key Benefits</h2>
        <ul>
          <li>Reduced JavaScript bundle size</li>
          <li>Direct access to server-side resources</li>
          <li>Improved initial page load performance</li>
          <li>Better SEO capabilities</li>
        </ul>

        <h2>Implementation Examples</h2>
        <p>Let's look at some practical examples of how to implement React Server Components in your applications...</p>
      `,
      author: "Mike Chen",
      authorBio:
        "Mike is a React specialist and technical lead with expertise in modern React patterns and server-side rendering.",
      authorImage: "/placeholder.svg?height=100&width=100",
      date: "December 12, 2023",
      readTime: "12 min read",
      category: "React",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["React", "Server Components", "Performance", "SSR"],
    },
  }

  return posts[id] || null
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return {
      title: "Post Not Found - TechBlog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - TechBlog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
  }
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Blog
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <BlogPost post={post} />
      <RelatedPosts currentPostId={post.id} category={post.category} />
    </div>
  )
}
