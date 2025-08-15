'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MarketingHeader } from '@/components/marketing-header'
import { MapPin, Mail, Phone, Shield } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />
      
      <main className="flex-1">
        <div className="space-y-16 py-8 px-4 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-2">
                {t('header.badge')} México
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {t('header.title')}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('header.subtitle')}
              </p>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} />
                </div>
                <CardTitle>Oficina Principal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ciudad de México, México<br />
                  Distrito de Negocios<br />
                  Edificio Corporativo
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} />
                </div>
                <CardTitle>Contacto por Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ventas: ventas@agentevirtualia.com<br />
                  Soporte: soporte@agentevirtualia.com<br />
                  General: hola@agentevirtualia.com
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Shield size={24} />
                </div>
                <CardTitle>Cumplimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  LFPDPPP Certified<br />
                  ISO 27001 Compliant<br />
                  SOC 2 Type II
                </CardDescription>
              </CardContent>
            </Card>
          </section>

          {/* Contact Form */}
          <section className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t('form.title')}</CardTitle>
                <CardDescription>
                  {t('form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre *</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tamaño de empresa</label>
                  <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Selecciona una opción</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="201-1000">201-1000 empleados</option>
                    <option value="1000+">1000+ empleados</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje *</label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
                    placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  Enviar Mensaje
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestros términos y política de privacidad.
                  Te responderemos en menos de 24 horas.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-8 bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold">
              ¿Prefieres una llamada?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agenda una llamada de 15 minutos con nuestro equipo para una demo personalizada.
            </p>
            <Button size="lg" variant="outline">
              Agendar Demo
            </Button>
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