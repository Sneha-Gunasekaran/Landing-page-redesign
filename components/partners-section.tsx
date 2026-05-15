"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const partners = [
  { name: "Microsoft", logo: "M" },
  { name: "Google", logo: "G" },
  { name: "IBM", logo: "IBM" },
  { name: "TCS", logo: "TCS" },
  { name: "Infosys", logo: "INF" },
  { name: "Wipro", logo: "W" },
  { name: "Deloitte", logo: "D" },
  { name: "KPMG", logo: "K" },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-20 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-12 px-6 flex items-center justify-center bg-card rounded-xl border border-border group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
