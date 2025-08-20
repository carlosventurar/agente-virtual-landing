'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Menu,
  X,
  Bot
} from 'lucide-react'
import Link from 'next/link'
import { getCountryConfig } from '@/i18n/config'

export function MarketingHeader() {
  const t = useTranslations()
  const locale = useLocale()
  const countryConfig = getCountryConfig(locale)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    // In a real implementation, you would handle language switching here
    console.log('Language toggle clicked')
  }

  const navigationItems = [
    { name: t('navigation.home'), href: '#' },
    { name: t('navigation.howItWorks'), href: '#como-funciona' },
    { name: t('navigation.pricing'), href: '#precios' },
    { name: t('navigation.contact'), href: '#contacto' }
  ]

  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-pink-500 p-2 rounded-lg">
          <Bot size={24} className="text-white" />
        </div>
        <span className="text-xl font-semibold text-white">Asistente Virtual IA</span>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleLanguage} 
          className="flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
          aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <Globe size={20} className="text-white" />
        </button>
        <nav className="hidden md:flex gap-6">
          {navigationItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-white/80 hover:text-white">
              {item.name}
            </Link>
          ))}
        </nav>
        <Link href="#contacto" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-sm hidden md:block">
          {t('home.hero.startFree')}
        </Link>
        
        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="sm"
          className="md:hidden bg-white/10 hover:bg-white/20 border-white/30 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-purple-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-3 py-2">
              <Link 
                href="#contacto" 
                className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home.hero.startFree')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}