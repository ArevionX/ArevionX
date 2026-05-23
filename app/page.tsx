'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Process from '@/components/process'
import Portfolio from '@/components/portfolio'
import WhyChoose from '@/components/why-choose'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
