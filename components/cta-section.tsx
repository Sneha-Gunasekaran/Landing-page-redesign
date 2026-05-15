"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider inline-block"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              Start Your Journey
            </motion.span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 md:mt-4 mb-4 md:mb-6 leading-tight text-balance">
              Ready to Transform{" "}
              <span className="text-primary">Your Future?</span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              Take the first step towards a successful career. Our admissions team is ready 
              to guide you through the process and help you find the perfect program.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                { icon: Phone, label: "Call us", value: "+91 79 2630 1234" },
                { icon: Mail, label: "Email us", value: "admissions@jguni.in" },
                { icon: MapPin, label: "Visit us", value: "Ahmedabad, Gujarat, India" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center gap-3 md:gap-4 group cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              boxShadow: "0 40px 80px -20px hsl(var(--primary) / 0.2)"
            }}
            className="bg-card rounded-2xl md:rounded-3xl border border-border shadow-2xl shadow-primary/5 p-5 md:p-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">Get in Touch</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-5 md:mb-8">Fill the form below and we&apos;ll get back to you.</p>

            <form className="space-y-4 md:space-y-5">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { label: "First Name", placeholder: "John", type: "text" },
                  { label: "Last Name", placeholder: "Doe", type: "text" }
                ].map((field, index) => (
                  <motion.div 
                    key={field.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">{field.label}</label>
                    <motion.input
                      type={field.type}
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base text-foreground placeholder:text-muted-foreground hover:border-primary/50"
                    />
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">Email</label>
                <motion.input
                  type="email"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base text-foreground placeholder:text-muted-foreground hover:border-primary/50"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 }}
              >
                <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">Phone</label>
                <motion.input
                  type="tel"
                  placeholder="+91 98765 43210"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base text-foreground placeholder:text-muted-foreground hover:border-primary/50"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">Program of Interest</label>
                <motion.select 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base text-foreground hover:border-primary/50 cursor-pointer"
                >
                  <option value="">Select a program</option>
                  <option value="bba">BBA / BBA (Hons)</option>
                  <option value="bcom">B.Com / B.Com (Hons)</option>
                  <option value="bca">BCA / BCA (Hons)</option>
                  <option value="btech">B.Tech (CSE/IT/AI)</option>
                  <option value="mba">MBA</option>
                  <option value="mca">MCA</option>
                </motion.select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65 }}
              >
                <label className="text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2 block">Message (Optional)</label>
                <motion.textarea
                  placeholder="Tell us about your goals..."
                  rows={3}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base text-foreground placeholder:text-muted-foreground resize-none hover:border-primary/50"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 py-5 md:py-6 text-sm md:text-lg group relative overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative flex items-center justify-center">
                    Submit Enquiry
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
