"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Lightbulb, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Interdisciplinary Approach",
    description: "Students from diverse backgrounds connect, ideate and solve problems with different conceptual structures and methods."
  },
  {
    icon: Lightbulb,
    title: "Experiential Learning",
    description: "Exposure to real-life projects to develop hands-on expertise and industry-relevant skills."
  },
  {
    icon: Sparkles,
    title: "Whole Brain Pedagogy",
    description: "Pedagogy that empowers learners to acquire future-proof technical skills and creative thinking."
  },
  {
    icon: Users,
    title: "Industry Faculty",
    description: "Learn from dynamic scholars with vast academic knowledge and real-world industry experience."
  }
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight text-balance">
              Preparing Students for the{" "}
              <span className="text-primary">Future of Work</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              JG University is a UGC approved University sponsored by the ASIA Charitable Trust, 
              which has been in the field of education since 1965. We successfully manage 17 colleges 
              and 3 schools, creating a legacy of academic excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our programmes are NEP 2020 compliant, featuring collaboration with foreign universities 
              for curriculum delivery and student exchange, ensuring a truly global educational experience.
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {["NEP 2020 Compliant", "Global Collaborations", "Industry Partnerships"].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
