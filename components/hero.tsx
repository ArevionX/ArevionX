'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated futuristic background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Liquid gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        
        {/* Animated orbs - professional tech startup aesthetic */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern overlay - subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="glass px-6 py-2.5 rounded-full flex items-center gap-2 text-sm text-primary font-medium border border-primary/20 hover:border-primary/40 transition-all"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles size={16} />
            </motion.div>
            <span>Trusted by enterprises worldwide</span>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight"
        >
          <span className="text-balance text-foreground">
            Building Digital Solutions
            <br />
            <span className="text-primary">That Scale</span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 text-balance"
        >
          From startups to enterprises, ArevionX delivers powerful, scalable, and innovative software solutions
          that transform your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-semibold group shadow-lg hover:shadow-xl transition-shadow">
              Get a Free Consultation
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-primary/40 hover:border-primary text-foreground rounded-full px-8 py-6 text-lg font-semibold bg-transparent hover:bg-primary/5 transition-all"
            >
              View Our Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t border-border/30"
        >
          {[
            { number: '10+', label: 'Projects Delivered' },
            { number: '2+', label: 'Years Experience' },
            { number: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <p className="text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
