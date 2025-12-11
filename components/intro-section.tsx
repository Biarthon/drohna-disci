"use client"

import Link from "next/link"

export function IntroSection() {
  const sections = [
    {
      title: "The Story",
      description: "A journey of resilience, creativity, and dreams built at home in South Sudan",
      link: "/story",
    },
    {
      title: "The Values",
      description: "Creativity, courage, safety, and community at the heart of everything we do",
      link: "/values",
    },
    {
      title: "The Collections",
      description: "Curated editorial gallery showcasing each piece with intention and artistry",
      link: "/gallery",
    },
  ]

  return (
    <section className="w-full bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Welcome to Drohna Disci</h2>
          <div className="w-12 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            More than a fashion brand, Drohna Disci is a movement that celebrates African design, honors the creative
            spirit, and builds a home for fashion in South Sudan.
          </p>
        </div>

        {/* Three-column layout */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {sections.map((section, idx) => (
            <Link
              key={idx}
              href={section.link}
              className="group cursor-pointer space-y-4 hover:translate-y-[-8px] transition-transform duration-300"
            >
              <div className="h-px w-8 bg-accent group-hover:w-12 transition-all duration-500"></div>
              <h3 className="text-2xl font-serif">{section.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{section.description}</p>
              <div className="pt-4 flex items-center gap-2 text-accent text-sm tracking-widest uppercase">
                Explore
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
