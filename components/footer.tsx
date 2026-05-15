"use client"

import Link from "next/link"
import { motion } from "framer-motion"
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
    <footer className="bg-gradient-to-b from-card via-card to-muted/50 text-foreground border-t border-border/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-10 md:py-20 relative">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 group">
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-primary/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">JG University</span>
                <span className="text-[10px] md:text-xs text-muted-foreground">Since 1965</span>
              </div>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6 max-w-sm">
              A New Age Tech-Driven University offering programmes that evolve as per future 
              industry demand, enabling students to achieve seamless career success.
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className="w-8 h-8 md:w-10 md:h-10 bg-muted/50 border border-border/50 rounded-lg md:rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-4 md:mb-6">Programs</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm inline-block">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-4 md:mb-6">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm inline-block">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="hidden lg:block">
            <h4 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-4 md:mb-6">About</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm inline-block">
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs md:text-sm font-semibold text-foreground uppercase tracking-wider mb-4 md:mb-6">Stay Updated</h4>
            <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">Subscribe to our newsletter for updates.</p>
            <form className="space-y-2 md:space-y-3">
              <motion.input
                type="email"
                placeholder="Your email"
                whileFocus={{ scale: 1.02 }}
                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-muted/50 border border-border/50 focus:border-primary/50 outline-none transition-all text-foreground placeholder:text-muted-foreground text-xs md:text-sm hover:border-primary/30"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg md:rounded-xl font-medium text-xs md:text-sm hover:from-primary/90 hover:to-secondary/90 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
              >
                Subscribe
                <motion.span
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                </motion.span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30 relative">
        <div className="container mx-auto px-4 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-muted-foreground text-xs md:text-sm">
              © {new Date().getFullYear()} JG University. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              {footerLinks.legal.slice(0, 3).map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-xs md:text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
