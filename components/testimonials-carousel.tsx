"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Collaborating with Drohna Disci allowed me to truly advocate for women's empowerment, especially while wearing my outstanding outfit made of tinfoil and plastic spoons! I felt so confident, and it paid off—I was crowned First Runner Up! Drohna's commitment to perfection is unmatched; he even showed up to personally support me backstage. Truly, Drohna Disci is at the pinnacle of perfection.",
    name: "Ayat Akol Maror",
    role: "Fashion Model",
    image: "/fashion-model-portrait.png",
  },
  {
    id: 2,
    quote:
      "Working with Mathiang felt different from the start. He didn’t just design an outfit, he listened to what I wanted to say. My creativity piece was about recycling and responsibility, and he helped turn that message into something powerful. Winning Miss Creativity changed my life, and Drohna Disci played a huge role in that journey. Even now, as I work professionally abroad, I carry that experience with me.",
    name: "Arop Akol",
    role: "Fashion Model",
    image: "https://mediaslide-europe.storage.googleapis.com/traffic/pictures/4699/7170/large-1679308776-b38ab70f371d4db66d1621ae031b40dd.jpg",
  },
  /*{
    id: 3,
    quote:
      "The elegance in every piece speaks volumes. This is fashion that teaches, that transforms, that leaves a legacy.",
    name: "Emmanuel Koigi",
    role: "Creative Director",
    image: "/creative-director-portrait.png",
  },
  {
    id: 4,
    quote:
      "A beacon of hope for African fashion. Drohna Disci is setting the standard for what's possible in our continent.",
    name: "Sade Abubakar",
    role: "Fashion Journalist",
    image: "/fashion-journalist-portrait.jpg",
  },*/
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    setIsAutoPlay(false)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <p className="text-sm tracking-widest text-accent uppercase">Voices</p>
          <h2 className="text-4xl md:text-5xl font-serif">Testimonials</h2>
          <div className="w-12 h-px bg-accent mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Statements from those who understand the vision of Drohna Disci
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="relative min-h-96 flex flex-col items-center justify-center py-12">
          {/* Quote */}
          <div className="fade-in-out text-center space-y-12">
            <p className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed italic">
              "{activeTestimonial.quote}"
            </p>

            {/* Profile Section */}
            <div className="flex flex-col items-center gap-6">
              {/* Portrait */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src={activeTestimonial.image || "/placeholder.svg"}
                  alt={activeTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name and Role */}
              <div className="text-center space-y-3">
                <p className="text-xl font-serif font-semibold text-foreground">{activeTestimonial.name}</p>
                <div className="h-px w-16 bg-accent mx-auto"></div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">{activeTestimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-16 flex justify-center items-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`rounded-full transition-all duration-500 ${
                index === activeIndex ? "w-8 h-2 bg-accent" : "w-2 h-2 bg-border hover:bg-accent/50"
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            {isAutoPlay ? "Auto-play" : "Paused"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .fade-in-out {
          animation: fadeInOut 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
