'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ['Web Development', 'Mobile Apps', 'Shopify Store', 'ERP Solutions', 'Custom Software'],
    Company: ['About Us', 'Team', 'Careers', 'Blog', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'],
  }

  const socialLinks = [
    { icon: Github, href: '#' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/arevionx' },
    { icon: Twitter, href: '#' },
  ]

  return (
    <footer className="bg-card/50 border-t border-border/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/arevionx-logo.png"
                alt="ArevionX"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-primary">
                ArevionX
              </span>
            </div>
            <p className="text-foreground/60 mb-6">
              Building digital solutions that scale and transform businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4">{column[0]}</h4>
              <ul className="space-y-2">
                {column[1].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-foreground/60 hover:text-primary transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:arevionx@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors group"
              >
                <Mail size={18} className="group-hover:text-primary" />
                <span className="text-sm break-all">arevionx@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+919120284291"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-foreground/60 hover:text-primary transition-colors group"
              >
                <Phone size={18} className="group-hover:text-primary" />
                <span className="text-sm">+91 9120284291</span>
              </motion.a>
              <div className="flex items-start gap-3 text-foreground/60">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm">Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 text-foreground/60 text-sm"
          >
            <p>© {currentYear} ArevionX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  )
}
