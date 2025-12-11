"use client"

import type React from "react"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="w-full py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-serif">Get in Touch</h1>
          <div className="w-12 h-px bg-accent"></div>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Have questions, collaborations, or stories to share? We'd love to hear from you. Reach out and let's create
            something beautiful together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-accent tracking-widest uppercase mb-2">Email</p>
              <a href="mailto:hello@drophnadisci.com" className="text-lg hover:text-accent transition-colors break-all">
                hello@drohnasci.com
              </a>
            </div>
            <div>
              <p className="text-sm text-accent tracking-widest uppercase mb-2">Phone</p>
              <a href="tel:+211123456789" className="text-lg hover:text-accent transition-colors">
                +211 (123) 456-789
              </a>
            </div>
            <div>
              <p className="text-sm text-accent tracking-widest uppercase mb-2">Location</p>
              <p className="text-lg text-muted-foreground">Juba, South Sudan</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 px-0 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 px-0 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-border py-3 px-0 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 px-0 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground hover:bg-foreground transition-colors duration-300 text-sm tracking-widest uppercase mt-8"
            >
              Send Message
            </button>

            {isSubmitted && (
              <p className="text-accent text-sm tracking-widest uppercase animate-fade-in">
                Thank you. We'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
