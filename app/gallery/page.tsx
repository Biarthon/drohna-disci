import type { Metadata } from "next"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Gallery | Drohna Disci",
  description: "Curated editorial gallery of Drohna Disci collections and pieces",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
