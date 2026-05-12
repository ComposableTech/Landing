'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { type ThemeName, getTheme } from '@/lib/themes'

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('warm-intelligence')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const themeConfig = getTheme(theme)
    const root = document.documentElement

    // Apply brand colors
    Object.entries(themeConfig.colors.brand).forEach(([key, value]) => {
      root.style.setProperty(`--color-brand-${key}`, value)
    })

    // Apply accent colors
    Object.entries(themeConfig.colors.accent).forEach(([key, value]) => {
      root.style.setProperty(`--color-accent-${key}`, value)
    })

    // Apply intelligence colors if they exist
    if (themeConfig.colors.intelligence) {
      Object.entries(themeConfig.colors.intelligence).forEach(([key, value]) => {
        root.style.setProperty(`--color-intelligence-${key}`, value)
      })
    }

    // Apply base colors
    Object.entries(themeConfig.colors.base).forEach(([key, value]) => {
      root.style.setProperty(`--color-base-${key}`, value)
    })

    // Also update ink colors to use base (for backwards compatibility)
    Object.entries(themeConfig.colors.base).forEach(([key, value]) => {
      root.style.setProperty(`--color-ink-${key}`, value)
    })
  }, [theme, mounted])

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
