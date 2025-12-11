"use client"

import { Zap, Shield, Users, Crown } from "lucide-react"

export function ValuesCardsSection() {
  const values = [
    {
      icon: Zap,
      title: "Creativity",
      description: "Bold, fearless artistic expression that challenges conventions and celebrates individuality.",
    },
    {
      icon: Crown,
      title: "Courage",
      description: "The strength to stay, to build, and to dream in the face of uncertainty.",
    },
    {
      icon: Shield,
      title: "Safety & Expression",
      description: "A space where every voice is heard, where vulnerability becomes strength.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Unity, collaboration, and collective growth that lifts everyone forward.",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-16">
          <h2 className="text-4xl font-serif">Core Values</h2>
          <div className="w-8 h-px bg-accent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="p-8 bg-background border border-border hover:border-accent transition-colors duration-300 group cursor-pointer hover:translate-y-[-4px] transition-transform"
              >
                <div className="space-y-4">
                  <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Brand legacy statement */}
        <div className="mt-24 p-12 bg-primary text-primary-foreground rounded-sm space-y-4">
          <h3 className="text-2xl font-serif">A Legacy for the Next Generation</h3>
          <p className="text-lg leading-relaxed max-w-3xl">
            Drohna Disci is not just about creating beautiful fashion. It's about building a foundation for future
            creators—a place where the next generation of South Sudanese artists can look and see possibility. Every
            piece, every collaboration, every moment is an investment in tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}
