'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const productLinks = [
  {
    label: 'Compensation Agent for Merit Cycles',
    href: '/products/compensation-agent-merit-cycles',
    desc: 'A compensation intelligence engine that replaces spreadsheets',
    image: '/mock-recommendations.png',
  },
  {
    label: 'Flexible Compensation Infrastructure',
    href: '/products/flexible-compensation-infrastructure',
    desc: 'Employee-directed total rewards allocation',
    image: '/mock-flex.png',
  },
]

// Commented out for simplified landing page mode — uncomment to restore
/*
const solutionLinks = [
  { label: 'Total Rewards Leaders', href: '/solutions/total-rewards-leaders', desc: 'Move retention, talent attraction, and comp ROI' },
  { label: 'CHROs & People Leaders', href: '/solutions/chros', desc: 'Transform comp from cost center to retention engine' },
  { label: 'HR Operations', href: '/solutions/hr-operations', desc: 'Automate the comp cycle. Reclaim your quarter.' },
  { label: 'Finance & FP&A', href: '/solutions/finance-fpa', desc: 'Fully-loaded comp costs. No surprises.' },
]

const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Security & Trust', href: '/security' },
  { label: 'Changelog', href: '/changelog' },
]
*/

type DropdownKey = 'product' | null

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [hoveredProduct, setHoveredProduct] = useState(productLinks[0])
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpenDropdown(null)
  }, [pathname])

  const toggle = (key: DropdownKey) =>
    setOpenDropdown((prev) => (prev === key ? null : key))

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-ink-200 shadow-sm'
          : 'bg-white border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.svg"
              alt="Composable"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Right side: Product dropdown + Sign in + CTA */}
          <div className="flex items-center gap-1">
            {/* Product dropdown button */}
            <button
              onClick={() => toggle('product')}
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                openDropdown === 'product' ? 'bg-ink-100 text-ink-900' : 'text-ink-700 hover:text-ink-900 hover:bg-ink-50'
              )}
            >
              Product
              <ChevronDown size={14} className={cn('transition-transform duration-150', openDropdown === 'product' && 'rotate-180')} />
            </button>

            {/* Solutions, Pricing, Resources — commented out for landing page mode
            <DropdownButton label="Solutions" isOpen={openDropdown === 'solutions'} onClick={() => toggle('solutions')} />
            <Link href="/pricing" className="px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 rounded-lg hover:bg-ink-50 transition-colors">Pricing</Link>
            <DropdownButton label="Resources" isOpen={openDropdown === 'resources'} onClick={() => toggle('resources')} />
            */}

            <Button asChild size="sm" variant="primary" className="ml-2">
              <Link href="/contact">Apply for design partner program</Link>
            </Button>
          </div>

          {/* Mobile hamburger — commented out for landing page mode
          <button className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-ink-50" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          */}
        </div>
      </div>

      {/* Product dropdown — two-column with image preview */}
      {openDropdown === 'product' && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />
          <div className="absolute left-0 right-0 z-50 border-t border-ink-200 bg-white shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-[320px_1fr] gap-8">
                {/* Left: product links */}
                <div className="flex flex-col gap-1">
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onMouseEnter={() => setHoveredProduct(p)}
                      onClick={() => setOpenDropdown(null)}
                      className={cn(
                        'group flex flex-col gap-0.5 px-4 py-3.5 rounded-xl transition-colors',
                        hoveredProduct.href === p.href ? 'bg-ink-50' : 'hover:bg-ink-50'
                      )}
                    >
                      <span className={cn(
                        'flex items-center gap-1.5 text-sm font-semibold transition-colors',
                        hoveredProduct.href === p.href ? 'text-brand-600' : 'text-ink-900 group-hover:text-brand-600'
                      )}>
                        {p.label}
                        <ArrowRight size={13} className={cn(
                          'transition-all',
                          hoveredProduct.href === p.href ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                        )} />
                      </span>
                      <span className="text-xs text-ink-500 leading-relaxed">{p.desc}</span>
                    </Link>
                  ))}
                </div>

                {/* Right: image preview */}
                <div className="relative rounded-xl overflow-hidden border border-ink-100 bg-ink-50" style={{ minHeight: '200px' }}>
                  <Image
                    key={hoveredProduct.href}
                    src={hoveredProduct.image}
                    alt={hoveredProduct.label}
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-width: 1280px) 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-semibold text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      {hoveredProduct.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Solutions / Resources dropdowns — commented out for landing page mode
      ...
      */}

      {/* Mobile menu — commented out for landing page mode
      ...
      */}
    </header>
  )
}

// Kept for when full nav is restored
/*
function MobileSection({ label, links }: { label: string; links: { href: string; label: string; desc?: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-50 rounded-lg">
        {label}
        <ChevronDown size={14} className={cn('transition-transform duration-150', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="ml-4 mt-1 space-y-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block px-3 py-2 text-sm text-ink-600 hover:text-ink-900 hover:bg-ink-50 rounded-lg">{l.label}</Link>
          ))}
        </div>
      )}
    </div>
  )
}
*/
