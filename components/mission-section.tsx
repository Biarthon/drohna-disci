export function MissionSection() {
  return (
    <section className="w-full py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">Our Mission & Vision</h1>
          <div className="w-12 h-px bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8">
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-serif">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To build a sanctuary for African creative excellence, proving that the most transformative fashion emerges
              from home, from community, and from the courage to dream differently.
            </p>
          </div>

          <div className="text-left space-y-4">
            <h2 className="text-2xl font-serif">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A world where South Sudanese design is celebrated on global stages, where every creator has a home, and
              where fashion becomes a language of hope, resilience, and boundless possibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
