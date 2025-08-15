export const locales = ['es-419', 'es-MX', 'es-CO', 'es-CL', 'es-PE', 'en-US'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'es-419'

export interface CountryConfig {
  country: string
  countryName: string
  currency: string
  vatRate: number
  businessHours: string
  regulations: string[]
  marketSize: 'large' | 'medium' | 'small'
}

export const countryConfigs: Record<Locale, CountryConfig> = {
  'es-419': {
    country: 'MX',
    countryName: 'México',
    currency: 'MXN',
    vatRate: 0.16,
    businessHours: '9:00 - 18:00 CST',
    regulations: ['LFPDPPP', 'CFC'],
    marketSize: 'large'
  },
  'es-MX': {
    country: 'MX',
    countryName: 'México',
    currency: 'MXN',
    vatRate: 0.16,
    businessHours: '9:00 - 18:00 CST',
    regulations: ['LFPDPPP', 'CFC'],
    marketSize: 'large'
  },
  'es-CO': {
    country: 'CO',
    countryName: 'Colombia',
    currency: 'COP',
    vatRate: 0.19,
    businessHours: '8:00 - 17:00 COT',
    regulations: ['Ley 1581', 'SIC'],
    marketSize: 'medium'
  },
  'es-CL': {
    country: 'CL',
    countryName: 'Chile',
    currency: 'CLP',
    vatRate: 0.19,
    businessHours: '9:00 - 18:00 CLT',
    regulations: ['Ley 19628', 'SERNAC'],
    marketSize: 'medium'
  },
  'es-PE': {
    country: 'PE',
    countryName: 'Perú',
    currency: 'PEN',
    vatRate: 0.18,
    businessHours: '9:00 - 18:00 PET',
    regulations: ['Ley 29733', 'INDECOPI'],
    marketSize: 'medium'
  },
  'en-US': {
    country: 'US',
    countryName: 'United States',
    currency: 'USD',
    vatRate: 0.0875,
    businessHours: '9:00 AM - 5:00 PM EST',
    regulations: ['CCPA', 'SOX'],
    marketSize: 'large'
  }
}

export function getCountryConfig(locale: string): CountryConfig {
  return countryConfigs[locale as Locale] || countryConfigs[defaultLocale]
}