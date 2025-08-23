import Navigation from "../../components/Navigation"
import AboutHero from "../../components/AboutHero"
import AboutStory from "../../components/AboutStory"
import AboutValues from "../../components/AboutValues"
import AboutStats from "../../components/AboutStats"
import TeamSection from "../../components/TeamSection"
import AboutTestimonials from "../../components/AboutTestimonials"
import Footer from "../../components/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <TeamSection />
      <AboutTestimonials />
      <Footer />
    </main>
  )
}
