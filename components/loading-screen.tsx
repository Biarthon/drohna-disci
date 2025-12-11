"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 animate-pulse" />

        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-accent/20 rounded-br-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-accent/20 rounded-tl-3xl" />

        {/* Main logo container */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Floating logo */}
          <div className="animate-float">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              {/* Outer rotating ring */}
              <div
                className="absolute inset-0 border border-accent/30 rounded-full animate-spin"
                style={{ animationDuration: "8s" }}
              />

              {/* Middle subtle ring */}
              <div
                className="absolute inset-2 border border-accent/15 rounded-full animate-spin"
                style={{ animationDuration: "6s", animationDirection: "reverse" }}
              />

              {/* Logo image */}
              <Image
                src="/logo.jpg"
                alt="Drohna Disci"
                width={120}
                height={120}
                className="relative z-20 w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* Loading text with fade animation */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground tracking-wide animate-fade-in">
              Drohna Disci
            </h2>
            <p
              className="text-sm md:text-base text-muted-foreground font-light tracking-widest uppercase animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Fashion that teaches
            </p>
          </div>

          {/* Animated loading dots */}
          <div className="flex items-center gap-2 mt-4">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
            <span className="w-2 h-2 bg-accent/70 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
            <span className="w-2 h-2 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>

        {/* Subtle bottom line accent */}
        <div
          className="absolute bottom-20 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
    </div>
  )
}
