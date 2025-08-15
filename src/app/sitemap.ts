import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agentevirtualia.com'
  
  const routes = ['', '/pricing', '/contact']
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add routes for each locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${baseUrl}/${loc}${route}`])
          )
        }
      })
    }
  }
  
  return sitemapEntries
}