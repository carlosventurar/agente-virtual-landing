'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'
import { getCountryConfig } from '@/i18n/config'

export function MarketingHeader() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const countryConfig = getCountryConfig(locale)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: t('home'), href: '/' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('contact'), href: '/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-white">
                <span className="text-sm font-bold">IA</span>
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-semibold">Agente Virtual IA</div>
                <div className="text-xs text-muted-foreground">Automatización Empresarial</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center gap-2 px-3 py-1 border rounded-md text-sm">
              <Globe className="h-4 w-4" />
              {countryConfig.country}
            </div>

            {/* Login Button */}
            <Button variant="outline" asChild>
              <Link href="https://app.agentevirtualia.com/auth">
                {t('login')}
              </Link>
            </Button>

            {/* Get Started Button */}
            <Button asChild>
              <Link href="https://app.agentevirtualia.com/auth">
                {t('getStarted')}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="py-4 space-y-4">
              {/* Mobile Navigation */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTAs */}
              <div className="px-3 py-2 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://app.agentevirtualia.com/auth" onClick={() => setMobileMenuOpen(false)}>
                    {t('login')}
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="https://app.agentevirtualia.com/auth" onClick={() => setMobileMenuOpen(false)}>
                    {t('getStarted')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}