"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    program: "Alumni",
    quote: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers; they served as mentors who supported and guided us at every step.",
    rating: 5,
  },
  {
    id: 2,
    name: "Yatendra Sinh Joddha",
    role: "Technical Lead, TCS",
    program: "BCA Graduate",
    quote: "The BCA program provided me with a strong foundation in IT. The faculty's focus on giving the best training gave me the opportunity to apply my knowledge in real-world scenarios. Today, I draw upon the skills and knowledge that I gained at JG on a daily basis.",
    rating: 5,
  },
  {
    id: 3,
    name: "Krishna Soni",
    role: "Assistant Manager, ICICI Bank",
    program: "BBA Graduate",
    quote: "The Management programme offers cutting-edge course design, top-notch industry teachers, and hands-on experience projects. I was encouraged to uncover skills I had no idea I possessed throughout the academic sessions.",
    rating: 5,
  },
  {
    id: 4,
    name: "Parth Raval",
    role: "Creative Producer, Colors Gujarati",
    program: "Media Graduate",
    quote: "The demanding academic programme and top-notch teachers enabled me to establish a solid foundation in my field of study. The emphasis on practical learning through internships and industry collaborations gave me valuable hands-on experience.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sumit Khurana",
    role: "General Manager, Ahmedabad Mirror",
    program: "B.Com Graduate",
    quote: "The comprehensive academic program and exceptional faculty provided me with a solid grounding in my chosen field. I am deeply appreciative of the invaluable support and guidance that my professors and peers offered me.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            className="text-sm font-semibold text-accent uppercase tracking-wider inline-block"
            whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
          >
            Success Stories
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Hear From Our{" "}
            <span className="text-primary">Alumni</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our graduates are making their mark across industries worldwide.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="relative bg-card rounded-3xl border border-border shadow-2xl shadow-primary/5 p-8 md:p-12"
            whileHover={{ 
              boxShadow: "0 30px 60px -15px hsl(var(--primary) / 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Quote Icon */}
            <motion.div 
              className="absolute -top-6 left-8 md:left-12 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.15, rotate: 10 }}
              animate={{ 
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Quote className="w-6 h-6 text-primary-foreground" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pt-4"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    >
                      <Star className="w-5 h-5 fill-secondary text-secondary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-xl font-bold text-primary">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-xs text-primary font-medium">{testimonials[currentIndex].program}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-primary w-8" 
                        : "bg-muted hover:bg-muted-foreground/30 w-2.5"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.15, x: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.15, x: 3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
