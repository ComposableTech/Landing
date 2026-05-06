'use client'

import { CheckCircle2, Clock, TrendingUp, Users } from 'lucide-react'
import { Counter } from '@/components/ui/counter'

export function MeritCycleDashboard() {
  return (
    <div className="bg-white rounded-xl border border-ink-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-intelligence-500 p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold">Q1 2026 Merit Cycle</h3>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            Draft Ready
          </span>
        </div>
        <p className="text-white/90 text-sm">AI-generated recommendations • 847 employees</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 p-6 border-b border-ink-100">
        <div className="bg-accent-50 rounded-lg p-4 border border-accent-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-accent-600" />
            </div>
            <span className="text-xs text-ink-600 font-medium">Avg Increase</span>
          </div>
          <p className="text-2xl font-bold text-ink-900">
            <Counter end={4.2} decimals={1} suffix="%" duration={2000} />
          </p>
        </div>

        <div className="bg-brand-50 rounded-lg p-4 border border-brand-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
              <Users className="w-4 h-4 text-brand-600" />
            </div>
            <span className="text-xs text-ink-600 font-medium">Budget Used</span>
          </div>
          <p className="text-2xl font-bold text-ink-900">
            <Counter end={94} decimals={0} suffix="%" duration={2000} />
          </p>
        </div>
      </div>

      {/* Sample Recommendations */}
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-ink-500 mb-3">
          <span className="font-semibold">Recent Recommendations</span>
          <span>847 total</span>
        </div>

        {[
          { name: 'Alex Chen', role: 'Senior Engineer', current: 145, recommended: 155, status: 'ready' },
          { name: 'Maria Garcia', role: 'Product Manager', current: 132, recommended: 142, status: 'ready' },
          { name: 'James Wilson', role: 'Designer', current: 118, recommended: 125, status: 'ready' },
        ].map((emp, i) => (
          <div
            key={emp.name}
            className="flex items-center justify-between p-3 rounded-lg bg-ink-50 border border-ink-100 hover:border-brand-200 transition-colors group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-sm font-semibold text-brand-700">
                {emp.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">{emp.name}</p>
                <p className="text-xs text-ink-500">{emp.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-ink-500">Current → Recommended</p>
                <p className="text-sm font-semibold text-ink-900">
                  ${emp.current}K → <span className="text-brand-600">${emp.recommended}K</span>
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-accent-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="p-6 bg-ink-50 border-t border-ink-200 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-ink-600">
          <Clock className="w-4 h-4" />
          <span>Generated 2 hours ago</span>
        </div>
        <button className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors">
          Review All →
        </button>
      </div>
    </div>
  )
}
