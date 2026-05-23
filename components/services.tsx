'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, ShoppingCart, Database, Code2, Palette, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies',
      features: ['Next.js & React', 'Performance Optimized', 'SEO Ready'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for iOS and Android',
      features: ['React Native', 'iOS & Android', 'Real-time Updates'],
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Store Development',
      description: 'Custom e-commerce solutions with seamless payment integration',
      features: ['Custom Themes', 'Payment Gateway', 'Inventory Sync'],
    },
    {
      icon: Database,
      title: 'ERP Solutions',
      description: 'Enterprise resource planning systems for business efficiency',
      features: ['Business Automation', 'Real-time Analytics', 'Scalable'],
    },
    {
      icon: Code2,
      title: 'Custom Software',
      description: 'Bespoke software tailored to your specific business needs',
      features: ['Tailored Solutions', 'Cloud Ready', 'API Integration'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive interfaces that users love',
      features: ['User-Centric Design', 'Prototyping', 'Accessibility'],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div className="inline-block mb-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
        </motion.div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance text-foreground">
          Everything You Need
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Comprehensive solutions across all aspects of software development
        </p>
      </motion.div>

      {/* Modern Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 border border-primary/10 hover:border-primary/40 transition-all h-full flex flex-col backdrop-blur-sm">
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors"
                >
                  <Icon size={24} className="text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-border/10">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-xs text-foreground/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
