import Link from 'next/link'

// Footer nav data — commented out for simplified landing page mode
// Uncomment footerNav and the "Nav columns" block below to restore full footer
/*
const footerNav = [
  {
    title: 'Product',
    links: [
      { label: 'AI Merit Cycles', href: '/features/ai-merit-cycles' },
      { label: 'Compensation Agent', href: '/features/comp-agent' },
      { label: 'Flexible Compensation', href: '/features/flex-comp-engine' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Total Rewards Leaders', href: '/solutions/total-rewards-leaders' },
      { label: 'CHROs', href: '/solutions/chros' },
      { label: 'HR Operations', href: '/solutions/hr-operations' },
      { label: 'Finance & FP&A', href: '/solutions/finance-fpa' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'vs. Pave', href: '/compare/pave' },
      { label: 'vs. Benepass', href: '/compare/benepass' },
      { label: 'vs. Tedy', href: '/compare/tedy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]
*/

export function Footer() {
  return (
    <footer className="bg-ink-50 border-t border-ink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified landing page footer — brand + legal only */}
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-display font-bold text-xl tracking-tight">
            <span className="grad-text">COMPOSABLE</span>
          </Link>
          <p className="text-sm text-ink-500 leading-relaxed text-center">
            AI infrastructure for compensation.
          </p>
        </div>

        {/* Full footer grid — uncomment to restore nav columns
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="font-display font-bold text-xl tracking-tight">
              <span className="grad-text">COMPOSABLE</span>
            </Link>
            <p className="mt-3 text-sm text-ink-500 leading-relaxed max-w-[220px]">
              AI infrastructure for compensation — from merit cycles to continuous, individualized pay.
            </p>
            <p className="mt-4 text-xs text-ink-400">Made in Canada 🇨🇦</p>
          </div>
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-ink-900 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-500 hover:text-ink-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        */}

        {/* Bottom bar */}
        <div className="py-6 border-t border-ink-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400">
            © 2026 Composable Technologies Inc. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">Made in Canada 🇨🇦</p>
        </div>
      </div>
    </footer>
  )
}
