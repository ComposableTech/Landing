export type ThemeName =
  | 'electric-precision'
  | 'deep-forest'
  | 'monochrome-magenta'
  | 'warm-intelligence'
  | 'deep-jewel'

export interface ColorPalette {
  // Primary brand colors
  brand: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  // Accent colors
  accent: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  // Secondary/AI colors (for intelligence features)
  intelligence?: {
    400: string
    500: string
    600: string
  }
  // Base/neutral colors
  base: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    950: string
  }
}

export interface Theme {
  name: ThemeName
  label: string
  description: string
  colors: ColorPalette
}

export const themes: Record<ThemeName, Theme> = {
  'electric-precision': {
    name: 'electric-precision',
    label: 'Electric Precision',
    description: 'Technical infrastructure aesthetic with electric cyan',
    colors: {
      brand: {
        50: '#ECFEFF',
        100: '#CFFAFE',
        200: '#A5F3FC',
        300: '#67E8F9',
        400: '#22D3EE',
        500: '#06B6D4',
        600: '#0891B2',
        700: '#0E7490',
        800: '#155E75',
        900: '#164E63',
      },
      accent: {
        50: '#F7FEE7',
        100: '#ECFCCB',
        200: '#D9F99D',
        300: '#BEF264',
        400: '#A3E635',
        500: '#84CC16',
        600: '#65A30D',
        700: '#4D7C0F',
        800: '#3F6212',
        900: '#365314',
      },
      intelligence: {
        400: '#C084FC',
        500: '#A855F7',
        600: '#9333EA',
      },
      base: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        950: '#020617',
      },
    },
  },
  'deep-forest': {
    name: 'deep-forest',
    label: 'Deep Forest',
    description: 'Sophisticated green for growth and precision',
    colors: {
      brand: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
      },
      accent: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
      },
      intelligence: {
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
      },
      base: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        950: '#020617',
      },
    },
  },
  'monochrome-magenta': {
    name: 'monochrome-magenta',
    label: 'Monochrome + Magenta',
    description: 'Ultra-clean with bold magenta accent',
    colors: {
      brand: {
        50: '#FDF4FF',
        100: '#FAE8FF',
        200: '#F5D0FE',
        300: '#F0ABFC',
        400: '#E879F9',
        500: '#EC4899',
        600: '#DB2777',
        700: '#BE185D',
        800: '#9D174D',
        900: '#831843',
      },
      accent: {
        50: '#FDF4FF',
        100: '#FAE8FF',
        200: '#F5D0FE',
        300: '#F0ABFC',
        400: '#E879F9',
        500: '#EC4899',
        600: '#DB2777',
        700: '#BE185D',
        800: '#9D174D',
        900: '#831843',
      },
      intelligence: {
        400: '#E879F9',
        500: '#EC4899',
        600: '#DB2777',
      },
      base: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0A0A0A',
      },
    },
  },
  'warm-intelligence': {
    name: 'warm-intelligence',
    label: 'Warm Intelligence',
    description: 'Bold coral and amber for human-centered tech',
    colors: {
      brand: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
      },
      accent: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
      },
      intelligence: {
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
      },
      base: {
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
        950: '#09090B',
      },
    },
  },
  'deep-jewel': {
    name: 'deep-jewel',
    label: 'Deep Jewel',
    description: 'Premium teal and burgundy with gold accents',
    colors: {
      brand: {
        50: '#F0FDFA',
        100: '#CCFBF1',
        200: '#99F6E4',
        300: '#5EEAD4',
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0D9488',
        700: '#0F766E',
        800: '#115E59',
        900: '#134E4A',
      },
      accent: {
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF08A',
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12',
      },
      intelligence: {
        400: '#2DD4BF',
        500: '#14B8A6',
        600: '#0D9488',
      },
      base: {
        50: '#FAFAF9',
        100: '#F5F5F4',
        200: '#E7E5E4',
        300: '#D6D3D1',
        400: '#A8A29E',
        500: '#78716C',
        600: '#57534E',
        700: '#44403C',
        800: '#292524',
        900: '#1C1917',
        950: '#0C0A09',
      },
    },
  },
}

export function getTheme(name: ThemeName): Theme {
  return themes[name]
}

export function getAllThemes(): Theme[] {
  return Object.values(themes)
}
