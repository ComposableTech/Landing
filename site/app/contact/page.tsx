'use client'

import { useState } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', '9ee45451-7164-48e5-a611-10df263c0cf8')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please email us directly at pat@getcomposable.com')
      }
    } catch {
      alert('Something went wrong. Please email us directly at pat@getcomposable.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: copy */}
            <AnimateIn direction="left">
              <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">Contact</p>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink-950 mb-6 leading-tight">
                Let&apos;s talk compensation.
              </h1>
              <p className="text-lg text-ink-500 leading-relaxed mb-10">
                Every conversation starts with understanding your actual comp challenges, to ensure we are the right fit for you.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900 mb-0.5">Email Pat directly</p>
                    <a href="mailto:pat@getcomposable.com" className="text-brand-600 hover:underline text-sm">
                      pat@getcomposable.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900 mb-0.5">Made in</p>
                    <p className="text-sm text-ink-500">Canada 🇨🇦</p>
                    <p className="text-sm text-ink-500">Serving Canada and the US</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-brand-50 border border-brand-100 rounded-2xl">
                <p className="text-sm font-semibold text-brand-800 mb-1">Design partner program</p>
                <p className="text-sm text-brand-700 leading-relaxed">
                  We review every application personally and respond within 2 business days. Design partners get preferred pricing and direct roadmap input.
                </p>
              </div>
            </AnimateIn>

            {/* Right: form */}
            <AnimateIn direction="right" delay={0.1}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="font-display text-2xl font-bold text-ink-950 mb-3">Application received.</h2>
                  <p className="text-ink-500 leading-relaxed">
                    Thanks for reaching out. We review every inquiry personally and will get back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-700 mb-1.5">First name *</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="Alex"
                        className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-700 mb-1.5">Last name</label>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Chen"
                        className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Work email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ink-700 mb-1.5">Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink-700 mb-1.5">Company size</label>
                      <select
                        name="company_size"
                        className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                      >
                        <option value="">Select size</option>
                        <option>200–500 employees</option>
                        <option>500–1,000 employees</option>
                        <option>1,000–2,000 employees</option>
                        <option>2,000+ employees</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">Your role</label>
                    <select
                      name="role"
                      className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="">Select role</option>
                      <option>Total Rewards Leader</option>
                      <option>Head of People</option>
                      <option>Compensation Team</option>
                      <option>HR Operations</option>
                      <option>Finance</option>
                      <option>CEO / Founder</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-1.5">What are you trying to solve?</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your biggest comp challenge, your timeline, or anything specific you'd like to see in our demo."
                      className="w-full border border-ink-200 rounded-xl px-4 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    {loading ? 'Sending...' : 'Apply to become a design partner'}
                  </button>
                  <p className="text-xs text-ink-400 text-center">
                    We review every application personally. Response within 2 business days.
                  </p>
                </form>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
