import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />
      <TestimonialsCarousel />
      <Footer />
    </main>
  )
}
