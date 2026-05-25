'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

// ─── Canvas Globe ─────────────────────────────────────────────────────────────
function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height
    const cx = W / 2
    const cy = H / 2
    const R = W * 0.44

    const dots: { lat: number; lng: number }[] = []
    for (let lat = -80; lat <= 80; lat += 9) {
      for (let lng = -180; lng < 180; lng += 9) {
        dots.push({ lat, lng })
      }
    }

    function isLand(lat: number, lng: number): boolean {
      if (lat > 15 && lat < 72 && lng > -170 && lng < -50) return true
      if (lat > -55 && lat < 15 && lng > -82 && lng < -34) return true
      if (lat > 35 && lat < 72 && lng > -10 && lng < 40) return true
      if (lat > -35 && lat < 37 && lng > -18 && lng < 52) return true
      if (lat > 0 && lat < 75 && lng > 40 && lng < 145) return true
      if (lat > -45 && lat < -10 && lng > 113 && lng < 155) return true
      return false
    }

    let rotation = 0
    let animId: number
    let last = 0

    function draw() {
      ctx!.clearRect(0, 0, W, H)

      // Outer glow ring
      ctx!.beginPath()
      ctx!.arc(cx, cy, R * 0.99, 0, Math.PI * 2)
      ctx!.strokeStyle = 'rgba(100,220,180,0.10)'
      ctx!.lineWidth = 12
      ctx!.stroke()

      // Green arc highlight top-right
      ctx!.beginPath()
      ctx!.arc(cx, cy, R * 0.97, -Math.PI * 0.65, Math.PI * 0.05)
      ctx!.strokeStyle = 'rgba(120,240,190,0.65)'
      ctx!.lineWidth = 1.8
      ctx!.stroke()

      type Pt = { px: number; py: number; z: number; land: boolean }
      const projected: Pt[] = []

      dots.forEach(({ lat, lng }) => {
        const phi = ((90 - lat) * Math.PI) / 180
        const theta = ((lng + rotation) * Math.PI) / 180
        const x3d = R * Math.sin(phi) * Math.cos(theta)
        const y3d = -R * Math.cos(phi)
        const z3d = R * Math.sin(phi) * Math.sin(theta)
        if (z3d < 0) return
        projected.push({ px: cx + x3d, py: cy + y3d, z: z3d, land: isLand(lat, lng) })
      })

      // Connection lines
      const landPts = projected.filter(d => d.land)
      for (let i = 0; i < landPts.length; i++) {
        for (let j = i + 1; j < landPts.length; j++) {
          const dx = landPts[i].px - landPts[j].px
          const dy = landPts[i].py - landPts[j].py
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 26) {
            ctx!.beginPath()
            ctx!.moveTo(landPts[i].px, landPts[i].py)
            ctx!.lineTo(landPts[j].px, landPts[j].py)
            ctx!.strokeStyle = `rgba(255,255,255,${(1 - dist / 26) * 0.14})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }

      // Dots
      projected.forEach(({ px, py, z, land }) => {
        const b = 0.3 + (z / R) * 0.7
        ctx!.beginPath()
        if (land) {
          ctx!.arc(px, py, 2.1, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(255,255,255,${b * 0.9})`
        } else {
          ctx!.arc(px, py, 1.1, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(255,255,255,${b * 0.2})`
        }
        ctx!.fill()
      })
    }

    function animate(ts: number) {
      const delta = ts - last
      last = ts
      rotation += delta * 0.011
      draw()
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  return <canvas ref={canvasRef} width={400} height={400} className="w-full h-full" />
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = ['Services', 'Portfolio', 'About Us', 'FAQ', 'Contact Us']
  const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/arevionx' },
    { label: 'Twitter', href: '#' },
    { label: 'Youtube', href: '#' },
  ]
  const legalLinks = ['Terms of service', 'Privacy policy', 'Cookie policy']

  return (
    <footer className="bg-[#09090f]">

      {/* ── Wrapper that creates the overlap effect ── */}
      {/*
        The promo card sits inside the dark footer bg.
        It has a negative top margin so it "climbs up" and overlaps
        the last section above it (CTA / newsletter).
        The footer content below gets natural top padding.
      */}
      <div className="relative px-4 sm:px-6 lg:px-8">

        {/* Promo card — pulled up with negative margin to overlap the section above */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative -mt-16 rounded-3xl overflow-hidden max-w-5xl mx-auto shadow-2xl shadow-black/60"
          style={{ background: '#12121e' }}
        >
          {/* Purple / indigo glow bottom-left */}
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-700/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-32 w-60 h-60 bg-indigo-600/25 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 py-12 gap-4">
            {/* Left content */}
            <div className="flex-1 max-w-md">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3"
              >
                Build smarter software
                <br />
                with ArevionX
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white/50 text-sm mb-7 leading-relaxed"
              >
                From startups to enterprises — scalable, innovative solutions delivered fast.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <button className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-white/90 active:scale-95 transition-all">
                  Get started
                </button>
              </motion.div>
            </div>

            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] lg:w-[310px] lg:h-[310px]"
            >
              <Globe />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Footer content below the card ── */}
        <div className="max-w-5xl mx-auto pt-16 pb-8">

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">

            {/* Brand + address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 relative">
                  <Image src="/arevionx-logo.png" alt="ArevionX" fill className="object-contain" />
                </div>
                <span className="text-white font-bold text-sm tracking-tight">arevionx</span>
              </div>

              <div className="text-white/40 text-sm leading-relaxed mb-6 space-y-0.5">
                <p>Hazratganj, Lucknow</p>
                <p>Uttar Pradesh 226001</p>
                <p>India</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/30 text-xs mb-1.5">Phone number</p>
                  <a
                    href="tel:+919120284291"
                    className="text-white text-sm font-medium hover:text-primary transition-colors"
                  >
                    +91 9120284291
                  </a>
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-1.5">Email</p>
                  <a
                    href="mailto:arevionx@gmail.com"
                    className="text-white text-sm font-medium hover:text-primary transition-colors break-all"
                  >
                    arevionx@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
                Quick links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
                Social
              </h4>
              <ul className="space-y-3">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/60 text-sm hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Big brand footer bottom ── */}
      <div className="relative overflow-hidden bg-[#09090f]">

        {/* Top bar: Terms | Copyright | Privacy */}
        <div className="relative z-10 flex items-center justify-between px-8 sm:px-12 lg:px-16 py-5">
          <a href="#" className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors">
            Terms &amp; Conditions
          </a>
          <p className="text-white/50 text-xs sm:text-sm text-center">
            © {currentYear} ArevionX. All Rights Reserved.
          </p>
          <a href="#" className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Giant brand text */}
        <div className="relative select-none" style={{ height: 'clamp(80px, 14vw, 180px)' }}>
          {/* The text itself */}
          <div
            className="absolute inset-0 flex items-end justify-center pb-0 overflow-hidden"
          >
            <span
              className="font-black uppercase tracking-tighter leading-none text-transparent"
              style={{
                fontSize: 'clamp(60px, 12vw, 160px)',
                WebkitTextStroke: '1px rgba(255,255,255,0.12)',
                color: 'transparent',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                letterSpacing: '-0.03em',
              }}
            >
              ArevionX
            </span>
          </div>

          {/* Green glow floor — sits at the very bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: '60%' }}
          >
            {/* Wide green radial glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: '90%',
                height: '100%',
                background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(34,197,94,0.45) 0%, rgba(16,185,129,0.25) 35%, transparent 70%)',
              }}
            />
            {/* Bright center hotspot */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: '40%',
                height: '50%',
                background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(74,222,128,0.55) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Fade the text into the glow at the bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '55%',
              background: 'linear-gradient(to top, #09090f 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </footer>
  )
}
