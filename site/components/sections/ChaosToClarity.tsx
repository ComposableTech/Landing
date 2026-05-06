'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Calendar, FileSpreadsheet, Users, Mail, Clock, AlertCircle, TrendingUp, Sparkles, Check } from 'lucide-react'

export function ChaosToClarity() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      controls.start('visible')
    }
  }, [isInView, hasAnimated, controls])

  // Chaotic elements data
  const chaoticElements = [
    { id: 1, icon: FileSpreadsheet, label: 'Spreadsheet v47_final', top: '10%', left: '15%', rotate: -12, delay: 0 },
    { id: 2, icon: FileSpreadsheet, label: 'Merit_calc_2024', top: '15%', left: '70%', rotate: 8, delay: 0.1 },
    { id: 3, icon: Calendar, label: '6 weeks prep', top: '35%', left: '10%', rotate: -5, delay: 0.2 },
    { id: 4, icon: Users, label: '847 employees', top: '40%', left: '75%', rotate: 15, delay: 0.3 },
    { id: 5, icon: Mail, label: '127 emails', top: '60%', left: '20%', rotate: -8, delay: 0.4 },
    { id: 6, icon: Clock, label: '14 months stale', top: '65%', left: '65%', rotate: 12, delay: 0.5 },
    { id: 7, icon: AlertCircle, label: '4% pool uniform', top: '80%', left: '40%', rotate: -15, delay: 0.6 },
  ]

  return (
    <section className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-white via-ink-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            The transformation
          </motion.p>
          <motion.h2
            className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From chaos to clarity
          </motion.h2>
          <motion.p
            className="text-lg text-ink-600 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Watch complexity collapse into a single, intelligent recommendation
          </motion.p>
        </div>

        {/* Animation container */}
        <div ref={containerRef} className="relative h-[600px] flex items-center justify-center">

          {/* Chaotic elements */}
          {chaoticElements.map((element) => {
            const Icon = element.icon
            return (
              <motion.div
                key={element.id}
                className="absolute"
                initial={{
                  top: element.top,
                  left: element.left,
                  rotate: element.rotate,
                  opacity: 1,
                  scale: 1,
                }}
                animate={controls}
                variants={{
                  visible: {
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    rotate: 0,
                    opacity: 0,
                    scale: 0.3,
                    transition: {
                      duration: 1.2,
                      delay: element.delay,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    },
                  },
                }}
              >
                <div className="bg-white border-2 border-red-200 rounded-lg p-4 shadow-lg backdrop-blur-sm bg-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-900 whitespace-nowrap">{element.label}</p>
                      <p className="text-xs text-red-600">Manual</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Clean advisor card (appears after collapse) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: 1.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              },
            }}
          >
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-200 via-intelligence-200 to-accent-200 rounded-2xl blur-xl opacity-60 animate-pulse-glow"></div>

              {/* Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-ink-200/60 p-6 relative">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-ink-100 flex items-center justify-center text-ink-600 font-semibold text-lg border border-ink-200">
                      SJ
                    </div>
                    <div>
                      <div className="font-semibold text-ink-900">Sarah Jenkins</div>
                      <div className="text-sm text-ink-500">Senior Software Engineer</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> High Risk
                  </span>
                </div>

                {/* Salary comparison */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-ink-100 bg-ink-50 rounded-lg p-3">
                    <div className="text-xs text-ink-500 mb-1">Current Salary</div>
                    <div className="font-semibold text-ink-900 text-lg">$145,000</div>
                  </div>
                  <div className="border border-brand-200 bg-gradient-to-br from-brand-50 to-intelligence-50 rounded-lg p-3 relative">
                    <div className="text-xs text-brand-600 mb-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Recommended
                    </div>
                    <div className="font-semibold text-brand-900 text-lg">$160,000</div>
                  </div>
                </div>

                {/* AI Rationale */}
                <div className="bg-ink-50 border border-ink-100 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                    <span className="text-sm font-semibold text-ink-900">AI Rationale</span>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Market rate for this tier increased 6%. Sarah&apos;s performance is top 10%. Flight risk is elevated due to 14-month tenure without adjustment. <strong>Recommendation: Immediate $15K adjustment.</strong>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-ink-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-ink-800 transition-colors shadow-sm">
                    Approve
                  </button>
                  <button className="flex-1 bg-white border border-ink-200 text-ink-700 py-2.5 rounded-md text-sm font-medium hover:bg-ink-50 transition-colors shadow-sm">
                    Modify
                  </button>
                </div>
              </div>

              {/* Floating sync badge */}
              <motion.div
                className="absolute -right-4 -bottom-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 2.5,
                      ease: 'backOut',
                    },
                  },
                }}
              >
                <div className="bg-white border border-accent-200 shadow-xl rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full bg-accent-400 animate-ping opacity-30"></div>
                    <Check className="w-4 h-4 text-accent-600 relative" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink-900">AI Generated</div>
                    <div className="text-[10px] text-ink-500">Just now</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Connecting lines effect (optional visual enhancement) */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: [0, 0.3, 0],
                scale: [0.5, 2, 0.5],
                transition: {
                  duration: 1.5,
                  delay: 0.8,
                  ease: 'easeInOut',
                },
              },
            }}
          >
            <div className="w-96 h-96 rounded-full border-2 border-brand-300"></div>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center max-w-2xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 2.8,
              },
            },
          }}
        >
          <p className="text-base text-ink-600">
            Six weeks of manual prep, 847 spreadsheet rows, 127 emails, and endless calibration meetings —
            <strong className="text-ink-900"> collapsed into one AI-drafted recommendation.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
