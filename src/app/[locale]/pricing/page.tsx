'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MarketingHeader } from '@/components/marketing-header'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getCountryConfig } from '@/i18n/config'

type PlanTier = {
  name: string;
  price: string;
  period: string;
  hours: string;
  sla: string;
  setup: string;
  description: string;
  features: string[];
  highlight?: "popular" | "value";
  highlightText?: string;
};

export default function PricingPage() {
  const t = useTranslations()
  const locale = useLocale()
  const countryConfig = getCountryConfig(locale)

  const plans: PlanTier[] = [
    {
      name: t('home.pricing.plans.launch.name'),
      price: t('home.pricing.plans.launch.price'),
      period: t('home.pricing.plans.launch.period'),
      hours: t('home.pricing.plans.launch.hours'),
      sla: t('home.pricing.plans.launch.sla'),
      setup: t('home.pricing.plans.launch.setup'),
      description: t('home.pricing.plans.launch.description'),
      features: t.raw('home.pricing.plans.launch.features')
    },
    {
      name: t('home.pricing.plans.growth.name'),
      price: t('home.pricing.plans.growth.price'),
      period: t('home.pricing.plans.growth.period'),
      hours: t('home.pricing.plans.growth.hours'),
      sla: t('home.pricing.plans.growth.sla'),
      setup: t('home.pricing.plans.growth.setup'),
      description: t('home.pricing.plans.growth.description'),
      features: t.raw('home.pricing.plans.growth.features'),
      highlight: "popular",
      highlightText: t('home.pricing.plans.growth.highlightText')
    },
    {
      name: t('home.pricing.plans.scale.name'),
      price: t('home.pricing.plans.scale.price'),
      period: t('home.pricing.plans.scale.period'),
      hours: t('home.pricing.plans.scale.hours'),
      sla: t('home.pricing.plans.scale.sla'),
      setup: t('home.pricing.plans.scale.setup'),
      description: t('home.pricing.plans.scale.description'),
      features: t.raw('home.pricing.plans.scale.features'),
      highlight: "value",
      highlightText: t('home.pricing.plans.scale.highlightText')
    },
    {
      name: t('home.pricing.plans.enterprise.name'),
      price: t('home.pricing.plans.enterprise.price'),
      period: t('home.pricing.plans.enterprise.period'),
      hours: t('home.pricing.plans.enterprise.hours'),
      sla: t('home.pricing.plans.enterprise.sla'),
      setup: t('home.pricing.plans.enterprise.setup'),
      description: t('home.pricing.plans.enterprise.description'),
      features: t.raw('home.pricing.plans.enterprise.features')
    }
  ];

  const addons = [
    {
      name: t('home.pricing.addons.datasync.name'),
      price: t('home.pricing.addons.datasync.price'),
      description: t('home.pricing.addons.datasync.description')
    },
    {
      name: t('home.pricing.addons.dashboards.name'),
      price: t('home.pricing.addons.dashboards.price'),
      description: t('home.pricing.addons.dashboards.description')
    },
    {
      name: t('home.pricing.addons.whatsapp.name'),
      price: t('home.pricing.addons.whatsapp.price'),
      description: t('home.pricing.addons.whatsapp.description')
    },
    {
      name: t('home.pricing.addons.rag.name'),
      price: t('home.pricing.addons.rag.price'),
      description: t('home.pricing.addons.rag.description')
    },
    {
      name: t('home.pricing.addons.audit.name'),
      price: t('home.pricing.addons.audit.price'),
      description: t('home.pricing.addons.audit.description')
    },
    {
      name: t('home.pricing.addons.support.name'),
      price: t('home.pricing.addons.support.price'),
      description: t('home.pricing.addons.support.description')
    }
  ];

  const systemsIA = [
    {
      name: t('home.pricing.systemsIA.appLite.name'),
      setup: t('home.pricing.systemsIA.appLite.setup'),
      mrr: t('home.pricing.systemsIA.appLite.mrr'),
      description: t('home.pricing.systemsIA.appLite.description')
    },
    {
      name: t('home.pricing.systemsIA.webApp.name'),
      setup: t('home.pricing.systemsIA.webApp.setup'),
      mrr: t('home.pricing.systemsIA.webApp.mrr'),
      description: t('home.pricing.systemsIA.webApp.description')
    },
    {
      name: t('home.pricing.systemsIA.mobileApp.name'),
      setup: t('home.pricing.systemsIA.mobileApp.setup'),
      mrr: t('home.pricing.systemsIA.mobileApp.mrr'),
      description: t('home.pricing.systemsIA.mobileApp.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <MarketingHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <header className="text-center mb-12">
          <Badge variant="outline" className="px-4 py-2 mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
            AgenteVirtual IA — Pricing
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-purple-900 to-pink-700 bg-clip-text text-transparent">
            {t('home.pricing.title')}
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            {t('home.pricing.subtitle')}
          </p>
          <Badge className="mt-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            {t('home.pricing.promoText')}
          </Badge>
        </header>

        {/* Plans Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl border p-6 flex flex-col transition-all hover:shadow-lg ${
                plan.highlight === "popular" 
                  ? "border-purple-500 shadow-lg scale-105" 
                  : plan.highlight === "value"
                  ? "border-pink-500 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                  plan.highlight === "popular" 
                    ? "bg-purple-500 hover:bg-purple-600" 
                    : "bg-pink-500 hover:bg-pink-600"
                } text-white`}>
                  {plan.highlightText}
                </Badge>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">
                  {plan.hours} · {plan.sla}
                </p>
                <p className="text-sm text-gray-500">{plan.setup}</p>
                <CardDescription className="text-sm mt-2">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <div className="mt-6">
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" 
                      : "bg-gray-900 hover:bg-gray-800"
                  } text-white`}
                  asChild
                >
                  <Link href="#contacto">
                    {t('home.pricing.cta')}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </section>

        {/* Rules Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="rounded-xl border border-gray-200 p-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t('home.pricing.rules.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>{t('home.pricing.rules.extraHours')}</li>
                <li>{t('home.pricing.rules.minContract')}</li>
                <li className="text-emerald-700 font-medium">{t('home.pricing.rules.promoSetup')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-gray-200 p-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t('home.pricing.includes.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                {t('home.pricing.includes.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-gray-200 p-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t('home.pricing.slaInfo.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                {t('home.pricing.slaInfo.description')}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Add-ons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('home.pricing.addons.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <Card key={index} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-baseline justify-between">
                    <CardTitle className="text-lg font-semibold">{addon.name}</CardTitle>
                    <span className="text-sm font-medium text-purple-700">{addon.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600">{addon.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Systems Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{t('home.pricing.systemsIA.title')}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {t('home.pricing.systemsIA.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {systemsIA.map((system, index) => (
              <Card key={index} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-baseline justify-between">
                    <CardTitle className="text-lg font-semibold">{system.name}</CardTitle>
                    <span className="text-sm font-medium text-pink-700">{system.mrr}</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">Setup {system.setup}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600">{system.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t('home.pricing.faq.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 rounded-xl p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{t('home.pricing.faq.question1.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  {t('home.pricing.faq.question1.answer')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 rounded-xl p-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{t('home.pricing.faq.question2.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  {t('home.pricing.faq.question2.answer')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-purple-900 to-pink-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para automatizar tu operación?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Programa una demo personalizada y descubre cómo podemos transformar tus procesos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" asChild>
              <Link href="#contacto">
                {t('home.pricing.cta')} <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="https://wa.me/5491124564496" target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Agente Virtual IA. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}