"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Clock, GraduationCap, Laptop, Briefcase, Scale, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "undergraduate", name: "Undergraduate" },
  { id: "postgraduate", name: "Postgraduate" },
  { id: "professional", name: "Professional" },
]

const programs = {
  undergraduate: [
    { name: "BBA / BBA (Hons)", duration: "3-4 Years", icon: Briefcase, description: "Business Administration with industry exposure" },
    { name: "B.Com / B.Com (Hons)", duration: "3-4 Years", icon: GraduationCap, description: "Commerce with specialization options" },
    { name: "BCA / BCA (Hons)", duration: "3-4 Years", icon: Laptop, description: "Computer Applications with modern tech stack" },
    { name: "B.Tech (CSE/IT/AI)", duration: "4 Years", icon: Laptop, description: "Engineering in cutting-edge technologies" },
    { name: "B.Sc. Forensic Science", duration: "3-5 Years", icon: FlaskConical, description: "Forensic Science & Cyber Security" },
    { name: "LL.B.", duration: "3 Years", icon: Scale, description: "Law program for aspiring legal professionals" },
  ],
  postgraduate: [
    { name: "MBA", duration: "2 Years", icon: Briefcase, description: "Master of Business Administration" },
    { name: "M.Com (Hons)", duration: "2 Years", icon: GraduationCap, description: "Advanced Commerce Studies" },
    { name: "MCA", duration: "2 Years", icon: Laptop, description: "Master of Computer Applications" },
    { name: "M.Sc. Cyber Security", duration: "2 Years", icon: Laptop, description: "Cyber Security & Digital Forensics" },
    { name: "M.Sc. Clinical Embryology", duration: "2 Years", icon: FlaskConical, description: "Clinical Embryology & ART" },
    { name: "LL.M.", duration: "2 Years", icon: Scale, description: "Master of Laws" },
  ],
  professional: [
    { name: "iMBA (Integrated)", duration: "5 Years", icon: Briefcase, description: "Integrated MBA program" },
    { name: "iMCA (Integrated)", duration: "5 Years", icon: Laptop, description: "Integrated MCA program" },
    { name: "B.Com with ACCA", duration: "4 Years", icon: GraduationCap, description: "Commerce with global certification" },
    { name: "Aviation Management", duration: "5 Years", icon: Briefcase, description: "Aviation, Hospitality & Travel" },
    { name: "International Trade", duration: "4-5 Years", icon: GraduationCap, description: "International Trade & Finance" },
    { name: "Quantum Computing", duration: "3-5 Years", icon: Laptop, description: "Cutting-edge computing programs" },
  ],
}

export function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState("undergraduate")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programs" className="py-16 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          <motion.span 
            className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider inline-block"
            whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
            transition={{ duration: 0.2 }}
          >
            Our Programs
          </motion.span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 md:mt-4 mb-4 md:mb-6 text-balance">
            Choose Your Path to{" "}
            <span className="text-primary">Success</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Explore our diverse range of industry-aligned programs designed to prepare you 
            for the challenges of tomorrow.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          {programs[activeCategory as keyof typeof programs].map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 30px 60px -15px hsl(var(--primary) / 0.2)"
              }}
              className="group p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <program.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <motion.span 
                    className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 md:px-3 md:py-1 rounded-full"
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                  >
                    <Clock className="w-3 h-3" />
                    {program.duration}
                  </motion.span>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 line-clamp-2">{program.description}</p>
                
                <motion.div 
                  className="flex items-center text-sm font-medium text-primary"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                  </span>
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="outline" size="lg" className="group border-2">
              View All Programs
              <motion.span
                className="ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
