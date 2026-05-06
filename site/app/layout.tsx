import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/theme-provider'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Composable — AI infrastructure for compensation',
    template: '%s | Composable',
  },
  description:
    'Composable is the just-in-time compensation engine — AI-drafted merit cycles that replace the spreadsheet, and an always-on agent that replaces the annual cycle entirely.',
  keywords: ['compensation technology', 'merit cycle', 'AI compensation', 'just-in-time comp', 'total rewards', 'HR tech', 'comp platform', 'compensation agent', 'salary benchmarking'],
  authors: [{ name: 'Composable' }],
  creator: 'Composable',
  metadataBase: new URL('https://getcomposable.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getcomposable.com',
    siteName: 'Composable',
    title: 'Composable — AI infrastructure for compensation',
    description: 'AI-drafted merit cycles and an always-on compensation agent — built for the end of the annual merit cycle.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Composable' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Composable — AI infrastructure for compensation',
    description: 'AI-drafted merit cycles and an always-on compensation agent — built for the end of the annual merit cycle.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-ink-900">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
