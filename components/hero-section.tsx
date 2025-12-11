"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-background pt-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 animate-fade-in">
        {/* Main heading with floating animation */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-tight">
            <span className="block animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Fashion that
            </span>
            <span className="block animate-slide-up text-accent" style={{ animationDelay: "0.2s" }}>
              teaches
            </span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Creativity that endures
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          A luxury South Sudanese fashion brand founded by designer Mathiang, standing as a beacon of hope and a guide
          for future creators.
        </p>

        {/* CTA Button */}
        <div className="pt-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <Link
            href="/story"
            className="inline-block px-8 py-3 border border-foreground hover:bg-foreground hover:text-background transition-colors duration-500 text-sm tracking-widest uppercase"
          >
            Explore the Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
