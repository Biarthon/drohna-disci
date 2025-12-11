"use client"

import Image from "next/image"
import { useState } from "react"

export function GalleryGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const pieces = [
    { id: 1, title: "Heritage Drapes", category: "Couture", image: "/collection-heritage.jpg" },
    { id: 2, title: "Unity Line", category: "Ready-to-Wear", image: "/collection-unity.jpg" },
    { id: 3, title: "Crown Jewels", category: "Accessories", image: "/collection-crown.jpg" },
    { id: 4, title: "Ancestral Weave", category: "Textiles", image: "/collection-ancestral.jpg" },
    { id: 5, title: "Modern Nomad", category: "Ready-to-Wear", image: "/collection-nomad.jpg" },
    { id: 6, title: "Sacred Earth", category: "Couture", image: "/collection-earth.jpg" },
  ]

  return (
    <section className="w-full py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pieces.map((piece) => (
            <div
              key={piece.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(piece.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-muted aspect-square rounded-sm mb-4 border border-border hover:border-accent transition-colors">
                <Image
                  src={piece.image || "/placeholder.svg"}
                  alt={piece.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div className="space-y-2">
                <p className="text-xs tracking-widest uppercase text-accent">{piece.category}</p>
                <h3 className="text-lg font-serif group-hover:text-accent transition-colors">{piece.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-24 py-16 border-t border-border text-center space-y-6">
          <h2 className="text-3xl font-serif">More Coming Soon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            New collections are curated seasonally. Follow our journey as Drohna Disci continues to evolve and expand
            its artistic vision.
          </p>
        </div>
      </div>
    </section>
  )
}
