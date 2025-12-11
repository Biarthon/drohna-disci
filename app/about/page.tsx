import type { Metadata } from "next"
import { ImpactStoryCard } from "@/components/impact-story-card"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Impact | Drohna Disci",
  description: "Stories of individuals whose journeys have been transformed by Drohna Disci",
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Page Header */}
      <section className="w-full px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-sm tracking-widest text-accent uppercase">Our Impact</p>
            <h1 className="text-5xl md:text-6xl font-serif">Stories of Transformation</h1>
            <div className="w-12 h-px bg-accent"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Drohna Disci exists to elevate the confidence and artistic expression of individuals. Here are the stories
              of two remarkable women whose journeys have been shaped by our vision.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="w-full px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <ImpactStoryCard
            name="Arop Akol"
            title="Professional Model & Miss Creativity Winner"
            achievement="Miss Creativity, Miss Warrap Pageant 2022-2023"
            description="Arop's journey with Drohna Disci began with a vision to carry a powerful message about recycling and environmental consciousness within her South Sudanese community. She commissioned Mathiang to design her creativity outfit—a piece that would embody both artistic expression and social responsibility. Her bold vision and commitment to purpose led her to win Miss Creativity at the Miss Warrap pageant 2022-2023. Today, Arop works as a professional model abroad, carrying the legacy of Drohna Disci's values of intentional creativity and cultural pride to the global stage."
            image="/arop-akol.jpg"
          />

          <ImpactStoryCard
            name="Ayat Akol Maror"
            title="Beauty Pageant Champion & Advocate"
            achievement="1st Runner-Up & Miss Creativity Winner, Miss Apuk Liith Pageant"
            description="Ayat's confidence and artistic expression were elevated through Drohna Disci, showcasing how our designs serve as vessels for personal empowerment. At the Miss Apuk Liith pageant, she secured both 1st Runner-Up and Miss Creativity Winner, demonstrating that authentic self-expression transcends traditional competition categories. Her success is a testament to the transformative power of wearing pieces that honor both personal identity and cultural heritage. Ayat exemplifies what becomes possible when creativity meets intention—a strong voice for her community and beyond."
            image="/ayat-akol.jpg"
            reverse
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
