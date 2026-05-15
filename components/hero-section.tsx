"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Users, Award, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Users, value: "15,000+", label: "Students" },
  { icon: Award, value: "60+", label: "Years of Excellence" },
  { icon: Building2, value: "17+", label: "Colleges" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" 
      />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8 cursor-default"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-accent rounded-full" 
            />
            <span className="text-sm font-medium text-accent">UGC Approved University</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            <span className="block">Shape Your Future with</span>
            <motion.span 
              className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Industry-Ready Education
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-balance"
          >
            JG University is a New Age Tech-Driven University offering programmes that evolve 
            as per future industry demand, enabling students to get into employment or 
            self-employment seamlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 px-8 py-6 text-lg group relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary via-white/20 to-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center">
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg border-2 group"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Play className="mr-2 w-5 h-5" />
                </motion.span>
                Watch Campus Tour
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)"
                }}
                className="text-center p-4 md:p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 cursor-default transition-colors hover:border-primary/30 hover:bg-card/80"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-foreground"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center cursor-pointer hover:border-primary/50 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
