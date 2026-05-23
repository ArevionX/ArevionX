'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStartup Inc',
      role: 'CEO',
      content:
        'ArevionX transformed our vision into a scalable platform. Their expertise and dedication exceeded our expectations.',
      rating: 5,
      avatar: '/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Enterprise Solutions',
      role: 'CTO',
      content:
        'Working with ArevionX was seamless. They delivered a robust ERP system on time and within budget.',
      rating: 5,
      avatar: '/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Emma Williams',
      company: 'E-Commerce Hub',
      role: 'Founder',
      content:
        'The team at ArevionX understood our business needs perfectly and built a solution that drives real results.',
      rating: 5,
      avatar: '/avatar-3.jpg',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
          What Our Clients Say
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Don't take our word for it. Hear from the companies we've partnered with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass rounded-2xl p-8 border border-border/20 hover:border-primary/50 transition-all flex flex-col"
          >
            {/* Star rating */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 20 }}
                >
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <p className="text-foreground/80 mb-8 flex-1 italic">{`"${testimonial.content}"`}</p>

            {/* Author with Avatar */}
            <div className="border-t border-border/20 pt-6 flex items-center gap-4">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-foreground/60">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
