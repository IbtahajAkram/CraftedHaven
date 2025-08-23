import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import WhyChooseUs from "../components/WhyChooseUs"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </main>
  )
}
