import Navigation from "../../components/Navigation"
import ContactHero from "../../components/ContactHero"
import ContactForm from "../../components/ContactForm"
import ContactInfo from "../../components/ContactInfo"
import ContactMap from "../../components/ContactMap"
import ContactFAQ from "../../components/ContactFAQ"
import Footer from "../../components/Footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactFAQ />
      <Footer />
    </main>
  )
}
