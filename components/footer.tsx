import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Story", href: "/story" },
    { label: "Values", href: "/values" },
    { label: "Gallery", href: "/gallery" },
    { label: "Timeline", href: "/timeline" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ]

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif tracking-wider">Drohna Disci</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Fashion that teaches. Creativity that endures.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-sm tracking-widest uppercase text-primary-foreground/50">Navigation</p>
            <div className="space-y-2">
              {navLinks.slice(0, 3).map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div className="space-y-3">
            <p className="text-sm tracking-widest uppercase text-primary-foreground/50">More</p>
            <div className="space-y-2">
              {navLinks.slice(3).map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm hover:text-accent transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-sm tracking-widest uppercase text-primary-foreground/50">Connect</p>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} Drohna Disci. All rights reserved.</p>
            <p>Crafted with intention and artistry in South Sudan.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
