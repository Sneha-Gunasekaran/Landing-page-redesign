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
    <section id="programs" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Choose Your Path to{" "}
            <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our diverse range of industry-aligned programs designed to prepare you 
            for the challenges of tomorrow.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs[activeCategory as keyof typeof programs].map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <program.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="flex items-center gap-1 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  {program.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {program.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
              <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
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
          <Button variant="outline" size="lg" className="group">
            View All Programs
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
