"use client"

import Image from "next/image"

interface ImpactStoryCardProps {
  name: string
  title: string
  achievement: string
  description: string
  image: string
  reverse?: boolean
}

export function ImpactStoryCard({
  name,
  title,
  achievement,
  description,
  image,
  reverse = false,
}: ImpactStoryCardProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-20 md:py-28 ${reverse ? "md:grid-flow-dense" : ""}`}
    >
      <div className={`flex flex-col justify-center space-y-8 ${reverse ? "md:col-start-2" : ""}`}>
        <div className="space-y-4">
          <p className="text-sm tracking-widest text-accent uppercase">Impact Story</p>
          <h3 className="text-4xl md:text-5xl font-serif">{name}</h3>
          <div className="w-12 h-px bg-accent"></div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Title</p>
            <p className="text-xl md:text-2xl font-serif text-foreground">{title}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Achievement</p>
            <p className="text-lg font-medium text-accent">{achievement}</p>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-foreground">{description}</p>
        </div>
      </div>

      <div
        className={`relative aspect-square overflow-hidden rounded-lg ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
      >
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" priority />
      </div>
    </div>
  )
}
