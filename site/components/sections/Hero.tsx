'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertCircle, TrendingUp, Sparkles, Check, Zap } from 'lucide-react'
import { Counter } from '@/components/ui/counter'
import { FloatingElement } from '@/components/ui/floating-element'

export function Hero() {
  const [typewriterText, setTypewriterText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const words = ["engine", "layer", "advisor"]
    let i = 0
    let j = 0
    let currentWord = ""
    let isDeleting = false

    function type() {
      currentWord = words[i]

      if (isDeleting) {
        setTypewriterText(currentWord.substring(0, j - 1))
        j--
      } else {
        setTypewriterText(currentWord.substring(0, j + 1))
        j++
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && j === currentWord.length) {
        typeSpeed = 2500 // Pause at end of word
        isDeleting = true
      } else if (isDeleting && j === 0) {
        isDeleting = false
        i = (i + 1) % words.length
        typeSpeed = 500 // Pause before typing next word
      }

      setTimeout(type, typeSpeed)
    }

    const timer = setTimeout(type, 500) // Initial delay before starting

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-pattern"></div>

      {/* Animated mesh gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-300 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-glow"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-intelligence-300 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating geometric shapes */}
      <FloatingElement delay={0} duration={4} className="absolute top-20 left-10 opacity-10">
        <div className="w-16 h-16 border-2 border-brand-400 rotate-45"></div>
      </FloatingElement>
      <FloatingElement delay={1} duration={5} className="absolute top-40 right-20 opacity-10">
        <div className="w-12 h-12 rounded-full border-2 border-intelligence-400"></div>
      </FloatingElement>
      <FloatingElement delay={2} duration={6} className="absolute bottom-32 left-1/4 opacity-10">
        <div className="w-8 h-8 border-2 border-accent-400"></div>
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Hero Text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-200 bg-white text-sm text-ink-600 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Accepting design partners in US and Canada
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-ink-900 mb-6 leading-[1.1]">
              The always-on compensation intelligence{' '}
              <span className="text-brand-600">{typewriterText}</span>
              <span className={`border-r-2 border-brand-600 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </h1>
            <p className="text-lg md:text-xl text-ink-600 mb-8 leading-relaxed">
              Composable sits on top of your existing HR stack and calculates exactly what every employee should be paid—and when. Move your team from rigid annual cycles to data-driven, just-in-time compensation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="inline-flex justify-center items-center h-12 px-6 rounded-md bg-ink-900 text-white font-medium hover:bg-ink-800 transition-colors shadow-sm">
                Apply for design partner program
              </Link>
              <Link href="#products" className="inline-flex justify-center items-center h-12 px-6 rounded-md border border-ink-200 bg-white text-ink-700 font-medium hover:bg-ink-50 transition-colors">
                See how it works
              </Link>
            </div>
          </div>

          {/* Hero UI Mockup (The "Advisor") */}
          <div className="relative w-full max-w-md mx-auto lg:ml-auto">
            {/* Decorative background element */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-200 via-intelligence-200 to-accent-200 rounded-2xl blur-xl opacity-60 animate-pulse-glow"></div>

            {/* Main UI Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-ink-200/60 p-6 relative z-20 hover:shadow-brand-500/20 hover:scale-[1.02] transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-ink-100 flex items-center justify-center text-ink-600 font-semibold text-lg border border-ink-200">SJ</div>
                  <div>
                    <div className="font-semibold text-ink-900">Sarah Jenkins</div>
                    <div className="text-sm text-ink-500">Senior Software Engineer</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> High Risk
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-ink-100 bg-ink-50 rounded-lg p-3 relative overflow-hidden group">
                  <div className="text-xs text-ink-500 mb-1">Current Salary</div>
                  <div className="font-semibold text-ink-900 text-lg">
                    <Counter end={145000} duration={2000} prefix="$" decimals={0} className="tabular-nums" />
                  </div>
                </div>
                <div className="border border-brand-200 bg-gradient-to-br from-brand-50 to-intelligence-50 rounded-lg p-3 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-400/10 to-intelligence-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-xs text-brand-600 mb-1 flex items-center gap-1 relative">
                    <TrendingUp className="w-3 h-3" /> Recommended
                  </div>
                  <div className="font-semibold text-brand-900 text-lg relative">
                    <Counter end={160000} duration={2000} prefix="$" decimals={0} className="tabular-nums" />
                  </div>
                  {/* Small sparkle effect */}
                  <div className="absolute top-1 right-1">
                    <Zap className="w-3 h-3 text-intelligence-400 opacity-70" />
                  </div>
                </div>
              </div>

              <div className="bg-ink-50 border border-ink-100 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <span className="text-sm font-semibold text-ink-900">Advisor Rationale</span>
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Market rate for this tier increased 6%. Sarah&apos;s performance is top 10%. Flight risk is elevated due to 14-month tenure without adjustment. <strong>Recommendation: Immediate $15K adjustment.</strong>
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-ink-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-ink-800 transition-colors shadow-sm">Approve</button>
                <button className="flex-1 bg-white border border-ink-200 text-ink-700 py-2.5 rounded-md text-sm font-medium hover:bg-ink-50 transition-colors shadow-sm">Modify</button>
              </div>
            </div>

            {/* Floating sync notification */}
            <FloatingElement delay={0.5} duration={4} className="absolute -right-8 -bottom-8 z-30">
              <div className="bg-white border border-accent-200 shadow-xl rounded-lg p-3 flex items-center gap-3 hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-accent-400 animate-ping opacity-30"></div>
                  <Check className="w-4 h-4 text-accent-600 relative" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink-900">Synced to HRIS</div>
                  <div className="text-[10px] text-ink-500">Just now</div>
                </div>
              </div>
            </FloatingElement>
          </div>

        </div>
      </div>
    </header>
  )
}
