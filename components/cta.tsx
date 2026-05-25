'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function CTA() {
  const [email, setEmail] = useState('')

  return (
    <section id="contact" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground tracking-tight">
          Subscribe to our newsletter
        </h2>
        <p className="text-foreground/60 text-base mb-10">
          Sign up today and get a free sample up to 100 records.
        </p>

        {/* Email Input Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 max-w-md mx-auto mb-6"
        >
          <div className="flex-1 flex items-center gap-2 border border-border rounded-lg px-4 py-3 bg-background shadow-sm focus-within:ring-2 focus-within:ring-primary/30 transition-all">
            <Mail size={16} className="text-muted-foreground flex-shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
          <button className="bg-foreground text-background text-sm font-semibold px-5 py-3 rounded-lg hover:bg-foreground/90 transition-colors whitespace-nowrap">
            Get started
          </button>
        </motion.div>

        {/* Avatar stack + helper text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          {/* Overlapping avatars */}
          <div className="flex -space-x-2">
            {['/avatar-1.jpg', '/avatar-2.jpg', '/avatar-3.jpg'].map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-background overflow-hidden relative"
                style={{ zIndex: 3 - i }}
              >
                <Image src={src} alt={`Expert ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Our experts are ready to help!</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
