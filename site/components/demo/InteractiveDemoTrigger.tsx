'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import the tour to avoid loading Shepherd.js on initial page load
const FlexCompTour = dynamic(() => import('./FlexCompTour'), {
  ssr: false,
})

export function InteractiveDemoTrigger() {
  const [showTour, setShowTour] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowTour(true)}
        className="group relative w-full rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 to-accent-50 p-12 hover:border-brand-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-brand-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-500/30">
            <Play size={36} className="text-white ml-1" />
          </div>

          <h3 className="font-display text-2xl font-bold text-ink-900 mb-3">
            Take the Interactive Tour
          </h3>

          <p className="text-base text-ink-600 max-w-lg mb-6">
            Experience how employees allocate their total rewards in real-time.
            See tax calculations, smart guardrails, and compliance checks in action.
          </p>

          <div className="flex items-center gap-4 text-sm text-ink-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mint-500" />
              <span>2-minute guided tour</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mint-500" />
              <span>Interactive demo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mint-500" />
              <span>Free exploration</span>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-400/0 via-brand-400/5 to-accent-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {showTour && <FlexCompTour onClose={() => setShowTour(false)} />}

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(#ef444420 1px, transparent 1px),
            linear-gradient(90deg, #ef444420 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </>
  )
}
