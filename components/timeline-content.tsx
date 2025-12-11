"use client"

export function TimelineContent() {
  const timelineEvents = [
    {
      date: "Early Days",
      title: "The Doubt",
      description:
        "In the beginning, the path seemed impossible. Discouragement whispered in the ear. Building a luxury fashion brand in post-conflict South Sudan felt like chasing a dream that couldn't be real.",
      position: "left",
    },
    {
      date: "The Turning Point",
      title: "The Decision to Stay",
      description:
        "Mathiang made a choice that would define everything. Rather than leaving for opportunities elsewhere, he chose to stay. To build. To dream here.",
      position: "right",
    },
    {
      date: "2024",
      title: "Drohna Disci Founded",
      description:
        "April 4, 2024 marked the official birth of Drohna Disci. What started as a personal vision became a movement—a sanctuary for creative excellence rooted firmly in South Sudan.",
      position: "left",
    },
    {
      date: "Beyond",
      title: "The Legacy Continues",
      description:
        "Every collection, every collaboration, every new creator welcomed into the Drohna Disci family adds to a growing legacy. The best chapters are still being written.",
      position: "right",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Vertical timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-accent via-accent to-accent/20"></div>

          {/* Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`flex ${event.position === "left" ? "flex-row" : "flex-row-reverse"}`}>
                {/* Content */}
                <div className="w-1/2 px-8">
                  <div className={`space-y-3 ${event.position === "left" ? "text-right" : "text-left"}`}>
                    <p className="text-sm tracking-widest uppercase text-accent">{event.date}</p>
                    <h3 className="text-2xl font-serif">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <div className="relative">
                    <div className="absolute w-4 h-4 bg-accent rounded-full transform -translate-x-1.5 top-8"></div>
                    <div className="absolute w-8 h-8 bg-accent/20 rounded-full transform -translate-x-3 top-6 animate-pulse"></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-24 pt-16 border-t border-border">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif mb-6">The Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every moment of this journey—from doubt to decision to celebration—contributes to a larger story. A story
              about what happens when someone refuses to abandon their home, when creativity is treated as sacred, and
              when fashion becomes a force for change. This is just the beginning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
