import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact | Drohna Disci",
  description: "Get in touch with Drohna Disci",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <ContactSection />
      <Footer />
    </main>
  )
}
