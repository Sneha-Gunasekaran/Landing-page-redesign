"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { 
    name: "Programs", 
    href: "#programs",
    dropdown: [
      { name: "Undergraduate", href: "#programs" },
      { name: "Postgraduate", href: "#programs" },
      { name: "Doctoral", href: "#programs" },
    ]
  },
  { name: "About", href: "#about" },
  { name: "Campus", href: "#campus" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"
            >
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">JG University</span>
              <span className="text-xs text-muted-foreground">Since 1965</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      isScrolled 
                        ? "text-foreground hover:text-primary" 
                        : "text-foreground/90 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <motion.span
                        animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    )}
                    <motion.span
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                    >
                      {link.dropdown.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 hover:pl-6"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                Login
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.5)" }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                Apply Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 hover:pl-6"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 pt-4 space-y-2">
                  <Button variant="outline" className="w-full">Login</Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
