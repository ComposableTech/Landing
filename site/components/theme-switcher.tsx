'use client'

import { useState } from 'react'
import { Palette, Check } from 'lucide-react'
import { useTheme } from './theme-provider'
import { getAllThemes, type ThemeName } from '@/lib/themes'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const themes = getAllThemes()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-900 text-sm">Color Palette Preview</h3>
              <p className="text-xs text-slate-600 mt-1">Choose a theme to see it applied live</p>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name as ThemeName)
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-3 hover:bg-slate-50 transition-colors text-left border-b border-slate-100 last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900">{t.label}</span>
                        {theme === t.name && (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">{t.description}</p>

                      {/* Color swatches */}
                      <div className="flex gap-1.5 mt-2">
                        <div
                          className="w-6 h-6 rounded border border-slate-200"
                          style={{ backgroundColor: t.colors.brand[500] }}
                          title="Primary"
                        />
                        <div
                          className="w-6 h-6 rounded border border-slate-200"
                          style={{ backgroundColor: t.colors.accent[500] }}
                          title="Accent"
                        />
                        {t.colors.intelligence && (
                          <div
                            className="w-6 h-6 rounded border border-slate-200"
                            style={{ backgroundColor: t.colors.intelligence[500] }}
                            title="Intelligence"
                          />
                        )}
                        <div
                          className="w-6 h-6 rounded border border-slate-200"
                          style={{ backgroundColor: t.colors.base[900] }}
                          title="Base"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="p-3 bg-slate-50 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                This is a design tool. Your selection will be saved locally.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-white rounded-full shadow-lg border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all text-sm font-medium text-slate-700 hover:text-slate-900"
      >
        <Palette className="w-4 h-4" />
        <span>Theme: {themes.find(t => t.name === theme)?.label}</span>
      </button>
    </div>
  )
}
