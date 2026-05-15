"use client"

import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react"

const footerLinks = {
  programs: [
    { name: "BBA Programs", href: "#programs" },
    { name: "B.Com Programs", href: "#programs" },
    { name: "BCA Programs", href: "#programs" },
    { name: "B.Tech Programs", href: "#programs" },
    { name: "MBA Programs", href: "#programs" },
    { name: "MCA Programs", href: "#programs" },
  ],
  resources: [
    { name: "Student Portal", href: "#" },
    { name: "Library", href: "#" },
    { name: "Research Papers", href: "#" },
    { name: "Career Services", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Events Calendar", href: "#" },
  ],
  about: [
    { name: "Our History", href: "#about" },
    { name: "Leadership", href: "#" },
    { name: "Faculty", href: "#" },
    { name: "Accreditations", href: "#" },
    { name: "Campus Tour", href: "#campus" },
    { name: "News & Updates", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-background tracking-tight">JG University</span>
                <span className="text-xs text-background/60">Since 1965</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              A New Age Tech-Driven University offering programmes that evolve as per future 
              industry demand, enabling students to achieve seamless career success.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-background" />
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider mb-6">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-background/70 text-sm mb-4">Subscribe to our newsletter for updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-background/10 border border-background/20 focus:border-background/40 outline-none transition-all text-background placeholder:text-background/50 text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-background text-foreground rounded-xl font-medium text-sm hover:bg-background/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} JG University. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-background/60 hover:text-background text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
