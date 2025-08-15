'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MarketingHeader } from '@/components/marketing-header'
import { CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import { getCountryConfig } from '@/i18n/config'

export default function PricingPage() {
  const t = useTranslations('home.pricing')
  const locale = useLocale()
  const countryConfig = getCountryConfig(locale)

  const pricingPlans = [
    {
      name: t('plans.starter.name'),
      price: t('plans.starter.price'),
      description: t('plans.starter.description'),
      features: [
        t('plans.starter.features.users'),
        t('plans.starter.features.executions'),
        t('plans.starter.features.workflows'),
        t('plans.starter.features.support')
      ],
      button: t('plans.starter.button'),
      recommended: false
    },
    {
      name: t('plans.pro.name'),
      price: t('plans.pro.price'),
      description: t('plans.pro.description'),
      features: [
        t('plans.pro.features.users'),
        t('plans.pro.features.executions'), 
        t('plans.pro.features.workflows'),
        t('plans.pro.features.support')
      ],
      button: t('plans.pro.button'),
      recommended: true,
      recommendedText: t('plans.pro.popular')
    },
    {
      name: t('plans.enterprise.name'),
      price: t('plans.enterprise.price'),
      description: t('plans.enterprise.description'),
      features: [
        t('plans.enterprise.features.unlimited'),
        t('plans.enterprise.features.support'),
        t('plans.enterprise.features.sla'),
        t('plans.enterprise.features.customization')
      ],
      button: t('plans.enterprise.button'),
      recommended: false
    }
  ]

  const addOns = [
    {
      name: "Ejecuciones Adicionales",
      description: "1,000 ejecuciones adicionales por mes",
      price: "$5 USD"
    },
    {
      name: "Usuarios Adicionales",
      description: "Por usuario adicional por mes",
      price: "$10 USD"
    },
    {
      name: "Soporte Premium",
      description: "Soporte dedicado 24/7 con SLA garantizado",
      price: "$50 USD"
    },
    {
      name: "Personalización",
      description: "Workflows personalizados y consultoría",
      price: "Cotización"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />
      
      <main className="flex-1">
        <div className="space-y-16 py-8 px-4 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-2">
                Planes para {countryConfig.countryName}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {t('title')}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('subtitle')}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {t('taxNote', { currency: countryConfig.currency, taxRate: countryConfig.vatRate * 100 })}
              </p>
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.recommended ? 'border-primary shadow-xl scale-105' : ''}`}>
                {plan.recommended && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 gap-1">
                    <Star size={12} />
                    {plan.recommendedText}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  {plan.price !== 'Gratis' && plan.price !== 'Free' && !plan.price.includes('Cotización') && (
                    <p className="text-sm text-muted-foreground">por usuario/mes</p>
                  )}
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.recommended ? 'default' : 'outline'} 
                    size="lg"
                    asChild
                  >
                    <Link href="https://app.agentevirtualia.com/auth">
                      {plan.button}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Add-ons Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Complementos Opcionales</h2>
              <p className="text-xl text-muted-foreground">
                Expande tu plan con características adicionales según tus necesidades
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{addon.price}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{addon.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
              <p className="text-xl text-muted-foreground">
                Respuestas a las preguntas más comunes sobre nuestros planes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Puedo cambiar de plan en cualquier momento?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente y se facturan proporcionalmente.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Qué sucede si excedo mi límite de ejecuciones?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tienes opciones: puedes comprar ejecuciones adicionales por $5 USD por cada 1,000 ejecuciones, o actualizar a un plan superior.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Ofrecen descuentos por pago anual?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Sí, ofrecemos 2 meses gratis al pagar anualmente en los planes Pro y Enterprise. Contacta ventas para más detalles.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">¿Incluyen soporte técnico?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Todos los planes incluyen soporte estándar por email. Los planes Pro y Enterprise incluyen soporte prioritario y chat en vivo.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-8 bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Únete a cientos de empresas que ya automatizan sus procesos con Agente Virtual IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://app.agentevirtualia.com/auth">
                  Comenzar Gratis
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contactar Ventas
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-secondary/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Agente Virtual IA. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}