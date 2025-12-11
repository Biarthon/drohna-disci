import type { Metadata } from "next"
import { StoryHero } from "@/components/story-hero"
import { StoryContent } from "@/components/story-content"
import { FounderSection } from "@/components/founder-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Story | Drohna Disci",
  description: "The journey of Drohna Disci: resilience, creativity, and dreams built in South Sudan",
}

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <StoryHero />
      <StoryContent />
      <FounderSection />
      <Footer />
    </main>
  )
}
