import Navigation from "../../components/Navigation"
import ProductsHero from "../../components/ProductsHero"
import ProductsGrid from "../../components/ProductsGrid"
import Footer from "../../components/Footer"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductsHero />
      <ProductsGrid />
      <Footer />
    </main>
  )
}
