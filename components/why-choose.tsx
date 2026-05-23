'use client'

import { motion } from 'framer-motion'
import { Zap, Lock, GitBranch, MessageSquare } from 'lucide-react'
import Image from 'next/image'

export default function WhyChoose() {
  const reasons = [
    {
      icon: Zap,
      title: 'Ultra-Fast Delivery',
      description: 'Every solution is optimized for speed, scalability, and reliability',
      image: '/feature-speed.jpg',
    },
    {
      icon: Lock,
      title: 'Scalable Architecture',
      description: 'Enterprise-grade security with architecture built for growth',
      image: '/feature-scale.jpg',
    },
    {
      icon: GitBranch,
      title: 'Agile Methodology',
      description: 'Flexible development process with regular updates and feedback loops',
      image: '/feature-speed.jpg',
    },
    {
      icon: MessageSquare,
      title: 'Dedicated Support',
      description: 'Clear updates, responsive support, and collaborative approach throughout',
      image: '/feature-support.jpg',
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Why Choose ArevionX
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            We don't just build software. We build partnerships. Our commitment to excellence,
            transparency, and continuous improvement sets us apart in the industry.
          </p>

          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary"
                  >
                    <Icon size={24} className="text-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                    <p className="text-foreground/60">{reason.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Right side - Feature Images */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {reasons.slice(0, 4).map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-2xl overflow-hidden h-48 glass border border-border/20 hover:border-primary/50 transition-all group"
            >
              <Image
                src={reason.image || "/placeholder.svg"}
                alt={reason.title}
                width={300}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent flex items-end p-4">
                <h3 className="font-bold text-foreground">{reason.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
