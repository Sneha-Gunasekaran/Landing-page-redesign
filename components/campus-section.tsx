"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wifi, FlaskConical, BookOpen, Users } from "lucide-react"

const facilities = [
  {
    icon: FlaskConical,
    title: "IIoT Lab",
    description: "State-of-the-art Industrial Internet of Things laboratory for hands-on experience"
  },
  {
    icon: BookOpen,
    title: "Tech-Enabled Library",
    description: "Digital library with access to global academic resources and research papers"
  },
  {
    icon: Users,
    title: "R&D + Incubation",
    description: "Research & Development center with startup incubation support"
  },
  {
    icon: Wifi,
    title: "Wi-Fi Campus",
    description: "24/7 high-speed internet connectivity across the entire campus"
  },
]

const highlights = [
  "NEP 2020 & UGC Compliant Programs",
  "Industry-Experienced Faculty",
  "Foreign University Collaborations",
  "Full Pay On-The-Job Training",
  "Cross-Cultural Internships",
  "24/7 Facility Access"
]

export function CampusSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="campus" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      
      {/* Animated Pattern Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider inline-block"
            whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
          >
            Campus Life
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6 text-balance">
            World-Class Facilities for{" "}
            <span className="text-secondary">Tomorrow&apos;s Leaders</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our campus is designed to foster innovation, collaboration, and holistic development.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
              }}
              className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group cursor-default"
            >
              <motion.div 
                className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <facility.icon className="w-7 h-7 text-primary-foreground group-hover:text-primary transition-colors" />
              </motion.div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-secondary transition-colors">{facility.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{facility.description}</p>
              
              {/* Animated underline */}
              <motion.div
                className="h-0.5 bg-secondary mt-4 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl border border-primary-foreground/20 p-8 md:p-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-8 text-center">
            Why Choose JG University?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ 
                  x: 10,
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                className="flex items-center gap-3 p-4 bg-primary-foreground/5 rounded-xl cursor-default transition-all duration-300"
              >
                <motion.div 
                  className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <span className="text-sm md:text-base text-primary-foreground font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
