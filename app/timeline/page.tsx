import type { Metadata } from "next"
import { TimelineHero } from "@/components/timeline-hero"
import { TimelineContent } from "@/components/timeline-content"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Timeline | Drohna Disci",
  description: "Key moments and milestones in the Drohna Disci journey",
}

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <TimelineHero />
      <TimelineContent />
      <Footer />
    </main>
  )
}
