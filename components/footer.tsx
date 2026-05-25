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

  const quickLinks = [
    { label: 'Services', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ]
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/arevionx' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter / X', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Youtube', href: '#' },
  ]
  const legalLinks = [
    { label: 'Terms of service', href: '#' },
    { label: 'Privacy policy', href: '#' },
    { label: 'Cookie policy', href: '#' },
  ]

  return (
    <footer className="bg-[#09090f]">

      {/* ── Promo card (commented out) ──
      <div className="relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative -mt-16 rounded-3xl overflow-hidden max-w-5xl mx-auto shadow-2xl shadow-black/60"
          style={{ background: '#12121e' }}
        >
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-700/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-32 w-60 h-60 bg-indigo-600/25 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 py-12 gap-4">
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
      </div>
      */}

      {/* ── Main footer card (Graphy-style rounded container) ── */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            border: '1px solid rgba(255,255,255,0.10)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          {/* Card top: brand + nav columns */}
          <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1fr_1fr] gap-10 px-10 pt-12 pb-10">

            {/* Left — brand, tagline, social icons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Logo row — highlighted */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative">
                  {/* Green glow behind logo */}
                  <div
                    className="absolute inset-0 rounded-xl blur-lg pointer-events-none"
                    style={{ background: 'rgba(134,239,172,0.25)', transform: 'scale(1.8)' }}
                  />
                  <div className="w-9 h-9 relative z-10">
                    <Image src="/arevionx-logo.png" alt="ArevionX" fill className="object-contain" />
                  </div>
                </div>
                <span className="text-white font-extrabold text-lg tracking-tight">ArevionX</span>
              </div>

              {/* Tagline */}
              <p className="text-white/50 text-sm leading-relaxed mb-7 max-w-[240px]">
                We craft scalable digital products — from startups to enterprises, delivered with precision.
              </p>

              {/* Social icon row */}
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/arevionx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                {/* Twitter / X */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
                Quick links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/55 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
                Social
              </h4>
              <ul className="space-y-3">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/55 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/55 text-sm hover:text-white transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Card bottom: divider + copyright row */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 px-10 py-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-white/35 text-xs font-light tracking-wide">
              © {currentYear}, ArevionX. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
              {legalLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/35 text-xs font-light tracking-wide hover:text-white/70 underline underline-offset-2 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Big brand footer bottom ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #09090f 0%, #050505 100%)' }}
      >
        {/* Ambient dark-green side glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 0% 100%, rgba(22,163,74,0.18) 0%, transparent 65%), radial-gradient(ellipse 70% 55% at 100% 100%, rgba(22,163,74,0.18) 0%, transparent 65%)',
          }}
        />

        {/* Giant overflowing brand text */}
        <div
          className="relative select-none overflow-hidden"
          style={{ height: 'clamp(90px, 16vw, 210px)' }}
        >
          {/* Brand text — huge, silver-grey */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <span
              className="font-black leading-none whitespace-nowrap"
              style={{
                fontSize: 'clamp(80px, 15vw, 200px)',
                letterSpacing: '-0.04em',
                background:
                  'linear-gradient(to bottom, rgba(200,200,200,0.55) 0%, rgba(160,160,160,0.35) 40%, rgba(100,100,100,0.18) 70%, transparent 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                transform: 'translateY(-5%)',
              }}
            >
              ArevionX
            </span>
          </div>

          {/* Layer 1: Wide ambient green spread */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '80%',
              background:
                'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(22,163,74,0.50) 0%, rgba(21,128,61,0.30) 30%, rgba(15,80,40,0.10) 60%, transparent 80%)',
            }}
          />

          {/* Layer 2: Bright centre hotspot */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '55%',
              height: '65%',
              background:
                'radial-gradient(ellipse 65% 90% at 50% 100%, rgba(34,197,94,0.70) 0%, rgba(22,163,74,0.45) 35%, transparent 70%)',
            }}
          />

          {/* Layer 3: Tight neon highlight */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '35%',
              height: '30%',
              background:
                'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(74,222,128,0.85) 0%, rgba(34,197,94,0.50) 50%, transparent 100%)',
            }}
          />

          {/* Layer 4: Thin bright green line at bottom edge */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '3px',
              background:
                'linear-gradient(to right, transparent 0%, rgba(74,222,128,0.6) 25%, rgba(134,239,172,0.9) 50%, rgba(74,222,128,0.6) 75%, transparent 100%)',
            }}
          />

          {/* Fade vignette */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '50%',
              background: 'linear-gradient(to top, #050505 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </footer>
  )
}

