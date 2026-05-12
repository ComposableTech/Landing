'use client'

import { AlertCircle, TrendingUp, Activity, Bell } from 'lucide-react'
import { Counter } from '@/components/ui/counter'
import { FloatingElement } from '@/components/ui/floating-element'

export function CompAgentMonitor() {
  return (
    <div className="bg-gradient-to-br from-ink-900 to-ink-800 rounded-xl border border-ink-700 shadow-2xl overflow-hidden text-white relative">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-intelligence-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <div className="p-6 border-b border-white/10 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-intelligence-400" />
            <h3 className="text-xl font-bold">Compensation Agent</h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-accent-500/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></div>
            <span className="text-xs font-medium text-accent-200">Active</span>
          </div>
        </div>
        <p className="text-white/60 text-sm">Monitoring 847 employees • Real-time analysis</p>
      </div>

      {/* Active Signals */}
      <div className="p-6 space-y-4 relative">
        <div className="flex items-center justify-between text-xs text-white/60 mb-3">
          <span className="font-semibold">Active Signals</span>
          <div className="flex items-center gap-1">
            <Bell className="w-3 h-3" />
            <Counter end={12} duration={1500} />
          </div>
        </div>

        {/* High Priority Signal */}
        <FloatingElement delay={0} duration={4}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-amber-500/30 hover:border-amber-500/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-300">High Flight Risk</span>
              </div>
              <span className="text-xs text-white/40">2 days ago</span>
            </div>
            <p className="text-sm font-semibold text-white mb-2">Jordan Martinez • Senior Engineer</p>
            <p className="text-xs text-white/60 mb-3">
              Market rate +8% above current. 18 months without adjustment. Performance: Top 15%.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div>
                <p className="text-xs text-white/40">Recommended Action</p>
                <p className="text-sm font-semibold text-accent-400">+$18K adjustment</p>
              </div>
              <button className="px-3 py-1.5 bg-accent-500 text-white rounded-md text-xs font-medium hover:bg-accent-600 transition-colors">
                Review
              </button>
            </div>
          </div>
        </FloatingElement>

        {/* Medium Priority Signals */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-brand-500/20">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-400" />
              <span className="text-xs font-semibold text-brand-300">Market Shift</span>
            </div>
            <span className="text-xs text-white/40">1 week ago</span>
          </div>
          <p className="text-sm font-semibold text-white mb-2">3 employees in Data Engineering</p>
          <p className="text-xs text-white/60 mb-3">
            Regional market rate increased 5.2% for senior data roles.
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <p className="text-xs text-white/60">Estimated impact: $42K total</p>
            <button className="text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors">
              View details →
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-3 pt-4">
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-white mb-1">
              <Counter end={847} duration={2000} />
            </p>
            <p className="text-xs text-white/60">Monitored</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-accent-400 mb-1">
              <Counter end={12} duration={2000} />
            </p>
            <p className="text-xs text-white/60">Active</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-brand-400 mb-1">
              <Counter end={38} duration={2000} />
            </p>
            <p className="text-xs text-white/60">This month</p>
          </div>
        </div>
      </div>
    </div>
  )
}
