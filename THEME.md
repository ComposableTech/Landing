# Composable Brand Theme — Warm Intelligence

This document defines the Warm Intelligence color palette used across Composable's landing page and demo applications.

## Philosophy

The Warm Intelligence palette uses **bold, warm colors** (coral/red + amber) to stand out from competitors' purple/blue themes while maintaining enterprise credibility. The warm tones communicate urgency, human-centered design, and timely action — core to our "just-in-time compensation" positioning.

---

## Primary Brand Colors

### Brand (Coral/Red)
Primary interactive color, urgency, retention focus

```
50:  #FEF2F2
100: #FEE2E2
200: #FECACA
300: #FCA5A5
400: #F87171
500: #EF4444  ← Primary
600: #DC2626  ← Primary Dark
700: #B91C1C
800: #991B1B
900: #7F1D1D
```

**Usage:**
- Primary CTA buttons
- Interactive elements (links, buttons)
- Hover states
- Accent highlights
- "High Risk" badges

---

### Accent (Amber)
Secondary color, value/savings indicators

```
50:  #FFFBEB
100: #FEF3C7
200: #FDE68A
300: #FCD34D
400: #FBBF24
500: #F59E0B  ← Accent Primary
600: #D97706  ← Accent Dark
700: #B45309
800: #92400E
900: #78350F
```

**Usage:**
- Savings/efficiency metrics
- "High Risk" amber badges
- Secondary CTAs
- Success states
- Positive outcome highlights

---

### Intelligence (AI Features)
For AI-specific features and smart recommendations

```
400: #F87171  ← Red-400
500: #EF4444  ← Red-500
600: #DC2626  ← Red-600
```

**Usage:**
- AI-generated content indicators
- "Advisor Rationale" sections
- Smart recommendation badges
- Sparkle/AI icons

---

## Neutral Colors (Base/Ink)

### Zinc Scale
Warm gray neutrals (warmer than slate, cooler than stone)

```
50:  #FAFAFA  ← Page backgrounds
100: #F4F4F5  ← Card interiors, subtle fills
200: #E4E4E7  ← Borders, dividers
300: #D4D4D8
400: #A1A1AA  ← Disabled states
500: #71717A  ← Muted text
600: #52525B  ← Secondary text
700: #3F3F46
800: #27272A  ← Headers, dark surfaces
900: #18181B  ← Primary text, footers
950: #09090B  ← Deepest dark
```

**Usage:**
- Text hierarchy (900 → 500 from primary to muted)
- Borders and dividers (200)
- Card backgrounds (100, 50)
- Dark surfaces (800, 900)

---

## Gradients

### Primary Brand Gradient
```css
linear-gradient(to right, #EF4444, #DC2626, #B91C1C)
/* Coral → Deep Red → Burgundy */
```

### Multi-color Brand Gradient
```css
linear-gradient(90deg, #EF4444 0%, #F59E0B 30%, #DC2626 65%, #D97706 100%)
/* Coral → Amber → Red → Deep Amber */
```

### Background Glow Gradient
```css
linear-gradient(to right, var(--color-brand-200), var(--color-intelligence-200), var(--color-accent-200))
/* Soft coral → Soft red → Soft amber */
```

---

## CSS Variables

These are applied via theme-provider.tsx and globals.css:

```css
/* Brand Colors */
--color-brand-50:  #FEF2F2
--color-brand-100: #FEE2E2
--color-brand-200: #FECACA
--color-brand-300: #FCA5A5
--color-brand-400: #F87171
--color-brand-500: #EF4444
--color-brand-600: #DC2626
--color-brand-700: #B91C1C
--color-brand-800: #991B1B
--color-brand-900: #7F1D1D

/* Accent Colors */
--color-accent-50:  #FFFBEB
--color-accent-100: #FEF3C7
--color-accent-200: #FDE68A
--color-accent-300: #FCD34D
--color-accent-400: #FBBF24
--color-accent-500: #F59E0B
--color-accent-600: #D97706
--color-accent-700: #B45309
--color-accent-800: #92400E
--color-accent-900: #78350F

/* Intelligence/AI Colors */
--color-intelligence-400: #F87171
--color-intelligence-500: #EF4444
--color-intelligence-600: #DC2626

/* Base/Ink Colors */
--color-ink-50:  #FAFAFA
--color-ink-100: #F4F4F5
--color-ink-200: #E4E4E7
--color-ink-300: #D4D4D8
--color-ink-400: #A1A1AA
--color-ink-500: #71717A
--color-ink-600: #52525B
--color-ink-700: #3F3F46
--color-ink-800: #27272A
--color-ink-900: #18181B
--color-ink-950: #09090B
```

---

## Tailwind Class Examples

```jsx
// Text colors
className="text-brand-600"      // Primary coral
className="text-accent-600"     // Amber
className="text-ink-900"        // Primary text
className="text-ink-600"        // Secondary text
className="text-ink-500"        // Muted text

// Background colors
className="bg-brand-500"        // Primary button
className="bg-accent-50"        // Subtle amber tint
className="bg-ink-50"          // Light background
className="bg-ink-900"         // Dark header/footer

// Borders
className="border-brand-200"    // Soft coral border
className="border-ink-200"     // Neutral border

// Gradients
className="bg-gradient-to-r from-brand-500 to-accent-500"
className="bg-gradient-to-br from-brand-50 to-intelligence-50"
```

---

## Color Accessibility

### WCAG AA Compliance

**Text on White (#FFFFFF):**
- ✅ `brand-600` (#DC2626) — AA compliant
- ✅ `accent-600` (#D97706) — AA compliant
- ✅ `ink-900` (#18181B) — AAA compliant
- ✅ `ink-600` (#52525B) — AA compliant

**White Text on Brand:**
- ✅ White on `brand-500` (#EF4444) — AA compliant
- ✅ White on `brand-600` (#DC2626) — AAA compliant
- ✅ White on `accent-600` (#D97706) — AA compliant

---

## Competitor Differentiation

| Competitor | Primary Color | Our Advantage |
|------------|---------------|---------------|
| Compa.ai | Navy Blue | Warm vs. cool |
| Pave.com | Purple/Violet | Bold vs. muted |
| Compport | Purple/Pink | Urgent vs. calm |
| Linear | Purple/Blue | Human vs. technical |

**Result:** Zero competitors use warm colors. We own the warm, urgent, human-centered aesthetic in the comp tech space.

---

## Implementation Notes

1. **Theme System:** Colors are defined in `lib/themes.ts` and applied via `components/theme-provider.tsx`
2. **CSS Variables:** Set in `app/globals.css` with Warm Intelligence as default
3. **Tailwind:** CSS variables are automatically available as Tailwind classes
4. **Demo App:** Same colors applied in `composable-demo/domain/brands/index.ts`

---

**Last Updated:** 2026-05-07  
**Version:** 1.0 (Warm Intelligence)
