import Navigation from "../../../components/Navigation"
import ProductDetail from "../../../components/ProductDetail"
import RelatedProducts from "../../../components/RelatedProducts"
import Footer from "../../../components/Footer"

export default function ProductPage({ params }) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductDetail productId={params.id} />
      <RelatedProducts />
      <Footer />
    </main>
  )
}
