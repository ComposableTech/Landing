import { Check, X, Minus } from 'lucide-react'
import { AnimateIn } from '@/components/ui/animate-in'
import type { ComparisonRow } from '@/lib/data/competitors'

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check size={18} className="text-mint-600 mx-auto" aria-label="Included" />
  if (value === false)
    return <X size={18} className="text-ink-300 mx-auto" aria-label="Not included" />
  if (value === 'N/A')
    return <Minus size={18} className="text-ink-300 mx-auto" aria-label="Not applicable" />
  return <span className="text-sm text-ink-700 font-medium">{value}</span>
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
  usName?: string
  themName?: string
}

export function ComparisonTable({ rows, usName = 'Composable', themName }: ComparisonTableProps) {
  return (
    <AnimateIn>
      <div className="overflow-x-auto rounded-2xl border border-ink-200 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-ink-200">
              <th className="text-left px-6 py-4 text-ink-500 font-medium w-2/5">Feature</th>
              <th className="px-6 py-4 text-center">
                <span className="font-display font-bold text-brand-600">{usName}</span>
              </th>
              <th className="px-6 py-4 text-center">
                <span className="font-medium text-ink-400">{themName}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={
                  i % 2 === 0 ? 'bg-white' : 'bg-ink-50'
                }
              >
                <td className="px-6 py-4 text-ink-800 font-medium text-left">{row.feature}</td>
                <td className="px-6 py-4 text-center bg-brand-50/50">
                  <CellValue value={row.us} />
                </td>
                <td className="px-6 py-4 text-center">
                  <CellValue value={row.them} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimateIn>
  )
}
