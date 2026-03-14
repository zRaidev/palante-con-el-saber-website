import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import BachilleratosSection from "@/components/bachilleratos-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <BachilleratosSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
