"use client"

import Image from "next/image"

export function FounderSection() {
  return (
    <section className="w-full py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <Image src="/designer-portrait-mathiang.jpg" alt="Designer Mathiang" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-serif mb-2">Mathiang Mathiang Ring</h2>
              <p className="text-accent text-sm tracking-widest uppercase">Founder & Creative Director</p>
            </div>

            <div className="w-8 h-px bg-accent"></div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Born and raised in South Sudan, Mathiang grew up witnessing both the struggles and the boundless
                creativity of his people. Where others saw limitations, he saw possibility.
              </p>

              <p>
                In moments of discouragement, when the path seemed impossible, Mathiang made a choice that would define
                Drohna Disci: <span className="text-foreground font-light italic">He stayed.</span>
              </p>

              <p>
                Rather than chasing opportunities in established fashion capitals, he chose to build at home—not despite
                the challenges, but because of them. His vision was clear: to create a space where South Sudanese talent
                could flourish and where fashion could be a force for unity and expression.
              </p>

              <p>
                Today, Drohna Disci stands as testament to Mathiang's belief that the most beautiful creations emerge
                when someone refuses to abandon their home, their people, and their dreams.
              </p>
            </div>

            <div className="pt-8">
              <div className="space-y-3">
                <p className="text-sm text-accent tracking-widest uppercase">Founded</p>
                <p className="text-2xl font-serif">April 4, 2024</p>
                <div className="w-8 h-px bg-accent mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
