'use client'

import { motion } from 'framer-motion'
import { User, Lightbulb, BarChart2, Settings, CheckCircle, Headphones } from 'lucide-react'

const steps = [
  {
    title: 'Requirement Analysis',
    description: 'Understand your business goals and technical requirements',
    icon: User,
    color: '#FF6B35',
  },
  {
    title: 'Design & Planning',
    description: 'Create detailed architecture and design specifications',
    icon: Lightbulb,
    color: '#FF3CAC',
  },
  {
    title: 'Development',
    description: 'Build your solution using industry best practices',
    icon: BarChart2,
    color: '#A855F7',
  },
  {
    title: 'Testing & QA',
    description: 'Rigorous quality assurance and performance testing',
    icon: Settings,
    color: '#6366F1',
  },
  {
    title: 'Deployment',
    description: 'Seamless launch and optimization for production',
    icon: CheckCircle,
    color: '#3B82F6',
  },
  {
    title: 'Support',
    description: '24/7 monitoring and dedicated post-launch support',
    icon: Headphones,
    color: '#06B6D4',
  },
]

// Road path: left → right with 2 smooth S-curves
// ViewBox: 1200 x 500
const ROAD_PATH = `
  M 60 380
  C 60 380, 120 380, 180 340
  C 240 300, 260 220, 320 180
  C 380 140, 420 130, 480 130
  C 540 130, 580 160, 620 200
  C 660 240, 680 280, 720 300
  C 760 320, 800 310, 840 280
  C 880 250, 900 200, 940 170
  C 980 140, 1020 130, 1080 130
  C 1120 130, 1150 140, 1160 150
`

// Pin positions along the path (manually tuned to match path)
const pins: [number, number][] = [
  [180,  340],  // 01
  [320,  180],  // 02
  [480,  130],  // 03
  [720,  300],  // 04
  [840,  280],  // 05
  [1080, 130],  // 06
]

// Label layout: above or below, left or right aligned
// labelSide: 'above' | 'below', textSide: 'left' | 'right'
const labelConfig = [
  { side: 'below', align: 'left'  },  // 01
  { side: 'above', align: 'left'  },  // 02
  { side: 'above', align: 'right' },  // 03
  { side: 'below', align: 'right' },  // 04
  { side: 'above', align: 'right' },  // 05
  { side: 'above', align: 'right' },  // 06
]

const LABEL_W = 180
const LABEL_H = 80
const PIN_R = 22
const RING_R = 30

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let cur = ''
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w
    if (test.length > maxChars) { lines.push(cur); cur = w }
    else cur = test
  }
  if (cur) lines.push(cur)
  return lines.slice(0, 3)
}

export default function Process() {
  return (
    <section className="py-24 px-4 overflow-hidden bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Process</span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4 text-foreground">
          Structured Approach to Excellence
        </h2>
        <p className="text-lg text-foreground/60 max-w-xl mx-auto">
          A proven methodology to deliver outstanding results at every stage
        </p>
      </motion.div>

      {/* Roadmap */}
      <div className="w-full max-w-6xl mx-auto">
        <svg
          viewBox="0 0 1200 520"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#FF6B35" />
              <stop offset="20%"  stopColor="#FF3CAC" />
              <stop offset="45%"  stopColor="#A855F7" />
              <stop offset="65%"  stopColor="#6366F1" />
              <stop offset="82%"  stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>

            <filter id="ps">
              <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Road shadow */}
          <path d={ROAD_PATH} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" />
          {/* Road */}
          <path d={ROAD_PATH} fill="none" stroke="url(#rg)" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
          {/* Dashes */}
          <path d={ROAD_PATH} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeDasharray="18 14" strokeLinecap="round" />

          {/* Labels + connector lines */}
          {pins.map(([cx, cy], i) => {
            const cfg = labelConfig[i]
            const isAbove = cfg.side === 'above'
            const isLeft  = cfg.align === 'left'

            const GAP = 18
            const boxY = isAbove ? cy - RING_R - GAP - LABEL_H : cy + RING_R + GAP
            const boxX = isLeft  ? cx - LABEL_W - 10 : cx - LABEL_W / 2 + 10

            // connector line endpoints
            const lineY1 = isAbove ? cy - RING_R - 4 : cy + RING_R + 4
            const lineY2 = isAbove ? boxY + LABEL_H  : boxY
            const lineX  = cx

            const descLines = wrapText(steps[i].description, 24)

            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: isAbove ? 10 : -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                viewport={{ once: true }}
              >
                {/* Connector */}
                <line
                  x1={lineX} y1={lineY1}
                  x2={lineX} y2={lineY2}
                  stroke={steps[i].color}
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  opacity="0.7"
                />

                {/* Card background */}
                <rect
                  x={boxX} y={boxY}
                  width={LABEL_W} height={LABEL_H}
                  rx="10"
                  fill="rgba(10,10,25,0.85)"
                  stroke={steps[i].color}
                  strokeWidth="1"
                  strokeOpacity="0.5"
                />
                {/* Accent bar */}
                <rect
                  x={isLeft ? boxX + LABEL_W - 3 : boxX}
                  y={boxY + 10}
                  width="3" height={LABEL_H - 20}
                  rx="2"
                  fill={steps[i].color}
                />

                {/* Step number */}
                <text
                  x={isLeft ? boxX + LABEL_W - 10 : boxX + 10}
                  y={boxY + 20}
                  textAnchor={isLeft ? 'end' : 'start'}
                  fontSize="8" fontWeight="700"
                  fill={steps[i].color}
                  letterSpacing="2"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                >
                  {String(i + 1).padStart(2, '0')}
                </text>

                {/* Title */}
                <text
                  x={isLeft ? boxX + LABEL_W - 10 : boxX + 10}
                  y={boxY + 34}
                  textAnchor={isLeft ? 'end' : 'start'}
                  fontSize="11.5" fontWeight="800"
                  fill="white"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                >
                  {steps[i].title}
                </text>

                {/* Description */}
                {descLines.map((line, li) => (
                  <text
                    key={li}
                    x={isLeft ? boxX + LABEL_W - 10 : boxX + 10}
                    y={boxY + 50 + li * 12}
                    textAnchor={isLeft ? 'end' : 'start'}
                    fontSize="9"
                    fill="rgba(255,255,255,0.5)"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    {line}
                  </text>
                ))}
              </motion.g>
            )
          })}

          {/* Pins */}
          {pins.map(([cx, cy], i) => {
            const Icon = steps[i].icon
            return (
              <motion.g
                key={`p${i}`}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.05, type: 'spring', stiffness: 220 }}
                viewport={{ once: true }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              >
                {/* Pulse ring */}
                <circle cx={cx} cy={cy} r={RING_R + 8} fill={steps[i].color} opacity="0.12" />
                {/* White border */}
                <circle cx={cx} cy={cy} r={RING_R} fill="white" filter="url(#ps)" />
                {/* Color fill */}
                <circle cx={cx} cy={cy} r={PIN_R} fill={steps[i].color} />
                {/* Icon */}
                <foreignObject x={cx - 10} y={cy - 10} width="20" height="20">
                  <div
                    // @ts-ignore
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%' }}
                  >
                    <Icon size={13} color="white" strokeWidth={2.5} />
                  </div>
                </foreignObject>
              </motion.g>
            )
          })}
        </svg>
      </div>
    </section>
  )
}
