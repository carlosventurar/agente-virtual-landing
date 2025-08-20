'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MarketingHeader } from '@/components/marketing-header'
import { 
  Bot, 
  Calculator, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  ChevronRight,
  MessageSquare,
  Mail,
  PhoneCall,
  Database,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  X,
  Rocket,
  Shield,
  Star,
  Calendar,
  Users,
  RefreshCw,
  Coffee,
  Check,
  Timer,
  Hourglass,
  Bug,
  Repeat,
  TrendingUp,
  Upload,
  Medal,
  Building2,
  MonitorSmartphone,
  UserCog,
  BellRing,
  AlertCircle,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import { getCountryConfig } from '@/i18n/config'
import { StructuredData } from '@/components/structured-data'

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale()
  const countryConfig = getCountryConfig(locale)
  const [showMobileCta, setShowMobileCta] = useState(false)
  const [showNotificationBar, setShowNotificationBar] = useState(true)

  // Handle scroll for sticky mobile CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowMobileCta(scrollPosition > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeNotificationBar = () => {
    setShowNotificationBar(false)
  }

  return (
    <>
      <div className="text-gray-800 font-sans">
        <StructuredData />
        
        {/* Notification Bar */}
        {showNotificationBar && (
          <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-2 px-4 text-center relative">
            <p className="text-sm font-medium">{t('notificationBar')}</p>
            <button 
              onClick={closeNotificationBar} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Close notification"
            >
              <X size={18} />
            </button>
          </div>
        )}
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <MarketingHeader />
          <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <Badge variant="outline" className="px-4 py-2 mb-4 bg-white/10 text-white border-white/30">
                {t('home.hero.badge')} {countryConfig.countryName}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t('home.hero.title')}<br />
                <span className="text-pink-400">{t('home.hero.subtitle')}</span>
              </h1>
              
              <p className="text-lg text-white/90 mb-8 max-w-xl">
                {t('home.hero.description')}
              </p>
              
              <ul className="mb-8 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="bg-pink-500/20 p-1 rounded-full">
                    <Check size={16} className="text-pink-300" />
                  </div>
                  <span className="text-white/90">{t('home.hero.benefits.benefit1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-pink-500/20 p-1 rounded-full">
                    <Check size={16} className="text-pink-300" />
                  </div>
                  <span className="text-white/90">{t('home.hero.benefits.benefit2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="bg-pink-500/20 p-1 rounded-full">
                    <Check size={16} className="text-pink-300" />
                  </div>
                  <span className="text-white/90">{t('home.hero.benefits.benefit3')}</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white gap-2" asChild>
                  <Link href="#contacto">
                    {t('home.hero.startFree')} <ChevronRight size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-600 gap-2" asChild>
                  <Link href="https://wa.me/5491124564496?text=Hola,%20me%20interesa%20saber%20más%20sobre%20el%20asistente%20virtual" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={18} /> {t('home.hero.viewDemo')}
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">200+</span>
                  <span className="text-sm text-white/70">{t('home.hero.stats.clients')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">24/7</span>
                  <span className="text-sm text-white/70">{t('home.hero.stats.availability')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">99%</span>
                  <span className="text-sm text-white/70">{t('home.hero.stats.satisfaction')}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Profesional sonriendo con laptop" 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -right-5 top-20 bg-white rounded-lg shadow-lg p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">Task automated successfully</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wasting Time Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{t('home.wastingTime.title')}</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hourglass size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.wastingTime.problem1')}</h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bug size={32} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.wastingTime.problem2')}</h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.wastingTime.problem3')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Is It For You */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t('home.isForYou.title')}</h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">
              <div className="md:w-1/2">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <Check size={20} className="text-green-600" />
                    </div>
                    <span className="text-lg">{t('home.isForYou.point1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <Check size={20} className="text-green-600" />
                    </div>
                    <span className="text-lg">{t('home.isForYou.point2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <Check size={20} className="text-green-600" />
                    </div>
                    <span className="text-lg">{t('home.isForYou.point3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      <Check size={20} className="text-green-600" />
                    </div>
                    <span className="text-lg">{t('home.isForYou.point4')}</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white gap-2" asChild>
                    <Link href="#contacto">
                      {t('home.isForYou.cta')}
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Personas trabajando en coworking" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-white" id="como-funciona">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-3">{t('home.howItWorks.title')}</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              {t('home.howItWorks.subtitle')}
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="bg-white p-8 rounded-xl text-center max-w-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                  <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('home.howItWorks.step1.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.howItWorks.step1.description')}</p>
              </div>
              
              <div className="hidden md:block text-gray-300">
                <ChevronRight size={48} />
              </div>
              
              <div className="bg-white p-8 rounded-xl text-center max-w-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                  <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('home.howItWorks.step2.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.howItWorks.step2.description')}</p>
              </div>
              
              <div className="hidden md:block text-gray-300">
                <ChevronRight size={48} />
              </div>
              
              <div className="bg-white p-8 rounded-xl text-center max-w-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                  <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                    <span className="font-bold">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('home.howItWorks.step3.title')}</h3>
                <p className="text-gray-600 mb-4">{t('home.howItWorks.step3.description')}</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white gap-2" asChild>
                <Link href="#contacto">
                  {t('home.howItWorks.cta')} <ChevronRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-3">{t('home.industries.title')}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('home.industries.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <ShoppingCart size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.industries.ecommerce.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.industries.ecommerce.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Stethoscope size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.industries.health.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.industries.health.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <GraduationCap size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.industries.education.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.industries.education.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Users size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('home.industries.services.title')}</h3>
                <p className="text-gray-600 text-sm">{t('home.industries.services.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-3">{t('home.testimonials.title')}</h2>
            <p className="text-center text-white/80 mb-16 max-w-xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-white/10">
                <div className="flex mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" 
                    alt={t('home.testimonials.testimonial1.name')} 
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold">{t('home.testimonials.testimonial1.name')}</p>
                    <p className="text-white/70 text-sm">{t('home.testimonials.testimonial1.role')}</p>
                    <p className="text-white/50 text-xs">{t('home.testimonials.testimonial1.company')}</p>
                  </div>
                </div>
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/90">
                  {t('home.testimonials.testimonial1.text')}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-white/10">
                <div className="flex mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" 
                    alt={t('home.testimonials.testimonial2.name')} 
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold">{t('home.testimonials.testimonial2.name')}</p>
                    <p className="text-white/70 text-sm">{t('home.testimonials.testimonial2.role')}</p>
                    <p className="text-white/50 text-xs">{t('home.testimonials.testimonial2.company')}</p>
                  </div>
                </div>
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/90">
                  {t('home.testimonials.testimonial2.text')}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-white/10">
                <div className="flex mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" 
                    alt={t('home.testimonials.testimonial3.name')} 
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold">{t('home.testimonials.testimonial3.name')}</p>
                    <p className="text-white/70 text-sm">{t('home.testimonials.testimonial3.role')}</p>
                    <p className="text-white/50 text-xs">{t('home.testimonials.testimonial3.company')}</p>
                  </div>
                </div>
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/90">
                  {t('home.testimonials.testimonial3.text')}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm py-3 px-6 rounded-full">
                <p className="text-white font-medium">{t('home.testimonials.metric')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm py-3 px-6 rounded-full">
                <p className="text-white font-medium">{t('home.testimonials.rating')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-900 text-white" id="precios">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-3">{t('home.pricing.title')}</h2>
            <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
              {t('home.pricing.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Launch Plan */}
              <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 flex flex-col transform transition-transform hover:scale-105 hover:shadow-intense">
                <div className="p-6 border-b border-gray-700">
                  <p className="uppercase text-xs font-semibold tracking-wider text-pink-500 mb-2">{t('home.pricing.plans.launch.name')}</p>
                  <h3 className="text-2xl font-bold mb-4">{t('home.pricing.plans.launch.price')}<span className="text-sm text-white/60">{t('home.pricing.plans.launch.period')}</span></h3>
                  <p className="text-white/70 text-sm">{t('home.pricing.plans.launch.description')}</p>
                  <p className="text-white/50 text-xs mt-2">{t('home.pricing.plans.launch.hours')} · {t('home.pricing.plans.launch.sla')}</p>
                </div>
                
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {t.raw('home.pricing.plans.launch.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white" asChild>
                    <Link href="#contacto">
                      {t('home.pricing.cta')}
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-white/50 mt-4">{t('home.pricing.plans.launch.setup')}</p>
                </div>
              </div>
              
              {/* Growth Plan */}
              <div className="bg-gray-800 rounded-xl overflow-hidden border-2 border-pink-500 flex flex-col relative transform transition-transform hover:scale-105 hover:shadow-intense z-10">
                <div className="absolute -top-4 right-0 left-0 mx-auto w-max bg-pink-500 text-white px-4 py-1 text-xs font-semibold rounded-full">
                  {t('home.pricing.plans.growth.highlightText')}
                </div>
                <div className="p-6 border-b border-gray-700">
                  <p className="uppercase text-xs font-semibold tracking-wider text-pink-500 mb-2">{t('home.pricing.plans.growth.name')}</p>
                  <h3 className="text-2xl font-bold mb-4">{t('home.pricing.plans.growth.price')}<span className="text-sm text-white/60">{t('home.pricing.plans.growth.period')}</span></h3>
                  <p className="text-white/70 text-sm">{t('home.pricing.plans.growth.description')}</p>
                  <p className="text-white/50 text-xs mt-2">{t('home.pricing.plans.growth.hours')} · {t('home.pricing.plans.growth.sla')}</p>
                </div>
                
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {t.raw('home.pricing.plans.growth.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-lg" asChild>
                    <Link href="#contacto">
                      {t('home.pricing.cta')}
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-white/50 mt-4">{t('home.pricing.plans.growth.setup')}</p>
                </div>
              </div>
              
              {/* Scale Plan */}
              <div className="bg-gray-800 rounded-xl overflow-hidden border border-purple-500 flex flex-col transform transition-transform hover:scale-105 hover:shadow-intense">
                <div className="p-6 border-b border-gray-700">
                  <p className="uppercase text-xs font-semibold tracking-wider text-purple-500 mb-2">{t('home.pricing.plans.scale.name')}</p>
                  <h3 className="text-2xl font-bold mb-4">{t('home.pricing.plans.scale.price')}<span className="text-sm text-white/60">{t('home.pricing.plans.scale.period')}</span></h3>
                  <p className="text-white/70 text-sm">{t('home.pricing.plans.scale.description')}</p>
                  <p className="text-white/50 text-xs mt-2">{t('home.pricing.plans.scale.hours')} · {t('home.pricing.plans.scale.sla')}</p>
                  <div className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded mt-2">{t('home.pricing.plans.scale.highlightText')}</div>
                </div>
                
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {t.raw('home.pricing.plans.scale.features').map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white" asChild>
                    <Link href="#contacto">
                      {t('home.pricing.cta')}
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-white/50 mt-4">
                    {t('home.pricing.plans.scale.setup')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/pricing" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-colors"
              >
                Ver todos los planes <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Integration Logos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-4">{t('home.integrations.title')}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('home.integrations.subtitle')}
            </p>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {[
                { icon: MessageSquare, name: 'WhatsApp', color: 'text-green-600' },
                { icon: Mail, name: 'Gmail', color: 'text-blue-600' },
                { icon: Users, name: 'Notion', color: 'text-pink-600' },
                { icon: Database, name: 'Zapier', color: 'text-purple-600' },
                { icon: Calendar, name: 'Calendly', color: 'text-blue-600' },
                { icon: Mail, name: 'Email', color: 'text-red-600' },
                { icon: MessageSquare, name: 'Slack', color: 'text-indigo-600' },
                { icon: Users, name: 'Facebook', color: 'text-blue-600' },
                { icon: ShoppingCart, name: 'Shopify', color: 'text-orange-600' },
                { icon: Database, name: 'Sheets', color: 'text-gray-600' }
              ].map((integration, index) => {
                const Icon = integration.icon
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                      <Icon size={28} className={integration.color} />
                    </div>
                    <span className="mt-2 text-sm text-gray-600">{integration.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-to-br from-purple-900 to-pink-700 text-white" id="contacto">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">{t('contact.title')}</h2>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
            
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <form className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white focus:ring-pink-500 focus:border-pink-500 placeholder-white/50"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white focus:ring-pink-500 focus:border-pink-500 placeholder-white/50"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white focus:ring-pink-500 focus:border-pink-500 placeholder-white/50"
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="automation" className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.interest')}
                      </label>
                      <select
                        id="automation"
                        name="automation"
                        className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white focus:ring-pink-500 focus:border-pink-500"
                      >
                        <option value="whatsapp">{t('contact.form.interestOptions.whatsapp')}</option>
                        <option value="email">{t('contact.form.interestOptions.email')}</option>
                        <option value="sales">{t('contact.form.interestOptions.sales')}</option>
                        <option value="operations">{t('contact.form.interestOptions.operations')}</option>
                        <option value="other">{t('contact.form.interestOptions.other')}</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white focus:ring-pink-500 focus:border-pink-500 placeholder-white/50"
                        placeholder={t('contact.form.messagePlaceholder')}
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2 flex items-start mb-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        className="mt-1 h-4 w-4 text-pink-600 border-white/30 rounded focus:ring-pink-500 bg-white/10"
                      />
                      <label htmlFor="newsletter" className="ml-2 block text-sm text-white/80">
                        {t('contact.form.newsletter')}
                      </label>
                    </div>
                    
                    <div className="md:col-span-2 flex items-start mb-2">
                      <input
                        type="checkbox"
                        id="whatsappPreferred"
                        name="whatsappPreferred"
                        className="mt-1 h-4 w-4 text-pink-600 border-white/30 rounded focus:ring-pink-500 bg-white/10"
                      />
                      <label htmlFor="whatsappPreferred" className="ml-2 block text-sm text-white/80">
                        {t('contact.form.whatsappPreferred')}
                      </label>
                    </div>
                    
                    <div className="md:col-span-2">
                      <Button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold shadow-md"
                      >
                        {t('contact.form.submit')}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Profesional sonriendo con laptop" 
                  className="rounded-xl shadow-lg h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-pink-500 p-2 rounded-lg">
                    <Bot size={24} className="text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Asistente Virtual IA</span>
                </div>
                <p className="text-sm mb-4">
                  {t('footer.description')}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-white text-lg mb-4">{t('footer.quickLinks')}</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-white transition-colors">{t('navigation.home')}</Link></li>
                  <li><Link href="#como-funciona" className="hover:text-white transition-colors">{t('navigation.howItWorks')}</Link></li>
                  <li><Link href="#precios" className="hover:text-white transition-colors">{t('navigation.pricing')}</Link></li>
                  <li><Link href="#contacto" className="hover:text-white transition-colors">{t('navigation.contact')}</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-white text-lg mb-4">{t('footer.legal')}</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">{t('footer.termsOfService')}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">{t('footer.faq')}</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-white text-lg mb-4">{t('footer.contactInfo')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>info@asistenteai.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PhoneCall size={16} />
                    <span>+54 11 5678 9012</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare size={16} />
                    <span>WhatsApp: +54 9 11 2345 6789</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Timer size={16} />
                    <span>{t('footer.businessHours')}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p>© {new Date().getFullYear()} Asistente Virtual IA. {t('footer.copyright')}</p>
            </div>
          </div>
        </footer>
        
        {/* Sticky Mobile CTA */}
        {showMobileCta && (
          <div className="fixed bottom-0 left-0 right-0 md:hidden bg-pink-500 py-4 px-4 shadow-lg z-50 animate-fade-in-up">
            <Link 
              href="#contacto" 
              className="block text-center text-white font-bold py-3 bg-white/20 rounded-lg"
            >
              {t('mobileCta')}
            </Link>
          </div>
        )}
      </div>
      
      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/5491124564496"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-intense hover:bg-green-600 transition-all duration-300 z-50 flex items-center gap-2"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">{t('whatsappContact')}</span>
      </Link>
    </>
  )
}