import { useLocale } from 'next-intl'

export function StructuredData() {
  const locale = useLocale()
  const isSpanish = locale.startsWith('es')

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agente Virtual IA',
    alternateName: 'Virtual AI Agent',
    url: 'https://agentevirtualia.com',
    logo: 'https://agentevirtualia.com/logo.png',
    description: isSpanish
      ? 'Plataforma de automatización empresarial sin código. Transforma procesos manuales en workflows automatizados.'
      : 'No-code business automation platform. Transform manual processes into automated workflows.',
    sameAs: [
      'https://twitter.com/agentevirtualia',
      'https://linkedin.com/company/agentevirtualia'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-55-1234-5678',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX'
    }
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Agente Virtual IA',
    description: isSpanish
      ? 'Plataforma de automatización empresarial sin código que permite a las empresas automatizar procesos manuales mediante workflows inteligentes.'
      : 'No-code business automation platform that enables companies to automate manual processes through intelligent workflows.',
    url: 'https://agentevirtualia.com',
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: isSpanish ? 'Plan gratuito disponible' : 'Free plan available'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agente Virtual IA'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    }
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isSpanish ? 'Inicio' : 'Home',
        item: `https://agentevirtualia.com/${locale}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}