"use client"

import Image from "next/image"

export function StoryContent() {
  const storyPoints = [
    {
      title: "The Beginning",
      text: "What started as a personal vision became a mission. Mathiang recognized that South Sudan had immense creative talent trapped by circumstance—a nation with boundless artistic potential but limited platforms.",
      highlight: "Fashion can thrive at home.",
    },
    {
      title: "The Challenge",
      text: "Building a luxury fashion brand in a post-conflict nation meant navigating complexities others might have abandoned. But for Mathiang, these obstacles were not deterrents—they were the very reasons to proceed.",
      highlight: "Courage is the foundation of creation.",
    },
    {
      title: "The Revolution",
      text: "Drohna Disci emerged as more than clothing. It became a sanctuary for artists, a beacon for emerging creators, and proof that African design could be world-class without leaving Africa.",
      highlight: "Legacy begins with one person who refuses to leave.",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto space-y-24">
        {storyPoints.map((point, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
              <h2 className="text-4xl font-serif">{point.title}</h2>
              <div className="w-8 h-px bg-accent"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">{point.text}</p>
              <div className="pt-4 border-l-2 border-accent pl-6">
                <p className="text-lg font-light italic text-foreground">{point.highlight}</p>
              </div>
            </div>
            <div className={`relative h-96 bg-muted rounded-sm overflow-hidden ${idx % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
              <Image
                src={`/diverse-fashion-collection.png?height=400&width=400&query=fashion${idx}`}
                alt={point.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
