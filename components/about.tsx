'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Users, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const highlights = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid development cycles without compromising quality',
    },
    {
      icon: Shield,
      title: 'Scalable Architecture',
      description: 'Enterprise-grade infrastructure built for growth',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 support team committed to your success',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Why ArevionX Stands Out
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            We combine innovation, reliability, and dedication to deliver solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Right side - Image with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
          <Image
            src="/about-visual.jpg"
            alt="ArevionX Team"
            width={500}
            height={400}
            className="rounded-2xl object-cover w-full h-96 relative border border-border/20 shadow-2xl"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 border border-border/20 hover:border-primary/50 transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:glow-primary transition-all"
              >
                <Icon size={28} className="text-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/60">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
