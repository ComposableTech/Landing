import { useState, useEffect } from 'react'

export type Country = 'US' | 'CA'

const CA_TIMEZONES = new Set([
  'America/Toronto',
  'America/Vancouver',
  'America/Edmonton',
  'America/Winnipeg',
  'America/Halifax',
  'America/St_Johns',
  'America/Moncton',
  'America/Glace_Bay',
  'America/Goose_Bay',
  'America/Blanc-Sablon',
  'America/Atikokan',
  'America/Nipigon',
  'America/Thunder_Bay',
  'America/Rainy_River',
  'America/Rankin_Inlet',
  'America/Resolute',
  'America/Regina',
  'America/Swift_Current',
  'America/Creston',
  'America/Dawson_Creek',
  'America/Fort_Nelson',
  'America/Inuvik',
  'America/Dawson',
  'America/Whitehorse',
])

function detectByTimezone(): Country {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return CA_TIMEZONES.has(tz) ? 'CA' : 'US'
  } catch {
    return 'US'
  }
}

export function useCountry(): Country {
  const [country, setCountry] = useState<Country>('US')

  useEffect(() => {
    setCountry(detectByTimezone())
  }, [])

  return country
}
