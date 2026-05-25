'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Globe, Smartphone, ShoppingCart, Database, Code2, Palette, ArrowRight, Zap, Lock, GitBranch, MessageSquare, Mail, Phone, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: MessageSquare,
    title: 'Arevion Samvaad',
    description: 'Conversational AI & LLMs',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10 border-blue-500/20',
    href: '#services'
  },
  {
    icon: Code2,
    title: 'Arevion Studio',
    description: 'Content Transformation & Translation',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    href: '#services'
  },
  {
    icon: Smartphone,
    title: 'Arevion Akshar',
    description: 'Document Digitisation & OCR',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10 border-orange-500/20',
    href: '#services'
  },
  {
    icon: Database,
    title: 'Arevion Arya',
    description: 'AI for Work & Automation',
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10 border-teal-500/20',
    href: '#services'
  }
]

const projects = [
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform',
    href: '#portfolio'
  },
  {
    title: 'E-Shop Platform',
    description: 'Modern shopping experience with Stripe',
    href: '#portfolio'
  },
  {
    title: 'Enterprise ERP',
    description: 'Scalable business management system',
    href: '#portfolio'
  }
]

const whyUs = [
  {
    icon: Zap,
    title: 'Ultra-Fast Delivery',
    description: 'Optimized for speed and reliability',
  },
  {
    icon: Lock,
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security architecture',
  },
  {
    icon: GitBranch,
    title: 'Agile Process',
    description: 'Flexible development and feedback',
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const ListItem = ({ className, title, children, icon: Icon, color, bgColor, ...props }: any) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-all hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary group/item",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-4">
              {Icon && (
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover/item:scale-105", bgColor || "bg-primary/10 border-primary/20")}>
                  <Icon size={20} className={cn(color || "text-primary")} />
                </div>
              )}
              <div>
                <div className="text-base font-semibold leading-none">{title}</div>
                <p className="line-clamp-1 text-sm leading-snug text-muted-foreground mt-1.5 group-hover/item:text-foreground/90 transition-colors">
                  {children}
                </p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 md:top-8 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none"
    >
      <div className="pointer-events-auto relative w-full max-w-[94vw] lg:max-w-[90vw] glass rounded-[2rem] md:rounded-[2.5rem] border border-border/50 px-8 py-4 md:py-5 shadow-2xl shadow-primary/5 backdrop-blur-xl transition-all duration-500">
        <NavigationMenu className="w-full max-w-none flex-col items-stretch">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group z-50">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="relative w-11 h-11"
              >
                <Image
                  src="/arevionx-logo.png"
                  alt="ArevionX"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">
                ArevionX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
                  <NavigationMenuList className="gap-4 lg:gap-6">
                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/70 hover:text-primary data-[state=open]:text-primary transition-colors text-base font-semibold">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-8 p-8 w-[920px] lg:grid-cols-[1.1fr_1.9fr]">
                      <div className="flex flex-col gap-4">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3">Products</div>
                        <ul className="grid gap-2">
                          {services.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              icon={item.icon}
                              color={item.color}
                              bgColor={item.bgColor}
                              href={item.href}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Featured Dashboard Card */}
                      <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/40 backdrop-blur-md p-6 flex items-center group/featured transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                        <div className="grid grid-cols-[1.2fr_1.8fr] gap-6 w-full items-center">
                          {/* Gradient Box */}
                          <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-blue-500 flex items-center justify-center p-6 shadow-inner overflow-hidden group-hover/featured:scale-[1.02] transition-transform duration-500">
                            {/* Decorative background circle */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <span className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-md">
                              Dashboard
                            </span>
                          </div>
                          
                          {/* Content */}
                          <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-bold mb-2 text-foreground">ArevionX Dashboard</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Manage your projects with our unified enterprise suite. Track real-time analytics, cloud deployments, and custom API workloads from a single interface.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Portfolio */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/70 hover:text-primary data-[state=open]:text-primary transition-colors text-base font-semibold">
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-8 p-8 w-[920px] lg:grid-cols-[1.1fr_1.9fr]">
                      <div className="flex flex-col gap-4">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3">Case Studies</div>
                        <ul className="grid gap-2">
                          {projects.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href}>
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                        <Button variant="ghost" className="justify-start gap-2 text-primary hover:bg-primary/5 hover:text-primary mt-4">
                          View All Projects <ArrowRight size={14} />
                        </Button>
                      </div>
                      <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-slate-950 group/img">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                        <Image 
                          src="/portfolio-1.jpg" 
                          alt="Featured Project" 
                          fill 
                          className="object-cover group-hover/img:scale-110 transition-transform duration-700 opacity-60"
                        />
                        <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                          <div className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Latest Release</div>
                          <h3 className="text-3xl font-bold text-white mb-3">Modern SaaS Dashboard</h3>
                          <p className="text-base text-white/70">A comprehensive analytics platform built with Next.js 15 and responsive charting.</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Why Us */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/70 hover:text-primary data-[state=open]:text-primary transition-colors text-base font-semibold">
                    Why Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-8 w-[920px]">
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3">Our Core Values</div>
                      <ul className="grid gap-4 md:grid-cols-3">
                        {whyUs.map((item) => (
                          <ListItem key={item.title} title={item.title} icon={item.icon} href="#why-us">
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                      <div className="mt-6 p-6 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold">Ready to start your project?</div>
                          <div className="text-sm text-muted-foreground mt-1">Let&apos;s build something amazing together.</div>
                        </div>
                        <Button size="lg" className="rounded-full bg-primary text-foreground">Contact Us</Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-foreground/70 hover:text-primary data-[state=open]:text-primary transition-colors text-base font-semibold">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-8 w-[920px]">
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3">Connect With Us</div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <a href="mailto:hello@arevionx.com" className="flex items-center gap-4 p-5 rounded-3xl hover:bg-accent transition-all group/contact border border-transparent hover:border-border/50">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover/contact:bg-primary/20">
                            <Mail className="text-primary" size={24} />
                          </div>
                          <div>
                            <div className="text-base font-bold">Email Us</div>
                            <div className="text-sm text-muted-foreground">hello@arevionx.com</div>
                          </div>
                        </a>
                        <div className="flex items-center gap-4 p-5 rounded-3xl hover:bg-accent transition-all group/contact border border-transparent hover:border-border/50">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover/contact:bg-primary/20">
                            <Phone className="text-primary" size={24} />
                          </div>
                          <div>
                            <div className="text-base font-bold">Call Us</div>
                            <div className="text-sm text-muted-foreground">+1 (555) 000-0000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-full hover:bg-primary/10 transition-colors"
              >
                {mounted && (theme === 'dark' ? (
                  <Sun size={22} className="text-yellow-500" />
                ) : (
                  <Moon size={22} className="text-slate-700" />
                ))}
              </motion.button>
              
              <Button size="lg" className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-foreground rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30">
                Get Started
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 text-foreground hover:bg-primary/10 rounded-full transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-border bg-background px-4 py-8 h-screen"
          >
            <nav className="flex flex-col gap-6">
              {['Services', 'Portfolio', 'Why Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary text-foreground rounded-2xl mt-4">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
