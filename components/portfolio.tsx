'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'SaaS Dashboard Platform',
      description: 'Full-stack analytics dashboard with real-time data visualization and user management',
      tags: ['Next.js', 'PostgreSQL', 'Analytics'],
      image: '/portfolio-1.jpg',
    },
    {
      id: 2,
      title: 'E-Commerce Mobile App',
      description: 'Cross-platform shopping experience with seamless checkout and inventory sync',
      tags: ['React Native', 'Stripe', 'Firebase'],
      image: '/portfolio-2.jpg',
    },
    {
      id: 3,
      title: 'Enterprise ERP System',
      description: 'Comprehensive business management solution with real-time analytics and reporting',
      tags: ['React', 'Node.js', 'Database'],
      image: '/portfolio-3.jpg',
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
          Featured Projects
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Showcasing our expertise across diverse industries and technologies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass rounded-2xl overflow-hidden border border-border/20 hover:border-primary/50 transition-all group flex flex-col"
          >
            {/* Project image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-48 overflow-hidden relative"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/60 mb-4 flex-1">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.div whileHover={{ x: 5 }}>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 hover:bg-primary/10 gap-2 p-0"
                >
                  View Case Study
                  <ArrowRight size={16} />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
