import type { Metadata } from "next"
import { MissionSection } from "@/components/mission-section"
import { ValuesCardsSection } from "@/components/values-cards-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Mission & Values | Drohna Disci",
  description: "The mission and core values that drive Drohna Disci forward",
}

export default function ValuesPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <MissionSection />
      <ValuesCardsSection />
      <Footer />
    </main>
  )
}
